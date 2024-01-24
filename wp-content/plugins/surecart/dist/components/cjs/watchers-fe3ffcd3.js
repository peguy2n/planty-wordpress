"use strict";const index=require("./index-00f0fc21.js"),utils=require("./utils-a086ed6e.js"),util=require("./util-efd68af1.js"),index$1=require("./index-13ba9385.js"),productViewed=t=>{const e=new CustomEvent("scProductViewed",{detail:{id:null==t?void 0:t.id,name:null==t?void 0:t.name,permalink:null==t?void 0:t.permalink,prices:null==t?void 0:t.prices},bubbles:!0});document.dispatchEvent(e)},availablePrices=t=>{var e;return((null===(e=state[t])||void 0===e?void 0:e.prices)||[]).filter((t=>!(null==t?void 0:t.archived))).sort(((t,e)=>(null==t?void 0:t.position)-(null==e?void 0:e.position)))},getProduct=t=>{var e;return null!==(e=state[t])&&void 0!==e?e:null},isStockNeedsToBeChecked=t=>{var e,i,o,l;return!(!(null===(i=null===(e=null==state?void 0:state[t])||void 0===e?void 0:e.product)||void 0===i?void 0:i.stock_enabled)||(null===(l=null===(o=null==state?void 0:state[t])||void 0===o?void 0:o.product)||void 0===l?void 0:l.allow_out_of_stock_purchases))},isOptionSoldOut=(t,e,i)=>utils.isProductVariantOptionSoldOut(e,i,state[t].variantValues,state[t].product),isOptionMissing=(t,e,i)=>utils.isProductVariantOptionMissing(e,i,state[t].variantValues,state[t].product),isProductOutOfStock=t=>{var e,i,o,l;return!!isStockNeedsToBeChecked(t)&&((null===(i=null===(e=null==state?void 0:state[t])||void 0===e?void 0:e.selectedVariant)||void 0===i?void 0:i.id)?(null===(l=state[t].selectedVariant)||void 0===l?void 0:l.available_stock)<=0:(null===(o=state[t].product)||void 0===o?void 0:o.available_stock)<=0)},isSelectedVariantMissing=t=>{var e,i,o;return!!(null===(i=null===(e=null==state?void 0:state[t])||void 0===e?void 0:e.variants)||void 0===i?void 0:i.length)&&void 0===(null===(o=util.getVariantFromValues({variants:state[t].variants,values:state[t].variantValues}))||void 0===o?void 0:o.id)},getDefaultState=()=>{const{product:t={}}=utils.getSerializedState();return Object.values(t).reduce(((t,e)=>{const{selectedPrice:i,product:o,selectedVariant:l}=e||{},a={...e,quantity:1,total:null,dialog:null,busy:!1,error:null,adHocAmount:(null==i?void 0:i.amount)||null,disabled:(null==i?void 0:i.archived)||(null==o?void 0:o.archived),line_item:{price_id:null==i?void 0:i.id,quantity:1,...(null==i?void 0:i.ad_hoc)?{ad_hoc_amount:null==i?void 0:i.amount}:{}},variantValues:{...(null==l?void 0:l.option_1)?{option_1:null==l?void 0:l.option_1}:{},...(null==l?void 0:l.option_2)?{option_2:null==l?void 0:l.option_2}:{},...(null==l?void 0:l.option_3)?{option_3:null==l?void 0:l.option_3}:{}}};return t[o.id]=a,t}),{})||{}},availableSubscriptionPrices=t=>(availablePrices(t)||[]).filter((t=>null==t?void 0:t.recurring_interval)).sort(((t,e)=>(null==t?void 0:t.position)-(null==e?void 0:e.position))),availableNonSubscriptionPrices=t=>(availablePrices(t)||[]).filter((t=>!(null==t?void 0:t.recurring_interval))).sort(((t,e)=>(null==t?void 0:t.position)-(null==e?void 0:e.position))),getters=Object.freeze({__proto__:null,availablePrices:availablePrices,getProduct:getProduct,isStockNeedsToBeChecked:isStockNeedsToBeChecked,isOptionSoldOut:isOptionSoldOut,isOptionMissing:isOptionMissing,isProductOutOfStock:isProductOutOfStock,isSelectedVariantMissing:isSelectedVariantMissing,getDefaultState:getDefaultState,availableSubscriptionPrices:availableSubscriptionPrices,availableNonSubscriptionPrices:availableNonSubscriptionPrices}),defaultState=getDefaultState();Object.values(defaultState).filter((t=>null==t?void 0:t.isProductPage)).forEach((t=>{var e;(null===(e=null==t?void 0:t.product)||void 0===e?void 0:e.id)&&productViewed(null==t?void 0:t.product)}));const store=index.createStore(defaultState,((t,e)=>JSON.stringify(t)!==JSON.stringify(e))),{state:state,onChange:onChange,on:on,dispose:dispose,forceUpdate:forceUpdate}=store,setProduct=(t,e)=>{t&&(state[t]={...state[t],...e})};on("set",((t,e,i)=>{var o,l,a,d;(null===(o=null==e?void 0:e.selectedPrice)||void 0===o?void 0:o.id)!==(null===(l=null==i?void 0:i.selectedPrice)||void 0===l?void 0:l.id)&&updateSelectedPrice(t,e),(null===(a=null==e?void 0:e.selectedVariant)||void 0===a?void 0:a.id)!==(null===(d=null==i?void 0:i.selectedVariant)||void 0===d?void 0:d.id)&&handleStockWithSelectedVariant(t),(!i||["selectedPrice","adHocAmount","quantity"].some((t=>JSON.stringify(e[t])!==JSON.stringify(i[t]))))&&setLineItem(t),(!i||JSON.stringify(null==e?void 0:e.variantValues)!==JSON.stringify(null==i?void 0:i.variantValues))&&updateSelectedVariant(t,e)}));const updateSelectedVariant=(t,e)=>{const i=util.getVariantFromValues({variants:state[t].variants,values:null==e?void 0:e.variantValues});i&&setProduct(t,{selectedVariant:i})},handleStockWithSelectedVariant=t=>{var e,i,o;state[t].selectedVariant&&isStockNeedsToBeChecked&&(null===(e=state[t])||void 0===e?void 0:e.selectedVariant.available_stock)<(null===(i=state[t])||void 0===i?void 0:i.quantity)&&(state[t].quantity=(null===(o=state[t])||void 0===o?void 0:o.selectedVariant.available_stock)||1,index$1.speak(wp.i18n.sprintf(wp.i18n.__("There are just %d items left in stock, and the quantity has been adjusted to %d.","surecart"),state[t].quantity,state[t].quantity),"assertive"))},updateSelectedPrice=(t,e)=>{var i,o,l,a;setProduct(t,{total:state[t].adHocAmount||(null===(i=null==e?void 0:e.selectedPrice)||void 0===i?void 0:i.amount)||0,adHocAmount:null===(o=null==e?void 0:e.selectedPrice)||void 0===o?void 0:o.amount,disabled:(null===(l=null==e?void 0:e.selectedPrice)||void 0===l?void 0:l.archived)||(null===(a=state[t].product)||void 0===a?void 0:a.archived)})},setLineItem=t=>{var e,i,o,l,a,d,n,s;setProduct(t,{line_item:{price_id:null===(i=null===(e=state[t])||void 0===e?void 0:e.selectedPrice)||void 0===i?void 0:i.id,quantity:(null===(l=null===(o=state[t])||void 0===o?void 0:o.selectedPrice)||void 0===l?void 0:l.ad_hoc)?1:state[t].quantity,...(null===(d=null===(a=state[t])||void 0===a?void 0:a.selectedPrice)||void 0===d?void 0:d.ad_hoc)?{ad_hoc_amount:null===(n=state[t])||void 0===n?void 0:n.adHocAmount}:{},variant:null===(s=state[t].selectedVariant)||void 0===s?void 0:s.id}})};exports.availablePrices=availablePrices,exports.dispose=dispose,exports.forceUpdate=forceUpdate,exports.getters=getters,exports.isOptionMissing=isOptionMissing,exports.isOptionSoldOut=isOptionSoldOut,exports.isProductOutOfStock=isProductOutOfStock,exports.isSelectedVariantMissing=isSelectedVariantMissing,exports.on=on,exports.onChange=onChange,exports.setProduct=setProduct,exports.state=state;