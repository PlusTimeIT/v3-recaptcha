(function(e,c){typeof exports=="object"&&typeof module<"u"?c(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],c):(e=typeof globalThis<"u"?globalThis:e||self,c(e["v3-recaptcha"]={},e.Vue))})(this,function(e,c){"use strict";const d=a=>{const t=window;console.log("global",t);const r=c.ref(!1),n=c.computed(()=>a!=null&&a!=="");return{loadRecaptcha:()=>{if(n.value&&t&&!t.grecaptcha){const o=document.createElement("script");document.head.appendChild(o),o.onload=()=>{t.grecaptcha.ready(()=>{r.value=!0})},o.setAttribute("src",`https://www.google.com/recaptcha/api.js?render=${a}`)}},getToken:async o=>!n.value||!t.grecaptcha?Promise.resolve(void 0):new Promise(p=>{t.grecaptcha.ready(()=>void(async()=>{const s=await t.grecaptcha.execute(a,{action:o});p(s)})())}),recaptchaIsLoaded:r,hasRecaptcha:n}};e.useV3Recaptcha=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
