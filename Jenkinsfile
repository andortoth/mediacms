pipeline {
	agent any
	options {
        disableConcurrentBuilds()
    }
	parameters {
		booleanParam(name: 'PUSH', defaultValue: true, description: 'True if should be pushed to Docker Registry')
		choice(name: 'DEPLOY_ENV', choices: ['test', 'production'], description: 'The target environment to deploy to') 
		booleanParam(name: 'DEPLOY', defaultValue: true, description: 'True if should be deployed to the selected environment')
	}
	triggers {
		pollSCM('H 6 * * *')
		
    }
	
	
	stages {
		
		
        stage('Build Docker image') {
			
			steps {
				withCredentials([usernamePassword(credentialsId: 'DockerRegistry', passwordVariable: 'DOCKER_REGISTRY_PWD', usernameVariable: 'DOCKER_REGISTRY_USER')]) {
					
					sh "docker build . -f ./Dockerfile -t registry.pixelupgrade.hu/astamangala/mediacms:1.0.${env.BUILD_NUMBER} -t registry.pixelupgrade.hu/astamangala/mediacms:latest --pull --load"
				}
			}
            
        }
		
        
		
		stage('Push to Docker Hub') {
			when {
                expression { params.PUSH}
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'DockerRegistry', passwordVariable: 'DOCKER_REGISTRY_PWD', usernameVariable: 'DOCKER_REGISTRY_USER')]) {
					sh "docker login registry.pixelupgrade.hu -u $DOCKER_REGISTRY_USER -p $DOCKER_REGISTRY_PWD"

					sh "docker push registry.pixelupgrade.hu/astamangala/mediacms:latest"
					sh "docker push registry.pixelupgrade.hu/astamangala/mediacms:1.0.${env.BUILD_NUMBER}"
				}
            }
        }
		
		
		
		
		
		stage('Deploy images to test server') {
			when {
                expression { params.DEPLOY && params.DEPLOY_ENV=='test'}
            }
			
            steps {
				sh "cd /opt/mediacms && docker compose pull && docker compose down && docker compose up -d"
				
            }
        }
		
		stage('Deploy images to production') {
			when {
                expression { params.DEPLOY && params.DEPLOY_ENV=='production'}
            }
			environment {
                CI_CLOUDRON = credentials('Cloudron')
            }
            steps {
				sh "sh ./deploy-prod-cloudron-ci.sh"
				
            }
        }
    }
    post {
        success {
			echo 'Successful build post actions...'
			
        }
        failure {
            echo 'Failure post actions...'
			
        }
        unstable {
            echo 'Unstable post actions...'
						
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}
