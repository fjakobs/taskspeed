(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.globalErrorHandling":"off"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.aspects":"off","qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"."},"qx":{"resourceUri":".","sourceUri":".","version":"1.0.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"}};
qx.$$i18n    = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["bom:qooxdoo-1.0.1.js"]],
  urisBefore : [],
  packageHashes : {"0":"e4a06651f9df"},
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

qx.$$packageData['e4a06651f9df']={"resources":{}};
(function(){var w="toString",v=".",u="default",t="Object",s='"',r="Array",q="()",p="String",o="Function",n=".prototype",U="function",T="Boolean",S="Error",R="RegExp",Q="warn",P="hasOwnProperty",O="string",N="toLocaleString",M='\", "',L="info",D="BROKEN_IE",E="isPrototypeOf",B="Date",C="",z="qx.Bootstrap",A="]",x="Class",y="error",F="[Class ",G="valueOf",I="Number",H="count",K="debug",J="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return F+this.classname+A;
},createNamespace:function(name,bp){var br=name.split(v);
var parent=window;
var bq=br[0];

for(var i=0,bs=br.length-1;i<bs;i++,bq=br[i]){if(!parent[bq]){parent=parent[bq]={};
}else{parent=parent[bq];
}}parent[bq]=bp;
return bq;
},setDisplayName:function(bf,bg,name){bf.displayName=bg+v+name+q;
},setDisplayNames:function(bD,bE){for(var name in bD){var bF=bD[name];

if(bF instanceof Function){bF.displayName=bE+v+name+q;
}}},define:function(name,bw){if(!bw){var bw={statics:{}};
}var bB;
var bz=null;
qx.Bootstrap.setDisplayNames(bw.statics,name);

if(bw.members){qx.Bootstrap.setDisplayNames(bw.members,name+n);
bB=bw.construct||new Function;
var bx=bw.statics;

for(var by in bx){bB[by]=bx[by];
}bz=bB.prototype;
var bC=bw.members;

for(var by in bC){bz[by]=bC[by];
}}else{bB=bw.statics||{};
}var bA=this.createNamespace(name,bB);
bB.name=bB.classname=name;
bB.basename=bA;
bB.$$type=x;
if(!bB.hasOwnProperty(w)){bB.toString=this.genericToString;
}if(bw.defer){bw.defer(bB,bz);
}qx.Bootstrap.$$registry[name]=bw.statics;
return bB;
}};
qx.Bootstrap.define(z,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bG){return bG.__count__;
},"default":function(bS){var length=0;

for(var bT in bS){length++;
}return length;
}})[(({}).__count__==0)?H:u],objectMergeWith:function(f,g,h){if(h===undefined){h=true;
}
for(var j in g){if(h||f[j]===undefined){f[j]=g[j];
}}return f;
},__eG:[E,P,N,w,G],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bJ){var bK=[];

for(var bN in bJ){bK.push(bN);
}var bL=qx.Bootstrap.__eG;
var bM=Object.prototype.hasOwnProperty;

for(var i=0,a=bL,l=a.length;i<l;i++){if(bM.call(bJ,a[i])){bK.push(a[i]);
}}return bK;
},"default":function(X){var Y=[];

for(var ba in X){Y.push(ba);
}return Y;
}})[typeof (Object.keys)==
U?J:
(function(){for(var bn in {toString:1}){return bn;
}})()!==w?D:u],getKeysAsString:function(k){var m=qx.Bootstrap.getKeys(k);

if(m.length==0){return C;
}return s+m.join(M)+s;
},__eH:{"[object String]":p,"[object Array]":r,"[object Object]":t,"[object RegExp]":R,"[object Number]":I,"[object Boolean]":T,"[object Date]":B,"[object Function]":o,"[object Error]":S},firstUp:function(bv){return bv.charAt(0).toUpperCase()+bv.substr(1);
},firstLow:function(bQ){return bQ.charAt(0).toLowerCase()+bQ.substr(1);
},getClass:function(V){var W=Object.prototype.toString.call(V);
return (qx.Bootstrap.__eH[W]||W.slice(8,-1));
},isString:function(bo){return (bo!==null&&(typeof bo===O||qx.Bootstrap.getClass(bo)==p||bo instanceof String||(!!bo&&!!bo.$$isString)));
},isArray:function(bV){return (bV!==null&&(bV instanceof Array||(bV&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bV.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bV)==r||(!!bV&&!!bV.$$isArray)));
},isObject:function(bi){return (bi!==undefined&&bi!==null&&qx.Bootstrap.getClass(bi)==t);
},isFunction:function(bR){return qx.Bootstrap.getClass(bR)==o;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bj,name){while(bj){if(bj.$$properties&&bj.$$properties[name]){return bj.$$properties[name];
}bj=bj.superclass;
}return null;
},hasProperty:function(bh,name){return !!qx.Bootstrap.getPropertyDefinition(bh,name);
},getEventType:function(bm,name){var bm=bm.constructor;

while(bm.superclass){if(bm.$$events&&bm.$$events[name]!==undefined){return bm.$$events[name];
}bm=bm.superclass;
}return null;
},supportsEvent:function(bU,name){return !!qx.Bootstrap.getEventType(bU,name);
},getByInterface:function(b,c){var d,i,l;

while(b){if(b.$$implements){d=b.$$flatImplements;

for(i=0,l=d.length;i<l;i++){if(d[i]===c){return b;
}}}b=b.superclass;
}return null;
},hasInterface:function(bb,bc){return !!qx.Bootstrap.getByInterface(bb,bc);
},getMixins:function(bt){var bu=[];

while(bt){if(bt.$$includes){bu.push.apply(bu,bt.$$flatIncludes);
}bt=bt.superclass;
}return bu;
},$$logs:[],debug:function(bH,bI){qx.Bootstrap.$$logs.push([K,arguments]);
},info:function(bk,bl){qx.Bootstrap.$$logs.push([L,arguments]);
},warn:function(bd,be){qx.Bootstrap.$$logs.push([Q,arguments]);
},error:function(bO,bP){qx.Bootstrap.$$logs.push([y,arguments]);
},trace:function(e){}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__a:{},define:function(p,q){if(q===undefined){throw new Error('Default value of setting "'+p+'" must be defined!');
}
if(!this.__a[p]){this.__a[p]={};
}else if(this.__a[p].defaultValue!==undefined){throw new Error('Setting "'+p+'" is already defined!');
}this.__a[p].defaultValue=q;
},get:function(j){var k=this.__a[j];

if(k===undefined){throw new Error('Setting "'+j+'" is not defined.');
}
if(k.value!==undefined){return k.value;
}return k.defaultValue;
},set:function(r,s){if((r.split(a)).length<2){throw new Error('Malformed settings key "'+r+'". Must be following the schema "namespace.key".');
}
if(!this.__a[r]){this.__a[r]={};
}this.__a[r].value=s;
},__b:function(){if(window.qxsettings){for(var t in window.qxsettings){this.set(t,window.qxsettings[t]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(n){}this.__c();
}},__c:function(){if(this.get(h)!=true){return;
}var m=document.location.search.slice(1).split(g);

for(var i=0;i<m.length;i++){var l=m[i].split(b);

if(l.length!=3||l[0]!=c){continue;
}this.set(l[1],decodeURIComponent(l[2]));
}}},defer:function(o){o.define(h,false);
o.define(e,false);
o.define(d,0);
o.__b();
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
},define:function(B,C,D){{};

if(!this.__e[B]){this.__e[B]={};
}else{}this.__e[B].allowedValues=C;
this.__e[B].defaultValue=D;
},get:function(M){var N=this.__e[M];
{};

if(N.value!==undefined){return N.value;
}return N.defaultValue;
},__g:function(){if(window.qxvariants){for(var L in qxvariants){{};

if(!this.__e[L]){this.__e[L]={};
}this.__e[L].value=qxvariants[L];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(G){}this.__h(this.__e);
}},__h:function(){if(qx.core.Setting.get(m)!=true){return;
}var I=document.location.search.slice(1).split(p);

for(var i=0;i<I.length;i++){var J=I[i].split(f);

if(J.length!=3||J[0]!=c){continue;
}var K=J[1];

if(!this.__e[K]){this.__e[K]={};
}this.__e[K].value=decodeURIComponent(J[2]);
}},select:function(O,P){{};

for(var Q in P){if(this.isSet(O,Q)){return P[Q];
}}
if(P[r]!==undefined){return P[r];
}{};
},isSet:function(w,x){var y=w+n+x;

if(this.__f[y]!==undefined){return this.__f[y];
}var A=false;
if(x.indexOf(s)<0){A=this.get(w)===x;
}else{var z=x.split(s);

for(var i=0,l=z.length;i<l;i++){if(this.get(w)===z[i]){A=true;
break;
}}}this.__f[y]=A;
return A;
},__i:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__j:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__k:function(E,F){for(var i=0,l=E.length;i<l;i++){if(E[i]==F){return true;
}}return false;
}},defer:function(H){H.define(d,[a,h,b,g],qx.bom.client.Engine.NAME);
H.define(k,[u,t],u);
H.define(o,[u,t],t);
H.define(j,[u,t],u);
H.__g();
}});
})();
(function(){var s="function",r="Boolean",q="qx.Interface",p="]",o="toggle",n="Interface",m="is",k="[Interface ";
qx.Bootstrap.define(q,{statics:{define:function(name,D){if(D){if(D.extend&&!(D.extend instanceof Array)){D.extend=[D.extend];
}{};
var E=D.statics?D.statics:{};
if(D.extend){E.$$extends=D.extend;
}
if(D.properties){E.$$properties=D.properties;
}
if(D.members){E.$$members=D.members;
}
if(D.events){E.$$events=D.events;
}}else{var E={};
}E.$$type=n;
E.name=name;
E.toString=this.genericToString;
E.basename=qx.Bootstrap.createNamespace(name,E);
qx.Interface.$$registry[name]=E;
return E;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(L){if(!L){return [];
}var M=L.concat();

for(var i=0,l=L.length;i<l;i++){if(L[i].$$extends){M.push.apply(M,this.flatten(L[i].$$extends));
}}return M;
},__bl:function(a,b,c,d){var h=c.$$members;

if(h){for(var g in h){if(qx.Bootstrap.isFunction(h[g])){var f=this.__eI(b,g);
var e=f||qx.Bootstrap.isFunction(a[g]);

if(!e){throw new Error('Implementation of method "'+g+'" is missing in class "'+b.classname+'" required by interface "'+c.name+'"');
}var j=d===true&&!f&&!qx.Bootstrap.hasInterface(b,c);

if(j){a[g]=this.__bo(c,a[g],g,h[g]);
}}else{if(typeof a[g]===undefined){if(typeof a[g]!==s){throw new Error('Implementation of member "'+g+'" is missing in class "'+b.classname+'" required by interface "'+c.name+'"');
}}}}}},__eI:function(F,G){var K=G.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!K){return false;
}var H=qx.Bootstrap.firstLow(K[2]);
var I=qx.Bootstrap.getPropertyDefinition(F,H);

if(!I){return false;
}var J=K[0]==m||K[0]==o;

if(J){return qx.Bootstrap.getPropertyDefinition(F,H).check==r;
}return true;
},__bm:function(w,x){if(x.$$properties){for(var y in x.$$properties){if(!qx.Bootstrap.getPropertyDefinition(w,y)){throw new Error('The property "'+y+'" is not supported by Class "'+w.classname+'"!');
}}}},__bn:function(t,u){if(u.$$events){for(var v in u.$$events){if(!qx.Bootstrap.supportsEvent(t,v)){throw new Error('The event "'+v+'" is not supported by Class "'+t.classname+'"!');
}}}},assertObject:function(N,O){var Q=N.constructor;
this.__bl(N,Q,O,false);
this.__bm(Q,O);
this.__bn(Q,O);
var P=O.$$extends;

if(P){for(var i=0,l=P.length;i<l;i++){this.assertObject(N,P[i]);
}}},assert:function(z,A,B){this.__bl(z.prototype,z,A,B);
this.__bm(z,A);
this.__bn(z,A);
var C=A.$$extends;

if(C){for(var i=0,l=C.length;i<l;i++){this.assert(z,C[i],B);
}}},genericToString:function(){return k+this.name+p;
},$$registry:{},__bo:function(){},__bp:null,__bq:function(){}}});
})();
(function(){var q="qx.Mixin",p=".prototype",o="constructor",n="[Mixin ",m="]",k="destruct",j="Mixin";
qx.Bootstrap.define(q,{statics:{define:function(name,r){if(r){if(r.include&&!(r.include instanceof Array)){r.include=[r.include];
}{};
var t=r.statics?r.statics:{};
qx.Bootstrap.setDisplayNames(t,name);

for(var s in t){if(t[s] instanceof Function){t[s].$$mixin=t;
}}if(r.construct){t.$$constructor=r.construct;
qx.Bootstrap.setDisplayName(r.construct,name,o);
}
if(r.include){t.$$includes=r.include;
}
if(r.properties){t.$$properties=r.properties;
}
if(r.members){t.$$members=r.members;
qx.Bootstrap.setDisplayNames(r.members,name+p);
}
for(var s in t.$$members){if(t.$$members[s] instanceof Function){t.$$members[s].$$mixin=t;
}}
if(r.events){t.$$events=r.events;
}
if(r.destruct){t.$$destructor=r.destruct;
qx.Bootstrap.setDisplayName(r.destruct,name,k);
}}else{var t={};
}t.$$type=j;
t.name=name;
t.toString=this.genericToString;
t.basename=qx.Bootstrap.createNamespace(name,t);
this.$$registry[name]=t;
return t;
},checkCompatibility:function(a){var d=this.flatten(a);
var e=d.length;

if(e<2){return true;
}var h={};
var g={};
var f={};
var c;

for(var i=0;i<e;i++){c=d[i];

for(var b in c.events){if(f[b]){throw new Error('Conflict between mixin "'+c.name+'" and "'+f[b]+'" in member "'+b+'"!');
}f[b]=c.name;
}
for(var b in c.properties){if(h[b]){throw new Error('Conflict between mixin "'+c.name+'" and "'+h[b]+'" in property "'+b+'"!');
}h[b]=c.name;
}
for(var b in c.members){if(g[b]){throw new Error('Conflict between mixin "'+c.name+'" and "'+g[b]+'" in member "'+b+'"!');
}g[b]=c.name;
}}return true;
},isCompatible:function(w,x){var y=qx.Bootstrap.getMixins(x);
y.push(w);
return qx.Mixin.checkCompatibility(y);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(u){if(!u){return [];
}var v=u.concat();

for(var i=0,l=u.length;i<l;i++){if(u[i].$$includes){v.push.apply(v,this.flatten(u[i].$$includes));
}}return v;
},genericToString:function(){return n+this.name+m;
},$$registry:{},__W:null,__X:function(){}}});
})();
(function(){var dh=';',dg='computed=this.',df='=value;',de='this.',dd='if(this.',dc='!==undefined)',db='delete this.',da="set",cY="setThemed",cX='}',cM="init",cL="setRuntime",cK='else if(this.',cJ='return this.',cI="string",cH="boolean",cG="resetThemed",cF='!==undefined){',cE='=true;',cD="resetRuntime",dp="reset",dq="refresh",dm='old=this.',dn='else ',dk='if(old===undefined)old=this.',dl='old=computed=this.',di=' of an instance of ',dj=";",dr='if(old===computed)return value;',ds='if(old===undefined)old=null;',cQ='(value);',cP=' is not (yet) ready!");',cS='===value)return value;',cR='return init;',cU='var init=this.',cT="Error in property ",cW='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',cV='.validate.call(this, value);',cO='else{',cN=" in method ",bP='=computed;',bQ='(backup);',bR='if(computed===inherit){',bS="inherit",bT='if(value===undefined)prop.error(this,2,"',bU='if(a[i].',bV='else if(computed===undefined)',bW="': ",bX=" of class ",bY='===undefined)return;',dw="')){",dv='else this.',du='value=this.',dt='","',dA='if(init==qx.core.Property.$$inherit)init=null;',dz='var inherit=prop.$$inherit;',dy='var computed, old;',dx='computed=undefined;delete this.',dC='",value);',dB='computed=value;',co=';}',cp='){',cm='if(computed===undefined||computed===inherit){',cn='!==inherit){',cs='(computed, old, "',ct='return value;',cq='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cr="if(reg.hasListener(this, '",ck=')a[i].',cl='.$$properties.',ch="var reg=qx.event.Registration;",cg='return null;',cj='");',ci='var pa=this.getLayoutParent();if(pa)computed=pa.',cd='!==undefined&&',cc="', qx.event.type.Data, [computed, old]",cf='var backup=computed;',ce='}else{',cb="object",ca='if(computed===undefined)computed=null;',cy='var computed, old=this.',cz='throw new Error("Property ',cA=")}",cB='var prop=qx.core.Property;',cu=" with incoming value '",cv='if(computed===undefined||computed==inherit)computed=null;',cw='if((computed===undefined||computed===inherit)&&',cx="reg.fireEvent(this, '",cC="qx.core.Property";
qx.Bootstrap.define(cC,{statics:{__N:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__O:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bS,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:cI,dispose:cH,inheritable:cH,nullable:cH,themeable:cH,refine:cH,init:null,apply:cI,event:cI,check:null,transform:cI,deferredInit:cH,validate:null},$$allowedGroupKeys:{name:cI,group:cb,mode:cI,themeable:cH},$$inheritable:{},refresh:function(A){var parent=A.getLayoutParent();

if(parent){var D=A.constructor;
var F=this.$$store.inherit;
var E=this.$$store.init;
var C=this.$$method.refresh;
var G;
var B;
{};

while(D){G=D.$$properties;

if(G){for(var name in this.$$inheritable){if(G[name]&&A[C[name]]){B=parent[F[name]];

if(B===undefined){B=parent[E[name]];
}{};
A[C[name]](B);
}}}D=D.superclass;
}}},attach:function(b){var c=b.$$properties;

if(c){for(var name in c){this.attachMethods(b,name,c[name]);
}}b.$$propertiesAttached=true;
},attachMethods:function(dF,name,dG){dG.group?this.__P(dF,dG,name):this.__Q(dF,dG,name);
},__P:function(L,M,name){var T=qx.Bootstrap.firstUp(name);
var S=L.prototype;
var U=M.themeable===true;
{};
var V=[];
var P=[];

if(U){var N=[];
var R=[];
}var Q="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
V.push(Q);

if(U){N.push(Q);
}
if(M.mode=="shorthand"){var O="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
V.push(O);

if(U){N.push(O);
}}
for(var i=0,a=M.group,l=a.length;i<l;i++){{};
V.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
P.push("this.",this.$$method.reset[a[i]],"();");

if(U){{};
N.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
R.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+T;
S[this.$$method.set[name]]=new Function(V.join(""));
this.$$method.reset[name]="reset"+T;
S[this.$$method.reset[name]]=new Function(P.join(""));

if(U){this.$$method.setThemed[name]="setThemed"+T;
S[this.$$method.setThemed[name]]=new Function(N.join(""));
this.$$method.resetThemed[name]="resetThemed"+T;
S[this.$$method.resetThemed[name]]=new Function(R.join(""));
}},__Q:function(p,q,name){var s=qx.Bootstrap.firstUp(name);
var u=p.prototype;
{};
if(q.dispose===undefined&&typeof q.check==="string"){q.dispose=this.__O[q.check]||qx.Bootstrap.classIsDefined(q.check)||(qx.Interface&&qx.Interface.isDefined(q.check));
}var t=this.$$method;
var r=this.$$store;
r.runtime[name]="$$runtime_"+name;
r.user[name]="$$user_"+name;
r.theme[name]="$$theme_"+name;
r.init[name]="$$init_"+name;
r.inherit[name]="$$inherit_"+name;
r.useinit[name]="$$useinit_"+name;
t.get[name]="get"+s;
u[t.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,p,name,"get");
};
t.set[name]="set"+s;
u[t.set[name]]=function(bA){return qx.core.Property.executeOptimizedSetter(this,p,name,"set",arguments);
};
t.reset[name]="reset"+s;
u[t.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,p,name,"reset");
};

if(q.inheritable||q.apply||q.event||q.deferredInit){t.init[name]="init"+s;
u[t.init[name]]=function(dD){return qx.core.Property.executeOptimizedSetter(this,p,name,"init",arguments);
};
}
if(q.inheritable){t.refresh[name]="refresh"+s;
u[t.refresh[name]]=function(K){return qx.core.Property.executeOptimizedSetter(this,p,name,"refresh",arguments);
};
}t.setRuntime[name]="setRuntime"+s;
u[t.setRuntime[name]]=function(bv){return qx.core.Property.executeOptimizedSetter(this,p,name,"setRuntime",arguments);
};
t.resetRuntime[name]="resetRuntime"+s;
u[t.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,p,name,"resetRuntime");
};

if(q.themeable){t.setThemed[name]="setThemed"+s;
u[t.setThemed[name]]=function(bb){return qx.core.Property.executeOptimizedSetter(this,p,name,"setThemed",arguments);
};
t.resetThemed[name]="resetThemed"+s;
u[t.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,p,name,"resetThemed");
};
}
if(q.check==="Boolean"){u["toggle"+s]=new Function("return this."+t.set[name]+"(!this."+t.get[name]+"())");
u["is"+s]=new Function("return this."+t.get[name]+"()");
}},__R:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(bI,bJ,bK,bL,bM){var bN=bI.constructor.classname;
var bO=cT+bK+bX+bN+cN+this.$$method[bL][bK]+cu+bM+bW;
throw new Error(bO+(this.__R[bJ]||"Unknown reason: "+bJ));
},__S:function(d,e,name,f,g,h){var j=this.$$method[f][name];
{e[j]=new Function("value",g.join(""));
};
{};
qx.Bootstrap.setDisplayName(e[j],d.classname+".prototype",j);
if(h===undefined){return d[j]();
}else{return d[j](h[0]);
}},executeOptimizedGetter:function(bB,bC,name,bD){var bF=bC.$$properties[name];
var bH=bC.prototype;
var bE=[];
var bG=this.$$store;
bE.push(dd,bG.runtime[name],dc);
bE.push(cJ,bG.runtime[name],dh);

if(bF.inheritable){bE.push(cK,bG.inherit[name],dc);
bE.push(cJ,bG.inherit[name],dh);
bE.push(dn);
}bE.push(dd,bG.user[name],dc);
bE.push(cJ,bG.user[name],dh);

if(bF.themeable){bE.push(cK,bG.theme[name],dc);
bE.push(cJ,bG.theme[name],dh);
}
if(bF.deferredInit&&bF.init===undefined){bE.push(cK,bG.init[name],dc);
bE.push(cJ,bG.init[name],dh);
}bE.push(dn);

if(bF.init!==undefined){if(bF.inheritable){bE.push(cU,bG.init[name],dh);

if(bF.nullable){bE.push(dA);
}else if(bF.init!==undefined){bE.push(cJ,bG.init[name],dh);
}else{bE.push(cq,name,di,bC.classname,cP);
}bE.push(cR);
}else{bE.push(cJ,bG.init[name],dh);
}}else if(bF.inheritable||bF.nullable){bE.push(cg);
}else{bE.push(cz,name,di,bC.classname,cP);
}return this.__S(bB,bH,name,bD,bE);
},executeOptimizedSetter:function(bc,bd,name,be,bf){var bk=bd.$$properties[name];
var bj=bd.prototype;
var bh=[];
var bg=be===da||be===cY||be===cL||(be===cM&&bk.init===undefined);
var bi=bk.apply||bk.event||bk.inheritable;
var bl=this.__eJ(be,name);
this.__eK(bh,bk,name,be,bg);

if(bg){this.__eL(bh,bd,bk,name);
}
if(bi){this.__eM(bh,bg,bl,be);
}
if(bk.inheritable){bh.push(dz);
}{};

if(!bi){this.__eO(bh,name,be,bg);
}else{this.__eP(bh,bk,name,be,bg);
}
if(bk.inheritable){this.__eQ(bh,bk,name,be);
}else if(bi){this.__eR(bh,bk,name,be);
}
if(bi){this.__eS(bh,bk,name);
if(bk.inheritable&&bj._getChildren){this.__eT(bh,name);
}}if(bg){bh.push(ct);
}return this.__S(bc,bj,name,be,bh,bf);
},__eJ:function(k,name){if(k===cL||k===cD){var m=this.$$store.runtime[name];
}else if(k===cY||k===cG){m=this.$$store.theme[name];
}else if(k===cM){m=this.$$store.init[name];
}else{m=this.$$store.user[name];
}return m;
},__eK:function(W,X,name,Y,ba){{if(!X.nullable||X.check||X.inheritable){W.push(cB);
}if(Y===da){W.push(bT,name,dt,Y,dC);
}};
},__eL:function(bm,bn,bo,name){if(bo.transform){bm.push(du,bo.transform,cQ);
}if(bo.validate){if(typeof bo.validate===cI){bm.push(de,bo.validate,cQ);
}else if(bo.validate instanceof Function){bm.push(bn.classname,cl,name);
bm.push(cV);
}}},__eM:function(v,w,x,y){var z=(y===dp||y===cG||y===cD);

if(w){v.push(dd,x,cS);
}else if(z){v.push(dd,x,bY);
}},__eN:undefined,__eO:function(bs,name,bt,bu){if(bt===cL){bs.push(de,this.$$store.runtime[name],df);
}else if(bt===cD){bs.push(dd,this.$$store.runtime[name],dc);
bs.push(db,this.$$store.runtime[name],dh);
}else if(bt===da){bs.push(de,this.$$store.user[name],df);
}else if(bt===dp){bs.push(dd,this.$$store.user[name],dc);
bs.push(db,this.$$store.user[name],dh);
}else if(bt===cY){bs.push(de,this.$$store.theme[name],df);
}else if(bt===cG){bs.push(dd,this.$$store.theme[name],dc);
bs.push(db,this.$$store.theme[name],dh);
}else if(bt===cM&&bu){bs.push(de,this.$$store.init[name],df);
}},__eP:function(bw,bx,name,by,bz){if(bx.inheritable){bw.push(cy,this.$$store.inherit[name],dh);
}else{bw.push(dy);
}bw.push(dd,this.$$store.runtime[name],cF);

if(by===cL){bw.push(dg,this.$$store.runtime[name],df);
}else if(by===cD){bw.push(db,this.$$store.runtime[name],dh);
bw.push(dd,this.$$store.user[name],dc);
bw.push(dg,this.$$store.user[name],dh);
bw.push(cK,this.$$store.theme[name],dc);
bw.push(dg,this.$$store.theme[name],dh);
bw.push(cK,this.$$store.init[name],cF);
bw.push(dg,this.$$store.init[name],dh);
bw.push(de,this.$$store.useinit[name],cE);
bw.push(cX);
}else{bw.push(dl,this.$$store.runtime[name],dh);
if(by===da){bw.push(de,this.$$store.user[name],df);
}else if(by===dp){bw.push(db,this.$$store.user[name],dh);
}else if(by===cY){bw.push(de,this.$$store.theme[name],df);
}else if(by===cG){bw.push(db,this.$$store.theme[name],dh);
}else if(by===cM&&bz){bw.push(de,this.$$store.init[name],df);
}}bw.push(cX);
bw.push(cK,this.$$store.user[name],cF);

if(by===da){if(!bx.inheritable){bw.push(dm,this.$$store.user[name],dh);
}bw.push(dg,this.$$store.user[name],df);
}else if(by===dp){if(!bx.inheritable){bw.push(dm,this.$$store.user[name],dh);
}bw.push(db,this.$$store.user[name],dh);
bw.push(dd,this.$$store.runtime[name],dc);
bw.push(dg,this.$$store.runtime[name],dh);
bw.push(dd,this.$$store.theme[name],dc);
bw.push(dg,this.$$store.theme[name],dh);
bw.push(cK,this.$$store.init[name],cF);
bw.push(dg,this.$$store.init[name],dh);
bw.push(de,this.$$store.useinit[name],cE);
bw.push(cX);
}else{if(by===cL){bw.push(dg,this.$$store.runtime[name],df);
}else if(bx.inheritable){bw.push(dg,this.$$store.user[name],dh);
}else{bw.push(dl,this.$$store.user[name],dh);
}if(by===cY){bw.push(de,this.$$store.theme[name],df);
}else if(by===cG){bw.push(db,this.$$store.theme[name],dh);
}else if(by===cM&&bz){bw.push(de,this.$$store.init[name],df);
}}bw.push(cX);
if(bx.themeable){bw.push(cK,this.$$store.theme[name],cF);

if(!bx.inheritable){bw.push(dm,this.$$store.theme[name],dh);
}
if(by===cL){bw.push(dg,this.$$store.runtime[name],df);
}else if(by===da){bw.push(dg,this.$$store.user[name],df);
}else if(by===cY){bw.push(dg,this.$$store.theme[name],df);
}else if(by===cG){bw.push(db,this.$$store.theme[name],dh);
bw.push(dd,this.$$store.init[name],cF);
bw.push(dg,this.$$store.init[name],dh);
bw.push(de,this.$$store.useinit[name],cE);
bw.push(cX);
}else if(by===cM){if(bz){bw.push(de,this.$$store.init[name],df);
}bw.push(dg,this.$$store.theme[name],dh);
}else if(by===dq){bw.push(dg,this.$$store.theme[name],dh);
}bw.push(cX);
}bw.push(cK,this.$$store.useinit[name],cp);

if(!bx.inheritable){bw.push(dm,this.$$store.init[name],dh);
}
if(by===cM){if(bz){bw.push(dg,this.$$store.init[name],df);
}else{bw.push(dg,this.$$store.init[name],dh);
}}else if(by===da||by===cL||by===cY||by===dq){bw.push(db,this.$$store.useinit[name],dh);

if(by===cL){bw.push(dg,this.$$store.runtime[name],df);
}else if(by===da){bw.push(dg,this.$$store.user[name],df);
}else if(by===cY){bw.push(dg,this.$$store.theme[name],df);
}else if(by===dq){bw.push(dg,this.$$store.init[name],dh);
}}bw.push(cX);
if(by===da||by===cL||by===cY||by===cM){bw.push(cO);

if(by===cL){bw.push(dg,this.$$store.runtime[name],df);
}else if(by===da){bw.push(dg,this.$$store.user[name],df);
}else if(by===cY){bw.push(dg,this.$$store.theme[name],df);
}else if(by===cM){if(bz){bw.push(dg,this.$$store.init[name],df);
}else{bw.push(dg,this.$$store.init[name],dh);
}bw.push(de,this.$$store.useinit[name],cE);
}bw.push(cX);
}},__eQ:function(H,I,name,J){H.push(cm);

if(J===dq){H.push(dB);
}else{H.push(ci,this.$$store.inherit[name],dh);
}H.push(cw);
H.push(de,this.$$store.init[name],cd);
H.push(de,this.$$store.init[name],cn);
H.push(dg,this.$$store.init[name],dh);
H.push(de,this.$$store.useinit[name],cE);
H.push(ce);
H.push(db,this.$$store.useinit[name],co);
H.push(cX);
H.push(dr);
H.push(bR);
H.push(dx,this.$$store.inherit[name],dh);
H.push(cX);
H.push(bV);
H.push(db,this.$$store.inherit[name],dh);
H.push(dv,this.$$store.inherit[name],bP);
H.push(cf);
if(I.init!==undefined&&J!==cM){H.push(dk,this.$$store.init[name],dj);
}else{H.push(ds);
}H.push(cv);
},__eR:function(bp,bq,name,br){if(br!==da&&br!==cL&&br!==cY){bp.push(ca);
}bp.push(dr);
if(bq.init!==undefined&&br!==cM){bp.push(dk,this.$$store.init[name],dj);
}else{bp.push(ds);
}},__eS:function(n,o,name){if(o.apply){n.push(de,o.apply,cs,name,cj);
}if(o.event){n.push(ch,cr,o.event,dw,cx,o.event,cc,cA);
}},__eT:function(dE,name){dE.push(cW);
dE.push(bU,this.$$method.refresh[name],ck,this.$$method.refresh[name],bQ);
dE.push(cX);
}}});
})();
(function(){var bc="[Class ",bb="]",ba="toString",Y="constructor",X="extend",W="Class",V="destruct",U="qx.Class",T="static";
qx.Bootstrap.define(U,{statics:{define:function(name,bF){if(!bF){var bF={};
}if(bF.include&&!(bF.include instanceof Array)){bF.include=[bF.include];
}if(bF.implement&&!(bF.implement instanceof Array)){bF.implement=[bF.implement];
}if(!bF.hasOwnProperty(X)&&!bF.type){bF.type=T;
}{};
var bH=this.__z(name,bF.type,bF.extend,bF.statics,bF.construct,bF.destruct);
if(bF.extend){if(bF.properties){this.__B(bH,bF.properties,true);
}if(bF.members){this.__D(bH,bF.members,true,true,false);
}if(bF.events){this.__A(bH,bF.events,true);
}if(bF.include){for(var i=0,l=bF.include.length;i<l;i++){this.__G(bH,bF.include[i],false);
}}}if(bF.settings){for(var bG in bF.settings){qx.core.Setting.define(bG,bF.settings[bG]);
}}if(bF.variants){for(var bG in bF.variants){qx.core.Variant.define(bG,bF.variants[bG].allowedValues,bF.variants[bG].defaultValue);
}}if(bF.implement){for(var i=0,l=bF.implement.length;i<l;i++){this.__F(bH,bF.implement[i]);
}}{};
if(bF.defer){bF.defer.self=bH;
bF.defer(bH,bH.prototype,{add:function(name,bh){var bi={};
bi[name]=bh;
qx.Class.__B(bH,bi,true);
}});
}return bH;
},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(br,bs){{};
qx.Class.__G(br,bs,false);
},patch:function(bL,bM){{};
qx.Class.__G(bL,bM,true);
},isSubClassOf:function(by,bz){if(!by){return false;
}
if(by==bz){return true;
}
if(by.prototype instanceof bz){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(bw){var bx=[];

while(bw){if(bw.$$properties){bx.push.apply(bx,qx.Bootstrap.getKeys(bw.$$properties));
}bw=bw.superclass;
}return bx;
},getByProperty:function(H,name){while(H){if(H.$$properties&&H.$$properties[name]){return H;
}H=H.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(bf,bg){return bf.$$includes&&bf.$$includes.indexOf(bg)!==-1;
},getByMixin:function(bA,bB){var bC,i,l;

while(bA){if(bA.$$includes){bC=bA.$$flatIncludes;

for(i=0,l=bC.length;i<l;i++){if(bC[i]===bB){return bA;
}}}bA=bA.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(bd,be){return !!this.getByMixin(bd,be);
},hasOwnInterface:function(bD,bE){return bD.$$implements&&bD.$$implements.indexOf(bE)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(f){var g=[];

while(f){if(f.$$implements){g.push.apply(g,f.$$flatImplements);
}f=f.superclass;
}return g;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(bI,bJ){var bK=bI.constructor;

if(this.hasInterface(bK,bJ)){return true;
}
try{qx.Interface.assertObject(bI,bJ);
return true;
}catch(h){}
try{qx.Interface.assert(bK,bJ,false);
return true;
}catch(L){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bc+this.classname+bb;
},$$registry:qx.Bootstrap.$$registry,__v:null,__w:null,__x:function(){},__y:function(){},__z:function(name,q,r,s,t,u){var z;

if(!r&&true){z=s||{};
qx.Bootstrap.setDisplayNames(z,name);
}else{z={};

if(r){if(!t){t=this.__H();
}z=this.__J(t,name,q);
qx.Bootstrap.setDisplayName(t,name,Y);
}if(s){qx.Bootstrap.setDisplayNames(s,name);
var A;

for(var i=0,a=qx.Bootstrap.getKeys(s),l=a.length;i<l;i++){A=a[i];
var w=s[A];
{z[A]=w;
};
}}}var y=qx.Bootstrap.createNamespace(name,z,false);
z.name=z.classname=name;
z.basename=y;
z.$$type=W;

if(q){z.$$classtype=q;
}if(!z.hasOwnProperty(ba)){z.toString=this.genericToString;
}
if(r){var B=r.prototype;
var v=this.__I();
v.prototype=B;
var x=new v;
z.prototype=x;
x.name=x.classname=name;
x.basename=y;
t.base=z.superclass=r;
t.self=z.constructor=x.constructor=z;
if(u){{};
z.$$destructor=u;
qx.Bootstrap.setDisplayName(u,name,V);
}}this.$$registry[name]=z;
return z;
},__A:function(bN,bO,bP){var bQ,bQ;
{};

if(bN.$$events){for(var bQ in bO){bN.$$events[bQ]=bO[bQ];
}}else{bN.$$events=bO;
}},__B:function(M,N,O){var Q;

if(O===undefined){O=false;
}var P=!!M.$$propertiesAttached;

for(var name in N){Q=N[name];
{};
Q.name=name;
if(!Q.refine){if(M.$$properties===undefined){M.$$properties={};
}M.$$properties[name]=Q;
}if(Q.init!==undefined){M.prototype["$$init_"+name]=Q.init;
}if(Q.event!==undefined){var event={};
event[Q.event]="qx.event.type.Data";
this.__A(M,event,O);
}if(Q.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(P){qx.core.Property.attachMethods(M,name,Q);
}}},__C:null,__D:function(bj,bk,bl,bm,bn){var bo=bj.prototype;
var bq,bp;
qx.Bootstrap.setDisplayNames(bk,bj.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bk),l=a.length;i<l;i++){bq=a[i];
bp=bk[bq];
{};
if(bm!==false&&bp instanceof Function&&bp.$$type==null){if(bn==true){bp=this.__E(bp,bo[bq]);
}else{if(bo[bq]){bp.base=bo[bq];
}bp.self=bj;
}{};
}bo[bq]=bp;
}},__E:function(k,m){if(m){return function(){var S=k.base;
k.base=m;
var R=k.apply(this,arguments);
k.base=S;
return R;
};
}else{return k;
}},__F:function(n,o){{};
var p=qx.Interface.flatten([o]);

if(n.$$implements){n.$$implements.push(o);
n.$$flatImplements.push.apply(n.$$flatImplements,p);
}else{n.$$implements=[o];
n.$$flatImplements=p;
}},__G:function(C,D,E){{};

if(this.hasMixin(C,D)){return;
}var G=qx.Mixin.flatten([D]);
var F;

for(var i=0,l=G.length;i<l;i++){F=G[i];
if(F.$$events){this.__A(C,F.$$events,E);
}if(F.$$properties){this.__B(C,F.$$properties,E);
}if(F.$$members){this.__D(C,F.$$members,E,E,E);
}}if(C.$$includes){C.$$includes.push(D);
C.$$flatIncludes.push.apply(C.$$flatIncludes,G);
}else{C.$$includes=[D];
C.$$flatIncludes=G;
}},__H:function(){function j(){arguments.callee.base.apply(this,arguments);
}return j;
},__I:function(){return function(){};
},__J:function(b,name,c){var d;
var e=function(){var K=arguments.callee.constructor;
{};
if(!K.$$propertiesAttached){qx.core.Property.attach(K);
}var J=K.$$original.apply(this,arguments);
if(K.$$includes){var I=K.$$flatIncludes;

for(var i=0,l=I.length;i<l;i++){if(I[i].$$constructor){I[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return J;
};
{};
if(c==="singleton"){e.getInstance=this.getInstance;
}e.$$original=b;
b.wrapper=e;
return e;
}},defer:function(){var bt,bu,bv;
{};
}});
})();
(function(){var l="qx.client",k="on",j="function",i="mousedown",h="qx.bom.Event",g="return;",f="mouseover",d="HTMLEvents";
qx.Class.define(h,{statics:{addNativeListener:qx.core.Variant.select(l,{"mshtml":function(y,z,A){y.attachEvent(k+z,A);
},"default":function(a,b,c){a.addEventListener(b,c,false);
}}),removeNativeListener:qx.core.Variant.select(l,{"mshtml":function(p,q,r){try{p.detachEvent(k+q,r);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(m,n,o){m.removeEventListener(n,o,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(l,{"mshtml":function(e){if(e.type===f){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(l,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==i&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(F){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(s){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(v,w){if(document.createEventObject){var x=document.createEventObject();
return v.fireEvent(k+w,x);
}else{var x=document.createEvent(d);
x.initEvent(w,true,true);
return !v.dispatchEvent(x);
}},supportsEvent:qx.core.Variant.select(l,{"webkit":function(t,u){return t.hasOwnProperty(k+u);
},"default":function(B,C){var D=k+C;
var E=(D in B);

if(!E){E=typeof B[D]==j;

if(!E&&B.setAttribute){B.setAttribute(D,g);
E=typeof B[D]==j;
B.removeAttribute(D);
}}return E;
}})}});
})();
(function(){var S="|bubble",R="|capture",Q="|",P="_",O="unload",N="UNKNOWN_",M="DOM_",L="c",K="__n",J="WIN_",G="capture",I="qx.event.Manager",H="__o",F="QX_";
qx.Class.define(I,{extend:Object,construct:function(cc,cd){this.__l=cc;
this.__eU=qx.core.ObjectRegistry.toHashCode(cc);
this.__eV=cd;
if(cc.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(cc,O,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(cc,O,arguments.callee);
self.dispose();
}));
}this.__m={};
this.__n={};
this.__o={};
this.__p={};
},statics:{__q:0,getNextUniqueId:function(){return (this.__q++).toString(36);
}},members:{__eV:null,__m:null,__o:null,__r:null,__n:null,__p:null,__l:null,__eU:null,getWindow:function(){return this.__l;
},getWindowId:function(){return this.__eU;
},getHandler:function(bl){var bm=this.__n[bl.classname];

if(bm){return bm;
}return this.__n[bl.classname]=new bl(this);
},getDispatcher:function(cC){var cD=this.__o[cC.classname];

if(cD){return cD;
}return this.__o[cC.classname]=new cC(this,this.__eV);
},getListeners:function(bU,bV,bW){var bX=bU.$$hash||qx.core.ObjectRegistry.toHashCode(bU);
var ca=this.__m[bX];

if(!ca){return null;
}var cb=bV+(bW?R:S);
var bY=ca[cb];
return bY?bY.concat():null;
},serializeListeners:function(v){var C=v.$$hash||qx.core.ObjectRegistry.toHashCode(v);
var E=this.__m[C];
var A=[];

if(E){var y,D,w,z,B;

for(var x in E){y=x.indexOf(Q);
D=x.substring(0,y);
w=x.charAt(y+1)==L;
z=E[x];

for(var i=0,l=z.length;i<l;i++){B=z[i];
A.push({self:B.context,handler:B.handler,type:D,capture:w});
}}}return A;
},toggleAttachedEvents:function(bu,bv){var bA=bu.$$hash||qx.core.ObjectRegistry.toHashCode(bu);
var bC=this.__m[bA];

if(bC){var bx,bB,bw,by;

for(var bz in bC){bx=bz.indexOf(Q);
bB=bz.substring(0,bx);
bw=bz.charCodeAt(bx+1)===99;
by=bC[bz];

if(bv){this.__s(bu,bB,bw);
}else{this.__t(bu,bB,bw);
}}}},hasListener:function(bn,bo,bp){{};
var bq=bn.$$hash||qx.core.ObjectRegistry.toHashCode(bn);
var bs=this.__m[bq];

if(!bs){return false;
}var bt=bo+(bp?R:S);
var br=bs[bt];
return br&&br.length>0;
},importListeners:function(ct,cu){{};
var cA=ct.$$hash||qx.core.ObjectRegistry.toHashCode(ct);
var cB=this.__m[cA]={};
var cx=qx.event.Manager;

for(var cv in cu){var cy=cu[cv];
var cz=cy.type+(cy.capture?R:S);
var cw=cB[cz];

if(!cw){cw=cB[cz]=[];
this.__s(ct,cy.type,cy.capture);
}cw.push({handler:cy.listener,context:cy.self,unique:cy.unique||(cx.__q++).toString(36)});
}},addListener:function(ce,cf,cg,self,ch){var cl;
{};
var cm=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var co=this.__m[cm];

if(!co){co=this.__m[cm]={};
}var ck=cf+(ch?R:S);
var cj=co[ck];

if(!cj){cj=co[ck]=[];
}if(cj.length===0){this.__s(ce,cf,ch);
}var cn=(qx.event.Manager.__q++).toString(36);
var ci={handler:cg,context:self,unique:cn};
cj.push(ci);
return ck+Q+cn;
},findHandler:function(X,Y){var bj=false,bc=false,bk=false;
var bi;

if(X.nodeType===1){bj=true;
bi=M+X.tagName.toLowerCase()+P+Y;
}else if(X==this.__l){bc=true;
bi=J+Y;
}else if(X.classname){bk=true;
bi=F+X.classname+P+Y;
}else{bi=N+X+P+Y;
}var be=this.__p;

if(be[bi]){return be[bi];
}var bh=this.__eV.getHandlers();
var bd=qx.event.IEventHandler;
var bf,bg,bb,ba;

for(var i=0,l=bh.length;i<l;i++){bf=bh[i];
bb=bf.SUPPORTED_TYPES;

if(bb&&!bb[Y]){continue;
}ba=bf.TARGET_CHECK;

if(ba){if(!bj&&ba===bd.TARGET_DOMNODE){continue;
}else if(!bc&&ba===bd.TARGET_WINDOW){continue;
}else if(!bk&&ba===bd.TARGET_OBJECT){continue;
}}bg=this.getHandler(bh[i]);

if(bf.IGNORE_CAN_HANDLE||bg.canHandleEvent(X,Y)){be[bi]=bg;
return bg;
}}return null;
},__s:function(cp,cq,cr){var cs=this.findHandler(cp,cq);

if(cs){cs.registerEvent(cp,cq,cr);
return;
}{};
},removeListener:function(bD,bE,bF,self,bG){var bK;
{};
var bL=bD.$$hash||qx.core.ObjectRegistry.toHashCode(bD);
var bM=this.__m[bL];

if(!bM){return false;
}var bH=bE+(bG?R:S);
var bI=bM[bH];

if(!bI){return false;
}var bJ;

for(var i=0,l=bI.length;i<l;i++){bJ=bI[i];

if(bJ.handler===bF&&bJ.context===self){qx.lang.Array.removeAt(bI,i);

if(bI.length==0){this.__t(bD,bE,bG);
}return true;
}}return false;
},removeListenerById:function(a,b){var h;
{};
var f=b.split(Q);
var m=f[0];
var c=f[1].charCodeAt(0)==99;
var k=f[2];
var j=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var n=this.__m[j];

if(!n){return false;
}var g=m+(c?R:S);
var e=n[g];

if(!e){return false;
}var d;

for(var i=0,l=e.length;i<l;i++){d=e[i];

if(d.unique===k){qx.lang.Array.removeAt(e,i);

if(e.length==0){this.__t(a,m,c);
}return true;
}}return false;
},removeAllListeners:function(o){var s=o.$$hash||qx.core.ObjectRegistry.toHashCode(o);
var u=this.__m[s];

if(!u){return false;
}var q,t,p;

for(var r in u){if(u[r].length>0){q=r.split(Q);
t=q[0];
p=q[1]===G;
this.__t(o,t,p);
}}delete this.__m[s];
return true;
},__t:function(T,U,V){var W=this.findHandler(T,U);

if(W){W.unregisterEvent(T,U,V);
return;
}{};
},dispatchEvent:function(bN,event){var bS;
{};
var bT=event.getType();

if(!event.getBubbles()&&!this.hasListener(bN,bT)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bN);
}var bR=this.__eV.getDispatchers();
var bQ;
var bP=false;

for(var i=0,l=bR.length;i<l;i++){bQ=this.getDispatcher(bR[i]);
if(bQ.canDispatchEvent(bN,event,bT)){bQ.dispatchEvent(bN,event,bT);
bP=true;
break;
}}
if(!bP){qx.log.Logger.error(this,"No dispatcher can handle event of type "+bT+" on "+bN);
return true;
}var bO=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bO;
},dispose:function(){this.__eV.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,K);
qx.util.DisposeUtil.disposeMap(this,H);
this.__m=this.__l=this.__r=null;
this.__eV=this.__p=null;
}}});
})();
(function(){var e="qx.dom.Node",d="qx.client",c="";
qx.Class.define(e,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(m){return m.nodeType===
this.DOCUMENT?m:
m.ownerDocument||m.document;
},getWindow:qx.core.Variant.select(d,{"mshtml":function(f){if(f.nodeType==null){return f;
}if(f.nodeType!==this.DOCUMENT){f=f.ownerDocument;
}return f.parentWindow;
},"default":function(g){if(g.nodeType==null){return g;
}if(g.nodeType!==this.DOCUMENT){g=g.ownerDocument;
}return g.defaultView;
}}),getDocumentElement:function(t){return this.getDocument(t).documentElement;
},getBodyElement:function(l){return this.getDocument(l).body;
},isNode:function(r){return !!(r&&r.nodeType!=null);
},isElement:function(b){return !!(b&&b.nodeType===this.ELEMENT);
},isDocument:function(h){return !!(h&&h.nodeType===this.DOCUMENT);
},isText:function(n){return !!(n&&n.nodeType===this.TEXT);
},isWindow:function(o){return !!(o&&o.history&&o.location&&o.document);
},isNodeName:function(j,k){if(!k||!j||!j.nodeName){return false;
}return k.toLowerCase()==qx.dom.Node.getName(j);
},getName:function(s){if(!s||!s.nodeName){return null;
}return s.nodeName.toLowerCase();
},getText:function(p){if(!p||!p.nodeType){return null;
}
switch(p.nodeType){case 1:var i,a=[],q=p.childNodes,length=q.length;

for(i=0;i<length;i++){a[i]=this.getText(q[i]);
}return a.join(c);
case 2:return p.nodeValue;
break;
case 3:return p.nodeValue;
break;
}return null;
}}});
})();
(function(){var k="mshtml",j="qx.client",h="[object Array]",g="qx.lang.Array",f="qx",e="number",d="string";
qx.Class.define(g,{statics:{toArray:function(L,M){return this.cast(L,Array,M);
},cast:function(p,q,r){if(p.constructor===q){return p;
}
if(qx.Class.hasInterface(p,qx.data.IListData)){var p=p.toArray();
}var s=new q;
if(qx.core.Variant.isSet(j,k)){if(p.item){for(var i=r||0,l=p.length;i<l;i++){s.push(p[i]);
}return s;
}}if(Object.prototype.toString.call(p)===h&&r==null){s.push.apply(s,p);
}else{s.push.apply(s,Array.prototype.slice.call(p,r||0));
}return s;
},fromArguments:function(T,U){return Array.prototype.slice.call(T,U||0);
},fromCollection:function(H){if(qx.core.Variant.isSet(j,k)){if(H.item){var I=[];

for(var i=0,l=H.length;i<l;i++){I[i]=H[i];
}return I;
}}return Array.prototype.slice.call(H,0);
},fromShortHand:function(N){var P=N.length;
var O=qx.lang.Array.clone(N);
switch(P){case 1:O[1]=O[2]=O[3]=O[0];
break;
case 2:O[2]=O[0];
case 3:O[3]=O[1];
}return O;
},clone:function(S){return S.concat();
},insertAt:function(bb,bc,i){bb.splice(i,0,bc);
return bb;
},insertBefore:function(bg,bh,bi){var i=bg.indexOf(bi);

if(i==-1){bg.push(bh);
}else{bg.splice(i,0,bh);
}return bg;
},insertAfter:function(a,b,c){var i=a.indexOf(c);

if(i==-1||i==(a.length-1)){a.push(b);
}else{a.splice(i+1,0,b);
}return a;
},removeAt:function(bd,i){return bd.splice(i,1)[0];
},removeAll:function(bo){bo.length=0;
return this;
},append:function(J,K){{};
Array.prototype.push.apply(J,K);
return J;
},exclude:function(V,W){{};

for(var i=0,Y=W.length,X;i<Y;i++){X=V.indexOf(W[i]);

if(X!=-1){V.splice(X,1);
}}return V;
},remove:function(Q,R){var i=Q.indexOf(R);

if(i!=-1){Q.splice(i,1);
return R;
}},contains:function(bp,bq){return bp.indexOf(bq)!==-1;
},equals:function(bj,bk){var length=bj.length;

if(length!==bk.length){return false;
}
for(var i=0;i<length;i++){if(bj[i]!==bk[i]){return false;
}}return true;
},sum:function(be){var bf=0;

for(var i=0,l=be.length;i<l;i++){bf+=be[i];
}return bf;
},max:function(bl){{};
var i,bn=bl.length,bm=bl[0];

for(i=1;i<bn;i++){if(bl[i]>bm){bm=bl[i];
}}return bm===undefined?null:bm;
},min:function(m){{};
var i,o=m.length,n=m[0];

for(i=1;i<o;i++){if(m[i]<n){n=m[i];
}}return n===undefined?null:n;
},unique:function(t){var D=[],v={},y={},A={};
var z,u=0;
var E=f+qx.lang.Date.now();
var w=false,C=false,F=false;
for(var i=0,B=t.length;i<B;i++){z=t[i];
if(z===null){if(!w){w=true;
D.push(z);
}}else if(z===undefined){}else if(z===false){if(!C){C=true;
D.push(z);
}}else if(z===true){if(!F){F=true;
D.push(z);
}}else if(typeof z===d){if(!v[z]){v[z]=1;
D.push(z);
}}else if(typeof z===e){if(!y[z]){y[z]=1;
D.push(z);
}}else{x=z[E];

if(x==null){x=z[E]=u++;
}
if(!A[x]){A[x]=z;
D.push(z);
}}}for(var x in A){try{delete A[x][E];
}catch(G){try{A[x][E]=null;
}catch(ba){throw new Error("Cannot clean-up map entry doneObjects["+x+"]["+E+"]");
}}}return D;
}}});
})();
(function(){var g="()",f=".",e=".prototype.",d='anonymous()',c="qx.lang.Function",b=".constructor()";
qx.Class.define(c,{statics:{getCaller:function(H){return H.caller?H.caller.callee:H.callee.caller;
},getName:function(l){if(l.displayName){return l.displayName;
}
if(l.$$original||l.wrapper||l.classname){return l.classname+b;
}
if(l.$$mixin){for(var n in l.$$mixin.$$members){if(l.$$mixin.$$members[n]==l){return l.$$mixin.name+e+n+g;
}}for(var n in l.$$mixin){if(l.$$mixin[n]==l){return l.$$mixin.name+f+n+g;
}}}
if(l.self){var o=l.self.constructor;

if(o){for(var n in o.prototype){if(o.prototype[n]==l){return o.classname+e+n+g;
}}for(var n in o){if(o[n]==l){return o.classname+f+n+g;
}}}}var m=l.toString().match(/function\s*(\w*)\s*\(.*/);

if(m&&m.length>=1&&m[1]){return m[1]+g;
}return d;
},globalEval:function(s){if(window.execScript){return window.execScript(s);
}else{return eval.call(window,s);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(h,i){{};
if(!i){return h;
}if(!(i.self||i.args||i.delay!=null||i.periodical!=null||i.attempt)){return h;
}return function(event){{};
var u=qx.lang.Array.fromArguments(arguments);
if(i.args){u=i.args.concat(u);
}
if(i.delay||i.periodical){var t=qx.event.GlobalError.observeMethod(function(){return h.apply(i.self||this,u);
});

if(i.delay){return window.setTimeout(t,i.delay);
}
if(i.periodical){return window.setInterval(t,i.periodical);
}}else if(i.attempt){var v=false;

try{v=h.apply(i.self||this,u);
}catch(p){}return v;
}else{return h.apply(i.self||this,u);
}};
},bind:function(q,self,r){return this.create(q,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(j,k){return this.create(j,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(E,self,F){if(arguments.length<3){return function(event){return E.call(self||this,event||window.event);
};
}else{var G=qx.lang.Array.fromArguments(arguments,2);
return function(event){var a=[event||window.event];
a.push.apply(a,G);
E.apply(self||this,a);
};
}},attempt:function(z,self,A){return this.create(z,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(w,x,self,y){return this.create(w,{delay:x,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(B,C,self,D){return this.create(B,{periodical:C,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var g="qx.event.Registration";
qx.Class.define(g,{statics:{__K:{},getManager:function(L){if(L==null){{};
L=window;
}else if(L.nodeType){L=qx.dom.Node.getWindow(L);
}else if(!qx.dom.Node.isWindow(L)){L=window;
}var N=L.$$hash||qx.core.ObjectRegistry.toHashCode(L);
var M=this.__K[N];

if(!M){M=new qx.event.Manager(L,this);
this.__K[N]=M;
}return M;
},removeManager:function(r){var s=r.getWindowId();
delete this.__K[s];
},addListener:function(A,B,C,self,D){return this.getManager(A).addListener(A,B,C,self,D);
},removeListener:function(c,d,e,self,f){return this.getManager(c).removeListener(c,d,e,self,f);
},removeListenerById:function(o,p){return this.getManager(o).removeListenerById(o,p);
},removeAllListeners:function(O){return this.getManager(O).removeAllListeners(O);
},hasListener:function(t,u,v){return this.getManager(t).hasListener(t,u,v);
},serializeListeners:function(n){return this.getManager(n).serializeListeners(n);
},createEvent:function(w,x,y){{};
if(x==null){x=qx.event.type.Event;
}var z=qx.event.Pool.getInstance().getObject(x);

if(!z){return;
}y?z.init.apply(z,y):z.init();
if(w){z.setType(w);
}return z;
},dispatchEvent:function(q,event){return this.getManager(q).dispatchEvent(q,event);
},fireEvent:function(h,i,j,k){var l;
{};
var m=this.createEvent(i,j||null,k);
return this.getManager(h).dispatchEvent(h,m);
},fireNonBubblingEvent:function(F,G,H,I){{};
var J=this.getManager(F);

if(!J.hasListener(F,G,false)){return true;
}var K=this.createEvent(G,H||null,I);
return J.dispatchEvent(F,K);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__L:[],addHandler:function(E){{};
this.__L.push(E);
this.__L.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__L;
},__M:[],addDispatcher:function(P,Q){{};
this.__M.push(P);
this.__M.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__M;
}}});
})();
(function(){var g="$$hash",f="qx.core.ObjectRegistry";
qx.Class.define(f,{statics:{inShutDown:false,__T:{},__U:0,__V:[],register:function(h){var m=this.__T;

if(!m){return;
}var k=h.$$hash;

if(k==null){var j=this.__V;

if(j.length>0){k=j.pop();
}else{k=(this.__U++).toString(36);
}h.$$hash=k;
}{};
m[k]=h;
},unregister:function(u){var v=u.$$hash;

if(v==null){return;
}var w=this.__T;

if(w&&w[v]){delete w[v];
this.__V.push(v);
}try{delete u.$$hash;
}catch(t){if(u.removeAttribute){u.removeAttribute(g);
}}},toHashCode:function(c){{};
var e=c.$$hash;

if(e!=null){return e;
}var d=this.__V;

if(d.length>0){e=d.pop();
}else{e=(this.__U++).toString(36);
}return c.$$hash=e;
},clearHashCode:function(x){{};
var y=x.$$hash;

if(y!=null){this.__V.push(y);
try{delete x.$$hash;
}catch(n){if(x.removeAttribute){x.removeAttribute(g);
}}}},fromHashCode:function(z){return this.__T[z]||null;
},shutdown:function(){this.inShutDown=true;
var q=this.__T;
var s=[];

for(var r in q){s.push(r);
}s.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var p,i=0,l=s.length;

while(true){try{for(;i<l;i++){r=s[i];
p=q[r];

if(p&&p.dispose){p.dispose();
}}}catch(o){qx.Bootstrap.error(this,"Could not dispose object "+p.toString()+": "+o);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__T;
},getRegistry:function(){return this.__T;
}}});
})();
(function(){var b="qx.data.MBinding";
qx.Mixin.define(b,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(a){qx.data.SingleValueBinding.removeBindingFromObject(this,a);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(f){this.__eW=[];
this.setMaxMessages(f||50);
},members:{__eX:0,__eW:null,__eY:50,setMaxMessages:function(i){this.__eY=i;
this.clearHistory();
},getMaxMessages:function(){return this.__eY;
},process:function(g){var h=this.getMaxMessages();

if(this.__eW.length<h){this.__eW.push(g);
}else{this.__eW[this.__eX++]=g;

if(this.__eX>=h){this.__eX=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(b){if(b>this.__eW.length){b=this.__eW.length;
}
if(this.__eW.length==this.getMaxMessages()){var d=this.__eX-1;
}else{d=this.__eW.length-1;
}var c=d-b+1;

if(c<0){c+=this.__eW.length;
}var e;

if(c<=d){e=this.__eW.slice(c,d+1);
}else{e=this.__eW.slice(c,this.__eW.length).concat(this.__eW.slice(0,d+1));
}return e;
},clearHistory:function(){this.__eW=[];
this.__eX=0;
}}});
})();
(function(){var p="node",o="error",n="...(+",m="array",k=")",j="info",h="instance",g="string",f="null",e="class",K="number",J="stringify",I="]",H="unknown",G="function",F="boolean",E="debug",D="map",C="undefined",B="qx.log.Logger",w=")}",x="#",u="warn",v="document",s="{...(",t="[",q="text[",r="[...(",y="\n",z=")]",A="object";
qx.Class.define(B,{statics:{__ba:E,setLevel:function(d){this.__ba=d;
},getLevel:function(){return this.__ba;
},setTreshold:function(bs){this.__bd.setMaxMessages(bs);
},getTreshold:function(){return this.__bd.getMaxMessages();
},__bb:{},__bc:0,register:function(bd){if(bd.$$id){return;
}var be=this.__bc++;
this.__bb[be]=bd;
bd.$$id=be;
var bf=this.__bd.getAllLogEvents();

for(var i=0,l=bf.length;i<l;i++){bd.process(bf[i]);
}},unregister:function(bw){var bx=bw.$$id;

if(bx==null){return;
}delete this.__bb[bx];
delete bw.$$id;
},debug:function(bq,br){qx.log.Logger.__bf(E,arguments);
},info:function(P,Q){qx.log.Logger.__bf(j,arguments);
},warn:function(W,X){qx.log.Logger.__bf(u,arguments);
},error:function(by,bz){qx.log.Logger.__bf(o,arguments);
},trace:function(Y){qx.log.Logger.__bf(j,[Y,qx.dev.StackTrace.getStackTrace().join(y)]);
},deprecatedMethodWarning:function(bt,bu){var bv;
{};
},deprecatedClassWarning:function(a,b){var c;
{};
},deprecatedEventWarning:function(T,event,U){var V;
{};
},deprecatedMixinWarning:function(ba,bb){var bc;
{};
},deprecatedConstantWarning:function(L,M,N){var self,O;
{};
},clear:function(){this.__bd.clearHistory();
},__bd:new qx.log.appender.RingBuffer(50),__be:{debug:0,info:1,warn:2,error:3},__bf:function(bg,bh){var bm=this.__be;

if(bm[bg]<bm[this.__ba]){return;
}var bj=bh.length<2?null:bh[0];
var bl=bj?1:0;
var bi=[];

for(var i=bl,l=bh.length;i<l;i++){bi.push(this.__bh(bh[i],true));
}var bn=new Date;
var bo={time:bn,offset:bn-qx.Bootstrap.LOADSTART,level:bg,items:bi,win:window};
if(bj){if(bj instanceof qx.core.Object){bo.object=bj.$$hash;
}else if(bj.$$type){bo.clazz=bj;
}}this.__bd.process(bo);
var bp=this.__bb;

for(var bk in bp){bp[bk].process(bo);
}},__bg:function(bA){if(bA===undefined){return C;
}else if(bA===null){return f;
}
if(bA.$$type){return e;
}var bB=typeof bA;

if(bB===G||bB==g||bB===K||bB===F){return bB;
}else if(bB===A){if(bA.nodeType){return p;
}else if(bA.classname){return h;
}else if(bA instanceof Array){return m;
}else if(bA instanceof Error){return o;
}else{return D;
}}
if(bA.toString){return J;
}return H;
},__bh:function(bC,bD){var bK=this.__bg(bC);
var bG=H;
var bF=[];

switch(bK){case f:case C:bG=bK;
break;
case g:case K:case F:bG=bC;
break;
case p:if(bC.nodeType===9){bG=v;
}else if(bC.nodeType===3){bG=q+bC.nodeValue+I;
}else if(bC.nodeType===1){bG=bC.nodeName.toLowerCase();

if(bC.id){bG+=x+bC.id;
}}else{bG=p;
}break;
case G:bG=qx.lang.Function.getName(bC)||bK;
break;
case h:bG=bC.basename+t+bC.$$hash+I;
break;
case e:case J:bG=bC.toString();
break;
case o:bF=qx.dev.StackTrace.getStackTraceFromError(bC);
bG=bC.toString();
break;
case m:if(bD){bG=[];

for(var i=0,l=bC.length;i<l;i++){if(bG.length>20){bG.push(n+(l-i)+k);
break;
}bG.push(this.__bh(bC[i],false));
}}else{bG=r+bC.length+z;
}break;
case D:if(bD){var bE;
var bJ=[];

for(var bI in bC){bJ.push(bI);
}bJ.sort();
bG=[];

for(var i=0,l=bJ.length;i<l;i++){if(bG.length>20){bG.push(n+(l-i)+k);
break;
}bI=bJ[i];
bE=this.__bh(bC[bI],false);
bE.key=bI;
bG.push(bE);
}}else{var bH=0;

for(var bI in bC){bH++;
}bG=s+bH+w;
}break;
}return {type:bK,text:bG,trace:bF};
}},defer:function(R){var S=qx.Bootstrap.$$logs;

for(var i=0;i<S.length;i++){this.__bf(S[i][0],S[i][1]);
}qx.Bootstrap.debug=R.debug;
qx.Bootstrap.info=R.info;
qx.Bootstrap.warn=R.warn;
qx.Bootstrap.error=R.error;
qx.Bootstrap.trace=R.trace;
}});
})();
(function(){var bt="set",bs="get",br="reset",bq="qx.core.Object",bp="]",bo="[",bn="$$user_",bm="Object";
qx.Class.define(bq,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bm},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bo+this.$$hash+bp;
},base:function(a,b){{};

if(arguments.length===1){return a.callee.base.call(this);
}else{return a.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(f){return f.callee.self;
},clone:function(){var u=this.constructor;
var t=new u;
var w=qx.Class.getProperties(u);
var v=qx.core.Property.$$store.user;
var x=qx.core.Property.$$method.set;
var name;
for(var i=0,l=w.length;i<l;i++){name=w[i];

if(this.hasOwnProperty(v[name])){t[x[name]](this[v[name]]);
}}return t;
},set:function(T,U){var W=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(T)){if(!this[W[T]]){if(this[bt+qx.Bootstrap.firstUp(T)]!=undefined){this[bt+qx.Bootstrap.firstUp(T)](U);
return;
}{};
}return this[W[T]](U);
}else{for(var V in T){if(!this[W[V]]){if(this[bt+qx.Bootstrap.firstUp(V)]!=undefined){this[bt+qx.Bootstrap.firstUp(V)](T[V]);
continue;
}{};
}this[W[V]](T[V]);
}return this;
}},get:function(bx){var by=qx.core.Property.$$method.get;

if(!this[by[bx]]){if(this[bs+qx.Bootstrap.firstUp(bx)]!=undefined){return this[bs+qx.Bootstrap.firstUp(bx)]();
}{};
}return this[by[bx]]();
},reset:function(bk){var bl=qx.core.Property.$$method.reset;

if(!this[bl[bk]]){if(this[br+qx.Bootstrap.firstUp(bk)]!=undefined){this[br+qx.Bootstrap.firstUp(bk)]();
return;
}{};
}this[bl[bk]]();
},__bi:qx.event.Registration,addListener:function(g,h,self,j){if(!this.$$disposed){return this.__bi.addListener(this,g,h,self,j);
}return null;
},addListenerOnce:function(A,B,self,C){var D=function(e){B.call(self||this,e);
this.removeListener(A,D,this,C);
};
return this.addListener(A,D,this,C);
},removeListener:function(n,o,self,p){if(!this.$$disposed){return this.__bi.removeListener(this,n,o,self,p);
}return false;
},removeListenerById:function(bz){if(!this.$$disposed){return this.__bi.removeListenerById(this,bz);
}return false;
},hasListener:function(J,K){return this.__bi.hasListener(this,J,K);
},dispatchEvent:function(bv){if(!this.$$disposed){return this.__bi.dispatchEvent(this,bv);
}return true;
},fireEvent:function(q,r,s){if(!this.$$disposed){return this.__bi.fireEvent(this,q,r,s);
}return true;
},fireNonBubblingEvent:function(bh,bi,bj){if(!this.$$disposed){return this.__bi.fireNonBubblingEvent(this,bh,bi,bj);
}return true;
},fireDataEvent:function(L,M,N,O){if(!this.$$disposed){if(N===undefined){N=null;
}return this.__bi.fireNonBubblingEvent(this,L,qx.event.type.Data,[M,N,!!O]);
}return true;
},__bj:null,setUserData:function(c,d){if(!this.__bj){this.__bj={};
}this.__bj[c]=d;
},getUserData:function(k){if(!this.__bj){return null;
}var m=this.__bj[k];
return m===undefined?null:m;
},__bk:qx.log.Logger,debug:function(y){this.__bk.debug(this,y);
},info:function(R){this.__bk.info(this,R);
},warn:function(P){this.__bk.warn(this,P);
},error:function(S){this.__bk.error(this,S);
},trace:function(){this.__bk.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var H,F;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var G=this.constructor;
var E;

while(G.superclass){if(G.$$destructor){G.$$destructor.call(this);
}if(G.$$includes){E=G.$$flatIncludes;

for(var i=0,l=E.length;i<l;i++){if(E[i].$$destructor){E[i].$$destructor.call(this);
}}}G=G.superclass;
}var I=qx.Class.getProperties(this.constructor);

for(var i=0,l=I.length;i<l;i++){delete this[bn+I[i]];
}{};
},_disposeFields:function(bw){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(Q){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(X){qx.util.DisposeUtil.disposeArray(this,X);
},_disposeMap:function(z){qx.util.DisposeUtil.disposeMap(this,z);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bu){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__bj=null;
var bb=this.constructor;
var bf;
var bg=qx.core.Property.$$store;
var bd=bg.user;
var be=bg.theme;
var Y=bg.inherit;
var bc=bg.useinit;
var ba=bg.init;

while(bb){bf=bb.$$properties;

if(bf){for(var name in bf){if(bf[name].dispose){this[bd[name]]=this[be[name]]=this[Y[name]]=this[bc[name]]=this[ba[name]]=undefined;
}}}bb=bb.superclass;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.globalErrorHandling",b="on",a="qx.event.GlobalError";
qx.Class.define(a,{statics:{setErrorHandler:function(d,e){this.__fa=d||null;
this.__fb=e||window;

if(qx.core.Setting.get(c)===b){if(d&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__fc,this);
}
if(!d&&window.onerror){window.onerror=null;
}}},__fc:function(i,j,k){if(this.__fa){this.handleError(new qx.core.WindowError(i,j,k));
return true;
}},observeMethod:function(h){if(qx.core.Setting.get(c)===b){var self=this;
return function(){if(!self.__fa){return h.apply(this,arguments);
}
try{return h.apply(this,arguments);
}catch(l){self.handleError(new qx.core.GlobalError(l,arguments));
}};
}else{return h;
}},handleError:function(f){if(this.__fa){this.__fa.call(this.__fb,f);
}}},defer:function(g){qx.core.Setting.define(c,b);
g.setErrorHandler(null,null);
}});
})();
(function(){var l="ready",k="qx.client",j="mshtml",i="load",h="unload",g="qx.event.handler.Application",f="complete",d="gecko|opera|webkit",c="left",b="DOMContentLoaded",a="shutdown";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(r){arguments.callee.base.call(this);
this._window=r.getWindow();
this.__br=false;
this.__bs=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__bt:false,onScriptLoaded:function(){this.__bt=true;
var w=qx.event.handler.Application.$$instance;

if(w){w.__bu();
}}},members:{canHandleEvent:function(t,u){},registerEvent:function(o,p,q){},unregisterEvent:function(x,y,z){},__bv:null,__br:null,__bs:null,__bw:null,__bu:function(){var n=qx.event.handler.Application;
if(!this.__bv&&this.__br&&n.__bt){if(qx.core.Variant.isSet(k,j)){if(qx.event.Registration.hasListener(this._window,l)){this.__bv=true;
qx.event.Registration.fireEvent(this._window,l);
}}else{this.__bv=true;
qx.event.Registration.fireEvent(this._window,l);
}}},isApplicationReady:function(){return this.__bv;
},_initObserver:function(){if(qx.$$domReady||document.readyState==f){this.__br=true;
this.__bu();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(k,d)){qx.bom.Event.addNativeListener(this._window,b,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(k,j)){var self=this;
var s=function(){try{document.documentElement.doScroll(c);

if(document.body){self._onNativeLoadWrapped();
}}catch(m){window.setTimeout(s,100);
}};
s();
}qx.bom.Event.addNativeListener(this._window,i,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,h,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,i,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,h,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__br=true;
this.__bu();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__bw){this.__bw=true;

try{qx.event.Registration.fireEvent(this._window,a);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(v){qx.event.Registration.addHandler(v);
}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__dP:function(){this.QUIRKS_MODE=this.__fd();
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
(function(){var d="qx.lang.Object";
qx.Class.define(d,{statics:{empty:function(v){{};

for(var w in v){if(v.hasOwnProperty(w)){delete v[w];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(B){{};
return B.__count__===0;
}:
function(x){{};

for(var y in x){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(C,D){{};
return C.__count__>=D;
}:
function(g,h){{};

if(h<=0){return true;
}var length=0;

for(var j in g){if((++length)>=h){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(E){{};
var G=[];
var F=this.getKeys(E);

for(var i=0,l=F.length;i<l;i++){G.push(E[F[i]]);
}return G;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(e,f){{};
return qx.lang.Object.mergeWith(e,f,false);
},merge:function(a,b){{};
var c=arguments.length;

for(var i=1;i<c;i++){qx.lang.Object.mergeWith(a,arguments[i]);
}return a;
},clone:function(p){{};
var q={};

for(var r in p){q[r]=p[r];
}return q;
},invert:function(H){{};
var I={};

for(var J in H){I[H[J].toString()]=J;
}return I;
},getKeyFromValue:function(s,t){{};

for(var u in s){if(s.hasOwnProperty(u)&&s[u]===t){return u;
}}return null;
},contains:function(k,m){{};
return this.getKeyFromValue(k,m)!==null;
},select:function(z,A){{};
return A[z];
},fromArray:function(n){{};
var o={};

for(var i=0,l=n.length;i<l;i++){{};
o[n[i].toString()]=true;
}return o;
}}});
})();
(function(){var k="emulated",j="native",h='"',g="qx.lang.Core",f="\\\\",e="\\\"",d="[object Error]";
qx.Class.define(g,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==d)?k:j,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?j:k,{"native":Array.prototype.indexOf,"emulated":function(z,A){if(A==null){A=0;
}else if(A<0){A=Math.max(0,this.length+A);
}
for(var i=A;i<this.length;i++){if(this[i]===z){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?j:k,{"native":Array.prototype.lastIndexOf,"emulated":function(q,r){if(r==null){r=this.length-1;
}else if(r<0){r=Math.max(0,this.length+r);
}
for(var i=r;i>=0;i--){if(this[i]===q){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?j:k,{"native":Array.prototype.forEach,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){B.call(C||window,D,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?j:k,{"native":Array.prototype.filter,"emulated":function(m,n){var o=[];
var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){if(m.call(n||window,p,i,this)){o.push(this[i]);
}}}return o;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?j:k,{"native":Array.prototype.map,"emulated":function(s,t){var u=[];
var l=this.length;

for(var i=0;i<l;i++){var v=this[i];

if(v!==undefined){u[i]=s.call(t||window,v,i,this);
}}return u;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?j:k,{"native":Array.prototype.some,"emulated":function(a,b){var l=this.length;

for(var i=0;i<l;i++){var c=this[i];

if(c!==undefined){if(a.call(b||window,c,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?j:k,{"native":Array.prototype.every,"emulated":function(w,x){var l=this.length;

for(var i=0;i<l;i++){var y=this[i];

if(y!==undefined){if(!w.call(x||window,y,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?j:k,{"native":String.prototype.quote,"emulated":function(){return h+this.replace(/\\/g,f).replace(/\"/g,e)+h;
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
qx.Class.define(G,{statics:{__bx:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__by:function(K,L){return function(s){return K.prototype[L].apply(s,Array.prototype.slice.call(arguments,1));
};
},__bz:function(){var M=qx.lang.Generics.__bx;

for(var Q in M){var O=window[Q];
var N=M[Q];

for(var i=0,l=N.length;i<l;i++){var P=N[i];

if(!O[P]){O[P]=qx.lang.Generics.__by(O,P);
}}}}},defer:function(J){J.__bz();
}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(g){},setItem:function(h,i){},splice:function(d,e,f){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var k="qx.event.type.Event";
qx.Class.define(k,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(e,f){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!e;
this._cancelable=!!f;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(a){if(a){var b=a;
}else{var b=qx.event.Pool.getInstance().getObject(this.constructor);
}b._type=this._type;
b._target=this._target;
b._currentTarget=this._currentTarget;
b._relatedTarget=this._relatedTarget;
b._originalTarget=this._originalTarget;
b._stopPropagation=this._stopPropagation;
b._bubbles=this._bubbles;
b._preventDefault=this._preventDefault;
b._cancelable=this._cancelable;
return b;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(j){this._type=j;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(c){this._eventPhase=c;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(g){this._target=g;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(i){this._currentTarget=i;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(l){this._relatedTarget=l;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(h){this._originalTarget=h;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(m){this._bubbles=m;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(d){this._cancelable=d;
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
(function(){var j=":",h="qx.client",g="anonymous",f="...",e="qx.dev.StackTrace",d="",c="\n",b="/source/class/",a=".";
qx.Class.define(e,{statics:{getStackTrace:qx.core.Variant.select(h,{"gecko":function(){try{throw new Error();
}catch(I){var A=this.getStackTraceFromError(I);
qx.lang.Array.removeAt(A,0);
var y=this.getStackTraceFromCaller(arguments);
var w=y.length>A.length?y:A;

for(var i=0;i<Math.min(y.length,A.length);i++){var x=y[i];

if(x.indexOf(g)>=0){continue;
}var E=x.split(j);

if(E.length!=2){continue;
}var C=E[0];
var v=E[1];
var u=A[i];
var F=u.split(j);
var B=F[0];
var t=F[1];

if(qx.Class.getByName(B)){var z=B;
}else{z=C;
}var D=z+j;

if(v){D+=v+j;
}D+=t;
w[i]=D;
}return w;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var G;

try{G.bar();
}catch(s){var H=this.getStackTraceFromError(s);
qx.lang.Array.removeAt(H,0);
return H;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(h,{"opera":function(J){return [];
},"default":function(k){var p=[];
var o=qx.lang.Function.getCaller(k);
var l={};

while(o){var m=qx.lang.Function.getName(o);
p.push(m);

try{o=o.caller;
}catch(q){break;
}
if(!o){break;
}var n=qx.core.ObjectRegistry.toHashCode(o);

if(l[n]){p.push(f);
break;
}l[n]=o;
}return p;
}}),getStackTraceFromError:qx.core.Variant.select(h,{"gecko":function(K){if(!K.stack){return [];
}var Q=/@(.+):(\d+)$/gm;
var L;
var M=[];

while((L=Q.exec(K.stack))!=null){var N=L[1];
var P=L[2];
var O=this.__bA(N);
M.push(O+j+P);
}return M;
},"webkit":function(r){if(r.sourceURL&&r.line){return [this.__bA(r.sourceURL)+j+r.line];
}else{return [];
}},"opera":function(V){if(V.message.indexOf("Backtrace:")<0){return [];
}var X=[];
var Y=qx.lang.String.trim(V.message.split("Backtrace:")[1]);
var ba=Y.split(c);

for(var i=0;i<ba.length;i++){var W=ba[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(W&&W.length>=2){var bc=W[1];
var bb=this.__bA(W[2]);
X.push(bb+j+bc);
}}return X;
},"default":function(){return [];
}}),__bA:function(R){var U=b;
var S=R.indexOf(U);
var T=(S==-1)?R:R.substring(S+U.length).replace(/\//g,a).replace(/\.js$/,d);
return T;
}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
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
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Class.define(a,{extend:Error,construct:function(c,d){{};
this.__fj=b+(c&&c.message?c.message:c);
Error.call(this,this.__fj);
this.__fk=d;
this.__fl=c;
},members:{__fl:null,__fk:null,__fj:null,toString:function(){return this.__fj;
},getArguments:function(){return this.__fk;
},getSourceException:function(){return this.__fl;
}},destruct:function(){this.__fl=null;
this.__fk=null;
this.__fj=null;
}});
})();
(function(){var n="",m="g",l="0",k='\\$1',j="%",h='-',g="qx.lang.String",f=' ',e='\n',d="undefined";
qx.Class.define(g,{statics:{camelCase:function(G){return G.replace(/\-([a-z])/g,function(B,C){return C.toUpperCase();
});
},hyphenate:function(p){return p.replace(/[A-Z]/g,function(I){return (h+I.charAt(0).toLowerCase());
});
},capitalize:function(H){return H.replace(/\b[a-z]/g,function(o){return o.toUpperCase();
});
},clean:function(K){return this.trim(K.replace(/\s+/g,f));
},trimLeft:function(r){return r.replace(/^\s+/,n);
},trimRight:function(J){return J.replace(/\s+$/,n);
},trim:function(P){return P.replace(/^\s+|\s+$/g,n);
},startsWith:function(x,y){return x.indexOf(y)===0;
},endsWith:function(N,O){return N.substring(N.length-O.length,N.length)===O;
},repeat:function(L,M){return L.length>=0?new Array(M+1).join(L):n;
},pad:function(D,length,E){var F=length-D.length;

if(F>0){if(typeof E===d){E=l;
}return this.repeat(E,F)+D;
}else{return D;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(z,A){return z.indexOf(A)!=-1;
},format:function(a,b){var c=a;

for(var i=0;i<b.length;i++){c=c.replace(new RegExp(j+(i+1),m),b[i]);
}return c;
},escapeRegexpChars:function(Q){return Q.replace(/([.*+?^${}()|[\]\/\\])/g,k);
},toArray:function(s){return s.split(/\B|\b/g);
},stripTags:function(q){return q.replace(/<\/?[^>]+>/gi,n);
},stripScripts:function(t,u){var w=n;
var v=t.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){w+=arguments[1]+e;
return n;
});

if(u===true){qx.lang.Function.globalEval(w);
}return v;
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
},dispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(j){this._manager=j;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(k,event,m){return !event.getBubbles();
},dispatchEvent:function(c,event,d){var g,e;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var h=this._manager.getListeners(c,d,false);

if(h){for(var i=0,l=h.length;i<l;i++){var f=h[i].context||c;
h[i].handler.call(f,event);
}}}},defer:function(b){qx.event.Registration.addDispatcher(b);
}});
})();
(function(){var b="qx.event.handler.Object";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(c,d){return qx.Class.supportsEvent(c.constructor,d);
},registerEvent:function(h,i,j){},unregisterEvent:function(e,f,g){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var e="qx.util.DisposeUtil";
qx.Class.define(e,{statics:{disposeFields:function(s,t){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=t.length;i<l;i++){var name=t[i];

if(s[name]==null||!s.hasOwnProperty(name)){continue;
}s[name]=null;
}},disposeObjects:function(f,g){var name;

for(var i=0,l=g.length;i<l;i++){name=g[i];

if(f[name]==null||!f.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(f[name].dispose){f[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}f[name]=null;
}},disposeArray:function(h,j){var m=h[j];

if(!m){return;
}if(qx.core.ObjectRegistry.inShutDown){h[j]=null;
return;
}try{var k;

for(var i=m.length-1;i>=0;i--){k=m[i];

if(k){k.dispose();
}}}catch(r){throw new Error("The array field: "+j+" of object: "+h+" has non disposable entries: "+r);
}m.length=0;
h[j]=null;
},disposeMap:function(a,b){var c=a[b];

if(!c){return;
}if(qx.core.ObjectRegistry.inShutDown){a[b]=null;
return;
}try{for(var d in c){if(c.hasOwnProperty(d)){c[d].dispose();
}}}catch(n){throw new Error("The map field: "+b+" of object: "+a+" has non disposable entries: "+n);
}a[b]=null;
},disposeTriggeredBy:function(o,p){var q=p.dispose;
p.dispose=function(){q.call(p);
o.dispose();
};
}}});
})();
(function(){var e="qx.util.ObjectPool",d="Integer";
qx.Class.define(e,{extend:qx.core.Object,construct:function(n){arguments.callee.base.call(this);
this.__bD={};

if(n!=null){this.setSize(n);
}},properties:{size:{check:d,init:Infinity}},members:{__bD:null,getObject:function(j){if(this.$$disposed){return;
}
if(!j){throw new Error("Class needs to be defined!");
}var k=null;
var m=this.__bD[j.classname];

if(m){k=m.pop();
}
if(k){k.$$pooled=false;
}else{k=new j;
}return k;
},poolObject:function(a){if(!this.__bD){return;
}var b=a.classname;
var c=this.__bD[b];

if(a.$$pooled){throw new Error("Object is already pooled: "+a);
}
if(!c){this.__bD[b]=c=[];
}if(c.length>this.getSize()){if(a.destroy){a.destroy();
}else{a.dispose();
}return;
}a.$$pooled=true;
c.push(a);
}},destruct:function(){var h=this.__bD;
var f,g,i,l;

for(f in h){g=h[f];

for(i=0,l=g.length;i<l;i++){g[i].dispose();
}}delete this.__bD;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var eu="",et="string",es="div",er="previousSibling",eq="*",ep="href",eo="e",en="[object Array]",em="Syntax error, unrecognized expression: ",el="HTML",fc="text",fb="file",fa="+",eY="'/>",eX="CLASS",eW="radio",eV="script",eU="className",eT="BUTTON",eS="TAG",eB="password",eC="htmlFor",ez="reset",eA="<a href='#'></a>",ex="<a name='",ey="#",ev="qx.bom.Selector",ew="button",eD="parentNode",eE="NAME",eK="number",eJ="submit",eM="image",eL="<div class='test e'></div><div class='test'></div>",eO="~",eN="checkbox",eG="sourceIndex",eR="\\",eQ="hidden",eP=".TEST",eF="<p class='TEST'></p>",eH="undefined",eI="ID";
qx.Class.define(ev,{statics:{query:null,matches:null}});
(function(){var Y=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,bh=0,bd=Object.prototype.toString,bb=false,bj=true;
var T=[0,0];
T.sort(function(){bj=false;
return 0;
});
var U=function(cY,da,db,dc){db=db||[];
var dl=da=da||document;

if(da.nodeType!==1&&da.nodeType!==9){return [];
}
if(!cY||typeof cY!==et){return db;
}var di=[],m,df,dd,dn,dh,dg=true,de=ba(da),dk=cY;
while((Y.exec(eu),m=Y.exec(dk))!==null){dk=m[3];
di.push(m[1]);

if(m[2]){dh=m[3];
break;
}}
if(di.length>1&&bc.exec(cY)){if(di.length===2&&W.relative[di[0]]){df=V(di[0]+di[1],da);
}else{df=W.relative[di[0]]?[da]:U(di.shift(),da);

while(di.length){cY=di.shift();

if(W.relative[cY])cY+=di.shift();
df=V(cY,df);
}}}else{if(!dc&&di.length>1&&da.nodeType===9&&!de&&W.match.ID.test(di[0])&&!W.match.ID.test(di[di.length-1])){var dj=U.find(di.shift(),da,de);
da=dj.expr?U.filter(dj.expr,dj.set)[0]:dj.set[0];
}
if(da){var dj=dc?
{expr:di.pop(),set:S(dc)}:U.find(di.pop(),di.length===1&&(di[0]===eO||di[0]===fa)&&da.parentNode?da.parentNode:da,de);
df=dj.expr?U.filter(dj.expr,dj.set):dj.set;

if(di.length>0){dd=S(df);
}else{dg=false;
}
while(di.length){var dp=di.pop(),dm=dp;

if(!W.relative[dp]){dp=eu;
}else{dm=di.pop();
}
if(dm==null){dm=da;
}W.relative[dp](dd,dm,de);
}}else{dd=di=[];
}}
if(!dd){dd=df;
}
if(!dd){throw em+(dp||cY);
}
if(bd.call(dd)===en){if(!dg){db.push.apply(db,dd);
}else if(da&&da.nodeType===1){for(var i=0;dd[i]!=null;i++){if(dd[i]&&(dd[i]===true||dd[i].nodeType===1&&X(da,dd[i]))){db.push(df[i]);
}}}else{for(var i=0;dd[i]!=null;i++){if(dd[i]&&dd[i].nodeType===1){db.push(df[i]);
}}}}else{S(dd,db);
}
if(dh){U(dh,dl,db,dc);
U.uniqueSort(db);
}return db;
};
U.uniqueSort=function(A){if(be){bb=bj;
A.sort(be);

if(bb){for(var i=1;i<A.length;i++){if(A[i]===A[i-1]){A.splice(i--,1);
}}}}return A;
};
U.matches=function(dt,du){return U(dt,null,null,du);
};
U.find=function(fn,fo,fp){var fq,fs;

if(!fn){return [];
}
for(var i=0,l=W.order.length;i<l;i++){var fr=W.order[i],fs;

if((fs=W.leftMatch[fr].exec(fn))){var ft=fs[1];
fs.splice(1,1);

if(ft.substr(ft.length-1)!==eR){fs[1]=(fs[1]||eu).replace(/\\/g,eu);
fq=W.find[fr](fs,fo,fp);

if(fq!=null){fn=fn.replace(W.match[fr],eu);
break;
}}}}
if(!fq){fq=fo.getElementsByTagName(eq);
}return {set:fq,expr:fn};
};
U.filter=function(bo,bp,bq,br){var bs=bo,bx=[],bt=bp,bC,bB,bu=bp&&bp[0]&&ba(bp[0]);

while(bo&&bp.length){for(var bA in W.filter){if((bC=W.match[bA].exec(bo))!=null){var bv=W.filter[bA],bz,bw;
bB=false;

if(bt==bx){bx=[];
}
if(W.preFilter[bA]){bC=W.preFilter[bA](bC,bt,bq,bx,br,bu);

if(!bC){bB=bz=true;
}else if(bC===true){continue;
}}
if(bC){for(var i=0;(bw=bt[i])!=null;i++){if(bw){bz=bv(bw,bC,i,bt);
var by=br^!!bz;

if(bq&&bz!=null){if(by){bB=true;
}else{bt[i]=false;
}}else if(by){bx.push(bw);
bB=true;
}}}}
if(bz!==undefined){if(!bq){bt=bx;
}bo=bo.replace(W.match[bA],eu);

if(!bB){return [];
}break;
}}}if(bo==bs){if(bB==null){throw em+bo;
}else{break;
}}bs=bo;
}return bt;
};
var W=U.selectors={order:[eI,eE,eS],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":eU,"for":eC},attrHandle:{href:function(cG){return cG.getAttribute(ep);
}},relative:{"+":function(fG,fH,fI){var fJ=typeof fH===et,fL=fJ&&!/\W/.test(fH),fM=fJ&&!fL;

if(fL&&!fI){fH=fH.toUpperCase();
}
for(var i=0,l=fG.length,fK;i<l;i++){if((fK=fG[i])){while((fK=fK.previousSibling)&&fK.nodeType!==1){}fG[i]=fM||fK&&fK.nodeName===fH?fK||false:fK===fH;
}}
if(fM){U.filter(fH,fG,true);
}},">":function(fB,fC,fD){var fE=typeof fC===et;

if(fE&&!/\W/.test(fC)){fC=fD?fC:fC.toUpperCase();

for(var i=0,l=fB.length;i<l;i++){var fF=fB[i];

if(fF){var parent=fF.parentNode;
fB[i]=parent.nodeName===fC?parent:false;
}}}else{for(var i=0,l=fB.length;i<l;i++){var fF=fB[i];

if(fF){fB[i]=fE?fF.parentNode:fF.parentNode===fC;
}}
if(fE){U.filter(fC,fB,true);
}}},"":function(dP,dQ,dR){var dS=bh++,dT=bi;

if(!/\W/.test(dQ)){var dU=dQ=dR?dQ:dQ.toUpperCase();
dT=bk;
}dT(eD,dQ,dS,dP,dU,dR);
},"~":function(cS,cT,cU){var cV=bh++,cW=bi;

if(typeof cT===et&&!/\W/.test(cT)){var cX=cT=cU?cT:cT.toUpperCase();
cW=bk;
}cW(er,cT,cV,cS,cX,cU);
}},find:{ID:function(p,q,r){if(typeof q.getElementById!=="undefined"&&!r){var m=q.getElementById(p[1]);
return m?[m]:[];
}},NAME:function(fu,fv,fw){if(typeof fv.getElementsByName!=="undefined"){var fy=[],fx=fv.getElementsByName(fu[1]);

for(var i=0,l=fx.length;i<l;i++){if(fx[i].getAttribute("name")===fu[1]){fy.push(fx[i]);
}}return fy.length===0?null:fy;
}},TAG:function(dB,dC){return dC.getElementsByTagName(dB[1]);
}},preFilter:{CLASS:function(K,L,M,N,O,P){K=" "+K[1].replace(/\\/g,"")+" ";

if(P){return K;
}
for(var i=0,Q;(Q=L[i])!=null;i++){if(Q){if(O^(Q.className&&(" "+Q.className+" ").indexOf(K)>=0)){if(!M)N.push(Q);
}else if(M){L[i]=false;
}}}return false;
},ID:function(bl){return bl[1].replace(/\\/g,"");
},TAG:function(cP,cQ){for(var i=0;cQ[i]===false;i++){}return cQ[i]&&ba(cQ[i])?cP[1]:cP[1].toUpperCase();
},CHILD:function(bm){if(bm[1]=="nth"){var bn=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(bm[2]=="even"&&"2n"||bm[2]=="odd"&&"2n+1"||!/\D/.test(bm[2])&&"0n+"+bm[2]||bm[2]);
bm[2]=(bn[1]+(bn[2]||1))-0;
bm[3]=bn[3]-0;
}bm[0]=bh++;
return bm;
},ATTR:function(c,d,f,g,h,j){var name=c[1].replace(/\\/g,"");

if(!j&&W.attrMap[name]){c[1]=W.attrMap[name];
}
if(c[2]==="~="){c[4]=" "+c[4]+" ";
}return c;
},PSEUDO:function(bW,bX,bY,ca,cb){if(bW[1]==="not"){if((Y.exec(bW[3])||"").length>1||/^\w/.test(bW[3])){bW[3]=U(bW[3],null,null,bX);
}else{var cc=U.filter(bW[3],bX,bY,true^cb);

if(!bY){ca.push.apply(ca,cc);
}return false;
}}else if(W.match.POS.test(bW[0])||W.match.CHILD.test(bW[0])){return true;
}return bW;
},POS:function(fi){fi.unshift(true);
return fi;
}},filters:{enabled:function(dA){return dA.disabled===false&&dA.type!==eQ;
},disabled:function(fe){return fe.disabled===true;
},checked:function(k){return k.checked===true;
},selected:function(bV){bV.parentNode.selectedIndex;
return bV.selected===true;
},parent:function(cu){return !!cu.firstChild;
},empty:function(bI){return !bI.firstChild;
},has:function(bT,i,bU){return !!U(bU[3],bT).length;
},header:function(fm){return /h\d/i.test(fm.nodeName);
},text:function(ea){return fc===ea.type;
},radio:function(cR){return eW===cR.type;
},checkbox:function(R){return eN===R.type;
},file:function(bJ){return fb===bJ.type;
},password:function(fd){return eB===fd.type;
},submit:function(cK){return eJ===cK.type;
},image:function(cA){return eM===cA.type;
},reset:function(ct){return ez===ct.type;
},button:function(cw){return ew===cw.type||cw.nodeName.toUpperCase()===eT;
},input:function(cJ){return /input|select|textarea|button/i.test(cJ.nodeName);
}},setFilters:{first:function(ff,i){return i===0;
},last:function(cx,i,cy,cz){return i===cz.length-1;
},even:function(cd,i){return i%2===0;
},odd:function(fz,i){return i%2===1;
},lt:function(cH,i,cI){return i<cI[3]-0;
},gt:function(dy,i,dz){return i>dz[3]-0;
},nth:function(cL,i,cM){return cM[3]-0==i;
},eq:function(fg,i,fh){return fh[3]-0==i;
}},filter:{PSEUDO:function(dD,dE,i,dF){var name=dE[1],dG=W.filters[name];

if(dG){return dG(dD,i,dE,dF);
}else if(name==="contains"){return (dD.textContent||dD.innerText||"").indexOf(dE[3])>=0;
}else if(name==="not"){var dH=dE[3];

for(var i=0,l=dH.length;i<l;i++){if(dH[i]===dD){return false;
}}return true;
}},CHILD:function(B,C){var I=C[1],D=B;

switch(I){case 'only':case 'first':while((D=D.previousSibling)){if(D.nodeType===1)return false;
}
if(I=='first')return true;
D=B;
case 'last':while((D=D.nextSibling)){if(D.nodeType===1)return false;
}return true;
case 'nth':var J=C[2],F=C[3];

if(J==1&&F==0){return true;
}var H=C[0],parent=B.parentNode;

if(parent&&(parent.sizcache!==H||!B.nodeIndex)){var E=0;

for(D=parent.firstChild;D;D=D.nextSibling){if(D.nodeType===1){D.nodeIndex=++E;
}}parent.sizcache=H;
}var G=B.nodeIndex-F;

if(J==0){return G==0;
}else{return (G%J==0&&G/J>=0);
}}},ID:function(cB,cC){return cB.nodeType===1&&cB.getAttribute("id")===cC;
},TAG:function(n,o){return (o==="*"&&n.nodeType===1)||n.nodeName===o;
},CLASS:function(dI,dJ){return (" "+(dI.className||dI.getAttribute("class"))+" ").indexOf(dJ)>-1;
},ATTR:function(ce,cf){var name=cf[1],cj=W.attrHandle[name]?W.attrHandle[name](ce):ce[name]!=null?ce[name]:ce.getAttribute(name),ci=cj+"",ch=cf[2],cg=cf[4];
return cj==null?ch==="!=":ch==="="?ci===cg:ch==="*="?ci.indexOf(cg)>=0:ch==="~="?(" "+ci+" ").indexOf(cg)>=0:!cg?ci&&cj!==false:ch==="!="?ci!=cg:ch==="^="?ci.indexOf(cg)===0:ch==="$="?ci.substr(ci.length-cg.length)===cg:ch==="|="?ci===cg||ci.substr(0,cg.length+1)===cg+"-":false;
},POS:function(dL,dM,i,dN){var name=dM[2],dO=W.setFilters[name];

if(dO){return dO(dL,i,dM,dN);
}}}};
var bc=W.match.POS;

for(var bg in W.match){W.match[bg]=new RegExp(W.match[bg].source+/(?![^\[]*\])(?![^\(]*\))/.source);
W.leftMatch[bg]=new RegExp(/(^(?:.|\r|\n)*?)/.source+W.match[bg].source);
}var S=function(bG,bH){bG=Array.prototype.slice.call(bG,0);

if(bH){bH.push.apply(bH,bG);
return bH;
}return bG;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0);
}catch(e){S=function(bQ,bR){var bS=bR||[];

if(bd.call(bQ)===en){Array.prototype.push.apply(bS,bQ);
}else{if(typeof bQ.length===eK){for(var i=0,l=bQ.length;i<l;i++){bS.push(bQ[i]);
}}else{for(var i=0;bQ[i];i++){bS.push(bQ[i]);
}}}return bS;
};
}var be;

if(document.documentElement.compareDocumentPosition){be=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){bb=true;
}return 0;
}var dK=a.compareDocumentPosition(b)&4?-1:a===b?0:1;

if(dK===0){bb=true;
}return dK;
};
}else if(eG in document.documentElement){be=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){bb=true;
}return 0;
}var eb=a.sourceIndex-b.sourceIndex;

if(eb===0){bb=true;
}return eb;
};
}else if(document.createRange){be=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){bb=true;
}return 0;
}var cE=a.ownerDocument.createRange(),cF=b.ownerDocument.createRange();
cE.setStart(a,0);
cE.setEnd(a,0);
cF.setStart(b,0);
cF.setEnd(b,0);
var cD=cE.compareBoundaryPoints(Range.START_TO_END,cF);

if(cD===0){bb=true;
}return cD;
};
}(function(){var z=document.createElement(es),y=eV+(new Date).getTime();
z.innerHTML=ex+y+eY;
var x=document.documentElement;
x.insertBefore(z,x.firstChild);
if(!!document.getElementById(y)){W.find.ID=function(bD,bE,bF){if(typeof bE.getElementById!=="undefined"&&!bF){var m=bE.getElementById(bD[1]);
return m?m.id===bD[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===bD[1]?[m]:undefined:[];
}};
W.filter.ID=function(dv,dw){var dx=typeof dv.getAttributeNode!=="undefined"&&dv.getAttributeNode("id");
return dv.nodeType===1&&dx&&dx.nodeValue===dw;
};
}x.removeChild(z);
x=z=null;
})();
(function(){var cv=document.createElement(es);
cv.appendChild(document.createComment(eu));
if(cv.getElementsByTagName(eq).length>0){W.find.TAG=function(s,t){var v=t.getElementsByTagName(s[1]);
if(s[1]==="*"){var u=[];

for(var i=0;v[i];i++){if(v[i].nodeType===1){u.push(v[i]);
}}v=u;
}return v;
};
}cv.innerHTML=eA;

if(cv.firstChild&&typeof cv.firstChild.getAttribute!==eH&&cv.firstChild.getAttribute(ep)!==ey){W.attrHandle.href=function(fl){return fl.getAttribute(ep,2);
};
}cv=null;
})();

if(document.querySelectorAll)(function(){var dr=U,dq=document.createElement(es);
dq.innerHTML=eF;
if(dq.querySelectorAll&&dq.querySelectorAll(eP).length===0){return;
}U=function(dV,dW,dX,dY){dW=dW||document;
if(!dY&&dW.nodeType===9&&!ba(dW)){try{return S(dW.querySelectorAll(dV),dX);
}catch(e){}}return dr(dV,dW,dX,dY);
};

for(var ds in dr){U[ds]=dr[ds];
}dq=null;
})();

if(document.getElementsByClassName&&document.documentElement.getElementsByClassName)(function(){var w=document.createElement(es);
w.innerHTML=eL;
if(w.getElementsByClassName(eo).length===0)return;
w.lastChild.className=eo;

if(w.getElementsByClassName(eo).length===1)return;
W.order.splice(1,0,eX);
W.find.CLASS=function(fN,fO,fP){if(typeof fO.getElementsByClassName!=="undefined"&&!fP){return fO.getElementsByClassName(fN[1]);
}};
w=null;
})();
function bk(ec,ed,ee,ef,eg,eh){var ei=ec==er&&!eh;

for(var i=0,l=ef.length;i<l;i++){var ek=ef[i];

if(ek){if(ei&&ek.nodeType===1){ek.sizcache=ee;
ek.sizset=i;
}ek=ek[ec];
var ej=false;

while(ek){if(ek.sizcache===ee){ej=ef[ek.sizset];
break;
}
if(ek.nodeType===1&&!eh){ek.sizcache=ee;
ek.sizset=i;
}
if(ek.nodeName===ed){ej=ek;
break;
}ek=ek[ec];
}ef[i]=ej;
}}}function bi(ck,cl,cm,cn,co,cp){var cq=ck==er&&!cp;

for(var i=0,l=cn.length;i<l;i++){var cs=cn[i];

if(cs){if(cq&&cs.nodeType===1){cs.sizcache=cm;
cs.sizset=i;
}cs=cs[ck];
var cr=false;

while(cs){if(cs.sizcache===cm){cr=cn[cs.sizset];
break;
}
if(cs.nodeType===1){if(!cp){cs.sizcache=cm;
cs.sizset=i;
}
if(typeof cl!==et){if(cs===cl){cr=true;
break;
}}else if(U.filter(cl,[cs]).length>0){cr=cs;
break;
}}cs=cs[ck];
}cn[i]=cr;
}}}var X=document.compareDocumentPosition?
function(a,b){return a.compareDocumentPosition(b)&16;
}:
function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
var ba=function(fA){return fA.nodeType===9&&fA.documentElement.nodeName!==el||!!fA.ownerDocument&&fA.ownerDocument.documentElement.nodeName!==el;
};
var V=function(bK,bL){var bN=[],bM=eu,bP,bO=bL.nodeType?[bL]:bL;
while((bP=W.match.PSEUDO.exec(bK))){bM+=bP[0];
bK=bK.replace(W.match.PSEUDO,eu);
}bK=W.relative[bK]?bK+eq:bK;

for(var i=0,l=bO.length;i<l;i++){U(bK,bO[i],bN);
}return U.filter(bM,bN);
};
var bf=qx.bom.Selector;
bf.query=function(fj,fk){return U(fj,fk);
};
bf.matches=function(cN,cO){return U(cN,null,null,cO);
};
})();
})();
(function(){var y="qx.client",x="gecko",w="Content-Type",v="",u="mshtml",t="application/xml",s="qx.bom.Request",r="file:",q="parsererror";
qx.Class.define(s,{extend:qx.core.Object,construct:function(){this.__fX={};
this.__fY=this.__gj();
},statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},members:{__ga:null,__gb:null,__fY:null,__gc:null,__gd:null,__ge:null,__gf:null,__fX:null,readyState:0,responseText:v,responseXML:null,status:0,statusText:v,timeout:0,onreadystatechange:function(){},ontimeout:function(){},onload:function(){},onerror:function(){},onabort:function(){},open:function(h,i,j,k,l){if(j==null){j=true;
}this.__ga=j;
this.__gb=qx.lang.Function.bind(this.__gg,this);
this.__gc=qx.lang.Function.bind(this.__gh,this);
this.__fY.onreadystatechange=this.__gb;
if(arguments.length>4){this.__fY.open(h,i,j,k,l);
}else if(arguments.length>3){this.__fY.open(h,i,j,k);
}else{this.__fY.open(h,i,j);
}if(qx.core.Variant.isSet(y,x)){if(!j){this.readyState=qx.bom.Request.OPENED;
this.__gk();
}}},send:function(n){var o=this.__fX;
if(n&&n.nodeType){n=window.XMLSerializer?new XMLSerializer().serializeToString(n):n.xml;

if(!o[w]){o[w]=t;
}}for(var p in o){this.__fY.setRequestHeader(p,o[p]);
}if(this.timeout!=null&&this.timeout>0){this.__gd=window.setTimeout(this.__gc,this.timeout);
}this.__fY.send(n);
if(qx.core.Variant.isSet(y,x)){if(!this.__ga){this.readyState=qx.bom.Request.OPENED;
this.__gm(this);
while(this.readyState<qx.bom.Request.DONE){this.readyState++;
this.__gk();
if(this.__ge){return;
}}}}},isSuccessful:function(){var status=this.status;
return status===304||(status>=200&&status<300);
},abort:function(){if(this.__gd){window.clearTimeout(this.__gd);
}this.__gi();
this.onabort();
this.dispose();
},__gg:qx.event.GlobalError.observeMethod(function(){if(qx.core.Variant.isSet(y,x)){if(!this.__ga){return;
}}this.readyState=this.__fY.readyState;
this.__gm();
if(this.__ge){this.readyState=qx.bom.Request.UNSENT;
return ;
}if(this.readyState==qx.bom.Request.DONE&&this.__gd){window.clearTimeout(this.__gd);
}this.__gk();
if(this.readyState==qx.bom.Request.DONE){this.dispose();
}}),__gh:qx.event.GlobalError.observeMethod(function(){this.__gi();
this.ontimeout();
this.dispose();
}),getAllResponseHeaders:function(){try{return this.__fY.getAllResponseHeaders();
}catch(e){return null;
}},getResponseHeader:function(g){try{return this.__fY.getResponseHeader(g);
}catch(b){return null;
}},setRequestHeader:function(A,B){if(B==null){delete this.__fX[A];
}else{this.__fX[A]=B;
}},removeRequestHeader:function(C,D){delete this.__fX[C];
},getRequestHeader:function(m){return this.__fX[m]||null;
},__gi:function(){this.__gm();
if(this.readyState>qx.bom.Request.UNSENT){this.__ge=true;
}this.__fY.abort();
},__gj:qx.core.Variant.select(y,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),__gk:function(){if(this.__gf===this.readyState){return;
}this.onreadystatechange();
this.__gf=this.readyState;
if(this.readyState===4){if(this.isSuccessful()){this.onload();
}else{this.onerror();
}}},__gl:function(){var f=this.__fY.responseXML;

if(qx.core.Variant.isSet(y,u)){if(f&&!f.documentElement&&this.__fY.getResponseHeader(w).match(/[^\/]+\/[^\+]+\+xml/)){f=new ActiveXObject(qx.xml.Document.DOMDOC);
f.loadXML(this.__fY.responseText);
}if(f&&f.parseError!=0){return null;
}}else if(!f.documentElement||f.documentElement.tagName==q){return null;
}return f;
},__gm:function(){var d=this.__fY;

try{this.responseText=d.responseText;
}catch(z){}
try{this.responseXML=this.__gl();
}catch(E){}
try{this.status=d.status;
}catch(a){}
try{this.statusText=d.statusText;
}catch(c){}if(qx.core.Variant.isSet(y,u)){if(this.status===1223){this.status=204;
}}if(!this.status&&location.protocol===r){this.status=204;
}}},destruct:function(){if(this.__gd){window.clearTimeout(this.__gd);
this.__gd=null;
}if(this.__fY){this.__fY.onreadystatechange=qx.lang.Function.empty;
this.__fY=null;
}this.onreadystatechange=this.onload=this.onerror=this.onabort=null;
this.__gb=null;
this.__fX=null;
}});
})();
(function(){var t="qx.client",s="",r="mshtml",q="'",p="SelectionLanguage",o="qx.xml.Document",n=" />",m="MSXML2.DOMDocument.3.0",k='<\?xml version="1.0" encoding="utf-8"?>\n<',j="MSXML2.XMLHTTP.3.0",e="MSXML2.XMLHTTP.6.0",h=" xmlns='",g="text/xml",d="XPath",c="MSXML2.DOMDocument.6.0",f="HTML";
qx.Class.define(o,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(G){if(G.nodeType===9){return G.documentElement.nodeName!==f;
}else if(G.ownerDocument){return this.isXmlDocument(G.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(t,{"mshtml":function(x,y){var z=new ActiveXObject(this.DOMDOC);
z.setProperty(p,d);

if(y){var A=k;
A+=y;

if(x){A+=h+x+q;
}A+=n;
z.loadXML(A);
}return z;
},"default":function(B,C){return document.implementation.createDocument(B||s,C||s,null);
}}),fromString:qx.core.Variant.select(t,{"mshtml":function(E){var F=qx.xml.Document.create();
F.loadXML(E);
return F;
},"default":function(a){var b=new DOMParser();
return b.parseFromString(a,g);
}})},defer:function(u){if(qx.core.Variant.isSet(t,r)){var v=[c,m];
var w=[e,j];

for(var i=0,l=v.length;i<l;i++){try{new ActiveXObject(v[i]);
new ActiveXObject(w[i]);
}catch(D){continue;
}u.DOMDOC=v[i];
u.XMLHTTP=w[i];
break;
}}}});
})();
(function(){var f="mshtml",e="pop.push.reverse.shift.sort.splice.unshift.join.slice",d="number",c="qx.type.BaseArray",b="qx.client",a=".";
qx.Class.define(c,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function m(q){if(qx.core.Variant.isSet(b,f)){l.prototype={length:0,$$isArray:true};
var t=e.split(a);

for(var length=t.length;length;){l.prototype[t[--length]]=Array.prototype[t[length]];
}}var u=Array.prototype.slice;
l.prototype.concat=function(){var j=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var h;

if(arguments[i] instanceof l){h=u.call(arguments[i],0);
}else if(arguments[i] instanceof Array){h=arguments[i];
}else{h=[arguments[i]];
}j.push.apply(j,h);
}return j;
};
l.prototype.toString=function(){return u.call(this,0).toString();
};
l.prototype.toLocaleString=function(){return u.call(this,0).toLocaleString();
};
l.prototype.constructor=l;
l.prototype.indexOf=qx.lang.Core.arrayIndexOf;
l.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
l.prototype.forEach=qx.lang.Core.arrayForEach;
l.prototype.some=qx.lang.Core.arraySome;
l.prototype.every=qx.lang.Core.arrayEvery;
var r=qx.lang.Core.arrayFilter;
var s=qx.lang.Core.arrayMap;
l.prototype.filter=function(){var g=new this.constructor;
g.push.apply(g,r.apply(this,arguments));
return g;
};
l.prototype.map=function(){var p=new this.constructor;
p.push.apply(p,s.apply(this,arguments));
return p;
};
l.prototype.slice=function(){var o=new this.constructor;
o.push.apply(o,Array.prototype.slice.apply(this,arguments));
return o;
};
l.prototype.splice=function(){var n=new this.constructor;
n.push.apply(n,Array.prototype.splice.apply(this,arguments));
return n;
};
l.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
l.prototype.valueOf=function(){return this.length;
};
return l;
}function l(length){if(arguments.length===1&&typeof length===d){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function k(){}k.prototype=[];
l.prototype=new k;
l.prototype.length=0;
qx.type.BaseArray=m(l);
})();
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(l){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (l||window).document.compatMode!==f;
}},"webkit":function(p){if(document.compatMode===undefined){var q=(p||window).document.createElement(a);
q.style.cssText=e;
return q.style.width===c?true:false;
}else{return (p||window).document.compatMode!==f;
}},"default":function(k){return (k||window).document.compatMode!==f;
}}),isStandardMode:function(j){return !this.isQuirksMode(j);
},getWidth:function(m){var n=(m||window).document;
var o=qx.bom.Viewport.getWidth(m);
var scroll=this.isStandardMode(m)?n.documentElement.scrollWidth:n.body.scrollWidth;
return Math.max(scroll,o);
},getHeight:function(g){var h=(g||window).document;
var i=qx.bom.Viewport.getHeight(g);
var scroll=this.isStandardMode(g)?h.documentElement.scrollHeight:h.body.scrollHeight;
return Math.max(scroll,i);
}}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(u){this._manager=u;
},members:{_getParent:function(x){throw new Error("Missing implementation");
},canDispatchEvent:function(v,event,w){return event.getBubbles();
},dispatchEvent:function(c,event,d){var parent=c;
var o=this._manager;
var l,s;
var h;
var n,q;
var p;
var r=[];
l=o.getListeners(c,d,true);
s=o.getListeners(c,d,false);

if(l){r.push(l);
}
if(s){r.push(s);
}var parent=this._getParent(c);
var f=[];
var e=[];
var g=[];
var m=[];
while(parent!=null){l=o.getListeners(parent,d,true);

if(l){g.push(l);
m.push(parent);
}s=o.getListeners(parent,d,false);

if(s){f.push(s);
e.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=g.length-1;i>=0;i--){p=m[i];
event.setCurrentTarget(p);
h=g[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||p;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(c);

for(var i=0,t=r.length;i<t;i++){h=r[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||c;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,t=f.length;i<t;i++){p=e[i];
event.setCurrentTarget(p);
h=f[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||p;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){arguments.callee.base.call(this);
this.__bU=k;
this.__bV=k.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__bU:null,__bV:null,canHandleEvent:function(i,j){},registerEvent:function(e,f,g){},unregisterEvent:function(b,c,d){}},destruct:function(){this.__bU=this.__bV=null;
},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var X="keydown",W="qx.client",V="keypress",U="NumLock",T="keyup",S="Enter",R="0",Q="9",P="-",O="PageUp",cf="+",ce="PrintScreen",cd="gecko",cc="A",cb="Z",ca="Left",bY="F5",bX="Down",bW="Up",bV="F11",bf="F6",bg="useraction",bd="F3",be="keyinput",bb="Insert",bc="F8",Y="End",ba="/",bn="Delete",bo="*",bA="F1",bw="F4",bI="Home",bD="F2",bR="F12",bN="PageDown",bs="F7",bU="F9",bT="F10",bS="Right",br="text",bu="Escape",bv="webkit",by="5",bB="3",bE="Meta",bK="7",bP="CapsLock",bh="input",bi="Control",bt="Space",bH="Tab",bG="Shift",bF="Pause",bM="Unidentified",bL="qx.event.handler.Keyboard",bC="mshtml",bJ="mshtml|webkit",L="6",bO="off",bj="Apps",bk="4",bx="Alt",M="2",N="Scroll",bq="1",bl="8",bm="Win",bp="autoComplete",bz=",",bQ="Backspace";
qx.Class.define(bL,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){arguments.callee.base.call(this);
this.__bW=q;
this.__bX=q.getWindow();
if(qx.core.Variant.isSet(W,cd)){this.__bY=this.__bX;
}else{this.__bY=this.__bX.document.documentElement;
}this.__ca={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(G){if(this._identifierToKeyCodeMap[G]){return true;
}
if(G.length!=1){return false;
}
if(G>=R&&G<=Q){return true;
}
if(G>=cc&&G<=cb){return true;
}
switch(G){case cf:case P:case bo:case ba:return true;
default:return false;
}}},members:{__cb:null,__bW:null,__bX:null,__bY:null,__ca:null,__fm:null,__cf:null,__cc:null,canHandleEvent:function(A,B){},registerEvent:function(ci,cj,ck){},unregisterEvent:function(x,y,z){},_fireInputEvent:function(a,b){var c=this.__fn();
if(c&&c.offsetWidth!=0){var event=qx.event.Registration.createEvent(be,qx.event.type.KeyInput,[a,c,b]);
this.__bW.dispatchEvent(c,event);
}if(this.__bX){qx.event.Registration.fireEvent(this.__bX,bg,qx.event.type.Data,[be]);
}},_fireSequenceEvent:function(cs,ct,cu){var cv=this.__fn();
var cw=cs.keyCode;
var event=qx.event.Registration.createEvent(ct,qx.event.type.KeySequence,[cs,cv,cu]);
this.__bW.dispatchEvent(cv,event);
if(qx.core.Variant.isSet(W,bJ)){if(ct==X&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(cw)&&!this._emulateKeyPress[cw]){this._fireSequenceEvent(cs,V,cu);
}}}if(this.__bX){qx.event.Registration.fireEvent(this.__bX,bg,qx.event.type.Data,[ct]);
}},__fn:function(){var cF=this.__bW.getHandler(qx.event.handler.Focus);
var cG=cF.getActive();
if(!cG||cG.offsetWidth==0){cG=cF.getFocus();
}if(!cG||cG.offsetWidth==0){cG=this.__bW.getWindow().document.body;
}return cG;
},_initKeyObserver:function(){this.__cb=qx.lang.Function.listener(this.__cd,this);
this.__cc=qx.lang.Function.listener(this.__cg,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__bY,T,this.__cb);
Event.addNativeListener(this.__bY,X,this.__cb);
Event.addNativeListener(this.__bY,V,this.__cc);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__bY,T,this.__cb);
Event.removeNativeListener(this.__bY,X,this.__cb);
Event.removeNativeListener(this.__bY,V,this.__cc);

for(var o in (this.__cf||{})){var n=this.__cf[o];
Event.removeNativeListener(n.target,V,n.callback);
}delete (this.__cf);
},__cd:qx.event.GlobalError.observeMethod(qx.core.Variant.select(W,{"mshtml":function(H){H=window.event||H;
var K=H.keyCode;
var I=0;
var J=H.type;
if(!(this.__ca[K]==X&&J==X)){this._idealKeyHandler(K,I,J,H);
}if(J==X){if(this._isNonPrintableKeyCode(K)||this._emulateKeyPress[K]){this._idealKeyHandler(K,I,V,H);
}}this.__ca[K]=J;
},"gecko":function(r){var v=this._keyCodeFix[r.keyCode]||r.keyCode;
var t=0;
var u=r.type;
if(qx.bom.client.Platform.WIN){var s=v?this._keyCodeToIdentifier(v):this._charCodeToIdentifier(t);

if(!(this.__ca[s]==X&&u==X)){this._idealKeyHandler(v,t,u,r);
}this.__ca[s]=u;
}else{this._idealKeyHandler(v,t,u,r);
}this.__ce(r.target,u,v);
},"webkit":function(C){var F=0;
var D=0;
var E=C.type;
if(qx.bom.client.Engine.VERSION<525.13){if(E==T||E==X){F=this._charCode2KeyCode[C.charCode]||C.keyCode;
}else{if(this._charCode2KeyCode[C.charCode]){F=this._charCode2KeyCode[C.charCode];
}else{D=C.charCode;
}}this._idealKeyHandler(F,D,E,C);
}else{F=C.keyCode;
if(!(this.__ca[F]==X&&E==X)){this._idealKeyHandler(F,D,E,C);
}if(E==X){if(this._isNonPrintableKeyCode(F)||this._emulateKeyPress[F]){this._idealKeyHandler(F,D,V,C);
}}this.__ca[F]=E;
}},"opera":function(cr){this.__fm=cr.keyCode;
this._idealKeyHandler(cr.keyCode,0,cr.type,cr);
}})),__ce:qx.core.Variant.select(W,{"gecko":function(cH,cI,cJ){if(cI===X&&(cJ==33||cJ==34||cJ==38||cJ==40)&&cH.type==br&&cH.tagName.toLowerCase()===bh&&cH.getAttribute(bp)!==bO){if(!this.__cf){this.__cf={};
}var cL=qx.core.ObjectRegistry.toHashCode(cH);

if(this.__cf[cL]){return;
}var self=this;
this.__cf[cL]={target:cH,callback:function(cE){qx.bom.Event.stopPropagation(cE);
self.__cg(cE);
}};
var cK=qx.event.GlobalError.observeMethod(this.__cf[cL].callback);
qx.bom.Event.addNativeListener(cH,V,cK);
}},"default":null}),__cg:qx.event.GlobalError.observeMethod(qx.core.Variant.select(W,{"mshtml":function(cq){cq=window.event||cq;

if(this._charCode2KeyCode[cq.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cq.keyCode],0,cq.type,cq);
}else{this._idealKeyHandler(0,cq.keyCode,cq.type,cq);
}},"gecko":function(cl){var co=this._keyCodeFix[cl.keyCode]||cl.keyCode;
var cm=cl.charCode;
var cn=cl.type;
this._idealKeyHandler(co,cm,cn,cl);
},"webkit":function(cx){if(qx.bom.client.Engine.VERSION<525.13){var cA=0;
var cy=0;
var cz=cx.type;

if(cz==T||cz==X){cA=this._charCode2KeyCode[cx.charCode]||cx.keyCode;
}else{if(this._charCode2KeyCode[cx.charCode]){cA=this._charCode2KeyCode[cx.charCode];
}else{cy=cx.charCode;
}}this._idealKeyHandler(cA,cy,cz,cx);
}else{if(this._charCode2KeyCode[cx.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cx.keyCode],0,cx.type,cx);
}else{this._idealKeyHandler(0,cx.keyCode,cx.type,cx);
}}},"opera":function(cB){var cD=cB.keyCode;
var cC=cB.type;
if(cD!=this.__fm){this._idealKeyHandler(0,this.__fm,cC,cB);
}else{if(this._keyCodeToIdentifierMap[cB.keyCode]){this._idealKeyHandler(cB.keyCode,0,cB.type,cB);
}else{this._idealKeyHandler(0,cB.keyCode,cB.type,cB);
}}}})),_idealKeyHandler:function(e,f,g,h){var i;
if(e||(!e&&!f)){i=this._keyCodeToIdentifier(e);
this._fireSequenceEvent(h,g,i);
}else{i=this._charCodeToIdentifier(f);
this._fireSequenceEvent(h,V,i);
this._fireInputEvent(h,f);
}},_specialCharCodeMap:{8:bQ,9:bH,13:S,27:bu,32:bt},_emulateKeyPress:qx.core.Variant.select(W,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bG,17:bi,18:bx,20:bP,224:bE,37:ca,38:bW,39:bS,40:bX,33:O,34:bN,35:Y,36:bI,45:bb,46:bn,112:bA,113:bD,114:bd,115:bw,116:bY,117:bf,118:bs,119:bc,120:bU,121:bT,122:bV,123:bR,144:U,44:ce,145:N,19:bF,91:bm,93:bj},_numpadToCharCode:{96:R.charCodeAt(0),97:bq.charCodeAt(0),98:M.charCodeAt(0),99:bB.charCodeAt(0),100:bk.charCodeAt(0),101:by.charCodeAt(0),102:L.charCodeAt(0),103:bK.charCodeAt(0),104:bl.charCodeAt(0),105:Q.charCodeAt(0),106:bo.charCodeAt(0),107:cf.charCodeAt(0),109:P.charCodeAt(0),110:bz.charCodeAt(0),111:ba.charCodeAt(0)},_charCodeA:cc.charCodeAt(0),_charCodeZ:cb.charCodeAt(0),_charCode0:R.charCodeAt(0),_charCode9:Q.charCodeAt(0),_isNonPrintableKeyCode:function(d){return this._keyCodeToIdentifierMap[d]?true:false;
},_isIdentifiableKeyCode:function(p){if(p>=this._charCodeA&&p<=this._charCodeZ){return true;
}if(p>=this._charCode0&&p<=this._charCode9){return true;
}if(this._specialCharCodeMap[p]){return true;
}if(this._numpadToCharCode[p]){return true;
}if(this._isNonPrintableKeyCode(p)){return true;
}return false;
},_keyCodeToIdentifier:function(cg){if(this._isIdentifiableKeyCode(cg)){var ch=this._numpadToCharCode[cg];

if(ch){return String.fromCharCode(ch);
}return (this._keyCodeToIdentifierMap[cg]||this._specialCharCodeMap[cg]||String.fromCharCode(cg));
}else{return bM;
}},_charCodeToIdentifier:function(cp){return this._specialCharCodeMap[cp]||String.fromCharCode(cp).toUpperCase();
},_identifierToKeyCode:function(w){return qx.event.handler.Keyboard._identifierToKeyCodeMap[w]||w.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__fm=this.__bW=this.__bX=this.__bY=this.__ca=null;
},defer:function(j,k,l){qx.event.Registration.addHandler(j);
if(!j._identifierToKeyCodeMap){j._identifierToKeyCodeMap={};

for(var m in k._keyCodeToIdentifierMap){j._identifierToKeyCodeMap[k._keyCodeToIdentifierMap[m]]=parseInt(m,10);
}
for(var m in k._specialCharCodeMap){j._identifierToKeyCodeMap[k._specialCharCodeMap[m]]=parseInt(m,10);
}}
if(qx.core.Variant.isSet(W,bC)){k._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(W,cd)){k._keyCodeFix={12:k._identifierToKeyCode(U)};
}else if(qx.core.Variant.isSet(W,bv)){if(qx.bom.client.Engine.VERSION<525.13){k._charCode2KeyCode={63289:k._identifierToKeyCode(U),63276:k._identifierToKeyCode(O),63277:k._identifierToKeyCode(bN),63275:k._identifierToKeyCode(Y),63273:k._identifierToKeyCode(bI),63234:k._identifierToKeyCode(ca),63232:k._identifierToKeyCode(bW),63235:k._identifierToKeyCode(bS),63233:k._identifierToKeyCode(bX),63272:k._identifierToKeyCode(bn),63302:k._identifierToKeyCode(bb),63236:k._identifierToKeyCode(bA),63237:k._identifierToKeyCode(bD),63238:k._identifierToKeyCode(bd),63239:k._identifierToKeyCode(bw),63240:k._identifierToKeyCode(bY),63241:k._identifierToKeyCode(bf),63242:k._identifierToKeyCode(bs),63243:k._identifierToKeyCode(bc),63244:k._identifierToKeyCode(bU),63245:k._identifierToKeyCode(bT),63246:k._identifierToKeyCode(bV),63247:k._identifierToKeyCode(bR),63248:k._identifierToKeyCode(ce),3:k._identifierToKeyCode(S),12:k._identifierToKeyCode(U),13:k._identifierToKeyCode(S)};
}else{k._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__du:function(){var n=navigator.platform;
if(n==null||n===k){n=navigator.userAgent;
}
if(n.indexOf(e)!=-1||n.indexOf(l)!=-1||n.indexOf(j)!=-1){this.WIN=true;
this.NAME="win";
}else if(n.indexOf(g)!=-1||n.indexOf(b)!=-1||n.indexOf(c)!=-1||n.indexOf(m)!=-1||n.indexOf(f)!=-1){this.MAC=true;
this.NAME="mac";
}else if(n.indexOf(a)!=-1||n.indexOf(i)!=-1||n.indexOf(h)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(o){o.__du();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__dv:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__dw:function(){var L=navigator.userAgent;
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
(function(){var R="qx.client",Q="mouseup",P="click",O="mousedown",N="contextmenu",M="mousewheel",L="dblclick",K="mshtml",J="mouseover",I="mouseout",D="DOMMouseScroll",H="mousemove",G="on",C="mshtml|webkit|opera",B="useraction",F="gecko|webkit",E="qx.event.handler.Mouse";
qx.Class.define(E,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(z){arguments.callee.base.call(this);
this.__ch=z;
this.__ci=z.getWindow();
this.__cj=this.__ci.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__ck:null,__cl:null,__cm:null,__cn:null,__co:null,__ch:null,__ci:null,__cj:null,canHandleEvent:function(t,u){},registerEvent:qx.bom.client.System.IPHONE?
function(q,r,s){q[G+r]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(d,e,f){d[G+e]=undefined;
}:qx.lang.Function.returnNull,__cp:function(U,V,W){if(!W){W=U.target||U.srcElement;
}if(W&&W.nodeType){qx.event.Registration.fireEvent(W,V||U.type,V==M?qx.event.type.MouseWheel:qx.event.type.Mouse,[U,W,null,true,true]);
}qx.event.Registration.fireEvent(this.__ci,B,qx.event.type.Data,[V||U.type]);
},_initButtonObserver:function(){this.__ck=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cj,O,this.__ck);
Event.addNativeListener(this.__cj,Q,this.__ck);
Event.addNativeListener(this.__cj,P,this.__ck);
Event.addNativeListener(this.__cj,L,this.__ck);
Event.addNativeListener(this.__cj,N,this.__ck);
},_initMoveObserver:function(){this.__cl=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cj,H,this.__cl);
Event.addNativeListener(this.__cj,J,this.__cl);
Event.addNativeListener(this.__cj,I,this.__cl);
},_initWheelObserver:function(){this.__cm=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var S=qx.core.Variant.isSet(R,C)?M:D;
var T=qx.core.Variant.isSet(R,K)?this.__cj:this.__ci;
Event.addNativeListener(T,S,this.__cm);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cj,O,this.__ck);
Event.removeNativeListener(this.__cj,Q,this.__ck);
Event.removeNativeListener(this.__cj,P,this.__ck);
Event.removeNativeListener(this.__cj,L,this.__ck);
Event.removeNativeListener(this.__cj,N,this.__ck);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cj,H,this.__cl);
Event.removeNativeListener(this.__cj,J,this.__cl);
Event.removeNativeListener(this.__cj,I,this.__cl);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var a=qx.core.Variant.isSet(R,C)?M:D;
var b=qx.core.Variant.isSet(R,K)?this.__cj:this.__ci;
Event.removeNativeListener(b,a,this.__cm);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(j){this.__cp(j);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(k){var l=k.type;
var m=k.target||k.srcElement;
if(qx.core.Variant.isSet(R,F)){if(m&&m.nodeType==3){m=m.parentNode;
}}
if(this.__cq){this.__cq(k,l,m);
}
if(this.__cs){this.__cs(k,l,m);
}this.__cp(k,l,m);

if(this.__cr){this.__cr(k,l,m);
}
if(this.__ct){this.__ct(k,l,m);
}this.__cn=l;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(A){this.__cp(A,M);
}),__cq:qx.core.Variant.select(R,{"webkit":function(g,h,i){if(qx.bom.client.Engine.VERSION<530){if(h==N){this.__cp(g,Q,i);
}}},"default":null}),__cr:qx.core.Variant.select(R,{"opera":function(n,o,p){if(o==Q&&n.button==2){this.__cp(n,N,p);
}},"default":null}),__cs:qx.core.Variant.select(R,{"mshtml":function(X,Y,ba){if(Y==Q&&this.__cn==P){this.__cp(X,O,ba);
}else if(Y==L){this.__cp(X,P,ba);
}},"default":null}),__ct:qx.core.Variant.select(R,{"mshtml":null,"default":function(v,w,x){switch(w){case O:this.__co=x;
break;
case Q:if(x!==this.__co){var y=qx.dom.Hierarchy.getCommonParent(x,this.__co);
this.__cp(v,P,y);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__ch=this.__ci=this.__cj=this.__co=null;
},defer:function(c){qx.event.Registration.addHandler(c);
}});
})();
(function(){var b="-",a="qx.event.handler.Element";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){arguments.callee.base.call(this);
this._manager=h;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(o,p){},registerEvent:function(i,j,k){var n=qx.core.ObjectRegistry.toHashCode(i);
var l=n+b+j;
var m=qx.lang.Function.listener(this._onNative,this,l);
qx.bom.Event.addNativeListener(i,j,m);
this._registeredEvents[l]={element:i,type:j,listener:m};
},unregisterEvent:function(q,r,s){var v=this._registeredEvents;

if(!v){return;
}var w=qx.core.ObjectRegistry.toHashCode(q);
var t=w+b+r;
var u=this._registeredEvents[t];
qx.bom.Event.removeNativeListener(q,r,u.listener);
delete this._registeredEvents[t];
},_onNative:qx.event.GlobalError.observeMethod(function(c,d){var f=this._registeredEvents;

if(!f){return;
}var e=f[d];
qx.event.Registration.fireNonBubblingEvent(e.element,e.type,qx.event.type.Native,[c]);
})},destruct:function(){var x;
var y=this._registeredEvents;

for(var z in y){x=y[z];
qx.bom.Event.removeNativeListener(x.element,x.type,x.listener);
}this._manager=this._registeredEvents=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){arguments.callee.base.call(this);
this.__cP=g;
this.__cQ={};
qx.event.handler.Appear.__cR[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__cR:{},refresh:function(){var r=this.__cR;

for(var s in r){r[s].refresh();
}}},members:{__cP:null,__cQ:null,canHandleEvent:function(e,f){},registerEvent:function(t,u,v){var w=qx.core.ObjectRegistry.toHashCode(t)+u;
var x=this.__cQ;

if(x&&!x[w]){x[w]=t;
t.$$displayed=t.offsetWidth>0;
}},unregisterEvent:function(m,n,o){var p=qx.core.ObjectRegistry.toHashCode(m)+n;
var q=this.__cQ;

if(!q){return;
}
if(q[p]){delete q[p];
}},refresh:function(){var k=this.__cQ;
var l;

for(var j in k){l=k[j];
var h=l.offsetWidth>0;

if((!!l.$$displayed)!==h){l.$$displayed=h;
var i=qx.event.Registration.createEvent(h?a:b);
this.__cP.dispatchEvent(l,i);
}}}},destruct:function(){this.__cP=this.__cQ=null;
delete qx.event.handler.Appear.__cR[this.$$hash];
},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var n="mshtml",m="",k="qx.client",h=">",g="<",f=" ",e="='",d="qx.bom.Element",c="div",b="' ",a="></";
qx.Class.define(d,{statics:{__cS:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,S,T){if(!T){T=window;
}
if(!name){throw new Error("The tag name is missing!");
}var V=this.__cS;
var U=m;

for(var X in S){if(V[X]){U+=X+e+S[X]+b;
}}var Y;
if(U!=m){if(qx.bom.client.Engine.MSHTML){Y=T.document.createElement(g+name+f+U+h);
}else{var W=T.document.createElement(c);
W.innerHTML=g+name+f+U+a+name+h;
Y=W.firstChild;
}}else{Y=T.document.createElement(name);
}
for(var X in S){if(!V[X]){qx.bom.element.Attribute.set(Y,X,S[X]);
}}return Y;
},empty:function(M){return M.innerHTML=m;
},addListener:function(o,p,q,self,r){return qx.event.Registration.addListener(o,p,q,self,r);
},removeListener:function(I,J,K,self,L){return qx.event.Registration.removeListener(I,J,K,self,L);
},removeListenerById:function(s,t){return qx.event.Registration.removeListenerById(s,t);
},hasListener:function(N,O,P){return qx.event.Registration.hasListener(N,O,P);
},focus:function(v){qx.event.Registration.getManager(v).getHandler(qx.event.handler.Focus).focus(v);
},blur:function(Q){qx.event.Registration.getManager(Q).getHandler(qx.event.handler.Focus).blur(Q);
},activate:function(u){qx.event.Registration.getManager(u).getHandler(qx.event.handler.Focus).activate(u);
},deactivate:function(bc){qx.event.Registration.getManager(bc).getHandler(qx.event.handler.Focus).deactivate(bc);
},capture:function(ba,bb){qx.event.Registration.getManager(ba).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(ba,bb);
},releaseCapture:function(R){qx.event.Registration.getManager(R).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(R);
},clone:function(w,x){var A;

if(x||(qx.core.Variant.isSet(k,n)&&!qx.xml.Document.isXmlDocument(w))){var E=qx.event.Registration.getManager(w);
var y=qx.dom.Hierarchy.getDescendants(w);
y.push(w);
}if(qx.core.Variant.isSet(k,n)){for(var i=0,l=y.length;i<l;i++){E.toggleAttachedEvents(y[i],false);
}}var A=w.cloneNode(true);
if(qx.core.Variant.isSet(k,n)){for(var i=0,l=y.length;i<l;i++){E.toggleAttachedEvents(y[i],true);
}}if(x===true){var H=qx.dom.Hierarchy.getDescendants(A);
H.push(A);
var z,C,G,B;

for(var i=0,F=y.length;i<F;i++){G=y[i];
z=E.serializeListeners(G);

if(z.length>0){C=H[i];

for(var j=0,D=z.length;j<D;j++){B=z[j];
E.addListener(C,B.type,B.handler,B.self,B.capture);
}}}}return A;
}}});
})();
(function(){var W="change",V="input",U="qx.client",T="text",S="password",R="checkbox",Q="radio",P="textarea",O="keypress",N="opera",H="propertychange",M="blur",K="keydown",G="keyup",F="select-multiple",J="checked",I="value",L="select",E="qx.event.handler.Input";
qx.Class.define(E,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(U,N)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__gn:false,__go:null,__gp:null,canHandleEvent:function(t,u){var v=t.tagName.toLowerCase();

if(u===V&&(v===V||v===P)){return true;
}
if(u===W&&(v===V||v===P||v===L)){return true;
}return false;
},registerEvent:qx.core.Variant.select(U,{"mshtml":function(g,h,j){if(!g.__eg){var k=g.tagName.toLowerCase();
var m=g.type;

if(m===T||m===S||k===P||m===R||m===Q){qx.bom.Event.addNativeListener(g,H,this._onPropertyWrapper);
}
if(m!==R&&m!==Q){qx.bom.Event.addNativeListener(g,W,this._onChangeValueWrapper);
}
if(m===T||m===S){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,g);
qx.bom.Event.addNativeListener(g,O,this._onKeyPressWrapped);
}g.__eg=true;
}},"default":function(B,C,D){if(C===V){this.__fO(B);
}else if(C===W){if(B.type===Q||B.type===R){qx.bom.Event.addNativeListener(B,W,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(B,W,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(U,N)){if(B.type===T||B.type===S){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,B);
qx.bom.Event.addNativeListener(B,O,this._onKeyPressWrapped);
}}}}}),__fO:qx.core.Variant.select(U,{"mshtml":null,"webkit":function(bb){var bc=bb.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&bc==P){qx.bom.Event.addNativeListener(bb,O,this._onInputWrapper);
}qx.bom.Event.addNativeListener(bb,V,this._onInputWrapper);
},"opera":function(X){qx.bom.Event.addNativeListener(X,G,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(X,K,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(X,M,this._onBlurWrapper);
qx.bom.Event.addNativeListener(X,V,this._onInputWrapper);
},"default":function(z){qx.bom.Event.addNativeListener(z,V,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(U,{"mshtml":function(p,q){if(p.__eg){var r=p.tagName.toLowerCase();
var s=p.type;

if(s===T||s===S||r===P||s===R||s===Q){qx.bom.Event.removeNativeListener(p,H,this._onPropertyWrapper);
}
if(s!==R&&s!==Q){qx.bom.Event.removeNativeListener(p,W,this._onChangeValueWrapper);
}
if(s===T||s===S){qx.bom.Event.removeNativeListener(p,O,this._onKeyPressWrapped);
}
try{delete p.__eg;
}catch(w){p.__eg=null;
}}},"default":function(be,bf){if(bf===V){this.__fO(be);
}else if(bf===W){if(be.type===Q||be.type===R){qx.bom.Event.removeNativeListener(be,W,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(be,W,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(U,N)){if(be.type===T||be.type===S){qx.bom.Event.removeNativeListener(be,O,this._onKeyPressWrapped);
}}}}),__fP:qx.core.Variant.select(U,{"mshtml":null,"webkit":function(a){var b=a.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&b==P){qx.bom.Event.removeNativeListener(a,O,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(a,V,this._onInputWrapper);
},"opera":function(bd){qx.bom.Event.removeNativeListener(bd,G,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(bd,K,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(bd,M,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(bd,V,this._onInputWrapper);
},"default":function(y){qx.bom.Event.removeNativeListener(y,V,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(U,{"mshtml|opera":function(e,x){if(e.keyCode===13){if(x.value!==this.__gp){this.__gp=x.value;
qx.event.Registration.fireEvent(x,W,qx.event.type.Data,[x.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(U,{"opera":function(e){if(e.keyCode===13){this.__gn=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(U,{"opera":function(e){if(e.keyCode===13){this.__gn=false;
}},"default":null}),_onBlur:qx.core.Variant.select(U,{"opera":function(e){if(this.__go){window.clearTimeout(this.__go);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var f=e.target;
if(!this.__gn){if(qx.core.Variant.isSet(U,N)){this.__go=window.setTimeout(function(){qx.event.Registration.fireEvent(f,V,qx.event.type.Data,[f.value]);
},0);
}else{qx.event.Registration.fireEvent(f,V,qx.event.type.Data,[f.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var d=e.target||e.srcElement;
var c=d.value;

if(d.type===F){var c=[];

for(var i=0,o=d.options,l=o.length;i<l;i++){if(o[i].selected){c.push(o[i].value);
}}}qx.event.Registration.fireEvent(d,W,qx.event.type.Data,[c]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var A=e.target;

if(A.type===Q){if(A.checked){qx.event.Registration.fireEvent(A,W,qx.event.type.Data,[A.value]);
}}else{qx.event.Registration.fireEvent(A,W,qx.event.type.Data,[A.checked]);
}}),_onProperty:qx.core.Variant.select(U,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var Y=e.target||e.srcElement;
var ba=e.propertyName;

if(ba===I&&(Y.type===T||Y.type===S||Y.tagName.toLowerCase()===P)){if(!Y.__inValueSet){qx.event.Registration.fireEvent(Y,V,qx.event.type.Data,[Y.value]);
}}else if(ba===J){if(Y.type===R){qx.event.Registration.fireEvent(Y,W,qx.event.type.Data,[Y.checked]);
}else if(Y.checked){qx.event.Registration.fireEvent(Y,W,qx.event.type.Data,[Y.value]);
}}}),"default":function(){}})},defer:function(n){qx.event.Registration.addHandler(n);
}});
})();
(function(){var v="",u="select",t="soft",s="off",r="qx.client",q="wrap",p="text",o="mshtml",n="number",m="checkbox",d="select-one",k="input",g="option",c="value",b="radio",f="qx.bom.Input",e="nowrap",h="textarea",a="auto",j="normal";
qx.Class.define(f,{statics:{__ei:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(H,I,J){{};
var I=I?qx.lang.Object.clone(I):{};
var K;

if(H===h||H===u){K=H;
}else{K=k;
I.type=H;
}return qx.bom.Element.create(K,I,J);
},setValue:function(y,z){var E=y.nodeName.toLowerCase();
var B=y.type;
var Array=qx.lang.Array;
var F=qx.lang.Type;

if(typeof z===n){z+=v;
}
if((B===m||B===b)){if(F.isArray(z)){y.checked=Array.contains(z,y.value);
}else{y.checked=y.value==z;
}}else if(E===u){var A=F.isArray(z);
var G=y.options;
var C,D;

for(var i=0,l=G.length;i<l;i++){C=G[i];
D=C.getAttribute(c);

if(D==null){D=C.text;
}C.selected=A?Array.contains(z,D):z==D;
}
if(A&&z.length==0){y.selectedIndex=-1;
}}else if(B===p&&qx.core.Variant.isSet(r,o)){y.__ej=true;
y.value=z;
y.__ej=null;
}else{y.value=z;
}},getValue:function(P){var V=P.nodeName.toLowerCase();

if(V===g){return (P.attributes.value||{}).specified?P.value:P.text;
}
if(V===u){var Q=P.selectedIndex;
if(Q<0){return null;
}var W=[];
var Y=P.options;
var X=P.type==d;
var U=qx.bom.Input;
var T;
for(var i=X?Q:0,S=X?Q+1:Y.length;i<S;i++){var R=Y[i];

if(R.selected){T=U.getValue(R);
if(X){return T;
}W.push(T);
}}return W;
}else{return (P.value||v).replace(/\r/g,v);
}},setWrap:qx.core.Variant.select(r,{"mshtml":function(w,x){w.wrap=x?t:s;
},"gecko|webkit":function(L,M){var O=M?t:s;
var N=M?v:a;
L.setAttribute(q,O);
L.style.overflow=N;
},"default":function(ba,bb){ba.style.whiteSpace=bb?j:e;
}})}});
})();
(function(){var d="qx.client",c="qx.bom.Viewport";
qx.Class.define(c,{statics:{getWidth:qx.core.Variant.select(d,{"opera":function(m){if(qx.bom.client.Engine.VERSION<9.5){return (m||window).document.body.clientWidth;
}else{var n=(m||window).document;
return qx.bom.Document.isStandardMode(m)?n.documentElement.clientWidth:n.body.clientWidth;
}},"webkit":function(a){if(qx.bom.client.Engine.VERSION<523.15){return (a||window).innerWidth;
}else{var b=(a||window).document;
return qx.bom.Document.isStandardMode(a)?b.documentElement.clientWidth:b.body.clientWidth;
}},"default":function(o){var p=(o||window).document;
return qx.bom.Document.isStandardMode(o)?p.documentElement.clientWidth:p.body.clientWidth;
}}),getHeight:qx.core.Variant.select(d,{"opera":function(f){if(qx.bom.client.Engine.VERSION<9.5){return (f||window).document.body.clientHeight;
}else{var g=(f||window).document;
return qx.bom.Document.isStandardMode(f)?g.documentElement.clientHeight:g.body.clientHeight;
}},"webkit":function(k){if(qx.bom.client.Engine.VERSION<523.15){return (k||window).innerHeight;
}else{var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientHeight:l.body.clientHeight;
}},"default":function(s){var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientHeight:t.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(d,{"mshtml":function(q){var r=(q||window).document;
return r.documentElement.scrollLeft||r.body.scrollLeft;
},"default":function(e){return (e||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(d,{"mshtml":function(i){var j=(i||window).document;
return j.documentElement.scrollTop||j.body.scrollTop;
},"default":function(h){return (h||window).pageYOffset;
}})}});
})();
(function(){var j="",i="qx.client",h="readOnly",g="accessKey",f="qx.bom.element.Attribute",e="rowSpan",d="vAlign",c="className",b="textContent",a="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",o="dateTime",m="maxLength",n="mshtml",k="cellPadding",l="colSpan";
qx.Class.define(f,{statics:{__dt:{names:{"class":c,"for":x,html:q,text:qx.core.Variant.isSet(i,n)?r:b,colspan:l,rowspan:e,valign:d,datetime:o,accesskey:g,tabindex:p,maxlength:m,readonly:h,longdesc:w,cellpadding:k,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,maxLength:10000000,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(F){var G=[];
var I=this.__dt.runtime;

for(var H in F){if(!I[H]){G.push(H,t,F[H],a);
}}return G.join(j);
},get:qx.core.Variant.select(i,{"mshtml":function(z,name){var B=this.__dt;
var A;
name=B.names[name]||name;
if(B.original[name]){A=z.getAttribute(name,2);
}else if(B.property[name]){if(B.propertyDefault[name]&&A==B.propertyDefault[name]){return null;
}A=z[name];
}else{A=z.getAttribute(name);
}if(B.bools[name]){return !!A;
}return A;
},"default":function(C,name){var E=this.__dt;
var D;
name=E.names[name]||name;
if(E.property[name]){if(E.propertyDefault[name]&&D==E.propertyDefault[name]){return null;
}D=C[name];

if(D==null){D=C.getAttribute(name);
}}else{D=C.getAttribute(name);
}if(E.bools[name]){return !!D;
}return D;
}}),set:function(J,name,K){var L=this.__dt;
name=L.names[name]||name;
if(L.bools[name]){K=!!K;
}if(L.property[name]){if(K==null){K=L.propertyDefault[name];

if(K===undefined){K=null;
}}J[name]=K;
}else{if(K===true){J.setAttribute(name,name);
}else if(K===false||K===null){J.removeAttribute(name);
}else{J.setAttribute(name,K);
}}},reset:function(y,name){this.set(y,name,null);
}}});
})();
(function(){var f="(\\s|$)",e="(^|\\s)",d="",c="qx.bom.element.Class",b=" ",a="$2";
qx.Class.define(c,{statics:{add:function(n,name){if(!this.has(n,name)){n.className+=(n.className?b:d)+name;
}return name;
},get:function(k){return k.className;
},has:function(g,name){var h=new RegExp(e+name+f);
return h.test(g.className);
},remove:function(i,name){var j=new RegExp(e+name+f);
i.className=i.className.replace(j,a);
return name;
},replace:function(o,p,q){this.remove(o,p);
return this.add(o,q);
},toggle:function(l,name,m){if(m==null){m=!this.has(l,name);
}m?this.add(l,name):this.remove(l,name);
return name;
}}});
})();
(function(){var bw="borderTopWidth",bv="borderLeftWidth",bu="marginTop",bt="marginLeft",bs="scroll",br="qx.client",bq="border-box",bp="borderBottomWidth",bo="borderRightWidth",bn="auto",bL="padding",bK="qx.bom.element.Location",bJ="paddingLeft",bI="static",bH="marginBottom",bG="visible",bF="BODY",bE="paddingBottom",bD="paddingTop",bC="marginRight",bA="position",bB="margin",by="overflow",bz="paddingRight",bx="border";
qx.Class.define(bK,{statics:{__dK:function(G,H){return qx.bom.element.Style.get(G,H,qx.bom.element.Style.COMPUTED_MODE,false);
},__dL:function(ba,bb){return parseInt(qx.bom.element.Style.get(ba,bb,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__dM:function(a){var d=0,top=0;
if(a.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var c=qx.dom.Node.getWindow(a);
d-=qx.bom.Viewport.getScrollLeft(c);
top-=qx.bom.Viewport.getScrollTop(c);
}else{var b=qx.dom.Node.getDocument(a).body;
a=a.parentNode;
while(a&&a!=b){d+=a.scrollLeft;
top+=a.scrollTop;
a=a.parentNode;
}}return {left:d,top:top};
},__dN:qx.core.Variant.select(br,{"mshtml":function(V){var X=qx.dom.Node.getDocument(V);
var W=X.body;
var Y=0;
var top=0;
Y-=W.clientLeft+X.documentElement.clientLeft;
top-=W.clientTop+X.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){Y+=this.__dL(W,bv);
top+=this.__dL(W,bw);
}return {left:Y,top:top};
},"webkit":function(s){var u=qx.dom.Node.getDocument(s);
var t=u.body;
var v=t.offsetLeft;
var top=t.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){v+=this.__dL(t,bv);
top+=this.__dL(t,bw);
}return {left:v,top:top};
},"gecko":function(p){var q=qx.dom.Node.getDocument(p).body;
var r=q.offsetLeft;
var top=q.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){r+=this.__dL(q,bt);
top+=this.__dL(q,bu);
}if(qx.bom.element.BoxSizing.get(q)!==bq){r+=this.__dL(q,bv);
top+=this.__dL(q,bw);
}return {left:r,top:top};
},"default":function(y){var z=qx.dom.Node.getDocument(y).body;
var A=z.offsetLeft;
var top=z.offsetTop;
return {left:A,top:top};
}}),__dO:qx.core.Variant.select(br,{"mshtml|webkit":function(bi){var bk=qx.dom.Node.getDocument(bi);
if(bi.getBoundingClientRect){var bl=bi.getBoundingClientRect();
var bm=bl.left;
var top=bl.top;
}else{var bm=bi.offsetLeft;
var top=bi.offsetTop;
bi=bi.offsetParent;
var bj=bk.body;
while(bi&&bi!=bj){bm+=bi.offsetLeft;
top+=bi.offsetTop;
bm+=this.__dL(bi,bv);
top+=this.__dL(bi,bw);
bi=bi.offsetParent;
}}return {left:bm,top:top};
},"gecko":function(M){if(M.getBoundingClientRect){var P=M.getBoundingClientRect();
var Q=Math.round(P.left);
var top=Math.round(P.top);
}else{var Q=0;
var top=0;
var N=qx.dom.Node.getDocument(M).body;
var O=qx.bom.element.BoxSizing;

if(O.get(M)!==bq){Q-=this.__dL(M,bv);
top-=this.__dL(M,bw);
}
while(M&&M!==N){Q+=M.offsetLeft;
top+=M.offsetTop;
if(O.get(M)!==bq){Q+=this.__dL(M,bv);
top+=this.__dL(M,bw);
}if(M.parentNode&&this.__dK(M.parentNode,by)!=bG){Q+=this.__dL(M.parentNode,bv);
top+=this.__dL(M.parentNode,bw);
}M=M.offsetParent;
}}return {left:Q,top:top};
},"default":function(B){var D=0;
var top=0;
var C=qx.dom.Node.getDocument(B).body;
while(B&&B!==C){D+=B.offsetLeft;
top+=B.offsetTop;
B=B.offsetParent;
}return {left:D,top:top};
}}),get:function(g,h){if(g.tagName==bF){var location=this.__fw(g);
var o=location.left;
var top=location.top;
}else{var i=this.__dN(g);
var n=this.__dO(g);
var scroll=this.__dM(g);
var o=n.left+i.left-scroll.left;
var top=n.top+i.top-scroll.top;
}var j=o+g.offsetWidth;
var k=top+g.offsetHeight;

if(h){if(h==bL||h==bs){var l=qx.bom.element.Overflow.getX(g);

if(l==bs||l==bn){j+=g.scrollWidth-g.offsetWidth+this.__dL(g,bv)+this.__dL(g,bo);
}var m=qx.bom.element.Overflow.getY(g);

if(m==bs||m==bn){k+=g.scrollHeight-g.offsetHeight+this.__dL(g,bw)+this.__dL(g,bp);
}}
switch(h){case bL:o+=this.__dL(g,bJ);
top+=this.__dL(g,bD);
j-=this.__dL(g,bz);
k-=this.__dL(g,bE);
case bs:o-=g.scrollLeft;
top-=g.scrollTop;
j-=g.scrollLeft;
k-=g.scrollTop;
case bx:o+=this.__dL(g,bv);
top+=this.__dL(g,bw);
j-=this.__dL(g,bo);
k-=this.__dL(g,bp);
break;
case bB:o-=this.__dL(g,bt);
top-=this.__dL(g,bu);
j+=this.__dL(g,bC);
k+=this.__dL(g,bH);
break;
}}return {left:o,top:top,right:j,bottom:k};
},__fw:qx.core.Variant.select(br,{"default":function(K){var top=K.offsetTop+this.__dL(K,bu);
var L=K.offsetLeft+this.__dL(K,bt);
return {left:L,top:top};
},"mshtml":function(E){var top=E.offsetTop;
var F=E.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__dL(E,bu);
F+=this.__dL(E,bt);
}return {left:F,top:top};
},"gecko":function(T){var top=T.offsetTop+this.__dL(T,bu)+this.__dL(T,bv);
var U=T.offsetLeft+this.__dL(T,bt)+this.__dL(T,bw);
return {left:U,top:top};
}}),getLeft:function(R,S){return this.get(R,S).left;
},getTop:function(e,f){return this.get(e,f).top;
},getRight:function(w,x){return this.get(w,x).right;
},getBottom:function(I,J){return this.get(I,J).bottom;
},getRelative:function(bc,bd,be,bf){var bh=this.get(bc,be);
var bg=this.get(bd,bf);
return {left:bh.left-bg.left,top:bh.top-bg.top,right:bh.right-bg.right,bottom:bh.bottom-bg.bottom};
},getPosition:function(bP){return this.getRelative(bP,this.getOffsetParent(bP));
},getOffsetParent:function(bM){var bO=bM.offsetParent||document.body;
var bN=qx.bom.element.Style;

while(bO&&(!/^body|html$/i.test(bO.tagName)&&bN.get(bO,bA)===bI)){bO=bO.offsetParent;
}return bO;
}}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
qx.Class.define(f,{statics:{compile:function(v){if(!v){return k;
}var A=v.left;
var top=v.top;
var z=v.width;
var y=v.height;
var w,x;

if(A==null){w=(z==null?n:z+m);
A=n;
}else{w=(z==null?n:A+z+m);
A=A+m;
}
if(top==null){x=(y==null?n:y+m);
top=n;
}else{x=(y==null?n:top+y+m);
top=top+m;
}return d+top+l+w+l+x+l+A+i;
},get:function(B,C){var E=qx.bom.element.Style.get(B,c,C,false);
var J,top,H,G;
var D,F;

if(typeof E===e&&E!==n&&E!==h){E=qx.lang.String.trim(E);
if(/\((.*)\)/.test(E)){var I=RegExp.$1.split(l);
top=qx.lang.String.trim(I[0]);
D=qx.lang.String.trim(I[1]);
F=qx.lang.String.trim(I[2]);
J=qx.lang.String.trim(I[3]);
if(J===n){J=null;
}
if(top===n){top=null;
}
if(D===n){D=null;
}
if(F===n){F=null;
}if(top!=null){top=parseInt(top,10);
}
if(D!=null){D=parseInt(D,10);
}
if(F!=null){F=parseInt(F,10);
}
if(J!=null){J=parseInt(J,10);
}if(D!=null&&J!=null){H=D-J;
}else if(D!=null){H=D;
}
if(F!=null&&top!=null){G=F-top;
}else if(F!=null){G=F;
}}else{throw new Error("Could not parse clip string: "+E);
}}return {left:J||null,top:top||null,width:H||null,height:G||null};
},set:function(o,p){if(!p){o.style.clip=a;
return;
}var u=p.left;
var top=p.top;
var t=p.width;
var s=p.height;
var q,r;

if(u==null){q=(t==null?n:t+m);
u=n;
}else{q=(t==null?n:u+t+m);
u=u+m;
}
if(top==null){r=(s==null?n:s+m);
top=n;
}else{r=(s==null?n:top+s+m);
top=top+m;
}o.style.clip=j+top+l+q+l+r+l+u+g;
},reset:function(K){K.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="",f="cursor:",e="qx.client",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__dF:qx.core.Variant.select(e,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(q){return f+(this.__dF[q]||q)+d;
},get:function(n,o){return qx.bom.element.Style.get(n,b,o,false);
},set:function(l,m){l.style.cursor=this.__dF[m]||m;
},reset:function(p){p.style.cursor=g;
}}});
})();
(function(){var q="",p="qx.client",o=";",n="filter",m="opacity:",l="opacity",k="MozOpacity",j=");",i=")",h="zoom:1;filter:alpha(opacity=",e="qx.bom.element.Opacity",g="alpha(opacity=",f="-moz-opacity:";
qx.Class.define(e,{statics:{compile:qx.core.Variant.select(p,{"mshtml":function(D){if(D>=1){return q;
}
if(D<0.00001){D=0;
}return h+(D*100)+j;
},"gecko":function(w){if(w==1){w=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return f+w+o;
}else{return m+w+o;
}},"default":function(r){if(r==1){return q;
}return m+r+o;
}}),set:qx.core.Variant.select(p,{"mshtml":function(I,J){var K=qx.bom.element.Style.get(I,n,qx.bom.element.Style.COMPUTED_MODE,false);
if(J>=1){I.style.filter=K.replace(/alpha\([^\)]*\)/gi,q);
return;
}
if(J<0.00001){J=0;
}if(!I.currentStyle||!I.currentStyle.hasLayout){I.style.zoom=1;
}I.style.filter=K.replace(/alpha\([^\)]*\)/gi,q)+g+J*100+i;
},"gecko":function(E,F){if(F==1){F=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){E.style.MozOpacity=F;
}else{E.style.opacity=F;
}},"default":function(y,z){if(z==1){z=q;
}y.style.opacity=z;
}}),reset:qx.core.Variant.select(p,{"mshtml":function(G){var H=qx.bom.element.Style.get(G,n,qx.bom.element.Style.COMPUTED_MODE,false);
G.style.filter=H.replace(/alpha\([^\)]*\)/gi,q);
},"gecko":function(v){if(qx.bom.client.Engine.VERSION<1.7){v.style.MozOpacity=q;
}else{v.style.opacity=q;
}},"default":function(x){x.style.opacity=q;
}}),get:qx.core.Variant.select(p,{"mshtml":function(a,b){var c=qx.bom.element.Style.get(a,n,b,false);

if(c){var d=c.match(/alpha\(opacity=(.*)\)/);

if(d&&d[1]){return parseFloat(d[1])/100;
}}return 1.0;
},"gecko":function(A,B){var C=qx.bom.element.Style.get(A,qx.bom.client.Engine.VERSION<1.7?k:l,B,false);

if(C==0.999999){C=1.0;
}
if(C!=null){return parseFloat(C);
}return 1.0;
},"default":function(s,t){var u=qx.bom.element.Style.get(s,l,t,false);

if(u!=null){return parseFloat(u);
}return 1.0;
}})}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__dG:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__dH:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__dI:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dJ:function(w){var x=this.__dI;
return x.tags[w.tagName.toLowerCase()]||x.types[w.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(G){{};
},"default":function(y){var A=this.__dH;
var z=p;

if(A){for(var i=0,l=A.length;i<l;i++){z+=A[i]+m+y+c;
}}return z;
}}),get:qx.core.Variant.select(q,{"mshtml":function(v){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(v))){if(!this.__dJ(v)){return d;
}}return k;
},"default":function(B){var D=this.__dG;
var C;

if(D){for(var i=0,l=D.length;i<l;i++){C=qx.bom.element.Style.get(B,D[i],null,false);

if(C!=null&&C!==p){return C;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(E,F){{};
},"default":function(r,s){var t=this.__dG;

if(t){for(var i=0,l=t.length;i<l;i++){r.style[t[i]]=s;
}}}}),reset:function(u){this.set(u,p);
}}});
})();
(function(){var bB="",bA="qx.client",bz="hidden",by="-moz-scrollbars-none",bx="overflow",bw=";",bv="overflowY",bu=":",bt="overflowX",bs="overflow:",bN="none",bM="scroll",bL="borderLeftStyle",bK="borderRightStyle",bJ="div",bI="borderRightWidth",bH="overflow-y",bG="borderLeftWidth",bF="-moz-scrollbars-vertical",bE="100px",bC="qx.bom.element.Overflow",bD="overflow-x";
qx.Class.define(bC,{statics:{__dC:null,getScrollbarWidth:function(){if(this.__dC!==null){return this.__dC;
}var bV=qx.bom.element.Style;
var bX=function(H,I){return parseInt(bV.get(H,I))||0;
};
var bY=function(bU){return (bV.get(bU,bK)==bN?0:bX(bU,bI));
};
var bW=function(P){return (bV.get(P,bL)==bN?0:bX(P,bG));
};
var cb=qx.core.Variant.select(bA,{"mshtml":function(v){if(bV.get(v,bv)==bz||v.clientWidth==0){return bY(v);
}return Math.max(0,v.offsetWidth-v.clientLeft-v.clientWidth);
},"default":function(E){if(E.clientWidth==0){var F=bV.get(E,bx);
var G=(F==bM||F==bF?16:0);
return Math.max(0,bY(E)+G);
}return Math.max(0,(E.offsetWidth-E.clientWidth-bW(E)));
}});
var ca=function(w){return cb(w)-bY(w);
};
var t=document.createElement(bJ);
var s=t.style;
s.height=s.width=bE;
s.overflow=bM;
document.body.appendChild(t);
var c=ca(t);
this.__dC=c?c:16;
document.body.removeChild(t);
return this.__dC;
},_compile:qx.core.Variant.select(bA,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bf,bg){if(bg==bz){bg=by;
}return bs+bg+bw;
}:
function(l,m){return l+bu+m+bw;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(X,Y){return bs+Y+bw;
}:
function(f,g){return f+bu+g+bw;
},"default":function(V,W){return V+bu+W+bw;
}}),compileX:function(a){return this._compile(bD,a);
},compileY:function(be){return this._compile(bH,be);
},getX:qx.core.Variant.select(bA,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(x,y){var z=qx.bom.element.Style.get(x,bx,y,false);

if(z===by){z=bz;
}return z;
}:
function(j,k){return qx.bom.element.Style.get(j,bt,k,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bQ,bR){return qx.bom.element.Style.get(bQ,bx,bR,false);
}:
function(r,u){return qx.bom.element.Style.get(r,bt,u,false);
},"default":function(R,S){return qx.bom.element.Style.get(R,bt,S,false);
}}),setX:qx.core.Variant.select(bA,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(ba,bb){if(bb==bz){bb=by;
}ba.style.overflow=bb;
}:
function(bh,bi){bh.style.overflowX=bi;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(N,O){N.style.overflow=O;
}:
function(cc,cd){cc.style.overflowX=cd;
},"default":function(L,M){L.style.overflowX=M;
}}),resetX:qx.core.Variant.select(bA,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(br){br.style.overflow=bB;
}:
function(Q){Q.style.overflowX=bB;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bk,bl){bk.style.overflow=bB;
}:
function(d,e){d.style.overflowX=bB;
},"default":function(bo){bo.style.overflowX=bB;
}}),getY:qx.core.Variant.select(bA,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(n,o){var p=qx.bom.element.Style.get(n,bx,o,false);

if(p===by){p=bz;
}return p;
}:
function(J,K){return qx.bom.element.Style.get(J,bv,K,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(C,D){return qx.bom.element.Style.get(C,bx,D,false);
}:
function(ce,cf){return qx.bom.element.Style.get(ce,bv,cf,false);
},"default":function(bm,bn){return qx.bom.element.Style.get(bm,bv,bn,false);
}}),setY:qx.core.Variant.select(bA,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bS,bT){if(bT===bz){bT=by;
}bS.style.overflow=bT;
}:
function(T,U){T.style.overflowY=U;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bO,bP){bO.style.overflow=bP;
}:
function(h,i){h.style.overflowY=i;
},"default":function(A,B){A.style.overflowY=B;
}}),resetY:qx.core.Variant.select(bA,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(b){b.style.overflow=bB;
}:
function(q){q.style.overflowY=bB;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bc,bd){bc.style.overflow=bB;
}:
function(bp,bq){bp.style.overflowY=bB;
},"default":function(bj){bj.style.overflowY=bB;
}})}});
})();
(function(){var s="",r="qx.client",q="user-select",p="userSelect",o="appearance",n="style",m="MozUserModify",l="px",k="-webkit-appearance",j="styleFloat",O="-webkit-user-select",N="-moz-appearance",M="pixelHeight",L="MozAppearance",K=":",J="pixelTop",I="pixelLeft",H="text-overflow",G="-moz-user-select",F="MozUserSelect",z="qx.bom.element.Style",A="-moz-user-modify",x="-webkit-user-modify",y="WebkitUserSelect",v="-o-text-overflow",w="pixelRight",t="cssFloat",u="pixelWidth",B="pixelBottom",C=";",E="WebkitUserModify",D="WebkitAppearance";
qx.Class.define(z,{statics:{__dD:{styleNames:{"float":qx.core.Variant.select(r,{"mshtml":j,"default":t}),"appearance":qx.core.Variant.select(r,{"gecko":L,"webkit":D,"default":o}),"userSelect":qx.core.Variant.select(r,{"gecko":F,"webkit":y,"default":p}),"userModify":qx.core.Variant.select(r,{"gecko":m,"webkit":E,"default":p})},cssNames:{"appearance":qx.core.Variant.select(r,{"gecko":N,"webkit":k,"default":o}),"userSelect":qx.core.Variant.select(r,{"gecko":G,"webkit":O,"default":q}),"userModify":qx.core.Variant.select(r,{"gecko":A,"webkit":x,"default":q}),"textOverflow":qx.core.Variant.select(r,{"opera":v,"default":H})},mshtmlPixel:{width:u,height:M,left:I,right:w,top:J,bottom:B},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__dE:{},compile:function(a){var e=[];
var i=this.__dD;
var h=i.special;
var f=i.cssNames;
var d=this.__dE;
var g=qx.lang.String;
var name,c,b;

for(name in a){b=a[name];

if(b==null){continue;
}name=f[name]||name;
if(h[name]){e.push(h[name].compile(b));
}else{c=d[name];

if(!c){c=d[name]=g.hyphenate(name);
}e.push(c,K,b,C);
}}return e.join(s);
},setCss:qx.core.Variant.select(r,{"mshtml":function(P,Q){P.style.cssText=Q;
},"default":function(by,bz){by.setAttribute(n,bz);
}}),getCss:qx.core.Variant.select(r,{"mshtml":function(bu){return bu.style.cssText.toLowerCase();
},"default":function(R){return R.getAttribute(n);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(S,name,T,U){{};
var V=this.__dD;
name=V.styleNames[name]||name;
if(U!==false&&V.special[name]){return V.special[name].set(S,T);
}else{S.style[name]=T!==null?T:s;
}},setStyles:function(W,X,Y){{};
var bf=this.__dD;
var bc=bf.styleNames;
var be=bf.special;
var ba=W.style;

for(var bd in X){var bb=X[bd];
var name=bc[bd]||bd;

if(bb===undefined){if(Y!==false&&be[name]){be[name].reset(W);
}else{ba[name]=s;
}}else{if(Y!==false&&be[name]){be[name].set(W,bb);
}else{ba[name]=bb!==null?bb:s;
}}}},reset:function(bv,name,bw){var bx=this.__dD;
name=bx.styleNames[name]||name;
if(bw!==false&&bx.special[name]){return bx.special[name].reset(bv);
}else{bv.style[name]=s;
}},get:qx.core.Variant.select(r,{"mshtml":function(bg,name,bh,bi){var bn=this.__dD;
name=bn.styleNames[name]||name;
if(bi!==false&&bn.special[name]){return bn.special[name].get(bg,bh);
}if(!bg.currentStyle){return bg.style[name]||s;
}switch(bh){case this.LOCAL_MODE:return bg.style[name]||s;
case this.CASCADED_MODE:return bg.currentStyle[name]||s;
default:var bm=bg.currentStyle[name]||s;
if(/^-?[\.\d]+(px)?$/i.test(bm)){return bm;
}var bl=bn.mshtmlPixel[name];

if(bl){var bj=bg.style[name];
bg.style[name]=bm||0;
var bk=bg.style[bl]+l;
bg.style[name]=bj;
return bk;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bm)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bm;
}},"default":function(bo,name,bp,bq){var bt=this.__dD;
name=bt.styleNames[name]||name;
if(bq!==false&&bt.special[name]){return bt.special[name].get(bo,bp);
}switch(bp){case this.LOCAL_MODE:return bo.style[name]||s;
case this.CASCADED_MODE:if(bo.currentStyle){return bo.currentStyle[name]||s;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var br=qx.dom.Node.getDocument(bo);
var bs=br.defaultView.getComputedStyle(bo,null);
return bs?bs[name]:s;
}}})}});
})();
(function(){var K="get",J="set",I="reset",H=":not(",G="getValue",F="append",E=")",D="getPreviousSiblings",C="#",B="qx.bom.Collection",bj="setValue",bi="prepend",bh="string",bg="getAncestors",bf="getOffsetParent",be="remove",bd=">*",bc="add",bb="*",ba="",R="addListener",S="has",P="toggle",Q="getSiblings",N="replace",O="after",L="replaceWith",M="setCss",T="setStyles",U="before",W="getNextSiblings",V="getPosition",Y="getCss",X="removeListener";
(function(){var dy=function(cE,cF){return function(ce,cf,cg,ch,ci,cj){var length=this.length;

if(length>0){var ck=cE[cF];

for(var i=0;i<length;i++){if(this[i].nodeType===1){ck.call(cE,this[i],ce,cf,cg,ch,ci,cj);
}}}return this;
};
};
var dx=function(bV,bW){return function(cs,ct,cu,cv,cw,cx){if(this.length>0){var cy=this[0].nodeType===1?bV[bW](this[0],cs,ct,cu,cv,cw,cx):null;

if(cy&&cy.nodeType){return this.__en([cy]);
}else{return cy;
}}return null;
};
};
qx.Class.define(B,{extend:qx.type.BaseArray,statics:{query:function(cB,cC){var cD=qx.bom.Selector.query(cB,cC);
return qx.lang.Array.cast(cD,qx.bom.Collection);
},id:function(bk){var bl=document.getElementById(bk);
if(bl&&bl.id!=bk){return qx.bom.Collection.query(C+bk);
}return new qx.bom.Collection(bl);
},html:function(dm,dn){var dp=qx.bom.Html.clean([dm],dn);
return qx.lang.Array.cast(dp,qx.bom.Collection);
},__ek:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(cm,cn){var cp=qx.bom.Collection;
if(cm.nodeType){return new cp(cm);
}else if(typeof cm===bh){var co=cp.__ek.exec(cm);

if(co){return co[1]?cp.html(co[1],cn):cp.id(co[3].substring(1));
}else{return cp.query(cm,cn);
}}else{return qx.lang.Array.cast(cm,qx.bom.Collection);
}}},members:{__eo:null,setAttribute:dy(qx.bom.element.Attribute,J),resetAttribute:dy(qx.bom.element.Attribute,I),getAttribute:dx(qx.bom.element.Attribute,K),addClass:dy(qx.bom.element.Class,bc),getClass:dx(qx.bom.element.Class,K),hasClass:dx(qx.bom.element.Class,S),removeClass:dy(qx.bom.element.Class,be),replaceClass:dy(qx.bom.element.Class,N),toggleClass:dy(qx.bom.element.Class,P),setValue:dy(qx.bom.Input,bj),getValue:dx(qx.bom.Input,G),setStyle:dy(qx.bom.element.Style,J),setStyles:dy(qx.bom.element.Style,T),resetStyle:dy(qx.bom.element.Style,I),getStyle:dx(qx.bom.element.Style,K),setCss:dy(qx.bom.element.Style,M),getCss:dy(qx.bom.element.Style,Y),getOffset:dx(qx.bom.element.Location,K),getPosition:dx(qx.bom.element.Location,V),getOffsetParent:dx(qx.bom.element.Location,bf),setScrollLeft:function(cz){var Node=qx.dom.Node;

for(var i=0,l=this.length,cA;i<l;i++){cA=this[i];

if(Node.isElement(cA)){cA.scrollLeft=cz;
}else if(Node.isWindow(cA)){cA.scrollTo(cz,this.getScrollTop(cA));
}else if(Node.isDocument(cA)){Node.getWindow(cA).scrollTo(cz,this.getScrollTop(cA));
}}return this;
},setScrollTop:function(p){var Node=qx.dom.Node;

for(var i=0,l=this.length,q;i<l;i++){q=this[i];

if(Node.isElement(q)){q.scrollTop=p;
}else if(Node.isWindow(q)){q.scrollTo(this.getScrollLeft(q),p);
}else if(Node.isDocument(q)){Node.getWindow(q).scrollTo(this.getScrollLeft(q),p);
}}return this;
},getScrollLeft:function(){var bG=this[0];

if(!bG){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(bG)||Node.isDocument(bG)){return qx.bom.Viewport.getScrollLeft();
}return bG.scrollLeft;
},getScrollTop:function(){var bq=this[0];

if(!bq){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(bq)||Node.isDocument(bq)){return qx.bom.Viewport.getScrollTop();
}return bq.scrollTop;
},getWidth:function(){var bD=this[0];
var Node=qx.dom.Node;

if(bD){if(Node.isElement(bD)){return qx.bom.element.Dimension.getWidth(bD);
}else if(Node.isDocument(bD)){return qx.bom.Document.getWidth(Node.getWindow(bD));
}else if(Node.isWindow(bD)){return qx.bom.Viewport.getWidth(bD);
}}return null;
},getContentWidth:function(){var cG=this[0];

if(qx.dom.Node.isElement(cG)){return qx.bom.element.Dimension.getContentWidth(cG);
}return null;
},getHeight:function(){var du=this[0];
var Node=qx.dom.Node;

if(du){if(Node.isElement(du)){return qx.bom.element.Dimension.getHeight(du);
}else if(Node.isDocument(du)){return qx.bom.Document.getHeight(Node.getWindow(du));
}else if(Node.isWindow(du)){return qx.bom.Viewport.getHeight(du);
}}return null;
},getContentHeight:function(){var bv=this[0];

if(qx.dom.Node.isElement(bv)){return qx.bom.element.Dimension.getContentHeight(bv);
}return null;
},addListener:dy(qx.bom.Element,R),removeListener:dy(qx.bom.Element,X),eq:function(bH){return this.slice(bH,+bH+1);
},filter:function(cK,cL){var cM;

if(qx.lang.Type.isFunction(cK)){cM=qx.type.BaseArray.prototype.filter.call(this,cK,cL);
}else{cM=qx.bom.Selector.matches(cK,this);
}return this.__en(cM);
},is:function(bS){return !!bS&&qx.bom.Selector.matches(bS,this).length>0;
},__el:/^.[^:#\[\.,]*$/,not:function(cO){if(this.__el.test(cO)){var cP=qx.bom.Selector.matches(H+cO+E,this);
return this.__en(cP);
}var cP=qx.bom.Selector.matches(cO,this);
return this.filter(function(bm){return cP.indexOf(bm)===-1;
});
},add:function(bO,bP){var bQ=qx.bom.Selector.query(bO,bP);
var bR=qx.lang.Array.unique(this.concat(bQ));
return this.__en(bR);
},children:function(v){var w=[];

for(var i=0,l=this.length;i<l;i++){w.push.apply(w,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(v){w=qx.bom.Selector.matches(v,w);
}return this.__en(w);
},closest:function(di){var dj=new qx.bom.Collection(1);
var dl=qx.bom.Selector;
var dk=this.map(function(A){while(A&&A.ownerDocument){dj[0]=A;

if(dl.matches(di,dj).length>0){return A;
}A=A.parentNode;
}});
return this.__en(qx.lang.Array.unique(dk));
},contents:function(){var bL=[];
var bK=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){bL.push.apply(bL,bK.fromCollection(this[i].childNodes));
}return this.__en(bL);
},find:function(bn){var bp=qx.bom.Selector;
if(this.length===1){return this.__en(bp.query(bn,this[0]));
}else{var bo=[];

for(var i=0,l=this.length;i<l;i++){bo.push.apply(bo,bp.query(bn,this[i]));
}return this.__en(qx.lang.Array.unique(bo));
}},next:function(x){var y=qx.dom.Hierarchy;
var z=this.map(y.getNextElementSibling,y);
if(x){z=qx.bom.Selector.matches(x,z);
}return this.__en(z);
},nextAll:function(br){return this.__em(W,br);
},prev:function(ca){var cb=qx.dom.Hierarchy;
var cc=this.map(cb.getPreviousElementSibling,cb);
if(ca){cc=qx.bom.Selector.matches(ca,cc);
}return this.__en(cc);
},prevAll:function(c){return this.__em(D,c);
},parent:function(bt){var Element=qx.dom.Element;
var bu=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(bt){bu=qx.bom.Selector.matches(bt,bu);
}return this.__en(bu);
},parents:function(cr){return this.__em(bg,cr);
},siblings:function(d){return this.__em(Q,d);
},__em:function(cR,cS){var cU=[];
var cT=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){cU.push.apply(cU,cT[cR](this[i]));
}var cV=qx.lang.Array.unique(cU);
if(cS){cV=qx.bom.Selector.matches(cS,cV);
}return this.__en(cV);
},__en:function(bM){var bN=new qx.bom.Collection;
bN.__eo=this;
bM=Array.prototype.slice.call(bM,0);
bN.push.apply(bN,bM);
return bN;
},andSelf:function(){return this.add(this.__eo);
},end:function(){return this.__eo||new qx.bom.Collection();
},__ep:function(cW,cX){var dd=this[0];
var dc=dd.ownerDocument||dd;
var db=dc.createDocumentFragment();
var df=qx.bom.Html.clean(cW,dc,db);
var dh=db.firstChild;
if(dh){var cY=this.length-1;

for(var i=0,l=cY;i<l;i++){cX.call(this,this[i],db.cloneNode(true));
}cX.call(this,this[cY],db);
}if(df){var da;
var dg=qx.io.ScriptLoader;
var de=qx.lang.Function;

for(var i=0,l=df.length;i<l;i++){da=df[i];
if(da.src){dg.get().load(da.src);
}else{de.globalEval(da.text||da.textContent||da.innerHTML||ba);
}if(da.parentNode){da.parentNode.removeChild(da);
}}}return this;
},__eq:function(e,f){var h=qx.bom.Selector;
var g=qx.lang.Array;
var m=[];

for(var i=0,l=e.length;i<l;i++){{};
m.push.apply(m,h.query(e[i]));
}m=g.cast(g.unique(m),qx.bom.Collection);
for(var i=0,k=this.length;i<k;i++){m[f](this[i]);
}return this;
},append:function(n){return this.__ep(arguments,this.__er);
},prepend:function(bE){return this.__ep(arguments,this.__es);
},__er:function(r,s){r.appendChild(s);
},__es:function(bT,bU){bT.insertBefore(bU,bT.firstChild);
},appendTo:function(bJ){return this.__eq(arguments,F);
},prependTo:function(o){return this.__eq(arguments,bi);
},before:function(cH){return this.__ep(arguments,this.__et);
},after:function(cq){return this.__ep(arguments,this.__eu);
},__et:function(a,b){a.parentNode.insertBefore(b,a);
},__eu:function(bX,bY){bX.parentNode.insertBefore(bY,bX.nextSibling);
},insertBefore:function(cl){return this.__eq(arguments,U);
},insertAfter:function(cN){return this.__eq(arguments,O);
},wrapAll:function(content){var u=this[0];

if(u){var t=qx.bom.Collection.create(content,u.ownerDocument).clone();
if(u.parentNode){u.parentNode.insertBefore(t[0],u);
}t.map(this.__ev).append(this);
}return this;
},__ev:function(cd){while(cd.firstChild){cd=cd.firstChild;
}return cd;
},wrapInner:function(content){var bI=new qx.bom.Collection(1);

for(var i=0,l=this.length;i<l;i++){bI[0]=this[i];
bI.contents().wrapAll(content);
}return this;
},wrap:function(content){var bs=new qx.bom.Collection(1);
for(var i=0,l=this.length;i<l;i++){bs[0]=this[i];
bs.wrapAll(content);
}return this;
},replaceWith:function(content){return this.after(content).remove();
},replaceAll:function(dw){return this.__eq(arguments,L);
},remove:function(dq){var ds=this;

if(dq){ds=this.filter(dq);

if(ds.length==0){return this;
}}for(var i=0,dt=ds.length,dr;i<dt;i++){dr=ds[i];

if(dr.parentNode){dr.parentNode.removeChild(dr);
}}return ds;
},destroy:function(bw){if(this.length==0){return this;
}var by=qx.bom.Selector;
var bB=this;

if(bw){bB=this.filter(bw);

if(bB.length==0){return this;
}}var bA=qx.event.Registration.getManager(this[0]);

for(var i=0,l=bB.length,bz,bC;i<l;i++){bz=bB[i];
bA.removeAllListeners(bz);
bC=by.query(bb,bz);

for(var j=0,bx=bC.length;j<bx;j++){bA.removeAllListeners(bC[j]);
}if(bz.parentNode){bz.parentNode.removeChild(bz);
}}if(bw){bB.end();
qx.lang.Array.exclude(this,bB);
}else{this.length=0;
}return this;
},empty:function(){var dv=qx.bom.Collection;

for(var i=0,l=this.length;i<l;i++){dv.query(bd,this[i]).destroy();
while(this.firstChild){this.removeChild(this.firstChild);
}}return this;
},clone:function(cQ){var Element=qx.bom.Element;
return cQ?
this.map(function(bF){return Element.clone(bF,true);
}):this.map(Element.clone,Element);
}},defer:function(cI,cJ){if(window.$==null){window.$=cI.create;
}}});
})();
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(c,d,e,f,g){arguments.callee.base.call(this,f,g);
this._target=d||qx.bom.Event.getTarget(c);
this._relatedTarget=e||qx.bom.Event.getRelatedTarget(c);

if(c.timeStamp){this._timeStamp=c.timeStamp;
}this._native=c;
this._returnValue=null;
return this;
},clone:function(h){var i=arguments.callee.base.call(this,h);
var j={};
i._native=this._cloneNativeEvent(this._native,j);
i._returnValue=this._returnValue;
return i;
},_cloneNativeEvent:function(k,l){l.preventDefault=qx.lang.Function.empty;
return l;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(b){this._returnValue=b;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var c="qx.event.type.Dom";
qx.Class.define(c,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(a,b){var b=arguments.callee.base.call(this,a,b);
b.shiftKey=a.shiftKey;
b.ctrlKey=a.ctrlKey;
b.altKey=a.altKey;
b.metaKey=a.metaKey;
return b;
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
(function(){var d="qx.event.type.KeyInput";
qx.Class.define(d,{extend:qx.event.type.Dom,members:{init:function(a,b,c){arguments.callee.base.call(this,a,b,null,true,true);
this._charCode=c;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){arguments.callee.base.call(this,b,c,null,true,true);
this._identifier=d;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var ba="qx.client",Y="blur",X="focus",W="mousedown",V="on",U="mouseup",T="DOMFocusOut",S="DOMFocusIn",R="selectstart",Q="onmousedown",bt="onfocusout",bs="onfocusin",br="onmouseup",bq="onselectstart",bp="draggesture",bo="qx.event.handler.Focus",bn="_applyFocus",bm="deactivate",bl="textarea",bk="_applyActive",bh="input",bi="focusin",bf="qxSelectable",bg="tabIndex",bd="off",be="activate",bb="focusout",bc="qxKeepFocus",bj="qxKeepActive";
qx.Class.define(bo,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(G){arguments.callee.base.call(this);
this._manager=G;
this._window=G.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bk,nullable:true},focus:{apply:bn,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__cW:null,__cX:null,__cY:null,__da:null,__db:null,__de:null,__dc:null,__dd:null,__di:null,__dj:null,canHandleEvent:function(bx,by){},registerEvent:function(o,p,q){},unregisterEvent:function(bF,bG,bH){},focus:function(F){try{F.focus();
}catch(f){}this.setFocus(F);
this.setActive(F);
},activate:function(D){this.setActive(D);
},blur:function(bB){try{bB.blur();
}catch(bL){}
if(this.getActive()===bB){this.resetActive();
}
if(this.getFocus()===bB){this.resetFocus();
}},deactivate:function(i){if(this.getActive()===i){this.resetActive();
}},tryActivate:function(c){var d=this.__dr(c);

if(d){this.setActive(d);
}},__cT:function(K,L,M,N){var P=qx.event.Registration;
var O=P.createEvent(M,qx.event.type.Focus,[K,L,N]);
P.dispatchEvent(K,O);
},_windowFocused:true,__cU:function(){if(this._windowFocused){this._windowFocused=false;
this.__cT(this._window,null,Y,false);
}},__cV:function(){if(!this._windowFocused){this._windowFocused=true;
this.__cT(this._window,null,X,false);
}},_initObserver:qx.core.Variant.select(ba,{"gecko":function(){this.__cW=qx.lang.Function.listener(this.__dm,this);
this.__cX=qx.lang.Function.listener(this.__dn,this);
this.__cY=qx.lang.Function.listener(this.__dl,this);
this.__da=qx.lang.Function.listener(this.__dk,this);
this.__db=qx.lang.Function.listener(this.__df,this);
this._document.addEventListener(W,this.__cW,true);
this._document.addEventListener(U,this.__cX,true);
this._window.addEventListener(X,this.__cY,true);
this._window.addEventListener(Y,this.__da,true);
this._window.addEventListener(bp,this.__db,true);
},"mshtml":function(){this.__cW=qx.lang.Function.listener(this.__dm,this);
this.__cX=qx.lang.Function.listener(this.__dn,this);
this.__dc=qx.lang.Function.listener(this.__dg,this);
this.__dd=qx.lang.Function.listener(this.__dh,this);
this.__de=qx.lang.Function.listener(this.__do,this);
this._document.attachEvent(Q,this.__cW);
this._document.attachEvent(br,this.__cX);
this._document.attachEvent(bs,this.__dc);
this._document.attachEvent(bt,this.__dd);
this._document.attachEvent(bq,this.__de);
},"webkit":function(){this.__cW=qx.lang.Function.listener(this.__dm,this);
this.__cX=qx.lang.Function.listener(this.__dn,this);
this.__dd=qx.lang.Function.listener(this.__dh,this);
this.__cY=qx.lang.Function.listener(this.__dl,this);
this.__da=qx.lang.Function.listener(this.__dk,this);
this.__de=qx.lang.Function.listener(this.__do,this);
this._document.addEventListener(W,this.__cW,true);
this._document.addEventListener(U,this.__cX,true);
this._document.addEventListener(R,this.__de,false);
this._window.addEventListener(T,this.__dd,true);
this._window.addEventListener(X,this.__cY,true);
this._window.addEventListener(Y,this.__da,true);
},"opera":function(){this.__cW=qx.lang.Function.listener(this.__dm,this);
this.__cX=qx.lang.Function.listener(this.__dn,this);
this.__dc=qx.lang.Function.listener(this.__dg,this);
this.__dd=qx.lang.Function.listener(this.__dh,this);
this._document.addEventListener(W,this.__cW,true);
this._document.addEventListener(U,this.__cX,true);
this._window.addEventListener(S,this.__dc,true);
this._window.addEventListener(T,this.__dd,true);
}}),_stopObserver:qx.core.Variant.select(ba,{"gecko":function(){this._document.removeEventListener(W,this.__cW,true);
this._document.removeEventListener(U,this.__cX,true);
this._window.removeEventListener(X,this.__cY,true);
this._window.removeEventListener(Y,this.__da,true);
this._window.removeEventListener(bp,this.__db,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,Q,this.__cW);
qx.bom.Event.removeNativeListener(this._document,br,this.__cX);
qx.bom.Event.removeNativeListener(this._document,bs,this.__dc);
qx.bom.Event.removeNativeListener(this._document,bt,this.__dd);
qx.bom.Event.removeNativeListener(this._document,bq,this.__de);
},"webkit":function(){this._document.removeEventListener(W,this.__cW,true);
this._document.removeEventListener(R,this.__de,false);
this._window.removeEventListener(S,this.__dc,true);
this._window.removeEventListener(T,this.__dd,true);
this._window.removeEventListener(X,this.__cY,true);
this._window.removeEventListener(Y,this.__da,true);
},"opera":function(){this._document.removeEventListener(W,this.__cW,true);
this._window.removeEventListener(S,this.__dc,true);
this._window.removeEventListener(T,this.__dd,true);
this._window.removeEventListener(X,this.__cY,true);
this._window.removeEventListener(Y,this.__da,true);
}}),__df:qx.event.GlobalError.observeMethod(qx.core.Variant.select(ba,{"gecko":function(e){if(!this.__ds(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__dg:qx.event.GlobalError.observeMethod(qx.core.Variant.select(ba,{"mshtml":function(e){this.__cV();
var s=e.srcElement;
var r=this.__dq(s);

if(r){this.setFocus(r);
}this.tryActivate(s);
},"opera":function(e){var E=e.target;

if(E==this._document||E==this._window){this.__cV();

if(this.__di){this.setFocus(this.__di);
delete this.__di;
}
if(this.__dj){this.setActive(this.__dj);
delete this.__dj;
}}else{this.setFocus(E);
this.tryActivate(E);
if(!this.__ds(E)){E.selectionStart=0;
E.selectionEnd=0;
}}},"default":null})),__dh:qx.event.GlobalError.observeMethod(qx.core.Variant.select(ba,{"mshtml":function(e){if(!e.toElement){this.__cU();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var a=e.target;

if(a===this.getFocus()){this.resetFocus();
}
if(a===this.getActive()){this.resetActive();
}},"opera":function(e){var H=e.target;

if(H==this._document){this.__cU();
this.__di=this.getFocus();
this.__dj=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(H===this.getFocus()){this.resetFocus();
}
if(H===this.getActive()){this.resetActive();
}}},"default":null})),__dk:qx.event.GlobalError.observeMethod(qx.core.Variant.select(ba,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__cU();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__cU();
this.__di=this.getFocus();
this.__dj=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__dl:qx.event.GlobalError.observeMethod(qx.core.Variant.select(ba,{"gecko":function(e){var y=e.target;

if(y===this._window||y===this._document){this.__cV();
y=this._body;
}this.setFocus(y);
this.tryActivate(y);
},"webkit":function(e){var bw=e.target;

if(bw===this._window||bw===this._document){this.__cV();

if(this.__di){this.setFocus(this.__di);
delete this.__di;
}
if(this.__dj){this.setActive(this.__dj);
delete this.__dj;
}}else{this.setFocus(bw);
this.tryActivate(bw);
}},"default":null})),__dm:qx.event.GlobalError.observeMethod(qx.core.Variant.select(ba,{"gecko":function(e){var t=this.__dq(e.target);

if(!t){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var k=e.srcElement;
var j=this.__dq(k);

if(j){if(!this.__ds(k)){k.unselectable=V;
try{document.selection.empty();
}catch(e){}try{j.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__ds(k)){k.unselectable=V;
}}},"webkit":function(e){var bv=e.target;
var bu=this.__dq(bv);

if(bu){this.setFocus(bu);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bE=e.target;
var bC=this.__dq(bE);

if(!this.__ds(bE)){qx.bom.Event.preventDefault(e);
if(bC){var bD=this.getFocus();

if(bD&&bD.selectionEnd){bD.selectionStart=0;
bD.selectionEnd=0;
bD.blur();
}if(bC){this.setFocus(bC);
}}}else if(bC){this.setFocus(bC);
}},"default":null})),__dn:qx.event.GlobalError.observeMethod(qx.core.Variant.select(ba,{"mshtml":function(e){var x=e.srcElement;

if(x.unselectable){x.unselectable=bd;
}this.tryActivate(this.__fo(x));
},"gecko":function(e){var I=e.target;

while(I&&I.offsetWidth===undefined){I=I.parentNode;
}
if(I){this.tryActivate(I);
}},"webkit|opera":function(e){this.tryActivate(this.__fo(e.target));
},"default":null})),__fo:qx.event.GlobalError.observeMethod(qx.core.Variant.select(ba,{"mshtml|webkit":function(z){var A=this.getFocus();

if(A&&z!=A&&(A.nodeName.toLowerCase()===bh||A.nodeName.toLowerCase()===bl)){z=A;
}return z;
},"default":function(bI){return bI;
}})),__do:qx.event.GlobalError.observeMethod(qx.core.Variant.select(ba,{"mshtml|webkit":function(e){var b=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__ds(b)){qx.bom.Event.preventDefault(e);
}},"default":null})),__dp:function(u){var v=qx.bom.element.Attribute.get(u,bg);

if(v>=1){return true;
}var w=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(v>=0&&w[u.tagName]){return true;
}return false;
},__dq:function(J){while(J&&J.nodeType===1){if(J.getAttribute(bc)==V){return null;
}
if(this.__dp(J)){return J;
}J=J.parentNode;
}return this._body;
},__dr:function(bz){var bA=bz;

while(bz&&bz.nodeType===1){if(bz.getAttribute(bj)==V){return null;
}bz=bz.parentNode;
}return bA;
},__ds:function(B){while(B&&B.nodeType===1){var C=B.getAttribute(bf);

if(C!=null){return C===V;
}B=B.parentNode;
}return true;
},_applyActive:function(bJ,bK){if(bK){this.__cT(bK,bJ,bm,true);
}
if(bJ){this.__cT(bJ,bK,be,true);
}},_applyFocus:function(g,h){if(h){this.__cT(h,g,bb,true);
}
if(g){this.__cT(g,h,bi,true);
}if(h){this.__cT(h,g,Y,false);
}
if(g){this.__cT(g,h,X,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fp=null;
},defer:function(l){qx.event.Registration.addHandler(l);
var m=l.FOCUSABLE_ELEMENTS;

for(var n in m){m[n.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var i="left",h="right",g="middle",f="qx.client",e="dblclick",d="click",c="none",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(k,l,m,n,o){arguments.callee.base.call(this,k,l,m,n,o);

if(!m){this._relatedTarget=qx.bom.Event.getRelatedTarget(k);
}return this;
},_cloneNativeEvent:function(q,r){var r=arguments.callee.base.call(this,q,r);
r.button=q.button;
r.clientX=q.clientX;
r.clientY=q.clientY;
r.pageX=q.pageX;
r.pageY=q.pageY;
r.screenX=q.screenX;
r.screenY=q.screenY;
r.wheelDelta=q.wheelDelta;
r.detail=q.detail;
r.srcElement=q.srcElement;
return r;
},__dx:qx.core.Variant.select(f,{"mshtml":{1:i,2:h,4:g},"default":{0:i,2:h,1:g}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case d:case e:return i;
case b:return h;
default:return this.__dx[this._native.button]||c;
}},isLeftPressed:function(){return this.getButton()===i;
},isMiddlePressed:function(){return this.getButton()===g;
},isRightPressed:function(){return this.getButton()===h;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){var p=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(p);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(f,{"mshtml":function(){var j=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(j);
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
(function(){var j="qx.client",i="ie",h="msie",g="android",f="operamini",e="mobile chrome",d=")(/| )([0-9]+\.[0-9])",c="iemobile",b="opera mobi",a="Mobile Safari",x="operamobile",w="mobile safari",v="IEMobile|Maxthon|MSIE",u="qx.bom.client.Browser",t="opera mini",s="(",r="opera",q="mshtml",p="Opera Mini|Opera Mobi|Opera",o="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",m="webkit",n="5.0",k="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",l="Mobile/";
qx.Bootstrap.define(u,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__fq:function(C){var D=navigator.userAgent;
var F=new RegExp(s+C+d);
var G=D.match(F);

if(!G){return;
}var name=G[1].toLowerCase();
var E=G[3];
if(D.match(/Version(\/| )([0-9]+\.[0-9])/)){E=RegExp.$2;
}
if(qx.core.Variant.isSet(j,m)){if(name===g){name=e;
}else if(D.indexOf(a)!==-1||D.indexOf(l)!==-1){name=w;
}}else if(qx.core.Variant.isSet(j,q)){if(name===h){name=i;
if(qx.bom.client.System.WINCE&&name===i){name=c;
E=n;
}}}else if(qx.core.Variant.isSet(j,r)){if(name===b){name=x;
}else if(name===t){name=f;
}}this.NAME=name;
this.FULLVERSION=E;
this.VERSION=parseFloat(E,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(j,{"webkit":function(z){z.__fq(o);
},"gecko":function(y){y.__fq(k);
},"mshtml":function(A){A.__fq(v);
},"opera":function(B){B.__fq(p);
}})});
})();
(function(){var H="qx.client",G="qx.dom.Hierarchy",F="previousSibling",E="*",D="nextSibling",C="parentNode";
qx.Class.define(G,{statics:{getNodeIndex:function(w){var x=0;

while(w&&(w=w.previousSibling)){x++;
}return x;
},getElementIndex:function(b){var c=0;
var d=qx.dom.Node.ELEMENT;

while(b&&(b=b.previousSibling)){if(b.nodeType==d){c++;
}}return c;
},getNextElementSibling:function(O){while(O&&(O=O.nextSibling)&&!qx.dom.Node.isElement(O)){continue;
}return O||null;
},getPreviousElementSibling:function(m){while(m&&(m=m.previousSibling)&&!qx.dom.Node.isElement(m)){continue;
}return m||null;
},contains:qx.core.Variant.select(H,{"webkit|mshtml|opera":function(r,s){if(qx.dom.Node.isDocument(r)){var t=qx.dom.Node.getDocument(s);
return r&&t==r;
}else if(qx.dom.Node.isDocument(s)){return false;
}else{return r.contains(s);
}},"gecko":function(U,V){return !!(U.compareDocumentPosition(V)&16);
},"default":function(o,p){while(p){if(o==p){return true;
}p=p.parentNode;
}return false;
}}),isRendered:function(k){if(!k.offsetParent){return false;
}var l=k.ownerDocument||k.document;
if(l.body.contains){return l.body.contains(k);
}if(l.compareDocumentPosition){return !!(l.compareDocumentPosition(k)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(e,f){return this.contains(f,e);
},getCommonParent:qx.core.Variant.select(H,{"mshtml|opera":function(z,A){if(z===A){return z;
}
while(z&&qx.dom.Node.isElement(z)){if(z.contains(A)){return z;
}z=z.parentNode;
}return null;
},"default":function(I,J){if(I===J){return I;
}var K={};
var N=qx.core.ObjectRegistry;
var M,L;

while(I||J){if(I){M=N.toHashCode(I);

if(K[M]){return K[M];
}K[M]=I;
I=I.parentNode;
}
if(J){L=N.toHashCode(J);

if(K[L]){return K[L];
}K[L]=J;
J=J.parentNode;
}}return null;
}}),getAncestors:function(B){return this._recursivelyCollect(B,C);
},getChildElements:function(P){P=P.firstChild;

if(!P){return [];
}var Q=this.getNextSiblings(P);

if(P.nodeType===1){Q.unshift(P);
}return Q;
},getDescendants:function(a){return qx.lang.Array.fromCollection(a.getElementsByTagName(E));
},getFirstDescendant:function(j){j=j.firstChild;

while(j&&j.nodeType!=1){j=j.nextSibling;
}return j;
},getLastDescendant:function(v){v=v.lastChild;

while(v&&v.nodeType!=1){v=v.previousSibling;
}return v;
},getPreviousSiblings:function(q){return this._recursivelyCollect(q,F);
},getNextSiblings:function(y){return this._recursivelyCollect(y,D);
},_recursivelyCollect:function(g,h){var i=[];

while(g=g[h]){if(g.nodeType==1){i.push(g);
}}return i;
},getSiblings:function(u){return this.getPreviousSiblings(u).reverse().concat(this.getNextSiblings(u));
},isEmpty:function(n){n=n.firstChild;

while(n){if(n.nodeType===qx.dom.Node.ELEMENT||n.nodeType===qx.dom.Node.TEXT){return false;
}n=n.nextSibling;
}return true;
},cleanWhitespace:function(R){var S=R.firstChild;

while(S){var T=S.nextSibling;

if(S.nodeType==3&&!/\S/.test(S.nodeValue)){R.removeChild(S);
}S=T;
}}}});
})();
(function(){var j="losecapture",i="qx.client",h="blur",g="focus",f="click",e="qx.event.dispatch.MouseCapture",d="capture",c="scroll";
qx.Class.define(e,{extend:qx.event.dispatch.AbstractBubbling,construct:function(a,b){arguments.callee.base.call(this,a);
this.__dz=a.getWindow();
this.__ft=b;
a.addListener(this.__dz,h,this.releaseCapture,this);
a.addListener(this.__dz,g,this.releaseCapture,this);
a.addListener(this.__dz,c,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__ft:null,__dA:null,__fu:true,__dz:null,_getParent:function(k){return k.parentNode;
},canDispatchEvent:function(o,event,p){return (this.__dA&&this.__dB[p]);
},dispatchEvent:function(t,event,u){if(u==f){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fu||!qx.dom.Hierarchy.contains(this.__dA,t)){t=this.__dA;
}arguments.callee.base.call(this,t,event,u);
},__dB:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__dA===q&&this.__fu==r){return;
}
if(this.__dA){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,j,function(){qx.bom.Event.removeNativeListener(q,j,arguments.callee);
self.releaseCapture();
});
}this.__fu=r;
this.__dA=q;
this.__ft.fireEvent(q,d,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__dA;
},releaseCapture:function(){var v=this.__dA;

if(!v){return;
}this.__dA=null;
this.__ft.fireEvent(v,j,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(v);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(i,{"mshtml":function(m,n){m.setCapture(n!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(i,{"mshtml":function(s){s.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__dA=this.__dz=this.__ft=null;
},defer:function(l){qx.event.Registration.addDispatcher(l);
}});
})();
(function(){var a="qx.event.handler.Window";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(r){arguments.callee.base.call(this);
this._manager=r;
this._window=r.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(n,o){},registerEvent:function(j,k,l){},unregisterEvent:function(s,t,u){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var q=qx.event.handler.Window.SUPPORTED_TYPES;

for(var p in q){qx.bom.Event.addNativeListener(this._window,p,this._onNativeWrapper);
}},_stopWindowObserver:function(){var i=qx.event.handler.Window.SUPPORTED_TYPES;

for(var h in i){qx.bom.Event.removeNativeListener(this._window,h,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var c=this._window;

try{var g=c.document;
}catch(e){return ;
}var d=g.documentElement;
var b=e.target||e.srcElement;

if(b==null||b===c||b===g||b===d){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,c]);
qx.event.Registration.dispatchEvent(c,event);
var f=event.getReturnValue();

if(f!=null){e.returnValue=f;
return f;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var g="qx.lang.Type",f="Error",e="RegExp",d="Date",c="Number",b="Boolean";
qx.Class.define(g,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(k){return this.getClass(k)==e;
},isNumber:function(i){return (i!==null&&(this.getClass(i)==c||i instanceof Number));
},isBoolean:function(a){return (a!==null&&(this.getClass(a)==b||a instanceof Boolean));
},isDate:function(j){return (j!==null&&(this.getClass(j)==d||j instanceof Date));
},isError:function(h){return (h!==null&&(this.getClass(h)==f||h instanceof Error));
}}});
})();
(function(){var m="qx.client",k="string",h="script",g="<table>",f="<fieldset>",e="<select multiple='multiple'>",d="</div>",c="</select>",b="</tr></tbody></table>",a="<col",J="div",I="<table><tbody><tr>",H=">",G="<table><tbody></tbody><colgroup>",F="<th",E="</tbody></table>",D="<td",C="</colgroup></table>",B="<opt",A="text/javascript",t="",u="</fieldset>",r="<table><tbody>",s="div<div>",p="<table",q="mshtml",n="qx.bom.Html",o="<leg",v="tbody",w="<tr",y="</table>",x="undefined",z="></";
qx.Class.define(n,{statics:{__ew:function(K,L,M){return M.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?K:L+z+M+H;
},__ex:{opt:[1,e,c],leg:[1,f,u],table:[1,g,y],tr:[2,r,E],td:[3,I,b],col:[2,G,C],def:qx.core.Variant.select(m,{"mshtml":[1,s,d],"default":null})},__ey:function(X,Y){var bf=Y.createElement(J);
X=X.replace(/(<(\w+)[^>]*?)\/>/g,this.__ew);
var bb=X.replace(/^\s+/,t).substring(0,5).toLowerCase();
var be,ba=this.__ex;

if(!bb.indexOf(B)){be=ba.opt;
}else if(!bb.indexOf(o)){be=ba.leg;
}else if(bb.match(/^<(thead|tbody|tfoot|colg|cap)/)){be=ba.table;
}else if(!bb.indexOf(w)){be=ba.tr;
}else if(!bb.indexOf(D)||!bb.indexOf(F)){be=ba.td;
}else if(!bb.indexOf(a)){be=ba.col;
}else{be=ba.def;
}if(be){bf.innerHTML=be[1]+X+be[2];
var bd=be[0];

while(bd--){bf=bf.lastChild;
}}else{bf.innerHTML=X;
}if(qx.core.Variant.isSet(m,q)){var bg=/<tbody/i.test(X);
var bc=!bb.indexOf(p)&&!bg?bf.firstChild&&bf.firstChild.childNodes:be[1]==g&&!bg?bf.childNodes:[];

for(var j=bc.length-1;j>=0;--j){if(bc[j].tagName.toLowerCase()===v&&!bc[j].childNodes.length){bc[j].parentNode.removeChild(bc[j]);
}}if(/^\s/.test(X)){bf.insertBefore(Y.createTextNode(X.match(/^\s*/)[0]),bf.firstChild);
}}return qx.lang.Array.fromCollection(bf.childNodes);
},clean:function(N,O,P){O=O||document;
if(typeof O.createElement===x){O=O.ownerDocument||O[0]&&O[0].ownerDocument||document;
}if(!P&&N.length===1&&typeof N[0]===k){var W=/^<(\w+)\s*\/?>$/.exec(N[0]);

if(W){return [O.createElement(W[1])];
}}var Q,S=[];

for(var i=0,l=N.length;i<l;i++){Q=N[i];
if(typeof Q===k){Q=this.__ey(Q,O);
}if(Q.nodeType){S.push(Q);
}else if(Q instanceof qx.type.BaseArray){S.push.apply(S,Array.prototype.slice.call(Q,0));
}else if(Q.toElement){S.push(Q.toElement());
}else{S.push.apply(S,Q);
}}if(P){var V=[],U=qx.lang.Array,T,R;

for(var i=0;S[i];i++){T=S[i];

if(T.nodeType==1&&T.tagName.toLowerCase()===h&&(!T.type||T.type.toLowerCase()===A)){if(T.parentNode){T.parentNode.removeChild(S[i]);
}V.push(T);
}else{if(T.nodeType===1){R=U.fromCollection(T.getElementsByTagName(h));
S.splice.apply(S,[i+1,0].concat(R));
}P.appendChild(T);
}}return V;
}return S;
}}});
})();
(function(){var g="mshtml",f="qx.client",e="qx.bom.element.Dimension",d="paddingRight",c="paddingLeft",b="paddingTop",a="paddingBottom";
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(f,{"gecko":function(z){if(z.getBoundingClientRect){var A=z.getBoundingClientRect();
return Math.round(A.right)-Math.round(A.left);
}else{return z.offsetWidth;
}},"default":function(x){return x.offsetWidth;
}}),getHeight:qx.core.Variant.select(f,{"gecko":function(h){if(h.getBoundingClientRect){var i=h.getBoundingClientRect();
return Math.round(i.bottom)-Math.round(i.top);
}else{return h.offsetHeight;
}},"default":function(y){return y.offsetHeight;
}}),getSize:function(C){return {width:this.getWidth(C),height:this.getHeight(C)};
},__dQ:{visible:true,hidden:true},getContentWidth:function(q){var s=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getX(q);
var u=parseInt(s.get(q,c),10);
var w=parseInt(s.get(q,d),10);

if(this.__dQ[t]){return q.clientWidth-u-w;
}else{if(q.clientWidth>=q.scrollWidth){return Math.max(q.clientWidth,q.scrollWidth)-u-w;
}else{var v=q.scrollWidth-u;
var r=qx.bom.client.Engine;

if(r.NAME===g&&r.VERSION==6){v-=w;
}return v;
}}},getContentHeight:function(j){var l=qx.bom.element.Style;
var n=qx.bom.element.Overflow.getY(j);
var o=parseInt(l.get(j,b),10);
var m=parseInt(l.get(j,a),10);

if(this.__dQ[n]){return j.clientHeight-o-m;
}else{if(j.clientHeight>=j.scrollHeight){return Math.max(j.clientHeight,j.scrollHeight)-o-m;
}else{var p=j.scrollHeight-o;
var k=qx.bom.client.Engine;

if(k.NAME===g&&k.VERSION==6){p-=m;
}return p;
}}},getContentSize:function(B){return {width:this.getContentWidth(B),height:this.getContentHeight(B)};
}}});
})();
(function(){var b="qx.dom.Element";
qx.Class.define(b,{statics:{hasChild:function(parent,a){return a.parentNode===parent;
},hasChildren:function(u){return !!u.firstChild;
},hasChildElements:function(s){s=s.firstChild;

while(s){if(s.nodeType===1){return true;
}s=s.nextSibling;
}return false;
},getParentElement:function(g){return g.parentNode;
},isInDom:function(m,n){if(!n){n=window;
}var o=n.document.getElementsByTagName(m.nodeName);

for(var i=0,l=o.length;i<l;i++){if(o[i]===m){return true;
}}return false;
},insertAt:function(v,parent,w){var x=parent.childNodes[w];

if(x){parent.insertBefore(v,x);
}else{parent.appendChild(v);
}return true;
},insertBegin:function(t,parent){if(parent.firstChild){this.insertBefore(t,parent.firstChild);
}else{parent.appendChild(t);
}},insertEnd:function(B,parent){parent.appendChild(B);
},insertBefore:function(e,f){f.parentNode.insertBefore(e,f);
return true;
},insertAfter:function(c,d){var parent=d.parentNode;

if(d==parent.lastChild){parent.appendChild(c);
}else{return this.insertBefore(c,d.nextSibling);
}return true;
},remove:function(k){if(!k.parentNode){return false;
}k.parentNode.removeChild(k);
return true;
},removeChild:function(A,parent){if(A.parentNode!==parent){return false;
}parent.removeChild(A);
return true;
},removeChildAt:function(y,parent){var z=parent.childNodes[y];

if(!z){return false;
}parent.removeChild(z);
return true;
},replaceChild:function(h,j){if(!j.parentNode){return false;
}j.parentNode.replaceChild(h,j);
return true;
},replaceAt:function(p,q,parent){var r=parent.childNodes[q];

if(!r){return false;
}parent.replaceChild(p,r);
return true;
}}});
})();
(function(){var o="success",n="head",m="complete",l="error",k="load",j="fail",i="loaded",h="readystatechange",g="qx.io.ScriptLoader",f="script",b="qx.client",d="text/javascript",c="abort";
qx.Class.define(g,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__fQ=qx.lang.Function.bind(this.__fW,this);
this.__fR=document.createElement(f);
},members:{__fS:null,__fT:null,__fU:null,__fQ:null,__fR:null,load:function(p,q,r){if(this.__fS){throw new Error("Another request is still running!");
}this.__fS=true;
var s=document.getElementsByTagName(n)[0];
var t=this.__fR;
this.__fT=q||null;
this.__fU=r||window;
t.type=d;
t.onerror=t.onload=t.onreadystatechange=this.__fQ;
t.src=p;
s.appendChild(t);
},abort:function(){if(this.__fS){this.__fV(c);
}},__fV:function(status){var a=this.__fR;
a.onerror=a.onload=a.onreadystatechange=null;
document.getElementsByTagName(n)[0].removeChild(a);
delete this.__fS;
if(this.__fT){this.__fT.call(this.__fU,status);
delete this.__fT;
}},__fW:qx.event.GlobalError.observeMethod(qx.core.Variant.select(b,{"mshtml":function(e){var u=this.__fR.readyState;

if(u==i){this.__fV(o);
}else if(u==m){this.__fV(o);
}else{return;
}},"opera":function(e){if(qx.lang.Type.isString(e)||e.type===l){return this.__fV(j);
}else if(e.type===k){return this.__fV(o);
}else{return;
}},"default":function(e){if(qx.lang.Type.isString(e)||e.type===l){this.__fV(j);
}else if(e.type===k){this.__fV(o);
}else if(e.type===h&&(e.target.readyState===m||e.target.readyState===i)){this.__fV(o);
}else{return;
}}}))},destruct:function(){this.__fR.onerror=this.__fR.onload=this.__fR.onreadystatechange=null;
this.__fR=this.__fQ=this.__fT=this.__fU=null;
}});
})();


qx.$$loader.init();

