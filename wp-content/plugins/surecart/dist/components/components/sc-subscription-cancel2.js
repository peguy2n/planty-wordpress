import{proxyCustomElement,HTMLElement,createEvent,h,Fragment}from"@stencil/core/internal/client";import{a as apiFetch}from"./fetch.js";import{d as defineCustomElement$9}from"./sc-alert2.js";import{d as defineCustomElement$8}from"./sc-block-ui2.js";import{d as defineCustomElement$7}from"./sc-button2.js";import{d as defineCustomElement$6}from"./sc-dashboard-module2.js";import{d as defineCustomElement$5}from"./sc-flex2.js";import{d as defineCustomElement$4}from"./sc-format-date2.js";import{d as defineCustomElement$3}from"./sc-icon2.js";import{d as defineCustomElement$2}from"./sc-skeleton2.js";import{d as defineCustomElement$1}from"./sc-spinner2.js";import{a as addQueryArgs}from"./add-query-args.js";const scSubscriptionCancelCss=":host{display:block;position:relative}.subscription-cancel{display:grid;gap:0.5em}.subscription-cancel__terms{color:var(--sc-color-gray-600);font-size:var(--sc-font-size-small)}",ScSubscriptionCancel=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scAbandon=createEvent(this,"scAbandon",7),this.scCancelled=createEvent(this,"scCancelled",7),this.heading=void 0,this.backUrl=void 0,this.successUrl=void 0,this.subscription=void 0,this.protocol=void 0,this.reason=void 0,this.comment=void 0,this.loading=void 0,this.busy=void 0,this.error=void 0}async cancelSubscription(){var e,s;try{this.error="",this.busy=!0,await apiFetch({path:addQueryArgs(`/surecart/v1/subscriptions/${null===(e=this.subscription)||void 0===e?void 0:e.id}/cancel`,{cancellation_act:{...this.comment?{comment:this.comment}:{},cancellation_reason_id:null===(s=this.reason)||void 0===s?void 0:s.id}}),method:"PATCH"}),this.scCancelled.emit()}catch(e){this.error=(null==e?void 0:e.message)||wp.i18n.__("Something went wrong","surecart"),this.busy=!1}}renderContent(){var e,s;return this.loading?this.renderLoading():h(Fragment,null,"pending"===(null===(e=null==this?void 0:this.protocol)||void 0===e?void 0:e.cancel_behavior)?h("div",{slot:"description"},wp.i18n.__("Your plan will be canceled, but is still available until the end of your billing period on","surecart")," ",h("strong",null,h("sc-format-date",{type:"timestamp",date:null===(s=null==this?void 0:this.subscription)||void 0===s?void 0:s.current_period_end_at,month:"long",day:"numeric",year:"numeric"})),". ",wp.i18n.__("If you change your mind, you can renew your subscription.","surecart")):h("div",{slot:"description"},wp.i18n.__("Your plan will be canceled immediately. You cannot change your mind.","surecart")))}renderLoading(){return h("div",{style:{padding:"0.5em"}},h("sc-skeleton",{style:{width:"30%",marginBottom:"0.75em"}}),h("sc-skeleton",{style:{width:"20%",marginBottom:"0.75em"}}),h("sc-skeleton",{style:{width:"40%"}}))}render(){return h("sc-dashboard-module",{heading:this.heading||wp.i18n.__("Cancel your plan","surecart"),class:"subscription-cancel",error:this.error,style:{"--sc-dashboard-module-spacing":"1em"}},this.renderContent(),h("sc-flex",{justifyContent:"flex-start"},h("sc-button",{type:"primary",loading:this.loading||this.busy,disabled:this.loading||this.busy,onClick:()=>this.cancelSubscription()},wp.i18n.__("Cancel Plan","surecart")),h("sc-button",{style:{color:"var(--sc-color-gray-500"},type:"text",onClick:()=>this.scAbandon.emit(),loading:this.loading||this.busy,disabled:this.loading||this.busy},wp.i18n.__("Keep My Plan","surecart"))),this.busy&&h("sc-block-ui",null))}static get style(){return scSubscriptionCancelCss}},[1,"sc-subscription-cancel",{heading:[1],backUrl:[1,"back-url"],successUrl:[1,"success-url"],subscription:[16],protocol:[16],reason:[16],comment:[1],loading:[32],busy:[32],error:[32]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-subscription-cancel","sc-alert","sc-block-ui","sc-button","sc-dashboard-module","sc-flex","sc-format-date","sc-icon","sc-skeleton","sc-spinner"].forEach((e=>{switch(e){case"sc-subscription-cancel":customElements.get(e)||customElements.define(e,ScSubscriptionCancel);break;case"sc-alert":customElements.get(e)||defineCustomElement$9();break;case"sc-block-ui":customElements.get(e)||defineCustomElement$8();break;case"sc-button":customElements.get(e)||defineCustomElement$7();break;case"sc-dashboard-module":customElements.get(e)||defineCustomElement$6();break;case"sc-flex":customElements.get(e)||defineCustomElement$5();break;case"sc-format-date":customElements.get(e)||defineCustomElement$4();break;case"sc-icon":customElements.get(e)||defineCustomElement$3();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$2();break;case"sc-spinner":customElements.get(e)||defineCustomElement$1()}}))}export{ScSubscriptionCancel as S,defineCustomElement as d};