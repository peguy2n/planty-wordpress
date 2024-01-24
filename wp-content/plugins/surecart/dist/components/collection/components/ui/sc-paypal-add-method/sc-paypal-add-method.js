import{h,Host}from"@stencil/core";import{loadScript}from"@paypal/paypal-js";import{__}from"@wordpress/i18n";import apiFetch from"../../../functions/fetch";import{getScriptLoadParams}from"../paypal-buttons/functions";export class ScPaypalAddMethod{constructor(){this.liveMode=!0,this.customerId=void 0,this.successUrl=void 0,this.currency=void 0,this.loading=void 0,this.loaded=void 0,this.error=void 0,this.paymentIntent=void 0}componentWillLoad(){this.createPaymentIntent()}async handlePaymentIntentCreate(){var e,t;const{external_intent_id:r}=this.paymentIntent||{},{client_id:a,account_id:i,merchant_initiated:s}=(null===(t=null===(e=this.paymentIntent)||void 0===e?void 0:e.processor_data)||void 0===t?void 0:t.paypal)||{};if(a&&i&&r&&!this.paypal)try{this.paypal=await loadScript(getScriptLoadParams({clientId:a,merchantId:i,merchantInitiated:s,reusable:!0})),this.paypal.Buttons({onInit:()=>{this.loaded=!0},createBillingAgreement:()=>new Promise((e=>e(r))),onApprove:async()=>{var e;try{this.loading=!0;const t=await apiFetch({method:"PATCH",path:`surecart/v1/payment_intents/${null===(e=this.paymentIntent)||void 0===e?void 0:e.id}/capture`});if(!["succeeded","pending","requires_approval"].includes(null==t?void 0:t.status))throw{message:__("The payment did not process. Please try again.","surecart")};window.location.assign(this.successUrl)}catch(e){console.error(e),this.error=(null==e?void 0:e.message)||__("The payment did not process. Please try again.","surecart"),this.loading=!1}},onError:e=>{console.error(e),alert((null==e?void 0:e.message)||__("The payment did not process. Please try again.","surecart"))}}).render(this.container)}catch(e){console.error("Failed to load the PayPal JS SDK script",e),this.error=__("Failed to load the PayPal JS SDK script","surecart")}}async createPaymentIntent(){var e,t;try{this.loading=!0,this.error="",this.paymentIntent=await apiFetch({method:"POST",path:"surecart/v1/payment_intents",data:{processor_type:"paypal",reusable:!0,live_mode:this.liveMode,customer_id:this.customerId,currency:this.currency}})}catch(r){this.error=(null===(t=null===(e=null==r?void 0:r.additional_errors)||void 0===e?void 0:e[0])||void 0===t?void 0:t.message)||(null==r?void 0:r.message)||__("Something went wrong","surecart")}finally{this.loading=!1}}render(){return h(Host,null,this.error&&h("sc-alert",{open:!!this.error,type:"danger"},h("span",{slot:"title"},__("Error","surecart")),this.error),h("div",{class:"sc-paypal-button-container",hidden:!this.loaded,ref:e=>this.container=e}))}static get is(){return"sc-paypal-add-method"}static get originalStyleUrls(){return{$:["sc-paypal-add-method.scss"]}}static get styleUrls(){return{$:["sc-paypal-add-method.css"]}}static get properties(){return{liveMode:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"live-mode",reflect:!1,defaultValue:"true"},customerId:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"customer-id",reflect:!1},successUrl:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"success-url",reflect:!1},currency:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"currency",reflect:!1}}}static get states(){return{loading:{},loaded:{},error:{},paymentIntent:{}}}static get watchers(){return[{propName:"paymentIntent",methodName:"handlePaymentIntentCreate"}]}}