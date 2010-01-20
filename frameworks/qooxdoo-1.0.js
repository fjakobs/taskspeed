(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"."},"qx":{"resourceUri":".","sourceUri":".","version":"trunk"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"}};
qx.$$i18n    = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["bom:qooxdoo-1.0.js"]],
  urisBefore : [],
  packageHashes : {"0":"43f25a29009d"},
  boot : "boot",
  bootIsInline : true,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
}

qx.$$loader.signalStartup = function () {
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){return;});
  }
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash]);
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['43f25a29009d']={"resources":{}};
(function(){var l=".",k="()",j="[Class ",h=".prototype",g="toString",f="qx.Bootstrap",e="]",d="Class";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return j+this.classname+e;
},createNamespace:function(name,v){var x=name.split(l);
var parent=window;
var w=x[0];

for(var i=0,y=x.length-1;i<y;i++,w=x[i]){if(!parent[w]){parent=parent[w]={};
}else{parent=parent[w];
}}parent[w]=v;
return w;
},setDisplayName:function(t,u,name){t.displayName=u+l+name+k;
},setDisplayNames:function(a,b){for(var name in a){var c=a[name];

if(c instanceof Function){c.displayName=b+l+name+k;
}}},define:function(name,m){if(!m){var m={statics:{}};
}var r;
var p=null;
qx.Bootstrap.setDisplayNames(m.statics,name);

if(m.members){qx.Bootstrap.setDisplayNames(m.members,name+h);
r=m.construct||new Function;
var n=m.statics;

for(var o in n){r[o]=n[o];
}p=r.prototype;
var s=m.members;

for(var o in s){p[o]=s[o];
}}else{r=m.statics||{};
}var q=this.createNamespace(name,r);
r.name=r.classname=name;
r.basename=q;
r.$$type=d;
if(!r.hasOwnProperty(g)){r.toString=this.genericToString;
}if(m.defer){m.defer(r,p);
}qx.Bootstrap.$$registry[name]=m.statics;
return r;
}};
qx.Bootstrap.define(f,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return this.$$registry[name];
},$$registry:{}}});
})();
(function(){var o="qx.allowUrlSettings",n="&",m="qx.core.Setting",l="qx.allowUrlVariants",k="qx.propertyDebugLevel",j="qxsetting",h=":",g=".";
qx.Bootstrap.define(m,{statics:{__a:{},define:function(b,c){if(c===undefined){throw new Error('Default value of setting "'+b+'" must be defined!');
}
if(!this.__a[b]){this.__a[b]={};
}else if(this.__a[b].defaultValue!==undefined){throw new Error('Setting "'+b+'" is already defined!');
}this.__a[b].defaultValue=c;
},get:function(p){var q=this.__a[p];

if(q===undefined){throw new Error('Setting "'+p+'" is not defined.');
}
if(q.value!==undefined){return q.value;
}return q.defaultValue;
},set:function(e,f){if((e.split(g)).length<2){throw new Error('Malformed settings key "'+e+'". Must be following the schema "namespace.key".');
}
if(!this.__a[e]){this.__a[e]={};
}this.__a[e].value=f;
},__b:function(){if(window.qxsettings){for(var d in window.qxsettings){this.set(d,window.qxsettings[d]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(a){}this.__c();
}},__c:function(){if(this.get(o)!=true){return;
}var t=document.location.search.slice(1).split(n);

for(var i=0;i<t.length;i++){var s=t[i].split(h);

if(s.length!=3||s[0]!=j){continue;
}this.set(s[1],decodeURIComponent(s[2]));
}}},defer:function(r){r.define(o,false);
r.define(l,false);
r.define(k,0);
r.__b();
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__d:function(){var u=d;
var y=e;
var x=window.navigator.userAgent;
var A=false;
var w=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){u=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(x)){y=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){y+=q+RegExp.$3;
}}else{w=true;
y=i;
}}else if(window.navigator.userAgent.indexOf(j)!=-1){u=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(x)){y=RegExp.$1;
var z=RegExp(n).exec(y);

if(z){y=y.slice(0,z.index);
}}else{w=true;
y=m;
}}else if(window.controllers&&window.navigator.product===c){u=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(x)){y=RegExp.$1;
}else{w=true;
y=r;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(x)){u=k;
y=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(y<8&&/Trident\/([^\);]+)(\)|;)/.test(x)){if(RegExp.$1===g){y=h;
}}this.MSHTML=true;
}else{var v=window.qxFail;

if(v&&typeof v===o){var u=v();

if(u.NAME&&u.FULLVERSION){u=u.NAME;
this[u.toUpperCase()]=true;
y=u.FULLVERSION;
}}else{A=true;
w=true;
y=r;
u=s;
this.GECKO=true;
window.alert("Unsupported client: "+x+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=A;
this.UNKNOWN_VERSION=w;
this.NAME=u;
this.FULLVERSION=y;
this.VERSION=parseFloat(y);
}},defer:function(t){t.__d();
}});
})();
(function(){var u="on",t="off",s="|",r="default",q="object",p="&",o="qx.aspects",n="$",m="qx.allowUrlVariants",k="qx.debug",d="qx.client",j="qx.dynlocale",g="webkit",c="qxvariant",b="opera",f=":",e="qx.core.Variant",h="mshtml",a="gecko";
qx.Bootstrap.define(e,{statics:{__e:{},__f:{},compilerIsSet:function(){return true;
},define:function(E,F,G){{};

if(!this.__e[E]){this.__e[E]={};
}else{}this.__e[E].allowedValues=F;
this.__e[E].defaultValue=G;
},get:function(w){var x=this.__e[w];
{};

if(x.value!==undefined){return x.value;
}return x.defaultValue;
},__g:function(){if(window.qxvariants){for(var K in qxvariants){{};

if(!this.__e[K]){this.__e[K]={};
}this.__e[K].value=qxvariants[K];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(N){}this.__h(this.__e);
}},__h:function(){if(qx.core.Setting.get(m)!=true){return;
}var H=document.location.search.slice(1).split(p);

for(var i=0;i<H.length;i++){var I=H[i].split(f);

if(I.length!=3||I[0]!=c){continue;
}var J=I[1];

if(!this.__e[J]){this.__e[J]={};
}this.__e[J].value=decodeURIComponent(I[2]);
}},select:function(O,P){{};

for(var Q in P){if(this.isSet(O,Q)){return P[Q];
}}
if(P[r]!==undefined){return P[r];
}{};
},isSet:function(z,A){var B=z+n+A;

if(this.__f[B]!==undefined){return this.__f[B];
}var D=false;
if(A.indexOf(s)<0){D=this.get(z)===A;
}else{var C=A.split(s);

for(var i=0,l=C.length;i<l;i++){if(this.get(z)===C[i]){D=true;
break;
}}}this.__f[B]=D;
return D;
},__i:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__j:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__k:function(L,M){for(var i=0,l=L.length;i<l;i++){if(L[i]==M){return true;
}}return false;
}},defer:function(y){y.define(d,[a,h,b,g],qx.bom.client.Engine.NAME);
y.define(k,[u,t],u);
y.define(o,[u,t],t);
y.define(j,[u,t],u);
y.__g();
}});
})();
(function(){var u="qx.client",t="on",s="function",r="mousedown",q="qx.bom.Event",p="return;",o="mouseover",n="HTMLEvents";
qx.Bootstrap.define(q,{statics:{addNativeListener:qx.core.Variant.select(u,{"mshtml":function(v,w,x){v.attachEvent(t+w,x);
},"default":function(y,z,A){y.addEventListener(z,A,false);
}}),removeNativeListener:qx.core.Variant.select(u,{"mshtml":function(d,f,g){try{d.detachEvent(t+f,g);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(a,b,c){a.removeEventListener(b,c,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(u,{"mshtml":function(e){if(e.type===o){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(u,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==r&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(F){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(m){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(h,i){if(document.createEventObject){var j=document.createEventObject();
return h.fireEvent(t+i,j);
}else{var j=document.createEvent(n);
j.initEvent(i,true,true);
return !h.dispatchEvent(j);
}},supportsEvent:qx.core.Variant.select(u,{"webkit":function(k,l){return k.hasOwnProperty(t+l);
},"default":function(B,C){var D=t+C;
var E=(D in B);

if(!E){E=typeof B[D]==s;

if(!E&&B.setAttribute){B.setAttribute(D,p);
E=typeof B[D]==s;
B.removeAttribute(D);
}}return E;
}})}});
})();
(function(){var ce="|bubble",cd="|capture",cc="|",cb="_",ca="unload",bY="UNKNOWN_",bX="DOM_",bW="c",bV="__n",bU="WIN_",bR="capture",bT="qx.event.Manager",bS="__o",bQ="QX_";
qx.Bootstrap.define(bT,{construct:function(w,x){this.__l=w;
this.__eU=qx.core.ObjectRegistry.toHashCode(w);
this.__eV=x;
if(w.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(w,ca,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(w,ca,arguments.callee);
self.dispose();
}));
}this.__m={};
this.__n={};
this.__o={};
this.__p={};
},statics:{__q:0,getNextUniqueId:function(){return (this.__q++).toString(36);
}},members:{__eV:null,__m:null,__o:null,__r:null,__n:null,__p:null,__l:null,__eU:null,getWindow:function(){return this.__l;
},getWindowId:function(){return this.__eU;
},getHandler:function(br){var bs=this.__n[br.classname];

if(bs){return bs;
}return this.__n[br.classname]=new br(this);
},getDispatcher:function(cf){var cg=this.__o[cf.classname];

if(cg){return cg;
}return this.__o[cf.classname]=new cf(this,this.__eV);
},getListeners:function(ch,ci,cj){var ck=ch.$$hash||qx.core.ObjectRegistry.toHashCode(ch);
var cm=this.__m[ck];

if(!cm){return null;
}var cn=ci+(cj?cd:ce);
var cl=cm[cn];
return cl?cl.concat():null;
},serializeListeners:function(y){var F=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var H=this.__m[F];
var D=[];

if(H){var B,G,z,C,E;

for(var A in H){B=A.indexOf(cc);
G=A.substring(0,B);
z=A.charAt(B+1)==bW;
C=H[A];

for(var i=0,l=C.length;i<l;i++){E=C[i];
D.push({self:E.context,handler:E.handler,type:G,capture:z});
}}}return D;
},toggleAttachedEvents:function(bb,bc){var bh=bb.$$hash||qx.core.ObjectRegistry.toHashCode(bb);
var bj=this.__m[bh];

if(bj){var be,bi,bd,bf;

for(var bg in bj){be=bg.indexOf(cc);
bi=bg.substring(0,be);
bd=bg.charCodeAt(be+1)===99;
bf=bj[bg];

if(bc){this.__s(bb,bi,bd);
}else{this.__t(bb,bi,bd);
}}}},hasListener:function(a,b,c){{};
var d=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var f=this.__m[d];

if(!f){return false;
}var g=b+(c?cd:ce);
var e=f[g];
return e&&e.length>0;
},importListeners:function(n,o){{};
var u=n.$$hash||qx.core.ObjectRegistry.toHashCode(n);
var v=this.__m[u]={};
var r=qx.event.Manager;

for(var p in o){var s=o[p];
var t=s.type+(s.capture?cd:ce);
var q=v[t];

if(!q){q=v[t]=[];
this.__s(n,s.type,s.capture);
}q.push({handler:s.listener,context:s.self,unique:s.unique||(r.__q++).toString(36)});
}},addListener:function(P,Q,R,self,S){var W;
{};
var X=P.$$hash||qx.core.ObjectRegistry.toHashCode(P);
var ba=this.__m[X];

if(!ba){ba=this.__m[X]={};
}var V=Q+(S?cd:ce);
var U=ba[V];

if(!U){U=ba[V]=[];
}if(U.length===0){this.__s(P,Q,S);
}var Y=(qx.event.Manager.__q++).toString(36);
var T={handler:R,context:self,unique:Y};
U.push(T);
return V+cc+Y;
},findHandler:function(bD,bE){var bO=false,bH=false,bP=false;
var bN;

if(bD.nodeType===1){bO=true;
bN=bX+bD.tagName.toLowerCase()+cb+bE;
}else if(bD==this.__l){bH=true;
bN=bU+bE;
}else if(bD.classname){bP=true;
bN=bQ+bD.classname+cb+bE;
}else{bN=bY+bD+cb+bE;
}var bJ=this.__p;

if(bJ[bN]){return bJ[bN];
}var bM=this.__eV.getHandlers();
var bI=qx.event.IEventHandler;
var bK,bL,bG,bF;

for(var i=0,l=bM.length;i<l;i++){bK=bM[i];
bG=bK.SUPPORTED_TYPES;

if(bG&&!bG[bE]){continue;
}bF=bK.TARGET_CHECK;

if(bF){if(!bO&&bF===bI.TARGET_DOMNODE){continue;
}else if(!bH&&bF===bI.TARGET_WINDOW){continue;
}else if(!bP&&bF===bI.TARGET_OBJECT){continue;
}}bL=this.getHandler(bM[i]);

if(bK.IGNORE_CAN_HANDLE||bL.canHandleEvent(bD,bE)){bJ[bN]=bL;
return bL;
}}return null;
},__s:function(h,j,k){var m=this.findHandler(h,j);

if(m){m.registerEvent(h,j,k);
return;
}{};
},removeListener:function(bt,bu,bv,self,bw){var bA;
{};
var bB=bt.$$hash||qx.core.ObjectRegistry.toHashCode(bt);
var bC=this.__m[bB];

if(!bC){return false;
}var bx=bu+(bw?cd:ce);
var by=bC[bx];

if(!by){return false;
}var bz;

for(var i=0,l=by.length;i<l;i++){bz=by[i];

if(bz.handler===bv&&bz.context===self){qx.lang.Array.removeAt(by,i);

if(by.length==0){this.__t(bt,bu,bw);
}return true;
}}return false;
},removeListenerById:function(cs,ct){var cz;
{};
var cx=ct.split(cc);
var cC=cx[0];
var cu=cx[1].charCodeAt(0)==99;
var cB=cx[2];
var cA=cs.$$hash||qx.core.ObjectRegistry.toHashCode(cs);
var cD=this.__m[cA];

if(!cD){return false;
}var cy=cC+(cu?cd:ce);
var cw=cD[cy];

if(!cw){return false;
}var cv;

for(var i=0,l=cw.length;i<l;i++){cv=cw[i];

if(cv.unique===cB){qx.lang.Array.removeAt(cw,i);

if(cw.length==0){this.__t(cs,cC,cu);
}return true;
}}return false;
},removeAllListeners:function(bk){var bo=bk.$$hash||qx.core.ObjectRegistry.toHashCode(bk);
var bq=this.__m[bo];

if(!bq){return false;
}var bm,bp,bl;

for(var bn in bq){if(bq[bn].length>0){bm=bn.split(cc);
bp=bm[0];
bl=bm[1]===bR;
this.__t(bk,bp,bl);
}}delete this.__m[bo];
return true;
},__t:function(co,cp,cq){var cr=this.findHandler(co,cp);

if(cr){cr.unregisterEvent(co,cp,cq);
return;
}{};
},dispatchEvent:function(I,event){var N;
{};
var O=event.getType();

if(!event.getBubbles()&&!this.hasListener(I,O)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(I);
}var M=this.__eV.getDispatchers();
var L;
var K=false;

for(var i=0,l=M.length;i<l;i++){L=this.getDispatcher(M[i]);
if(L.canDispatchEvent(I,event,O)){L.dispatchEvent(I,event,O);
K=true;
break;
}}
if(!K){qx.log.Logger.error(this,"No dispatcher can handle event of type "+O+" on "+I);
return true;
}var J=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !J;
},dispose:function(){this.__eV.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,bV);
qx.util.DisposeUtil.disposeMap(this,bS);
this.__m=this.__l=this.__r=null;
this.__eV=this.__p=null;
}}});
})();
(function(){var n="qx.dom.Node",m="qx.client",l="";
qx.Bootstrap.define(n,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(f){return f.nodeType===
this.DOCUMENT?f:
f.ownerDocument||f.document;
},getWindow:qx.core.Variant.select(m,{"mshtml":function(g){if(g.nodeType==null){return g;
}if(g.nodeType!==this.DOCUMENT){g=g.ownerDocument;
}return g.parentWindow;
},"default":function(k){if(k.nodeType==null){return k;
}if(k.nodeType!==this.DOCUMENT){k=k.ownerDocument;
}return k.defaultView;
}}),getDocumentElement:function(e){return this.getDocument(e).documentElement;
},getBodyElement:function(o){return this.getDocument(o).body;
},isNode:function(b){return !!(b&&b.nodeType!=null);
},isElement:function(d){return !!(d&&d.nodeType===this.ELEMENT);
},isDocument:function(s){return !!(s&&s.nodeType===this.DOCUMENT);
},isText:function(c){return !!(c&&c.nodeType===this.TEXT);
},isWindow:function(t){return !!(t&&t.history&&t.location&&t.document);
},isNodeName:function(h,j){if(!j||!h||!h.nodeName){return false;
}return j.toLowerCase()==qx.dom.Node.getName(h);
},getName:function(p){if(!p||!p.nodeName){return null;
}return p.nodeName.toLowerCase();
},getText:function(q){if(!q||!q.nodeType){return null;
}
switch(q.nodeType){case 1:var i,a=[],r=q.childNodes,length=r.length;

for(i=0;i<length;i++){a[i]=this.getText(r[i]);
}return a.join(l);
case 2:return q.nodeValue;
break;
case 3:return q.nodeValue;
break;
}return null;
}}});
})();
(function(){var W="mshtml",V="qx.client",U="[object Array]",T="qx.lang.Array",S="qx",R="number",Q="string";
qx.Bootstrap.define(T,{statics:{toArray:function(d,e){return this.cast(d,Array,e);
},cast:function(K,L,M){if(K.constructor===L){return K;
}
if(qx.Class.hasInterface(K,qx.data.IListData)){var K=K.toArray();
}var N=new L;
if(qx.core.Variant.isSet(V,W)){if(K.item){for(var i=M||0,l=K.length;i<l;i++){N.push(K[i]);
}return N;
}}if(Object.prototype.toString.call(K)===U&&M==null){N.push.apply(N,K);
}else{N.push.apply(N,Array.prototype.slice.call(K,M||0));
}return N;
},fromArguments:function(I,J){return Array.prototype.slice.call(I,J||0);
},fromCollection:function(bg){if(qx.core.Variant.isSet(V,W)){if(bg.item){var bh=[];

for(var i=0,l=bg.length;i<l;i++){bh[i]=bg[i];
}return bh;
}}return Array.prototype.slice.call(bg,0);
},fromShortHand:function(a){var c=a.length;
var b=qx.lang.Array.clone(a);
switch(c){case 1:b[1]=b[2]=b[3]=b[0];
break;
case 2:b[2]=b[0];
case 3:b[3]=b[1];
}return b;
},clone:function(f){return f.concat();
},insertAt:function(A,B,i){A.splice(i,0,B);
return A;
},insertBefore:function(v,w,x){var i=v.indexOf(x);

if(i==-1){v.push(w);
}else{v.splice(i,0,w);
}return v;
},insertAfter:function(bd,be,bf){var i=bd.indexOf(bf);

if(i==-1||i==(bd.length-1)){bd.push(be);
}else{bd.splice(i+1,0,be);
}return bd;
},removeAt:function(bc,i){return bc.splice(i,1)[0];
},removeAll:function(bn){bn.length=0;
return this;
},append:function(bp,bq){{};
Array.prototype.push.apply(bp,bq);
return bp;
},exclude:function(X,Y){{};

for(var i=0,bb=Y.length,ba;i<bb;i++){ba=X.indexOf(Y[i]);

if(ba!=-1){X.splice(ba,1);
}}return X;
},remove:function(y,z){var i=y.indexOf(z);

if(i!=-1){y.splice(i,1);
return z;
}},contains:function(bl,bm){return bl.indexOf(bm)!==-1;
},equals:function(bj,bk){var length=bj.length;

if(length!==bk.length){return false;
}
for(var i=0;i<length;i++){if(bj[i]!==bk[i]){return false;
}}return true;
},sum:function(O){var P=0;

for(var i=0,l=O.length;i<l;i++){P+=O[i];
}return P;
},max:function(F){{};
var i,H=F.length,G=F[0];

for(i=1;i<H;i++){if(F[i]>G){G=F[i];
}}return G===undefined?null:G;
},min:function(C){{};
var i,E=C.length,D=C[0];

for(i=1;i<E;i++){if(C[i]<D){D=C[i];
}}return D===undefined?null:D;
},unique:function(g){var s=[],j={},n={},p={};
var o,h=0;
var t=S+qx.lang.Date.now();
var k=false,r=false,u=false;
for(var i=0,q=g.length;i<q;i++){o=g[i];
if(o===null){if(!k){k=true;
s.push(o);
}}else if(o===undefined){}else if(o===false){if(!r){r=true;
s.push(o);
}}else if(o===true){if(!u){u=true;
s.push(o);
}}else if(typeof o===Q){if(!j[o]){j[o]=1;
s.push(o);
}}else if(typeof o===R){if(!n[o]){n[o]=1;
s.push(o);
}}else{m=o[t];

if(m==null){m=o[t]=h++;
}
if(!p[m]){p[m]=o;
s.push(o);
}}}for(var m in p){try{delete p[m][t];
}catch(bi){try{p[m][t]=null;
}catch(bo){throw new Error("Cannot clean-up map entry doneObjects["+m+"]["+t+"]");
}}}return s;
}}});
})();
(function(){var s="()",r=".",q=".prototype.",p='anonymous()',o="qx.lang.Function",n=".constructor()";
qx.Bootstrap.define(o,{statics:{getCaller:function(m){return m.caller?m.caller.callee:m.callee.caller;
},getName:function(a){if(a.displayName){return a.displayName;
}
if(a.$$original||a.wrapper||a.classname){return a.classname+n;
}
if(a.$$mixin){for(var c in a.$$mixin.$$members){if(a.$$mixin.$$members[c]==a){return a.$$mixin.name+q+c+s;
}}for(var c in a.$$mixin){if(a.$$mixin[c]==a){return a.$$mixin.name+r+c+s;
}}}
if(a.self){var d=a.self.constructor;

if(d){for(var c in d.prototype){if(d.prototype[c]==a){return d.classname+q+c+s;
}}for(var c in d){if(d[c]==a){return d.classname+r+c+s;
}}}}var b=a.toString().match(/function\s*(\w*)\s*\(.*/);

if(b&&b.length>=1&&b[1]){return b[1]+s;
}return p;
},globalEval:function(E){if(window.execScript){return window.execScript(E);
}else{return eval.call(window,E);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(t,u){{};
if(!u){return t;
}if(!(u.self||u.args||u.delay!=null||u.periodical!=null||u.attempt)){return t;
}return function(event){{};
var z=qx.lang.Array.fromArguments(arguments);
if(u.args){z=u.args.concat(z);
}
if(u.delay||u.periodical){var y=qx.event.GlobalError.observeMethod(function(){return t.apply(u.self||this,z);
});

if(u.delay){return window.setTimeout(y,u.delay);
}
if(u.periodical){return window.setInterval(y,u.periodical);
}}else if(u.attempt){var A=false;

try{A=t.apply(u.self||this,z);
}catch(j){}return A;
}else{return t.apply(u.self||this,z);
}};
},bind:function(e,self,f){return this.create(e,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(G,H){return this.create(G,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(g,self,h){if(arguments.length<3){return function(event){return g.call(self||this,event||window.event);
};
}else{var i=qx.lang.Array.fromArguments(arguments,2);
return function(event){var F=[event||window.event];
F.push.apply(F,i);
g.apply(self||this,F);
};
}},attempt:function(k,self,l){return this.create(k,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(v,w,self,x){return this.create(v,{delay:w,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(B,C,self,D){return this.create(B,{periodical:C,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var w="qx.event.Registration";
qx.Bootstrap.define(w,{statics:{__K:{},getManager:function(J){if(J==null){{};
J=window;
}else if(J.nodeType){J=qx.dom.Node.getWindow(J);
}else if(!qx.dom.Node.isWindow(J)){J=window;
}var L=J.$$hash||qx.core.ObjectRegistry.toHashCode(J);
var K=this.__K[L];

if(!K){K=new qx.event.Manager(J,this);
this.__K[L]=K;
}return K;
},removeManager:function(i){var j=i.getWindowId();
delete this.__K[j];
},addListener:function(e,f,g,self,h){return this.getManager(e).addListener(e,f,g,self,h);
},removeListener:function(y,z,A,self,B){return this.getManager(y).removeListener(y,z,A,self,B);
},removeListenerById:function(c,d){return this.getManager(c).removeListenerById(c,d);
},removeAllListeners:function(I){return this.getManager(I).removeAllListeners(I);
},hasListener:function(t,u,v){return this.getManager(t).hasListener(t,u,v);
},serializeListeners:function(x){return this.getManager(x).serializeListeners(x);
},createEvent:function(N,O,P){{};
if(O==null){O=qx.event.type.Event;
}var Q=qx.event.Pool.getInstance().getObject(O);

if(!Q){return;
}P?Q.init.apply(Q,P):Q.init();
if(N){Q.setType(N);
}return Q;
},dispatchEvent:function(M,event){return this.getManager(M).dispatchEvent(M,event);
},fireEvent:function(C,D,E,F){var G;
{};
var H=this.createEvent(D,E||null,F);
return this.getManager(C).dispatchEvent(C,H);
},fireNonBubblingEvent:function(k,l,m,n){{};
var o=this.getManager(k);

if(!o.hasListener(k,l,false)){return true;
}var p=this.createEvent(l,m||null,n);
return o.dispatchEvent(k,p);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__L:[],addHandler:function(s){{};
this.__L.push(s);
this.__L.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__L;
},__M:[],addDispatcher:function(q,r){{};
this.__M.push(q);
this.__M.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__M;
}}});
})();
(function(){var y="qx.client",x='"',w="valueOf",v="toLocaleString",u="isPrototypeOf",t="",s="toString",r="qx.lang.Object",q='\", "',p="hasOwnProperty";
qx.Bootstrap.define(r,{statics:{empty:function(z){{};

for(var A in z){if(z.hasOwnProperty(A)){delete z[A];
}}},isEmpty:qx.core.Variant.select(y,{"gecko":function(K){{};
return K.__count__===0;
},"default":function(n){{};

for(var o in n){return false;
}return true;
}}),hasMinLength:qx.core.Variant.select(y,{"gecko":function(g,h){{};
return g.__count__>=h;
},"default":function(d,e){{};

if(e<=0){return true;
}var length=0;

for(var f in d){if((++length)>=e){return true;
}}return false;
}}),getLength:qx.core.Variant.select(y,{"gecko":function(Q){{};
return Q.__count__;
},"default":function(B){{};
var length=0;

for(var C in B){length++;
}return length;
}}),_shadowedKeys:[u,p,v,s,w],getKeys:qx.core.Variant.select(y,{"mshtml":function(G){var H=[];

for(var J in G){H.push(J);
}var I=Object.prototype.hasOwnProperty;

for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(I.call(G,a[i])){H.push(a[i]);
}}return H;
},"default":function(R){var S=[];

for(var T in R){S.push(T);
}return S;
}}),getKeysAsString:function(Y){{};
var ba=qx.lang.Object.getKeys(Y);

if(ba.length==0){return t;
}return x+ba.join(q)+x;
},getValues:function(L){{};
var N=[];
var M=this.getKeys(L);

for(var i=0,l=M.length;i<l;i++){N.push(L[M[i]]);
}return N;
},mergeWith:function(bh,bi,bj){{};

if(bj===undefined){bj=true;
}
for(var bk in bi){if(bj||bh[bk]===undefined){bh[bk]=bi[bk];
}}return bh;
},carefullyMergeWith:function(b,c){{};
return qx.lang.Object.mergeWith(b,c,false);
},merge:function(bb,bc){{};
var bd=arguments.length;

for(var i=1;i<bd;i++){qx.lang.Object.mergeWith(bb,arguments[i]);
}return bb;
},clone:function(j){{};
var k={};

for(var m in j){k[m]=j[m];
}return k;
},invert:function(be){{};
var bf={};

for(var bg in be){bf[be[bg].toString()]=bg;
}return bf;
},getKeyFromValue:function(D,E){{};

for(var F in D){if(D.hasOwnProperty(F)&&D[F]===E){return F;
}}return null;
},contains:function(W,X){{};
return this.getKeyFromValue(W,X)!==null;
},select:function(U,V){{};
return V[U];
},fromArray:function(O){{};
var P={};

for(var i=0,l=O.length;i<l;i++){{};
P[O[i].toString()]=true;
}return P;
}}});
})();
(function(){var k="Function",j="Boolean",i="Error",h="Number",g="Array",f="Date",e="RegExp",d="String",c="Object",b="qx.lang.Type",a="string";
qx.Bootstrap.define(b,{statics:{__u:{"[object String]":d,"[object Array]":g,"[object Object]":c,"[object RegExp]":e,"[object Number]":h,"[object Boolean]":j,"[object Date]":f,"[object Function]":k,"[object Error]":i},getClass:function(r){var s=Object.prototype.toString.call(r);
return (this.__u[s]||s.slice(8,-1));
},isString:function(o){return (o!==null&&(typeof o===a||this.getClass(o)==d||o instanceof String||(!!o&&!!o.$$isString)));
},isArray:function(p){return (p!==null&&(p instanceof Array||(p&&qx.Class.hasInterface(p.constructor,qx.data.IListData))||this.getClass(p)==g||(!!p&&!!p.$$isArray)));
},isObject:function(m){return (m!==undefined&&m!==null&&this.getClass(m)==c);
},isRegExp:function(t){return this.getClass(t)==e;
},isNumber:function(q){return (q!==null&&(this.getClass(q)==h||q instanceof Number));
},isBoolean:function(v){return (v!==null&&(this.getClass(v)==j||v instanceof Boolean));
},isDate:function(n){return (n!==null&&(this.getClass(n)==f||n instanceof Date));
},isError:function(u){return (u!==null&&(this.getClass(u)==i||u instanceof Error));
},isFunction:function(l){return this.getClass(l)==k;
}}});
})();
(function(){var bs="[Class ",br="]",bq="toString",bp="constructor",bo="extend",bn="Class",bm="destruct",bl="qx.Class",bk="static";
qx.Bootstrap.define(bl,{statics:{define:function(name,bw){if(!bw){var bw={};
}if(bw.include&&!(bw.include instanceof Array)){bw.include=[bw.include];
}if(bw.implement&&!(bw.implement instanceof Array)){bw.implement=[bw.implement];
}if(!bw.hasOwnProperty(bo)&&!bw.type){bw.type=bk;
}{};
var by=this.__z(name,bw.type,bw.extend,bw.statics,bw.construct,bw.destruct);
if(bw.extend){if(bw.properties){this.__B(by,bw.properties,true);
}if(bw.members){this.__D(by,bw.members,true,true,false);
}if(bw.events){this.__A(by,bw.events,true);
}if(bw.include){for(var i=0,l=bw.include.length;i<l;i++){this.__G(by,bw.include[i],false);
}}}if(bw.settings){for(var bx in bw.settings){qx.core.Setting.define(bx,bw.settings[bx]);
}}if(bw.variants){for(var bx in bw.variants){qx.core.Variant.define(bx,bw.variants[bx].allowedValues,bw.variants[bx].defaultValue);
}}if(bw.implement){for(var i=0,l=bw.implement.length;i<l;i++){this.__F(by,bw.implement[i]);
}}{};
if(bw.defer){bw.defer.self=by;
bw.defer(by,by.prototype,{add:function(name,bH){var bI={};
bI[name]=bH;
qx.Class.__B(by,bI,true);
}});
}return by;
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(bi,bj){{};
qx.Class.__G(bi,bj,false);
},patch:function(cb,cc){{};
qx.Class.__G(cb,cc,true);
},isSubClassOf:function(s,t){if(!s){return false;
}
if(s==t){return true;
}
if(s.prototype instanceof t){return true;
}return false;
},getPropertyDefinition:function(b,name){while(b){if(b.$$properties&&b.$$properties[name]){return b.$$properties[name];
}b=b.superclass;
}return null;
},getProperties:function(I){var J=[];

while(I){if(I.$$properties){J.push.apply(J,qx.lang.Object.getKeys(I.$$properties));
}I=I.superclass;
}return J;
},getByProperty:function(u,name){while(u){if(u.$$properties&&u.$$properties[name]){return u;
}u=u.superclass;
}return null;
},hasProperty:function(O,name){return !!this.getPropertyDefinition(O,name);
},getEventType:function(N,name){var N=N.constructor;

while(N.superclass){if(N.$$events&&N.$$events[name]!==undefined){return N.$$events[name];
}N=N.superclass;
}return null;
},supportsEvent:function(bh,name){return !!this.getEventType(bh,name);
},hasOwnMixin:function(bA,bB){return bA.$$includes&&bA.$$includes.indexOf(bB)!==-1;
},getByMixin:function(bX,bY){var ca,i,l;

while(bX){if(bX.$$includes){ca=bX.$$flatIncludes;

for(i=0,l=ca.length;i<l;i++){if(ca[i]===bY){return bX;
}}}bX=bX.superclass;
}return null;
},getMixins:function(bu){var bv=[];

while(bu){if(bu.$$includes){bv.push.apply(bv,bu.$$flatIncludes);
}bu=bu.superclass;
}return bv;
},hasMixin:function(P,Q){return !!this.getByMixin(P,Q);
},hasOwnInterface:function(bf,bg){return bf.$$implements&&bf.$$implements.indexOf(bg)!==-1;
},getByInterface:function(K,L){var M,i,l;

while(K){if(K.$$implements){M=K.$$flatImplements;

for(i=0,l=M.length;i<l;i++){if(M[i]===L){return K;
}}}K=K.superclass;
}return null;
},getInterfaces:function(q){var r=[];

while(q){if(q.$$implements){r.push.apply(r,q.$$flatImplements);
}q=q.superclass;
}return r;
},hasInterface:function(k,m){return !!this.getByInterface(k,m);
},implementsInterface:function(x,y){var z=x.constructor;

if(this.hasInterface(z,y)){return true;
}
try{qx.Interface.assertObject(x,y);
return true;
}catch(bz){}
try{qx.Interface.assert(z,y,false);
return true;
}catch(bG){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bs+this.classname+br;
},$$registry:qx.Bootstrap.$$registry,__v:null,__w:null,__x:function(){},__y:function(){},__z:function(name,bJ,bK,bL,bM,bN){var bS;

if(!bK&&true){bS=bL||{};
qx.Bootstrap.setDisplayNames(bS,name);
}else{bS={};

if(bK){if(!bM){bM=this.__H();
}bS=this.__J(bM,name,bJ);
qx.Bootstrap.setDisplayName(bM,name,bp);
}if(bL){qx.Bootstrap.setDisplayNames(bL,name);
var bT;

for(var i=0,a=qx.lang.Object.getKeys(bL),l=a.length;i<l;i++){bT=a[i];
var bP=bL[bT];
{bS[bT]=bP;
};
}}}var bR=qx.Bootstrap.createNamespace(name,bS,false);
bS.name=bS.classname=name;
bS.basename=bR;
bS.$$type=bn;

if(bJ){bS.$$classtype=bJ;
}if(!bS.hasOwnProperty(bq)){bS.toString=this.genericToString;
}
if(bK){var bU=bK.prototype;
var bO=this.__I();
bO.prototype=bU;
var bQ=new bO;
bS.prototype=bQ;
bQ.name=bQ.classname=name;
bQ.basename=bR;
bM.base=bS.superclass=bK;
bM.self=bS.constructor=bQ.constructor=bS;
if(bN){{};
bS.$$destructor=bN;
qx.Bootstrap.setDisplayName(bN,name,bm);
}}this.$$registry[name]=bS;
return bS;
},__A:function(f,g,h){var j,j;
{};

if(f.$$events){for(var j in g){f.$$events[j]=g[j];
}}else{f.$$events=g;
}},__B:function(ba,bb,bc){var be;

if(bc===undefined){bc=false;
}var bd=!!ba.$$propertiesAttached;

for(var name in bb){be=bb[name];
{};
be.name=name;
if(!be.refine){if(ba.$$properties===undefined){ba.$$properties={};
}ba.$$properties[name]=be;
}if(be.init!==undefined){ba.prototype["$$init_"+name]=be.init;
}if(be.event!==undefined){var event={};
event[be.event]="qx.event.type.Data";
this.__A(ba,event,bc);
}if(be.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(bd){qx.core.Property.attachMethods(ba,name,be);
}}},__C:null,__D:function(R,S,T,U,V){var W=R.prototype;
var Y,X;
qx.Bootstrap.setDisplayNames(S,R.classname+".prototype");

for(var i=0,a=qx.lang.Object.getKeys(S),l=a.length;i<l;i++){Y=a[i];
X=S[Y];
{};
if(U!==false&&X instanceof Function&&X.$$type==null){if(V==true){X=this.__E(X,W[Y]);
}else{if(W[Y]){X.base=W[Y];
}X.self=R;
}{};
}W[Y]=X;
}},__E:function(v,w){if(w){return function(){var bW=v.base;
v.base=w;
var bV=v.apply(this,arguments);
v.base=bW;
return bV;
};
}else{return v;
}},__F:function(n,o){{};
var p=qx.Interface.flatten([o]);

if(n.$$implements){n.$$implements.push(o);
n.$$flatImplements.push.apply(n.$$flatImplements,p);
}else{n.$$implements=[o];
n.$$flatImplements=p;
}},__G:function(D,E,F){{};

if(this.hasMixin(D,E)){return;
}var H=qx.Mixin.flatten([E]);
var G;

for(var i=0,l=H.length;i<l;i++){G=H[i];
if(G.$$events){this.__A(D,G.$$events,F);
}if(G.$$properties){this.__B(D,G.$$properties,F);
}if(G.$$members){this.__D(D,G.$$members,F,F,F);
}}if(D.$$includes){D.$$includes.push(E);
D.$$flatIncludes.push.apply(D.$$flatIncludes,H);
}else{D.$$includes=[E];
D.$$flatIncludes=H;
}},__H:function(){function bt(){arguments.callee.base.apply(this,arguments);
}return bt;
},__I:function(){return function(){};
},__J:function(bC,name,bD){var bE;
var bF=function(){var C=arguments.callee.constructor;
{};
if(!C.$$propertiesAttached){qx.core.Property.attach(C);
}var B=C.$$original.apply(this,arguments);
if(C.$$includes){var A=C.$$flatIncludes;

for(var i=0,l=A.length;i<l;i++){if(A[i].$$constructor){A[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return B;
};
{};
if(bD==="singleton"){bF.getInstance=this.getInstance;
}bF.$$original=bC;
bC.wrapper=bF;
return bF;
}},defer:function(c){var d,c,e;
{};
}});
})();
(function(){var cz=';',cy='computed=this.',cx='=value;',cw='this.',cv='if(this.',cu='!==undefined)',ct='delete this.',cs="set",cr="setThemed",cq='}',cf="init",ce="setRuntime",cd='else if(this.',cc='return this.',cb="string",ca="boolean",bY="resetThemed",bX='!==undefined){',bW='=true;',bV="resetRuntime",cG="reset",cH="refresh",cE='old=this.',cF='else ',cC='if(old===undefined)old=this.',cD='old=computed=this.',cA=' of an instance of ',cB=";",cI='if(old===computed)return value;',cJ='if(old===undefined)old=null;',cj='(value);',ci=' is not (yet) ready!");',cl='===value)return value;',ck='return init;',cn='var init=this.',cm="Error in property ",cp='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',co='.validate.call(this, value);',ch='else{',cg=" in method ",bi='=computed;',bj='(backup);',bk='if(computed===inherit){',bl="inherit",bm='if(value===undefined)prop.error(this,2,"',bn='if(a[i].',bo='else if(computed===undefined)',bp="': ",bq=" of class ",br='===undefined)return;',cN="')){",cM='else this.',cL='value=this.',cK='","',cR='if(init==qx.core.Property.$$inherit)init=null;',cQ='var inherit=prop.$$inherit;',cP='var computed, old;',cO='computed=undefined;delete this.',cT='",value);',cS='computed=value;',bG=';}',bH='){',bE='if(computed===undefined||computed===inherit){',bF='!==inherit){',bK='(computed, old, "',bL='return value;',bI='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bJ="if(reg.hasListener(this, '",bC=')a[i].',bD='.$$properties.',bz="var reg=qx.event.Registration;",by='return null;',bB='");',bA='var pa=this.getLayoutParent();if(pa)computed=pa.',bv='!==undefined&&',bu="', qx.event.type.Data, [computed, old]",bx='var backup=computed;',bw='}else{',bt="object",bs='if(computed===undefined)computed=null;',bQ='var computed, old=this.',bR='throw new Error("Property ',bS=")}",bT='var prop=qx.core.Property;',bM=" with incoming value '",bN='if(computed===undefined||computed==inherit)computed=null;',bO='if((computed===undefined||computed===inherit)&&',bP="reg.fireEvent(this, '",bU="qx.core.Property";
qx.Bootstrap.define(bU,{statics:{__N:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__O:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bl,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:cb,dispose:ca,inheritable:ca,nullable:ca,themeable:ca,refine:ca,init:null,apply:cb,event:cb,check:null,transform:cb,deferredInit:ca,validate:null},$$allowedGroupKeys:{name:cb,group:bt,mode:cb,themeable:ca},$$inheritable:{},refresh:function(Y){var parent=Y.getLayoutParent();

if(parent){var bc=Y.constructor;
var be=this.$$store.inherit;
var bd=this.$$store.init;
var bb=this.$$method.refresh;
var bf;
var ba;
{};

while(bc){bf=bc.$$properties;

if(bf){for(var name in this.$$inheritable){if(bf[name]&&Y[bb[name]]){ba=parent[be[name]];

if(ba===undefined){ba=parent[bd[name]];
}{};
Y[bb[name]](ba);
}}}bc=bc.superclass;
}}},attach:function(dg){var dh=dg.$$properties;

if(dh){for(var name in dh){this.attachMethods(dg,name,dh[name]);
}}dg.$$propertiesAttached=true;
},attachMethods:function(de,name,df){df.group?this.__P(de,df,name):this.__Q(de,df,name);
},__P:function(dw,dx,name){var dE=qx.lang.String.firstUp(name);
var dD=dw.prototype;
var dF=dx.themeable===true;
{};
var dG=[];
var dA=[];

if(dF){var dy=[];
var dC=[];
}var dB="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
dG.push(dB);

if(dF){dy.push(dB);
}
if(dx.mode=="shorthand"){var dz="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
dG.push(dz);

if(dF){dy.push(dz);
}}
for(var i=0,a=dx.group,l=a.length;i<l;i++){{};
dG.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
dA.push("this.",this.$$method.reset[a[i]],"();");

if(dF){{};
dy.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
dC.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+dE;
dD[this.$$method.set[name]]=new Function(dG.join(""));
this.$$method.reset[name]="reset"+dE;
dD[this.$$method.reset[name]]=new Function(dA.join(""));

if(dF){this.$$method.setThemed[name]="setThemed"+dE;
dD[this.$$method.setThemed[name]]=new Function(dy.join(""));
this.$$method.resetThemed[name]="resetThemed"+dE;
dD[this.$$method.resetThemed[name]]=new Function(dC.join(""));
}},__Q:function(dq,dr,name){var dt=qx.lang.String.firstUp(name);
var dv=dq.prototype;
{};
if(dr.dispose===undefined&&typeof dr.check==="string"){dr.dispose=this.__O[dr.check]||qx.Class.isDefined(dr.check)||qx.Interface.isDefined(dr.check);
}var du=this.$$method;
var ds=this.$$store;
ds.runtime[name]="$$runtime_"+name;
ds.user[name]="$$user_"+name;
ds.theme[name]="$$theme_"+name;
ds.init[name]="$$init_"+name;
ds.inherit[name]="$$inherit_"+name;
ds.useinit[name]="$$useinit_"+name;
du.get[name]="get"+dt;
dv[du.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,dq,name,"get");
};
du.set[name]="set"+dt;
dv[du.set[name]]=function(cX){return qx.core.Property.executeOptimizedSetter(this,dq,name,"set",arguments);
};
du.reset[name]="reset"+dt;
dv[du.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dq,name,"reset");
};

if(dr.inheritable||dr.apply||dr.event||dr.deferredInit){du.init[name]="init"+dt;
dv[du.init[name]]=function(j){return qx.core.Property.executeOptimizedSetter(this,dq,name,"init",arguments);
};
}
if(dr.inheritable){du.refresh[name]="refresh"+dt;
dv[du.refresh[name]]=function(b){return qx.core.Property.executeOptimizedSetter(this,dq,name,"refresh",arguments);
};
}du.setRuntime[name]="setRuntime"+dt;
dv[du.setRuntime[name]]=function(z){return qx.core.Property.executeOptimizedSetter(this,dq,name,"setRuntime",arguments);
};
du.resetRuntime[name]="resetRuntime"+dt;
dv[du.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dq,name,"resetRuntime");
};

if(dr.themeable){du.setThemed[name]="setThemed"+dt;
dv[du.setThemed[name]]=function(N){return qx.core.Property.executeOptimizedSetter(this,dq,name,"setThemed",arguments);
};
du.resetThemed[name]="resetThemed"+dt;
dv[du.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dq,name,"resetThemed");
};
}
if(dr.check==="Boolean"){dv["toggle"+dt]=new Function("return this."+du.set[name]+"(!this."+du.get[name]+"())");
dv["is"+dt]=new Function("return this."+du.get[name]+"()");
}},__R:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(R,S,T,U,V){var W=R.constructor.classname;
var X=cm+T+bq+W+cg+this.$$method[U][T]+bM+V+bp;
throw new Error(X+(this.__R[S]||"Unknown reason: "+S));
},__S:function(p,q,name,r,s,t){var u=this.$$method[r][name];
{q[u]=new Function("value",s.join(""));
};
{};
qx.Bootstrap.setDisplayName(q[u],p.classname+".prototype",u);
if(t===undefined){return p[u]();
}else{return p[u](t[0]);
}},executeOptimizedGetter:function(di,dj,name,dk){var dm=dj.$$properties[name];
var dp=dj.prototype;
var dl=[];
var dn=this.$$store;
dl.push(cv,dn.runtime[name],cu);
dl.push(cc,dn.runtime[name],cz);

if(dm.inheritable){dl.push(cd,dn.inherit[name],cu);
dl.push(cc,dn.inherit[name],cz);
dl.push(cF);
}dl.push(cv,dn.user[name],cu);
dl.push(cc,dn.user[name],cz);

if(dm.themeable){dl.push(cd,dn.theme[name],cu);
dl.push(cc,dn.theme[name],cz);
}
if(dm.deferredInit&&dm.init===undefined){dl.push(cd,dn.init[name],cu);
dl.push(cc,dn.init[name],cz);
}dl.push(cF);

if(dm.init!==undefined){if(dm.inheritable){dl.push(cn,dn.init[name],cz);

if(dm.nullable){dl.push(cR);
}else if(dm.init!==undefined){dl.push(cc,dn.init[name],cz);
}else{dl.push(bI,name,cA,dj.classname,ci);
}dl.push(ck);
}else{dl.push(cc,dn.init[name],cz);
}}else if(dm.inheritable||dm.nullable){dl.push(by);
}else{dl.push(bR,name,cA,dj.classname,ci);
}return this.__S(di,dp,name,dk,dl);
},executeOptimizedSetter:function(A,B,name,C,D){var I=B.$$properties[name];
var H=B.prototype;
var F=[];
var E=C===cs||C===cr||C===ce||(C===cf&&I.init===undefined);
var G=I.apply||I.event||I.inheritable;
var J=this.__eJ(C,name);
this.__eK(F,I,name,C,E);

if(E){this.__eL(F,B,I,name);
}
if(G){this.__eM(F,E,J,C);
}
if(I.inheritable){F.push(cQ);
}{};

if(!G){this.__eO(F,name,C,E);
}else{this.__eP(F,I,name,C,E);
}
if(I.inheritable){this.__eQ(F,I,name,C);
}else if(G){this.__eR(F,I,name,C);
}
if(G){this.__eS(F,I,name);
if(I.inheritable&&H._getChildren){this.__eT(F,name);
}}if(E){F.push(bL);
}return this.__S(A,H,name,C,F,D);
},__eJ:function(bg,name){if(bg===ce||bg===bV){var bh=this.$$store.runtime[name];
}else if(bg===cr||bg===bY){bh=this.$$store.theme[name];
}else if(bg===cf){bh=this.$$store.init[name];
}else{bh=this.$$store.user[name];
}return bh;
},__eK:function(v,w,name,x,y){{if(!w.nullable||w.check||w.inheritable){v.push(bT);
}if(x===cs){v.push(bm,name,cK,x,cT);
}};
},__eL:function(K,L,M,name){if(M.transform){K.push(cL,M.transform,cj);
}if(M.validate){if(typeof M.validate===cb){K.push(cw,M.validate,cj);
}else if(M.validate instanceof Function){K.push(L.classname,bD,name);
K.push(co);
}}},__eM:function(c,d,e,f){var g=(f===cG||f===bY||f===bV);

if(d){c.push(cv,e,cl);
}else if(g){c.push(cv,e,br);
}},__eN:undefined,__eO:function(db,name,dc,dd){if(dc===ce){db.push(cw,this.$$store.runtime[name],cx);
}else if(dc===bV){db.push(cv,this.$$store.runtime[name],cu);
db.push(ct,this.$$store.runtime[name],cz);
}else if(dc===cs){db.push(cw,this.$$store.user[name],cx);
}else if(dc===cG){db.push(cv,this.$$store.user[name],cu);
db.push(ct,this.$$store.user[name],cz);
}else if(dc===cr){db.push(cw,this.$$store.theme[name],cx);
}else if(dc===bY){db.push(cv,this.$$store.theme[name],cu);
db.push(ct,this.$$store.theme[name],cz);
}else if(dc===cf&&dd){db.push(cw,this.$$store.init[name],cx);
}},__eP:function(k,m,name,n,o){if(m.inheritable){k.push(bQ,this.$$store.inherit[name],cz);
}else{k.push(cP);
}k.push(cv,this.$$store.runtime[name],bX);

if(n===ce){k.push(cy,this.$$store.runtime[name],cx);
}else if(n===bV){k.push(ct,this.$$store.runtime[name],cz);
k.push(cv,this.$$store.user[name],cu);
k.push(cy,this.$$store.user[name],cz);
k.push(cd,this.$$store.theme[name],cu);
k.push(cy,this.$$store.theme[name],cz);
k.push(cd,this.$$store.init[name],bX);
k.push(cy,this.$$store.init[name],cz);
k.push(cw,this.$$store.useinit[name],bW);
k.push(cq);
}else{k.push(cD,this.$$store.runtime[name],cz);
if(n===cs){k.push(cw,this.$$store.user[name],cx);
}else if(n===cG){k.push(ct,this.$$store.user[name],cz);
}else if(n===cr){k.push(cw,this.$$store.theme[name],cx);
}else if(n===bY){k.push(ct,this.$$store.theme[name],cz);
}else if(n===cf&&o){k.push(cw,this.$$store.init[name],cx);
}}k.push(cq);
k.push(cd,this.$$store.user[name],bX);

if(n===cs){if(!m.inheritable){k.push(cE,this.$$store.user[name],cz);
}k.push(cy,this.$$store.user[name],cx);
}else if(n===cG){if(!m.inheritable){k.push(cE,this.$$store.user[name],cz);
}k.push(ct,this.$$store.user[name],cz);
k.push(cv,this.$$store.runtime[name],cu);
k.push(cy,this.$$store.runtime[name],cz);
k.push(cv,this.$$store.theme[name],cu);
k.push(cy,this.$$store.theme[name],cz);
k.push(cd,this.$$store.init[name],bX);
k.push(cy,this.$$store.init[name],cz);
k.push(cw,this.$$store.useinit[name],bW);
k.push(cq);
}else{if(n===ce){k.push(cy,this.$$store.runtime[name],cx);
}else if(m.inheritable){k.push(cy,this.$$store.user[name],cz);
}else{k.push(cD,this.$$store.user[name],cz);
}if(n===cr){k.push(cw,this.$$store.theme[name],cx);
}else if(n===bY){k.push(ct,this.$$store.theme[name],cz);
}else if(n===cf&&o){k.push(cw,this.$$store.init[name],cx);
}}k.push(cq);
if(m.themeable){k.push(cd,this.$$store.theme[name],bX);

if(!m.inheritable){k.push(cE,this.$$store.theme[name],cz);
}
if(n===ce){k.push(cy,this.$$store.runtime[name],cx);
}else if(n===cs){k.push(cy,this.$$store.user[name],cx);
}else if(n===cr){k.push(cy,this.$$store.theme[name],cx);
}else if(n===bY){k.push(ct,this.$$store.theme[name],cz);
k.push(cv,this.$$store.init[name],bX);
k.push(cy,this.$$store.init[name],cz);
k.push(cw,this.$$store.useinit[name],bW);
k.push(cq);
}else if(n===cf){if(o){k.push(cw,this.$$store.init[name],cx);
}k.push(cy,this.$$store.theme[name],cz);
}else if(n===cH){k.push(cy,this.$$store.theme[name],cz);
}k.push(cq);
}k.push(cd,this.$$store.useinit[name],bH);

if(!m.inheritable){k.push(cE,this.$$store.init[name],cz);
}
if(n===cf){if(o){k.push(cy,this.$$store.init[name],cx);
}else{k.push(cy,this.$$store.init[name],cz);
}}else if(n===cs||n===ce||n===cr||n===cH){k.push(ct,this.$$store.useinit[name],cz);

if(n===ce){k.push(cy,this.$$store.runtime[name],cx);
}else if(n===cs){k.push(cy,this.$$store.user[name],cx);
}else if(n===cr){k.push(cy,this.$$store.theme[name],cx);
}else if(n===cH){k.push(cy,this.$$store.init[name],cz);
}}k.push(cq);
if(n===cs||n===ce||n===cr||n===cf){k.push(ch);

if(n===ce){k.push(cy,this.$$store.runtime[name],cx);
}else if(n===cs){k.push(cy,this.$$store.user[name],cx);
}else if(n===cr){k.push(cy,this.$$store.theme[name],cx);
}else if(n===cf){if(o){k.push(cy,this.$$store.init[name],cx);
}else{k.push(cy,this.$$store.init[name],cz);
}k.push(cw,this.$$store.useinit[name],bW);
}k.push(cq);
}},__eQ:function(cU,cV,name,cW){cU.push(bE);

if(cW===cH){cU.push(cS);
}else{cU.push(bA,this.$$store.inherit[name],cz);
}cU.push(bO);
cU.push(cw,this.$$store.init[name],bv);
cU.push(cw,this.$$store.init[name],bF);
cU.push(cy,this.$$store.init[name],cz);
cU.push(cw,this.$$store.useinit[name],bW);
cU.push(bw);
cU.push(ct,this.$$store.useinit[name],bG);
cU.push(cq);
cU.push(cI);
cU.push(bk);
cU.push(cO,this.$$store.inherit[name],cz);
cU.push(cq);
cU.push(bo);
cU.push(ct,this.$$store.inherit[name],cz);
cU.push(cM,this.$$store.inherit[name],bi);
cU.push(bx);
if(cV.init!==undefined&&cW!==cf){cU.push(cC,this.$$store.init[name],cB);
}else{cU.push(cJ);
}cU.push(bN);
},__eR:function(O,P,name,Q){if(Q!==cs&&Q!==ce&&Q!==cr){O.push(bs);
}O.push(cI);
if(P.init!==undefined&&Q!==cf){O.push(cC,this.$$store.init[name],cB);
}else{O.push(cJ);
}},__eS:function(cY,da,name){if(da.apply){cY.push(cw,da.apply,bK,name,bB);
}if(da.event){cY.push(bz,bJ,da.event,cN,bP,da.event,bu,bS);
}},__eT:function(h,name){h.push(cp);
h.push(bn,this.$$method.refresh[name],bC,this.$$method.refresh[name],bj);
h.push(cq);
}}});
})();
(function(){var t="$$hash",s="qx.core.ObjectRegistry";
qx.Bootstrap.define(s,{statics:{inShutDown:false,__T:{},__U:0,__V:[],register:function(u){var x=this.__T;

if(!x){return;
}var w=u.$$hash;

if(w==null){var v=this.__V;

if(v.length>0){w=v.pop();
}else{w=(this.__U++).toString(36);
}u.$$hash=w;
}{};
x[w]=u;
},unregister:function(c){var d=c.$$hash;

if(d==null){return;
}var e=this.__T;

if(e&&e[d]){delete e[d];
this.__V.push(d);
}try{delete c.$$hash;
}catch(f){if(c.removeAttribute){c.removeAttribute(t);
}}},toHashCode:function(h){{};
var k=h.$$hash;

if(k!=null){return k;
}var j=this.__V;

if(j.length>0){k=j.pop();
}else{k=(this.__U++).toString(36);
}return h.$$hash=k;
},clearHashCode:function(y){{};
var z=y.$$hash;

if(z!=null){this.__V.push(z);
try{delete y.$$hash;
}catch(n){if(y.removeAttribute){y.removeAttribute(t);
}}}},fromHashCode:function(m){return this.__T[m]||null;
},shutdown:function(){this.inShutDown=true;
var p=this.__T;
var r=[];

for(var q in p){r.push(q);
}r.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var o,i=0,l=r.length;

while(true){try{for(;i<l;i++){q=r[i];
o=p[q];

if(o&&o.dispose){o.dispose();
}}}catch(g){qx.log.Logger.error(this,"Could not dispose object "+o.toString()+": "+g);

if(i!==l){i++;
continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__T;
},getRegistry:function(){return this.__T;
}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,m){if(m){if(m.include&&!(m.include instanceof Array)){m.include=[m.include];
}{};
var o=m.statics?m.statics:{};
qx.Bootstrap.setDisplayNames(o,name);

for(var n in o){if(o[n] instanceof Function){o[n].$$mixin=o;
}}if(m.construct){o.$$constructor=m.construct;
qx.Bootstrap.setDisplayName(m.construct,name,e);
}
if(m.include){o.$$includes=m.include;
}
if(m.properties){o.$$properties=m.properties;
}
if(m.members){o.$$members=m.members;
qx.Bootstrap.setDisplayNames(m.members,name+f);
}
for(var n in o.$$members){if(o.$$members[n] instanceof Function){o.$$members[n].$$mixin=o;
}}
if(m.events){o.$$events=m.events;
}
if(m.destruct){o.$$destructor=m.destruct;
qx.Bootstrap.setDisplayName(m.destruct,name,b);
}}else{var o={};
}o.$$type=a;
o.name=name;
o.toString=this.genericToString;
o.basename=qx.Bootstrap.createNamespace(name,o);
this.$$registry[name]=o;
return o;
},checkCompatibility:function(p){var s=this.flatten(p);
var t=s.length;

if(t<2){return true;
}var w={};
var v={};
var u={};
var r;

for(var i=0;i<t;i++){r=s[i];

for(var q in r.events){if(u[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+u[q]+'" in member "'+q+'"!');
}u[q]=r.name;
}
for(var q in r.properties){if(w[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+w[q]+'" in property "'+q+'"!');
}w[q]=r.name;
}
for(var q in r.members){if(v[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+v[q]+'" in member "'+q+'"!');
}v[q]=r.name;
}}return true;
},isCompatible:function(h,j){var k=qx.Class.getMixins(j);
k.push(h);
return qx.Mixin.checkCompatibility(k);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__W:null,__X:function(){}}});
})();
(function(){var e="qx.data.MBinding";
qx.Mixin.define(e,{members:{bind:function(a,b,c,d){return qx.data.SingleValueBinding.bind(this,a,b,c,d);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var i="qx.log.appender.RingBuffer";
qx.Bootstrap.define(i,{construct:function(b){this.__eW=[];
this.setMaxMessages(b||50);
},members:{__eX:0,__eW:null,__eY:50,setMaxMessages:function(a){this.__eY=a;
this.clearHistory();
},getMaxMessages:function(){return this.__eY;
},process:function(c){var d=this.getMaxMessages();

if(this.__eW.length<d){this.__eW.push(c);
}else{this.__eW[this.__eX++]=c;

if(this.__eX>=d){this.__eX=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(e){if(e>this.__eW.length){e=this.__eW.length;
}
if(this.__eW.length==this.getMaxMessages()){var g=this.__eX-1;
}else{g=this.__eW.length-1;
}var f=g-e+1;

if(f<0){f+=this.__eW.length;
}var h;

if(f<=g){h=this.__eW.slice(f,g+1);
}else{h=this.__eW.slice(f,this.__eW.length).concat(this.__eW.slice(0,g+1));
}return h;
},clearHistory:function(){this.__eW=[];
this.__eX=0;
}}});
})();
(function(){var q="node",p="error",o="...(+",n="array",m=")",k="info",j="instance",h="string",g="null",f="class",L="number",K="stringify",J="]",I="unknown",H="function",G="boolean",F="debug",E="map",D="undefined",C="qx.log.Logger",x=")}",y="#",v="warn",w="document",t="{...(",u="[",r="text[",s="[...(",z="\n",A=")]",B="object";
qx.Bootstrap.define(C,{statics:{__ba:F,setLevel:function(Q){this.__ba=Q;
},getLevel:function(){return this.__ba;
},setTreshold:function(bk){this.__bd.setMaxMessages(bk);
},getTreshold:function(){return this.__bd.getMaxMessages();
},__bb:{},__bc:0,register:function(a){if(a.$$id){return;
}var b=this.__bc++;
this.__bb[b]=a;
a.$$id=b;
var c=this.__bd.getAllLogEvents();

for(var i=0,l=c.length;i<l;i++){a.process(c[i]);
}},unregister:function(bv){var bw=bv.$$id;

if(bw==null){return;
}delete this.__bb[bw];
delete bv.$$id;
},debug:function(bx,by){this.__bf(F,arguments);
},info:function(O,P){this.__bf(k,arguments);
},warn:function(V,W){this.__bf(v,arguments);
},error:function(M,N){this.__bf(p,arguments);
},trace:function(bF){this.__bf(k,[bF,qx.dev.StackTrace.getStackTrace().join(z)]);
},deprecatedMethodWarning:function(bG,bH){var bI;
{};
},deprecatedClassWarning:function(bh,bi){var bj;
{};
},deprecatedEventWarning:function(bz,event,bA){var bB;
{};
},deprecatedMixinWarning:function(bC,bD){var bE;
{};
},deprecatedConstantWarning:function(R,S,T){var self,U;
{};
},clear:function(){this.__bd.clearHistory();
},__bd:new qx.log.appender.RingBuffer(50),__be:{debug:0,info:1,warn:2,error:3},__bf:function(bl,bm){var br=this.__be;

if(br[bl]<br[this.__ba]){return;
}var bo=bm.length<2?null:bm[0];
var bq=bo?1:0;
var bn=[];

for(var i=bq,l=bm.length;i<l;i++){bn.push(this.__bh(bm[i],true));
}var bs=new Date;
var bt={time:bs,offset:bs-qx.Bootstrap.LOADSTART,level:bl,items:bn,win:window};
if(bo){if(bo instanceof qx.core.Object){bt.object=bo.$$hash;
}else if(bo.$$type){bt.clazz=bo;
}}this.__bd.process(bt);
var bu=this.__bb;

for(var bp in bu){bu[bp].process(bt);
}},__bg:function(d){if(d===undefined){return D;
}else if(d===null){return g;
}
if(d.$$type){return f;
}var e=typeof d;

if(e===H||e==h||e===L||e===G){return e;
}else if(e===B){if(d.nodeType){return q;
}else if(d.classname){return j;
}else if(d instanceof Array){return n;
}else if(d instanceof Error){return p;
}else{return E;
}}
if(d.toString){return K;
}return I;
},__bh:function(X,Y){var bg=this.__bg(X);
var bc=I;
var bb=[];

switch(bg){case g:case D:bc=bg;
break;
case h:case L:case G:bc=X;
break;
case q:if(X.nodeType===9){bc=w;
}else if(X.nodeType===3){bc=r+X.nodeValue+J;
}else if(X.nodeType===1){bc=X.nodeName.toLowerCase();

if(X.id){bc+=y+X.id;
}}else{bc=q;
}break;
case H:bc=qx.lang.Function.getName(X)||bg;
break;
case j:bc=X.basename+u+X.$$hash+J;
break;
case f:case K:bc=X.toString();
break;
case p:bb=qx.dev.StackTrace.getStackTraceFromError(X);
bc=X.toString();
break;
case n:if(Y){bc=[];

for(var i=0,l=X.length;i<l;i++){if(bc.length>20){bc.push(o+(l-i)+m);
break;
}bc.push(this.__bh(X[i],false));
}}else{bc=s+X.length+A;
}break;
case E:if(Y){var ba;
var bf=[];

for(var be in X){bf.push(be);
}bf.sort();
bc=[];

for(var i=0,l=bf.length;i<l;i++){if(bc.length>20){bc.push(o+(l-i)+m);
break;
}be=bf[i];
ba=this.__bh(X[be],false);
ba.key=be;
bc.push(ba);
}}else{var bd=0;

for(var be in X){bd++;
}bc=t+bd+x;
}break;
}return {type:bg,text:bc,trace:bb};
}}});
})();
(function(){var E="set",D="get",C="reset",B="qx.core.Object",A="]",z="[",y="$$user_",x="Don't use '_disposeFields' - instead assign directly to 'null'",w="Object";
qx.Class.define(B,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:w},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+z+this.$$hash+A;
},base:function(Q,R){{};

if(arguments.length===1){return Q.callee.base.call(this);
}else{return Q.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(q){return q.callee.self;
},clone:function(){var s=this.constructor;
var r=new s;
var u=qx.Class.getProperties(s);
var t=qx.core.Property.$$store.user;
var v=qx.core.Property.$$method.set;
var name;
for(var i=0,l=u.length;i<l;i++){name=u[i];

if(this.hasOwnProperty(t[name])){r[v[name]](this[t[name]]);
}}return r;
},set:function(bu,bv){var bx=qx.core.Property.$$method.set;

if(qx.lang.Type.isString(bu)){if(!this[bx[bu]]){if(this[E+qx.lang.String.firstUp(bu)]!=undefined){this[E+qx.lang.String.firstUp(bu)](bv);
return;
}{};
}return this[bx[bu]](bv);
}else{for(var bw in bu){if(!this[bx[bw]]){if(this[E+qx.lang.String.firstUp(bw)]!=undefined){this[E+qx.lang.String.firstUp(bw)](bu[bw]);
continue;
}{};
}this[bx[bw]](bu[bw]);
}return this;
}},get:function(M){var N=qx.core.Property.$$method.get;

if(!this[N[M]]){if(this[D+qx.lang.String.firstUp(M)]!=undefined){return this[D+qx.lang.String.firstUp(M)]();
}{};
}return this[N[M]]();
},reset:function(bs){var bt=qx.core.Property.$$method.reset;

if(!this[bt[bs]]){if(this[C+qx.lang.String.firstUp(bs)]!=undefined){this[C+qx.lang.String.firstUp(bs)]();
return;
}{};
}this[bt[bs]]();
},__bi:qx.event.Registration,addListener:function(I,J,self,K){if(!this.$$disposed){return this.__bi.addListener(this,I,J,self,K);
}return null;
},addListenerOnce:function(bh,bi,self,bj){var bk=function(e){bi.call(self||this,e);
this.removeListener(bh,bk,this,bj);
};
return this.addListener(bh,bk,this,bj);
},removeListener:function(X,Y,self,ba){if(!this.$$disposed){return this.__bi.removeListener(this,X,Y,self,ba);
}return false;
},removeListenerById:function(bm){if(!this.$$disposed){return this.__bi.removeListenerById(this,bm);
}return false;
},hasListener:function(m,n){return this.__bi.hasListener(this,m,n);
},dispatchEvent:function(a){if(!this.$$disposed){return this.__bi.dispatchEvent(this,a);
}return true;
},fireEvent:function(be,bf,bg){if(!this.$$disposed){return this.__bi.fireEvent(this,be,bf,bg);
}return true;
},fireNonBubblingEvent:function(bb,bc,bd){if(!this.$$disposed){return this.__bi.fireNonBubblingEvent(this,bb,bc,bd);
}return true;
},fireDataEvent:function(bn,bo,bp,bq){if(!this.$$disposed){if(bp===undefined){bp=null;
}return this.__bi.fireNonBubblingEvent(this,bn,qx.event.type.Data,[bo,bp,!!bq]);
}return true;
},__bj:null,setUserData:function(G,H){if(!this.__bj){this.__bj={};
}this.__bj[G]=H;
},getUserData:function(bz){if(!this.__bj){return null;
}var bA=this.__bj[bz];
return bA===undefined?null:bA;
},__bk:qx.log.Logger,debug:function(F){this.__bk.debug(this,F);
},info:function(P){this.__bk.info(this,P);
},warn:function(p){this.__bk.warn(this,p);
},error:function(br){this.__bk.error(this,br);
},trace:function(){this.__bk.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var V,T;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var U=this.constructor;
var S;

while(U.superclass){if(U.$$destructor){U.$$destructor.call(this);
}if(U.$$includes){S=U.$$flatIncludes;

for(var i=0,l=S.length;i<l;i++){if(S[i].$$destructor){S[i].$$destructor.call(this);
}}}U=U.superclass;
}var W=qx.Class.getProperties(this.constructor);

for(var i=0,l=W.length;i<l;i++){delete this[y+W[i]];
}{};
},_disposeFields:function(o){qx.log.Logger.deprecatedMethodWarning(arguments.callee,x);
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(O){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(L){qx.util.DisposeUtil.disposeArray(this,L);
},_disposeMap:function(bl){qx.util.DisposeUtil.disposeMap(this,bl);
}},settings:{"qx.disposerDebugLevel":0},defer:function(by){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__bj=null;
var d=this.constructor;
var j;
var k=qx.core.Property.$$store;
var g=k.user;
var h=k.theme;
var b=k.inherit;
var f=k.useinit;
var c=k.init;

while(d){j=d.$$properties;

if(j){for(var name in j){if(j[name].dispose){this[g[name]]=this[h[name]]=this[b[name]]=this[f[name]]=this[c[name]]=undefined;
}}}d=d.superclass;
}}});
})();
(function(){var G="",F="g",E="0",D='\\$1',C="%",B='-',A="qx.lang.String",z=' ',y='\n',x="undefined";
qx.Bootstrap.define(A,{statics:{camelCase:function(l){return l.replace(/\-([a-z])/g,function(o,p){return p.toUpperCase();
});
},hyphenate:function(u){return u.replace(/[A-Z]/g,function(v){return (B+v.charAt(0).toLowerCase());
});
},capitalize:function(Q){return Q.replace(/\b[a-z]/g,function(R){return R.toUpperCase();
});
},clean:function(L){return this.trim(L.replace(/\s+/g,z));
},trimLeft:function(d){return d.replace(/^\s+/,G);
},trimRight:function(w){return w.replace(/\s+$/,G);
},trim:function(S){return S.replace(/^\s+|\s+$/g,G);
},startsWith:function(M,N){return M.indexOf(N)===0;
},endsWith:function(e,f){return e.substring(e.length-f.length,e.length)===f;
},repeat:function(h,j){return h.length>=0?new Array(j+1).join(h):G;
},pad:function(a,length,b){var c=length-a.length;

if(c>0){if(typeof b===x){b=E;
}return this.repeat(b,c)+a;
}else{return a;
}},firstUp:function(k){return k.charAt(0).toUpperCase()+k.substr(1);
},firstLow:function(O){return O.charAt(0).toLowerCase()+O.substr(1);
},contains:function(m,n){return m.indexOf(n)!=-1;
},format:function(H,I){var J=H;

for(var i=0;i<I.length;i++){J=J.replace(new RegExp(C+(i+1),F),I[i]);
}return J;
},escapeRegexpChars:function(P){return P.replace(/([.*+?^${}()|[\]\/\\])/g,D);
},toArray:function(g){return g.split(/\B|\b/g);
},stripTags:function(K){return K.replace(/<\/?[^>]+>/gi,G);
},stripScripts:function(q,r){var t=G;
var s=q.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){t+=arguments[1]+y;
return G;
});

if(r===true){qx.lang.Function.globalEval(t);
}return s;
}}});
})();
(function(){var h="function",g="Boolean",f="qx.Interface",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(f,{statics:{define:function(name,M){if(M){if(M.extend&&!(M.extend instanceof Array)){M.extend=[M.extend];
}{};
var N=M.statics?M.statics:{};
if(M.extend){N.$$extends=M.extend;
}
if(M.properties){N.$$properties=M.properties;
}
if(M.members){N.$$members=M.members;
}
if(M.events){N.$$events=M.events;
}}else{var N={};
}N.$$type=c;
N.name=name;
N.toString=this.genericToString;
N.basename=qx.Bootstrap.createNamespace(name,N);
qx.Interface.$$registry[name]=N;
return N;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(j){if(!j){return [];
}var k=j.concat();

for(var i=0,l=j.length;i<l;i++){if(j[i].$$extends){k.push.apply(k,this.flatten(j[i].$$extends));
}}return k;
},__bl:function(m,n,o,p){var t=o.$$members;

if(t){for(var s in t){if(qx.lang.Type.isFunction(t[s])){var r=this.__eI(n,s);
var q=r||qx.lang.Type.isFunction(m[s]);

if(!q){throw new Error('Implementation of method "'+s+'" is missing in class "'+n.classname+'" required by interface "'+o.name+'"');
}var u=p===true&&!r&&!qx.Class.hasInterface(n,o);

if(u){m[s]=this.__bo(o,m[s],s,t[s]);
}}else{if(typeof m[s]===undefined){if(typeof m[s]!==h){throw new Error('Implementation of member "'+s+'" is missing in class "'+n.classname+'" required by interface "'+o.name+'"');
}}}}}},__eI:function(v,w){var A=w.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!A){return false;
}var x=qx.lang.String.firstLow(A[2]);
var y=qx.Class.hasProperty(v,x);

if(!y){return false;
}var z=A[0]==b||A[0]==d;

if(z){return qx.Class.getPropertyDefinition(v,x).check==g;
}return true;
},__bm:function(F,G){if(G.$$properties){for(var H in G.$$properties){if(!qx.Class.hasProperty(F,H)){throw new Error('The property "'+H+'" is not supported by Class "'+F.classname+'"!');
}}}},__bn:function(O,P){if(P.$$events){for(var Q in P.$$events){if(!qx.Class.supportsEvent(O,Q)){throw new Error('The event "'+Q+'" is not supported by Class "'+O.classname+'"!');
}}}},assertObject:function(B,C){var E=B.constructor;
this.__bl(B,E,C,false);
this.__bm(E,C);
this.__bn(E,C);
var D=C.$$extends;

if(D){for(var i=0,l=D.length;i<l;i++){this.assertObject(B,D[i]);
}}},assert:function(I,J,K){this.__bl(I.prototype,I,J,K);
this.__bm(I,J);
this.__bn(I,J);
var L=J.$$extends;

if(L){for(var i=0,l=L.length;i<l;i++){this.assert(I,L[i],K);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__bo:function(){},__bp:null,__bq:function(){}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.globalErrorHandling",b="on",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{setErrorHandler:function(k,l){this.__fa=k||null;
this.__fb=l||window;

if(qx.core.Setting.get(c)===b){if(k&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__fc,this);
}
if(!k&&window.onerror){window.onerror=null;
}}},__fc:function(h,i,j){if(this.__fa){this.handleError(new qx.core.WindowError(h,i,j));
return true;
}},observeMethod:function(g){if(qx.core.Setting.get(c)===b){var self=this;
return function(){if(!self.__fa){return g.apply(this,arguments);
}
try{return g.apply(this,arguments);
}catch(f){self.handleError(f);
}};
}else{return g;
}},handleError:function(d){if(this.__fa){this.__fa.call(this.__fb,d);
}}},defer:function(e){qx.core.Setting.define(c,b);
e.setErrorHandler(null,null);
}});
})();
(function(){var w="ready",v="qx.client",u="mshtml",t="load",s="unload",r="qx.event.handler.Application",q="complete",p="gecko|opera|webkit",o="left",n="DOMContentLoaded",m="shutdown";
qx.Class.define(r,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){arguments.callee.base.call(this);
this._window=d.getWindow();
this.__br=false;
this.__bs=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__bt:false,onScriptLoaded:function(){this.__bt=true;
var k=qx.event.handler.Application.$$instance;

if(k){k.__bu();
}}},members:{canHandleEvent:function(y,z){},registerEvent:function(h,i,j){},unregisterEvent:function(a,b,c){},__bv:null,__br:null,__bs:null,__bw:null,__bu:function(){var g=qx.event.handler.Application;
if(!this.__bv&&this.__br&&g.__bt){if(qx.core.Variant.isSet(v,u)){if(qx.event.Registration.hasListener(this._window,w)){this.__bv=true;
qx.event.Registration.fireEvent(this._window,w);
}}else{this.__bv=true;
qx.event.Registration.fireEvent(this._window,w);
}}},isApplicationReady:function(){return this.__bv;
},_initObserver:function(){if(qx.$$domReady||document.readyState==q){this.__br=true;
this.__bu();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(v,p)){qx.bom.Event.addNativeListener(this._window,n,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(v,u)){var self=this;
var l=function(){try{document.documentElement.doScroll(o);

if(document.body){self._onNativeLoadWrapped();
}}catch(x){window.setTimeout(l,100);
}};
l();
}qx.bom.Event.addNativeListener(this._window,t,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,s,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,t,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,s,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__br=true;
this.__bu();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__bw){this.__bw=true;

try{qx.event.Registration.fireEvent(this._window,m);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(f){qx.event.Registration.addHandler(f);
}});
})();
(function(){var c="ready",b="qx.bom.Lifecycle",a="shutdown";
qx.Class.define(b,{statics:{onReady:function(d,e){var g=qx.event.Registration;
var f=g.getManager(window).getHandler(qx.event.handler.Application);
if(f&&f.isApplicationReady()){d.call(e);
}else{g.addListener(window,c,d,e);
}},onShutdown:function(h,i){qx.event.Registration.addListener(window,a,h,i);
}}});
})();
(function(){var g="emulated",f="native",e='"',d="qx.lang.Core",c="\\\\",b="\\\"",a="[object Error]";
qx.Bootstrap.define(d,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==a)?g:f,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?f:g,{"native":Array.prototype.indexOf,"emulated":function(h,j){if(j==null){j=0;
}else if(j<0){j=Math.max(0,this.length+j);
}
for(var i=j;i<this.length;i++){if(this[i]===h){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?f:g,{"native":Array.prototype.lastIndexOf,"emulated":function(z,A){if(A==null){A=this.length-1;
}else if(A<0){A=Math.max(0,this.length+A);
}
for(var i=A;i>=0;i--){if(this[i]===z){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?f:g,{"native":Array.prototype.forEach,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){B.call(C||window,D,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?f:g,{"native":Array.prototype.filter,"emulated":function(v,w){var x=[];
var l=this.length;

for(var i=0;i<l;i++){var y=this[i];

if(y!==undefined){if(v.call(w||window,y,i,this)){x.push(this[i]);
}}}return x;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?f:g,{"native":Array.prototype.map,"emulated":function(k,m){var n=[];
var l=this.length;

for(var i=0;i<l;i++){var o=this[i];

if(o!==undefined){n[i]=k.call(m||window,o,i,this);
}}return n;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?f:g,{"native":Array.prototype.some,"emulated":function(s,t){var l=this.length;

for(var i=0;i<l;i++){var u=this[i];

if(u!==undefined){if(s.call(t||window,u,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?f:g,{"native":Array.prototype.every,"emulated":function(p,q){var l=this.length;

for(var i=0;i<l;i++){var r=this[i];

if(r!==undefined){if(!p.call(q||window,r,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?f:g,{"native":String.prototype.quote,"emulated":function(){return e+this.replace(/\\/g,c).replace(/\"/g,b)+e;
}})}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Bootstrap.define(G,{statics:{__bx:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__by:function(O,P){return function(s){return O.prototype[P].apply(s,Array.prototype.slice.call(arguments,1));
};
},__bz:function(){var J=qx.lang.Generics.__bx;

for(var N in J){var L=window[N];
var K=J[N];

for(var i=0,l=K.length;i<l;i++){var M=K[i];

if(!L[M]){L[M]=qx.lang.Generics.__by(L,M);
}}}}},defer:function(Q){Q.__bz();
}});
})();
(function(){var f="qx.event.type.Data",e="qx.event.type.Event",d="qx.data.IListData";
qx.Interface.define(d,{events:{"change":f,"changeLength":e},members:{getItem:function(j){},setItem:function(b,c){},splice:function(g,h,i){},contains:function(a){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__fg=c;
this.__fh=d||b;
this.__fi=e===undefined?-1:e;
},members:{__fg:null,__fh:null,__fi:null,toString:function(){return this.__fg;
},getUri:function(){return this.__fh;
},getLineNumber:function(){return this.__fi;
}}});
})();
(function(){var c="qx.event.type.Event";
qx.Class.define(c,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(d,e){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!d;
this._cancelable=!!e;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(g){if(g){var h=g;
}else{var h=qx.event.Pool.getInstance().getObject(this.constructor);
}h._type=this._type;
h._target=this._target;
h._currentTarget=this._currentTarget;
h._relatedTarget=this._relatedTarget;
h._originalTarget=this._originalTarget;
h._stopPropagation=this._stopPropagation;
h._bubbles=this._bubbles;
h._preventDefault=this._preventDefault;
h._cancelable=this._cancelable;
return h;
},stop:function(){this.stopPropagation();
this.preventDefault();
},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(i){this._type=i;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(j){this._eventPhase=j;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(b){this._target=b;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(l){this._currentTarget=l;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(m){this._relatedTarget=m;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(a){this._originalTarget=a;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(k){this._bubbles=k;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(f){this._cancelable=f;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__bB:null,__bC:null,init:function(d,e,f){arguments.callee.base.call(this,false,f);
this.__bB=d;
this.__bC=e;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c.__bB=this.__bB;
c.__bC=this.__bC;
return c;
},getData:function(){return this.__bB;
},getOldData:function(){return this.__bC;
}},destruct:function(){this.__bB=this.__bC=null;
}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){arguments.callee.base.call(this);
this.__bD={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__bD:null,getObject:function(g){if(this.$$disposed){return;
}
if(!g){throw new Error("Class needs to be defined!");
}var h=null;
var j=this.__bD[g.classname];

if(j){h=j.pop();
}
if(h){h.$$pooled=false;
}else{h=new g;
}return h;
},poolObject:function(k){if(!this.__bD){return;
}var m=k.classname;
var n=this.__bD[m];

if(k.$$pooled){throw new Error("Object is already pooled: "+k);
}
if(!n){this.__bD[m]=n=[];
}if(n.length>this.getSize()){if(k.destroy){k.destroy();
}else{k.dispose();
}return;
}k.$$pooled=true;
n.push(k);
}},destruct:function(){var f=this.__bD;
var d,e,i,l;

for(d in f){e=f[d];

for(i=0,l=e.length;i<l;i++){e[i].dispose();
}}delete this.__bD;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(m){this._manager=m;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(j,event,k){return !event.getBubbles();
},dispatchEvent:function(c,event,d){var g,e;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var h=this._manager.getListeners(c,d,false);

if(h){for(var i=0,l=h.length;i<l;i++){var f=h[i].context||c;
h[i].handler.call(f,event);
}}}},defer:function(b){qx.event.Registration.addDispatcher(b);
}});
})();
(function(){var cK="get",cJ="",cI="[",cH="last",cG="change",cF="]",cE=".",cD="Number",cC="String",cB="set",da="deepBinding",cY="item",cX="reset",cW="' (",cV="Boolean",cU=") to the object '",cT="Integer",cS="qx.data.SingleValueBinding",cR="No event could be found for the property",cQ="Binding from '",cO="PositiveNumber",cP="PositiveInteger",cM="Binding does not exist!",cN=").",cL="Date";
qx.Class.define(cS,{statics:{DEBUG_ON:false,__bE:{},bind:function(bo,bp,bq,br,bs){var bC=this.__fe(bo,bp,bq,br,bs);
var bx=bp.split(cE);
var bu=this.__bL(bx);
var bB=[];
var by=[];
var bz=[];
var bv=[];
var bw=bo;
for(var i=0;i<bx.length;i++){if(bu[i]!==cJ){bv.push(cG);
}else{bv.push(this.__bG(bw,bx[i]));
}bB[i]=bw;
if(i==bx.length-1){if(bu[i]!==cJ){var bF=bu[i]===cH?bw.length-1:bu[i];
var bt=bw.getItem(bF);
this.__bK(bt,bq,br,bs,bo);
bz[i]=this.__bM(bw,bv[i],bq,br,bs,bu[i]);
}else{if(bx[i]!=null&&bw[cK+qx.lang.String.firstUp(bx[i])]!=null){var bt=bw[cK+qx.lang.String.firstUp(bx[i])]();
this.__bK(bt,bq,br,bs,bo);
}bz[i]=this.__bM(bw,bv[i],bq,br,bs);
}}else{var bD={index:i,propertyNames:bx,sources:bB,listenerIds:bz,arrayIndexValues:bu,targetObject:bq,targetPropertyChain:br,options:bs,listeners:by};
var bA=qx.lang.Function.bind(this.__bF,this,bD);
by.push(bA);
bz[i]=bw.addListener(bv[i],bA);
}if(bw[cK+qx.lang.String.firstUp(bx[i])]==null){bw=null;
}else if(bu[i]!==cJ){bw=bw[cK+qx.lang.String.firstUp(bx[i])](bu[i]);
}else{bw=bw[cK+qx.lang.String.firstUp(bx[i])]();
}
if(!bw){break;
}}var bE={type:da,listenerIds:bz,sources:bB,targetListenerIds:bC.listenerIds,targets:bC.targets};
this.__bN(bE,bo,bp,bq,br);
return bE;
},__bF:function(bG){if(bG.options&&bG.options.onUpdate){bG.options.onUpdate(bG.sources[bG.index],bG.targetObject);
}for(var j=bG.index+1;j<bG.propertyNames.length;j++){var bK=bG.sources[j];
bG.sources[j]=null;

if(!bK){continue;
}bK.removeListenerById(bG.listenerIds[j]);
}var bK=bG.sources[bG.index];
for(var j=bG.index+1;j<bG.propertyNames.length;j++){if(bG.arrayIndexValues[j-1]!==cJ){bK=bK[cK+qx.lang.String.firstUp(bG.propertyNames[j-1])](bG.arrayIndexValues[j-1]);
}else{bK=bK[cK+qx.lang.String.firstUp(bG.propertyNames[j-1])]();
}bG.sources[j]=bK;
if(!bK){this.__bH(bG.targetObject,bG.targetPropertyChain);
break;
}if(j==bG.propertyNames.length-1){if(qx.Class.implementsInterface(bK,qx.data.IListData)){var bL=bG.arrayIndexValues[j]===cH?bK.length-1:bG.arrayIndexValues[j];
var bI=bK.getItem(bL);
this.__bK(bI,bG.targetObject,bG.targetPropertyChain,bG.options,bG.sources[bG.index]);
bG.listenerIds[j]=this.__bM(bK,cG,bG.targetObject,bG.targetPropertyChain,bG.options,bG.arrayIndexValues[j]);
}else{if(bG.propertyNames[j]!=null&&bK[cK+qx.lang.String.firstUp(bG.propertyNames[j])]!=null){var bI=bK[cK+qx.lang.String.firstUp(bG.propertyNames[j])]();
this.__bK(bI,bG.targetObject,bG.targetPropertyChain,bG.options,bG.sources[bG.index]);
}var bJ=this.__bG(bK,bG.propertyNames[j]);
bG.listenerIds[j]=this.__bM(bK,bJ,bG.targetObject,bG.targetPropertyChain,bG.options);
}}else{if(bG.listeners[j]==null){var bH=qx.lang.Function.bind(this.__bF,this,bG);
bG.listeners.push(bH);
}if(qx.Class.implementsInterface(bK,qx.data.IListData)){var bJ=cG;
}else{var bJ=this.__bG(bK,bG.propertyNames[j]);
}bG.listenerIds[j]=bK.addListener(bJ,bG.listeners[j]);
}}},__fe:function(bO,bP,bQ,bR,bS){var bW=bR.split(cE);
var bU=this.__bL(bW);
var cc=[];
var cb=[];
var bY=[];
var bX=[];
var bV=bQ;
for(var i=0;i<bW.length-1;i++){if(bU[i]!==cJ){bX.push(cG);
}else{try{bX.push(this.__bG(bV,bW[i]));
}catch(e){break;
}}cc[i]=bV;
var ca=function(){for(var j=i+1;j<bW.length-1;j++){var cw=cc[j];
cc[j]=null;

if(!cw){continue;
}cw.removeListenerById(bY[j]);
}var cw=cc[i];
for(var j=i+1;j<bW.length-1;j++){var cu=qx.lang.String.firstUp(bW[j-1]);
if(bU[j-1]!==cJ){var cx=bU[j-1]===cH?cw.getLength()-1:bU[j-1];
cw=cw[cK+cu](cx);
}else{cw=cw[cK+cu]();
}cc[j]=cw;
if(cb[j]==null){cb.push(ca);
}if(qx.Class.implementsInterface(cw,qx.data.IListData)){var cv=cG;
}else{try{var cv=qx.data.SingleValueBinding.__bG(cw,bW[j]);
}catch(e){break;
}}bY[j]=cw.addListener(cv,cb[j]);
}qx.data.SingleValueBinding.__ff(bO,bP,bQ,bR);
};
cb.push(ca);
bY[i]=bV.addListener(bX[i],ca);
var bT=qx.lang.String.firstUp(bW[i]);
if(bV[cK+bT]==null){bV=null;
}else if(bU[i]!==cJ){bV=bV[cK+bT](bU[i]);
}else{bV=bV[cK+bT]();
}
if(!bV){break;
}}return {listenerIds:bY,targets:cc};
},__ff:function(ck,cl,cm,cn){var cr=this.__bJ(ck,cl);

if(cr!=null){var ct=cl.substring(cl.lastIndexOf(cE)+1,cl.length);
if(ct.charAt(ct.length-1)==cF){var co=ct.substring(ct.lastIndexOf(cI)+1,ct.length-1);
var cq=ct.substring(0,ct.lastIndexOf(cI));
var cs=cr[cK+qx.lang.String.firstUp(cq)]();

if(co==cH){co=cs.length-1;
}
if(cs!=null){var cp=cs.getItem(co);
}}else{var cp=cr[cK+qx.lang.String.firstUp(ct)]();
}}this.__bI(cm,cn,cp);
},__bG:function(bc,bd){var be=this.__bP(bc,bd);
if(be==null){if(qx.Class.supportsEvent(bc.constructor,bd)){be=bd;
}else if(qx.Class.supportsEvent(bc.constructor,cG+qx.lang.String.firstUp(bd))){be=cG+qx.lang.String.firstUp(bd);
}else{throw new qx.core.AssertionError(cR,bd);
}}return be;
},__bH:function(d,f){var g=this.__bJ(d,f);

if(g!=null){var h=f.substring(f.lastIndexOf(cE)+1,f.length);
if(h.charAt(h.length-1)==cF){this.__bI(d,f,null);
return;
}if(g[cX+qx.lang.String.firstUp(h)]!=undefined){g[cX+qx.lang.String.firstUp(h)]();
}else{g[cB+qx.lang.String.firstUp(h)](null);
}}},__bI:function(O,P,Q){var U=this.__bJ(O,P);

if(U!=null){var V=P.substring(P.lastIndexOf(cE)+1,P.length);
if(V.charAt(V.length-1)==cF){var R=V.substring(V.lastIndexOf(cI)+1,V.length-1);
var T=V.substring(0,V.lastIndexOf(cI));
var S=U[cK+qx.lang.String.firstUp(T)]();

if(R==cH){R=S.length-1;
}
if(S!=null){S.setItem(R,Q);
}}else{U[cB+qx.lang.String.firstUp(V)](Q);
}}},__bJ:function(m,n){var q=n.split(cE);
var r=m;
for(var i=0;i<q.length-1;i++){try{var p=q[i];
if(p.indexOf(cF)==p.length-1){var o=p.substring(p.indexOf(cI)+1,p.length-1);
p=p.substring(0,p.indexOf(cI));
}r=r[cK+qx.lang.String.firstUp(p)]();

if(o!=null){if(o==cH){o=r.length-1;
}r=r.getItem(o);
o=null;
}}catch(s){return null;
}}return r;
},__bK:function(W,X,Y,ba,bb){W=this.__bO(W,X,Y,ba);
if(W==null){this.__bH(X,Y);
}if(W!=undefined){try{this.__bI(X,Y,W);
if(ba&&ba.onUpdate){ba.onUpdate(bb,X,W);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(ba&&ba.onSetFail){ba.onSetFail(e);
}else{this.warn("Failed so set value "+W+" on "+X+". Error message: "+e);
}}}},__bL:function(a){var b=[];
for(var i=0;i<a.length;i++){var name=a[i];
if(qx.lang.String.endsWith(name,cF)){var c=name.substring(name.indexOf(cI)+1,name.indexOf(cF));
if(name.indexOf(cF)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(c!==cH){if(c==cJ||isNaN(parseInt(c))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(cI)!=0){a[i]=name.substring(0,name.indexOf(cI));
b[i]=cJ;
b[i+1]=c;
a.splice(i+1,0,cY);
i++;
}else{b[i]=c;
a.splice(i,1,cY);
}}else{b[i]=cJ;
}}return b;
},__bM:function(F,G,H,I,J,K){var L;
{};
var N=function(bf,e){if(bf!==cJ){if(bf===cH){bf=F.length-1;
}var bi=F.getItem(bf);
if(bi==undefined){qx.data.SingleValueBinding.__bH(H,I);
}var bg=e.getData().start;
var bh=e.getData().end;

if(bf<bg||bf>bh){return;
}}else{var bi=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+F+" by "+G+" to "+H+" ("+I+")");
qx.log.Logger.debug("Data before conversion: "+bi);
}bi=qx.data.SingleValueBinding.__bO(bi,H,I,J);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+bi);
}try{if(bi!=undefined){qx.data.SingleValueBinding.__bI(H,I,bi);
}else{qx.data.SingleValueBinding.__bH(H,I);
}if(J&&J.onUpdate){J.onUpdate(F,H,bi);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(J&&J.onSetFail){J.onSetFail(e);
}else{this.warn("Failed so set value "+bi+" on "+H+". Error message: "+e);
}}};
if(!K){K=cJ;
}N=qx.lang.Function.bind(N,F,K);
var M=F.addListener(G,N);
return M;
},__bN:function(cf,cg,ch,ci,cj){if(this.__bE[cg.toHashCode()]===undefined){this.__bE[cg.toHashCode()]=[];
}this.__bE[cg.toHashCode()].push([cf,cg,ch,ci,cj]);
},__bO:function(t,u,v,w){if(w&&w.converter){var y;

if(u.getModel){y=u.getModel();
}return w.converter(t,y);
}else{var A=this.__bJ(u,v);
var B=v.substring(v.lastIndexOf(cE)+1,v.length);
if(A==null){return t;
}var z=qx.Class.getPropertyDefinition(A.constructor,B);
var x=z==null?cJ:z.check;
return this.__bQ(t,x);
}},__bP:function(cy,cz){var cA=qx.Class.getPropertyDefinition(cy.constructor,cz);

if(cA==null){return null;
}return cA.event;
},__bQ:function(C,D){var E=qx.lang.Type.getClass(C);
if((E==cD||E==cC)&&(D==cT||D==cP)){C=parseInt(C);
}if((E==cV||E==cD||E==cL)&&D==cC){C=C+cJ;
}if((E==cD||E==cC)&&(D==cD||D==cO)){C=parseFloat(C);
}return C;
},removeBindingFromObject:function(db,dc){if(dc.type==da){for(var i=0;i<dc.sources.length;i++){if(dc.sources[i]){dc.sources[i].removeListenerById(dc.listenerIds[i]);
}}for(var i=0;i<dc.targets.length;i++){if(dc.targets[i]){dc.targets[i].removeListenerById(dc.targetListenerIds[i]);
}}}else{db.removeListenerById(dc);
}var dd=this.__bE[db.toHashCode()];
if(dd!=undefined){for(var i=0;i<dd.length;i++){if(dd[i][0]==dc){qx.lang.Array.remove(dd,dd[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cd){{};
var ce=this.__bE[cd.toHashCode()];

if(ce!=undefined){for(var i=ce.length-1;i>=0;i--){this.removeBindingFromObject(cd,ce[i][0]);
}}},getAllBindingsForObject:function(bj){if(this.__bE[bj.toHashCode()]===undefined){this.__bE[bj.toHashCode()]=[];
}return this.__bE[bj.toHashCode()];
},removeAllBindings:function(){for(var l in this.__bE){var k=qx.core.ObjectRegistry.fromHashCode(l);
if(k==null){delete this.__bE[l];
continue;
}this.removeAllBindingsForObject(k);
}this.__bE={};
},getAllBindings:function(){return this.__bE;
},showBindingInLog:function(bk,bl){var bn;
for(var i=0;i<this.__bE[bk.toHashCode()].length;i++){if(this.__bE[bk.toHashCode()][i][0]==bl){bn=this.__bE[bk.toHashCode()][i];
break;
}}
if(bn===undefined){var bm=cM;
}else{var bm=cQ+bn[1]+cW+bn[2]+cU+bn[3]+cW+bn[4]+cN;
}qx.log.Logger.debug(bm);
},showAllBindingsInLog:function(){for(var bN in this.__bE){var bM=qx.core.ObjectRegistry.fromHashCode(bN);

for(var i=0;i<this.__bE[bN].length;i++){this.showBindingInLog(bM,this.__bE[bN][i][0]);
}}}}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bR=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bR:null,message:null,getComment:function(){return this.__bR;
},toString:function(){return this.__bR+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__bT=qx.dev.StackTrace.getStackTrace();
},members:{__bT:null,getStackTrace:function(){return this.__bT;
}}});
})();
(function(){var S=":",R="qx.client",Q="anonymous",P="...",O="qx.dev.StackTrace",N="",M="\n",L="/source/class/",K=".";
qx.Bootstrap.define(O,{statics:{getStackTrace:qx.core.Variant.select(R,{"gecko":function(){try{throw new Error();
}catch(q){var C=this.getStackTraceFromError(q);
qx.lang.Array.removeAt(C,0);
var A=this.getStackTraceFromCaller(arguments);
var y=A.length>C.length?A:C;

for(var i=0;i<Math.min(A.length,C.length);i++){var z=A[i];

if(z.indexOf(Q)>=0){continue;
}var G=z.split(S);

if(G.length!=2){continue;
}var E=G[0];
var x=G[1];
var w=C[i];
var H=w.split(S);
var D=H[0];
var v=H[1];

if(qx.Class.getByName(D)){var B=D;
}else{B=E;
}var F=B+S;

if(x){F+=x+S;
}F+=v;
y[i]=F;
}return y;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var I;

try{I.bar();
}catch(T){var J=this.getStackTraceFromError(T);
qx.lang.Array.removeAt(J,0);
return J;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(R,{"opera":function(p){return [];
},"default":function(j){var o=[];
var n=qx.lang.Function.getCaller(j);
var k={};

while(n){var l=qx.lang.Function.getName(n);
o.push(l);

try{n=n.caller;
}catch(a){break;
}
if(!n){break;
}var m=qx.core.ObjectRegistry.toHashCode(n);

if(k[m]){o.push(P);
break;
}k[m]=n;
}return o;
}}),getStackTraceFromError:qx.core.Variant.select(R,{"gecko":function(b){if(!b.stack){return [];
}var h=/@(.+):(\d+)$/gm;
var c;
var d=[];

while((c=h.exec(b.stack))!=null){var e=c[1];
var g=c[2];
var f=this.__bA(e);
d.push(f+S+g);
}return d;
},"webkit":function(bc){if(bc.sourceURL&&bc.line){return [this.__bA(bc.sourceURL)+S+bc.line];
}else{return [];
}},"opera":function(U){if(U.message.indexOf("Backtrace:")<0){return [];
}var W=[];
var X=qx.lang.String.trim(U.message.split("Backtrace:")[1]);
var Y=X.split(M);

for(var i=0;i<Y.length;i++){var V=Y[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(V&&V.length>=2){var bb=V[1];
var ba=this.__bA(V[2]);
W.push(ba+S+bb);
}}return W;
},"default":function(){return [];
}}),__bA:function(r){var u=L;
var s=r.indexOf(u);
var t=(s==-1)?r:r.substring(s+u.length).replace(/\//g,K).replace(/\.js$/,N);
return t;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var b="qx.event.handler.Object";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(f,g){return qx.Class.supportsEvent(f.constructor,g);
},registerEvent:function(h,i,j){},unregisterEvent:function(c,d,e){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var q="Don't use 'disposeFields' - instead assign directly to 'null'",p="qx.util.DisposeUtil";
qx.Class.define(p,{statics:{disposeFields:function(a,b){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
var name;

for(var i=0,l=b.length;i<l;i++){var name=b[i];

if(a[name]==null||!a.hasOwnProperty(name)){continue;
}a[name]=null;
}},disposeObjects:function(n,o){var name;

for(var i=0,l=o.length;i<l;i++){name=o[i];

if(n[name]==null||!n.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(n[name].dispose){n[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}n[name]=null;
}},disposeArray:function(h,j){var m=h[j];

if(!m){return;
}if(qx.core.ObjectRegistry.inShutDown){h[j]=null;
return;
}try{var k;

for(var i=m.length-1;i>=0;i--){k=m[i];

if(k){k.dispose();
}}}catch(g){throw new Error("The array field: "+j+" of object: "+h+" has non disposable entries: "+g);
}m.length=0;
h[j]=null;
},disposeMap:function(r,s){var t=r[s];

if(!t){return;
}if(qx.core.ObjectRegistry.inShutDown){r[s]=null;
return;
}try{for(var u in t){if(t.hasOwnProperty(u)){t[u].dispose();
}}}catch(f){throw new Error("The map field: "+s+" of object: "+r+" has non disposable entries: "+f);
}r[s]=null;
},disposeTriggeredBy:function(c,d){var e=d.dispose;
d.dispose=function(){e.call(d);
c.dispose();
};
}}});
})();
(function(){var c="abstract",b="qx.event.dispatch.AbstractBubbling";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:c,construct:function(a){this._manager=a;
},members:{_getParent:function(x){throw new Error("Missing implementation");
},canDispatchEvent:function(v,event,w){return event.getBubbles();
},dispatchEvent:function(d,event,e){var parent=d;
var p=this._manager;
var m,t;
var k;
var o,r;
var q;
var s=[];
m=p.getListeners(d,e,true);
t=p.getListeners(d,e,false);

if(m){s.push(m);
}
if(t){s.push(t);
}var parent=this._getParent(d);
var g=[];
var f=[];
var h=[];
var n=[];
while(parent!=null){m=p.getListeners(parent,e,true);

if(m){h.push(m);
n.push(parent);
}t=p.getListeners(parent,e,false);

if(t){g.push(t);
f.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=h.length-1;i>=0;i--){q=n[i];
event.setCurrentTarget(q);
k=h[i];

for(var j=0,l=k.length;j<l;j++){o=k[j];
r=o.context||q;
o.handler.call(r,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(d);

for(var i=0,u=s.length;i<u;i++){k=s[i];

for(var j=0,l=k.length;j<l;j++){o=k[j];
r=o.context||d;
o.handler.call(r,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,u=g.length;i<u;i++){q=f[i];
event.setCurrentTarget(q);
k=g[i];

for(var j=0,l=k.length;j<l;j++){o=k[j];
r=o.context||q;
o.handler.call(r,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(d){return d.parentNode;
},canDispatchEvent:function(b,event,c){return b.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var e="qx.event.handler.UserAction";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){arguments.callee.base.call(this);
this.__bU=f;
this.__bV=f.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__bU:null,__bV:null,canHandleEvent:function(g,h){},registerEvent:function(b,c,d){},unregisterEvent:function(i,j,k){}},destruct:function(){this.__bU=this.__bV=null;
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var O="keydown",N="qx.client",M="keypress",L="NumLock",K="keyup",J="Enter",I="0",H="9",G="-",F="PageUp",bV="+",bU="PrintScreen",bT="gecko",bS="A",bR="Z",bQ="Left",bP="F5",bO="Down",bN="Up",bM="F11",V="F6",W="useraction",T="F3",U="keyinput",R="Insert",S="F8",P="End",Q="/",be="Delete",bf="*",br="F1",bn="F4",bz="Home",bu="F2",bI="F12",bE="PageDown",bj="F7",bL="F9",bK="F10",bJ="Right",bi="text",bl="Escape",bm="webkit",bp="5",bs="3",bv="Meta",bB="7",bG="CapsLock",X="input",Y="Control",bk="Space",by="Tab",bx="Shift",bw="Pause",bD="Unidentified",bC="qx.event.handler.Keyboard",bt="mshtml",bA="mshtml|webkit",C="6",bF="off",ba="Apps",bb="4",bo="Alt",D="2",E="Scroll",bh="1",bc="8",bd="Win",bg="autoComplete",bq=",",bH="Backspace";
qx.Class.define(bC,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(ct){arguments.callee.base.call(this);
this.__bW=ct;
this.__bX=ct.getWindow();
if(qx.core.Variant.isSet(N,bT)){this.__bY=this.__bX;
}else{this.__bY=this.__bX.document.documentElement;
}this.__ca={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cu){if(this._identifierToKeyCodeMap[cu]){return true;
}
if(cu.length!=1){return false;
}
if(cu>=I&&cu<=H){return true;
}
if(cu>=bS&&cu<=bR){return true;
}
switch(cu){case bV:case G:case bf:case Q:return true;
default:return false;
}}},members:{__cb:null,__bW:null,__bX:null,__bY:null,__ca:null,__fm:null,__cf:null,__cc:null,canHandleEvent:function(p,q){},registerEvent:function(cn,co,cp){},unregisterEvent:function(e,f,g){},_fireInputEvent:function(cv,cw){var cx=this.__fn();
if(cx&&cx.offsetWidth!=0){var event=qx.event.Registration.createEvent(U,qx.event.type.KeyInput,[cv,cx,cw]);
this.__bW.dispatchEvent(cx,event);
}if(this.__bX){qx.event.Registration.fireEvent(this.__bX,W,qx.event.type.Data,[U]);
}},_fireSequenceEvent:function(h,i,j){var k=this.__fn();
var l=h.keyCode;
var event=qx.event.Registration.createEvent(i,qx.event.type.KeySequence,[h,k,j]);
this.__bW.dispatchEvent(k,event);
if(qx.core.Variant.isSet(N,bA)){if(i==O&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(l)&&!this._emulateKeyPress[l]){this._fireSequenceEvent(h,M,j);
}}}if(this.__bX){qx.event.Registration.fireEvent(this.__bX,W,qx.event.type.Data,[i]);
}},__fn:function(){var bW=this.__bW.getHandler(qx.event.handler.Focus);
var bX=bW.getActive();
if(!bX||bX.offsetWidth==0){bX=bW.getFocus();
}if(!bX||bX.offsetWidth==0){bX=this.__bW.getWindow().document.body;
}return bX;
},_initKeyObserver:function(){this.__cb=qx.lang.Function.listener(this.__cd,this);
this.__cc=qx.lang.Function.listener(this.__cg,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__bY,K,this.__cb);
Event.addNativeListener(this.__bY,O,this.__cb);
Event.addNativeListener(this.__bY,M,this.__cc);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__bY,K,this.__cb);
Event.removeNativeListener(this.__bY,O,this.__cb);
Event.removeNativeListener(this.__bY,M,this.__cc);

for(var b in (this.__cf||{})){var a=this.__cf[b];
Event.removeNativeListener(a.target,M,a.callback);
}delete (this.__cf);
},__cd:qx.event.GlobalError.observeMethod(qx.core.Variant.select(N,{"mshtml":function(ci){ci=window.event||ci;
var cl=ci.keyCode;
var cj=0;
var ck=ci.type;
if(!(this.__ca[cl]==O&&ck==O)){this._idealKeyHandler(cl,cj,ck,ci);
}if(ck==O){if(this._isNonPrintableKeyCode(cl)||this._emulateKeyPress[cl]){this._idealKeyHandler(cl,cj,M,ci);
}}this.__ca[cl]=ck;
},"gecko":function(cd){var ch=this._keyCodeFix[cd.keyCode]||cd.keyCode;
var cf=0;
var cg=cd.type;
if(qx.bom.client.Platform.WIN){var ce=ch?this._keyCodeToIdentifier(ch):this._charCodeToIdentifier(cf);

if(!(this.__ca[ce]==O&&cg==O)){this._idealKeyHandler(ch,cf,cg,cd);
}this.__ca[ce]=cg;
}else{this._idealKeyHandler(ch,cf,cg,cd);
}this.__ce(cd.target,cg,ch);
},"webkit":function(cC){var cF=0;
var cD=0;
var cE=cC.type;
if(qx.bom.client.Engine.VERSION<525.13){if(cE==K||cE==O){cF=this._charCode2KeyCode[cC.charCode]||cC.keyCode;
}else{if(this._charCode2KeyCode[cC.charCode]){cF=this._charCode2KeyCode[cC.charCode];
}else{cD=cC.charCode;
}}this._idealKeyHandler(cF,cD,cE,cC);
}else{cF=cC.keyCode;
if(!(this.__ca[cF]==O&&cE==O)){this._idealKeyHandler(cF,cD,cE,cC);
}if(cE==O){if(this._isNonPrintableKeyCode(cF)||this._emulateKeyPress[cF]){this._idealKeyHandler(cF,cD,M,cC);
}}this.__ca[cF]=cE;
}},"opera":function(cm){this.__fm=cm.keyCode;
this._idealKeyHandler(cm.keyCode,0,cm.type,cm);
}})),__ce:qx.core.Variant.select(N,{"gecko":function(x,y,z){if(y===O&&(z==33||z==34||z==38||z==40)&&x.type==bi&&x.tagName.toLowerCase()===X&&x.getAttribute(bg)!==bF){if(!this.__cf){this.__cf={};
}var B=qx.core.ObjectRegistry.toHashCode(x);

if(this.__cf[B]){return;
}var self=this;
this.__cf[B]={target:x,callback:function(d){qx.bom.Event.stopPropagation(d);
self.__cg(d);
}};
var A=qx.event.GlobalError.observeMethod(this.__cf[B].callback);
qx.bom.Event.addNativeListener(x,M,A);
}},"default":null}),__cg:qx.event.GlobalError.observeMethod(qx.core.Variant.select(N,{"mshtml":function(c){c=window.event||c;

if(this._charCode2KeyCode[c.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[c.keyCode],0,c.type,c);
}else{this._idealKeyHandler(0,c.keyCode,c.type,c);
}},"gecko":function(bY){var cc=this._keyCodeFix[bY.keyCode]||bY.keyCode;
var ca=bY.charCode;
var cb=bY.type;
this._idealKeyHandler(cc,ca,cb,bY);
},"webkit":function(cy){if(qx.bom.client.Engine.VERSION<525.13){var cB=0;
var cz=0;
var cA=cy.type;

if(cA==K||cA==O){cB=this._charCode2KeyCode[cy.charCode]||cy.keyCode;
}else{if(this._charCode2KeyCode[cy.charCode]){cB=this._charCode2KeyCode[cy.charCode];
}else{cz=cy.charCode;
}}this._idealKeyHandler(cB,cz,cA,cy);
}else{if(this._charCode2KeyCode[cy.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cy.keyCode],0,cy.type,cy);
}else{this._idealKeyHandler(0,cy.keyCode,cy.type,cy);
}}},"opera":function(m){var o=m.keyCode;
var n=m.type;
if(o!=this.__fm){this._idealKeyHandler(0,this.__fm,n,m);
}else{if(this._keyCodeToIdentifierMap[m.keyCode]){this._idealKeyHandler(m.keyCode,0,m.type,m);
}else{this._idealKeyHandler(0,m.keyCode,m.type,m);
}}}})),_idealKeyHandler:function(cH,cI,cJ,cK){var cL;
if(cH||(!cH&&!cI)){cL=this._keyCodeToIdentifier(cH);
this._fireSequenceEvent(cK,cJ,cL);
}else{cL=this._charCodeToIdentifier(cI);
this._fireSequenceEvent(cK,M,cL);
this._fireInputEvent(cK,cI);
}},_specialCharCodeMap:{8:bH,9:by,13:J,27:bl,32:bk},_emulateKeyPress:qx.core.Variant.select(N,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bx,17:Y,18:bo,20:bG,224:bv,37:bQ,38:bN,39:bJ,40:bO,33:F,34:bE,35:P,36:bz,45:R,46:be,112:br,113:bu,114:T,115:bn,116:bP,117:V,118:bj,119:S,120:bL,121:bK,122:bM,123:bI,144:L,44:bU,145:E,19:bw,91:bd,93:ba},_numpadToCharCode:{96:I.charCodeAt(0),97:bh.charCodeAt(0),98:D.charCodeAt(0),99:bs.charCodeAt(0),100:bb.charCodeAt(0),101:bp.charCodeAt(0),102:C.charCodeAt(0),103:bB.charCodeAt(0),104:bc.charCodeAt(0),105:H.charCodeAt(0),106:bf.charCodeAt(0),107:bV.charCodeAt(0),109:G.charCodeAt(0),110:bq.charCodeAt(0),111:Q.charCodeAt(0)},_charCodeA:bS.charCodeAt(0),_charCodeZ:bR.charCodeAt(0),_charCode0:I.charCodeAt(0),_charCode9:H.charCodeAt(0),_isNonPrintableKeyCode:function(cs){return this._keyCodeToIdentifierMap[cs]?true:false;
},_isIdentifiableKeyCode:function(cr){if(cr>=this._charCodeA&&cr<=this._charCodeZ){return true;
}if(cr>=this._charCode0&&cr<=this._charCode9){return true;
}if(this._specialCharCodeMap[cr]){return true;
}if(this._numpadToCharCode[cr]){return true;
}if(this._isNonPrintableKeyCode(cr)){return true;
}return false;
},_keyCodeToIdentifier:function(r){if(this._isIdentifiableKeyCode(r)){var s=this._numpadToCharCode[r];

if(s){return String.fromCharCode(s);
}return (this._keyCodeToIdentifierMap[r]||this._specialCharCodeMap[r]||String.fromCharCode(r));
}else{return bD;
}},_charCodeToIdentifier:function(cq){return this._specialCharCodeMap[cq]||String.fromCharCode(cq).toUpperCase();
},_identifierToKeyCode:function(cG){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cG]||cG.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__fm=this.__bW=this.__bX=this.__bY=this.__ca=null;
},defer:function(t,u,v){qx.event.Registration.addHandler(t);
if(!t._identifierToKeyCodeMap){t._identifierToKeyCodeMap={};

for(var w in u._keyCodeToIdentifierMap){t._identifierToKeyCodeMap[u._keyCodeToIdentifierMap[w]]=parseInt(w,10);
}
for(var w in u._specialCharCodeMap){t._identifierToKeyCodeMap[u._specialCharCodeMap[w]]=parseInt(w,10);
}}
if(qx.core.Variant.isSet(N,bt)){u._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(N,bT)){u._keyCodeFix={12:u._identifierToKeyCode(L)};
}else if(qx.core.Variant.isSet(N,bm)){if(qx.bom.client.Engine.VERSION<525.13){u._charCode2KeyCode={63289:u._identifierToKeyCode(L),63276:u._identifierToKeyCode(F),63277:u._identifierToKeyCode(bE),63275:u._identifierToKeyCode(P),63273:u._identifierToKeyCode(bz),63234:u._identifierToKeyCode(bQ),63232:u._identifierToKeyCode(bN),63235:u._identifierToKeyCode(bJ),63233:u._identifierToKeyCode(bO),63272:u._identifierToKeyCode(be),63302:u._identifierToKeyCode(R),63236:u._identifierToKeyCode(br),63237:u._identifierToKeyCode(bu),63238:u._identifierToKeyCode(T),63239:u._identifierToKeyCode(bn),63240:u._identifierToKeyCode(bP),63241:u._identifierToKeyCode(V),63242:u._identifierToKeyCode(bj),63243:u._identifierToKeyCode(S),63244:u._identifierToKeyCode(bL),63245:u._identifierToKeyCode(bK),63246:u._identifierToKeyCode(bM),63247:u._identifierToKeyCode(bI),63248:u._identifierToKeyCode(bU),3:u._identifierToKeyCode(J),12:u._identifierToKeyCode(L),13:u._identifierToKeyCode(J)};
}else{u._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Bootstrap.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__du:function(){var o=navigator.platform;
if(o==null||o===k){o=navigator.userAgent;
}
if(o.indexOf(e)!=-1||o.indexOf(l)!=-1||o.indexOf(j)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(g)!=-1||o.indexOf(b)!=-1||o.indexOf(c)!=-1||o.indexOf(m)!=-1||o.indexOf(f)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(a)!=-1||o.indexOf(i)!=-1||o.indexOf(h)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(n){n.__du();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Bootstrap.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__dv:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__dw:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__dv){K.push(J);
}var M=new RegExp(l+K.join(C).replace(/\./g,r)+H,u);

if(!M.test(L)){this.UNKNOWN_SYSTEM=true;

if(!qx.bom.client.Platform.UNKNOWN_PLATFORM){if(qx.bom.client.Platform.UNIX){this.NAME="linux";
this.LINUX=true;
}else if(qx.bom.client.Platform.MAC){this.NAME="osx5";
this.OSX=true;
}else{this.NAME="winxp";
this.WINXP=true;
}}else{this.NAME="winxp";
this.WINXP=true;
}return;
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(w).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__dv[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(I){I.__dw();
}});
})();
(function(){var T="qx.client",S="mouseup",R="click",Q="mousedown",P="contextmenu",O="mousewheel",N="dblclick",M="mshtml",L="mouseover",K="mouseout",F="DOMMouseScroll",J="mousemove",I="on",E="mshtml|webkit|opera",D="useraction",H="gecko|webkit",G="qx.event.handler.Mouse";
qx.Class.define(G,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(V){arguments.callee.base.call(this);
this.__ch=V;
this.__ci=V.getWindow();
this.__cj=this.__ci.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__ck:null,__cl:null,__cm:null,__cn:null,__co:null,__ch:null,__ci:null,__cj:null,canHandleEvent:function(f,g){},registerEvent:qx.bom.client.System.IPHONE?
function(A,B,C){A[I+B]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(c,d,e){c[I+d]=undefined;
}:qx.lang.Function.returnNull,__cp:function(r,s,t){if(!t){t=r.target||r.srcElement;
}if(t&&t.nodeType){qx.event.Registration.fireEvent(t,s||r.type,s==O?qx.event.type.MouseWheel:qx.event.type.Mouse,[r,t,null,true,true]);
}qx.event.Registration.fireEvent(this.__ci,D,qx.event.type.Data,[s||r.type]);
},_initButtonObserver:function(){this.__ck=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cj,Q,this.__ck);
Event.addNativeListener(this.__cj,S,this.__ck);
Event.addNativeListener(this.__cj,R,this.__ck);
Event.addNativeListener(this.__cj,N,this.__ck);
Event.addNativeListener(this.__cj,P,this.__ck);
},_initMoveObserver:function(){this.__cl=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cj,J,this.__cl);
Event.addNativeListener(this.__cj,L,this.__cl);
Event.addNativeListener(this.__cj,K,this.__cl);
},_initWheelObserver:function(){this.__cm=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var a=qx.core.Variant.isSet(T,E)?O:F;
var b=qx.core.Variant.isSet(T,M)?this.__cj:this.__ci;
Event.addNativeListener(b,a,this.__cm);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cj,Q,this.__ck);
Event.removeNativeListener(this.__cj,S,this.__ck);
Event.removeNativeListener(this.__cj,R,this.__ck);
Event.removeNativeListener(this.__cj,N,this.__ck);
Event.removeNativeListener(this.__cj,P,this.__ck);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cj,J,this.__cl);
Event.removeNativeListener(this.__cj,L,this.__cl);
Event.removeNativeListener(this.__cj,K,this.__cl);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var u=qx.core.Variant.isSet(T,E)?O:F;
var v=qx.core.Variant.isSet(T,M)?this.__cj:this.__ci;
Event.removeNativeListener(v,u,this.__cm);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(z){this.__cp(z);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(o){var p=o.type;
var q=o.target||o.srcElement;
if(qx.core.Variant.isSet(T,H)){if(q&&q.nodeType==3){q=q.parentNode;
}}
if(this.__cq){this.__cq(o,p,q);
}
if(this.__cs){this.__cs(o,p,q);
}this.__cp(o,p,q);

if(this.__cr){this.__cr(o,p,q);
}
if(this.__ct){this.__ct(o,p,q);
}this.__cn=p;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(k){this.__cp(k,O);
}),__cq:qx.core.Variant.select(T,{"webkit":function(h,i,j){if(qx.bom.client.Engine.VERSION<530){if(i==P){this.__cp(h,S,j);
}}},"default":null}),__cr:qx.core.Variant.select(T,{"opera":function(l,m,n){if(m==S&&l.button==2){this.__cp(l,P,n);
}},"default":null}),__cs:qx.core.Variant.select(T,{"mshtml":function(w,x,y){if(x==S&&this.__cn==R){this.__cp(w,Q,y);
}else if(x==N){this.__cp(w,R,y);
}},"default":null}),__ct:qx.core.Variant.select(T,{"mshtml":null,"default":function(W,X,Y){switch(X){case Q:this.__co=Y;
break;
case S:if(Y!==this.__co){var ba=qx.dom.Hierarchy.getCommonParent(Y,this.__co);
this.__cp(W,R,ba);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__ch=this.__ci=this.__cj=this.__co=null;
},defer:function(U){qx.event.Registration.addHandler(U);
}});
})();
(function(){var f="qx.event.handler.Capture";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(d,e){},registerEvent:function(g,h,i){},unregisterEvent:function(a,b,c){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var M="alias",L="copy",K="blur",J="mouseout",I="keydown",H="Ctrl",G="Shift",F="mousemove",E="move",D="mouseover",bd="Alt",bc="keyup",bb="mouseup",ba="dragend",Y="on",X="mousedown",W="qxDraggable",V="drag",U="drop",T="qxDroppable",R="qx.event.handler.DragDrop",S="droprequest",P="dragstart",Q="dragchange",N="dragleave",O="dragover";
qx.Class.define(R,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){arguments.callee.base.call(this);
this.__cu=h;
this.__cv=h.getWindow().document.documentElement;
this.__cu.addListener(this.__cv,X,this._onMouseDown,this);
this.__cx();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__cu:null,__cv:null,__cM:null,__cI:null,__cy:null,__cz:null,__cA:null,__cB:null,__cw:null,__cD:null,__cK:false,__cN:0,__cO:0,canHandleEvent:function(n,o){},registerEvent:function(bf,bg,bh){},unregisterEvent:function(a,b,c){},addType:function(bk){this.__cy[bk]=true;
},addAction:function(C){this.__cz[C]=true;
},supportsType:function(bj){return !!this.__cy[bj];
},supportsAction:function(k){return !!this.__cz[k];
},getData:function(g){if(!this.__cL||!this.__cM){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__cy[g]){throw new Error("Unsupported data type: "+g+"!");
}
if(!this.__cB[g]){this.__cw=g;
this.__cE(S,this.__cI,this.__cM,false);
}
if(!this.__cB[g]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__cB[g]||null;
},getCurrentAction:function(){return this.__cD;
},addData:function(d,f){this.__cB[d]=f;
},getCurrentType:function(){return this.__cw;
},__cx:function(){this.__cy={};
this.__cz={};
this.__cA={};
this.__cB={};
},__cC:function(){var r=this.__cz;
var p=this.__cA;
var q=null;

if(this.__cL){if(p.Shift&&p.Ctrl&&r.alias){q=M;
}else if(p.Shift&&p.Alt&&r.copy){q=L;
}else if(p.Shift&&r.move){q=E;
}else if(p.Alt&&r.alias){q=M;
}else if(p.Ctrl&&r.copy){q=L;
}else if(r.move){q=E;
}else if(r.copy){q=L;
}else if(r.alias){q=M;
}}
if(q!=this.__cD){this.__cD=q;
this.__cE(Q,this.__cI,this.__cM,false);
}},__cE:function(u,v,w,x,y){var A=qx.event.Registration;
var z=A.createEvent(u,qx.event.type.Drag,[x,y]);

if(v!==w){z.setRelatedTarget(w);
}return A.dispatchEvent(v,z);
},__cF:function(bl){while(bl&&bl.nodeType==1){if(bl.getAttribute(W)==Y){return bl;
}bl=bl.parentNode;
}return null;
},__cG:function(bm){while(bm&&bm.nodeType==1){if(bm.getAttribute(T)==Y){return bm;
}bm=bm.parentNode;
}return null;
},__cH:function(){this.__cI=null;
this.__cu.removeListener(this.__cv,F,this._onMouseMove,this,true);
this.__cu.removeListener(this.__cv,bb,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,K,this._onWindowBlur,this);
this.__cx();
},__cJ:function(){if(this.__cK){this.__cu.removeListener(this.__cv,D,this._onMouseOver,this,true);
this.__cu.removeListener(this.__cv,J,this._onMouseOut,this,true);
this.__cu.removeListener(this.__cv,I,this._onKeyDown,this,true);
this.__cu.removeListener(this.__cv,bc,this._onKeyUp,this,true);
this.__cE(ba,this.__cI,this.__cM,false);
this.__cK=false;
}this.__cL=false;
this.__cM=null;
this.__cH();
},__cL:false,_onWindowBlur:function(e){this.__cJ();
},_onKeyDown:function(e){var be=e.getKeyIdentifier();

switch(be){case bd:case H:case G:if(!this.__cA[be]){this.__cA[be]=true;
this.__cC();
}}},_onKeyUp:function(e){var bi=e.getKeyIdentifier();

switch(bi){case bd:case H:case G:if(this.__cA[bi]){this.__cA[bi]=false;
this.__cC();
}}},_onMouseDown:function(e){if(this.__cK){return;
}var s=this.__cF(e.getTarget());

if(s){this.__cN=e.getDocumentLeft();
this.__cO=e.getDocumentTop();
this.__cI=s;
this.__cu.addListener(this.__cv,F,this._onMouseMove,this,true);
this.__cu.addListener(this.__cv,bb,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,K,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__cL){this.__cE(U,this.__cM,this.__cI,false,e);
}if(this.__cK){e.stopPropagation();
}this.__cJ();
},_onMouseMove:function(e){if(this.__cK){if(!this.__cE(V,this.__cI,this.__cM,true,e)){this.__cJ();
}}else{if(Math.abs(e.getDocumentLeft()-this.__cN)>3||Math.abs(e.getDocumentTop()-this.__cO)>3){if(this.__cE(P,this.__cI,this.__cM,true,e)){this.__cK=true;
this.__cu.addListener(this.__cv,D,this._onMouseOver,this,true);
this.__cu.addListener(this.__cv,J,this._onMouseOut,this,true);
this.__cu.addListener(this.__cv,I,this._onKeyDown,this,true);
this.__cu.addListener(this.__cv,bc,this._onKeyUp,this,true);
var t=this.__cA;
t.Ctrl=e.isCtrlPressed();
t.Shift=e.isShiftPressed();
t.Alt=e.isAltPressed();
this.__cC();
}else{this.__cE(ba,this.__cI,this.__cM,false);
this.__cH();
}}}},_onMouseOver:function(e){var i=e.getTarget();
var j=this.__cG(i);

if(j&&j!=this.__cM){this.__cL=this.__cE(O,j,this.__cI,true,e);
this.__cM=j;
this.__cC();
}},_onMouseOut:function(e){var m=this.__cG(e.getTarget());
var l=this.__cG(e.getRelatedTarget());

if(m&&m!==l&&m==this.__cM){this.__cE(N,this.__cM,l,false,e);
this.__cM=null;
this.__cL=false;
qx.event.Timer.once(this.__cC,this,0);
}}},destruct:function(){this.__cI=this.__cM=this.__cu=this.__cv=this.__cy=this.__cz=this.__cA=this.__cB=null;
},defer:function(B){qx.event.Registration.addHandler(B);
}});
})();
(function(){var z="-",y="qx.event.handler.Element";
qx.Class.define(y,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this._manager=a;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(o,p){},registerEvent:function(b,c,d){var g=qx.core.ObjectRegistry.toHashCode(b);
var e=g+z+c;
var f=qx.lang.Function.listener(this._onNative,this,e);
qx.bom.Event.addNativeListener(b,c,f);
this._registeredEvents[e]={element:b,type:c,listener:f};
},unregisterEvent:function(q,r,s){var v=this._registeredEvents;

if(!v){return;
}var w=qx.core.ObjectRegistry.toHashCode(q);
var t=w+z+r;
var u=this._registeredEvents[t];
qx.bom.Event.removeNativeListener(q,r,u.listener);
delete this._registeredEvents[t];
},_onNative:qx.event.GlobalError.observeMethod(function(h,i){var k=this._registeredEvents;

if(!k){return;
}var j=k[i];
qx.event.Registration.fireNonBubblingEvent(j.element,j.type,qx.event.type.Native,[h]);
})},destruct:function(){var l;
var m=this._registeredEvents;

for(var n in m){l=m[n];
qx.bom.Event.removeNativeListener(l.element,l.type,l.listener);
}this._manager=this._registeredEvents=null;
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var u="qx.event.handler.Appear",t="disappear",s="appear";
qx.Class.define(u,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(r){arguments.callee.base.call(this);
this.__cP=r;
this.__cQ={};
qx.event.handler.Appear.__cR[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__cR:{},refresh:function(){var v=this.__cR;

for(var w in v){v[w].refresh();
}}},members:{__cP:null,__cQ:null,canHandleEvent:function(f,g){},registerEvent:function(a,b,c){var d=qx.core.ObjectRegistry.toHashCode(a)+b;
var e=this.__cQ;

if(e&&!e[d]){e[d]=a;
a.$$displayed=a.offsetWidth>0;
}},unregisterEvent:function(h,i,j){var k=qx.core.ObjectRegistry.toHashCode(h)+i;
var l=this.__cQ;

if(!l){return;
}
if(l[k]){delete l[k];
}},refresh:function(){var p=this.__cQ;
var q;

for(var o in p){q=p[o];
var m=q.offsetWidth>0;

if((!!q.$$displayed)!==m){q.$$displayed=m;
var n=qx.event.Registration.createEvent(m?s:t);
this.__cP.dispatchEvent(q,n);
}}}},destruct:function(){this.__cP=this.__cQ=null;
delete qx.event.handler.Appear.__cR[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var V="mshtml",U="",T="qx.client",S=">",R="<",Q=" ",P="='",O="qx.bom.Element",N="div",M="' ",L="></";
qx.Class.define(O,{statics:{__cS:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,D,E){if(!E){E=window;
}
if(!name){throw new Error("The tag name is missing!");
}var G=this.__cS;
var F=U;

for(var I in D){if(G[I]){F+=I+P+D[I]+M;
}}var J;
if(F!=U){if(qx.bom.client.Engine.MSHTML){J=E.document.createElement(R+name+Q+F+S);
}else{var H=E.document.createElement(N);
H.innerHTML=R+name+Q+F+L+name+S;
J=H.firstChild;
}}else{J=E.document.createElement(name);
}
for(var I in D){if(!G[I]){qx.bom.element.Attribute.set(J,I,D[I]);
}}return J;
},empty:function(z){return z.innerHTML=U;
},addListener:function(Y,ba,bb,self,bc){return qx.event.Registration.addListener(Y,ba,bb,self,bc);
},removeListener:function(a,b,c,self,d){return qx.event.Registration.removeListener(a,b,c,self,d);
},removeListenerById:function(B,C){return qx.event.Registration.removeListenerById(B,C);
},hasListener:function(e,f,g){return qx.event.Registration.hasListener(e,f,g);
},focus:function(y){qx.event.Registration.getManager(y).getHandler(qx.event.handler.Focus).focus(y);
},blur:function(K){qx.event.Registration.getManager(K).getHandler(qx.event.handler.Focus).blur(K);
},activate:function(X){qx.event.Registration.getManager(X).getHandler(qx.event.handler.Focus).activate(X);
},deactivate:function(W){qx.event.Registration.getManager(W).getHandler(qx.event.handler.Focus).deactivate(W);
},capture:function(h,k){qx.event.Registration.getManager(h).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(h,k);
},releaseCapture:function(A){qx.event.Registration.getManager(A).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(A);
},clone:function(m,n){var q;

if(n||(qx.core.Variant.isSet(T,V)&&!qx.xml.Document.isXmlDocument(m))){var u=qx.event.Registration.getManager(m);
var o=qx.dom.Hierarchy.getDescendants(m);
o.push(m);
}if(qx.core.Variant.isSet(T,V)){for(var i=0,l=o.length;i<l;i++){u.toggleAttachedEvents(o[i],false);
}}var q=m.cloneNode(true);
if(qx.core.Variant.isSet(T,V)){for(var i=0,l=o.length;i<l;i++){u.toggleAttachedEvents(o[i],true);
}}if(n===true){var x=qx.dom.Hierarchy.getDescendants(q);
x.push(q);
var p,s,w,r;

for(var i=0,v=o.length;i<v;i++){w=o[i];
p=u.serializeListeners(w);

if(p.length>0){s=x[i];

for(var j=0,t=p.length;j<t;j++){r=p[j];
u.addListener(s,r.type,r.handler,r.self,r.capture);
}}}}return q;
}}});
})();
(function(){var l="qx.event.type.Native";
qx.Class.define(l,{extend:qx.event.type.Event,members:{init:function(d,e,f,g,h){arguments.callee.base.call(this,g,h);
this._target=e||qx.bom.Event.getTarget(d);
this._relatedTarget=f||qx.bom.Event.getRelatedTarget(d);

if(d.timeStamp){this._timeStamp=d.timeStamp;
}this._native=d;
this._returnValue=null;
return this;
},clone:function(i){var j=arguments.callee.base.call(this,i);
var k={};
j._native=this._cloneNativeEvent(this._native,k);
j._returnValue=this._returnValue;
return j;
},_cloneNativeEvent:function(a,b){b.preventDefault=qx.lang.Function.empty;
return b;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(c){this._returnValue=c;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(b,c){var c=arguments.callee.base.call(this,b,c);
c.shiftKey=b.shiftKey;
c.ctrlKey=b.ctrlKey;
c.altKey=b.altKey;
c.metaKey=b.metaKey;
return c;
},getModifiers:function(){var e=0;
var d=this._native;

if(d.shiftKey){e|=qx.event.type.Dom.SHIFT_MASK;
}
if(d.ctrlKey){e|=qx.event.type.Dom.CTRL_MASK;
}
if(d.altKey){e|=qx.event.type.Dom.ALT_MASK;
}
if(d.metaKey){e|=qx.event.type.Dom.META_MASK;
}return e;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var f="qx.event.type.KeyInput";
qx.Class.define(f,{extend:qx.event.type.Dom,members:{init:function(a,b,c){arguments.callee.base.call(this,a,b,null,true,true);
this._charCode=c;
return this;
},clone:function(d){var e=arguments.callee.base.call(this,d);
e._charCode=this._charCode;
return e;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){arguments.callee.base.call(this,d,e,null,true,true);
this._identifier=f;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c._identifier=this._identifier;
return c;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var x="qx.client",w="blur",v="focus",u="mousedown",t="on",s="mouseup",r="DOMFocusOut",q="DOMFocusIn",p="selectstart",o="onmousedown",T="onfocusout",S="onfocusin",R="onmouseup",Q="onselectstart",P="draggesture",O="gecko",N="qx.event.handler.Focus",M="_applyFocus",L="deactivate",K="textarea",E="qxIsRootPage",F="_applyActive",C="input",D="focusin",A="qxSelectable",B="tabIndex",y="off",z="activate",G="1",H="focusout",J="qxKeepFocus",I="qxKeepActive";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(V){arguments.callee.base.call(this);
this._manager=V;
this._window=V.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:F,nullable:true},focus:{apply:M,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__cW:null,__cX:null,__cY:null,__da:null,__db:null,__de:null,__dc:null,__dd:null,__di:null,__dj:null,canHandleEvent:function(bg,bh){},registerEvent:function(Y,ba,bb){},unregisterEvent:function(bE,bF,bG){},focus:function(a){try{a.focus();
}catch(bR){}this.setFocus(a);
this.setActive(a);
},activate:function(bs){this.setActive(bs);
},blur:function(bx){try{bx.blur();
}catch(be){}
if(this.getActive()===bx){this.resetActive();
}
if(this.getFocus()===bx){this.resetFocus();
}},deactivate:function(bw){if(this.getActive()===bw){this.resetActive();
}},tryActivate:function(bk){var bl=this.__dr(bk);

if(bl){this.setActive(bl);
}},__cT:function(bL,bM,bN,bO){var bQ=qx.event.Registration;
var bP=bQ.createEvent(bN,qx.event.type.Focus,[bL,bM,bO]);
bQ.dispatchEvent(bL,bP);
},_windowFocused:true,__cU:function(){if(this._windowFocused){this._windowFocused=false;
this.__cT(this._window,null,w,false);
}},__cV:function(){if(!this._windowFocused){this._windowFocused=true;
this.__cT(this._window,null,v,false);
}},_initObserver:qx.core.Variant.select(x,{"gecko":function(){this.__cW=qx.lang.Function.listener(this.__dm,this);
this.__cX=qx.lang.Function.listener(this.__dn,this);
this.__cY=qx.lang.Function.listener(this.__dl,this);
this.__da=qx.lang.Function.listener(this.__dk,this);
this.__db=qx.lang.Function.listener(this.__df,this);
this._document.addEventListener(u,this.__cW,true);
this._document.addEventListener(s,this.__cX,true);
this._window.addEventListener(v,this.__cY,true);
this._window.addEventListener(w,this.__da,true);
this._window.addEventListener(P,this.__db,true);
},"mshtml":function(){this.__cW=qx.lang.Function.listener(this.__dm,this);
this.__cX=qx.lang.Function.listener(this.__dn,this);
this.__dc=qx.lang.Function.listener(this.__dg,this);
this.__dd=qx.lang.Function.listener(this.__dh,this);
this.__de=qx.lang.Function.listener(this.__do,this);
this._document.attachEvent(o,this.__cW);
this._document.attachEvent(R,this.__cX);
this._document.attachEvent(S,this.__dc);
this._document.attachEvent(T,this.__dd);
this._document.attachEvent(Q,this.__de);
},"webkit":function(){this.__cW=qx.lang.Function.listener(this.__dm,this);
this.__cX=qx.lang.Function.listener(this.__dn,this);
this.__dd=qx.lang.Function.listener(this.__dh,this);
this.__cY=qx.lang.Function.listener(this.__dl,this);
this.__da=qx.lang.Function.listener(this.__dk,this);
this.__de=qx.lang.Function.listener(this.__do,this);
this._document.addEventListener(u,this.__cW,true);
this._document.addEventListener(s,this.__cX,true);
this._document.addEventListener(p,this.__de,false);
this._window.addEventListener(r,this.__dd,true);
this._window.addEventListener(v,this.__cY,true);
this._window.addEventListener(w,this.__da,true);
},"opera":function(){this.__cW=qx.lang.Function.listener(this.__dm,this);
this.__cX=qx.lang.Function.listener(this.__dn,this);
this.__dc=qx.lang.Function.listener(this.__dg,this);
this.__dd=qx.lang.Function.listener(this.__dh,this);
this._document.addEventListener(u,this.__cW,true);
this._document.addEventListener(s,this.__cX,true);
this._window.addEventListener(q,this.__dc,true);
this._window.addEventListener(r,this.__dd,true);
}}),_stopObserver:qx.core.Variant.select(x,{"gecko":function(){this._document.removeEventListener(u,this.__cW,true);
this._document.removeEventListener(s,this.__cX,true);
this._window.removeEventListener(v,this.__cY,true);
this._window.removeEventListener(w,this.__da,true);
this._window.removeEventListener(P,this.__db,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,o,this.__cW);
qx.bom.Event.removeNativeListener(this._document,R,this.__cX);
qx.bom.Event.removeNativeListener(this._document,S,this.__dc);
qx.bom.Event.removeNativeListener(this._document,T,this.__dd);
qx.bom.Event.removeNativeListener(this._document,Q,this.__de);
},"webkit":function(){this._document.removeEventListener(u,this.__cW,true);
this._document.removeEventListener(p,this.__de,false);
this._window.removeEventListener(q,this.__dc,true);
this._window.removeEventListener(r,this.__dd,true);
this._window.removeEventListener(v,this.__cY,true);
this._window.removeEventListener(w,this.__da,true);
},"opera":function(){this._document.removeEventListener(u,this.__cW,true);
this._window.removeEventListener(q,this.__dc,true);
this._window.removeEventListener(r,this.__dd,true);
this._window.removeEventListener(v,this.__cY,true);
this._window.removeEventListener(w,this.__da,true);
}}),__df:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"gecko":function(e){if(!this.__ds(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__dg:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"mshtml":function(e){this.__cV();
var bd=e.srcElement;
var bc=this.__dq(bd);

if(bc){this.setFocus(bc);
}this.tryActivate(bd);
},"opera":function(e){var U=e.target;

if(U==this._document||U==this._window){this.__cV();

if(this.__di){this.setFocus(this.__di);
delete this.__di;
}
if(this.__dj){this.setActive(this.__dj);
delete this.__dj;
}}else{this.setFocus(U);
this.tryActivate(U);
if(!this.__ds(U)){U.selectionStart=0;
U.selectionEnd=0;
}}},"default":null})),__dh:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"mshtml":function(e){if(!e.toElement){this.__cU();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var n=e.target;

if(n===this.getFocus()){this.resetFocus();
}
if(n===this.getActive()){this.resetActive();
}},"opera":function(e){var bo=e.target;

if(bo==this._document){this.__cU();
this.__di=this.getFocus();
this.__dj=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bo===this.getFocus()){this.resetFocus();
}
if(bo===this.getActive()){this.resetActive();
}}},"default":null})),__dk:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__cU();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__cU();
this.__di=this.getFocus();
this.__dj=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__dl:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"gecko":function(e){var bp=e.target;

if(bp===this._window||bp===this._document){this.__cV();
bp=this._body;
}this.setFocus(bp);
this.tryActivate(bp);
},"webkit":function(e){var bH=e.target;

if(bH===this._window||bH===this._document){this.__cV();

if(this.__di){this.setFocus(this.__di);
delete this.__di;
}
if(this.__dj){this.setActive(this.__dj);
delete this.__dj;
}}else{this.setFocus(bH);
this.tryActivate(bH);
}},"default":null})),__dm:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"gecko":function(e){var d=e.target;
var b=this.__dq(d);
var c=this.__ds(d);

if(!c){qx.bom.Event.preventDefault(e);
if(b){if(qx.core.Variant.isSet(x,O)){var f=qx.bom.element.Attribute.get(b,E)===G;

if(!f){b.focus();
}}else{b.focus();
}}}else if(!b){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var bj=e.srcElement;
var bi=this.__dq(bj);

if(bi){if(!this.__ds(bj)){bj.unselectable=t;
try{document.selection.empty();
}catch(e){}try{bi.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__ds(bj)){bj.unselectable=t;
}}},"webkit":function(e){var m=e.target;
var l=this.__dq(m);

if(l){this.setFocus(l);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bK=e.target;
var bI=this.__dq(bK);

if(!this.__ds(bK)){qx.bom.Event.preventDefault(e);
if(bI){var bJ=this.getFocus();

if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;
bJ.selectionEnd=0;
bJ.blur();
}if(bI){this.setFocus(bI);
}}}else if(bI){this.setFocus(bI);
}},"default":null})),__dn:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"mshtml":function(e){var by=e.srcElement;

if(by.unselectable){by.unselectable=y;
}this.tryActivate(this.__fo(by));
},"gecko":function(e){var bf=e.target;

while(bf&&bf.offsetWidth===undefined){bf=bf.parentNode;
}
if(bf){this.tryActivate(bf);
}},"webkit|opera":function(e){this.tryActivate(this.__fo(e.target));
},"default":null})),__fo:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"mshtml|webkit":function(bq){var br=this.getFocus();

if(br&&bq!=br&&(br.nodeName.toLowerCase()===C||br.nodeName.toLowerCase()===K)){bq=br;
}return bq;
},"default":function(i){return i;
}})),__do:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"mshtml|webkit":function(e){var j=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__ds(j)){qx.bom.Event.preventDefault(e);
}},"default":null})),__dp:function(bz){var bA=qx.bom.element.Attribute.get(bz,B);

if(bA>=1){return true;
}var bB=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bA>=0&&bB[bz.tagName]){return true;
}return false;
},__dq:function(k){while(k&&k.nodeType===1){if(k.getAttribute(J)==t){return null;
}
if(this.__dp(k)){return k;
}k=k.parentNode;
}return this._body;
},__dr:function(g){var h=g;

while(g&&g.nodeType===1){if(g.getAttribute(I)==t){return null;
}g=g.parentNode;
}return h;
},__ds:function(bC){while(bC&&bC.nodeType===1){var bD=bC.getAttribute(A);

if(bD!=null){return bD===t;
}bC=bC.parentNode;
}return true;
},_applyActive:function(W,X){if(X){this.__cT(X,W,L,true);
}
if(W){this.__cT(W,X,z,true);
}},_applyFocus:function(bm,bn){if(bn){this.__cT(bn,bm,H,true);
}
if(bm){this.__cT(bm,bn,D,true);
}if(bn){this.__cT(bn,bm,w,false);
}
if(bm){this.__cT(bm,bn,v,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fp=null;
},defer:function(bt){qx.event.Registration.addHandler(bt);
var bu=bt.FOCUSABLE_ELEMENTS;

for(var bv in bu){bu[bv.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var q="",p="qx.client",o="readOnly",n="accessKey",m="qx.bom.element.Attribute",l="rowSpan",k="vAlign",j="className",i="textContent",h="'",E="htmlFor",D="longDesc",C="cellSpacing",B="frameBorder",A="='",z="useMap",y="innerText",x="innerHTML",w="tabIndex",v="dateTime",t="maxLength",u="mshtml",r="cellPadding",s="colSpan";
qx.Class.define(m,{statics:{__dt:{names:{"class":j,"for":E,html:x,text:qx.core.Variant.isSet(p,u)?y:i,colspan:s,rowspan:l,valign:k,datetime:v,accesskey:n,tabindex:w,maxlength:t,readonly:o,longdesc:D,cellpadding:r,cellspacing:C,frameborder:B,usemap:z},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:q,maxLength:10000000,className:q,innerHTML:q,innerText:q,textContent:q,htmlFor:q,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(d){var e=[];
var g=this.__dt.runtime;

for(var f in d){if(!g[f]){e.push(f,A,d[f],h);
}}return e.join(q);
},get:qx.core.Variant.select(p,{"mshtml":function(F,name){var H=this.__dt;
var G;
name=H.names[name]||name;
if(H.original[name]){G=F.getAttribute(name,2);
}else if(H.property[name]){if(H.propertyDefault[name]&&G==H.propertyDefault[name]){return null;
}G=F[name];
}else{G=F.getAttribute(name);
}if(H.bools[name]){return !!G;
}return G;
},"default":function(a,name){var c=this.__dt;
var b;
name=c.names[name]||name;
if(c.property[name]){if(c.propertyDefault[name]&&b==c.propertyDefault[name]){return null;
}b=a[name];

if(b==null){b=a.getAttribute(name);
}}else{b=a.getAttribute(name);
}if(c.bools[name]){return !!b;
}return b;
}}),set:function(I,name,J){var K=this.__dt;
name=K.names[name]||name;
if(K.bools[name]){J=!!J;
}if(K.property[name]){if(J==null){J=K.propertyDefault[name];

if(J===undefined){J=null;
}}I[name]=J;
}else{if(J===true){I.setAttribute(name,name);
}else if(J===false||J===null){I.removeAttribute(name);
}else{I.setAttribute(name,J);
}}},reset:function(L,name){this.set(L,name,null);
}}});
})();
(function(){var q="left",p="right",o="middle",n="qx.client",m="dblclick",l="click",k="none",j="contextmenu",i="qx.event.type.Mouse";
qx.Class.define(i,{extend:qx.event.type.Dom,members:{init:function(a,b,c,d,e){arguments.callee.base.call(this,a,b,c,d,e);

if(!c){this._relatedTarget=qx.bom.Event.getRelatedTarget(a);
}return this;
},_cloneNativeEvent:function(f,g){var g=arguments.callee.base.call(this,f,g);
g.button=f.button;
g.clientX=f.clientX;
g.clientY=f.clientY;
g.pageX=f.pageX;
g.pageY=f.pageY;
g.screenX=f.screenX;
g.screenY=f.screenY;
g.wheelDelta=f.wheelDelta;
g.detail=f.detail;
g.srcElement=f.srcElement;
return g;
},__dx:qx.core.Variant.select(n,{"mshtml":{1:q,2:p,4:o},"default":{0:q,2:p,1:o}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case l:case m:return q;
case j:return p;
default:return this.__dx[this._native.button]||k;
}},isLeftPressed:function(){return this.getButton()===q;
},isMiddlePressed:function(){return this.getButton()===o;
},isRightPressed:function(){return this.getButton()===p;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(n,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(r);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(n,{"mshtml":function(){var h=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(h);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var c="qx.client",b="chrome",a="qx.event.type.MouseWheel";
qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();
this.preventDefault();
},getWheelDelta:qx.core.Variant.select(c,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){return -(this._native.wheelDelta/120);
}else{return -(this._native.wheelDelta/40);
}}})}});
})();
(function(){var l="qx.client",k="qx.bom.Viewport";
qx.Class.define(k,{statics:{getWidth:qx.core.Variant.select(l,{"opera":function(e){if(qx.bom.client.Engine.VERSION<9.5){return (e||window).document.body.clientWidth;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientWidth:f.body.clientWidth;
}},"webkit":function(q){if(qx.bom.client.Engine.VERSION<523.15){return (q||window).innerWidth;
}else{var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientWidth:r.body.clientWidth;
}},"default":function(i){var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientWidth:j.body.clientWidth;
}}),getHeight:qx.core.Variant.select(l,{"opera":function(m){if(qx.bom.client.Engine.VERSION<9.5){return (m||window).document.body.clientHeight;
}else{var n=(m||window).document;
return qx.bom.Document.isStandardMode(m)?n.documentElement.clientHeight:n.body.clientHeight;
}},"webkit":function(a){if(qx.bom.client.Engine.VERSION<523.15){return (a||window).innerHeight;
}else{var b=(a||window).document;
return qx.bom.Document.isStandardMode(a)?b.documentElement.clientHeight:b.body.clientHeight;
}},"default":function(c){var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientHeight:d.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(l,{"mshtml":function(o){var p=(o||window).document;
return p.documentElement.scrollLeft||p.body.scrollLeft;
},"default":function(t){return (t||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(l,{"mshtml":function(g){var h=(g||window).document;
return h.documentElement.scrollTop||h.body.scrollTop;
},"default":function(s){return (s||window).pageYOffset;
}})}});
})();
(function(){var g="CSS1Compat",f="position:absolute;width:0;height:0;width:1",e="qx.bom.Document",d="1px",c="qx.client",b="div";
qx.Class.define(e,{statics:{isQuirksMode:qx.core.Variant.select(c,{"mshtml":function(k){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (k||window).document.compatMode!==g;
}},"webkit":function(i){if(document.compatMode===undefined){var j=(i||window).document.createElement(b);
j.style.cssText=f;
return j.style.width===d?true:false;
}else{return (i||window).document.compatMode!==g;
}},"default":function(h){return (h||window).document.compatMode!==g;
}}),isStandardMode:function(a){return !this.isQuirksMode(a);
},getWidth:function(l){var m=(l||window).document;
var n=qx.bom.Viewport.getWidth(l);
var scroll=this.isStandardMode(l)?m.documentElement.scrollWidth:m.body.scrollWidth;
return Math.max(scroll,n);
},getHeight:function(o){var p=(o||window).document;
var q=qx.bom.Viewport.getHeight(o);
var scroll=this.isStandardMode(o)?p.documentElement.scrollHeight:p.body.scrollHeight;
return Math.max(scroll,q);
}}});
})();
(function(){var l="qx.client",k="ie",j="msie",i="android",h="operamini",g="mobile chrome",f=")(/| )([0-9]+\.[0-9])",e="iemobile",d="opera mobi",c="Mobile Safari",z="operamobile",y="mobile safari",x="IEMobile|Maxthon|MSIE",w="qx.bom.client.Browser",v="opera mini",u="(",t="opera",s="mshtml",r="Opera Mini|Opera Mobi|Opera",q="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",o="webkit",p="5.0",m="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",n="Mobile/";
qx.Bootstrap.define(w,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__fq:function(B){var C=navigator.userAgent;
var E=new RegExp(u+B+f);
var F=C.match(E);

if(!F){return;
}var name=F[1].toLowerCase();
var D=F[3];
if(C.match(/Version(\/| )([0-9]+\.[0-9])/)){D=RegExp.$2;
}
if(qx.core.Variant.isSet(l,o)){if(name===i){name=g;
}else if(C.indexOf(c)!==-1||C.indexOf(n)!==-1){name=y;
}}else if(qx.core.Variant.isSet(l,s)){if(name===j){name=k;
if(qx.bom.client.System.WINCE&&name===k){name=e;
D=p;
}}}else if(qx.core.Variant.isSet(l,t)){if(name===d){name=z;
}else if(name===v){name=h;
}}this.NAME=name;
this.FULLVERSION=D;
this.VERSION=parseFloat(D,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(l,{"webkit":function(a){a.__fq(q);
},"gecko":function(A){A.__fq(m);
},"mshtml":function(G){G.__fq(x);
},"opera":function(b){b.__fq(r);
}})});
})();
(function(){var o="qx.client",n="qx.dom.Hierarchy",m="previousSibling",l="*",k="nextSibling",j="parentNode";
qx.Class.define(n,{statics:{getNodeIndex:function(I){var J=0;

while(I&&(I=I.previousSibling)){J++;
}return J;
},getElementIndex:function(p){var q=0;
var r=qx.dom.Node.ELEMENT;

while(p&&(p=p.previousSibling)){if(p.nodeType==r){q++;
}}return q;
},getNextElementSibling:function(z){while(z&&(z=z.nextSibling)&&!qx.dom.Node.isElement(z)){continue;
}return z||null;
},getPreviousElementSibling:function(D){while(D&&(D=D.previousSibling)&&!qx.dom.Node.isElement(D)){continue;
}return D||null;
},contains:qx.core.Variant.select(o,{"webkit|mshtml|opera":function(E,F){if(qx.dom.Node.isDocument(E)){var G=qx.dom.Node.getDocument(F);
return E&&G==E;
}else if(qx.dom.Node.isDocument(F)){return false;
}else{return E.contains(F);
}},"gecko":function(Q,R){return !!(Q.compareDocumentPosition(R)&16);
},"default":function(a,b){while(b){if(a==b){return true;
}b=b.parentNode;
}return false;
}}),isRendered:function(K){if(!K.offsetParent){return false;
}var L=K.ownerDocument||K.document;
if(L.body.contains){return L.body.contains(K);
}if(L.compareDocumentPosition){return !!(L.compareDocumentPosition(K)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(B,C){return this.contains(C,B);
},getCommonParent:qx.core.Variant.select(o,{"mshtml|opera":function(d,e){if(d===e){return d;
}
while(d&&qx.dom.Node.isElement(d)){if(d.contains(e)){return d;
}d=d.parentNode;
}return null;
},"default":function(t,u){if(t===u){return t;
}var v={};
var y=qx.core.ObjectRegistry;
var x,w;

while(t||u){if(t){x=y.toHashCode(t);

if(v[x]){return v[x];
}v[x]=t;
t=t.parentNode;
}
if(u){w=y.toHashCode(u);

if(v[w]){return v[w];
}v[w]=u;
u=u.parentNode;
}}return null;
}}),getAncestors:function(S){return this._recursivelyCollect(S,j);
},getChildElements:function(f){f=f.firstChild;

if(!f){return [];
}var g=this.getNextSiblings(f);

if(f.nodeType===1){g.unshift(f);
}return g;
},getDescendants:function(i){return qx.lang.Array.fromCollection(i.getElementsByTagName(l));
},getFirstDescendant:function(H){H=H.firstChild;

while(H&&H.nodeType!=1){H=H.nextSibling;
}return H;
},getLastDescendant:function(s){s=s.lastChild;

while(s&&s.nodeType!=1){s=s.previousSibling;
}return s;
},getPreviousSiblings:function(A){return this._recursivelyCollect(A,m);
},getNextSiblings:function(c){return this._recursivelyCollect(c,k);
},_recursivelyCollect:function(T,U){var V=[];

while(T=T[U]){if(T.nodeType==1){V.push(T);
}}return V;
},getSiblings:function(P){return this.getPreviousSiblings(P).reverse().concat(this.getNextSiblings(P));
},isEmpty:function(h){h=h.firstChild;

while(h){if(h.nodeType===qx.dom.Node.ELEMENT||h.nodeType===qx.dom.Node.TEXT){return false;
}h=h.nextSibling;
}return true;
},cleanWhitespace:function(M){var N=M.firstChild;

while(N){var O=N.nextSibling;

if(N.nodeType==3&&!/\S/.test(N.nodeValue)){M.removeChild(N);
}N=O;
}}}});
})();
(function(){var j="qx.client",i="qx.event.type.Drag";
qx.Class.define(i,{extend:qx.event.type.Event,members:{init:function(f,g){arguments.callee.base.call(this,true,f);

if(g){this._native=g.getNativeEvent()||null;
this._originalTarget=g.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(a){var b=arguments.callee.base.call(this,a);
b._native=this._native;
return b;
},getDocumentLeft:qx.core.Variant.select(j,{"mshtml":function(){if(this._native==null){return 0;
}var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(l);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(j,{"mshtml":function(){if(this._native==null){return 0;
}var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(o);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(n){this.getManager().addType(n);
},addAction:function(c){this.getManager().addAction(c);
},supportsType:function(k){return this.getManager().supportsType(k);
},supportsAction:function(h){return this.getManager().supportsAction(h);
},addData:function(d,e){this.getManager().addData(d,e);
},getData:function(m){return this.getManager().getData(m);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(m){arguments.callee.base.call(this);
this.setEnabled(false);

if(m!=null){this.setInterval(m);
}var self=this;
this.__fr=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(i,j,k){var l=new qx.event.Timer(k);
l.addListener(h,function(e){l.stop();
i.call(j,e);
l.dispose();
j=null;
},j);
l.start();
return l;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__fs:null,__fr:null,_applyInterval:function(r,s){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__fs);
this.__fs=null;
}else if(p){this.__fs=window.setInterval(this.__fr,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(n){this.setInterval(n);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(o){this.stop();
this.startWith(o);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__fs){window.clearInterval(this.__fs);
}this.__fs=this.__fr=null;
}});
})();
(function(){var v="losecapture",u="qx.client",t="blur",s="focus",r="click",q="qx.event.dispatch.MouseCapture",p="capture",o="scroll";
qx.Class.define(q,{extend:qx.event.dispatch.AbstractBubbling,construct:function(a,b){arguments.callee.base.call(this,a);
this.__dz=a.getWindow();
this.__ft=b;
a.addListener(this.__dz,t,this.releaseCapture,this);
a.addListener(this.__dz,s,this.releaseCapture,this);
a.addListener(this.__dz,o,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__ft:null,__dA:null,__fu:true,__dz:null,_getParent:function(h){return h.parentNode;
},canDispatchEvent:function(f,event,g){return (this.__dA&&this.__dB[g]);
},dispatchEvent:function(l,event,m){if(m==r){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fu||!qx.dom.Hierarchy.contains(this.__dA,l)){l=this.__dA;
}arguments.callee.base.call(this,l,event,m);
},__dB:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(c,d){var d=d!==false;

if(this.__dA===c&&this.__fu==d){return;
}
if(this.__dA){this.releaseCapture();
}this.nativeSetCapture(c,d);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(c,v,function(){qx.bom.Event.removeNativeListener(c,v,arguments.callee);
self.releaseCapture();
});
}this.__fu=d;
this.__dA=c;
this.__ft.fireEvent(c,p,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__dA;
},releaseCapture:function(){var n=this.__dA;

if(!n){return;
}this.__dA=null;
this.__ft.fireEvent(n,v,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(n);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(u,{"mshtml":function(i,j){i.setCapture(j!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(u,{"mshtml":function(k){k.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__dA=this.__dz=this.__ft=null;
},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var j="qx.event.handler.Window";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){arguments.callee.base.call(this);
this._manager=o;
this._window=o.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(m,n){},registerEvent:function(a,b,c){},unregisterEvent:function(d,f,g){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var i=qx.event.handler.Window.SUPPORTED_TYPES;

for(var h in i){qx.bom.Event.addNativeListener(this._window,h,this._onNativeWrapper);
}},_stopWindowObserver:function(){var l=qx.event.handler.Window.SUPPORTED_TYPES;

for(var k in l){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var r=this._window;

try{var u=r.document;
}catch(e){return ;
}var s=u.documentElement;
var q=e.target||e.srcElement;

if(q==null||q===r||q===u||q===s){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,r]);
qx.event.Registration.dispatchEvent(r,event);
var t=event.getReturnValue();

if(t!=null){e.returnValue=t;
return t;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(p){qx.event.Registration.addHandler(p);
}});
})();
(function(){var r="qx.client",q="",p="mshtml",o="'",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="MSXML2.DOMDocument.3.0",h='<\?xml version="1.0" encoding="utf-8"?>\n<',g="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",f=" xmlns='",e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Bootstrap.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(s){if(s.nodeType===9){return s.documentElement.nodeName!==d;
}else if(s.ownerDocument){return this.isXmlDocument(s.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(r,{"mshtml":function(z,A){var B=new ActiveXObject(this.DOMDOC);
B.setProperty(n,b);

if(A){var C=h;
C+=A;

if(z){C+=f+z+o;
}C+=k;
B.loadXML(C);
}return B;
},"default":function(F,G){return document.implementation.createDocument(F||q,G||q,null);
}}),fromString:qx.core.Variant.select(r,{"mshtml":function(D){var E=qx.xml.Document.create();
E.loadXML(D);
return E;
},"default":function(t){var u=new DOMParser();
return u.parseFromString(t,e);
}})},defer:function(v){if(qx.core.Variant.isSet(r,p)){var w=[a,j];
var x=[c,g];

for(var i=0,l=w.length;i<l;i++){try{new ActiveXObject(w[i]);
new ActiveXObject(x[i]);
}catch(y){continue;
}v.DOMDOC=w[i];
v.XMLHTTP=x[i];
break;
}}}});
})();
(function(){var q="(\\s|$)",p="(^|\\s)",o="",n="qx.bom.element.Class",m=" ",l="$2";
qx.Class.define(n,{statics:{add:function(c,name){if(!this.has(c,name)){c.className+=(c.className?m:o)+name;
}return name;
},get:function(d){return d.className;
},has:function(j,name){var k=new RegExp(p+name+q);
return k.test(j.className);
},remove:function(a,name){var b=new RegExp(p+name+q);
a.className=a.className.replace(b,l);
return name;
},replace:function(e,f,g){this.remove(e,f);
return this.add(e,g);
},toggle:function(h,name,i){if(i==null){i=!this.has(h,name);
}i?this.add(h,name):this.remove(h,name);
return name;
}}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
qx.Class.define(f,{statics:{compile:function(x){if(!x){return k;
}var C=x.left;
var top=x.top;
var B=x.width;
var A=x.height;
var y,z;

if(C==null){y=(B==null?n:B+m);
C=n;
}else{y=(B==null?n:C+B+m);
C=C+m;
}
if(top==null){z=(A==null?n:A+m);
top=n;
}else{z=(A==null?n:top+A+m);
top=top+m;
}return d+top+l+y+l+z+l+C+i;
},get:function(o,p){var r=qx.bom.element.Style.get(o,c,p,false);
var w,top,u,t;
var q,s;

if(typeof r===e&&r!==n&&r!==h){r=qx.lang.String.trim(r);
if(/\((.*)\)/.test(r)){var v=RegExp.$1.split(l);
top=qx.lang.String.trim(v[0]);
q=qx.lang.String.trim(v[1]);
s=qx.lang.String.trim(v[2]);
w=qx.lang.String.trim(v[3]);
if(w===n){w=null;
}
if(top===n){top=null;
}
if(q===n){q=null;
}
if(s===n){s=null;
}if(top!=null){top=parseInt(top,10);
}
if(q!=null){q=parseInt(q,10);
}
if(s!=null){s=parseInt(s,10);
}
if(w!=null){w=parseInt(w,10);
}if(q!=null&&w!=null){u=q-w;
}else if(q!=null){u=q;
}
if(s!=null&&top!=null){t=s-top;
}else if(s!=null){t=s;
}}else{throw new Error("Could not parse clip string: "+r);
}}return {left:w||null,top:top||null,width:u||null,height:t||null};
},set:function(D,E){if(!E){D.style.clip=a;
return;
}var J=E.left;
var top=E.top;
var I=E.width;
var H=E.height;
var F,G;

if(J==null){F=(I==null?n:I+m);
J=n;
}else{F=(I==null?n:J+I+m);
J=J+m;
}
if(top==null){G=(H==null?n:H+m);
top=n;
}else{G=(H==null?n:top+H+m);
top=top+m;
}D.style.clip=j+top+l+F+l+G+l+J+g;
},reset:function(K){K.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="",f="cursor:",e="qx.client",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__dF:qx.core.Variant.select(e,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(n){return f+(this.__dF[n]||n)+d;
},get:function(o,p){return qx.bom.element.Style.get(o,b,p,false);
},set:function(l,m){l.style.cursor=this.__dF[m]||m;
},reset:function(q){q.style.cursor=g;
}}});
})();
(function(){var s="",r="qx.client",q=";",p="filter",o="opacity:",n="opacity",m="MozOpacity",l=");",k=")",j="zoom:1;filter:alpha(opacity=",g="qx.bom.element.Opacity",i="alpha(opacity=",h="-moz-opacity:";
qx.Class.define(g,{statics:{compile:qx.core.Variant.select(r,{"mshtml":function(D){if(D>=1){return s;
}
if(D<0.00001){D=0;
}return j+(D*100)+l;
},"gecko":function(a){if(a==1){a=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return h+a+q;
}else{return o+a+q;
}},"default":function(b){if(b==1){return s;
}return o+b+q;
}}),set:qx.core.Variant.select(r,{"mshtml":function(A,B){var C=qx.bom.element.Style.get(A,p,qx.bom.element.Style.COMPUTED_MODE,false);
if(B>=1){A.style.filter=C.replace(/alpha\([^\)]*\)/gi,s);
return;
}
if(B<0.00001){B=0;
}if(!A.currentStyle||!A.currentStyle.hasLayout){A.style.zoom=1;
}A.style.filter=C.replace(/alpha\([^\)]*\)/gi,s)+i+B*100+k;
},"gecko":function(c,d){if(d==1){d=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){c.style.MozOpacity=d;
}else{c.style.opacity=d;
}},"default":function(t,u){if(u==1){u=s;
}t.style.opacity=u;
}}),reset:qx.core.Variant.select(r,{"mshtml":function(y){var z=qx.bom.element.Style.get(y,p,qx.bom.element.Style.COMPUTED_MODE,false);
y.style.filter=z.replace(/alpha\([^\)]*\)/gi,s);
},"gecko":function(e){if(qx.bom.client.Engine.VERSION<1.7){e.style.MozOpacity=s;
}else{e.style.opacity=s;
}},"default":function(f){f.style.opacity=s;
}}),get:qx.core.Variant.select(r,{"mshtml":function(H,I){var J=qx.bom.element.Style.get(H,p,I,false);

if(J){var K=J.match(/alpha\(opacity=(.*)\)/);

if(K&&K[1]){return parseFloat(K[1])/100;
}}return 1.0;
},"gecko":function(v,w){var x=qx.bom.element.Style.get(v,qx.bom.client.Engine.VERSION<1.7?m:n,w,false);

if(x==0.999999){x=1.0;
}
if(x!=null){return parseFloat(x);
}return 1.0;
},"default":function(E,F){var G=qx.bom.element.Style.get(E,n,F,false);

if(G!=null){return parseFloat(G);
}return 1.0;
}})}});
})();
(function(){var t="qx.client",s="",r="boxSizing",q="box-sizing",p=":",o="border-box",n="qx.bom.element.BoxSizing",m="KhtmlBoxSizing",k="-moz-box-sizing",j="WebkitBoxSizing",f=";",h="-khtml-box-sizing",g="content-box",e="-webkit-box-sizing",d="MozBoxSizing";
qx.Class.define(n,{statics:{__dG:qx.core.Variant.select(t,{"mshtml":null,"webkit":[r,m,j],"gecko":[d],"opera":[r]}),__dH:qx.core.Variant.select(t,{"mshtml":null,"webkit":[q,h,e],"gecko":[k],"opera":[q]}),__dI:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dJ:function(w){var x=this.__dI;
return x.tags[w.tagName.toLowerCase()]||x.types[w.type];
},compile:qx.core.Variant.select(t,{"mshtml":function(v){{};
},"default":function(a){var c=this.__dH;
var b=s;

if(c){for(var i=0,l=c.length;i<l;i++){b+=c[i]+p+a+f;
}}return b;
}}),get:qx.core.Variant.select(t,{"mshtml":function(D){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(D))){if(!this.__dJ(D)){return g;
}}return o;
},"default":function(E){var G=this.__dG;
var F;

if(G){for(var i=0,l=G.length;i<l;i++){F=qx.bom.element.Style.get(E,G[i],null,false);

if(F!=null&&F!==s){return F;
}}}return s;
}}),set:qx.core.Variant.select(t,{"mshtml":function(y,z){{};
},"default":function(A,B){var C=this.__dG;

if(C){for(var i=0,l=C.length;i<l;i++){A.style[C[i]]=B;
}}}}),reset:function(u){this.set(u,s);
}}});
})();
(function(){var K="",J="qx.client",I="hidden",H="-moz-scrollbars-none",G="overflow",F=";",E="overflowY",D=":",C="overflowX",B="overflow:",W="none",V="scroll",U="borderLeftStyle",T="borderRightStyle",S="div",R="borderRightWidth",Q="overflow-y",P="borderLeftWidth",O="-moz-scrollbars-vertical",N="100px",L="qx.bom.element.Overflow",M="overflow-x";
qx.Class.define(L,{statics:{__dC:null,getScrollbarWidth:function(){if(this.__dC!==null){return this.__dC;
}var bv=qx.bom.element.Style;
var bx=function(a,b){return parseInt(bv.get(a,b))||0;
};
var by=function(be){return (bv.get(be,T)==W?0:bx(be,R));
};
var bw=function(p){return (bv.get(p,U)==W?0:bx(p,P));
};
var bA=qx.core.Variant.select(J,{"mshtml":function(bj){if(bv.get(bj,E)==I||bj.clientWidth==0){return by(bj);
}return Math.max(0,bj.offsetWidth-bj.clientLeft-bj.clientWidth);
},"default":function(bN){if(bN.clientWidth==0){var bO=bv.get(bN,G);
var bP=(bO==V||bO==O?16:0);
return Math.max(0,by(bN)+bP);
}return Math.max(0,(bN.offsetWidth-bN.clientWidth-bw(bN)));
}});
var bz=function(o){return bA(o)-by(o);
};
var t=document.createElement(S);
var s=t.style;
s.height=s.width=N;
s.overflow=V;
document.body.appendChild(t);
var c=bz(t);
this.__dC=c?c:16;
document.body.removeChild(t);
return this.__dC;
},_compile:qx.core.Variant.select(J,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(d,e){if(e==I){e=H;
}return B+e+F;
}:
function(bB,bC){return bB+D+bC+F;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(k,l){return B+l+F;
}:
function(ba,bb){return ba+D+bb+F;
},"default":function(X,Y){return X+D+Y+F;
}}),compileX:function(bK){return this._compile(M,bK);
},compileY:function(bq){return this._compile(Q,bq);
},getX:qx.core.Variant.select(J,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bW,bX){var bY=qx.bom.element.Style.get(bW,G,bX,false);

if(bY===H){bY=I;
}return bY;
}:
function(r,u){return qx.bom.element.Style.get(r,C,u,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bQ,bR){return qx.bom.element.Style.get(bQ,G,bR,false);
}:
function(v,w){return qx.bom.element.Style.get(v,C,w,false);
},"default":function(bS,bT){return qx.bom.element.Style.get(bS,C,bT,false);
}}),setX:qx.core.Variant.select(J,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(cc,cd){if(cd==I){cd=H;
}cc.style.overflow=cd;
}:
function(z,A){z.style.overflowX=A;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bI,bJ){bI.style.overflow=bJ;
}:
function(bh,bi){bh.style.overflowX=bi;
},"default":function(bU,bV){bU.style.overflowX=bV;
}}),resetX:qx.core.Variant.select(J,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bt){bt.style.overflow=K;
}:
function(bu){bu.style.overflowX=K;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(i,j){i.style.overflow=K;
}:
function(x,y){x.style.overflowX=K;
},"default":function(bD){bD.style.overflowX=K;
}}),getY:qx.core.Variant.select(J,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(f,g){var h=qx.bom.element.Style.get(f,G,g,false);

if(h===H){h=I;
}return h;
}:
function(bm,bn){return qx.bom.element.Style.get(bm,E,bn,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bk,bl){return qx.bom.element.Style.get(bk,G,bl,false);
}:
function(m,n){return qx.bom.element.Style.get(m,E,n,false);
},"default":function(bo,bp){return qx.bom.element.Style.get(bo,E,bp,false);
}}),setY:qx.core.Variant.select(J,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bf,bg){if(bg===I){bg=H;
}bf.style.overflow=bg;
}:
function(bE,bF){bE.style.overflowY=bF;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bG,bH){bG.style.overflow=bH;
}:
function(ca,cb){ca.style.overflowY=cb;
},"default":function(bL,bM){bL.style.overflowY=bM;
}}),resetY:qx.core.Variant.select(J,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(br){br.style.overflow=K;
}:
function(bs){bs.style.overflowY=K;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(ce,cf){ce.style.overflow=K;
}:
function(bc,bd){bc.style.overflowY=K;
},"default":function(q){q.style.overflowY=K;
}})}});
})();
(function(){var B="",A="qx.client",z="user-select",y="userSelect",x="appearance",w="style",v="MozUserModify",u="px",t="-webkit-appearance",s="styleFloat",X="-webkit-user-select",W="-moz-appearance",V="pixelHeight",U="MozAppearance",T=":",S="pixelTop",R="pixelLeft",Q="text-overflow",P="-moz-user-select",O="MozUserSelect",I="qx.bom.element.Style",J="-moz-user-modify",G="-webkit-user-modify",H="WebkitUserSelect",E="-o-text-overflow",F="pixelRight",C="cssFloat",D="pixelWidth",K="pixelBottom",L=";",N="WebkitUserModify",M="WebkitAppearance";
qx.Class.define(I,{statics:{__dD:{styleNames:{"float":qx.core.Variant.select(A,{"mshtml":s,"default":C}),"appearance":qx.core.Variant.select(A,{"gecko":U,"webkit":M,"default":x}),"userSelect":qx.core.Variant.select(A,{"gecko":O,"webkit":H,"default":y}),"userModify":qx.core.Variant.select(A,{"gecko":v,"webkit":N,"default":y})},cssNames:{"appearance":qx.core.Variant.select(A,{"gecko":W,"webkit":t,"default":x}),"userSelect":qx.core.Variant.select(A,{"gecko":P,"webkit":X,"default":z}),"userModify":qx.core.Variant.select(A,{"gecko":J,"webkit":G,"default":z}),"textOverflow":qx.core.Variant.select(A,{"opera":E,"default":Q})},mshtmlPixel:{width:D,height:V,left:R,right:F,top:S,bottom:K},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__dE:{},compile:function(j){var n=[];
var r=this.__dD;
var q=r.special;
var o=r.cssNames;
var m=this.__dE;
var p=qx.lang.String;
var name,l,k;

for(name in j){k=j[name];

if(k==null){continue;
}name=o[name]||name;
if(q[name]){n.push(q[name].compile(k));
}else{l=m[name];

if(!l){l=m[name]=p.hyphenate(name);
}n.push(l,T,k,L);
}}return n.join(B);
},setCss:qx.core.Variant.select(A,{"mshtml":function(bl,bm){bl.style.cssText=bm;
},"default":function(bs,bt){bs.setAttribute(w,bt);
}}),getCss:qx.core.Variant.select(A,{"mshtml":function(a){return a.style.cssText.toLowerCase();
},"default":function(bn){return bn.getAttribute(w);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bo,name,bp,bq){{};
var br=this.__dD;
name=br.styleNames[name]||name;
if(bq!==false&&br.special[name]){return br.special[name].set(bo,bp);
}else{bo.style[name]=bp!==null?bp:B;
}},setStyles:function(Y,ba,bb){{};
var bh=this.__dD;
var be=bh.styleNames;
var bg=bh.special;
var bc=Y.style;

for(var bf in ba){var bd=ba[bf];
var name=be[bf]||bf;

if(bd===undefined){if(bb!==false&&bg[name]){bg[name].reset(Y);
}else{bc[name]=B;
}}else{if(bb!==false&&bg[name]){bg[name].set(Y,bd);
}else{bc[name]=bd!==null?bd:B;
}}}},reset:function(bi,name,bj){var bk=this.__dD;
name=bk.styleNames[name]||name;
if(bj!==false&&bk.special[name]){return bk.special[name].reset(bi);
}else{bi.style[name]=B;
}},get:qx.core.Variant.select(A,{"mshtml":function(b,name,c,d){var i=this.__dD;
name=i.styleNames[name]||name;
if(d!==false&&i.special[name]){return i.special[name].get(b,c);
}if(!b.currentStyle){return b.style[name]||B;
}switch(c){case this.LOCAL_MODE:return b.style[name]||B;
case this.CASCADED_MODE:return b.currentStyle[name]||B;
default:var h=b.currentStyle[name]||B;
if(/^-?[\.\d]+(px)?$/i.test(h)){return h;
}var g=i.mshtmlPixel[name];

if(g){var e=b.style[name];
b.style[name]=h||0;
var f=b.style[g]+u;
b.style[name]=e;
return f;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(h)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return h;
}},"default":function(bu,name,bv,bw){var bz=this.__dD;
name=bz.styleNames[name]||name;
if(bw!==false&&bz.special[name]){return bz.special[name].get(bu,bv);
}switch(bv){case this.LOCAL_MODE:return bu.style[name]||B;
case this.CASCADED_MODE:if(bu.currentStyle){return bu.currentStyle[name]||B;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bx=qx.dom.Node.getDocument(bu);
var by=bx.defaultView.getComputedStyle(bu,null);
return by?by[name]:B;
}}})}});
})();
(function(){var g="mshtml",f="qx.client",e="qx.bom.element.Dimension",d="paddingRight",c="paddingLeft",b="paddingTop",a="paddingBottom";
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(f,{"gecko":function(h){if(h.getBoundingClientRect){var i=h.getBoundingClientRect();
return Math.round(i.right)-Math.round(i.left);
}else{return h.offsetWidth;
}},"default":function(C){return C.offsetWidth;
}}),getHeight:qx.core.Variant.select(f,{"gecko":function(A){if(A.getBoundingClientRect){var B=A.getBoundingClientRect();
return Math.round(B.bottom)-Math.round(B.top);
}else{return A.offsetHeight;
}},"default":function(r){return r.offsetHeight;
}}),getSize:function(q){return {width:this.getWidth(q),height:this.getHeight(q)};
},__dQ:{visible:true,hidden:true},getContentWidth:function(j){var l=qx.bom.element.Style;
var m=qx.bom.element.Overflow.getX(j);
var n=parseInt(l.get(j,c),10);
var p=parseInt(l.get(j,d),10);

if(this.__dQ[m]){return j.clientWidth-n-p;
}else{if(j.clientWidth>=j.scrollWidth){return Math.max(j.clientWidth,j.scrollWidth)-n-p;
}else{var o=j.scrollWidth-n;
var k=qx.bom.client.Engine;

if(k.NAME===g&&k.VERSION==6){o-=p;
}return o;
}}},getContentHeight:function(t){var v=qx.bom.element.Style;
var x=qx.bom.element.Overflow.getY(t);
var y=parseInt(v.get(t,b),10);
var w=parseInt(v.get(t,a),10);

if(this.__dQ[x]){return t.clientHeight-y-w;
}else{if(t.clientHeight>=t.scrollHeight){return Math.max(t.clientHeight,t.scrollHeight)-y-w;
}else{var z=t.scrollHeight-y;
var u=qx.bom.client.Engine;

if(u.NAME===g&&u.VERSION==6){z-=w;
}return z;
}}},getContentSize:function(s){return {width:this.getContentWidth(s),height:this.getContentHeight(s)};
}}});
})();
(function(){var I="number",H="0",G="px",F=";",E="background-image:url(",D=");",C="",B=")",A="background-repeat:",z=" ",w="qx.bom.element.Background",y="url(",x="background-position:";
qx.Class.define(w,{statics:{__dR:[E,null,D,x,null,F,A,null,F],__dS:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__dT:function(a,top){var b=qx.bom.client.Engine;

if(b.GECKO&&b.VERSION<1.9&&a==top&&typeof a==I){top+=0.01;
}
if(a){var c=(typeof a==I)?a+G:a;
}else{c=H;
}
if(top){var d=(typeof top==I)?top+G:top;
}else{d=H;
}return c+z+d;
},compile:function(e,f,g,top){var h=this.__dT(g,top);
var i=qx.util.ResourceManager.getInstance().toUri(e);
var j=this.__dR;
j[1]=i;
j[4]=h;
j[7]=f;
return j.join(C);
},getStyles:function(q,r,s,top){if(!q){return this.__dS;
}var t=this.__dT(s,top);
var u=qx.util.ResourceManager.getInstance().toUri(q);
var v={backgroundPosition:t,backgroundImage:y+u+B};

if(r!=null){v.backgroundRepeat=r;
}return v;
},set:function(k,l,m,n,top){var o=this.getStyles(l,m,n,top);

for(var p in o){k.style[p]=o[p];
}}}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Bootstrap.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__dP:function(){this.QUIRKS_MODE=this.__fd();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__fd:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__dP();
}});
})();
(function(){var y="/",x="mshtml",w="qx.client",v="",u="?",t="string",s="qx.util.ResourceManager",r="singleton",q="qx.isSource";
qx.Class.define(s,{extend:qx.core.Object,type:r,statics:{__dV:qx.$$resources||{},__fv:{}},members:{has:function(p){return !!arguments.callee.self.__dV[p];
},getData:function(c){return arguments.callee.self.__dV[c]||null;
},getImageWidth:function(a){var b=arguments.callee.self.__dV[a];
return b?b[0]:null;
},getImageHeight:function(z){var A=arguments.callee.self.__dV[z];
return A?A[1]:null;
},getImageFormat:function(B){var C=arguments.callee.self.__dV[B];
return C?C[2]:null;
},isClippedImage:function(d){var e=arguments.callee.self.__dV[d];
return e&&e.length>4;
},toUri:function(l){if(l==null){return l;
}var m=arguments.callee.self.__dV[l];

if(!m){return l;
}
if(typeof m===t){var o=m;
}else{var o=m[3];
if(!o){return l;
}}var n=v;

if(qx.core.Variant.isSet(w,x)&&qx.bom.client.Feature.SSL){n=arguments.callee.self.__fv[o];
}return n+qx.$$libraries[o].resourceUri+y+l;
}},defer:function(f){if(qx.core.Variant.isSet(w,x)){if(qx.bom.client.Feature.SSL){for(var j in qx.$$libraries){var h=qx.$$libraries[j].resourceUri;
if(h.match(/^\/\//)!=null){f.__fv[j]=window.location.protocol;
}else if(h.match(/^\.\//)!=null&&qx.core.Setting.get(q)){var g=document.URL;
f.__fv[j]=g.substring(0,g.lastIndexOf(y));
}else if(h.match(/^http/)!=null){}else{var k=window.location.href.indexOf(u);
var i;

if(k==-1){i=window.location.href;
}else{i=window.location.href.substring(0,k);
}f.__fv[j]=i.substring(0,i.lastIndexOf(y)+1);
}}}}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(K,stop,L){var parent=K.parentNode;
var Q=qx.dom.Node.getDocument(K);
var M=Q.body;
var Y,W,T;
var bb,R,bc;
var U,bd,bg;
var be,O,X,N;
var S,bf,V;
var P=L===g;
var ba=L===c;
stop=stop?stop.parentNode:Q;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===M||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===M){W=parent.scrollLeft;
T=W+qx.bom.Viewport.getWidth();
bb=qx.bom.Viewport.getWidth();
R=parent.clientWidth;
bc=parent.scrollWidth;
U=0;
bd=0;
bg=0;
}else{Y=qx.bom.element.Location.get(parent);
W=Y.left;
T=Y.right;
bb=parent.offsetWidth;
R=parent.clientWidth;
bc=parent.scrollWidth;
U=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
bd=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
bg=bb-R-U-bd;
}be=qx.bom.element.Location.get(K);
O=be.left;
X=be.right;
N=K.offsetWidth;
S=O-W-U;
bf=X-T+bd;
V=0;
if(P){V=S;
}else if(ba){V=bf+bg;
}else if(S<0||N>R){V=S;
}else if(bf>0){V=bf+bg;
}parent.scrollLeft+=V;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===M){break;
}parent=parent.parentNode;
}},intoViewY:function(l,stop,m){var parent=l.parentNode;
var s=qx.dom.Node.getDocument(l);
var n=s.body;
var A,o,w;
var C,z,u;
var q,r,p;
var E,F,B,v;
var y,t,G;
var D=m===d;
var x=m===e;
stop=stop?stop.parentNode:s;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===n||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===n){o=parent.scrollTop;
w=o+qx.bom.Viewport.getHeight();
C=qx.bom.Viewport.getHeight();
z=parent.clientHeight;
u=parent.scrollHeight;
q=0;
r=0;
p=0;
}else{A=qx.bom.element.Location.get(parent);
o=A.top;
w=A.bottom;
C=parent.offsetHeight;
z=parent.clientHeight;
u=parent.scrollHeight;
q=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
r=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
p=C-z-q-r;
}E=qx.bom.element.Location.get(l);
F=E.top;
B=E.bottom;
v=l.offsetHeight;
y=F-o-q;
t=B-w+r;
G=0;
if(D){G=y;
}else if(x){G=t+p;
}else if(y<0||v>z){G=y;
}else if(t>0){G=t+p;
}parent.scrollTop+=G;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===n){break;
}parent=parent.parentNode;
}},intoView:function(H,stop,I,J){this.intoViewX(H,stop,I);
this.intoViewY(H,stop,J);
}}});
})();
(function(){var q="borderTopWidth",p="borderLeftWidth",o="marginTop",n="marginLeft",m="scroll",l="qx.client",k="border-box",j="borderBottomWidth",i="borderRightWidth",h="auto",F="padding",E="qx.bom.element.Location",D="paddingLeft",C="static",B="marginBottom",A="visible",z="BODY",y="paddingBottom",x="paddingTop",w="marginRight",u="position",v="margin",s="overflow",t="paddingRight",r="border";
qx.Class.define(E,{statics:{__dK:function(L,M){return qx.bom.element.Style.get(L,M,qx.bom.element.Style.COMPUTED_MODE,false);
},__dL:function(bK,bL){return parseInt(qx.bom.element.Style.get(bK,bL,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__dM:function(X){var bb=0,top=0;
if(X.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var ba=qx.dom.Node.getWindow(X);
bb-=qx.bom.Viewport.getScrollLeft(ba);
top-=qx.bom.Viewport.getScrollTop(ba);
}else{var Y=qx.dom.Node.getDocument(X).body;
X=X.parentNode;
while(X&&X!=Y){bb+=X.scrollLeft;
top+=X.scrollTop;
X=X.parentNode;
}}return {left:bb,top:top};
},__dN:qx.core.Variant.select(l,{"mshtml":function(bl){var bn=qx.dom.Node.getDocument(bl);
var bm=bn.body;
var bo=0;
var top=0;
bo-=bm.clientLeft+bn.documentElement.clientLeft;
top-=bm.clientTop+bn.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bo+=this.__dL(bm,p);
top+=this.__dL(bm,q);
}return {left:bo,top:top};
},"webkit":function(bM){var bO=qx.dom.Node.getDocument(bM);
var bN=bO.body;
var bP=bN.offsetLeft;
var top=bN.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){bP+=this.__dL(bN,p);
top+=this.__dL(bN,q);
}return {left:bP,top:top};
},"gecko":function(N){var O=qx.dom.Node.getDocument(N).body;
var P=O.offsetLeft;
var top=O.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){P+=this.__dL(O,n);
top+=this.__dL(O,o);
}if(qx.bom.element.BoxSizing.get(O)!==k){P+=this.__dL(O,p);
top+=this.__dL(O,q);
}return {left:P,top:top};
},"default":function(G){var H=qx.dom.Node.getDocument(G).body;
var I=H.offsetLeft;
var top=H.offsetTop;
return {left:I,top:top};
}}),__dO:qx.core.Variant.select(l,{"mshtml|webkit":function(Q){var S=qx.dom.Node.getDocument(Q);
if(Q.getBoundingClientRect){var T=Q.getBoundingClientRect();
var U=T.left;
var top=T.top;
}else{var U=Q.offsetLeft;
var top=Q.offsetTop;
Q=Q.offsetParent;
var R=S.body;
while(Q&&Q!=R){U+=Q.offsetLeft;
top+=Q.offsetTop;
U+=this.__dL(Q,p);
top+=this.__dL(Q,q);
Q=Q.offsetParent;
}}return {left:U,top:top};
},"gecko":function(c){if(c.getBoundingClientRect){var f=c.getBoundingClientRect();
var g=Math.round(f.left);
var top=Math.round(f.top);
}else{var g=0;
var top=0;
var d=qx.dom.Node.getDocument(c).body;
var e=qx.bom.element.BoxSizing;

if(e.get(c)!==k){g-=this.__dL(c,p);
top-=this.__dL(c,q);
}
while(c&&c!==d){g+=c.offsetLeft;
top+=c.offsetTop;
if(e.get(c)!==k){g+=this.__dL(c,p);
top+=this.__dL(c,q);
}if(c.parentNode&&this.__dK(c.parentNode,s)!=A){g+=this.__dL(c.parentNode,p);
top+=this.__dL(c.parentNode,q);
}c=c.offsetParent;
}}return {left:g,top:top};
},"default":function(bg){var bi=0;
var top=0;
var bh=qx.dom.Node.getDocument(bg).body;
while(bg&&bg!==bh){bi+=bg.offsetLeft;
top+=bg.offsetTop;
bg=bg.offsetParent;
}return {left:bi,top:top};
}}),get:function(bp,bq){if(bp.tagName==z){var location=this.__fw(bp);
var bx=location.left;
var top=location.top;
}else{var br=this.__dN(bp);
var bw=this.__dO(bp);
var scroll=this.__dM(bp);
var bx=bw.left+br.left-scroll.left;
var top=bw.top+br.top-scroll.top;
}var bs=bx+bp.offsetWidth;
var bt=top+bp.offsetHeight;

if(bq){if(bq==F||bq==m){var bu=qx.bom.element.Overflow.getX(bp);

if(bu==m||bu==h){bs+=bp.scrollWidth-bp.offsetWidth+this.__dL(bp,p)+this.__dL(bp,i);
}var bv=qx.bom.element.Overflow.getY(bp);

if(bv==m||bv==h){bt+=bp.scrollHeight-bp.offsetHeight+this.__dL(bp,q)+this.__dL(bp,j);
}}
switch(bq){case F:bx+=this.__dL(bp,D);
top+=this.__dL(bp,x);
bs-=this.__dL(bp,t);
bt-=this.__dL(bp,y);
case m:bx-=bp.scrollLeft;
top-=bp.scrollTop;
bs-=bp.scrollLeft;
bt-=bp.scrollTop;
case r:bx+=this.__dL(bp,p);
top+=this.__dL(bp,q);
bs-=this.__dL(bp,i);
bt-=this.__dL(bp,j);
break;
case v:bx-=this.__dL(bp,n);
top-=this.__dL(bp,o);
bs+=this.__dL(bp,w);
bt+=this.__dL(bp,B);
break;
}}return {left:bx,top:top,right:bs,bottom:bt};
},__fw:qx.core.Variant.select(l,{"default":function(V){var top=V.offsetTop+this.__dL(V,o);
var W=V.offsetLeft+this.__dL(V,n);
return {left:W,top:top};
},"mshtml":function(a){var top=a.offsetTop;
var b=a.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__dL(a,o);
b+=this.__dL(a,n);
}return {left:b,top:top};
},"gecko":function(be){var top=be.offsetTop+this.__dL(be,o)+this.__dL(be,p);
var bf=be.offsetLeft+this.__dL(be,n)+this.__dL(be,q);
return {left:bf,top:top};
}}),getLeft:function(bc,bd){return this.get(bc,bd).left;
},getTop:function(bj,bk){return this.get(bj,bk).top;
},getRight:function(bI,bJ){return this.get(bI,bJ).right;
},getBottom:function(J,K){return this.get(J,K).bottom;
},getRelative:function(by,bz,bA,bB){var bD=this.get(by,bA);
var bC=this.get(bz,bB);
return {left:bD.left-bC.left,top:bD.top-bC.top,right:bD.right-bC.right,bottom:bD.bottom-bC.bottom};
},getPosition:function(bE){return this.getRelative(bE,this.getOffsetParent(bE));
},getOffsetParent:function(bF){var bH=bF.offsetParent||document.body;
var bG=qx.bom.element.Style;

while(bH&&(!/^body|html$/i.test(bH.tagName)&&bG.get(bH,u)===C)){bH=bH.offsetParent;
}return bH;
}}});
})();
(function(){var M="px",L="qx.client",K="div",J="img",I="",H="scale-x",G="mshtml",F="no-repeat",E="scale",D="scale-y",bi="qx/icon",bh="repeat",bf=".png",be="crop",bd="webkit",bc="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",bb='<div style="',ba="repeat-y",Y='<img src="',X="qx.bom.element.Decoration",T="', sizingMethod='",U="png",R="')",S='"/>',P='" style="',Q="none",N=" ",O="repeat-x",V='"></div>',W="absolute";
qx.Class.define(X,{statics:{DEBUG:false,__fx:{},__dW:qx.core.Variant.isSet(L,G),__dX:qx.core.Variant.select(L,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__dY:{"scale-x":J,"scale-y":J,"scale":J,"repeat":K,"no-repeat":K,"repeat-x":K,"repeat-y":K},update:function(g,h,i,j){var l=this.getTagName(i,h);

if(l!=g.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var m=this.getAttributes(h,i,j);

if(l===J){g.src=m.src;
}if(g.style.backgroundPosition!=I&&m.style.backgroundPosition===undefined){m.style.backgroundPosition=null;
}if(g.style.clip!=I&&m.style.clip===undefined){m.style.clip=null;
}var k=qx.bom.element.Style;
k.setStyles(g,m.style);
},create:function(x,y,z){var A=this.getTagName(y,x);
var C=this.getAttributes(x,y,z);
var B=qx.bom.element.Style.compile(C.style);

if(A===J){return Y+C.src+P+B+S;
}else{return bb+B+V;
}},getTagName:function(bn,bo){if(qx.core.Variant.isSet(L,G)){if(bo&&this.__dW&&this.__dX[bn]&&qx.lang.String.endsWith(bo,bf)){return K;
}}return this.__dY[bn];
},getAttributes:function(bF,bG,bH){if(!bH){bH={};
}
if(!bH.position){bH.position=W;
}
if(qx.core.Variant.isSet(L,G)){bH.fontSize=0;
bH.lineHeight=0;
}else if(qx.core.Variant.isSet(L,bd)){bH.WebkitUserDrag=Q;
}var bJ=qx.util.ResourceManager.getInstance().getImageFormat(bF)||qx.io.ImageLoader.getFormat(bF);
{};
var bI;
if(this.__dW&&this.__dX[bG]&&bJ===U){bI=this.__fA(bH,bG,bF);
}else{if(bG===E){bI=this.__fB(bH,bG,bF);
}else if(bG===H||bG===D){bI=this.__fC(bH,bG,bF);
}else{bI=this.__fF(bH,bG,bF);
}}return bI;
},__fy:function(d,e,f){if(d.width==null&&e!=null){d.width=e+M;
}
if(d.height==null&&f!=null){d.height=f+M;
}return d;
},__fz:function(a){var b=qx.util.ResourceManager.getInstance().getImageWidth(a)||qx.io.ImageLoader.getWidth(a);
var c=qx.util.ResourceManager.getInstance().getImageHeight(a)||qx.io.ImageLoader.getHeight(a);
return {width:b,height:c};
},__fA:function(bR,bS,bT){var bW=this.__fz(bT);
bR=this.__fy(bR,bW.width,bW.height);
var bV=bS==F?be:E;
var bU=bc+qx.util.ResourceManager.getInstance().toUri(bT)+T+bV+R;
bR.filter=bU;
bR.backgroundImage=bR.backgroundRepeat=I;
return {style:bR};
},__fB:function(s,t,u){var v=qx.util.ResourceManager.getInstance().toUri(u);
var w=this.__fz(u);
s=this.__fy(s,w.width,w.height);
return {src:v,style:s};
},__fC:function(bx,by,bz){var bD=qx.util.ResourceManager.getInstance();
var bC=bD.isClippedImage(bz);
var bE=this.__fz(bz);

if(bC){var bB=bD.getData(bz);
var bA=bD.toUri(bB[4]);

if(by===H){bx=this.__fD(bx,bB,bE.height);
}else{bx=this.__fE(bx,bB,bE.width);
}return {src:bA,style:bx};
}else{{};

if(by==H){bx.height=bE.height==null?null:bE.height+M;
}else if(by==D){bx.width=bE.width==null?null:bE.width+M;
}var bA=bD.toUri(bz);
return {src:bA,style:bx};
}},__fD:function(bj,bk,bl){var bm=qx.util.ResourceManager.getInstance().getImageHeight(bk[4]);
bj.clip={top:-bk[6],height:bl};
bj.height=bm+M;
if(bj.top!=null){bj.top=(parseInt(bj.top,10)+bk[6])+M;
}else if(bj.bottom!=null){bj.bottom=(parseInt(bj.bottom,10)+bl-bm-bk[6])+M;
}return bj;
},__fE:function(o,p,q){var r=qx.util.ResourceManager.getInstance().getImageWidth(p[4]);
o.clip={left:-p[5],width:q};
o.width=r+M;
if(o.left!=null){o.left=(parseInt(o.left,10)+p[5])+M;
}else if(o.right!=null){o.right=(parseInt(o.right,10)+q-r-p[5])+M;
}return o;
},__fF:function(bp,bq,br){var bw=qx.util.ResourceManager.getInstance().isClippedImage(br);
var bv=this.__fz(br);
if(bw&&bq!==bh){var bu=qx.util.ResourceManager.getInstance().getData(br);
var bt=qx.bom.element.Background.getStyles(bu[4],bq,bu[5],bu[6]);

for(var bs in bt){bp[bs]=bt[bs];
}
if(bv.width!=null&&bp.width==null&&(bq==ba||bq===F)){bp.width=bv.width+M;
}
if(bv.height!=null&&bp.height==null&&(bq==O||bq===F)){bp.height=bv.height+M;
}return {style:bp};
}else{{};
bp=this.__fy(bp,bv.width,bv.height);
bp=this.__fG(bp,br,bq);
return {style:bp};
}},__fG:function(bK,bL,bM){var top=null;
var bQ=null;

if(bK.backgroundPosition){var bN=bK.backgroundPosition.split(N);
bQ=parseInt(bN[0]);

if(isNaN(bQ)){bQ=bN[0];
}top=parseInt(bN[1]);

if(isNaN(top)){top=bN[1];
}}var bP=qx.bom.element.Background.getStyles(bL,bM,bQ,top);

for(var bO in bP){bK[bO]=bP[bO];
}if(bK.filter){bK.filter=I;
}return bK;
},__fH:function(n){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(n)&&n.indexOf(bi)==-1){if(!this.__fx[n]){qx.log.Logger.debug("Potential clipped image candidate: "+n);
this.__fx[n]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(L,{"mshtml":function(){return qx.bom.element.Decoration.__dW;
},"default":function(){return false;
}})}});
})();
(function(){var r="qx.client",q="load",p="qx.io.ImageLoader";
qx.Bootstrap.define(p,{statics:{__fI:{},__fJ:{width:null,height:null},__fK:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(a){var b=this.__fI[a];
return !!(b&&b.loaded);
},isFailed:function(c){var d=this.__fI[c];
return !!(d&&d.failed);
},isLoading:function(n){var o=this.__fI[n];
return !!(o&&o.loading);
},getFormat:function(s){var t=this.__fI[s];
return t?t.format:null;
},getSize:function(G){var H=this.__fI[G];
return H?
{width:H.width,height:H.height}:this.__fJ;
},getWidth:function(z){var A=this.__fI[z];
return A?A.width:null;
},getHeight:function(v){var w=this.__fI[v];
return w?w.height:null;
},load:function(e,f,g){var h=this.__fI[e];

if(!h){h=this.__fI[e]={};
}if(f&&!g){g=window;
}if(h.loaded||h.loading||h.failed){if(f){if(h.loading){h.callbacks.push(f,g);
}else{f.call(g,e,h);
}}}else{h.loading=true;
h.callbacks=[];

if(f){h.callbacks.push(f,g);
}var k=new Image();
var j=qx.lang.Function.listener(this.__fL,this,k,e);
k.onload=j;
k.onerror=j;
k.src=e;
}},__fL:qx.event.GlobalError.observeMethod(function(event,B,C){var D=this.__fI[C];
if(event.type===q){D.loaded=true;
D.width=this.__fM(B);
D.height=this.__fN(B);
var E=this.__fK.exec(C);

if(E!=null){D.format=E[1];
}}else{D.failed=true;
}B.onload=B.onerror=null;
var F=D.callbacks;
delete D.loading;
delete D.callbacks;
for(var i=0,l=F.length;i<l;i+=2){F[i].call(F[i+1],C,D);
}}),__fM:qx.core.Variant.select(r,{"gecko":function(y){return y.naturalWidth;
},"default":function(x){return x.width;
}}),__fN:qx.core.Variant.select(r,{"gecko":function(u){return u.naturalHeight;
},"default":function(m){return m.height;
}})}});
})();
(function(){var b="qx.dom.Element";
qx.Class.define(b,{statics:{hasChild:function(parent,u){return u.parentNode===parent;
},hasChildren:function(e){return !!e.firstChild;
},hasChildElements:function(v){v=v.firstChild;

while(v){if(v.nodeType===1){return true;
}v=v.nextSibling;
}return false;
},getParentElement:function(a){return a.parentNode;
},isInDom:function(o,p){if(!p){p=window;
}var q=p.document.getElementsByTagName(o.nodeName);

for(var i=0,l=q.length;i<l;i++){if(q[i]===o){return true;
}}return false;
},insertAt:function(r,parent,s){var t=parent.childNodes[s];

if(t){parent.insertBefore(r,t);
}else{parent.appendChild(r);
}return true;
},insertBegin:function(B,parent){if(parent.firstChild){this.insertBefore(B,parent.firstChild);
}else{parent.appendChild(B);
}},insertEnd:function(z,parent){parent.appendChild(z);
},insertBefore:function(m,n){n.parentNode.insertBefore(m,n);
return true;
},insertAfter:function(w,x){var parent=x.parentNode;

if(x==parent.lastChild){parent.appendChild(w);
}else{return this.insertBefore(w,x.nextSibling);
}return true;
},remove:function(A){if(!A.parentNode){return false;
}A.parentNode.removeChild(A);
return true;
},removeChild:function(y,parent){if(y.parentNode!==parent){return false;
}parent.removeChild(y);
return true;
},removeChildAt:function(f,parent){var g=parent.childNodes[f];

if(!g){return false;
}parent.removeChild(g);
return true;
},replaceChild:function(c,d){if(!d.parentNode){return false;
}d.parentNode.replaceChild(c,d);
return true;
},replaceAt:function(h,j,parent){var k=parent.childNodes[j];

if(!k){return false;
}parent.replaceChild(h,k);
return true;
}}});
})();
(function(){var ct="",cs="string",cr="div",cq="previousSibling",cp="*",co="href",cn="e",cm="[object Array]",cl="Syntax error, unrecognized expression: ",ck="HTML",db="text",da="file",cY="+",cX="'/>",cW="CLASS",cV="radio",cU="script",cT="className",cS="BUTTON",cR="TAG",cA="password",cB="htmlFor",cy="reset",cz="<a href='#'></a>",cw="<a name='",cx="#",cu="qx.bom.Selector",cv="button",cC="parentNode",cD="NAME",cJ="number",cI="submit",cL="image",cK="<div class='test e'></div><div class='test'></div>",cN="~",cM="checkbox",cF="sourceIndex",cQ="\\",cP="hidden",cO=".TEST",cE="<p class='TEST'></p>",cG="undefined",cH="ID";
qx.Bootstrap.define(cu,{statics:{query:null,matches:null}});
(function(){var E=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,M=0,I=Object.prototype.toString,G=false,O=true;
var z=[0,0];
z.sort(function(){O=false;
return 0;
});
var A=function(eo,ep,eq,er){eq=eq||[];
var eA=ep=ep||document;

if(ep.nodeType!==1&&ep.nodeType!==9){return [];
}
if(!eo||typeof eo!==cs){return eq;
}var ex=[],m,eu,es,eC,ew,ev=true,et=F(ep),ez=eo;
while((E.exec(ct),m=E.exec(ez))!==null){ez=m[3];
ex.push(m[1]);

if(m[2]){ew=m[3];
break;
}}
if(ex.length>1&&H.exec(eo)){if(ex.length===2&&C.relative[ex[0]]){eu=B(ex[0]+ex[1],ep);
}else{eu=C.relative[ex[0]]?[ep]:A(ex.shift(),ep);

while(ex.length){eo=ex.shift();

if(C.relative[eo])eo+=ex.shift();
eu=B(eo,eu);
}}}else{if(!er&&ex.length>1&&ep.nodeType===9&&!et&&C.match.ID.test(ex[0])&&!C.match.ID.test(ex[ex.length-1])){var ey=A.find(ex.shift(),ep,et);
ep=ey.expr?A.filter(ey.expr,ey.set)[0]:ey.set[0];
}
if(ep){var ey=er?
{expr:ex.pop(),set:y(er)}:A.find(ex.pop(),ex.length===1&&(ex[0]===cN||ex[0]===cY)&&ep.parentNode?ep.parentNode:ep,et);
eu=ey.expr?A.filter(ey.expr,ey.set):ey.set;

if(ex.length>0){es=y(eu);
}else{ev=false;
}
while(ex.length){var eD=ex.pop(),eB=eD;

if(!C.relative[eD]){eD=ct;
}else{eB=ex.pop();
}
if(eB==null){eB=ep;
}C.relative[eD](es,eB,et);
}}else{es=ex=[];
}}
if(!es){es=eu;
}
if(!es){throw cl+(eD||eo);
}
if(I.call(es)===cm){if(!ev){eq.push.apply(eq,es);
}else if(ep&&ep.nodeType===1){for(var i=0;es[i]!=null;i++){if(es[i]&&(es[i]===true||es[i].nodeType===1&&D(ep,es[i]))){eq.push(eu[i]);
}}}else{for(var i=0;es[i]!=null;i++){if(es[i]&&es[i].nodeType===1){eq.push(eu[i]);
}}}}else{y(es,eq);
}
if(ew){A(ew,eA,eq,er);
A.uniqueSort(eq);
}return eq;
};
A.uniqueSort=function(s){if(J){G=O;
s.sort(J);

if(G){for(var i=1;i<s.length;i++){if(s[i]===s[i-1]){s.splice(i--,1);
}}}}return s;
};
A.matches=function(k,n){return A(k,null,null,n);
};
A.find=function(eP,eQ,eR){var eS,eU;

if(!eP){return [];
}
for(var i=0,l=C.order.length;i<l;i++){var eT=C.order[i],eU;

if((eU=C.leftMatch[eT].exec(eP))){var eV=eU[1];
eU.splice(1,1);

if(eV.substr(eV.length-1)!==cQ){eU[1]=(eU[1]||ct).replace(/\\/g,ct);
eS=C.find[eT](eU,eQ,eR);

if(eS!=null){eP=eP.replace(C.match[eT],ct);
break;
}}}}
if(!eS){eS=eQ.getElementsByTagName(cp);
}return {set:eS,expr:eP};
};
A.filter=function(dc,dd,de,df){var dg=dc,dl=[],dh=dd,dr,dq,di=dd&&dd[0]&&F(dd[0]);

while(dc&&dd.length){for(var dp in C.filter){if((dr=C.match[dp].exec(dc))!=null){var dj=C.filter[dp],dn,dk;
dq=false;

if(dh==dl){dl=[];
}
if(C.preFilter[dp]){dr=C.preFilter[dp](dr,dh,de,dl,df,di);

if(!dr){dq=dn=true;
}else if(dr===true){continue;
}}
if(dr){for(var i=0;(dk=dh[i])!=null;i++){if(dk){dn=dj(dk,dr,i,dh);
var dm=df^!!dn;

if(de&&dn!=null){if(dm){dq=true;
}else{dh[i]=false;
}}else if(dm){dl.push(dk);
dq=true;
}}}}
if(dn!==undefined){if(!de){dh=dl;
}dc=dc.replace(C.match[dp],ct);

if(!dq){return [];
}break;
}}}if(dc==dg){if(dq==null){throw cl+dc;
}else{break;
}}dg=dc;
}return dh;
};
var C=A.selectors={order:[cH,cD,cR],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":cT,"for":cB},attrHandle:{href:function(dw){return dw.getAttribute(co);
}},relative:{"+":function(eh,ei,ej){var ek=typeof ei===cs,em=ek&&!/\W/.test(ei),en=ek&&!em;

if(em&&!ej){ei=ei.toUpperCase();
}
for(var i=0,l=eh.length,el;i<l;i++){if((el=eh[i])){while((el=el.previousSibling)&&el.nodeType!==1){}eh[i]=en||el&&el.nodeName===ei?el||false:el===ei;
}}
if(en){A.filter(ei,eh,true);
}},">":function(ec,ed,ee){var ef=typeof ed===cs;

if(ef&&!/\W/.test(ed)){ed=ee?ed:ed.toUpperCase();

for(var i=0,l=ec.length;i<l;i++){var eg=ec[i];

if(eg){var parent=eg.parentNode;
ec[i]=parent.nodeName===ed?parent:false;
}}}else{for(var i=0,l=ec.length;i<l;i++){var eg=ec[i];

if(eg){ec[i]=ef?eg.parentNode:eg.parentNode===ed;
}}
if(ef){A.filter(ed,ec,true);
}}},"":function(c,d,f){var g=M++,h=N;

if(!/\W/.test(d)){var j=d=f?d:d.toUpperCase();
h=P;
}h(cC,d,g,c,j,f);
},"~":function(fH,fI,fJ){var fK=M++,fL=N;

if(typeof fI===cs&&!/\W/.test(fI)){var fM=fI=fJ?fI:fI.toUpperCase();
fL=P;
}fL(cq,fI,fK,fH,fM,fJ);
}},find:{ID:function(bL,bM,bN){if(typeof bM.getElementById!=="undefined"&&!bN){var m=bM.getElementById(bL[1]);
return m?[m]:[];
}},NAME:function(dI,dJ,dK){if(typeof dJ.getElementsByName!=="undefined"){var dM=[],dL=dJ.getElementsByName(dI[1]);

for(var i=0,l=dL.length;i<l;i++){if(dL[i].getAttribute("name")===dI[1]){dM.push(dL[i]);
}}return dM.length===0?null:dM;
}},TAG:function(bY,ca){return ca.getElementsByTagName(bY[1]);
}},preFilter:{CLASS:function(bB,bC,bD,bE,bF,bG){bB=" "+bB[1].replace(/\\/g,"")+" ";

if(bG){return bB;
}
for(var i=0,bH;(bH=bC[i])!=null;i++){if(bH){if(bF^(bH.className&&(" "+bH.className+" ").indexOf(bB)>=0)){if(!bD)bE.push(bH);
}else if(bD){bC[i]=false;
}}}return false;
},ID:function(dB){return dB[1].replace(/\\/g,"");
},TAG:function(fm,fn){for(var i=0;fn[i]===false;i++){}return fn[i]&&F(fn[i])?fm[1]:fm[1].toUpperCase();
},CHILD:function(dN){if(dN[1]=="nth"){var dO=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(dN[2]=="even"&&"2n"||dN[2]=="odd"&&"2n+1"||!/\D/.test(dN[2])&&"0n+"+dN[2]||dN[2]);
dN[2]=(dO[1]+(dO[2]||1))-0;
dN[3]=dO[3]-0;
}dN[0]=M++;
return dN;
},ATTR:function(eJ,eK,eL,eM,eN,eO){var name=eJ[1].replace(/\\/g,"");

if(!eO&&C.attrMap[name]){eJ[1]=C.attrMap[name];
}
if(eJ[2]==="~="){eJ[4]=" "+eJ[4]+" ";
}return eJ;
},PSEUDO:function(fv,fw,fx,fy,fz){if(fv[1]==="not"){if((E.exec(fv[3])||"").length>1||/^\w/.test(fv[3])){fv[3]=A(fv[3],null,null,fw);
}else{var fA=A.filter(fv[3],fw,fx,true^fz);

if(!fx){fy.push.apply(fy,fA);
}return false;
}}else if(C.match.POS.test(fv[0])||C.match.CHILD.test(fv[0])){return true;
}return fv;
},POS:function(bX){bX.unshift(true);
return bX;
}},filters:{enabled:function(dG){return dG.disabled===false&&dG.type!==cP;
},disabled:function(fl){return fl.disabled===true;
},checked:function(fN){return fN.checked===true;
},selected:function(dC){dC.parentNode.selectedIndex;
return dC.selected===true;
},parent:function(bQ){return !!bQ.firstChild;
},empty:function(cb){return !cb.firstChild;
},has:function(bw,i,bx){return !!A(bx[3],bw).length;
},header:function(cc){return /h\d/i.test(cc.nodeName);
},text:function(dH){return db===dH.type;
},radio:function(bs){return cV===bs.type;
},checkbox:function(fO){return cM===fO.type;
},file:function(bP){return da===bP.type;
},password:function(fu){return cA===fu.type;
},submit:function(bO){return cI===bO.type;
},image:function(bk){return cL===bk.type;
},reset:function(dv){return cy===dv.type;
},button:function(t){return cv===t.type||t.nodeName.toUpperCase()===cS;
},input:function(fb){return /input|select|textarea|button/i.test(fb.nodeName);
}},setFilters:{first:function(dx,i){return i===0;
},last:function(v,i,w,x){return i===x.length-1;
},even:function(bl,i){return i%2===0;
},odd:function(eG,i){return i%2===1;
},lt:function(ba,i,bb){return i<bb[3]-0;
},gt:function(dy,i,dz){return i>dz[3]-0;
},nth:function(o,i,p){return p[3]-0==i;
},eq:function(ds,i,dt){return dt[3]-0==i;
}},filter:{PSEUDO:function(bc,bd,i,be){var name=bd[1],bf=C.filters[name];

if(bf){return bf(bc,i,bd,be);
}else if(name==="contains"){return (bc.textContent||bc.innerText||"").indexOf(bd[3])>=0;
}else if(name==="not"){var bg=bd[3];

for(var i=0,l=bg.length;i<l;i++){if(bg[i]===bc){return false;
}}return true;
}},CHILD:function(Q,R){var X=R[1],S=Q;

switch(X){case 'only':case 'first':while((S=S.previousSibling)){if(S.nodeType===1)return false;
}
if(X=='first')return true;
S=Q;
case 'last':while((S=S.nextSibling)){if(S.nodeType===1)return false;
}return true;
case 'nth':var Y=R[2],U=R[3];

if(Y==1&&U==0){return true;
}var W=R[0],parent=Q.parentNode;

if(parent&&(parent.sizcache!==W||!Q.nodeIndex)){var T=0;

for(S=parent.firstChild;S;S=S.nextSibling){if(S.nodeType===1){S.nodeIndex=++T;
}}parent.sizcache=W;
}var V=Q.nodeIndex-U;

if(Y==0){return V==0;
}else{return (V%Y==0&&V/Y>=0);
}}},ID:function(bm,bn){return bm.nodeType===1&&bm.getAttribute("id")===bn;
},TAG:function(eE,eF){return (eF==="*"&&eE.nodeType===1)||eE.nodeName===eF;
},CLASS:function(bV,bW){return (" "+(bV.className||bV.getAttribute("class"))+" ").indexOf(bW)>-1;
},ATTR:function(fB,fC){var name=fC[1],fG=C.attrHandle[name]?C.attrHandle[name](fB):fB[name]!=null?fB[name]:fB.getAttribute(name),fF=fG+"",fE=fC[2],fD=fC[4];
return fG==null?fE==="!=":fE==="="?fF===fD:fE==="*="?fF.indexOf(fD)>=0:fE==="~="?(" "+fF+" ").indexOf(fD)>=0:!fD?fF&&fG!==false:fE==="!="?fF!=fD:fE==="^="?fF.indexOf(fD)===0:fE==="$="?fF.substr(fF.length-fD.length)===fD:fE==="|="?fF===fD||fF.substr(0,fD.length+1)===fD+"-":false;
},POS:function(cd,ce,i,cf){var name=ce[2],cg=C.setFilters[name];

if(cg){return cg(cd,i,ce,cf);
}}}};
var H=C.match.POS;

for(var L in C.match){C.match[L]=new RegExp(C.match[L].source+/(?![^\[]*\])(?![^\(]*\))/.source);
C.leftMatch[L]=new RegExp(/(^(?:.|\r|\n)*?)/.source+C.match[L].source);
}var y=function(eH,eI){eH=Array.prototype.slice.call(eH,0);

if(eI){eI.push.apply(eI,eH);
return eI;
}return eH;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0);
}catch(e){y=function(bt,bu){var bv=bu||[];

if(I.call(bt)===cm){Array.prototype.push.apply(bv,bt);
}else{if(typeof bt.length===cJ){for(var i=0,l=bt.length;i<l;i++){bv.push(bt[i]);
}}else{for(var i=0;bt[i];i++){bv.push(bt[i]);
}}}return bv;
};
}var J;

if(document.documentElement.compareDocumentPosition){J=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){G=true;
}return 0;
}var u=a.compareDocumentPosition(b)&4?-1:a===b?0:1;

if(u===0){G=true;
}return u;
};
}else if(cF in document.documentElement){J=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){G=true;
}return 0;
}var bA=a.sourceIndex-b.sourceIndex;

if(bA===0){G=true;
}return bA;
};
}else if(document.createRange){J=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){G=true;
}return 0;
}var eY=a.ownerDocument.createRange(),fa=b.ownerDocument.createRange();
eY.setStart(a,0);
eY.setEnd(a,0);
fa.setStart(b,0);
fa.setEnd(b,0);
var eX=eY.compareBoundaryPoints(Range.START_TO_END,fa);

if(eX===0){G=true;
}return eX;
};
}(function(){var bj=document.createElement(cr),bi=cU+(new Date).getTime();
bj.innerHTML=cw+bi+cX;
var bh=document.documentElement;
bh.insertBefore(bj,bh.firstChild);
if(!!document.getElementById(bi)){C.find.ID=function(dP,dQ,dR){if(typeof dQ.getElementById!=="undefined"&&!dR){var m=dQ.getElementById(dP[1]);
return m?m.id===dP[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===dP[1]?[m]:undefined:[];
}};
C.filter.ID=function(dD,dE){var dF=typeof dD.getAttributeNode!=="undefined"&&dD.getAttributeNode("id");
return dD.nodeType===1&&dF&&dF.nodeValue===dE;
};
}bh.removeChild(bj);
bh=bj=null;
})();
(function(){var fP=document.createElement(cr);
fP.appendChild(document.createComment(ct));
if(fP.getElementsByTagName(cp).length>0){C.find.TAG=function(bo,bp){var br=bp.getElementsByTagName(bo[1]);
if(bo[1]==="*"){var bq=[];

for(var i=0;br[i];i++){if(br[i].nodeType===1){bq.push(br[i]);
}}br=bq;
}return br;
};
}fP.innerHTML=cz;

if(fP.firstChild&&typeof fP.firstChild.getAttribute!==cG&&fP.firstChild.getAttribute(co)!==cx){C.attrHandle.href=function(du){return du.getAttribute(co,2);
};
}fP=null;
})();

if(document.querySelectorAll)(function(){var ci=A,ch=document.createElement(cr);
ch.innerHTML=cE;
if(ch.querySelectorAll&&ch.querySelectorAll(cO).length===0){return;
}A=function(bR,bS,bT,bU){bS=bS||document;
if(!bU&&bS.nodeType===9&&!F(bS)){try{return y(bS.querySelectorAll(bR),bT);
}catch(e){}}return ci(bR,bS,bT,bU);
};

for(var cj in ci){A[cj]=ci[cj];
}ch=null;
})();

if(document.getElementsByClassName&&document.documentElement.getElementsByClassName)(function(){var dA=document.createElement(cr);
dA.innerHTML=cK;
if(dA.getElementsByClassName(cn).length===0)return;
dA.lastChild.className=cn;

if(dA.getElementsByClassName(cn).length===1)return;
C.order.splice(1,0,cW);
C.find.CLASS=function(bI,bJ,bK){if(typeof bJ.getElementsByClassName!=="undefined"&&!bK){return bJ.getElementsByClassName(bI[1]);
}};
dA=null;
})();
function P(dS,dT,dU,dV,dW,dX){var dY=dS==cq&&!dX;

for(var i=0,l=dV.length;i<l;i++){var eb=dV[i];

if(eb){if(dY&&eb.nodeType===1){eb.sizcache=dU;
eb.sizset=i;
}eb=eb[dS];
var ea=false;

while(eb){if(eb.sizcache===dU){ea=dV[eb.sizset];
break;
}
if(eb.nodeType===1&&!dX){eb.sizcache=dU;
eb.sizset=i;
}
if(eb.nodeName===dT){ea=eb;
break;
}eb=eb[dS];
}dV[i]=ea;
}}}function N(fc,fd,fe,ff,fg,fh){var fi=fc==cq&&!fh;

for(var i=0,l=ff.length;i<l;i++){var fk=ff[i];

if(fk){if(fi&&fk.nodeType===1){fk.sizcache=fe;
fk.sizset=i;
}fk=fk[fc];
var fj=false;

while(fk){if(fk.sizcache===fe){fj=ff[fk.sizset];
break;
}
if(fk.nodeType===1){if(!fh){fk.sizcache=fe;
fk.sizset=i;
}
if(typeof fd!==cs){if(fk===fd){fj=true;
break;
}}else if(A.filter(fd,[fk]).length>0){fj=fk;
break;
}}fk=fk[fc];
}ff[i]=fj;
}}}var D=document.compareDocumentPosition?
function(a,b){return a.compareDocumentPosition(b)&16;
}:
function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
var F=function(eW){return eW.nodeType===9&&eW.documentElement.nodeName!==ck||!!eW.ownerDocument&&eW.ownerDocument.documentElement.nodeName!==ck;
};
var B=function(fo,fp){var fr=[],fq=ct,ft,fs=fp.nodeType?[fp]:fp;
while((ft=C.match.PSEUDO.exec(fo))){fq+=ft[0];
fo=fo.replace(C.match.PSEUDO,ct);
}fo=C.relative[fo]?fo+cp:fo;

for(var i=0,l=fs.length;i<l;i++){A(fo,fs[i],fr);
}return A.filter(fq,fr);
};
var K=qx.bom.Selector;
K.query=function(q,r){return A(q,r);
};
K.matches=function(by,bz){return A(by,null,null,bz);
};
})();
})();
(function(){var l="mshtml",k="pop.push.reverse.shift.sort.splice.unshift.join.slice",j="number",h="qx.type.BaseArray",g="qx.client",f=".";
qx.Class.define(h,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function q(a){if(qx.core.Variant.isSet(g,l)){p.prototype={length:0,$$isArray:true};
var d=k.split(f);

for(var length=d.length;length;){p.prototype[d[--length]]=Array.prototype[d[length]];
}}var e=Array.prototype.slice;
p.prototype.concat=function(){var n=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var m;

if(arguments[i] instanceof p){m=e.call(arguments[i],0);
}else if(arguments[i] instanceof Array){m=arguments[i];
}else{m=[arguments[i]];
}n.push.apply(n,m);
}return n;
};
p.prototype.toString=function(){return e.call(this,0).toString();
};
p.prototype.toLocaleString=function(){return e.call(this,0).toLocaleString();
};
p.prototype.constructor=p;
p.prototype.indexOf=qx.lang.Core.arrayIndexOf;
p.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
p.prototype.forEach=qx.lang.Core.arrayForEach;
p.prototype.some=qx.lang.Core.arraySome;
p.prototype.every=qx.lang.Core.arrayEvery;
var b=qx.lang.Core.arrayFilter;
var c=qx.lang.Core.arrayMap;
p.prototype.filter=function(){var r=new this.constructor;
r.push.apply(r,b.apply(this,arguments));
return r;
};
p.prototype.map=function(){var s=new this.constructor;
s.push.apply(s,c.apply(this,arguments));
return s;
};
p.prototype.slice=function(){var t=new this.constructor;
t.push.apply(t,Array.prototype.slice.apply(this,arguments));
return t;
};
p.prototype.splice=function(){var u=new this.constructor;
u.push.apply(u,Array.prototype.splice.apply(this,arguments));
return u;
};
p.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
p.prototype.valueOf=function(){return this.length;
};
return p;
}function p(length){if(arguments.length===1&&typeof length===j){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function o(){}o.prototype=[];
p.prototype=new o;
p.prototype.length=0;
qx.type.BaseArray=q(p);
})();
})();
(function(){var I="change",H="input",G="checkbox",F="radio",E="textarea",D="qx.client",C="text",B="password",A="keypress",z="propertychange",v="select-multiple",y="checked",x="value",u="select",t="qx.event.handler.Input",w="Enter";
qx.Class.define(t,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(k,m){var n=k.tagName.toLowerCase();

if(m===H&&(n===H||n===E)){return true;
}
if(m===I&&(n===H||n===E||n===u)){return true;
}return false;
},registerEvent:qx.core.Variant.select(D,{"mshtml":function(J,K,L){if(!J.__eg){var M=J.tagName.toLowerCase();
var N=J.type;

if(N===C||N===B||M===E||N===G||N===F){qx.bom.Event.addNativeListener(J,z,this._onPropertyWrapper);
}
if(N!==G&&N!==F){qx.bom.Event.addNativeListener(J,I,this._onChangeValueWrapper);
}this.__eh(J,N);
J.__eg=true;
}},"default":function(a,b,c){if(b===H){this.__fO(a);
}else if(b===I){if(a.type===F||a.type===G){qx.bom.Event.addNativeListener(a,I,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(a,I,this._onChangeValueWrapper);
}this.__eh(a,a.type);
}}}),__fO:qx.core.Variant.select(D,{"mshtml":null,"webkit":function(Q){var R=Q.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&R==E){qx.bom.Event.addNativeListener(Q,A,this._onInputWrapper);
}qx.bom.Event.addNativeListener(Q,H,this._onInputWrapper);
},"default":function(f){qx.bom.Event.addNativeListener(f,H,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(D,{"mshtml":function(W,X){if(W.__eg){var Y=W.tagName.toLowerCase();
var ba=W.type;

if(ba===C||ba===B||Y===E||ba===G||ba===F){qx.bom.Event.removeNativeListener(W,z,this._onPropertyWrapper);
}
if(ba!==G&&ba!==F){qx.bom.Event.removeNativeListener(W,I,this._onChangeValueWrapper);
}
try{delete W.__eg;
}catch(p){W.__eg=null;
}}},"default":function(U,V){if(V===H){this.__fO(U);
}else if(V===I){if(U.type===F||U.type===G){qx.bom.Event.removeNativeListener(U,I,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(U,I,this._onChangeValueWrapper);
}}}}),__fP:qx.core.Variant.select(D,{"mshtml":null,"webkit":function(bc){var bd=bc.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&bd==E){qx.bom.Event.removeNativeListener(bc,A,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(bc,H,this._onInputWrapper);
},"default":function(q){qx.bom.Event.removeNativeListener(q,H,this._onInputWrapper);
}}),__eh:qx.core.Variant.select(D,{"mshtml|opera":function(h,j){if(j===C||j===B){qx.event.Registration.addListener(h,A,function(e){if(e.getKeyIdentifier()===w){qx.event.Registration.fireEvent(h,I,qx.event.type.Data,[h.value]);
}});
}},"default":function(r,s){}}),_onInput:qx.event.GlobalError.observeMethod(function(e){var d=e.target;
qx.event.Registration.fireEvent(d,H,qx.event.type.Data,[d.value]);
}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var T=e.target||e.srcElement;
var S=T.value;

if(T.type===v){var S=[];

for(var i=0,o=T.options,l=o.length;i<l;i++){if(o[i].selected){S.push(o[i].value);
}}}qx.event.Registration.fireEvent(T,I,qx.event.type.Data,[S]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var g=e.target;

if(g.type===F){if(g.checked){qx.event.Registration.fireEvent(g,I,qx.event.type.Data,[g.value]);
}}else{qx.event.Registration.fireEvent(g,I,qx.event.type.Data,[g.checked]);
}}),_onProperty:qx.core.Variant.select(D,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var O=e.target||e.srcElement;
var P=e.propertyName;

if(P===x&&(O.type===C||O.type===B||O.tagName.toLowerCase()===E)){if(!O.__inValueSet){qx.event.Registration.fireEvent(O,H,qx.event.type.Data,[O.value]);
}}else if(P===y){if(O.type===G){qx.event.Registration.fireEvent(O,I,qx.event.type.Data,[O.checked]);
}else if(O.checked){qx.event.Registration.fireEvent(O,I,qx.event.type.Data,[O.value]);
}}}),"default":function(){}})},defer:function(bb){qx.event.Registration.addHandler(bb);
}});
})();
(function(){var bb="",ba="select",Y="soft",X="off",W="qx.client",V="wrap",U="text",T="mshtml",S="number",R="checkbox",K="select-one",Q="input",N="option",J="value",I="radio",M="qx.bom.Input",L="nowrap",O="textarea",H="auto",P="normal";
qx.Class.define(M,{statics:{__ei:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(r,s,t){{};
var s=s?qx.lang.Object.clone(s):{};
var u;

if(r===O||r===ba){u=r;
}else{u=Q;
s.type=r;
}return qx.bom.Element.create(u,s,t);
},setValue:function(a,b){var g=a.nodeName.toLowerCase();
var d=a.type;
var Array=qx.lang.Array;
var h=qx.lang.Type;

if(typeof b===S){b+=bb;
}
if((d===R||d===I)){if(h.isArray(b)){a.checked=Array.contains(b,a.value);
}else{a.checked=a.value==b;
}}else if(g===ba){var c=h.isArray(b);
var j=a.options;
var e,f;

for(var i=0,l=j.length;i<l;i++){e=j[i];
f=e.getAttribute(J);

if(f==null){f=e.text;
}e.selected=c?Array.contains(b,f):b==f;
}
if(c&&b.length==0){a.selectedIndex=-1;
}}else if(d===U&&qx.core.Variant.isSet(W,T)){a.__ej=true;
a.value=b;
a.__ej=null;
}else{a.value=b;
}},getValue:function(x){var D=x.nodeName.toLowerCase();

if(D===N){return (x.attributes.value||{}).specified?x.value:x.text;
}
if(D===ba){var y=x.selectedIndex;
if(y<0){return null;
}var E=[];
var G=x.options;
var F=x.type==K;
var C=qx.bom.Input;
var B;
for(var i=F?y:0,A=F?y+1:G.length;i<A;i++){var z=G[i];

if(z.selected){B=C.getValue(z);
if(F){return B;
}E.push(B);
}}return E;
}else{return (x.value||bb).replace(/\r/g,bb);
}},setWrap:qx.core.Variant.select(W,{"mshtml":function(k,m){k.wrap=m?Y:X;
},"gecko|webkit":function(n,o){var q=o?Y:X;
var p=o?bb:H;
n.setAttribute(V,q);
n.style.overflow=p;
},"default":function(v,w){v.style.whiteSpace=w?P:L;
}})}});
})();
(function(){var cz="get",cy="set",cx="reset",cw=":not(",cv="getValue",cu="append",ct=")",cs="getPreviousSiblings",cr="#",cq="qx.bom.Collection",cX="setValue",cW="prepend",cV="string",cU="getAncestors",cT="getOffsetParent",cS="remove",cR=">*",cQ="add",cP="*",cO="",cG="addListener",cH="has",cE="toggle",cF="getSiblings",cC="replace",cD="after",cA="replaceWith",cB="setCss",cI="setStyles",cJ="before",cL="getNextSiblings",cK="getPosition",cN="getCss",cM="removeListener";
(function(){var dy=function(bi,bj){return function(bJ,bK,bL,bM,bN,bO){var length=this.length;

if(length>0){var bP=bi[bj];

for(var i=0;i<length;i++){if(this[i].nodeType===1){bP.call(bi,this[i],bJ,bK,bL,bM,bN,bO);
}}}return this;
};
};
var dx=function(a,b){return function(dk,dl,dm,dn,dp,dq){if(this.length>0){var dr=this[0].nodeType===1?a[b](this[0],dk,dl,dm,dn,dp,dq):null;

if(dr&&dr.nodeType){return this.__en([dr]);
}else{return dr;
}}return null;
};
};
qx.Class.define(cq,{extend:qx.type.BaseArray,statics:{query:function(dh,di){var dj=qx.bom.Selector.query(dh,di);
return qx.lang.Array.cast(dj,qx.bom.Collection);
},id:function(cj){var ck=document.getElementById(cj);
if(ck&&ck.id!=cj){return qx.bom.Collection.query(cr+cj);
}return new qx.bom.Collection(ck);
},html:function(H,I){var J=qx.bom.Html.clean([H],I);
return qx.lang.Array.cast(J,qx.bom.Collection);
},__ek:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(K,L){var N=qx.bom.Collection;
if(K.nodeType){return new N(K);
}else if(typeof K===cV){var M=N.__ek.exec(K);

if(M){return M[1]?N.html(M[1],L):N.id(M[3].substring(1));
}else{return N.query(K,L);
}}else{return qx.lang.Array.cast(K,qx.bom.Collection);
}}},members:{__eo:null,setAttribute:dy(qx.bom.element.Attribute,cy),resetAttribute:dy(qx.bom.element.Attribute,cx),getAttribute:dx(qx.bom.element.Attribute,cz),addClass:dy(qx.bom.element.Class,cQ),getClass:dx(qx.bom.element.Class,cz),hasClass:dx(qx.bom.element.Class,cH),removeClass:dy(qx.bom.element.Class,cS),replaceClass:dy(qx.bom.element.Class,cC),toggleClass:dy(qx.bom.element.Class,cE),setValue:dy(qx.bom.Input,cX),getValue:dx(qx.bom.Input,cv),setStyle:dy(qx.bom.element.Style,cy),setStyles:dy(qx.bom.element.Style,cI),resetStyle:dy(qx.bom.element.Style,cx),getStyle:dx(qx.bom.element.Style,cz),setCss:dy(qx.bom.element.Style,cB),getCss:dy(qx.bom.element.Style,cN),getOffset:dx(qx.bom.element.Location,cz),getPosition:dx(qx.bom.element.Location,cK),getOffsetParent:dx(qx.bom.element.Location,cT),setScrollLeft:function(bH){var Node=qx.dom.Node;

for(var i=0,l=this.length,bI;i<l;i++){bI=this[i];

if(Node.isElement(bI)){bI.scrollLeft=bH;
}else if(Node.isWindow(bI)){bI.scrollTo(bH,this.getScrollTop(bI));
}else if(Node.isDocument(bI)){Node.getWindow(bI).scrollTo(bH,this.getScrollTop(bI));
}}return this;
},setScrollTop:function(D){var Node=qx.dom.Node;

for(var i=0,l=this.length,E;i<l;i++){E=this[i];

if(Node.isElement(E)){E.scrollTop=D;
}else if(Node.isWindow(E)){E.scrollTo(this.getScrollLeft(E),D);
}else if(Node.isDocument(E)){Node.getWindow(E).scrollTo(this.getScrollLeft(E),D);
}}return this;
},getScrollLeft:function(){var bG=this[0];

if(!bG){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(bG)||Node.isDocument(bG)){return qx.bom.Viewport.getScrollLeft();
}return bG.scrollLeft;
},getScrollTop:function(){var c=this[0];

if(!c){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(c)||Node.isDocument(c)){return qx.bom.Viewport.getScrollTop();
}return c.scrollTop;
},getWidth:function(){var cd=this[0];
var Node=qx.dom.Node;

if(cd){if(Node.isElement(cd)){return qx.bom.element.Dimension.getWidth(cd);
}else if(Node.isDocument(cd)){return qx.bom.Document.getWidth(Node.getWindow(cd));
}else if(Node.isWindow(cd)){return qx.bom.Viewport.getWidth(cd);
}}return null;
},getContentWidth:function(){var O=this[0];

if(qx.dom.Node.isElement(O)){return qx.bom.element.Dimension.getContentWidth(O);
}return null;
},getHeight:function(){var bh=this[0];
var Node=qx.dom.Node;

if(bh){if(Node.isElement(bh)){return qx.bom.element.Dimension.getHeight(bh);
}else if(Node.isDocument(bh)){return qx.bom.Document.getHeight(Node.getWindow(bh));
}else if(Node.isWindow(bh)){return qx.bom.Viewport.getHeight(bh);
}}return null;
},getContentHeight:function(){var ci=this[0];

if(qx.dom.Node.isElement(ci)){return qx.bom.element.Dimension.getContentHeight(ci);
}return null;
},addListener:dy(qx.bom.Element,cG),removeListener:dy(qx.bom.Element,cM),eq:function(bg){return this.slice(bg,+bg+1);
},filter:function(p,q){var r;

if(qx.lang.Type.isFunction(p)){r=qx.type.BaseArray.prototype.filter.call(this,p,q);
}else{r=qx.bom.Selector.matches(p,this);
}return this.__en(r);
},is:function(e){return !!e&&qx.bom.Selector.matches(e,this).length>0;
},__el:/^.[^:#\[\.,]*$/,not:function(n){if(this.__el.test(n)){var o=qx.bom.Selector.matches(cw+n+ct,this);
return this.__en(o);
}var o=qx.bom.Selector.matches(n,this);
return this.filter(function(cp){return o.indexOf(cp)===-1;
});
},add:function(ce,cf){var cg=qx.bom.Selector.query(ce,cf);
var ch=qx.lang.Array.unique(this.concat(cg));
return this.__en(ch);
},children:function(bE){var bF=[];

for(var i=0,l=this.length;i<l;i++){bF.push.apply(bF,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(bE){bF=qx.bom.Selector.matches(bE,bF);
}return this.__en(bF);
},closest:function(f){var g=new qx.bom.Collection(1);
var k=qx.bom.Selector;
var h=this.map(function(co){while(co&&co.ownerDocument){g[0]=co;

if(k.matches(f,g).length>0){return co;
}co=co.parentNode;
}});
return this.__en(qx.lang.Array.unique(h));
},contents:function(){var bl=[];
var bk=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){bl.push.apply(bl,bk.fromCollection(this[i].childNodes));
}return this.__en(bl);
},find:function(cY){var db=qx.bom.Selector;
if(this.length===1){return this.__en(db.query(cY,this[0]));
}else{var da=[];

for(var i=0,l=this.length;i<l;i++){da.push.apply(da,db.query(cY,this[i]));
}return this.__en(qx.lang.Array.unique(da));
}},next:function(Q){var R=qx.dom.Hierarchy;
var S=this.map(R.getNextElementSibling,R);
if(Q){S=qx.bom.Selector.matches(Q,S);
}return this.__en(S);
},nextAll:function(bp){return this.__em(cL,bp);
},prev:function(W){var X=qx.dom.Hierarchy;
var Y=this.map(X.getPreviousElementSibling,X);
if(W){Y=qx.bom.Selector.matches(W,Y);
}return this.__en(Y);
},prevAll:function(F){return this.__em(cs,F);
},parent:function(bB){var Element=qx.dom.Element;
var bC=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(bB){bC=qx.bom.Selector.matches(bB,bC);
}return this.__en(bC);
},parents:function(bD){return this.__em(cU,bD);
},siblings:function(bQ){return this.__em(cF,bQ);
},__em:function(bX,bY){var cb=[];
var ca=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){cb.push.apply(cb,ca[bX](this[i]));
}var cc=qx.lang.Array.unique(cb);
if(bY){cc=qx.bom.Selector.matches(bY,cc);
}return this.__en(cc);
},__en:function(de){var df=new qx.bom.Collection;
df.__eo=this;
de=Array.prototype.slice.call(de,0);
df.push.apply(df,de);
return df;
},andSelf:function(){return this.add(this.__eo);
},end:function(){return this.__eo||new qx.bom.Collection();
},__ep:function(bq,br){var bw=this[0];
var bv=bw.ownerDocument||bw;
var bu=bv.createDocumentFragment();
var by=qx.bom.Html.clean(bq,bv,bu);
var bA=bu.firstChild;
if(bA){var bs=this.length-1;

for(var i=0,l=bs;i<l;i++){br.call(this,this[i],bu.cloneNode(true));
}br.call(this,this[bs],bu);
}if(by){var bt;
var bz=qx.io.ScriptLoader;
var bx=qx.lang.Function;

for(var i=0,l=by.length;i<l;i++){bt=by[i];
if(bt.src){bz.get().load(bt.src);
}else{bx.globalEval(bt.text||bt.textContent||bt.innerHTML||cO);
}if(bt.parentNode){bt.parentNode.removeChild(bt);
}}}return this;
},__eq:function(bR,bS){var bU=qx.bom.Selector;
var bT=qx.lang.Array;
var bW=[];

for(var i=0,l=bR.length;i<l;i++){{};
bW.push.apply(bW,bU.query(bR[i]));
}bW=bT.cast(bT.unique(bW),qx.bom.Collection);
for(var i=0,bV=this.length;i<bV;i++){bW[bS](this[i]);
}return this;
},append:function(G){return this.__ep(arguments,this.__er);
},prepend:function(m){return this.__ep(arguments,this.__es);
},__er:function(be,bf){be.appendChild(bf);
},__es:function(A,B){A.insertBefore(B,A.firstChild);
},appendTo:function(T){return this.__eq(arguments,cu);
},prependTo:function(cm){return this.__eq(arguments,cW);
},before:function(s){return this.__ep(arguments,this.__et);
},after:function(bm){return this.__ep(arguments,this.__eu);
},__et:function(U,V){U.parentNode.insertBefore(V,U);
},__eu:function(bn,bo){bn.parentNode.insertBefore(bo,bn.nextSibling);
},insertBefore:function(cn){return this.__eq(arguments,cJ);
},insertAfter:function(dg){return this.__eq(arguments,cD);
},wrapAll:function(content){var dd=this[0];

if(dd){var dc=qx.bom.Collection.create(content,dd.ownerDocument).clone();
if(dd.parentNode){dd.parentNode.insertBefore(dc[0],dd);
}dc.map(this.__ev).append(this);
}return this;
},__ev:function(C){while(C.firstChild){C=C.firstChild;
}return C;
},wrapInner:function(content){var bb=new qx.bom.Collection(1);

for(var i=0,l=this.length;i<l;i++){bb[0]=this[i];
bb.contents().wrapAll(content);
}return this;
},wrap:function(content){var cl=new qx.bom.Collection(1);
for(var i=0,l=this.length;i<l;i++){cl[0]=this[i];
cl.wrapAll(content);
}return this;
},replaceWith:function(content){return this.after(content).remove();
},replaceAll:function(P){return this.__eq(arguments,cA);
},remove:function(dt){var dv=this;

if(dt){dv=this.filter(dt);

if(dv.length==0){return this;
}}for(var i=0,dw=dv.length,du;i<dw;i++){du=dv[i];

if(du.parentNode){du.parentNode.removeChild(du);
}}return dv;
},destroy:function(t){if(this.length==0){return this;
}var v=qx.bom.Selector;
var y=this;

if(t){y=this.filter(t);

if(y.length==0){return this;
}}var x=qx.event.Registration.getManager(this[0]);

for(var i=0,l=y.length,w,z;i<l;i++){w=y[i];
x.removeAllListeners(w);
z=v.query(cP,w);

for(var j=0,u=z.length;j<u;j++){x.removeAllListeners(z[j]);
}if(w.parentNode){w.parentNode.removeChild(w);
}}if(t){y.end();
qx.lang.Array.exclude(this,y);
}else{this.length=0;
}return this;
},empty:function(){var ba=qx.bom.Collection;

for(var i=0,l=this.length;i<l;i++){ba.query(cR,this[i]).destroy();
while(this.firstChild){this.removeChild(this.firstChild);
}}return this;
},clone:function(ds){var Element=qx.bom.Element;
return ds?
this.map(function(d){return Element.clone(d,true);
}):this.map(Element.clone,Element);
}},defer:function(bc,bd){if(window.$==null){window.$=bc.create;
}}});
})();
})();
(function(){var m="qx.client",k="string",h="script",g="<table>",f="<fieldset>",e="<select multiple='multiple'>",d="</div>",c="</select>",b="</tr></tbody></table>",a="<col",J="div",I="<table><tbody><tr>",H=">",G="<table><tbody></tbody><colgroup>",F="<th",E="</tbody></table>",D="<td",C="</colgroup></table>",B="<opt",A="text/javascript",t="",u="</fieldset>",r="<table><tbody>",s="div<div>",p="<table",q="mshtml",n="qx.bom.Html",o="<leg",v="tbody",w="<tr",y="</table>",x="undefined",z="></";
qx.Class.define(n,{statics:{__ew:function(be,bf,bg){return bg.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?be:bf+z+bg+H;
},__ex:{opt:[1,e,c],leg:[1,f,u],table:[1,g,y],tr:[2,r,E],td:[3,I,b],col:[2,G,C],def:qx.core.Variant.select(m,{"mshtml":[1,s,d],"default":null})},__ey:function(U,V){var bc=V.createElement(J);
U=U.replace(/(<(\w+)[^>]*?)\/>/g,this.__ew);
var X=U.replace(/^\s+/,t).substring(0,5).toLowerCase();
var bb,W=this.__ex;

if(!X.indexOf(B)){bb=W.opt;
}else if(!X.indexOf(o)){bb=W.leg;
}else if(X.match(/^<(thead|tbody|tfoot|colg|cap)/)){bb=W.table;
}else if(!X.indexOf(w)){bb=W.tr;
}else if(!X.indexOf(D)||!X.indexOf(F)){bb=W.td;
}else if(!X.indexOf(a)){bb=W.col;
}else{bb=W.def;
}if(bb){bc.innerHTML=bb[1]+U+bb[2];
var ba=bb[0];

while(ba--){bc=bc.lastChild;
}}else{bc.innerHTML=U;
}if(qx.core.Variant.isSet(m,q)){var bd=/<tbody/i.test(U);
var Y=!X.indexOf(p)&&!bd?bc.firstChild&&bc.firstChild.childNodes:bb[1]==g&&!bd?bc.childNodes:[];

for(var j=Y.length-1;j>=0;--j){if(Y[j].tagName.toLowerCase()===v&&!Y[j].childNodes.length){Y[j].parentNode.removeChild(Y[j]);
}}if(/^\s/.test(U)){bc.insertBefore(V.createTextNode(U.match(/^\s*/)[0]),bc.firstChild);
}}return qx.lang.Array.fromCollection(bc.childNodes);
},clean:function(K,L,M){L=L||document;
if(typeof L.createElement===x){L=L.ownerDocument||L[0]&&L[0].ownerDocument||document;
}if(!M&&K.length===1&&typeof K[0]===k){var T=/^<(\w+)\s*\/?>$/.exec(K[0]);

if(T){return [L.createElement(T[1])];
}}var N,P=[];

for(var i=0,l=K.length;i<l;i++){N=K[i];
if(typeof N===k){N=this.__ey(N,L);
}if(N.nodeType){P.push(N);
}else if(N instanceof qx.type.BaseArray){P.push.apply(P,Array.prototype.slice.call(N,0));
}else if(N.toElement){P.push(N.toElement());
}else{P.push.apply(P,N);
}}if(M){var S=[],R=qx.lang.Array,Q,O;

for(var i=0;P[i];i++){Q=P[i];

if(Q.nodeType==1&&Q.tagName.toLowerCase()===h&&(!Q.type||Q.type.toLowerCase()===A)){if(Q.parentNode){Q.parentNode.removeChild(P[i]);
}S.push(Q);
}else{if(Q.nodeType===1){O=R.fromCollection(Q.getElementsByTagName(h));
P.splice.apply(P,[i+1,0].concat(O));
}M.appendChild(Q);
}}return S;
}return P;
}}});
})();
(function(){var u="success",t="head",s="complete",r="error",q="load",p="fail",o="loaded",n="readystatechange",m="qx.io.ScriptLoader",l="script",i="qx.client",k="text/javascript",j="abort";
qx.Class.define(m,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__fQ=qx.lang.Function.bind(this.__fW,this);
this.__fR=document.createElement(l);
},members:{__fS:null,__fT:null,__fU:null,__fQ:null,__fR:null,load:function(a,b,c){if(this.__fS){throw new Error("Another request is still running!");
}this.__fS=true;
var d=document.getElementsByTagName(t)[0];
var f=this.__fR;
this.__fT=b||null;
this.__fU=c||window;
f.type=k;
f.onerror=f.onload=f.onreadystatechange=this.__fQ;
f.src=a;
d.appendChild(f);
},abort:function(){if(this.__fS){this.__fV(j);
}},__fV:function(status){var h=this.__fR;
h.onerror=h.onload=h.onreadystatechange=null;
document.getElementsByTagName(t)[0].removeChild(h);
delete this.__fS;
if(this.__fT){this.__fT.call(this.__fU,status);
delete this.__fT;
}},__fW:qx.event.GlobalError.observeMethod(qx.core.Variant.select(i,{"mshtml":function(e){var g=this.__fR.readyState;

if(g==o){this.__fV(u);
}else if(g==s){this.__fV(u);
}else{return;
}},"opera":function(e){if(qx.lang.Type.isString(e)||e.type===r){return this.__fV(p);
}else if(e.type===q){return this.__fV(u);
}else{return;
}},"default":function(e){if(qx.lang.Type.isString(e)||e.type===r){this.__fV(p);
}else if(e.type===q){this.__fV(u);
}else if(e.type===n&&(e.target.readyState===s||e.target.readyState===o)){this.__fV(u);
}else{return;
}}}))},destruct:function(){this.__fR=this.__fQ=this.__fT=this.__fU=null;
}});
})();


qx.$$loader.init();

