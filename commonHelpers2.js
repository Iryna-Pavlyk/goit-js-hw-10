import"./assets/styles-20dd7eac.js";import{i as a}from"./assets/vendor-77e16229.js";const l=document.querySelector(".form");l.addEventListener("submit",m);function m(e){e.preventDefault();const t=e.target.elements.delay.value,s=e.target.elements.state.value;console.log(s),e.target.reset(),n(t);function n(r){if(r>0){setTimeout(()=>{},r);const i=s==="fulfilled"?Promise.resolve(`✅ Fulfilled promise in ${t}ms`):Promise.reject(`❌ Rejected promise in ${t}ms`);i.then(o=>{a.show({message:o,backgroundColor:"rgba(82, 223, 79, 0.3)",position:"topRight"})}).catch(o=>{a.show({message:o,backgroundColor:"rgba(223, 79, 79, 0.3)",position:"topRight"})})}}}
//# sourceMappingURL=commonHelpers2.js.map
