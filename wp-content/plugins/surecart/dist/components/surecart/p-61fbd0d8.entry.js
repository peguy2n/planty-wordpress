import{r as s,h as i}from"./p-cc7ce8c7.js";import{s as t}from"./p-09484d0e.js";const e=":host{display:block}.password{display:grid;gap:var(--sc-form-row-spacing, 0.75em)}.password__hint{padding-top:0.36rem;color:red}";let h,r;const d=class{constructor(i){s(this,i);this.size="medium";this.value="";this.pill=false;this.label=undefined;this.showLabel=true;this.help="";this.placeholder=undefined;this.disabled=false;this.readonly=false;this.required=false;this.autofocus=undefined;this.confirmation=false;this.name="password";this.confirmationLabel=undefined;this.confirmationPlaceholder=undefined;this.confirmationHelp=undefined;this.enableValidation=true;this.hintText=undefined;this.verifyText=undefined}async triggerFocus(s){return this.input.triggerFocus(s)}async reportValidity(){var s,i,e,h,r,d,a;(i=(s=this.input)===null||s===void 0?void 0:s.setCustomValidity)===null||i===void 0?void 0:i.call(s,"");(h=(e=this.confirmInput)===null||e===void 0?void 0:e.setCustomValidity)===null||h===void 0?void 0:h.call(e,"");if(this.confirmation){if(((r=this.confirmInput)===null||r===void 0?void 0:r.value)&&((d=this.input)===null||d===void 0?void 0:d.value)!==((a=this.confirmInput)===null||a===void 0?void 0:a.value)){this.confirmInput.setCustomValidity(wp.i18n.__("Password does not match.","surecart"));t(wp.i18n.__("Password does not match.","surecart"),"assertive")}}if(!!this.hintText){this.input.setCustomValidity(wp.i18n.__(this.hintText,"surecart"))}const o=await this.input.reportValidity();if(!o){return false}if(this.confirmInput){return this.confirmInput.reportValidity()}return o}handleVerification(){clearTimeout(r);r=setTimeout((()=>{this.verifyPassword()}),500)}handleValidate(){this.handleVerification();clearTimeout(h);h=setTimeout((()=>{this.validatePassword()}),500)}validatePassword(){var s,i,t;if(!this.enableValidation)return;if(((s=this.input)===null||s===void 0?void 0:s.value.trim().length)===0){this.hintText="";return}if(((i=this.input)===null||i===void 0?void 0:i.value.trim().length)<6){return this.hintText=wp.i18n.__("The password must be at least 6 characters in length.","surecart")}const e=/[-'`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/;if(!e.test((t=this.input)===null||t===void 0?void 0:t.value)){return this.hintText=wp.i18n.__("Passwords must contain a special character.","surecart")}this.hintText=""}verifyPassword(){var s,i,e,h,r,d,a;if(((s=this.confirmInput)===null||s===void 0?void 0:s.value)&&((i=this.input)===null||i===void 0?void 0:i.value)!==((e=this.confirmInput)===null||e===void 0?void 0:e.value)){this.verifyText=wp.i18n.__("Password does not match.","surecart");t(this.verifyText,"assertive");return}if(!!((h=this.input)===null||h===void 0?void 0:h.value)&&!!((r=this.confirmInput)===null||r===void 0?void 0:r.value)&&((d=this.input)===null||d===void 0?void 0:d.value)===((a=this.confirmInput)===null||a===void 0?void 0:a.value)){t(wp.i18n.__("Password is matched.","surecart"),"assertive")}this.verifyText=""}handleHintTextChange(){t(this.hintText,"assertive")}render(){var s;return i("div",{class:"password"},i("div",null,i("sc-input",{ref:s=>this.input=s,label:this.label,help:this.help,autofocus:this.autofocus,placeholder:this.placeholder,showLabel:this.showLabel,size:this.size?this.size:"medium",type:"password",name:"password",value:this.value,required:this.required,disabled:this.disabled,onScInput:()=>this.handleValidate()}),!!this.hintText&&i("small",{class:"password__hint"},this.hintText)),this.confirmation&&i("div",null,i("sc-input",{ref:s=>this.confirmInput=s,label:(s=this.confirmationLabel)!==null&&s!==void 0?s:wp.i18n.__("Confirm Password","surecart"),help:this.confirmationHelp,placeholder:this.confirmationPlaceholder,size:this.size?this.size:"medium",type:"password",value:this.value,onScInput:()=>this.handleVerification(),required:this.required,disabled:this.disabled}),!!this.verifyText&&i("small",{class:"password__hint"},this.verifyText)))}static get watchers(){return{hintText:["handleHintTextChange"]}}};d.style=e;export{d as sc_password};
//# sourceMappingURL=p-61fbd0d8.entry.js.map