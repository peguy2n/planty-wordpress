import{r as i,c as s,h as t}from"./p-cc7ce8c7.js";import{c as o}from"./p-7e81081d.js";import{s as e}from"./p-048f799d.js";import{s as l,o as n}from"./p-49b14288.js";import{a as d}from"./p-c06b2e12.js";import"./p-18e45a13.js";import"./p-1c2e2695.js";import"./p-4d73f82a.js";import"./p-25433d0f.js";import"./p-f70181c4.js";import"./p-7ef0f71c.js";const h=":host{display:block}";const a=class{constructor(t){i(this,t);this.scInput=s(this,"scInput",7);this.scFocus=s(this,"scFocus",7);this.scBlur=s(this,"scBlur",7);this.size="medium";this.value=null;this.pill=false;this.label=undefined;this.showLabel=true;this.help="";this.placeholder=undefined;this.disabled=false;this.readonly=false;this.required=false;this.invalid=false;this.autofocus=undefined;this.hasFocus=undefined}async reportValidity(){var i,s,t,o,e,l,n;if(!this.required){return await((s=(i=this.input)===null||i===void 0?void 0:i.reportValidity)===null||s===void 0?void 0:s.call(i))}(o=(t=this.input)===null||t===void 0?void 0:t.setCustomValidity)===null||o===void 0?void 0:o.call(t,"");if(!((e=this.input)===null||e===void 0?void 0:e.value.trim().length)){this.input.setCustomValidity(wp.i18n.__("Field must not be empty.","surecart"))}return await((n=(l=this.input)===null||l===void 0?void 0:l.reportValidity)===null||n===void 0?void 0:n.call(l))}async handleChange(){this.value=this.input.value;try{l.checkout=await o({id:l.checkout.id,data:{name:this.input.value}})}catch(i){console.error(i)}}handleSessionChange(){var i,s,t,o,n,h;if(this.value)return;const a=d("full_name");if(!e.loggedIn&&!!a){this.value=a;return}if(e.loggedIn){this.value=((s=(i=l===null||l===void 0?void 0:l.checkout)===null||i===void 0?void 0:i.customer)===null||s===void 0?void 0:s.name)||((t=l===null||l===void 0?void 0:l.checkout)===null||t===void 0?void 0:t.name)}else{this.value=((o=l===null||l===void 0?void 0:l.checkout)===null||o===void 0?void 0:o.name)||((h=(n=l===null||l===void 0?void 0:l.checkout)===null||n===void 0?void 0:n.customer)===null||h===void 0?void 0:h.name)}}componentWillLoad(){this.handleSessionChange();this.removeCheckoutListener=n("checkout",(()=>this.handleSessionChange()))}disconnectedCallback(){this.removeCheckoutListener()}render(){return t("sc-input",{type:"text",name:"name",ref:i=>this.input=i,value:this.value,label:this.label,help:this.help,autocomplete:"name",placeholder:this.placeholder,readonly:this.readonly,required:this.required,invalid:this.invalid,autofocus:this.autofocus,hasFocus:this.hasFocus,onScChange:()=>this.handleChange(),onScInput:()=>this.scInput.emit(),onScFocus:()=>this.scFocus.emit(),onScBlur:()=>this.scBlur.emit()})}};a.style=h;export{a as sc_customer_name};
//# sourceMappingURL=p-ebec2459.entry.js.map