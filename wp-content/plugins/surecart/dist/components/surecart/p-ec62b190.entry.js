import{r as t,c as e,h as i,F as s,a}from"./p-cc7ce8c7.js";import{a as r}from"./p-18e45a13.js";import{g as o}from"./p-b395feb7.js";import{a as n}from"./p-1c2e2695.js";import{F as l}from"./p-8617d8eb.js";import"./p-7ef0f71c.js";const c=(t,e,i="amount")=>t.replaceAll("{{"+i+"}}",e).replaceAll("{{ "+i+" }}",e);const d=".cancel-discount__abort-link{color:var(--sc-color-gray-500)}";const h=class{constructor(i){t(this,i);this.scCancel=e(this,"scCancel",7);this.scPreserved=e(this,"scPreserved",7);this.subscription=undefined;this.reason=undefined;this.comment=undefined;this.protocol=undefined;this.loading=undefined;this.error=undefined}replaceAmount(t){var e,i;if(!((e=this.protocol)===null||e===void 0?void 0:e.preservation_coupon)){return t}return c(t,o((i=this.protocol)===null||i===void 0?void 0:i.preservation_coupon))}async addDiscount(){var t,e;try{this.loading=true;this.subscription=await r({method:"PATCH",path:n(`surecart/v1/subscriptions/${(t=this.subscription)===null||t===void 0?void 0:t.id}/preserve`,{cancellation_act:{...!!this.comment?{comment:this.comment}:{},cancellation_reason_id:(e=this.reason)===null||e===void 0?void 0:e.id}})});this.scPreserved.emit()}catch(t){console.error(t);this.error=t}finally{this.loading=false}}render(){var t;const{preserve_title:e,preserve_description:s,preserve_button:a,cancel_link:r}=((t=this.protocol)===null||t===void 0?void 0:t.preservation_locales)||{};return i("div",{class:"cancel-discount"},i("sc-dashboard-module",{heading:this.replaceAmount(e),style:{"--sc-dashboard-module-spacing":"2em"}},i("span",{slot:"description"},this.replaceAmount(s)),i("sc-flex",{justifyContent:"flex-start"},i("sc-button",{type:"primary",onClick:()=>this.addDiscount()},a),i("sc-button",{class:"cancel-discount__abort-link",type:"text",onClick:()=>this.scCancel.emit()},r)),!!this.loading&&i("sc-block-ui",{spinner:true})))}};h.style=d;const u=".cancel-survey{color:var(--sc-color-gray-900)}.cancel-survey__abort-link{color:var(--sc-color-gray-500)}";const p=class{constructor(i){t(this,i);this.scAbandon=e(this,"scAbandon",7);this.scSubmitReason=e(this,"scSubmitReason",7);this.protocol=undefined;this.reasons=undefined;this.loading=undefined;this.selectedReason=undefined;this.comment=undefined;this.error=undefined}componentWillLoad(){if(!this.reasons){this.fetchReasons()}}handleSelectedReasonChange(){var t;if((t=this.selectedReason)===null||t===void 0?void 0:t.comment_enabled){setTimeout((()=>{this.textArea.triggerFocus()}),50)}}async fetchReasons(){try{this.loading=true;this.reasons=await r({path:"surecart/v1/cancellation_reasons"})}catch(t){console.error(t);this.error=t}finally{this.loading=false}}async handleSubmit(t){t.preventDefault();t.stopImmediatePropagation();try{this.scSubmitReason.emit({reason:this.selectedReason,comment:this.comment})}catch(t){console.error(t);this.error=t}}renderReasons(){if(this.loading){return i("sc-choice",null,i("sc-skeleton",null))}return(this.reasons||[]).map((t=>i("sc-choice",{value:t===null||t===void 0?void 0:t.id,name:"reason",onScChange:e=>{if(e.target.checked){this.selectedReason=t}}},t===null||t===void 0?void 0:t.label)))}render(){var t,e,s;const{reasons_title:a,reasons_description:r,skip_link:o}=((t=this.protocol)===null||t===void 0?void 0:t.preservation_locales)||{};if(this.loading){return i("sc-skeleton",null)}return i("div",{class:"cancel-survey"},i("sc-dashboard-module",{heading:a,style:{"--sc-dashboard-module-spacing":"2em"}},i("span",{slot:"description"},r),i("sc-form",{onScSubmit:t=>this.handleSubmit(t),style:{"--sc-form-row-spacing":"2em"}},i("sc-choices",{showLabel:false,label:wp.i18n.__("Choose a reason","surecart"),style:{"--columns":"2"},required:true},this.renderReasons()),((e=this.selectedReason)===null||e===void 0?void 0:e.comment_enabled)&&i("sc-textarea",{label:((s=this.selectedReason)===null||s===void 0?void 0:s.comment_prompt)||wp.i18n.__("Additional Comments","surecart"),required:true,ref:t=>this.textArea=t,onScInput:t=>this.comment=t.target.value}),i("sc-flex",{justifyContent:"flex-start"},i("sc-button",{type:"primary",submit:true},wp.i18n.__("Continue","surecart"),i("sc-icon",{name:"arrow-right",slot:"suffix"})),!!o&&i("sc-button",{class:"cancel-survey__abort-link",type:"text",onClick:()=>this.scAbandon.emit()},o)))))}static get watchers(){return{selectedReason:["handleSelectedReasonChange"]}}};p.style=u;const f=":host{display:block;position:relative}.subscription-cancel{display:grid;gap:0.5em}.subscription-cancel__terms{color:var(--sc-color-gray-600);font-size:var(--sc-font-size-small)}";const v=class{constructor(i){t(this,i);this.scAbandon=e(this,"scAbandon",7);this.scCancelled=e(this,"scCancelled",7);this.heading=undefined;this.backUrl=undefined;this.successUrl=undefined;this.subscription=undefined;this.protocol=undefined;this.reason=undefined;this.comment=undefined;this.loading=undefined;this.busy=undefined;this.error=undefined}async cancelSubscription(){var t,e;try{this.error="";this.busy=true;await r({path:n(`/surecart/v1/subscriptions/${(t=this.subscription)===null||t===void 0?void 0:t.id}/cancel`,{cancellation_act:{...!!this.comment?{comment:this.comment}:{},cancellation_reason_id:(e=this.reason)===null||e===void 0?void 0:e.id}}),method:"PATCH"});this.scCancelled.emit()}catch(t){this.error=(t===null||t===void 0?void 0:t.message)||wp.i18n.__("Something went wrong","surecart");this.busy=false}}renderContent(){var t,e;if(this.loading){return this.renderLoading()}return i(s,null,((t=this===null||this===void 0?void 0:this.protocol)===null||t===void 0?void 0:t.cancel_behavior)==="pending"?i("div",{slot:"description"},wp.i18n.__("Your plan will be canceled, but is still available until the end of your billing period on","surecart")," ",i("strong",null,i("sc-format-date",{type:"timestamp",date:(e=this===null||this===void 0?void 0:this.subscription)===null||e===void 0?void 0:e.current_period_end_at,month:"long",day:"numeric",year:"numeric"})),". ",wp.i18n.__("If you change your mind, you can renew your subscription.","surecart")):i("div",{slot:"description"},wp.i18n.__("Your plan will be canceled immediately. You cannot change your mind.","surecart")))}renderLoading(){return i("div",{style:{padding:"0.5em"}},i("sc-skeleton",{style:{width:"30%",marginBottom:"0.75em"}}),i("sc-skeleton",{style:{width:"20%",marginBottom:"0.75em"}}),i("sc-skeleton",{style:{width:"40%"}}))}render(){return i("sc-dashboard-module",{heading:this.heading||wp.i18n.__("Cancel your plan","surecart"),class:"subscription-cancel",error:this.error,style:{"--sc-dashboard-module-spacing":"1em"}},this.renderContent(),i("sc-flex",{justifyContent:"flex-start"},i("sc-button",{type:"primary",loading:this.loading||this.busy,disabled:this.loading||this.busy,onClick:()=>this.cancelSubscription()},wp.i18n.__("Cancel Plan","surecart")),i("sc-button",{style:{color:"var(--sc-color-gray-500"},type:"text",onClick:()=>this.scAbandon.emit(),loading:this.loading||this.busy,disabled:this.loading||this.busy},wp.i18n.__("Keep My Plan","surecart"))),this.busy&&i("sc-block-ui",null))}};v.style=f;const m=":host{display:block}.textarea{display:flex;align-items:center;position:relative;width:100%;font-family:var(--sc-input-font-family);font-weight:var(--sc-input-font-weight);line-height:var(--sc-line-height-normal);letter-spacing:var(--sc-input-letter-spacing);vertical-align:middle;transition:var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) border, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow,\n    var(--sc-input-transition, var(--sc-transition-medium)) background-color;cursor:text}.textarea--standard{background-color:var(--sc-input-background-color);border:solid var(--sc-input-border-width) var(--sc-input-border-color)}.textarea--standard:hover:not(.textarea--disabled){background-color:var(--sc-input-background-color-hover);border-color:var(--sc-input-border-color-hover)}.textarea--standard:hover:not(.textarea--disabled) .textarea__control{color:var(--sc-input-color-hover)}.textarea--standard.textarea--focused:not(.textarea--disabled){background-color:var(--sc-input-background-color-focus);border-color:var(--sc-input-border-color-focus);color:var(--sc-input-color-focus);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-input-focus-ring-color)}.textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control{color:var(--sc-input-color-focus)}.textarea--standard.textarea--disabled{background-color:var(--sc-input-background-color-disabled);border-color:var(--sc-input-border-color-disabled);opacity:0.5;cursor:not-allowed}.textarea--standard.textarea--disabled .textarea__control{color:var(--sc-input-color-disabled)}.textarea--standard.textarea--disabled .textarea__control::placeholder{color:var(--sc-input-placeholder-color-disabled)}.textarea--filled{border:none;background-color:var(--sc-input-filled-background-color);color:var(--sc-input-color)}.textarea--filled:hover:not(.textarea--disabled){background-color:var(--sc-input-filled-background-color-hover)}.textarea--filled.textarea--focused:not(.textarea--disabled){background-color:var(--sc-input-filled-background-color-focus);outline:var(--sc-focus-ring);outline-offset:var(--sc-focus-ring-offset)}.textarea--filled.textarea--disabled{background-color:var(--sc-input-filled-background-color-disabled);opacity:0.5;cursor:not-allowed}.textarea__control{flex:1 1 auto;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:1.4;color:var(--sc-input-color);border:none;background:none;box-shadow:none;cursor:inherit;-webkit-appearance:none}.textarea__control::-webkit-search-decoration,.textarea__control::-webkit-search-cancel-button,.textarea__control::-webkit-search-results-button,.textarea__control::-webkit-search-results-decoration{-webkit-appearance:none}.textarea__control::placeholder{color:var(--sc-input-placeholder-color);user-select:none}.textarea__control:focus{outline:none}.textarea--small{border-radius:var(--sc-input-border-radius-small);font-size:var(--sc-input-font-size-small)}.textarea--small .textarea__control{padding:0.5em var(--sc-input-spacing-small)}.textarea--medium{border-radius:var(--sc-input-border-radius-medium);font-size:var(--sc-input-font-size-medium)}.textarea--medium .textarea__control{padding:0.5em var(--sc-input-spacing-medium)}.textarea--large{border-radius:var(--sc-input-border-radius-large);font-size:var(--sc-input-font-size-large)}.textarea--large .textarea__control{padding:0.5em var(--sc-input-spacing-large)}.textarea--resize-none .textarea__control{resize:none}.textarea--resize-vertical .textarea__control{resize:vertical}.textarea--resize-auto .textarea__control{height:auto;resize:none}.textarea__char-limit-warning{margin-top:var(--sc-input-spacing-small);color:var(--sc-input-help-text-color);font-size:var(--sc-input-help-text-font-size-medium)}";const b=20;let g=0;const x=class{constructor(i){t(this,i);this.scChange=e(this,"scChange",7);this.scInput=e(this,"scInput",7);this.scBlur=e(this,"scBlur",7);this.scFocus=e(this,"scFocus",7);this.inputId=`textarea-${++g}`;this.helpId=`textarea-help-text-${g}`;this.labelId=`textarea-label-${g}`;this.hasFocus=false;this.showCharLimit=false;this.size="medium";this.name=undefined;this.value="";this.filled=false;this.label="";this.showLabel=true;this.help="";this.placeholder=undefined;this.rows=4;this.resize="vertical";this.disabled=false;this.readonly=false;this.minlength=undefined;this.maxlength=undefined;this.required=false;this.invalid=false;this.autocapitalize=undefined;this.autocorrect=undefined;this.autocomplete=undefined;this.autofocus=undefined;this.enterkeyhint=undefined;this.spellcheck=undefined;this.inputmode=undefined}handleRowsChange(){this.setTextareaHeight()}handleValueChange(){this.invalid=!this.input.checkValidity();this.showCharLimit=this.maxlength-this.value.length<=b}handleDisabledChange(){this.input.disabled=this.disabled;this.invalid=!this.input.checkValidity()}async triggerFocus(t){return this.input.focus(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){if(typeof t.top==="number")this.input.scrollTop=t.top;if(typeof t.left==="number")this.input.scrollLeft=t.left;return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s="preserve"){this.input.setRangeText(t,e,i,s);if(this.value!==this.input.value){this.value=this.input.value;this.scInput.emit()}if(this.value!==this.input.value){this.value=this.input.value;this.setTextareaHeight();this.scInput.emit();this.scChange.emit()}}async reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t);this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=false;this.scBlur.emit()}handleChange(){this.value=this.input.value;this.setTextareaHeight();this.scChange.emit()}handleFocus(){this.hasFocus=true;this.scFocus.emit()}handleInput(){this.value=this.input.value;this.setTextareaHeight();this.scInput.emit()}componentWillLoad(){if(!(window===null||window===void 0?void 0:window.ResizeObserver)){return}this.resizeObserver=new window.ResizeObserver((()=>this.setTextareaHeight()))}componentDidLoad(){this.formController=new l(this.el).addFormData();if(!(window===null||window===void 0?void 0:window.ResizeObserver)){return}this.resizeObserver.observe(this.input)}disconnectedCallback(){var t;(t=this.formController)===null||t===void 0?void 0:t.removeFormData();this.resizeObserver.unobserve(this.input)}setTextareaHeight(){if(this.resize==="auto"){this.input.style.height="auto";this.input.style.height=`${this.input.scrollHeight}px`}else{this.input.style.height=undefined}}render(){return i("div",{part:"form-control",class:{"form-control":true,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large"}},i("sc-form-control",{exportparts:"label, help-text, form-control",size:this.size,required:this.required,label:this.label,showLabel:this.showLabel,help:this.help,inputId:this.inputId,helpId:this.helpId,labelId:this.labelId,name:this.name},i("div",{part:"form-control-input",class:"form-control-input"},i("div",{part:"base",class:{textarea:true,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--invalid":this.invalid,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"}},i("textarea",{part:"textarea",ref:t=>this.input=t,id:"input",class:"textarea__control",name:this.name,value:this.value,disabled:this.disabled,readonly:this.readonly,required:this.required,placeholder:this.placeholder,rows:this.rows,minlength:this.minlength,maxlength:this.maxlength,autocapitalize:this.autocapitalize,autocorrect:this.autocorrect,autofocus:this.autofocus,spellcheck:this.spellcheck,enterkeyhint:this.enterkeyhint,inputmode:this.inputmode,"aria-describedby":"help-text",onChange:()=>this.handleChange(),onInput:()=>this.handleInput(),onFocus:()=>this.handleFocus(),onBlur:()=>this.handleBlur()})),this.showCharLimit&&i("div",{slot:"help",class:"textarea__char-limit-warning"},wp.i18n.sprintf(wp.i18n.__("%d characters remaining","surecart"),this.maxlength-this.input.value.length)))))}get el(){return a(this)}static get watchers(){return{rows:["handleRowsChange"],value:["handleValueChange"],disabled:["handleDisabledChange"]}}};x.style=m;export{h as sc_cancel_discount,p as sc_cancel_survey,v as sc_subscription_cancel,x as sc_textarea};
//# sourceMappingURL=p-ec62b190.entry.js.map