(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+Sw5":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},"0qAl":function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},"5WRv":function(e,t,n){var r=n("iNmH"),a=n("Qatm"),o=n("Zhxd"),l=n("kluZ");e.exports=function(e){return r(e)||a(e)||o(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},"8lrx":function(e,t,n){var r=n("uUj8"),a=n("5WRv"),o=n("OvAC"),l=n("PE9J");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=n("mXGw"),u=n("/FXl").mdx,d=n("U+ow").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,o=l(e,["scope","children"]),i=d(t),m=c.useMemo((function(){if(!n)return null;var e=s({React:c,mdx:u},i),t=Object.keys(e),o=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+n])).apply(void 0,[{}].concat(a(o)))}),[n,t]);return c.createElement(m,s({},o))}},"B/7I":function(e,t,n){"use strict";var r=n("63Ad");t.__esModule=!0,t.default=void 0;var a=r(n("QKC2")),o=r(n("mXGw")),l=r(n("W0B4")),i=function(e){function t(){return e.apply(this,arguments)||this}(0,a.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return o.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(o.default.Component);t.default=i,i.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},i.propTypes={commentId:l.default.string.isRequired,width:l.default.number,height:l.default.number,showMedia:l.default.bool,showParentComment:l.default.bool}},CdP3:function(e,t,n){"use strict";var r=n("63Ad");t.__esModule=!0,t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var a=this,o=arguments,l=function(){r=null,n||e.apply(a,o)},i=n&&!r;window.clearTimeout(r),r=setTimeout(l,t),i&&e.apply(a,o)}},t.isReactElement=l,t.shallowComparison=function e(t,n){var r,o=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(r=[]).concat.apply(r,(0,a.default)(o)).filter((function(r){if("object"==typeof t[r]){if(e(t[r],n[r]))return!0}else if(t[r]!==n[r]&&!l(t[r]))return!0})).length};var a=r(n("5WRv")),o=r(n("mXGw"));function l(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},Gp6M:function(e,t,n){"use strict";var r=n("63Ad");t.__esModule=!0,t.default=void 0;var a=r(n("8VmE")),o=r(n("PE9J")),l=r(n("QKC2")),i=r(n("mXGw")),s=r(n("W0B4")),c=n("CdP3"),u=(0,c.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="undefined"!=typeof GATSBY_DISQUS_SHORTNAME&&""!==GATSBY_DISQUS_SHORTNAME?GATSBY_DISQUS_SHORTNAME:"",n}(0,l.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?u():(0,c.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,c.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,r=(0,o.default)(e,["config","placeholder"]);return i.default.createElement("span",(0,a.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},r,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},t}(i.default.Component);t.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:s.default.shape({identifier:s.default.string,title:s.default.string,url:s.default.string}),placeholder:s.default.string}},NR63:function(e,t,n){"use strict";var r=n("63Ad");t.__esModule=!0,t.default=void 0;var a=r(n("8VmE")),o=r(n("PE9J")),l=r(n("QKC2")),i=r(n("mXGw")),s=r(n("W0B4")),c=n("CdP3"),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="undefined"!=typeof GATSBY_DISQUS_SHORTNAME&&""!==GATSBY_DISQUS_SHORTNAME?GATSBY_DISQUS_SHORTNAME:"",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,l.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,c.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,c.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var t=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);t.parentNode.removeChild(t)}},n.render=function(){var e=this.props,t=(e.config,(0,o.default)(e,["config"]));return i.default.createElement("div",(0,a.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},t}(i.default.Component);t.default=u,u.propTypes={config:s.default.shape({identifier:s.default.string,title:s.default.string,url:s.default.string,language:s.default.string,remoteAuthS3:s.default.string,apiKey:s.default.string})}},Qatm:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Sy5f:function(e,t,n){"use strict";var r=n("Wbzz"),a=n("RDli");t.a=function(e){var t=e.date,n=e.title,o=e.slug,l=Object(r.c)("822196256"),i=Object(a.a)();return 1===l.allSitePlugin.totalCount?{url:""+i.siteUrl+o,identifier:String(new Date(t).getTime()/1e3),title:n}:null}},Zhxd:function(e,t,n){var r=n("+Sw5");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},"iLM+":function(e,t,n){"use strict";var r=n("63Ad");t.__esModule=!0,t.default=void 0;var a=r(n("NR63"));t.Disqus=a.default;var o=r(n("Gp6M"));t.CommentCount=o.default;var l=r(n("B/7I"));t.CommentEmbed=l.default;var i=a.default;t.default=i},iNmH:function(e,t,n){var r=n("+Sw5");e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},jRwh:function(e,t,n){var r=n("8lrx");e.exports={MDXRenderer:r}},"k/hQ":function(e,t,n){"use strict";n.r(t);var r=n("mXGw"),a=n.n(r),o=n("Wbzz"),l=n("0qyb"),i=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=function(e){void 0===e&&(e=new Date);var t=e.getDay();return new Date(e.getTime()-864e5*(364+t))},u=function(e){for(var t=[],n=c(e),r=0;r<=52;r++){var a=new Date(n.getTime()+7*r*864e5),o=a.getMonth(),l=new Date(a.getTime()+6048e5).getMonth();if(0!==r||o===l){var i=new Date(a.getTime()-6048e5).getMonth();0!==r&&o===i||t.push({month:o,text:s[o],x:14+13*r})}}return t},d=function(e){for(var t=[],n=c(e),r=0;r<=52;r++){for(var a=[],o=0;o<7;o++){var i=n.getTime()+864e5*(7*r+o),s=new Date(i);if(e.getTime()<i)break;a.push({x:14-r,y:13*o,date:Object(l.c)(s)})}t.push({translateX:14*r,week:a})}return t},m=function(){return Object(o.c)("1838818630")},p=function(){var e=m().posts;return Object(r.useRef)(function(e){var t={};return null==e||e.forEach((function(e){var n=Object(l.c)(e.frontmatter.date);t[n]||(t[n]=[]),t[n].push({id:e.id,slug:e.fields.slug,title:e.frontmatter.title,date:e.frontmatter.date,relativeDate:Object(l.d)(e.frontmatter.date)})})),t}(null==e?void 0:e.nodes)).current},f=n("l0ZM"),g=n("UutA"),h=n("Og5X"),y=g.a.ul.withConfig({componentId:"sc-1tmn672-0"})(["display:block;li:not(:last-child){border-bottom:1px solid ",";}"],h.a.gray.light),b=function(e){var t=e.posts;return null!=t&&t.length?a.a.createElement(y,{className:"text-sm"},t.map((function(e){return a.a.createElement("li",{className:"py-2 flex justify-between",key:e.id},a.a.createElement(o.a,{to:e.slug,key:e.id},e.title),a.a.createElement("time",{className:"text-gray-main text-xs","date-time":e.date,title:e.date},Object(l.b)(e.date)))}))):null},v=n("mK0O");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=new Date,S={year:E.getFullYear(),endDate:E,date:""},O=Object(r.createContext)({state:S,dispatch:function(){}}),N=function(e,t){switch(t.type){case"year":var n=t.payload,r=E.getFullYear()===n?E:new Date(n+"-12-31");return x(x({},e),{},{date:"",year:n,endDate:r});case"date":return x(x({},e),{},{date:t.payload});default:return e}},D=[h.a.gray[120],h.a.green.superlight,h.a.green.light,h.a.green.medium,h.a.green.dark],_=function(){return a.a.createElement("ul",{className:"calendar-legend"},a.a.createElement("li",{className:"bg-gray-120"}),a.a.createElement("li",{className:"bg-green-superlight"}),a.a.createElement("li",{className:"bg-green-light"}),a.a.createElement("li",{className:"bg-green-medium"}),a.a.createElement("li",{className:"bg-green-dark"}))},j=g.a.svg.withConfig({componentId:"sc-1ywtwu-0"})(["text{fill:#767676;font-size:9px;}rect{shape-rendering:geometricPrecision;outline:1px solid rgba(27,31,35,0.04);outline-offset:-1px;rx:2;ry:2;}"]),M=function(){return a.a.createElement(a.a.Fragment,null,i.map((function(e,t){return a.a.createElement("text",{key:e,className:t%2==0?"hidden":void 0,dx:"-9",dy:8+13*t},e)})))},C=function(){var e,t=Object(r.useContext)(O),n=t.state,o=t.dispatch,l=p(),i=(void 0===(e=n.endDate)&&(e=new Date),{monthData:u(e),data:d(e)}),s=i.data,c=i.monthData,m=Object(r.useState)({style:{display:"none"}}),f=m[0],g=m[1],h=function(e){var t=e.currentTarget,n=t.dataset.date,r=Number(t.dataset.count),a=Number(t.getAttribute("x")),o=Number(t.getAttribute("y"));g({text:(r>0?r:"No")+" contribution"+(1===r?" ":"s "),date:new Date(n).toLocaleDateString("en",{month:"short",year:"numeric",day:"numeric"}),style:{top:o-15+"px",left:150-11*a+"px"}})},y=function(){g({style:{display:"none"}})},b=function(e){var t=e.currentTarget.dataset.date;o({type:"date",payload:t})};return a.a.createElement("div",{className:"relative border-b px-4 pb-2 pt-1"},a.a.createElement("div",{className:"overflow-hidden flex flex-col items-end xl:items-center"},a.a.createElement(j,{width:722,height:112},a.a.createElement("g",{transform:"translate(10, 20)"},s.map((function(e){return a.a.createElement("g",{key:e.translateX,transform:"translate("+e.translateX+",0)"},e.week.map((function(e){var t,r,o,i,s=null!==(t=null===(r=l[e.date])||void 0===r?void 0:r.length)&&void 0!==t?t:0,c=null!==(o=D[s])&&void 0!==o?o:D.slice(-1);return a.a.createElement("rect",{className:(i=e.date,n.date?n.date===i?"":"opacity-50":""),key:e.date,width:"10",height:"10",x:e.x,y:e.y,fill:c,"data-date":e.date,"data-count":s,onMouseEnter:h,onMouseLeave:y,onClick:b})})))})),c.map((function(e,t){return a.a.createElement("text",{key:e.text+"_"+t,x:e.x,y:-7},e.text)})),a.a.createElement(M,null)))),a.a.createElement("div",{className:"flex flex-col md:flex-row md:justify-between md:items-center flex-wrap text-11px mt-1 md:mx-4"},a.a.createElement("a",null,"Learn how we count contributions."),a.a.createElement("div",{className:"self-end text-gray-main items-center flex"},"Less",a.a.createElement(_,null),"More")),a.a.createElement("div",{className:"absolute bg-gray-dark text-gray-light text-xs opacity-75 rounded-md p-2 whitespace-no-wrap",style:f.style},a.a.createElement("strong",null,f.text),"on ",f.date))},I=function(){var e,t,n,l=Object(r.useContext)(O),i=l.state,s=l.dispatch,c=Object(o.c)("939827896"),u=(new Date).getFullYear(),d=i.year,m=new Date(null===(e=c.allMdx.nodes)||void 0===e||null===(t=e[0])||void 0===t||null===(n=t.frontmatter)||void 0===n?void 0:n.date).getFullYear()||u,p=u-m+1;return a.a.createElement("div",{className:"flex-col flex w-24 sticky top-74px"},new Array(p).fill(0).map((function(e,t){return a.a.createElement("div",{key:t,onClick:function(){s({type:"year",payload:u-t})},className:(d===u-t?"bg-blue text-white hover:bg-blue":"hover:bg-gray-100 text-gray-200")+" cursor-pointer rounded-md px-4 py-2 text-xs mb-2 no-underline"},u-t)})))},A=function(){var e=Object(r.useReducer)(N,S),t=e[0],n=e[1],o=(new Date).getFullYear()===t.year,l=Object(f.a)().yearly,i=p()[t.date];return a.a.createElement(O.Provider,{value:{state:t,dispatch:n}},a.a.createElement("div",{className:"w-full flex"},a.a.createElement("div",{className:"w-full md:w-10/12"},a.a.createElement("div",{className:"mb-2 font-medium"},l[t.year]," contributions in"," ",o?"the last year":t.year),a.a.createElement("div",{className:"border rounded-md py-2"},a.a.createElement(C,null),a.a.createElement("div",{className:"w-full mt-7 text-sm p-4 flex flex-col md:flex-row"},a.a.createElement("div",{className:"md:w-1/2"},a.a.createElement("div",{className:"pb-2"},"Activity overview")),a.a.createElement("div",{className:"md:w-1/2 md:border-l md:pl-4"},"@svg"))),a.a.createElement("div",null,a.a.createElement("div",{className:"mt-8 mb-2 font-medium"},"Contribution activity"),a.a.createElement(b,{posts:i}))),a.a.createElement("div",{className:"hidden md:block md:w-2/12 pl-8"},a.a.createElement(I,null))))},k=n("0ScO"),T=n("iLM+"),R=n("tzE7"),P=n("A4YR"),q=n("2SRX"),U=n("hxfP"),B=n("OagW"),G=n("Sy5f"),Q=n("Mpnv"),W=Object(g.a)(o.a).withConfig({componentId:"bf012c-0"})(["color:",";margin-right:16px;height:21px;display:flex;align-items:center;&:hover{color:",";text-decoration:none;}> svg{margin-right:4px;}> span{word-break:break-word;display:block;width:50px;overflow:hidden;}"],h.a.gray.main,h.a.blue),F=function(e){var t=e.id,n=e.slug,r=e.title,l=e.excerpt,i=e.category,s=e.tags,c=e.date,u=Object(G.a)({title:r,date:c,slug:n});return a.a.createElement("div",{className:"border rounded-md p-4 flex flex-col text-sm",key:t},a.a.createElement("div",{className:"flex items-center"},a.a.createElement(q.a,{size:16,className:"mr-2"}),a.a.createElement(o.a,{to:n,className:"flex-grow"},r),a.a.createElement(q.b,{size:16,className:"cursor-pointer"})),a.a.createElement("div",{className:"flex-grow mt-2 mb-4 text-gray-main"},l),a.a.createElement("div",{className:"flex items-center"},i&&a.a.createElement(W,{to:"/"+B.CATEGORY_DIR+"/"+Object(Q.slugify)(i)},a.a.createElement(P.b,{size:16})," ",i),s&&s.length>0&&a.a.createElement(W,{to:"/"+B.TAG_DIR},a.a.createElement(R.c,{size:16}),s.length),u&&a.a.createElement(W,{to:n},a.a.createElement(U.a,{size:16}),a.a.createElement(T.CommentCount,{config:u,placeholder:"0"}))))},X=function(){var e=function(e){return e.map((function(e){var t=e.id,n=e.excerpt,r=e.frontmatter,a=e.fields;return{id:t,excerpt:n,title:r.title,tags:r.tags,category:r.category,slug:a.slug,relativeDate:Object(l.d)(r.date),date:r.date}}))}(Object(o.c)("3665258449").allMdx.nodes);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"mb-2"},"Recent posts"),a.a.createElement("div",{className:"grid gap-4 grid-cols-1 md:grid-cols-2 mb-8"},null==e?void 0:e.map((function(e){return a.a.createElement(F,Object.assign({},e,{key:e.id}))}))))},Y=n("jRwh"),z=n("RDli"),H=function(){var e,t=null===(e=Object(o.c)("3350369686").mdx)||void 0===e?void 0:e.body,n=Object(z.a)();return t?a.a.createElement("div",{className:"_readme border rounded-md p-6 mb-6 w-full"},a.a.createElement("div",{className:"flex items-center text-xs mb-4 text-mono"},a.a.createElement(o.a,{to:"/",className:"text-gray-dark no-underscore hover:text-blue"},n.author),a.a.createElement("span",{className:"px-2px"},"/"),"README.",a.a.createElement("span",{className:"text-gray-main"},"md")),a.a.createElement(Y.MDXRenderer,null,t)):null};t.default=function(){return a.a.createElement(k.b,{mode:k.a.NavTab},a.a.createElement(H,null),a.a.createElement(X,null),a.a.createElement(A,null))}},kluZ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},uUj8:function(e,t,n){var r=n("WI9V"),a=n("0qAl");function o(t,n,l){return a()?(e.exports=o=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=o=function(e,t,n){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return n&&r(o,n.prototype),o},e.exports.default=e.exports,e.exports.__esModule=!0),o.apply(null,arguments)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=component---gatsby-theme-replica-src-templates-home-tsx-938e66a6b6c162664207.js.map