import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{a as apiFetch}from"./fetch.js";import{g as getHumanDiscount}from"./price.js";import{d as defineCustomElement$7}from"./sc-alert2.js";import{d as defineCustomElement$6}from"./sc-block-ui2.js";import{d as defineCustomElement$5}from"./sc-button2.js";import{d as defineCustomElement$4}from"./sc-dashboard-module2.js";import{d as defineCustomElement$3}from"./sc-flex2.js";import{d as defineCustomElement$2}from"./sc-icon2.js";import{d as defineCustomElement$1}from"./sc-spinner2.js";import{a as addQueryArgs}from"./add-query-args.js";const replaceAmount=(e,t,s="amount")=>e.replaceAll("{{"+s+"}}",t).replaceAll("{{ "+s+" }}",t),scCancelDiscountCss=".cancel-discount__abort-link{color:var(--sc-color-gray-500)}",ScCancelDiscount=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scCancel=createEvent(this,"scCancel",7),this.scPreserved=createEvent(this,"scPreserved",7),this.subscription=void 0,this.reason=void 0,this.comment=void 0,this.protocol=void 0,this.loading=void 0,this.error=void 0}replaceAmount(e){var t,s;return(null===(t=this.protocol)||void 0===t?void 0:t.preservation_coupon)?replaceAmount(e,getHumanDiscount(null===(s=this.protocol)||void 0===s?void 0:s.preservation_coupon)):e}async addDiscount(){var e,t;try{this.loading=!0,this.subscription=await apiFetch({method:"PATCH",path:addQueryArgs(`surecart/v1/subscriptions/${null===(e=this.subscription)||void 0===e?void 0:e.id}/preserve`,{cancellation_act:{...this.comment?{comment:this.comment}:{},cancellation_reason_id:null===(t=this.reason)||void 0===t?void 0:t.id}})}),this.scPreserved.emit()}catch(e){console.error(e),this.error=e}finally{this.loading=!1}}render(){var e;const{preserve_title:t,preserve_description:s,preserve_button:o,cancel_link:n}=(null===(e=this.protocol)||void 0===e?void 0:e.preservation_locales)||{};return h("div",{class:"cancel-discount"},h("sc-dashboard-module",{heading:this.replaceAmount(t),style:{"--sc-dashboard-module-spacing":"2em"}},h("span",{slot:"description"},this.replaceAmount(s)),h("sc-flex",{justifyContent:"flex-start"},h("sc-button",{type:"primary",onClick:()=>this.addDiscount()},o),h("sc-button",{class:"cancel-discount__abort-link",type:"text",onClick:()=>this.scCancel.emit()},n)),!!this.loading&&h("sc-block-ui",{spinner:!0})))}static get style(){return scCancelDiscountCss}},[1,"sc-cancel-discount",{subscription:[16],reason:[16],comment:[1],protocol:[16],loading:[32],error:[32]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-cancel-discount","sc-alert","sc-block-ui","sc-button","sc-dashboard-module","sc-flex","sc-icon","sc-spinner"].forEach((e=>{switch(e){case"sc-cancel-discount":customElements.get(e)||customElements.define(e,ScCancelDiscount);break;case"sc-alert":customElements.get(e)||defineCustomElement$7();break;case"sc-block-ui":customElements.get(e)||defineCustomElement$6();break;case"sc-button":customElements.get(e)||defineCustomElement$5();break;case"sc-dashboard-module":customElements.get(e)||defineCustomElement$4();break;case"sc-flex":customElements.get(e)||defineCustomElement$3();break;case"sc-icon":customElements.get(e)||defineCustomElement$2();break;case"sc-spinner":customElements.get(e)||defineCustomElement$1()}}))}export{ScCancelDiscount as S,defineCustomElement as d};