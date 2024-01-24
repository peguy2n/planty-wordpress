"use strict";const index=require("./index-00f0fc21.js"),utils=require("./utils-a086ed6e.js"),getters=require("./getters-3730f1ed.js"),util=require("./util-efd68af1.js"),mutations=require("./mutations-f21ba115.js"),mutations$1=require("./mutations-aba55e44.js"),{productDonation:productDonation}=utils.getSerializedState(),productDonationData=Object.keys(productDonation||{}).reduce(((t,e)=>{var o;const n=getters.getLineItemByProductId(e);return(null==n?void 0:n.id)&&(t[e]={...t[e],...(null==n?void 0:n.ad_hoc_amount)?{ad_hoc_amount:n.ad_hoc_amount}:{},...(null==n?void 0:n.price)?{selectedPrice:n.price}:{},custom_amount:(null===(o=t[e].amounts||[])||void 0===o?void 0:o.includes(n.ad_hoc_amount))?null:n.ad_hoc_amount}),t}),productDonation),{state:state,onChange:onChange,on:on,set:set,get:get,dispose:dispose}=index.createStore({...productDonationData},((t,e)=>JSON.stringify(t)!==JSON.stringify(e))),getValidAdHocAmount=t=>{const e=state[t],o=(e.amounts||[]).filter((t=>util.isInRange(t,e.selectedPrice)));return o.includes(null==e?void 0:e.ad_hoc_amount)?null==e?void 0:e.ad_hoc_amount:o[0]},getInRangeAmounts=t=>{const e=state[t];return(e.amounts||[]).filter((t=>util.isInRange(t,e.selectedPrice)))},updateDonationState=(t,e)=>{state[t]={...state[t],...e}},updateLineItem=(t,e)=>{const o=getters.getLineItemByProductId(t);return(null==o?void 0:o.id)?mutations.updateCheckoutLineItem({id:o.id,data:{...{price:o.price.id,...(null==o?void 0:o.ad_hoc_amount)?{ad_hoc_amount:null==o?void 0:o.ad_hoc_amount}:{}},...e}}):mutations.addCheckoutLineItem(e)};mutations$1.onChange("checkout",(()=>{Object.keys(state).forEach((t=>{var e;const o=getters.getLineItemByProductId(t);if(o)return set(t,{...state[t],selectedPrice:o.price,ad_hoc_amount:o.ad_hoc_amount,custom_amount:(null===(e=state[t].amounts||[])||void 0===e?void 0:e.includes(o.ad_hoc_amount))?null:o.ad_hoc_amount});set(t,{...state[t],selectedPrice:null,ad_hoc_amount:null,custom_amount:null})}))})),Object.keys(state).forEach((t=>{on("set",((e,o,n)=>{var u,i,a,d,s,l;if(e===t&&((null==o?void 0:o.selectedPrice)||(null==o?void 0:o.ad_hoc_amount)||(null==o?void 0:o.custom_amount))&&((null===(u=null==o?void 0:o.selectedPrice)||void 0===u?void 0:u.id)!==(null===(i=null==n?void 0:n.selectedPrice)||void 0===i?void 0:i.id)||(null==o?void 0:o.ad_hoc_amount)!==(null==n?void 0:n.ad_hoc_amount)||(null==o?void 0:o.custom_amount)!==(null==n?void 0:n.custom_amount))){const e=(null==o?void 0:o.custom_amount)&&util.isInRange(null==o?void 0:o.custom_amount,o.selectedPrice)?null==o?void 0:o.custom_amount:getValidAdHocAmount(t),n=(null===(a=o.selectedPrice)||void 0===a?void 0:a.id)||(null===(l=null===(s=null===(d=o.product)||void 0===d?void 0:d.prices)||void 0===s?void 0:s.data.find((t=>null==t?void 0:t.ad_hoc)))||void 0===l?void 0:l.id);if(!n)return;updateLineItem(t,{price:n,quantity:1,ad_hoc_amount:e})}}))})),exports.dispose=dispose,exports.get=get,exports.getInRangeAmounts=getInRangeAmounts,exports.on=on,exports.onChange=onChange,exports.set=set,exports.state=state,exports.updateDonationState=updateDonationState;