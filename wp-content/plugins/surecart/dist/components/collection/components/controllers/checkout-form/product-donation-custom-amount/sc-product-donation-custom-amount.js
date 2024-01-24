import{h,Host}from"@stencil/core";import{__}from"@wordpress/i18n";import{state as donationState}from"@store/product-donation";export class ScProductDonationCustomAmount{constructor(){this.productId=void 0,this.value=void 0}state(){return donationState[this.productId]}updateState(t){donationState[this.productId]={...donationState[this.productId],...t}}render(){var t,o,e,r,n,i,s,u,c,a;const d=!!(null===(t=this.state())||void 0===t?void 0:t.custom_amount);return h(Host,{class:{"sc-product-donation-custom-amount":!0,"sc-product-donation-custom-amount--has-value":!!this.value}},h("sc-choice-container",{value:`${null===(o=this.state())||void 0===o?void 0:o.custom_amount}`,"show-control":"false",checked:d,onClick:()=>this.priceInput.triggerFocus(),onKeyDown:t=>{this.priceInput.value=t.key,this.priceInput.triggerFocus()},role:"button"},h("sc-visually-hidden",null,__("Enter a custom amount.","surecart")),h("sc-price-input",{ref:t=>this.priceInput=t,currencyCode:(null===(r=null===(e=this.state())||void 0===e?void 0:e.selectedPrice)||void 0===r?void 0:r.currency)||(null===(n=null===window||void 0===window?void 0:window.scData)||void 0===n?void 0:n.currency)||"usd",showCode:!1,showLabel:!1,value:`${(null===(i=this.state())||void 0===i?void 0:i.custom_amount)||""}`,onScChange:t=>this.updateState({ad_hoc_amount:null,custom_amount:t.target.value}),min:null===(u=null===(s=this.state())||void 0===s?void 0:s.selectedPrice)||void 0===u?void 0:u.ad_hoc_min_amount,max:null===(a=null===(c=this.state())||void 0===c?void 0:c.selectedPrice)||void 0===a?void 0:a.ad_hoc_max_amount,style:{"--sc-input-border-color-focus":"var(--sc-input-border-color-hover)","--sc-focus-ring-color-primary":"transparent"}})))}static get is(){return"sc-product-donation-custom-amount"}static get originalStyleUrls(){return{$:["sc-product-donation-custom-amount.scss"]}}static get styleUrls(){return{$:["sc-product-donation-custom-amount.css"]}}static get properties(){return{productId:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Selected Product Id for the donation."},attribute:"product-id",reflect:!1},value:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Custom Amount of the donation."},attribute:"value",reflect:!1}}}static get elementRef(){return"el"}}