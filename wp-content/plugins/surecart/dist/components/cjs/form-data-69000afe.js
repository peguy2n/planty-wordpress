"use strict";class FormSubmitController{constructor(t,e){this.form=null,this.input=t,this.options={form:t=>{var e,i;return(null===(i=null===(e=this.closestElement("sc-form",t))||void 0===e?void 0:e.shadowRoot)||void 0===i?void 0:i.querySelector("form"))||this.closestElement("form",t)},name:t=>t.name,value:t=>t.value,disabled:t=>t.disabled,...e},this.form=this.options.form(this.input),this.handleFormData=this.handleFormData.bind(this)}closestElement(t,e){return e?e&&e!=document&&e!=window&&e.closest(t)||this.closestElement(t,e.getRootNode().host):null}addFormData(){this.form&&this.form.addEventListener("formdata",this.handleFormData)}removeFormData(){this.form&&this.form.removeEventListener("formdata",this.handleFormData)}handleFormData(t){const e=this.options.name(this.input),i=this.options.value(this.input);"string"==typeof e&&void 0!==i&&(Array.isArray(i)?i.forEach((i=>{i&&t.formData.append(e,i.toString())})):i&&t.formData.append(e,i.toString()))}}const parseFormData=t=>{var e;const{email:i,name:o,first_name:r,last_name:n,phone:s,password:a,shipping_city:l,shipping_country:m,shipping_line_1:d,shipping_line_2:p,shipping_postal_code:h,shipping_state:c,billing_city:_,billing_country:u,billing_line_1:f,billing_line_2:y,billing_postal_code:g,billing_state:b,"tax_identifier.number_type":v,"tax_identifier.number":F,...D}=t,w={...l?{city:l}:{},...m?{country:m}:{},...d?{line_1:d}:{},...p?{line_2:p}:{},...h?{postal_code:h}:{},...c?{state:c}:{}},E={..._?{city:_}:{},...u?{country:u}:{},...f?{line_1:f}:{},...y?{line_2:y}:{},...g?{postal_code:g}:{},...b?{state:b}:{}};return{...o?{name:o}:{},...i?{email:i}:{},...r?{first_name:r}:{},...n?{last_name:n}:{},...s?{phone:s}:{},...a?{password:a}:{},...Object.keys(w||{}).length?{shipping_address:w}:{},...Object.keys(E||{}).length?{billing_address:E}:{},...v&&F?{tax_identifier:{number:F,number_type:v}}:{},...(null===(e=Object.keys(D))||void 0===e?void 0:e.length)?{metadata:D}:{}}},reportChildrenValidity=async t=>{const e=[...t.shadowRoot.querySelectorAll("*")].filter((t=>"function"==typeof t.reportValidity));for(const t of e)if(!await t.reportValidity())return!1;return!0};exports.FormSubmitController=FormSubmitController,exports.parseFormData=parseFormData,exports.reportChildrenValidity=reportChildrenValidity;