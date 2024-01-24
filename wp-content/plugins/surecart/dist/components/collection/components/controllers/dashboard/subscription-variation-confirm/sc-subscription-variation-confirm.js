import{h}from"@stencil/core";import{__}from"@wordpress/i18n";import{addQueryArgs}from"@wordpress/url";import{getVariantFromValues}from"../../../../functions/util";export class ScSubscriptionVariationConfirm{constructor(){this.heading=void 0,this.product=void 0,this.price=void 0,this.subscription=void 0,this.busy=!1,this.variantValues=[],this.handleSubmit=this.handleSubmit.bind(this)}componentWillLoad(){var i;this.variantValues=null===(i=this.subscription)||void 0===i?void 0:i.variant_options}async handleSubmit(){var i,t,r,o;this.busy=!0;const e=getVariantFromValues({variants:null===(t=null===(i=this.product)||void 0===i?void 0:i.variants)||void 0===t?void 0:t.data,values:this.variantValues});return(null===(r=this.price)||void 0===r?void 0:r.ad_hoc)?window.location.assign(addQueryArgs(window.location.href,{action:"confirm_amount",price_id:null===(o=this.price)||void 0===o?void 0:o.id,variant:null==e?void 0:e.id})):window.location.assign(addQueryArgs(window.location.href,{action:"confirm",variant:null==e?void 0:e.id}))}buttonText(){var i,t,r,o;return(null===(i=this.price)||void 0===i?void 0:i.ad_hoc)?(null===(t=this.price)||void 0===t?void 0:t.id)===(null===(o=null===(r=this.subscription)||void 0===r?void 0:r.price)||void 0===o?void 0:o.id)?__("Update Amount","surecart"):__("Choose Amount","surecart"):__("Next","surecart")}render(){var i,t;return h("sc-dashboard-module",{heading:this.heading||__("Enter An Amount","surecart"),class:"subscription-switch"},h("sc-card",null,h("sc-form",{onScSubmit:this.handleSubmit},h("div",{class:"sc-product-variation-choice-wrap"},((null===(t=null===(i=this.product)||void 0===i?void 0:i.variant_options)||void 0===t?void 0:t.data)||[]).map((({name:i,values:t,id:r},o)=>{var e,s;return h("sc-select",{exportparts:"base:select__base, input, form-control, label, help-text, trigger, panel, caret, menu__base, spinner__base, empty",part:"name__input",value:(null===(s=null===(e=this.subscription)||void 0===e?void 0:e.variant_options)||void 0===s?void 0:s[o])||"",onScChange:i=>{this.variantValues[o]=i.detail.value},label:i,choices:null==t?void 0:t.map((i=>({label:i,value:i}))),unselect:!1,key:r})}))),h("sc-button",{type:"primary",full:!0,submit:!0,loading:this.busy},this.buttonText()," ",h("sc-icon",{name:"arrow-right",slot:"suffix"})))),this.busy&&h("sc-block-ui",{style:{zIndex:"9"}}))}static get is(){return"sc-subscription-variation-confirm"}static get originalStyleUrls(){return{$:["sc-subscription-variation-confirm.scss"]}}static get styleUrls(){return{$:["sc-subscription-variation-confirm.css"]}}static get properties(){return{heading:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"heading",reflect:!1},product:{type:"unknown",mutable:!1,complexType:{original:"Product",resolved:"Product",references:{Product:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:""}},price:{type:"unknown",mutable:!1,complexType:{original:"Price",resolved:"Price",references:{Price:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:""}},subscription:{type:"unknown",mutable:!1,complexType:{original:"Subscription",resolved:"Subscription",references:{Subscription:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:""}}}}static get states(){return{busy:{},variantValues:{}}}}