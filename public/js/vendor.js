/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*! jQuery UI - v1.11.4 - 2015-03-11
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function s(e){for(var t,i;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",o)}function o(){e.datepicker._isDisabledDatepicker(v.inline?v.dpDiv.parent()[0]:v.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function r(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}function h(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var l=0,u=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,n=u.call(arguments,1),a=0,o=n.length;o>a;a++)for(i in n[a])s=n[a][i],n[a].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(n){var a="string"==typeof n,o=u.call(arguments,1),r=this;return a?this.each(function(){var i,a=e.data(this,s);return"instance"===n?(r=a,!1):a?e.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,o),i!==a&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+n+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+n+"'")}):(o.length&&(n=e.widget.extend.apply(null,[n].concat(o))),this.each(function(){var t=e.data(this,s);t?(t.option(n||{}),t._init&&t._init()):e.data(this,s,new i(n,this))})),r}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=l++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var d=!1;e(document).mouseup(function(){d=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!d){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),d=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),d=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,M=e.extend({},y),C=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?M.left-=d:"center"===n.my[0]&&(M.left-=d/2),"bottom"===n.my[1]?M.top-=c:"center"===n.my[1]&&(M.top-=c/2),M.left+=C[0],M.top+=C[1],a||(M.left=h(M.left),M.top=h(M.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](M,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+C[0],p[1]+C[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-M.left,i=t+m-d,s=v.top-M.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:M.left,top:M.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(M,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.accordion",{version:"1.11.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),t.collapsible||t.active!==!1&&null!=t.active||(t.active=0),this._processPanels(),0>t.active&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),e=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&(this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)),void 0)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,s=this.headers.length,n=this.headers.index(t.target),a=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(e(t.target).attr("tabIndex",-1),e(a).attr("tabIndex",0),a.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels(),t.active===!1&&t.collapsible===!0||!this.headers.length?(t.active=!1,this.active=e()):t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var e=this.headers,t=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),t&&(this._off(e.not(this.headers)),this._off(t.not(this.panels)))},_refresh:function(){var t,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var t=e(this),i=t.uniqueId().attr("id"),s=t.next(),n=s.uniqueId().attr("id");t.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(t=n.height(),this.element.siblings(":visible").each(function(){var i=e(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(t-=i.outerHeight(!0))}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===s&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n[0]===s[0],o=a&&i.collapsible,r=o?e():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:o?e():n,newPanel:r};t.preventDefault(),a&&!i.collapsible||this._trigger("beforeActivate",t,l)===!1||(i.active=o?!1:this.headers.index(n),this.active=a?e():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),a||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,s=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,t):(s.hide(),i.show(),this._toggleComplete(t)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(e(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(e,t,i){var s,n,a,o=this,r=0,h=e.css("box-sizing"),l=e.length&&(!t.length||e.index()<t.index()),u=this.options.animate||{},d=l&&u.down||u,c=function(){o._toggleComplete(i)};return"number"==typeof d&&(a=d),"string"==typeof d&&(n=d),n=n||d.easing||u.easing,a=a||d.duration||u.duration,t.length?e.length?(s=e.show().outerHeight(),t.animate(this.hideProps,{duration:a,easing:n,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(this.showProps,{duration:a,easing:n,complete:c,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?"content-box"===h&&(r+=i.now):"content"!==o.options.heightStyle&&(i.now=Math.round(s-t.outerHeight()-r),r=0)}}),void 0):t.animate(this.hideProps,a,n,c):e.animate(this.showProps,a,n,c)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}}),e.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.currentTarget);
i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,s,n,a,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,s=this.previousFilter||"",n=String.fromCharCode(t.keyCode),a=!1,clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,i,s=this,n=this.options.icons.submenu,a=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.parent(),s=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))}),t=a.add(this.element),i=t.find(this.options.items),i.not(".ui-menu-item").each(function(){var t=e(this);s._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=t.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-n}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(t),void 0)},previousPage:function(t){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+n>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())),void 0):(this.next(t),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(e.trim(e(this).text()))})}}),e.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,void 0;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),void 0):(this._searchTimeout(e),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(e),this._change(e),void 0)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;(!t||t&&!i&&!s)&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").text(i.label).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[e](t),void 0):(this.search(null,t),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete;var c,p="ui-button ui-widget ui-state-default ui-corner-all",f="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",m=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},g=function(t){var i=t.name,s=t.form,n=e([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?e(s).find("[name='"+i+"'][type=radio]"):e("[name='"+i+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),n};e.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,m),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,i=this.options,s="checkbox"===this.type||"radio"===this.type,n=s?"":"ui-state-active";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(p).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===c&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||e(this).removeClass(n)}).bind("click"+this.eventNamespace,function(e){i.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),s&&this.element.bind("change"+this.eventNamespace,function(){t.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return i.disabled?!1:void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var s=t.element[0];g(s).not(s).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return i.disabled?!1:(e(this).addClass("ui-state-active"),c=this,t.document.one("mouseup",function(){c=null}),void 0)}).bind("mouseup"+this.eventNamespace,function(){return i.disabled?!1:(e(this).removeClass("ui-state-active"),void 0)}).bind("keydown"+this.eventNamespace,function(t){return i.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),void 0)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var e,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(p+" ui-state-active "+f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),t&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")),void 0):(this._resetButton(),void 0)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?g(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),void 0;var t=this.buttonElement.removeClass(f),i=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(i)))):a.push("ui-button-text-only"),t.addClass(a.join(" "))}}),e.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction"),i=this.element.find(this.options.items),s=i.filter(":ui-button");i.not(":ui-button").button(),s.button("refresh"),this.buttons=i.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),e.ui.button,e.extend(e.ui,{datepicker:{version:"1.11.4"}});var v;e.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return r(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,n,a;s=t.nodeName.toLowerCase(),n="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),a=this._newInst(e(t),n),a.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,a):n&&this._inlineDatepicker(t,a)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(a?e("<img/>").attr({src:a,alt:n,title:n}):n)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,n,a=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,n=0;e.length>n;n++)e[n].length>i&&(i=e[n].length,s=n);return s},a.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),e.input.attr("size",this._formatDate(e,a).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,n,a){var o,h,l,u,d,c=this._dialogInst;return c||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),c=this._dialogInst=this._newInst(this._dialogInput,!1),c.settings={},e.data(this._dialogInput[0],"datepicker",c)),r(c.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(c,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),c.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",c),this},_destroyDatepicker:function(t){var i,s=e(t),n=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),v===n&&(v=null))},_enableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,i,s){var n,a,o,h,l=this._getInst(t);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),a=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),r(l.settings,n),null!==o&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,o)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),l),this._autoSize(l),this._setDate(l,a),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,n,a=e.datepicker._getInst(t.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",a.dpDiv),n[0]&&e.datepicker._selectDay(t.target,a.selectedMonth,a.selectedYear,n[0]),i=e.datepicker._get(a,"onSelect"),i?(s=e.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,s,n=e.datepicker._getInst(t.target);
return e.datepicker._get(n,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,n,a,o,h,l,u;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),n=e.datepicker._get(i,"beforeShow"),a=n?n.apply(t,[t,i]):{},a!==!1&&(r(i.settings,a),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),o=!1,e(t).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),h={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),h=e.datepicker._checkOffset(i,h,o),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),i.inline||(l=e.datepicker._get(i,"showAnim"),u=e.datepicker._get(i,"duration"),i.dpDiv.css("z-index",s(e(t))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[l]?i.dpDiv.show(l,e.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,v=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,s=this._getNumberOfMonths(t),n=s[1],a=17,r=t.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&t.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var n=t.dpDiv.outerWidth(),a=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?n-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),n=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,n,a,o=this._curInst;!o||t&&o!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var n=e(t),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(t){var i,s=e(t),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var n=e(t),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(t,i,s,n){var a,o=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=e("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(t,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,n=e(t),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,s,n,a=this._get(t,"altField");a&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),n=this.formatDate(i,s,this._getFormatConfig(t)),e(a).each(function(){e(this).val(n)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(t,i,s){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,c=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,y=-1,b=!1,_=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},x=function(e){var t=_(e),s="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n="y"===e?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(h).match(a);if(!o)throw"Missing number at position "+h;return h+=o[0].length,parseInt(o[0],10)},w=function(t,s,n){var a=-1,o=e.map(_(t)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,t){var s=t[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(a=t[0],h+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==t.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;t.length>n;n++)if(b)"'"!==t.charAt(n)||_("'")?k():b=!1;else switch(t.charAt(n)){case"d":v=x("d");break;case"D":w("D",d,c);break;case"o":y=x("o");break;case"m":g=x("m");break;case"M":g=w("M",p,f);break;case"y":m=x("y");break;case"@":r=new Date(x("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((x("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":_("'")?k():b=!0;break;default:k()}if(i.length>h&&(o=i.substr(h),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),y>-1)for(g=1,v=y;;){if(a=this._getDaysInMonth(m,g-1),a>=v)break;g++,v-=a}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(h(e))for(;i>s.length;)s="0"+s;return s},u=function(e,t,i,s){return h(e)?s[t]:i[t]},d="",c=!1;if(t)for(s=0;e.length>s;s++)if(c)"'"!==e.charAt(s)||h("'")?d+=e.charAt(s):c=!1;else switch(e.charAt(s)){case"d":d+=l("d",t.getDate(),2);break;case"D":d+=u("D",t.getDay(),n,a);break;case"o":d+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":d+=l("m",t.getMonth()+1,2);break;case"M":d+=u("M",t.getMonth(),o,r);break;case"y":d+=h("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":d+=t.getTime();break;case"!":d+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?d+="'":c=!0;break;default:d+=e.charAt(s)}return d},_possibleChars:function(e){var t,i="",s=!1,n=function(i){var s=e.length>t+1&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;e.length>t;t++)if(s)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),a=n,o=this._getFormatConfig(e);try{a=this.parseDate(i,s,o)||n}catch(r){s=t?"":s}e.selectedDay=a.getDate(),e.drawMonth=e.selectedMonth=a.getMonth(),e.drawYear=e.selectedYear=a.getFullYear(),e.currentDay=s?a.getDate():0,e.currentMonth=s?a.getMonth():0,e.currentYear=s?a.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o))}l=h.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,n=e.selectedMonth,a=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),n===e.selectedMonth&&a===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,n,a,o,r,h,l,u,d,c,p,f,m,g,v,y,b,_,x,w,k,T,D,S,M,C,N,A,P,I,H,z,F,E,O,j,W,L=new Date,R=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),Y=this._get(e,"isRTL"),B=this._get(e,"showButtonPanel"),J=this._get(e,"hideIfNoPrevNext"),q=this._get(e,"navigationAsDateFormat"),K=this._getNumberOfMonths(e),V=this._get(e,"showCurrentAtPos"),U=this._get(e,"stepMonths"),Q=1!==K[0]||1!==K[1],G=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),X=this._getMinMaxDate(e,"min"),$=this._getMinMaxDate(e,"max"),Z=e.drawMonth-V,et=e.drawYear;if(0>Z&&(Z+=12,et--),$)for(t=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-K[0]*K[1]+1,$.getDate())),t=X&&X>t?X:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=q?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-U,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=q?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z+U,1)),this._getFormatConfig(e)):n,a=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?G:R,o=q?this.formatDate(o,r,this._getFormatConfig(e)):o,h=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(e,"firstDay"),10),u=isNaN(u)?0:u,d=this._get(e,"showWeek"),c=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),_="",w=0;K[0]>w;w++){for(k="",this.maxRows=4,T=0;K[1]>T;T++){if(D=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),S=" ui-corner-all",M="",Q){if(M+="<div class='ui-datepicker-group",K[1]>1)switch(T){case 0:M+=" ui-datepicker-group-first",S=" ui-corner-"+(Y?"right":"left");break;case K[1]-1:M+=" ui-datepicker-group-last",S=" ui-corner-"+(Y?"left":"right");break;default:M+=" ui-datepicker-group-middle",S=""}M+="'>"}for(M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?Y?a:s:"")+(/all|right/.test(S)&&0===w?Y?s:a:"")+this._generateMonthYearHeader(e,Z,et,X,$,w>0||T>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",C=d?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",x=0;7>x;x++)N=(x+u)%7,C+="<th scope='col'"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+c[N]+"'>"+p[N]+"</span></th>";for(M+=C+"</tr></thead><tbody>",A=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,A)),P=(this._getFirstDayOfMonth(et,Z)-u+7)%7,I=Math.ceil((P+A)/7),H=Q?this.maxRows>I?this.maxRows:I:I,this.maxRows=H,z=this._daylightSavingAdjust(new Date(et,Z,1-P)),F=0;H>F;F++){for(M+="<tr>",E=d?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(z)+"</td>":"",x=0;7>x;x++)O=g?g.apply(e.input?e.input[0]:null,[z]):[!0,""],j=z.getMonth()!==Z,W=j&&!y||!O[0]||X&&X>z||$&&z>$,E+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(j?" ui-datepicker-other-month":"")+(z.getTime()===D.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===z.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(W?" "+this._unselectableClass+" ui-state-disabled":"")+(j&&!v?"":" "+O[1]+(z.getTime()===G.getTime()?" "+this._currentClass:"")+(z.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+(j&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(W?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(j&&!v?"&#xa0;":W?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===R.getTime()?" ui-state-highlight":"")+(z.getTime()===G.getTime()?" ui-state-active":"")+(j?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);M+=E+"</tr>"}Z++,Z>11&&(Z=0,et++),M+="</tbody></table>"+(Q?"</div>"+(K[0]>0&&T===K[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=M}_+=k}return _+=l,e._keyEvent=!1,_},_generateMonthYearHeader:function(e,t,i,s,n,a,o,r){var h,l,u,d,c,p,f,m,g=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",_="";if(a||!g)_+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,_+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(_+="<option value='"+u+"'"+(u===t?" selected='selected'":"")+">"+r[u]+"</option>");_+="</select>"}if(y||(b+=_+(!a&&g&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(d=this._get(e,"yearRange").split(":"),c=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?c+parseInt(e,10):parseInt(e,10);return isNaN(t)?c:t},f=p(d[0]),m=Math.max(f,p(d[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}return b+=this._get(e,"yearSuffix"),y&&(b+=(!a&&g&&v?"":"&#xa0;")+_),b+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),n=e.drawMonth+("M"===i?t:0),a=Math.min(e.selectedDay,this._getDaysInMonth(s,n))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,n,a)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),n=i&&i>t?i:t;return s&&n>s?s:n},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var n=this._getNumberOfMonths(e),a=this._daylightSavingAdjust(new Date(i,s+(0>t?t:n[0]*n[1]),1));return 0>t&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(e,a)},_isInRange:function(e,t){var i,s,n=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),o=null,r=null,h=this._get(e,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||t.getTime()>=n.getTime())&&(!a||t.getTime()<=a.getTime())&&(!o||t.getFullYear()>=o)&&(!r||r>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new n,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.11.4",e.datepicker,e.widget("ui.draggable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(s){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper),n=s?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)
},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var n=e.extend({},i,{item:s.element});s.sortables=[],e(s.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i,s){var n=e.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,e.each(s.sortables,function(){var e=this;e.isOver?(e.isOver=0,s.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,n))})},drag:function(t,i,s){e.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,e.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&e.contains(a.element[0],this.element[0])&&(n=!1),n})),n?(a.isOver||(a.isOver=1,s._parent=i.helper.parent(),a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},t.target=a.currentItem[0],a._mouseCapture(t,!0),a._mouseStart(t,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",t),s.dropped=a.element,e.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(t),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",t,a._uiHash(a)),a._mouseStop(t,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(t),i.position=s._generatePosition(t,!0),s._trigger("fromSortable",t),s.dropped=!1,e.each(s.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var n=e("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(t,i,s){var n=s.options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(t,i,s){var n=s.options;n._opacity&&e(i.helper).css("opacity",n._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:t.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:t.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-e(r).scrollTop()<n.scrollSensitivity?a=e(r).scrollTop(e(r).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<n.scrollSensitivity&&(a=e(r).scrollTop(e(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-e(r).scrollLeft()<n.scrollSensitivity?a=e(r).scrollLeft(e(r).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<n.scrollSensitivity&&(a=e(r).scrollLeft(e(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var n=s.options;s.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var n,a,o,r,h,l,u,d,c,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,y=i.offset.top,b=y+s.helperProportions.height;for(c=s.snapElements.length-1;c>=0;c--)h=s.snapElements[c].left-s.margins.left,l=h+s.snapElements[c].width,u=s.snapElements[c].top-s.margins.top,d=u+s.snapElements[c].height,h-m>v||g>l+m||u-m>b||y>d+m||!e.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(d-y),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-y),a=m>=Math.abs(d-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[c].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=n||a||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var n,a=s.options,o=e.makeArray(e(a.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(t,i,s){var n=s.options;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}}),e.ui.draggable,e.widget("ui.resizable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=e(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=e(this.handles[i]),this._on(this.handles[i],{mousedown:o._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var i,s,n,a=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),a.containment&&(i+=e(a.containment).scrollLeft()||0,s+=e(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===n?this.axis+"-resize":n),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,s,n=this.originalMousePosition,a=this.axis,o=t.pageX-n.left||0,r=t.pageY-n.top||0,h=this._change[a];return this._updatePrevProperties(),h?(i=h.apply(this,[t,o,r]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,i,s,n,a,o=this.options;a={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=a.minHeight*this.aspectRatio,s=a.minWidth/this.aspectRatio,i=a.maxHeight*this.aspectRatio,n=a.maxWidth/this.aspectRatio,t>a.minWidth&&(a.minWidth=t),s>a.minHeight&&(a.minHeight=s),a.maxWidth>i&&(a.maxWidth=i),a.maxHeight>n&&(a.maxHeight=n)),this._vBoundaries=a},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,i=this.size,s=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===s&&(e.left=t.left+(i.width-e.width),e.top=null),"nw"===s&&(e.top=t.top+(i.height-e.height),e.left=t.left+(i.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,i=this.axis,s=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,n=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,a=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return a&&(e.width=t.minWidth),o&&(e.height=t.minHeight),s&&(e.width=t.maxWidth),n&&(e.height=t.maxHeight),a&&l&&(e.left=r-t.minWidth),s&&l&&(e.left=r-t.maxWidth),o&&u&&(e.top=h-t.minHeight),n&&u&&(e.top=h-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_getPaddingPlusBorderDimensions:function(e){for(var t=0,i=[],s=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],n=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];4>t;t++)i[t]=parseInt(s[t],10)||0,i[t]+=parseInt(n[t],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e,t=0,i=this.helper||this.element;this._proportionallyResizeElements.length>t;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,i,s,n,a,o,r,h=e(this).resizable("instance"),l=h.options,u=h.element,d=l.containment,c=d instanceof e?d.get(0):/parent/.test(d)?u.parent().get(0):d;c&&(h.containerElement=e(c),/document/.test(d)||d===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(c),i=[],e(["Top","Right","Left","Bottom"]).each(function(e,s){i[e]=h._num(t.css("padding"+s))}),h.containerOffset=t.offset(),h.containerPosition=t.position(),h.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,a=h.containerSize.width,o=h._hasScroll(c,"left")?c.scrollWidth:a,r=h._hasScroll(c)?c.scrollHeight:n,h.parentData={element:c,left:s.left,top:s.top,width:o,height:r}))},resize:function(t){var i,s,n,a,o=e(this).resizable("instance"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,d={top:0,left:0},c=o.containerElement,p=!0;c[0]!==document&&/static/.test(c.css("position"))&&(d=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-d.left),u&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?h.top:0),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-h.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-h.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),i=t.options;e(i.alsoResize).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})},resize:function(t,i){var s=e(this).resizable("instance"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0};e(n.alsoResize).each(function(){var t=e(this),s=e(this).data("ui-resizable-alsoresize"),n={},a=t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(a,function(e,t){var i=(s[t]||0)+(r[t]||0);i&&i>=0&&(n[t]=i||null)}),t.css(n)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,i=e(this).resizable("instance"),s=i.options,n=i.size,a=i.originalSize,o=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,u=h[1]||1,d=Math.round((n.width-a.width)/l)*l,c=Math.round((n.height-a.height)/u)*u,p=a.width+d,f=a.height+c,m=s.maxWidth&&p>s.maxWidth,g=s.maxHeight&&f>s.maxHeight,v=s.minWidth&&s.minWidth>p,y=s.minHeight&&s.minHeight>f;s.grid=h,v&&(p+=l),y&&(f+=u),m&&(p-=l),g&&(f-=u),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=o.top-c):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=o.left-d):((0>=f-u||0>=p-l)&&(t=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=o.top-c):(f=u-t.height,i.size.height=f,i.position.top=o.top+a.height-f),p-l>0?(i.size.width=p,i.position.left=o.left-d):(p=l-t.width,i.size.width=p,i.position.left=o.left+a.width-p))}}),e.ui.resizable,e.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var i=e(this).css(t).offset().top;0>i&&e(this).css("top",t.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",t)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&e(i).blur()}catch(n){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+e(this).css("z-index")}).get(),a=Math.max.apply(null,n);return a>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",a+1),s=!0),s&&!i&&this._trigger("focus",t),s},open:function(){var t=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var e=this._focusedElement;e||(e=this.element.find("[autofocus]")),e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function i(){var t=this.document[0].activeElement,i=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);i||this._focusTabbable()}t.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE)return t.preventDefault(),this.close(t),void 0;
if(t.keyCode===e.ui.keyCode.TAB&&!t.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");t.target!==n[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==s[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay(function(){n.focus()}),t.preventDefault()):(this._delay(function(){s.focus()}),t.preventDefault())}},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),e.isEmptyObject(i)||e.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),void 0):(e.each(i,function(i,s){var n,a;s=e.isFunction(s)?{click:s,text:i}:s,s=e.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(t.element[0],arguments)},a={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,e("<button></button>",s).button(a).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){e(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,t(n))},drag:function(e,s){i._trigger("drag",e,t(s))},stop:function(n,a){var o=a.offset.left-i.document.scrollLeft(),r=a.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" "+"top"+(r>=0?"+":"")+r,of:i.window},e(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,t(a))}})},_makeResizable:function(){function t(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){e(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,t(n))},resize:function(e,s){i._trigger("resize",e,t(s))},stop:function(n,a){var o=i.uiDialog.offset(),r=o.left-i.document.scrollLeft(),h=o.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},e(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,t(a))}}).css("position",a)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=e(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),i=e.inArray(this,t);-1!==i&&t.splice(i,1)},_trackingInstances:function(){var e=this.document.data("ui-dialog-instances");return e||(e=[],this.document.data("ui-dialog-instances",e)),e},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,n={};e.each(t,function(e,t){i._setOption(e,t),e in i.sizeRelatedOptions&&(s=!0),e in i.resizableRelatedOptions&&(n[e]=t)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,t){var i,s,n=this.uiDialog;"dialogClass"===e&&n.removeClass(this.options.dialogClass).addClass(t),"disabled"!==e&&(this._super(e,t),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:""+t}),"draggable"===e&&(i=n.is(":data(ui-draggable)"),i&&!t&&n.draggable("destroy"),!i&&t&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(s=n.is(":data(ui-resizable)"),s&&!t&&n.resizable("destroy"),s&&"string"==typeof t&&n.resizable("option","handles",t),s||t===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var e,t,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),e=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),t=Math.max(0,s.minHeight-e),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-e):"none","auto"===s.height?this.element.css({minHeight:t,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay(function(){t=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(e){t||this._allowInteraction(e)||(e.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var e=this.document.data("ui-dialog-overlays")-1;e?this.document.data("ui-dialog-overlays",e):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}}),e.widget("ui.droppable",{version:"1.11.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(s)?s:function(e){return e.is(s)},this.proportions=function(){return arguments.length?(t=arguments[0],void 0):t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[],e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){for(var t=0;e.length>t;t++)e[t]===this&&e.splice(t,1)},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];this._splice(t),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){if("accept"===t)this.accept=e.isFunction(i)?i:function(e){return e.is(i)};else if("scope"===t){var s=e.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(t,i)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=e(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(i,{offset:i.element.offset()}),i.options.tolerance,t)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(){function e(e,t,i){return e>=t&&t+i>e}return function(t,i,s,n){if(!i.offset)return!1;var a=(t.positionAbs||t.position.absolute).left+t.margins.left,o=(t.positionAbs||t.position.absolute).top+t.margins.top,r=a+t.helperProportions.width,h=o+t.helperProportions.height,l=i.offset.left,u=i.offset.top,d=l+i.proportions().width,c=u+i.proportions().height;switch(s){case"fit":return a>=l&&d>=r&&o>=u&&c>=h;case"intersect":return a+t.helperProportions.width/2>l&&d>r-t.helperProportions.width/2&&o+t.helperProportions.height/2>u&&c>h-t.helperProportions.height/2;case"pointer":return e(n.pageY,u,i.proportions().height)&&e(n.pageX,l,i.proportions().width);case"touch":return(o>=u&&c>=o||h>=u&&c>=h||u>o&&h>c)&&(a>=l&&d>=a||r>=l&&d>=r||l>a&&r>d);default:return!1}}}(),e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions().height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions({width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight}))}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance,i),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e(this).droppable("instance").options.scope===n}),a.length&&(s=e(a[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}},e.ui.droppable;var y="ui-effects-",b=e;e.effects={effect:{}},function(e,t){function i(e,t,i){var s=d[t.type]||{};return null==e?i||!t.def?null:t.def:(e=s.floor?~~e:parseFloat(e),isNaN(e)?t.def:s.mod?(e+s.mod)%s.mod:0>e?0:e>s.max?s.max:e)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(e,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[u[l].cache]=o[u[l].cache],n=s._rgba=o._rgba,!1):t}),n.length?("0,0,0,0"===n.join()&&e.extend(n,a.transparent),s):a[i]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,s,n){return new e.Color.fn.parse(t,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},c=l.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",c.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(n,o,r,h){if(n===t)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=e(n).css(o),o=t);var d=this,c=e.type(n),p=this._rgba=[];return o!==t&&(n=[n,o,r,h],c="array"),"string"===c?this.parse(s(n)||a._default):"array"===c?(f(u.rgba.props,function(e,t){p[t.idx]=i(n[t.idx],t)}),this):"object"===c?(n instanceof l?f(u,function(e,t){n[t.cache]&&(d[t.cache]=n[t.cache].slice())}):f(u,function(t,s){var a=s.cache;f(s.props,function(e,t){if(!d[a]&&s.to){if("alpha"===e||null==n[e])return;d[a]=s.to(d._rgba)}d[a][t.idx]=i(n[e],t,!0)}),d[a]&&0>e.inArray(null,d[a].slice(0,3))&&(d[a][3]=1,s.from&&(d._rgba=s.from(d[a])))}),this):t},is:function(e){var i=l(e),s=!0,n=this;return f(u,function(e,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(e,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:t})),s}),s},_space:function(){var e=[],t=this;return f(u,function(i,s){t[s.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var s=l(e),n=s._space(),a=u[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(e,n){var a=n.idx,o=r[a],l=s[a],u=d[n.type]||{};null!==l&&(null===o?h[a]=l:(u.mod&&(l-o>u.mod/2?o+=u.mod:o-l>u.mod/2&&(o-=u.mod)),h[a]=i((l-o)*t+o,n)))}),this[n](h)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(t)._rgba;return l(e.map(i,function(e,t){return(1-s)*n[t]+s*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,s=e[0]/255,n=e[1]/255,a=e[2]/255,o=e[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,u=r+h,d=.5*u;return t=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==o?1:o]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],s=e[2],a=e[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,t+1/3)),Math.round(255*n(r,o,t)),Math.round(255*n(r,o,t-1/3)),a]},f(u,function(s,n){var a=n.props,o=n.cache,h=n.to,u=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===t)return this[o].slice();var n,r=e.type(s),d="array"===r||"object"===r?s:arguments,c=this[o].slice();return f(a,function(e,t){var s=d["object"===r?e:t.idx];null==s&&(s=c[t.idx]),c[t.idx]=i(s,t)}),u?(n=l(u(c)),n[o]=c,n):l(c)},f(a,function(t,i){l.fn[t]||(l.fn[t]=function(n){var a,o=e.type(n),h="alpha"===t?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===o?u:("function"===o&&(n=n.call(this,u),o=e.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=u+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,n){var a,o,r="";if("transparent"!==n&&("string"!==e.type(n)||(a=s(n)))){if(n=l(a||n),!c.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{t.style[i]=n}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,s){t["border"+s+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(b),function(){function t(t){var i,s,n=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[e.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function i(t,i){var s,a,o={};for(s in i)a=i[s],t[s]!==a&&(n[s]||(e.fx.step[s]||!isNaN(parseFloat(a)))&&(o[s]=a));return o}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(b.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(n,a,o,r){var h=e.speed(a,o,r);return this.queue(function(){var a,o=e(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var i=e(this);return{el:i,start:t(this)}}),a=function(){e.each(s,function(e,t){n[t]&&o[t+"Class"](n[t])})},a(),l=l.map(function(){return this.end=t(this.el[0]),this.diff=i(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var t=this,i=e.Deferred(),s=e.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,s),i.promise()}),e.when.apply(e,l.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,s,n,a){return s?e.effects.animateClass.call(this,{add:i},s,n,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,s,n,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},s,n,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,s,n,a,o){return"boolean"==typeof s||void 0===s?n?e.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},s,n,a)}}(e.fn.toggleClass),switchClass:function(t,i,s,n,a){return e.effects.animateClass.call(this,{add:i,remove:t},s,n,a)}})}(),function(){function t(t,i,s,n){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(n=s,s=i,i={}),e.isFunction(s)&&(n=s,s=null),i&&e.extend(t,i),s=s||i.duration,t.duration=e.fx.off?0:"number"==typeof s?s:s in e.fx.speeds?e.fx.speeds[s]:e.fx.speeds._default,t.complete=n||i.complete,t}function i(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.11.4",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(y+t[i],e[0].style[t[i]])},restore:function(e,t){var i,s;for(s=0;t.length>s;s++)null!==t[s]&&(i=e.data(y+t[s]),void 0===i&&(i=""),e.css(t[s],i))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,s;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=e[1]/t.width}return{x:s,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},s=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return t.wrap(s),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),s=t.parent(),"static"===t.css("position")?(s.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,s){i[s]=t.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(n),s.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,s,n){return n=n||{},e.each(i,function(e,i){var a=t.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),e.fn.extend({effect:function(){function i(t){function i(){e.isFunction(a)&&a.call(n[0]),e.isFunction(t)&&t()}var n=e(this),a=s.complete,r=s.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),i()):o.call(n[0],s,i)}var s=t.apply(this,arguments),n=s.mode,a=s.queue,o=e.effects.effect[s.effect];return e.fx.off||!o?n?this[n](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):a===!1?this.each(i):this.queue(a||"fx",i)},show:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(e.fn.show),hide:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(e.fn.hide),toggle:function(e){return function(s){if(i(s)||"boolean"==typeof s)return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),s=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(s=[parseFloat(i),t])}),s}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}(),e.effects,e.effects.effect.blind=function(t,i){var s,n,a,o=e(this),r=/up|down|vertical/,h=/up|left|vertical|horizontal/,l=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(o,t.mode||"hide"),d=t.direction||"up",c=r.test(d),p=c?"height":"width",f=c?"top":"left",m=h.test(d),g={},v="show"===u;o.parent().is(".ui-effects-wrapper")?e.effects.save(o.parent(),l):e.effects.save(o,l),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n=s[p](),a=parseFloat(s.css(f))||0,g[p]=v?n:0,m||(o.css(c?"bottom":"right",0).css(c?"top":"left","auto").css({position:"absolute"}),g[f]=v?a:n+a),v&&(s.css(p,0),m||s.css(f,a+n)),s.animate(g,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){"hide"===u&&o.hide(),e.effects.restore(o,l),e.effects.removeWrapper(o),i()}})},e.effects.effect.bounce=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"effect"),l="hide"===h,u="show"===h,d=t.direction||"up",c=t.distance,p=t.times||5,f=2*p+(u||l?1:0),m=t.duration/f,g=t.easing,v="up"===d||"down"===d?"top":"left",y="up"===d||"left"===d,b=o.queue(),_=b.length;for((u||l)&&r.push("opacity"),e.effects.save(o,r),o.show(),e.effects.createWrapper(o),c||(c=o["top"===v?"outerHeight":"outerWidth"]()/3),u&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,y?2*-c:2*c).animate(a,m,g)),l&&(c/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g).animate(a,m,g),c=l?2*c:c/2;l&&(n={opacity:0},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g)),o.queue(function(){l&&o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}),_>1&&b.splice.apply(b,[1,0].concat(b.splice(_,f+1))),o.dequeue()},e.effects.effect.clip=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"hide"),l="show"===h,u=t.direction||"vertical",d="vertical"===u,c=d?"height":"width",p=d?"top":"left",f={};e.effects.save(o,r),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[c](),l&&(n.css(c,0),n.css(p,a/2)),f[c]=l?a:0,f[p]=l?0:a/2,n.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){l||o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}})},e.effects.effect.drop=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","opacity","height","width"],o=e.effects.setMode(n,t.mode||"hide"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h?"pos":"neg",d={opacity:r?1:0};e.effects.save(n,a),n.show(),e.effects.createWrapper(n),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===u?-s:s),d[l]=(r?"pos"===u?"+=":"-=":"pos"===u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.explode=function(t,i){function s(){b.push(this),b.length===d*c&&n()}function n(){p.css({visibility:"visible"}),e(b).remove(),m||p.hide(),i()}var a,o,r,h,l,u,d=t.pieces?Math.round(Math.sqrt(t.pieces)):3,c=d,p=e(this),f=e.effects.setMode(p,t.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/c),y=Math.ceil(p.outerHeight()/d),b=[];for(a=0;d>a;a++)for(h=g.top+a*y,u=a-(d-1)/2,o=0;c>o;o++)r=g.left+o*v,l=o-(c-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*y}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:y,left:r+(m?l*v:0),top:h+(m?u*y:0),opacity:m?0:1}).animate({left:r+(m?0:l*v),top:h+(m?0:u*y),opacity:m?1:0},t.duration||500,t.easing,s)},e.effects.effect.fade=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:t.duration,easing:t.easing,complete:i})},e.effects.effect.fold=function(t,i){var s,n,a=e(this),o=["position","top","bottom","left","right","height","width"],r=e.effects.setMode(a,t.mode||"hide"),h="show"===r,l="hide"===r,u=t.size||15,d=/([0-9]+)%/.exec(u),c=!!t.horizFirst,p=h!==c,f=p?["width","height"]:["height","width"],m=t.duration/2,g={},v={};e.effects.save(a,o),a.show(),s=e.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],d&&(u=parseInt(d[1],10)/100*n[l?0:1]),h&&s.css(c?{height:0,width:u}:{height:u,width:0}),g[f[0]]=h?n[0]:u,v[f[1]]=h?n[1]:0,s.animate(g,m,t.easing).animate(v,m,t.easing,function(){l&&a.hide(),e.effects.restore(a,o),e.effects.removeWrapper(a),i()})},e.effects.effect.highlight=function(t,i){var s=e(this),n=["backgroundImage","backgroundColor","opacity"],a=e.effects.setMode(s,t.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),e.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===a&&s.hide(),e.effects.restore(s,n),i()}})},e.effects.effect.size=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],u=["fontSize"],d=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],c=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),f=t.restore||"effect"!==p,m=t.scale||"both",g=t.origin||["middle","center"],v=o.css("position"),y=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===t.mode&&"show"===p?(o.from=t.to||b,o.to=t.from||s):(o.from=t.from||("show"===p?b:s),o.to=t.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===m||"both"===m)&&(a.from.y!==a.to.y&&(y=y.concat(d),o.from=e.effects.setTransition(o,d,a.from.y,o.from),o.to=e.effects.setTransition(o,d,a.to.y,o.to)),a.from.x!==a.to.x&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,a.from.x,o.from),o.to=e.effects.setTransition(o,c,a.to.x,o.to))),("content"===m||"both"===m)&&a.from.y!==a.to.y&&(y=y.concat(u).concat(l),o.from=e.effects.setTransition(o,u,a.from.y,o.from),o.to=e.effects.setTransition(o,u,a.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(n=e.effects.getBaseline(g,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===m||"both"===m)&&(d=d.concat(["marginTop","marginBottom"]).concat(u),c=c.concat(["marginLeft","marginRight"]),l=r.concat(d).concat(c),o.find("*[width]").each(function(){var i=e(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};
f&&e.effects.save(i,l),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=e.effects.setTransition(i,d,a.from.y,i.from),i.to=e.effects.setTransition(i,d,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=e.effects.setTransition(i,c,a.from.x,i.from),i.to=e.effects.setTransition(i,c,a.to.x,i.to)),i.css(i.from),i.animate(i.to,t.duration,t.easing,function(){f&&e.effects.restore(i,l)})})),o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),e.effects.restore(o,y),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,i){var s=parseInt(i,10),n=e?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),e.effects.removeWrapper(o),i()}})},e.effects.effect.scale=function(t,i){var s=e(this),n=e.extend(!0,{},t),a=e.effects.setMode(s,t.mode||"effect"),o=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===a?0:100),r=t.direction||"both",h=t.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},u={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=h||["middle","center"],n.restore=!0),n.from=t.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*u.y,width:l.width*u.x,outerHeight:l.outerHeight*u.y,outerWidth:l.outerWidth*u.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},e.effects.effect.puff=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"hide"),a="hide"===n,o=parseInt(t.percent,10)||150,r=o/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(t)},e.effects.effect.pulsate=function(t,i){var s,n=e(this),a=e.effects.setMode(n,t.mode||"show"),o="show"===a,r="hide"===a,h=o||"hide"===a,l=2*(t.times||5)+(h?1:0),u=t.duration/l,d=0,c=n.queue(),p=c.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),d=1),s=1;l>s;s++)n.animate({opacity:d},u,t.easing),d=1-d;n.animate({opacity:d},u,t.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&c.splice.apply(c,[1,0].concat(c.splice(p,l+1))),n.dequeue()},e.effects.effect.shake=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","height","width"],o=e.effects.setMode(n,t.mode||"effect"),r=t.direction||"left",h=t.distance||20,l=t.times||3,u=2*l+1,d=Math.round(t.duration/u),c="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},m={},g={},v=n.queue(),y=v.length;for(e.effects.save(n,a),n.show(),e.effects.createWrapper(n),f[c]=(p?"-=":"+=")+h,m[c]=(p?"+=":"-=")+2*h,g[c]=(p?"-=":"+=")+2*h,n.animate(f,d,t.easing),s=1;l>s;s++)n.animate(m,d,t.easing).animate(g,d,t.easing);n.animate(m,d,t.easing).animate(f,d/2,t.easing).queue(function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}),y>1&&v.splice.apply(v,[1,0].concat(v.splice(y,u+1))),n.dequeue()},e.effects.effect.slide=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","width","height"],o=e.effects.setMode(n,t.mode||"show"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h,d={};e.effects.save(n,a),n.show(),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,u?isNaN(s)?"-"+s:-s:s),d[l]=(r?u?"+=":"-=":u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.transfer=function(t,i){var s=e(this),n=e(t.to),a="fixed"===n.css("position"),o=e("body"),r=a?o.scrollTop():0,h=a?o.scrollLeft():0,l=n.offset(),u={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},d=s.offset(),c=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:d.top-r,left:d.left-h,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(u,t.duration,t.easing,function(){c.remove(),i()})},e.widget("ui.progressbar",{version:"1.11.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){return void 0===e?this.options.value:(this.options.value=this._constrainedValue(e),this._refreshValue(),void 0)},_constrainedValue:function(e){return void 0===e&&(e=this.options.value),this.indeterminate=e===!1,"number"!=typeof e&&(e=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var t=e.value;delete e.value,this._super(e),this.options.value=this._constrainedValue(t),this._refreshValue()},_setOption:function(e,t){"max"===e&&(t=Math.max(this.min,t)),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}}),e.widget("ui.selectable",e.ui.mouse,{version:"1.11.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,s=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().addBack().each(function(){var s,n=e.data(this,"selectable-item");return n?(s=!t.metaKey&&!t.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",t,{selecting:n.element}):i._trigger("unselecting",t,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=t.pageX,h=t.pageY;return a>r&&(i=r,r=a,a=i),o>h&&(i=h,h=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:h-o}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||a>i.right||i.top>h||o>i.bottom):"fit"===n.tolerance&&(l=i.left>a&&r>i.right&&i.top>o&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}}),e.widget("ui.selectmenu",{version:"1.11.4",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var t=this;this.label=e("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(e){this.button.focus(),e.preventDefault()}}),this.element.hide(),this.button=e("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),e("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=e("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){t.menuItems||t._refreshMenu()}),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var t=this;this.menu=e("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=e("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:"listbox",select:function(e,i){e.preventDefault(),t._setSelection(),t._select(i.item.data("ui-selectmenu-item"),e)},focus:function(e,i){var s=i.item.data("ui-selectmenu-item");null!=t.focusIndex&&s.index!==t.focusIndex&&(t._trigger("focus",e,{item:s}),t.isOpen||t._select(s,e)),t.focusIndex=s.index,t.button.attr("aria-activedescendant",t.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var e,t=this.element.find("option");t.length&&(this._parseOptions(t),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),e=this._getSelectedItem(),this.menuInstance.focus(null,e),this._setAria(e.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(e){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",e))},_position:function(){this.menuWrap.position(e.extend({of:this.button},this.options.position))},close:function(e){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",e))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(t,i){var s=this,n="";e.each(i,function(i,a){a.optgroup!==n&&(e("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(a.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:a.optgroup}).appendTo(t),n=a.optgroup),s._renderItemData(t,a)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-selectmenu-item",t)},_renderItem:function(t,i){var s=e("<li>");return i.disabled&&s.addClass("ui-state-disabled"),this._setText(s,i.label),s.appendTo(t)},_setText:function(e,t){t?e.text(t):e.html("&#160;")},_move:function(e,t){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex):(i=this.menuItems.eq(this.element[0].selectedIndex),n+=":not(.ui-state-disabled)"),s="first"===e||"last"===e?i["first"===e?"prevAll":"nextAll"](n).eq(-1):i[e+"All"](n).eq(0),s.length&&this.menuInstance.focus(t,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(e){this[this.isOpen?"close":"open"](e)},_setSelection:function(){var e;this.range&&(window.getSelection?(e=window.getSelection(),e.removeAllRanges(),e.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(t){this.isOpen&&(e(t.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(t))}},_buttonEvents:{mousedown:function(){var e;window.getSelection?(e=window.getSelection(),e.rangeCount&&(this.range=e.getRangeAt(0))):this.range=document.selection.createRange()},click:function(e){this._setSelection(),this._toggle(e)},keydown:function(t){var i=!0;switch(t.keyCode){case e.ui.keyCode.TAB:case e.ui.keyCode.ESCAPE:this.close(t),i=!1;break;case e.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(t);break;case e.ui.keyCode.UP:t.altKey?this._toggle(t):this._move("prev",t);break;case e.ui.keyCode.DOWN:t.altKey?this._toggle(t):this._move("next",t);break;case e.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(t):this._toggle(t);break;case e.ui.keyCode.LEFT:this._move("prev",t);break;case e.ui.keyCode.RIGHT:this._move("next",t);break;case e.ui.keyCode.HOME:case e.ui.keyCode.PAGE_UP:this._move("first",t);break;case e.ui.keyCode.END:case e.ui.keyCode.PAGE_DOWN:this._move("last",t);break;default:this.menu.trigger(t),i=!1}i&&t.preventDefault()}},_selectFocusedItem:function(e){var t=this.menuItems.eq(this.focusIndex);t.hasClass("ui-state-disabled")||this._select(t.data("ui-selectmenu-item"),e)},_select:function(e,t){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=e.index,this._setText(this.buttonText,e.label),this._setAria(e),this._trigger("select",t,{item:e}),e.index!==i&&this._trigger("change",t,{item:e}),this.close(t)},_setAria:function(e){var t=this.menuItems.eq(e.index).attr("id");this.button.attr({"aria-labelledby":t,"aria-activedescendant":t}),this.menu.attr("aria-activedescendant",t)},_setOption:function(e,t){"icons"===e&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button),this._super(e,t),"appendTo"===e&&this.menuWrap.appendTo(this._appendTo()),"disabled"===e&&(this.menuInstance.option("disabled",t),this.button.toggleClass("ui-state-disabled",t).attr("aria-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===e&&this._resizeButton()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var e=this.options.width;e||(e=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(e)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(t){var i=[];t.each(function(t,s){var n=e(s),a=n.parent("optgroup");i.push({element:n,index:t,value:n.val(),label:n.text(),optgroup:a.attr("label")||"",disabled:a.prop("disabled")||n.prop("disabled")})}),this.items=i},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)}}),e.widget("ui.slider",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;i>t;t++)o.push(a);this.handles=n.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,r,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(n>i||n===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(n=i,a=e(this),o=t)}),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-a.width()/2,top:t.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(n=this.values(),n[t]=i,a=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),s=this.values(t?0:1),a!==!1&&this.values(t,i))):i!==this.value()&&(a=this._trigger("slide",e,{handle:this.handles[t],value:i}),a!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),void 0;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!i),this._super(t,i),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var e=this.options.max,t=this._valueMin(),i=this.options.step,s=Math.floor(+(e-t).toFixed(this._precision())/i)*i;e=s+t,this.max=parseFloat(e.toFixed(this._precision()))},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(t){var i,s,n,a,o=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(t.target).addClass("ui-state-active"),i=this._start(t,o),i===!1))return}switch(a=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(o):this.value(),t.keyCode){case e.ui.keyCode.HOME:n=this._valueMin();break;case e.ui.keyCode.END:n=this._valueMax();break;case e.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(t,o,n)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}}),e.widget("ui.sortable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,i){return e>=t&&t+i>e},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(e,t){this._super(e,t),"handle"===e&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,a.widgetName+"-item")===a?(s=e(this),!1):void 0}),e.data(t.target,a.widgetName+"-item")===a&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));
return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-this.document.scrollTop()<o.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(t.pageY-this.document.scrollTop())<o.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),t.pageX-this.document.scrollLeft()<o.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(t.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=e.left,o=a+e.width,r=e.top,h=r+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>r&&h>s+l,c="y"===this.options.axis||t+u>a&&o>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(e){var t="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),s=t&&i,n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return s?this.floating?a&&"right"===a||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&t||"up"===s&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){r.push(this)}var s,n,a,o,r=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(a=e(l[s],this.document[0]),n=a.length-1;n>=0;n--)o=e.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([e.isFunction(o.options.items)?o.options.items.call(o.element):e(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(n=e(c[i],this.document[0]),s=n.length-1;s>=0;s--)a=e.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(d.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a));for(i=d.length-1;i>=0;i--)for(o=d[i][1],r=d[i][0],s=0,l=r.length;l>s;s++)h=e(r[s]),h.data(this.widgetName+"-item",o),u.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),n=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tbody"===s?t._createTrPlaceholder(t.currentItem.find("tr").eq(0),e("<tr>",t.document[0]).appendTo(n)):"tr"===s?t._createTrPlaceholder(t.currentItem,n):"img"===s&&n.attr("src",t.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(e,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_createTrPlaceholder:function(t,i){var s=this;t.children().each(function(){e("<td>&#160;</td>",s.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(t){var i,s,n,a,o,r,h,l,u,d,c=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!e.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(c&&e.contains(this.containers[i].element[0],c.element[0]))continue;c=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0);if(c)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,a=null,u=c.floating||this._isFloating(this.currentItem),o=u?"left":"top",r=u?"width":"height",d=u?"clientX":"clientY",s=this.items.length-1;s>=0;s--)e.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[o],l=!1,t[d]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(t[d]-h)&&(n=Math.abs(t[d]-h),a=this.items[s],this.direction=l?"up":"down"));if(!a&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;a?this._rearrange(t,a,null,!0):this._rearrange(t,null,this.containers[p].element,!0),this._trigger("change",t,this._uiHash()),this.containers[p]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.width():this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(t=e(n.containment)[0],i=e(n.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n=this.options,a=t.pageX,o=t.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){function i(e,t,i){return function(s){i._trigger(e,s,t._uiHash(t))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&n.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||n.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(n.push(function(e){this._trigger("remove",e,this._uiHash())}),n.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)t||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!t){for(s=0;n.length>s;s++)n[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}}),e.widget("ui.spinner",{version:"1.11.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},i=this.element;return e.each(["min","max","step"],function(e,s){var n=i.attr(s);void 0!==n&&n.length&&(t[s]=n)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e),void 0)},mousewheel:function(e,t){if(t){if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()}},"mousedown .ui-spinner-button":function(t){function i(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(t)!==!1&&this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){return e(t.currentTarget).hasClass("ui-state-active")?this._start(t)===!1?!1:(this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*e.height())&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var i=this.options,s=e.ui.keyCode;switch(t.keyCode){case s.UP:return this._repeat(null,1,t),!0;case s.DOWN:return this._repeat(null,-1,t),!0;case s.PAGE_UP:return this._repeat(null,i.page,t),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return this.spinning||this._trigger("start",e)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(e,t,i){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,i)},e),this._spin(t*this.options.step,i)},_spin:function(e,t){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+e*this._increment(this.counter)),this.spinning&&this._trigger("spin",t,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(t){var i=this.options.incremental;return i?e.isFunction(i)?i(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_adjustValue:function(e){var t,i,s=this.options;return t=null!==s.min?s.min:0,i=e-t,i=Math.round(i/s.step)*s.step,e=t+i,e=parseFloat(e.toFixed(this._precision())),null!==s.max&&e>s.max?s.max:null!==s.min&&s.min>e?s.min:e},_stop:function(e){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e))},_setOption:function(e,t){if("culture"===e||"numberFormat"===e){var i=this._parse(this.element.val());return this.options[e]=t,this.element.val(this._format(i)),void 0}("max"===e||"min"===e||"step"===e)&&"string"==typeof t&&(t=this._parse(t)),"icons"===e&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),this._super(e,t),"disabled"===e&&(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable"))},_setOptions:h(function(e){this._super(e)}),_parse:function(e){return"string"==typeof e&&""!==e&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),""===e||isNaN(e)?null:e},_format:function(e){return""===e?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var e=this.value();return null===e?!1:e===this._adjustValue(e)},_value:function(e,t){var i;""!==e&&(i=this._parse(e),null!==i&&(t||(i=this._adjustValue(i)),e=this._format(i))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:h(function(e){this._stepUp(e)}),_stepUp:function(e){this._start()&&(this._spin((e||1)*this.options.step),this._stop())},stepDown:h(function(e){this._stepDown(e)}),_stepDown:function(e){this._start()&&(this._spin((e||1)*-this.options.step),this._stop())},pageUp:h(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:h(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){return arguments.length?(h(this._value).call(this,e),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),e.widget("ui.tabs",{version:"1.11.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var e=/#.*$/;return function(t){var i,s;t=t.cloneNode(!1),i=t.href.replace(e,""),s=location.href.replace(e,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return t.hash.length>1&&i===s}}(),_create:function(){var t=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible),this._processTabs(),i.active=this._initialActive(),e.isArray(i.disabled)&&(i.disabled=e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):e(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var t=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===t&&(s&&this.tabs.each(function(i,n){return e(n).attr("aria-controls")===s?(t=i,!1):void 0}),null===t&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===t||-1===t)&&(t=this.tabs.length?0:!1)),t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),-1===t&&(t=i?!1:0)),!i&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var i=e(this.document[0].activeElement).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(t)){switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:s++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:n=!1,s--;break;case e.ui.keyCode.END:s=this.anchors.length-1;break;case e.ui.keyCode.HOME:s=0;break;case e.ui.keyCode.SPACE:return t.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case e.ui.keyCode.ENTER:return t.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}t.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),t.ctrlKey||t.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){return t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(t,i){function s(){return t>n&&(t=0),0>t&&(t=n),t}for(var n=this.tabs.length-1;-1!==e.inArray(s(),this.options.disabled);)t=i?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):"disabled"===e?(this._setupDisabled(t),void 0):(this._super(e,t),"collapsible"===e&&(this.element.toggleClass("ui-tabs-collapsible",t),t||this.options.active!==!1||this._activate(0)),"event"===e&&this._setupEvents(t),"heightStyle"===e&&this._setupHeightStyle(t),void 0)},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,i=this.tablist.children(":has(a[href])");t.disabled=e.map(i.filter(".ui-state-disabled"),function(e){return i.index(e)}),this._processTabs(),t.active!==!1&&this.anchors.length?this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=e()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this,i=this.tabs,s=this.anchors,n=this.panels;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(i,s){var n,a,o,r=e(s).uniqueId().attr("id"),h=e(s).closest("li"),l=h.attr("aria-controls");t._isLocal(s)?(n=s.hash,o=n.substring(1),a=t.element.find(t._sanitizeSelector(n))):(o=h.attr("aria-controls")||e({}).uniqueId()[0].id,n="#"+o,a=t.element.find(n),a.length||(a=t._createPanel(o),a.insertAfter(t.panels[i-1]||t.tablist)),a.attr("aria-live","polite")),a.length&&(t.panels=t.panels.add(a)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":o,"aria-labelledby":r}),a.attr("aria-labelledby",r)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var i,s=0;i=this.tabs[s];s++)t===!0||-1!==e.inArray(s,t)?e(i).addClass("ui-state-disabled").attr("aria-disabled","true"):e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(e){e.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,s=this.element.parent();"fill"===t?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),s=t.css("position");"absolute"!==s&&"fixed"!==s&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,i-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,e(this).height("").height())}).height(i))},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?e():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):e(),u={oldTab:s,oldPanel:l,newTab:r?e():a,newPanel:h};t.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",t,u)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?e():a,this.xhr&&this.xhr.abort(),l.length||h.length||e.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),t),this._toggle(t,u))},_toggle:function(t,i){function s(){a.running=!1,a._trigger("activate",t,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(t){var i,s=this._findActive(t);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),i=t.data("ui-tabs-aria-controls");i?t.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(t){var i=this.options.disabled;i!==!1&&(void 0===t?i=!1:(t=this._getIndex(t),i=e.isArray(i)?e.map(i,function(e){return e!==t?e:null}):e.map(this.tabs,function(e,i){return i!==t?i:null})),this._setupDisabled(i))},disable:function(t){var i=this.options.disabled;if(i!==!0){if(void 0===t)i=!0;else{if(t=this._getIndex(t),-1!==e.inArray(t,i))return;i=e.isArray(i)?e.merge([t],i).sort():[t]}this._setupDisabled(i)}},load:function(t,i){t=this._getIndex(t);var s=this,n=this.tabs.eq(t),a=n.find(".ui-tabs-anchor"),o=this._getPanelForTab(n),r={tab:n,panel:o},h=function(e,t){"abort"===t&&s.panels.stop(!1,!0),n.removeClass("ui-tabs-loading"),o.removeAttr("aria-busy"),e===s.xhr&&delete s.xhr};this._isLocal(a[0])||(this.xhr=e.ajax(this._ajaxSettings(a,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(n.addClass("ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.done(function(e,t,n){setTimeout(function(){o.html(e),s._trigger("load",i,r),h(n,t)},1)}).fail(function(e,t){setTimeout(function(){h(e,t)},1)})))},_ajaxSettings:function(t,i,s){var n=this;return{url:t.attr("href"),beforeSend:function(t,a){return n._trigger("beforeLoad",i,e.extend({jqXHR:t,ajaxSettings:a},s))}}},_getPanelForTab:function(t){var i=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),e.widget("ui.tooltip",{version:"1.11.4",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(t,i){var s=(t.attr("aria-describedby")||"").split(/\s+/);s.push(i),t.data("ui-tooltip-id",i).attr("aria-describedby",e.trim(s.join(" ")))},_removeDescribedBy:function(t){var i=t.data("ui-tooltip-id"),s=(t.attr("aria-describedby")||"").split(/\s+/),n=e.inArray(i,s);-1!==n&&s.splice(n,1),t.removeData("ui-tooltip-id"),s=e.trim(s.join(" ")),s?t.attr("aria-describedby",s):t.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=e("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(t,i){var s=this;return"disabled"===t?(this[i?"_disable":"_enable"](),this.options[t]=i,void 0):(this._super(t,i),"content"===t&&e.each(this.tooltips,function(e,t){s._updateContent(t.element)}),void 0)},_disable:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur");n.target=n.currentTarget=s.element[0],t.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var i=this,s=e(t?t.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&s.parents().each(function(){var t,s=e(this);s.data("ui-tooltip-open")&&(t=e.Event("blur"),t.target=t.currentTarget=this,i.close(t,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._registerCloseHandlers(t,s),this._updateContent(s,t))},_updateContent:function(e,t){var i,s=this.options.content,n=this,a=t?t.type:null;return"string"==typeof s?this._open(t,e,s):(i=s.call(e[0],function(i){n._delay(function(){e.data("ui-tooltip-open")&&(t&&(t.type=a),this._open(t,e,i))})}),i&&this._open(t,e,i),void 0)},_open:function(t,i,s){function n(e){l.of=e,o.is(":hidden")||o.position(l)}var a,o,r,h,l=e.extend({},this.options.position);if(s){if(a=this._find(i))return a.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(t&&"mouseover"===t.type?i.attr("title",""):i.removeAttr("title")),a=this._tooltip(i),o=a.tooltip,this._addDescribedBy(i,o.attr("id")),o.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),s.clone?(h=s.clone(),h.removeAttr("id").find("[id]").removeAttr("id")):h=s,e("<div>").html(h).appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:n}),n(t)):o.position(e.extend({of:i},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){o.is(":visible")&&(n(l.of),clearInterval(r))},e.fx.interval)),this._trigger("open",t,{tooltip:o})}},_registerCloseHandlers:function(t,i){var s={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var s=e.Event(t);s.currentTarget=i[0],this.close(s,!0)}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip)}),t&&"mouseover"!==t.type||(s.mouseleave="close"),t&&"focusin"!==t.type||(s.focusout="close"),this._on(!0,i,s)},close:function(t){var i,s=this,n=e(t?t.currentTarget:this.element),a=this._find(n);return a?(i=a.tooltip,a.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),a.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(e(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&e.each(this.parents,function(t,i){e(i.element).attr("title",i.title),delete s.parents[t]}),a.closing=!0,this._trigger("close",t,{tooltip:i}),a.hiding||(a.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(t){var i=e("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),s=i.uniqueId().attr("id");return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[s]={element:t,tooltip:i}},_find:function(e){var t=e.data("ui-tooltip-id");return t?this.tooltips[t]:null},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur"),a=s.element;n.target=n.currentTarget=a[0],t.close(n,!0),e("#"+i).remove(),a.data("ui-tooltip-title")&&(a.attr("title")||a.attr("title",a.data("ui-tooltip-title")),a.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}})});
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
d3 = function() {
  var π = Math.PI, ε = 1e-6, d3 = {
    version: "3.0.8"
  }, d3_radians = π / 180, d3_degrees = 180 / π, d3_document = document, d3_window = window;
  function d3_target(d) {
    return d.target;
  }
  function d3_source(d) {
    return d.source;
  }
  var d3_format_decimalPoint = ".", d3_format_thousandsSeparator = ",", d3_format_grouping = [ 3, 3 ];
  if (!Date.now) Date.now = function() {
    return +new Date();
  };
  try {
    d3_document.createElement("div").style.setProperty("opacity", 0, "");
  } catch (error) {
    var d3_style_prototype = d3_window.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
    d3_style_prototype.setProperty = function(name, value, priority) {
      d3_style_setProperty.call(this, name, value + "", priority);
    };
  }
  function d3_class(ctor, properties) {
    try {
      for (var key in properties) {
        Object.defineProperty(ctor.prototype, key, {
          value: properties[key],
          enumerable: false
        });
      }
    } catch (e) {
      ctor.prototype = properties;
    }
  }
  var d3_array = d3_arraySlice;
  function d3_arrayCopy(pseudoarray) {
    var i = -1, n = pseudoarray.length, array = [];
    while (++i < n) array.push(pseudoarray[i]);
    return array;
  }
  function d3_arraySlice(pseudoarray) {
    return Array.prototype.slice.call(pseudoarray);
  }
  try {
    d3_array(d3_document.documentElement.childNodes)[0].nodeType;
  } catch (e) {
    d3_array = d3_arrayCopy;
  }
  var d3_arraySubclass = [].__proto__ ? function(array, prototype) {
    array.__proto__ = prototype;
  } : function(array, prototype) {
    for (var property in prototype) array[property] = prototype[property];
  };
  d3.map = function(object) {
    var map = new d3_Map();
    for (var key in object) map.set(key, object[key]);
    return map;
  };
  function d3_Map() {}
  d3_class(d3_Map, {
    has: function(key) {
      return d3_map_prefix + key in this;
    },
    get: function(key) {
      return this[d3_map_prefix + key];
    },
    set: function(key, value) {
      return this[d3_map_prefix + key] = value;
    },
    remove: function(key) {
      key = d3_map_prefix + key;
      return key in this && delete this[key];
    },
    keys: function() {
      var keys = [];
      this.forEach(function(key) {
        keys.push(key);
      });
      return keys;
    },
    values: function() {
      var values = [];
      this.forEach(function(key, value) {
        values.push(value);
      });
      return values;
    },
    entries: function() {
      var entries = [];
      this.forEach(function(key, value) {
        entries.push({
          key: key,
          value: value
        });
      });
      return entries;
    },
    forEach: function(f) {
      for (var key in this) {
        if (key.charCodeAt(0) === d3_map_prefixCode) {
          f.call(this, key.substring(1), this[key]);
        }
      }
    }
  });
  var d3_map_prefix = "\0", d3_map_prefixCode = d3_map_prefix.charCodeAt(0);
  function d3_identity(d) {
    return d;
  }
  function d3_true() {
    return true;
  }
  function d3_functor(v) {
    return typeof v === "function" ? v : function() {
      return v;
    };
  }
  d3.functor = d3_functor;
  d3.rebind = function(target, source) {
    var i = 1, n = arguments.length, method;
    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
    return target;
  };
  function d3_rebind(target, source, method) {
    return function() {
      var value = method.apply(source, arguments);
      return value === source ? target : value;
    };
  }
  d3.ascending = function(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  };
  d3.descending = function(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  };
  d3.mean = function(array, f) {
    var n = array.length, a, m = 0, i = -1, j = 0;
    if (arguments.length === 1) {
      while (++i < n) if (d3_number(a = array[i])) m += (a - m) / ++j;
    } else {
      while (++i < n) if (d3_number(a = f.call(array, array[i], i))) m += (a - m) / ++j;
    }
    return j ? m : undefined;
  };
  d3.median = function(array, f) {
    if (arguments.length > 1) array = array.map(f);
    array = array.filter(d3_number);
    return array.length ? d3.quantile(array.sort(d3.ascending), .5) : undefined;
  };
  d3.min = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n && ((a = array[i]) == null || a != a)) a = undefined;
      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
    } else {
      while (++i < n && ((a = f.call(array, array[i], i)) == null || a != a)) a = undefined;
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
    }
    return a;
  };
  d3.max = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n && ((a = array[i]) == null || a != a)) a = undefined;
      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
    } else {
      while (++i < n && ((a = f.call(array, array[i], i)) == null || a != a)) a = undefined;
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
    }
    return a;
  };
  d3.extent = function(array, f) {
    var i = -1, n = array.length, a, b, c;
    if (arguments.length === 1) {
      while (++i < n && ((a = c = array[i]) == null || a != a)) a = c = undefined;
      while (++i < n) if ((b = array[i]) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    } else {
      while (++i < n && ((a = c = f.call(array, array[i], i)) == null || a != a)) a = undefined;
      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    }
    return [ a, c ];
  };
  d3.random = {
    normal: function(µ, σ) {
      var n = arguments.length;
      if (n < 2) σ = 1;
      if (n < 1) µ = 0;
      return function() {
        var x, y, r;
        do {
          x = Math.random() * 2 - 1;
          y = Math.random() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);
        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
      };
    },
    logNormal: function() {
      var random = d3.random.normal.apply(d3, arguments);
      return function() {
        return Math.exp(random());
      };
    },
    irwinHall: function(m) {
      return function() {
        for (var s = 0, j = 0; j < m; j++) s += Math.random();
        return s / m;
      };
    }
  };
  function d3_number(x) {
    return x != null && !isNaN(x);
  }
  d3.sum = function(array, f) {
    var s = 0, n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (!isNaN(a = +array[i])) s += a;
    } else {
      while (++i < n) if (!isNaN(a = +f.call(array, array[i], i))) s += a;
    }
    return s;
  };
  d3.quantile = function(values, p) {
    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
    return e ? v + e * (values[h] - v) : v;
  };
  d3.shuffle = function(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m], array[m] = array[i], array[i] = t;
    }
    return array;
  };
  d3.transpose = function(matrix) {
    return d3.zip.apply(d3, matrix);
  };
  d3.zip = function() {
    if (!(n = arguments.length)) return [];
    for (var i = -1, m = d3.min(arguments, d3_zipLength), zips = new Array(m); ++i < m; ) {
      for (var j = -1, n, zip = zips[i] = new Array(n); ++j < n; ) {
        zip[j] = arguments[j][i];
      }
    }
    return zips;
  };
  function d3_zipLength(d) {
    return d.length;
  }
  d3.bisector = function(f) {
    return {
      left: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (f.call(a, a[mid], mid) < x) lo = mid + 1; else hi = mid;
        }
        return lo;
      },
      right: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (x < f.call(a, a[mid], mid)) hi = mid; else lo = mid + 1;
        }
        return lo;
      }
    };
  };
  var d3_bisector = d3.bisector(function(d) {
    return d;
  });
  d3.bisectLeft = d3_bisector.left;
  d3.bisect = d3.bisectRight = d3_bisector.right;
  d3.nest = function() {
    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
    function map(array, depth) {
      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
      var i = -1, n = array.length, key = keys[depth++], keyValue, object, valuesByKey = new d3_Map(), values, o = {};
      while (++i < n) {
        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
          values.push(object);
        } else {
          valuesByKey.set(keyValue, [ object ]);
        }
      }
      valuesByKey.forEach(function(keyValue, values) {
        o[keyValue] = map(values, depth);
      });
      return o;
    }
    function entries(map, depth) {
      if (depth >= keys.length) return map;
      var a = [], sortKey = sortKeys[depth++], key;
      for (key in map) {
        a.push({
          key: key,
          values: entries(map[key], depth)
        });
      }
      if (sortKey) a.sort(function(a, b) {
        return sortKey(a.key, b.key);
      });
      return a;
    }
    nest.map = function(array) {
      return map(array, 0);
    };
    nest.entries = function(array) {
      return entries(map(array, 0), 0);
    };
    nest.key = function(d) {
      keys.push(d);
      return nest;
    };
    nest.sortKeys = function(order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    };
    nest.sortValues = function(order) {
      sortValues = order;
      return nest;
    };
    nest.rollup = function(f) {
      rollup = f;
      return nest;
    };
    return nest;
  };
  d3.keys = function(map) {
    var keys = [];
    for (var key in map) keys.push(key);
    return keys;
  };
  d3.values = function(map) {
    var values = [];
    for (var key in map) values.push(map[key]);
    return values;
  };
  d3.entries = function(map) {
    var entries = [];
    for (var key in map) entries.push({
      key: key,
      value: map[key]
    });
    return entries;
  };
  d3.permute = function(array, indexes) {
    var permutes = [], i = -1, n = indexes.length;
    while (++i < n) permutes[i] = array[indexes[i]];
    return permutes;
  };
  d3.merge = function(arrays) {
    return Array.prototype.concat.apply([], arrays);
  };
  function d3_collapse(s) {
    return s.trim().replace(/\s+/g, " ");
  }
  d3.range = function(start, stop, step) {
    if (arguments.length < 3) {
      step = 1;
      if (arguments.length < 2) {
        stop = start;
        start = 0;
      }
    }
    if ((stop - start) / step === Infinity) throw new Error("infinite range");
    var range = [], k = d3_range_integerScale(Math.abs(step)), i = -1, j;
    start *= k, stop *= k, step *= k;
    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
    return range;
  };
  function d3_range_integerScale(x) {
    var k = 1;
    while (x * k % 1) k *= 10;
    return k;
  }
  d3.requote = function(s) {
    return s.replace(d3_requote_re, "\\$&");
  };
  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  d3.round = function(x, n) {
    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
  };
  d3.xhr = function(url, mimeType, callback) {
    var xhr = {}, dispatch = d3.dispatch("progress", "load", "error"), headers = {}, response = d3_identity, request = new (d3_window.XDomainRequest && /^(http(s)?:)?\/\//.test(url) ? XDomainRequest : XMLHttpRequest)();
    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
      request.readyState > 3 && respond();
    };
    function respond() {
      var s = request.status;
      !s && request.responseText || s >= 200 && s < 300 || s === 304 ? dispatch.load.call(xhr, response.call(xhr, request)) : dispatch.error.call(xhr, request);
    }
    request.onprogress = function(event) {
      var o = d3.event;
      d3.event = event;
      try {
        dispatch.progress.call(xhr, request);
      } finally {
        d3.event = o;
      }
    };
    xhr.header = function(name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers[name];
      if (value == null) delete headers[name]; else headers[name] = value + "";
      return xhr;
    };
    xhr.mimeType = function(value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return xhr;
    };
    xhr.response = function(value) {
      response = value;
      return xhr;
    };
    [ "get", "post" ].forEach(function(method) {
      xhr[method] = function() {
        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
      };
    });
    xhr.send = function(method, data, callback) {
      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
      request.open(method, url, true);
      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
      if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
      if (callback != null) xhr.on("error", callback).on("load", function(request) {
        callback(null, request);
      });
      request.send(data == null ? null : data);
      return xhr;
    };
    xhr.abort = function() {
      request.abort();
      return xhr;
    };
    d3.rebind(xhr, dispatch, "on");
    if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, 
    mimeType = null;
    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
  };
  function d3_xhr_fixCallback(callback) {
    return callback.length === 1 ? function(error, request) {
      callback(error == null ? request : null);
    } : callback;
  }
  d3.text = function() {
    return d3.xhr.apply(d3, arguments).response(d3_text);
  };
  function d3_text(request) {
    return request.responseText;
  }
  d3.json = function(url, callback) {
    return d3.xhr(url, "application/json", callback).response(d3_json);
  };
  function d3_json(request) {
    return JSON.parse(request.responseText);
  }
  d3.html = function(url, callback) {
    return d3.xhr(url, "text/html", callback).response(d3_html);
  };
  function d3_html(request) {
    var range = d3_document.createRange();
    range.selectNode(d3_document.body);
    return range.createContextualFragment(request.responseText);
  }
  d3.xml = function() {
    return d3.xhr.apply(d3, arguments).response(d3_xml);
  };
  function d3_xml(request) {
    return request.responseXML;
  }
  var d3_nsPrefix = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  d3.ns = {
    prefix: d3_nsPrefix,
    qualify: function(name) {
      var i = name.indexOf(":"), prefix = name;
      if (i >= 0) {
        prefix = name.substring(0, i);
        name = name.substring(i + 1);
      }
      return d3_nsPrefix.hasOwnProperty(prefix) ? {
        space: d3_nsPrefix[prefix],
        local: name
      } : name;
    }
  };
  d3.dispatch = function() {
    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    return dispatch;
  };
  function d3_dispatch() {}
  d3_dispatch.prototype.on = function(type, listener) {
    var i = type.indexOf("."), name = "";
    if (i > 0) {
      name = type.substring(i + 1);
      type = type.substring(0, i);
    }
    return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
  };
  function d3_dispatch_event(dispatch) {
    var listeners = [], listenerByName = new d3_Map();
    function event() {
      var z = listeners, i = -1, n = z.length, l;
      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
      return dispatch;
    }
    event.on = function(name, listener) {
      var l = listenerByName.get(name), i;
      if (arguments.length < 2) return l && l.on;
      if (l) {
        l.on = null;
        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
        listenerByName.remove(name);
      }
      if (listener) listeners.push(listenerByName.set(name, {
        on: listener
      }));
      return dispatch;
    };
    return event;
  }
  d3.format = function(specifier) {
    var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "", basePrefix = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, suffix = "", integer = false;
    if (precision) precision = +precision.substring(1);
    if (zfill || fill === "0" && align === "=") {
      zfill = fill = "0";
      align = "=";
      if (comma) width -= Math.floor((width - 1) / 4);
    }
    switch (type) {
     case "n":
      comma = true;
      type = "g";
      break;

     case "%":
      scale = 100;
      suffix = "%";
      type = "f";
      break;

     case "p":
      scale = 100;
      suffix = "%";
      type = "r";
      break;

     case "b":
     case "o":
     case "x":
     case "X":
      if (basePrefix) basePrefix = "0" + type.toLowerCase();

     case "c":
     case "d":
      integer = true;
      precision = 0;
      break;

     case "s":
      scale = -1;
      type = "r";
      break;
    }
    if (basePrefix === "#") basePrefix = "";
    if (type == "r" && !precision) type = "g";
    type = d3_format_types.get(type) || d3_format_typeDefault;
    var zcomma = zfill && comma;
    return function(value) {
      if (integer && value % 1) return "";
      var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign;
      if (scale < 0) {
        var prefix = d3.formatPrefix(value, precision);
        value = prefix.scale(value);
        suffix = prefix.symbol;
      } else {
        value *= scale;
      }
      value = type(value, precision);
      if (!zfill && comma) value = d3_format_group(value);
      var length = basePrefix.length + value.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
      if (zcomma) value = d3_format_group(padding + value);
      if (d3_format_decimalPoint) value.replace(".", d3_format_decimalPoint);
      negative += basePrefix;
      return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + suffix;
    };
  };
  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/;
  var d3_format_types = d3.map({
    b: function(x) {
      return x.toString(2);
    },
    c: function(x) {
      return String.fromCharCode(x);
    },
    o: function(x) {
      return x.toString(8);
    },
    x: function(x) {
      return x.toString(16);
    },
    X: function(x) {
      return x.toString(16).toUpperCase();
    },
    g: function(x, p) {
      return x.toPrecision(p);
    },
    e: function(x, p) {
      return x.toExponential(p);
    },
    f: function(x, p) {
      return x.toFixed(p);
    },
    r: function(x, p) {
      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
    }
  });
  function d3_format_precision(x, p) {
    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
  }
  function d3_format_typeDefault(x) {
    return x + "";
  }
  var d3_format_group = d3_identity;
  if (d3_format_grouping) {
    var d3_format_groupingLength = d3_format_grouping.length;
    d3_format_group = function(value) {
      var i = value.lastIndexOf("."), f = i >= 0 ? "." + value.substring(i + 1) : (i = value.length, 
      ""), t = [], j = 0, g = d3_format_grouping[0];
      while (i > 0 && g > 0) {
        t.push(value.substring(i -= g, i + g));
        g = d3_format_grouping[j = (j + 1) % d3_format_groupingLength];
      }
      return t.reverse().join(d3_format_thousandsSeparator || "") + f;
    };
  }
  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
  d3.formatPrefix = function(value, precision) {
    var i = 0;
    if (value) {
      if (value < 0) value *= -1;
      if (precision) value = d3.round(value, d3_format_precision(value, precision));
      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
      i = Math.max(-24, Math.min(24, Math.floor((i <= 0 ? i + 1 : i - 1) / 3) * 3));
    }
    return d3_formatPrefixes[8 + i / 3];
  };
  function d3_formatPrefix(d, i) {
    var k = Math.pow(10, Math.abs(8 - i) * 3);
    return {
      scale: i > 8 ? function(d) {
        return d / k;
      } : function(d) {
        return d * k;
      },
      symbol: d
    };
  }
  var d3_ease_default = function() {
    return d3_identity;
  };
  var d3_ease = d3.map({
    linear: d3_ease_default,
    poly: d3_ease_poly,
    quad: function() {
      return d3_ease_quad;
    },
    cubic: function() {
      return d3_ease_cubic;
    },
    sin: function() {
      return d3_ease_sin;
    },
    exp: function() {
      return d3_ease_exp;
    },
    circle: function() {
      return d3_ease_circle;
    },
    elastic: d3_ease_elastic,
    back: d3_ease_back,
    bounce: function() {
      return d3_ease_bounce;
    }
  });
  var d3_ease_mode = d3.map({
    "in": d3_identity,
    out: d3_ease_reverse,
    "in-out": d3_ease_reflect,
    "out-in": function(f) {
      return d3_ease_reflect(d3_ease_reverse(f));
    }
  });
  d3.ease = function(name) {
    var i = name.indexOf("-"), t = i >= 0 ? name.substring(0, i) : name, m = i >= 0 ? name.substring(i + 1) : "in";
    t = d3_ease.get(t) || d3_ease_default;
    m = d3_ease_mode.get(m) || d3_identity;
    return d3_ease_clamp(m(t.apply(null, Array.prototype.slice.call(arguments, 1))));
  };
  function d3_ease_clamp(f) {
    return function(t) {
      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
    };
  }
  function d3_ease_reverse(f) {
    return function(t) {
      return 1 - f(1 - t);
    };
  }
  function d3_ease_reflect(f) {
    return function(t) {
      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
    };
  }
  function d3_ease_quad(t) {
    return t * t;
  }
  function d3_ease_cubic(t) {
    return t * t * t;
  }
  function d3_ease_cubicInOut(t) {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    var t2 = t * t, t3 = t2 * t;
    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
  }
  function d3_ease_poly(e) {
    return function(t) {
      return Math.pow(t, e);
    };
  }
  function d3_ease_sin(t) {
    return 1 - Math.cos(t * π / 2);
  }
  function d3_ease_exp(t) {
    return Math.pow(2, 10 * (t - 1));
  }
  function d3_ease_circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  function d3_ease_elastic(a, p) {
    var s;
    if (arguments.length < 2) p = .45;
    if (arguments.length) s = p / (2 * π) * Math.asin(1 / a); else a = 1, s = p / 4;
    return function(t) {
      return 1 + a * Math.pow(2, 10 * -t) * Math.sin((t - s) * 2 * π / p);
    };
  }
  function d3_ease_back(s) {
    if (!s) s = 1.70158;
    return function(t) {
      return t * t * ((s + 1) * t - s);
    };
  }
  function d3_ease_bounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }
  d3.event = null;
  function d3_eventCancel() {
    d3.event.stopPropagation();
    d3.event.preventDefault();
  }
  function d3_eventSource() {
    var e = d3.event, s;
    while (s = e.sourceEvent) e = s;
    return e;
  }
  function d3_eventDispatch(target) {
    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    dispatch.of = function(thiz, argumentz) {
      return function(e1) {
        try {
          var e0 = e1.sourceEvent = d3.event;
          e1.target = target;
          d3.event = e1;
          dispatch[e1.type].apply(thiz, argumentz);
        } finally {
          d3.event = e0;
        }
      };
    };
    return dispatch;
  }
  d3.transform = function(string) {
    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
    return (d3.transform = function(string) {
      g.setAttribute("transform", string);
      var t = g.transform.baseVal.consolidate();
      return new d3_transform(t ? t.matrix : d3_transformIdentity);
    })(string);
  };
  function d3_transform(m) {
    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
    if (r0[0] * r1[1] < r1[0] * r0[1]) {
      r0[0] *= -1;
      r0[1] *= -1;
      kx *= -1;
      kz *= -1;
    }
    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
    this.translate = [ m.e, m.f ];
    this.scale = [ kx, ky ];
    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
  }
  d3_transform.prototype.toString = function() {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
  };
  function d3_transformDot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
  }
  function d3_transformNormalize(a) {
    var k = Math.sqrt(d3_transformDot(a, a));
    if (k) {
      a[0] /= k;
      a[1] /= k;
    }
    return k;
  }
  function d3_transformCombine(a, b, k) {
    a[0] += k * b[0];
    a[1] += k * b[1];
    return a;
  }
  var d3_transformIdentity = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
  d3.interpolate = function(a, b) {
    var i = d3.interpolators.length, f;
    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
    return f;
  };
  d3.interpolateNumber = function(a, b) {
    b -= a;
    return function(t) {
      return a + b * t;
    };
  };
  d3.interpolateRound = function(a, b) {
    b -= a;
    return function(t) {
      return Math.round(a + b * t);
    };
  };
  d3.interpolateString = function(a, b) {
    var m, i, j, s0 = 0, s1 = 0, s = [], q = [], n, o;
    d3_interpolate_number.lastIndex = 0;
    for (i = 0; m = d3_interpolate_number.exec(b); ++i) {
      if (m.index) s.push(b.substring(s0, s1 = m.index));
      q.push({
        i: s.length,
        x: m[0]
      });
      s.push(null);
      s0 = d3_interpolate_number.lastIndex;
    }
    if (s0 < b.length) s.push(b.substring(s0));
    for (i = 0, n = q.length; (m = d3_interpolate_number.exec(a)) && i < n; ++i) {
      o = q[i];
      if (o.x == m[0]) {
        if (o.i) {
          if (s[o.i + 1] == null) {
            s[o.i - 1] += o.x;
            s.splice(o.i, 1);
            for (j = i + 1; j < n; ++j) q[j].i--;
          } else {
            s[o.i - 1] += o.x + s[o.i + 1];
            s.splice(o.i, 2);
            for (j = i + 1; j < n; ++j) q[j].i -= 2;
          }
        } else {
          if (s[o.i + 1] == null) {
            s[o.i] = o.x;
          } else {
            s[o.i] = o.x + s[o.i + 1];
            s.splice(o.i + 1, 1);
            for (j = i + 1; j < n; ++j) q[j].i--;
          }
        }
        q.splice(i, 1);
        n--;
        i--;
      } else {
        o.x = d3.interpolateNumber(parseFloat(m[0]), parseFloat(o.x));
      }
    }
    while (i < n) {
      o = q.pop();
      if (s[o.i + 1] == null) {
        s[o.i] = o.x;
      } else {
        s[o.i] = o.x + s[o.i + 1];
        s.splice(o.i + 1, 1);
      }
      n--;
    }
    if (s.length === 1) {
      return s[0] == null ? q[0].x : function() {
        return b;
      };
    }
    return function(t) {
      for (i = 0; i < n; ++i) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
  d3.interpolateTransform = function(a, b) {
    var s = [], q = [], n, A = d3.transform(a), B = d3.transform(b), ta = A.translate, tb = B.translate, ra = A.rotate, rb = B.rotate, wa = A.skew, wb = B.skew, ka = A.scale, kb = B.scale;
    if (ta[0] != tb[0] || ta[1] != tb[1]) {
      s.push("translate(", null, ",", null, ")");
      q.push({
        i: 1,
        x: d3.interpolateNumber(ta[0], tb[0])
      }, {
        i: 3,
        x: d3.interpolateNumber(ta[1], tb[1])
      });
    } else if (tb[0] || tb[1]) {
      s.push("translate(" + tb + ")");
    } else {
      s.push("");
    }
    if (ra != rb) {
      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
      q.push({
        i: s.push(s.pop() + "rotate(", null, ")") - 2,
        x: d3.interpolateNumber(ra, rb)
      });
    } else if (rb) {
      s.push(s.pop() + "rotate(" + rb + ")");
    }
    if (wa != wb) {
      q.push({
        i: s.push(s.pop() + "skewX(", null, ")") - 2,
        x: d3.interpolateNumber(wa, wb)
      });
    } else if (wb) {
      s.push(s.pop() + "skewX(" + wb + ")");
    }
    if (ka[0] != kb[0] || ka[1] != kb[1]) {
      n = s.push(s.pop() + "scale(", null, ",", null, ")");
      q.push({
        i: n - 4,
        x: d3.interpolateNumber(ka[0], kb[0])
      }, {
        i: n - 2,
        x: d3.interpolateNumber(ka[1], kb[1])
      });
    } else if (kb[0] != 1 || kb[1] != 1) {
      s.push(s.pop() + "scale(" + kb + ")");
    }
    n = q.length;
    return function(t) {
      var i = -1, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
  d3.interpolateRgb = function(a, b) {
    a = d3.rgb(a);
    b = d3.rgb(b);
    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
    return function(t) {
      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
    };
  };
  d3.interpolateHsl = function(a, b) {
    a = d3.hsl(a);
    b = d3.hsl(b);
    var h0 = a.h, s0 = a.s, l0 = a.l, h1 = b.h - h0, s1 = b.s - s0, l1 = b.l - l0;
    if (h1 > 180) h1 -= 360; else if (h1 < -180) h1 += 360;
    return function(t) {
      return d3_hsl_rgb(h0 + h1 * t, s0 + s1 * t, l0 + l1 * t) + "";
    };
  };
  d3.interpolateLab = function(a, b) {
    a = d3.lab(a);
    b = d3.lab(b);
    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
    return function(t) {
      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
    };
  };
  d3.interpolateHcl = function(a, b) {
    a = d3.hcl(a);
    b = d3.hcl(b);
    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
    if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
    };
  };
  d3.interpolateArray = function(a, b) {
    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
    for (i = 0; i < n0; ++i) x.push(d3.interpolate(a[i], b[i]));
    for (;i < na; ++i) c[i] = a[i];
    for (;i < nb; ++i) c[i] = b[i];
    return function(t) {
      for (i = 0; i < n0; ++i) c[i] = x[i](t);
      return c;
    };
  };
  d3.interpolateObject = function(a, b) {
    var i = {}, c = {}, k;
    for (k in a) {
      if (k in b) {
        i[k] = d3_interpolateByName(k)(a[k], b[k]);
      } else {
        c[k] = a[k];
      }
    }
    for (k in b) {
      if (!(k in a)) {
        c[k] = b[k];
      }
    }
    return function(t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  };
  var d3_interpolate_number = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  function d3_interpolateByName(name) {
    return name == "transform" ? d3.interpolateTransform : d3.interpolate;
  }
  d3.interpolators = [ d3.interpolateObject, function(a, b) {
    return b instanceof Array && d3.interpolateArray(a, b);
  }, function(a, b) {
    return (typeof a === "string" || typeof b === "string") && d3.interpolateString(a + "", b + "");
  }, function(a, b) {
    return (typeof b === "string" ? d3_rgb_names.has(b) || /^(#|rgb\(|hsl\()/.test(b) : b instanceof d3_Color) && d3.interpolateRgb(a, b);
  }, function(a, b) {
    return !isNaN(a = +a) && !isNaN(b = +b) && d3.interpolateNumber(a, b);
  } ];
  function d3_uninterpolateNumber(a, b) {
    b = b - (a = +a) ? 1 / (b - a) : 0;
    return function(x) {
      return (x - a) * b;
    };
  }
  function d3_uninterpolateClamp(a, b) {
    b = b - (a = +a) ? 1 / (b - a) : 0;
    return function(x) {
      return Math.max(0, Math.min(1, (x - a) * b));
    };
  }
  function d3_Color() {}
  d3_Color.prototype.toString = function() {
    return this.rgb() + "";
  };
  d3.rgb = function(r, g, b) {
    return arguments.length === 1 ? r instanceof d3_Rgb ? d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : d3_rgb(~~r, ~~g, ~~b);
  };
  function d3_rgb(r, g, b) {
    return new d3_Rgb(r, g, b);
  }
  function d3_Rgb(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  var d3_rgbPrototype = d3_Rgb.prototype = new d3_Color();
  d3_rgbPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    var r = this.r, g = this.g, b = this.b, i = 30;
    if (!r && !g && !b) return d3_rgb(i, i, i);
    if (r && r < i) r = i;
    if (g && g < i) g = i;
    if (b && b < i) b = i;
    return d3_rgb(Math.min(255, Math.floor(r / k)), Math.min(255, Math.floor(g / k)), Math.min(255, Math.floor(b / k)));
  };
  d3_rgbPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return d3_rgb(Math.floor(k * this.r), Math.floor(k * this.g), Math.floor(k * this.b));
  };
  d3_rgbPrototype.hsl = function() {
    return d3_rgb_hsl(this.r, this.g, this.b);
  };
  d3_rgbPrototype.toString = function() {
    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
  };
  function d3_rgb_hex(v) {
    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
  }
  function d3_rgb_parse(format, rgb, hsl) {
    var r = 0, g = 0, b = 0, m1, m2, name;
    m1 = /([a-z]+)\((.*)\)/i.exec(format);
    if (m1) {
      m2 = m1[2].split(",");
      switch (m1[1]) {
       case "hsl":
        {
          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
        }

       case "rgb":
        {
          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
        }
      }
    }
    if (name = d3_rgb_names.get(format)) return rgb(name.r, name.g, name.b);
    if (format != null && format.charAt(0) === "#") {
      if (format.length === 4) {
        r = format.charAt(1);
        r += r;
        g = format.charAt(2);
        g += g;
        b = format.charAt(3);
        b += b;
      } else if (format.length === 7) {
        r = format.substring(1, 3);
        g = format.substring(3, 5);
        b = format.substring(5, 7);
      }
      r = parseInt(r, 16);
      g = parseInt(g, 16);
      b = parseInt(b, 16);
    }
    return rgb(r, g, b);
  }
  function d3_rgb_hsl(r, g, b) {
    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
    if (d) {
      s = l < .5 ? d / (max + min) : d / (2 - max - min);
      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
      h *= 60;
    } else {
      s = h = 0;
    }
    return d3_hsl(h, s, l);
  }
  function d3_rgb_lab(r, g, b) {
    r = d3_rgb_xyz(r);
    g = d3_rgb_xyz(g);
    b = d3_rgb_xyz(b);
    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
  }
  function d3_rgb_xyz(r) {
    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
  }
  function d3_rgb_parseNumber(c) {
    var f = parseFloat(c);
    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
  }
  var d3_rgb_names = d3.map({
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  });
  d3_rgb_names.forEach(function(key, value) {
    d3_rgb_names.set(key, d3_rgb_parse(value, d3_rgb, d3_hsl_rgb));
  });
  d3.hsl = function(h, s, l) {
    return arguments.length === 1 ? h instanceof d3_Hsl ? d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : d3_hsl(+h, +s, +l);
  };
  function d3_hsl(h, s, l) {
    return new d3_Hsl(h, s, l);
  }
  function d3_Hsl(h, s, l) {
    this.h = h;
    this.s = s;
    this.l = l;
  }
  var d3_hslPrototype = d3_Hsl.prototype = new d3_Color();
  d3_hslPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return d3_hsl(this.h, this.s, this.l / k);
  };
  d3_hslPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return d3_hsl(this.h, this.s, k * this.l);
  };
  d3_hslPrototype.rgb = function() {
    return d3_hsl_rgb(this.h, this.s, this.l);
  };
  function d3_hsl_rgb(h, s, l) {
    var m1, m2;
    h = h % 360;
    if (h < 0) h += 360;
    s = s < 0 ? 0 : s > 1 ? 1 : s;
    l = l < 0 ? 0 : l > 1 ? 1 : l;
    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
    m1 = 2 * l - m2;
    function v(h) {
      if (h > 360) h -= 360; else if (h < 0) h += 360;
      if (h < 60) return m1 + (m2 - m1) * h / 60;
      if (h < 180) return m2;
      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
      return m1;
    }
    function vv(h) {
      return Math.round(v(h) * 255);
    }
    return d3_rgb(vv(h + 120), vv(h), vv(h - 120));
  }
  d3.hcl = function(h, c, l) {
    return arguments.length === 1 ? h instanceof d3_Hcl ? d3_hcl(h.h, h.c, h.l) : h instanceof d3_Lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : d3_hcl(+h, +c, +l);
  };
  function d3_hcl(h, c, l) {
    return new d3_Hcl(h, c, l);
  }
  function d3_Hcl(h, c, l) {
    this.h = h;
    this.c = c;
    this.l = l;
  }
  var d3_hclPrototype = d3_Hcl.prototype = new d3_Color();
  d3_hclPrototype.brighter = function(k) {
    return d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.darker = function(k) {
    return d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.rgb = function() {
    return d3_hcl_lab(this.h, this.c, this.l).rgb();
  };
  function d3_hcl_lab(h, c, l) {
    return d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
  }
  d3.lab = function(l, a, b) {
    return arguments.length === 1 ? l instanceof d3_Lab ? d3_lab(l.l, l.a, l.b) : l instanceof d3_Hcl ? d3_hcl_lab(l.l, l.c, l.h) : d3_rgb_lab((l = d3.rgb(l)).r, l.g, l.b) : d3_lab(+l, +a, +b);
  };
  function d3_lab(l, a, b) {
    return new d3_Lab(l, a, b);
  }
  function d3_Lab(l, a, b) {
    this.l = l;
    this.a = a;
    this.b = b;
  }
  var d3_lab_K = 18;
  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
  var d3_labPrototype = d3_Lab.prototype = new d3_Color();
  d3_labPrototype.brighter = function(k) {
    return d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.darker = function(k) {
    return d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.rgb = function() {
    return d3_lab_rgb(this.l, this.a, this.b);
  };
  function d3_lab_rgb(l, a, b) {
    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
    x = d3_lab_xyz(x) * d3_lab_X;
    y = d3_lab_xyz(y) * d3_lab_Y;
    z = d3_lab_xyz(z) * d3_lab_Z;
    return d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
  }
  function d3_lab_hcl(l, a, b) {
    return d3_hcl(Math.atan2(b, a) / π * 180, Math.sqrt(a * a + b * b), l);
  }
  function d3_lab_xyz(x) {
    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
  }
  function d3_xyz_lab(x) {
    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
  }
  function d3_xyz_rgb(r) {
    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
  }
  function d3_selection(groups) {
    d3_arraySubclass(groups, d3_selectionPrototype);
    return groups;
  }
  var d3_select = function(s, n) {
    return n.querySelector(s);
  }, d3_selectAll = function(s, n) {
    return n.querySelectorAll(s);
  }, d3_selectRoot = d3_document.documentElement, d3_selectMatcher = d3_selectRoot.matchesSelector || d3_selectRoot.webkitMatchesSelector || d3_selectRoot.mozMatchesSelector || d3_selectRoot.msMatchesSelector || d3_selectRoot.oMatchesSelector, d3_selectMatches = function(n, s) {
    return d3_selectMatcher.call(n, s);
  };
  if (typeof Sizzle === "function") {
    d3_select = function(s, n) {
      return Sizzle(s, n)[0] || null;
    };
    d3_selectAll = function(s, n) {
      return Sizzle.uniqueSort(Sizzle(s, n));
    };
    d3_selectMatches = Sizzle.matchesSelector;
  }
  var d3_selectionPrototype = [];
  d3.selection = function() {
    return d3_selectionRoot;
  };
  d3.selection.prototype = d3_selectionPrototype;
  d3_selectionPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, group, node;
    if (typeof selector !== "function") selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(subnode = selector.call(node, node.__data__, i));
          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selector(selector) {
    return function() {
      return d3_select(selector, this);
    };
  }
  d3_selectionPrototype.selectAll = function(selector) {
    var subgroups = [], subgroup, node;
    if (typeof selector !== "function") selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i)));
          subgroup.parentNode = node;
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selectorAll(selector) {
    return function() {
      return d3_selectAll(selector, this);
    };
  }
  d3_selectionPrototype.attr = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node();
        name = d3.ns.qualify(name);
        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
      }
      for (value in name) this.each(d3_selection_attr(value, name[value]));
      return this;
    }
    return this.each(d3_selection_attr(name, value));
  };
  function d3_selection_attr(name, value) {
    name = d3.ns.qualify(name);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrConstant() {
      this.setAttribute(name, value);
    }
    function attrConstantNS() {
      this.setAttributeNS(name.space, name.local, value);
    }
    function attrFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
    }
    function attrFunctionNS() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
    }
    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
  }
  d3_selectionPrototype.classed = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node(), n = (name = name.trim().split(/^|\s+/g)).length, i = -1;
        if (value = node.classList) {
          while (++i < n) if (!value.contains(name[i])) return false;
        } else {
          value = node.className;
          if (value.baseVal != null) value = value.baseVal;
          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
        }
        return true;
      }
      for (value in name) this.each(d3_selection_classed(value, name[value]));
      return this;
    }
    return this.each(d3_selection_classed(name, value));
  };
  function d3_selection_classedRe(name) {
    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
  }
  function d3_selection_classed(name, value) {
    name = name.trim().split(/\s+/).map(d3_selection_classedName);
    var n = name.length;
    function classedConstant() {
      var i = -1;
      while (++i < n) name[i](this, value);
    }
    function classedFunction() {
      var i = -1, x = value.apply(this, arguments);
      while (++i < n) name[i](this, x);
    }
    return typeof value === "function" ? classedFunction : classedConstant;
  }
  function d3_selection_classedName(name) {
    var re = d3_selection_classedRe(name);
    return function(node, value) {
      if (c = node.classList) return value ? c.add(name) : c.remove(name);
      var c = node.className, cb = c.baseVal != null, cv = cb ? c.baseVal : c;
      if (value) {
        re.lastIndex = 0;
        if (!re.test(cv)) {
          cv = d3_collapse(cv + " " + name);
          if (cb) c.baseVal = cv; else node.className = cv;
        }
      } else if (cv) {
        cv = d3_collapse(cv.replace(re, " "));
        if (cb) c.baseVal = cv; else node.className = cv;
      }
    };
  }
  d3_selectionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
        return this;
      }
      if (n < 2) return d3_window.getComputedStyle(this.node(), null).getPropertyValue(name);
      priority = "";
    }
    return this.each(d3_selection_style(name, value, priority));
  };
  function d3_selection_style(name, value, priority) {
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleConstant() {
      this.style.setProperty(name, value, priority);
    }
    function styleFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
    }
    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
  }
  d3_selectionPrototype.property = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") return this.node()[name];
      for (value in name) this.each(d3_selection_property(value, name[value]));
      return this;
    }
    return this.each(d3_selection_property(name, value));
  };
  function d3_selection_property(name, value) {
    function propertyNull() {
      delete this[name];
    }
    function propertyConstant() {
      this[name] = value;
    }
    function propertyFunction() {
      var x = value.apply(this, arguments);
      if (x == null) delete this[name]; else this[name] = x;
    }
    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
  }
  d3_selectionPrototype.text = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    } : value == null ? function() {
      this.textContent = "";
    } : function() {
      this.textContent = value;
    }) : this.node().textContent;
  };
  d3_selectionPrototype.html = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    } : value == null ? function() {
      this.innerHTML = "";
    } : function() {
      this.innerHTML = value;
    }) : this.node().innerHTML;
  };
  d3_selectionPrototype.append = function(name) {
    name = d3.ns.qualify(name);
    function append() {
      return this.appendChild(d3_document.createElementNS(this.namespaceURI, name));
    }
    function appendNS() {
      return this.appendChild(d3_document.createElementNS(name.space, name.local));
    }
    return this.select(name.local ? appendNS : append);
  };
  d3_selectionPrototype.insert = function(name, before) {
    name = d3.ns.qualify(name);
    function insert() {
      return this.insertBefore(d3_document.createElementNS(this.namespaceURI, name), d3_select(before, this));
    }
    function insertNS() {
      return this.insertBefore(d3_document.createElementNS(name.space, name.local), d3_select(before, this));
    }
    return this.select(name.local ? insertNS : insert);
  };
  d3_selectionPrototype.remove = function() {
    return this.each(function() {
      var parent = this.parentNode;
      if (parent) parent.removeChild(this);
    });
  };
  d3_selectionPrototype.data = function(value, key) {
    var i = -1, n = this.length, group, node;
    if (!arguments.length) {
      value = new Array(n = (group = this[0]).length);
      while (++i < n) {
        if (node = group[i]) {
          value[i] = node.__data__;
        }
      }
      return value;
    }
    function bind(group, groupData) {
      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
      if (key) {
        var nodeByKeyValue = new d3_Map(), dataByKeyValue = new d3_Map(), keyValues = [], keyValue;
        for (i = -1; ++i < n; ) {
          keyValue = key.call(node = group[i], node.__data__, i);
          if (nodeByKeyValue.has(keyValue)) {
            exitNodes[i] = node;
          } else {
            nodeByKeyValue.set(keyValue, node);
          }
          keyValues.push(keyValue);
        }
        for (i = -1; ++i < m; ) {
          keyValue = key.call(groupData, nodeData = groupData[i], i);
          if (node = nodeByKeyValue.get(keyValue)) {
            updateNodes[i] = node;
            node.__data__ = nodeData;
          } else if (!dataByKeyValue.has(keyValue)) {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          }
          dataByKeyValue.set(keyValue, nodeData);
          nodeByKeyValue.remove(keyValue);
        }
        for (i = -1; ++i < n; ) {
          if (nodeByKeyValue.has(keyValues[i])) {
            exitNodes[i] = group[i];
          }
        }
      } else {
        for (i = -1; ++i < n0; ) {
          node = group[i];
          nodeData = groupData[i];
          if (node) {
            node.__data__ = nodeData;
            updateNodes[i] = node;
          } else {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          }
        }
        for (;i < m; ++i) {
          enterNodes[i] = d3_selection_dataNode(groupData[i]);
        }
        for (;i < n; ++i) {
          exitNodes[i] = group[i];
        }
      }
      enterNodes.update = updateNodes;
      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
      enter.push(enterNodes);
      update.push(updateNodes);
      exit.push(exitNodes);
    }
    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
    if (typeof value === "function") {
      while (++i < n) {
        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
      }
    } else {
      while (++i < n) {
        bind(group = this[i], value);
      }
    }
    update.enter = function() {
      return enter;
    };
    update.exit = function() {
      return exit;
    };
    return update;
  };
  function d3_selection_dataNode(data) {
    return {
      __data__: data
    };
  }
  d3_selectionPrototype.datum = function(value) {
    return arguments.length ? this.property("__data__", value) : this.property("__data__");
  };
  d3_selectionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i)) {
          subgroup.push(node);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_filter(selector) {
    return function() {
      return d3_selectMatches(this, selector);
    };
  }
  d3_selectionPrototype.order = function() {
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
        if (node = group[i]) {
          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  };
  d3_selectionPrototype.sort = function(comparator) {
    comparator = d3_selection_sortComparator.apply(this, arguments);
    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
    return this.order();
  };
  function d3_selection_sortComparator(comparator) {
    if (!arguments.length) comparator = d3.ascending;
    return function(a, b) {
      return !a - !b || comparator(a.__data__, b.__data__);
    };
  }
  d3_selectionPrototype.on = function(type, listener, capture) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof type !== "string") {
        if (n < 2) listener = false;
        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
        return this;
      }
      if (n < 2) return (n = this.node()["__on" + type]) && n._;
      capture = false;
    }
    return this.each(d3_selection_on(type, listener, capture));
  };
  function d3_selection_on(type, listener, capture) {
    var name = "__on" + type, i = type.indexOf(".");
    if (i > 0) type = type.substring(0, i);
    function onRemove() {
      var wrapper = this[name];
      if (wrapper) {
        this.removeEventListener(type, wrapper, wrapper.$);
        delete this[name];
      }
    }
    function onAdd() {
      var node = this, args = d3_array(arguments);
      onRemove.call(this);
      this.addEventListener(type, this[name] = wrapper, wrapper.$ = capture);
      wrapper._ = listener;
      function wrapper(e) {
        var o = d3.event;
        d3.event = e;
        args[0] = node.__data__;
        try {
          listener.apply(node, args);
        } finally {
          d3.event = o;
        }
      }
    }
    return listener ? onAdd : onRemove;
  }
  d3_selectionPrototype.each = function(callback) {
    return d3_selection_each(this, function(node, i, j) {
      callback.call(node, node.__data__, i, j);
    });
  };
  function d3_selection_each(groups, callback) {
    for (var j = 0, m = groups.length; j < m; j++) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
        if (node = group[i]) callback(node, i, j);
      }
    }
    return groups;
  }
  d3_selectionPrototype.call = function(callback) {
    var args = d3_array(arguments);
    callback.apply(args[0] = this, args);
    return this;
  };
  d3_selectionPrototype.empty = function() {
    return !this.node();
  };
  d3_selectionPrototype.node = function() {
    for (var j = 0, m = this.length; j < m; j++) {
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        var node = group[i];
        if (node) return node;
      }
    }
    return null;
  };
  d3_selectionPrototype.transition = function() {
    var id = d3_transitionInheritId || ++d3_transitionId, subgroups = [], subgroup, node, transition = Object.create(d3_transitionInherit);
    transition.time = Date.now();
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) d3_transitionNode(node, i, id, transition);
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, id);
  };
  var d3_selectionRoot = d3_selection([ [ d3_document ] ]);
  d3_selectionRoot[0].parentNode = d3_selectRoot;
  d3.select = function(selector) {
    return typeof selector === "string" ? d3_selectionRoot.select(selector) : d3_selection([ [ selector ] ]);
  };
  d3.selectAll = function(selector) {
    return typeof selector === "string" ? d3_selectionRoot.selectAll(selector) : d3_selection([ d3_array(selector) ]);
  };
  function d3_selection_enter(selection) {
    d3_arraySubclass(selection, d3_selection_enterPrototype);
    return selection;
  }
  var d3_selection_enterPrototype = [];
  d3.selection.enter = d3_selection_enter;
  d3.selection.enter.prototype = d3_selection_enterPrototype;
  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
  d3_selection_enterPrototype.insert = d3_selectionPrototype.insert;
  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
  d3_selection_enterPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, upgroup, group, node;
    for (var j = -1, m = this.length; ++j < m; ) {
      upgroup = (group = this[j]).update;
      subgroups.push(subgroup = []);
      subgroup.parentNode = group.parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i));
          subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_transition(groups, id) {
    d3_arraySubclass(groups, d3_transitionPrototype);
    groups.id = id;
    return groups;
  }
  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit = {
    ease: d3_ease_cubicInOut,
    delay: 0,
    duration: 250
  };
  d3_transitionPrototype.call = d3_selectionPrototype.call;
  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
  d3_transitionPrototype.node = d3_selectionPrototype.node;
  d3.transition = function(selection) {
    return arguments.length ? d3_transitionInheritId ? selection.transition() : selection : d3_selectionRoot.transition();
  };
  d3.transition.prototype = d3_transitionPrototype;
  function d3_transitionNode(node, i, id, inherit) {
    var lock = node.__transition__ || (node.__transition__ = {
      active: 0,
      count: 0
    }), transition = lock[id];
    if (!transition) {
      var time = inherit.time;
      transition = lock[id] = {
        tween: new d3_Map(),
        event: d3.dispatch("start", "end"),
        time: time,
        ease: inherit.ease,
        delay: inherit.delay,
        duration: inherit.duration
      };
      ++lock.count;
      d3.timer(function(elapsed) {
        var d = node.__data__, ease = transition.ease, event = transition.event, delay = transition.delay, duration = transition.duration, tweened = [];
        return delay <= elapsed ? start(elapsed) : d3.timer(start, delay, time), 1;
        function start(elapsed) {
          if (lock.active > id) return stop();
          lock.active = id;
          event.start.call(node, d, i);
          transition.tween.forEach(function(key, value) {
            if (value = value.call(node, d, i)) {
              tweened.push(value);
            }
          });
          if (!tick(elapsed)) d3.timer(tick, 0, time);
          return 1;
        }
        function tick(elapsed) {
          if (lock.active !== id) return stop();
          var t = (elapsed - delay) / duration, e = ease(t), n = tweened.length;
          while (n > 0) {
            tweened[--n].call(node, e);
          }
          if (t >= 1) {
            stop();
            event.end.call(node, d, i);
            return 1;
          }
        }
        function stop() {
          if (--lock.count) delete lock[id]; else delete node.__transition__;
          return 1;
        }
      }, 0, time);
      return transition;
    }
  }
  d3_transitionPrototype.select = function(selector) {
    var id = this.id, subgroups = [], subgroup, subnode, node;
    if (typeof selector !== "function") selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          d3_transitionNode(subnode, i, id, node.__transition__[id]);
          subgroup.push(subnode);
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_transition(subgroups, id);
  };
  d3_transitionPrototype.selectAll = function(selector) {
    var id = this.id, subgroups = [], subgroup, subnodes, node, subnode, transition;
    if (typeof selector !== "function") selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          transition = node.__transition__[id];
          subnodes = selector.call(node, node.__data__, i);
          subgroups.push(subgroup = []);
          for (var k = -1, o = subnodes.length; ++k < o; ) {
            d3_transitionNode(subnode = subnodes[k], k, id, transition);
            subgroup.push(subnode);
          }
        }
      }
    }
    return d3_transition(subgroups, id);
  };
  d3_transitionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i)) {
          subgroup.push(node);
        }
      }
    }
    return d3_transition(subgroups, this.id, this.time).ease(this.ease());
  };
  d3_transitionPrototype.attr = function(nameNS, value) {
    if (arguments.length < 2) {
      for (value in nameNS) this.attr(value, nameNS[value]);
      return this;
    }
    var interpolate = d3_interpolateByName(nameNS), name = d3.ns.qualify(nameNS);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    return d3_transition_tween(this, "attr." + nameNS, value, function(b) {
      function attrString() {
        var a = this.getAttribute(name), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttribute(name, i(t));
        });
      }
      function attrStringNS() {
        var a = this.getAttributeNS(name.space, name.local), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttributeNS(name.space, name.local, i(t));
        });
      }
      return b == null ? name.local ? attrNullNS : attrNull : (b += "", name.local ? attrStringNS : attrString);
    });
  };
  d3_transitionPrototype.attrTween = function(nameNS, tween) {
    var name = d3.ns.qualify(nameNS);
    function attrTween(d, i) {
      var f = tween.call(this, d, i, this.getAttribute(name));
      return f && function(t) {
        this.setAttribute(name, f(t));
      };
    }
    function attrTweenNS(d, i) {
      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
      return f && function(t) {
        this.setAttributeNS(name.space, name.local, f(t));
      };
    }
    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.style(priority, name[priority], value);
        return this;
      }
      priority = "";
    }
    var interpolate = d3_interpolateByName(name);
    function styleNull() {
      this.style.removeProperty(name);
    }
    return d3_transition_tween(this, "style." + name, value, function(b) {
      function styleString() {
        var a = d3_window.getComputedStyle(this, null).getPropertyValue(name), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.style.setProperty(name, i(t), priority);
        });
      }
      return b == null ? styleNull : (b += "", styleString);
    });
  };
  d3_transitionPrototype.styleTween = function(name, tween, priority) {
    if (arguments.length < 3) priority = "";
    return this.tween("style." + name, function(d, i) {
      var f = tween.call(this, d, i, d3_window.getComputedStyle(this, null).getPropertyValue(name));
      return f && function(t) {
        this.style.setProperty(name, f(t), priority);
      };
    });
  };
  d3_transitionPrototype.text = function(value) {
    return d3_transition_tween(this, "text", value, d3_transition_text);
  };
  function d3_transition_text(b) {
    if (b == null) b = "";
    return function() {
      this.textContent = b;
    };
  }
  d3_transitionPrototype.remove = function() {
    return this.each("end.transition", function() {
      var p;
      if (!this.__transition__ && (p = this.parentNode)) p.removeChild(this);
    });
  };
  d3_transitionPrototype.ease = function(value) {
    var id = this.id;
    if (arguments.length < 1) return this.node().__transition__[id].ease;
    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
    return d3_selection_each(this, function(node) {
      node.__transition__[id].ease = value;
    });
  };
  d3_transitionPrototype.delay = function(value) {
    var id = this.id;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node.__transition__[id].delay = value.call(node, node.__data__, i, j) | 0;
    } : (value |= 0, function(node) {
      node.__transition__[id].delay = value;
    }));
  };
  d3_transitionPrototype.duration = function(value) {
    var id = this.id;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node.__transition__[id].duration = Math.max(1, value.call(node, node.__data__, i, j) | 0);
    } : (value = Math.max(1, value | 0), function(node) {
      node.__transition__[id].duration = value;
    }));
  };
  d3_transitionPrototype.each = function(type, listener) {
    var id = this.id;
    if (arguments.length < 2) {
      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
      d3_transitionInheritId = id;
      d3_selection_each(this, function(node, i, j) {
        d3_transitionInherit = node.__transition__[id];
        type.call(node, node.__data__, i, j);
      });
      d3_transitionInherit = inherit;
      d3_transitionInheritId = inheritId;
    } else {
      d3_selection_each(this, function(node) {
        node.__transition__[id].event.on(type, listener);
      });
    }
    return this;
  };
  d3_transitionPrototype.transition = function() {
    var id0 = this.id, id1 = ++d3_transitionId, subgroups = [], subgroup, group, node, transition;
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if (node = group[i]) {
          transition = Object.create(node.__transition__[id0]);
          transition.delay += transition.duration;
          d3_transitionNode(node, i, id1, transition);
        }
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, id1);
  };
  d3_transitionPrototype.tween = function(name, tween) {
    var id = this.id;
    if (arguments.length < 2) return this.node().__transition__[id].tween.get(name);
    return d3_selection_each(this, tween == null ? function(node) {
      node.__transition__[id].tween.remove(name);
    } : function(node) {
      node.__transition__[id].tween.set(name, tween);
    });
  };
  function d3_transition_tween(groups, name, value, tween) {
    var id = groups.id;
    return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
      node.__transition__[id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
    } : (value = tween(value), function(node) {
      node.__transition__[id].tween.set(name, value);
    }));
  }
  var d3_timer_id = 0, d3_timer_byId = {}, d3_timer_queue = null, d3_timer_interval, d3_timer_timeout;
  d3.timer = function(callback, delay, then) {
    if (arguments.length < 3) {
      if (arguments.length < 2) delay = 0; else if (!isFinite(delay)) return;
      then = Date.now();
    }
    var timer = d3_timer_byId[callback.id];
    if (timer && timer.callback === callback) {
      timer.then = then;
      timer.delay = delay;
    } else d3_timer_byId[callback.id = ++d3_timer_id] = d3_timer_queue = {
      callback: callback,
      then: then,
      delay: delay,
      next: d3_timer_queue
    };
    if (!d3_timer_interval) {
      d3_timer_timeout = clearTimeout(d3_timer_timeout);
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  };
  function d3_timer_step() {
    var elapsed, now = Date.now(), t1 = d3_timer_queue;
    while (t1) {
      elapsed = now - t1.then;
      if (elapsed >= t1.delay) t1.flush = t1.callback(elapsed);
      t1 = t1.next;
    }
    var delay = d3_timer_flush() - now;
    if (delay > 24) {
      if (isFinite(delay)) {
        clearTimeout(d3_timer_timeout);
        d3_timer_timeout = setTimeout(d3_timer_step, delay);
      }
      d3_timer_interval = 0;
    } else {
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  }
  d3.timer.flush = function() {
    var elapsed, now = Date.now(), t1 = d3_timer_queue;
    while (t1) {
      elapsed = now - t1.then;
      if (!t1.delay) t1.flush = t1.callback(elapsed);
      t1 = t1.next;
    }
    d3_timer_flush();
  };
  function d3_timer_flush() {
    var t0 = null, t1 = d3_timer_queue, then = Infinity;
    while (t1) {
      if (t1.flush) {
        delete d3_timer_byId[t1.callback.id];
        t1 = t0 ? t0.next = t1.next : d3_timer_queue = t1.next;
      } else {
        then = Math.min(then, t1.then + t1.delay);
        t1 = (t0 = t1).next;
      }
    }
    return then;
  }
  var d3_timer_frame = d3_window.requestAnimationFrame || d3_window.webkitRequestAnimationFrame || d3_window.mozRequestAnimationFrame || d3_window.oRequestAnimationFrame || d3_window.msRequestAnimationFrame || function(callback) {
    setTimeout(callback, 17);
  };
  d3.mouse = function(container) {
    return d3_mousePoint(container, d3_eventSource());
  };
  var d3_mouse_bug44083 = /WebKit/.test(d3_window.navigator.userAgent) ? -1 : 0;
  function d3_mousePoint(container, e) {
    var svg = container.ownerSVGElement || container;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      if (d3_mouse_bug44083 < 0 && (d3_window.scrollX || d3_window.scrollY)) {
        svg = d3.select(d3_document.body).append("svg").style("position", "absolute").style("top", 0).style("left", 0);
        var ctm = svg[0][0].getScreenCTM();
        d3_mouse_bug44083 = !(ctm.f || ctm.e);
        svg.remove();
      }
      if (d3_mouse_bug44083) {
        point.x = e.pageX;
        point.y = e.pageY;
      } else {
        point.x = e.clientX;
        point.y = e.clientY;
      }
      point = point.matrixTransform(container.getScreenCTM().inverse());
      return [ point.x, point.y ];
    }
    var rect = container.getBoundingClientRect();
    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
  }
  d3.touches = function(container, touches) {
    if (arguments.length < 2) touches = d3_eventSource().touches;
    return touches ? d3_array(touches).map(function(touch) {
      var point = d3_mousePoint(container, touch);
      point.identifier = touch.identifier;
      return point;
    }) : [];
  };
  function d3_noop() {}
  d3.scale = {};
  function d3_scaleExtent(domain) {
    var start = domain[0], stop = domain[domain.length - 1];
    return start < stop ? [ start, stop ] : [ stop, start ];
  }
  function d3_scaleRange(scale) {
    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
  }
  function d3_scale_nice(domain, nice) {
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
    if (x1 < x0) {
      dx = i0, i0 = i1, i1 = dx;
      dx = x0, x0 = x1, x1 = dx;
    }
    if (nice = nice(x1 - x0)) {
      domain[i0] = nice.floor(x0);
      domain[i1] = nice.ceil(x1);
    }
    return domain;
  }
  function d3_scale_niceDefault() {
    return Math;
  }
  d3.scale.linear = function() {
    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3.interpolate, false);
  };
  function d3_scale_linear(domain, range, interpolate, clamp) {
    var output, input;
    function rescale() {
      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
      output = linear(domain, range, uninterpolate, interpolate);
      input = linear(range, domain, uninterpolate, d3.interpolate);
      return scale;
    }
    function scale(x) {
      return output(x);
    }
    scale.invert = function(y) {
      return input(y);
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(Number);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.rangeRound = function(x) {
      return scale.range(x).interpolate(d3.interpolateRound);
    };
    scale.clamp = function(x) {
      if (!arguments.length) return clamp;
      clamp = x;
      return rescale();
    };
    scale.interpolate = function(x) {
      if (!arguments.length) return interpolate;
      interpolate = x;
      return rescale();
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m) {
      return d3_scale_linearTickFormat(domain, m);
    };
    scale.nice = function() {
      d3_scale_nice(domain, d3_scale_linearNice);
      return rescale();
    };
    scale.copy = function() {
      return d3_scale_linear(domain, range, interpolate, clamp);
    };
    return rescale();
  }
  function d3_scale_linearRebind(scale, linear) {
    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
  }
  function d3_scale_linearNice(dx) {
    dx = Math.pow(10, Math.round(Math.log(dx) / Math.LN10) - 1);
    return dx && {
      floor: function(x) {
        return Math.floor(x / dx) * dx;
      },
      ceil: function(x) {
        return Math.ceil(x / dx) * dx;
      }
    };
  }
  function d3_scale_linearTickRange(domain, m) {
    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
    extent[0] = Math.ceil(extent[0] / step) * step;
    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
    extent[2] = step;
    return extent;
  }
  function d3_scale_linearTicks(domain, m) {
    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
  }
  function d3_scale_linearTickFormat(domain, m) {
    return d3.format(",." + Math.max(0, -Math.floor(Math.log(d3_scale_linearTickRange(domain, m)[2]) / Math.LN10 + .01)) + "f");
  }
  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
    return function(x) {
      return i(u(x));
    };
  }
  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
    if (domain[k] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++j <= k) {
      u.push(uninterpolate(domain[j - 1], domain[j]));
      i.push(interpolate(range[j - 1], range[j]));
    }
    return function(x) {
      var j = d3.bisect(domain, x, 1, k) - 1;
      return i[j](u[j](x));
    };
  }
  d3.scale.log = function() {
    return d3_scale_log(d3.scale.linear(), d3_scale_logp);
  };
  function d3_scale_log(linear, log) {
    var pow = log.pow;
    function scale(x) {
      return linear(log(x));
    }
    scale.invert = function(x) {
      return pow(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return linear.domain().map(pow);
      log = x[0] < 0 ? d3_scale_logn : d3_scale_logp;
      pow = log.pow;
      linear.domain(x.map(log));
      return scale;
    };
    scale.nice = function() {
      linear.domain(d3_scale_nice(linear.domain(), d3_scale_niceDefault));
      return scale;
    };
    scale.ticks = function() {
      var extent = d3_scaleExtent(linear.domain()), ticks = [];
      if (extent.every(isFinite)) {
        var i = Math.floor(extent[0]), j = Math.ceil(extent[1]), u = pow(extent[0]), v = pow(extent[1]);
        if (log === d3_scale_logn) {
          ticks.push(pow(i));
          for (;i++ < j; ) for (var k = 9; k > 0; k--) ticks.push(pow(i) * k);
        } else {
          for (;i < j; i++) for (var k = 1; k < 10; k++) ticks.push(pow(i) * k);
          ticks.push(pow(i));
        }
        for (i = 0; ticks[i] < u; i++) {}
        for (j = ticks.length; ticks[j - 1] > v; j--) {}
        ticks = ticks.slice(i, j);
      }
      return ticks;
    };
    scale.tickFormat = function(n, format) {
      if (arguments.length < 2) format = d3_scale_logFormat;
      if (!arguments.length) return format;
      var k = Math.max(.1, n / scale.ticks().length), f = log === d3_scale_logn ? (e = -1e-12, 
      Math.floor) : (e = 1e-12, Math.ceil), e;
      return function(d) {
        return d / pow(f(log(d) + e)) <= k ? format(d) : "";
      };
    };
    scale.copy = function() {
      return d3_scale_log(linear.copy(), log);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  var d3_scale_logFormat = d3.format(".0e");
  function d3_scale_logp(x) {
    return Math.log(x < 0 ? 0 : x) / Math.LN10;
  }
  function d3_scale_logn(x) {
    return -Math.log(x > 0 ? 0 : -x) / Math.LN10;
  }
  d3_scale_logp.pow = function(x) {
    return Math.pow(10, x);
  };
  d3_scale_logn.pow = function(x) {
    return -Math.pow(10, -x);
  };
  d3.scale.pow = function() {
    return d3_scale_pow(d3.scale.linear(), 1);
  };
  function d3_scale_pow(linear, exponent) {
    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
    function scale(x) {
      return linear(powp(x));
    }
    scale.invert = function(x) {
      return powb(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return linear.domain().map(powb);
      linear.domain(x.map(powp));
      return scale;
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(scale.domain(), m);
    };
    scale.tickFormat = function(m) {
      return d3_scale_linearTickFormat(scale.domain(), m);
    };
    scale.nice = function() {
      return scale.domain(d3_scale_nice(scale.domain(), d3_scale_linearNice));
    };
    scale.exponent = function(x) {
      if (!arguments.length) return exponent;
      var domain = scale.domain();
      powp = d3_scale_powPow(exponent = x);
      powb = d3_scale_powPow(1 / exponent);
      return scale.domain(domain);
    };
    scale.copy = function() {
      return d3_scale_pow(linear.copy(), exponent);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_scale_powPow(e) {
    return function(x) {
      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
    };
  }
  d3.scale.sqrt = function() {
    return d3.scale.pow().exponent(.5);
  };
  d3.scale.ordinal = function() {
    return d3_scale_ordinal([], {
      t: "range",
      a: [ [] ]
    });
  };
  function d3_scale_ordinal(domain, ranger) {
    var index, range, rangeBand;
    function scale(x) {
      return range[((index.get(x) || index.set(x, domain.push(x))) - 1) % range.length];
    }
    function steps(start, step) {
      return d3.range(domain.length).map(function(i) {
        return start + step * i;
      });
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = [];
      index = new d3_Map();
      var i = -1, n = x.length, xi;
      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
      return scale[ranger.t].apply(scale, ranger.a);
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      rangeBand = 0;
      ranger = {
        t: "range",
        a: arguments
      };
      return scale;
    };
    scale.rangePoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = (stop - start) / (Math.max(1, domain.length - 1) + padding);
      range = steps(domain.length < 2 ? (start + stop) / 2 : start + step * padding / 2, step);
      rangeBand = 0;
      ranger = {
        t: "rangePoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
      range = steps(start + step * outerPadding, step);
      if (reverse) range.reverse();
      rangeBand = step * (1 - padding);
      ranger = {
        t: "rangeBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding)), error = stop - start - (domain.length - padding) * step;
      range = steps(start + Math.round(error / 2), step);
      if (reverse) range.reverse();
      rangeBand = Math.round(step * (1 - padding));
      ranger = {
        t: "rangeRoundBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeBand = function() {
      return rangeBand;
    };
    scale.rangeExtent = function() {
      return d3_scaleExtent(ranger.a[0]);
    };
    scale.copy = function() {
      return d3_scale_ordinal(domain, ranger);
    };
    return scale.domain(domain);
  }
  d3.scale.category10 = function() {
    return d3.scale.ordinal().range(d3_category10);
  };
  d3.scale.category20 = function() {
    return d3.scale.ordinal().range(d3_category20);
  };
  d3.scale.category20b = function() {
    return d3.scale.ordinal().range(d3_category20b);
  };
  d3.scale.category20c = function() {
    return d3.scale.ordinal().range(d3_category20c);
  };
  var d3_category10 = [ "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf" ];
  var d3_category20 = [ "#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5" ];
  var d3_category20b = [ "#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6" ];
  var d3_category20c = [ "#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476", "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9" ];
  d3.scale.quantile = function() {
    return d3_scale_quantile([], []);
  };
  function d3_scale_quantile(domain, range) {
    var thresholds;
    function rescale() {
      var k = 0, q = range.length;
      thresholds = [];
      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
      return scale;
    }
    function scale(x) {
      if (isNaN(x = +x)) return NaN;
      return range[d3.bisect(thresholds, x)];
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.filter(function(d) {
        return !isNaN(d);
      }).sort(d3.ascending);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.quantiles = function() {
      return thresholds;
    };
    scale.copy = function() {
      return d3_scale_quantile(domain, range);
    };
    return rescale();
  }
  d3.scale.quantize = function() {
    return d3_scale_quantize(0, 1, [ 0, 1 ]);
  };
  function d3_scale_quantize(x0, x1, range) {
    var kx, i;
    function scale(x) {
      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
    }
    function rescale() {
      kx = range.length / (x1 - x0);
      i = range.length - 1;
      return scale;
    }
    scale.domain = function(x) {
      if (!arguments.length) return [ x0, x1 ];
      x0 = +x[0];
      x1 = +x[x.length - 1];
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.copy = function() {
      return d3_scale_quantize(x0, x1, range);
    };
    return rescale();
  }
  d3.scale.threshold = function() {
    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
  };
  function d3_scale_threshold(domain, range) {
    function scale(x) {
      return range[d3.bisect(domain, x)];
    }
    scale.domain = function(_) {
      if (!arguments.length) return domain;
      domain = _;
      return scale;
    };
    scale.range = function(_) {
      if (!arguments.length) return range;
      range = _;
      return scale;
    };
    scale.copy = function() {
      return d3_scale_threshold(domain, range);
    };
    return scale;
  }
  d3.scale.identity = function() {
    return d3_scale_identity([ 0, 1 ]);
  };
  function d3_scale_identity(domain) {
    function identity(x) {
      return +x;
    }
    identity.invert = identity;
    identity.domain = identity.range = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(identity);
      return identity;
    };
    identity.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    identity.tickFormat = function(m) {
      return d3_scale_linearTickFormat(domain, m);
    };
    identity.copy = function() {
      return d3_scale_identity(domain);
    };
    return identity;
  }
  d3.svg = {};
  d3.svg.arc = function() {
    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
    function arc() {
      var r0 = innerRadius.apply(this, arguments), r1 = outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) + d3_svg_arcOffset, a1 = endAngle.apply(this, arguments) + d3_svg_arcOffset, da = (a1 < a0 && (da = a0, 
      a0 = a1, a1 = da), a1 - a0), df = da < π ? "0" : "1", c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1);
      return da >= d3_svg_arcMax ? r0 ? "M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "M0," + r0 + "A" + r0 + "," + r0 + " 0 1,0 0," + -r0 + "A" + r0 + "," + r0 + " 0 1,0 0," + r0 + "Z" : "M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "Z" : r0 ? "M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L" + r0 * c1 + "," + r0 * s1 + "A" + r0 + "," + r0 + " 0 " + df + ",0 " + r0 * c0 + "," + r0 * s0 + "Z" : "M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L0,0" + "Z";
    }
    arc.innerRadius = function(v) {
      if (!arguments.length) return innerRadius;
      innerRadius = d3_functor(v);
      return arc;
    };
    arc.outerRadius = function(v) {
      if (!arguments.length) return outerRadius;
      outerRadius = d3_functor(v);
      return arc;
    };
    arc.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return arc;
    };
    arc.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return arc;
    };
    arc.centroid = function() {
      var r = (innerRadius.apply(this, arguments) + outerRadius.apply(this, arguments)) / 2, a = (startAngle.apply(this, arguments) + endAngle.apply(this, arguments)) / 2 + d3_svg_arcOffset;
      return [ Math.cos(a) * r, Math.sin(a) * r ];
    };
    return arc;
  };
  var d3_svg_arcOffset = -π / 2, d3_svg_arcMax = 2 * π - 1e-6;
  function d3_svg_arcInnerRadius(d) {
    return d.innerRadius;
  }
  function d3_svg_arcOuterRadius(d) {
    return d.outerRadius;
  }
  function d3_svg_arcStartAngle(d) {
    return d.startAngle;
  }
  function d3_svg_arcEndAngle(d) {
    return d.endAngle;
  }
  function d3_svg_line(projection) {
    var x = d3_svg_lineX, y = d3_svg_lineY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
    function line(data) {
      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
      function segment() {
        segments.push("M", interpolate(projection(points), tension));
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
        } else if (points.length) {
          segment();
          points = [];
        }
      }
      if (points.length) segment();
      return segments.length ? segments.join("") : null;
    }
    line.x = function(_) {
      if (!arguments.length) return x;
      x = _;
      return line;
    };
    line.y = function(_) {
      if (!arguments.length) return y;
      y = _;
      return line;
    };
    line.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return line;
    };
    line.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      return line;
    };
    line.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return line;
    };
    return line;
  }
  d3.svg.line = function() {
    return d3_svg_line(d3_identity);
  };
  function d3_svg_lineX(d) {
    return d[0];
  }
  function d3_svg_lineY(d) {
    return d[1];
  }
  var d3_svg_lineInterpolators = d3.map({
    linear: d3_svg_lineLinear,
    "linear-closed": d3_svg_lineLinearClosed,
    "step-before": d3_svg_lineStepBefore,
    "step-after": d3_svg_lineStepAfter,
    basis: d3_svg_lineBasis,
    "basis-open": d3_svg_lineBasisOpen,
    "basis-closed": d3_svg_lineBasisClosed,
    bundle: d3_svg_lineBundle,
    cardinal: d3_svg_lineCardinal,
    "cardinal-open": d3_svg_lineCardinalOpen,
    "cardinal-closed": d3_svg_lineCardinalClosed,
    monotone: d3_svg_lineMonotone
  });
  d3_svg_lineInterpolators.forEach(function(key, value) {
    value.key = key;
    value.closed = /-closed$/.test(key);
  });
  function d3_svg_lineLinear(points) {
    return points.join("L");
  }
  function d3_svg_lineLinearClosed(points) {
    return d3_svg_lineLinear(points) + "Z";
  }
  function d3_svg_lineStepBefore(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepAfter(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
    return path.join("");
  }
  function d3_svg_lineCardinalOpen(points, tension) {
    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, points.length - 1), d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineCardinalClosed(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), 
    points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
  }
  function d3_svg_lineCardinal(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineHermite(points, tangents) {
    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
      return d3_svg_lineLinear(points);
    }
    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
    if (quad) {
      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
      p0 = points[1];
      pi = 2;
    }
    if (tangents.length > 1) {
      t = tangents[1];
      p = points[pi];
      pi++;
      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      for (var i = 2; i < tangents.length; i++, pi++) {
        p = points[pi];
        t = tangents[i];
        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      }
    }
    if (quad) {
      var lp = points[pi];
      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
    }
    return path;
  }
  function d3_svg_lineCardinalTangents(points, tension) {
    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
    while (++i < n) {
      p0 = p1;
      p1 = p2;
      p2 = points[i];
      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
    }
    return tangents;
  }
  function d3_svg_lineBasis(points) {
    if (points.length < 3) return d3_svg_lineLinear(points);
    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0 ];
    d3_svg_lineBasisBezier(path, px, py);
    while (++i < n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    i = -1;
    while (++i < 2) {
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBasisOpen(points) {
    if (points.length < 4) return d3_svg_lineLinear(points);
    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
    while (++i < 3) {
      pi = points[i];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
    --i;
    while (++i < n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBasisClosed(points) {
    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
    while (++i < 4) {
      pi = points[i % n];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    --i;
    while (++i < m) {
      pi = points[i % n];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBundle(points, tension) {
    var n = points.length - 1;
    if (n) {
      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
      while (++i <= n) {
        p = points[i];
        t = i / n;
        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
      }
    }
    return d3_svg_lineBasis(points);
  }
  function d3_svg_lineDot4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
  function d3_svg_lineBasisBezier(path, x, y) {
    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
  }
  function d3_svg_lineSlope(p0, p1) {
    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
  }
  function d3_svg_lineFiniteDifferences(points) {
    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
    while (++i < j) {
      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
    }
    m[i] = d;
    return m;
  }
  function d3_svg_lineMonotoneTangents(points) {
    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
    while (++i < j) {
      d = d3_svg_lineSlope(points[i], points[i + 1]);
      if (Math.abs(d) < 1e-6) {
        m[i] = m[i + 1] = 0;
      } else {
        a = m[i] / d;
        b = m[i + 1] / d;
        s = a * a + b * b;
        if (s > 9) {
          s = d * 3 / Math.sqrt(s);
          m[i] = s * a;
          m[i + 1] = s * b;
        }
      }
    }
    i = -1;
    while (++i <= j) {
      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
      tangents.push([ s || 0, m[i] * s || 0 ]);
    }
    return tangents;
  }
  function d3_svg_lineMonotone(points) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
  }
  d3.svg.line.radial = function() {
    var line = d3_svg_line(d3_svg_lineRadial);
    line.radius = line.x, delete line.x;
    line.angle = line.y, delete line.y;
    return line;
  };
  function d3_svg_lineRadial(points) {
    var point, i = -1, n = points.length, r, a;
    while (++i < n) {
      point = points[i];
      r = point[0];
      a = point[1] + d3_svg_arcOffset;
      point[0] = r * Math.cos(a);
      point[1] = r * Math.sin(a);
    }
    return points;
  }
  function d3_svg_area(projection) {
    var x0 = d3_svg_lineX, x1 = d3_svg_lineX, y0 = 0, y1 = d3_svg_lineY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
    function area(data) {
      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
        return x;
      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
        return y;
      } : d3_functor(y1), x, y;
      function segment() {
        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
        } else if (points0.length) {
          segment();
          points0 = [];
          points1 = [];
        }
      }
      if (points0.length) segment();
      return segments.length ? segments.join("") : null;
    }
    area.x = function(_) {
      if (!arguments.length) return x1;
      x0 = x1 = _;
      return area;
    };
    area.x0 = function(_) {
      if (!arguments.length) return x0;
      x0 = _;
      return area;
    };
    area.x1 = function(_) {
      if (!arguments.length) return x1;
      x1 = _;
      return area;
    };
    area.y = function(_) {
      if (!arguments.length) return y1;
      y0 = y1 = _;
      return area;
    };
    area.y0 = function(_) {
      if (!arguments.length) return y0;
      y0 = _;
      return area;
    };
    area.y1 = function(_) {
      if (!arguments.length) return y1;
      y1 = _;
      return area;
    };
    area.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return area;
    };
    area.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      interpolateReverse = interpolate.reverse || interpolate;
      L = interpolate.closed ? "M" : "L";
      return area;
    };
    area.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return area;
    };
    return area;
  }
  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
  d3.svg.area = function() {
    return d3_svg_area(d3_identity);
  };
  d3.svg.area.radial = function() {
    var area = d3_svg_area(d3_svg_lineRadial);
    area.radius = area.x, delete area.x;
    area.innerRadius = area.x0, delete area.x0;
    area.outerRadius = area.x1, delete area.x1;
    area.angle = area.y, delete area.y;
    area.startAngle = area.y0, delete area.y0;
    area.endAngle = area.y1, delete area.y1;
    return area;
  };
  d3.svg.chord = function() {
    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
    function chord(d, i) {
      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
    }
    function subgroup(self, f, d, i) {
      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) + d3_svg_arcOffset, a1 = endAngle.call(self, subgroup, i) + d3_svg_arcOffset;
      return {
        r: r,
        a0: a0,
        a1: a1,
        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
      };
    }
    function equals(a, b) {
      return a.a0 == b.a0 && a.a1 == b.a1;
    }
    function arc(r, p, a) {
      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
    }
    function curve(r0, p0, r1, p1) {
      return "Q 0,0 " + p1;
    }
    chord.radius = function(v) {
      if (!arguments.length) return radius;
      radius = d3_functor(v);
      return chord;
    };
    chord.source = function(v) {
      if (!arguments.length) return source;
      source = d3_functor(v);
      return chord;
    };
    chord.target = function(v) {
      if (!arguments.length) return target;
      target = d3_functor(v);
      return chord;
    };
    chord.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return chord;
    };
    chord.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return chord;
    };
    return chord;
  };
  function d3_svg_chordRadius(d) {
    return d.radius;
  }
  d3.svg.diagonal = function() {
    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
    function diagonal(d, i) {
      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
        x: p0.x,
        y: m
      }, {
        x: p3.x,
        y: m
      }, p3 ];
      p = p.map(projection);
      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
    }
    diagonal.source = function(x) {
      if (!arguments.length) return source;
      source = d3_functor(x);
      return diagonal;
    };
    diagonal.target = function(x) {
      if (!arguments.length) return target;
      target = d3_functor(x);
      return diagonal;
    };
    diagonal.projection = function(x) {
      if (!arguments.length) return projection;
      projection = x;
      return diagonal;
    };
    return diagonal;
  };
  function d3_svg_diagonalProjection(d) {
    return [ d.x, d.y ];
  }
  d3.svg.diagonal.radial = function() {
    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
    diagonal.projection = function(x) {
      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
    };
    return diagonal;
  };
  function d3_svg_diagonalRadialProjection(projection) {
    return function() {
      var d = projection.apply(this, arguments), r = d[0], a = d[1] + d3_svg_arcOffset;
      return [ r * Math.cos(a), r * Math.sin(a) ];
    };
  }
  d3.svg.symbol = function() {
    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
    function symbol(d, i) {
      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
    }
    symbol.type = function(x) {
      if (!arguments.length) return type;
      type = d3_functor(x);
      return symbol;
    };
    symbol.size = function(x) {
      if (!arguments.length) return size;
      size = d3_functor(x);
      return symbol;
    };
    return symbol;
  };
  function d3_svg_symbolSize() {
    return 64;
  }
  function d3_svg_symbolType() {
    return "circle";
  }
  function d3_svg_symbolCircle(size) {
    var r = Math.sqrt(size / π);
    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
  }
  var d3_svg_symbols = d3.map({
    circle: d3_svg_symbolCircle,
    cross: function(size) {
      var r = Math.sqrt(size / 5) / 2;
      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
    },
    diamond: function(size) {
      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
    },
    square: function(size) {
      var r = Math.sqrt(size) / 2;
      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
    },
    "triangle-down": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
    },
    "triangle-up": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
    }
  });
  d3.svg.symbolTypes = d3_svg_symbols.keys();
  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
  d3.svg.axis = function() {
    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, tickMajorSize = 6, tickMinorSize = 6, tickEndSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_, tickSubdivide = 0;
    function axis(g) {
      g.each(function() {
        var g = d3.select(this);
        var ticks = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments_) : scale.domain() : tickValues, tickFormat = tickFormat_ == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments_) : String : tickFormat_;
        var subticks = d3_svg_axisSubdivide(scale, ticks, tickSubdivide), subtick = g.selectAll(".tick.minor").data(subticks, String), subtickEnter = subtick.enter().insert("line", ".tick").attr("class", "tick minor").style("opacity", 1e-6), subtickExit = d3.transition(subtick.exit()).style("opacity", 1e-6).remove(), subtickUpdate = d3.transition(subtick).style("opacity", 1);
        var tick = g.selectAll(".tick.major").data(ticks, String), tickEnter = tick.enter().insert("g", "path").attr("class", "tick major").style("opacity", 1e-6), tickExit = d3.transition(tick.exit()).style("opacity", 1e-6).remove(), tickUpdate = d3.transition(tick).style("opacity", 1), tickTransform;
        var range = d3_scaleRange(scale), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), 
        d3.transition(path));
        var scale1 = scale.copy(), scale0 = this.__chart__ || scale1;
        this.__chart__ = scale1;
        tickEnter.append("line");
        tickEnter.append("text");
        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text");
        switch (orient) {
         case "bottom":
          {
            tickTransform = d3_svg_axisX;
            subtickEnter.attr("y2", tickMinorSize);
            subtickUpdate.attr("x2", 0).attr("y2", tickMinorSize);
            lineEnter.attr("y2", tickMajorSize);
            textEnter.attr("y", Math.max(tickMajorSize, 0) + tickPadding);
            lineUpdate.attr("x2", 0).attr("y2", tickMajorSize);
            textUpdate.attr("x", 0).attr("y", Math.max(tickMajorSize, 0) + tickPadding);
            text.attr("dy", ".71em").style("text-anchor", "middle");
            pathUpdate.attr("d", "M" + range[0] + "," + tickEndSize + "V0H" + range[1] + "V" + tickEndSize);
            break;
          }

         case "top":
          {
            tickTransform = d3_svg_axisX;
            subtickEnter.attr("y2", -tickMinorSize);
            subtickUpdate.attr("x2", 0).attr("y2", -tickMinorSize);
            lineEnter.attr("y2", -tickMajorSize);
            textEnter.attr("y", -(Math.max(tickMajorSize, 0) + tickPadding));
            lineUpdate.attr("x2", 0).attr("y2", -tickMajorSize);
            textUpdate.attr("x", 0).attr("y", -(Math.max(tickMajorSize, 0) + tickPadding));
            text.attr("dy", "0em").style("text-anchor", "middle");
            pathUpdate.attr("d", "M" + range[0] + "," + -tickEndSize + "V0H" + range[1] + "V" + -tickEndSize);
            break;
          }

         case "left":
          {
            tickTransform = d3_svg_axisY;
            subtickEnter.attr("x2", -tickMinorSize);
            subtickUpdate.attr("x2", -tickMinorSize).attr("y2", 0);
            lineEnter.attr("x2", -tickMajorSize);
            textEnter.attr("x", -(Math.max(tickMajorSize, 0) + tickPadding));
            lineUpdate.attr("x2", -tickMajorSize).attr("y2", 0);
            textUpdate.attr("x", -(Math.max(tickMajorSize, 0) + tickPadding)).attr("y", 0);
            text.attr("dy", ".32em").style("text-anchor", "end");
            pathUpdate.attr("d", "M" + -tickEndSize + "," + range[0] + "H0V" + range[1] + "H" + -tickEndSize);
            break;
          }

         case "right":
          {
            tickTransform = d3_svg_axisY;
            subtickEnter.attr("x2", tickMinorSize);
            subtickUpdate.attr("x2", tickMinorSize).attr("y2", 0);
            lineEnter.attr("x2", tickMajorSize);
            textEnter.attr("x", Math.max(tickMajorSize, 0) + tickPadding);
            lineUpdate.attr("x2", tickMajorSize).attr("y2", 0);
            textUpdate.attr("x", Math.max(tickMajorSize, 0) + tickPadding).attr("y", 0);
            text.attr("dy", ".32em").style("text-anchor", "start");
            pathUpdate.attr("d", "M" + tickEndSize + "," + range[0] + "H0V" + range[1] + "H" + tickEndSize);
            break;
          }
        }
        if (scale.ticks) {
          tickEnter.call(tickTransform, scale0);
          tickUpdate.call(tickTransform, scale1);
          tickExit.call(tickTransform, scale1);
          subtickEnter.call(tickTransform, scale0);
          subtickUpdate.call(tickTransform, scale1);
          subtickExit.call(tickTransform, scale1);
        } else {
          var dx = scale1.rangeBand() / 2, x = function(d) {
            return scale1(d) + dx;
          };
          tickEnter.call(tickTransform, x);
          tickUpdate.call(tickTransform, x);
        }
      });
    }
    axis.scale = function(x) {
      if (!arguments.length) return scale;
      scale = x;
      return axis;
    };
    axis.orient = function(x) {
      if (!arguments.length) return orient;
      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
      return axis;
    };
    axis.ticks = function() {
      if (!arguments.length) return tickArguments_;
      tickArguments_ = arguments;
      return axis;
    };
    axis.tickValues = function(x) {
      if (!arguments.length) return tickValues;
      tickValues = x;
      return axis;
    };
    axis.tickFormat = function(x) {
      if (!arguments.length) return tickFormat_;
      tickFormat_ = x;
      return axis;
    };
    axis.tickSize = function(x, y) {
      if (!arguments.length) return tickMajorSize;
      var n = arguments.length - 1;
      tickMajorSize = +x;
      tickMinorSize = n > 1 ? +y : tickMajorSize;
      tickEndSize = n > 0 ? +arguments[n] : tickMajorSize;
      return axis;
    };
    axis.tickPadding = function(x) {
      if (!arguments.length) return tickPadding;
      tickPadding = +x;
      return axis;
    };
    axis.tickSubdivide = function(x) {
      if (!arguments.length) return tickSubdivide;
      tickSubdivide = +x;
      return axis;
    };
    return axis;
  };
  var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  };
  function d3_svg_axisX(selection, x) {
    selection.attr("transform", function(d) {
      return "translate(" + x(d) + ",0)";
    });
  }
  function d3_svg_axisY(selection, y) {
    selection.attr("transform", function(d) {
      return "translate(0," + y(d) + ")";
    });
  }
  function d3_svg_axisSubdivide(scale, ticks, m) {
    subticks = [];
    if (m && ticks.length > 1) {
      var extent = d3_scaleExtent(scale.domain()), subticks, i = -1, n = ticks.length, d = (ticks[1] - ticks[0]) / ++m, j, v;
      while (++i < n) {
        for (j = m; --j > 0; ) {
          if ((v = +ticks[i] - j * d) >= extent[0]) {
            subticks.push(v);
          }
        }
      }
      for (--i, j = 0; ++j < m && (v = +ticks[i] + j * d) < extent[1]; ) {
        subticks.push(v);
      }
    }
    return subticks;
  }
  d3.svg.brush = function() {
    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, resizes = d3_svg_brushResizes[0], extent = [ [ 0, 0 ], [ 0, 0 ] ], extentDomain;
    function brush(g) {
      g.each(function() {
        var g = d3.select(this), bg = g.selectAll(".background").data([ 0 ]), fg = g.selectAll(".extent").data([ 0 ]), tz = g.selectAll(".resize").data(resizes, String), e;
        g.style("pointer-events", "all").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
        bg.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
        fg.enter().append("rect").attr("class", "extent").style("cursor", "move");
        tz.enter().append("g").attr("class", function(d) {
          return "resize " + d;
        }).style("cursor", function(d) {
          return d3_svg_brushCursor[d];
        }).append("rect").attr("x", function(d) {
          return /[ew]$/.test(d) ? -3 : null;
        }).attr("y", function(d) {
          return /^[ns]/.test(d) ? -3 : null;
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
        tz.style("display", brush.empty() ? "none" : null);
        tz.exit().remove();
        if (x) {
          e = d3_scaleRange(x);
          bg.attr("x", e[0]).attr("width", e[1] - e[0]);
          redrawX(g);
        }
        if (y) {
          e = d3_scaleRange(y);
          bg.attr("y", e[0]).attr("height", e[1] - e[0]);
          redrawY(g);
        }
        redraw(g);
      });
    }
    function redraw(g) {
      g.selectAll(".resize").attr("transform", function(d) {
        return "translate(" + extent[+/e$/.test(d)][0] + "," + extent[+/^s/.test(d)][1] + ")";
      });
    }
    function redrawX(g) {
      g.select(".extent").attr("x", extent[0][0]);
      g.selectAll(".extent,.n>rect,.s>rect").attr("width", extent[1][0] - extent[0][0]);
    }
    function redrawY(g) {
      g.select(".extent").attr("y", extent[0][1]);
      g.selectAll(".extent,.e>rect,.w>rect").attr("height", extent[1][1] - extent[0][1]);
    }
    function brushstart() {
      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), center, origin = mouse(), offset;
      var w = d3.select(d3_window).on("mousemove.brush", brushmove).on("mouseup.brush", brushend).on("touchmove.brush", brushmove).on("touchend.brush", brushend).on("keydown.brush", keydown).on("keyup.brush", keyup);
      if (dragging) {
        origin[0] = extent[0][0] - origin[0];
        origin[1] = extent[0][1] - origin[1];
      } else if (resizing) {
        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
        offset = [ extent[1 - ex][0] - origin[0], extent[1 - ey][1] - origin[1] ];
        origin[0] = extent[ex][0];
        origin[1] = extent[ey][1];
      } else if (d3.event.altKey) center = origin.slice();
      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
      d3.select("body").style("cursor", eventTarget.style("cursor"));
      event_({
        type: "brushstart"
      });
      brushmove();
      d3_eventCancel();
      function mouse() {
        var touches = d3.event.changedTouches;
        return touches ? d3.touches(target, touches)[0] : d3.mouse(target);
      }
      function keydown() {
        if (d3.event.keyCode == 32) {
          if (!dragging) {
            center = null;
            origin[0] -= extent[1][0];
            origin[1] -= extent[1][1];
            dragging = 2;
          }
          d3_eventCancel();
        }
      }
      function keyup() {
        if (d3.event.keyCode == 32 && dragging == 2) {
          origin[0] += extent[1][0];
          origin[1] += extent[1][1];
          dragging = 0;
          d3_eventCancel();
        }
      }
      function brushmove() {
        var point = mouse(), moved = false;
        if (offset) {
          point[0] += offset[0];
          point[1] += offset[1];
        }
        if (!dragging) {
          if (d3.event.altKey) {
            if (!center) center = [ (extent[0][0] + extent[1][0]) / 2, (extent[0][1] + extent[1][1]) / 2 ];
            origin[0] = extent[+(point[0] < center[0])][0];
            origin[1] = extent[+(point[1] < center[1])][1];
          } else center = null;
        }
        if (resizingX && move1(point, x, 0)) {
          redrawX(g);
          moved = true;
        }
        if (resizingY && move1(point, y, 1)) {
          redrawY(g);
          moved = true;
        }
        if (moved) {
          redraw(g);
          event_({
            type: "brush",
            mode: dragging ? "move" : "resize"
          });
        }
      }
      function move1(point, scale, i) {
        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], size = extent[1][i] - extent[0][i], min, max;
        if (dragging) {
          r0 -= position;
          r1 -= size + position;
        }
        min = Math.max(r0, Math.min(r1, point[i]));
        if (dragging) {
          max = (min += position) + size;
        } else {
          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
          if (position < min) {
            max = min;
            min = position;
          } else {
            max = position;
          }
        }
        if (extent[0][i] !== min || extent[1][i] !== max) {
          extentDomain = null;
          extent[0][i] = min;
          extent[1][i] = max;
          return true;
        }
      }
      function brushend() {
        brushmove();
        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
        d3.select("body").style("cursor", null);
        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
        event_({
          type: "brushend"
        });
        d3_eventCancel();
      }
    }
    brush.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.extent = function(z) {
      var x0, x1, y0, y1, t;
      if (!arguments.length) {
        z = extentDomain || extent;
        if (x) {
          x0 = z[0][0], x1 = z[1][0];
          if (!extentDomain) {
            x0 = extent[0][0], x1 = extent[1][0];
            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
            if (x1 < x0) t = x0, x0 = x1, x1 = t;
          }
        }
        if (y) {
          y0 = z[0][1], y1 = z[1][1];
          if (!extentDomain) {
            y0 = extent[0][1], y1 = extent[1][1];
            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
            if (y1 < y0) t = y0, y0 = y1, y1 = t;
          }
        }
        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
      }
      extentDomain = [ [ 0, 0 ], [ 0, 0 ] ];
      if (x) {
        x0 = z[0], x1 = z[1];
        if (y) x0 = x0[0], x1 = x1[0];
        extentDomain[0][0] = x0, extentDomain[1][0] = x1;
        if (x.invert) x0 = x(x0), x1 = x(x1);
        if (x1 < x0) t = x0, x0 = x1, x1 = t;
        extent[0][0] = x0 | 0, extent[1][0] = x1 | 0;
      }
      if (y) {
        y0 = z[0], y1 = z[1];
        if (x) y0 = y0[1], y1 = y1[1];
        extentDomain[0][1] = y0, extentDomain[1][1] = y1;
        if (y.invert) y0 = y(y0), y1 = y(y1);
        if (y1 < y0) t = y0, y0 = y1, y1 = t;
        extent[0][1] = y0 | 0, extent[1][1] = y1 | 0;
      }
      return brush;
    };
    brush.clear = function() {
      extentDomain = null;
      extent[0][0] = extent[0][1] = extent[1][0] = extent[1][1] = 0;
      return brush;
    };
    brush.empty = function() {
      return x && extent[0][0] === extent[1][0] || y && extent[0][1] === extent[1][1];
    };
    return d3.rebind(brush, event, "on");
  };
  var d3_svg_brushCursor = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  };
  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
  d3.behavior = {};
  d3.behavior.drag = function() {
    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null;
    function drag() {
      this.on("mousedown.drag", mousedown).on("touchstart.drag", mousedown);
    }
    function mousedown() {
      var target = this, event_ = event.of(target, arguments), eventTarget = d3.event.target, touchId = d3.event.touches ? d3.event.changedTouches[0].identifier : null, offset, origin_ = point(), moved = 0;
      var w = d3.select(d3_window).on(touchId != null ? "touchmove.drag-" + touchId : "mousemove.drag", dragmove).on(touchId != null ? "touchend.drag-" + touchId : "mouseup.drag", dragend, true);
      if (origin) {
        offset = origin.apply(target, arguments);
        offset = [ offset.x - origin_[0], offset.y - origin_[1] ];
      } else {
        offset = [ 0, 0 ];
      }
      if (touchId == null) d3_eventCancel();
      event_({
        type: "dragstart"
      });
      function point() {
        var p = target.parentNode;
        return touchId != null ? d3.touches(p).filter(function(p) {
          return p.identifier === touchId;
        })[0] : d3.mouse(p);
      }
      function dragmove() {
        if (!target.parentNode) return dragend();
        var p = point(), dx = p[0] - origin_[0], dy = p[1] - origin_[1];
        moved |= dx | dy;
        origin_ = p;
        d3_eventCancel();
        event_({
          type: "drag",
          x: p[0] + offset[0],
          y: p[1] + offset[1],
          dx: dx,
          dy: dy
        });
      }
      function dragend() {
        event_({
          type: "dragend"
        });
        if (moved) {
          d3_eventCancel();
          if (d3.event.target === eventTarget) w.on("click.drag", click, true);
        }
        w.on(touchId != null ? "touchmove.drag-" + touchId : "mousemove.drag", null).on(touchId != null ? "touchend.drag-" + touchId : "mouseup.drag", null);
      }
      function click() {
        d3_eventCancel();
        w.on("click.drag", null);
      }
    }
    drag.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return drag;
    };
    return d3.rebind(drag, event, "on");
  };
  d3.behavior.zoom = function() {
    var translate = [ 0, 0 ], translate0, scale = 1, scale0, scaleExtent = d3_behavior_zoomInfinity, event = d3_eventDispatch(zoom, "zoom"), x0, x1, y0, y1, touchtime;
    function zoom() {
      this.on("mousedown.zoom", mousedown).on("mousemove.zoom", mousemove).on(d3_behavior_zoomWheel + ".zoom", mousewheel).on("dblclick.zoom", dblclick).on("touchstart.zoom", touchstart).on("touchmove.zoom", touchmove).on("touchend.zoom", touchstart);
    }
    zoom.translate = function(x) {
      if (!arguments.length) return translate;
      translate = x.map(Number);
      rescale();
      return zoom;
    };
    zoom.scale = function(x) {
      if (!arguments.length) return scale;
      scale = +x;
      rescale();
      return zoom;
    };
    zoom.scaleExtent = function(x) {
      if (!arguments.length) return scaleExtent;
      scaleExtent = x == null ? d3_behavior_zoomInfinity : x.map(Number);
      return zoom;
    };
    zoom.x = function(z) {
      if (!arguments.length) return x1;
      x1 = z;
      x0 = z.copy();
      translate = [ 0, 0 ];
      scale = 1;
      return zoom;
    };
    zoom.y = function(z) {
      if (!arguments.length) return y1;
      y1 = z;
      y0 = z.copy();
      translate = [ 0, 0 ];
      scale = 1;
      return zoom;
    };
    function location(p) {
      return [ (p[0] - translate[0]) / scale, (p[1] - translate[1]) / scale ];
    }
    function point(l) {
      return [ l[0] * scale + translate[0], l[1] * scale + translate[1] ];
    }
    function scaleTo(s) {
      scale = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
    }
    function translateTo(p, l) {
      l = point(l);
      translate[0] += p[0] - l[0];
      translate[1] += p[1] - l[1];
    }
    function rescale() {
      if (x1) x1.domain(x0.range().map(function(x) {
        return (x - translate[0]) / scale;
      }).map(x0.invert));
      if (y1) y1.domain(y0.range().map(function(y) {
        return (y - translate[1]) / scale;
      }).map(y0.invert));
    }
    function dispatch(event) {
      rescale();
      d3.event.preventDefault();
      event({
        type: "zoom",
        scale: scale,
        translate: translate
      });
    }
    function mousedown() {
      var target = this, event_ = event.of(target, arguments), eventTarget = d3.event.target, moved = 0, w = d3.select(d3_window).on("mousemove.zoom", mousemove).on("mouseup.zoom", mouseup), l = location(d3.mouse(target));
      d3_window.focus();
      d3_eventCancel();
      function mousemove() {
        moved = 1;
        translateTo(d3.mouse(target), l);
        dispatch(event_);
      }
      function mouseup() {
        if (moved) d3_eventCancel();
        w.on("mousemove.zoom", null).on("mouseup.zoom", null);
        if (moved && d3.event.target === eventTarget) w.on("click.zoom", click, true);
      }
      function click() {
        d3_eventCancel();
        w.on("click.zoom", null);
      }
    }
    function mousewheel() {
      if (!translate0) translate0 = location(d3.mouse(this));
      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * scale);
      translateTo(d3.mouse(this), translate0);
      dispatch(event.of(this, arguments));
    }
    function mousemove() {
      translate0 = null;
    }
    function dblclick() {
      var p = d3.mouse(this), l = location(p), k = Math.log(scale) / Math.LN2;
      scaleTo(Math.pow(2, d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1));
      translateTo(p, l);
      dispatch(event.of(this, arguments));
    }
    function touchstart() {
      var touches = d3.touches(this), now = Date.now();
      scale0 = scale;
      translate0 = {};
      touches.forEach(function(t) {
        translate0[t.identifier] = location(t);
      });
      d3_eventCancel();
      if (touches.length === 1) {
        if (now - touchtime < 500) {
          var p = touches[0], l = location(touches[0]);
          scaleTo(scale * 2);
          translateTo(p, l);
          dispatch(event.of(this, arguments));
        }
        touchtime = now;
      }
    }
    function touchmove() {
      var touches = d3.touches(this), p0 = touches[0], l0 = translate0[p0.identifier];
      if (p1 = touches[1]) {
        var p1, l1 = translate0[p1.identifier];
        p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
        l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
        scaleTo(d3.event.scale * scale0);
      }
      translateTo(p0, l0);
      touchtime = null;
      dispatch(event.of(this, arguments));
    }
    return d3.rebind(zoom, event, "on");
  };
  var d3_behavior_zoomInfinity = [ 0, Infinity ];
  var d3_behavior_zoomDelta, d3_behavior_zoomWheel = "onwheel" in document ? (d3_behavior_zoomDelta = function() {
    return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
  }, "wheel") : "onmousewheel" in document ? (d3_behavior_zoomDelta = function() {
    return d3.event.wheelDelta;
  }, "mousewheel") : (d3_behavior_zoomDelta = function() {
    return -d3.event.detail;
  }, "MozMousePixelScroll");
  d3.layout = {};
  d3.layout.bundle = function() {
    return function(links) {
      var paths = [], i = -1, n = links.length;
      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
      return paths;
    };
  };
  function d3_layout_bundlePath(link) {
    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
    while (start !== lca) {
      start = start.parent;
      points.push(start);
    }
    var k = points.length;
    while (end !== lca) {
      points.splice(k, 0, end);
      end = end.parent;
    }
    return points;
  }
  function d3_layout_bundleAncestors(node) {
    var ancestors = [], parent = node.parent;
    while (parent != null) {
      ancestors.push(node);
      node = parent;
      parent = parent.parent;
    }
    ancestors.push(node);
    return ancestors;
  }
  function d3_layout_bundleLeastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
    while (aNode === bNode) {
      sharedNode = aNode;
      aNode = aNodes.pop();
      bNode = bNodes.pop();
    }
    return sharedNode;
  }
  d3.layout.chord = function() {
    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
    function relayout() {
      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
      chords = [];
      groups = [];
      k = 0, i = -1;
      while (++i < n) {
        x = 0, j = -1;
        while (++j < n) {
          x += matrix[i][j];
        }
        groupSums.push(x);
        subgroupIndex.push(d3.range(n));
        k += x;
      }
      if (sortGroups) {
        groupIndex.sort(function(a, b) {
          return sortGroups(groupSums[a], groupSums[b]);
        });
      }
      if (sortSubgroups) {
        subgroupIndex.forEach(function(d, i) {
          d.sort(function(a, b) {
            return sortSubgroups(matrix[i][a], matrix[i][b]);
          });
        });
      }
      k = (2 * π - padding * n) / k;
      x = 0, i = -1;
      while (++i < n) {
        x0 = x, j = -1;
        while (++j < n) {
          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
          subgroups[di + "-" + dj] = {
            index: di,
            subindex: dj,
            startAngle: a0,
            endAngle: a1,
            value: v
          };
        }
        groups[di] = {
          index: di,
          startAngle: x0,
          endAngle: x,
          value: (x - x0) / k
        };
        x += padding;
      }
      i = -1;
      while (++i < n) {
        j = i - 1;
        while (++j < n) {
          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
          if (source.value || target.value) {
            chords.push(source.value < target.value ? {
              source: target,
              target: source
            } : {
              source: source,
              target: target
            });
          }
        }
      }
      if (sortChords) resort();
    }
    function resort() {
      chords.sort(function(a, b) {
        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
      });
    }
    chord.matrix = function(x) {
      if (!arguments.length) return matrix;
      n = (matrix = x) && matrix.length;
      chords = groups = null;
      return chord;
    };
    chord.padding = function(x) {
      if (!arguments.length) return padding;
      padding = x;
      chords = groups = null;
      return chord;
    };
    chord.sortGroups = function(x) {
      if (!arguments.length) return sortGroups;
      sortGroups = x;
      chords = groups = null;
      return chord;
    };
    chord.sortSubgroups = function(x) {
      if (!arguments.length) return sortSubgroups;
      sortSubgroups = x;
      chords = null;
      return chord;
    };
    chord.sortChords = function(x) {
      if (!arguments.length) return sortChords;
      sortChords = x;
      if (chords) resort();
      return chord;
    };
    chord.chords = function() {
      if (!chords) relayout();
      return chords;
    };
    chord.groups = function() {
      if (!groups) relayout();
      return groups;
    };
    return chord;
  };
  d3.layout.force = function() {
    var force = {}, event = d3.dispatch("start", "tick", "end"), size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, gravity = .1, theta = .8, nodes = [], links = [], distances, strengths, charges;
    function repulse(node) {
      return function(quad, x1, _, x2) {
        if (quad.point !== node) {
          var dx = quad.cx - node.x, dy = quad.cy - node.y, dn = 1 / Math.sqrt(dx * dx + dy * dy);
          if ((x2 - x1) * dn < theta) {
            var k = quad.charge * dn * dn;
            node.px -= dx * k;
            node.py -= dy * k;
            return true;
          }
          if (quad.point && isFinite(dn)) {
            var k = quad.pointCharge * dn * dn;
            node.px -= dx * k;
            node.py -= dy * k;
          }
        }
        return !quad.charge;
      };
    }
    force.tick = function() {
      if ((alpha *= .99) < .005) {
        event.end({
          type: "end",
          alpha: alpha = 0
        });
        return true;
      }
      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
      for (i = 0; i < m; ++i) {
        o = links[i];
        s = o.source;
        t = o.target;
        x = t.x - s.x;
        y = t.y - s.y;
        if (l = x * x + y * y) {
          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
          x *= l;
          y *= l;
          t.x -= x * (k = s.weight / (t.weight + s.weight));
          t.y -= y * k;
          s.x += x * (k = 1 - k);
          s.y += y * k;
        }
      }
      if (k = alpha * gravity) {
        x = size[0] / 2;
        y = size[1] / 2;
        i = -1;
        if (k) while (++i < n) {
          o = nodes[i];
          o.x += (x - o.x) * k;
          o.y += (y - o.y) * k;
        }
      }
      if (charge) {
        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
        i = -1;
        while (++i < n) {
          if (!(o = nodes[i]).fixed) {
            q.visit(repulse(o));
          }
        }
      }
      i = -1;
      while (++i < n) {
        o = nodes[i];
        if (o.fixed) {
          o.x = o.px;
          o.y = o.py;
        } else {
          o.x -= (o.px - (o.px = o.x)) * friction;
          o.y -= (o.py - (o.py = o.y)) * friction;
        }
      }
      event.tick({
        type: "tick",
        alpha: alpha
      });
    };
    force.nodes = function(x) {
      if (!arguments.length) return nodes;
      nodes = x;
      return force;
    };
    force.links = function(x) {
      if (!arguments.length) return links;
      links = x;
      return force;
    };
    force.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return force;
    };
    force.linkDistance = function(x) {
      if (!arguments.length) return linkDistance;
      linkDistance = typeof x === "function" ? x : +x;
      return force;
    };
    force.distance = force.linkDistance;
    force.linkStrength = function(x) {
      if (!arguments.length) return linkStrength;
      linkStrength = typeof x === "function" ? x : +x;
      return force;
    };
    force.friction = function(x) {
      if (!arguments.length) return friction;
      friction = +x;
      return force;
    };
    force.charge = function(x) {
      if (!arguments.length) return charge;
      charge = typeof x === "function" ? x : +x;
      return force;
    };
    force.gravity = function(x) {
      if (!arguments.length) return gravity;
      gravity = +x;
      return force;
    };
    force.theta = function(x) {
      if (!arguments.length) return theta;
      theta = +x;
      return force;
    };
    force.alpha = function(x) {
      if (!arguments.length) return alpha;
      x = +x;
      if (alpha) {
        if (x > 0) alpha = x; else alpha = 0;
      } else if (x > 0) {
        event.start({
          type: "start",
          alpha: alpha = x
        });
        d3.timer(force.tick);
      }
      return force;
    };
    force.start = function() {
      var i, j, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
      for (i = 0; i < n; ++i) {
        (o = nodes[i]).index = i;
        o.weight = 0;
      }
      for (i = 0; i < m; ++i) {
        o = links[i];
        if (typeof o.source == "number") o.source = nodes[o.source];
        if (typeof o.target == "number") o.target = nodes[o.target];
        ++o.source.weight;
        ++o.target.weight;
      }
      for (i = 0; i < n; ++i) {
        o = nodes[i];
        if (isNaN(o.x)) o.x = position("x", w);
        if (isNaN(o.y)) o.y = position("y", h);
        if (isNaN(o.px)) o.px = o.x;
        if (isNaN(o.py)) o.py = o.y;
      }
      distances = [];
      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
      strengths = [];
      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
      charges = [];
      if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
      function position(dimension, size) {
        var neighbors = neighbor(i), j = -1, m = neighbors.length, x;
        while (++j < m) if (!isNaN(x = neighbors[j][dimension])) return x;
        return Math.random() * size;
      }
      function neighbor() {
        if (!neighbors) {
          neighbors = [];
          for (j = 0; j < n; ++j) {
            neighbors[j] = [];
          }
          for (j = 0; j < m; ++j) {
            var o = links[j];
            neighbors[o.source.index].push(o.target);
            neighbors[o.target.index].push(o.source);
          }
        }
        return neighbors[i];
      }
      return force.resume();
    };
    force.resume = function() {
      return force.alpha(.1);
    };
    force.stop = function() {
      return force.alpha(0);
    };
    force.drag = function() {
      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
      if (!arguments.length) return drag;
      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
    };
    function dragmove(d) {
      d.px = d3.event.x, d.py = d3.event.y;
      force.resume();
    }
    return d3.rebind(force, event, "on");
  };
  function d3_layout_forceDragstart(d) {
    d.fixed |= 2;
  }
  function d3_layout_forceDragend(d) {
    d.fixed &= ~6;
  }
  function d3_layout_forceMouseover(d) {
    d.fixed |= 4;
    d.px = d.x, d.py = d.y;
  }
  function d3_layout_forceMouseout(d) {
    d.fixed &= ~4;
  }
  function d3_layout_forceAccumulate(quad, alpha, charges) {
    var cx = 0, cy = 0;
    quad.charge = 0;
    if (!quad.leaf) {
      var nodes = quad.nodes, n = nodes.length, i = -1, c;
      while (++i < n) {
        c = nodes[i];
        if (c == null) continue;
        d3_layout_forceAccumulate(c, alpha, charges);
        quad.charge += c.charge;
        cx += c.charge * c.cx;
        cy += c.charge * c.cy;
      }
    }
    if (quad.point) {
      if (!quad.leaf) {
        quad.point.x += Math.random() - .5;
        quad.point.y += Math.random() - .5;
      }
      var k = alpha * charges[quad.point.index];
      quad.charge += quad.pointCharge = k;
      cx += k * quad.point.x;
      cy += k * quad.point.y;
    }
    quad.cx = cx / quad.charge;
    quad.cy = cy / quad.charge;
  }
  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1;
  d3.layout.partition = function() {
    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
    function position(node, x, dx, dy) {
      var children = node.children;
      node.x = x;
      node.y = node.depth * dy;
      node.dx = dx;
      node.dy = dy;
      if (children && (n = children.length)) {
        var i = -1, n, c, d;
        dx = node.value ? dx / node.value : 0;
        while (++i < n) {
          position(c = children[i], x, d = c.value * dx, dy);
          x += d;
        }
      }
    }
    function depth(node) {
      var children = node.children, d = 0;
      if (children && (n = children.length)) {
        var i = -1, n;
        while (++i < n) d = Math.max(d, depth(children[i]));
      }
      return 1 + d;
    }
    function partition(d, i) {
      var nodes = hierarchy.call(this, d, i);
      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
      return nodes;
    }
    partition.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return partition;
    };
    return d3_layout_hierarchyRebind(partition, hierarchy);
  };
  d3.layout.pie = function() {
    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = 2 * π;
    function pie(data) {
      var values = data.map(function(d, i) {
        return +value.call(pie, d, i);
      });
      var a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle);
      var k = ((typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - startAngle) / d3.sum(values);
      var index = d3.range(data.length);
      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
        return values[j] - values[i];
      } : function(i, j) {
        return sort(data[i], data[j]);
      });
      var arcs = [];
      index.forEach(function(i) {
        var d;
        arcs[i] = {
          data: data[i],
          value: d = values[i],
          startAngle: a,
          endAngle: a += d * k
        };
      });
      return arcs;
    }
    pie.value = function(x) {
      if (!arguments.length) return value;
      value = x;
      return pie;
    };
    pie.sort = function(x) {
      if (!arguments.length) return sort;
      sort = x;
      return pie;
    };
    pie.startAngle = function(x) {
      if (!arguments.length) return startAngle;
      startAngle = x;
      return pie;
    };
    pie.endAngle = function(x) {
      if (!arguments.length) return endAngle;
      endAngle = x;
      return pie;
    };
    return pie;
  };
  var d3_layout_pieSortByValue = {};
  d3.layout.stack = function() {
    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
    function stack(data, index) {
      var series = data.map(function(d, i) {
        return values.call(stack, d, i);
      });
      var points = series.map(function(d) {
        return d.map(function(v, i) {
          return [ x.call(stack, v, i), y.call(stack, v, i) ];
        });
      });
      var orders = order.call(stack, points, index);
      series = d3.permute(series, orders);
      points = d3.permute(points, orders);
      var offsets = offset.call(stack, points, index);
      var n = series.length, m = series[0].length, i, j, o;
      for (j = 0; j < m; ++j) {
        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
        for (i = 1; i < n; ++i) {
          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
        }
      }
      return data;
    }
    stack.values = function(x) {
      if (!arguments.length) return values;
      values = x;
      return stack;
    };
    stack.order = function(x) {
      if (!arguments.length) return order;
      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
      return stack;
    };
    stack.offset = function(x) {
      if (!arguments.length) return offset;
      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
      return stack;
    };
    stack.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      return stack;
    };
    stack.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      return stack;
    };
    stack.out = function(z) {
      if (!arguments.length) return out;
      out = z;
      return stack;
    };
    return stack;
  };
  function d3_layout_stackX(d) {
    return d.x;
  }
  function d3_layout_stackY(d) {
    return d.y;
  }
  function d3_layout_stackOut(d, y0, y) {
    d.y0 = y0;
    d.y = y;
  }
  var d3_layout_stackOrders = d3.map({
    "inside-out": function(data) {
      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
        return max[a] - max[b];
      }), top = 0, bottom = 0, tops = [], bottoms = [];
      for (i = 0; i < n; ++i) {
        j = index[i];
        if (top < bottom) {
          top += sums[j];
          tops.push(j);
        } else {
          bottom += sums[j];
          bottoms.push(j);
        }
      }
      return bottoms.reverse().concat(tops);
    },
    reverse: function(data) {
      return d3.range(data.length).reverse();
    },
    "default": d3_layout_stackOrderDefault
  });
  var d3_layout_stackOffsets = d3.map({
    silhouette: function(data) {
      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o > max) max = o;
        sums.push(o);
      }
      for (j = 0; j < m; ++j) {
        y0[j] = (max - sums[j]) / 2;
      }
      return y0;
    },
    wiggle: function(data) {
      var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
      y0[0] = o = o0 = 0;
      for (j = 1; j < m; ++j) {
        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
          }
          s2 += s3 * data[i][j][1];
        }
        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
        if (o < o0) o0 = o;
      }
      for (j = 0; j < m; ++j) y0[j] -= o0;
      return y0;
    },
    expand: function(data) {
      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
      }
      for (j = 0; j < m; ++j) y0[j] = 0;
      return y0;
    },
    zero: d3_layout_stackOffsetZero
  });
  function d3_layout_stackOrderDefault(data) {
    return d3.range(data.length);
  }
  function d3_layout_stackOffsetZero(data) {
    var j = -1, m = data[0].length, y0 = [];
    while (++j < m) y0[j] = 0;
    return y0;
  }
  function d3_layout_stackMaxIndex(array) {
    var i = 1, j = 0, v = array[0][1], k, n = array.length;
    for (;i < n; ++i) {
      if ((k = array[i][1]) > v) {
        j = i;
        v = k;
      }
    }
    return j;
  }
  function d3_layout_stackReduceSum(d) {
    return d.reduce(d3_layout_stackSum, 0);
  }
  function d3_layout_stackSum(p, d) {
    return p + d[1];
  }
  d3.layout.histogram = function() {
    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
    function histogram(data, i) {
      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
      while (++i < m) {
        bin = bins[i] = [];
        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
        bin.y = 0;
      }
      if (m > 0) {
        i = -1;
        while (++i < n) {
          x = values[i];
          if (x >= range[0] && x <= range[1]) {
            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
            bin.y += k;
            bin.push(data[i]);
          }
        }
      }
      return bins;
    }
    histogram.value = function(x) {
      if (!arguments.length) return valuer;
      valuer = x;
      return histogram;
    };
    histogram.range = function(x) {
      if (!arguments.length) return ranger;
      ranger = d3_functor(x);
      return histogram;
    };
    histogram.bins = function(x) {
      if (!arguments.length) return binner;
      binner = typeof x === "number" ? function(range) {
        return d3_layout_histogramBinFixed(range, x);
      } : d3_functor(x);
      return histogram;
    };
    histogram.frequency = function(x) {
      if (!arguments.length) return frequency;
      frequency = !!x;
      return histogram;
    };
    return histogram;
  };
  function d3_layout_histogramBinSturges(range, values) {
    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
  }
  function d3_layout_histogramBinFixed(range, n) {
    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
    while (++x <= n) f[x] = m * x + b;
    return f;
  }
  function d3_layout_histogramRange(values) {
    return [ d3.min(values), d3.max(values) ];
  }
  d3.layout.hierarchy = function() {
    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
    function recurse(node, depth, nodes) {
      var childs = children.call(hierarchy, node, depth);
      node.depth = depth;
      nodes.push(node);
      if (childs && (n = childs.length)) {
        var i = -1, n, c = node.children = [], v = 0, j = depth + 1, d;
        while (++i < n) {
          d = recurse(childs[i], j, nodes);
          d.parent = node;
          c.push(d);
          v += d.value;
        }
        if (sort) c.sort(sort);
        if (value) node.value = v;
      } else if (value) {
        node.value = +value.call(hierarchy, node, depth) || 0;
      }
      return node;
    }
    function revalue(node, depth) {
      var children = node.children, v = 0;
      if (children && (n = children.length)) {
        var i = -1, n, j = depth + 1;
        while (++i < n) v += revalue(children[i], j);
      } else if (value) {
        v = +value.call(hierarchy, node, depth) || 0;
      }
      if (value) node.value = v;
      return v;
    }
    function hierarchy(d) {
      var nodes = [];
      recurse(d, 0, nodes);
      return nodes;
    }
    hierarchy.sort = function(x) {
      if (!arguments.length) return sort;
      sort = x;
      return hierarchy;
    };
    hierarchy.children = function(x) {
      if (!arguments.length) return children;
      children = x;
      return hierarchy;
    };
    hierarchy.value = function(x) {
      if (!arguments.length) return value;
      value = x;
      return hierarchy;
    };
    hierarchy.revalue = function(root) {
      revalue(root, 0);
      return root;
    };
    return hierarchy;
  };
  function d3_layout_hierarchyRebind(object, hierarchy) {
    d3.rebind(object, hierarchy, "sort", "children", "value");
    object.nodes = object;
    object.links = d3_layout_hierarchyLinks;
    return object;
  }
  function d3_layout_hierarchyChildren(d) {
    return d.children;
  }
  function d3_layout_hierarchyValue(d) {
    return d.value;
  }
  function d3_layout_hierarchySort(a, b) {
    return b.value - a.value;
  }
  function d3_layout_hierarchyLinks(nodes) {
    return d3.merge(nodes.map(function(parent) {
      return (parent.children || []).map(function(child) {
        return {
          source: parent,
          target: child
        };
      });
    }));
  }
  d3.layout.pack = function() {
    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ];
    function pack(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0];
      root.x = 0;
      root.y = 0;
      d3_layout_treeVisitAfter(root, function(d) {
        d.r = Math.sqrt(d.value);
      });
      d3_layout_treeVisitAfter(root, d3_layout_packSiblings);
      var w = size[0], h = size[1], k = Math.max(2 * root.r / w, 2 * root.r / h);
      if (padding > 0) {
        var dr = padding * k / 2;
        d3_layout_treeVisitAfter(root, function(d) {
          d.r += dr;
        });
        d3_layout_treeVisitAfter(root, d3_layout_packSiblings);
        d3_layout_treeVisitAfter(root, function(d) {
          d.r -= dr;
        });
        k = Math.max(2 * root.r / w, 2 * root.r / h);
      }
      d3_layout_packTransform(root, w / 2, h / 2, 1 / k);
      return nodes;
    }
    pack.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return pack;
    };
    pack.padding = function(_) {
      if (!arguments.length) return padding;
      padding = +_;
      return pack;
    };
    return d3_layout_hierarchyRebind(pack, hierarchy);
  };
  function d3_layout_packSort(a, b) {
    return a.value - b.value;
  }
  function d3_layout_packInsert(a, b) {
    var c = a._pack_next;
    a._pack_next = b;
    b._pack_prev = a;
    b._pack_next = c;
    c._pack_prev = b;
  }
  function d3_layout_packSplice(a, b) {
    a._pack_next = b;
    b._pack_prev = a;
  }
  function d3_layout_packIntersects(a, b) {
    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
    return dr * dr - dx * dx - dy * dy > .001;
  }
  function d3_layout_packSiblings(node) {
    if (!(nodes = node.children) || !(n = nodes.length)) return;
    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
    function bound(node) {
      xMin = Math.min(node.x - node.r, xMin);
      xMax = Math.max(node.x + node.r, xMax);
      yMin = Math.min(node.y - node.r, yMin);
      yMax = Math.max(node.y + node.r, yMax);
    }
    nodes.forEach(d3_layout_packLink);
    a = nodes[0];
    a.x = -a.r;
    a.y = 0;
    bound(a);
    if (n > 1) {
      b = nodes[1];
      b.x = b.r;
      b.y = 0;
      bound(b);
      if (n > 2) {
        c = nodes[2];
        d3_layout_packPlace(a, b, c);
        bound(c);
        d3_layout_packInsert(a, c);
        a._pack_prev = c;
        d3_layout_packInsert(c, b);
        b = a._pack_next;
        for (i = 3; i < n; i++) {
          d3_layout_packPlace(a, b, c = nodes[i]);
          var isect = 0, s1 = 1, s2 = 1;
          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
            if (d3_layout_packIntersects(j, c)) {
              isect = 1;
              break;
            }
          }
          if (isect == 1) {
            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
              if (d3_layout_packIntersects(k, c)) {
                break;
              }
            }
          }
          if (isect) {
            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
            i--;
          } else {
            d3_layout_packInsert(a, c);
            b = c;
            bound(c);
          }
        }
      }
    }
    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
    for (i = 0; i < n; i++) {
      c = nodes[i];
      c.x -= cx;
      c.y -= cy;
      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
    }
    node.r = cr;
    nodes.forEach(d3_layout_packUnlink);
  }
  function d3_layout_packLink(node) {
    node._pack_next = node._pack_prev = node;
  }
  function d3_layout_packUnlink(node) {
    delete node._pack_next;
    delete node._pack_prev;
  }
  function d3_layout_packTransform(node, x, y, k) {
    var children = node.children;
    node.x = x += k * node.x;
    node.y = y += k * node.y;
    node.r *= k;
    if (children) {
      var i = -1, n = children.length;
      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
    }
  }
  function d3_layout_packPlace(a, b, c) {
    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
    if (db && (dx || dy)) {
      var da = b.r + c.r, dc = dx * dx + dy * dy;
      da *= da;
      db *= db;
      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
      c.x = a.x + x * dx + y * dy;
      c.y = a.y + x * dy - y * dx;
    } else {
      c.x = a.x + db;
      c.y = a.y;
    }
  }
  d3.layout.cluster = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ];
    function cluster(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
      d3_layout_treeVisitAfter(root, function(node) {
        var children = node.children;
        if (children && children.length) {
          node.x = d3_layout_clusterX(children);
          node.y = d3_layout_clusterY(children);
        } else {
          node.x = previousNode ? x += separation(node, previousNode) : 0;
          node.y = 0;
          previousNode = node;
        }
      });
      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
      d3_layout_treeVisitAfter(root, function(node) {
        node.x = (node.x - x0) / (x1 - x0) * size[0];
        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
      });
      return nodes;
    }
    cluster.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return cluster;
    };
    cluster.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return cluster;
    };
    return d3_layout_hierarchyRebind(cluster, hierarchy);
  };
  function d3_layout_clusterY(children) {
    return 1 + d3.max(children, function(child) {
      return child.y;
    });
  }
  function d3_layout_clusterX(children) {
    return children.reduce(function(x, child) {
      return x + child.x;
    }, 0) / children.length;
  }
  function d3_layout_clusterLeft(node) {
    var children = node.children;
    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
  }
  function d3_layout_clusterRight(node) {
    var children = node.children, n;
    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
  }
  d3.layout.tree = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ];
    function tree(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0];
      function firstWalk(node, previousSibling) {
        var children = node.children, layout = node._tree;
        if (children && (n = children.length)) {
          var n, firstChild = children[0], previousChild, ancestor = firstChild, child, i = -1;
          while (++i < n) {
            child = children[i];
            firstWalk(child, previousChild);
            ancestor = apportion(child, previousChild, ancestor);
            previousChild = child;
          }
          d3_layout_treeShift(node);
          var midpoint = .5 * (firstChild._tree.prelim + child._tree.prelim);
          if (previousSibling) {
            layout.prelim = previousSibling._tree.prelim + separation(node, previousSibling);
            layout.mod = layout.prelim - midpoint;
          } else {
            layout.prelim = midpoint;
          }
        } else {
          if (previousSibling) {
            layout.prelim = previousSibling._tree.prelim + separation(node, previousSibling);
          }
        }
      }
      function secondWalk(node, x) {
        node.x = node._tree.prelim + x;
        var children = node.children;
        if (children && (n = children.length)) {
          var i = -1, n;
          x += node._tree.mod;
          while (++i < n) {
            secondWalk(children[i], x);
          }
        }
      }
      function apportion(node, previousSibling, ancestor) {
        if (previousSibling) {
          var vip = node, vop = node, vim = previousSibling, vom = node.parent.children[0], sip = vip._tree.mod, sop = vop._tree.mod, sim = vim._tree.mod, som = vom._tree.mod, shift;
          while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
            vom = d3_layout_treeLeft(vom);
            vop = d3_layout_treeRight(vop);
            vop._tree.ancestor = node;
            shift = vim._tree.prelim + sim - vip._tree.prelim - sip + separation(vim, vip);
            if (shift > 0) {
              d3_layout_treeMove(d3_layout_treeAncestor(vim, node, ancestor), node, shift);
              sip += shift;
              sop += shift;
            }
            sim += vim._tree.mod;
            sip += vip._tree.mod;
            som += vom._tree.mod;
            sop += vop._tree.mod;
          }
          if (vim && !d3_layout_treeRight(vop)) {
            vop._tree.thread = vim;
            vop._tree.mod += sim - sop;
          }
          if (vip && !d3_layout_treeLeft(vom)) {
            vom._tree.thread = vip;
            vom._tree.mod += sip - som;
            ancestor = node;
          }
        }
        return ancestor;
      }
      d3_layout_treeVisitAfter(root, function(node, previousSibling) {
        node._tree = {
          ancestor: node,
          prelim: 0,
          mod: 0,
          change: 0,
          shift: 0,
          number: previousSibling ? previousSibling._tree.number + 1 : 0
        };
      });
      firstWalk(root);
      secondWalk(root, -root._tree.prelim);
      var left = d3_layout_treeSearch(root, d3_layout_treeLeftmost), right = d3_layout_treeSearch(root, d3_layout_treeRightmost), deep = d3_layout_treeSearch(root, d3_layout_treeDeepest), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2, y1 = deep.depth || 1;
      d3_layout_treeVisitAfter(root, function(node) {
        node.x = (node.x - x0) / (x1 - x0) * size[0];
        node.y = node.depth / y1 * size[1];
        delete node._tree;
      });
      return nodes;
    }
    tree.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return tree;
    };
    tree.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return tree;
    };
    return d3_layout_hierarchyRebind(tree, hierarchy);
  };
  function d3_layout_treeSeparation(a, b) {
    return a.parent == b.parent ? 1 : 2;
  }
  function d3_layout_treeLeft(node) {
    var children = node.children;
    return children && children.length ? children[0] : node._tree.thread;
  }
  function d3_layout_treeRight(node) {
    var children = node.children, n;
    return children && (n = children.length) ? children[n - 1] : node._tree.thread;
  }
  function d3_layout_treeSearch(node, compare) {
    var children = node.children;
    if (children && (n = children.length)) {
      var child, n, i = -1;
      while (++i < n) {
        if (compare(child = d3_layout_treeSearch(children[i], compare), node) > 0) {
          node = child;
        }
      }
    }
    return node;
  }
  function d3_layout_treeRightmost(a, b) {
    return a.x - b.x;
  }
  function d3_layout_treeLeftmost(a, b) {
    return b.x - a.x;
  }
  function d3_layout_treeDeepest(a, b) {
    return a.depth - b.depth;
  }
  function d3_layout_treeVisitAfter(node, callback) {
    function visit(node, previousSibling) {
      var children = node.children;
      if (children && (n = children.length)) {
        var child, previousChild = null, i = -1, n;
        while (++i < n) {
          child = children[i];
          visit(child, previousChild);
          previousChild = child;
        }
      }
      callback(node, previousSibling);
    }
    visit(node, null);
  }
  function d3_layout_treeShift(node) {
    var shift = 0, change = 0, children = node.children, i = children.length, child;
    while (--i >= 0) {
      child = children[i]._tree;
      child.prelim += shift;
      child.mod += shift;
      shift += child.shift + (change += child.change);
    }
  }
  function d3_layout_treeMove(ancestor, node, shift) {
    ancestor = ancestor._tree;
    node = node._tree;
    var change = shift / (node.number - ancestor.number);
    ancestor.change += change;
    node.change -= change;
    node.shift += shift;
    node.prelim += shift;
    node.mod += shift;
  }
  function d3_layout_treeAncestor(vim, node, ancestor) {
    return vim._tree.ancestor.parent == node.parent ? vim._tree.ancestor : ancestor;
  }
  d3.layout.treemap = function() {
    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
    function scale(children, k) {
      var i = -1, n = children.length, child, area;
      while (++i < n) {
        area = (child = children[i]).value * (k < 0 ? 0 : k);
        child.area = isNaN(area) || area <= 0 ? 0 : area;
      }
    }
    function squarify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while ((n = remaining.length) > 0) {
          row.push(child = remaining[n - 1]);
          row.area += child.area;
          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
            remaining.pop();
            best = score;
          } else {
            row.area -= row.pop().area;
            position(row, u, rect, false);
            u = Math.min(rect.dx, rect.dy);
            row.length = row.area = 0;
            best = Infinity;
          }
        }
        if (row.length) {
          position(row, u, rect, true);
          row.length = row.area = 0;
        }
        children.forEach(squarify);
      }
    }
    function stickify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), remaining = children.slice(), child, row = [];
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while (child = remaining.pop()) {
          row.push(child);
          row.area += child.area;
          if (child.z != null) {
            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
            row.length = row.area = 0;
          }
        }
        children.forEach(stickify);
      }
    }
    function worst(row, u) {
      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
      while (++i < n) {
        if (!(r = row[i].area)) continue;
        if (r < rmin) rmin = r;
        if (r > rmax) rmax = r;
      }
      s *= s;
      u *= u;
      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
    }
    function position(row, u, rect, flush) {
      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
      if (u == rect.dx) {
        if (flush || v > rect.dy) v = rect.dy;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dy = v;
          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
        }
        o.z = true;
        o.dx += rect.x + rect.dx - x;
        rect.y += v;
        rect.dy -= v;
      } else {
        if (flush || v > rect.dx) v = rect.dx;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dx = v;
          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
        }
        o.z = false;
        o.dy += rect.y + rect.dy - y;
        rect.x += v;
        rect.dx -= v;
      }
    }
    function treemap(d) {
      var nodes = stickies || hierarchy(d), root = nodes[0];
      root.x = 0;
      root.y = 0;
      root.dx = size[0];
      root.dy = size[1];
      if (stickies) hierarchy.revalue(root);
      scale([ root ], root.dx * root.dy / root.value);
      (stickies ? stickify : squarify)(root);
      if (sticky) stickies = nodes;
      return nodes;
    }
    treemap.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return treemap;
    };
    treemap.padding = function(x) {
      if (!arguments.length) return padding;
      function padFunction(node) {
        var p = x.call(treemap, node, node.depth);
        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
      }
      function padConstant(node) {
        return d3_layout_treemapPad(node, x);
      }
      var type;
      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], 
      padConstant) : padConstant;
      return treemap;
    };
    treemap.round = function(x) {
      if (!arguments.length) return round != Number;
      round = x ? Math.round : Number;
      return treemap;
    };
    treemap.sticky = function(x) {
      if (!arguments.length) return sticky;
      sticky = x;
      stickies = null;
      return treemap;
    };
    treemap.ratio = function(x) {
      if (!arguments.length) return ratio;
      ratio = x;
      return treemap;
    };
    treemap.mode = function(x) {
      if (!arguments.length) return mode;
      mode = x + "";
      return treemap;
    };
    return d3_layout_hierarchyRebind(treemap, hierarchy);
  };
  function d3_layout_treemapPadNull(node) {
    return {
      x: node.x,
      y: node.y,
      dx: node.dx,
      dy: node.dy
    };
  }
  function d3_layout_treemapPad(node, padding) {
    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
    if (dx < 0) {
      x += dx / 2;
      dx = 0;
    }
    if (dy < 0) {
      y += dy / 2;
      dy = 0;
    }
    return {
      x: x,
      y: y,
      dx: dx,
      dy: dy
    };
  }
  function d3_dsv(delimiter, mimeType) {
    var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
    function dsv(url, callback) {
      return d3.xhr(url, mimeType, callback).response(response);
    }
    function response(request) {
      return dsv.parse(request.responseText);
    }
    dsv.parse = function(text) {
      var o;
      return dsv.parseRows(text, function(row) {
        if (o) return o(row);
        o = new Function("d", "return {" + row.map(function(name, i) {
          return JSON.stringify(name) + ": d[" + i + "]";
        }).join(",") + "}");
      });
    };
    dsv.parseRows = function(text, f) {
      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
      function token() {
        if (I >= N) return EOF;
        if (eol) return eol = false, EOL;
        var j = I;
        if (text.charCodeAt(j) === 34) {
          var i = j;
          while (i++ < N) {
            if (text.charCodeAt(i) === 34) {
              if (text.charCodeAt(i + 1) !== 34) break;
              ++i;
            }
          }
          I = i + 2;
          var c = text.charCodeAt(i + 1);
          if (c === 13) {
            eol = true;
            if (text.charCodeAt(i + 2) === 10) ++I;
          } else if (c === 10) {
            eol = true;
          }
          return text.substring(j + 1, i).replace(/""/g, '"');
        }
        while (I < N) {
          var c = text.charCodeAt(I++), k = 1;
          if (c === 10) eol = true; else if (c === 13) {
            eol = true;
            if (text.charCodeAt(I) === 10) ++I, ++k;
          } else if (c !== delimiterCode) continue;
          return text.substring(j, I - k);
        }
        return text.substring(j);
      }
      while ((t = token()) !== EOF) {
        var a = [];
        while (t !== EOL && t !== EOF) {
          a.push(t);
          t = token();
        }
        if (f && !(a = f(a, n++))) continue;
        rows.push(a);
      }
      return rows;
    };
    dsv.format = function(rows) {
      return rows.map(formatRow).join("\n");
    };
    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }
    function formatValue(text) {
      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
    }
    return dsv;
  }
  d3.csv = d3_dsv(",", "text/csv");
  d3.tsv = d3_dsv("	", "text/tab-separated-values");
  d3.geo = {};
  d3.geo.stream = function(object, listener) {
    if (d3_geo_streamObjectType.hasOwnProperty(object.type)) {
      d3_geo_streamObjectType[object.type](object, listener);
    } else {
      d3_geo_streamGeometry(object, listener);
    }
  };
  function d3_geo_streamGeometry(geometry, listener) {
    if (d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
      d3_geo_streamGeometryType[geometry.type](geometry, listener);
    }
  }
  var d3_geo_streamObjectType = {
    Feature: function(feature, listener) {
      d3_geo_streamGeometry(feature.geometry, listener);
    },
    FeatureCollection: function(object, listener) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
    }
  };
  var d3_geo_streamGeometryType = {
    Sphere: function(object, listener) {
      listener.sphere();
    },
    Point: function(object, listener) {
      var coordinate = object.coordinates;
      listener.point(coordinate[0], coordinate[1]);
    },
    MultiPoint: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length, coordinate;
      while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1]);
    },
    LineString: function(object, listener) {
      d3_geo_streamLine(object.coordinates, listener, 0);
    },
    MultiLineString: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
    },
    Polygon: function(object, listener) {
      d3_geo_streamPolygon(object.coordinates, listener);
    },
    MultiPolygon: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
    },
    GeometryCollection: function(object, listener) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
    }
  };
  function d3_geo_streamLine(coordinates, listener, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    listener.lineStart();
    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1]);
    listener.lineEnd();
  }
  function d3_geo_streamPolygon(coordinates, listener) {
    var i = -1, n = coordinates.length;
    listener.polygonStart();
    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
    listener.polygonEnd();
  }
  function d3_geo_spherical(cartesian) {
    return [ Math.atan2(cartesian[1], cartesian[0]), Math.asin(Math.max(-1, Math.min(1, cartesian[2]))) ];
  }
  function d3_geo_sphericalEqual(a, b) {
    return Math.abs(a[0] - b[0]) < ε && Math.abs(a[1] - b[1]) < ε;
  }
  function d3_geo_cartesian(spherical) {
    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
    return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
  }
  function d3_geo_cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function d3_geo_cartesianCross(a, b) {
    return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
  }
  function d3_geo_cartesianAdd(a, b) {
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
  }
  function d3_geo_cartesianScale(vector, k) {
    return [ vector[0] * k, vector[1] * k, vector[2] * k ];
  }
  function d3_geo_cartesianNormalize(d) {
    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l;
    d[1] /= l;
    d[2] /= l;
  }
  function d3_geo_resample(project) {
    var δ2 = .5, maxDepth = 16;
    function resample(stream) {
      var λ0, x0, y0, a0, b0, c0;
      var resample = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          stream.polygonStart();
          resample.lineStart = polygonLineStart;
        },
        polygonEnd: function() {
          stream.polygonEnd();
          resample.lineStart = lineStart;
        }
      };
      function point(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      }
      function lineStart() {
        x0 = NaN;
        resample.point = linePoint;
        stream.lineStart();
      }
      function linePoint(λ, φ) {
        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
        stream.point(x0, y0);
      }
      function lineEnd() {
        resample.point = point;
        stream.lineEnd();
      }
      function polygonLineStart() {
        var λ00, φ00, x00, y00, a00, b00, c00;
        lineStart();
        resample.point = function(λ, φ) {
          linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
          resample.point = linePoint;
        };
        resample.lineEnd = function() {
          resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
          resample.lineEnd = lineEnd;
          lineEnd();
        };
      }
      return resample;
    }
    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
      if (d2 > 4 * δ2 && depth--) {
        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = Math.abs(Math.abs(c) - 1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
        if (dz * dz / d2 > δ2 || Math.abs((dx * dx2 + dy * dy2) / d2 - .5) > .3) {
          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
          stream.point(x2, y2);
          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
        }
      }
    }
    resample.precision = function(_) {
      if (!arguments.length) return Math.sqrt(δ2);
      maxDepth = (δ2 = _ * _) > 0 && 16;
      return resample;
    };
    return resample;
  }
  d3.geo.albersUsa = function() {
    var lower48 = d3.geo.albers();
    var alaska = d3.geo.albers().rotate([ 160, 0 ]).center([ 0, 60 ]).parallels([ 55, 65 ]);
    var hawaii = d3.geo.albers().rotate([ 160, 0 ]).center([ 0, 20 ]).parallels([ 8, 18 ]);
    var puertoRico = d3.geo.albers().rotate([ 60, 0 ]).center([ 0, 10 ]).parallels([ 8, 18 ]);
    function albersUsa(coordinates) {
      return projection(coordinates)(coordinates);
    }
    function projection(point) {
      var lon = point[0], lat = point[1];
      return lat > 50 ? alaska : lon < -140 ? hawaii : lat < 21 ? puertoRico : lower48;
    }
    albersUsa.scale = function(x) {
      if (!arguments.length) return lower48.scale();
      lower48.scale(x);
      alaska.scale(x * .6);
      hawaii.scale(x);
      puertoRico.scale(x * 1.5);
      return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function(x) {
      if (!arguments.length) return lower48.translate();
      var dz = lower48.scale(), dx = x[0], dy = x[1];
      lower48.translate(x);
      alaska.translate([ dx - .4 * dz, dy + .17 * dz ]);
      hawaii.translate([ dx - .19 * dz, dy + .2 * dz ]);
      puertoRico.translate([ dx + .58 * dz, dy + .43 * dz ]);
      return albersUsa;
    };
    return albersUsa.scale(lower48.scale());
  };
  function d3_geo_albers(φ0, φ1) {
    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
    function albers(λ, φ) {
      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
      return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
    }
    albers.invert = function(x, y) {
      var ρ0_y = ρ0 - y;
      return [ Math.atan2(x, ρ0_y) / n, Math.asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
    };
    return albers;
  }
  (d3.geo.albers = function() {
    var φ0 = 29.5 * d3_radians, φ1 = 45.5 * d3_radians, m = d3_geo_projectionMutator(d3_geo_albers), p = m(φ0, φ1);
    p.parallels = function(_) {
      if (!arguments.length) return [ φ0 * d3_degrees, φ1 * d3_degrees ];
      return m(φ0 = _[0] * d3_radians, φ1 = _[1] * d3_radians);
    };
    return p.rotate([ 98, 0 ]).center([ 0, 38 ]).scale(1e3);
  }).raw = d3_geo_albers;
  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
    return Math.sqrt(2 / (1 + cosλcosφ));
  }, function(ρ) {
    return 2 * Math.asin(ρ / 2);
  });
  (d3.geo.azimuthalEqualArea = function() {
    return d3_geo_projection(d3_geo_azimuthalEqualArea);
  }).raw = d3_geo_azimuthalEqualArea;
  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
    var c = Math.acos(cosλcosφ);
    return c && c / Math.sin(c);
  }, d3_identity);
  (d3.geo.azimuthalEquidistant = function() {
    return d3_geo_projection(d3_geo_azimuthalEquidistant);
  }).raw = d3_geo_azimuthalEquidistant;
  d3.geo.bounds = d3_geo_bounds(d3_identity);
  function d3_geo_bounds(projectStream) {
    var x0, y0, x1, y1;
    var bound = {
      point: boundPoint,
      lineStart: d3_noop,
      lineEnd: d3_noop,
      polygonStart: function() {
        bound.lineEnd = boundPolygonLineEnd;
      },
      polygonEnd: function() {
        bound.point = boundPoint;
      }
    };
    function boundPoint(x, y) {
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
    }
    function boundPolygonLineEnd() {
      bound.point = bound.lineEnd = d3_noop;
    }
    return function(feature) {
      y1 = x1 = -(x0 = y0 = Infinity);
      d3.geo.stream(feature, projectStream(bound));
      return [ [ x0, y0 ], [ x1, y1 ] ];
    };
  }
  d3.geo.centroid = function(object) {
    d3_geo_centroidDimension = d3_geo_centroidW = d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
    d3.geo.stream(object, d3_geo_centroid);
    var m;
    if (d3_geo_centroidW && Math.abs(m = Math.sqrt(d3_geo_centroidX * d3_geo_centroidX + d3_geo_centroidY * d3_geo_centroidY + d3_geo_centroidZ * d3_geo_centroidZ)) > ε) {
      return [ Math.atan2(d3_geo_centroidY, d3_geo_centroidX) * d3_degrees, Math.asin(Math.max(-1, Math.min(1, d3_geo_centroidZ / m))) * d3_degrees ];
    }
  };
  var d3_geo_centroidDimension, d3_geo_centroidW, d3_geo_centroidX, d3_geo_centroidY, d3_geo_centroidZ;
  var d3_geo_centroid = {
    sphere: function() {
      if (d3_geo_centroidDimension < 2) {
        d3_geo_centroidDimension = 2;
        d3_geo_centroidW = d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
      }
    },
    point: d3_geo_centroidPoint,
    lineStart: d3_geo_centroidLineStart,
    lineEnd: d3_geo_centroidLineEnd,
    polygonStart: function() {
      if (d3_geo_centroidDimension < 2) {
        d3_geo_centroidDimension = 2;
        d3_geo_centroidW = d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
      }
      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
    }
  };
  function d3_geo_centroidPoint(λ, φ) {
    if (d3_geo_centroidDimension) return;
    ++d3_geo_centroidW;
    λ *= d3_radians;
    var cosφ = Math.cos(φ *= d3_radians);
    d3_geo_centroidX += (cosφ * Math.cos(λ) - d3_geo_centroidX) / d3_geo_centroidW;
    d3_geo_centroidY += (cosφ * Math.sin(λ) - d3_geo_centroidY) / d3_geo_centroidW;
    d3_geo_centroidZ += (Math.sin(φ) - d3_geo_centroidZ) / d3_geo_centroidW;
  }
  function d3_geo_centroidRingStart() {
    var λ00, φ00;
    d3_geo_centroidDimension = 1;
    d3_geo_centroidLineStart();
    d3_geo_centroidDimension = 2;
    var linePoint = d3_geo_centroid.point;
    d3_geo_centroid.point = function(λ, φ) {
      linePoint(λ00 = λ, φ00 = φ);
    };
    d3_geo_centroid.lineEnd = function() {
      d3_geo_centroid.point(λ00, φ00);
      d3_geo_centroidLineEnd();
      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
    };
  }
  function d3_geo_centroidLineStart() {
    var x0, y0, z0;
    if (d3_geo_centroidDimension > 1) return;
    if (d3_geo_centroidDimension < 1) {
      d3_geo_centroidDimension = 1;
      d3_geo_centroidW = d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
    }
    d3_geo_centroid.point = function(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroid.point = nextPoint;
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
      d3_geo_centroidW += w;
      d3_geo_centroidX += w * (x0 + (x0 = x));
      d3_geo_centroidY += w * (y0 + (y0 = y));
      d3_geo_centroidZ += w * (z0 + (z0 = z));
    }
  }
  function d3_geo_centroidLineEnd() {
    d3_geo_centroid.point = d3_geo_centroidPoint;
  }
  d3.geo.circle = function() {
    var origin = [ 0, 0 ], angle, precision = 6, interpolate;
    function circle() {
      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
      interpolate(null, null, 1, {
        point: function(x, y) {
          ring.push(x = rotate(x, y));
          x[0] *= d3_degrees, x[1] *= d3_degrees;
        }
      });
      return {
        type: "Polygon",
        coordinates: [ ring ]
      };
    }
    circle.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return circle;
    };
    circle.angle = function(x) {
      if (!arguments.length) return angle;
      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
      return circle;
    };
    circle.precision = function(_) {
      if (!arguments.length) return precision;
      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
      return circle;
    };
    return circle.angle(90);
  };
  function d3_geo_circleInterpolate(radians, precision) {
    var cr = Math.cos(radians), sr = Math.sin(radians);
    return function(from, to, direction, listener) {
      if (from != null) {
        from = d3_geo_circleAngle(cr, from);
        to = d3_geo_circleAngle(cr, to);
        if (direction > 0 ? from < to : from > to) from += direction * 2 * π;
      } else {
        from = radians + direction * 2 * π;
        to = radians;
      }
      var point;
      for (var step = direction * precision, t = from; direction > 0 ? t > to : t < to; t -= step) {
        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
      }
    };
  }
  function d3_geo_circleAngle(cr, point) {
    var a = d3_geo_cartesian(point);
    a[0] -= cr;
    d3_geo_cartesianNormalize(a);
    var angle = Math.acos(Math.max(-1, Math.min(1, -a[1])));
    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
  }
  function d3_geo_clip(pointVisible, clipLine, interpolate) {
    return function(listener) {
      var line = clipLine(listener);
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          clip.point = pointRing;
          clip.lineStart = ringStart;
          clip.lineEnd = ringEnd;
          invisible = false;
          invisibleArea = visibleArea = 0;
          segments = [];
          listener.polygonStart();
        },
        polygonEnd: function() {
          clip.point = point;
          clip.lineStart = lineStart;
          clip.lineEnd = lineEnd;
          segments = d3.merge(segments);
          if (segments.length) {
            d3_geo_clipPolygon(segments, interpolate, listener);
          } else if (visibleArea < -ε || invisible && invisibleArea < -ε) {
            listener.lineStart();
            interpolate(null, null, 1, listener);
            listener.lineEnd();
          }
          listener.polygonEnd();
          segments = null;
        },
        sphere: function() {
          listener.polygonStart();
          listener.lineStart();
          interpolate(null, null, 1, listener);
          listener.lineEnd();
          listener.polygonEnd();
        }
      };
      function point(λ, φ) {
        if (pointVisible(λ, φ)) listener.point(λ, φ);
      }
      function pointLine(λ, φ) {
        line.point(λ, φ);
      }
      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }
      function lineEnd() {
        clip.point = point;
        line.lineEnd();
      }
      var segments, visibleArea, invisibleArea, invisible;
      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), ring;
      function pointRing(λ, φ) {
        ringListener.point(λ, φ);
        ring.push([ λ, φ ]);
      }
      function ringStart() {
        ringListener.lineStart();
        ring = [];
      }
      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringListener.lineEnd();
        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
        if (!n) {
          invisible = true;
          invisibleArea += d3_geo_clipAreaRing(ring, -1);
          ring = null;
          return;
        }
        ring = null;
        if (clean & 1) {
          segment = ringSegments[0];
          visibleArea += d3_geo_clipAreaRing(segment, 1);
          var n = segment.length - 1, i = -1, point;
          listener.lineStart();
          while (++i < n) listener.point((point = segment[i])[0], point[1]);
          listener.lineEnd();
          return;
        }
        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
      }
      return clip;
    };
  }
  function d3_geo_clipPolygon(segments, interpolate, listener) {
    var subject = [], clip = [];
    segments.forEach(function(segment) {
      if ((n = segment.length) <= 1) return;
      var n, p0 = segment[0], p1 = segment[n - 1];
      if (d3_geo_sphericalEqual(p0, p1)) {
        listener.lineStart();
        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
        listener.lineEnd();
        return;
      }
      var a = {
        point: p0,
        points: segment,
        other: null,
        visited: false,
        entry: true,
        subject: true
      }, b = {
        point: p0,
        points: [ p0 ],
        other: a,
        visited: false,
        entry: false,
        subject: false
      };
      a.other = b;
      subject.push(a);
      clip.push(b);
      a = {
        point: p1,
        points: [ p1 ],
        other: null,
        visited: false,
        entry: false,
        subject: true
      };
      b = {
        point: p1,
        points: [ p1 ],
        other: a,
        visited: false,
        entry: true,
        subject: false
      };
      a.other = b;
      subject.push(a);
      clip.push(b);
    });
    clip.sort(d3_geo_clipSort);
    d3_geo_clipLinkCircular(subject);
    d3_geo_clipLinkCircular(clip);
    if (!subject.length) return;
    var start = subject[0], current, points, point;
    while (1) {
      current = start;
      while (current.visited) if ((current = current.next) === start) return;
      points = current.points;
      listener.lineStart();
      do {
        current.visited = current.other.visited = true;
        if (current.entry) {
          if (current.subject) {
            for (var i = 0; i < points.length; i++) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.point, current.next.point, 1, listener);
          }
          current = current.next;
        } else {
          if (current.subject) {
            points = current.prev.points;
            for (var i = points.length; --i >= 0; ) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.point, current.prev.point, -1, listener);
          }
          current = current.prev;
        }
        current = current.other;
        points = current.points;
      } while (!current.visited);
      listener.lineEnd();
    }
  }
  function d3_geo_clipLinkCircular(array) {
    if (!(n = array.length)) return;
    var n, i = 0, a = array[0], b;
    while (++i < n) {
      a.next = b = array[i];
      b.prev = a;
      a = b;
    }
    a.next = b = array[0];
    b.prev = a;
  }
  function d3_geo_clipSort(a, b) {
    return ((a = a.point)[0] < 0 ? a[1] - π / 2 - ε : π / 2 - a[1]) - ((b = b.point)[0] < 0 ? b[1] - π / 2 - ε : π / 2 - b[1]);
  }
  function d3_geo_clipSegmentLength1(segment) {
    return segment.length > 1;
  }
  function d3_geo_clipBufferListener() {
    var lines = [], line;
    return {
      lineStart: function() {
        lines.push(line = []);
      },
      point: function(λ, φ) {
        line.push([ λ, φ ]);
      },
      lineEnd: d3_noop,
      buffer: function() {
        var buffer = lines;
        lines = [];
        line = null;
        return buffer;
      }
    };
  }
  function d3_geo_clipAreaRing(ring, invisible) {
    if (!(n = ring.length)) return 0;
    var n, i = 0, area = 0, p = ring[0], λ = p[0], φ = p[1], cosφ = Math.cos(φ), x0 = Math.atan2(invisible * Math.sin(λ) * cosφ, Math.sin(φ)), y0 = 1 - invisible * Math.cos(λ) * cosφ, x1 = x0, x, y;
    while (++i < n) {
      p = ring[i];
      cosφ = Math.cos(φ = p[1]);
      x = Math.atan2(invisible * Math.sin(λ = p[0]) * cosφ, Math.sin(φ));
      y = 1 - invisible * Math.cos(λ) * cosφ;
      if (Math.abs(y0 - 2) < ε && Math.abs(y - 2) < ε) continue;
      if (Math.abs(y) < ε || Math.abs(y0) < ε) {} else if (Math.abs(Math.abs(x - x0) - π) < ε) {
        if (y + y0 > 2) area += 4 * (x - x0);
      } else if (Math.abs(y0 - 2) < ε) area += 4 * (x - x1); else area += ((3 * π + x - x0) % (2 * π) - π) * (y0 + y);
      x1 = x0, x0 = x, y0 = y;
    }
    return area;
  }
  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate);
  function d3_geo_clipAntimeridianLine(listener) {
    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
    return {
      lineStart: function() {
        listener.lineStart();
        clean = 1;
      },
      point: function(λ1, φ1) {
        var sλ1 = λ1 > 0 ? π : -π, dλ = Math.abs(λ1 - λ0);
        if (Math.abs(dλ - π) < ε) {
          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? π / 2 : -π / 2);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          listener.point(λ1, φ0);
          clean = 0;
        } else if (sλ0 !== sλ1 && dλ >= π) {
          if (Math.abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
          if (Math.abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          clean = 0;
        }
        listener.point(λ0 = λ1, φ0 = φ1);
        sλ0 = sλ1;
      },
      lineEnd: function() {
        listener.lineEnd();
        λ0 = φ0 = NaN;
      },
      clean: function() {
        return 2 - clean;
      }
    };
  }
  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
    return Math.abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
  }
  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
    var φ;
    if (from == null) {
      φ = direction * π / 2;
      listener.point(-π, φ);
      listener.point(0, φ);
      listener.point(π, φ);
      listener.point(π, 0);
      listener.point(π, -φ);
      listener.point(0, -φ);
      listener.point(-π, -φ);
      listener.point(-π, 0);
      listener.point(-π, φ);
    } else if (Math.abs(from[0] - to[0]) > ε) {
      var s = (from[0] < to[0] ? 1 : -1) * π;
      φ = direction * s / 2;
      listener.point(-s, φ);
      listener.point(0, φ);
      listener.point(s, φ);
    } else {
      listener.point(to[0], to[1]);
    }
  }
  function d3_geo_clipCircle(degrees) {
    var radians = degrees * d3_radians, cr = Math.cos(radians), interpolate = d3_geo_circleInterpolate(radians, 6 * d3_radians);
    return d3_geo_clip(visible, clipLine, interpolate);
    function visible(λ, φ) {
      return Math.cos(λ) * Math.cos(φ) > cr;
    }
    function clipLine(listener) {
      var point0, v0, v00, clean;
      return {
        lineStart: function() {
          v00 = v0 = false;
          clean = 1;
        },
        point: function(λ, φ) {
          var point1 = [ λ, φ ], point2, v = visible(λ, φ);
          if (!point0 && (v00 = v0 = v)) listener.lineStart();
          if (v !== v0) {
            point2 = intersect(point0, point1);
            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
              point1[0] += ε;
              point1[1] += ε;
              v = visible(point1[0], point1[1]);
            }
          }
          if (v !== v0) {
            clean = 0;
            if (v0 = v) {
              listener.lineStart();
              point2 = intersect(point1, point0);
              listener.point(point2[0], point2[1]);
            } else {
              point2 = intersect(point0, point1);
              listener.point(point2[0], point2[1]);
              listener.lineEnd();
            }
            point0 = point2;
          }
          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) listener.point(point1[0], point1[1]);
          point0 = point1;
        },
        lineEnd: function() {
          if (v0) listener.lineEnd();
          point0 = null;
        },
        clean: function() {
          return clean | (v00 && v0) << 1;
        }
      };
    }
    function intersect(a, b) {
      var pa = d3_geo_cartesian(a, 0), pb = d3_geo_cartesian(b, 0);
      var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
      if (!determinant) return a;
      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
      d3_geo_cartesianAdd(A, B);
      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t = Math.sqrt(w * w - uu * (d3_geo_cartesianDot(A, A) - 1)), q = d3_geo_cartesianScale(u, (-w - t) / uu);
      d3_geo_cartesianAdd(q, A);
      return d3_geo_spherical(q);
    }
  }
  function d3_geo_compose(a, b) {
    function compose(x, y) {
      return x = a(x, y), b(x[0], x[1]);
    }
    if (a.invert && b.invert) compose.invert = function(x, y) {
      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };
    return compose;
  }
  function d3_geo_equirectangular(λ, φ) {
    return [ λ, φ ];
  }
  (d3.geo.equirectangular = function() {
    return d3_geo_projection(d3_geo_equirectangular).scale(250 / π);
  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
  var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / cosλcosφ;
  }, Math.atan);
  (d3.geo.gnomonic = function() {
    return d3_geo_projection(d3_geo_gnomonic);
  }).raw = d3_geo_gnomonic;
  d3.geo.graticule = function() {
    var x1, x0, y1, y0, dx = 22.5, dy = dx, x, y, precision = 2.5;
    function graticule() {
      return {
        type: "MultiLineString",
        coordinates: lines()
      };
    }
    function lines() {
      return d3.range(Math.ceil(x0 / dx) * dx, x1, dx).map(x).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).map(y));
    }
    graticule.lines = function() {
      return lines().map(function(coordinates) {
        return {
          type: "LineString",
          coordinates: coordinates
        };
      });
    };
    graticule.outline = function() {
      return {
        type: "Polygon",
        coordinates: [ x(x0).concat(y(y1).slice(1), x(x1).reverse().slice(1), y(y0).reverse().slice(1)) ]
      };
    };
    graticule.extent = function(_) {
      if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
      x0 = +_[0][0], x1 = +_[1][0];
      y0 = +_[0][1], y1 = +_[1][1];
      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
      return graticule.precision(precision);
    };
    graticule.step = function(_) {
      if (!arguments.length) return [ dx, dy ];
      dx = +_[0], dy = +_[1];
      return graticule;
    };
    graticule.precision = function(_) {
      if (!arguments.length) return precision;
      precision = +_;
      x = d3_geo_graticuleX(y0, y1, precision);
      y = d3_geo_graticuleY(x0, x1, precision);
      return graticule;
    };
    return graticule.extent([ [ -180 + ε, -90 + ε ], [ 180 - ε, 90 - ε ] ]);
  };
  function d3_geo_graticuleX(y0, y1, dy) {
    var y = d3.range(y0, y1 - ε, dy).concat(y1);
    return function(x) {
      return y.map(function(y) {
        return [ x, y ];
      });
    };
  }
  function d3_geo_graticuleY(x0, x1, dx) {
    var x = d3.range(x0, x1 - ε, dx).concat(x1);
    return function(y) {
      return x.map(function(x) {
        return [ x, y ];
      });
    };
  }
  function d3_geo_haversin(x) {
    return (x = Math.sin(x / 2)) * x;
  }
  d3.geo.interpolate = function(source, target) {
    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
  };
  function d3_geo_interpolate(x0, y0, x1, y1) {
    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_geo_haversin(y1 - y0) + cy0 * cy1 * d3_geo_haversin(x1 - x0))), k = 1 / Math.sin(d);
    var interpolate = d ? function(t) {
      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
      return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
    } : function() {
      return [ x0 * d3_degrees, y0 * d3_degrees ];
    };
    interpolate.distance = d;
    return interpolate;
  }
  d3.geo.greatArc = function() {
    var source = d3_source, source_, target = d3_target, target_, precision = 6 * d3_radians, interpolate;
    function greatArc() {
      var p0 = source_ || source.apply(this, arguments), p1 = target_ || target.apply(this, arguments), i = interpolate || d3.geo.interpolate(p0, p1), t = 0, dt = precision / i.distance, coordinates = [ p0 ];
      while ((t += dt) < 1) coordinates.push(i(t));
      coordinates.push(p1);
      return {
        type: "LineString",
        coordinates: coordinates
      };
    }
    greatArc.distance = function() {
      return (interpolate || d3.geo.interpolate(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments))).distance;
    };
    greatArc.source = function(_) {
      if (!arguments.length) return source;
      source = _, source_ = typeof _ === "function" ? null : _;
      interpolate = source_ && target_ ? d3.geo.interpolate(source_, target_) : null;
      return greatArc;
    };
    greatArc.target = function(_) {
      if (!arguments.length) return target;
      target = _, target_ = typeof _ === "function" ? null : _;
      interpolate = source_ && target_ ? d3.geo.interpolate(source_, target_) : null;
      return greatArc;
    };
    greatArc.precision = function(_) {
      if (!arguments.length) return precision / d3_radians;
      precision = _ * d3_radians;
      return greatArc;
    };
    return greatArc;
  };
  function d3_geo_mercator(λ, φ) {
    return [ λ / (2 * π), Math.max(-.5, Math.min(+.5, Math.log(Math.tan(π / 4 + φ / 2)) / (2 * π))) ];
  }
  d3_geo_mercator.invert = function(x, y) {
    return [ 2 * π * x, 2 * Math.atan(Math.exp(2 * π * y)) - π / 2 ];
  };
  (d3.geo.mercator = function() {
    return d3_geo_projection(d3_geo_mercator).scale(500);
  }).raw = d3_geo_mercator;
  var d3_geo_orthographic = d3_geo_azimuthal(function() {
    return 1;
  }, Math.asin);
  (d3.geo.orthographic = function() {
    return d3_geo_projection(d3_geo_orthographic);
  }).raw = d3_geo_orthographic;
  d3.geo.path = function() {
    var pointRadius = 4.5, projection, context, projectStream, contextStream;
    function path(object) {
      if (object) d3.geo.stream(object, projectStream(contextStream.pointRadius(typeof pointRadius === "function" ? +pointRadius.apply(this, arguments) : pointRadius)));
      return contextStream.result();
    }
    path.area = function(object) {
      d3_geo_pathAreaSum = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathArea));
      return d3_geo_pathAreaSum;
    };
    path.centroid = function(object) {
      d3_geo_centroidDimension = d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
      return d3_geo_centroidZ ? [ d3_geo_centroidX / d3_geo_centroidZ, d3_geo_centroidY / d3_geo_centroidZ ] : undefined;
    };
    path.bounds = function(object) {
      return d3_geo_bounds(projectStream)(object);
    };
    path.projection = function(_) {
      if (!arguments.length) return projection;
      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
      return path;
    };
    path.context = function(_) {
      if (!arguments.length) return context;
      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
      return path;
    };
    path.pointRadius = function(_) {
      if (!arguments.length) return pointRadius;
      pointRadius = typeof _ === "function" ? _ : +_;
      return path;
    };
    return path.projection(d3.geo.albersUsa()).context(null);
  };
  function d3_geo_pathCircle(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + +2 * radius + "z";
  }
  function d3_geo_pathProjectStream(project) {
    var resample = d3_geo_resample(function(λ, φ) {
      return project([ λ * d3_degrees, φ * d3_degrees ]);
    });
    return function(stream) {
      stream = resample(stream);
      return {
        point: function(λ, φ) {
          stream.point(λ * d3_radians, φ * d3_radians);
        },
        sphere: function() {
          stream.sphere();
        },
        lineStart: function() {
          stream.lineStart();
        },
        lineEnd: function() {
          stream.lineEnd();
        },
        polygonStart: function() {
          stream.polygonStart();
        },
        polygonEnd: function() {
          stream.polygonEnd();
        }
      };
    };
  }
  function d3_geo_pathBuffer() {
    var pointCircle = d3_geo_pathCircle(4.5), buffer = [];
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointCircle = d3_geo_pathCircle(_);
        return stream;
      },
      result: function() {
        if (buffer.length) {
          var result = buffer.join("");
          buffer = [];
          return result;
        }
      }
    };
    function point(x, y) {
      buffer.push("M", x, ",", y, pointCircle);
    }
    function pointLineStart(x, y) {
      buffer.push("M", x, ",", y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      buffer.push("L", x, ",", y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      buffer.push("Z");
    }
    return stream;
  }
  function d3_geo_pathContext(context) {
    var pointRadius = 4.5;
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointRadius = _;
        return stream;
      },
      result: d3_noop
    };
    function point(x, y) {
      context.moveTo(x, y);
      context.arc(x, y, pointRadius, 0, 2 * π);
    }
    function pointLineStart(x, y) {
      context.moveTo(x, y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      context.lineTo(x, y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      context.closePath();
    }
    return stream;
  }
  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_pathAreaPolygon = 0;
      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
      d3_geo_pathAreaSum += Math.abs(d3_geo_pathAreaPolygon / 2);
    }
  };
  function d3_geo_pathAreaRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathArea.point = function(x, y) {
      d3_geo_pathArea.point = nextPoint;
      x00 = x0 = x, y00 = y0 = y;
    };
    function nextPoint(x, y) {
      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
      x0 = x, y0 = y;
    }
    d3_geo_pathArea.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  var d3_geo_pathCentroid = {
    point: d3_geo_pathCentroidPoint,
    lineStart: d3_geo_pathCentroidLineStart,
    lineEnd: d3_geo_pathCentroidLineEnd,
    polygonStart: function() {
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
    }
  };
  function d3_geo_pathCentroidPoint(x, y) {
    if (d3_geo_centroidDimension) return;
    d3_geo_centroidX += x;
    d3_geo_centroidY += y;
    ++d3_geo_centroidZ;
  }
  function d3_geo_pathCentroidLineStart() {
    var x0, y0;
    if (d3_geo_centroidDimension !== 1) {
      if (d3_geo_centroidDimension < 1) {
        d3_geo_centroidDimension = 1;
        d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
      } else return;
    }
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      x0 = x, y0 = y;
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX += z * (x0 + x) / 2;
      d3_geo_centroidY += z * (y0 + y) / 2;
      d3_geo_centroidZ += z;
      x0 = x, y0 = y;
    }
  }
  function d3_geo_pathCentroidLineEnd() {
    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
  }
  function d3_geo_pathCentroidRingStart() {
    var x00, y00, x0, y0;
    if (d3_geo_centroidDimension < 2) {
      d3_geo_centroidDimension = 2;
      d3_geo_centroidX = d3_geo_centroidY = d3_geo_centroidZ = 0;
    }
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      x00 = x0 = x, y00 = y0 = y;
    };
    function nextPoint(x, y) {
      var z = y0 * x - x0 * y;
      d3_geo_centroidX += z * (x0 + x);
      d3_geo_centroidY += z * (y0 + y);
      d3_geo_centroidZ += z * 3;
      x0 = x, y0 = y;
    }
    d3_geo_pathCentroid.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  d3.geo.area = function(object) {
    d3_geo_areaSum = 0;
    d3.geo.stream(object, d3_geo_area);
    return d3_geo_areaSum;
  };
  var d3_geo_areaSum, d3_geo_areaRingU, d3_geo_areaRingV;
  var d3_geo_area = {
    sphere: function() {
      d3_geo_areaSum += 4 * π;
    },
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_areaRingU = 1, d3_geo_areaRingV = 0;
      d3_geo_area.lineStart = d3_geo_areaRingStart;
    },
    polygonEnd: function() {
      var area = 2 * Math.atan2(d3_geo_areaRingV, d3_geo_areaRingU);
      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
    }
  };
  function d3_geo_areaRingStart() {
    var λ00, φ00, λ0, cosφ0, sinφ0;
    d3_geo_area.point = function(λ, φ) {
      d3_geo_area.point = nextPoint;
      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), 
      sinφ0 = Math.sin(φ);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      φ = φ * d3_radians / 2 + π / 4;
      var dλ = λ - λ0, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u0 = d3_geo_areaRingU, v0 = d3_geo_areaRingV, u = cosφ0 * cosφ + k * Math.cos(dλ), v = k * Math.sin(dλ);
      d3_geo_areaRingU = u0 * u - v0 * v;
      d3_geo_areaRingV = v0 * u + u0 * v;
      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
    }
    d3_geo_area.lineEnd = function() {
      nextPoint(λ00, φ00);
    };
  }
  d3.geo.projection = d3_geo_projection;
  d3.geo.projectionMutator = d3_geo_projectionMutator;
  function d3_geo_projection(project) {
    return d3_geo_projectionMutator(function() {
      return project;
    })();
  }
  function d3_geo_projectionMutator(projectAt) {
    var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
      x = project(x, y);
      return [ x[0] * k + δx, δy - x[1] * k ];
    }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, clip = d3_geo_clipAntimeridian, clipAngle = null;
    function projection(point) {
      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
      return [ point[0] * k + δx, δy - point[1] * k ];
    }
    function invert(point) {
      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
      return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
    }
    projection.stream = function(stream) {
      return d3_geo_projectionRadiansRotate(rotate, clip(projectResample(stream)));
    };
    projection.clipAngle = function(_) {
      if (!arguments.length) return clipAngle;
      clip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle(clipAngle = +_);
      return projection;
    };
    projection.scale = function(_) {
      if (!arguments.length) return k;
      k = +_;
      return reset();
    };
    projection.translate = function(_) {
      if (!arguments.length) return [ x, y ];
      x = +_[0];
      y = +_[1];
      return reset();
    };
    projection.center = function(_) {
      if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
      λ = _[0] % 360 * d3_radians;
      φ = _[1] % 360 * d3_radians;
      return reset();
    };
    projection.rotate = function(_) {
      if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
      δλ = _[0] % 360 * d3_radians;
      δφ = _[1] % 360 * d3_radians;
      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
      return reset();
    };
    d3.rebind(projection, projectResample, "precision");
    function reset() {
      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
      var center = project(λ, φ);
      δx = x - center[0] * k;
      δy = y + center[1] * k;
      return projection;
    }
    return function() {
      project = projectAt.apply(this, arguments);
      projection.invert = project.invert && invert;
      return reset();
    };
  }
  function d3_geo_projectionRadiansRotate(rotate, stream) {
    return {
      point: function(x, y) {
        y = rotate(x * d3_radians, y * d3_radians), x = y[0];
        stream.point(x > π ? x - 2 * π : x < -π ? x + 2 * π : x, y[1]);
      },
      sphere: function() {
        stream.sphere();
      },
      lineStart: function() {
        stream.lineStart();
      },
      lineEnd: function() {
        stream.lineEnd();
      },
      polygonStart: function() {
        stream.polygonStart();
      },
      polygonEnd: function() {
        stream.polygonEnd();
      }
    };
  }
  function d3_geo_rotation(δλ, δφ, δγ) {
    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_equirectangular;
  }
  function d3_geo_forwardRotationλ(δλ) {
    return function(λ, φ) {
      return λ += δλ, [ λ > π ? λ - 2 * π : λ < -π ? λ + 2 * π : λ, φ ];
    };
  }
  function d3_geo_rotationλ(δλ) {
    var rotation = d3_geo_forwardRotationλ(δλ);
    rotation.invert = d3_geo_forwardRotationλ(-δλ);
    return rotation;
  }
  function d3_geo_rotationφγ(δφ, δγ) {
    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
    function rotation(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
      return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), Math.asin(Math.max(-1, Math.min(1, k * cosδγ + y * sinδγ))) ];
    }
    rotation.invert = function(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
      return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), Math.asin(Math.max(-1, Math.min(1, k * cosδφ - x * sinδφ))) ];
    };
    return rotation;
  }
  var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / (1 + cosλcosφ);
  }, function(ρ) {
    return 2 * Math.atan(ρ);
  });
  (d3.geo.stereographic = function() {
    return d3_geo_projection(d3_geo_stereographic);
  }).raw = d3_geo_stereographic;
  function d3_geo_azimuthal(scale, angle) {
    function azimuthal(λ, φ) {
      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
      return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
    }
    azimuthal.invert = function(x, y) {
      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
      return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
    };
    return azimuthal;
  }
  d3.geom = {};
  d3.geom.hull = function(vertices) {
    if (vertices.length < 3) return [];
    var len = vertices.length, plen = len - 1, points = [], stack = [], i, j, h = 0, x1, y1, x2, y2, u, v, a, sp;
    for (i = 1; i < len; ++i) {
      if (vertices[i][1] < vertices[h][1]) {
        h = i;
      } else if (vertices[i][1] == vertices[h][1]) {
        h = vertices[i][0] < vertices[h][0] ? i : h;
      }
    }
    for (i = 0; i < len; ++i) {
      if (i === h) continue;
      y1 = vertices[i][1] - vertices[h][1];
      x1 = vertices[i][0] - vertices[h][0];
      points.push({
        angle: Math.atan2(y1, x1),
        index: i
      });
    }
    points.sort(function(a, b) {
      return a.angle - b.angle;
    });
    a = points[0].angle;
    v = points[0].index;
    u = 0;
    for (i = 1; i < plen; ++i) {
      j = points[i].index;
      if (a == points[i].angle) {
        x1 = vertices[v][0] - vertices[h][0];
        y1 = vertices[v][1] - vertices[h][1];
        x2 = vertices[j][0] - vertices[h][0];
        y2 = vertices[j][1] - vertices[h][1];
        if (x1 * x1 + y1 * y1 >= x2 * x2 + y2 * y2) {
          points[i].index = -1;
        } else {
          points[u].index = -1;
          a = points[i].angle;
          u = i;
          v = j;
        }
      } else {
        a = points[i].angle;
        u = i;
        v = j;
      }
    }
    stack.push(h);
    for (i = 0, j = 0; i < 2; ++j) {
      if (points[j].index !== -1) {
        stack.push(points[j].index);
        i++;
      }
    }
    sp = stack.length;
    for (;j < plen; ++j) {
      if (points[j].index === -1) continue;
      while (!d3_geom_hullCCW(stack[sp - 2], stack[sp - 1], points[j].index, vertices)) {
        --sp;
      }
      stack[sp++] = points[j].index;
    }
    var poly = [];
    for (i = 0; i < sp; ++i) {
      poly.push(vertices[stack[i]]);
    }
    return poly;
  };
  function d3_geom_hullCCW(i1, i2, i3, v) {
    var t, a, b, c, d, e, f;
    t = v[i1];
    a = t[0];
    b = t[1];
    t = v[i2];
    c = t[0];
    d = t[1];
    t = v[i3];
    e = t[0];
    f = t[1];
    return (f - b) * (c - a) - (d - b) * (e - a) > 0;
  }
  d3.geom.polygon = function(coordinates) {
    coordinates.area = function() {
      var i = 0, n = coordinates.length, area = coordinates[n - 1][1] * coordinates[0][0] - coordinates[n - 1][0] * coordinates[0][1];
      while (++i < n) {
        area += coordinates[i - 1][1] * coordinates[i][0] - coordinates[i - 1][0] * coordinates[i][1];
      }
      return area * .5;
    };
    coordinates.centroid = function(k) {
      var i = -1, n = coordinates.length, x = 0, y = 0, a, b = coordinates[n - 1], c;
      if (!arguments.length) k = -1 / (6 * coordinates.area());
      while (++i < n) {
        a = b;
        b = coordinates[i];
        c = a[0] * b[1] - b[0] * a[1];
        x += (a[0] + b[0]) * c;
        y += (a[1] + b[1]) * c;
      }
      return [ x * k, y * k ];
    };
    coordinates.clip = function(subject) {
      var input, i = -1, n = coordinates.length, j, m, a = coordinates[n - 1], b, c, d;
      while (++i < n) {
        input = subject.slice();
        subject.length = 0;
        b = coordinates[i];
        c = input[(m = input.length) - 1];
        j = -1;
        while (++j < m) {
          d = input[j];
          if (d3_geom_polygonInside(d, a, b)) {
            if (!d3_geom_polygonInside(c, a, b)) {
              subject.push(d3_geom_polygonIntersect(c, d, a, b));
            }
            subject.push(d);
          } else if (d3_geom_polygonInside(c, a, b)) {
            subject.push(d3_geom_polygonIntersect(c, d, a, b));
          }
          c = d;
        }
        a = b;
      }
      return subject;
    };
    return coordinates;
  };
  function d3_geom_polygonInside(p, a, b) {
    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
  }
  function d3_geom_polygonIntersect(c, d, a, b) {
    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
    return [ x1 + ua * x21, y1 + ua * y21 ];
  }
  d3.geom.voronoi = function(vertices) {
    var polygons = vertices.map(function() {
      return [];
    }), Z = 1e6;
    d3_voronoi_tessellate(vertices, function(e) {
      var s1, s2, x1, x2, y1, y2;
      if (e.a === 1 && e.b >= 0) {
        s1 = e.ep.r;
        s2 = e.ep.l;
      } else {
        s1 = e.ep.l;
        s2 = e.ep.r;
      }
      if (e.a === 1) {
        y1 = s1 ? s1.y : -Z;
        x1 = e.c - e.b * y1;
        y2 = s2 ? s2.y : Z;
        x2 = e.c - e.b * y2;
      } else {
        x1 = s1 ? s1.x : -Z;
        y1 = e.c - e.a * x1;
        x2 = s2 ? s2.x : Z;
        y2 = e.c - e.a * x2;
      }
      var v1 = [ x1, y1 ], v2 = [ x2, y2 ];
      polygons[e.region.l.index].push(v1, v2);
      polygons[e.region.r.index].push(v1, v2);
    });
    polygons = polygons.map(function(polygon, i) {
      var cx = vertices[i][0], cy = vertices[i][1], angle = polygon.map(function(v) {
        return Math.atan2(v[0] - cx, v[1] - cy);
      }), order = d3.range(polygon.length).sort(function(a, b) {
        return angle[a] - angle[b];
      });
      return order.filter(function(d, i) {
        return !i || angle[d] - angle[order[i - 1]] > ε;
      }).map(function(d) {
        return polygon[d];
      });
    });
    polygons.forEach(function(polygon, i) {
      var n = polygon.length;
      if (!n) return polygon.push([ -Z, -Z ], [ -Z, Z ], [ Z, Z ], [ Z, -Z ]);
      if (n > 2) return;
      var p0 = vertices[i], p1 = polygon[0], p2 = polygon[1], x0 = p0[0], y0 = p0[1], x1 = p1[0], y1 = p1[1], x2 = p2[0], y2 = p2[1], dx = Math.abs(x2 - x1), dy = y2 - y1;
      if (Math.abs(dy) < ε) {
        var y = y0 < y1 ? -Z : Z;
        polygon.push([ -Z, y ], [ Z, y ]);
      } else if (dx < ε) {
        var x = x0 < x1 ? -Z : Z;
        polygon.push([ x, -Z ], [ x, Z ]);
      } else {
        var y = (x2 - x1) * (y1 - y0) < (x1 - x0) * (y2 - y1) ? Z : -Z, z = Math.abs(dy) - dx;
        if (Math.abs(z) < ε) {
          polygon.push([ dy < 0 ? y : -y, y ]);
        } else {
          if (z > 0) y *= -1;
          polygon.push([ -Z, y ], [ Z, y ]);
        }
      }
    });
    return polygons;
  };
  var d3_voronoi_opposite = {
    l: "r",
    r: "l"
  };
  function d3_voronoi_tessellate(vertices, callback) {
    var Sites = {
      list: vertices.map(function(v, i) {
        return {
          index: i,
          x: v[0],
          y: v[1]
        };
      }).sort(function(a, b) {
        return a.y < b.y ? -1 : a.y > b.y ? 1 : a.x < b.x ? -1 : a.x > b.x ? 1 : 0;
      }),
      bottomSite: null
    };
    var EdgeList = {
      list: [],
      leftEnd: null,
      rightEnd: null,
      init: function() {
        EdgeList.leftEnd = EdgeList.createHalfEdge(null, "l");
        EdgeList.rightEnd = EdgeList.createHalfEdge(null, "l");
        EdgeList.leftEnd.r = EdgeList.rightEnd;
        EdgeList.rightEnd.l = EdgeList.leftEnd;
        EdgeList.list.unshift(EdgeList.leftEnd, EdgeList.rightEnd);
      },
      createHalfEdge: function(edge, side) {
        return {
          edge: edge,
          side: side,
          vertex: null,
          l: null,
          r: null
        };
      },
      insert: function(lb, he) {
        he.l = lb;
        he.r = lb.r;
        lb.r.l = he;
        lb.r = he;
      },
      leftBound: function(p) {
        var he = EdgeList.leftEnd;
        do {
          he = he.r;
        } while (he != EdgeList.rightEnd && Geom.rightOf(he, p));
        he = he.l;
        return he;
      },
      del: function(he) {
        he.l.r = he.r;
        he.r.l = he.l;
        he.edge = null;
      },
      right: function(he) {
        return he.r;
      },
      left: function(he) {
        return he.l;
      },
      leftRegion: function(he) {
        return he.edge == null ? Sites.bottomSite : he.edge.region[he.side];
      },
      rightRegion: function(he) {
        return he.edge == null ? Sites.bottomSite : he.edge.region[d3_voronoi_opposite[he.side]];
      }
    };
    var Geom = {
      bisect: function(s1, s2) {
        var newEdge = {
          region: {
            l: s1,
            r: s2
          },
          ep: {
            l: null,
            r: null
          }
        };
        var dx = s2.x - s1.x, dy = s2.y - s1.y, adx = dx > 0 ? dx : -dx, ady = dy > 0 ? dy : -dy;
        newEdge.c = s1.x * dx + s1.y * dy + (dx * dx + dy * dy) * .5;
        if (adx > ady) {
          newEdge.a = 1;
          newEdge.b = dy / dx;
          newEdge.c /= dx;
        } else {
          newEdge.b = 1;
          newEdge.a = dx / dy;
          newEdge.c /= dy;
        }
        return newEdge;
      },
      intersect: function(el1, el2) {
        var e1 = el1.edge, e2 = el2.edge;
        if (!e1 || !e2 || e1.region.r == e2.region.r) {
          return null;
        }
        var d = e1.a * e2.b - e1.b * e2.a;
        if (Math.abs(d) < 1e-10) {
          return null;
        }
        var xint = (e1.c * e2.b - e2.c * e1.b) / d, yint = (e2.c * e1.a - e1.c * e2.a) / d, e1r = e1.region.r, e2r = e2.region.r, el, e;
        if (e1r.y < e2r.y || e1r.y == e2r.y && e1r.x < e2r.x) {
          el = el1;
          e = e1;
        } else {
          el = el2;
          e = e2;
        }
        var rightOfSite = xint >= e.region.r.x;
        if (rightOfSite && el.side === "l" || !rightOfSite && el.side === "r") {
          return null;
        }
        return {
          x: xint,
          y: yint
        };
      },
      rightOf: function(he, p) {
        var e = he.edge, topsite = e.region.r, rightOfSite = p.x > topsite.x;
        if (rightOfSite && he.side === "l") {
          return 1;
        }
        if (!rightOfSite && he.side === "r") {
          return 0;
        }
        if (e.a === 1) {
          var dyp = p.y - topsite.y, dxp = p.x - topsite.x, fast = 0, above = 0;
          if (!rightOfSite && e.b < 0 || rightOfSite && e.b >= 0) {
            above = fast = dyp >= e.b * dxp;
          } else {
            above = p.x + p.y * e.b > e.c;
            if (e.b < 0) {
              above = !above;
            }
            if (!above) {
              fast = 1;
            }
          }
          if (!fast) {
            var dxs = topsite.x - e.region.l.x;
            above = e.b * (dxp * dxp - dyp * dyp) < dxs * dyp * (1 + 2 * dxp / dxs + e.b * e.b);
            if (e.b < 0) {
              above = !above;
            }
          }
        } else {
          var yl = e.c - e.a * p.x, t1 = p.y - yl, t2 = p.x - topsite.x, t3 = yl - topsite.y;
          above = t1 * t1 > t2 * t2 + t3 * t3;
        }
        return he.side === "l" ? above : !above;
      },
      endPoint: function(edge, side, site) {
        edge.ep[side] = site;
        if (!edge.ep[d3_voronoi_opposite[side]]) return;
        callback(edge);
      },
      distance: function(s, t) {
        var dx = s.x - t.x, dy = s.y - t.y;
        return Math.sqrt(dx * dx + dy * dy);
      }
    };
    var EventQueue = {
      list: [],
      insert: function(he, site, offset) {
        he.vertex = site;
        he.ystar = site.y + offset;
        for (var i = 0, list = EventQueue.list, l = list.length; i < l; i++) {
          var next = list[i];
          if (he.ystar > next.ystar || he.ystar == next.ystar && site.x > next.vertex.x) {
            continue;
          } else {
            break;
          }
        }
        list.splice(i, 0, he);
      },
      del: function(he) {
        for (var i = 0, ls = EventQueue.list, l = ls.length; i < l && ls[i] != he; ++i) {}
        ls.splice(i, 1);
      },
      empty: function() {
        return EventQueue.list.length === 0;
      },
      nextEvent: function(he) {
        for (var i = 0, ls = EventQueue.list, l = ls.length; i < l; ++i) {
          if (ls[i] == he) return ls[i + 1];
        }
        return null;
      },
      min: function() {
        var elem = EventQueue.list[0];
        return {
          x: elem.vertex.x,
          y: elem.ystar
        };
      },
      extractMin: function() {
        return EventQueue.list.shift();
      }
    };
    EdgeList.init();
    Sites.bottomSite = Sites.list.shift();
    var newSite = Sites.list.shift(), newIntStar;
    var lbnd, rbnd, llbnd, rrbnd, bisector;
    var bot, top, temp, p, v;
    var e, pm;
    while (true) {
      if (!EventQueue.empty()) {
        newIntStar = EventQueue.min();
      }
      if (newSite && (EventQueue.empty() || newSite.y < newIntStar.y || newSite.y == newIntStar.y && newSite.x < newIntStar.x)) {
        lbnd = EdgeList.leftBound(newSite);
        rbnd = EdgeList.right(lbnd);
        bot = EdgeList.rightRegion(lbnd);
        e = Geom.bisect(bot, newSite);
        bisector = EdgeList.createHalfEdge(e, "l");
        EdgeList.insert(lbnd, bisector);
        p = Geom.intersect(lbnd, bisector);
        if (p) {
          EventQueue.del(lbnd);
          EventQueue.insert(lbnd, p, Geom.distance(p, newSite));
        }
        lbnd = bisector;
        bisector = EdgeList.createHalfEdge(e, "r");
        EdgeList.insert(lbnd, bisector);
        p = Geom.intersect(bisector, rbnd);
        if (p) {
          EventQueue.insert(bisector, p, Geom.distance(p, newSite));
        }
        newSite = Sites.list.shift();
      } else if (!EventQueue.empty()) {
        lbnd = EventQueue.extractMin();
        llbnd = EdgeList.left(lbnd);
        rbnd = EdgeList.right(lbnd);
        rrbnd = EdgeList.right(rbnd);
        bot = EdgeList.leftRegion(lbnd);
        top = EdgeList.rightRegion(rbnd);
        v = lbnd.vertex;
        Geom.endPoint(lbnd.edge, lbnd.side, v);
        Geom.endPoint(rbnd.edge, rbnd.side, v);
        EdgeList.del(lbnd);
        EventQueue.del(rbnd);
        EdgeList.del(rbnd);
        pm = "l";
        if (bot.y > top.y) {
          temp = bot;
          bot = top;
          top = temp;
          pm = "r";
        }
        e = Geom.bisect(bot, top);
        bisector = EdgeList.createHalfEdge(e, pm);
        EdgeList.insert(llbnd, bisector);
        Geom.endPoint(e, d3_voronoi_opposite[pm], v);
        p = Geom.intersect(llbnd, bisector);
        if (p) {
          EventQueue.del(llbnd);
          EventQueue.insert(llbnd, p, Geom.distance(p, bot));
        }
        p = Geom.intersect(bisector, rrbnd);
        if (p) {
          EventQueue.insert(bisector, p, Geom.distance(p, bot));
        }
      } else {
        break;
      }
    }
    for (lbnd = EdgeList.right(EdgeList.leftEnd); lbnd != EdgeList.rightEnd; lbnd = EdgeList.right(lbnd)) {
      callback(lbnd.edge);
    }
  }
  d3.geom.delaunay = function(vertices) {
    var edges = vertices.map(function() {
      return [];
    }), triangles = [];
    d3_voronoi_tessellate(vertices, function(e) {
      edges[e.region.l.index].push(vertices[e.region.r.index]);
    });
    edges.forEach(function(edge, i) {
      var v = vertices[i], cx = v[0], cy = v[1];
      edge.forEach(function(v) {
        v.angle = Math.atan2(v[0] - cx, v[1] - cy);
      });
      edge.sort(function(a, b) {
        return a.angle - b.angle;
      });
      for (var j = 0, m = edge.length - 1; j < m; j++) {
        triangles.push([ v, edge[j], edge[j + 1] ]);
      }
    });
    return triangles;
  };
  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
    var p, i = -1, n = points.length;
    if (arguments.length < 5) {
      if (arguments.length === 3) {
        y2 = y1;
        x2 = x1;
        y1 = x1 = 0;
      } else {
        x1 = y1 = Infinity;
        x2 = y2 = -Infinity;
        while (++i < n) {
          p = points[i];
          if (p.x < x1) x1 = p.x;
          if (p.y < y1) y1 = p.y;
          if (p.x > x2) x2 = p.x;
          if (p.y > y2) y2 = p.y;
        }
      }
    }
    var dx = x2 - x1, dy = y2 - y1;
    if (dx > dy) y2 = y1 + dx; else x2 = x1 + dy;
    function insert(n, p, x1, y1, x2, y2) {
      if (isNaN(p.x) || isNaN(p.y)) return;
      if (n.leaf) {
        var v = n.point;
        if (v) {
          if (Math.abs(v.x - p.x) + Math.abs(v.y - p.y) < .01) {
            insertChild(n, p, x1, y1, x2, y2);
          } else {
            n.point = null;
            insertChild(n, v, x1, y1, x2, y2);
            insertChild(n, p, x1, y1, x2, y2);
          }
        } else {
          n.point = p;
        }
      } else {
        insertChild(n, p, x1, y1, x2, y2);
      }
    }
    function insertChild(n, p, x1, y1, x2, y2) {
      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, right = p.x >= sx, bottom = p.y >= sy, i = (bottom << 1) + right;
      n.leaf = false;
      n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
      if (right) x1 = sx; else x2 = sx;
      if (bottom) y1 = sy; else y2 = sy;
      insert(n, p, x1, y1, x2, y2);
    }
    var root = d3_geom_quadtreeNode();
    root.add = function(p) {
      insert(root, p, x1, y1, x2, y2);
    };
    root.visit = function(f) {
      d3_geom_quadtreeVisit(f, root, x1, y1, x2, y2);
    };
    points.forEach(root.add);
    return root;
  };
  function d3_geom_quadtreeNode() {
    return {
      leaf: true,
      nodes: [],
      point: null
    };
  }
  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
    if (!f(node, x1, y1, x2, y2)) {
      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
    }
  }
  d3.time = {};
  var d3_time = Date, d3_time_daySymbols = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
  function d3_time_utc() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }
  d3_time_utc.prototype = {
    getDate: function() {
      return this._.getUTCDate();
    },
    getDay: function() {
      return this._.getUTCDay();
    },
    getFullYear: function() {
      return this._.getUTCFullYear();
    },
    getHours: function() {
      return this._.getUTCHours();
    },
    getMilliseconds: function() {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function() {
      return this._.getUTCMinutes();
    },
    getMonth: function() {
      return this._.getUTCMonth();
    },
    getSeconds: function() {
      return this._.getUTCSeconds();
    },
    getTime: function() {
      return this._.getTime();
    },
    getTimezoneOffset: function() {
      return 0;
    },
    valueOf: function() {
      return this._.valueOf();
    },
    setDate: function() {
      d3_time_prototype.setUTCDate.apply(this._, arguments);
    },
    setDay: function() {
      d3_time_prototype.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function() {
      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function() {
      d3_time_prototype.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function() {
      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function() {
      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function() {
      d3_time_prototype.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function() {
      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function() {
      d3_time_prototype.setTime.apply(this._, arguments);
    }
  };
  var d3_time_prototype = Date.prototype;
  var d3_time_formatDateTime = "%a %b %e %X %Y", d3_time_formatDate = "%m/%d/%Y", d3_time_formatTime = "%H:%M:%S";
  var d3_time_days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ], d3_time_dayAbbreviations = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], d3_time_months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], d3_time_monthAbbreviations = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  d3.time.format = function(template) {
    var n = template.length;
    function format(date) {
      var string = [], i = -1, j = 0, c, p, f;
      while (++i < n) {
        if (template.charCodeAt(i) === 37) {
          string.push(template.substring(j, i));
          if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
          if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
          string.push(c);
          j = i + 1;
        }
      }
      string.push(template.substring(j, i));
      return string.join("");
    }
    format.parse = function(string) {
      var d = {
        y: 1900,
        m: 0,
        d: 1,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }, i = d3_time_parse(d, template, string, 0);
      if (i != string.length) return null;
      if ("p" in d) d.H = d.H % 12 + d.p * 12;
      var date = new d3_time();
      date.setFullYear(d.y, d.m, d.d);
      date.setHours(d.H, d.M, d.S, d.L);
      return date;
    };
    format.toString = function() {
      return template;
    };
    return format;
  };
  function d3_time_parse(date, template, string, j) {
    var c, p, i = 0, n = template.length, m = string.length;
    while (i < n) {
      if (j >= m) return -1;
      c = template.charCodeAt(i++);
      if (c === 37) {
        p = d3_time_parsers[template.charAt(i++)];
        if (!p || (j = p(date, string, j)) < 0) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function d3_time_formatRe(names) {
    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
  }
  function d3_time_formatLookup(names) {
    var map = new d3_Map(), i = -1, n = names.length;
    while (++i < n) map.set(names[i].toLowerCase(), i);
    return map;
  }
  function d3_time_formatPad(value, fill, width) {
    value += "";
    var length = value.length;
    return length < width ? new Array(width - length + 1).join(fill) + value : value;
  }
  var d3_time_dayRe = d3_time_formatRe(d3_time_days), d3_time_dayAbbrevRe = d3_time_formatRe(d3_time_dayAbbreviations), d3_time_monthRe = d3_time_formatRe(d3_time_months), d3_time_monthLookup = d3_time_formatLookup(d3_time_months), d3_time_monthAbbrevRe = d3_time_formatRe(d3_time_monthAbbreviations), d3_time_monthAbbrevLookup = d3_time_formatLookup(d3_time_monthAbbreviations);
  var d3_time_formatPads = {
    "-": "",
    _: " ",
    "0": "0"
  };
  var d3_time_formats = {
    a: function(d) {
      return d3_time_dayAbbreviations[d.getDay()];
    },
    A: function(d) {
      return d3_time_days[d.getDay()];
    },
    b: function(d) {
      return d3_time_monthAbbreviations[d.getMonth()];
    },
    B: function(d) {
      return d3_time_months[d.getMonth()];
    },
    c: d3.time.format(d3_time_formatDateTime),
    d: function(d, p) {
      return d3_time_formatPad(d.getDate(), p, 2);
    },
    e: function(d, p) {
      return d3_time_formatPad(d.getDate(), p, 2);
    },
    H: function(d, p) {
      return d3_time_formatPad(d.getHours(), p, 2);
    },
    I: function(d, p) {
      return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
    },
    j: function(d, p) {
      return d3_time_formatPad(1 + d3.time.dayOfYear(d), p, 3);
    },
    L: function(d, p) {
      return d3_time_formatPad(d.getMilliseconds(), p, 3);
    },
    m: function(d, p) {
      return d3_time_formatPad(d.getMonth() + 1, p, 2);
    },
    M: function(d, p) {
      return d3_time_formatPad(d.getMinutes(), p, 2);
    },
    p: function(d) {
      return d.getHours() >= 12 ? "PM" : "AM";
    },
    S: function(d, p) {
      return d3_time_formatPad(d.getSeconds(), p, 2);
    },
    U: function(d, p) {
      return d3_time_formatPad(d3.time.sundayOfYear(d), p, 2);
    },
    w: function(d) {
      return d.getDay();
    },
    W: function(d, p) {
      return d3_time_formatPad(d3.time.mondayOfYear(d), p, 2);
    },
    x: d3.time.format(d3_time_formatDate),
    X: d3.time.format(d3_time_formatTime),
    y: function(d, p) {
      return d3_time_formatPad(d.getFullYear() % 100, p, 2);
    },
    Y: function(d, p) {
      return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
    },
    Z: d3_time_zone,
    "%": function() {
      return "%";
    }
  };
  var d3_time_parsers = {
    a: d3_time_parseWeekdayAbbrev,
    A: d3_time_parseWeekday,
    b: d3_time_parseMonthAbbrev,
    B: d3_time_parseMonth,
    c: d3_time_parseLocaleFull,
    d: d3_time_parseDay,
    e: d3_time_parseDay,
    H: d3_time_parseHour24,
    I: d3_time_parseHour24,
    L: d3_time_parseMilliseconds,
    m: d3_time_parseMonthNumber,
    M: d3_time_parseMinutes,
    p: d3_time_parseAmPm,
    S: d3_time_parseSeconds,
    x: d3_time_parseLocaleDate,
    X: d3_time_parseLocaleTime,
    y: d3_time_parseYear,
    Y: d3_time_parseFullYear
  };
  function d3_time_parseWeekdayAbbrev(date, string, i) {
    d3_time_dayAbbrevRe.lastIndex = 0;
    var n = d3_time_dayAbbrevRe.exec(string.substring(i));
    return n ? i += n[0].length : -1;
  }
  function d3_time_parseWeekday(date, string, i) {
    d3_time_dayRe.lastIndex = 0;
    var n = d3_time_dayRe.exec(string.substring(i));
    return n ? i += n[0].length : -1;
  }
  function d3_time_parseMonthAbbrev(date, string, i) {
    d3_time_monthAbbrevRe.lastIndex = 0;
    var n = d3_time_monthAbbrevRe.exec(string.substring(i));
    return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i += n[0].length) : -1;
  }
  function d3_time_parseMonth(date, string, i) {
    d3_time_monthRe.lastIndex = 0;
    var n = d3_time_monthRe.exec(string.substring(i));
    return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i += n[0].length) : -1;
  }
  function d3_time_parseLocaleFull(date, string, i) {
    return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
  }
  function d3_time_parseLocaleDate(date, string, i) {
    return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
  }
  function d3_time_parseLocaleTime(date, string, i) {
    return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
  }
  function d3_time_parseFullYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 4));
    return n ? (date.y = +n[0], i += n[0].length) : -1;
  }
  function d3_time_parseYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.y = d3_time_expandYear(+n[0]), i += n[0].length) : -1;
  }
  function d3_time_expandYear(d) {
    return d + (d > 68 ? 1900 : 2e3);
  }
  function d3_time_parseMonthNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.m = n[0] - 1, i += n[0].length) : -1;
  }
  function d3_time_parseDay(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.d = +n[0], i += n[0].length) : -1;
  }
  function d3_time_parseHour24(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.H = +n[0], i += n[0].length) : -1;
  }
  function d3_time_parseMinutes(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.M = +n[0], i += n[0].length) : -1;
  }
  function d3_time_parseSeconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
    return n ? (date.S = +n[0], i += n[0].length) : -1;
  }
  function d3_time_parseMilliseconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.substring(i, i + 3));
    return n ? (date.L = +n[0], i += n[0].length) : -1;
  }
  var d3_time_numberRe = /^\s*\d+/;
  function d3_time_parseAmPm(date, string, i) {
    var n = d3_time_amPmLookup.get(string.substring(i, i += 2).toLowerCase());
    return n == null ? -1 : (date.p = n, i);
  }
  var d3_time_amPmLookup = d3.map({
    am: 0,
    pm: 1
  });
  function d3_time_zone(d) {
    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = ~~(Math.abs(z) / 60), zm = Math.abs(z) % 60;
    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
  }
  d3.time.format.utc = function(template) {
    var local = d3.time.format(template);
    function format(date) {
      try {
        d3_time = d3_time_utc;
        var utc = new d3_time();
        utc._ = date;
        return local(utc);
      } finally {
        d3_time = Date;
      }
    }
    format.parse = function(string) {
      try {
        d3_time = d3_time_utc;
        var date = local.parse(string);
        return date && date._;
      } finally {
        d3_time = Date;
      }
    };
    format.toString = local.toString;
    return format;
  };
  var d3_time_formatIso = d3.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");
  d3.time.format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
  function d3_time_formatIsoNative(date) {
    return date.toISOString();
  }
  d3_time_formatIsoNative.parse = function(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
  };
  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
  function d3_time_interval(local, step, number) {
    function round(date) {
      var d0 = local(date), d1 = offset(d0, 1);
      return date - d0 < d1 - date ? d0 : d1;
    }
    function ceil(date) {
      step(date = local(new d3_time(date - 1)), 1);
      return date;
    }
    function offset(date, k) {
      step(date = new d3_time(+date), k);
      return date;
    }
    function range(t0, t1, dt) {
      var time = ceil(t0), times = [];
      if (dt > 1) {
        while (time < t1) {
          if (!(number(time) % dt)) times.push(new Date(+time));
          step(time, 1);
        }
      } else {
        while (time < t1) times.push(new Date(+time)), step(time, 1);
      }
      return times;
    }
    function range_utc(t0, t1, dt) {
      try {
        d3_time = d3_time_utc;
        var utc = new d3_time_utc();
        utc._ = t0;
        return range(utc, t1, dt);
      } finally {
        d3_time = Date;
      }
    }
    local.floor = local;
    local.round = round;
    local.ceil = ceil;
    local.offset = offset;
    local.range = range;
    var utc = local.utc = d3_time_interval_utc(local);
    utc.floor = utc;
    utc.round = d3_time_interval_utc(round);
    utc.ceil = d3_time_interval_utc(ceil);
    utc.offset = d3_time_interval_utc(offset);
    utc.range = range_utc;
    return local;
  }
  function d3_time_interval_utc(method) {
    return function(date, k) {
      try {
        d3_time = d3_time_utc;
        var utc = new d3_time_utc();
        utc._ = date;
        return method(utc, k)._;
      } finally {
        d3_time = Date;
      }
    };
  }
  d3.time.second = d3_time_interval(function(date) {
    return new d3_time(Math.floor(date / 1e3) * 1e3);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
  }, function(date) {
    return date.getSeconds();
  });
  d3.time.seconds = d3.time.second.range;
  d3.time.seconds.utc = d3.time.second.utc.range;
  d3.time.minute = d3_time_interval(function(date) {
    return new d3_time(Math.floor(date / 6e4) * 6e4);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
  }, function(date) {
    return date.getMinutes();
  });
  d3.time.minutes = d3.time.minute.range;
  d3.time.minutes.utc = d3.time.minute.utc.range;
  d3.time.hour = d3_time_interval(function(date) {
    var timezone = date.getTimezoneOffset() / 60;
    return new d3_time((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
  }, function(date) {
    return date.getHours();
  });
  d3.time.hours = d3.time.hour.range;
  d3.time.hours.utc = d3.time.hour.utc.range;
  d3.time.day = d3_time_interval(function(date) {
    var day = new d3_time(1970, 0);
    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    return day;
  }, function(date, offset) {
    date.setDate(date.getDate() + offset);
  }, function(date) {
    return date.getDate() - 1;
  });
  d3.time.days = d3.time.day.range;
  d3.time.days.utc = d3.time.day.utc.range;
  d3.time.dayOfYear = function(date) {
    var year = d3.time.year(date);
    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
  };
  d3_time_daySymbols.forEach(function(day, i) {
    day = day.toLowerCase();
    i = 7 - i;
    var interval = d3.time[day] = d3_time_interval(function(date) {
      (date = d3.time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
      return date;
    }, function(date, offset) {
      date.setDate(date.getDate() + Math.floor(offset) * 7);
    }, function(date) {
      var day = d3.time.year(date).getDay();
      return Math.floor((d3.time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
    });
    d3.time[day + "s"] = interval.range;
    d3.time[day + "s"].utc = interval.utc.range;
    d3.time[day + "OfYear"] = function(date) {
      var day = d3.time.year(date).getDay();
      return Math.floor((d3.time.dayOfYear(date) + (day + i) % 7) / 7);
    };
  });
  d3.time.week = d3.time.sunday;
  d3.time.weeks = d3.time.sunday.range;
  d3.time.weeks.utc = d3.time.sunday.utc.range;
  d3.time.weekOfYear = d3.time.sundayOfYear;
  d3.time.month = d3_time_interval(function(date) {
    date = d3.time.day(date);
    date.setDate(1);
    return date;
  }, function(date, offset) {
    date.setMonth(date.getMonth() + offset);
  }, function(date) {
    return date.getMonth();
  });
  d3.time.months = d3.time.month.range;
  d3.time.months.utc = d3.time.month.utc.range;
  d3.time.year = d3_time_interval(function(date) {
    date = d3.time.day(date);
    date.setMonth(0, 1);
    return date;
  }, function(date, offset) {
    date.setFullYear(date.getFullYear() + offset);
  }, function(date) {
    return date.getFullYear();
  });
  d3.time.years = d3.time.year.range;
  d3.time.years.utc = d3.time.year.utc.range;
  function d3_time_scale(linear, methods, format) {
    function scale(x) {
      return linear(x);
    }
    scale.invert = function(x) {
      return d3_time_scaleDate(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
      linear.domain(x);
      return scale;
    };
    scale.nice = function(m) {
      return scale.domain(d3_scale_nice(scale.domain(), function() {
        return m;
      }));
    };
    scale.ticks = function(m, k) {
      var extent = d3_time_scaleExtent(scale.domain());
      if (typeof m !== "function") {
        var span = extent[1] - extent[0], target = span / m, i = d3.bisect(d3_time_scaleSteps, target);
        if (i == d3_time_scaleSteps.length) return methods.year(extent, m);
        if (!i) return linear.ticks(m).map(d3_time_scaleDate);
        if (Math.log(target / d3_time_scaleSteps[i - 1]) < Math.log(d3_time_scaleSteps[i] / target)) --i;
        m = methods[i];
        k = m[1];
        m = m[0].range;
      }
      return m(extent[0], new Date(+extent[1] + 1), k);
    };
    scale.tickFormat = function() {
      return format;
    };
    scale.copy = function() {
      return d3_time_scale(linear.copy(), methods, format);
    };
    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
  }
  function d3_time_scaleExtent(domain) {
    var start = domain[0], stop = domain[domain.length - 1];
    return start < stop ? [ start, stop ] : [ stop, start ];
  }
  function d3_time_scaleDate(t) {
    return new Date(t);
  }
  function d3_time_scaleFormat(formats) {
    return function(date) {
      var i = formats.length - 1, f = formats[i];
      while (!f[1](date)) f = formats[--i];
      return f[0](date);
    };
  }
  function d3_time_scaleSetYear(y) {
    var d = new Date(y, 0, 1);
    d.setFullYear(y);
    return d;
  }
  function d3_time_scaleGetYear(d) {
    var y = d.getFullYear(), d0 = d3_time_scaleSetYear(y), d1 = d3_time_scaleSetYear(y + 1);
    return y + (d - d0) / (d1 - d0);
  }
  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
  var d3_time_scaleLocalMethods = [ [ d3.time.second, 1 ], [ d3.time.second, 5 ], [ d3.time.second, 15 ], [ d3.time.second, 30 ], [ d3.time.minute, 1 ], [ d3.time.minute, 5 ], [ d3.time.minute, 15 ], [ d3.time.minute, 30 ], [ d3.time.hour, 1 ], [ d3.time.hour, 3 ], [ d3.time.hour, 6 ], [ d3.time.hour, 12 ], [ d3.time.day, 1 ], [ d3.time.day, 2 ], [ d3.time.week, 1 ], [ d3.time.month, 1 ], [ d3.time.month, 3 ], [ d3.time.year, 1 ] ];
  var d3_time_scaleLocalFormats = [ [ d3.time.format("%Y"), d3_true ], [ d3.time.format("%B"), function(d) {
    return d.getMonth();
  } ], [ d3.time.format("%b %d"), function(d) {
    return d.getDate() != 1;
  } ], [ d3.time.format("%a %d"), function(d) {
    return d.getDay() && d.getDate() != 1;
  } ], [ d3.time.format("%I %p"), function(d) {
    return d.getHours();
  } ], [ d3.time.format("%I:%M"), function(d) {
    return d.getMinutes();
  } ], [ d3.time.format(":%S"), function(d) {
    return d.getSeconds();
  } ], [ d3.time.format(".%L"), function(d) {
    return d.getMilliseconds();
  } ] ];
  var d3_time_scaleLinear = d3.scale.linear(), d3_time_scaleLocalFormat = d3_time_scaleFormat(d3_time_scaleLocalFormats);
  d3_time_scaleLocalMethods.year = function(extent, m) {
    return d3_time_scaleLinear.domain(extent.map(d3_time_scaleGetYear)).ticks(m).map(d3_time_scaleSetYear);
  };
  d3.time.scale = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
  };
  var d3_time_scaleUTCMethods = d3_time_scaleLocalMethods.map(function(m) {
    return [ m[0].utc, m[1] ];
  });
  var d3_time_scaleUTCFormats = [ [ d3.time.format.utc("%Y"), d3_true ], [ d3.time.format.utc("%B"), function(d) {
    return d.getUTCMonth();
  } ], [ d3.time.format.utc("%b %d"), function(d) {
    return d.getUTCDate() != 1;
  } ], [ d3.time.format.utc("%a %d"), function(d) {
    return d.getUTCDay() && d.getUTCDate() != 1;
  } ], [ d3.time.format.utc("%I %p"), function(d) {
    return d.getUTCHours();
  } ], [ d3.time.format.utc("%I:%M"), function(d) {
    return d.getUTCMinutes();
  } ], [ d3.time.format.utc(":%S"), function(d) {
    return d.getUTCSeconds();
  } ], [ d3.time.format.utc(".%L"), function(d) {
    return d.getUTCMilliseconds();
  } ] ];
  var d3_time_scaleUTCFormat = d3_time_scaleFormat(d3_time_scaleUTCFormats);
  function d3_time_scaleUTCSetYear(y) {
    var d = new Date(Date.UTC(y, 0, 1));
    d.setUTCFullYear(y);
    return d;
  }
  function d3_time_scaleUTCGetYear(d) {
    var y = d.getUTCFullYear(), d0 = d3_time_scaleUTCSetYear(y), d1 = d3_time_scaleUTCSetYear(y + 1);
    return y + (d - d0) / (d1 - d0);
  }
  d3_time_scaleUTCMethods.year = function(extent, m) {
    return d3_time_scaleLinear.domain(extent.map(d3_time_scaleUTCGetYear)).ticks(m).map(d3_time_scaleUTCSetYear);
  };
  d3.time.scale.utc = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleUTCMethods, d3_time_scaleUTCFormat);
  };
  return d3;
}();
//     Backbone.js 1.1.2

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    factory(root, exports, _);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.1.2';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = void 0;
        return this;
      }
      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo) return this;
      var remove = !name && !callback;
      if (!callback && typeof name === 'object') callback = this;
      if (obj) (listeningTo = {})[obj._listenId] = obj;
      for (var id in listeningTo) {
        obj = listeningTo[id];
        obj.off(name, callback, this);
        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
      listeningTo[id] = obj;
      if (!callback && typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true}, options);

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !options.wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = models[i] = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model, options);
      }
      return singular ? models[0] : models;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : _.clone(models);
      var i, l, id, model, attrs, existing, sort;
      var at = options.at;
      var targetModel = this.model;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        attrs = models[i] || {};
        if (attrs instanceof Model) {
          id = model = attrs;
        } else {
          id = attrs[targetModel.prototype.idAttribute || 'id'];
        }

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(id)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge) {
            attrs = attrs === model ? model.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
        modelMap[model.id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || (order && order.length)) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (i = 0, l = toAdd.length; i < l; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (i = 0, l = orderedModels.length; i < l; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0, l = toAdd.length; i < l; i++) {
          (model = toAdd[i]).trigger('add', model, this, options);
        }
        if (sort || (order && order.length)) this.trigger('sort', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) return attrs;
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      if (model.id != null) this._byId[model.id] = model;
      if (!model.collection) model.collection = this;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
    'lastIndexOf', 'isEmpty', 'chain', 'sample'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && noXhrPatch) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  var noXhrPatch =
    typeof window !== 'undefined' && !!window.ActiveXObject &&
      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        router.execute(callback, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = decodeURI(this.location.pathname + this.location.search);
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + '#' + this.fragment);
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot() && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment);
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the hash for matching.
      fragment = fragment.replace(pathStripper, '');

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));

(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a},d=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};!function(a){return"function"==typeof define&&define.amd?define(["underscore","backbone","exports"],a):"object"==typeof exports?a(require("underscore"),require("backbone"),exports):a(_,Backbone,{})}(function(b,e,f){return f=function(f){function g(){this.triggerCancel=a(this.triggerCancel,this),this.triggerSubmit=a(this.triggerSubmit,this),this.triggerView=a(this.triggerView,this),this.clickOutsideElement=a(this.clickOutsideElement,this),this.clickOutside=a(this.clickOutside,this),this.checkKey=a(this.checkKey,this),this.rendererCompleted=a(this.rendererCompleted,this),this.args=Array.prototype.slice.apply(arguments),e.View.prototype.constructor.apply(this,this.args),this.setUIElements()}return c(g,f),g.prototype.prefix="bbm",g.prototype.animate=!0,g.prototype.keyControl=!0,g.prototype.showViewOnRender=!0,g.prototype.render=function(a){var c,d;return c=this.serializeData(),(!a||b.isEmpty(a))&&(a=0),this.$el.addClass(""+this.prefix+"-wrapper"),this.modalEl=e.$("<div />").addClass(""+this.prefix+"-modal"),this.template&&this.modalEl.html(this.buildTemplate(this.template,c)),this.$el.html(this.modalEl),this.viewContainer?(this.viewContainerEl=this.modalEl.find(this.viewContainer),this.viewContainerEl.addClass(""+this.prefix+"-modal__views")):this.viewContainerEl=this.modalEl,e.$(":focus").blur(),(null!=(d=this.views)?d.length:void 0)>0&&this.showViewOnRender&&this.openAt(a),"function"==typeof this.onRender&&this.onRender(),this.delegateModalEvents(),this.$el.fadeIn&&this.animate?(this.modalEl.css({opacity:0}),this.$el.fadeIn({duration:100,complete:this.rendererCompleted})):this.rendererCompleted(),this},g.prototype.rendererCompleted=function(){var a;return this.keyControl&&(e.$("body").on("keyup.bbm",this.checkKey),this.$el.on("mouseup.bbm",this.clickOutsideElement),this.$el.on("click.bbm",this.clickOutside)),this.modalEl.css({opacity:1}).addClass(""+this.prefix+"-modal--open"),"function"==typeof this.onShow&&this.onShow(),null!=(a=this.currentView)&&"function"==typeof a.onShow?a.onShow():void 0},g.prototype.setUIElements=function(){var a;if(this.template=this.getOption("template"),this.views=this.getOption("views"),null!=(a=this.views)&&(a.length=b.size(this.views)),this.viewContainer=this.getOption("viewContainer"),this.animate=this.getOption("animate"),b.isUndefined(this.template)&&b.isUndefined(this.views))throw new Error("No template or views defined for Backbone.Modal");if(this.template&&this.views&&b.isUndefined(this.viewContainer))throw new Error("No viewContainer defined for Backbone.Modal")},g.prototype.getOption=function(a){return a?this.options&&d.call(this.options,a)>=0&&null!=this.options[a]?this.options[a]:this[a]:void 0},g.prototype.serializeData=function(){var a;return a={},this.model&&(a=b.extend(a,this.model.toJSON())),this.collection&&(a=b.extend(a,{items:this.collection.toJSON()})),a},g.prototype.delegateModalEvents=function(){var a,c,d,e,f,g,h;this.active=!0,a=this.getOption("cancelEl"),f=this.getOption("submitEl"),f&&this.$el.on("click",f,this.triggerSubmit),a&&this.$el.on("click",a,this.triggerCancel),h=[];for(c in this.views)b.isString(c)&&"length"!==c?(d=c.match(/^(\S+)\s*(.*)$/),g=d[1],e=d[2],h.push(this.$el.on(g,e,this.views[c],this.triggerView))):h.push(void 0);return h},g.prototype.undelegateModalEvents=function(){var a,c,d,e,f,g,h;this.active=!1,a=this.getOption("cancelEl"),f=this.getOption("submitEl"),f&&this.$el.off("click",f,this.triggerSubmit),a&&this.$el.off("click",a,this.triggerCancel),h=[];for(c in this.views)b.isString(c)&&"length"!==c?(d=c.match(/^(\S+)\s*(.*)$/),g=d[1],e=d[2],h.push(this.$el.off(g,e,this.views[c],this.triggerView))):h.push(void 0);return h},g.prototype.checkKey=function(a){if(this.active)switch(a.keyCode){case 27:return this.triggerCancel(a);case 13:return this.triggerSubmit(a)}},g.prototype.clickOutside=function(){var a;return(null!=(a=this.outsideElement)?a.hasClass(""+this.prefix+"-wrapper"):void 0)&&this.active?this.triggerCancel():void 0},g.prototype.clickOutsideElement=function(a){return this.outsideElement=e.$(a.target)},g.prototype.buildTemplate=function(a,c){var d;return(d="function"==typeof a?a:b.template(e.$(a).html()))(c)},g.prototype.buildView=function(a,c){var d;if(a)return c&&b.isFunction(c)&&(c=c()),b.isFunction(a)?(d=new a(c||this.args[0]),d instanceof e.View?{el:d.render().$el,view:d}:{el:a(c||this.args[0])}):{view:a,el:a.$el}},g.prototype.triggerView=function(a){var c,d,e,f,g,h,i;if(null!=a&&"function"==typeof a.preventDefault&&a.preventDefault(),f=a.data,d=this.buildView(f.view,f.viewOptions),this.currentView&&(this.previousView=this.currentView,!(null!=(i=f.openOptions)?i.skipSubmit:void 0))){if(("function"==typeof(g=this.previousView).beforeSubmit?g.beforeSubmit(a):void 0)===!1)return;"function"==typeof(h=this.previousView).submit&&h.submit()}this.currentView=d.view||d.el,c=0;for(e in this.views)f.view===this.views[e].view&&(this.currentIndex=c),c++;return f.onActive&&(b.isFunction(f.onActive)?f.onActive(this):b.isString(f.onActive)&&this[f.onActive].call(this,f)),this.shouldAnimate?this.animateToView(d.el):(this.shouldAnimate=!0,this.$(this.viewContainerEl).html(d.el))},g.prototype.animateToView=function(a){var b,c,d,f,g,h,i;return f={position:"relative",top:-9999,left:-9999},g=e.$("<tester/>").css(f),g.html(this.$el.clone().css(f)),0!==e.$("tester").length?e.$("tester").replaceWith(g):e.$("body").append(g),b=g.find(this.viewContainer?this.viewContainer:"."+this.prefix+"-modal"),b.removeAttr("style"),d=b.outerHeight(),b.html(a),c=b.outerHeight(),d===c?(this.$(this.viewContainerEl).html(a),"function"==typeof(h=this.currentView).onShow&&h.onShow(),null!=(i=this.previousView)&&"function"==typeof i.destroy?i.destroy():void 0):this.animate?(this.$(this.viewContainerEl).css({opacity:0}),this.$(this.viewContainerEl).animate({height:c},100,function(b){return function(){var c,d;return b.$(b.viewContainerEl).css({opacity:1}).removeAttr("style"),b.$(b.viewContainerEl).html(a),"function"==typeof(c=b.currentView).onShow&&c.onShow(),null!=(d=b.previousView)&&"function"==typeof d.destroy?d.destroy():void 0}}(this))):this.$(this.viewContainerEl).css({height:c}).html(a)},g.prototype.triggerSubmit=function(a){var b,c;return null!=a&&a.preventDefault(),e.$(a.target).is("textarea")||this.beforeSubmit&&this.beforeSubmit(a)===!1||this.currentView&&this.currentView.beforeSubmit&&this.currentView.beforeSubmit(a)===!1?void 0:this.submit||(null!=(b=this.currentView)?b.submit:void 0)||this.getOption("submitEl")?(null!=(c=this.currentView)&&"function"==typeof c.submit&&c.submit(),"function"==typeof this.submit&&this.submit(),this.regionEnabled?this.trigger("modal:destroy"):this.destroy()):this.triggerCancel()},g.prototype.triggerCancel=function(a){return null!=a&&a.preventDefault(),this.beforeCancel&&this.beforeCancel()===!1?void 0:("function"==typeof this.cancel&&this.cancel(),this.regionEnabled?this.trigger("modal:destroy"):this.destroy())},g.prototype.destroy=function(){var a;return e.$("body").off("keyup.bbm",this.checkKey),this.$el.off("mouseup.bbm",this.clickOutsideElement),this.$el.off("click.bbm",this.clickOutside),e.$("tester").remove(),"function"==typeof this.onDestroy&&this.onDestroy(),this.shouldAnimate=!1,this.modalEl.addClass(""+this.prefix+"-modal--destroy"),a=function(a){return function(){var b;return null!=(b=a.currentView)&&"function"==typeof b.remove&&b.remove(),a.remove()}}(this),this.$el.fadeOut&&this.animate?(this.$el.fadeOut({duration:200}),b.delay(function(){return a()},200)):a()},g.prototype.openAt=function(a){var c,d,e,f,g;b.isNumber(a)?c=a:b.isNumber(a._index)&&(c=a._index),e=0;for(f in this.views)if("length"!==f)if(b.isNumber(c))e===c&&(g=this.views[f]),e++;else if(b.isObject(a))for(d in this.views[f])a[d]===this.views[f][d]&&(g=this.views[f]);return g&&(this.currentIndex=b.indexOf(this.views,g),this.triggerView({data:b.extend(g,{openOptions:a})})),this},g.prototype.next=function(a){return null==a&&(a={}),this.currentIndex+1<this.views.length?this.openAt(b.extend(a,{_index:this.currentIndex+1})):void 0},g.prototype.previous=function(a){return null==a&&(a={}),this.currentIndex-1<this.views.length-1?this.openAt(b.extend(a,{_index:this.currentIndex-1})):void 0},g}(e.View),e.Modal=f,e.Modal})}).call(this);
/*! elasticsearch - v6.0.0 - 2015-08-04
 * http://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html
 * Copyright (c) 2015 Elasticsearch BV; Licensed Apache-2.0 */

;(function () {
/* prevent lodash from detecting external amd loaders */var define; 
!function(a){"object"==typeof exports?module.exports=a():"function"==typeof define&&define.amd?define(a):"undefined"!=typeof window?window.elasticsearch=a():"undefined"!=typeof global?global.elasticsearch=a():"undefined"!=typeof self&&(self.elasticsearch=a())}(function(){var a,b,c;return function d(a,b,c){function e(g,h){if(!b[g]){if(!a[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=b[g]={exports:{}};a[g][0].call(j.exports,function(b){var c=a[g][1][b];return e(c?c:b)},j,j.exports,d,a,b,c)}return b[g].exports}for(var f="function"==typeof require&&require,g=0;g<c.length;g++)e(c[g]);return e}({1:[function(b,c,d){var e=b("__browserify_process"),f="undefined"!=typeof self?self:"undefined"!=typeof window?window:{};!function(b){if("object"==typeof d&&"undefined"!=typeof c)c.exports=b();else if("function"==typeof a&&a.amd)a([],b);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof f?e=f:"undefined"!=typeof self&&(e=self),e.Promise=b()}}(function(){var a,b,c;return function d(a,b,c){function e(g,h){if(!b[g]){if(!a[g]){var i="function"==typeof _dereq_&&_dereq_;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=b[g]={exports:{}};a[g][0].call(k.exports,function(b){var c=a[g][1][b];return e(c?c:b)},k,k.exports,d,a,b,c)}return b[g].exports}for(var f="function"==typeof _dereq_&&_dereq_,g=0;g<c.length;g++)e(c[g]);return e}({1:[function(a,b,c){"use strict";b.exports=function(a){function b(a){var b=new c(a),d=b.promise();return b.setHowMany(1),b.setUnwrap(),b.init(),d}var c=a._SomePromiseArray;a.any=function(a){return b(a)},a.prototype.any=function(){return b(this)}}},{}],2:[function(a,b,c){"use strict";function d(){this._isTickUsed=!1,this._lateQueue=new k(16),this._normalQueue=new k(16),this._trampolineEnabled=!0;var a=this;this.drainQueues=function(){a._drainQueues()},this._schedule=j.isStatic?j(this.drainQueues):j}function e(a,b,c){var d=this._getDomain();void 0!==d&&(a=d.bind(a)),this._lateQueue.push(a,b,c),this._queueTick()}function f(a,b,c){var d=this._getDomain();void 0!==d&&(a=d.bind(a)),this._normalQueue.push(a,b,c),this._queueTick()}function g(a){var b=this._getDomain();if(void 0!==b){var c=b.bind(a._settlePromises);this._normalQueue.push(c,a,void 0)}else this._normalQueue._pushOne(a);this._queueTick()}var h;try{throw new Error}catch(i){h=i}var j=a("./schedule.js"),k=a("./queue.js"),l=a("./util.js");d.prototype.disableTrampolineIfNecessary=function(){l.hasDevTools&&(this._trampolineEnabled=!1)},d.prototype.enableTrampoline=function(){this._trampolineEnabled||(this._trampolineEnabled=!0,this._schedule=function(a){setTimeout(a,0)})},d.prototype.haveItemsQueued=function(){return this._normalQueue.length()>0},d.prototype.throwLater=function(a,b){1===arguments.length&&(b=a,a=function(){throw b});var c=this._getDomain();if(void 0!==c&&(a=c.bind(a)),"undefined"!=typeof setTimeout)setTimeout(function(){a(b)},0);else try{this._schedule(function(){a(b)})}catch(d){throw new Error("No async scheduler available\n\n    See http://goo.gl/m3OTXk\n")}},d.prototype._getDomain=function(){};l.hasDevTools?(d.prototype.invokeLater=function(a,b,c){this._trampolineEnabled?e.call(this,a,b,c):setTimeout(function(){a.call(b,c)},100)},d.prototype.invoke=function(a,b,c){this._trampolineEnabled?f.call(this,a,b,c):setTimeout(function(){a.call(b,c)},0)},d.prototype.settlePromises=function(a){this._trampolineEnabled?g.call(this,a):setTimeout(function(){a._settlePromises()},0)}):(d.prototype.invokeLater=e,d.prototype.invoke=f,d.prototype.settlePromises=g),d.prototype.invokeFirst=function(a,b,c){var d=this._getDomain();void 0!==d&&(a=d.bind(a)),this._normalQueue.unshift(a,b,c),this._queueTick()},d.prototype._drainQueue=function(a){for(;a.length()>0;){var b=a.shift();if("function"==typeof b){var c=a.shift(),d=a.shift();b.call(c,d)}else b._settlePromises()}},d.prototype._drainQueues=function(){this._drainQueue(this._normalQueue),this._reset(),this._drainQueue(this._lateQueue)},d.prototype._queueTick=function(){this._isTickUsed||(this._isTickUsed=!0,this._schedule(this.drainQueues))},d.prototype._reset=function(){this._isTickUsed=!1},b.exports=new d,b.exports.firstLineError=h},{"./queue.js":28,"./schedule.js":31,"./util.js":38,events:39}],3:[function(a,b,c){"use strict";b.exports=function(a,b,c){var d=function(a,b){this._reject(b)},e=function(a,b){b.promiseRejectionQueued=!0,b.bindingPromise._then(d,d,null,this,a)},f=function(a,b){this._setBoundTo(a),this._isPending()&&this._resolveCallback(b.target)},g=function(a,b){b.promiseRejectionQueued||this._reject(a)};a.prototype.bind=function(d){var h=c(d),i=new a(b);i._propagateFrom(this,1);var j=this._target();if(h instanceof a){var k={promiseRejectionQueued:!1,promise:i,target:j,bindingPromise:h};j._then(b,e,i._progress,i,k),h._then(f,g,i._progress,i,k)}else i._setBoundTo(d),i._resolveCallback(j);return i},a.prototype._setBoundTo=function(a){void 0!==a?(this._bitField=131072|this._bitField,this._boundTo=a):this._bitField=-131073&this._bitField},a.prototype._isBound=function(){return 131072===(131072&this._bitField)},a.bind=function(d,e){var f=c(d),g=new a(b);return f instanceof a?f._then(function(a){g._setBoundTo(a),g._resolveCallback(e)},g._reject,g._progress,g,null):(g._setBoundTo(d),g._resolveCallback(e)),g}}},{}],4:[function(a,b,c){"use strict";function d(){try{Promise===f&&(Promise=e)}catch(a){}return f}var e;"undefined"!=typeof Promise&&(e=Promise);var f=a("./promise.js")();f.noConflict=d,b.exports=f},{"./promise.js":23}],5:[function(a,b,c){"use strict";var d=Object.create;if(d){var e=d(null),f=d(null);e[" size"]=f[" size"]=0}b.exports=function(b){function c(a,c){var d;if(null!=a&&(d=a[c]),"function"!=typeof d){var e="Object "+h.classString(a)+" has no method '"+h.toString(c)+"'";throw new b.TypeError(e)}return d}function d(a){var b=this.pop(),d=c(a,b);return d.apply(a,this)}function e(a){return a[this]}function f(a){var b=+this;return 0>b&&(b=Math.max(0,b+a.length)),a[b]}{var g,h=a("./util.js"),i=h.canEvaluate;h.isIdentifier}b.prototype.call=function(a){for(var b=arguments.length,c=new Array(b-1),e=1;b>e;++e)c[e-1]=arguments[e];return c.push(a),this._then(d,void 0,void 0,c,void 0)},b.prototype.get=function(a){var b,c="number"==typeof a;if(c)b=f;else if(i){var d=g(a);b=null!==d?d:e}else b=e;return this._then(b,void 0,void 0,a,void 0)}}},{"./util.js":38}],6:[function(a,b,c){"use strict";b.exports=function(b){var c=a("./errors.js"),d=a("./async.js"),e=c.CancellationError;b.prototype._cancel=function(a){if(!this.isCancellable())return this;for(var b,c=this;void 0!==(b=c._cancellationParent)&&b.isCancellable();)c=b;this._unsetCancellable(),c._target()._rejectCallback(a,!1,!0)},b.prototype.cancel=function(a){return this.isCancellable()?(void 0===a&&(a=new e),d.invokeLater(this._cancel,this,a),this):this},b.prototype.cancellable=function(){return this._cancellable()?this:(d.enableTrampoline(),this._setCancellable(),this._cancellationParent=void 0,this)},b.prototype.uncancellable=function(){var a=this.then();return a._unsetCancellable(),a},b.prototype.fork=function(a,b,c){var d=this._then(a,b,c,void 0,void 0);return d._setCancellable(),d._cancellationParent=void 0,d}}},{"./async.js":2,"./errors.js":13}],7:[function(a,b,c){"use strict";b.exports=function(){function b(a){this._parent=a;var c=this._length=1+(void 0===a?0:a._length);v(this,b),c>32&&this.uncycle()}function c(a,b){for(var c=0;c<b.length-1;++c)b[c].push("From previous event:"),b[c]=b[c].join("\n");return c<b.length&&(b[c]=b[c].join("\n")),a+"\n"+b.join("\n")}function d(a){for(var b=0;b<a.length;++b)(0===a[b].length||b+1<a.length&&a[b][0]===a[b+1][0])&&(a.splice(b,1),b--)}function f(a){for(var b=a[0],c=1;c<a.length;++c){for(var d=a[c],e=b.length-1,f=b[e],g=-1,h=d.length-1;h>=0;--h)if(d[h]===f){g=h;break}for(var h=g;h>=0;--h){var i=d[h];if(b[e]!==i)break;b.pop(),e--}b=d}}function g(a){for(var b=[],c=0;c<a.length;++c){var d=a[c],e=p.test(d)||"    (No stack trace)"===d,f=e&&s(d);e&&!f&&(r&&" "!==d.charAt(0)&&(d="    "+d),b.push(d))}return b}function h(a){for(var b=a.stack.replace(/\s+$/g,"").split("\n"),c=0;c<b.length;++c){var d=b[c];if("    (No stack trace)"===d||p.test(d))break}return c>0&&(b=b.slice(c)),b}function i(a){var b;if("function"==typeof a)b="[function "+(a.name||"anonymous")+"]";else{b=a.toString();var c=/\[object [a-zA-Z0-9$_]+\]/;if(c.test(b))try{var d=JSON.stringify(a);b=d}catch(e){}0===b.length&&(b="(empty array)")}return"(<"+j(b)+">, no stack trace)"}function j(a){var b=41;return a.length<b?a:a.substr(0,b-3)+"..."}function k(a){var b=a.match(t);return b?{fileName:b[1],line:parseInt(b[2],10)}:void 0}var l,m=a("./async.js"),n=a("./util.js"),o=/[\\\/]bluebird[\\\/]js[\\\/](main|debug|zalgo|instrumented)/,p=null,q=null,r=!1;n.inherits(b,Error),b.prototype.uncycle=function(){var a=this._length;if(!(2>a)){for(var b=[],c={},d=0,e=this;void 0!==e;++d)b.push(e),e=e._parent;a=this._length=d;for(var d=a-1;d>=0;--d){var f=b[d].stack;void 0===c[f]&&(c[f]=d)}for(var d=0;a>d;++d){var g=b[d].stack,h=c[g];if(void 0!==h&&h!==d){h>0&&(b[h-1]._parent=void 0,b[h-1]._length=1),b[d]._parent=void 0,b[d]._length=1;var i=d>0?b[d-1]:this;a-1>h?(i._parent=b[h+1],i._parent.uncycle(),i._length=i._parent._length+1):(i._parent=void 0,i._length=1);for(var j=i._length+1,k=d-2;k>=0;--k)b[k]._length=j,j++;return}}}},b.prototype.parent=function(){return this._parent},b.prototype.hasParent=function(){return void 0!==this._parent},b.prototype.attachExtraTrace=function(a){if(!a.__stackCleaned__){this.uncycle();for(var e=b.parseStackAndMessage(a),h=e.message,i=[e.stack],j=this;void 0!==j;)i.push(g(j.stack.split("\n"))),j=j._parent;f(i),d(i),n.notEnumerableProp(a,"stack",c(h,i)),n.notEnumerableProp(a,"__stackCleaned__",!0)}},b.parseStackAndMessage=function(a){var b=a.stack,c=a.toString();return b="string"==typeof b&&b.length>0?h(a):["    (No stack trace)"],{message:c,stack:g(b)}},b.formatAndLogError=function(a,b){if("undefined"!=typeof console){var c;if("object"==typeof a||"function"==typeof a){var d=a.stack;c=b+q(d,a)}else c=b+String(a);"function"==typeof l?l(c):("function"==typeof console.log||"object"==typeof console.log)&&console.log(c)}},b.unhandledRejection=function(a){b.formatAndLogError(a,"^--- With additional stack trace: ")},b.isSupported=function(){return"function"==typeof v},b.fireRejectionEvent=function(a,c,d,e){var f=!1;try{"function"==typeof c&&(f=!0,"rejectionHandled"===a?c(e):c(d,e))}catch(g){m.throwLater(g)}var h=!1;try{h=w(a,d,e)}catch(g){h=!0,m.throwLater(g)}var i=!1;if(u)try{i=u(a.toLowerCase(),{reason:d,promise:e})}catch(g){i=!0,m.throwLater(g)}h||f||i||"unhandledRejection"!==a||b.formatAndLogError(d,"Unhandled rejection ")};var s=function(){return!1},t=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;b.setBounds=function(a,c){if(b.isSupported()){for(var d,e,f=a.stack.split("\n"),g=c.stack.split("\n"),h=-1,i=-1,j=0;j<f.length;++j){var l=k(f[j]);if(l){d=l.fileName,h=l.line;break}}for(var j=0;j<g.length;++j){var l=k(g[j]);if(l){e=l.fileName,i=l.line;break}}0>h||0>i||!d||!e||d!==e||h>=i||(s=function(a){if(o.test(a))return!0;var b=k(a);return b&&b.fileName===d&&h<=b.line&&b.line<=i?!0:!1})}};var u,v=function(){var a=/^\s*at\s*/,b=function(a,b){return"string"==typeof a?a:void 0!==b.name&&void 0!==b.message?b.toString():i(b)};if("number"==typeof Error.stackTraceLimit&&"function"==typeof Error.captureStackTrace){Error.stackTraceLimit=Error.stackTraceLimit+6,p=a,q=b;var c=Error.captureStackTrace;return s=function(a){return o.test(a)},function(a,b){Error.stackTraceLimit=Error.stackTraceLimit+6,c(a,b),Error.stackTraceLimit=Error.stackTraceLimit-6}}var d=new Error;if("string"==typeof d.stack&&d.stack.split("\n")[0].indexOf("stackDetection@")>=0)return p=/@/,q=b,r=!0,function(a){a.stack=(new Error).stack};var e;try{throw new Error}catch(f){e="stack"in f}return"stack"in d||!e?(q=function(a,b){return"string"==typeof a?a:"object"!=typeof b&&"function"!=typeof b||void 0===b.name||void 0===b.message?i(b):b.toString()},null):(p=a,q=b,function(a){Error.stackTraceLimit=Error.stackTraceLimit+6;try{throw new Error}catch(b){a.stack=b.stack}Error.stackTraceLimit=Error.stackTraceLimit-6})}([]),w=function(){if(n.isNode)return function(a,b,c){return"rejectionHandled"===a?e.emit(a,c):e.emit(a,b,c)};var a=!1,b=!0;try{var c=new self.CustomEvent("test");a=c instanceof CustomEvent}catch(d){}if(!a)try{var f=document.createEvent("CustomEvent");f.initCustomEvent("testingtheevent",!1,!0,{}),self.dispatchEvent(f)}catch(d){b=!1}b&&(u=function(b,c){var d;return a?d=new self.CustomEvent(b,{detail:c,bubbles:!1,cancelable:!0}):self.dispatchEvent&&(d=document.createEvent("CustomEvent"),d.initCustomEvent(b,!1,!0,c)),d?!self.dispatchEvent(d):!1});var g={};return g.unhandledRejection="onunhandledRejection".toLowerCase(),g.rejectionHandled="onrejectionHandled".toLowerCase(),function(a,b,c){var d=g[a],e=self[d];return e?("rejectionHandled"===a?e.call(self,c):e.call(self,b,c),!0):!1}}();return"undefined"!=typeof console&&"undefined"!=typeof console.warn&&(l=function(a){console.warn(a)},n.isNode&&e.stderr.isTTY?l=function(a){e.stderr.write("[31m"+a+"[39m\n")}:n.isNode||"string"!=typeof(new Error).stack||(l=function(a){console.warn("%c"+a,"color: red")})),b}},{"./async.js":2,"./util.js":38}],8:[function(a,b,c){"use strict";b.exports=function(b){function c(a,b,c){this._instances=a,this._callback=b,this._promise=c}function d(a,b){var c={},d=g(a).call(c,b);if(d===h)return d;var e=i(c);return e.length?(h.e=new j("Catch filter must inherit from Error or be a simple predicate function\n\n    See http://goo.gl/o84o68\n"),h):d}var e=a("./util.js"),f=a("./errors.js"),g=e.tryCatch,h=e.errorObj,i=a("./es5.js").keys,j=f.TypeError;return c.prototype.doFilter=function(a){for(var c=this._callback,e=this._promise,f=e._boundTo,i=0,j=this._instances.length;j>i;++i){var k=this._instances[i],l=k===Error||null!=k&&k.prototype instanceof Error;if(l&&a instanceof k){var m=g(c).call(f,a);return m===h?(b.e=m.e,b):m}if("function"==typeof k&&!l){var n=d(k,a);if(n===h){a=h.e;break}if(n){var m=g(c).call(f,a);return m===h?(b.e=m.e,b):m}}}return b.e=a,b},c}},{"./errors.js":13,"./es5.js":14,"./util.js":38}],9:[function(a,b,c){"use strict";b.exports=function(a,b,c){function d(){this._trace=new b(f())}function e(){return c()?new d:void 0}function f(){var a=g.length-1;return a>=0?g[a]:void 0}var g=[];return d.prototype._pushContext=function(){c()&&void 0!==this._trace&&g.push(this._trace)},d.prototype._popContext=function(){c()&&void 0!==this._trace&&g.pop()},a.prototype._peekContext=f,a.prototype._pushContext=d.prototype._pushContext,a.prototype._popContext=d.prototype._popContext,e}},{}],10:[function(a,b,c){"use strict";b.exports=function(b,c){var d,f,g=a("./async.js"),h=a("./errors.js").Warning,i=a("./util.js"),j=i.canAttachTrace,k=!1||i.isNode&&(!!e.env.BLUEBIRD_DEBUG||"development"===e.env.NODE_ENV);return k&&g.disableTrampolineIfNecessary(),b.prototype._ensurePossibleRejectionHandled=function(){this._setRejectionIsUnhandled(),g.invokeLater(this._notifyUnhandledRejection,this,void 0)},b.prototype._notifyUnhandledRejectionIsHandled=function(){c.fireRejectionEvent("rejectionHandled",d,void 0,this)},b.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var a=this._getCarriedStackTrace()||this._settledValue;this._setUnhandledRejectionIsNotified(),c.fireRejectionEvent("unhandledRejection",f,a,this)}},b.prototype._setUnhandledRejectionIsNotified=function(){this._bitField=524288|this._bitField},b.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField=-524289&this._bitField},b.prototype._isUnhandledRejectionNotified=function(){return(524288&this._bitField)>0},b.prototype._setRejectionIsUnhandled=function(){this._bitField=2097152|this._bitField},b.prototype._unsetRejectionIsUnhandled=function(){this._bitField=-2097153&this._bitField,this._isUnhandledRejectionNotified()&&(this._unsetUnhandledRejectionIsNotified(),this._notifyUnhandledRejectionIsHandled())},b.prototype._isRejectionUnhandled=function(){return(2097152&this._bitField)>0},b.prototype._setCarriedStackTrace=function(a){this._bitField=1048576|this._bitField,this._fulfillmentHandler0=a},b.prototype._isCarryingStackTrace=function(){return(1048576&this._bitField)>0},b.prototype._getCarriedStackTrace=function(){return this._isCarryingStackTrace()?this._fulfillmentHandler0:void 0},b.prototype._captureStackTrace=function(){return k&&(this._trace=new c(this._peekContext())),this},b.prototype._attachExtraTrace=function(a,b){if(k&&j(a)){var d=this._trace;if(void 0!==d&&b&&(d=d._parent),void 0!==d)d.attachExtraTrace(a);else if(!a.__stackCleaned__){var e=c.parseStackAndMessage(a);i.notEnumerableProp(a,"stack",e.message+"\n"+e.stack.join("\n")),i.notEnumerableProp(a,"__stackCleaned__",!0)}}},b.prototype._warn=function(a){var b=new h(a),d=this._peekContext();if(d)d.attachExtraTrace(b);else{var e=c.parseStackAndMessage(b);b.stack=e.message+"\n"+e.stack.join("\n")}c.formatAndLogError(b,"")},b.onPossiblyUnhandledRejection=function(a){f="function"==typeof a?a:void 0},b.onUnhandledRejectionHandled=function(a){d="function"==typeof a?a:void 0},b.longStackTraces=function(){if(g.haveItemsQueued()&&k===!1)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/DT1qyG\n");k=c.isSupported(),k&&g.disableTrampolineIfNecessary()},b.hasLongStackTraces=function(){return k&&c.isSupported()},c.isSupported()||(b.longStackTraces=function(){},k=!1),function(){return k}}},{"./async.js":2,"./errors.js":13,"./util.js":38}],11:[function(a,b,c){"use strict";var d=a("./util.js"),e=d.isPrimitive,f=d.wrapsPrimitiveReceiver;b.exports=function(a){var b=function(){return this},c=function(){throw this},d=function(){},g=function(){throw void 0},h=function(a,b){return 1===b?function(){throw a}:2===b?function(){return a}:void 0};a.prototype["return"]=a.prototype.thenReturn=function(a){return void 0===a?this.then(d):f&&e(a)?this._then(h(a,2),void 0,void 0,void 0,void 0):this._then(b,void 0,void 0,a,void 0)},a.prototype["throw"]=a.prototype.thenThrow=function(a){return void 0===a?this.then(g):f&&e(a)?this._then(h(a,1),void 0,void 0,void 0,void 0):this._then(c,void 0,void 0,a,void 0)}}},{"./util.js":38}],12:[function(a,b,c){"use strict";b.exports=function(a,b){var c=a.reduce;a.prototype.each=function(a){return c(this,a,null,b)},a.each=function(a,d){return c(a,d,null,b)}}},{}],13:[function(a,b,c){"use strict";function d(a,b){function c(d){return this instanceof c?(l(this,"message","string"==typeof d?d:b),l(this,"name",a),void(Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):Error.call(this))):new c(d)}return k(c,Error),c}function e(a){return this instanceof e?(l(this,"name","OperationalError"),l(this,"message",a),this.cause=a,this.isOperational=!0,void(a instanceof Error?(l(this,"message",a.message),l(this,"stack",a.stack)):Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor))):new e(a)}var f,g,h=a("./es5.js"),i=h.freeze,j=a("./util.js"),k=j.inherits,l=j.notEnumerableProp,m=d("Warning","warning"),n=d("CancellationError","cancellation error"),o=d("TimeoutError","timeout error"),p=d("AggregateError","aggregate error");try{f=TypeError,g=RangeError}catch(q){f=d("TypeError","type error"),g=d("RangeError","range error")}for(var r="join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "),s=0;s<r.length;++s)"function"==typeof Array.prototype[r[s]]&&(p.prototype[r[s]]=Array.prototype[r[s]]);h.defineProperty(p.prototype,"length",{value:0,configurable:!1,writable:!0,enumerable:!0}),p.prototype.isOperational=!0;var t=0;p.prototype.toString=function(){var a=Array(4*t+1).join(" "),b="\n"+a+"AggregateError of:\n";t++,a=Array(4*t+1).join(" ");for(var c=0;c<this.length;++c){for(var d=this[c]===this?"[Circular AggregateError]":this[c]+"",e=d.split("\n"),f=0;f<e.length;++f)e[f]=a+e[f];d=e.join("\n"),b+=d+"\n"}return t--,b},k(e,Error);var u=Error.__BluebirdErrorTypes__;u||(u=i({CancellationError:n,TimeoutError:o,OperationalError:e,RejectionError:e,AggregateError:p}),l(Error,"__BluebirdErrorTypes__",u)),b.exports={Error:Error,TypeError:f,RangeError:g,CancellationError:u.CancellationError,OperationalError:u.OperationalError,TimeoutError:u.TimeoutError,AggregateError:u.AggregateError,Warning:m}},{"./es5.js":14,"./util.js":38}],14:[function(a,b,c){var d=function(){"use strict";return void 0===this}();if(d)b.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,getDescriptor:Object.getOwnPropertyDescriptor,keys:Object.keys,names:Object.getOwnPropertyNames,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:d,propertyIsWritable:function(a,b){var c=Object.getOwnPropertyDescriptor(a,b);return!(c&&!c.writable&&!c.set)}};else{var e={}.hasOwnProperty,f={}.toString,g={}.constructor.prototype,h=function(a){var b=[];for(var c in a)e.call(a,c)&&b.push(c);return b},i=function(a,b){return{value:a[b]}},j=function(a,b,c){return a[b]=c.value,a},k=function(a){return a},l=function(a){try{return Object(a).constructor.prototype}catch(b){return g}},m=function(a){try{return"[object Array]"===f.call(a)}catch(b){return!1}};b.exports={isArray:m,keys:h,names:h,defineProperty:j,getDescriptor:i,freeze:k,getPrototypeOf:l,isES5:d,propertyIsWritable:function(){return!0}}}},{}],15:[function(a,b,c){"use strict";b.exports=function(a,b){var c=a.map;a.prototype.filter=function(a,d){return c(this,a,d,b)},a.filter=function(a,d,e){return c(a,d,e,b)}}},{}],16:[function(a,b,c){"use strict";b.exports=function(b,c,d){function e(){return this}function f(){throw this}function g(a){return function(){return a}}function h(a){return function(){throw a}}function i(a,b,c){var d;return d=m&&n(b)?c?g(b):h(b):c?e:f,a._then(d,o,void 0,b,void 0)}function j(a){var e=this.promise,f=this.handler,g=e._isBound()?f.call(e._boundTo):f();if(void 0!==g){var h=d(g,e);if(h instanceof b)return h=h._target(),i(h,a,e.isFulfilled())}return e.isRejected()?(c.e=a,c):a}function k(a){var c=this.promise,e=this.handler,f=c._isBound()?e.call(c._boundTo,a):e(a);if(void 0!==f){var g=d(f,c);if(g instanceof b)return g=g._target(),i(g,a,!0)}return a}var l=a("./util.js"),m=l.wrapsPrimitiveReceiver,n=l.isPrimitive,o=l.thrower;b.prototype._passThroughHandler=function(a,b){if("function"!=typeof a)return this.then();var c={promise:this,handler:a};return this._then(b?j:k,b?j:void 0,void 0,c,void 0)},b.prototype.lastly=b.prototype["finally"]=function(a){return this._passThroughHandler(a,!0)},b.prototype.tap=function(a){return this._passThroughHandler(a,!1)}}},{"./util.js":38}],17:[function(a,b,c){"use strict";b.exports=function(b,c,d,e){function f(a,c,d){for(var f=0;f<c.length;++f){d._pushContext();var g=l(c[f])(a);if(d._popContext(),g===k){d._pushContext();var h=b.reject(k.e);return d._popContext(),h}var i=e(g,d);if(i instanceof b)return i}return null}function g(a,c,e,f){var g=this._promise=new b(d);g._captureStackTrace(),this._stack=f,this._generatorFunction=a,this._receiver=c,this._generator=void 0,this._yieldHandlers="function"==typeof e?[e].concat(m):m}var h=a("./errors.js"),i=h.TypeError,j=a("./util.js"),k=j.errorObj,l=j.tryCatch,m=[];g.prototype.promise=function(){return this._promise},g.prototype._run=function(){this._generator=this._generatorFunction.call(this._receiver),this._receiver=this._generatorFunction=void 0,this._next(void 0)},g.prototype._continue=function(a){if(a===k)return this._promise._rejectCallback(a.e,!1,!0);var c=a.value;if(a.done===!0)this._promise._resolveCallback(c);else{var d=e(c,this._promise);if(!(d instanceof b)&&(d=f(d,this._yieldHandlers,this._promise),null===d))return void this._throw(new i("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/4Y4pDk\n\n".replace("%s",c)+"From coroutine:\n"+this._stack.split("\n").slice(1,-7).join("\n")));d._then(this._next,this._throw,void 0,this,null)}},g.prototype._throw=function(a){this._promise._attachExtraTrace(a),this._promise._pushContext();var b=l(this._generator["throw"]).call(this._generator,a);this._promise._popContext(),this._continue(b)},g.prototype._next=function(a){this._promise._pushContext();var b=l(this._generator.next).call(this._generator,a);this._promise._popContext(),this._continue(b)},b.coroutine=function(a,b){if("function"!=typeof a)throw new i("generatorFunction must be a function\n\n    See http://goo.gl/6Vqhm0\n");var c=Object(b).yieldHandler,d=g,e=(new Error).stack;return function(){var b=a.apply(this,arguments),f=new d(void 0,void 0,c,e);return f._generator=b,f._next(void 0),f.promise()}},b.coroutine.addYieldHandler=function(a){if("function"!=typeof a)throw new i("fn must be a function\n\n    See http://goo.gl/916lJJ\n");m.push(a)},b.spawn=function(a){if("function"!=typeof a)return c("generatorFunction must be a function\n\n    See http://goo.gl/6Vqhm0\n");var d=new g(a,this),e=d.promise();return d._run(b.spawn),e}}},{"./errors.js":13,"./util.js":38}],18:[function(a,b,c){"use strict";b.exports=function(b,c,d,e){{var f=a("./util.js");f.canEvaluate,f.tryCatch,f.errorObj}b.join=function(){var a,b=arguments.length-1;if(b>0&&"function"==typeof arguments[b]){a=arguments[b];var d}for(var e=arguments.length,f=new Array(e),g=0;e>g;++g)f[g]=arguments[g];a&&f.pop();var d=new c(f).promise();return void 0!==a?d.spread(a):d}}},{"./util.js":38}],19:[function(a,b,c){"use strict";b.exports=function(b,c,d,e,f){function g(a,b,c,d){this.constructor$(a),this._promise._captureStackTrace(),this._callback=b,this._preservedValues=d===f?new Array(this.length()):null,this._limit=c,this._inFlight=0,this._queue=c>=1?[]:o,j.invoke(h,this,void 0)}function h(){this._init$(void 0,-2)}function i(a,b,c,d){var e="object"==typeof c&&null!==c?c.concurrency:0;return e="number"==typeof e&&isFinite(e)&&e>=1?e:0,new g(a,b,e,d)}var j=a("./async.js"),k=a("./util.js"),l=k.tryCatch,m=k.errorObj,n={},o=[];k.inherits(g,c),g.prototype._init=function(){},g.prototype._promiseFulfilled=function(a,c){var d=this._values,f=this.length(),g=this._preservedValues,h=this._limit;if(d[c]===n){if(d[c]=a,h>=1&&(this._inFlight--,this._drainQueue(),this._isResolved()))return}else{if(h>=1&&this._inFlight>=h)return d[c]=a,void this._queue.push(c);null!==g&&(g[c]=a);var i=this._callback,j=this._promise._boundTo;this._promise._pushContext();var k=l(i).call(j,a,c,f);if(this._promise._popContext(),k===m)return this._reject(k.e);var o=e(k,this._promise);if(o instanceof b){if(o=o._target(),o._isPending())return h>=1&&this._inFlight++,d[c]=n,o._proxyPromiseArray(this,c);if(!o._isFulfilled())return this._reject(o._reason());k=o._value()}d[c]=k}var p=++this._totalResolved;p>=f&&(null!==g?this._filter(d,g):this._resolve(d))},g.prototype._drainQueue=function(){for(var a=this._queue,b=this._limit,c=this._values;a.length>0&&this._inFlight<b;){if(this._isResolved())return;var d=a.pop();this._promiseFulfilled(c[d],d)}},g.prototype._filter=function(a,b){for(var c=b.length,d=new Array(c),e=0,f=0;c>f;++f)a[f]&&(d[e++]=b[f]);d.length=e,this._resolve(d)},g.prototype.preservedValues=function(){return this._preservedValues},b.prototype.map=function(a,b){return"function"!=typeof a?d("fn must be a function\n\n    See http://goo.gl/916lJJ\n"):i(this,a,b,null).promise()},b.map=function(a,b,c,e){return"function"!=typeof b?d("fn must be a function\n\n    See http://goo.gl/916lJJ\n"):i(a,b,c,e).promise()}}},{"./async.js":2,"./util.js":38}],20:[function(a,b,c){"use strict";b.exports=function(b,c,d,e){var f=a("./util.js"),g=f.tryCatch;b.method=function(a){if("function"!=typeof a)throw new b.TypeError("fn must be a function\n\n    See http://goo.gl/916lJJ\n");return function(){var d=new b(c);d._captureStackTrace(),d._pushContext();var e=g(a).apply(this,arguments);return d._popContext(),d._resolveFromSyncValue(e),d}},b.attempt=b["try"]=function(a,d,h){if("function"!=typeof a)return e("fn must be a function\n\n    See http://goo.gl/916lJJ\n");var i=new b(c);i._captureStackTrace(),i._pushContext();var j=f.isArray(d)?g(a).apply(h,d):g(a).call(h,d);return i._popContext(),i._resolveFromSyncValue(j),i},b.prototype._resolveFromSyncValue=function(a){a===f.errorObj?this._rejectCallback(a.e,!1,!0):this._resolveCallback(a,!0)}}},{"./util.js":38}],21:[function(a,b,c){"use strict";b.exports=function(b){function c(a,b){var c=this;if(!f.isArray(a))return d.call(c,a,b);var e=h(b).apply(c._boundTo,[null].concat(a));e===i&&g.throwLater(e.e)}function d(a,b){var c=this,d=c._boundTo,e=void 0===a?h(b).call(d,null):h(b).call(d,null,a);e===i&&g.throwLater(e.e)}function e(a,b){var c=this;if(!a){var d=c._target(),e=d._getCarriedStackTrace();e.cause=a,a=e}var f=h(b).call(c._boundTo,a);f===i&&g.throwLater(f.e)}var f=a("./util.js"),g=a("./async.js"),h=f.tryCatch,i=f.errorObj;b.prototype.asCallback=b.prototype.nodeify=function(a,b){if("function"==typeof a){var f=d;void 0!==b&&Object(b).spread&&(f=c),this._then(f,e,void 0,this,a)}return this}}},{"./async.js":2,"./util.js":38}],22:[function(a,b,c){"use strict";b.exports=function(b,c){var d=a("./util.js"),e=a("./async.js"),f=d.tryCatch,g=d.errorObj;b.prototype.progressed=function(a){return this._then(void 0,void 0,a,void 0,void 0)},b.prototype._progress=function(a){this._isFollowingOrFulfilledOrRejected()||this._target()._progressUnchecked(a)},b.prototype._progressHandlerAt=function(a){return 0===a?this._progressHandler0:this[(a<<2)+a-5+2]},b.prototype._doProgressWith=function(a){var c=a.value,e=a.handler,h=a.promise,i=a.receiver,j=f(e).call(i,c);if(j===g){if(null!=j.e&&"StopProgressPropagation"!==j.e.name){var k=d.canAttachTrace(j.e)?j.e:new Error(d.toString(j.e));h._attachExtraTrace(k),h._progress(j.e)}}else j instanceof b?j._then(h._progress,null,null,h,void 0):h._progress(j)},b.prototype._progressUnchecked=function(a){for(var d=this._length(),f=this._progress,g=0;d>g;g++){var h=this._progressHandlerAt(g),i=this._promiseAt(g);if(i instanceof b)"function"==typeof h?e.invoke(this._doProgressWith,this,{handler:h,promise:i,receiver:this._receiverAt(g),value:a}):e.invoke(f,i,a);else{var j=this._receiverAt(g);"function"==typeof h?h.call(j,a,i):j instanceof c&&!j._isResolved()&&j._promiseProgressed(a,i)}}}}},{"./async.js":2,"./util.js":38}],23:[function(a,b,c){"use strict";b.exports=function(){function b(a){if("function"!=typeof a)throw new j("the promise constructor requires a resolver function\n\n    See http://goo.gl/EC22Yn\n");if(this.constructor!==b)throw new j("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/KsIlge\n");this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._progressHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,this._settledValue=void 0,a!==k&&this._resolveFromResolver(a)}function c(a){var c=new b(k);c._fulfillmentHandler0=a,c._rejectionHandler0=a,c._progressHandler0=a,c._promise0=a,c._receiver0=a,c._settledValue=a}var d=function(){return new j("circular promise resolution chain\n\n    See http://goo.gl/LhFpo0\n")},e=function(){return new b.PromiseInspection(this._target())},f=function(a){return b.reject(new j(a))},g=a("./util.js"),h=a("./async.js"),i=a("./errors.js"),j=b.TypeError=i.TypeError;b.RangeError=i.RangeError,b.CancellationError=i.CancellationError,b.TimeoutError=i.TimeoutError,b.OperationalError=i.OperationalError,b.RejectionError=i.OperationalError,b.AggregateError=i.AggregateError;var k=function(){},l={},m={e:null},n=a("./thenables.js")(b,k),o=a("./promise_array.js")(b,k,n,f),p=a("./captured_trace.js")(),q=a("./debuggability.js")(b,p),r=a("./context.js")(b,p,q),s=a("./catch_filter.js")(m),t=a("./promise_resolver.js"),u=t._nodebackForPromise,v=g.errorObj,w=g.tryCatch;return b.prototype.toString=function(){return"[object Promise]"},b.prototype.caught=b.prototype["catch"]=function(a){var c=arguments.length;if(c>1){var d,e=new Array(c-1),f=0;for(d=0;c-1>d;++d){var g=arguments[d];if("function"!=typeof g)return b.reject(new j("Catch filter must inherit from Error or be a simple predicate function\n\n    See http://goo.gl/o84o68\n"));

e[f++]=g}e.length=f,a=arguments[d];var h=new s(e,a,this);return this._then(void 0,h.doFilter,void 0,h,void 0)}return this._then(void 0,a,void 0,void 0,void 0)},b.prototype.reflect=function(){return this._then(e,e,void 0,this,void 0)},b.prototype.then=function(a,b,c){if(q()&&arguments.length>0&&"function"!=typeof a&&"function"!=typeof b){var d=".then() only accepts functions but was passed: "+g.classString(a);arguments.length>1&&(d+=", "+g.classString(b)),this._warn(d)}return this._then(a,b,c,void 0,void 0)},b.prototype.done=function(a,b,c){var d=this._then(a,b,c,void 0,void 0);d._setIsFinal()},b.prototype.spread=function(a,b){return this.all()._then(a,b,void 0,l,void 0)},b.prototype.isCancellable=function(){return!this.isResolved()&&this._cancellable()},b.prototype.toJSON=function(){var a={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0};return this.isFulfilled()?(a.fulfillmentValue=this.value(),a.isFulfilled=!0):this.isRejected()&&(a.rejectionReason=this.reason(),a.isRejected=!0),a},b.prototype.all=function(){return new o(this).promise()},b.prototype.error=function(a){return this.caught(g.originatesFromRejection,a)},b.is=function(a){return a instanceof b},b.fromNode=function(a){var c=new b(k),d=w(a)(u(c));return d===v&&c._rejectCallback(d.e,!0,!0),c},b.all=function(a){return new o(a).promise()},b.defer=b.pending=function(){var a=new b(k);return new t(a)},b.cast=function(a){var c=n(a);if(!(c instanceof b)){var d=c;c=new b(k),c._fulfillUnchecked(d)}return c},b.resolve=b.fulfilled=b.cast,b.reject=b.rejected=function(a){var c=new b(k);return c._captureStackTrace(),c._rejectCallback(a,!0),c},b.setScheduler=function(a){if("function"!=typeof a)throw new j("fn must be a function\n\n    See http://goo.gl/916lJJ\n");var b=h._schedule;return h._schedule=a,b},b.prototype._then=function(a,c,d,e,f){var g=void 0!==f,i=g?f:new b(k);g||(i._propagateFrom(this,5),i._captureStackTrace());var j=this._target();j!==this&&(void 0===e&&(e=this._boundTo),g||i._setIsMigrated());var l=j._addCallbacks(a,c,d,i,e);return j._isResolved()&&!j._isSettlePromisesQueued()&&h.invoke(j._settlePromiseAtPostResolution,j,l),i},b.prototype._settlePromiseAtPostResolution=function(a){this._isRejectionUnhandled()&&this._unsetRejectionIsUnhandled(),this._settlePromiseAt(a)},b.prototype._length=function(){return 131071&this._bitField},b.prototype._isFollowingOrFulfilledOrRejected=function(){return(939524096&this._bitField)>0},b.prototype._isFollowing=function(){return 536870912===(536870912&this._bitField)},b.prototype._setLength=function(a){this._bitField=-131072&this._bitField|131071&a},b.prototype._setFulfilled=function(){this._bitField=268435456|this._bitField},b.prototype._setRejected=function(){this._bitField=134217728|this._bitField},b.prototype._setFollowing=function(){this._bitField=536870912|this._bitField},b.prototype._setIsFinal=function(){this._bitField=33554432|this._bitField},b.prototype._isFinal=function(){return(33554432&this._bitField)>0},b.prototype._cancellable=function(){return(67108864&this._bitField)>0},b.prototype._setCancellable=function(){this._bitField=67108864|this._bitField},b.prototype._unsetCancellable=function(){this._bitField=-67108865&this._bitField},b.prototype._setIsMigrated=function(){this._bitField=4194304|this._bitField},b.prototype._unsetIsMigrated=function(){this._bitField=-4194305&this._bitField},b.prototype._isMigrated=function(){return(4194304&this._bitField)>0},b.prototype._receiverAt=function(a){var b=0===a?this._receiver0:this[5*a-5+4];return void 0===b&&this._isBound()?this._boundTo:b},b.prototype._promiseAt=function(a){return 0===a?this._promise0:this[5*a-5+3]},b.prototype._fulfillmentHandlerAt=function(a){return 0===a?this._fulfillmentHandler0:this[5*a-5+0]},b.prototype._rejectionHandlerAt=function(a){return 0===a?this._rejectionHandler0:this[5*a-5+1]},b.prototype._migrateCallbacks=function(a,c){var d=a._fulfillmentHandlerAt(c),e=a._rejectionHandlerAt(c),f=a._progressHandlerAt(c),g=a._promiseAt(c),h=a._receiverAt(c);g instanceof b&&g._setIsMigrated(),this._addCallbacks(d,e,f,g,h)},b.prototype._addCallbacks=function(a,b,c,d,e){var f=this._length();if(f>=131066&&(f=0,this._setLength(0)),0===f)this._promise0=d,void 0!==e&&(this._receiver0=e),"function"!=typeof a||this._isCarryingStackTrace()||(this._fulfillmentHandler0=a),"function"==typeof b&&(this._rejectionHandler0=b),"function"==typeof c&&(this._progressHandler0=c);else{var g=5*f-5;this[g+3]=d,this[g+4]=e,"function"==typeof a&&(this[g+0]=a),"function"==typeof b&&(this[g+1]=b),"function"==typeof c&&(this[g+2]=c)}return this._setLength(f+1),f},b.prototype._setProxyHandlers=function(a,b){var c=this._length();if(c>=131066&&(c=0,this._setLength(0)),0===c)this._promise0=b,this._receiver0=a;else{var d=5*c-5;this[d+3]=b,this[d+4]=a}this._setLength(c+1)},b.prototype._proxyPromiseArray=function(a,b){this._setProxyHandlers(a,b)},b.prototype._resolveCallback=function(a,c){if(!this._isFollowingOrFulfilledOrRejected()){if(a===this)return this._rejectCallback(d(),!1,!0);var e=n(a,this);if(!(e instanceof b))return this._fulfill(a);var f=1|(c?4:0);this._propagateFrom(e,f);var g=e._target();if(g._isPending()){for(var h=this._length(),i=0;h>i;++i)g._migrateCallbacks(this,i);this._setFollowing(),this._setLength(0),this._setFollowee(g)}else g._isFulfilled()?this._fulfillUnchecked(g._value()):this._rejectUnchecked(g._reason(),g._getCarriedStackTrace())}},b.prototype._rejectCallback=function(a,b,c){c||g.markAsOriginatingFromRejection(a);var d=g.ensureErrorObject(a),e=d===a;this._attachExtraTrace(d,b?e:!1),this._reject(a,e?void 0:d)},b.prototype._resolveFromResolver=function(a){var b=this;this._captureStackTrace(),this._pushContext();var c=!0,d=w(a)(function(a){null!==b&&(b._resolveCallback(a),b=null)},function(a){null!==b&&(b._rejectCallback(a,c),b=null)});c=!1,this._popContext(),void 0!==d&&d===v&&null!==b&&(b._rejectCallback(d.e,!0,!0),b=null)},b.prototype._settlePromiseFromHandler=function(a,b,c,e){if(!e._isRejected()){e._pushContext();var f;if(f=b!==l||this._isRejected()?w(a).call(b,c):w(a).apply(this._boundTo,c),e._popContext(),f===v||f===e||f===m){var g=f===e?d():f.e;e._rejectCallback(g,!1,!0)}else e._resolveCallback(f)}},b.prototype._target=function(){for(var a=this;a._isFollowing();)a=a._followee();return a},b.prototype._followee=function(){return this._rejectionHandler0},b.prototype._setFollowee=function(a){this._rejectionHandler0=a},b.prototype._cleanValues=function(){this._cancellable()&&(this._cancellationParent=void 0)},b.prototype._propagateFrom=function(a,b){(1&b)>0&&a._cancellable()&&(this._setCancellable(),this._cancellationParent=a),(4&b)>0&&a._isBound()&&this._setBoundTo(a._boundTo)},b.prototype._fulfill=function(a){this._isFollowingOrFulfilledOrRejected()||this._fulfillUnchecked(a)},b.prototype._reject=function(a,b){this._isFollowingOrFulfilledOrRejected()||this._rejectUnchecked(a,b)},b.prototype._settlePromiseAt=function(a){var c=this._promiseAt(a),d=c instanceof b;if(d&&c._isMigrated())return c._unsetIsMigrated(),h.invoke(this._settlePromiseAt,this,a);var e=this._isFulfilled()?this._fulfillmentHandlerAt(a):this._rejectionHandlerAt(a),f=this._isCarryingStackTrace()?this._getCarriedStackTrace():void 0,g=this._settledValue,i=this._receiverAt(a);this._clearCallbackDataAtIndex(a),"function"==typeof e?d?this._settlePromiseFromHandler(e,i,g,c):e.call(i,g,c):i instanceof o?i._isResolved()||(this._isFulfilled()?i._promiseFulfilled(g,c):i._promiseRejected(g,c)):d&&(this._isFulfilled()?c._fulfill(g):c._reject(g,f)),a>=4&&4===(31&a)&&h.invokeLater(this._setLength,this,0)},b.prototype._clearCallbackDataAtIndex=function(a){if(0===a)this._isCarryingStackTrace()||(this._fulfillmentHandler0=void 0),this._rejectionHandler0=this._progressHandler0=this._receiver0=this._promise0=void 0;else{var b=5*a-5;this[b+3]=this[b+4]=this[b+0]=this[b+1]=this[b+2]=void 0}},b.prototype._isSettlePromisesQueued=function(){return-1073741824===(-1073741824&this._bitField)},b.prototype._setSettlePromisesQueued=function(){this._bitField=-1073741824|this._bitField},b.prototype._unsetSettlePromisesQueued=function(){this._bitField=1073741823&this._bitField},b.prototype._queueSettlePromises=function(){h.settlePromises(this),this._setSettlePromisesQueued()},b.prototype._fulfillUnchecked=function(a){if(a===this){var b=d();return this._attachExtraTrace(b),this._rejectUnchecked(b,void 0)}this._setFulfilled(),this._settledValue=a,this._cleanValues(),this._length()>0&&this._queueSettlePromises()},b.prototype._rejectUncheckedCheckError=function(a){var b=g.ensureErrorObject(a);this._rejectUnchecked(a,b===a?void 0:b)},b.prototype._rejectUnchecked=function(a,b){if(a===this){var c=d();return this._attachExtraTrace(c),this._rejectUnchecked(c)}return this._setRejected(),this._settledValue=a,this._cleanValues(),this._isFinal()?void h.throwLater(function(a){throw"stack"in a&&h.invokeFirst(p.unhandledRejection,void 0,a),a},void 0===b?a:b):(void 0!==b&&b!==a&&this._setCarriedStackTrace(b),void(this._length()>0?this._queueSettlePromises():this._ensurePossibleRejectionHandled()))},b.prototype._settlePromises=function(){this._unsetSettlePromisesQueued();for(var a=this._length(),b=0;a>b;b++)this._settlePromiseAt(b)},b._makeSelfResolutionError=d,a("./progress.js")(b,o),a("./method.js")(b,k,n,f),a("./bind.js")(b,k,n),a("./finally.js")(b,m,n),a("./direct_resolve.js")(b),a("./synchronous_inspection.js")(b),a("./join.js")(b,o,n,k),b.Promise=b,a("./map.js")(b,o,f,n,k),a("./cancel.js")(b),a("./using.js")(b,f,n,r),a("./generators.js")(b,f,k,n),a("./nodeify.js")(b),a("./call_get.js")(b),a("./props.js")(b,o,n,f),a("./race.js")(b,k,n,f),a("./reduce.js")(b,o,f,n,k),a("./settle.js")(b,o),a("./some.js")(b,o,f),a("./promisify.js")(b,k),a("./any.js")(b),a("./each.js")(b,k),a("./timers.js")(b,k),a("./filter.js")(b,k),g.toFastProperties(b),g.toFastProperties(b.prototype),c({a:1}),c({b:2}),c({c:3}),c(1),c(function(){}),c(void 0),c(!1),c(new b(k)),p.setBounds(h.firstLineError,g.lastLineError),b}},{"./any.js":1,"./async.js":2,"./bind.js":3,"./call_get.js":5,"./cancel.js":6,"./captured_trace.js":7,"./catch_filter.js":8,"./context.js":9,"./debuggability.js":10,"./direct_resolve.js":11,"./each.js":12,"./errors.js":13,"./filter.js":15,"./finally.js":16,"./generators.js":17,"./join.js":18,"./map.js":19,"./method.js":20,"./nodeify.js":21,"./progress.js":22,"./promise_array.js":24,"./promise_resolver.js":25,"./promisify.js":26,"./props.js":27,"./race.js":29,"./reduce.js":30,"./settle.js":32,"./some.js":33,"./synchronous_inspection.js":34,"./thenables.js":35,"./timers.js":36,"./using.js":37,"./util.js":38}],24:[function(a,b,c){"use strict";b.exports=function(b,c,d,e){function f(a){switch(a){case-2:return[];case-3:return{}}}function g(a){var d,e=this._promise=new b(c);a instanceof b&&(d=a,e._propagateFrom(d,5)),this._values=a,this._length=0,this._totalResolved=0,this._init(void 0,-2)}var h=a("./util.js"),i=h.isArray;return g.prototype.length=function(){return this._length},g.prototype.promise=function(){return this._promise},g.prototype._init=function j(a,c){var g=d(this._values,this._promise);if(g instanceof b){if(g=g._target(),this._values=g,!g._isFulfilled())return g._isPending()?void g._then(j,this._reject,void 0,this,c):void this._reject(g._reason());if(g=g._value(),!i(g)){var h=new b.TypeError("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n");return void this.__hardReject__(h)}}else if(!i(g))return void this._promise._reject(e("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n")._reason());if(0===g.length)return void(-5===c?this._resolveEmptyArray():this._resolve(f(c)));var k=this.getActualLength(g.length);this._length=k,this._values=this.shouldCopyValues()?new Array(k):this._values;for(var l=this._promise,m=0;k>m;++m){var n=this._isResolved(),o=d(g[m],l);o instanceof b?(o=o._target(),n?o._unsetRejectionIsUnhandled():o._isPending()?o._proxyPromiseArray(this,m):o._isFulfilled()?this._promiseFulfilled(o._value(),m):this._promiseRejected(o._reason(),m)):n||this._promiseFulfilled(o,m)}},g.prototype._isResolved=function(){return null===this._values},g.prototype._resolve=function(a){this._values=null,this._promise._fulfill(a)},g.prototype.__hardReject__=g.prototype._reject=function(a){this._values=null,this._promise._rejectCallback(a,!1,!0)},g.prototype._promiseProgressed=function(a,b){this._promise._progress({index:b,value:a})},g.prototype._promiseFulfilled=function(a,b){this._values[b]=a;var c=++this._totalResolved;c>=this._length&&this._resolve(this._values)},g.prototype._promiseRejected=function(a,b){this._totalResolved++,this._reject(a)},g.prototype.shouldCopyValues=function(){return!0},g.prototype.getActualLength=function(a){return a},g}},{"./util.js":38}],25:[function(a,b,c){"use strict";function d(a){return a instanceof Error&&n.getPrototypeOf(a)===Error.prototype}function e(a){var b;if(d(a)){b=new l(a),b.name=a.name,b.message=a.message,b.stack=a.stack;for(var c=n.keys(a),e=0;e<c.length;++e){var f=c[e];o.test(f)||(b[f]=a[f])}return b}return h.markAsOriginatingFromRejection(a),a}function f(a){return function(b,c){if(null!==a){if(b){var d=e(i(b));a._attachExtraTrace(d),a._reject(d)}else if(arguments.length>2){for(var f=arguments.length,g=new Array(f-1),h=1;f>h;++h)g[h-1]=arguments[h];a._fulfill(g)}else a._fulfill(c);a=null}}}var g,h=a("./util.js"),i=h.maybeWrapAsError,j=a("./errors.js"),k=j.TimeoutError,l=j.OperationalError,m=h.haveGetters,n=a("./es5.js"),o=/^(?:name|message|stack|cause)$/;if(g=m?function(a){this.promise=a}:function(a){this.promise=a,this.asCallback=f(a),this.callback=this.asCallback},m){var p={get:function(){return f(this.promise)}};n.defineProperty(g.prototype,"asCallback",p),n.defineProperty(g.prototype,"callback",p)}g._nodebackForPromise=f,g.prototype.toString=function(){return"[object PromiseResolver]"},g.prototype.resolve=g.prototype.fulfill=function(a){if(!(this instanceof g))throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");this.promise._resolveCallback(a)},g.prototype.reject=function(a){if(!(this instanceof g))throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");this.promise._rejectCallback(a)},g.prototype.progress=function(a){if(!(this instanceof g))throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n");this.promise._progress(a)},g.prototype.cancel=function(a){this.promise.cancel(a)},g.prototype.timeout=function(){this.reject(new k("timeout"))},g.prototype.isResolved=function(){return this.promise.isResolved()},g.prototype.toJSON=function(){return this.promise.toJSON()},b.exports=g},{"./errors.js":13,"./es5.js":14,"./util.js":38}],26:[function(a,b,c){"use strict";b.exports=function(b,c){function d(a){return!v.test(a)}function e(a){try{return a.__isPromisified__===!0}catch(b){return!1}}function f(a,b,c){var d=n.getDataPropertyOrDefault(a,b+c,u);return d?e(d):!1}function g(a,b,c){for(var d=0;d<a.length;d+=2){var e=a[d];if(c.test(e))for(var f=e.replace(c,""),g=0;g<a.length;g+=2)if(a[g]===f)throw new s("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/iWrZbw\n".replace("%s",b))}}function h(a,b,c,d){for(var h=n.inheritedDataKeys(a),i=[],j=0;j<h.length;++j){var k=h[j],l=a[k],m=d===w?!0:w(k,l,a);"function"!=typeof l||e(l)||f(a,k,b)||!d(k,l,a,m)||i.push(k,l)}return g(i,b,c),i}function i(a,d,e,f){function g(){var e=d;d===m&&(e=this);var f=new b(c);f._captureStackTrace();var g="string"==typeof i&&this!==h?this[i]:a,j=o(f);try{g.apply(e,p(arguments,j))}catch(k){f._rejectCallback(q(k),!0,!0)}return f}var h=function(){return this}(),i=a;return"string"==typeof i&&(a=f),g.__isPromisified__=!0,g}function j(a,b,c,d){for(var e=new RegExp(x(b)+"$"),f=h(a,b,e,c),g=0,i=f.length;i>g;g+=2){var j=f[g],k=f[g+1],l=j+b;a[l]=d===y?y(j,m,j,k,b):d(k,function(){return y(j,m,j,k,b)})}return n.toFastProperties(a),a}function k(a,b){return y(a,b,void 0,a)}var l,m={},n=a("./util.js"),o=a("./promise_resolver.js")._nodebackForPromise,p=n.withAppended,q=n.maybeWrapAsError,r=n.canEvaluate,s=a("./errors").TypeError,t="Async",u={__isPromisified__:!0},v=/^(?:length|name|arguments|caller|callee|prototype|__isPromisified__)$/,w=function(a,b){return n.isIdentifier(a)&&"_"!==a.charAt(0)&&!n.isClass(b)},x=function(a){return a.replace(/([$])/,"\\$")},y=r?l:i;b.promisify=function(a,b){if("function"!=typeof a)throw new s("fn must be a function\n\n    See http://goo.gl/916lJJ\n");if(e(a))return a;var c=k(a,arguments.length<2?m:b);return n.copyDescriptors(a,c,d),c},b.promisifyAll=function(a,b){if("function"!=typeof a&&"object"!=typeof a)throw new s("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/9ITlV0\n");b=Object(b);var c=b.suffix;"string"!=typeof c&&(c=t);var d=b.filter;"function"!=typeof d&&(d=w);var e=b.promisifier;if("function"!=typeof e&&(e=y),!n.isIdentifier(c))throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/8FZo5V\n");for(var f=n.inheritedDataKeys(a),g=0;g<f.length;++g){var h=a[f[g]];"constructor"!==f[g]&&n.isClass(h)&&(j(h.prototype,c,d,e),j(h,c,d,e))}return j(a,c,d,e)}}},{"./errors":13,"./promise_resolver.js":25,"./util.js":38}],27:[function(a,b,c){"use strict";b.exports=function(b,c,d,e){function f(a){for(var b=j.keys(a),c=b.length,d=new Array(2*c),e=0;c>e;++e){var f=b[e];d[e]=a[f],d[e+c]=f}this.constructor$(d)}function g(a){var c,g=d(a);return i(g)?(c=g instanceof b?g._then(b.props,void 0,void 0,void 0,void 0):new f(g).promise(),g instanceof b&&c._propagateFrom(g,4),c):e("cannot await properties of a non-object\n\n    See http://goo.gl/OsFKC8\n")}var h=a("./util.js"),i=h.isObject,j=a("./es5.js");h.inherits(f,c),f.prototype._init=function(){this._init$(void 0,-3)},f.prototype._promiseFulfilled=function(a,b){this._values[b]=a;var c=++this._totalResolved;if(c>=this._length){for(var d={},e=this.length(),f=0,g=this.length();g>f;++f)d[this._values[f+e]]=this._values[f];this._resolve(d)}},f.prototype._promiseProgressed=function(a,b){this._promise._progress({key:this._values[b+this.length()],value:a})},f.prototype.shouldCopyValues=function(){return!1},f.prototype.getActualLength=function(a){return a>>1},b.prototype.props=function(){return g(this)},b.props=function(a){return g(a)}}},{"./es5.js":14,"./util.js":38}],28:[function(a,b,c){"use strict";function d(a,b,c,d,e){for(var f=0;e>f;++f)c[f+d]=a[f+b],a[f+b]=void 0}function e(a){this._capacity=a,this._length=0,this._front=0}e.prototype._willBeOverCapacity=function(a){return this._capacity<a},e.prototype._pushOne=function(a){var b=this.length();this._checkCapacity(b+1);var c=this._front+b&this._capacity-1;this[c]=a,this._length=b+1},e.prototype._unshiftOne=function(a){var b=this._capacity;this._checkCapacity(this.length()+1);var c=this._front,d=(c-1&b-1^b)-b;this[d]=a,this._front=d,this._length=this.length()+1},e.prototype.unshift=function(a,b,c){this._unshiftOne(c),this._unshiftOne(b),this._unshiftOne(a)},e.prototype.push=function(a,b,c){var d=this.length()+3;if(this._willBeOverCapacity(d))return this._pushOne(a),this._pushOne(b),void this._pushOne(c);var e=this._front+d-3;this._checkCapacity(d);var f=this._capacity-1;this[e+0&f]=a,this[e+1&f]=b,this[e+2&f]=c,this._length=d},e.prototype.shift=function(){var a=this._front,b=this[a];return this[a]=void 0,this._front=a+1&this._capacity-1,this._length--,b},e.prototype.length=function(){return this._length},e.prototype._checkCapacity=function(a){this._capacity<a&&this._resizeTo(this._capacity<<1)},e.prototype._resizeTo=function(a){var b=this._capacity;this._capacity=a;var c=this._front,e=this._length,f=c+e&b-1;d(this,0,this,b,f)},b.exports=e},{}],29:[function(a,b,c){"use strict";b.exports=function(b,c,d,e){function f(a,f){var i=d(a);if(i instanceof b)return h(i);if(!g(a))return e("expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n");var j=new b(c);void 0!==f&&j._propagateFrom(f,5);for(var k=j._fulfill,l=j._reject,m=0,n=a.length;n>m;++m){var o=a[m];(void 0!==o||m in a)&&b.cast(o)._then(k,l,void 0,j,null)}return j}var g=a("./util.js").isArray,h=function(a){return a.then(function(b){return f(b,a)})};b.race=function(a){return f(a,void 0)},b.prototype.race=function(){return f(this,void 0)}}},{"./util.js":38}],30:[function(a,b,c){"use strict";b.exports=function(b,c,d,e,f){function g(a,c,d,g){this.constructor$(a),this._promise._captureStackTrace(),this._preservedValues=g===f?[]:null,this._zerothIsAccum=void 0===d,this._gotAccum=!1,this._reducingIndex=this._zerothIsAccum?1:0,this._valuesPhase=void 0;var i=e(d,this._promise),k=!1,l=i instanceof b;l&&(i=i._target(),i._isPending()?i._proxyPromiseArray(this,-1):i._isFulfilled()?(d=i._value(),this._gotAccum=!0):(this._reject(i._reason()),k=!0)),l||this._zerothIsAccum||(this._gotAccum=!0),this._callback=c,this._accum=d,k||j.invoke(h,this,void 0)}function h(){this._init$(void 0,-5)}function i(a,b,c,e){if("function"!=typeof b)return d("fn must be a function\n\n    See http://goo.gl/916lJJ\n");var f=new g(a,b,c,e);return f.promise()}var j=a("./async.js"),k=a("./util.js"),l=k.tryCatch,m=k.errorObj;k.inherits(g,c),g.prototype._init=function(){},g.prototype._resolveEmptyArray=function(){(this._gotAccum||this._zerothIsAccum)&&this._resolve(null!==this._preservedValues?[]:this._accum)},g.prototype._promiseFulfilled=function(a,c){var d=this._values;d[c]=a;var f,g=this.length(),h=this._preservedValues,i=null!==h,j=this._gotAccum,k=this._valuesPhase;if(!k)for(k=this._valuesPhase=new Array(g),f=0;g>f;++f)k[f]=0;if(f=k[c],0===c&&this._zerothIsAccum?(this._accum=a,this._gotAccum=j=!0,k[c]=0===f?1:2):-1===c?(this._accum=a,this._gotAccum=j=!0):0===f?k[c]=1:(k[c]=2,this._accum=a),j){for(var n,o=this._callback,p=this._promise._boundTo,q=this._reducingIndex;g>q;++q)if(f=k[q],2!==f){if(1!==f)return;if(a=d[q],this._promise._pushContext(),i?(h.push(a),n=l(o).call(p,a,q,g)):n=l(o).call(p,this._accum,a,q,g),this._promise._popContext(),n===m)return this._reject(n.e);var r=e(n,this._promise);if(r instanceof b){if(r=r._target(),r._isPending())return k[q]=4,r._proxyPromiseArray(this,q);if(!r._isFulfilled())return this._reject(r._reason());n=r._value()}this._reducingIndex=q+1,this._accum=n}else this._reducingIndex=q+1;this._resolve(i?h:this._accum)}},b.prototype.reduce=function(a,b){return i(this,a,b,null)},b.reduce=function(a,b,c,d){return i(a,b,c,d)}}},{"./async.js":2,"./util.js":38}],31:[function(a,b,c){"use strict";var d,g=a("./util"),h=function(){throw new Error("No async scheduler available\n\n    See http://goo.gl/m3OTXk\n")};if(g.isNode&&"undefined"==typeof MutationObserver){var i=f.setImmediate,j=e.nextTick;d=g.isRecentNode?function(a){i.call(f,a)}:function(a){j.call(e,a)}}else"undefined"!=typeof MutationObserver?(d=function(a){var b=document.createElement("div"),c=new MutationObserver(a);return c.observe(b,{attributes:!0}),function(){b.classList.toggle("foo")}},d.isStatic=!0):d="undefined"!=typeof setImmediate?function(a){setImmediate(a)}:"undefined"!=typeof setTimeout?function(a){setTimeout(a,0)}:h;b.exports=d},{"./util":38}],32:[function(a,b,c){"use strict";b.exports=function(b,c){function d(a){this.constructor$(a)}var e=b.PromiseInspection,f=a("./util.js");f.inherits(d,c),d.prototype._promiseResolved=function(a,b){this._values[a]=b;var c=++this._totalResolved;c>=this._length&&this._resolve(this._values)},d.prototype._promiseFulfilled=function(a,b){var c=new e;c._bitField=268435456,c._settledValue=a,this._promiseResolved(b,c)},d.prototype._promiseRejected=function(a,b){var c=new e;c._bitField=134217728,c._settledValue=a,this._promiseResolved(b,c)},b.settle=function(a){return new d(a).promise()},b.prototype.settle=function(){return new d(this).promise()}}},{"./util.js":38}],33:[function(a,b,c){"use strict";b.exports=function(b,c,d){function e(a){this.constructor$(a),this._howMany=0,this._unwrap=!1,this._initialized=!1}function f(a,b){if((0|b)!==b||0>b)return d("expecting a positive integer\n\n    See http://goo.gl/1wAmHx\n");var c=new e(a),f=c.promise();return c.setHowMany(b),c.init(),f}var g=a("./util.js"),h=a("./errors.js").RangeError,i=a("./errors.js").AggregateError,j=g.isArray;g.inherits(e,c),e.prototype._init=function(){if(this._initialized){if(0===this._howMany)return void this._resolve([]);this._init$(void 0,-5);var a=j(this._values);!this._isResolved()&&a&&this._howMany>this._canPossiblyFulfill()&&this._reject(this._getRangeError(this.length()))}},e.prototype.init=function(){this._initialized=!0,this._init()},e.prototype.setUnwrap=function(){this._unwrap=!0},e.prototype.howMany=function(){return this._howMany},e.prototype.setHowMany=function(a){this._howMany=a},e.prototype._promiseFulfilled=function(a){this._addFulfilled(a),this._fulfilled()===this.howMany()&&(this._values.length=this.howMany(),this._resolve(1===this.howMany()&&this._unwrap?this._values[0]:this._values))},e.prototype._promiseRejected=function(a){if(this._addRejected(a),this.howMany()>this._canPossiblyFulfill()){for(var b=new i,c=this.length();c<this._values.length;++c)b.push(this._values[c]);this._reject(b)}},e.prototype._fulfilled=function(){return this._totalResolved},e.prototype._rejected=function(){return this._values.length-this.length()},e.prototype._addRejected=function(a){this._values.push(a)},e.prototype._addFulfilled=function(a){this._values[this._totalResolved++]=a},e.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected()},e.prototype._getRangeError=function(a){var b="Input array must contain at least "+this._howMany+" items but contains only "+a+" items";return new h(b)},e.prototype._resolveEmptyArray=function(){this._reject(this._getRangeError(0))},b.some=function(a,b){return f(a,b)},b.prototype.some=function(a){return f(this,a)},b._SomePromiseArray=e}},{"./errors.js":13,"./util.js":38}],34:[function(a,b,c){"use strict";b.exports=function(a){function b(a){void 0!==a?(a=a._target(),this._bitField=a._bitField,this._settledValue=a._settledValue):(this._bitField=0,this._settledValue=void 0)}b.prototype.value=function(){if(!this.isFulfilled())throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/hc1DLj\n");return this._settledValue},b.prototype.error=b.prototype.reason=function(){if(!this.isRejected())throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/hPuiwB\n");return this._settledValue},b.prototype.isFulfilled=a.prototype._isFulfilled=function(){return(268435456&this._bitField)>0},b.prototype.isRejected=a.prototype._isRejected=function(){return(134217728&this._bitField)>0},b.prototype.isPending=a.prototype._isPending=function(){return 0===(402653184&this._bitField)},b.prototype.isResolved=a.prototype._isResolved=function(){return(402653184&this._bitField)>0},a.prototype.isPending=function(){return this._target()._isPending()},a.prototype.isRejected=function(){return this._target()._isRejected()},a.prototype.isFulfilled=function(){return this._target()._isFulfilled()},a.prototype.isResolved=function(){return this._target()._isResolved()},a.prototype._value=function(){return this._settledValue},a.prototype._reason=function(){return this._unsetRejectionIsUnhandled(),this._settledValue},a.prototype.value=function(){var a=this._target();if(!a.isFulfilled())throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/hc1DLj\n");return a._settledValue},a.prototype.reason=function(){var a=this._target();if(!a.isRejected())throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/hPuiwB\n");return a._unsetRejectionIsUnhandled(),a._settledValue},a.PromiseInspection=b}},{}],35:[function(a,b,c){"use strict";b.exports=function(b,c){function d(a,d){if(j(a)){if(a instanceof b)return a;if(f(a)){var k=new b(c);return a._then(k._fulfillUnchecked,k._rejectUncheckedCheckError,k._progressUnchecked,k,null),k}var l=h.tryCatch(e)(a);if(l===i){d&&d._pushContext();var k=b.reject(l.e);return d&&d._popContext(),k}if("function"==typeof l)return g(a,l,d)}return a}function e(a){return a.then}function f(a){return k.call(a,"_promise0")}function g(a,d,e){function f(c){k&&(a===c?k._rejectCallback(b._makeSelfResolutionError(),!1,!0):k._resolveCallback(c),k=null)}function g(a){k&&(k._rejectCallback(a,m,!0),k=null)}function j(a){k&&"function"==typeof k._progress&&k._progress(a)}var k=new b(c),l=k;e&&e._pushContext(),k._captureStackTrace(),e&&e._popContext();var m=!0,n=h.tryCatch(d).call(a,f,g,j);return m=!1,k&&n===i&&(k._rejectCallback(n.e,!0,!0),k=null),l}var h=a("./util.js"),i=h.errorObj,j=h.isObject,k={}.hasOwnProperty;return d}},{"./util.js":38}],36:[function(a,b,c){"use strict";b.exports=function(b,c){function d(a){var b=this;return b instanceof Number&&(b=+b),clearTimeout(b),a}function e(a){var b=this;throw b instanceof Number&&(b=+b),clearTimeout(b),a}var f=a("./util.js"),g=b.TimeoutError,h=function(a,b){if(a.isPending()){"string"!=typeof b&&(b="operation timed out");var c=new g(b);f.markAsOriginatingFromRejection(c),a._attachExtraTrace(c),a._cancel(c)}},i=function(a){return j(+this).thenReturn(a)},j=b.delay=function(a,d){if(void 0===d){d=a,a=void 0;var e=new b(c);return setTimeout(function(){e._fulfill()},d),e}return d=+d,b.resolve(a)._then(i,null,null,d,void 0)};b.prototype.delay=function(a){return j(this,a)},b.prototype.timeout=function(a,b){a=+a;var c=this.then().cancellable();c._cancellationParent=this;var f=setTimeout(function(){h(c,b)},a);return c._then(d,e,void 0,f,void 0)}}},{"./util.js":38}],37:[function(a,b,c){"use strict";b.exports=function(b,c,d,e){function f(a){for(var c=a.length,d=0;c>d;++d){var e=a[d];if(e.isRejected())return b.reject(e.error());a[d]=e._settledValue}return a}function g(a){setTimeout(function(){throw a},0)}function h(a){var b=d(a);return b!==a&&"function"==typeof a._isDisposable&&"function"==typeof a._getDisposer&&a._isDisposable()&&b._setDisposable(a._getDisposer()),b}function i(a,c){function e(){if(f>=i)return j.resolve();var k=h(a[f++]);if(k instanceof b&&k._isDisposable()){try{k=d(k._getDisposer().tryDispose(c),a.promise)}catch(l){return g(l)}if(k instanceof b)return k._then(e,g,null,null,null)}e()}var f=0,i=a.length,j=b.defer();return e(),j.promise}function j(a){var b=new q;return b._settledValue=a,b._bitField=268435456,i(this,b).thenReturn(a)}function k(a){var b=new q;return b._settledValue=a,b._bitField=134217728,i(this,b).thenThrow(a)}function l(a,b,c){this._data=a,this._promise=b,this._context=c}function m(a,b,c){this.constructor$(a,b,c)}function n(a){return l.isDisposer(a)?(this.resources[this.index]._setDisposable(a),a.promise()):a}var o=a("./errors.js").TypeError,p=a("./util.js").inherits,q=b.PromiseInspection;l.prototype.data=function(){return this._data},l.prototype.promise=function(){return this._promise},l.prototype.resource=function(){return this.promise().isFulfilled()?this.promise().value():null},l.prototype.tryDispose=function(a){var b=this.resource(),c=this._context;void 0!==c&&c._pushContext();var d=null!==b?this.doDispose(b,a):null;return void 0!==c&&c._popContext(),this._promise._unsetDisposable(),this._data=null,d},l.isDisposer=function(a){return null!=a&&"function"==typeof a.resource&&"function"==typeof a.tryDispose},p(m,l),m.prototype.doDispose=function(a,b){var c=this.data();return c.call(a,a,b)},b.using=function(){var a=arguments.length;if(2>a)return c("you must pass at least 2 arguments to Promise.using");var e=arguments[a-1];if("function"!=typeof e)return c("fn must be a function\n\n    See http://goo.gl/916lJJ\n");a--;for(var g=new Array(a),h=0;a>h;++h){var i=arguments[h];if(l.isDisposer(i)){var m=i;i=i.promise(),i._setDisposable(m)}else{var o=d(i);o instanceof b&&(i=o._then(n,null,null,{
resources:g,index:h},void 0))}g[h]=i}var p=b.settle(g).then(f).then(function(a){p._pushContext();var b;try{b=e.apply(void 0,a)}finally{p._popContext()}return b})._then(j,k,void 0,g,void 0);return g.promise=p,p},b.prototype._setDisposable=function(a){this._bitField=262144|this._bitField,this._disposer=a},b.prototype._isDisposable=function(){return(262144&this._bitField)>0},b.prototype._getDisposer=function(){return this._disposer},b.prototype._unsetDisposable=function(){this._bitField=-262145&this._bitField,this._disposer=void 0},b.prototype.disposer=function(a){if("function"==typeof a)return new m(a,this,e());throw new o}}},{"./errors.js":13,"./util.js":38}],38:[function(a,b,c){"use strict";function d(){try{return B.apply(this,arguments)}catch(a){return A.e=a,A}}function f(a){return B=a,d}function g(a){return null==a||a===!0||a===!1||"string"==typeof a||"number"==typeof a}function h(a){return!g(a)}function i(a){return g(a)?new Error(r(a)):a}function j(a,b){var c,d=a.length,e=new Array(d+1);for(c=0;d>c;++c)e[c]=a[c];return e[c]=b,e}function k(a,b,c){if(!x.isES5)return{}.hasOwnProperty.call(a,b)?a[b]:void 0;var d=Object.getOwnPropertyDescriptor(a,b);return null!=d?null==d.get&&null==d.set?d.value:c:void 0}function l(a,b,c){if(g(a))return a;var d={value:c,configurable:!0,enumerable:!1,writable:!0};return x.defineProperty(a,b,d),a}function m(a){throw a}function n(a){try{if("function"==typeof a){var b=x.names(a.prototype);return x.isES5?b.length>1:b.length>0&&!(1===b.length&&"constructor"===b[0])}return!1}catch(c){return!1}}function o(a){function b(){}b.prototype=a;for(var c=8;c--;)new b;return a}function p(a){return F.test(a)}function q(a,b,c){for(var d=new Array(a),e=0;a>e;++e)d[e]=b+e+c;return d}function r(a){try{return a+""}catch(b){return"[no string representation]"}}function s(a){try{l(a,"isOperational",!0)}catch(b){}}function t(a){return null==a?!1:a instanceof Error.__BluebirdErrorTypes__.OperationalError||a.isOperational===!0}function u(a){return a instanceof Error&&x.propertyIsWritable(a,"stack")}function v(a){return{}.toString.call(a)}function w(a,b,c){for(var d=x.names(a),e=0;e<d.length;++e){var f=d[e];c(f)&&x.defineProperty(b,f,x.getDescriptor(a,f))}}var x=a("./es5.js"),y="undefined"==typeof navigator,z=function(){try{var a={};return x.defineProperty(a,"f",{get:function(){return 3}}),3===a.f}catch(b){return!1}}(),A={e:{}},B,C=function(a,b){function c(){this.constructor=a,this.constructor$=b;for(var c in b.prototype)d.call(b.prototype,c)&&"$"!==c.charAt(c.length-1)&&(this[c+"$"]=b.prototype[c])}var d={}.hasOwnProperty;return c.prototype=b.prototype,a.prototype=new c,a.prototype},D=function(){return"string"!==this}.call("string"),E=function(){if(x.isES5){var a=Object.prototype,b=Object.getOwnPropertyNames;return function(c){for(var d=[],e=Object.create(null);null!=c&&c!==a;){var f;try{f=b(c)}catch(g){return d}for(var h=0;h<f.length;++h){var i=f[h];if(!e[i]){e[i]=!0;var j=Object.getOwnPropertyDescriptor(c,i);null!=j&&null==j.get&&null==j.set&&d.push(i)}}c=x.getPrototypeOf(c)}return d}}return function(a){var b=[];for(var c in a)b.push(c);return b}}(),F=/^[a-z$_][a-z$_0-9]*$/i,G=function(){return"stack"in new Error?function(a){return u(a)?a:new Error(r(a))}:function(a){if(u(a))return a;try{throw new Error(r(a))}catch(b){return b}}}(),H={isClass:n,isIdentifier:p,inheritedDataKeys:E,getDataPropertyOrDefault:k,thrower:m,isArray:x.isArray,haveGetters:z,notEnumerableProp:l,isPrimitive:g,isObject:h,canEvaluate:y,errorObj:A,tryCatch:f,inherits:C,withAppended:j,maybeWrapAsError:i,wrapsPrimitiveReceiver:D,toFastProperties:o,filledRange:q,toString:r,canAttachTrace:u,ensureErrorObject:G,originatesFromRejection:t,markAsOriginatingFromRejection:s,classString:v,copyDescriptors:w,hasDevTools:"undefined"!=typeof chrome&&chrome&&"function"==typeof chrome.loadTimes,isNode:"undefined"!=typeof e&&"[object process]"===v(e).toLowerCase()};H.isRecentNode=H.isNode&&function(){var a=e.versions.node.split(".").map(Number);return 0===a[0]&&a[1]>10||a[0]>0}();try{throw new Error}catch(I){H.lastLineError=I}b.exports=H},{"./es5.js":14}],39:[function(a,b,c){function d(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function e(a){return"function"==typeof a}function f(a){return"number"==typeof a}function g(a){return"object"==typeof a&&null!==a}function h(a){return void 0===a}b.exports=d,d.EventEmitter=d,d.prototype._events=void 0,d.prototype._maxListeners=void 0,d.defaultMaxListeners=10,d.prototype.setMaxListeners=function(a){if(!f(a)||0>a||isNaN(a))throw TypeError("n must be a positive number");return this._maxListeners=a,this},d.prototype.emit=function(a){var b,c,d,f,i,j;if(this._events||(this._events={}),"error"===a&&(!this._events.error||g(this._events.error)&&!this._events.error.length)){if(b=arguments[1],b instanceof Error)throw b;throw TypeError('Uncaught, unspecified "error" event.')}if(c=this._events[a],h(c))return!1;if(e(c))switch(arguments.length){case 1:c.call(this);break;case 2:c.call(this,arguments[1]);break;case 3:c.call(this,arguments[1],arguments[2]);break;default:for(d=arguments.length,f=new Array(d-1),i=1;d>i;i++)f[i-1]=arguments[i];c.apply(this,f)}else if(g(c)){for(d=arguments.length,f=new Array(d-1),i=1;d>i;i++)f[i-1]=arguments[i];for(j=c.slice(),d=j.length,i=0;d>i;i++)j[i].apply(this,f)}return!0},d.prototype.addListener=function(a,b){var c;if(!e(b))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",a,e(b.listener)?b.listener:b),this._events[a]?g(this._events[a])?this._events[a].push(b):this._events[a]=[this._events[a],b]:this._events[a]=b,g(this._events[a])&&!this._events[a].warned){var c;c=h(this._maxListeners)?d.defaultMaxListeners:this._maxListeners,c&&c>0&&this._events[a].length>c&&(this._events[a].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[a].length),"function"==typeof console.trace&&console.trace())}return this},d.prototype.on=d.prototype.addListener,d.prototype.once=function(a,b){function c(){this.removeListener(a,c),d||(d=!0,b.apply(this,arguments))}if(!e(b))throw TypeError("listener must be a function");var d=!1;return c.listener=b,this.on(a,c),this},d.prototype.removeListener=function(a,b){var c,d,f,h;if(!e(b))throw TypeError("listener must be a function");if(!this._events||!this._events[a])return this;if(c=this._events[a],f=c.length,d=-1,c===b||e(c.listener)&&c.listener===b)delete this._events[a],this._events.removeListener&&this.emit("removeListener",a,b);else if(g(c)){for(h=f;h-->0;)if(c[h]===b||c[h].listener&&c[h].listener===b){d=h;break}if(0>d)return this;1===c.length?(c.length=0,delete this._events[a]):c.splice(d,1),this._events.removeListener&&this.emit("removeListener",a,b)}return this},d.prototype.removeAllListeners=function(a){var b,c;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[a]&&delete this._events[a],this;if(0===arguments.length){for(b in this._events)"removeListener"!==b&&this.removeAllListeners(b);return this.removeAllListeners("removeListener"),this._events={},this}if(c=this._events[a],e(c))this.removeListener(a,c);else for(;c.length;)this.removeListener(a,c[c.length-1]);return delete this._events[a],this},d.prototype.listeners=function(a){var b;return b=this._events&&this._events[a]?e(this._events[a])?[this._events[a]]:this._events[a].slice():[]},d.listenerCount=function(a,b){var c;return c=a._events&&a._events[b]?e(a._events[b])?1:a._events[b].length:0}},{}]},{},[4])(4)}),"undefined"!=typeof window&&null!==window?window.P=window.Promise:"undefined"!=typeof self&&null!==self&&(self.P=self.Promise)},{__browserify_process:14}],2:[function(a,b,c){},{}],3:[function(a,b,c){function d(a){return"[object Array]"===j.call(a)}function e(a,b){var c;if(null===a)c={__proto__:null};else{if("object"!=typeof a)throw new TypeError("typeof prototype["+typeof a+"] != 'object'");var d=function(){};d.prototype=a,c=new d,c.__proto__=a}return"undefined"!=typeof b&&Object.defineProperties&&Object.defineProperties(c,b),c}function f(a){return"object"!=typeof a&&"function"!=typeof a||null===a}function g(a){if(f(a))throw new TypeError("Object.keys called on a non-object");var b=[];for(var c in a)k.call(a,c)&&b.push(c);return b}function h(a){if(f(a))throw new TypeError("Object.getOwnPropertyNames called on a non-object");var b=g(a);return c.isArray(a)&&-1===c.indexOf(a,"length")&&b.push("length"),b}function i(a,b){return{value:a[b]}}var j=Object.prototype.toString,k=Object.prototype.hasOwnProperty;c.isArray="function"==typeof Array.isArray?Array.isArray:d,c.indexOf=function(a,b){if(a.indexOf)return a.indexOf(b);for(var c=0;c<a.length;c++)if(b===a[c])return c;return-1},c.filter=function(a,b){if(a.filter)return a.filter(b);for(var c=[],d=0;d<a.length;d++)b(a[d],d,a)&&c.push(a[d]);return c},c.forEach=function(a,b,c){if(a.forEach)return a.forEach(b,c);for(var d=0;d<a.length;d++)b.call(c,a[d],d,a)},c.map=function(a,b){if(a.map)return a.map(b);for(var c=new Array(a.length),d=0;d<a.length;d++)c[d]=b(a[d],d,a);return c},c.reduce=function(a,b,c){if(a.reduce)return a.reduce(b,c);var d,e=!1;2<arguments.length&&(d=c,e=!0);for(var f=0,g=a.length;g>f;++f)a.hasOwnProperty(f)&&(e?d=b(d,a[f],f,a):(d=a[f],e=!0));return d},c.substr="b"!=="ab".substr(-1)?function(a,b,c){return 0>b&&(b=a.length+b),a.substr(b,c)}:function(a,b,c){return a.substr(b,c)},c.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},c.bind=function(){var a=Array.prototype.slice.call(arguments),b=a.shift();if(b.bind)return b.bind.apply(b,a);var c=a.shift();return function(){b.apply(c,a.concat([Array.prototype.slice.call(arguments)]))}},c.create="function"==typeof Object.create?Object.create:e;var l="function"==typeof Object.keys?Object.keys:g,m="function"==typeof Object.getOwnPropertyNames?Object.getOwnPropertyNames:h;if((new Error).hasOwnProperty("description")){var n=function(a,b){return"[object Error]"===j.call(a)&&(b=c.filter(b,function(a){return"description"!==a&&"number"!==a&&"message"!==a})),b};c.keys=function(a){return n(a,l(a))},c.getOwnPropertyNames=function(a){return n(a,m(a))}}else c.keys=l,c.getOwnPropertyNames=m;if("function"==typeof Object.getOwnPropertyDescriptor)try{Object.getOwnPropertyDescriptor({a:1},"a"),c.getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor}catch(o){c.getOwnPropertyDescriptor=function(a,b){try{return Object.getOwnPropertyDescriptor(a,b)}catch(c){return i(a,b)}}}else c.getOwnPropertyDescriptor=i},{}],4:[function(a,b,c){function d(a,b){return n.isUndefined(b)?""+b:!n.isNumber(b)||!isNaN(b)&&isFinite(b)?n.isFunction(b)||n.isRegExp(b)?b.toString():b:b.toString()}function e(a,b){return n.isString(a)?a.length<b?a:a.slice(0,b):a}function f(a){return e(JSON.stringify(a.actual,d),128)+" "+a.operator+" "+e(JSON.stringify(a.expected,d),128)}function g(a,b,c,d,e){throw new q.AssertionError({message:c,actual:a,expected:b,operator:d,stackStartFunction:e})}function h(a,b){a||g(a,!0,b,"==",q.ok)}function i(a,b){if(a===b)return!0;if(n.isBuffer(a)&&n.isBuffer(b)){if(a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0}return n.isDate(a)&&n.isDate(b)?a.getTime()===b.getTime():n.isRegExp(a)&&n.isRegExp(b)?a.source===b.source&&a.global===b.global&&a.multiline===b.multiline&&a.lastIndex===b.lastIndex&&a.ignoreCase===b.ignoreCase:n.isObject(a)||n.isObject(b)?k(a,b):a==b}function j(a){return"[object Arguments]"==Object.prototype.toString.call(a)}function k(a,b){if(n.isNullOrUndefined(a)||n.isNullOrUndefined(b))return!1;if(a.prototype!==b.prototype)return!1;if(j(a))return j(b)?(a=p.call(a),b=p.call(b),i(a,b)):!1;try{var c,d,e=o.keys(a),f=o.keys(b)}catch(g){return!1}if(e.length!=f.length)return!1;for(e.sort(),f.sort(),d=e.length-1;d>=0;d--)if(e[d]!=f[d])return!1;for(d=e.length-1;d>=0;d--)if(c=e[d],!i(a[c],b[c]))return!1;return!0}function l(a,b){return a&&b?"[object RegExp]"==Object.prototype.toString.call(b)?b.test(a):a instanceof b?!0:b.call({},a)===!0?!0:!1:!1}function m(a,b,c,d){var e;n.isString(c)&&(d=c,c=null);try{b()}catch(f){e=f}if(d=(c&&c.name?" ("+c.name+").":".")+(d?" "+d:"."),a&&!e&&g(e,c,"Missing expected exception"+d),!a&&l(e,c)&&g(e,c,"Got unwanted exception"+d),a&&e&&c&&!l(e,c)||!a&&e)throw e}var n=a("util"),o=a("_shims"),p=Array.prototype.slice,q=b.exports=h;q.AssertionError=function(a){this.name="AssertionError",this.actual=a.actual,this.expected=a.expected,this.operator=a.operator,this.message=a.message||f(this)},n.inherits(q.AssertionError,Error),q.fail=g,q.ok=h,q.equal=function(a,b,c){a!=b&&g(a,b,c,"==",q.equal)},q.notEqual=function(a,b,c){a==b&&g(a,b,c,"!=",q.notEqual)},q.deepEqual=function(a,b,c){i(a,b)||g(a,b,c,"deepEqual",q.deepEqual)},q.notDeepEqual=function(a,b,c){i(a,b)&&g(a,b,c,"notDeepEqual",q.notDeepEqual)},q.strictEqual=function(a,b,c){a!==b&&g(a,b,c,"===",q.strictEqual)},q.notStrictEqual=function(a,b,c){a===b&&g(a,b,c,"!==",q.notStrictEqual)},q["throws"]=function(a,b,c){m.apply(this,[!0].concat(p.call(arguments)))},q.doesNotThrow=function(a,b){m.apply(this,[!1].concat(p.call(arguments)))},q.ifError=function(a){if(a)throw a}},{_shims:3,util:9}],5:[function(a,b,c){function d(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}var e=a("util");b.exports=d,d.EventEmitter=d,d.prototype._events=void 0,d.prototype._maxListeners=void 0,d.defaultMaxListeners=10,d.prototype.setMaxListeners=function(a){if(!e.isNumber(a)||0>a)throw TypeError("n must be a positive number");return this._maxListeners=a,this},d.prototype.emit=function(a){var b,c,d,f,g,h;if(this._events||(this._events={}),"error"===a&&(!this._events.error||e.isObject(this._events.error)&&!this._events.error.length))throw b=arguments[1],b instanceof Error?b:TypeError('Uncaught, unspecified "error" event.');if(c=this._events[a],e.isUndefined(c))return!1;if(e.isFunction(c))switch(arguments.length){case 1:c.call(this);break;case 2:c.call(this,arguments[1]);break;case 3:c.call(this,arguments[1],arguments[2]);break;default:for(d=arguments.length,f=new Array(d-1),g=1;d>g;g++)f[g-1]=arguments[g];c.apply(this,f)}else if(e.isObject(c)){for(d=arguments.length,f=new Array(d-1),g=1;d>g;g++)f[g-1]=arguments[g];for(h=c.slice(),d=h.length,g=0;d>g;g++)h[g].apply(this,f)}return!0},d.prototype.addListener=function(a,b){var c;if(!e.isFunction(b))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",a,e.isFunction(b.listener)?b.listener:b),this._events[a]?e.isObject(this._events[a])?this._events[a].push(b):this._events[a]=[this._events[a],b]:this._events[a]=b,e.isObject(this._events[a])&&!this._events[a].warned){var c;c=e.isUndefined(this._maxListeners)?d.defaultMaxListeners:this._maxListeners,c&&c>0&&this._events[a].length>c&&(this._events[a].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[a].length),console.trace())}return this},d.prototype.on=d.prototype.addListener,d.prototype.once=function(a,b){function c(){this.removeListener(a,c),b.apply(this,arguments)}if(!e.isFunction(b))throw TypeError("listener must be a function");return c.listener=b,this.on(a,c),this},d.prototype.removeListener=function(a,b){var c,d,f,g;if(!e.isFunction(b))throw TypeError("listener must be a function");if(!this._events||!this._events[a])return this;if(c=this._events[a],f=c.length,d=-1,c===b||e.isFunction(c.listener)&&c.listener===b)delete this._events[a],this._events.removeListener&&this.emit("removeListener",a,b);else if(e.isObject(c)){for(g=f;g-->0;)if(c[g]===b||c[g].listener&&c[g].listener===b){d=g;break}if(0>d)return this;1===c.length?(c.length=0,delete this._events[a]):c.splice(d,1),this._events.removeListener&&this.emit("removeListener",a,b)}return this},d.prototype.removeAllListeners=function(a){var b,c;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[a]&&delete this._events[a],this;if(0===arguments.length){for(b in this._events)"removeListener"!==b&&this.removeAllListeners(b);return this.removeAllListeners("removeListener"),this._events={},this}if(c=this._events[a],e.isFunction(c))this.removeListener(a,c);else for(;c.length;)this.removeListener(a,c[c.length-1]);return delete this._events[a],this},d.prototype.listeners=function(a){var b;return b=this._events&&this._events[a]?e.isFunction(this._events[a])?[this._events[a]]:this._events[a].slice():[]},d.listenerCount=function(a,b){var c;return c=a._events&&a._events[b]?e.isFunction(a._events[b])?1:a._events[b].length:0}},{util:9}],6:[function(a,b,c){function d(a,b){for(var c=0,d=a.length-1;d>=0;d--){var e=a[d];"."===e?a.splice(d,1):".."===e?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c--;c)a.unshift("..");return a}var e=a("__browserify_process"),f=a("util"),g=a("_shims"),h=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(a){return h.exec(a).slice(1)};c.resolve=function(){for(var a="",b=!1,c=arguments.length-1;c>=-1&&!b;c--){var h=c>=0?arguments[c]:e.cwd();if(!f.isString(h))throw new TypeError("Arguments to path.resolve must be strings");h&&(a=h+"/"+a,b="/"===h.charAt(0))}return a=d(g.filter(a.split("/"),function(a){return!!a}),!b).join("/"),(b?"/":"")+a||"."},c.normalize=function(a){var b=c.isAbsolute(a),e="/"===g.substr(a,-1);return a=d(g.filter(a.split("/"),function(a){return!!a}),!b).join("/"),a||b||(a="."),a&&e&&(a+="/"),(b?"/":"")+a},c.isAbsolute=function(a){return"/"===a.charAt(0)},c.join=function(){var a=Array.prototype.slice.call(arguments,0);return c.normalize(g.filter(a,function(a,b){if(!f.isString(a))throw new TypeError("Arguments to path.join must be strings");return a}).join("/"))},c.relative=function(a,b){function d(a){for(var b=0;b<a.length&&""===a[b];b++);for(var c=a.length-1;c>=0&&""===a[c];c--);return b>c?[]:a.slice(b,c-b+1)}a=c.resolve(a).substr(1),b=c.resolve(b).substr(1);for(var e=d(a.split("/")),f=d(b.split("/")),g=Math.min(e.length,f.length),h=g,i=0;g>i;i++)if(e[i]!==f[i]){h=i;break}for(var j=[],i=h;i<e.length;i++)j.push("..");return j=j.concat(f.slice(h)),j.join("/")},c.sep="/",c.delimiter=":",c.dirname=function(a){var b=i(a),c=b[0],d=b[1];return c||d?(d&&(d=d.substr(0,d.length-1)),c+d):"."},c.basename=function(a,b){var c=i(a)[2];return b&&c.substr(-1*b.length)===b&&(c=c.substr(0,c.length-b.length)),c},c.extname=function(a){return i(a)[3]}},{__browserify_process:14,_shims:3,util:9}],7:[function(a,b,c){function d(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function e(a){return a.charCodeAt(0)}var f=c,g=a("util"),h=a("_shims"),i=a("buffer").Buffer;f.unescapeBuffer=function(a,b){for(var c,d,f,g=new i(a.length),h="CHAR",j=0,k=0;j<=a.length;j++){var l=a.charCodeAt(j);switch(h){case"CHAR":switch(l){case e("%"):c=0,d=0,h="HEX0";break;case e("+"):b&&(l=e(" "));default:g[k++]=l}break;case"HEX0":if(h="HEX1",f=l,e("0")<=l&&l<=e("9"))c=l-e("0");else if(e("a")<=l&&l<=e("f"))c=l-e("a")+10;else{if(!(e("A")<=l&&l<=e("F"))){g[k++]=e("%"),g[k++]=l,h="CHAR";break}c=l-e("A")+10}break;case"HEX1":if(h="CHAR",e("0")<=l&&l<=e("9"))d=l-e("0");else if(e("a")<=l&&l<=e("f"))d=l-e("a")+10;else{if(!(e("A")<=l&&l<=e("F"))){g[k++]=e("%"),g[k++]=f,g[k++]=l;break}d=l-e("A")+10}g[k++]=16*c+d}}return g.slice(0,k-1)},f.unescape=function(a,b){return f.unescapeBuffer(a,b).toString()},f.escape=function(a){return encodeURIComponent(a)};var j=function(a){return g.isString(a)?a:g.isBoolean(a)?a?"true":"false":g.isNumber(a)&&isFinite(a)?a:""};f.stringify=f.encode=function(a,b,c,d){return b=b||"&",c=c||"=",g.isNull(a)&&(a=void 0),g.isObject(a)?h.map(h.keys(a),function(d){var e=f.escape(j(d))+c;return g.isArray(a[d])?h.map(a[d],function(a){return e+f.escape(j(a))}).join(b):e+f.escape(j(a[d]))}).join(b):d?f.escape(j(d))+c+f.escape(j(a)):""},f.parse=f.decode=function(a,b,c,e){b=b||"&",c=c||"=";var h={};if(!g.isString(a)||0===a.length)return h;var i=/\+/g;a=a.split(b);var j=1e3;e&&g.isNumber(e.maxKeys)&&(j=e.maxKeys);var k=a.length;j>0&&k>j&&(k=j);for(var l=0;k>l;++l){var m,n,o,p,q=a[l].replace(i,"%20"),r=q.indexOf(c);r>=0?(m=q.substr(0,r),n=q.substr(r+1)):(m=q,n="");try{o=decodeURIComponent(m),p=decodeURIComponent(n)}catch(s){o=f.unescape(m,!0),p=f.unescape(n,!0)}d(h,o)?g.isArray(h[o])?h[o].push(p):h[o]=[h[o],p]:h[o]=p}return h}},{_shims:3,buffer:11,util:9}],8:[function(a,b,c){function d(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function e(a,b,c){if(a&&j.isObject(a)&&a instanceof d)return a;var e=new d;return e.parse(a,b,c),e}function f(a){return j.isString(a)&&(a=e(a)),a instanceof d?a.format():d.prototype.format.call(a)}function g(a,b){return e(a,!1,!0).resolve(b)}function h(a,b){return a?e(a,!1,!0).resolveObject(b):b}var i={encode:function(a){return a}},j=a("util"),k=a("_shims");c.parse=e,c.resolve=g,c.resolveObject=h,c.format=f,c.Url=d;var l=/^([a-z0-9.+-]+:)/i,m=/:[0-9]*$/,n=["<",">",'"',"`"," ","\r","\n","	"],o=["{","}","|","\\","^","`"].concat(n),p=["'"].concat(o),q=["%","/","?",";","#"].concat(p),r=["/","?","#"],s=255,t=/^[a-z0-9A-Z_-]{0,63}$/,u=/^([a-z0-9A-Z_-]{0,63})(.*)$/,v={javascript:!0,"javascript:":!0},w={javascript:!0,"javascript:":!0},x={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},y=a("querystring");d.prototype.parse=function(a,b,c){if(!j.isString(a))throw new TypeError("Parameter 'url' must be a string, not "+typeof a);var d=a;d=k.trim(d);var e=l.exec(d);if(e){e=e[0];var f=e.toLowerCase();this.protocol=f,d=d.substr(e.length)}if(c||e||d.match(/^\/\/[^@\/]+@[^@\/]+/)){var g="//"===d.substr(0,2);!g||e&&w[e]||(d=d.substr(2),this.slashes=!0)}if(!w[e]&&(g||e&&!x[e])){for(var h=-1,m=0;m<r.length;m++){var n=d.indexOf(r[m]);-1!==n&&(-1===h||h>n)&&(h=n)}var o,z;z=-1===h?d.lastIndexOf("@"):d.lastIndexOf("@",h),-1!==z&&(o=d.slice(0,z),d=d.slice(z+1),this.auth=decodeURIComponent(o)),h=-1;for(var m=0;m<q.length;m++){var n=d.indexOf(q[m]);-1!==n&&(-1===h||h>n)&&(h=n)}-1===h&&(h=d.length),this.host=d.slice(0,h),d=d.slice(h),this.parseHost(),this.hostname=this.hostname||"";var A="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!A)for(var B=this.hostname.split(/\./),m=0,C=B.length;C>m;m++){var D=B[m];if(D&&!D.match(t)){for(var E="",F=0,G=D.length;G>F;F++)E+=D.charCodeAt(F)>127?"x":D[F];if(!E.match(t)){var H=B.slice(0,m),I=B.slice(m+1),J=D.match(u);J&&(H.push(J[1]),I.unshift(J[2])),I.length&&(d="/"+I.join(".")+d),this.hostname=H.join(".");break}}}if(this.hostname=this.hostname.length>s?"":this.hostname.toLowerCase(),!A){for(var K=this.hostname.split("."),L=[],m=0;m<K.length;++m){var M=K[m];L.push(M.match(/[^A-Za-z0-9_-]/)?"xn--"+i.encode(M):M)}this.hostname=L.join(".")}var N=this.port?":"+this.port:"",O=this.hostname||"";this.host=O+N,this.href+=this.host,A&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==d[0]&&(d="/"+d))}if(!v[f])for(var m=0,C=p.length;C>m;m++){var P=p[m],Q=encodeURIComponent(P);Q===P&&(Q=escape(P)),d=d.split(P).join(Q)}var R=d.indexOf("#");-1!==R&&(this.hash=d.substr(R),d=d.slice(0,R));var S=d.indexOf("?");if(-1!==S?(this.search=d.substr(S),this.query=d.substr(S+1),b&&(this.query=y.parse(this.query)),d=d.slice(0,S)):b&&(this.search="",this.query={}),d&&(this.pathname=d),x[f]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var N=this.pathname||"",M=this.search||"";this.path=N+M}return this.href=this.format(),this},d.prototype.format=function(){var a=this.auth||"";a&&(a=encodeURIComponent(a),a=a.replace(/%3A/i,":"),a+="@");var b=this.protocol||"",c=this.pathname||"",d=this.hash||"",e=!1,f="";this.host?e=a+this.host:this.hostname&&(e=a+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(e+=":"+this.port)),this.query&&j.isObject(this.query)&&k.keys(this.query).length&&(f=y.stringify(this.query));var g=this.search||f&&"?"+f||"";return b&&":"!==k.substr(b,-1)&&(b+=":"),this.slashes||(!b||x[b])&&e!==!1?(e="//"+(e||""),c&&"/"!==c.charAt(0)&&(c="/"+c)):e||(e=""),d&&"#"!==d.charAt(0)&&(d="#"+d),g&&"?"!==g.charAt(0)&&(g="?"+g),c=c.replace(/[?#]/g,function(a){return encodeURIComponent(a)}),g=g.replace("#","%23"),b+e+c+g+d},d.prototype.resolve=function(a){return this.resolveObject(e(a,!1,!0)).format()},d.prototype.resolveObject=function(a){if(j.isString(a)){var b=new d;b.parse(a,!1,!0),a=b}var c=new d;if(k.forEach(k.keys(this),function(a){c[a]=this[a]},this),c.hash=a.hash,""===a.href)return c.href=c.format(),c;if(a.slashes&&!a.protocol)return k.forEach(k.keys(a),function(b){"protocol"!==b&&(c[b]=a[b])}),x[c.protocol]&&c.hostname&&!c.pathname&&(c.path=c.pathname="/"),c.href=c.format(),c;if(a.protocol&&a.protocol!==c.protocol){if(!x[a.protocol])return k.forEach(k.keys(a),function(b){c[b]=a[b]}),c.href=c.format(),c;if(c.protocol=a.protocol,a.host||w[a.protocol])c.pathname=a.pathname;else{for(var e=(a.pathname||"").split("/");e.length&&!(a.host=e.shift()););a.host||(a.host=""),a.hostname||(a.hostname=""),""!==e[0]&&e.unshift(""),e.length<2&&e.unshift(""),c.pathname=e.join("/")}if(c.search=a.search,c.query=a.query,c.host=a.host||"",c.auth=a.auth,c.hostname=a.hostname||a.host,c.port=a.port,c.pathname||c.search){var f=c.pathname||"",g=c.search||"";c.path=f+g}return c.slashes=c.slashes||a.slashes,c.href=c.format(),c}var h=c.pathname&&"/"===c.pathname.charAt(0),i=a.host||a.pathname&&"/"===a.pathname.charAt(0),l=i||h||c.host&&a.pathname,m=l,n=c.pathname&&c.pathname.split("/")||[],e=a.pathname&&a.pathname.split("/")||[],o=c.protocol&&!x[c.protocol];if(o&&(c.hostname="",c.port=null,c.host&&(""===n[0]?n[0]=c.host:n.unshift(c.host)),c.host="",a.protocol&&(a.hostname=null,a.port=null,a.host&&(""===e[0]?e[0]=a.host:e.unshift(a.host)),a.host=null),l=l&&(""===e[0]||""===n[0])),i)c.host=a.host||""===a.host?a.host:c.host,c.hostname=a.hostname||""===a.hostname?a.hostname:c.hostname,c.search=a.search,c.query=a.query,n=e;else if(e.length)n||(n=[]),n.pop(),n=n.concat(e),c.search=a.search,c.query=a.query;else if(!j.isNullOrUndefined(a.search)){if(o){c.hostname=c.host=n.shift();var p=c.host&&c.host.indexOf("@")>0?c.host.split("@"):!1;p&&(c.auth=p.shift(),c.host=c.hostname=p.shift())}return c.search=a.search,c.query=a.query,j.isNull(c.pathname)&&j.isNull(c.search)||(c.path=(c.pathname?c.pathname:"")+(c.search?c.search:"")),c.href=c.format(),c}if(!n.length)return c.pathname=null,c.path=c.search?"/"+c.search:null,c.href=c.format(),c;for(var q=n.slice(-1)[0],r=(c.host||a.host)&&("."===q||".."===q)||""===q,s=0,t=n.length;t>=0;t--)q=n[t],"."==q?n.splice(t,1):".."===q?(n.splice(t,1),s++):s&&(n.splice(t,1),s--);if(!l&&!m)for(;s--;s)n.unshift("..");!l||""===n[0]||n[0]&&"/"===n[0].charAt(0)||n.unshift(""),r&&"/"!==k.substr(n.join("/"),-1)&&n.push("");var u=""===n[0]||n[0]&&"/"===n[0].charAt(0);if(o){c.hostname=c.host=u?"":n.length?n.shift():"";var p=c.host&&c.host.indexOf("@")>0?c.host.split("@"):!1;p&&(c.auth=p.shift(),c.host=c.hostname=p.shift())}return l=l||c.host&&n.length,l&&!u&&n.unshift(""),n.length?c.pathname=n.join("/"):(c.pathname=null,c.path=null),j.isNull(c.pathname)&&j.isNull(c.search)||(c.path=(c.pathname?c.pathname:"")+(c.search?c.search:"")),c.auth=a.auth||c.auth,c.slashes=c.slashes||a.slashes,c.href=c.format(),c},d.prototype.parseHost=function(){var a=this.host,b=m.exec(a);b&&(b=b[0],":"!==b&&(this.port=b.substr(1)),a=a.substr(0,a.length-b.length)),a&&(this.hostname=a)}},{_shims:3,querystring:7,util:9}],9:[function(a,b,c){function d(a,b){var d={seen:[],stylize:f};return arguments.length>=3&&(d.depth=arguments[2]),arguments.length>=4&&(d.colors=arguments[3]),o(b)?d.showHidden=b:b&&c._extend(d,b),u(d.showHidden)&&(d.showHidden=!1),u(d.depth)&&(d.depth=2),u(d.colors)&&(d.colors=!1),u(d.customInspect)&&(d.customInspect=!0),d.colors&&(d.stylize=e),h(d,a,d.depth)}function e(a,b){var c=d.styles[b];return c?"["+d.colors[c][0]+"m"+a+"["+d.colors[c][1]+"m":a}function f(a,b){return a}function g(a){var b={};return G.forEach(a,function(a,c){b[a]=!0}),b}function h(a,b,d){if(a.customInspect&&b&&z(b.inspect)&&b.inspect!==c.inspect&&(!b.constructor||b.constructor.prototype!==b)){var e=b.inspect(d);return s(e)||(e=h(a,e,d)),e}var f=i(a,b);if(f)return f;var o=G.keys(b),p=g(o);if(a.showHidden&&(o=G.getOwnPropertyNames(b)),0===o.length){if(z(b)){var q=b.name?": "+b.name:"";return a.stylize("[Function"+q+"]","special")}if(v(b))return a.stylize(RegExp.prototype.toString.call(b),"regexp");if(x(b))return a.stylize(Date.prototype.toString.call(b),"date");if(y(b))return j(b)}var r="",t=!1,u=["{","}"];if(n(b)&&(t=!0,u=["[","]"]),z(b)){var w=b.name?": "+b.name:"";r=" [Function"+w+"]"}if(v(b)&&(r=" "+RegExp.prototype.toString.call(b)),x(b)&&(r=" "+Date.prototype.toUTCString.call(b)),y(b)&&(r=" "+j(b)),0===o.length&&(!t||0==b.length))return u[0]+r+u[1];if(0>d)return v(b)?a.stylize(RegExp.prototype.toString.call(b),"regexp"):a.stylize("[Object]","special");a.seen.push(b);var A;return A=t?k(a,b,d,p,o):o.map(function(c){return l(a,b,d,p,c,t)}),a.seen.pop(),m(A,r,u)}function i(a,b){if(u(b))return a.stylize("undefined","undefined");if(s(b)){var c="'"+JSON.stringify(b).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return a.stylize(c,"string")}return r(b)?a.stylize(""+b,"number"):o(b)?a.stylize(""+b,"boolean"):p(b)?a.stylize("null","null"):void 0}function j(a){return"["+Error.prototype.toString.call(a)+"]"}function k(a,b,c,d,e){for(var f=[],g=0,h=b.length;h>g;++g)f.push(F(b,String(g))?l(a,b,c,d,String(g),!0):"");return G.forEach(e,function(e){e.match(/^\d+$/)||f.push(l(a,b,c,d,e,!0))}),f}function l(a,b,c,d,e,f){var g,i,j;if(j=G.getOwnPropertyDescriptor(b,e)||{value:b[e]},j.get?i=j.set?a.stylize("[Getter/Setter]","special"):a.stylize("[Getter]","special"):j.set&&(i=a.stylize("[Setter]","special")),F(d,e)||(g="["+e+"]"),i||(G.indexOf(a.seen,j.value)<0?(i=p(c)?h(a,j.value,null):h(a,j.value,c-1),i.indexOf("\n")>-1&&(i=f?i.split("\n").map(function(a){return"  "+a}).join("\n").substr(2):"\n"+i.split("\n").map(function(a){return"   "+a}).join("\n"))):i=a.stylize("[Circular]","special")),u(g)){if(f&&e.match(/^\d+$/))return i;g=JSON.stringify(""+e),g.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(g=g.substr(1,g.length-2),g=a.stylize(g,"name")):(g=g.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),g=a.stylize(g,"string"))}return g+": "+i}function m(a,b,c){var d=0,e=G.reduce(a,function(a,b){return d++,b.indexOf("\n")>=0&&d++,a+b.replace(/\u001b\[\d\d?m/g,"").length+1},0);return e>60?c[0]+(""===b?"":b+"\n ")+" "+a.join(",\n  ")+" "+c[1]:c[0]+b+" "+a.join(", ")+" "+c[1]}function n(a){return G.isArray(a)}function o(a){return"boolean"==typeof a}function p(a){return null===a}function q(a){return null==a}function r(a){return"number"==typeof a}function s(a){return"string"==typeof a}function t(a){return"symbol"==typeof a}function u(a){return void 0===a}function v(a){return w(a)&&"[object RegExp]"===C(a)}function w(a){return"object"==typeof a&&a}function x(a){return w(a)&&"[object Date]"===C(a)}function y(a){return w(a)&&"[object Error]"===C(a)}function z(a){return"function"==typeof a}function A(a){return null===a||"boolean"==typeof a||"number"==typeof a||"string"==typeof a||"symbol"==typeof a||"undefined"==typeof a}function B(a){return a&&"object"==typeof a&&"function"==typeof a.copy&&"function"==typeof a.fill&&"function"==typeof a.binarySlice}function C(a){return Object.prototype.toString.call(a)}function D(a){return 10>a?"0"+a.toString(10):a.toString(10)}function E(){var a=new Date,b=[D(a.getHours()),D(a.getMinutes()),D(a.getSeconds())].join(":");return[a.getDate(),I[a.getMonth()],b].join(" ")}function F(a,b){return Object.prototype.hasOwnProperty.call(a,b)}var G=a("_shims"),H=/%[sdj%]/g;c.format=function(a){if(!s(a)){for(var b=[],c=0;c<arguments.length;c++)b.push(d(arguments[c]));return b.join(" ");

}for(var c=1,e=arguments,f=e.length,g=String(a).replace(H,function(a){if("%%"===a)return"%";if(c>=f)return a;switch(a){case"%s":return String(e[c++]);case"%d":return Number(e[c++]);case"%j":try{return JSON.stringify(e[c++])}catch(b){return"[Circular]"}default:return a}}),h=e[c];f>c;h=e[++c])g+=p(h)||!w(h)?" "+h:" "+d(h);return g},c.inspect=d,d.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},d.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},c.isArray=n,c.isBoolean=o,c.isNull=p,c.isNullOrUndefined=q,c.isNumber=r,c.isString=s,c.isSymbol=t,c.isUndefined=u,c.isRegExp=v,c.isObject=w,c.isDate=x,c.isError=y,c.isFunction=z,c.isPrimitive=A,c.isBuffer=B;var I=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];c.log=function(){console.log("%s - %s",E(),c.format.apply(c,arguments))},c.inherits=function(a,b){a.super_=b,a.prototype=G.create(b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}})},c._extend=function(a,b){if(!b||!w(b))return a;for(var c=G.keys(b),d=c.length;d--;)a[c[d]]=b[c[d]];return a}},{_shims:3}],10:[function(a,b,c){c.readIEEE754=function(a,b,c,d,e){var f,g,h=8*e-d-1,i=(1<<h)-1,j=i>>1,k=-7,l=c?0:e-1,m=c?1:-1,n=a[b+l];for(l+=m,f=n&(1<<-k)-1,n>>=-k,k+=h;k>0;f=256*f+a[b+l],l+=m,k-=8);for(g=f&(1<<-k)-1,f>>=-k,k+=d;k>0;g=256*g+a[b+l],l+=m,k-=8);if(0===f)f=1-j;else{if(f===i)return g?0/0:(n?-1:1)*(1/0);g+=Math.pow(2,d),f-=j}return(n?-1:1)*g*Math.pow(2,f-d)},c.writeIEEE754=function(a,b,c,d,e,f){var g,h,i,j=8*f-e-1,k=(1<<j)-1,l=k>>1,m=23===e?Math.pow(2,-24)-Math.pow(2,-77):0,n=d?f-1:0,o=d?-1:1,p=0>b||0===b&&0>1/b?1:0;for(b=Math.abs(b),isNaN(b)||b===1/0?(h=isNaN(b)?1:0,g=k):(g=Math.floor(Math.log(b)/Math.LN2),b*(i=Math.pow(2,-g))<1&&(g--,i*=2),b+=g+l>=1?m/i:m*Math.pow(2,1-l),b*i>=2&&(g++,i/=2),g+l>=k?(h=0,g=k):g+l>=1?(h=(b*i-1)*Math.pow(2,e),g+=l):(h=b*Math.pow(2,l-1)*Math.pow(2,e),g=0));e>=8;a[c+n]=255&h,n+=o,h/=256,e-=8);for(g=g<<e|h,j+=e;j>0;a[c+n]=255&g,n+=o,g/=256,j-=8);a[c+n-o]|=128*p}},{}],11:[function(a,b,c){function d(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")}function e(b,c,f){if(E||(E=a("assert")),!(this instanceof e))return new e(b,c,f);if(this.parent=this,this.offset=0,"base64"==c&&"string"==typeof b)for(b=d(b);b.length%4!=0;)b+="=";var h;if("number"==typeof f){this.length=g(c);for(var j=0;j<this.length;j++)this[j]=b.get(j+f)}else{switch(h=typeof b){case"number":this.length=g(b);break;case"string":this.length=e.byteLength(b,c);break;case"object":this.length=g(b.length);break;default:throw new TypeError("First argument needs to be a number, array or string.")}if(i(b))for(var j=0;j<this.length;j++)this[j]=b instanceof e?b.readUInt8(j):(b[j]%256+256)%256;else if("string"==h)this.length=this.write(b,0,c);else if("number"===h)for(var j=0;j<this.length;j++)this[j]=0}}function f(a,b,c){return"number"!=typeof a?c:(a=~~a,a>=b?b:a>=0?a:(a+=b,a>=0?a:0))}function g(a){return a=~~Math.ceil(+a),0>a?0:a}function h(a){return(Array.isArray||function(a){return"[object Array]"=={}.toString.apply(a)})(a)}function i(a){return h(a)||e.isBuffer(a)||a&&"object"==typeof a&&"number"==typeof a.length}function j(a){return 16>a?"0"+a.toString(16):a.toString(16)}function k(a){for(var b=[],c=0;c<a.length;c++)if(a.charCodeAt(c)<=127)b.push(a.charCodeAt(c));else for(var d=encodeURIComponent(a.charAt(c)).substr(1).split("%"),e=0;e<d.length;e++)b.push(parseInt(d[e],16));return b}function l(a){for(var b=[],c=0;c<a.length;c++)b.push(255&a.charCodeAt(c));return b}function m(b){return a("base64-js").toByteArray(b)}function n(a,b,c,d){for(var e=0;d>e&&!(e+c>=b.length||e>=a.length);)b[e+c]=a[e],e++;return e}function o(a){try{return decodeURIComponent(a)}catch(b){return String.fromCharCode(65533)}}function p(a,b,c,d){var e=0;return d||(E.ok("boolean"==typeof c,"missing or invalid endian"),E.ok(void 0!==b&&null!==b,"missing offset"),E.ok(b+1<a.length,"Trying to read beyond buffer length")),b>=a.length?0:(c?(e=a[b]<<8,b+1<a.length&&(e|=a[b+1])):(e=a[b],b+1<a.length&&(e|=a[b+1]<<8)),e)}function q(a,b,c,d){var e=0;return d||(E.ok("boolean"==typeof c,"missing or invalid endian"),E.ok(void 0!==b&&null!==b,"missing offset"),E.ok(b+3<a.length,"Trying to read beyond buffer length")),b>=a.length?0:(c?(b+1<a.length&&(e=a[b+1]<<16),b+2<a.length&&(e|=a[b+2]<<8),b+3<a.length&&(e|=a[b+3]),e+=a[b]<<24>>>0):(b+2<a.length&&(e=a[b+2]<<16),b+1<a.length&&(e|=a[b+1]<<8),e|=a[b],b+3<a.length&&(e+=a[b+3]<<24>>>0)),e)}function r(a,b,c,d){var e,f;return d||(E.ok("boolean"==typeof c,"missing or invalid endian"),E.ok(void 0!==b&&null!==b,"missing offset"),E.ok(b+1<a.length,"Trying to read beyond buffer length")),f=p(a,b,c,d),e=32768&f,e?-1*(65535-f+1):f}function s(a,b,c,d){var e,f;return d||(E.ok("boolean"==typeof c,"missing or invalid endian"),E.ok(void 0!==b&&null!==b,"missing offset"),E.ok(b+3<a.length,"Trying to read beyond buffer length")),f=q(a,b,c,d),e=2147483648&f,e?-1*(4294967295-f+1):f}function t(b,c,d,e){return e||(E.ok("boolean"==typeof d,"missing or invalid endian"),E.ok(c+3<b.length,"Trying to read beyond buffer length")),a("./buffer_ieee754").readIEEE754(b,c,d,23,4)}function u(b,c,d,e){return e||(E.ok("boolean"==typeof d,"missing or invalid endian"),E.ok(c+7<b.length,"Trying to read beyond buffer length")),a("./buffer_ieee754").readIEEE754(b,c,d,52,8)}function v(a,b){E.ok("number"==typeof a,"cannot write a non-number as a number"),E.ok(a>=0,"specified a negative value for writing an unsigned value"),E.ok(b>=a,"value is larger than maximum value for type"),E.ok(Math.floor(a)===a,"value has a fractional component")}function w(a,b,c,d,e){e||(E.ok(void 0!==b&&null!==b,"missing value"),E.ok("boolean"==typeof d,"missing or invalid endian"),E.ok(void 0!==c&&null!==c,"missing offset"),E.ok(c+1<a.length,"trying to write beyond buffer length"),v(b,65535));for(var f=0;f<Math.min(a.length-c,2);f++)a[c+f]=(b&255<<8*(d?1-f:f))>>>8*(d?1-f:f)}function x(a,b,c,d,e){e||(E.ok(void 0!==b&&null!==b,"missing value"),E.ok("boolean"==typeof d,"missing or invalid endian"),E.ok(void 0!==c&&null!==c,"missing offset"),E.ok(c+3<a.length,"trying to write beyond buffer length"),v(b,4294967295));for(var f=0;f<Math.min(a.length-c,4);f++)a[c+f]=b>>>8*(d?3-f:f)&255}function y(a,b,c){E.ok("number"==typeof a,"cannot write a non-number as a number"),E.ok(b>=a,"value larger than maximum allowed value"),E.ok(a>=c,"value smaller than minimum allowed value"),E.ok(Math.floor(a)===a,"value has a fractional component")}function z(a,b,c){E.ok("number"==typeof a,"cannot write a non-number as a number"),E.ok(b>=a,"value larger than maximum allowed value"),E.ok(a>=c,"value smaller than minimum allowed value")}function A(a,b,c,d,e){e||(E.ok(void 0!==b&&null!==b,"missing value"),E.ok("boolean"==typeof d,"missing or invalid endian"),E.ok(void 0!==c&&null!==c,"missing offset"),E.ok(c+1<a.length,"Trying to write beyond buffer length"),y(b,32767,-32768)),b>=0?w(a,b,c,d,e):w(a,65535+b+1,c,d,e)}function B(a,b,c,d,e){e||(E.ok(void 0!==b&&null!==b,"missing value"),E.ok("boolean"==typeof d,"missing or invalid endian"),E.ok(void 0!==c&&null!==c,"missing offset"),E.ok(c+3<a.length,"Trying to write beyond buffer length"),y(b,2147483647,-2147483648)),b>=0?x(a,b,c,d,e):x(a,4294967295+b+1,c,d,e)}function C(b,c,d,e,f){f||(E.ok(void 0!==c&&null!==c,"missing value"),E.ok("boolean"==typeof e,"missing or invalid endian"),E.ok(void 0!==d&&null!==d,"missing offset"),E.ok(d+3<b.length,"Trying to write beyond buffer length"),z(c,3.4028234663852886e38,-3.4028234663852886e38)),a("./buffer_ieee754").writeIEEE754(b,c,d,e,23,4)}function D(b,c,d,e,f){f||(E.ok(void 0!==c&&null!==c,"missing value"),E.ok("boolean"==typeof e,"missing or invalid endian"),E.ok(void 0!==d&&null!==d,"missing offset"),E.ok(d+7<b.length,"Trying to write beyond buffer length"),z(c,1.7976931348623157e308,-1.7976931348623157e308)),a("./buffer_ieee754").writeIEEE754(b,c,d,e,52,8)}var E;c.Buffer=e,c.SlowBuffer=e,e.poolSize=8192,c.INSPECT_MAX_BYTES=50,e.prototype.get=function(a){if(0>a||a>=this.length)throw new Error("oob");return this[a]},e.prototype.set=function(a,b){if(0>a||a>=this.length)throw new Error("oob");return this[a]=b},e.byteLength=function(a,b){switch(b||"utf8"){case"hex":return a.length/2;case"utf8":case"utf-8":return k(a).length;case"ascii":case"binary":return a.length;case"base64":return m(a).length;default:throw new Error("Unknown encoding")}},e.prototype.utf8Write=function(a,b,c){return e._charsWritten=n(k(a),this,b,c)},e.prototype.asciiWrite=function(a,b,c){return e._charsWritten=n(l(a),this,b,c)},e.prototype.binaryWrite=e.prototype.asciiWrite,e.prototype.base64Write=function(a,b,c){return e._charsWritten=n(m(a),this,b,c)},e.prototype.base64Slice=function(b,c){var d=Array.prototype.slice.apply(this,arguments);return a("base64-js").fromByteArray(d)},e.prototype.utf8Slice=function(){for(var a=Array.prototype.slice.apply(this,arguments),b="",c="",d=0;d<a.length;)a[d]<=127?(b+=o(c)+String.fromCharCode(a[d]),c=""):c+="%"+a[d].toString(16),d++;return b+o(c)},e.prototype.asciiSlice=function(){for(var a=Array.prototype.slice.apply(this,arguments),b="",c=0;c<a.length;c++)b+=String.fromCharCode(a[c]);return b},e.prototype.binarySlice=e.prototype.asciiSlice,e.prototype.inspect=function(){for(var a=[],b=this.length,d=0;b>d;d++)if(a[d]=j(this[d]),d==c.INSPECT_MAX_BYTES){a[d+1]="...";break}return"<Buffer "+a.join(" ")+">"},e.prototype.hexSlice=function(a,b){var c=this.length;(!a||0>a)&&(a=0),(!b||0>b||b>c)&&(b=c);for(var d="",e=a;b>e;e++)d+=j(this[e]);return d},e.prototype.toString=function(a,b,c){if(a=String(a||"utf8").toLowerCase(),b=+b||0,"undefined"==typeof c&&(c=this.length),+c==b)return"";switch(a){case"hex":return this.hexSlice(b,c);case"utf8":case"utf-8":return this.utf8Slice(b,c);case"ascii":return this.asciiSlice(b,c);case"binary":return this.binarySlice(b,c);case"base64":return this.base64Slice(b,c);case"ucs2":case"ucs-2":return this.ucs2Slice(b,c);default:throw new Error("Unknown encoding")}},e.prototype.hexWrite=function(a,b,c){b=+b||0;var d=this.length-b;c?(c=+c,c>d&&(c=d)):c=d;var f=a.length;if(f%2)throw new Error("Invalid hex string");c>f/2&&(c=f/2);for(var g=0;c>g;g++){var h=parseInt(a.substr(2*g,2),16);if(isNaN(h))throw new Error("Invalid hex string");this[b+g]=h}return e._charsWritten=2*g,g},e.prototype.write=function(a,b,c,d){if(isFinite(b))isFinite(c)||(d=c,c=void 0);else{var e=d;d=b,b=c,c=e}b=+b||0;var f=this.length-b;switch(c?(c=+c,c>f&&(c=f)):c=f,d=String(d||"utf8").toLowerCase()){case"hex":return this.hexWrite(a,b,c);case"utf8":case"utf-8":return this.utf8Write(a,b,c);case"ascii":return this.asciiWrite(a,b,c);case"binary":return this.binaryWrite(a,b,c);case"base64":return this.base64Write(a,b,c);case"ucs2":case"ucs-2":return this.ucs2Write(a,b,c);default:throw new Error("Unknown encoding")}},e.prototype.slice=function(a,b){var c=this.length;return a=f(a,c,0),b=f(b,c,c),new e(this,b-a,+a)},e.prototype.copy=function(a,b,c,d){var e=this;if(c||(c=0),(void 0===d||isNaN(d))&&(d=this.length),b||(b=0),c>d)throw new Error("sourceEnd < sourceStart");if(d===c)return 0;if(0==a.length||0==e.length)return 0;if(0>b||b>=a.length)throw new Error("targetStart out of bounds");if(0>c||c>=e.length)throw new Error("sourceStart out of bounds");if(0>d||d>e.length)throw new Error("sourceEnd out of bounds");d>this.length&&(d=this.length),a.length-b<d-c&&(d=a.length-b+c);for(var f=[],g=c;d>g;g++)E.ok("undefined"!=typeof this[g],"copying undefined buffer bytes!"),f.push(this[g]);for(var g=b;g<b+f.length;g++)a[g]=f[g-b]},e.prototype.fill=function(a,b,c){if(a||(a=0),b||(b=0),c||(c=this.length),"string"==typeof a&&(a=a.charCodeAt(0)),"number"!=typeof a||isNaN(a))throw new Error("value is not a number");if(b>c)throw new Error("end < start");if(c===b)return 0;if(0==this.length)return 0;if(0>b||b>=this.length)throw new Error("start out of bounds");if(0>c||c>this.length)throw new Error("end out of bounds");for(var d=b;c>d;d++)this[d]=a},e.isBuffer=function(a){return a instanceof e},e.concat=function(a,b){if(!h(a))throw new Error("Usage: Buffer.concat(list, [totalLength])\n       list should be an Array.");if(0===a.length)return new e(0);if(1===a.length)return a[0];if("number"!=typeof b){b=0;for(var c=0;c<a.length;c++){var d=a[c];b+=d.length}}for(var f=new e(b),g=0,c=0;c<a.length;c++){var d=a[c];d.copy(f,g),g+=d.length}return f},e.isEncoding=function(a){switch((a+"").toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}},e.prototype.readUInt8=function(a,b){var c=this;return b||(E.ok(void 0!==a&&null!==a,"missing offset"),E.ok(a<c.length,"Trying to read beyond buffer length")),a>=c.length?void 0:c[a]},e.prototype.readUInt16LE=function(a,b){return p(this,a,!1,b)},e.prototype.readUInt16BE=function(a,b){return p(this,a,!0,b)},e.prototype.readUInt32LE=function(a,b){return q(this,a,!1,b)},e.prototype.readUInt32BE=function(a,b){return q(this,a,!0,b)},e.prototype.readInt8=function(a,b){var c,d=this;return b||(E.ok(void 0!==a&&null!==a,"missing offset"),E.ok(a<d.length,"Trying to read beyond buffer length")),a>=d.length?void 0:(c=128&d[a],c?-1*(255-d[a]+1):d[a])},e.prototype.readInt16LE=function(a,b){return r(this,a,!1,b)},e.prototype.readInt16BE=function(a,b){return r(this,a,!0,b)},e.prototype.readInt32LE=function(a,b){return s(this,a,!1,b)},e.prototype.readInt32BE=function(a,b){return s(this,a,!0,b)},e.prototype.readFloatLE=function(a,b){return t(this,a,!1,b)},e.prototype.readFloatBE=function(a,b){return t(this,a,!0,b)},e.prototype.readDoubleLE=function(a,b){return u(this,a,!1,b)},e.prototype.readDoubleBE=function(a,b){return u(this,a,!0,b)},e.prototype.writeUInt8=function(a,b,c){var d=this;c||(E.ok(void 0!==a&&null!==a,"missing value"),E.ok(void 0!==b&&null!==b,"missing offset"),E.ok(b<d.length,"trying to write beyond buffer length"),v(a,255)),b<d.length&&(d[b]=a)},e.prototype.writeUInt16LE=function(a,b,c){w(this,a,b,!1,c)},e.prototype.writeUInt16BE=function(a,b,c){w(this,a,b,!0,c)},e.prototype.writeUInt32LE=function(a,b,c){x(this,a,b,!1,c)},e.prototype.writeUInt32BE=function(a,b,c){x(this,a,b,!0,c)},e.prototype.writeInt8=function(a,b,c){var d=this;c||(E.ok(void 0!==a&&null!==a,"missing value"),E.ok(void 0!==b&&null!==b,"missing offset"),E.ok(b<d.length,"Trying to write beyond buffer length"),y(a,127,-128)),a>=0?d.writeUInt8(a,b,c):d.writeUInt8(255+a+1,b,c)},e.prototype.writeInt16LE=function(a,b,c){A(this,a,b,!1,c)},e.prototype.writeInt16BE=function(a,b,c){A(this,a,b,!0,c)},e.prototype.writeInt32LE=function(a,b,c){B(this,a,b,!1,c)},e.prototype.writeInt32BE=function(a,b,c){B(this,a,b,!0,c)},e.prototype.writeFloatLE=function(a,b,c){C(this,a,b,!1,c)},e.prototype.writeFloatBE=function(a,b,c){C(this,a,b,!0,c)},e.prototype.writeDoubleLE=function(a,b,c){D(this,a,b,!1,c)},e.prototype.writeDoubleBE=function(a,b,c){D(this,a,b,!0,c)}},{"./buffer_ieee754":10,assert:4,"base64-js":12}],12:[function(a,b,c){var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(a){"use strict";function b(a){var b=a.charCodeAt(0);return b===g||b===l?62:b===h||b===m?63:i>b?-1:i+10>b?b-i+26+26:k+26>b?b-k:j+26>b?b-j+26:void 0}function c(a){function c(a){j[l++]=a}var d,e,g,h,i,j;if(a.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var k=a.length;i="="===a.charAt(k-2)?2:"="===a.charAt(k-1)?1:0,j=new f(3*a.length/4-i),g=i>0?a.length-4:a.length;var l=0;for(d=0,e=0;g>d;d+=4,e+=3)h=b(a.charAt(d))<<18|b(a.charAt(d+1))<<12|b(a.charAt(d+2))<<6|b(a.charAt(d+3)),c((16711680&h)>>16),c((65280&h)>>8),c(255&h);return 2===i?(h=b(a.charAt(d))<<2|b(a.charAt(d+1))>>4,c(255&h)):1===i&&(h=b(a.charAt(d))<<10|b(a.charAt(d+1))<<4|b(a.charAt(d+2))>>2,c(h>>8&255),c(255&h)),j}function e(a){function b(a){return d.charAt(a)}function c(a){return b(a>>18&63)+b(a>>12&63)+b(a>>6&63)+b(63&a)}var e,f,g,h=a.length%3,i="";for(e=0,g=a.length-h;g>e;e+=3)f=(a[e]<<16)+(a[e+1]<<8)+a[e+2],i+=c(f);switch(h){case 1:f=a[a.length-1],i+=b(f>>2),i+=b(f<<4&63),i+="==";break;case 2:f=(a[a.length-2]<<8)+a[a.length-1],i+=b(f>>10),i+=b(f>>4&63),i+=b(f<<2&63),i+="="}return i}var f="undefined"!=typeof Uint8Array?Uint8Array:Array,g="+".charCodeAt(0),h="/".charCodeAt(0),i="0".charCodeAt(0),j="a".charCodeAt(0),k="A".charCodeAt(0),l="-".charCodeAt(0),m="_".charCodeAt(0);a.toByteArray=c,a.fromByteArray=e}("undefined"==typeof c?this.base64js={}:c)},{}],13:[function(a,b,c){a=function d(b,c,e){function f(h,i){if(!c[h]){if(!b[h]){var j="function"==typeof a&&a;if(!i&&j)return j(h,!0);if(g)return g(h,!0);throw new Error("Cannot find module '"+h+"'")}var k=c[h]={exports:{}};b[h][0].call(k.exports,function(a){var c=b[h][1][a];return f(c?c:a)},k,k.exports,d,b,c,e)}return c[h].exports}for(var g="function"==typeof a&&a,h=0;h<e.length;h++)f(e[h]);return f}({1:[function(a,b,c){c.readIEEE754=function(a,b,c,d,e){var f,g,h=8*e-d-1,i=(1<<h)-1,j=i>>1,k=-7,l=c?0:e-1,m=c?1:-1,n=a[b+l];for(l+=m,f=n&(1<<-k)-1,n>>=-k,k+=h;k>0;f=256*f+a[b+l],l+=m,k-=8);for(g=f&(1<<-k)-1,f>>=-k,k+=d;k>0;g=256*g+a[b+l],l+=m,k-=8);if(0===f)f=1-j;else{if(f===i)return g?0/0:(n?-1:1)*(1/0);g+=Math.pow(2,d),f-=j}return(n?-1:1)*g*Math.pow(2,f-d)},c.writeIEEE754=function(a,b,c,d,e,f){var g,h,i,j=8*f-e-1,k=(1<<j)-1,l=k>>1,m=23===e?Math.pow(2,-24)-Math.pow(2,-77):0,n=d?f-1:0,o=d?-1:1,p=0>b||0===b&&0>1/b?1:0;for(b=Math.abs(b),isNaN(b)||b===1/0?(h=isNaN(b)?1:0,g=k):(g=Math.floor(Math.log(b)/Math.LN2),b*(i=Math.pow(2,-g))<1&&(g--,i*=2),b+=g+l>=1?m/i:m*Math.pow(2,1-l),b*i>=2&&(g++,i/=2),g+l>=k?(h=0,g=k):g+l>=1?(h=(b*i-1)*Math.pow(2,e),g+=l):(h=b*Math.pow(2,l-1)*Math.pow(2,e),g=0));e>=8;a[c+n]=255&h,n+=o,h/=256,e-=8);for(g=g<<e|h,j+=e;j>0;a[c+n]=255&g,n+=o,g/=256,j-=8);a[c+n-o]|=128*p}},{}],q9TxCC:[function(a,b,c){function d(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")}function e(b,c,f){if(E||(E=a("assert")),!(this instanceof e))return new e(b,c,f);if(this.parent=this,this.offset=0,"base64"==c&&"string"==typeof b)for(b=d(b);b.length%4!=0;)b+="=";var h;if("number"==typeof f){this.length=g(c);for(var j=0;j<this.length;j++)this[j]=b.get(j+f)}else{switch(h=typeof b){case"number":this.length=g(b);break;case"string":this.length=e.byteLength(b,c);break;case"object":this.length=g(b.length);break;default:throw new Error("First argument needs to be a number, array or string.")}if(i(b))for(var j=0;j<this.length;j++)this[j]=b instanceof e?b.readUInt8(j):b[j];else if("string"==h)this.length=this.write(b,0,c);else if("number"===h)for(var j=0;j<this.length;j++)this[j]=0}}function f(a,b,c){return"number"!=typeof a?c:(a=~~a,a>=b?b:a>=0?a:(a+=b,a>=0?a:0))}function g(a){return a=~~Math.ceil(+a),0>a?0:a}function h(a){return(Array.isArray||function(a){return"[object Array]"=={}.toString.apply(a)})(a)}function i(a){return h(a)||e.isBuffer(a)||a&&"object"==typeof a&&"number"==typeof a.length}function j(a){return 16>a?"0"+a.toString(16):a.toString(16)}function k(a){for(var b=[],c=0;c<a.length;c++)if(a.charCodeAt(c)<=127)b.push(a.charCodeAt(c));else for(var d=encodeURIComponent(a.charAt(c)).substr(1).split("%"),e=0;e<d.length;e++)b.push(parseInt(d[e],16));return b}function l(a){for(var b=[],c=0;c<a.length;c++)b.push(255&a.charCodeAt(c));return b}function m(b){return a("base64-js").toByteArray(b)}function n(a,b,c,d){for(var e=0;d>e&&!(e+c>=b.length||e>=a.length);)b[e+c]=a[e],e++;return e}function o(a){try{return decodeURIComponent(a)}catch(b){return String.fromCharCode(65533)}}function p(a,b,c,d){var e=0;return d||(E.ok("boolean"==typeof c,"missing or invalid endian"),E.ok(void 0!==b&&null!==b,"missing offset"),E.ok(b+1<a.length,"Trying to read beyond buffer length")),b>=a.length?0:(c?(e=a[b]<<8,b+1<a.length&&(e|=a[b+1])):(e=a[b],b+1<a.length&&(e|=a[b+1]<<8)),e)}function q(a,b,c,d){var e=0;return d||(E.ok("boolean"==typeof c,"missing or invalid endian"),E.ok(void 0!==b&&null!==b,"missing offset"),E.ok(b+3<a.length,"Trying to read beyond buffer length")),b>=a.length?0:(c?(b+1<a.length&&(e=a[b+1]<<16),b+2<a.length&&(e|=a[b+2]<<8),b+3<a.length&&(e|=a[b+3]),e+=a[b]<<24>>>0):(b+2<a.length&&(e=a[b+2]<<16),b+1<a.length&&(e|=a[b+1]<<8),e|=a[b],b+3<a.length&&(e+=a[b+3]<<24>>>0)),e)}function r(a,b,c,d){var e,f;return d||(E.ok("boolean"==typeof c,"missing or invalid endian"),E.ok(void 0!==b&&null!==b,"missing offset"),E.ok(b+1<a.length,"Trying to read beyond buffer length")),f=p(a,b,c,d),e=32768&f,e?-1*(65535-f+1):f}function s(a,b,c,d){var e,f;return d||(E.ok("boolean"==typeof c,"missing or invalid endian"),E.ok(void 0!==b&&null!==b,"missing offset"),E.ok(b+3<a.length,"Trying to read beyond buffer length")),f=q(a,b,c,d),e=2147483648&f,e?-1*(4294967295-f+1):f}function t(b,c,d,e){return e||(E.ok("boolean"==typeof d,"missing or invalid endian"),E.ok(c+3<b.length,"Trying to read beyond buffer length")),a("./buffer_ieee754").readIEEE754(b,c,d,23,4)}function u(b,c,d,e){return e||(E.ok("boolean"==typeof d,"missing or invalid endian"),E.ok(c+7<b.length,"Trying to read beyond buffer length")),a("./buffer_ieee754").readIEEE754(b,c,d,52,8)}function v(a,b){E.ok("number"==typeof a,"cannot write a non-number as a number"),E.ok(a>=0,"specified a negative value for writing an unsigned value"),E.ok(b>=a,"value is larger than maximum value for type"),E.ok(Math.floor(a)===a,"value has a fractional component")}function w(a,b,c,d,e){e||(E.ok(void 0!==b&&null!==b,"missing value"),E.ok("boolean"==typeof d,"missing or invalid endian"),E.ok(void 0!==c&&null!==c,"missing offset"),E.ok(c+1<a.length,"trying to write beyond buffer length"),v(b,65535));for(var f=0;f<Math.min(a.length-c,2);f++)a[c+f]=(b&255<<8*(d?1-f:f))>>>8*(d?1-f:f)}function x(a,b,c,d,e){e||(E.ok(void 0!==b&&null!==b,"missing value"),E.ok("boolean"==typeof d,"missing or invalid endian"),E.ok(void 0!==c&&null!==c,"missing offset"),E.ok(c+3<a.length,"trying to write beyond buffer length"),v(b,4294967295));for(var f=0;f<Math.min(a.length-c,4);f++)a[c+f]=b>>>8*(d?3-f:f)&255}function y(a,b,c){E.ok("number"==typeof a,"cannot write a non-number as a number"),E.ok(b>=a,"value larger than maximum allowed value"),E.ok(a>=c,"value smaller than minimum allowed value"),E.ok(Math.floor(a)===a,"value has a fractional component")}function z(a,b,c){E.ok("number"==typeof a,"cannot write a non-number as a number"),E.ok(b>=a,"value larger than maximum allowed value"),E.ok(a>=c,"value smaller than minimum allowed value")}function A(a,b,c,d,e){e||(E.ok(void 0!==b&&null!==b,"missing value"),E.ok("boolean"==typeof d,"missing or invalid endian"),E.ok(void 0!==c&&null!==c,"missing offset"),E.ok(c+1<a.length,"Trying to write beyond buffer length"),y(b,32767,-32768)),b>=0?w(a,b,c,d,e):w(a,65535+b+1,c,d,e)}function B(a,b,c,d,e){e||(E.ok(void 0!==b&&null!==b,"missing value"),E.ok("boolean"==typeof d,"missing or invalid endian"),E.ok(void 0!==c&&null!==c,"missing offset"),E.ok(c+3<a.length,"Trying to write beyond buffer length"),y(b,2147483647,-2147483648)),b>=0?x(a,b,c,d,e):x(a,4294967295+b+1,c,d,e)}function C(b,c,d,e,f){f||(E.ok(void 0!==c&&null!==c,"missing value"),E.ok("boolean"==typeof e,"missing or invalid endian"),E.ok(void 0!==d&&null!==d,"missing offset"),E.ok(d+3<b.length,"Trying to write beyond buffer length"),z(c,3.4028234663852886e38,-3.4028234663852886e38)),a("./buffer_ieee754").writeIEEE754(b,c,d,e,23,4)}function D(b,c,d,e,f){f||(E.ok(void 0!==c&&null!==c,"missing value"),E.ok("boolean"==typeof e,"missing or invalid endian"),E.ok(void 0!==d&&null!==d,"missing offset"),E.ok(d+7<b.length,"Trying to write beyond buffer length"),z(c,1.7976931348623157e308,-1.7976931348623157e308)),a("./buffer_ieee754").writeIEEE754(b,c,d,e,52,8)}var E;c.Buffer=e,c.SlowBuffer=e,e.poolSize=8192,c.INSPECT_MAX_BYTES=50,e.prototype.get=function(a){if(0>a||a>=this.length)throw new Error("oob");return this[a]},e.prototype.set=function(a,b){if(0>a||a>=this.length)throw new Error("oob");return this[a]=b},e.byteLength=function(a,b){switch(b||"utf8"){case"hex":return a.length/2;case"utf8":case"utf-8":return k(a).length;case"ascii":case"binary":return a.length;case"base64":return m(a).length;default:throw new Error("Unknown encoding")}},e.prototype.utf8Write=function(a,b,c){return e._charsWritten=n(k(a),this,b,c)},e.prototype.asciiWrite=function(a,b,c){return e._charsWritten=n(l(a),this,b,c)},e.prototype.binaryWrite=e.prototype.asciiWrite,e.prototype.base64Write=function(a,b,c){return e._charsWritten=n(m(a),this,b,c)},e.prototype.base64Slice=function(b,c){var d=Array.prototype.slice.apply(this,arguments);return a("base64-js").fromByteArray(d)},e.prototype.utf8Slice=function(){for(var a=Array.prototype.slice.apply(this,arguments),b="",c="",d=0;d<a.length;)a[d]<=127?(b+=o(c)+String.fromCharCode(a[d]),c=""):c+="%"+a[d].toString(16),d++;return b+o(c)},e.prototype.asciiSlice=function(){for(var a=Array.prototype.slice.apply(this,arguments),b="",c=0;c<a.length;c++)b+=String.fromCharCode(a[c]);return b},e.prototype.binarySlice=e.prototype.asciiSlice,e.prototype.inspect=function(){for(var a=[],b=this.length,d=0;b>d;d++)if(a[d]=j(this[d]),d==c.INSPECT_MAX_BYTES){a[d+1]="...";break}return"<Buffer "+a.join(" ")+">"},e.prototype.hexSlice=function(a,b){var c=this.length;(!a||0>a)&&(a=0),(!b||0>b||b>c)&&(b=c);for(var d="",e=a;b>e;e++)d+=j(this[e]);return d},e.prototype.toString=function(a,b,c){if(a=String(a||"utf8").toLowerCase(),b=+b||0,"undefined"==typeof c&&(c=this.length),+c==b)return"";switch(a){case"hex":return this.hexSlice(b,c);case"utf8":case"utf-8":return this.utf8Slice(b,c);case"ascii":return this.asciiSlice(b,c);case"binary":return this.binarySlice(b,c);case"base64":return this.base64Slice(b,c);case"ucs2":case"ucs-2":return this.ucs2Slice(b,c);default:throw new Error("Unknown encoding")}},e.prototype.hexWrite=function(a,b,c){b=+b||0;var d=this.length-b;c?(c=+c,c>d&&(c=d)):c=d;var f=a.length;if(f%2)throw new Error("Invalid hex string");c>f/2&&(c=f/2);for(var g=0;c>g;g++){var h=parseInt(a.substr(2*g,2),16);if(isNaN(h))throw new Error("Invalid hex string");this[b+g]=h}return e._charsWritten=2*g,g},e.prototype.write=function(a,b,c,d){if(isFinite(b))isFinite(c)||(d=c,c=void 0);else{var e=d;d=b,b=c,c=e}b=+b||0;var f=this.length-b;switch(c?(c=+c,c>f&&(c=f)):c=f,d=String(d||"utf8").toLowerCase()){case"hex":return this.hexWrite(a,b,c);case"utf8":case"utf-8":return this.utf8Write(a,b,c);case"ascii":return this.asciiWrite(a,b,c);case"binary":return this.binaryWrite(a,b,c);case"base64":return this.base64Write(a,b,c);case"ucs2":case"ucs-2":return this.ucs2Write(a,b,c);default:throw new Error("Unknown encoding")}},e.prototype.slice=function(a,b){var c=this.length;return a=f(a,c,0),b=f(b,c,c),new e(this,b-a,+a)},e.prototype.copy=function(a,b,c,d){var e=this;if(c||(c=0),(void 0===d||isNaN(d))&&(d=this.length),b||(b=0),c>d)throw new Error("sourceEnd < sourceStart");if(d===c)return 0;if(0==a.length||0==e.length)return 0;if(0>b||b>=a.length)throw new Error("targetStart out of bounds");if(0>c||c>=e.length)throw new Error("sourceStart out of bounds");if(0>d||d>e.length)throw new Error("sourceEnd out of bounds");d>this.length&&(d=this.length),a.length-b<d-c&&(d=a.length-b+c);for(var f=[],g=c;d>g;g++)E.ok("undefined"!=typeof this[g],"copying undefined buffer bytes!"),f.push(this[g]);for(var g=b;g<b+f.length;g++)a[g]=f[g-b]},e.prototype.fill=function(a,b,c){if(a||(a=0),b||(b=0),c||(c=this.length),"string"==typeof a&&(a=a.charCodeAt(0)),"number"!=typeof a||isNaN(a))throw new Error("value is not a number");if(b>c)throw new Error("end < start");if(c===b)return 0;if(0==this.length)return 0;if(0>b||b>=this.length)throw new Error("start out of bounds");if(0>c||c>this.length)throw new Error("end out of bounds");for(var d=b;c>d;d++)this[d]=a},e.isBuffer=function(a){return a instanceof e||a instanceof e},e.concat=function(a,b){if(!h(a))throw new Error("Usage: Buffer.concat(list, [totalLength])\n       list should be an Array.");if(0===a.length)return new e(0);if(1===a.length)return a[0];if("number"!=typeof b){b=0;for(var c=0;c<a.length;c++){var d=a[c];b+=d.length}}for(var f=new e(b),g=0,c=0;c<a.length;c++){var d=a[c];d.copy(f,g),g+=d.length}return f},e.isEncoding=function(a){switch((a+"").toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}},e.prototype.readUInt8=function(a,b){var c=this;return b||(E.ok(void 0!==a&&null!==a,"missing offset"),E.ok(a<c.length,"Trying to read beyond buffer length")),a>=c.length?void 0:c[a]},e.prototype.readUInt16LE=function(a,b){return p(this,a,!1,b)},e.prototype.readUInt16BE=function(a,b){return p(this,a,!0,b)},e.prototype.readUInt32LE=function(a,b){return q(this,a,!1,b)},e.prototype.readUInt32BE=function(a,b){return q(this,a,!0,b)},e.prototype.readInt8=function(a,b){var c,d=this;return b||(E.ok(void 0!==a&&null!==a,"missing offset"),E.ok(a<d.length,"Trying to read beyond buffer length")),a>=d.length?void 0:(c=128&d[a],c?-1*(255-d[a]+1):d[a])},e.prototype.readInt16LE=function(a,b){return r(this,a,!1,b)},e.prototype.readInt16BE=function(a,b){return r(this,a,!0,b)},e.prototype.readInt32LE=function(a,b){return s(this,a,!1,b)},e.prototype.readInt32BE=function(a,b){return s(this,a,!0,b)},e.prototype.readFloatLE=function(a,b){return t(this,a,!1,b)},e.prototype.readFloatBE=function(a,b){return t(this,a,!0,b)},e.prototype.readDoubleLE=function(a,b){return u(this,a,!1,b)},e.prototype.readDoubleBE=function(a,b){return u(this,a,!0,b)},e.prototype.writeUInt8=function(a,b,c){var d=this;c||(E.ok(void 0!==a&&null!==a,"missing value"),E.ok(void 0!==b&&null!==b,"missing offset"),E.ok(b<d.length,"trying to write beyond buffer length"),v(a,255)),b<d.length&&(d[b]=a)},e.prototype.writeUInt16LE=function(a,b,c){w(this,a,b,!1,c)},e.prototype.writeUInt16BE=function(a,b,c){w(this,a,b,!0,c)},e.prototype.writeUInt32LE=function(a,b,c){x(this,a,b,!1,c)},e.prototype.writeUInt32BE=function(a,b,c){x(this,a,b,!0,c)},e.prototype.writeInt8=function(a,b,c){var d=this;c||(E.ok(void 0!==a&&null!==a,"missing value"),E.ok(void 0!==b&&null!==b,"missing offset"),E.ok(b<d.length,"Trying to write beyond buffer length"),y(a,127,-128)),a>=0?d.writeUInt8(a,b,c):d.writeUInt8(255+a+1,b,c)},e.prototype.writeInt16LE=function(a,b,c){A(this,a,b,!1,c)},e.prototype.writeInt16BE=function(a,b,c){A(this,a,b,!0,c)},e.prototype.writeInt32LE=function(a,b,c){B(this,a,b,!1,c)},e.prototype.writeInt32BE=function(a,b,c){B(this,a,b,!0,c)},e.prototype.writeFloatLE=function(a,b,c){C(this,a,b,!1,c)},e.prototype.writeFloatBE=function(a,b,c){C(this,a,b,!0,c)},e.prototype.writeDoubleLE=function(a,b,c){D(this,a,b,!1,c)},e.prototype.writeDoubleBE=function(a,b,c){D(this,a,b,!0,c)}},{"./buffer_ieee754":1,assert:6,"base64-js":4}],"buffer-browserify":[function(a,b,c){b.exports=a("q9TxCC")},{}],4:[function(a,b,c){!function(a){"use strict";function c(a){var b,c,d,f,g,h;if(a.length%4>0)throw"Invalid string. Length must be a multiple of 4";for(g=a.indexOf("="),g=g>0?a.length-g:0,h=[],d=g>0?a.length-4:a.length,b=0,c=0;d>b;b+=4,c+=3)f=e.indexOf(a[b])<<18|e.indexOf(a[b+1])<<12|e.indexOf(a[b+2])<<6|e.indexOf(a[b+3]),h.push((16711680&f)>>16),h.push((65280&f)>>8),h.push(255&f);return 2===g?(f=e.indexOf(a[b])<<2|e.indexOf(a[b+1])>>4,h.push(255&f)):1===g&&(f=e.indexOf(a[b])<<10|e.indexOf(a[b+1])<<4|e.indexOf(a[b+2])>>2,h.push(f>>8&255),h.push(255&f)),h}function d(a){function b(a){return e[a>>18&63]+e[a>>12&63]+e[a>>6&63]+e[63&a]}var c,d,f,g=a.length%3,h="";for(c=0,f=a.length-g;f>c;c+=3)d=(a[c]<<16)+(a[c+1]<<8)+a[c+2],h+=b(d);switch(g){case 1:d=a[a.length-1],h+=e[d>>2],h+=e[d<<4&63],h+="==";break;case 2:d=(a[a.length-2]<<8)+a[a.length-1],h+=e[d>>10],h+=e[d>>4&63],h+=e[d<<2&63],h+="="}return h}var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";b.exports.toByteArray=c,b.exports.fromByteArray=d}()},{}],5:[function(a,b,c){function d(a){return"[object Array]"===j.call(a)}function e(a,b){var c;if(null===a)c={__proto__:null};else{if("object"!=typeof a)throw new TypeError("typeof prototype["+typeof a+"] != 'object'");

var d=function(){};d.prototype=a,c=new d,c.__proto__=a}return"undefined"!=typeof b&&Object.defineProperties&&Object.defineProperties(c,b),c}function f(a){return"object"!=typeof a&&"function"!=typeof a||null===a}function g(a){if(f(a))throw new TypeError("Object.keys called on a non-object");var b=[];for(var c in a)k.call(a,c)&&b.push(c);return b}function h(a){if(f(a))throw new TypeError("Object.getOwnPropertyNames called on a non-object");var b=g(a);return c.isArray(a)&&-1===c.indexOf(a,"length")&&b.push("length"),b}function i(a,b){return{value:a[b]}}var j=Object.prototype.toString,k=Object.prototype.hasOwnProperty;c.isArray="function"==typeof Array.isArray?Array.isArray:d,c.indexOf=function(a,b){if(a.indexOf)return a.indexOf(b);for(var c=0;c<a.length;c++)if(b===a[c])return c;return-1},c.filter=function(a,b){if(a.filter)return a.filter(b);for(var c=[],d=0;d<a.length;d++)b(a[d],d,a)&&c.push(a[d]);return c},c.forEach=function(a,b,c){if(a.forEach)return a.forEach(b,c);for(var d=0;d<a.length;d++)b.call(c,a[d],d,a)},c.map=function(a,b){if(a.map)return a.map(b);for(var c=new Array(a.length),d=0;d<a.length;d++)c[d]=b(a[d],d,a);return c},c.reduce=function(a,b,c){if(a.reduce)return a.reduce(b,c);var d,e=!1;2<arguments.length&&(d=c,e=!0);for(var f=0,g=a.length;g>f;++f)a.hasOwnProperty(f)&&(e?d=b(d,a[f],f,a):(d=a[f],e=!0));return d},c.substr="b"!=="ab".substr(-1)?function(a,b,c){return 0>b&&(b=a.length+b),a.substr(b,c)}:function(a,b,c){return a.substr(b,c)},c.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},c.bind=function(){var a=Array.prototype.slice.call(arguments),b=a.shift();if(b.bind)return b.bind.apply(b,a);var c=a.shift();return function(){b.apply(c,a.concat([Array.prototype.slice.call(arguments)]))}},c.create="function"==typeof Object.create?Object.create:e;var l="function"==typeof Object.keys?Object.keys:g,m="function"==typeof Object.getOwnPropertyNames?Object.getOwnPropertyNames:h;if((new Error).hasOwnProperty("description")){var n=function(a,b){return"[object Error]"===j.call(a)&&(b=c.filter(b,function(a){return"description"!==a&&"number"!==a&&"message"!==a})),b};c.keys=function(a){return n(a,l(a))},c.getOwnPropertyNames=function(a){return n(a,m(a))}}else c.keys=l,c.getOwnPropertyNames=m;if("function"==typeof Object.getOwnPropertyDescriptor)try{Object.getOwnPropertyDescriptor({a:1},"a"),c.getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor}catch(o){c.getOwnPropertyDescriptor=function(a,b){try{return Object.getOwnPropertyDescriptor(a,b)}catch(c){return i(a,b)}}}else c.getOwnPropertyDescriptor=i},{}],6:[function(a,b,c){function d(a,b){return n.isUndefined(b)?""+b:!n.isNumber(b)||!isNaN(b)&&isFinite(b)?n.isFunction(b)||n.isRegExp(b)?b.toString():b:b.toString()}function e(a,b){return n.isString(a)?a.length<b?a:a.slice(0,b):a}function f(a){return e(JSON.stringify(a.actual,d),128)+" "+a.operator+" "+e(JSON.stringify(a.expected,d),128)}function g(a,b,c,d,e){throw new q.AssertionError({message:c,actual:a,expected:b,operator:d,stackStartFunction:e})}function h(a,b){a||g(a,!0,b,"==",q.ok)}function i(a,b){if(a===b)return!0;if(n.isBuffer(a)&&n.isBuffer(b)){if(a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0}return n.isDate(a)&&n.isDate(b)?a.getTime()===b.getTime():n.isRegExp(a)&&n.isRegExp(b)?a.source===b.source&&a.global===b.global&&a.multiline===b.multiline&&a.lastIndex===b.lastIndex&&a.ignoreCase===b.ignoreCase:n.isObject(a)||n.isObject(b)?k(a,b):a==b}function j(a){return"[object Arguments]"==Object.prototype.toString.call(a)}function k(a,b){if(n.isNullOrUndefined(a)||n.isNullOrUndefined(b))return!1;if(a.prototype!==b.prototype)return!1;if(j(a))return j(b)?(a=p.call(a),b=p.call(b),i(a,b)):!1;try{var c,d,e=o.keys(a),f=o.keys(b)}catch(g){return!1}if(e.length!=f.length)return!1;for(e.sort(),f.sort(),d=e.length-1;d>=0;d--)if(e[d]!=f[d])return!1;for(d=e.length-1;d>=0;d--)if(c=e[d],!i(a[c],b[c]))return!1;return!0}function l(a,b){return a&&b?"[object RegExp]"==Object.prototype.toString.call(b)?b.test(a):a instanceof b?!0:b.call({},a)===!0?!0:!1:!1}function m(a,b,c,d){var e;n.isString(c)&&(d=c,c=null);try{b()}catch(f){e=f}if(d=(c&&c.name?" ("+c.name+").":".")+(d?" "+d:"."),a&&!e&&g(e,c,"Missing expected exception"+d),!a&&l(e,c)&&g(e,c,"Got unwanted exception"+d),a&&e&&c&&!l(e,c)||!a&&e)throw e}var n=a("util"),o=a("_shims"),p=Array.prototype.slice,q=b.exports=h;q.AssertionError=function(a){this.name="AssertionError",this.actual=a.actual,this.expected=a.expected,this.operator=a.operator,this.message=a.message||f(this)},n.inherits(q.AssertionError,Error),q.fail=g,q.ok=h,q.equal=function(a,b,c){a!=b&&g(a,b,c,"==",q.equal)},q.notEqual=function(a,b,c){a==b&&g(a,b,c,"!=",q.notEqual)},q.deepEqual=function(a,b,c){i(a,b)||g(a,b,c,"deepEqual",q.deepEqual)},q.notDeepEqual=function(a,b,c){i(a,b)&&g(a,b,c,"notDeepEqual",q.notDeepEqual)},q.strictEqual=function(a,b,c){a!==b&&g(a,b,c,"===",q.strictEqual)},q.notStrictEqual=function(a,b,c){a===b&&g(a,b,c,"!==",q.notStrictEqual)},q["throws"]=function(a,b,c){m.apply(this,[!0].concat(p.call(arguments)))},q.doesNotThrow=function(a,b){m.apply(this,[!1].concat(p.call(arguments)))},q.ifError=function(a){if(a)throw a}},{_shims:5,util:7}],7:[function(a,b,c){function d(a,b){var d={seen:[],stylize:f};return arguments.length>=3&&(d.depth=arguments[2]),arguments.length>=4&&(d.colors=arguments[3]),o(b)?d.showHidden=b:b&&c._extend(d,b),u(d.showHidden)&&(d.showHidden=!1),u(d.depth)&&(d.depth=2),u(d.colors)&&(d.colors=!1),u(d.customInspect)&&(d.customInspect=!0),d.colors&&(d.stylize=e),h(d,a,d.depth)}function e(a,b){var c=d.styles[b];return c?"["+d.colors[c][0]+"m"+a+"["+d.colors[c][1]+"m":a}function f(a,b){return a}function g(a){var b={};return G.forEach(a,function(a,c){b[a]=!0}),b}function h(a,b,d){if(a.customInspect&&b&&z(b.inspect)&&b.inspect!==c.inspect&&(!b.constructor||b.constructor.prototype!==b)){var e=b.inspect(d);return s(e)||(e=h(a,e,d)),e}var f=i(a,b);if(f)return f;var o=G.keys(b),p=g(o);if(a.showHidden&&(o=G.getOwnPropertyNames(b)),0===o.length){if(z(b)){var q=b.name?": "+b.name:"";return a.stylize("[Function"+q+"]","special")}if(v(b))return a.stylize(RegExp.prototype.toString.call(b),"regexp");if(x(b))return a.stylize(Date.prototype.toString.call(b),"date");if(y(b))return j(b)}var r="",t=!1,u=["{","}"];if(n(b)&&(t=!0,u=["[","]"]),z(b)){var w=b.name?": "+b.name:"";r=" [Function"+w+"]"}if(v(b)&&(r=" "+RegExp.prototype.toString.call(b)),x(b)&&(r=" "+Date.prototype.toUTCString.call(b)),y(b)&&(r=" "+j(b)),0===o.length&&(!t||0==b.length))return u[0]+r+u[1];if(0>d)return v(b)?a.stylize(RegExp.prototype.toString.call(b),"regexp"):a.stylize("[Object]","special");a.seen.push(b);var A;return A=t?k(a,b,d,p,o):o.map(function(c){return l(a,b,d,p,c,t)}),a.seen.pop(),m(A,r,u)}function i(a,b){if(u(b))return a.stylize("undefined","undefined");if(s(b)){var c="'"+JSON.stringify(b).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return a.stylize(c,"string")}return r(b)?a.stylize(""+b,"number"):o(b)?a.stylize(""+b,"boolean"):p(b)?a.stylize("null","null"):void 0}function j(a){return"["+Error.prototype.toString.call(a)+"]"}function k(a,b,c,d,e){for(var f=[],g=0,h=b.length;h>g;++g)f.push(F(b,String(g))?l(a,b,c,d,String(g),!0):"");return G.forEach(e,function(e){e.match(/^\d+$/)||f.push(l(a,b,c,d,e,!0))}),f}function l(a,b,c,d,e,f){var g,i,j;if(j=G.getOwnPropertyDescriptor(b,e)||{value:b[e]},j.get?i=j.set?a.stylize("[Getter/Setter]","special"):a.stylize("[Getter]","special"):j.set&&(i=a.stylize("[Setter]","special")),F(d,e)||(g="["+e+"]"),i||(G.indexOf(a.seen,j.value)<0?(i=p(c)?h(a,j.value,null):h(a,j.value,c-1),i.indexOf("\n")>-1&&(i=f?i.split("\n").map(function(a){return"  "+a}).join("\n").substr(2):"\n"+i.split("\n").map(function(a){return"   "+a}).join("\n"))):i=a.stylize("[Circular]","special")),u(g)){if(f&&e.match(/^\d+$/))return i;g=JSON.stringify(""+e),g.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(g=g.substr(1,g.length-2),g=a.stylize(g,"name")):(g=g.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),g=a.stylize(g,"string"))}return g+": "+i}function m(a,b,c){var d=0,e=G.reduce(a,function(a,b){return d++,b.indexOf("\n")>=0&&d++,a+b.replace(/\u001b\[\d\d?m/g,"").length+1},0);return e>60?c[0]+(""===b?"":b+"\n ")+" "+a.join(",\n  ")+" "+c[1]:c[0]+b+" "+a.join(", ")+" "+c[1]}function n(a){return G.isArray(a)}function o(a){return"boolean"==typeof a}function p(a){return null===a}function q(a){return null==a}function r(a){return"number"==typeof a}function s(a){return"string"==typeof a}function t(a){return"symbol"==typeof a}function u(a){return void 0===a}function v(a){return w(a)&&"[object RegExp]"===C(a)}function w(a){return"object"==typeof a&&a}function x(a){return w(a)&&"[object Date]"===C(a)}function y(a){return w(a)&&"[object Error]"===C(a)}function z(a){return"function"==typeof a}function A(a){return null===a||"boolean"==typeof a||"number"==typeof a||"string"==typeof a||"symbol"==typeof a||"undefined"==typeof a}function B(a){return a instanceof Buffer}function C(a){return Object.prototype.toString.call(a)}function D(a){return 10>a?"0"+a.toString(10):a.toString(10)}function E(){var a=new Date,b=[D(a.getHours()),D(a.getMinutes()),D(a.getSeconds())].join(":");return[a.getDate(),I[a.getMonth()],b].join(" ")}function F(a,b){return Object.prototype.hasOwnProperty.call(a,b)}var G=a("_shims"),H=/%[sdj%]/g;c.format=function(a){if(!s(a)){for(var b=[],c=0;c<arguments.length;c++)b.push(d(arguments[c]));return b.join(" ")}for(var c=1,e=arguments,f=e.length,g=String(a).replace(H,function(a){if("%%"===a)return"%";if(c>=f)return a;switch(a){case"%s":return String(e[c++]);case"%d":return Number(e[c++]);case"%j":try{return JSON.stringify(e[c++])}catch(b){return"[Circular]"}default:return a}}),h=e[c];f>c;h=e[++c])g+=p(h)||!w(h)?" "+h:" "+d(h);return g},c.inspect=d,d.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},d.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},c.isArray=n,c.isBoolean=o,c.isNull=p,c.isNullOrUndefined=q,c.isNumber=r,c.isString=s,c.isSymbol=t,c.isUndefined=u,c.isRegExp=v,c.isObject=w,c.isDate=x,c.isError=y,c.isFunction=z,c.isPrimitive=A,c.isBuffer=B;var I=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];c.log=function(){console.log("%s - %s",E(),c.format.apply(c,arguments))},c.inherits=function(a,b){a.super_=b,a.prototype=G.create(b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}})},c._extend=function(a,b){if(!b||!w(b))return a;for(var c=G.keys(b),d=c.length;d--;)a[c[d]]=b[c[d]];return a}},{_shims:5}]},{},[]),b.exports=a("buffer-browserify")},{}],14:[function(a,b,c){var d=b.exports={};d.nextTick=function(){var a="undefined"!=typeof window&&window.setImmediate,b="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(a)return function(a){return window.setImmediate(a)};if(b){var c=[];return window.addEventListener("message",function(a){var b=a.source;if((b===window||null===b)&&"process-tick"===a.data&&(a.stopPropagation(),c.length>0)){var d=c.shift();d()}},!0),function(a){c.push(a),window.postMessage("process-tick","*")}}return function(a){setTimeout(a,0)}}(),d.title="browser",d.browser=!0,d.env={},d.argv=[],d.binding=function(a){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(a){throw new Error("process.chdir is not supported")}},{}],15:[function(b,c,d){var e="undefined"!=typeof self?self:"undefined"!=typeof window?window:{};(function(){function b(a,b){if(a!==b){var c=null===a,d=a===z,e=a===a,f=null===b,g=b===z,h=b===b;if(a>b&&!f||!e||c&&!g&&h||d&&h)return 1;if(b>a&&!c||!h||f&&!d&&e||g&&e)return-1}return 0}function f(a,b,c){for(var d=a.length,e=c?d:-1;c?e--:++e<d;)if(b(a[e],e,a))return e;return-1}function g(a,b,c){if(b!==b)return q(a,c);for(var d=c-1,e=a.length;++d<e;)if(a[d]===b)return d;return-1}function h(a){return"function"==typeof a||!1}function i(a){return"string"==typeof a?a:null==a?"":a+""}function j(a,b){for(var c=-1,d=a.length;++c<d&&b.indexOf(a.charAt(c))>-1;);return c}function k(a,b){for(var c=a.length;c--&&b.indexOf(a.charAt(c))>-1;);return c}function l(a,c){return b(a.criteria,c.criteria)||a.index-c.index}function m(a,c,d){for(var e=-1,f=a.criteria,g=c.criteria,h=f.length,i=d.length;++e<h;){var j=b(f[e],g[e]);if(j)return e>=i?j:j*(d[e]?1:-1)}return a.index-c.index}function n(a){return Va[a]}function o(a){return Wa[a]}function p(a){return"\\"+Za[a]}function q(a,b,c){for(var d=a.length,e=b+(c?0:-1);c?e--:++e<d;){var f=a[e];if(f!==f)return e}return-1}function r(a){return!!a&&"object"==typeof a}function s(a){return 160>=a&&a>=9&&13>=a||32==a||160==a||5760==a||6158==a||a>=8192&&(8202>=a||8232==a||8233==a||8239==a||8287==a||12288==a||65279==a)}function t(a,b){for(var c=-1,d=a.length,e=-1,f=[];++c<d;)a[c]===b&&(a[c]=S,f[++e]=c);return f}function u(a,b){for(var c,d=-1,e=a.length,f=-1,g=[];++d<e;){var h=a[d],i=b?b(h,d,a):h;d&&c===i||(c=i,g[++f]=h)}return g}function v(a){for(var b=-1,c=a.length;++b<c&&s(a.charCodeAt(b)););return b}function w(a){for(var b=a.length;b--&&s(a.charCodeAt(b)););return b}function x(a){return Xa[a]}function y(a){function c(a){if(r(a)&&!Gh(a)&&!(a instanceof s)){if(a instanceof e)return a;if(Zf.call(a,"__chain__")&&Zf.call(a,"__wrapped__"))return kd(a)}return new e(a)}function d(){}function e(a,b,c){this.__wrapped__=a,this.__actions__=c||[],this.__chain__=!!b}function s(a){this.__wrapped__=a,this.__actions__=null,this.__dir__=1,this.__dropCount__=0,this.__filtered__=!1,this.__iteratees__=null,this.__takeCount__=Cg,this.__views__=null}function Z(){var a=this.__actions__,b=this.__iteratees__,c=this.__views__,d=new s(this.__wrapped__);return d.__actions__=a?bb(a):null,d.__dir__=this.__dir__,d.__filtered__=this.__filtered__,d.__iteratees__=b?bb(b):null,d.__takeCount__=this.__takeCount__,d.__views__=c?bb(c):null,d}function ba(){if(this.__filtered__){var a=new s(this);a.__dir__=-1,a.__filtered__=!0}else a=this.clone(),a.__dir__*=-1;return a}function da(){var a=this.__wrapped__.value();if(!Gh(a))return dc(a,this.__actions__);var b=this.__dir__,c=0>b,d=Rc(0,a.length,this.__views__),e=d.start,f=d.end,g=f-e,h=c?f:e-1,i=wg(g,this.__takeCount__),j=this.__iteratees__,k=j?j.length:0,l=0,m=[];a:for(;g--&&i>l;){h+=b;for(var n=-1,o=a[h];++n<k;){var p=j[n],q=p.iteratee,r=p.type;if(r==O){if(p.done&&(c?h>p.index:h<p.index)&&(p.count=0,p.done=!1),p.index=h,!p.done){var s=p.limit;if(!(p.done=s>-1?p.count++>=s:!q(o)))continue a}}else{var t=q(o);if(r==Q)o=t;else if(!t){if(r==P)continue a;break a}}}m[l++]=o}return m}function Va(){this.__data__={}}function Wa(a){return this.has(a)&&delete this.__data__[a]}function Xa(a){return"__proto__"==a?z:this.__data__[a]}function Ya(a){return"__proto__"!=a&&Zf.call(this.__data__,a)}function Za(a,b){return"__proto__"!=a&&(this.__data__[a]=b),this}function $a(a){var b=a?a.length:0;for(this.data={hash:rg(null),set:new lg};b--;)this.push(a[b])}function _a(a,b){var c=a.data,d="string"==typeof b||De(b)?c.set.has(b):c.hash[b];return d?0:-1}function ab(a){var b=this.data;"string"==typeof a||De(a)?b.set.add(a):b.hash[a]=!0}function bb(a,b){var c=-1,d=a.length;for(b||(b=Jf(d));++c<d;)b[c]=a[c];return b}function cb(a,b){for(var c=-1,d=a.length;++c<d&&b(a[c],c,a)!==!1;);return a}function db(a,b){for(var c=a.length;c--&&b(a[c],c,a)!==!1;);return a}function hb(a,b){for(var c=-1,d=a.length;++c<d;)if(!b(a[c],c,a))return!1;return!0}function ib(a,b,c,d){for(var e=-1,f=a.length,g=d,h=g;++e<f;){var i=a[e],j=+b(i);c(j,g)&&(g=j,h=i)}return h}function jb(a,b){for(var c=-1,d=a.length,e=-1,f=[];++c<d;){var g=a[c];b(g,c,a)&&(f[++e]=g)}return f}function kb(a,b){for(var c=-1,d=a.length,e=Jf(d);++c<d;)e[c]=b(a[c],c,a);return e}function lb(a,b,c,d){var e=-1,f=a.length;for(d&&f&&(c=a[++e]);++e<f;)c=b(c,a[e],e,a);return c}function mb(a,b,c,d){var e=a.length;for(d&&e&&(c=a[--e]);e--;)c=b(c,a[e],e,a);return c}function nb(a,b){for(var c=-1,d=a.length;++c<d;)if(b(a[c],c,a))return!0;return!1}function ob(a){for(var b=a.length,c=0;b--;)c+=+a[b]||0;return c}function pb(a,b){return a===z?b:a}function qb(a,b,c,d){return a!==z&&Zf.call(d,c)?a:b}function rb(a,b,c){for(var d=-1,e=Sh(b),f=e.length;++d<f;){var g=e[d],h=a[g],i=c(h,b[g],g,a,b);(i===i?i===h:h!==h)&&(h!==z||g in a)||(a[g]=i)}return a}function sb(a,b){return null==b?a:ub(b,Sh(b),a)}function tb(a,b){for(var c=-1,d=null==a,e=!d&&Wc(a),f=e?a.length:0,g=b.length,h=Jf(g);++c<g;){var i=b[c];h[c]=e?Xc(i,f)?a[i]:z:d?z:a[i]}return h}function ub(a,b,c){c||(c={});for(var d=-1,e=b.length;++d<e;){var f=b[d];c[f]=a[f]}return c}function vb(a,b,c){var d=typeof a;return"function"==d?b===z?a:gc(a,b,c):null==a?wf:"object"==d?Ob(a):b===z?Cf(a):Pb(a,b)}function wb(a,b,c,d,e,f,g){var h;if(c&&(h=e?c(a,d,e):c(a)),h!==z)return h;if(!De(a))return a;var i=Gh(a);if(i){if(h=Sc(a),!b)return bb(a,h)}else{var j=_f.call(a),k=j==Y;if(j!=_&&j!=T&&(!k||e))return Ta[j]?Uc(a,j,b):e?a:{};if(fb(a))return e?a:{};if(h=Tc(k?{}:a),!b)return sb(h,a)}f||(f=[]),g||(g=[]);for(var l=f.length;l--;)if(f[l]==a)return g[l];return f.push(a),g.push(h),(i?cb:Gb)(a,function(d,e){h[e]=wb(d,b,c,e,a,f,g)}),h}function xb(a,b,c){if("function"!=typeof a)throw new Sf(R);return mg(function(){a.apply(z,c)},b)}function yb(a,b){var c=a?a.length:0,d=[];if(!c)return d;var e=-1,f=Oc(),h=f==g,i=h&&b.length>=200?Tg(b):null,j=b.length;i&&(f=_a,h=!1,b=i);a:for(;++e<c;){var k=a[e];if(h&&k===k){for(var l=j;l--;)if(b[l]===k)continue a;d.push(k)}else f(b,k,0)<0&&d.push(k)}return d}function zb(a,b){var c=!0;return Og(a,function(a,d,e){return c=!!b(a,d,e)}),c}function Ab(a,b,c,d){var e=d,f=e;return Og(a,function(a,g,h){var i=+b(a,g,h);(c(i,e)||i===d&&i===f)&&(e=i,f=a)}),f}function Bb(a,b,c,d){var e=a.length;for(c=null==c?0:+c||0,0>c&&(c=-c>e?0:e+c),d=d===z||d>e?e:+d||0,0>d&&(d+=e),e=c>d?0:d>>>0,c>>>=0;e>c;)a[c++]=b;return a}function Cb(a,b){var c=[];return Og(a,function(a,d,e){b(a,d,e)&&c.push(a)}),c}function Db(a,b,c,d){var e;return c(a,function(a,c,f){return b(a,c,f)?(e=d?c:a,!1):void 0}),e}function Eb(a,b,c){for(var d=-1,e=a.length,f=-1,g=[];++d<e;){var h=a[d];if(r(h)&&Wc(h)&&(c||Gh(h)||we(h))){b&&(h=Eb(h,b,c));for(var i=-1,j=h.length;++i<j;)g[++f]=h[i]}else c||(g[++f]=h)}return g}function Fb(a,b){return Qg(a,b,We)}function Gb(a,b){return Qg(a,b,Sh)}function Hb(a,b){return Rg(a,b,Sh)}function Ib(a,b){for(var c=-1,d=b.length,e=-1,f=[];++c<d;){var g=b[c];Ih(a[g])&&(f[++e]=g)}return f}function Jb(a,b,c){if(null!=a){a=id(a),c!==z&&c in a&&(b=[c]);for(var d=0,e=b.length;null!=a&&e>d;)a=id(a)[b[d++]];return d&&d==e?a:z}}function Kb(a,b,c,d,e,f){return a===b?!0:null==a||null==b||!De(a)&&!r(b)?a!==a&&b!==b:Lb(a,b,Kb,c,d,e,f)}function Lb(a,b,c,d,e,f,g){var h=Gh(a),i=Gh(b),j=U,k=U;h||(j=_f.call(a),j==T?j=_:j!=_&&(h=Le(a))),i||(k=_f.call(b),k==T?k=_:k!=_&&(i=Le(b)));var l=j==_&&!fb(a),m=k==_&&!fb(b),n=j==k;if(n&&!h&&!l)return Kc(a,b,j);if(!e){var o=l&&Zf.call(a,"__wrapped__"),p=m&&Zf.call(b,"__wrapped__");if(o||p)return c(o?a.value():a,p?b.value():b,d,e,f,g)}if(!n)return!1;f||(f=[]),g||(g=[]);for(var q=f.length;q--;)if(f[q]==a)return g[q]==b;f.push(a),g.push(b);var r=(h?Jc:Lc)(a,b,c,d,e,f,g);return f.pop(),g.pop(),r}function Mb(a,b,c){var d=b.length,e=d,f=!c;if(null==a)return!e;for(a=id(a);d--;){var g=b[d];if(f&&g[2]?g[1]!==a[g[0]]:!(g[0]in a))return!1}for(;++d<e;){g=b[d];var h=g[0],i=a[h],j=g[1];if(f&&g[2]){if(i===z&&!(h in a))return!1}else{var k=c?c(i,j,h):z;if(!(k===z?Kb(j,i,c,!0):k))return!1}}return!0}function Nb(a,b){var c=-1,d=Wc(a)?Jf(a.length):[];return Og(a,function(a,e,f){d[++c]=b(a,e,f)}),d}function Ob(a){var b=Pc(a);if(1==b.length&&b[0][2]){var c=b[0][0],d=b[0][1];return function(a){return null==a?!1:(a=id(a),a[c]===d&&(d!==z||c in a))}}return function(a){return Mb(a,b)}}function Pb(a,b){var c=Gh(a),d=Zc(a)&&ad(b),e=a+"";return a=jd(a),function(f){if(null==f)return!1;var g=e;if(f=id(f),!(!c&&d||g in f)){if(f=1==a.length?f:Jb(f,Xb(a,0,-1)),null==f)return!1;g=xd(a),f=id(f)}return f[g]===b?b!==z||g in f:Kb(b,f[g],z,!0)}}function Qb(a,b,c,d,e){if(!De(a))return a;var f=Wc(b)&&(Gh(b)||Le(b)),g=f?null:Sh(b);return cb(g||b,function(h,i){if(g&&(i=h,h=b[i]),r(h))d||(d=[]),e||(e=[]),Rb(a,b,i,Qb,c,d,e);else{var j=a[i],k=c?c(j,h,i,a,b):z,l=k===z;l&&(k=h),k===z&&(!f||i in a)||!l&&(k===k?k===j:j!==j)||(a[i]=k)}}),a}function Rb(a,b,c,d,e,f,g){for(var h=f.length,i=b[c];h--;)if(f[h]==i)return void(a[c]=g[h]);var j=a[c],k=e?e(j,i,c,a,b):z,l=k===z;l&&(k=i,Wc(i)&&(Gh(i)||Le(i))?k=Gh(j)?j:Wc(j)?bb(j):[]:Jh(i)||we(i)?k=we(j)?Qe(j):Jh(j)?j:{}:l=!1),f.push(i),g.push(k),l?a[c]=d(k,i,e,f,g):(k===k?k!==j:j===j)&&(a[c]=k)}function Sb(a){return function(b){return null==b?z:id(b)[a]}}function Tb(a){var b=a+"";return a=jd(a),function(c){return Jb(c,a,b)}}function Ub(a,b){for(var c=a?b.length:0;c--;){var d=b[c];if(d!=e&&Xc(d)){var e=d;ng.call(a,d,1)}}return a}function Vb(a,b){return a+gg(Ag()*(b-a+1))}function Wb(a,b,c,d,e){return e(a,function(a,e,f){c=d?(d=!1,a):b(c,a,e,f)}),c}function Xb(a,b,c){var d=-1,e=a.length;b=null==b?0:+b||0,0>b&&(b=-b>e?0:e+b),c=c===z||c>e?e:+c||0,0>c&&(c+=e),e=b>c?0:c-b>>>0,b>>>=0;for(var f=Jf(e);++d<e;)f[d]=a[d+b];return f}function Yb(a,b){var c;return Og(a,function(a,d,e){return c=b(a,d,e),!c}),!!c}function Zb(a,b){var c=a.length;for(a.sort(b);c--;)a[c]=a[c].value;return a}function $b(a,b,c){var d=Mc(),e=-1;b=kb(b,function(a){return d(a)});var f=Nb(a,function(a){var c=kb(b,function(b){return b(a)});return{criteria:c,index:++e,value:a}});return Zb(f,function(a,b){return m(a,b,c)})}function _b(a,b){var c=0;return Og(a,function(a,d,e){c+=+b(a,d,e)||0}),c}function ac(a,b){var c=-1,d=Oc(),e=a.length,f=d==g,h=f&&e>=200,i=h?Tg():null,j=[];i?(d=_a,f=!1):(h=!1,i=b?[]:j);a:for(;++c<e;){var k=a[c],l=b?b(k,c,a):k;if(f&&k===k){for(var m=i.length;m--;)if(i[m]===l)continue a;b&&i.push(l),j.push(k)}else d(i,l,0)<0&&((b||h)&&i.push(l),j.push(k))}return j}function bc(a,b){for(var c=-1,d=b.length,e=Jf(d);++c<d;)e[c]=a[b[c]];return e}function cc(a,b,c,d){for(var e=a.length,f=d?e:-1;(d?f--:++f<e)&&b(a[f],f,a););return c?Xb(a,d?0:f,d?f+1:e):Xb(a,d?f+1:0,d?e:f)}function dc(a,b){var c=a;c instanceof s&&(c=c.value());for(var d=-1,e=b.length;++d<e;){var f=[c],g=b[d];jg.apply(f,g.args),c=g.func.apply(g.thisArg,f)}return c}function ec(a,b,c){var d=0,e=a?a.length:d;if("number"==typeof b&&b===b&&Fg>=e){for(;e>d;){var f=d+e>>>1,g=a[f];(c?b>=g:b>g)&&null!==g?d=f+1:e=f}return e}return fc(a,b,wf,c)}function fc(a,b,c,d){b=c(b);for(var e=0,f=a?a.length:0,g=b!==b,h=null===b,i=b===z;f>e;){var j=gg((e+f)/2),k=c(a[j]),l=k!==z,m=k===k;if(g)var n=m||d;else n=h?m&&l&&(d||null!=k):i?m&&(d||l):null==k?!1:d?b>=k:b>k;n?e=j+1:f=j}return wg(f,Eg)}function gc(a,b,c){if("function"!=typeof a)return wf;if(b===z)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 3:return function(c,d,e){return a.call(b,c,d,e)};case 4:return function(c,d,e,f){return a.call(b,c,d,e,f)};case 5:return function(c,d,e,f,g){return a.call(b,c,d,e,f,g)}}return function(){return a.apply(b,arguments)}}function hc(a){return dg.call(a,0)}function ic(a,b,c){for(var d=c.length,e=-1,f=vg(a.length-d,0),g=-1,h=b.length,i=Jf(f+h);++g<h;)i[g]=b[g];for(;++e<d;)i[c[e]]=a[e];for(;f--;)i[g++]=a[e++];return i}function jc(a,b,c){for(var d=-1,e=c.length,f=-1,g=vg(a.length-e,0),h=-1,i=b.length,j=Jf(g+i);++f<g;)j[f]=a[f];for(var k=f;++h<i;)j[k+h]=b[h];for(;++d<e;)j[k+c[d]]=a[f++];return j}function kc(a,b){return function(c,d,e){var f=b?b():{};if(d=Mc(d,e,3),Gh(c))for(var g=-1,h=c.length;++g<h;){var i=c[g];a(f,i,d(i,g,c),c)}else Og(c,function(b,c,e){a(f,b,d(b,c,e),e)});return f}}function lc(a){return oe(function(b,c){var d=-1,e=null==b?0:c.length,f=e>2?c[e-2]:z,g=e>2?c[2]:z,h=e>1?c[e-1]:z;for("function"==typeof f?(f=gc(f,h,5),e-=2):(f="function"==typeof h?h:z,e-=f?1:0),g&&Yc(c[0],c[1],g)&&(f=3>e?z:f,e=1);++d<e;){var i=c[d];i&&a(b,i,f)}return b})}function mc(a,b){return function(c,d){var e=c?Vg(c):0;if(!_c(e))return a(c,d);for(var f=b?e:-1,g=id(c);(b?f--:++f<e)&&d(g[f],f,g)!==!1;);return c}}function nc(a){return function(b,c,d){for(var e=id(b),f=d(b),g=f.length,h=a?g:-1;a?h--:++h<g;){var i=f[h];if(c(e[i],i,e)===!1)break}return b}}function oc(a,b){function c(){var e=this&&this!==eb&&this instanceof c?d:a;return e.apply(b,arguments)}var d=qc(a);return c}function pc(a){return function(b){for(var c=-1,d=tf(ef(b)),e=d.length,f="";++c<e;)f=a(f,d[c],c);return f}}function qc(a){return function(){var b=arguments;switch(b.length){case 0:return new a;case 1:return new a(b[0]);case 2:return new a(b[0],b[1]);case 3:return new a(b[0],b[1],b[2]);case 4:return new a(b[0],b[1],b[2],b[3]);case 5:return new a(b[0],b[1],b[2],b[3],b[4])}var c=Ng(a.prototype),d=a.apply(c,b);return De(d)?d:c}}function rc(a){function b(c,d,e){e&&Yc(c,d,e)&&(d=null);var f=Ic(c,a,null,null,null,null,null,d);return f.placeholder=b.placeholder,f}return b}function sc(a,b){return function(c,d,e){if(e&&Yc(c,d,e)&&(d=null),d=Mc(d,e,3),1==d.length){c=hd(c);var f=ib(c,d,a,b);if(!c.length||f!==b)return f}return Ab(c,d,a,b)}}function tc(a,b){return function(c,d,e){if(d=Mc(d,e,3),Gh(c)){var g=f(c,d,b);return g>-1?c[g]:z}return Db(c,d,a)}}function uc(a){return function(b,c,d){return b&&b.length?(c=Mc(c,d,3),f(b,c,a)):-1}}function vc(a){return function(b,c,d){return c=Mc(c,d,3),Db(b,c,a,!0)}}function wc(a){return function(){for(var b,c=arguments.length,d=a?c:-1,f=0,g=Jf(c);a?d--:++d<c;){var h=g[f++]=arguments[d];if("function"!=typeof h)throw new Sf(R);!b&&e.prototype.thru&&"wrapper"==Nc(h)&&(b=new e([]))}for(d=b?-1:c;++d<c;){h=g[d];var i=Nc(h),j="wrapper"==i?Ug(h):null;b=j&&$c(j[0])&&j[1]==(I|E|G|J)&&!j[4].length&&1==j[9]?b[Nc(j[0])].apply(b,j[3]):1==h.length&&$c(h)?b[i]():b.thru(h)}return function(){var a=arguments;if(b&&1==a.length&&Gh(a[0]))return b.plant(a[0]).value();for(var d=0,e=c?g[d].apply(this,a):a[0];++d<c;)e=g[d].call(this,e);return e}}}function xc(a,b){return function(c,d,e){return"function"==typeof d&&e===z&&Gh(c)?a(c,d):b(c,gc(d,e,3))}}function yc(a){return function(b,c,d){return("function"!=typeof c||d!==z)&&(c=gc(c,d,3)),a(b,c,We)}}function zc(a){return function(b,c,d){return("function"!=typeof c||d!==z)&&(c=gc(c,d,3)),a(b,c)}}function Ac(a){return function(b,c,d){var e={};return c=Mc(c,d,3),Gb(b,function(b,d,f){var g=c(b,d,f);d=a?g:d,b=a?b:g,e[d]=b}),e}}function Bc(a){return function(b,c,d){return b=i(b),(a?b:"")+Fc(b,c,d)+(a?"":b)}}function Cc(a){var b=oe(function(c,d){var e=t(d,b.placeholder);return Ic(c,a,null,d,e)});return b}function Dc(a,b){return function(c,d,e,f){var g=arguments.length<3;return"function"==typeof d&&f===z&&Gh(c)?a(c,d,e,g):Wb(c,Mc(d,f,4),e,g,b)}}function Ec(a,b,c,d,e,f,g,h,i,j){function k(){for(var s=arguments.length,u=s,v=Jf(s);u--;)v[u]=arguments[u];if(d&&(v=ic(v,d,e)),f&&(v=jc(v,f,g)),o||q){var w=k.placeholder,x=t(v,w);if(s-=x.length,j>s){var y=h?bb(h):null,A=vg(j-s,0),D=o?x:null,E=o?null:x,F=o?v:null,I=o?null:v;b|=o?G:H,b&=~(o?H:G),p||(b&=~(B|C));var J=[a,b,c,F,D,I,E,y,i,A],K=Ec.apply(z,J);return $c(a)&&Wg(K,J),K.placeholder=w,K}}var L=m?c:this,M=n?L[a]:a;return h&&(v=ed(v,h)),l&&i<v.length&&(v.length=i),this&&this!==eb&&this instanceof k&&(M=r||qc(a)),M.apply(L,v)}var l=b&I,m=b&B,n=b&C,o=b&E,p=b&D,q=b&F,r=n?null:qc(a);return k}function Fc(a,b,c){var d=a.length;if(b=+b,d>=b||!tg(b))return"";var e=b-d;return c=null==c?" ":c+"",lf(c,eg(e/c.length)).slice(0,e)}function Gc(a,b,c,d){function e(){for(var b=-1,h=arguments.length,i=-1,j=d.length,k=Jf(h+j);++i<j;)k[i]=d[i];for(;h--;)k[i++]=arguments[++b];var l=this&&this!==eb&&this instanceof e?g:a;return l.apply(f?c:this,k)}var f=b&B,g=qc(a);return e}function Hc(a){return function(b,c,d,e){var f=Mc(d);return null==d&&f===vb?ec(b,c,a):fc(b,c,f(d,e,1),a)}}function Ic(a,b,c,d,e,f,g,h){var i=b&C;if(!i&&"function"!=typeof a)throw new Sf(R);var j=d?d.length:0;if(j||(b&=~(G|H),d=e=null),j-=e?e.length:0,b&H){var k=d,l=e;d=e=null}var m=i?null:Ug(a),n=[a,b,c,d,e,k,l,f,g,h];if(m&&(bd(n,m),b=n[1],h=n[9]),n[9]=null==h?i?0:a.length:vg(h-j,0)||0,b==B)var o=oc(n[0],n[2]);else o=b!=G&&b!=(B|G)||n[4].length?Ec.apply(z,n):Gc.apply(z,n);var p=m?Sg:Wg;return p(o,n)}function Jc(a,b,c,d,e,f,g){var h=-1,i=a.length,j=b.length;if(i!=j&&!(e&&j>i))return!1;for(;++h<i;){var k=a[h],l=b[h],m=d?d(e?l:k,e?k:l,h):z;if(m!==z){if(m)continue;return!1}if(e){if(!nb(b,function(a){return k===a||c(k,a,d,e,f,g)}))return!1}else if(k!==l&&!c(k,l,d,e,f,g))return!1}return!0}function Kc(a,b,c){switch(c){case V:case W:return+a==+b;case X:return a.name==b.name&&a.message==b.message;case $:return a!=+a?b!=+b:a==+b;case aa:case ca:return a==b+""}return!1}function Lc(a,b,c,d,e,f,g){var h=Sh(a),i=h.length,j=Sh(b),k=j.length;if(i!=k&&!e)return!1;for(var l=i;l--;){var m=h[l];if(!(e?m in b:Zf.call(b,m)))return!1}for(var n=e;++l<i;){m=h[l];var o=a[m],p=b[m],q=d?d(e?p:o,e?o:p,m):z;if(!(q===z?c(o,p,d,e,f,g):q))return!1;n||(n="constructor"==m)}if(!n){var r=a.constructor,s=b.constructor;if(r!=s&&"constructor"in a&&"constructor"in b&&!("function"==typeof r&&r instanceof r&&"function"==typeof s&&s instanceof s))return!1}return!0}function Mc(a,b,d){var e=c.callback||uf;return e=e===uf?vb:e,d?e(a,b,d):e}function Nc(a){for(var b=a.name,c=Jg[b],d=c?c.length:0;d--;){var e=c[d],f=e.func;if(null==f||f==a)return e.name}return b}function Oc(a,b,d){var e=c.indexOf||vd;return e=e===vd?g:e,a?e(a,b,d):e}function Pc(a){for(var b=Xe(a),c=b.length;c--;)b[c][2]=ad(b[c][1]);return b}function Qc(a,b){var c=null==a?z:a[b];return Ge(c)?c:z}function Rc(a,b,c){for(var d=-1,e=c?c.length:0;++d<e;){var f=c[d],g=f.size;switch(f.type){case"drop":a+=g;break;case"dropRight":b-=g;break;case"take":b=wg(b,a+g);break;case"takeRight":a=vg(a,b-g)}}return{start:a,end:b}}function Sc(a){var b=a.length,c=new a.constructor(b);return b&&"string"==typeof a[0]&&Zf.call(a,"index")&&(c.index=a.index,c.input=a.input),c}function Tc(a){var b=a.constructor;return"function"==typeof b&&b instanceof b||(b=Pf),new b}function Uc(a,b,c){var d=a.constructor;switch(b){case ea:return hc(a);case V:case W:return new d(+a);case fa:case ga:case ha:case ia:case ja:case ka:case la:case ma:case na:d instanceof d&&(d=Kg[b]);var e=a.buffer;return new d(c?hc(e):e,a.byteOffset,a.length);case $:case ca:return new d(a);case aa:var f=new d(a.source,Ga.exec(a));f.lastIndex=a.lastIndex}return f}function Vc(a,b,c){null==a||Zc(b,a)||(b=jd(b),a=1==b.length?a:Jb(a,Xb(b,0,-1)),b=xd(b));var d=null==a?a:a[b];return null==d?z:d.apply(a,c)}function Wc(a){return null!=a&&_c(Vg(a))}function Xc(a,b){return a="number"==typeof a||Ja.test(a)?+a:-1,b=null==b?Hg:b,a>-1&&a%1==0&&b>a}function Yc(a,b,c){if(!De(c))return!1;var d=typeof b;if("number"==d?Wc(c)&&Xc(b,c.length):"string"==d&&b in c){var e=c[b];return a===a?a===e:e!==e}return!1}function Zc(a,b){var c=typeof a;if("string"==c&&za.test(a)||"number"==c)return!0;if(Gh(a))return!1;var d=!ya.test(a);return d||null!=b&&a in id(b)}function $c(a){var b=Nc(a);if(!(b in s.prototype))return!1;var d=c[b];if(a===d)return!0;var e=Ug(d);return!!e&&a===e[0]}function _c(a){return"number"==typeof a&&a>-1&&a%1==0&&Hg>=a}function ad(a){return a===a&&!De(a)}function bd(a,b){var c=a[1],d=b[1],e=c|d,f=I>e,g=d==I&&c==E||d==I&&c==J&&a[7].length<=b[8]||d==(I|J)&&c==E;if(!f&&!g)return a;d&B&&(a[2]=b[2],e|=c&B?0:D);var h=b[3];if(h){var i=a[3];a[3]=i?ic(i,h,b[4]):bb(h),a[4]=i?t(a[3],S):bb(b[4])}return h=b[5],h&&(i=a[5],a[5]=i?jc(i,h,b[6]):bb(h),a[6]=i?t(a[5],S):bb(b[6])),h=b[7],h&&(a[7]=bb(h)),d&I&&(a[8]=null==a[8]?b[8]:wg(a[8],b[8])),null==a[9]&&(a[9]=b[9]),a[0]=b[0],a[1]=e,a}function cd(a,b){a=id(a);for(var c=-1,d=b.length,e={};++c<d;){var f=b[c];f in a&&(e[f]=a[f])}return e}function dd(a,b){var c={};return Fb(a,function(a,d,e){b(a,d,e)&&(c[d]=a)}),c}function ed(a,b){for(var c=a.length,d=wg(b.length,c),e=bb(a);d--;){var f=b[d];a[d]=Xc(f,c)?e[f]:z}return a}function fd(a){var b,d=c.support;if(!r(a)||_f.call(a)!=_||fb(a)||!Zf.call(a,"constructor")&&(b=a.constructor,"function"==typeof b&&!(b instanceof b))||!d.argsTag&&we(a))return!1;var e;return d.ownLast?(Fb(a,function(a,b,c){
return e=Zf.call(c,b),!1}),e!==!1):(Fb(a,function(a,b){e=b}),e===z||Zf.call(a,e))}function gd(a){for(var b=We(a),c=b.length,d=c&&a.length,e=!!d&&_c(d)&&(Gh(a)||we(a)||Ke(a)),f=-1,g=[];++f<c;){var h=b[f];(e&&Xc(h,d)||Zf.call(a,h))&&g.push(h)}return g}function hd(a){return null==a?[]:Wc(a)?c.support.unindexedChars&&Ke(a)?a.split(""):De(a)?a:Pf(a):_e(a)}function id(a){if(c.support.unindexedChars&&Ke(a)){for(var b=-1,d=a.length,e=Pf(a);++b<d;)e[b]=a.charAt(b);return e}return De(a)?a:Pf(a)}function jd(a){if(Gh(a))return a;var b=[];return i(a).replace(Aa,function(a,c,d,e){b.push(d?e.replace(Ea,"$1"):c||a)}),b}function kd(a){return a instanceof s?a.clone():new e(a.__wrapped__,a.__chain__,bb(a.__actions__))}function ld(a,b,c){b=(c?Yc(a,b,c):null==b)?1:vg(+b||1,1);for(var d=0,e=a?a.length:0,f=-1,g=Jf(eg(e/b));e>d;)g[++f]=Xb(a,d,d+=b);return g}function md(a){for(var b=-1,c=a?a.length:0,d=-1,e=[];++b<c;){var f=a[b];f&&(e[++d]=f)}return e}function nd(a,b,c){var d=a?a.length:0;return d?((c?Yc(a,b,c):null==b)&&(b=1),Xb(a,0>b?0:b)):[]}function od(a,b,c){var d=a?a.length:0;return d?((c?Yc(a,b,c):null==b)&&(b=1),b=d-(+b||0),Xb(a,0,0>b?0:b)):[]}function pd(a,b,c){return a&&a.length?cc(a,Mc(b,c,3),!0,!0):[]}function qd(a,b,c){return a&&a.length?cc(a,Mc(b,c,3),!0):[]}function rd(a,b,c,d){var e=a?a.length:0;return e?(c&&"number"!=typeof c&&Yc(a,b,c)&&(c=0,d=e),Bb(a,b,c,d)):[]}function sd(a){return a?a[0]:z}function td(a,b,c){var d=a?a.length:0;return c&&Yc(a,b,c)&&(b=!1),d?Eb(a,b):[]}function ud(a){var b=a?a.length:0;return b?Eb(a,!0):[]}function vd(a,b,c){var d=a?a.length:0;if(!d)return-1;if("number"==typeof c)c=0>c?vg(d+c,0):c;else if(c){var e=ec(a,b),f=a[e];return(b===b?b===f:f!==f)?e:-1}return g(a,b,c||0)}function wd(a){return od(a,1)}function xd(a){var b=a?a.length:0;return b?a[b-1]:z}function yd(a,b,c){var d=a?a.length:0;if(!d)return-1;var e=d;if("number"==typeof c)e=(0>c?vg(d+c,0):wg(c||0,d-1))+1;else if(c){e=ec(a,b,!0)-1;var f=a[e];return(b===b?b===f:f!==f)?e:-1}if(b!==b)return q(a,e,!0);for(;e--;)if(a[e]===b)return e;return-1}function zd(){var a=arguments,b=a[0];if(!b||!b.length)return b;for(var c=0,d=Oc(),e=a.length;++c<e;)for(var f=0,g=a[c];(f=d(b,g,f))>-1;)ng.call(b,f,1);return b}function Ad(a,b,c){var d=[];if(!a||!a.length)return d;var e=-1,f=[],g=a.length;for(b=Mc(b,c,3);++e<g;){var h=a[e];b(h,e,a)&&(d.push(h),f.push(e))}return Ub(a,f),d}function Bd(a){return nd(a,1)}function Cd(a,b,c){var d=a?a.length:0;return d?(c&&"number"!=typeof c&&Yc(a,b,c)&&(b=0,c=d),Xb(a,b,c)):[]}function Dd(a,b,c){var d=a?a.length:0;return d?((c?Yc(a,b,c):null==b)&&(b=1),Xb(a,0,0>b?0:b)):[]}function Ed(a,b,c){var d=a?a.length:0;return d?((c?Yc(a,b,c):null==b)&&(b=1),b=d-(+b||0),Xb(a,0>b?0:b)):[]}function Fd(a,b,c){return a&&a.length?cc(a,Mc(b,c,3),!1,!0):[]}function Gd(a,b,c){return a&&a.length?cc(a,Mc(b,c,3)):[]}function Hd(a,b,c,d){var e=a?a.length:0;if(!e)return[];null!=b&&"boolean"!=typeof b&&(d=c,c=Yc(a,b,d)?null:b,b=!1);var f=Mc();return(null!=c||f!==vb)&&(c=f(c,d,3)),b&&Oc()==g?u(a,c):ac(a,c)}function Id(a){if(!a||!a.length)return[];var b=-1,c=0;a=jb(a,function(a){return Wc(a)?(c=vg(a.length,c),!0):void 0});for(var d=Jf(c);++b<c;)d[b]=kb(a,Sb(b));return d}function Jd(a,b,c){var d=a?a.length:0;if(!d)return[];var e=Id(a);return null==b?e:(b=gc(b,c,4),kb(e,function(a){return lb(a,b,z,!0)}))}function Kd(){for(var a=-1,b=arguments.length;++a<b;){var c=arguments[a];if(Wc(c))var d=d?yb(d,c).concat(yb(c,d)):c}return d?ac(d):[]}function Ld(a,b){var c=-1,d=a?a.length:0,e={};for(!d||b||Gh(a[0])||(b=[]);++c<d;){var f=a[c];b?e[f]=b[c]:f&&(e[f[0]]=f[1])}return e}function Md(a){var b=c(a);return b.__chain__=!0,b}function Nd(a,b,c){return b.call(c,a),a}function Od(a,b,c){return b.call(c,a)}function Pd(){return Md(this)}function Qd(){return new e(this.value(),this.__chain__)}function Rd(a){for(var b,c=this;c instanceof d;){var e=kd(c);b?f.__wrapped__=e:b=e;var f=e;c=c.__wrapped__}return f.__wrapped__=a,b}function Sd(){var a=this.__wrapped__;return a instanceof s?(this.__actions__.length&&(a=new s(this)),new e(a.reverse(),this.__chain__)):this.thru(function(a){return a.reverse()})}function Td(){return this.value()+""}function Ud(){return dc(this.__wrapped__,this.__actions__)}function Vd(a,b,c){var d=Gh(a)?hb:zb;return c&&Yc(a,b,c)&&(b=null),("function"!=typeof b||c!==z)&&(b=Mc(b,c,3)),d(a,b)}function Wd(a,b,c){var d=Gh(a)?jb:Cb;return b=Mc(b,c,3),d(a,b)}function Xd(a,b){return ih(a,Ob(b))}function Yd(a,b,c,d){var e=a?Vg(a):0;return _c(e)||(a=_e(a),e=a.length),e?(c="number"!=typeof c||d&&Yc(b,c,d)?0:0>c?vg(e+c,0):c||0,"string"==typeof a||!Gh(a)&&Ke(a)?e>c&&a.indexOf(b,c)>-1:Oc(a,b,c)>-1):!1}function Zd(a,b,c){var d=Gh(a)?kb:Nb;return b=Mc(b,c,3),d(a,b)}function $d(a,b){return Zd(a,Cf(b))}function _d(a,b,c){var d=Gh(a)?jb:Cb;return b=Mc(b,c,3),d(a,function(a,c,d){return!b(a,c,d)})}function ae(a,b,c){if(c?Yc(a,b,c):null==b){a=hd(a);var d=a.length;return d>0?a[Vb(0,d-1)]:z}var e=-1,f=Pe(a),d=f.length,g=d-1;for(b=wg(0>b?0:+b||0,d);++e<b;){var h=Vb(e,g),i=f[h];f[h]=f[e],f[e]=i}return f.length=b,f}function be(a){return ae(a,Cg)}function ce(a){var b=a?Vg(a):0;return _c(b)?b:Sh(a).length}function de(a,b,c){var d=Gh(a)?nb:Yb;return c&&Yc(a,b,c)&&(b=null),("function"!=typeof b||c!==z)&&(b=Mc(b,c,3)),d(a,b)}function ee(a,b,c){if(null==a)return[];c&&Yc(a,b,c)&&(b=null);var d=-1;b=Mc(b,c,3);var e=Nb(a,function(a,c,e){return{criteria:b(a,c,e),index:++d,value:a}});return Zb(e,l)}function fe(a,b,c,d){return null==a?[]:(d&&Yc(b,c,d)&&(c=null),Gh(b)||(b=null==b?[]:[b]),Gh(c)||(c=null==c?[]:[c]),$b(a,b,c))}function ge(a,b){return Wd(a,Ob(b))}function he(a,b){if("function"!=typeof b){if("function"!=typeof a)throw new Sf(R);var c=a;a=b,b=c}return a=tg(a=+a)?a:0,function(){return--a<1?b.apply(this,arguments):void 0}}function ie(a,b,c){return c&&Yc(a,b,c)&&(b=null),b=a&&null==b?a.length:vg(+b||0,0),Ic(a,I,null,null,null,null,b)}function je(a,b){var c;if("function"!=typeof b){if("function"!=typeof a)throw new Sf(R);var d=a;a=b,b=d}return function(){return--a>0&&(c=b.apply(this,arguments)),1>=a&&(b=null),c}}function ke(a,b,c){function d(){m&&fg(m),i&&fg(i),i=m=n=z}function e(){var c=b-(th()-k);if(0>=c||c>b){i&&fg(i);var d=n;i=m=n=z,d&&(o=th(),j=a.apply(l,h),m||i||(h=l=null))}else m=mg(e,c)}function f(){m&&fg(m),i=m=n=z,(q||p!==b)&&(o=th(),j=a.apply(l,h),m||i||(h=l=null))}function g(){if(h=arguments,k=th(),l=this,n=q&&(m||!r),p===!1)var c=r&&!m;else{i||r||(o=k);var d=p-(k-o),g=0>=d||d>p;g?(i&&(i=fg(i)),o=k,j=a.apply(l,h)):i||(i=mg(f,d))}return g&&m?m=fg(m):m||b===p||(m=mg(e,b)),c&&(g=!0,j=a.apply(l,h)),!g||m||i||(h=l=null),j}var h,i,j,k,l,m,n,o=0,p=!1,q=!0;if("function"!=typeof a)throw new Sf(R);if(b=0>b?0:+b||0,c===!0){var r=!0;q=!1}else De(c)&&(r=c.leading,p="maxWait"in c&&vg(+c.maxWait||0,b),q="trailing"in c?c.trailing:q);return g.cancel=d,g}function le(a,b){if("function"!=typeof a||b&&"function"!=typeof b)throw new Sf(R);var c=function(){var d=arguments,e=b?b.apply(this,d):d[0],f=c.cache;if(f.has(e))return f.get(e);var g=a.apply(this,d);return c.cache=f.set(e,g),g};return c.cache=new le.Cache,c}function me(a){if("function"!=typeof a)throw new Sf(R);return function(){return!a.apply(this,arguments)}}function ne(a){return je(2,a)}function oe(a,b){if("function"!=typeof a)throw new Sf(R);return b=vg(b===z?a.length-1:+b||0,0),function(){for(var c=arguments,d=-1,e=vg(c.length-b,0),f=Jf(e);++d<e;)f[d]=c[b+d];switch(b){case 0:return a.call(this,f);case 1:return a.call(this,c[0],f);case 2:return a.call(this,c[0],c[1],f)}var g=Jf(b+1);for(d=-1;++d<b;)g[d]=c[d];return g[b]=f,a.apply(this,g)}}function pe(a){if("function"!=typeof a)throw new Sf(R);return function(b){return a.apply(this,b)}}function qe(a,b,c){var d=!0,e=!0;if("function"!=typeof a)throw new Sf(R);return c===!1?d=!1:De(c)&&(d="leading"in c?!!c.leading:d,e="trailing"in c?!!c.trailing:e),Ua.leading=d,Ua.maxWait=+b,Ua.trailing=e,ke(a,b,Ua)}function re(a,b){return b=null==b?wf:b,Ic(b,G,null,[a],[])}function se(a,b,c,d){return b&&"boolean"!=typeof b&&Yc(a,b,c)?b=!1:"function"==typeof b&&(d=c,c=b,b=!1),"function"==typeof c?wb(a,b,gc(c,d,1)):wb(a,b)}function te(a,b,c){return"function"==typeof b?wb(a,!0,gc(b,c,1)):wb(a,!0)}function ue(a,b){return a>b}function ve(a,b){return a>=b}function we(a){return r(a)&&Wc(a)&&_f.call(a)==T}function xe(a){return a===!0||a===!1||r(a)&&_f.call(a)==V}function ye(a){return r(a)&&_f.call(a)==W}function ze(a){return!!a&&1===a.nodeType&&r(a)&&(c.support.nodeTag?_f.call(a).indexOf("Element")>-1:fb(a))}function Ae(a){return null==a?!0:Wc(a)&&(Gh(a)||Ke(a)||we(a)||r(a)&&Ih(a.splice))?!a.length:!Sh(a).length}function Be(a,b,c,d){c="function"==typeof c?gc(c,d,3):z;var e=c?c(a,b):z;return e===z?Kb(a,b,c):!!e}function Ce(a){return r(a)&&"string"==typeof a.message&&_f.call(a)==X}function De(a){var b=typeof a;return!!a&&("object"==b||"function"==b)}function Ee(a,b,c,d){return c="function"==typeof c?gc(c,d,3):z,Mb(a,Pc(b),c)}function Fe(a){return Ie(a)&&a!=+a}function Ge(a){return null==a?!1:_f.call(a)==Y?bg.test(Yf.call(a)):r(a)&&(fb(a)?bg:Ia).test(a)}function He(a){return null===a}function Ie(a){return"number"==typeof a||r(a)&&_f.call(a)==$}function Je(a){return De(a)&&_f.call(a)==aa}function Ke(a){return"string"==typeof a||r(a)&&_f.call(a)==ca}function Le(a){return r(a)&&_c(a.length)&&!!Sa[_f.call(a)]}function Me(a){return a===z}function Ne(a,b){return b>a}function Oe(a,b){return b>=a}function Pe(a){var b=a?Vg(a):0;return _c(b)?b?c.support.unindexedChars&&Ke(a)?a.split(""):bb(a):[]:_e(a)}function Qe(a){return ub(a,We(a))}function Re(a,b,c){var d=Ng(a);return c&&Yc(a,b,c)&&(b=null),b?sb(d,b):d}function Se(a){return Ib(a,We(a))}function Te(a,b,c){var d=null==a?z:Jb(a,jd(b),b+"");return d===z?c:d}function Ue(a,b){if(null==a)return!1;var c=Zf.call(a,b);if(!c&&!Zc(b)){if(b=jd(b),a=1==b.length?a:Jb(a,Xb(b,0,-1)),null==a)return!1;b=xd(b),c=Zf.call(a,b)}return c||_c(a.length)&&Xc(b,a.length)&&(Gh(a)||we(a)||Ke(a))}function Ve(a,b,c){c&&Yc(a,b,c)&&(b=null);for(var d=-1,e=Sh(a),f=e.length,g={};++d<f;){var h=e[d],i=a[h];b?Zf.call(g,i)?g[i].push(h):g[i]=[h]:g[i]=h}return g}function We(a){if(null==a)return[];De(a)||(a=Pf(a));var b=a.length,d=c.support;b=b&&_c(b)&&(Gh(a)||we(a)||Ke(a))&&b||0;for(var e=a.constructor,f=-1,g=Ih(e)&&e.prototype||Vf,h=g===a,i=Jf(b),j=b>0,k=d.enumErrorProps&&(a===Uf||a instanceof Lf),l=d.enumPrototypes&&Ih(a);++f<b;)i[f]=f+"";for(var m in a)l&&"prototype"==m||k&&("message"==m||"name"==m)||j&&Xc(m,b)||"constructor"==m&&(h||!Zf.call(a,m))||i.push(m);if(d.nonEnumShadows&&a!==Vf){var n=a===Wf?ca:a===Uf?X:_f.call(a),o=Lg[n]||Lg[_];for(n==_&&(g=Vf),b=Qa.length;b--;){m=Qa[b];var p=o[m];h&&p||(p?!Zf.call(a,m):a[m]===g[m])||i.push(m)}}return i}function Xe(a){a=id(a);for(var b=-1,c=Sh(a),d=c.length,e=Jf(d);++b<d;){var f=c[b];e[b]=[f,a[f]]}return e}function Ye(a,b,c){var d=null==a?z:id(a)[b];return d===z&&(null==a||Zc(b,a)||(b=jd(b),a=1==b.length?a:Jb(a,Xb(b,0,-1)),d=null==a?z:id(a)[xd(b)]),d=d===z?c:d),Ih(d)?d.call(a):d}function Ze(a,b,c){if(null==a)return a;var d=b+"";b=null!=a[d]||Zc(b,a)?[d]:jd(b);for(var e=-1,f=b.length,g=f-1,h=a;null!=h&&++e<f;){var i=b[e];De(h)&&(e==g?h[i]=c:null==h[i]&&(h[i]=Xc(b[e+1])?[]:{})),h=h[i]}return a}function $e(a,b,c,d){var e=Gh(a)||Le(a);if(b=Mc(b,d,4),null==c)if(e||De(a)){var f=a.constructor;c=e?Gh(a)?new f:[]:Ng(Ih(f)?f.prototype:null)}else c={};return(e?cb:Gb)(a,function(a,d,e){return b(c,a,d,e)}),c}function _e(a){return bc(a,Sh(a))}function af(a){return bc(a,We(a))}function bf(a,b,c){return b=+b||0,"undefined"==typeof c?(c=b,b=0):c=+c||0,a>=wg(b,c)&&a<vg(b,c)}function cf(a,b,c){c&&Yc(a,b,c)&&(b=c=null);var d=null==a,e=null==b;if(null==c&&(e&&"boolean"==typeof a?(c=a,a=1):"boolean"==typeof b&&(c=b,e=!0)),d&&e&&(b=1,e=!1),a=+a||0,e?(b=a,a=0):b=+b||0,c||a%1||b%1){var f=Ag();return wg(a+f*(b-a+ig("1e-"+((f+"").length-1))),b)}return Vb(a,b)}function df(a){return a=i(a),a&&a.charAt(0).toUpperCase()+a.slice(1)}function ef(a){return a=i(a),a&&a.replace(Ka,n).replace(Da,"")}function ff(a,b,c){a=i(a),b+="";var d=a.length;return c=c===z?d:wg(0>c?0:+c||0,d),c-=b.length,c>=0&&a.indexOf(b,c)==c}function gf(a){return a=i(a),a&&ua.test(a)?a.replace(sa,o):a}function hf(a){return a=i(a),a&&Ca.test(a)?a.replace(Ba,"\\$&"):a}function jf(a,b,c){a=i(a),b=+b;var d=a.length;if(d>=b||!tg(b))return a;var e=(b-d)/2,f=gg(e),g=eg(e);return c=Fc("",g,c),c.slice(0,f)+a+c}function kf(a,b,c){return c&&Yc(a,b,c)&&(b=0),zg(a,b)}function lf(a,b){var c="";if(a=i(a),b=+b,1>b||!a||!tg(b))return c;do b%2&&(c+=a),b=gg(b/2),a+=a;while(b);return c}function mf(a,b,c){return a=i(a),c=null==c?0:wg(0>c?0:+c||0,a.length),a.lastIndexOf(b,c)==c}function nf(a,b,d){var e=c.templateSettings;d&&Yc(a,b,d)&&(b=d=null),a=i(a),b=rb(sb({},d||b),e,qb);var f,g,h=rb(sb({},b.imports),e.imports,qb),j=Sh(h),k=bc(h,j),l=0,m=b.interpolate||La,n="__p += '",o=Qf((b.escape||La).source+"|"+m.source+"|"+(m===xa?Fa:La).source+"|"+(b.evaluate||La).source+"|$","g"),q="//# sourceURL="+("sourceURL"in b?b.sourceURL:"lodash.templateSources["+ ++Ra+"]")+"\n";a.replace(o,function(b,c,d,e,h,i){return d||(d=e),n+=a.slice(l,i).replace(Ma,p),c&&(f=!0,n+="' +\n__e("+c+") +\n'"),h&&(g=!0,n+="';\n"+h+";\n__p += '"),d&&(n+="' +\n((__t = ("+d+")) == null ? '' : __t) +\n'"),l=i+b.length,b}),n+="';\n";var r=b.variable;r||(n="with (obj) {\n"+n+"\n}\n"),n=(g?n.replace(oa,""):n).replace(pa,"$1").replace(qa,"$1;"),n="function("+(r||"obj")+") {\n"+(r?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(f?", __e = _.escape":"")+(g?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+n+"return __p\n}";var s=ci(function(){return Mf(j,q+"return "+n).apply(z,k)});if(s.source=n,Ce(s))throw s;return s}function of(a,b,c){var d=a;return(a=i(a))?(c?Yc(d,b,c):null==b)?a.slice(v(a),w(a)+1):(b+="",a.slice(j(a,b),k(a,b)+1)):a}function pf(a,b,c){var d=a;return a=i(a),a?a.slice((c?Yc(d,b,c):null==b)?v(a):j(a,b+"")):a}function qf(a,b,c){var d=a;return a=i(a),a?(c?Yc(d,b,c):null==b)?a.slice(0,w(a)+1):a.slice(0,k(a,b+"")+1):a}function rf(a,b,c){c&&Yc(a,b,c)&&(b=null);var d=K,e=L;if(null!=b)if(De(b)){var f="separator"in b?b.separator:f;d="length"in b?+b.length||0:d,e="omission"in b?i(b.omission):e}else d=+b||0;if(a=i(a),d>=a.length)return a;var g=d-e.length;if(1>g)return e;var h=a.slice(0,g);if(null==f)return h+e;if(Je(f)){if(a.slice(g).search(f)){var j,k,l=a.slice(0,g);for(f.global||(f=Qf(f.source,(Ga.exec(f)||"")+"g")),f.lastIndex=0;j=f.exec(l);)k=j.index;h=h.slice(0,null==k?g:k)}}else if(a.indexOf(f,g)!=g){var m=h.lastIndexOf(f);m>-1&&(h=h.slice(0,m))}return h+e}function sf(a){return a=i(a),a&&ta.test(a)?a.replace(ra,x):a}function tf(a,b,c){return c&&Yc(a,b,c)&&(b=null),a=i(a),a.match(b||Na)||[]}function uf(a,b,c){return c&&Yc(a,b,c)&&(b=null),r(a)?xf(a):vb(a,b)}function vf(a){return function(){return a}}function wf(a){return a}function xf(a){return Ob(wb(a,!0))}function yf(a,b){return Pb(a,wb(b,!0))}function zf(a,b,c){if(null==c){var d=De(b),e=d?Sh(b):null,f=e&&e.length?Ib(b,e):null;(f?f.length:d)||(f=!1,c=b,b=a,a=this)}f||(f=Ib(b,Sh(b)));var g=!0,h=-1,i=Ih(a),j=f.length;c===!1?g=!1:De(c)&&"chain"in c&&(g=c.chain);for(;++h<j;){var k=f[h],l=b[k];a[k]=l,i&&(a.prototype[k]=function(b){return function(){var c=this.__chain__;if(g||c){var d=a(this.__wrapped__),e=d.__actions__=bb(this.__actions__);return e.push({func:b,args:arguments,thisArg:a}),d.__chain__=c,d}var f=[this.value()];return jg.apply(f,arguments),b.apply(a,f)}}(l))}return a}function Af(){return a._=ag,this}function Bf(){}function Cf(a){return Zc(a)?Sb(a):Tb(a)}function Df(a){return function(b){return Jb(a,jd(b),b+"")}}function Ef(a,b,c){c&&Yc(a,b,c)&&(b=c=null),a=+a||0,c=null==c?1:+c||0,null==b?(b=a,a=0):b=+b||0;for(var d=-1,e=vg(eg((b-a)/(c||1)),0),f=Jf(e);++d<e;)f[d]=a,a+=c;return f}function Ff(a,b,c){if(a=gg(a),1>a||!tg(a))return[];var d=-1,e=Jf(wg(a,Dg));for(b=gc(b,c,1);++d<a;)Dg>d?e[d]=b(d):b(d);return e}function Gf(a){var b=++$f;return i(a)+b}function Hf(a,b){return(+a||0)+(+b||0)}function If(a,b,c){c&&Yc(a,b,c)&&(b=null);var d=Mc(),e=null==b;return e&&d===vb||(e=!1,b=d(b,c,3)),e?ob(Gh(a)?a:hd(a)):_b(a,b)}a=a?gb.defaults(eb.Object(),a,gb.pick(eb,Pa)):eb;var Jf=a.Array,Kf=a.Date,Lf=a.Error,Mf=a.Function,Nf=a.Math,Of=a.Number,Pf=a.Object,Qf=a.RegExp,Rf=a.String,Sf=a.TypeError,Tf=Jf.prototype,Uf=Lf.prototype,Vf=Pf.prototype,Wf=Rf.prototype,Xf=(Xf=a.window)?Xf.document:null,Yf=Mf.prototype.toString,Zf=Vf.hasOwnProperty,$f=0,_f=Vf.toString,ag=a._,bg=Qf("^"+hf(Yf.call(Zf)).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),cg=Qc(a,"ArrayBuffer"),dg=Qc(cg&&new cg(0),"slice"),eg=Nf.ceil,fg=a.clearTimeout,gg=Nf.floor,hg=Qc(Pf,"getPrototypeOf"),ig=a.parseFloat,jg=Tf.push,kg=Vf.propertyIsEnumerable,lg=Qc(a,"Set"),mg=a.setTimeout,ng=Tf.splice,og=Qc(a,"Uint8Array"),pg=Qc(a,"WeakMap"),qg=function(){try{var b=Qc(a,"Float64Array"),c=new b(new cg(10),0,1)&&b}catch(d){}return c||null}(),rg=Qc(Pf,"create"),sg=Qc(Jf,"isArray"),tg=a.isFinite,ug=Qc(Pf,"keys"),vg=Nf.max,wg=Nf.min,xg=Qc(Kf,"now"),yg=Qc(Of,"isFinite"),zg=a.parseInt,Ag=Nf.random,Bg=Of.NEGATIVE_INFINITY,Cg=Of.POSITIVE_INFINITY,Dg=4294967295,Eg=Dg-1,Fg=Dg>>>1,Gg=qg?qg.BYTES_PER_ELEMENT:0,Hg=9007199254740991,Ig=pg&&new pg,Jg={},Kg={};Kg[fa]=a.Float32Array,Kg[ga]=a.Float64Array,Kg[ha]=a.Int8Array,Kg[ia]=a.Int16Array,Kg[ja]=a.Int32Array,Kg[ka]=a.Uint8Array,Kg[la]=a.Uint8ClampedArray,Kg[ma]=a.Uint16Array,Kg[na]=a.Uint32Array;var Lg={};Lg[U]=Lg[W]=Lg[$]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0},Lg[V]=Lg[ca]={constructor:!0,toString:!0,valueOf:!0},Lg[X]=Lg[Y]=Lg[aa]={constructor:!0,toString:!0},Lg[_]={constructor:!0},cb(Qa,function(a){for(var b in Lg)if(Zf.call(Lg,b)){var c=Lg[b];c[a]=Zf.call(c,a)}});var Mg=c.support={};!function(a){var b=function(){this.x=a},c={0:a,length:a},d=[];b.prototype={valueOf:a,y:a};for(var e in new b)d.push(e);Mg.argsTag=_f.call(arguments)==T,Mg.enumErrorProps=kg.call(Uf,"message")||kg.call(Uf,"name"),Mg.enumPrototypes=kg.call(b,"prototype"),Mg.nodeTag=_f.call(Xf)!=_,Mg.nonEnumShadows=!/valueOf/.test(d),Mg.ownLast="x"!=d[0],Mg.spliceObjects=(ng.call(c,0,1),!c[0]),Mg.unindexedChars="x"[0]+Pf("x")[0]!="xx";try{Mg.dom=11===Xf.createDocumentFragment().nodeType}catch(f){Mg.dom=!1}}(1,0),c.templateSettings={escape:va,evaluate:wa,interpolate:xa,variable:"",imports:{_:c}};var Ng=function(){function a(){}return function(b){if(De(b)){a.prototype=b;var c=new a;a.prototype=null}return c||{}}}(),Og=mc(Gb),Pg=mc(Hb,!0),Qg=nc(),Rg=nc(!0),Sg=Ig?function(a,b){return Ig.set(a,b),a}:wf;dg||(hc=cg&&og?function(a){var b=a.byteLength,c=qg?gg(b/Gg):0,d=c*Gg,e=new cg(b);if(c){var f=new qg(e,0,c);f.set(new qg(a,0,c))}return b!=d&&(f=new og(e,d),f.set(new og(a,d))),e}:vf(null));var Tg=rg&&lg?function(a){return new $a(a)}:vf(null),Ug=Ig?function(a){return Ig.get(a)}:Bf,Vg=Sb("length"),Wg=function(){var a=0,b=0;return function(c,d){var e=th(),f=N-(e-b);if(b=e,f>0){if(++a>=M)return c}else a=0;return Sg(c,d)}}(),Xg=oe(function(a,b){return Wc(a)?yb(a,Eb(b,!1,!0)):[]}),Yg=uc(),Zg=uc(!0),$g=oe(function(a){for(var b=a.length,c=b,d=Jf(l),e=Oc(),f=e==g,h=[];c--;){var i=a[c]=Wc(i=a[c])?i:[];d[c]=f&&i.length>=120?Tg(c&&i):null}var j=a[0],k=-1,l=j?j.length:0,m=d[0];a:for(;++k<l;)if(i=j[k],(m?_a(m,i):e(h,i,0))<0){for(var c=b;--c;){var n=d[c];if((n?_a(n,i):e(a[c],i,0))<0)continue a}m&&m.push(i),h.push(i)}return h}),_g=oe(function(a,c){c=Eb(c);var d=tb(a,c);return Ub(a,c.sort(b)),d}),ah=Hc(),bh=Hc(!0),ch=oe(function(a){return ac(Eb(a,!1,!0))}),dh=oe(function(a,b){return Wc(a)?yb(a,b):[]}),eh=oe(Id),fh=oe(function(a){var b=a.length,c=b>2?a[b-2]:z,d=b>1?a[b-1]:z;return b>2&&"function"==typeof c?b-=2:(c=b>1&&"function"==typeof d?(--b,d):z,d=z),a.length=b,Jd(a,c,d)}),gh=oe(function(a,b){return Wc(a)&&(a=hd(a)),tb(a,Eb(b))}),hh=kc(function(a,b,c){Zf.call(a,c)?++a[c]:a[c]=1}),ih=tc(Og),jh=tc(Pg,!0),kh=xc(cb,Og),lh=xc(db,Pg),mh=kc(function(a,b,c){Zf.call(a,c)?a[c].push(b):a[c]=[b]}),nh=kc(function(a,b,c){a[c]=b}),oh=oe(function(a,b,c){var d=-1,e="function"==typeof b,f=Zc(b),g=Wc(a)?Jf(a.length):[];return Og(a,function(a){var h=e?b:f&&null!=a?a[b]:null;g[++d]=h?h.apply(a,c):Vc(a,b,c)}),g}),ph=kc(function(a,b,c){a[c?0:1].push(b)},function(){return[[],[]]}),qh=Dc(lb,Og),rh=Dc(mb,Pg),sh=oe(function(a,b){if(null==a)return[];var c=b[2];return c&&Yc(b[0],b[1],c)&&(b.length=1),$b(a,Eb(b),[])}),th=xg||function(){return(new Kf).getTime()},uh=oe(function(a,b,c){var d=B;if(c.length){var e=t(c,uh.placeholder);d|=G}return Ic(a,d,b,c,e)}),vh=oe(function(a,b){b=b.length?Eb(b):Se(a);for(var c=-1,d=b.length;++c<d;){var e=b[c];a[e]=Ic(a[e],B,a)}return a}),wh=oe(function(a,b,c){var d=B|C;if(c.length){var e=t(c,wh.placeholder);d|=G}return Ic(b,d,a,c,e)}),xh=rc(E),yh=rc(F),zh=oe(function(a,b){return xb(a,1,b)}),Ah=oe(function(a,b,c){return xb(a,b,c)}),Bh=wc(),Ch=wc(!0),Dh=Cc(G),Eh=Cc(H),Fh=oe(function(a,b){return Ic(a,J,null,null,null,Eb(b))});Mg.argsTag||(we=function(a){return r(a)&&Wc(a)&&Zf.call(a,"callee")&&!kg.call(a,"callee")});var Gh=sg||function(a){return r(a)&&_c(a.length)&&_f.call(a)==U};Mg.dom||(ze=function(a){return!!a&&1===a.nodeType&&r(a)&&!Jh(a)});var Hh=yg||function(a){return"number"==typeof a&&tg(a)},Ih=h(/x/)||og&&!h(og)?function(a){return _f.call(a)==Y}:h,Jh=hg?function(a){if(!a||_f.call(a)!=_||!c.support.argsTag&&we(a))return!1;var b=Qc(a,"valueOf"),d=b&&(d=hg(b))&&hg(d);return d?a==d||hg(a)==d:fd(a)}:fd,Kh=lc(function(a,b,c){return c?rb(a,b,c):sb(a,b)}),Lh=oe(function(a){var b=a[0];return null==b?b:(a.push(pb),Kh.apply(z,a))}),Mh=vc(Gb),Nh=vc(Hb),Oh=yc(Qg),Ph=yc(Rg),Qh=zc(Gb),Rh=zc(Hb),Sh=ug?function(a){var b=null==a?null:a.constructor;return"function"==typeof b&&b.prototype===a||("function"==typeof a?c.support.enumPrototypes:Wc(a))?gd(a):De(a)?ug(a):[]}:gd,Th=Ac(!0),Uh=Ac(),Vh=lc(Qb),Wh=oe(function(a,b){if(null==a)return{};if("function"!=typeof b[0]){var b=kb(Eb(b),Rf);return cd(a,yb(We(a),b))}var c=gc(b[0],b[1],3);return dd(a,function(a,b,d){return!c(a,b,d)})}),Xh=oe(function(a,b){return null==a?{}:"function"==typeof b[0]?dd(a,gc(b[0],b[1],3)):cd(a,Eb(b))}),Yh=pc(function(a,b,c){return b=b.toLowerCase(),a+(c?b.charAt(0).toUpperCase()+b.slice(1):b)}),Zh=pc(function(a,b,c){return a+(c?"-":"")+b.toLowerCase()}),$h=Bc(),_h=Bc(!0);8!=zg(Oa+"08")&&(kf=function(a,b,c){return(c?Yc(a,b,c):null==b)?b=0:b&&(b=+b),a=of(a),zg(a,b||(Ha.test(a)?16:10))});var ai=pc(function(a,b,c){return a+(c?"_":"")+b.toLowerCase()}),bi=pc(function(a,b,c){return a+(c?" ":"")+(b.charAt(0).toUpperCase()+b.slice(1))}),ci=oe(function(a,b){try{return a.apply(z,b)}catch(c){return Ce(c)?c:new Lf(c)}}),di=oe(function(a,b){return function(c){return Vc(c,a,b)}}),ei=oe(function(a,b){return function(c){return Vc(a,c,b)}}),fi=sc(ue,Bg),gi=sc(Ne,Cg);return c.prototype=d.prototype,e.prototype=Ng(d.prototype),e.prototype.constructor=e,s.prototype=Ng(d.prototype),s.prototype.constructor=s,Va.prototype["delete"]=Wa,Va.prototype.get=Xa,Va.prototype.has=Ya,Va.prototype.set=Za,$a.prototype.push=ab,le.Cache=Va,c.after=he,c.ary=ie,c.assign=Kh,c.at=gh,c.before=je,c.bind=uh,c.bindAll=vh,c.bindKey=wh,c.callback=uf,c.chain=Md,c.chunk=ld,c.compact=md,c.constant=vf,c.countBy=hh,c.create=Re,c.curry=xh,c.curryRight=yh,c.debounce=ke,c.defaults=Lh,c.defer=zh,c.delay=Ah,c.difference=Xg,c.drop=nd,c.dropRight=od,c.dropRightWhile=pd,c.dropWhile=qd,c.fill=rd,c.filter=Wd,c.flatten=td,c.flattenDeep=ud,c.flow=Bh,c.flowRight=Ch,c.forEach=kh,c.forEachRight=lh,c.forIn=Oh,c.forInRight=Ph,c.forOwn=Qh,c.forOwnRight=Rh,c.functions=Se,c.groupBy=mh,c.indexBy=nh,c.initial=wd,c.intersection=$g,c.invert=Ve,c.invoke=oh,c.keys=Sh,c.keysIn=We,c.map=Zd,c.mapKeys=Th,c.mapValues=Uh,c.matches=xf,c.matchesProperty=yf,c.memoize=le,c.merge=Vh,c.method=di,c.methodOf=ei,c.mixin=zf,c.negate=me,c.omit=Wh,c.once=ne,c.pairs=Xe,c.partial=Dh,c.partialRight=Eh,c.partition=ph,c.pick=Xh,c.pluck=$d,c.property=Cf,c.propertyOf=Df,c.pull=zd,c.pullAt=_g,c.range=Ef,c.rearg=Fh,c.reject=_d,c.remove=Ad,c.rest=Bd,c.restParam=oe,c.set=Ze,c.shuffle=be,c.slice=Cd,c.sortBy=ee,c.sortByAll=sh,c.sortByOrder=fe,c.spread=pe,c.take=Dd,c.takeRight=Ed,c.takeRightWhile=Fd,c.takeWhile=Gd,c.tap=Nd,c.throttle=qe,c.thru=Od,c.times=Ff,c.toArray=Pe,c.toPlainObject=Qe,c.transform=$e,c.union=ch,c.uniq=Hd,c.unzip=Id,c.unzipWith=Jd,c.values=_e,c.valuesIn=af,c.where=ge,c.without=dh,c.wrap=re,c.xor=Kd,c.zip=eh,c.zipObject=Ld,c.zipWith=fh,c.backflow=Ch,c.collect=Zd,c.compose=Ch,c.each=kh,c.eachRight=lh,c.extend=Kh,c.iteratee=uf,c.methods=Se,c.object=Ld,c.select=Wd,c.tail=Bd,c.unique=Hd,zf(c,c),c.add=Hf,c.attempt=ci,c.camelCase=Yh,c.capitalize=df,c.clone=se,c.cloneDeep=te,c.deburr=ef,c.endsWith=ff,c.escape=gf,c.escapeRegExp=hf,c.every=Vd,c.find=ih,c.findIndex=Yg,c.findKey=Mh,c.findLast=jh,c.findLastIndex=Zg,c.findLastKey=Nh,c.findWhere=Xd,c.first=sd,c.get=Te,c.gt=ue,c.gte=ve,c.has=Ue,c.identity=wf,c.includes=Yd,c.indexOf=vd,c.inRange=bf,c.isArguments=we,c.isArray=Gh,c.isBoolean=xe,c.isDate=ye,c.isElement=ze,c.isEmpty=Ae,c.isEqual=Be,c.isError=Ce,c.isFinite=Hh,c.isFunction=Ih,c.isMatch=Ee,c.isNaN=Fe,c.isNative=Ge,c.isNull=He,c.isNumber=Ie,c.isObject=De,c.isPlainObject=Jh,c.isRegExp=Je,c.isString=Ke,c.isTypedArray=Le,c.isUndefined=Me,c.kebabCase=Zh,c.last=xd,c.lastIndexOf=yd,c.lt=Ne,c.lte=Oe,c.max=fi,c.min=gi,c.noConflict=Af,c.noop=Bf,c.now=th,c.pad=jf,c.padLeft=$h,c.padRight=_h,c.parseInt=kf,c.random=cf,c.reduce=qh,c.reduceRight=rh,c.repeat=lf,c.result=Ye,c.runInContext=y,c.size=ce,c.snakeCase=ai,c.some=de,c.sortedIndex=ah,c.sortedLastIndex=bh,c.startCase=bi,c.startsWith=mf,c.sum=If,c.template=nf,c.trim=of,c.trimLeft=pf,c.trimRight=qf,c.trunc=rf,c.unescape=sf,c.uniqueId=Gf,c.words=tf,c.all=Vd,c.any=de,c.contains=Yd,c.eq=Be,c.detect=ih,c.foldl=qh,c.foldr=rh,c.head=sd,c.include=Yd,c.inject=qh,zf(c,function(){var a={};return Gb(c,function(b,d){c.prototype[d]||(a[d]=b)}),a}(),!1),c.sample=ae,c.prototype.sample=function(a){return this.__chain__||null!=a?this.thru(function(b){return ae(b,a)}):ae(this.value())},c.VERSION=A,cb(["bind","bindKey","curry","curryRight","partial","partialRight"],function(a){c[a].placeholder=c}),cb(["dropWhile","filter","map","takeWhile"],function(a,b){var c=b!=Q,d=b==O;s.prototype[a]=function(a,e){var f=this.__filtered__,g=f&&d?new s(this):this.clone(),h=g.__iteratees__||(g.__iteratees__=[]);return h.push({done:!1,count:0,index:0,iteratee:Mc(a,e,1),limit:-1,type:b}),g.__filtered__=f||c,g}}),cb(["drop","take"],function(a,b){var c=a+"While";s.prototype[a]=function(c){var d=this.__filtered__,e=d&&!b?this.dropWhile():this.clone();if(c=null==c?1:vg(gg(c)||0,0),d)b?e.__takeCount__=wg(e.__takeCount__,c):xd(e.__iteratees__).limit=c;else{var f=e.__views__||(e.__views__=[]);f.push({size:c,type:a+(e.__dir__<0?"Right":"")})}return e},s.prototype[a+"Right"]=function(b){return this.reverse()[a](b).reverse()},s.prototype[a+"RightWhile"]=function(a,b){return this.reverse()[c](a,b).reverse()}}),cb(["first","last"],function(a,b){var c="take"+(b?"Right":"");s.prototype[a]=function(){return this[c](1).value()[0]}}),cb(["initial","rest"],function(a,b){var c="drop"+(b?"":"Right");s.prototype[a]=function(){return this[c](1)}}),cb(["pluck","where"],function(a,b){var c=b?"filter":"map",d=b?Ob:Cf;s.prototype[a]=function(a){return this[c](d(a))}}),s.prototype.compact=function(){return this.filter(wf)},s.prototype.reject=function(a,b){return a=Mc(a,b,1),this.filter(function(b){return!a(b)})},s.prototype.slice=function(a,b){a=null==a?0:+a||0;var c=this;return 0>a?c=this.takeRight(-a):a&&(c=this.drop(a)),b!==z&&(b=+b||0,c=0>b?c.dropRight(-b):c.take(b-a)),c},s.prototype.toArray=function(){return this.drop(0)},Gb(s.prototype,function(a,b){var d=c[b];if(d){var f=/^(?:filter|map|reject)|While$/.test(b),g=/^(?:first|last)$/.test(b);c.prototype[b]=function(){var b=arguments,h=this.__chain__,i=this.__wrapped__,j=!!this.__actions__.length,k=i instanceof s,l=b[0],m=k||Gh(i);m&&f&&"function"==typeof l&&1!=l.length&&(k=m=!1);var n=k&&!j;if(g&&!h)return n?a.call(i):d.call(c,this.value());var o=function(a){var e=[a];return jg.apply(e,b),d.apply(c,e)};if(m){var p=n?i:new s(this),q=a.apply(p,b);if(!g&&(j||q.__actions__)){var r=q.__actions__||(q.__actions__=[]);r.push({func:Od,args:[o],thisArg:c})}return new e(q,h)}return this.thru(o)}}}),cb(["concat","join","pop","push","replace","shift","sort","splice","split","unshift"],function(a){var b=(/^(?:replace|split)$/.test(a)?Wf:Tf)[a],d=/^(?:push|sort|unshift)$/.test(a)?"tap":"thru",e=!Mg.spliceObjects&&/^(?:pop|shift|splice)$/.test(a),f=/^(?:join|pop|replace|shift)$/.test(a),g=e?function(){var a=b.apply(this,arguments);return 0===this.length&&delete this[0],a}:b;c.prototype[a]=function(){var a=arguments;return f&&!this.__chain__?g.apply(this.value(),a):this[d](function(b){return g.apply(b,a)})}}),Gb(s.prototype,function(a,b){var d=c[b];if(d){var e=d.name,f=Jg[e]||(Jg[e]=[]);f.push({name:b,func:d})}}),Jg[Ec(null,C).name]=[{name:"wrapper",func:null}],s.prototype.clone=Z,s.prototype.reverse=ba,s.prototype.value=da,c.prototype.chain=Pd,c.prototype.commit=Qd,c.prototype.plant=Rd,c.prototype.reverse=Sd,c.prototype.toString=Td,c.prototype.run=c.prototype.toJSON=c.prototype.valueOf=c.prototype.value=Ud,c.prototype.collect=c.prototype.map,c.prototype.head=c.prototype.first,c.prototype.select=c.prototype.filter,c.prototype.tail=c.prototype.rest,c}var z,A="3.9.3",B=1,C=2,D=4,E=8,F=16,G=32,H=64,I=128,J=256,K=30,L="...",M=150,N=16,O=0,P=1,Q=2,R="Expected a function",S="__lodash_placeholder__",T="[object Arguments]",U="[object Array]",V="[object Boolean]",W="[object Date]",X="[object Error]",Y="[object Function]",Z="[object Map]",$="[object Number]",_="[object Object]",aa="[object RegExp]",ba="[object Set]",ca="[object String]",da="[object WeakMap]",ea="[object ArrayBuffer]",fa="[object Float32Array]",ga="[object Float64Array]",ha="[object Int8Array]",ia="[object Int16Array]",ja="[object Int32Array]",ka="[object Uint8Array]",la="[object Uint8ClampedArray]",ma="[object Uint16Array]",na="[object Uint32Array]",oa=/\b__p \+= '';/g,pa=/\b(__p \+=) '' \+/g,qa=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ra=/&(?:amp|lt|gt|quot|#39|#96);/g,sa=/[&<>"'`]/g,ta=RegExp(ra.source),ua=RegExp(sa.source),va=/<%-([\s\S]+?)%>/g,wa=/<%([\s\S]+?)%>/g,xa=/<%=([\s\S]+?)%>/g,ya=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,za=/^\w*$/,Aa=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,Ba=/[.*+?^${}()|[\]\/\\]/g,Ca=RegExp(Ba.source),Da=/[\u0300-\u036f\ufe20-\ufe23]/g,Ea=/\\(\\)?/g,Fa=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ga=/\w*$/,Ha=/^0[xX]/,Ia=/^\[object .+?Constructor\]$/,Ja=/^\d+$/,Ka=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,La=/($^)/,Ma=/['\n\r\u2028\u2029\\]/g,Na=function(){var a="[A-Z\\xc0-\\xd6\\xd8-\\xde]",b="[a-z\\xdf-\\xf6\\xf8-\\xff]+";return RegExp(a+"+(?="+a+b+")|"+a+"?"+b+"|"+a+"+|[0-9]+","g")}(),Oa=" 	\f \ufeff\n\r\u2028\u2029 ᠎             　",Pa=["Array","ArrayBuffer","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Math","Number","Object","RegExp","Set","String","_","clearTimeout","document","isFinite","parseFloat","parseInt","setTimeout","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","window"],Qa=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ra=-1,Sa={};Sa[fa]=Sa[ga]=Sa[ha]=Sa[ia]=Sa[ja]=Sa[ka]=Sa[la]=Sa[ma]=Sa[na]=!0,Sa[T]=Sa[U]=Sa[ea]=Sa[V]=Sa[W]=Sa[X]=Sa[Y]=Sa[Z]=Sa[$]=Sa[_]=Sa[aa]=Sa[ba]=Sa[ca]=Sa[da]=!1;var Ta={};Ta[T]=Ta[U]=Ta[ea]=Ta[V]=Ta[W]=Ta[fa]=Ta[ga]=Ta[ha]=Ta[ia]=Ta[ja]=Ta[$]=Ta[_]=Ta[aa]=Ta[ca]=Ta[ka]=Ta[la]=Ta[ma]=Ta[na]=!0,Ta[X]=Ta[Y]=Ta[Z]=Ta[ba]=Ta[da]=!1;var Ua={leading:!1,maxWait:0,trailing:!1},Va={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae",
"æ":"ae","Þ":"Th","þ":"th","ß":"ss"},Wa={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Xa={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},Ya={"function":!0,object:!0},Za={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},$a=Ya[typeof d]&&d&&!d.nodeType&&d,_a=Ya[typeof c]&&c&&!c.nodeType&&c,ab=$a&&_a&&"object"==typeof e&&e&&e.Object&&e,bb=Ya[typeof self]&&self&&self.Object&&self,cb=Ya[typeof window]&&window&&window.Object&&window,db=_a&&_a.exports===$a&&$a,eb=ab||cb!==(this&&this.window)&&cb||bb||this,fb=function(){try{Object({toString:0}+"")}catch(a){return function(){return!1}}return function(a){return"function"!=typeof a.toString&&"string"==typeof(a+"")}}(),gb=y();"function"==typeof a&&"object"==typeof a.amd&&a.amd?(eb._=gb,a(function(){return gb})):$a&&_a?db?(_a.exports=gb)._=gb:$a._=gb:eb._=gb}).call(this)},{}],16:[function(a,b,c){function d(){throw new Error('Looks like you are expecting the previous "elasticsearch" module. It is now the "es" module. To create a client with this module use `new es.Client(params)`.')}d.Client=a("./lib/client"),d.ConnectionPool=a("./lib/connection_pool"),d.Transport=a("./lib/transport"),d.errors=a("./lib/errors"),b.exports=d},{"./lib/client":21,"./lib/connection_pool":24,"./lib/errors":27,"./lib/transport":40}],17:[function(a,b,c){var d=a("../client_action").factory,e=a("../client_action").namespaceFactory,f=b.exports={};f._namespaces=["cat","cluster","indices","nodes","snapshot"],f.bulk=d({params:{consistency:{type:"enum",options:["one","quorum","all"]},refresh:{type:"boolean"},replication:{type:"enum","default":"sync",options:["sync","async"]},routing:{type:"string"},timeout:{type:"time"},type:{type:"string"}},urls:[{fmt:"/<%=index%>/<%=type%>/_bulk",req:{index:{type:"string"},type:{type:"string"}}},{fmt:"/<%=index%>/_bulk",req:{index:{type:"string"}}},{fmt:"/_bulk"}],needBody:!0,bulkBody:!0,method:"POST"}),f.cat=e(),f.cat.prototype.aliases=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},urls:[{fmt:"/_cat/aliases/<%=name%>",req:{name:{type:"list"}}},{fmt:"/_cat/aliases"}]}),f.cat.prototype.allocation=d({params:{bytes:{type:"enum",options:["b","k","m","g"]},local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},urls:[{fmt:"/_cat/allocation/<%=nodeId%>",req:{nodeId:{type:"list"}}},{fmt:"/_cat/allocation"}]}),f.cat.prototype.count=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},urls:[{fmt:"/_cat/count/<%=index%>",req:{index:{type:"list"}}},{fmt:"/_cat/count"}]}),f.cat.prototype.fielddata=d({params:{bytes:{type:"enum",options:["b","k","m","g"]},local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1},fields:{type:"list"}},urls:[{fmt:"/_cat/fielddata/<%=fields%>",req:{fields:{type:"list"}}},{fmt:"/_cat/fielddata"}]}),f.cat.prototype.health=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},ts:{type:"boolean","default":!0},v:{type:"boolean","default":!1}},url:{fmt:"/_cat/health"}}),f.cat.prototype.help=d({params:{help:{type:"boolean","default":!1}},url:{fmt:"/_cat"}}),f.cat.prototype.indices=d({params:{bytes:{type:"enum",options:["b","k","m","g"]},local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},pri:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},urls:[{fmt:"/_cat/indices/<%=index%>",req:{index:{type:"list"}}},{fmt:"/_cat/indices"}]}),f.cat.prototype.master=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},url:{fmt:"/_cat/master"}}),f.cat.prototype.nodes=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},url:{fmt:"/_cat/nodes"}}),f.cat.prototype.pendingTasks=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},url:{fmt:"/_cat/pending_tasks"}}),f.cat.prototype.plugins=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},url:{fmt:"/_cat/plugins"}}),f.cat.prototype.recovery=d({params:{bytes:{type:"enum",options:["b","k","m","g"]},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},urls:[{fmt:"/_cat/recovery/<%=index%>",req:{index:{type:"list"}}},{fmt:"/_cat/recovery"}]}),f.cat.prototype.segments=d({params:{h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!0}},urls:[{fmt:"/_cat/segments/<%=index%>",req:{index:{type:"list"}}},{fmt:"/_cat/segments"}]}),f.cat.prototype.shards=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},urls:[{fmt:"/_cat/shards/<%=index%>",req:{index:{type:"list"}}},{fmt:"/_cat/shards"}]}),f.cat.prototype.threadPool=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1},fullId:{type:"boolean","default":!1,name:"full_id"}},url:{fmt:"/_cat/thread_pool"}}),f.clearScroll=d({urls:[{fmt:"/_search/scroll/<%=scrollId%>",req:{scrollId:{type:"list"}}},{fmt:"/_search/scroll"}],method:"DELETE"}),f.cluster=e(),f.cluster.prototype.getSettings=d({params:{flatSettings:{type:"boolean",name:"flat_settings"},masterTimeout:{type:"time",name:"master_timeout"},timeout:{type:"time"}},url:{fmt:"/_cluster/settings"}}),f.cluster.prototype.health=d({params:{level:{type:"enum","default":"cluster",options:["cluster","indices","shards"]},local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},timeout:{type:"time"},waitForActiveShards:{type:"number",name:"wait_for_active_shards"},waitForNodes:{type:"string",name:"wait_for_nodes"},waitForRelocatingShards:{type:"number",name:"wait_for_relocating_shards"},waitForStatus:{type:"enum","default":null,options:["green","yellow","red"],name:"wait_for_status"}},urls:[{fmt:"/_cluster/health/<%=index%>",req:{index:{type:"string"}}},{fmt:"/_cluster/health"}]}),f.cluster.prototype.pendingTasks=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/_cluster/pending_tasks"}}),f.cluster.prototype.putSettings=d({params:{flatSettings:{type:"boolean",name:"flat_settings"},masterTimeout:{type:"time",name:"master_timeout"},timeout:{type:"time"}},url:{fmt:"/_cluster/settings"},method:"PUT"}),f.cluster.prototype.reroute=d({params:{dryRun:{type:"boolean",name:"dry_run"},explain:{type:"boolean"},metric:{type:"list",options:["_all","blocks","metadata","nodes","routing_table","master_node","version"]},masterTimeout:{type:"time",name:"master_timeout"},timeout:{type:"time"}},url:{fmt:"/_cluster/reroute"},method:"POST"}),f.cluster.prototype.state=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},flatSettings:{type:"boolean",name:"flat_settings"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"}},urls:[{fmt:"/_cluster/state/<%=metric%>/<%=index%>",req:{metric:{type:"list",options:["_all","blocks","metadata","nodes","routing_table","master_node","version"]},index:{type:"list"}}},{fmt:"/_cluster/state/<%=metric%>",req:{metric:{type:"list",options:["_all","blocks","metadata","nodes","routing_table","master_node","version"]}}},{fmt:"/_cluster/state"}]}),f.cluster.prototype.stats=d({params:{flatSettings:{type:"boolean",name:"flat_settings"},human:{type:"boolean","default":!1}},urls:[{fmt:"/_cluster/stats/nodes/<%=nodeId%>",req:{nodeId:{type:"list"}}},{fmt:"/_cluster/stats"}]}),f.count=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},minScore:{type:"number",name:"min_score"},preference:{type:"string"},routing:{type:"string"},source:{type:"string"}},urls:[{fmt:"/<%=index%>/<%=type%>/_count",req:{index:{type:"list"},type:{type:"list"}}},{fmt:"/<%=index%>/_count",req:{index:{type:"list"}}},{fmt:"/_count"}],method:"POST"}),f.countPercolate=d({params:{source:{type:"string"},routing:{type:"list"},preference:{type:"string"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},percolateIndex:{type:"string",name:"percolate_index"},percolateType:{type:"string",name:"percolate_type"},version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},urls:[{fmt:"/<%=index%>/<%=type%>/<%=id%>/_percolate/count",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}},{fmt:"/<%=index%>/<%=type%>/_percolate/count",req:{index:{type:"string"},type:{type:"string"}}}],method:"POST"}),f["delete"]=d({params:{consistency:{type:"enum",options:["one","quorum","all"]},parent:{type:"string"},refresh:{type:"boolean"},replication:{type:"enum","default":"sync",options:["sync","async"]},routing:{type:"string"},timeout:{type:"time"},version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},url:{fmt:"/<%=index%>/<%=type%>/<%=id%>",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}},method:"DELETE"}),f.deleteByQuery=d({params:{analyzer:{type:"string"},consistency:{type:"enum",options:["one","quorum","all"]},defaultOperator:{type:"enum","default":"OR",options:["AND","OR"],name:"default_operator"},df:{type:"string"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},replication:{type:"enum","default":"sync",options:["sync","async"]},q:{type:"string"},routing:{type:"string"},source:{type:"string"},timeout:{type:"time"}},urls:[{fmt:"/<%=index%>/<%=type%>/_query",req:{index:{type:"list"},type:{type:"list"}}},{fmt:"/<%=index%>/_query",req:{index:{type:"list"}}}],method:"DELETE"}),f.deleteScript=d({params:{version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},url:{fmt:"/_scripts/<%=lang%>/<%=id%>",req:{lang:{type:"string"},id:{type:"string"}}},method:"DELETE"}),f.deleteTemplate=d({params:{version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},url:{fmt:"/_search/template/<%=id%>",req:{id:{type:"string"}}},method:"DELETE"}),f.exists=d({params:{parent:{type:"string"},preference:{type:"string"},realtime:{type:"boolean"},refresh:{type:"boolean"},routing:{type:"string"}},url:{fmt:"/<%=index%>/<%=type%>/<%=id%>",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}},method:"HEAD"}),f.explain=d({params:{analyzeWildcard:{type:"boolean",name:"analyze_wildcard"},analyzer:{type:"string"},defaultOperator:{type:"enum","default":"OR",options:["AND","OR"],name:"default_operator"},df:{type:"string"},fields:{type:"list"},lenient:{type:"boolean"},lowercaseExpandedTerms:{type:"boolean",name:"lowercase_expanded_terms"},parent:{type:"string"},preference:{type:"string"},q:{type:"string"},routing:{type:"string"},source:{type:"string"},_source:{type:"list"},_sourceExclude:{type:"list",name:"_source_exclude"},_sourceInclude:{type:"list",name:"_source_include"}},url:{fmt:"/<%=index%>/<%=type%>/<%=id%>/_explain",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}},method:"POST"}),f.get=d({params:{fields:{type:"list"},parent:{type:"string"},preference:{type:"string"},realtime:{type:"boolean"},refresh:{type:"boolean"},routing:{type:"string"},_source:{type:"list"},_sourceExclude:{type:"list",name:"_source_exclude"},_sourceInclude:{type:"list",name:"_source_include"},version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},url:{fmt:"/<%=index%>/<%=type%>/<%=id%>",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}}}),f.getScript=d({params:{version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},url:{fmt:"/_scripts/<%=lang%>/<%=id%>",req:{lang:{type:"string"},id:{type:"string"}}}}),f.getSource=d({params:{parent:{type:"string"},preference:{type:"string"},realtime:{type:"boolean"},refresh:{type:"boolean"},routing:{type:"string"},_source:{type:"list"},_sourceExclude:{type:"list",name:"_source_exclude"},_sourceInclude:{type:"list",name:"_source_include"},version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},url:{fmt:"/<%=index%>/<%=type%>/<%=id%>/_source",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}}}),f.getTemplate=d({params:{version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},url:{fmt:"/_search/template/<%=id%>",req:{id:{type:"string"}}}}),f.index=d({params:{consistency:{type:"enum",options:["one","quorum","all"]},opType:{type:"enum","default":"index",options:["index","create"],name:"op_type"},parent:{type:"string"},refresh:{type:"boolean"},replication:{type:"enum","default":"sync",options:["sync","async"]},routing:{type:"string"},timeout:{type:"time"},timestamp:{type:"time"},ttl:{type:"duration"},version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},urls:[{fmt:"/<%=index%>/<%=type%>/<%=id%>",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}},{fmt:"/<%=index%>/<%=type%>",req:{index:{type:"string"},type:{type:"string"}}}],needBody:!0,method:"POST"}),f.indices=e(),f.indices.prototype.analyze=d({params:{source:{type:"string"},analyzer:{type:"string"},charFilters:{type:"list",name:"char_filters"},field:{type:"string"},filters:{type:"list"},index:{type:"string"},preferLocal:{type:"boolean",name:"prefer_local"},text:{type:"string"},tokenizer:{type:"string"},format:{type:"enum","default":"detailed",options:["detailed","text"]}},urls:[{fmt:"/<%=index%>/_analyze",req:{index:{type:"string"}}},{fmt:"/_analyze"}],method:"POST"}),f.indices.prototype.clearCache=d({params:{fieldData:{type:"boolean",name:"field_data"},fielddata:{type:"boolean"},fields:{type:"list"},filter:{type:"boolean"},filterCache:{type:"boolean",name:"filter_cache"},filterKeys:{type:"boolean",name:"filter_keys"},id:{type:"boolean"},idCache:{type:"boolean",name:"id_cache"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},index:{type:"list"},recycler:{type:"boolean"},queryCache:{type:"boolean",name:"query_cache"}},urls:[{fmt:"/<%=index%>/_cache/clear",req:{index:{type:"list"}}},{fmt:"/_cache/clear"}],method:"POST"}),f.indices.prototype.close=d({params:{timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"}},url:{fmt:"/<%=index%>/_close",req:{index:{type:"string"}}},method:"POST"}),f.indices.prototype.create=d({params:{timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/<%=index%>",req:{index:{type:"string"}}},method:"POST"}),f.indices.prototype["delete"]=d({params:{timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/<%=index%>",req:{index:{type:"list"}}},method:"DELETE"}),f.indices.prototype.deleteAlias=d({params:{timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/<%=index%>/_alias/<%=name%>",req:{index:{type:"list"},name:{type:"list"}}},method:"DELETE"}),f.indices.prototype.deleteMapping=d({params:{masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/<%=index%>/<%=type%>/_mapping",req:{index:{type:"list"},type:{type:"list"}}},method:"DELETE"}),f.indices.prototype.deleteTemplate=d({params:{timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/_template/<%=name%>",req:{name:{type:"string"}}},method:"DELETE"}),f.indices.prototype.deleteWarmer=d({params:{masterTimeout:{type:"time",name:"master_timeout"},name:{type:"list"}},url:{fmt:"/<%=index%>/_warmer/<%=name%>",req:{index:{type:"list"},name:{type:"list"}}},method:"DELETE"}),f.indices.prototype.exists=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},local:{type:"boolean"}},url:{fmt:"/<%=index%>",req:{index:{type:"list"}}},method:"HEAD"}),f.indices.prototype.existsAlias=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":["open","closed"],options:["open","closed","none","all"],name:"expand_wildcards"},local:{type:"boolean"}},urls:[{fmt:"/<%=index%>/_alias/<%=name%>",req:{index:{type:"list"},name:{type:"list"}}},{fmt:"/_alias/<%=name%>",req:{name:{type:"list"}}},{fmt:"/<%=index%>/_alias",req:{index:{type:"list"}}}],method:"HEAD"}),f.indices.prototype.existsTemplate=d({params:{masterTimeout:{type:"time",name:"master_timeout"},local:{type:"boolean"}},url:{fmt:"/_template/<%=name%>",req:{name:{type:"string"}}},method:"HEAD"}),f.indices.prototype.existsType=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},local:{type:"boolean"}},url:{fmt:"/<%=index%>/<%=type%>",req:{index:{type:"list"},type:{type:"list"}}},method:"HEAD"}),f.indices.prototype.flush=d({params:{force:{type:"boolean"},waitIfOngoing:{type:"boolean",name:"wait_if_ongoing"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"}},urls:[{fmt:"/<%=index%>/_flush",req:{index:{type:"list"}}},{fmt:"/_flush"}],method:"POST"}),f.indices.prototype.get=d({params:{local:{type:"boolean"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"}},urls:[{fmt:"/<%=index%>/<%=feature%>",req:{index:{type:"list"},feature:{type:"list"}}},{fmt:"/<%=index%>",req:{index:{type:"list"}}}]}),f.indices.prototype.getAlias=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},local:{type:"boolean"}},urls:[{fmt:"/<%=index%>/_alias/<%=name%>",req:{index:{type:"list"},name:{type:"list"}}},{fmt:"/_alias/<%=name%>",req:{name:{type:"list"}}},{fmt:"/<%=index%>/_alias",req:{index:{type:"list"}}},{fmt:"/_alias"}]}),f.indices.prototype.getAliases=d({params:{timeout:{type:"time"},local:{type:"boolean"}},urls:[{fmt:"/<%=index%>/_aliases/<%=name%>",req:{index:{type:"list"},name:{type:"list"}}},{fmt:"/<%=index%>/_aliases",req:{index:{type:"list"}}},{fmt:"/_aliases/<%=name%>",req:{name:{type:"list"}}},{fmt:"/_aliases"}]}),f.indices.prototype.getFieldMapping=d({params:{includeDefaults:{type:"boolean",name:"include_defaults"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},local:{type:"boolean"}},urls:[{fmt:"/<%=index%>/_mapping/<%=type%>/field/<%=field%>",req:{index:{type:"list"},type:{type:"list"},field:{type:"list"}}},{fmt:"/<%=index%>/_mapping/field/<%=field%>",req:{index:{type:"list"},field:{type:"list"}}},{fmt:"/_mapping/<%=type%>/field/<%=field%>",req:{type:{type:"list"},field:{type:"list"}}},{fmt:"/_mapping/field/<%=field%>",req:{field:{type:"list"}}}]}),f.indices.prototype.getMapping=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},local:{type:"boolean"}},urls:[{fmt:"/<%=index%>/_mapping/<%=type%>",req:{index:{type:"list"},type:{type:"list"}}},{fmt:"/<%=index%>/_mapping",req:{index:{type:"list"}}},{fmt:"/_mapping/<%=type%>",req:{type:{type:"list"}}},{fmt:"/_mapping"}]}),f.indices.prototype.getSettings=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":["open","closed"],options:["open","closed","none","all"],name:"expand_wildcards"},flatSettings:{type:"boolean",name:"flat_settings"},local:{type:"boolean"}},urls:[{fmt:"/<%=index%>/_settings/<%=name%>",req:{index:{type:"list"},name:{type:"list"}}},{fmt:"/<%=index%>/_settings",req:{index:{type:"list"}}},{fmt:"/_settings/<%=name%>",req:{name:{type:"list"}}},{fmt:"/_settings"}]}),f.indices.prototype.getTemplate=d({params:{flatSettings:{type:"boolean",name:"flat_settings"},masterTimeout:{type:"time",name:"master_timeout"},local:{type:"boolean"}},urls:[{fmt:"/_template/<%=name%>",req:{name:{type:"string"}}},{fmt:"/_template"}]}),f.indices.prototype.getUpgrade=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},human:{type:"boolean","default":!1}},urls:[{fmt:"/<%=index%>/_upgrade",req:{index:{type:"list"}}},{fmt:"/_upgrade"}]}),f.indices.prototype.getWarmer=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},local:{type:"boolean"}},urls:[{fmt:"/<%=index%>/<%=type%>/_warmer/<%=name%>",req:{index:{type:"list"},type:{type:"list"},name:{type:"list"}}},{fmt:"/<%=index%>/_warmer/<%=name%>",req:{index:{type:"list"},name:{type:"list"}}},{fmt:"/<%=index%>/_warmer",req:{index:{type:"list"}}},{fmt:"/_warmer/<%=name%>",req:{name:{type:"list"}}},{fmt:"/_warmer"}]}),f.indices.prototype.open=d({params:{timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"closed",options:["open","closed","none","all"],name:"expand_wildcards"}},url:{fmt:"/<%=index%>/_open",req:{index:{type:"string"}}},method:"POST"}),f.indices.prototype.optimize=d({params:{flush:{type:"boolean"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},maxNumSegments:{type:"number",name:"max_num_segments"},onlyExpungeDeletes:{type:"boolean",name:"only_expunge_deletes"},operationThreading:{name:"operation_threading"},waitForMerge:{type:"boolean",name:"wait_for_merge"},force:{type:"boolean"}},urls:[{fmt:"/<%=index%>/_optimize",req:{index:{type:"list"}}},{fmt:"/_optimize"}],method:"POST"}),f.indices.prototype.putAlias=d({params:{timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/<%=index%>/_alias/<%=name%>",req:{index:{type:"list"},name:{type:"string"}}},method:"PUT"}),f.indices.prototype.putMapping=d({params:{ignoreConflicts:{type:"boolean",name:"ignore_conflicts"},timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"}},urls:[{fmt:"/<%=index%>/_mapping/<%=type%>",req:{index:{type:"list"},type:{type:"string"}}},{fmt:"/_mapping/<%=type%>",req:{type:{type:"string"}}}],needBody:!0,method:"PUT"}),f.indices.prototype.putSettings=d({params:{masterTimeout:{type:"time",name:"master_timeout"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},flatSettings:{type:"boolean",name:"flat_settings"}},urls:[{fmt:"/<%=index%>/_settings",req:{index:{type:"list"}}},{fmt:"/_settings"}],needBody:!0,method:"PUT"}),f.indices.prototype.putTemplate=d({params:{order:{type:"number"},create:{type:"boolean","default":!1},timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"},flatSettings:{type:"boolean",name:"flat_settings"}},url:{fmt:"/_template/<%=name%>",req:{name:{type:"string"}}},needBody:!0,method:"PUT"}),f.indices.prototype.putWarmer=d({params:{masterTimeout:{type:"time",name:"master_timeout"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"}},urls:[{fmt:"/<%=index%>/<%=type%>/_warmer/<%=name%>",req:{index:{type:"list"},type:{type:"list"},name:{type:"string"}}},{fmt:"/<%=index%>/_warmer/<%=name%>",req:{index:{type:"list"},name:{type:"string"}}},{fmt:"/_warmer/<%=name%>",req:{name:{type:"string"}}}],needBody:!0,method:"PUT"}),f.indices.prototype.recovery=d({params:{detailed:{type:"boolean","default":!1},activeOnly:{type:"boolean","default":!1,name:"active_only"},human:{type:"boolean","default":!1}},urls:[{fmt:"/<%=index%>/_recovery",req:{index:{type:"list"}}},{fmt:"/_recovery"}]}),f.indices.prototype.refresh=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},force:{type:"boolean","default":!1},operationThreading:{name:"operation_threading"}},urls:[{fmt:"/<%=index%>/_refresh",req:{index:{type:"list"}}},{fmt:"/_refresh"}],method:"POST"}),f.indices.prototype.segments=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},human:{type:"boolean","default":!1},operationThreading:{name:"operation_threading"}},urls:[{fmt:"/<%=index%>/_segments",req:{index:{type:"list"}}},{fmt:"/_segments"}]}),f.indices.prototype.stats=d({params:{completionFields:{type:"list",name:"completion_fields"},fielddataFields:{type:"list",name:"fielddata_fields"},fields:{type:"list"},groups:{type:"list"},human:{type:"boolean","default":!1},level:{type:"enum","default":"indices",options:["cluster","indices","shards"]},types:{type:"list"}},urls:[{fmt:"/<%=index%>/_stats/<%=metric%>",req:{index:{type:"list"},metric:{type:"list",options:["_all","completion","docs","fielddata","filter_cache","flush","get","id_cache","indexing","merge","percolate","query_cache","refresh","search","segments","store","warmer","suggest"]}}},{fmt:"/_stats/<%=metric%>",req:{metric:{type:"list",options:["_all","completion","docs","fielddata","filter_cache","flush","get","id_cache","indexing","merge","percolate","query_cache","refresh","search","segments","store","warmer","suggest"]}}},{fmt:"/<%=index%>/_stats",req:{index:{type:"list"}}},{fmt:"/_stats"}]}),f.indices.prototype.status=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},human:{type:"boolean","default":!1},operationThreading:{name:"operation_threading"},recovery:{type:"boolean"},snapshot:{type:"boolean"}},urls:[{fmt:"/<%=index%>/_status",req:{index:{type:"list"}}},{fmt:"/_status"}]}),f.indices.prototype.updateAliases=d({params:{timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/_aliases"},needBody:!0,method:"POST"}),f.indices.prototype.upgrade=d({params:{allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},waitForCompletion:{type:"boolean",name:"wait_for_completion"}},urls:[{fmt:"/<%=index%>/_upgrade",req:{index:{type:"list"}}},{fmt:"/_upgrade"}],method:"POST"}),f.indices.prototype.validateQuery=d({params:{explain:{type:"boolean"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},operationThreading:{name:"operation_threading"},source:{type:"string"},q:{type:"string"}},urls:[{fmt:"/<%=index%>/<%=type%>/_validate/query",req:{index:{type:"list"},type:{type:"list"}}},{fmt:"/<%=index%>/_validate/query",req:{index:{type:"list"}}},{fmt:"/_validate/query"}],method:"POST"}),f.info=d({url:{fmt:"/"}}),f.mget=d({params:{source:{type:"string"},fields:{type:"list"},preference:{type:"string"},realtime:{type:"boolean"},refresh:{type:"boolean"},_source:{type:"list"},_sourceExclude:{type:"list",name:"_source_exclude"},_sourceInclude:{type:"list",name:"_source_include"}},urls:[{fmt:"/<%=index%>/<%=type%>/_mget",req:{index:{type:"string"},type:{type:"string"}}},{fmt:"/<%=index%>/_mget",req:{index:{type:"string"}}},{fmt:"/_mget"}],needBody:!0,method:"POST"}),f.mlt=d({params:{source:{type:"string"},boostTerms:{type:"number",name:"boost_terms"},maxDocFreq:{type:"number",name:"max_doc_freq"},maxQueryTerms:{type:"number",name:"max_query_terms"},maxWordLength:{type:"number",name:"max_word_length"},minDocFreq:{type:"number",name:"min_doc_freq"},minTermFreq:{type:"number",name:"min_term_freq"},minWordLength:{type:"number",name:"min_word_length"},mltFields:{type:"list",name:"mlt_fields"},percentTermsToMatch:{type:"number",name:"percent_terms_to_match"},routing:{type:"string"},searchFrom:{type:"number",name:"search_from"},searchIndices:{type:"list",name:"search_indices"},searchScroll:{type:"string",name:"search_scroll"},searchSize:{type:"number",name:"search_size"},searchSource:{type:"string",name:"search_source"
},searchType:{type:"string",name:"search_type"},searchTypes:{type:"list",name:"search_types"},stopWords:{type:"list",name:"stop_words"}},url:{fmt:"/<%=index%>/<%=type%>/<%=id%>/_mlt",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}},method:"POST"}),f.mpercolate=d({params:{source:{type:"string"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"}},urls:[{fmt:"/<%=index%>/<%=type%>/_mpercolate",req:{index:{type:"string"},type:{type:"string"}}},{fmt:"/<%=index%>/_mpercolate",req:{index:{type:"string"}}},{fmt:"/_mpercolate"}],needBody:!0,bulkBody:!0,method:"POST"}),f.msearch=d({params:{source:{type:"string"},searchType:{type:"enum",options:["query_then_fetch","query_and_fetch","dfs_query_then_fetch","dfs_query_and_fetch","count","scan"],name:"search_type"}},urls:[{fmt:"/<%=index%>/<%=type%>/_msearch",req:{index:{type:"list"},type:{type:"list"}}},{fmt:"/<%=index%>/_msearch",req:{index:{type:"list"}}},{fmt:"/_msearch"}],needBody:!0,bulkBody:!0,method:"POST"}),f.mtermvectors=d({params:{source:{type:"string"},ids:{type:"list",required:!1},termStatistics:{type:"boolean","default":!1,required:!1,name:"term_statistics"},fieldStatistics:{type:"boolean","default":!0,required:!1,name:"field_statistics"},fields:{type:"list",required:!1},offsets:{type:"boolean","default":!0,required:!1},positions:{type:"boolean","default":!0,required:!1},payloads:{type:"boolean","default":!0,required:!1},preference:{type:"string",required:!1},routing:{type:"string",required:!1},parent:{type:"string",required:!1},realtime:{type:"boolean",required:!1}},urls:[{fmt:"/<%=index%>/<%=type%>/_mtermvectors",req:{index:{type:"string"},type:{type:"string"}}},{fmt:"/<%=index%>/_mtermvectors",req:{index:{type:"string"}}},{fmt:"/_mtermvectors"}],method:"POST"}),f.nodes=e(),f.nodes.prototype.hotThreads=d({params:{interval:{type:"time"},snapshots:{type:"number"},threads:{type:"number"},ignoreIdleThreads:{type:"boolean",name:"ignore_idle_threads"},type:{type:"enum",options:["cpu","wait","block"]}},urls:[{fmt:"/_nodes/<%=nodeId%>/hotthreads",req:{nodeId:{type:"list"}}},{fmt:"/_nodes/hotthreads"}]}),f.nodes.prototype.info=d({params:{flatSettings:{type:"boolean",name:"flat_settings"},human:{type:"boolean","default":!1}},urls:[{fmt:"/_nodes/<%=nodeId%>/<%=metric%>",req:{nodeId:{type:"list"},metric:{type:"list",options:["settings","os","process","jvm","thread_pool","network","transport","http","plugins"]}}},{fmt:"/_nodes/<%=nodeId%>",req:{nodeId:{type:"list"}}},{fmt:"/_nodes/<%=metric%>",req:{metric:{type:"list",options:["settings","os","process","jvm","thread_pool","network","transport","http","plugins"]}}},{fmt:"/_nodes"}]}),f.nodes.prototype.shutdown=d({params:{delay:{type:"time"},exit:{type:"boolean"}},urls:[{fmt:"/_cluster/nodes/<%=nodeId%>/_shutdown",req:{nodeId:{type:"list"}}},{fmt:"/_shutdown"}],method:"POST"}),f.nodes.prototype.stats=d({params:{completionFields:{type:"list",name:"completion_fields"},fielddataFields:{type:"list",name:"fielddata_fields"},fields:{type:"list"},groups:{type:"boolean"},human:{type:"boolean","default":!1},level:{type:"enum","default":"node",options:["node","indices","shards"]},types:{type:"list"}},urls:[{fmt:"/_nodes/<%=nodeId%>/stats/<%=metric%>/<%=indexMetric%>",req:{nodeId:{type:"list"},metric:{type:"list",options:["_all","breaker","fs","http","indices","jvm","network","os","process","thread_pool","transport"]},indexMetric:{type:"list",options:["_all","completion","docs","fielddata","filter_cache","flush","get","id_cache","indexing","merge","percolate","query_cache","refresh","search","segments","store","warmer","suggest"]}}},{fmt:"/_nodes/<%=nodeId%>/stats/<%=metric%>",req:{nodeId:{type:"list"},metric:{type:"list",options:["_all","breaker","fs","http","indices","jvm","network","os","process","thread_pool","transport"]}}},{fmt:"/_nodes/stats/<%=metric%>/<%=indexMetric%>",req:{metric:{type:"list",options:["_all","breaker","fs","http","indices","jvm","network","os","process","thread_pool","transport"]},indexMetric:{type:"list",options:["_all","completion","docs","fielddata","filter_cache","flush","get","id_cache","indexing","merge","percolate","query_cache","refresh","search","segments","store","warmer","suggest"]}}},{fmt:"/_nodes/<%=nodeId%>/stats",req:{nodeId:{type:"list"}}},{fmt:"/_nodes/stats/<%=metric%>",req:{metric:{type:"list",options:["_all","breaker","fs","http","indices","jvm","network","os","process","thread_pool","transport"]}}},{fmt:"/_nodes/stats"}]}),f.percolate=d({params:{source:{type:"string"},routing:{type:"list"},preference:{type:"string"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},percolateFormat:{type:"enum",options:["ids"],name:"percolate_format"},percolateIndex:{type:"string",name:"percolate_index"},percolateType:{type:"string",name:"percolate_type"},percolateRouting:{type:"string",name:"percolate_routing"},percolatePreference:{type:"string",name:"percolate_preference"},version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},urls:[{fmt:"/<%=index%>/<%=type%>/<%=id%>/_percolate",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}},{fmt:"/<%=index%>/<%=type%>/_percolate",req:{index:{type:"string"},type:{type:"string"}}}],method:"POST"}),f.ping=d({url:{fmt:"/"},requestTimeout:3e3,method:"HEAD"}),f.putScript=d({params:{opType:{type:"enum","default":"index",options:["index","create"],name:"op_type"},version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},url:{fmt:"/_scripts/<%=lang%>/<%=id%>",req:{lang:{type:"string"},id:{type:"string"}}},needBody:!0,method:"PUT"}),f.putTemplate=d({params:{opType:{type:"enum","default":"index",options:["index","create"],name:"op_type"},version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},url:{fmt:"/_search/template/<%=id%>",req:{id:{type:"string"}}},needBody:!0,method:"PUT"}),f.scroll=d({params:{source:{type:"string"},scroll:{type:"duration"},scrollId:{type:"string",name:"scroll_id"}},urls:[{fmt:"/_search/scroll/<%=scrollId%>",req:{scrollId:{type:"string"}}},{fmt:"/_search/scroll"}],paramAsBody:"scrollId",method:"POST"}),f.search=d({params:{analyzer:{type:"string"},analyzeWildcard:{type:"boolean",name:"analyze_wildcard"},defaultOperator:{type:"enum","default":"OR",options:["AND","OR"],name:"default_operator"},df:{type:"string"},explain:{type:"boolean"},fields:{type:"list"},fielddataFields:{type:"list",name:"fielddata_fields"},from:{type:"number"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},indicesBoost:{type:"list",name:"indices_boost"},lenient:{type:"boolean"},lowercaseExpandedTerms:{type:"boolean",name:"lowercase_expanded_terms"},preference:{type:"string"},q:{type:"string"},routing:{type:"list"},scroll:{type:"duration"},searchType:{type:"enum",options:["query_then_fetch","query_and_fetch","dfs_query_then_fetch","dfs_query_and_fetch","count","scan"],name:"search_type"},size:{type:"number"},sort:{type:"list"},source:{type:"string"},_source:{type:"list"},_sourceExclude:{type:"list",name:"_source_exclude"},_sourceInclude:{type:"list",name:"_source_include"},stats:{type:"list"},suggestField:{type:"string",name:"suggest_field"},suggestMode:{type:"enum","default":"missing",options:["missing","popular","always"],name:"suggest_mode"},suggestSize:{type:"number",name:"suggest_size"},suggestText:{type:"text",name:"suggest_text"},timeout:{type:"time"},trackScores:{type:"boolean",name:"track_scores"},version:{type:"boolean"},queryCache:{type:"boolean",name:"query_cache"}},urls:[{fmt:"/<%=index%>/<%=type%>/_search",req:{index:{type:"list"},type:{type:"list"}}},{fmt:"/<%=index%>/_search",req:{index:{type:"list"}}},{fmt:"/_search"}],method:"POST"}),f.searchExists=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},minScore:{type:"number",name:"min_score"},preference:{type:"string"},routing:{type:"string"},source:{type:"string"}},urls:[{fmt:"/<%=index%>/<%=type%>/_search/exists",req:{index:{type:"list"},type:{type:"list"}}},{fmt:"/<%=index%>/_search/exists",req:{index:{type:"list"}}},{fmt:"/_search/exists"}],method:"POST"}),f.searchShards=d({params:{preference:{type:"string"},routing:{type:"string"},local:{type:"boolean"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"}},urls:[{fmt:"/<%=index%>/<%=type%>/_search_shards",req:{index:{type:"string"},type:{type:"string"}}},{fmt:"/<%=index%>/_search_shards",req:{index:{type:"string"}}},{fmt:"/_search_shards"}],method:"POST"}),f.searchTemplate=d({params:{source:{type:"string"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},preference:{type:"string"},routing:{type:"list"},scroll:{type:"duration"},searchType:{type:"enum",options:["query_then_fetch","query_and_fetch","dfs_query_then_fetch","dfs_query_and_fetch","count","scan"],name:"search_type"}},urls:[{fmt:"/<%=index%>/<%=type%>/_search/template",req:{index:{type:"list"},type:{type:"list"}}},{fmt:"/<%=index%>/_search/template",req:{index:{type:"list"}}},{fmt:"/_search/template"}],method:"POST"}),f.snapshot=e(),f.snapshot.prototype.create=d({params:{masterTimeout:{type:"time",name:"master_timeout"},waitForCompletion:{type:"boolean","default":!1,name:"wait_for_completion"}},url:{fmt:"/_snapshot/<%=repository%>/<%=snapshot%>/_create",req:{repository:{type:"string"},snapshot:{type:"string"}}},method:"POST"}),f.snapshot.prototype.createRepository=d({params:{masterTimeout:{type:"time",name:"master_timeout"},timeout:{type:"time"},verify:{type:"boolean"}},url:{fmt:"/_snapshot/<%=repository%>",req:{repository:{type:"string"}}},needBody:!0,method:"POST"}),f.snapshot.prototype["delete"]=d({params:{masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/_snapshot/<%=repository%>/<%=snapshot%>",req:{repository:{type:"string"},snapshot:{type:"string"}}},method:"DELETE"}),f.snapshot.prototype.deleteRepository=d({params:{masterTimeout:{type:"time",name:"master_timeout"},timeout:{type:"time"}},url:{fmt:"/_snapshot/<%=repository%>",req:{repository:{type:"list"}}},method:"DELETE"}),f.snapshot.prototype.get=d({params:{masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/_snapshot/<%=repository%>/<%=snapshot%>",req:{repository:{type:"string"},snapshot:{type:"list"}}}}),f.snapshot.prototype.getRepository=d({params:{masterTimeout:{type:"time",name:"master_timeout"},local:{type:"boolean"}},urls:[{fmt:"/_snapshot/<%=repository%>",req:{repository:{type:"list"}}},{fmt:"/_snapshot"}]}),f.snapshot.prototype.restore=d({params:{masterTimeout:{type:"time",name:"master_timeout"},waitForCompletion:{type:"boolean","default":!1,name:"wait_for_completion"}},url:{fmt:"/_snapshot/<%=repository%>/<%=snapshot%>/_restore",req:{repository:{type:"string"},snapshot:{type:"string"}}},method:"POST"}),f.snapshot.prototype.status=d({params:{masterTimeout:{type:"time",name:"master_timeout"}},urls:[{fmt:"/_snapshot/<%=repository%>/<%=snapshot%>/_status",req:{repository:{type:"string"},snapshot:{type:"list"}}},{fmt:"/_snapshot/<%=repository%>/_status",req:{repository:{type:"string"}}},{fmt:"/_snapshot/_status"}]}),f.snapshot.prototype.verifyRepository=d({params:{masterTimeout:{type:"time",name:"master_timeout"},timeout:{type:"time"}},url:{fmt:"/_snapshot/<%=repository%>/_verify",req:{repository:{type:"string"}}},method:"POST"}),f.suggest=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},preference:{type:"string"},routing:{type:"string"},source:{type:"string"}},urls:[{fmt:"/<%=index%>/_suggest",req:{index:{type:"list"}}},{fmt:"/_suggest"}],needBody:!0,method:"POST"}),f.termvector=d({params:{source:{type:"string"},termStatistics:{type:"boolean","default":!1,required:!1,name:"term_statistics"},fieldStatistics:{type:"boolean","default":!0,required:!1,name:"field_statistics"},fields:{type:"list",required:!1},offsets:{type:"boolean","default":!0,required:!1},positions:{type:"boolean","default":!0,required:!1},payloads:{type:"boolean","default":!0,required:!1},preference:{type:"string",required:!1},routing:{type:"string",required:!1},parent:{type:"string",required:!1},realtime:{type:"boolean",required:!1}},urls:[{fmt:"/<%=index%>/<%=type%>/<%=id%>/_termvector",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}},{fmt:"/<%=index%>/<%=type%>/_termvector",req:{index:{type:"string"},type:{type:"string"}}}],method:"POST"}),f.update=d({params:{consistency:{type:"enum",options:["one","quorum","all"]},fields:{type:"list"},lang:{type:"string"},parent:{type:"string"},refresh:{type:"boolean"},replication:{type:"enum","default":"sync",options:["sync","async"]},retryOnConflict:{type:"number",name:"retry_on_conflict"},routing:{type:"string"},script:{},scriptId:{name:"script_id"},scriptedUpsert:{type:"boolean",name:"scripted_upsert"},timeout:{type:"time"},timestamp:{type:"time"},ttl:{type:"duration"},version:{type:"number"},versionType:{type:"enum",options:["internal","force"],name:"version_type"}},url:{fmt:"/<%=index%>/<%=type%>/<%=id%>/_update",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}},method:"POST"}),f.create=d.proxy(f.index,{transform:function(a){a.op_type="create"}})},{"../client_action":22}],18:[function(a,b,c){var d=a("../client_action").makeFactoryWithModifier(function(b){return a("../utils").merge(b,{params:{filterPath:{type:"list",name:"filter_path"}}})}),e=a("../client_action").namespaceFactory,f=b.exports={};f._namespaces=["cat","cluster","indices","nodes","snapshot"],f.bulk=d({params:{consistency:{type:"enum",options:["one","quorum","all"]},refresh:{type:"boolean"},replication:{type:"enum","default":"sync",options:["sync","async"]},routing:{type:"string"},timeout:{type:"time"},type:{type:"string"}},urls:[{fmt:"/<%=index%>/<%=type%>/_bulk",req:{index:{type:"string"},type:{type:"string"}}},{fmt:"/<%=index%>/_bulk",req:{index:{type:"string"}}},{fmt:"/_bulk"}],needBody:!0,bulkBody:!0,method:"POST"}),f.cat=e(),f.cat.prototype.aliases=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},urls:[{fmt:"/_cat/aliases/<%=name%>",req:{name:{type:"list"}}},{fmt:"/_cat/aliases"}]}),f.cat.prototype.allocation=d({params:{bytes:{type:"enum",options:["b","k","m","g"]},local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},urls:[{fmt:"/_cat/allocation/<%=nodeId%>",req:{nodeId:{type:"list"}}},{fmt:"/_cat/allocation"}]}),f.cat.prototype.count=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},urls:[{fmt:"/_cat/count/<%=index%>",req:{index:{type:"list"}}},{fmt:"/_cat/count"}]}),f.cat.prototype.fielddata=d({params:{bytes:{type:"enum",options:["b","k","m","g"]},local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1},fields:{type:"list"}},urls:[{fmt:"/_cat/fielddata/<%=fields%>",req:{fields:{type:"list"}}},{fmt:"/_cat/fielddata"}]}),f.cat.prototype.health=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},ts:{type:"boolean","default":!0},v:{type:"boolean","default":!1}},url:{fmt:"/_cat/health"}}),f.cat.prototype.help=d({params:{help:{type:"boolean","default":!1}},url:{fmt:"/_cat"}}),f.cat.prototype.indices=d({params:{bytes:{type:"enum",options:["b","k","m","g"]},local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},pri:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},urls:[{fmt:"/_cat/indices/<%=index%>",req:{index:{type:"list"}}},{fmt:"/_cat/indices"}]}),f.cat.prototype.master=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},url:{fmt:"/_cat/master"}}),f.cat.prototype.nodes=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},url:{fmt:"/_cat/nodes"}}),f.cat.prototype.pendingTasks=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},url:{fmt:"/_cat/pending_tasks"}}),f.cat.prototype.plugins=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},url:{fmt:"/_cat/plugins"}}),f.cat.prototype.recovery=d({params:{bytes:{type:"enum",options:["b","k","m","g"]},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},urls:[{fmt:"/_cat/recovery/<%=index%>",req:{index:{type:"list"}}},{fmt:"/_cat/recovery"}]}),f.cat.prototype.segments=d({params:{h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!0}},urls:[{fmt:"/_cat/segments/<%=index%>",req:{index:{type:"list"}}},{fmt:"/_cat/segments"}]}),f.cat.prototype.shards=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1}},urls:[{fmt:"/_cat/shards/<%=index%>",req:{index:{type:"list"}}},{fmt:"/_cat/shards"}]}),f.cat.prototype.threadPool=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},h:{type:"list"},help:{type:"boolean","default":!1},v:{type:"boolean","default":!1},fullId:{type:"boolean","default":!1,name:"full_id"}},url:{fmt:"/_cat/thread_pool"}}),f.clearScroll=d({urls:[{fmt:"/_search/scroll/<%=scrollId%>",req:{scrollId:{type:"list"}}},{fmt:"/_search/scroll"}],method:"DELETE"}),f.cluster=e(),f.cluster.prototype.getSettings=d({params:{flatSettings:{type:"boolean",name:"flat_settings"},masterTimeout:{type:"time",name:"master_timeout"},timeout:{type:"time"}},url:{fmt:"/_cluster/settings"}}),f.cluster.prototype.health=d({params:{level:{type:"enum","default":"cluster",options:["cluster","indices","shards"]},local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},timeout:{type:"time"},waitForActiveShards:{type:"number",name:"wait_for_active_shards"},waitForNodes:{type:"string",name:"wait_for_nodes"},waitForRelocatingShards:{type:"number",name:"wait_for_relocating_shards"},waitForStatus:{type:"enum","default":null,options:["green","yellow","red"],name:"wait_for_status"}},urls:[{fmt:"/_cluster/health/<%=index%>",req:{index:{type:"string"}}},{fmt:"/_cluster/health"}]}),f.cluster.prototype.pendingTasks=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/_cluster/pending_tasks"}}),f.cluster.prototype.putSettings=d({params:{flatSettings:{type:"boolean",name:"flat_settings"},masterTimeout:{type:"time",name:"master_timeout"},timeout:{type:"time"}},url:{fmt:"/_cluster/settings"},method:"PUT"}),f.cluster.prototype.reroute=d({params:{dryRun:{type:"boolean",name:"dry_run"},explain:{type:"boolean"},metric:{type:"list",options:["_all","blocks","metadata","nodes","routing_table","master_node","version"]},masterTimeout:{type:"time",name:"master_timeout"},timeout:{type:"time"}},url:{fmt:"/_cluster/reroute"},method:"POST"}),f.cluster.prototype.state=d({params:{local:{type:"boolean"},masterTimeout:{type:"time",name:"master_timeout"},flatSettings:{type:"boolean",name:"flat_settings"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"}},urls:[{fmt:"/_cluster/state/<%=metric%>/<%=index%>",req:{metric:{type:"list",options:["_all","blocks","metadata","nodes","routing_table","routing_nodes","master_node","version"]},index:{type:"list"}}},{fmt:"/_cluster/state/<%=metric%>",req:{metric:{type:"list",options:["_all","blocks","metadata","nodes","routing_table","routing_nodes","master_node","version"]}}},{fmt:"/_cluster/state"}]}),f.cluster.prototype.stats=d({params:{flatSettings:{type:"boolean",name:"flat_settings"},human:{type:"boolean","default":!1}},urls:[{fmt:"/_cluster/stats/nodes/<%=nodeId%>",req:{nodeId:{type:"list"}}},{fmt:"/_cluster/stats"}]}),f.count=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},minScore:{type:"number",name:"min_score"},preference:{type:"string"},routing:{type:"string"},q:{type:"string"},analyzer:{type:"string"},analyzeWildcard:{type:"boolean",name:"analyze_wildcard"},defaultOperator:{type:"enum","default":"OR",options:["AND","OR"],name:"default_operator"},df:{type:"string"},lenient:{type:"boolean"},lowercaseExpandedTerms:{type:"boolean",name:"lowercase_expanded_terms"}},urls:[{fmt:"/<%=index%>/<%=type%>/_count",req:{index:{type:"list"},type:{type:"list"}}},{fmt:"/<%=index%>/_count",req:{index:{type:"list"}}},{fmt:"/_count"}],method:"POST"}),f.countPercolate=d({params:{routing:{type:"list"},preference:{type:"string"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},percolateIndex:{type:"string",name:"percolate_index"},percolateType:{type:"string",name:"percolate_type"},version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},urls:[{fmt:"/<%=index%>/<%=type%>/<%=id%>/_percolate/count",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}},{fmt:"/<%=index%>/<%=type%>/_percolate/count",req:{index:{type:"string"},type:{type:"string"}}}],method:"POST"}),f["delete"]=d({params:{consistency:{type:"enum",options:["one","quorum","all"]},parent:{type:"string"},refresh:{type:"boolean"},replication:{type:"enum","default":"sync",options:["sync","async"]},routing:{type:"string"},timeout:{type:"time"},version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},url:{fmt:"/<%=index%>/<%=type%>/<%=id%>",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}},method:"DELETE"}),f.deleteByQuery=d({params:{analyzer:{type:"string"},consistency:{type:"enum",options:["one","quorum","all"]},defaultOperator:{type:"enum","default":"OR",options:["AND","OR"],name:"default_operator"},df:{type:"string"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},replication:{type:"enum","default":"sync",options:["sync","async"]},q:{type:"string"},routing:{type:"string"},timeout:{type:"time"}},urls:[{fmt:"/<%=index%>/<%=type%>/_query",req:{index:{type:"list"},type:{type:"list"}}},{fmt:"/<%=index%>/_query",req:{index:{type:"list"}}}],method:"DELETE"}),f.deleteScript=d({params:{version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},url:{fmt:"/_scripts/<%=lang%>/<%=id%>",req:{lang:{type:"string"},id:{type:"string"}}},method:"DELETE"}),f.deleteTemplate=d({params:{version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},url:{fmt:"/_search/template/<%=id%>",req:{id:{type:"string"}}},method:"DELETE"}),f.exists=d({params:{parent:{type:"string"},preference:{type:"string"},realtime:{type:"boolean"},refresh:{type:"boolean"},routing:{type:"string"}},url:{fmt:"/<%=index%>/<%=type%>/<%=id%>",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}},method:"HEAD"}),f.explain=d({params:{analyzeWildcard:{type:"boolean",name:"analyze_wildcard"},analyzer:{type:"string"},defaultOperator:{type:"enum","default":"OR",options:["AND","OR"],name:"default_operator"},df:{type:"string"},fields:{type:"list"},lenient:{type:"boolean"},lowercaseExpandedTerms:{type:"boolean",name:"lowercase_expanded_terms"},parent:{type:"string"},preference:{type:"string"},q:{type:"string"},routing:{type:"string"},_source:{type:"list"},_sourceExclude:{type:"list",name:"_source_exclude"},_sourceInclude:{type:"list",name:"_source_include"}},url:{fmt:"/<%=index%>/<%=type%>/<%=id%>/_explain",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}},method:"POST"}),f.fieldStats=d({params:{fields:{type:"list"},level:{type:"enum","default":"cluster",options:["indices","cluster"]},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"}},urls:[{fmt:"/<%=index%>/_field_stats",req:{index:{type:"list"}}},{fmt:"/_field_stats"}],method:"POST"}),f.get=d({params:{fields:{type:"list"},parent:{type:"string"},preference:{type:"string"},realtime:{type:"boolean"},refresh:{type:"boolean"},routing:{type:"string"},_source:{type:"list"},_sourceExclude:{type:"list",name:"_source_exclude"},_sourceInclude:{type:"list",name:"_source_include"},version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},url:{fmt:"/<%=index%>/<%=type%>/<%=id%>",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}}}),f.getScript=d({params:{version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},url:{fmt:"/_scripts/<%=lang%>/<%=id%>",req:{lang:{type:"string"},id:{type:"string"}}}}),f.getSource=d({params:{parent:{type:"string"},preference:{type:"string"},realtime:{type:"boolean"},refresh:{type:"boolean"},routing:{type:"string"},_source:{type:"list"},_sourceExclude:{type:"list",name:"_source_exclude"},_sourceInclude:{type:"list",name:"_source_include"},version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},url:{fmt:"/<%=index%>/<%=type%>/<%=id%>/_source",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}}}),f.getTemplate=d({params:{version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},url:{fmt:"/_search/template/<%=id%>",req:{id:{type:"string"}}}}),f.index=d({params:{consistency:{type:"enum",options:["one","quorum","all"]},opType:{type:"enum","default":"index",options:["index","create"],name:"op_type"},parent:{type:"string"},refresh:{type:"boolean"},replication:{type:"enum","default":"sync",options:["sync","async"]},routing:{type:"string"},timeout:{type:"time"},timestamp:{type:"time"},ttl:{type:"duration"},version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},urls:[{fmt:"/<%=index%>/<%=type%>/<%=id%>",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}},{fmt:"/<%=index%>/<%=type%>",req:{index:{type:"string"},type:{type:"string"}}}],needBody:!0,method:"POST"}),f.indices=e(),f.indices.prototype.analyze=d({params:{analyzer:{type:"string"},charFilters:{type:"list",name:"char_filters"},field:{type:"string"},filters:{type:"list"},index:{type:"string"},preferLocal:{type:"boolean",name:"prefer_local"},text:{type:"string"},tokenizer:{type:"string"},format:{type:"enum","default":"detailed",options:["detailed","text"]}},urls:[{fmt:"/<%=index%>/_analyze",req:{index:{type:"string"}}},{fmt:"/_analyze"}],method:"POST"}),f.indices.prototype.clearCache=d({params:{fieldData:{type:"boolean",name:"field_data"},fielddata:{type:"boolean"},fields:{type:"list"},filter:{type:"boolean"},filterCache:{type:"boolean",name:"filter_cache"},filterKeys:{type:"boolean",name:"filter_keys"},id:{type:"boolean"},idCache:{type:"boolean",name:"id_cache"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},index:{type:"list"},recycler:{type:"boolean"},queryCache:{type:"boolean",name:"query_cache"}},urls:[{fmt:"/<%=index%>/_cache/clear",req:{index:{type:"list"}}},{fmt:"/_cache/clear"}],method:"POST"}),f.indices.prototype.close=d({params:{timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"}},url:{fmt:"/<%=index%>/_close",req:{index:{type:"string"}}},method:"POST"}),f.indices.prototype.create=d({params:{timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/<%=index%>",req:{index:{type:"string"}}},method:"POST"}),f.indices.prototype["delete"]=d({params:{timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/<%=index%>",req:{index:{type:"list"}}},method:"DELETE"}),f.indices.prototype.deleteAlias=d({params:{timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/<%=index%>/_alias/<%=name%>",req:{index:{type:"list"},name:{type:"list"}}},method:"DELETE"}),f.indices.prototype.deleteMapping=d({params:{masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/<%=index%>/<%=type%>/_mapping",req:{index:{type:"list"},type:{type:"list"}}},method:"DELETE"}),f.indices.prototype.deleteTemplate=d({params:{timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/_template/<%=name%>",req:{name:{type:"string"}}},method:"DELETE"}),f.indices.prototype.deleteWarmer=d({params:{masterTimeout:{type:"time",name:"master_timeout"},name:{type:"list"}},url:{fmt:"/<%=index%>/_warmer/<%=name%>",req:{index:{type:"list"},name:{type:"list"}}},method:"DELETE"}),f.indices.prototype.exists=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},local:{type:"boolean"}},url:{fmt:"/<%=index%>",req:{index:{type:"list"}}},method:"HEAD"}),f.indices.prototype.existsAlias=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":["open","closed"],options:["open","closed","none","all"],
name:"expand_wildcards"},local:{type:"boolean"}},urls:[{fmt:"/<%=index%>/_alias/<%=name%>",req:{index:{type:"list"},name:{type:"list"}}},{fmt:"/_alias/<%=name%>",req:{name:{type:"list"}}},{fmt:"/<%=index%>/_alias",req:{index:{type:"list"}}}],method:"HEAD"}),f.indices.prototype.existsTemplate=d({params:{masterTimeout:{type:"time",name:"master_timeout"},local:{type:"boolean"}},url:{fmt:"/_template/<%=name%>",req:{name:{type:"string"}}},method:"HEAD"}),f.indices.prototype.existsType=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},local:{type:"boolean"}},url:{fmt:"/<%=index%>/<%=type%>",req:{index:{type:"list"},type:{type:"list"}}},method:"HEAD"}),f.indices.prototype.flush=d({params:{force:{type:"boolean"},waitIfOngoing:{type:"boolean",name:"wait_if_ongoing"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"}},urls:[{fmt:"/<%=index%>/_flush",req:{index:{type:"list"}}},{fmt:"/_flush"}],method:"POST"}),f.indices.prototype.flushSynced=d({urls:[{fmt:"/<%=index%>/_flush/synced",req:{index:{type:"list"}}},{fmt:"/_flush/synced"}],method:"POST"}),f.indices.prototype.get=d({params:{local:{type:"boolean"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"}},urls:[{fmt:"/<%=index%>/<%=feature%>",req:{index:{type:"list"},feature:{type:"list"}}},{fmt:"/<%=index%>",req:{index:{type:"list"}}}]}),f.indices.prototype.getAlias=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},local:{type:"boolean"}},urls:[{fmt:"/<%=index%>/_alias/<%=name%>",req:{index:{type:"list"},name:{type:"list"}}},{fmt:"/_alias/<%=name%>",req:{name:{type:"list"}}},{fmt:"/<%=index%>/_alias",req:{index:{type:"list"}}},{fmt:"/_alias"}]}),f.indices.prototype.getAliases=d({params:{timeout:{type:"time"},local:{type:"boolean"}},urls:[{fmt:"/<%=index%>/_aliases/<%=name%>",req:{index:{type:"list"},name:{type:"list"}}},{fmt:"/<%=index%>/_aliases",req:{index:{type:"list"}}},{fmt:"/_aliases/<%=name%>",req:{name:{type:"list"}}},{fmt:"/_aliases"}]}),f.indices.prototype.getFieldMapping=d({params:{includeDefaults:{type:"boolean",name:"include_defaults"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},local:{type:"boolean"}},urls:[{fmt:"/<%=index%>/_mapping/<%=type%>/field/<%=field%>",req:{index:{type:"list"},type:{type:"list"},field:{type:"list"}}},{fmt:"/<%=index%>/_mapping/field/<%=field%>",req:{index:{type:"list"},field:{type:"list"}}},{fmt:"/_mapping/<%=type%>/field/<%=field%>",req:{type:{type:"list"},field:{type:"list"}}},{fmt:"/_mapping/field/<%=field%>",req:{field:{type:"list"}}}]}),f.indices.prototype.getMapping=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},local:{type:"boolean"}},urls:[{fmt:"/<%=index%>/_mapping/<%=type%>",req:{index:{type:"list"},type:{type:"list"}}},{fmt:"/<%=index%>/_mapping",req:{index:{type:"list"}}},{fmt:"/_mapping/<%=type%>",req:{type:{type:"list"}}},{fmt:"/_mapping"}]}),f.indices.prototype.getSettings=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":["open","closed"],options:["open","closed","none","all"],name:"expand_wildcards"},flatSettings:{type:"boolean",name:"flat_settings"},local:{type:"boolean"}},urls:[{fmt:"/<%=index%>/_settings/<%=name%>",req:{index:{type:"list"},name:{type:"list"}}},{fmt:"/<%=index%>/_settings",req:{index:{type:"list"}}},{fmt:"/_settings/<%=name%>",req:{name:{type:"list"}}},{fmt:"/_settings"}]}),f.indices.prototype.getTemplate=d({params:{flatSettings:{type:"boolean",name:"flat_settings"},masterTimeout:{type:"time",name:"master_timeout"},local:{type:"boolean"}},urls:[{fmt:"/_template/<%=name%>",req:{name:{type:"string"}}},{fmt:"/_template"}]}),f.indices.prototype.getUpgrade=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},human:{type:"boolean","default":!1}},urls:[{fmt:"/<%=index%>/_upgrade",req:{index:{type:"list"}}},{fmt:"/_upgrade"}]}),f.indices.prototype.getWarmer=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},local:{type:"boolean"}},urls:[{fmt:"/<%=index%>/<%=type%>/_warmer/<%=name%>",req:{index:{type:"list"},type:{type:"list"},name:{type:"list"}}},{fmt:"/<%=index%>/_warmer/<%=name%>",req:{index:{type:"list"},name:{type:"list"}}},{fmt:"/<%=index%>/_warmer",req:{index:{type:"list"}}},{fmt:"/_warmer/<%=name%>",req:{name:{type:"list"}}},{fmt:"/_warmer"}]}),f.indices.prototype.open=d({params:{timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"closed",options:["open","closed","none","all"],name:"expand_wildcards"}},url:{fmt:"/<%=index%>/_open",req:{index:{type:"string"}}},method:"POST"}),f.indices.prototype.optimize=d({params:{flush:{type:"boolean"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},maxNumSegments:{type:"number",name:"max_num_segments"},onlyExpungeDeletes:{type:"boolean",name:"only_expunge_deletes"},operationThreading:{name:"operation_threading"},waitForMerge:{type:"boolean",name:"wait_for_merge"},force:{type:"boolean"}},urls:[{fmt:"/<%=index%>/_optimize",req:{index:{type:"list"}}},{fmt:"/_optimize"}],method:"POST"}),f.indices.prototype.putAlias=d({params:{timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/<%=index%>/_alias/<%=name%>",req:{index:{type:"list"},name:{type:"string"}}},method:"PUT"}),f.indices.prototype.putMapping=d({params:{ignoreConflicts:{type:"boolean",name:"ignore_conflicts"},timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"}},urls:[{fmt:"/<%=index%>/_mapping/<%=type%>",req:{index:{type:"list"},type:{type:"string"}}},{fmt:"/_mapping/<%=type%>",req:{type:{type:"string"}}}],needBody:!0,method:"PUT"}),f.indices.prototype.putSettings=d({params:{masterTimeout:{type:"time",name:"master_timeout"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},flatSettings:{type:"boolean",name:"flat_settings"}},urls:[{fmt:"/<%=index%>/_settings",req:{index:{type:"list"}}},{fmt:"/_settings"}],needBody:!0,method:"PUT"}),f.indices.prototype.putTemplate=d({params:{order:{type:"number"},create:{type:"boolean","default":!1},timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"},flatSettings:{type:"boolean",name:"flat_settings"}},url:{fmt:"/_template/<%=name%>",req:{name:{type:"string"}}},needBody:!0,method:"PUT"}),f.indices.prototype.putWarmer=d({params:{masterTimeout:{type:"time",name:"master_timeout"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"}},urls:[{fmt:"/<%=index%>/<%=type%>/_warmer/<%=name%>",req:{index:{type:"list"},type:{type:"list"},name:{type:"string"}}},{fmt:"/<%=index%>/_warmer/<%=name%>",req:{index:{type:"list"},name:{type:"string"}}},{fmt:"/_warmer/<%=name%>",req:{name:{type:"string"}}}],needBody:!0,method:"PUT"}),f.indices.prototype.recovery=d({params:{detailed:{type:"boolean","default":!1},activeOnly:{type:"boolean","default":!1,name:"active_only"},human:{type:"boolean","default":!1}},urls:[{fmt:"/<%=index%>/_recovery",req:{index:{type:"list"}}},{fmt:"/_recovery"}]}),f.indices.prototype.refresh=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},force:{type:"boolean","default":!1},operationThreading:{name:"operation_threading"}},urls:[{fmt:"/<%=index%>/_refresh",req:{index:{type:"list"}}},{fmt:"/_refresh"}],method:"POST"}),f.indices.prototype.segments=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},human:{type:"boolean","default":!1},operationThreading:{name:"operation_threading"}},urls:[{fmt:"/<%=index%>/_segments",req:{index:{type:"list"}}},{fmt:"/_segments"}]}),f.indices.prototype.stats=d({params:{completionFields:{type:"list",name:"completion_fields"},fielddataFields:{type:"list",name:"fielddata_fields"},fields:{type:"list"},groups:{type:"list"},human:{type:"boolean","default":!1},level:{type:"enum","default":"indices",options:["cluster","indices","shards"]},types:{type:"list"}},urls:[{fmt:"/<%=index%>/_stats/<%=metric%>",req:{index:{type:"list"},metric:{type:"list",options:["_all","completion","docs","fielddata","filter_cache","flush","get","id_cache","indexing","merge","percolate","query_cache","refresh","search","segments","store","warmer","suggest"]}}},{fmt:"/_stats/<%=metric%>",req:{metric:{type:"list",options:["_all","completion","docs","fielddata","filter_cache","flush","get","id_cache","indexing","merge","percolate","query_cache","refresh","search","segments","store","warmer","suggest"]}}},{fmt:"/<%=index%>/_stats",req:{index:{type:"list"}}},{fmt:"/_stats"}]}),f.indices.prototype.status=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},human:{type:"boolean","default":!1},operationThreading:{name:"operation_threading"},recovery:{type:"boolean"},snapshot:{type:"boolean"}},urls:[{fmt:"/<%=index%>/_status",req:{index:{type:"list"}}},{fmt:"/_status"}]}),f.indices.prototype.updateAliases=d({params:{timeout:{type:"time"},masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/_aliases"},needBody:!0,method:"POST"}),f.indices.prototype.upgrade=d({params:{allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},waitForCompletion:{type:"boolean",name:"wait_for_completion"},onlyAncientSegments:{type:"boolean",name:"only_ancient_segments"}},urls:[{fmt:"/<%=index%>/_upgrade",req:{index:{type:"list"}}},{fmt:"/_upgrade"}],method:"POST"}),f.indices.prototype.validateQuery=d({params:{explain:{type:"boolean"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},operationThreading:{name:"operation_threading"},q:{type:"string"},analyzer:{type:"string"},analyzeWildcard:{type:"boolean",name:"analyze_wildcard"},defaultOperator:{type:"enum","default":"OR",options:["AND","OR"],name:"default_operator"},df:{type:"string"},lenient:{type:"boolean"},lowercaseExpandedTerms:{type:"boolean",name:"lowercase_expanded_terms"},rewrite:{type:"boolean"}},urls:[{fmt:"/<%=index%>/<%=type%>/_validate/query",req:{index:{type:"list"},type:{type:"list"}}},{fmt:"/<%=index%>/_validate/query",req:{index:{type:"list"}}},{fmt:"/_validate/query"}],method:"POST"}),f.info=d({url:{fmt:"/"}}),f.mget=d({params:{fields:{type:"list"},preference:{type:"string"},realtime:{type:"boolean"},refresh:{type:"boolean"},_source:{type:"list"},_sourceExclude:{type:"list",name:"_source_exclude"},_sourceInclude:{type:"list",name:"_source_include"}},urls:[{fmt:"/<%=index%>/<%=type%>/_mget",req:{index:{type:"string"},type:{type:"string"}}},{fmt:"/<%=index%>/_mget",req:{index:{type:"string"}}},{fmt:"/_mget"}],needBody:!0,method:"POST"}),f.mlt=d({params:{boostTerms:{type:"number",name:"boost_terms"},maxDocFreq:{type:"number",name:"max_doc_freq"},maxQueryTerms:{type:"number",name:"max_query_terms"},maxWordLength:{type:"number",name:"max_word_length"},minDocFreq:{type:"number",name:"min_doc_freq"},minTermFreq:{type:"number",name:"min_term_freq"},minWordLength:{type:"number",name:"min_word_length"},mltFields:{type:"list",name:"mlt_fields"},percentTermsToMatch:{type:"number",name:"percent_terms_to_match"},routing:{type:"string"},searchFrom:{type:"number",name:"search_from"},searchIndices:{type:"list",name:"search_indices"},searchScroll:{type:"string",name:"search_scroll"},searchSize:{type:"number",name:"search_size"},searchSource:{type:"string",name:"search_source"},searchType:{type:"string",name:"search_type"},searchTypes:{type:"list",name:"search_types"},stopWords:{type:"list",name:"stop_words"}},url:{fmt:"/<%=index%>/<%=type%>/<%=id%>/_mlt",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}},method:"POST"}),f.mpercolate=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"}},urls:[{fmt:"/<%=index%>/<%=type%>/_mpercolate",req:{index:{type:"string"},type:{type:"string"}}},{fmt:"/<%=index%>/_mpercolate",req:{index:{type:"string"}}},{fmt:"/_mpercolate"}],needBody:!0,bulkBody:!0,method:"POST"}),f.msearch=d({params:{searchType:{type:"enum",options:["query_then_fetch","query_and_fetch","dfs_query_then_fetch","dfs_query_and_fetch","count","scan"],name:"search_type"}},urls:[{fmt:"/<%=index%>/<%=type%>/_msearch",req:{index:{type:"list"},type:{type:"list"}}},{fmt:"/<%=index%>/_msearch",req:{index:{type:"list"}}},{fmt:"/_msearch"}],needBody:!0,bulkBody:!0,method:"POST"}),f.mtermvectors=d({params:{ids:{type:"list",required:!1},termStatistics:{type:"boolean","default":!1,required:!1,name:"term_statistics"},fieldStatistics:{type:"boolean","default":!0,required:!1,name:"field_statistics"},fields:{type:"list",required:!1},offsets:{type:"boolean","default":!0,required:!1},positions:{type:"boolean","default":!0,required:!1},payloads:{type:"boolean","default":!0,required:!1},preference:{type:"string",required:!1},routing:{type:"string",required:!1},parent:{type:"string",required:!1},realtime:{type:"boolean",required:!1}},urls:[{fmt:"/<%=index%>/<%=type%>/_mtermvectors",req:{index:{type:"string"},type:{type:"string"}}},{fmt:"/<%=index%>/_mtermvectors",req:{index:{type:"string"}}},{fmt:"/_mtermvectors"}],method:"POST"}),f.nodes=e(),f.nodes.prototype.hotThreads=d({params:{interval:{type:"time"},snapshots:{type:"number"},threads:{type:"number"},ignoreIdleThreads:{type:"boolean",name:"ignore_idle_threads"},type:{type:"enum",options:["cpu","wait","block"]}},urls:[{fmt:"/_nodes/<%=nodeId%>/hotthreads",req:{nodeId:{type:"list"}}},{fmt:"/_nodes/hotthreads"}]}),f.nodes.prototype.info=d({params:{flatSettings:{type:"boolean",name:"flat_settings"},human:{type:"boolean","default":!1}},urls:[{fmt:"/_nodes/<%=nodeId%>/<%=metric%>",req:{nodeId:{type:"list"},metric:{type:"list",options:["settings","os","process","jvm","thread_pool","network","transport","http","plugins"]}}},{fmt:"/_nodes/<%=nodeId%>",req:{nodeId:{type:"list"}}},{fmt:"/_nodes/<%=metric%>",req:{metric:{type:"list",options:["settings","os","process","jvm","thread_pool","network","transport","http","plugins"]}}},{fmt:"/_nodes"}]}),f.nodes.prototype.shutdown=d({params:{delay:{type:"time"},exit:{type:"boolean"}},urls:[{fmt:"/_cluster/nodes/<%=nodeId%>/_shutdown",req:{nodeId:{type:"list"}}},{fmt:"/_shutdown"}],method:"POST"}),f.nodes.prototype.stats=d({params:{completionFields:{type:"list",name:"completion_fields"},fielddataFields:{type:"list",name:"fielddata_fields"},fields:{type:"list"},groups:{type:"boolean"},human:{type:"boolean","default":!1},level:{type:"enum","default":"node",options:["node","indices","shards"]},types:{type:"list"}},urls:[{fmt:"/_nodes/<%=nodeId%>/stats/<%=metric%>/<%=indexMetric%>",req:{nodeId:{type:"list"},metric:{type:"list",options:["_all","breaker","fs","http","indices","jvm","network","os","process","thread_pool","transport"]},indexMetric:{type:"list",options:["_all","completion","docs","fielddata","filter_cache","flush","get","id_cache","indexing","merge","percolate","query_cache","refresh","search","segments","store","warmer","suggest"]}}},{fmt:"/_nodes/<%=nodeId%>/stats/<%=metric%>",req:{nodeId:{type:"list"},metric:{type:"list",options:["_all","breaker","fs","http","indices","jvm","network","os","process","thread_pool","transport"]}}},{fmt:"/_nodes/stats/<%=metric%>/<%=indexMetric%>",req:{metric:{type:"list",options:["_all","breaker","fs","http","indices","jvm","network","os","process","thread_pool","transport"]},indexMetric:{type:"list",options:["_all","completion","docs","fielddata","filter_cache","flush","get","id_cache","indexing","merge","percolate","query_cache","refresh","search","segments","store","warmer","suggest"]}}},{fmt:"/_nodes/<%=nodeId%>/stats",req:{nodeId:{type:"list"}}},{fmt:"/_nodes/stats/<%=metric%>",req:{metric:{type:"list",options:["_all","breaker","fs","http","indices","jvm","network","os","process","thread_pool","transport"]}}},{fmt:"/_nodes/stats"}]}),f.percolate=d({params:{routing:{type:"list"},preference:{type:"string"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},percolateFormat:{type:"enum",options:["ids"],name:"percolate_format"},percolateIndex:{type:"string",name:"percolate_index"},percolateType:{type:"string",name:"percolate_type"},percolateRouting:{type:"string",name:"percolate_routing"},percolatePreference:{type:"string",name:"percolate_preference"},version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},urls:[{fmt:"/<%=index%>/<%=type%>/<%=id%>/_percolate",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}},{fmt:"/<%=index%>/<%=type%>/_percolate",req:{index:{type:"string"},type:{type:"string"}}}],method:"POST"}),f.ping=d({url:{fmt:"/"},requestTimeout:3e3,method:"HEAD"}),f.putScript=d({params:{opType:{type:"enum","default":"index",options:["index","create"],name:"op_type"},version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},url:{fmt:"/_scripts/<%=lang%>/<%=id%>",req:{lang:{type:"string"},id:{type:"string"}}},needBody:!0,method:"PUT"}),f.putTemplate=d({params:{opType:{type:"enum","default":"index",options:["index","create"],name:"op_type"},version:{type:"number"},versionType:{type:"enum",options:["internal","external","external_gte","force"],name:"version_type"}},url:{fmt:"/_search/template/<%=id%>",req:{id:{type:"string"}}},needBody:!0,method:"PUT"}),f.scroll=d({params:{scroll:{type:"duration"},scrollId:{type:"string",name:"scroll_id"}},urls:[{fmt:"/_search/scroll/<%=scrollId%>",req:{scrollId:{type:"string"}}},{fmt:"/_search/scroll"}],paramAsBody:"scrollId",method:"POST"}),f.search=d({params:{analyzer:{type:"string"},analyzeWildcard:{type:"boolean",name:"analyze_wildcard"},defaultOperator:{type:"enum","default":"OR",options:["AND","OR"],name:"default_operator"},df:{type:"string"},explain:{type:"boolean"},fields:{type:"list"},fielddataFields:{type:"list",name:"fielddata_fields"},from:{type:"number"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},lenient:{type:"boolean"},lowercaseExpandedTerms:{type:"boolean",name:"lowercase_expanded_terms"},preference:{type:"string"},q:{type:"string"},routing:{type:"list"},scroll:{type:"duration"},searchType:{type:"enum",options:["query_then_fetch","query_and_fetch","dfs_query_then_fetch","dfs_query_and_fetch","count","scan"],name:"search_type"},size:{type:"number"},sort:{type:"list"},_source:{type:"list"},_sourceExclude:{type:"list",name:"_source_exclude"},_sourceInclude:{type:"list",name:"_source_include"},stats:{type:"list"},suggestField:{type:"string",name:"suggest_field"},suggestMode:{type:"enum","default":"missing",options:["missing","popular","always"],name:"suggest_mode"},suggestSize:{type:"number",name:"suggest_size"},suggestText:{type:"text",name:"suggest_text"},timeout:{type:"time"},trackScores:{type:"boolean",name:"track_scores"},version:{type:"boolean"},queryCache:{type:"boolean",name:"query_cache"}},urls:[{fmt:"/<%=index%>/<%=type%>/_search",req:{index:{type:"list"},type:{type:"list"}}},{fmt:"/<%=index%>/_search",req:{index:{type:"list"}}},{fmt:"/_search"}],method:"POST"}),f.searchExists=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},minScore:{type:"number",name:"min_score"},preference:{type:"string"},routing:{type:"string"},q:{type:"string"},analyzer:{type:"string"},analyzeWildcard:{type:"boolean",name:"analyze_wildcard"},defaultOperator:{type:"enum","default":"OR",options:["AND","OR"],name:"default_operator"},df:{type:"string"},lenient:{type:"boolean"},lowercaseExpandedTerms:{type:"boolean",name:"lowercase_expanded_terms"}},urls:[{fmt:"/<%=index%>/<%=type%>/_search/exists",req:{index:{type:"list"},type:{type:"list"}}},{fmt:"/<%=index%>/_search/exists",req:{index:{type:"list"}}},{fmt:"/_search/exists"}],method:"POST"}),f.searchShards=d({params:{preference:{type:"string"},routing:{type:"string"},local:{type:"boolean"},ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"}},urls:[{fmt:"/<%=index%>/<%=type%>/_search_shards",req:{index:{type:"string"},type:{type:"string"}}},{fmt:"/<%=index%>/_search_shards",req:{index:{type:"string"}}},{fmt:"/_search_shards"}],method:"POST"}),f.searchTemplate=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},preference:{type:"string"},routing:{type:"list"},scroll:{type:"duration"},searchType:{type:"enum",options:["query_then_fetch","query_and_fetch","dfs_query_then_fetch","dfs_query_and_fetch","count","scan"],name:"search_type"}},urls:[{fmt:"/<%=index%>/<%=type%>/_search/template",req:{index:{type:"list"},type:{type:"list"}}},{fmt:"/<%=index%>/_search/template",req:{index:{type:"list"}}},{fmt:"/_search/template"}],method:"POST"}),f.snapshot=e(),f.snapshot.prototype.create=d({params:{masterTimeout:{type:"time",name:"master_timeout"},waitForCompletion:{type:"boolean","default":!1,name:"wait_for_completion"}},url:{fmt:"/_snapshot/<%=repository%>/<%=snapshot%>",req:{repository:{type:"string"},snapshot:{type:"string"}}},method:"POST"}),f.snapshot.prototype.createRepository=d({params:{masterTimeout:{type:"time",name:"master_timeout"},timeout:{type:"time"},verify:{type:"boolean"}},url:{fmt:"/_snapshot/<%=repository%>",req:{repository:{type:"string"}}},needBody:!0,method:"POST"}),f.snapshot.prototype["delete"]=d({params:{masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/_snapshot/<%=repository%>/<%=snapshot%>",req:{repository:{type:"string"},snapshot:{type:"string"}}},method:"DELETE"}),f.snapshot.prototype.deleteRepository=d({params:{masterTimeout:{type:"time",name:"master_timeout"},timeout:{type:"time"}},url:{fmt:"/_snapshot/<%=repository%>",req:{repository:{type:"list"}}},method:"DELETE"}),f.snapshot.prototype.get=d({params:{masterTimeout:{type:"time",name:"master_timeout"}},url:{fmt:"/_snapshot/<%=repository%>/<%=snapshot%>",req:{repository:{type:"string"},snapshot:{type:"list"}}}}),f.snapshot.prototype.getRepository=d({params:{masterTimeout:{type:"time",name:"master_timeout"},local:{type:"boolean"}},urls:[{fmt:"/_snapshot/<%=repository%>",req:{repository:{type:"list"}}},{fmt:"/_snapshot"}]}),f.snapshot.prototype.restore=d({params:{masterTimeout:{type:"time",name:"master_timeout"},waitForCompletion:{type:"boolean","default":!1,name:"wait_for_completion"}},url:{fmt:"/_snapshot/<%=repository%>/<%=snapshot%>/_restore",req:{repository:{type:"string"},snapshot:{type:"string"}}},method:"POST"}),f.snapshot.prototype.status=d({params:{masterTimeout:{type:"time",name:"master_timeout"}},urls:[{fmt:"/_snapshot/<%=repository%>/<%=snapshot%>/_status",req:{repository:{type:"string"},snapshot:{type:"list"}}},{fmt:"/_snapshot/<%=repository%>/_status",req:{repository:{type:"string"}}},{fmt:"/_snapshot/_status"}]}),f.snapshot.prototype.verifyRepository=d({params:{masterTimeout:{type:"time",name:"master_timeout"},timeout:{type:"time"}},url:{fmt:"/_snapshot/<%=repository%>/_verify",req:{repository:{type:"string"}}},method:"POST"}),f.suggest=d({params:{ignoreUnavailable:{type:"boolean",name:"ignore_unavailable"},allowNoIndices:{type:"boolean",name:"allow_no_indices"},expandWildcards:{type:"enum","default":"open",options:["open","closed","none","all"],name:"expand_wildcards"},preference:{type:"string"},routing:{type:"string"}},urls:[{fmt:"/<%=index%>/_suggest",req:{index:{type:"list"}}},{fmt:"/_suggest"}],needBody:!0,method:"POST"}),f.termvector=d({params:{termStatistics:{type:"boolean","default":!1,required:!1,name:"term_statistics"},fieldStatistics:{type:"boolean","default":!0,required:!1,name:"field_statistics"},fields:{type:"list",required:!1},offsets:{type:"boolean","default":!0,required:!1},positions:{type:"boolean","default":!0,required:!1},payloads:{type:"boolean","default":!0,required:!1},preference:{type:"string",required:!1},routing:{type:"string",required:!1},parent:{type:"string",required:!1},realtime:{type:"boolean",required:!1}},urls:[{fmt:"/<%=index%>/<%=type%>/<%=id%>/_termvector",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}},{fmt:"/<%=index%>/<%=type%>/_termvector",req:{index:{type:"string"},type:{type:"string"}}}],method:"POST"}),f.update=d({params:{consistency:{type:"enum",options:["one","quorum","all"]},fields:{type:"list"},lang:{type:"string"},parent:{type:"string"},refresh:{type:"boolean"},replication:{type:"enum","default":"sync",options:["sync","async"]},retryOnConflict:{type:"number",name:"retry_on_conflict"},routing:{type:"string"},script:{},scriptId:{name:"script_id"},scriptedUpsert:{type:"boolean",name:"scripted_upsert"},timeout:{type:"time"},timestamp:{type:"time"},ttl:{type:"duration"},version:{type:"number"},versionType:{type:"enum",options:["internal","force"],name:"version_type"}},url:{fmt:"/<%=index%>/<%=type%>/<%=id%>/_update",req:{index:{type:"string"},type:{type:"string"},id:{type:"string"}}},method:"POST"}),f.create=d.proxy(f.index,{transform:function(a){a.op_type="create"}})},{"../client_action":22,"../utils":42}],19:[function(a,b,c){b.exports=a(18)},{"../client_action":22,"../utils":42}],20:[function(a,b,c){b.exports={1.7:a("./1_7"),1.6:a("./1_6"),1.5:a("./1_5")}},{"./1_5":17,"./1_6":18,"./1_7":19}],21:[function(a,b,c){function d(b){function c(){b.hasOwnProperty("log")||(b.log="warning"),b.hosts||b.host||(b.host="http://localhost:9200"),this.close=function(){this.transport.close()},this.transport=new e(b),g.each(c.prototype,function(a,b){a.prototype instanceof f.ApiNamespace&&(this[b]=new a(this.transport))},this),delete this._namespaces}if(b=b||{},b.__reused)throw new Error("Do not reuse objects to configure the elasticsearch Client class: https://github.com/elasticsearch/elasticsearch-js/issues/33");b.__reused=!0,c.prototype=g.funcEnum(b,"apiVersion",d.apis,"1.7"),b.sniffEndpoint||c.prototype!==d.apis["0.90"]||(b.sniffEndpoint="/_cluster/nodes");var h=c;return b.plugins&&(h.prototype=g.cloneDeep(h.prototype),g.each(b.plugins,function(c){h=c(h,b,{apis:a("./apis"),connectors:a("./connectors"),loggers:a("./loggers"),selectors:a("./selectors"),serializers:a("./serializers"),Client:a("./client"),clientAction:f,Connection:a("./connection"),ConnectionPool:a("./connection_pool"),Errors:a("./errors"),Host:a("./host"),Log:a("./log"),Logger:a("./logger"),NodesToHost:a("./nodes_to_host"),Transport:a("./transport"),utils:a("./utils")})||h})),new h}b.exports=d;var e=a("./transport"),f=a("./client_action"),g=a("./utils");d.apis=a("./apis")},{"./apis":20,"./client":21,"./client_action":22,"./connection":23,"./connection_pool":24,"./connectors":25,"./errors":27,"./host":28,"./log":29,"./logger":30,"./loggers":31,"./nodes_to_host":33,"./selectors":34,"./serializers":38,"./transport":40,"./utils":42}],22:[function(a,b,c){function d(a){a=a||h.identity;var b=function(b){function c(a,c){"function"==typeof a?(c=a,a={}):(a=a||{},c="function"==typeof c?c:null);try{return f(this.transport,b,h.clone(a),c)}catch(d){if("function"!=typeof c){var e=this.transport.defer();return e.reject(d),e.promise}h.nextTick(c,d)}}return b=a(b),h.isPlainObject(b.params)||(b.params={}),b.method||(b.method="GET"),c.spec=b,c};return b.proxy=function(a,b){return function(c,d){return"function"==typeof c?(d=c,c={}):(c=c||{},d="function"==typeof d?d:null),b.transform&&b.transform(c),a.call(this,c,d)}},b}function e(a,b){var c,d,e={};if(a.req)for(a.reqParamKeys||(a.reqParamKeys=h.keys(a.req)),c=0;c<a.reqParamKeys.length;c++){if(d=a.reqParamKeys[c],!b.hasOwnProperty(d)||null==b[d])return!1;e[d]=i[a.req[d].type]?i[a.req[d].type](a.req[d],b[d],d):b[d]}if(a.opt)for(a.optParamKeys||(a.optParamKeys=h.keys(a.opt)),c=0;c<a.optParamKeys.length;c++)d=a.optParamKeys[c],e[d]=b[d]?i[a.opt[d].type]||null==b[d]?i[a.opt[d].type](a.opt[d],b[d],d):b[d]:a.opt[d]["default"];return a.template||(a.template=h.template(a.fmt)),a.template(h.transform(e,function(a,c,d){a[d]=encodeURIComponent(c),delete b[d]},{}))}function f(a,b,c,d){var f,g={method:b.method},j={};if(b.requestTimeout&&(g.requestTimeout=b.requestTimeout),!c.body&&b.paramAsBody&&(c.body=c[b.paramAsBody],delete c[b.paramAsBody]),b.needsBody&&!c.body)throw new TypeError("A request body is required.");if(b.bulkBody&&(g.bulkBody=!0),"HEAD"===b.method&&(g.castExists=!0),b.url)g.path=e(b.url,c);else for(f=0;f<b.urls.length&&!(g.path=e(b.urls[f],c));f++);if(!g.path){var k=b.url||b.urls[b.urls.length-1];throw new TypeError("Unable to build a path with those params. Supply at least "+h.keys(k.req).join(", "));

}b.paramKeys||(b.paramKeys=h.keys(b.params),b.requireParamKeys=h.transform(b.params,function(a,b,c){b.required&&a.push(c)},[]));for(var l in c)if(c.hasOwnProperty(l)&&null!=c[l])switch(l){case"body":case"headers":case"requestTimeout":case"maxRetries":g[l]=c[l];break;case"ignore":g.ignore=h.isArray(c[l])?c[l]:[c[l]];break;case"method":g.method=h.toUpperString(c[l]);break;default:var m=b.params[l];m?(m.name=m.name||l,null!=c[l]&&(j[m.name]=i[m.type]?i[m.type](m,c[l],l):c[l],m["default"]&&j[m.name]===m["default"]&&delete j[m.name])):j[l]=c[l]}for(f=0;f<b.requireParamKeys.length;f++)if(!j.hasOwnProperty(b.requireParamKeys[f]))throw new TypeError("Missing required parameter "+b.requireParamKeys[f]);return g.query=j,a.request(g,d)}function g(a){return a.split(",").map(function(a){return a.trim()})}var h=a("./utils");c.makeFactoryWithModifier=d,c.factory=d(),c.proxyFactory=c.factory.proxy,c._resolveUrl=e,c.ApiNamespace=function(){},c.namespaceFactory=function(){function a(a){this.transport=a}return a.prototype=new c.ApiNamespace,a};var i={"enum":function j(a,b,c){if(h.isString(b)&&b.indexOf(",")>-1&&(b=g(b)),h.isArray(b))return b.map(function(b){return j(a,b,c)}).join(",");for(var d=0;d<a.options.length;d++)if(a.options[d]==b)return a.options[d];throw new TypeError("Invalid "+c+": expected "+(a.options.length>1?"one of "+a.options.join(","):a.options[0]))},duration:function(a,b,c){if(h.isNumeric(b)||h.isInterval(b))return b;throw new TypeError("Invalid "+c+": expected a number or interval (an integer followed by one of M, w, d, h, m, s, y or ms).")},list:function(a,b,c){switch(typeof b){case"number":case"boolean":return""+b;case"string":b=g(b);case"object":if(h.isArray(b))return b.join(",");default:throw new TypeError("Invalid "+c+": expected be a comma seperated list, array, number or string.")}},"boolean":function(a,b){return b=h.isString(b)?b.toLowerCase():b,"no"===b||"off"===b?!1:!!b},number:function(a,b,c){if(h.isNumeric(b))return 1*b;throw new TypeError("Invalid "+c+": expected a number.")},string:function(a,b,c){switch(typeof b){case"number":case"string":return""+b;default:throw new TypeError("Invalid "+c+": expected a string.")}},time:function(a,b,c){if("string"==typeof b)return b;if(h.isNumeric(b))return""+b;if(b instanceof Date)return""+b.getTime();throw new TypeError("Invalid "+c+": expected some sort of time.")}}},{"./utils":42}],23:[function(a,b,c){function d(a,b){if(b=b||{},f.call(this),this.log=b.log||new g,this.pingTimeout=b.pingTimeout||3e3,!a)throw new TypeError("Missing host");if(!(a instanceof h))throw new TypeError("Invalid host");this.host=a,e.makeBoundMethods(this)}b.exports=d;var e=a("./utils"),f=a("events").EventEmitter,g=a("./log"),h=a("./host"),i=a("./errors");e.inherits(d,f),d.prototype.request=function(){throw new Error("Connection#request must be overwritten by the Connector")},d.prototype.ping=function(a,b){"function"==typeof a?(b=a,a=null):b="function"==typeof b?b:null;var c,d,f,g=this.pingTimeout;a&&a.hasOwnProperty("requestTimeout")&&(g=a.requestTimeout),f=this.request(e.defaults(a||{},{path:"/",method:"HEAD"}),function(a){d||(clearTimeout(c),b&&b(a))}),g&&(c=setTimeout(function(){f&&f(),d=!0,b&&b(new i.RequestTimeout("Ping Timeout after "+g+"ms"))},g))},d.prototype.setStatus=function(a){var b=this.status;this.status=a,this.emit("status set",a,b,this),"closed"===a&&this.removeAllListeners()}},{"./errors":27,"./host":28,"./log":29,"./utils":42,events:5}],24:[function(a,b,c){function d(a){a=a||{},f.makeBoundMethods(this),a.log?this.log=a.log:(this.log=new g,a.log=this.log),this._config=a,this.selector=f.funcEnum(a,"selector",d.selectors,d.defaultSelector),this.Connection=f.funcEnum(a,"connectionClass",d.connectionClasses,d.defaultConnectionClass),this.deadTimeout=a.hasOwnProperty("deadTimeout")?a.deadTimeout:6e4,this.maxDeadTimeout=a.hasOwnProperty("maxDeadTimeout")?a.maxDeadTimeout:18e5,this.calcDeadTimeout=f.funcEnum(a,"calcDeadTimeout",d.calcDeadTimeoutOptions,"exponential"),this.index={},this._conns={alive:[],dead:[]},this._timeouts=[]}var e=a("__browserify_process");b.exports=d;var f=a("./utils"),g=a("./log");d.selectors=a("./selectors"),d.defaultSelector="roundRobin",d.connectionClasses=a("./connectors"),d.defaultConnectionClass=d.connectionClasses._default,delete d.connectionClasses._default,d.calcDeadTimeoutOptions={flat:function(a,b){return b},exponential:function(a,b){return Math.min(2*b*Math.pow(2,.5*a-1),this.maxDeadTimeout)}},d.prototype.select=function(a){if(this._conns.alive.length)if(this.selector.length>1)this.selector(this._conns.alive,a);else try{f.nextTick(a,void 0,this.selector(this._conns.alive))}catch(b){a(b)}else this._timeouts.length?this._selectDeadConnection(a):f.nextTick(a,void 0)},d.prototype.onStatusSet=f.handler(function(a,b,c){var d,e="dead"===a,g=e&&"dead"===b,h=!e&&"dead"===b,i=b===a,j=this._conns[b],k=this._conns[a];return i&&!e?!0:(j!==k&&(f.isArray(j)&&(d=j.indexOf(c),-1!==d&&j.splice(d,1)),f.isArray(k)&&(d=k.indexOf(c),-1===d&&k.push(c))),e&&this._onConnectionDied(c,g),void(h&&this._onConnectionRevived(c)))}),d.prototype._onConnectionRevived=function(a){for(var b,c=0;c<this._timeouts.length;c++)if(this._timeouts[c].conn===a){b=this._timeouts[c],b.id&&clearTimeout(b.id),this._timeouts.splice(c,1);break}},d.prototype._onConnectionDied=function(a,b){var c;if(b){for(var d=0;d<this._timeouts.length;d++)if(this._timeouts[d].conn===a){c=this._timeouts[d];break}}else c={conn:a,attempt:0,revive:function(b){c.attempt++,a.ping(function(c){a.setStatus(c?"dead":"alive"),b&&"function"==typeof b&&b(c)})}},this._timeouts.push(c);c.id&&clearTimeout(c.id);var e=this.calcDeadTimeout(c.attempt,this.deadTimeout);c.id=setTimeout(c.revive,e),c.runAt=f.now()+e},d.prototype._selectDeadConnection=function(a){var b=f.sortBy(this._timeouts,"runAt"),c=this.log;e.nextTick(function d(){var f=b.shift();return f?f.conn?void("dead"===f.conn.status?f.revive(function(b){b?(c.warning("Unable to revive connection: "+f.conn.id),e.nextTick(d)):a(void 0,f.conn)}):a(void 0,f.conn)):void d():void a(void 0)})},d.prototype.getConnections=function(a,b){var c;return c=a?this._conns[a]:this._conns[this._conns.alive.length?"alive":"dead"],null==b?c.slice(0):f.shuffle(c).slice(0,b)},d.prototype.addConnection=function(a){a.id||(a.id=a.host.toString()),this.index[a.id]||(this.log.info("Adding connection to",a.id),this.index[a.id]=a,a.on("status set",this.bound.onStatusSet),a.setStatus("alive"))},d.prototype.removeConnection=function(a){a.id||(a.id=a.host.toString()),this.index[a.id]&&(delete this.index[a.id],a.setStatus("closed"),a.removeListener("status set",this.bound.onStatusSet))},d.prototype.setHosts=function(a){var b,c,d,e,g=f.clone(this.index);for(c=0;c<a.length;c++)e=a[c],d=e.toString(),this.index[d]?delete g[d]:(b=new this.Connection(e,this._config),b.id=d,this.addConnection(b));var h=f.keys(g);for(c=0;c<h.length;c++)this.removeConnection(this.index[h[c]])},d.prototype.close=function(){this.setHosts([])},d.prototype.empty=d.prototype.close},{"./connectors":25,"./log":29,"./selectors":34,"./utils":42,__browserify_process:14}],25:[function(a,b,c){var d={xhr:a("./xhr"),jquery:a("./jquery"),angular:a("./angular")},e=a("../utils");e.each(d,function(a,b){"function"!=typeof a&&delete d[b]}),d._default=d.xhr?"xhr":d.angular?"angular":"jquery",b.exports=d},{"../utils":42,"./angular":2,"./jquery":2,"./xhr":26}],26:[function(a,b,c){function d(a,b){f.call(this,a,b)}b.exports=d;var e=a("../utils"),f=a("../connection"),g=a("../errors").ConnectionFault,h=!(navigator&&/PhantomJS/i.test(navigator.userAgent));e.inherits(d,f);var i=e.noop;if(i="undefined"!=typeof XMLHttpRequest?function(){return new XMLHttpRequest}:e(["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"]).map(function(a){try{{new window.ActiveXObject(a)}return function(){return new window.ActiveXObject(a)}}catch(b){return!1}}).compact().first(),!i)throw new Error("getXhr(): XMLHttpRequest not available");d.prototype.request=function(a,b){var c,d=i(),e=this.host,f=this.log,j=e.makeUrl(a),k=e.getHeaders(a.headers),l=a.async===!1?!1:h;if(d.open(a.method||"GET",j,l),k)for(var m in k)void 0!==k[m]&&d.setRequestHeader(m,k[m]);return d.onreadystatechange=function(){if(4===d.readyState){clearTimeout(c),f.trace(a.method,j,a.body,d.responseText,d.status);var e=d.status?void 0:new g(d.statusText||"Request failed to complete.");b(e,d.responseText,d.status)}},d.send(a.body||void 0),function(){d.abort()}}},{"../connection":23,"../errors":27,"../utils":42}],27:[function(a,b,c){function d(a,b,c){this.message=a,Error.call(this,this.message),g?Error.captureStackTrace(this,b):this.stack=h?(new Error).stack:"",c&&(e.assign(this,c),this.toString=function(){return a+" :: "+JSON.stringify(c)},this.toJSON=function(){return e.assign({msg:a},c)})}var e=a("./utils"),f=b.exports,g="function"==typeof Error.captureStackTrace,h=!!(new Error).stack;f._Abstract=d,e.inherits(d,Error),f.ConnectionFault=function(a){d.call(this,a||"Connection Failure",f.ConnectionFault)},e.inherits(f.ConnectionFault,d),f.NoConnections=function(a){d.call(this,a||"No Living connections",f.NoConnections)},e.inherits(f.NoConnections,d),f.Generic=function(a,b){d.call(this,a||"Generic Error",f.Generic,b)},e.inherits(f.Generic,d),f.RequestTimeout=function(a){d.call(this,a||"Request Timeout",f.RequestTimeout)},e.inherits(f.RequestTimeout,d),f.Serialization=function(a){d.call(this,a||"Unable to parse/serialize body",f.Serialization)},e.inherits(f.Serialization,d),f.RequestTypeError=function(a){d.call(this,"Cross-domain AJAX requests "+a+" are not supported",f.RequestTypeError)},e.inherits(f.RequestTypeError,d);var i={504:"Gateway Timeout",503:"Service Unavailable",502:"Bad Gateway",500:"Internal Server Error",412:"Precondition Failed",409:"Conflict",403:"Authorization Exception",404:"Not Found",401:"Authentication Exception",400:"Bad Request",301:"Moved Permanently"};e.each(i,function(a,b){function c(f,g){this.status=b;var h=null;return e.isPlainObject(f)&&(h=f,f=null),h?(f=[].concat(h.root_cause||[]).reduce(function(a,b){a&&(a+=" (and) "),a+="["+b.type+"] "+b.reason;var c=e.omit(b,["type","reason"]);return e.size(c)&&(a+=", with: "+JSON.stringify(c)),a},""),f||(h.type&&(f+="["+h.type+"] "),h.reason&&(f+=h.reason)),d.call(this,f||a,c,g),this):(d.call(this,f||a,c),this)}var g=e.studlyCase(a);e.inherits(c,d),f[g]=c,f[b]=c})},{"./utils":42}],28:[function(a,b,c){function d(a,b){if(a=j.clone(a||{}),b=b||{},this.protocol="http",this.host="localhost",this.path="",this.port=9200,this.query=null,this.headers=null,this.suggestCompression=!!b.suggestCompression,this.ssl=j.defaults({},a.ssl||{},b.ssl||{},o),"string"==typeof a){var c=a.indexOf(":"),e=a.indexOf("/"),f=-1===e,p=c>-1&&f,q=!p&&e>c;if((f||p||q)&&!k.test(a)&&(a=l+"//"+a),a=j.pick(h.parse(a,!1,!0),m),!a.port){var r=a.protocol||"http";":"===r.charAt(r.length-1)&&(r=r.substring(0,r.length-1)),d.defaultPorts[r]&&(a.port=d.defaultPorts[r])}}j.isObject(a)?j.each(n,function(b){var c=b+"name";a[c]&&a[b]?0===a[b].indexOf(a[c])&&(a[b]=a[c]):a[c]&&(a[b]=a[c]),delete a[c]}):a={},a.auth&&(a.headers=a.headers||{},a.headers.Authorization="Basic "+g(a.auth),delete a.auth),j.forOwn(a,function(a,b){null!=a&&(this[b]=j.clone(a))},this),null===this.query?this.query={}:j.isPlainObject(this.query)||(this.query=i.parse(this.query)),this.port=j.isNumeric(this.port)?parseInt(this.port,10):9200,"/"===this.path?this.path="":this.path&&"/"!==this.path.charAt(0)&&(this.path="/"+(this.path||"")),":"===this.protocol.substr(-1)&&(this.protocol=this.protocol.substring(0,this.protocol.length-1))}function e(a,b){return function(c){b&&(c=b.call(this,c));var d=this[a];return d||c?(c&&(d=j.assign({},d,c)),j.size(d)?d:null):null}}var f=a("__browserify_Buffer").Buffer;b.exports=d;var g,h=a("url"),i=a("querystring"),j=a("./utils"),k=/^([a-z]+:)?\/\//,l="http:";"undefined"!=typeof window&&(l=window.location.protocol,g=window.btoa),g=g||function(a){return new f(a,"utf8").toString("base64")};var m=["protocol","hostname","pathname","port","auth","query"],n=["host","path"],o={pfx:null,key:null,passphrase:null,cert:null,ca:null,ciphers:null,rejectUnauthorized:!1,secureProtocol:null};d.defaultPorts={http:80,https:443},d.prototype.makeUrl=function(a){a=a||{};var b="";this.port!==d.defaultPorts[this.protocol]&&(b=":"+this.port);var c=""+(this.path||"")+(a.path||"");"/"!==c.charAt(0)&&(c="/"+c);var e=i.stringify(this.getQuery(a.query));return this.host?this.protocol+"://"+this.host+b+c+(e?"?"+e:""):c+(e?"?"+e:"")},d.prototype.getHeaders=e("headers",function(a){return this.suggestCompression?j.defaults(a||{},{"Accept-Encoding":"gzip,deflate"}):a}),d.prototype.getQuery=e("query",function(a){return"string"==typeof a?i.parse(a):a}),d.prototype.toString=function(){return this.makeUrl()}},{"./utils":42,__browserify_Buffer:13,querystring:7,url:8}],29:[function(a,b,c){function d(a){a=a||{};var b,c;if(a.log){if(c=f.isArrayOfStrings(a.log)?[{levels:a.log}]:f.createArray(a.log,function(a){return f.isPlainObject(a)?a:"string"==typeof a?{level:a}:void 0}),!c)throw new TypeError("Invalid logging output config. Expected either a log level, array of log levels, a logger config object, or an array of logger config objects.");for(b=0;b<c.length;b++)this.addOutput(c[b])}}var e=a("__browserify_process"),f=a("./utils"),g=a("url"),h=a("events").EventEmitter;f.inherits(d,h),d.loggers=a("./loggers"),d.prototype.close=function(){this.emit("closing"),this.listenerCount()&&(console.error("Something is still listening for log events, but the logger is closing."),this.clearAllListeners())},d.prototype.listenerCount=function(a){return h.listenerCount?h.listenerCount(this,a):this.listeners(a).length},d.levels=["error","warning","info","debug","trace"],d.parseLevels=function(a){switch(typeof a){case"string":var b=f.indexOf(d.levels,a);if(b>=0)return d.levels.slice(0,b+1);case"object":if(f.isArray(a)){var c=f.intersection(a,d.levels);if(c.length===a.length)return c}default:throw new TypeError("invalid logging level "+a+". Expected zero or more of these options: "+d.levels.join(", "))}},d.join=function(a){return f.map(a,function(a){return f.isPlainObject(a)?f.inspect(a)+"\n":a.toString()}).join(" ")},d.prototype.addOutput=function(a){a=a||{},a.levels=d.parseLevels(a.levels||a.level||"warning"),delete a.level;var b=f.funcEnum(a,"type",d.loggers,e.browser?"console":"stdio");return new b(this,a)},d.prototype.error=function(a){return this.listenerCount("error")?this.emit("error",a instanceof Error?a:new Error(a)):void 0},d.prototype.warning=function(){return this.listenerCount("warning")?this.emit("warning",d.join(arguments)):void 0},d.prototype.info=function(){return this.listenerCount("info")?this.emit("info",d.join(arguments)):void 0},d.prototype.debug=function(){return this.listenerCount("debug")?this.emit("debug",d.join(arguments)):void 0},d.prototype.trace=function(a,b,c,e,f){return this.listenerCount("trace")?this.emit("trace",d.normalizeTraceArgs(a,b,c,e,f)):void 0},d.normalizeTraceArgs=function(a,b,c,d,e){return"string"==typeof b?b=g.parse(b,!0,!0):(b=f.clone(b),b.path&&(b.query=g.parse(b.path,!0,!1).query),!b.pathname&&b.path&&(b.pathname=b.path.split("?").shift())),delete b.auth,{method:a,url:g.format(b),body:c,status:e,response:d}},b.exports=d},{"./loggers":31,"./utils":42,__browserify_process:14,events:5,url:8}],30:[function(a,b,c){function d(a,b){this.log=a,this.listeningLevels=[],g.makeBoundMethods(this),this.log.once("closing",this.bound.cleanUpListeners),this.setupListeners(b.levels)}function e(a){return 10>a?"0"+a.toString(10):a.toString(10)}function f(a,b){var c=g.repeat(" ",b||2);return(a||"").split(/\r?\n/).map(function(a){return c+a}).join("\n")}var g=a("./utils");d.prototype.timestamp=function(){var a=new Date;return a.getUTCFullYear()+"-"+e(a.getUTCMonth()+1)+"-"+e(a.getUTCDate())+"T"+e(a.getUTCHours())+":"+e(a.getUTCMinutes())+":"+e(a.getUTCSeconds())+"Z"},d.prototype.format=function(a,b){return a+": "+this.timestamp()+"\n"+f(b)+"\n\n"},d.prototype.write=function(){throw new Error("This should be overwritten by the logger")},d.prototype.setupListeners=function(a){this.cleanUpListeners(),this.listeningLevels=[],g.each(a,function(a){var b="on"+g.ucfirst(a);if(!this.bound[b])throw new Error('Unable to listen for level "'+a+'"');this.listeningLevels.push(a),this.log.on(a,this.bound[b])},this)},d.prototype.cleanUpListeners=g.handler(function(){g.each(this.listeningLevels,function(a){this.log.removeListener(a,this.bound["on"+g.ucfirst(a)])},this)}),d.prototype.onError=g.handler(function(a){this.write("Error"===a.name?"ERROR":a.name,a.stack)}),d.prototype.onWarning=g.handler(function(a){this.write("WARNING",a)}),d.prototype.onInfo=g.handler(function(a){this.write("INFO",a)}),d.prototype.onDebug=g.handler(function(a){this.write("DEBUG",a)}),d.prototype.onTrace=g.handler(function(a){this.write("TRACE",this._formatTraceMessage(a))}),d.prototype._formatTraceMessage=function(a){return"-> "+a.method+" "+a.url+"\n"+this._prettyJson(a.body)+"\n<- "+a.status+"\n"+this._prettyJson(a.response)},d.prototype._prettyJson=function(a){try{return"string"==typeof a&&(a=JSON.parse(a)),JSON.stringify(a,null,"  ").replace(/'/g,"\\u0027")}catch(b){return"string"==typeof a?a:""}},b.exports=d},{"./utils":42}],31:[function(a,b,c){b.exports={console:a("./console")}},{"./console":32}],32:[function(a,b,c){function d(a,b){e.call(this,a,b),this.color=f.has(b,"color")?!!b.color:!0}b.exports=d;var e=a("../logger"),f=a("../utils");f.inherits(d,e),d.prototype.setupListeners=function(a){e.prototype.setupListeners.call(this,a)},d.prototype.write=function(a,b,c){console[c]&&console[c](this.format(a,b))},d.prototype.onError=f.handler(function(a){var b=console.error?"error":"log";this.write("Error"===a.name?"ERROR":a.name,a.stack||a.message,b)}),d.prototype.onWarning=f.handler(function(a){this.write("WARNING",a,console.warn?"warn":"log")}),d.prototype.onInfo=f.handler(function(a){this.write("INFO",a,console.info?"info":"log")}),d.prototype.onDebug=f.handler(function(a){this.write("DEBUG",a,console.debug?"debug":"log")}),d.prototype.onTrace=f.handler(function(a){this.write("TRACE",this._formatTraceMessage(a),"log")})},{"../logger":30,"../utils":42}],33:[function(a,b,c){function d(a){return function(b){return e.transform(b,function(b,c,d){if(c[a]){var e=f.exec(c[a]);if(!e)throw new Error("node's "+a+" property ("+JSON.stringify(c[a])+") does not match the expected pattern "+f+".");b.push({host:e[1],port:parseInt(e[2],10),_meta:{id:d,name:c.name,hostname:c.hostname,version:c.version}})}},[])}}var e=a("./utils"),f=/\[\/*([^:]+):(\d+)\]/;b.exports=d("http_address"),b.exports.thrift=d("transport_address")},{"./utils":42}],34:[function(a,b,c){b.exports={random:a("./random"),roundRobin:a("./round_robin")}},{"./random":35,"./round_robin":36}],35:[function(a,b,c){b.exports=function(a){return a[Math.floor(Math.random()*a.length)]}},{}],36:[function(a,b,c){b.exports=function(a){var b=a[0];return a.push(a.shift()),b}},{}],37:[function(a,b,c){function d(){}var e=a("../utils"),f=a("../serializers/json");e.inherits(d,f),d.prototype.encode=function(a){switch(typeof a){case"string":return a;case"object":if(a)return angular.toJson(a);default:return}},b.exports=d},{"../serializers/json":39,"../utils":42}],38:[function(a,b,c){b.exports={angular:a("./angular"),json:a("./json")}},{"./angular":37,"./json":39}],39:[function(a,b,c){function d(){}b.exports=d;var e=a("../utils");d.prototype.serialize=function(a,b,c){switch(typeof a){case"string":return a;case"object":if(a)return JSON.stringify(a,b,c);default:return}},d.prototype.deserialize=function(a){if("string"==typeof a)try{return JSON.parse(a)}catch(b){}},d.prototype.bulkBody=function(a){var b,c="";if(e.isArray(a))for(b=0;b<a.length;b++)c+=this.serialize(a[b])+"\n";else{if("string"!=typeof a)throw new TypeError("Bulk body should either be an Array of commands/string, or a String");c=a+("\n"===a[a.length-1]?"":"\n")}return c}},{"../utils":42}],40:[function(a,b,c){function d(b){var c=this;b=c._config=b||{};var f="function"==typeof b.log?b.log:a("./log");b.log=c.log=new f(b);var h=e.funcEnum(b,"connectionPool",d.connectionPools,"main");c.connectionPool=new h(b);var j=e.funcEnum(b,"serializer",d.serializers,"json");c.serializer=new j(b),c.nodesToHostCallback=e.funcEnum(b,"nodesToHostCallback",d.nodesToHostCallbacks,"main"),c.maxRetries=b.hasOwnProperty("maxRetries")?b.maxRetries:3,c.sniffEndpoint=b.hasOwnProperty("sniffEndpoint")?b.sniffEndpoint:"/_nodes/_all/clear",c.requestTimeout=b.hasOwnProperty("requestTimeout")?b.requestTimeout:3e4,b.hasOwnProperty("defer")&&(c.defer=b.defer);var k=b.hasOwnProperty("randomizeHosts")?!!b.randomizeHosts:!0;if(b.host&&(b.hosts=b.host),b.hosts){var l=e.createArray(b.hosts,function(a){return e.isPlainObject(a)||e.isString(a)||a instanceof g?a:void 0});if(!l)throw new TypeError("Invalid hosts config. Expected a URL, an array of urls, a host config object, or an array of host config objects.");var m=e.map(l,function(a){return a instanceof g?a:new g(a,c._config)});k&&(m=e.shuffle(m)),c.connectionPool.setHosts(m)}b.sniffOnStart&&c.sniff(),b.sniffInterval&&c._timeout(function n(){c.sniff(),c._timeout(n,b.sniffInterval)},b.sniffInterval),b.sniffOnConnectionFault&&i(c)}b.exports=d;var e=a("./utils"),f=a("./errors"),g=a("./host"),h=a("bluebird"),i=a("./transport/sniff_on_connection_fault");d.connectionPools={main:a("./connection_pool")},d.serializers=a("./serializers"),d.nodesToHostCallbacks={main:a("./nodes_to_host")},d.prototype.defer=function(){return h.defer()},d.prototype.request=function(a,b){function c(b,c){q||(b?g(b):c?(i=c,j=i.request(a.req,d)):(n.log.warning("No living connections"),g(new f.NoConnections)))}function d(a,b,d,e){return q?void 0:(j=void 0,a instanceof f.RequestTypeError?(n.log.error("Connection refused to execute the request",a),void g(a,b,d,e)):void(a?(i.setStatus("dead"),o?(o--,n.log.error("Request error, retrying"+(a.message?" -- "+a.message:"")),n.connectionPool.select(c)):(n.log.error("Request complete with error"+(a.message?" -- "+a.message:"")),g(new f.ConnectionFault(a)))):(n.log.debug("Request complete"),g(void 0,b,d,e))))}function g(c,d,g,h){if(!q){n._timeout(k);var i,j=!h||h["content-type"]&&~h["content-type"].indexOf("application/json");if(!c&&d&&(j?(i=n.serializer.deserialize(d),null==i&&(c=new f.Serialization,i=d)):i=d),(!c||c instanceof f.Serialization)&&(200>g||g>=300)&&(!a.ignore||!e.contains(a.ignore,g))){var l=e.pick(a.req,["path","query","body"]);l.statusCode=g,l.response=d,c=f[g]?new f[g](i&&i.error,l):new f.Generic("unknown error",l)}a.castExists&&(c&&c instanceof f.NotFound?(i=!1,c=void 0):i=!c),"function"==typeof b?c?b(c,i,g):b(void 0,i,g):c?(c.body=i,c.status=g,m.reject(c)):m.resolve(i)}}function h(){q||(q=!0,o=0,n._timeout(k),"function"==typeof j&&j())}var i,j,k,l,m,n=this,o=this.maxRetries,p=this.requestTimeout,q=!1;return n.log.debug("starting request",a),a.body&&"GET"===a.method?void e.nextTick(g,new TypeError('Body can not be sent with method "GET"')):(a.body&&(a.body=n.serializer[a.bulkBody?"bulkBody":"serialize"](a.body)),a.hasOwnProperty("maxRetries")&&(o=a.maxRetries),a.hasOwnProperty("requestTimeout")&&(p=a.requestTimeout),a.req={method:a.method,path:a.path||"/",query:a.query,body:a.body,headers:a.headers},p&&p!==1/0&&(k=this._timeout(function(){g(new f.RequestTimeout("Request Timeout after "+p+"ms")),h()},p)),"function"==typeof b?l={abort:h}:(m=this.defer(),l=m.promise,l.abort=h),i?c(void 0,i):n.connectionPool.select(c),l)},d.prototype._timeout=function(a,b){this._timers=this._timers||[];var c;if("function"!=typeof a&&(c=a,a=void 0),a)return c=setTimeout(a,b),this._timers.push(c),c;if(c){clearTimeout(c);var d=this._timers.indexOf(c);-1!==d&&this._timers.splice(d,1)}},d.prototype.sniff=function(a){var b=this.connectionPool,c=this.nodesToHostCallback,d=this.log,f=this._config;a="function"==typeof a?a:e.noop,this.request({path:this.sniffEndpoint,method:"GET"},function(h,i,j){if(!h&&i&&i.nodes){var k;try{k=c(i.nodes)}catch(l){return void d.error(new Error("Unable to convert node list from "+this.sniffEndpoint+" to hosts durring sniff. Encountered error:\n"+(l.stack||l.message)))}b.setHosts(e.map(k,function(a){return new g(a,f)}))}a(h,i,j)})},d.prototype.close=function(){this.log.close(),e.each(this._timers,clearTimeout),this.connectionPool.close()}},{"./connection_pool":24,"./errors":27,"./host":28,"./log":29,"./nodes_to_host":33,"./serializers":38,"./transport/sniff_on_connection_fault":41,"./utils":42,bluebird:1}],41:[function(a,b,c){var d=a("../utils");b.exports=function(a){var b=0,c=a.connectionPool,e=c._onConnectionDied,f=function(){f.timerId=a._timeout(f.timerId),a.sniff()},g=function(a){var b=d.now();return function(){return b-a}};c._onConnectionDied=function(d,h){var i=e.call(c,d,h);b=f.timerId?b+1:0;var j=c.calcDeadTimeout(b,1e3);return f.timerId&&j<f.timerId&&f.countdown()&&(f.timerId=a._timeout(f.timerId)),f.timerId||(f.timerId=a._timeout(f,j),f.countdown=g(j)),i},c._onConnectionDied.restore=function(){c._onConnectionDied=e}}},{"../utils":42}],42:[function(a,b,c){function d(a,b,c){return function(d){for(var e,f,g,h,i=0,j=[],k="";i<d.length;i++)e=d.charCodeAt(i),f=d.charAt(i),h=e>=97&&122>=e||e>=48&&57>=e,g=e>=65&&90>=e,(g||!h)&&(k.length&&j.push(k),k=""),(g||h)&&(h&&k.length?k+=f:k=!j.length&&a||j.length&&b?f.toUpperCase():f.toLowerCase());return k.length&&j.push(k),j.length&&"_"===d.charAt(0)&&(j[0]="_"+j[0]),j.join(c)}}var e=a("__browserify_process"),f=a("__browserify_Buffer").Buffer,g=a("path"),h=a("lodash"),i=a("util"),j=h.extend({},h,i);h=j,j.joinPath=g.join,j.deepMerge=function(a,b){return h.each(b,function(c,d){switch(typeof a[d]){case"undefined":a[d]=b[d];break;case"object":h.isArray(a[d])&&h.isArray(b[d])?a[d]=a[d].concat(b[d]):h.isPlainObject(a[d])&&h.isPlainObject(b[d])&&j.deepMerge(a[d],b[d])}}),a},h.each(["String","Object","PlainObject","Array","Finite","Function","RegExp"],function(a){var b=h["is"+a];j["isArrayOf"+a+"s"]=function(a){return h.isArray(a)&&h.every(a.slice(0,10),b)}}),j.ucfirst=function(a){return a[0].toUpperCase()+a.substring(1).toLowerCase()},j.studlyCase=d(!0,!0,""),j.camelCase=d(!1,!0,""),j.snakeCase=d(!1,!1,"_"),j.toLowerString=function(a){return a?"string"!=typeof a&&(a=a.toString()):a="",a.toLowerCase()},j.toUpperString=function(a){return a?"string"!=typeof a&&(a=a.toString()):a="",a.toUpperCase()},j.isNumeric=function(a){return"object"!=typeof a&&a-parseFloat(a)>=0};var k=/^(\d+(?:\.\d+)?)(M|w|d|h|m|s|y|ms)$/;j.isInterval=function(a){return!(!a.match||!a.match(k))},j.repeat=function(a,b){return new Array(b+1).join(a)},j.applyArgs=function(a,b,c,d){switch(d=d||0,c.length-d){case 0:return a.call(b);case 1:return a.call(b,c[0+d]);case 2:return a.call(b,c[0+d],c[1+d]);case 3:return a.call(b,c[0+d],c[1+d],c[2+d]);case 4:return a.call(b,c[0+d],c[1+d],c[2+d],c[3+d]);case 5:return a.call(b,c[0+d],c[1+d],c[2+d],c[3+d],c[4+d]);default:return a.apply(b,Array.prototype.slice.call(c,d))}},h.nextTick=function(a){e.nextTick(h.bindKey(h,"applyArgs",a,null,arguments,1))},h.handler=function(a){return a._provideBound=!0,a},h.scheduled=h.handler,h.makeBoundMethods=function(a){a.bound={};for(var b in a)"function"==typeof a[b]&&a[b]._provideBound===!0&&(a.bound[b]=h.bind(a[b],a))},h.noop=function(){},h.funcEnum=function(a,b,c,d){var e=a[b];switch(typeof e){case"undefined":return c[d];case"function":return e;case"string":if(c.hasOwnProperty(e))return c[e];default:var f="Invalid "+b+' "'+e+'", expected a function';switch(h.size(c)){case 0:break;case 1:f+=" or "+h.keys(c)[0];break;default:f+=" or one of "+h.keys(c).join(", ")}throw new TypeError(f)}},h.createArray=function(a,b){b="function"==typeof b?b:h.identity;var c,d,e=[];for(h.isArray(a)||(a=[a]),d=0;d<a.length;d++){if(c=b(a[d]),void 0===c)return!1;e.push(c)}return e},h.getUnwrittenFromStream=function(a){var b=h.getStreamWriteBuffer(a);if(b){var c="";return b.length?(h.each(b,function(a){if(a.chunk)c+=""+a.chunk;else{if(!h.isArray(a)||"string"!=typeof a[0]&&!f.isBuffer(a[0]))return!1;c+=""+a[0]}}),c):c}},h.getStreamWriteBuffer=function(a){if(a&&a._writableState){var b=a._writableState;return b.getBuffer?b.getBuffer():b.buffer?b.buffer:void 0}},h.clearWriteStreamBuffer=function(a){var b=h.getStreamWriteBuffer(a);return b&&b.splice(0)},h.now=function(){return"function"==typeof Date.now?Date.now():(new Date).getTime()},b.exports=j},{__browserify_Buffer:13,__browserify_process:14,lodash:15,path:6,util:9}]},{},[16])(16)});
}());