!function(){var t,n,a,g,o,l,w=[].slice;function s(e,t){var n,r={}.hasOwnProperty;for(n in t)r.call(t,n)&&(e[n]=t[n]);return e}n="undefined"!=typeof window&&null!==window?window.fetch:"undefined"!=typeof module&&null!==module&&"undefined"!=typeof require&&null!==require?require("node-fetch"):null,a="undefined"!=typeof window&&null!==window?window.semver:"undefined"!=typeof modeul&&null!==modeul&&"undefined"!=typeof require&&null!==require?require("@plotdb/semver"):null,g=function(e){return/^:scope[ .:\[#]|^:scope$/.exec(e)},o=function(e,t){return n(e,t).then(function(i){var e;return i&&i.ok?i.text():i?i.clone().text().then(function(e){var t,n=i.status||404,r=new Error(n+" "+e);r.name="lderror",r.id=n,r.message=e,n=r;try{(t=JSON.parse(e))&&"lderror"===t.name&&(s(n,t).json=t)}catch(e){0}return Promise.reject(n)}):Promise.reject(((e=new Error("404")).name="lderror",e.id=404,e))})},(l=function(e,t,n,r){return(l.default=l.default?l.default:new l.converter).convert(e,t,n,r)}).env=function(e){e=[e,e.document];return t=e[1],e},l.id=function(e){return e.id||e.url||e.name+"@"+(e.version||"")+":"+(e.path||"")},l.scope=function(e){return e.scope||"_"+btoa(l.id(e)).replace(/=/g,"_")},l._cache={},l._ver={map:{},list:{}},l.cache=function(e){var t,n,r,i,o,s,c,u;if((e="string"==typeof e?{url:e}:e).id||(e.id=l.id(e)),t=this._cache[e.id])return t;if(o=(i=(r=(n=e.id&&!e.name?(n=/^(\S+)@(\S+):(\S+)$/.exec(e.id))?[n[1],n[2],n[3]]:[e.id,"",""]:[e.name,e.version||"",e.path||""])[0],n[1]),n[2]),/^[0-9.]+$/.exec(i)){if((t=((n=this._ver.map)[r]||(n[r]={}))[i])&&(i=t),t=this._cache[l.id({name:r,version:i,path:o})])return t;for(s=0,c=((n=this._ver.list)[r]||(n[r]=[])).length;s<c;++s)if(u=s,u=this._ver.list[r][u],a.fit(u,i)&&(this._ver.map[r][i]=u,e.id=l.id({name:r,version:u,path:o}),t=this._cache[e.id]))return t}return function(e,t){var n=-1,r=t.length>>>0;for(;++n<r;)if(e===t[n])return!0;return!1}(i,(n=this._ver.list)[r]||(n[r]=[]))||this._ver.list[r].push(i),this._cache[e.id]=e},(l.converter=function(e){return this.scopeTest=(e=null==e?{}:e).scopeTest,this.node=t.createElement("style"),this.iframe=e=t.createElement("iframe"),e.setAttribute("title","for csscope parsing"),e.style.display="none",e.src="about:blank",t.body.appendChild(e),this.iframe.contentDocument.body.appendChild(this.node),this._idx=0,this}).prototype=s(Object.create(Object.prototype),{getNames:function(e,t){var n,r,i;for(null==t&&(t={}),n=0,r=e.length;n<r;++n)(i=e[n]).name?t[i.name]=!0:i.cssRules&&this.getNames(i.cssRules,t);return t},_convert:function(e,i,t,o,n){var r,s,c,u,a,l;for(null==n&&(n={}),r="",s=0,c=e.length;s<c;++s)(u=e[s]).style&&(n[u.style.animationName]?u.style.animationName=t+"__"+u.style.animationName:u.style.animation&&(u.style.animation=u.style.animation.split(" ").map(d).join(" "))),u.selectorText?(r+=(a=(o?u.selectorText.split(",").map(p).map(m):u.selectorText.split(",").map(f).map(h)).join(","))+"{"+u.style.cssText+"}",u.selectorText=a):u.name?(a=u.name.split(",").map(y).map(v).join(","),r+="@keyframes "+(u.name=a)+" {\n  "+Array.from(u.cssRules).map(_).join("\n")+"\n}"):u.cssRules&&(l=this._convert(u.cssRules,i,t,o,n),r+="@media "+u.conditionText+" {\n  "+l+"\n}");return r;function d(e){return n[e]?t+"__"+e:e}function f(e){return e.trim()}function h(e){return g(e)?e.replace(/^:scope/,i):i+" "+e}function p(e){return e.trim()}function m(e){var t,n,r;return g(e)?e.replace(/^:scope/,i):(n=(t=e.split(" ").map(function(e){return e.trim()}).filter(function(e){return e}))[0],r=w.call(t,1),t=/^[a-zA-Z]/.exec(n)?[n,""]:["",n],i+" :not("+o+") "+e+","+i+" > "+t[0]+":not("+o+")"+t[1]+" "+r.join(" "))}function y(e){return e.trim()}function v(e){return t+"__"+e}function _(e){return e.cssText}},convert:function(e,t,n,r){var i,e="object"==typeof e?e:{name:e,css:t,rule:n,scopeTest:r},t=e.name,n=e.css,r=e.rule,e=e.scopeTest;return r=r||"."+t,t=t||r,e=e||this.scopeTest,n="object"==typeof n?n:(this.node.textContent=(n||"")+("/*"+this._idx++)+"*/",this.node.sheet.cssRules),i=this.getNames(n,{}),this._convert(n,r,t,e,i)||""}}),(l.manager=function(e){return null==e&&(e={}),this.attrName="csscope",this._cache={},this.converter=new l.converter,this.counter=0,this.registry(e.registry||"/assets/lib/"),this.init(),this}).prototype=s(Object.create(Object.prototype),{cache:function(e){var t;return(e="string"==typeof e?{url:e}:e).id||(e.id=l.id(e)),(t=this._cache[e.id])?t:this._cache[e.id]=l.cache(e)},_ref:function(e){var t;return"string"==typeof e?e:(t=e.url)?t:this._reg.fetch?this._reg.fetch(e):this._reg(e)},registry:function(e){return"string"==typeof e?("/"===e[e.length-1]&&(e=e.substring(0,e.length-1)),this._reg=(t=e,function(e){return t+"/"+e.name+"/"+(e.version||"main")+"/"+(e.path||"index.min.css")})):this._reg=e;var t},init:function(){if(!this.inited)return this.inited=!0,this.styleNode=t.createElement("style"),this.styleNode.setAttribute("type","text/css"),this.styleNode.setAttribute("data-name","csscope.manager"),this.styleContent=[],t.body.appendChild(this.styleNode)},scope:function(e,t){t=this.get(t=null==t?[]:t);return e.classList.add.apply(e.classList,t.map(function(e){return e.scope})),t},get:function(e){var t=this;return null==e&&(e=[]),(Array.isArray(e)?e:[e]).map(function(e){return t.cache(e)}).filter(function(e){return e.scope})},bundle:function(e,t){var n,r,i,o,s=this;for(i in e=Array.isArray(e)?e:[e],n={},e.map(function(e){return s.cache(e)}).filter(function(e){return e&&e.id}).map(function(e){return n[e.id]=e}),r=[],n)o=n[i],r.push(o);return e=r,this.load(e,t,!0).then(function(e){return e.map(function(e){return e.code}).join("\n")})},load:function(e,n,t){var r,i=this;return e=(Array.isArray(e)?e:[e]).map(function(e){return i.cache(e)}),r=[],Promise.all(e.map(function(t){var e;return t.inited?Promise.resolve():t.scope&&t.code?(t.inited=!0,r.push(t.code),Promise.resolve()):((e=i._ref(t)).then?e.then(function(e){return i.cache((t.id=void 0,t.version=e.version,t)),e}):o(e,{method:"GET"}).then(function(e){return{content:e}})).then(function(e){e=e.content;return t.inited=!0,t.scope=l.scope(t),t.code=i.converter.convert({css:e,name:t.scope,scopeTest:n}),r.push(t.code)})})).then(function(){return t?e:(i.styleContent.push.apply(i.styleContent,r),i.styleNode.textContent=i.styleContent.join("\n"),i.get(e))})}}),l.env("undefined"!=typeof self&&null!==self?self:globalThis),"undefined"!=typeof module&&null!==module?module.exports=l:"undefined"!=typeof window&&null!==window&&(window.csscope=l)}.call(this);
