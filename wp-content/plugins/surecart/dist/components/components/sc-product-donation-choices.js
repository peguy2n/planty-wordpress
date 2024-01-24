import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";import{s as state}from"./watchers2.js";import{d as defineCustomElement$8}from"./sc-choice-container2.js";import{d as defineCustomElement$7}from"./dropdown.js";import{d as defineCustomElement$6}from"./sc-format-number2.js";import{d as defineCustomElement$5}from"./sc-icon2.js";import{d as defineCustomElement$4}from"./sc-menu2.js";import{d as defineCustomElement$3}from"./sc-menu-item2.js";import{d as defineCustomElement$2}from"./sc-recurring-price-choice-container2.js";const scProductDonationChoicesCss=":host{display:block}.sc-product-donation-choices{display:grid;gap:2em;position:relative;--columns:4}.sc-product-donation-choices__form{display:grid;gap:var(--sc-spacing-small)}.sc-donation-recurring-choices{display:grid;gap:var(--sc-spacing-small);position:relative;--columns:2}",ScProductDonationChoice=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.productId=void 0,this.label=void 0,this.recurring=void 0}state(){return state[this.productId]}updateState(e){state[this.productId]={...state[this.productId],...e}}render(){var e,t,o,s;const i=((null===(o=null===(t=null===(e=this.state())||void 0===e?void 0:e.product)||void 0===t?void 0:t.prices)||void 0===o?void 0:o.data)||[]).filter((e=>this.recurring?(null==e?void 0:e.recurring_interval)&&(null==e?void 0:e.ad_hoc):!(null==e?void 0:e.recurring_interval)&&(null==e?void 0:e.ad_hoc))).filter((e=>!(null==e?void 0:e.archived)));return(null==i?void 0:i.length)?h("sc-recurring-price-choice-container",{prices:i.sort(((e,t)=>(null==e?void 0:e.position)-(null==t?void 0:t.position))),product:null===(s=this.state())||void 0===s?void 0:s.product,selectedPrice:this.state().selectedPrice,showDetails:!1,showAmount:!1,onScChange:e=>{var t,o;const s=((null===(o=null===(t=this.state().product)||void 0===t?void 0:t.prices)||void 0===o?void 0:o.data)||[]).find((({id:t})=>t==e.detail));this.updateState({selectedPrice:s})},"aria-label":this.recurring?wp.i18n.__("If you want to make your donation recurring then Press Tab once & select the recurring interval from the dropdown. ","surecart"):wp.i18n.__("If you want to make your donation once then Press Enter. ","surecart"),style:{"--sc-recurring-price-choice-white-space":"wrap","--sc-recurring-price-choice-text-align":"left"}},h("slot",null,this.label)):h(Host,{style:{display:"none"}})}get el(){return this}static get style(){return scProductDonationChoicesCss}},[1,"sc-product-donation-choices",{productId:[513,"product-id"],label:[1],recurring:[4]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-product-donation-choices","sc-choice-container","sc-dropdown","sc-format-number","sc-icon","sc-menu","sc-menu-item","sc-recurring-price-choice-container"].forEach((e=>{switch(e){case"sc-product-donation-choices":customElements.get(e)||customElements.define(e,ScProductDonationChoice);break;case"sc-choice-container":customElements.get(e)||defineCustomElement$8();break;case"sc-dropdown":customElements.get(e)||defineCustomElement$7();break;case"sc-format-number":customElements.get(e)||defineCustomElement$6();break;case"sc-icon":customElements.get(e)||defineCustomElement$5();break;case"sc-menu":customElements.get(e)||defineCustomElement$4();break;case"sc-menu-item":customElements.get(e)||defineCustomElement$3();break;case"sc-recurring-price-choice-container":customElements.get(e)||defineCustomElement$2()}}))}const ScProductDonationChoices=ScProductDonationChoice,defineCustomElement=defineCustomElement$1;export{ScProductDonationChoices,defineCustomElement};