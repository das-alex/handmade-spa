var t,n;(t=window.document).getElementById("livereloadscript")||((n=t.createElement("script")).async=1,n.src="//"+(window.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",n.id="livereloadscript",t.head.appendChild(n));var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,n){return t(n={exports:{}},n.exports),n.exports}var o=function(t){return t&&t.Math==Math&&t},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof e&&e)||Function("return this")(),a=function(t){try{return!!t()}catch(t){return!0}},c=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),s={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,l={f:u&&!s.call({1:2},1)?function(t){var n=u(this,t);return!!n&&n.enumerable}:s},f=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},p={}.toString,d=function(t){return p.call(t).slice(8,-1)},h="".split,v=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==d(t)?h.call(t,""):Object(t)}:Object,g=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},y=function(t){return v(g(t))},m=function(t){return"object"==typeof t?null!==t:"function"==typeof t},_=function(t,n){if(!m(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!m(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!m(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!m(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")},w={}.hasOwnProperty,b=function(t,n){return w.call(t,n)},x=i.document,E=m(x)&&m(x.createElement),S=!c&&!a((function(){return 7!=Object.defineProperty((t="div",E?x.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),O=Object.getOwnPropertyDescriptor,j={f:c?O:function(t,n){if(t=y(t),n=_(n,!0),S)try{return O(t,n)}catch(t){}if(b(t,n))return f(!l.f.call(t,n),t[n])}},R=function(t){if(!m(t))throw TypeError(String(t)+" is not an object");return t},L=Object.defineProperty,k={f:c?L:function(t,n,e){if(R(t),n=_(n,!0),R(e),S)try{return L(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},P=c?function(t,n,e){return k.f(t,n,f(1,e))}:function(t,n,e){return t[n]=e,t},T=function(t,n){try{P(i,t,n)}catch(e){i[t]=n}return n},A=i["__core-js_shared__"]||T("__core-js_shared__",{}),I=Function.toString;"function"!=typeof A.inspectSource&&(A.inspectSource=function(t){return I.call(t)});var C,N,M,F,G=A.inspectSource,U=i.WeakMap,D="function"==typeof U&&/native code/.test(G(U)),$=r((function(t){(t.exports=function(t,n){return A[t]||(A[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.4",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),B=0,q=Math.random(),Y=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++B+q).toString(36)},z=$("keys"),K={},H=i.WeakMap;if(D){var W=new H,V=W.get,X=W.has,J=W.set;C=function(t,n){return J.call(W,t,n),n},N=function(t){return V.call(W,t)||{}},M=function(t){return X.call(W,t)}}else{var Q=z[F="state"]||(z[F]=Y(F));K[Q]=!0,C=function(t,n){return P(t,Q,n),n},N=function(t){return b(t,Q)?t[Q]:{}},M=function(t){return b(t,Q)}}var Z,tt,nt={set:C,get:N,has:M,enforce:function(t){return M(t)?N(t):C(t,{})},getterFor:function(t){return function(n){var e;if(!m(n)||(e=N(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}},et=r((function(t){var n=nt.get,e=nt.enforce,r=String(String).split("String");(t.exports=function(t,n,o,a){var c=!!a&&!!a.unsafe,s=!!a&&!!a.enumerable,u=!!a&&!!a.noTargetGet;"function"==typeof o&&("string"!=typeof n||b(o,"name")||P(o,"name",n),e(o).source=r.join("string"==typeof n?n:"")),t!==i?(c?!u&&t[n]&&(s=!0):delete t[n],s?t[n]=o:P(t,n,o)):s?t[n]=o:T(n,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||G(this)}))})),rt=i,ot=function(t){return"function"==typeof t?t:void 0},it=function(t,n){return arguments.length<2?ot(rt[t])||ot(i[t]):rt[t]&&rt[t][n]||i[t]&&i[t][n]},at=Math.ceil,ct=Math.floor,st=function(t){return isNaN(t=+t)?0:(t>0?ct:at)(t)},ut=Math.min,lt=function(t){return t>0?ut(st(t),9007199254740991):0},ft=Math.max,pt=Math.min,dt=function(t,n){var e=st(t);return e<0?ft(e+n,0):pt(e,n)},ht=function(t){return function(n,e,r){var o,i=y(n),a=lt(i.length),c=dt(r,a);if(t&&e!=e){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===e)return t||c||0;return!t&&-1}},vt={includes:ht(!0),indexOf:ht(!1)}.indexOf,gt=function(t,n){var e,r=y(t),o=0,i=[];for(e in r)!b(K,e)&&b(r,e)&&i.push(e);for(;n.length>o;)b(r,e=n[o++])&&(~vt(i,e)||i.push(e));return i},yt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],mt=yt.concat("length","prototype"),_t={f:Object.getOwnPropertyNames||function(t){return gt(t,mt)}},wt={f:Object.getOwnPropertySymbols},bt=it("Reflect","ownKeys")||function(t){var n=_t.f(R(t)),e=wt.f;return e?n.concat(e(t)):n},xt=function(t,n){for(var e=bt(n),r=k.f,o=j.f,i=0;i<e.length;i++){var a=e[i];b(t,a)||r(t,a,o(n,a))}},Et=/#|\.prototype\./,St=function(t,n){var e=jt[Ot(t)];return e==Lt||e!=Rt&&("function"==typeof n?a(n):!!n)},Ot=St.normalize=function(t){return String(t).replace(Et,".").toLowerCase()},jt=St.data={},Rt=St.NATIVE="N",Lt=St.POLYFILL="P",kt=St,Pt=j.f,Tt=function(t,n){var e,r,o,a,c,s=t.target,u=t.global,l=t.stat;if(e=u?i:l?i[s]||T(s,{}):(i[s]||{}).prototype)for(r in n){if(a=n[r],o=t.noTargetGet?(c=Pt(e,r))&&c.value:e[r],!kt(u?r:s+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof a==typeof o)continue;xt(a,o)}(t.sham||o&&o.sham)&&P(a,"sham",!0),et(e,r,a,t)}},At=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},It=function(t){return Object(g(t))},Ct=Array.isArray||function(t){return"Array"==d(t)},Nt=!!Object.getOwnPropertySymbols&&!a((function(){return!String(Symbol())})),Mt=Nt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ft=$("wks"),Gt=i.Symbol,Ut=Mt?Gt:Gt&&Gt.withoutSetter||Y,Dt=function(t){return b(Ft,t)||(Nt&&b(Gt,t)?Ft[t]=Gt[t]:Ft[t]=Ut("Symbol."+t)),Ft[t]},$t=Dt("species"),Bt=function(t,n){var e;return Ct(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!Ct(e.prototype)?m(e)&&null===(e=e[$t])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)},qt=[].push,Yt=function(t){var n=1==t,e=2==t,r=3==t,o=4==t,i=6==t,a=5==t||i;return function(c,s,u,l){for(var f,p,d=It(c),h=v(d),g=function(t,n,e){if(At(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}(s,u,3),y=lt(h.length),m=0,_=l||Bt,w=n?_(c,y):e?_(c,0):void 0;y>m;m++)if((a||m in h)&&(p=g(f=h[m],m,d),t))if(n)w[m]=p;else if(p)switch(t){case 3:return!0;case 5:return f;case 6:return m;case 2:qt.call(w,f)}else if(o)return!1;return i?-1:r||o?o:w}},zt={forEach:Yt(0),map:Yt(1),filter:Yt(2),some:Yt(3),every:Yt(4),find:Yt(5),findIndex:Yt(6)},Kt=it("navigator","userAgent")||"",Ht=i.process,Wt=Ht&&Ht.versions,Vt=Wt&&Wt.v8;Vt?tt=(Z=Vt.split("."))[0]+Z[1]:Kt&&(!(Z=Kt.match(/Edge\/(\d+)/))||Z[1]>=74)&&(Z=Kt.match(/Chrome\/(\d+)/))&&(tt=Z[1]);var Xt=tt&&+tt,Jt=Dt("species"),Qt=function(t){return Xt>=51||!a((function(){var n=[];return(n.constructor={})[Jt]=function(){return{foo:1}},1!==n[t](Boolean).foo}))},Zt=Object.defineProperty,tn={},nn=function(t){throw t},en=function(t,n){if(b(tn,t))return tn[t];n||(n={});var e=[][t],r=!!b(n,"ACCESSORS")&&n.ACCESSORS,o=b(n,0)?n[0]:nn,i=b(n,1)?n[1]:void 0;return tn[t]=!!e&&!a((function(){if(r&&!c)return!0;var t={length:-1};r?Zt(t,1,{enumerable:!0,get:nn}):t[1]=1,e.call(t,o,i)}))},rn=zt.map,on=Qt("map"),an=en("map");Tt({target:"Array",proto:!0,forced:!on||!an},{map:function(t){return rn(this,t,arguments.length>1?arguments[1]:void 0)}});var cn=Object.keys||function(t){return gt(t,yt)},sn=Object.assign,un=Object.defineProperty,ln=!sn||a((function(){if(c&&1!==sn({b:1},sn(un({},"a",{enumerable:!0,get:function(){un(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},n={},e=Symbol();return t[e]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),7!=sn({},t)[e]||"abcdefghijklmnopqrst"!=cn(sn({},n)).join("")}))?function(t,n){for(var e=It(t),r=arguments.length,o=1,i=wt.f,a=l.f;r>o;)for(var s,u=v(arguments[o++]),f=i?cn(u).concat(i(u)):cn(u),p=f.length,d=0;p>d;)s=f[d++],c&&!a.call(u,s)||(e[s]=u[s]);return e}:sn;Tt({target:"Object",stat:!0,forced:Object.assign!==ln},{assign:ln});var fn=function(){function t(){this.events={}}return t.prototype.subscribe=function(t,n){return this.events.hasOwnProperty(t)||(this.events[t]=[]),this.events[t].push(n)},t.prototype.publish=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.events.hasOwnProperty(t)?this.events[t].map((function(t){return t(n)})):[]},t}();function pn(t){this.debug=!!t.hasOwnProperty("debug")&&t.debug,this.actions=t.hasOwnProperty("actions")?t.actions:{},this.mutations=t.hasOwnProperty("mutations")?t.mutations:{},this.state=new Proxy(t.state||{},{set:function(t,n,e){return t[n]=e,console.log("stateChange",n,": ",e),this.events.publish("stateChange",this.state),"mutation"!==this.status&&console.warn("Use mutation to set key"),this.status="...",!0}}),this.status="...",this.events=new fn}pn.prototype.dispatch=function(t,n){return"function"!=typeof this.actions[t]?(console.error("Action ".concat(t," doesnt exist")),!1):(console.groupCollapsed("ACTION: ".concat(t)),this.status="action",this.actions[t](this,n),console.groupEnd(),!0)},pn.prototype.commit=function(t,n){if("function"!=typeof this.mutations[t])return console.log("Mutation ".concat(t," doesnt exist")),!1;this.status="mutation";var e=this.mutations[t](this.state,n);return this.state=Object.assign(this.state,e),!0};var dn=new pn({actions:{},mutations:{},state:{user:{}}});r((function(t){var n=function(t){var n=Object.prototype,e=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,n,e,r){var o=n&&n.prototype instanceof l?n:l,i=Object.create(o.prototype),a=new x(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===u)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var l=s(t,n,e);if("normal"===l.type){if(r=e.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(r="completed",e.method="throw",e.arg=l.arg)}}}(t,e,a),i}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u={};function l(){}function f(){}function p(){}var d={};d[o]=function(){return this};var h=Object.getPrototypeOf,v=h&&h(h(E([])));v&&v!==n&&e.call(v,o)&&(d=v);var g=p.prototype=l.prototype=Object.create(d);function y(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function m(t){var n;this._invoke=function(r,o){function i(){return new Promise((function(n,i){!function n(r,o,i,a){var c=s(t[r],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&e.call(l,"__await")?Promise.resolve(l.__await).then((function(t){n("next",t,i,a)}),(function(t){n("throw",t,i,a)})):Promise.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,a)}))}a(c.arg)}(r,o,n,i)}))}return n=n?n.then(i,i):i()}}function _(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,_(t,n),"throw"===n.method))return u;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,u;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,u):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,u)}function w(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function b(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function E(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=g.constructor=p,p.constructor=f,p[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===f||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(m.prototype),m.prototype[i]=function(){return this},t.AsyncIterator=m,t.async=function(n,e,r,o){var i=new m(c(n,e,r,o));return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(g),g[a]="Generator",g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=E,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),u},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),b(e),u}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;b(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:E(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}));function hn(t,n,e,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void e(t)}c.done?n(s):Promise.resolve(s).then(r,o)}function vn(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function a(t){hn(i,r,o,a,c,"next",t)}function c(t){hn(i,r,o,a,c,"throw",t)}a(void 0)}))}}var gn,yn,mn={render:(yn=vn(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n            <div class="wrapper">\n                <div class="passport__block">\n                    <div class="passport__header mb-50">\n                        <p class="tag_p__header">ВАРБ паспорт</p>\n                        <p class="tag_p_about__header">Для использования сервиса необходимо авторизироваться</p>\n                    </div>\n                    \x3c!--<div class="passport__error mb-30">\n                        <p>Такого пользователя не существует</p>\n                    </div>--\x3e\n                    <div class="passport__body">\n                        <form action="">\n                            <div class="form_row mb-30">\n                                <label for="login">Имя пользователя</label>\n                                <input class="mt-8" id="login" name="login" type="text">\n                            </div>\n                            <div class="form_row mb-50">\n                                <label for="password">Пароль</label>\n                                <input class="mt-8" id="password" name="password" type="password">\n                            </div>\n                            <div class="form_row">\n                                <button class="btn login">\n                                    Войти\n                                    '.concat('\n    <svg class="'.concat("btn_icon",'" version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            width="32px" height="32px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">\n        <style type="text/css">\n            .st0{fill:none;}\n        </style>\n        <rect id="_Transparent_Rectangle_" class="st0" width="32" height="32"/>\n        <polygon points="18,6 16.6,7.4 24.1,15 3,15 3,17 24.1,17 16.6,24.6 18,26 28,16 "/>\n    </svg>'),'\n                                </button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class="background__color"></div>\n            <div class="background__image"></div>\n            <div class="image_info">\n                <p><span class="info__sign"></span> Фотография взята с сайта mil.by</p>\n            </div>\n        '));case 1:case"end":return t.stop()}}),t)}))),function(){return yn.apply(this,arguments)}),after:(gn=vn(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.querySelector(".login").addEventListener("click",(function(t){t.preventDefault(),console.log("Hello from button"),console.log("Store: ",$store.state.user)}));case 1:case"end":return t.stop()}}),t)}))),function(){return gn.apply(this,arguments)})},_n={render:function(){var t=vn(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n        <div class="dashboard__wrapper">\n            <div class="dash__header">\n                <div class="dash__header_left_side">\n                    <p class="white_p h_logo">\n                        <span class="light_p">ВАРБ</span> \n                        <span class="bold_p">информационная система</span>\n                    </p>\n                </div>\n                <div class="dash__header_right_side"></div>\n            </div>\n            <div class="dash__main">\n                <div class="dash__left-side">\n                    <ul class="dash_menu">\n                        <li class="dash_menu_item"><a class="pure_a nav_menu_link" href="#/">Главная</a></li>\n                        <li class="dash_menu_item"><a class="pure_a nav_menu_link" href="#/categories">Категории</a></li>\n                        <li class="dash_menu_item">Отделения</li>\n                        <li class="dash_menu_item">Страницы отделений</li>\n                        <li class="dash_menu_item">Документы</li>\n                        <li class="dash_menu_item">Учёт и регистрация УМКД</li>\n                        <li class="dash_menu_item">Новости</li>\n                        <li class="dash_menu_item">Анонсы</li>\n                        <li class="dash_menu_item">Пользователи</li>\n                        <li class="dash_menu_item">План-календарь</li>\n                        <li class="dash_menu_item">Настройки</li>\n                    </ul>\n                </div>\n                <div class="dash__content">\n                    \n                </div>\n            </div>\n            <div class="clearfix"></div>\n        </div>\n        <div class="dashboard__modal">\n            <div class="dash__modal_box">\n                \x3c!--Modal content placed here--\x3e\n            </div>\n        </div>');case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),after:function(){var t=vn(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},wn=function(t,n,e){var r=_(n);r in t?k.f(t,r,f(0,e)):t[r]=e},bn=Dt("isConcatSpreadable"),xn=Xt>=51||!a((function(){var t=[];return t[bn]=!1,t.concat()[0]!==t})),En=Qt("concat"),Sn=function(t){if(!m(t))return!1;var n=t[bn];return void 0!==n?!!n:Ct(t)};Tt({target:"Array",proto:!0,forced:!xn||!En},{concat:function(t){var n,e,r,o,i,a=It(this),c=Bt(a,0),s=0;for(n=-1,r=arguments.length;n<r;n++)if(i=-1===n?a:arguments[n],Sn(i)){if(s+(o=lt(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,s++)e in i&&wn(c,s,i[e])}else{if(s>=9007199254740991)throw TypeError("Maximum allowed index exceeded");wn(c,s++,i)}return c.length=s,c}});var On,jn,Rn=[].join,Ln=v!=Object,kn=(On=",",!!(jn=[]["join"])&&a((function(){jn.call(null,On||function(){throw 1},1)})));Tt({target:"Array",proto:!0,forced:Ln||!kn},{join:function(t){return Rn.call(y(this),void 0===t?",":t)}});var Pn=function(t,n,e){var r=t.map((function(t){return'<th class="data_table__th">'.concat(t,"</th>")})).join(""),o=n.map((function(t){return'\n        <tr>\n            <td class="data_table__td">'.concat(t[0],'</td>\n            <td class="data_table__td">').concat(t[1],'</td>\n            <td class="data_table__td">').concat(t[2],"</td>\n            <td>").concat('\n    <svg class="'.concat("btn__overflow_menu_v",'" id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n        <defs>\n            <style>.cls-1{fill:none;}</style>\n        </defs>\n        <title>overflow-menu--vertical</title>\n        <circle cx="16" cy="6" r="2"/>\n        <circle cx="16" cy="16" r="2"/>\n        <circle cx="16" cy="26" r="2"/>\n        <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/>\n    </svg>\n'),"</td>\n        </tr>\n    ")})).join("");return'\n    <div class="table__wrapper shadow">\n        <table class="data_table">\n            <thead class="data_table__header">\n                <tr>\n                    '.concat(r,"\n                </tr>\n            </thead>\n            <tbody>\n                ").concat(o,"\n            </tbody>\n        </table>\n    </div>\n    ")},Tn={"/":{toLoad:_n},"/login":{toLoad:mn,isProtected:!1},"/categories":{toLoad:{renderTo:"dash__content",render:function(){var t=vn(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=["Название","Ссылка","Количество отделений",""],e=[["Факультеты","faculties","11"],["Отделы и службы","departmentsAndServices","19"],["Кафедры","kafedri","40"],["Общественные организации","publicOrganizations","6"]],t.abrupt("return",'\n        <div class="dash__content_header">\n            <div class="dash__content_header_top">\n                <p class="pure white_p dash__content_header_p">Категории</p>\n            </div>\n            <div class="dash__content_header_bottom">\n            </div>\n        </div>\n        <div class="dash__content_body">\n            '.concat(Pn(n,e),"\n        </div>\n        "));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),after:function(){var t=vn(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}},"/404":{toLoad:{render:function(){var t=vn(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return","<p>Sorry, but this page is not available</p>");case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),after:function(){var t=vn(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}},An=Qt("slice"),In=en("slice",{ACCESSORS:!0,0:0,1:2}),Cn=Dt("species"),Nn=[].slice,Mn=Math.max;Tt({target:"Array",proto:!0,forced:!An||!In},{slice:function(t,n){var e,r,o,i=y(this),a=lt(i.length),c=dt(t,a),s=dt(void 0===n?a:n,a);if(Ct(i)&&("function"!=typeof(e=i.constructor)||e!==Array&&!Ct(e.prototype)?m(e)&&null===(e=e[Cn])&&(e=void 0):e=void 0,e===Array||void 0===e))return Nn.call(i,c,s);for(r=new(void 0===e?Array:e)(Mn(s-c,0)),o=0;c<s;c++,o++)c in i&&wn(r,o,i[c]);return r.length=o,r}});var Fn=function(){var t=R(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n};function Gn(t,n){return RegExp(t,n)}var Un,Dn,$n={UNSUPPORTED_Y:a((function(){var t=Gn("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:a((function(){var t=Gn("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},Bn=RegExp.prototype.exec,qn=String.prototype.replace,Yn=Bn,zn=(Un=/a/,Dn=/b*/g,Bn.call(Un,"a"),Bn.call(Dn,"a"),0!==Un.lastIndex||0!==Dn.lastIndex),Kn=$n.UNSUPPORTED_Y||$n.BROKEN_CARET,Hn=void 0!==/()??/.exec("")[1];(zn||Hn||Kn)&&(Yn=function(t){var n,e,r,o,i=this,a=Kn&&i.sticky,c=Fn.call(i),s=i.source,u=0,l=t;return a&&(-1===(c=c.replace("y","")).indexOf("g")&&(c+="g"),l=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(s="(?: "+s+")",l=" "+l,u++),e=new RegExp("^(?:"+s+")",c)),Hn&&(e=new RegExp("^"+s+"$(?!\\s)",c)),zn&&(n=i.lastIndex),r=Bn.call(a?e:i,l),a?r?(r.input=r.input.slice(u),r[0]=r[0].slice(u),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:zn&&r&&(i.lastIndex=i.global?r.index+r[0].length:n),Hn&&r&&r.length>1&&qn.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r});var Wn=Yn;Tt({target:"RegExp",proto:!0,forced:/./.exec!==Wn},{exec:Wn});var Vn=Dt("species"),Xn=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),Jn="$0"==="a".replace(/./,"$0"),Qn=Dt("replace"),Zn=!!/./[Qn]&&""===/./[Qn]("a","$0"),te=!a((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]})),ne=Dt("match"),ee=Dt("species"),re=function(t){return function(n,e){var r,o,i=String(g(n)),a=st(e),c=i.length;return a<0||a>=c?t?"":void 0:(r=i.charCodeAt(a))<55296||r>56319||a+1===c||(o=i.charCodeAt(a+1))<56320||o>57343?t?i.charAt(a):r:t?i.slice(a,a+2):o-56320+(r-55296<<10)+65536}},oe={codeAt:re(!1),charAt:re(!0)}.charAt,ie=function(t,n,e){return n+(e?oe(t,n).length:1)},ae=function(t,n){var e=t.exec;if("function"==typeof e){var r=e.call(t,n);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==d(t))throw TypeError("RegExp#exec called on incompatible receiver");return Wn.call(t,n)},ce=[].push,se=Math.min,ue=!a((function(){return!RegExp(4294967295,"y")}));!function(t,n,e,r){var o=Dt(t),i=!a((function(){var n={};return n[o]=function(){return 7},7!=""[t](n)})),c=i&&!a((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[Vn]=function(){return e},e.flags="",e[o]=/./[o]),e.exec=function(){return n=!0,null},e[o](""),!n}));if(!i||!c||"replace"===t&&(!Xn||!Jn||Zn)||"split"===t&&!te){var s=/./[o],u=e(o,""[t],(function(t,n,e,r,o){return n.exec===Wn?i&&!o?{done:!0,value:s.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:Jn,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Zn}),l=u[0],f=u[1];et(String.prototype,t,l),et(RegExp.prototype,o,2==n?function(t,n){return f.call(t,this,n)}:function(t){return f.call(t,this)})}r&&P(RegExp.prototype[o],"sham",!0)}("split",2,(function(t,n,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r,o,i=String(g(this)),a=void 0===e?4294967295:e>>>0;if(0===a)return[];if(void 0===t)return[i];if(!m(r=t)||(void 0!==(o=r[ne])?!o:"RegExp"!=d(r)))return n.call(i,t,a);for(var c,s,u,l=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,h=new RegExp(t.source,f+"g");(c=Wn.call(h,i))&&!((s=h.lastIndex)>p&&(l.push(i.slice(p,c.index)),c.length>1&&c.index<i.length&&ce.apply(l,c.slice(1)),u=c[0].length,p=s,l.length>=a));)h.lastIndex===c.index&&h.lastIndex++;return p===i.length?!u&&h.test("")||l.push(""):l.push(i.slice(p)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var o=g(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,e):r.call(String(o),n,e)},function(t,o){var i=e(r,t,this,o,r!==n);if(i.done)return i.value;var a=R(t),c=String(this),s=function(t,n){var e,r=R(t).constructor;return void 0===r||null==(e=R(r)[ee])?n:At(e)}(a,RegExp),u=a.unicode,l=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(ue?"y":"g"),f=new s(ue?a:"^(?:"+a.source+")",l),p=void 0===o?4294967295:o>>>0;if(0===p)return[];if(0===c.length)return null===ae(f,c)?[c]:[];for(var d=0,h=0,v=[];h<c.length;){f.lastIndex=ue?h:0;var g,y=ae(f,ue?c:c.slice(h));if(null===y||(g=se(lt(f.lastIndex+(ue?0:h)),c.length))===d)h=ie(c,h,u);else{if(v.push(c.slice(d,h)),v.length===p)return v;for(var m=1;m<=y.length-1;m++)if(v.push(y[m]),v.length===p)return v;h=d=g}}return v.push(c.slice(d)),v}]}),!ue);var le=function(){var t=(location.hash.slice(1)||"/").split("/");return{resource:t[1]||null,id:t[2]||null,verb:t[3]||null}},fe=function(){var t=vn(regeneratorRuntime.mark((function t(){var n,e,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=document.querySelector("#app"),e=le(),r=(e.resource?"/"+e.resource:"/")+(e.id?"/:id":"")+(e.verb?"/"+e.verb:""),!(o=Tn[r]?Tn[r].toLoad:Tn["/404"].toLoad).hasOwnProperty("renderTo")){t.next=10;break}return t.next=7,o.render();case 7:document.querySelector(".".concat(o.renderTo)).innerHTML=t.sent,t.next=13;break;case 10:return t.next=12,o.render();case 12:n.innerHTML=t.sent;case 13:return t.next=15,o.after();case 15:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();window.$store=dn,window.addEventListener("hashchange",fe),window.addEventListener("load",fe);
