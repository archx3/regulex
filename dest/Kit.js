if("function"!=typeof define)var define=require("amdefine")(module);define(function(){function r(n,u){return n._Set?n:(u||(n=e(n)),n.contains=function(r,e){return!!~t(n,r,e)},n.indexOf=function(r,e){return t(n,r,e)},n.toArray=function(){return o(n)},n.union=function(t){t=r(t);for(var e=n.length+t.length,u=new n.constructor(e),i=0,f=0,a=0;e>a;a++)n[i]===t[f]?(u[a]=n[i++],f++,e--):u[a]=n[i]<t[f]?n[i++]:t[f++];return u.length=e,r(u.length===e?u:o(u,e),!0)},n.inspect=n.toArray,n._Set=!0,n)}function n(r,n){return n>r?F:r===n?P:x}function t(r,t,e){var o,u,i=0,f=r.length,a=f-1;if(1>f)return-1;if(e=e||n,1===f)return e(t,r[i])===P?i:-1;if(e(t,r[i])===F||e(t,r[a])===x)return-1;do{if(o=i+(a-i+1>>1),u=e(t,r[o]),u===P)return o;u===F?a=o-1:i=o+1}while(a>=i);return-1}function e(r){var n=r.length;if(1>=n)return r;for(var t,e,u,i=1,f=n/3|0;f>i;)i=3*i+1;for(;i>0;){for(t=i;n>t;t++)for(e=t;e>=i&&r[e]<r[e-i];e-=i)u=r[e],r[e]=r[e-i],r[e-i]=u;i=i/3|0}var a,c=r[0];for(t=1,e=1;n>t;t++)a=r[t],a!==c&&(c=r[e++]=r[t]);return r.length=e,r.length===e?r:o(r,e)}function o(r,n){n="undefined"==typeof n?r.length:n;for(var t=new r.constructor(n),e=n;e--;)t[e]=r[e];return t}function u(r){for(var n,t={},e=0,o=0,u=r.length;u>e;e++)n=r[e],t.hasOwnProperty(n)||(t[n]=1,r[o++]=n);return r.length=o,r}function i(r){var n,t,e,o=r.length,u=(1e10*Math.random()).toString(32)+(+new Date).toString(32);for(n=t=0;o>n;n++)e=r[n],null!=e&&(e.hasOwnProperty(u)||(Object.defineProperty(e,u,{value:1,enumerable:!1}),r[t++]=e));for(n=t;n--;)r[n][u]=void 0;return r.length=t,r}function f(r){r=r.map(function(r){return r[1]?r:r+r});var n,t,o,u,i,f;r=e(r),f=r.length;var a,c,s={},h={},l={};for(n=0;f>n;n++)for(i=r[n],c=i[1],h[i[0]]=!0,l[c]=!0,t=n;f>t;t++)if(a=r[t][0],a>=c){a===c&&(s[c]=!0);break}var d=e(r.join("").split("")),v=Object.keys(s),y=d[0],w={},m={};for(n=0;f>n;n++)w[r[n]]=[];if(s.hasOwnProperty(y))for(n=0;f>n;n++)if(i=r[n],i[0]===y)w[i].push(y);else if(i[0]>y)break;for(n=0,o=0,u=d.length-1;u>n;n++){if(a=d[n],c=d[n+1],l.hasOwnProperty(a)&&(a=g(a)),h.hasOwnProperty(c)&&(c=p(c)),c>=a)for(y=a===c?a:a+c,t=o;f>t&&(i=r[t],!(i[0]>c));t++)i[0]<=a&&c<=i[1]&&(w[i].push(y),v.push(y));if(a=d[n],c=d[n+1],s.hasOwnProperty(c))for(t=o;f>t&&(i=r[t],i[1]<a&&o++,!(i[0]>c));t++)i[0]<=c&&c<=i[1]&&w[i].push(c)}v=e(v);for(o in w)m[o[0]===o[1]?o[0]:o]=w[o];return{ranges:v,map:m}}function a(r){var n="\x00",t="￿";r=f(r).ranges;var e=[];if(!r.length)return e;r[0][0]!==n&&r.unshift(t);var o=r.length-1;return(r[o][1]||r[o][0])!==t&&r.push(n),r.reduce(function(r,n){var t=g(r[1]||r[0]),o=p(n[0]);return o>t&&e.push(t+o),t===o&&e.push(t),n}),e}function c(r){r=r.split("");var n=[],t=[],e="^"===r[0]&&r.length>1&&r.shift();return r.forEach(function(r){if("-"==n[0]&&n.length>1){if(n[1]>r)throw new Error("Charset range out of order:"+n[1]+"-"+r+"!");t.push(n[1]+r),n.splice(0,2)}else n.unshift(r)}),t=t.concat(n),e?a(t):f(t).ranges}function s(r){if(!r.length)return[];var n=[r[0]];return r.reduce(function(r,t){var e=n.length-1;return r[r.length-1]===p(t[0])?n[e]=n[e][0]+t[t.length-1]:(n.push(t),t)}),n}function h(r){return String.fromCharCode(r)}function l(r){return r.charCodeAt(0)}function p(r){return String.fromCharCode(r.charCodeAt(0)-1)}function g(r){return String.fromCharCode(r.charCodeAt(0)+1)}function d(r){var n=/[\x00-\x1F\x7F-\x9F]/,t=/[\u009F-\uFFFF]/;return(n.test(r)||t.test(r))&&(r=r.split("").map(function(r){return A.hasOwnProperty(r)?A[r]:n.test(r)?"\\x"+l(r).toString(16).toUpperCase():t.test(r)?"\\u"+("00"+l(r).toString(16)).slice(-4):r}).join("")),r}function v(r){return[].concat.apply([],r)}function y(r,n){return new Array(n+1).join(r)}function w(){var r=S.call(arguments);if(O)Function.prototype.apply.apply(console.log,[console,r]);else{var n=require("util");r.forEach(function(r){console.log(n.inspect(r,{showHidden:!1,customInspect:!0,depth:64,colors:!0}))})}}function m(r){for(var n,t=r.toString(),e=/^\s+function\s+([a-zA-Z]\w+)\s*\(/gm,o=[];n=e.exec(t);)o.push(n[1]);for(var r,u=[];r=o.pop();)u.push(r+":"+r);return"{\n"+u.join(",\n")+"\n}"}var C=Array.prototype,S=C.slice,O=function(){return"[object Window]"===this.toString()}(),F=-1,P=0,x=1,A={"\n":"\\n","	":"\\t","\f":"\\f","\r":"\\r"," ":" ","\\":"\\\\"};return{sortUnique:e,idUnique:i,hashUnique:u,Set:r,repeats:y,negate:a,coalesce:s,classify:f,parseCharset:c,chr:h,ord:l,pred:p,succ:g,toPrint:d,flatten2:v,log:w,isBrowser:O,locals:m}});