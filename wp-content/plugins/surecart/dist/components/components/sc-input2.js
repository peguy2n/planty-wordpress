import{proxyCustomElement,HTMLElement,createEvent,h,Host}from"@stencil/core/internal/client";import{F as FormSubmitController}from"./form-data.js";import{d as defineCustomElement$2}from"./sc-form-control2.js";import{d as defineCustomElement$1}from"./sc-visually-hidden2.js";const scInputCss=":host{--focus-ring:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary);display:block;position:relative}.input__control[type=number]{-moz-appearance:textfield}.input__control::-webkit-outer-spin-button,.input__control::-webkit-inner-spin-button{-webkit-appearance:none}.input{flex:1 1 auto;display:inline-flex;align-items:center;justify-content:start;position:relative;width:100%;box-sizing:border-box;font-family:var(--sc-input-font-family);font-weight:var(--sc-input-font-weight);letter-spacing:var(--sc-input-letter-spacing);background-color:var(--sc-input-background-color);border:solid 1px var(--sc-input-border-color, var(--sc-input-border));vertical-align:middle;box-shadow:var(--sc-input-box-shadow);transition:var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) border, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow;cursor:text}.input:hover:not(.input--disabled){background-color:var(--sc-input-background-color-hover);border-color:var(--sc-input-border-color-hover);z-index:7}.input:hover:not(.input--disabled) .input__control{color:var(--sc-input-color-hover)}.input.input--focused:not(.input--disabled){background-color:var(--sc-input-background-color-focus);border-color:var(--sc-input-border-color-focus);box-shadow:var(--focus-ring);z-index:8}.input.input--focused:not(.input--disabled) .input__control{color:var(--sc-input-color-focus)}.input.input--disabled{background-color:var(--sc-input-background-color-disabled);border-color:var(--sc-input-border-color-disabled);opacity:0.5;cursor:not-allowed}.input.input--disabled .input__control{color:var(--sc-input-color-disabled)}.input.input--disabled .input__control::placeholder{color:var(--sc-input-placeholder-color-disabled)}.input__control{flex:1 1 auto;font-family:inherit;font-size:inherit;font-weight:inherit;min-width:0;height:100%;color:var(--sc-input-color);border:none;background:none;box-shadow:none;padding:0;margin:0;cursor:inherit;-webkit-appearance:none;box-sizing:border-box;width:100%}.input__control::-webkit-search-decoration,.input__control::-webkit-search-cancel-button,.input__control::-webkit-search-results-button,.input__control::-webkit-search-results-decoration{-webkit-appearance:none}.input__control:-webkit-autofill,.input__control:-webkit-autofill:hover,.input__control:-webkit-autofill:focus,.input__control:-webkit-autofill:active{box-shadow:0 0 0 var(--sc-input-height-large) var(--sc-input-background-color-hover) inset !important;-webkit-text-fill-color:var(--sc-input-color)}.input__control::placeholder{color:var(--sc-input-placeholder-color);user-select:none}.input__control:focus{outline:none}.input__prefix,.input__suffix{display:inline-flex;flex:0 0 auto;align-items:center;color:var(--sc-input-color);cursor:default}.input__prefix ::slotted(sc-icon),.input__suffix ::slotted(sc-icon){color:var(--sc-input-icon-color)}.input--small{border-radius:var(--sc-input-border-radius-small);font-size:var(--sc-input-font-size-small);height:var(--sc-input-height-small)}.input--small .input__control{height:calc(var(--sc-input-height-small) - var(--sc-input-border-width) * 2);padding:0 var(--sc-input-spacing-small)}.input--small .input__clear,.input--small .input__password-toggle{margin-right:var(--sc-input-spacing-small)}.input--small .input__prefix ::slotted(*){margin-left:var(--sc-input-spacing-small)}.input--small .input__suffix ::slotted(*){margin-right:var(--sc-input-spacing-small)}.input--small .input__suffix ::slotted(sc-dropdown){margin:0}.input--medium{border-radius:var(--sc-input-border-radius-medium);font-size:var(--sc-input-font-size-medium);height:var(--sc-input-height-medium)}.input--medium .input__control{height:calc(var(--sc-input-height-medium) - var(--sc-input-border-width) * 2);padding:0 var(--sc-input-spacing-medium)}.input--medium .input__clear,.input--medium .input__password-toggle{margin-right:var(--sc-input-spacing-medium)}.input--medium .input__prefix ::slotted(*){margin-left:var(--sc-input-spacing-medium) !important}.input--medium .input__suffix ::slotted(:not(sc-button[size=medium])){margin-right:var(--sc-input-spacing-medium) !important}.input--medium .input__suffix ::slotted(sc-tag){margin-right:var(--sc-input-spacing-small) !important}.input--medium .input__suffix ::slotted(sc-dropdown){margin:3px}.input--large{border-radius:var(--sc-input-border-radius-large);font-size:var(--sc-input-font-size-large);height:var(--sc-input-height-large)}.input--large .input__control{height:calc(var(--sc-input-height-large) - var(--sc-input-border-width) * 2);padding:0 var(--sc-input-spacing-large)}.input--large .input__clear,.input--large .input__password-toggle{margin-right:var(--sc-input-spacing-large)}.input--large .input__prefix ::slotted(*){margin-left:var(--sc-input-spacing-large)}.input--large .input__suffix ::slotted(*){margin-right:var(--sc-input-spacing-large)}.input--large .input__suffix ::slotted(sc-dropdown){margin:3px}.input--pill.input--small{border-radius:var(--sc-input-height-small)}.input--pill.input--medium{border-radius:var(--sc-input-height-medium)}.input--pill.input--large{border-radius:var(--sc-input-height-large)}.input__clear,.input__password-toggle{display:inline-flex;align-items:center;font-size:inherit;color:var(--sc-input-icon-color);border:none;background:none;padding:0;transition:var(--sc-input-transition, var(--sc-transition-medium)) color;cursor:pointer}.input__clear:hover,.input__password-toggle:hover{color:var(--sc-input-icon-color-hover)}.input__clear:focus,.input__password-toggle:focus{outline:none}.input--empty .input__clear{visibility:hidden}.input--squared{border-radius:0}.input--squared-top{border-top-left-radius:0;border-top-right-radius:0}.input--squared-bottom{border-bottom-left-radius:0;border-bottom-right-radius:0}.input--squared-left{border-top-left-radius:0;border-bottom-left-radius:0}.input--squared-right{border-top-right-radius:0;border-bottom-right-radius:0}";let id=0;const ScInput=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scChange=createEvent(this,"scChange",7),this.scClear=createEvent(this,"scClear",7),this.scInput=createEvent(this,"scInput",7),this.scFocus=createEvent(this,"scFocus",7),this.scBlur=createEvent(this,"scBlur",7),this.inputId="input-"+ ++id,this.helpId=`input-help-text-${id}`,this.labelId=`input-label-${id}`,this.squared=void 0,this.squaredBottom=void 0,this.squaredTop=void 0,this.squaredLeft=void 0,this.squaredRight=void 0,this.hidden=!1,this.type="text",this.size="medium",this.name=void 0,this.value="",this.pill=!1,this.label=void 0,this.showLabel=!0,this.help="",this.clearable=!1,this.togglePassword=!1,this.placeholder=void 0,this.disabled=!1,this.readonly=!1,this.minlength=void 0,this.maxlength=void 0,this.min=void 0,this.max=void 0,this.step=void 0,this.pattern=void 0,this.required=!1,this.invalid=!1,this.autocorrect=void 0,this.autocomplete=void 0,this.autofocus=void 0,this.spellcheck=void 0,this.inputmode=void 0,this.hasFocus=void 0,this.isPasswordVisible=!1}async reportValidity(){return this.input.reportValidity()}async triggerFocus(t){return this.input.focus(t)}async setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}async triggerBlur(){return this.input.blur()}select(){return this.input.select()}handleBlur(){this.hasFocus=!1,this.scBlur.emit()}handleFocus(){this.hasFocus=!0,this.scFocus.emit()}handleChange(){this.value=this.input.value,this.scChange.emit()}handleInput(){this.value=this.input.value,this.scInput.emit()}handleClearClick(t){this.value="",this.scClear.emit(),this.scInput.emit(),this.scChange.emit(),this.input.focus(),t.stopPropagation()}handlePasswordToggle(){this.isPasswordVisible=!this.isPasswordVisible}handleFocusChange(){setTimeout((()=>{this.hasFocus&&this.input?this.input.focus():this.input.blur()}),0)}handleValueChange(){this.input&&(this.invalid=!this.input.checkValidity())}componentDidLoad(){this.formController=new FormSubmitController(this.el).addFormData(),this.handleFocusChange()}disconnectedCallback(){var t;null===(t=this.formController)||void 0===t||t.removeFormData()}render(){var t;return h(Host,{hidden:this.hidden},h("sc-form-control",{exportparts:"label, help-text, form-control",size:this.size,required:this.required,label:this.label,showLabel:this.showLabel,help:this.help,inputId:this.inputId,helpId:this.helpId,labelId:this.labelId,name:this.name},h("slot",{name:"label-end",slot:"label-end"}),h("div",{part:"base",class:{input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--focused":this.hasFocus,"input--invalid":this.invalid,"input--disabled":this.disabled,"input--squared":this.squared,"input--squared-bottom":this.squaredBottom,"input--squared-top":this.squaredTop,"input--squared-left":this.squaredLeft,"input--squared-right":this.squaredRight}},h("span",{part:"prefix",class:"input__prefix"},h("slot",{name:"prefix"})),h("slot",null,h("input",{part:"input",id:this.inputId,class:"input__control",ref:t=>this.input=t,type:"password"===this.type&&this.isPasswordVisible?"text":this.type,name:this.name,disabled:this.disabled,readonly:this.readonly,required:this.required,placeholder:this.placeholder,minlength:this.minlength,maxlength:this.maxlength,min:this.min,max:this.max,step:this.step,autocomplete:this.autocomplete,autocorrect:this.autocorrect,autofocus:this.autofocus,spellcheck:this.spellcheck,pattern:this.pattern,inputmode:this.inputmode,"aria-label":this.label,"aria-labelledby":this.labelId,"aria-invalid":!!this.invalid,value:this.value,onChange:()=>this.handleChange(),onInput:()=>this.handleInput(),onFocus:()=>this.handleFocus(),onBlur:()=>this.handleBlur()})),h("span",{part:"suffix",class:"input__suffix"},h("slot",{name:"suffix"})),this.clearable&&(null===(t=this.value)||void 0===t?void 0:t.length)>0&&h("button",{part:"clear-button",class:"input__clear",type:"button",onClick:t=>this.handleClearClick(t),tabindex:"-1"},h("slot",{name:"clear-icon"},h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x"},h("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),h("line",{x1:"6",y1:"6",x2:"18",y2:"18"})))))))}get el(){return this}static get watchers(){return{hasFocus:["handleFocusChange"],value:["handleValueChange"]}}static get style(){return scInputCss}},[1,"sc-input",{squared:[4],squaredBottom:[4,"squared-bottom"],squaredTop:[4,"squared-top"],squaredLeft:[4,"squared-left"],squaredRight:[4,"squared-right"],hidden:[4],type:[513],size:[513],name:[513],value:[1537],pill:[516],label:[1],showLabel:[4,"show-label"],help:[1],clearable:[4],togglePassword:[4,"toggle-password"],placeholder:[1],disabled:[1540],readonly:[516],minlength:[2],maxlength:[2],min:[8],max:[8],step:[2],pattern:[1],required:[516],invalid:[1540],autocorrect:[1],autocomplete:[1],autofocus:[4],spellcheck:[4],inputmode:[1],hasFocus:[1540,"has-focus"],isPasswordVisible:[32],reportValidity:[64],triggerFocus:[64],setCustomValidity:[64],triggerBlur:[64]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-input","sc-form-control","sc-visually-hidden"].forEach((t=>{switch(t){case"sc-input":customElements.get(t)||customElements.define(t,ScInput);break;case"sc-form-control":customElements.get(t)||defineCustomElement$2();break;case"sc-visually-hidden":customElements.get(t)||defineCustomElement$1()}}))}export{ScInput as S,defineCustomElement as d};