import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{s as state$1}from"./store3.js";import{s as state,o as onChange}from"./mutations.js";import{b as getValueFromUrl}from"./util.js";import{d as createOrUpdateCheckout}from"./index4.js";import{d as defineCustomElement$4}from"./sc-form-control2.js";import{d as defineCustomElement$3}from"./sc-input2.js";import{d as defineCustomElement$2}from"./sc-visually-hidden2.js";const scCustomerLastnameCss=":host{display:block}",ScCustomerLastname$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scInput=createEvent(this,"scInput",7),this.scFocus=createEvent(this,"scFocus",7),this.scBlur=createEvent(this,"scBlur",7),this.loggedIn=void 0,this.size="medium",this.value=null,this.pill=!1,this.label=void 0,this.showLabel=!0,this.help="",this.placeholder=void 0,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1,this.autofocus=void 0,this.hasFocus=void 0}async reportValidity(){var e,t,s,i,o,l,a;return this.required?(null===(i=null===(s=this.input)||void 0===s?void 0:s.setCustomValidity)||void 0===i||i.call(s,""),(null===(o=this.input)||void 0===o?void 0:o.value.trim().length)||this.input.setCustomValidity(wp.i18n.__("Field must not be empty.","surecart")),await(null===(a=null===(l=this.input)||void 0===l?void 0:l.reportValidity)||void 0===a?void 0:a.call(l))):await(null===(t=null===(e=this.input)||void 0===e?void 0:e.reportValidity)||void 0===t?void 0:t.call(e))}async handleChange(){this.value=this.input.value;try{state.checkout=await createOrUpdateCheckout({id:state.checkout.id,data:{last_name:this.input.value}})}catch(e){console.error(e)}}handleSessionChange(){var e,t,s,i,o,l;if(this.value)return;const a=getValueFromUrl("last_name");state$1.loggedIn||!a?state$1.loggedIn?this.value=(null===(t=null===(e=null==state?void 0:state.checkout)||void 0===e?void 0:e.customer)||void 0===t?void 0:t.last_name)||(null===(s=null==state?void 0:state.checkout)||void 0===s?void 0:s.last_name):this.value=(null===(i=null==state?void 0:state.checkout)||void 0===i?void 0:i.last_name)||(null===(l=null===(o=null==state?void 0:state.checkout)||void 0===o?void 0:o.customer)||void 0===l?void 0:l.last_name):this.value=a}componentWillLoad(){this.handleSessionChange(),this.removeCheckoutListener=onChange("checkout",(()=>this.handleSessionChange()))}disconnectedCallback(){this.removeCheckoutListener()}render(){return h("sc-input",{type:"text",name:"last_name",ref:e=>this.input=e,value:this.value,label:this.label,help:this.help,autocomplete:"last_name",placeholder:this.placeholder,readonly:this.readonly,required:this.required,invalid:this.invalid,autofocus:this.autofocus,hasFocus:this.hasFocus,onScChange:()=>this.handleChange(),onScInput:()=>this.scInput.emit(),onScFocus:()=>this.scFocus.emit(),onScBlur:()=>this.scBlur.emit()})}static get style(){return scCustomerLastnameCss}},[1,"sc-customer-lastname",{loggedIn:[4,"logged-in"],size:[513],value:[1032],pill:[516],label:[1],showLabel:[4,"show-label"],help:[1],placeholder:[1],disabled:[516],readonly:[516],required:[516],invalid:[1540],autofocus:[4],hasFocus:[1540,"has-focus"],reportValidity:[64]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-customer-lastname","sc-form-control","sc-input","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-customer-lastname":customElements.get(e)||customElements.define(e,ScCustomerLastname$1);break;case"sc-form-control":customElements.get(e)||defineCustomElement$4();break;case"sc-input":customElements.get(e)||defineCustomElement$3();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$2()}}))}const ScCustomerLastname=ScCustomerLastname$1,defineCustomElement=defineCustomElement$1;export{ScCustomerLastname,defineCustomElement};