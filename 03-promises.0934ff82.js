var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var l=t("iQIUW");function r(e,o){return new Promise(((n,t)=>{const l=Math.random()>.3;setTimeout((()=>{l?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:o,step:n,amount:t}}=e.currentTarget;console.log(o.value,n.value,t.value);for(let e=1;e<=t.value;e+=1)r(e,o.value).then((({position:e,delay:o})=>{l.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`),console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{l.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),o.value=Number(o.value)+Number(n.value),console.log(o.value);e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.0934ff82.js.map
