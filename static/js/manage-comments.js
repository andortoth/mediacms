!function(){"use strict";var t,e={25381:function(t,e,n){var r=n(92541),o=(n(25101),n(13080),n(52004),n(28407),n(56394),n(38288),n(55677),n(92129),n(24655),n(35466)),i=n(3074),u=n.n(i),a=n(43613),c=n(20541),l=n(25910),s=n(9700);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e,n){return t+"?"+e+(""===e?"":"&")+"page="+n}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(f,t);var e,n,r,i,u=(r=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(r);if(i){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return y(this,t)});function f(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(e=u.call(this,t,"manage-comments")).state={resultsCount:null,requestUrl:a.ApiUrlContext._currentValue.manage.comments,currentPage:1,sortingArgs:"",sortBy:"add_date",ordering:"desc",refresh:0},e.getCountFunc=e.getCountFunc.bind(d(e)),e.onTablePageChange=e.onTablePageChange.bind(d(e)),e.onColumnSortClick=e.onColumnSortClick.bind(d(e)),e.onItemsRemoval=e.onItemsRemoval.bind(d(e)),e.onItemsRemovalFail=e.onItemsRemovalFail.bind(d(e)),e}return e=f,(n=[{key:"onTablePageChange",value:function(t,e){this.setState({currentPage:e,requestUrl:v(a.ApiUrlContext._currentValue.manage.comments,this.state.sortingArgs,e)})}},{key:"getCountFunc",value:function(t){this.setState({resultsCount:t})}},{key:"onColumnSortClick",value:function(t,e){var n="sort_by="+t+"&ordering="+e;this.setState({sortBy:t,ordering:e,sortingArgs:n,requestUrl:v(a.ApiUrlContext._currentValue.manage.comments,n,this.state.currentPage)})}},{key:"onItemsRemoval",value:function(t){this.setState({resultsCount:null,refresh:this.state.refresh+1,requestUrl:a.ApiUrlContext._currentValue.manage.comments},(function(){t?c.PageActions.addNotification("The comments deleted successfully.","commentsRemovalSucceed"):c.PageActions.addNotification("The comment deleted successfully.","commentRemovalSucceed")}))}},{key:"onItemsRemovalFail",value:function(t){t?c.PageActions.addNotification("The comments removal failed. Please try again.","commentsRemovalFailed"):c.PageActions.addNotification("The comment removal failed. Please try again.","commentRemovalFailed")}},{key:"pageContent",value:function(){return o.createElement(l.MediaListWrapper,{title:this.props.title+(null===this.state.resultsCount?"":" ("+this.state.resultsCount+")"),className:"search-results-wrap items-list-hor"},o.createElement(s.d,{pageItems:50,manageType:"comments",key:this.state.requestUrl+"["+this.state.refresh+"]",itemsCountCallback:this.getCountFunc,requestUrl:this.state.requestUrl,onPageChange:this.onTablePageChange,sortBy:this.state.sortBy,ordering:this.state.ordering,onRowsDelete:this.onItemsRemoval,onRowsDeleteFail:this.onItemsRemovalFail,onClickColumnSort:this.onColumnSortClick}))}}])&&p(e.prototype,n),f}(n(58204).T);g.propTypes={title:u().string.isRequired},g.defaultProps={title:"Manage comments"},(0,r.X)("page-manage-comments",g)},47446:function(t,e,n){n(92070),n(35466);var r=n(3074),o=n.n(r);n(2299),o().string.isRequired,o().string.isRequired,o().func.isRequired},2915:function(t,e,n){n(52004),n(28407),n(56394),n(38288),n(55677),n(92129),n(24655),n(20288),n(54458),n(23675);var r=n(35466),o=n(3074),i=n.n(o),u=n(2299);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t){var e,n,o=(e=(0,r.useState)(t.active),n=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],c=o[1];return r.createElement("div",{className:"mi-filters-toggle"},r.createElement("button",{className:i?"active":"","aria-label":"Filter",onClick:function(){c(!i),void 0!==t.onClick&&t.onClick()}},r.createElement(u.O,{type:"filter_list"}),r.createElement("span",{className:"filter-button-label"},r.createElement("span",{className:"filter-button-label-text"},"FILTERS"))))}c.propTypes={onClick:i().func,active:i().bool},c.defaultProps={active:!1}},84234:function(t,e,n){n.d(e,{CircleIconButton:function(){return r.M},MaterialIcon:function(){return o.O},NavigationContentApp:function(){return i.o},NavigationMenuList:function(){return u.S},Notifications:function(){return a.T},PopupMain:function(){return c.W8},PopupTop:function(){return c.HF},SpinnerLoader:function(){return l.i},UserThumbnail:function(){return s.q}});var r=n(17714),o=(n(47446),n(2915),n(2299)),i=n(72917),u=n(5671),a=n(72436),c=(n(15517),n(60940)),l=n(26309),s=n(86142)},36191:function(t,e,n){n.d(e,{PageHeader:function(){return r.m},PageMain:function(){return o.r},PageSidebar:function(){return i.$}});var r=n(56006),o=n(29198),i=n(22947);n(41542)},58204:function(t,e,n){n.d(e,{T:function(){return p}}),n(25101),n(13080),n(52004),n(28407),n(56394),n(38288),n(55677),n(92129),n(24655);var r=n(35466),o=n(20541),i=n(36191),u=n(84234);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(y,t);var e,n,a,p,m=(a=y,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f(a);if(p){var n=f(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return s(this,t)});function y(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,y),n=m.call(this,t),void 0!==e&&o.PageActions.initPage(e),n}return e=y,(n=[{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement(i.PageMain,null,this.pageContent()),r.createElement(u.Notifications,null))}}])&&c(e.prototype,n),y}(r.PureComponent)},12161:function(t,e,n){n.d(e,{s:function(){return r}}),n(62322),n(49268);var r=function(t){if(t){var e=t.split(".");return e[e.length-1]}}},65477:function(t,e,n){n.d(e,{g:function(){return u},n:function(){return a}}),n(52004),n(28407),n(56394),n(38288),n(55677),n(92129),n(24655);var r=n(39039),o=n(50408);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var u=function(t,e,n){return void 0===t[e]||(0,o.ZU)(t[e])?null:(0,r.O)(["Invalid prop `"+e+"` of type `"+i(t[e])+"` supplied to `"+(n||"N/A")+"`, expected `positive integer or zero` ("+t[e]+")."])},a=function(t,e,n){return void 0===t[e]||(0,o.aP)(t[e])?null:(0,r.O)(["Invalid prop `"+e+"` of type `"+i(t[e])+"` supplied to `"+(n||"N/A")+"`, expected `positive integer` ("+t[e]+")."])}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,r),i.exports}r.m=e,t=[],r.O=function(e,n,o,i){if(!n){var u=1/0;for(l=0;l<t.length;l++){n=t[l][0],o=t[l][1],i=t[l][2];for(var a=!0,c=0;c<n.length;c++)(!1&i||u>=i)&&Object.keys(r.O).every((function(t){return r.O[t](n[c])}))?n.splice(c--,1):(a=!1,i<u&&(u=i));a&&(t.splice(l--,1),e=o())}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,o,i]},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.j=800,function(){var t={800:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,i,u=n[0],a=n[1],c=n[2],l=0;for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var s=c(r);for(e&&e(n);l<u.length;l++)i=u[l],r.o(t,i)&&t[i]&&t[i][0](),t[u[l]]=0;return r.O(s)},n=self.webpackChunkmediacms_frontend=self.webpackChunkmediacms_frontend||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var o=r.O(void 0,[431],(function(){return r(25381)}));o=r.O(o)}();