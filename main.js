function n(n,t,e,o){return new(e||(e=Promise))((function(i,c){function r(n){try{d(o.next(n))}catch(n){c(n)}}function u(n){try{d(o.throw(n))}catch(n){c(n)}}function d(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(r,u)}d((o=o.apply(n,t||[])).next())}))}function t(n,t){return n+t}window.onload=()=>n(void 0,void 0,void 0,(function*(){const n=document.getElementById("root"),t=document.createElement("div");t.innerText="Waiting for next chunk...",null==n||n.appendChild(t);try{const{default:n}=yield import("./index-81f6ea38.js");n(t)}catch(n){console.error("Error in splitted moduel: ",n)}}));export{t as sum};
//# sourceMappingURL=main.js.map
