import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{s as state}from"./mutations.js";const scCartLoaderCss=":host{position:absolute;z-index:var(--sc-cart-z-index, 999999);font-family:var(--sc-font-sans)}",ScCartLoader$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.template=void 0}render(){var t;if(!document.querySelector("sc-checkout"))return"paid"===(null===(t=null==state?void 0:state.checkout)||void 0===t?void 0:t.status)?(state.checkout=null,null):h("div",{innerHTML:this.template||""})}static get style(){return scCartLoaderCss}},[0,"sc-cart-loader",{template:[1]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-cart-loader"].forEach((t=>{"sc-cart-loader"===t&&(customElements.get(t)||customElements.define(t,ScCartLoader$1))}))}const ScCartLoader=ScCartLoader$1,defineCustomElement=defineCustomElement$1;export{ScCartLoader,defineCustomElement};