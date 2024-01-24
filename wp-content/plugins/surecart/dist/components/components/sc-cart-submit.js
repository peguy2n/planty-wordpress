import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";import{f as formBusy}from"./getters2.js";const scCartSubmitCss="sc-cart-submit{position:relative;width:100%}sc-cart-submit a.wp-block-button__link{position:relative;text-decoration:none;width:100%;display:block;box-sizing:border-box;text-align:center}sc-cart-submit sc-spinner::part(base){--indicator-color:currentColor;--spinner-size:12px;position:absolute;top:calc(50% - var(--spinner-size) + var(--spinner-size) / 4);left:calc(50% - var(--spinner-size) + var(--spinner-size) / 4)}sc-cart-submit [data-text],sc-cart-submit [data-loader]{transition:opacity var(--sc-transition-fast) ease-in-out, visibility var(--sc-transition-fast) ease-in-out}sc-cart-submit [data-loader]{opacity:0;visibility:hidden}sc-cart-submit.is-disabled{pointer-events:none}sc-cart-submit.is-busy [data-text]{opacity:0;visibility:hidden}sc-cart-submit.is-busy [data-loader]{opacity:1;visibility:visible}",ScCartSubmit$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.busy=void 0}render(){return h(Host,{class:{"is-busy":formBusy()||this.busy,"is-disabled":formBusy()||this.busy},onClick:()=>(this.busy=!0,!0)},h("slot",null))}static get style(){return scCartSubmitCss}},[4,"sc-cart-submit",{busy:[4]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-cart-submit"].forEach((t=>{"sc-cart-submit"===t&&(customElements.get(t)||customElements.define(t,ScCartSubmit$1))}))}const ScCartSubmit=ScCartSubmit$1,defineCustomElement=defineCustomElement$1;export{ScCartSubmit,defineCustomElement};