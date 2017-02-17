(function(){var c="bronto-popup-id";var a="https://popupstats.brontops.com/image.gif";var i="DO_NOT_DISPLAY";var f="DISPLAY_POPUP_FIRST";var e="DISPLAY_RIBBON_FIRST";var g="";var h=function(p,o,m){var n=m||{};n.type=o;return{data:function(){var q={splitTest:p.getConfig().splitTest,displayType:p.getConfig().deployType,versionId:p.getGuid(),accountId:p.getPopupGuid(),path:window.location.pathname,query:window.location.search,screenWidth:screen.width,screenHeight:screen.height,domain:p.getConfig().domain};for(var r in n){q[r]=n[r];}return q;},send:function(u){var t=[],r=this.data(),s=new Image();for(var q in r){t.push(encodeURIComponent(q)+"="+encodeURIComponent(r[q]));}if(u){s.onload=u.bind(this);}if(!p.getConfig().preview){s.src=a+"?"+t.join("&");document.dispatchEvent(new CustomEvent("bronto:popup-stat-"+o,{detail:{stat:r}}));}}};};var k=function(s,y){var w=this;var t=true;var z=false;var B="";var C={};var E={};var v={};var q={"bronto:popup-created":function(H){new h(w,"viewed").send();
},"bronto:popup-submitted":function(J){var H={email:J.detail.email};new h(w,"submitted",H).send();if(document.querySelector(".ribbon-close")){var K=document.querySelector(".ribbon-close");if(K.onclick){K.onclick();}else{if(K.click){K.click();}}}else{var I=A(g);I.ribbonDisplayMode=i;}}};var r=function(I){if(I.match(/^www\./)){I=I.replace(/^www\./,"");}var H=new RegExp(".*"+I.replace(/\./g,"\\.")+".*$");return H.test(document.domain);};var u=function(K,H){var J=/\*$/;if(!H){H=window.location.pathname;}if(J.test(K)){var I=new RegExp(K.replace("*",".+"));if(I.test(H)){return true;}}else{if(K==H){return true;}}return false;};var m=function(H){if(!r(H.popup.domain||H)){return false;}E.popup.excludeDeviceWidth=E.popup.excludeDeviceWidth||E.popup.maxMobileWidth;if(E.popup.deployType!=="mobile"&&!matchMedia("(min-width: "+E.popup.excludeDeviceWidth+"px)").matches){return false;}if(!H.popup.lazyPathEval&&!w.validatePath(window.location.pathname)){return false;}return true;};var o=function(L){var H=[];
var K={};for(var I=0;I<L.length;I++){var J=L[I];if(!K[J.name]){K[J.name]={};H.push(J);}}return H;};var x=function(I){var H=I.detail.popup;if(typeof bronto!=="undefined"&&typeof bronto.EmailInput!=="undefined"){H.getConfig().withElementForEventOfType("inputs","email",function(K){var J=new bronto.EmailInput({selector:"#"+K.dom.getAttribute("id")},bronto.jQuery);J.observe();});}};var A=function(H){if(!matchMedia("(min-width: "+(E.maxMobileWidth+1)+"px)").matches){return H.mobile;}return H.desktop;};var G=function(H){p(A(g));};var p=function(I){B=I.popupVersionId||I.versionId;var L="popup";if(!z&&I.ribbonDisplayMode&&I.ribbonDisplayMode===e&&!document.querySelector(".ribbon-dialog")){L="ribbon";}var K=0;var H=o(E[L].resources||[]);for(var J=0;J<H.length;J++){(function(M){new l(s,w.getPopupGuid()+"/"+B).gather(M.name,M.type,function(O){K++;if(O instanceof Error){v[M.name]=O;}else{M.data=O;C[M.name]=M;}if(K==H.length){var N=new CustomEvent("bronto:"+L+"-delivered",{detail:w});document.dispatchEvent(N);
}});})(H[J]);}};var n=function(I){var H=Math.floor(Math.random()*E.versions.length);E.popup={splitTest:E.versions.length>1?"true":"false",formId:E.formId,domain:E.domain,lazyPathEval:E.versions[H].lazyPathEval||false,excludes:E.versions[H].excludes,includes:E.versions[H].includes,resources:E.versions[H].resources,deployType:"desktop",excludeDeviceWidth:E.versions[H].excludeDeviceWidth};E.popup.resources.push({name:"popup.js",type:"javascript"});if(m(E)){p(E.versions[H]);}document.removeEventListener("bronto:popup-config",I,false);};var D=function(J){var I=["primary"];if(E.containers.secondary){I.push("secondary");}var K=Math.floor(Math.random()*I.length);g=E.containers[I[K]];if(r(E.domain)){var H=A(g);if(H){E.popup={splitTest:E.containers.secondary?"true":"false",formId:E.formId,domain:E.domain,preview:E.preview,maxMobileWidth:E.maxMobileWidth,lazyPathEval:H.lazyPathEval||false,excludes:H.excludes,includes:H.includes,resources:H.resources,deployType:H.deployType};if(H.ribbonDisplayMode&&H.ribbonDisplayMode!==i){E.ribbon={splitTest:E.containers.secondary?"true":"false",formId:E.formId,domain:E.domain,preview:E.preview,maxMobileWidth:E.maxMobileWidth,lazyPathEval:H.lazyPathEval||false,excludes:E.popup.excludes,includes:E.popup.includes,resources:H.ribbonResources,deployType:H.deployType};
E.ribbon.resources.push({name:"ribbon.js",type:"javascript"});}E.popup.resources.push({name:"popup.js",type:"javascript"});if(m(E)){p(H);}}}document.removeEventListener("bronto:popup-config",J,false);};this.loadPopupResources=function(){var I=function(J){E=J.detail||E;if(document.querySelector(".popup-dialog")){return false;}if(!E.popupId||E.popupId==y){if(E.versions){n(I);}else{D(I);}}};document.addEventListener("bronto:ribbon-clicked",G,false);document.addEventListener("bronto:popup-config",I,false);document.addEventListener("bronto:popup-created",x,false);for(var H in q){document.addEventListener(H,q[H]);}document.addEventListener("bronto:popup-closed",F,false);new l(s,w.getPopupGuid()).gather("config.js","javascript",function(J){document.removeEventListener("bronto:popup-config",I);});};this.getHost=function(){return s;};this.getPopupGuid=function(){return y;};this.getGuid=function(){return B;};this.getFormId=function(){return E.popup.formId;};this.getResources=function(){return C;};
this.getResource=function(H){return C[H]?C[H]:{};};this.getConfig=function(){return E.popup;};this.getErrors=function(){return v;};this.hasErrors=function(){for(var H in v){return true;}return false;};this.validatePath=function(H){if(E.popup.includes&&E.popup.includes.length>0){var J=false;for(var I=0;I<E.popup.includes.length;I++){if(u(E.popup.includes[I],H)){J=true;break;}}if(!J){return false;}}for(var I=0;I<E.popup.excludes.length;I++){if(u(E.popup.excludes[I],H)){return false;}}return true;};var F=function(K){if(document.querySelector(".ribbon-dialog")){return false;}var I=K.detail;var J=I.getConfig().getConfig();if(J.ribbonDisplayMode===f){var H=A(g);H.ribbonDisplayMode=e;w.useTriggerCriteria=false;p(H);}};};var l=function(n,m){this.gather=function(q,s,u){var p=n+"/"+(m?m+"/":"")+q;switch(s){case"javascript":var o=false;var r=document.createElement("script");r.setAttribute("type","text/javascript");r.onload=r.onreadystatechange=function(){if(!o&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){o=true;
r.onload=r.onreadystatechange=null;if(u){u(r);document.documentElement.removeChild(r);}}};r.onerror=function(){if(u){u(new Error("Failed to load js: "+p));}r.onerror=null;};r.setAttribute("src",p);document.documentElement.appendChild(r);break;case"image":var t=new Image();t.onload=function(){if(u){u(t);}t.onload=null;};t.onerror=function(){if(u){u(new Error("Failed to load image: "+p));}t.onerror=null;};t.src=p;break;default:u(new Error("Resource with name "+q+" is not valid."));}};};var j=function(n){var p=n.src.split("/").slice(0,-1).join("/");var o=function(u){var s=0;var q=["polyfills.js"];for(var t=0,r;r=q[t];t++){(function(v){new l(p).gather(v,"javascript",function(){s++;if(s==q.length){u();}});})(r);}};var m=function(){var r=n.getAttribute(c),s=r?r.split(/\s+/g):[];if(r){for(var q=0;q<s.length;q++){new k(p,s[q]).loadPopupResources();}}};o(function(){document.dispatchEvent(new CustomEvent("bronto:polyfills"));document.addEventListener("bronto:load-popup",m,false);m();});};var d=function(n,m,o){if(n.addEventListener){n.addEventListener(m,o,false);
}else{if(n.attachEvent){n.attachEvent("on"+m,o);}}};var b=function(){if(document.all&&(document.documentMode===undefined)){return;}var m=document.getElementsByTagName("script");var o=c.replace(/\-/g,"");for(var p=0,n;n=m[p];p++){if(n.hasAttribute&&(n.hasAttribute(c)||n.hasAttribute(o))){return new j(n);}}};if(document.readyState==="complete"){b();}else{d(window,"load",b);}})();