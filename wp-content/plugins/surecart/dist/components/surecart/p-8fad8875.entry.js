import{r as i,c as s,h as c,F as e,a as t}from"./p-cc7ce8c7.js";import{g as o}from"./p-f2e49975.js";import{s as r}from"./p-49b14288.js";import"./p-25433d0f.js";import"./p-f70181c4.js";import"./p-4d73f82a.js";import"./p-1c2e2695.js";import"./p-7ef0f71c.js";const l="sc-price-choices{display:block;position:relative}sc-block-ui{z-index:9}";const n=class{constructor(c){i(this,c);this.scRemoveLineItem=s(this,"scRemoveLineItem",7);this.scUpdateLineItem=s(this,"scUpdateLineItem",7);this.label=undefined;this.columns=1;this.required=true}handleChange(){this.el.querySelectorAll("sc-price-choice").forEach((i=>{var s;const c=i.querySelector("sc-choice")||i.querySelector("sc-choice-container");if(!(c===null||c===void 0?void 0:c.checked)){this.scRemoveLineItem.emit({price_id:i.priceId,quantity:i.quantity})}else{const e=o((s=r.checkout)===null||s===void 0?void 0:s.line_items,c.value);this.scUpdateLineItem.emit({price_id:i.priceId,quantity:(e===null||e===void 0?void 0:e.quantity)||(i===null||i===void 0?void 0:i.quantity)||1})}}))}render(){return c(e,null,c("sc-choices",{label:this.label,required:this.required,class:"loaded price-selector",style:{"--columns":this.columns.toString()}},c("slot",null)))}get el(){return t(this)}};n.style=l;export{n as sc_price_choices};
//# sourceMappingURL=p-8fad8875.entry.js.map