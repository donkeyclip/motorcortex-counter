!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@donkeyclip/motorcortex")):"function"==typeof define&&define.amd?define(["@donkeyclip/motorcortex"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["@donkeyclip/motorcortex-counter"]=e(t.MotorCortex)}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=e(t);function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function c(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=i(t);if(e){var o=i(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l=function(t){return t&&t.Math==Math&&t},s=l("object"==typeof globalThis&&globalThis)||l("object"==typeof window&&window)||l("object"==typeof self&&self)||l("object"==typeof a&&a)||function(){return this}()||Function("return this")(),p={},y=function(t){try{return!!t()}catch(t){return!0}},b=!y((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),h=!y((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),v=h,g=Function.prototype.call,d=v?g.bind(g):function(){return g.apply(g,arguments)},m={},w={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor,j=O&&!w.call({1:2},1);m.f=j?function(t){var e=O(this,t);return!!e&&e.enumerable}:w;var S,P,E=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},x=h,T=Function.prototype,M=T.bind,k=T.call,_=x&&M.bind(k,k),R=x?function(t){return t&&_(t)}:function(t){return t&&function(){return k.apply(t,arguments)}},C=R,F=C({}.toString),I=C("".slice),L=function(t){return I(F(t),8,-1)},N=R,z=y,A=L,D=s.Object,V=N("".split),G=z((function(){return!D("z").propertyIsEnumerable(0)}))?function(t){return"String"==A(t)?V(t,""):D(t)}:D,B=s.TypeError,U=function(t){if(null==t)throw B("Can't call method on "+t);return t},W=G,q=U,H=function(t){return W(q(t))},K=function(t){return"function"==typeof t},X=K,Y=function(t){return"object"==typeof t?null!==t:X(t)},$=s,J=K,Q=function(t){return J(t)?t:void 0},Z=function(t,e){return arguments.length<2?Q($[t]):$[t]&&$[t][e]},tt=R({}.isPrototypeOf),et=s,rt=Z("navigator","userAgent")||"",nt=et.process,ot=et.Deno,it=nt&&nt.versions||ot&&ot.version,ut=it&&it.v8;ut&&(P=(S=ut.split("."))[0]>0&&S[0]<4?1:+(S[0]+S[1])),!P&&rt&&(!(S=rt.match(/Edge\/(\d+)/))||S[1]>=74)&&(S=rt.match(/Chrome\/(\d+)/))&&(P=+S[1]);var ct=P,ft=y,at=!!Object.getOwnPropertySymbols&&!ft((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&ct&&ct<41})),lt=at&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,st=Z,pt=K,yt=tt,bt=lt,ht=s.Object,vt=bt?function(t){return"symbol"==typeof t}:function(t){var e=st("Symbol");return pt(e)&&yt(e.prototype,ht(t))},gt=s.String,dt=K,mt=function(t){try{return gt(t)}catch(t){return"Object"}},wt=s.TypeError,Ot=function(t){if(dt(t))return t;throw wt(mt(t)+" is not a function")},jt=d,St=K,Pt=Y,Et=s.TypeError,xt={exports:{}},Tt=s,Mt=Object.defineProperty,kt=function(t,e){try{Mt(Tt,t,{value:e,configurable:!0,writable:!0})}catch(r){Tt[t]=e}return e},_t=kt,Rt="__core-js_shared__",Ct=s[Rt]||_t(Rt,{}),Ft=Ct;(xt.exports=function(t,e){return Ft[t]||(Ft[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var It=U,Lt=s.Object,Nt=function(t){return Lt(It(t))},zt=R({}.hasOwnProperty),At=Object.hasOwn||function(t,e){return zt(Nt(t),e)},Dt=R,Vt=0,Gt=Math.random(),Bt=Dt(1..toString),Ut=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Bt(++Vt+Gt,36)},Wt=s,qt=xt.exports,Ht=At,Kt=Ut,Xt=at,Yt=lt,$t=qt("wks"),Jt=Wt.Symbol,Qt=Jt&&Jt.for,Zt=Yt?Jt:Jt&&Jt.withoutSetter||Kt,te=function(t){if(!Ht($t,t)||!Xt&&"string"!=typeof $t[t]){var e="Symbol."+t;Xt&&Ht(Jt,t)?$t[t]=Jt[t]:$t[t]=Yt&&Qt?Qt(e):Zt(e)}return $t[t]},ee=d,re=Y,ne=vt,oe=function(t,e){var r=t[e];return null==r?void 0:Ot(r)},ie=function(t,e){var r,n;if("string"===e&&St(r=t.toString)&&!Pt(n=jt(r,t)))return n;if(St(r=t.valueOf)&&!Pt(n=jt(r,t)))return n;if("string"!==e&&St(r=t.toString)&&!Pt(n=jt(r,t)))return n;throw Et("Can't convert object to primitive value")},ue=te,ce=s.TypeError,fe=ue("toPrimitive"),ae=function(t,e){if(!re(t)||ne(t))return t;var r,n=oe(t,fe);if(n){if(void 0===e&&(e="default"),r=ee(n,t,e),!re(r)||ne(r))return r;throw ce("Can't convert object to primitive value")}return void 0===e&&(e="number"),ie(t,e)},le=vt,se=function(t){var e=ae(t,"string");return le(e)?e:e+""},pe=Y,ye=s.document,be=pe(ye)&&pe(ye.createElement),he=function(t){return be?ye.createElement(t):{}},ve=!b&&!y((function(){return 7!=Object.defineProperty(he("div"),"a",{get:function(){return 7}}).a})),ge=b,de=d,me=m,we=E,Oe=H,je=se,Se=At,Pe=ve,Ee=Object.getOwnPropertyDescriptor;p.f=ge?Ee:function(t,e){if(t=Oe(t),e=je(e),Pe)try{return Ee(t,e)}catch(t){}if(Se(t,e))return we(!de(me.f,t,e),t[e])};var xe={},Te=b&&y((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Me=s,ke=Y,_e=Me.String,Re=Me.TypeError,Ce=function(t){if(ke(t))return t;throw Re(_e(t)+" is not an object")},Fe=b,Ie=ve,Le=Te,Ne=Ce,ze=se,Ae=s.TypeError,De=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,Ge="enumerable",Be="configurable",Ue="writable";xe.f=Fe?Le?function(t,e,r){if(Ne(t),e=ze(e),Ne(r),"function"==typeof t&&"prototype"===e&&"value"in r&&Ue in r&&!r.writable){var n=Ve(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:Be in r?r.configurable:n.configurable,enumerable:Ge in r?r.enumerable:n.enumerable,writable:!1})}return De(t,e,r)}:De:function(t,e,r){if(Ne(t),e=ze(e),Ne(r),Ie)try{return De(t,e,r)}catch(t){}if("get"in r||"set"in r)throw Ae("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var We=xe,qe=E,He=b?function(t,e,r){return We.f(t,e,qe(1,r))}:function(t,e,r){return t[e]=r,t},Ke={exports:{}},Xe=K,Ye=Ct,$e=R(Function.toString);Xe(Ye.inspectSource)||(Ye.inspectSource=function(t){return $e(t)});var Je,Qe,Ze,tr=Ye.inspectSource,er=K,rr=tr,nr=s.WeakMap,or=er(nr)&&/native code/.test(rr(nr)),ir=xt.exports,ur=Ut,cr=ir("keys"),fr={},ar=or,lr=s,sr=R,pr=Y,yr=He,br=At,hr=Ct,vr=function(t){return cr[t]||(cr[t]=ur(t))},gr=fr,dr="Object already initialized",mr=lr.TypeError,wr=lr.WeakMap;if(ar||hr.state){var Or=hr.state||(hr.state=new wr),jr=sr(Or.get),Sr=sr(Or.has),Pr=sr(Or.set);Je=function(t,e){if(Sr(Or,t))throw new mr(dr);return e.facade=t,Pr(Or,t,e),e},Qe=function(t){return jr(Or,t)||{}},Ze=function(t){return Sr(Or,t)}}else{var Er=vr("state");gr[Er]=!0,Je=function(t,e){if(br(t,Er))throw new mr(dr);return e.facade=t,yr(t,Er,e),e},Qe=function(t){return br(t,Er)?t[Er]:{}},Ze=function(t){return br(t,Er)}}var xr={set:Je,get:Qe,has:Ze,enforce:function(t){return Ze(t)?Qe(t):Je(t,{})},getterFor:function(t){return function(e){var r;if(!pr(e)||(r=Qe(e)).type!==t)throw mr("Incompatible receiver, "+t+" required");return r}}},Tr=b,Mr=At,kr=Function.prototype,_r=Tr&&Object.getOwnPropertyDescriptor,Rr=Mr(kr,"name"),Cr=Rr&&"something"===function(){}.name,Fr=Rr&&(!Tr||Tr&&_r(kr,"name").configurable),Ir=s,Lr=K,Nr=At,zr=He,Ar=kt,Dr=tr,Vr={EXISTS:Rr,PROPER:Cr,CONFIGURABLE:Fr}.CONFIGURABLE,Gr=xr.get,Br=xr.enforce,Ur=String(String).split("String");(Ke.exports=function(t,e,r,n){var o,i=!!n&&!!n.unsafe,u=!!n&&!!n.enumerable,c=!!n&&!!n.noTargetGet,f=n&&void 0!==n.name?n.name:e;Lr(r)&&("Symbol("===String(f).slice(0,7)&&(f="["+String(f).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Nr(r,"name")||Vr&&r.name!==f)&&zr(r,"name",f),(o=Br(r)).source||(o.source=Ur.join("string"==typeof f?f:""))),t!==Ir?(i?!c&&t[e]&&(u=!0):delete t[e],u?t[e]=r:zr(t,e,r)):u?t[e]=r:Ar(e,r)})(Function.prototype,"toString",(function(){return Lr(this)&&Gr(this).source||Dr(this)}));var Wr={},qr=Math.ceil,Hr=Math.floor,Kr=function(t){var e=+t;return e!=e||0===e?0:(e>0?Hr:qr)(e)},Xr=Kr,Yr=Math.max,$r=Math.min,Jr=Kr,Qr=Math.min,Zr=function(t){return t>0?Qr(Jr(t),9007199254740991):0},tn=H,en=function(t,e){var r=Xr(t);return r<0?Yr(r+e,0):$r(r,e)},rn=function(t){return Zr(t.length)},nn=function(t){return function(e,r,n){var o,i=tn(e),u=rn(i),c=en(n,u);if(t&&r!=r){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},on={includes:nn(!0),indexOf:nn(!1)},un=At,cn=H,fn=on.indexOf,an=fr,ln=R([].push),sn=function(t,e){var r,n=cn(t),o=0,i=[];for(r in n)!un(an,r)&&un(n,r)&&ln(i,r);for(;e.length>o;)un(n,r=e[o++])&&(~fn(i,r)||ln(i,r));return i},pn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Wr.f=Object.getOwnPropertyNames||function(t){return sn(t,pn)};var yn={};yn.f=Object.getOwnPropertySymbols;var bn=Z,hn=Wr,vn=yn,gn=Ce,dn=R([].concat),mn=bn("Reflect","ownKeys")||function(t){var e=hn.f(gn(t)),r=vn.f;return r?dn(e,r(t)):e},wn=At,On=mn,jn=p,Sn=xe,Pn=y,En=K,xn=/#|\.prototype\./,Tn=function(t,e){var r=kn[Mn(t)];return r==Rn||r!=_n&&(En(e)?Pn(e):!!e)},Mn=Tn.normalize=function(t){return String(t).replace(xn,".").toLowerCase()},kn=Tn.data={},_n=Tn.NATIVE="N",Rn=Tn.POLYFILL="P",Cn=Tn,Fn=s,In=p.f,Ln=He,Nn=Ke.exports,zn=kt,An=function(t,e,r){for(var n=On(e),o=Sn.f,i=jn.f,u=0;u<n.length;u++){var c=n[u];wn(t,c)||r&&wn(r,c)||o(t,c,i(e,c))}},Dn=Cn,Vn=function(t,e){var r,n,o,i,u,c=t.target,f=t.global,a=t.stat;if(r=f?Fn:a?Fn[c]||zn(c,{}):(Fn[c]||{}).prototype)for(n in e){if(i=e[n],o=t.noTargetGet?(u=In(r,n))&&u.value:r[n],!Dn(f?n:c+(a?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;An(i,o)}(t.sham||o&&o.sham)&&Ln(i,"sham",!0),Nn(r,n,i,t)}},Gn=R(1..valueOf),Bn={};Bn[te("toStringTag")]="z";var Un=s,Wn="[object z]"===String(Bn),qn=K,Hn=L,Kn=te("toStringTag"),Xn=Un.Object,Yn="Arguments"==Hn(function(){return arguments}()),$n=Wn?Hn:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Xn(t),Kn))?r:Yn?Hn(e):"Object"==(n=Hn(e))&&qn(e.callee)?"Arguments":n},Jn=s.String,Qn=Kr,Zn=function(t){if("Symbol"===$n(t))throw TypeError("Cannot convert a Symbol value to a string");return Jn(t)},to=U,eo=s.RangeError,ro=Vn,no=s,oo=R,io=Kr,uo=Gn,co=function(t){var e=Zn(to(this)),r="",n=Qn(t);if(n<0||n==1/0)throw eo("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(r+=e);return r},fo=y,ao=no.RangeError,lo=no.String,so=Math.floor,po=oo(co),yo=oo("".slice),bo=oo(1..toFixed),ho=function(t,e,r){return 0===e?r:e%2==1?ho(t,e-1,r*t):ho(t*t,e/2,r)},vo=function(t,e,r){for(var n=-1,o=r;++n<6;)o+=e*t[n],t[n]=o%1e7,o=so(o/1e7)},go=function(t,e){for(var r=6,n=0;--r>=0;)n+=t[r],t[r]=so(n/e),n=n%e*1e7},mo=function(t){for(var e=6,r="";--e>=0;)if(""!==r||0===e||0!==t[e]){var n=lo(t[e]);r=""===r?n:r+po("0",7-n.length)+n}return r};ro({target:"Number",proto:!0,forced:fo((function(){return"0.000"!==bo(8e-5,3)||"1"!==bo(.9,0)||"1.25"!==bo(1.255,2)||"1000000000000000128"!==bo(0xde0b6b3a7640080,0)}))||!fo((function(){bo({})}))},{toFixed:function(t){var e,r,n,o,i=uo(this),u=io(t),c=[0,0,0,0,0,0],f="",a="0";if(u<0||u>20)throw ao("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return lo(i);if(i<0&&(f="-",i=-i),i>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(i*ho(2,69,1))-69)<0?i*ho(2,-e,1):i/ho(2,e,1),r*=4503599627370496,(e=52-e)>0){for(vo(c,0,r),n=u;n>=7;)vo(c,1e7,0),n-=7;for(vo(c,ho(10,n,1),0),n=e-1;n>=23;)go(c,1<<23),n-=23;go(c,1<<n),vo(c,1,1),go(c,2),a=mo(c)}else vo(c,0,r),vo(c,1<<-e,0),a=mo(c)+po("0",u);return a=u>0?f+((o=a.length)<=u?"0."+po("0",u-o)+a:yo(a,0,o-u)+"."+yo(a,o-u)):f+a}});var wo=Vn,Oo=Math.ceil,jo=Math.floor;wo({target:"Math",stat:!0},{trunc:function(t){return(t>0?jo:Oo)(t)}});var So=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(a,t);var e,r,i,c=f(a);function a(){return n(this,a),c.apply(this,arguments)}return e=a,(r=[{key:"getScratchValue",value:function(){return 0}},{key:"onGetContext",value:function(){this.element.innerHTML=this.initialValue}},{key:"onProgress",value:function(t){var e=this.initialValue+(this.targetValue-this.initialValue)*t;e=this.attrs.decimals?e.toFixed(this.attrs.decimals):Math.trunc(e),this.element.innerHTML=e}}])&&o(e.prototype,r),i&&o(e,i),Object.defineProperty(e,"prototype",{writable:!1}),a}(r.default.Effect);return{npm_name:"@donkeyclip/motorcortex-counter",version:"1.1.1",incidents:[{exportable:So,name:"Counter",attributesValidationRules:{animatedAttrs:{type:"object",props:{count:{type:"number"}}},decimals:{type:"number",optional:!0,min:0,max:20,integer:!0}}}]}}));