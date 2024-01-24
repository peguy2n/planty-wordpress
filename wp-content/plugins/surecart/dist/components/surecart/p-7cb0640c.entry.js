import{r as n,h as t,a as i}from"./p-cc7ce8c7.js";import{c as A,a as e}from"./p-112455b1.js";import{c as r}from"./p-ea19f1ec.js";import{z as N}from"./p-121438f5.js";var s=A((function(n,t){!function(t,i){n.exports=i()}(e,(function(){return(()=>{var n={607:function(n,t,i){var A=this&&this.__assign||function(){return A=Object.assign||function(n){for(var t,i=1,A=arguments.length;i<A;i++)for(var e in t=arguments[i])Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n},A.apply(this,arguments)},e=this&&this.__values||function(n){var t="function"==typeof Symbol&&Symbol.iterator,i=t&&n[t],A=0;if(i)return i.call(n);if(n&&"number"==typeof n.length)return{next:function(){return n&&A>=n.length&&(n=void 0),{value:n&&n[A++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},r=this&&this.__read||function(n,t){var i="function"==typeof Symbol&&n[Symbol.iterator];if(!i)return n;var A,e,r=i.call(n),N=[];try{for(;(void 0===t||t-- >0)&&!(A=r.next()).done;)N.push(A.value)}catch(n){e={error:n}}finally{try{A&&!A.done&&(i=r.return)&&i.call(r)}finally{if(e)throw e.error}}return N},N=this&&this.__spreadArray||function(n,t,i){if(i||2===arguments.length)for(var A,e=0,r=t.length;e<r;e++)!A&&e in t||(A||(A=Array.prototype.slice.call(t,0,e)),A[e]=t[e]);return n.concat(A||Array.prototype.slice.call(t))},s=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(t,"__esModule",{value:!0}),t.formatAddress=void 0;var C=s(i(726)),O=function(n,t){return t in n},l={"%N":"name","%O":"organization","%A":"addressLines","%D":"dependentLocality","%C":"locality","%S":"administrativeArea","%Z":"postalCode","%X":"sortingCode"},o=function(n){return O(l,n)?l[n]:null},Z=function(n,t){return!!t&&("addressLines"===t?n.addressLines&&n.addressLines.length>0:O(n,t)&&n[t])};t.formatAddress=function(n){var t,i,s,l=function(n){var t,i,A=[],r="",N=!1;try{for(var s=e(n),C=s.next();!C.done;C=s.next()){var O=C.value;N?(N=!1,A.push("%"+O)):"%"===O?(r.length>0&&(A.push(r),r=""),N=!0):r+=O}}catch(n){t={error:n}}finally{try{C&&!C.done&&(i=s.return)&&i.call(s)}finally{if(t)throw t.error}}return r.length>0&&A.push(r),A}((s=(s=(n=function(n){return A(A({},n),{addressLines:n.addressLines?n.addressLines.filter(Boolean):void 0})}(n)).postalCountry||"ZZ").toUpperCase(),O(C.default,s)?C.default[s]:C.default.ZZ)),d=function(n,t){var i,A,N=[];try{for(var s=e(n.entries()),C=s.next();!C.done;C=s.next()){var O=r(C.value,2),l=O[0],d=O[1];if("%n"!==d){var a=o(d);a?Z(t,a)&&N.push(d):(l===n.length-l||"%n"===n[l+1]||Z(t,o(n[l+1])))&&(0===l||"%n"===n[l-1]||N.length>0&&null!==o(N[N.length-1]))&&N.push(d)}else N.push(d)}}catch(n){i={error:n}}finally{try{C&&!C.done&&(A=s.return)&&A.call(s)}finally{if(i)throw i.error}}return N}(l,n),a=[],u="";try{for(var c=e(d),S=c.next();!S.done;S=c.next()){var v=S.value;if("%n"!==v){var h=o(v);if(h)if("addressLines"===h){var f=n.addressLines;f.length>0&&(u+=f[0],f.length>1&&(a.push(u),u="",a.push.apply(a,N([],r(f.splice(1)),!1))))}else u+=n[h];else u+=v}else u.length>0&&(a.push(u),u="")}}catch(n){t={error:n}}finally{try{S&&!S.done&&(i=c.return)&&i.call(c)}finally{if(t)throw t.error}}return u.length>0&&a.push(u),a}},726:n=>{n.exports=JSON.parse('{"AC":"%N%n%O%n%A%n%C%n%Z","AD":"%N%n%O%n%A%n%Z %C","AE":"%N%n%O%n%A%n%S","AF":"%N%n%O%n%A%n%C%n%Z","AI":"%N%n%O%n%A%n%C%n%Z","AL":"%N%n%O%n%A%n%Z%n%C","AM":"%N%n%O%n%A%n%Z%n%C%n%S","AR":"%N%n%O%n%A%n%Z %C%n%S","AS":"%N%n%O%n%A%n%C %S %Z","AT":"%O%n%N%n%A%n%Z %C","AU":"%O%n%N%n%A%n%C %S %Z","AX":"%O%n%N%n%A%nAX-%Z %C%nÅLAND","AZ":"%N%n%O%n%A%nAZ %Z %C","BA":"%N%n%O%n%A%n%Z %C","BB":"%N%n%O%n%A%n%C, %S %Z","BD":"%N%n%O%n%A%n%C - %Z","BE":"%O%n%N%n%A%n%Z %C","BF":"%N%n%O%n%A%n%C %X","BG":"%N%n%O%n%A%n%Z %C","BH":"%N%n%O%n%A%n%C %Z","BL":"%O%n%N%n%A%n%Z %C %X","BM":"%N%n%O%n%A%n%C %Z","BN":"%N%n%O%n%A%n%C %Z","BR":"%O%n%N%n%A%n%D%n%C-%S%n%Z","BS":"%N%n%O%n%A%n%C, %S","BT":"%N%n%O%n%A%n%C %Z","BY":"%O%n%N%n%A%n%Z, %C%n%S","CA":"%N%n%O%n%A%n%C %S %Z","CC":"%O%n%N%n%A%n%C %S %Z","CH":"%O%n%N%n%A%nCH-%Z %C","CI":"%N%n%O%n%X %A %C %X","CL":"%N%n%O%n%A%n%Z %C%n%S","CN":"%Z%n%S%C%D%n%A%n%O%n%N","CO":"%N%n%O%n%A%n%C, %S, %Z","CR":"%N%n%O%n%A%n%S, %C%n%Z","CU":"%N%n%O%n%A%n%C %S%n%Z","CV":"%N%n%O%n%A%n%Z %C%n%S","CX":"%O%n%N%n%A%n%C %S %Z","CY":"%N%n%O%n%A%n%Z %C","CZ":"%N%n%O%n%A%n%Z %C","DE":"%N%n%O%n%A%n%Z %C","DK":"%N%n%O%n%A%n%Z %C","DO":"%N%n%O%n%A%n%Z %C","DZ":"%N%n%O%n%A%n%Z %C","EC":"%N%n%O%n%A%n%Z%n%C","EE":"%N%n%O%n%A%n%Z %C","EG":"%N%n%O%n%A%n%C%n%S%n%Z","EH":"%N%n%O%n%A%n%Z %C","ES":"%N%n%O%n%A%n%Z %C %S","ET":"%N%n%O%n%A%n%Z %C","FI":"%O%n%N%n%A%nFI-%Z %C","FK":"%N%n%O%n%A%n%C%n%Z","FM":"%N%n%O%n%A%n%C %S %Z","FO":"%N%n%O%n%A%nFO%Z %C","FR":"%O%n%N%n%A%n%Z %C","GB":"%N%n%O%n%A%n%C%n%Z","GE":"%N%n%O%n%A%n%Z %C","GF":"%O%n%N%n%A%n%Z %C %X","GG":"%N%n%O%n%A%n%C%nGUERNSEY%n%Z","GI":"%N%n%O%n%A%nGIBRALTAR%n%Z","GL":"%N%n%O%n%A%n%Z %C","GN":"%N%n%O%n%Z %A %C","GP":"%O%n%N%n%A%n%Z %C %X","GR":"%N%n%O%n%A%n%Z %C","GS":"%N%n%O%n%A%n%n%C%n%Z","GT":"%N%n%O%n%A%n%Z- %C","GU":"%N%n%O%n%A%n%C %Z","GW":"%N%n%O%n%A%n%Z %C","HK":"%S%n%C%n%A%n%O%n%N","HM":"%O%n%N%n%A%n%C %S %Z","HN":"%N%n%O%n%A%n%C, %S%n%Z","HR":"%N%n%O%n%A%nHR-%Z %C","HT":"%N%n%O%n%A%nHT%Z %C","HU":"%N%n%O%n%C%n%A%n%Z","ID":"%N%n%O%n%A%n%C%n%S %Z","IE":"%N%n%O%n%A%n%D%n%C%n%S%n%Z","IL":"%N%n%O%n%A%n%C %Z","IM":"%N%n%O%n%A%n%C%n%Z","IN":"%N%n%O%n%A%n%C %Z%n%S","IO":"%N%n%O%n%A%n%C%n%Z","IQ":"%O%n%N%n%A%n%C, %S%n%Z","IR":"%O%n%N%n%S%n%C, %D%n%A%n%Z","IS":"%N%n%O%n%A%n%Z %C","IT":"%N%n%O%n%A%n%Z %C %S","JE":"%N%n%O%n%A%n%C%nJERSEY%n%Z","JM":"%N%n%O%n%A%n%C%n%S %X","JO":"%N%n%O%n%A%n%C %Z","JP":"〒%Z%n%S%n%A%n%O%n%N","KE":"%N%n%O%n%A%n%C%n%Z","KG":"%N%n%O%n%A%n%Z %C","KH":"%N%n%O%n%A%n%C %Z","KI":"%N%n%O%n%A%n%S%n%C","KN":"%N%n%O%n%A%n%C, %S","KP":"%Z%n%S%n%C%n%A%n%O%n%N","KR":"%S %C%D%n%A%n%O%n%N%n%Z","KW":"%N%n%O%n%A%n%Z %C","KY":"%N%n%O%n%A%n%S %Z","KZ":"%Z%n%S%n%C%n%A%n%O%n%N","LA":"%N%n%O%n%A%n%Z %C","LB":"%N%n%O%n%A%n%C %Z","LI":"%O%n%N%n%A%nFL-%Z %C","LK":"%N%n%O%n%A%n%C%n%Z","LR":"%N%n%O%n%A%n%Z %C","LS":"%N%n%O%n%A%n%C %Z","LT":"%O%n%N%n%A%nLT-%Z %C","LU":"%O%n%N%n%A%nL-%Z %C","LV":"%N%n%O%n%A%n%C, %Z","MA":"%N%n%O%n%A%n%Z %C","MC":"%N%n%O%n%A%nMC-%Z %C %X","MD":"%N%n%O%n%A%nMD-%Z %C","ME":"%N%n%O%n%A%n%Z %C","MF":"%O%n%N%n%A%n%Z %C %X","MG":"%N%n%O%n%A%n%Z %C","MH":"%N%n%O%n%A%n%C %S %Z","MK":"%N%n%O%n%A%n%Z %C","MM":"%N%n%O%n%A%n%C, %Z","MN":"%N%n%O%n%A%n%C%n%S %Z","MO":"%A%n%O%n%N","MP":"%N%n%O%n%A%n%C %S %Z","MQ":"%O%n%N%n%A%n%Z %C %X","MT":"%N%n%O%n%A%n%C %Z","MU":"%N%n%O%n%A%n%Z%n%C","MV":"%N%n%O%n%A%n%C %Z","MW":"%N%n%O%n%A%n%C %X","MX":"%N%n%O%n%A%n%D%n%Z %C, %S","MY":"%N%n%O%n%A%n%D%n%Z %C%n%S","MZ":"%N%n%O%n%A%n%Z %C%S","NA":"%N%n%O%n%A%n%C%n%Z","NC":"%O%n%N%n%A%n%Z %C %X","NE":"%N%n%O%n%A%n%Z %C","NF":"%O%n%N%n%A%n%C %S %Z","NG":"%N%n%O%n%A%n%D%n%C %Z%n%S","NI":"%N%n%O%n%A%n%Z%n%C, %S","NL":"%O%n%N%n%A%n%Z %C","NO":"%N%n%O%n%A%n%Z %C","NP":"%N%n%O%n%A%n%C %Z","NR":"%N%n%O%n%A%n%S","NZ":"%N%n%O%n%A%n%D%n%C %Z","OM":"%N%n%O%n%A%n%Z%n%C","PA":"%N%n%O%n%A%n%C%n%S","PE":"%N%n%O%n%A%n%C %Z%n%S","PF":"%N%n%O%n%A%n%Z %C %S","PG":"%N%n%O%n%A%n%C %Z %S","PH":"%N%n%O%n%A%n%D, %C%n%Z %S","PK":"%N%n%O%n%A%n%C-%Z","PL":"%N%n%O%n%A%n%Z %C","PM":"%O%n%N%n%A%n%Z %C %X","PN":"%N%n%O%n%A%n%C%n%Z","PR":"%N%n%O%n%A%n%C PR %Z","PT":"%N%n%O%n%A%n%Z %C","PW":"%N%n%O%n%A%n%C %S %Z","PY":"%N%n%O%n%A%n%Z %C","RE":"%O%n%N%n%A%n%Z %C %X","RO":"%N%n%O%n%A%n%Z %C","RS":"%N%n%O%n%A%n%Z %C","RU":"%N%n%O%n%A%n%C%n%S%n%Z","SA":"%N%n%O%n%A%n%C %Z","SC":"%N%n%O%n%A%n%C%n%S","SD":"%N%n%O%n%A%n%C%n%Z","SE":"%O%n%N%n%A%nSE-%Z %C","SG":"%N%n%O%n%A%nSINGAPORE %Z","SH":"%N%n%O%n%A%n%C%n%Z","SI":"%N%n%O%n%A%nSI-%Z %C","SJ":"%N%n%O%n%A%n%Z %C","SK":"%N%n%O%n%A%n%Z %C","SM":"%N%n%O%n%A%n%Z %C","SN":"%N%n%O%n%A%n%Z %C","SO":"%N%n%O%n%A%n%C, %S %Z","SR":"%N%n%O%n%A%n%C%n%S","SV":"%N%n%O%n%A%n%Z-%C%n%S","SZ":"%N%n%O%n%A%n%C%n%Z","TA":"%N%n%O%n%A%n%C%n%Z","TC":"%N%n%O%n%A%n%C%n%Z","TH":"%N%n%O%n%A%n%D %C%n%S %Z","TJ":"%N%n%O%n%A%n%Z %C","TM":"%N%n%O%n%A%n%Z %C","TN":"%N%n%O%n%A%n%Z %C","TR":"%N%n%O%n%A%n%Z %C/%S","TV":"%N%n%O%n%A%n%C%n%S","TW":"%Z%n%S%C%n%A%n%O%n%N","TZ":"%N%n%O%n%A%n%Z %C","UA":"%N%n%O%n%A%n%C%n%S%n%Z","UM":"%N%n%O%n%A%n%C %S %Z","US":"%N%n%O%n%A%n%C, %S %Z","UY":"%N%n%O%n%A%n%Z %C %S","UZ":"%N%n%O%n%A%n%Z %C%n%S","VA":"%N%n%O%n%A%n%Z %C","VC":"%N%n%O%n%A%n%C %Z","VE":"%N%n%O%n%A%n%C %Z, %S","VG":"%N%n%O%n%A%n%C%n%Z","VI":"%N%n%O%n%A%n%C %S %Z","VN":"%N%n%O%n%A%n%C%n%S %Z","WF":"%O%n%N%n%A%n%Z %C %X","XK":"%N%n%O%n%A%n%Z %C","YT":"%O%n%N%n%A%n%Z %C %X","ZA":"%N%n%O%n%A%n%D%n%C%n%Z","ZM":"%N%n%O%n%A%n%Z %C","ZZ":"%N%n%O%n%A%n%C"}')}},t={};return function i(A){var e=t[A];if(void 0!==e)return e.exports;var r=t[A]={exports:{}};return n[A].call(r.exports,r,r.exports,i),r.exports}(607)})()}))}));const C="";const O=class{constructor(t){n(this,t);this.heading=undefined;this.editLink=undefined;this.customer=undefined;this.loading=undefined;this.error=undefined}renderContent(){var n,i,A,e,r,s,C,O;if(this.loading){return this.renderLoading()}if(!this.customer){return this.renderEmpty()}return t("sc-card",{"no-padding":true},t("sc-stacked-list",null,!!((n=this===null||this===void 0?void 0:this.customer)===null||n===void 0?void 0:n.name)&&t("sc-stacked-list-row",{style:{"--columns":"3"},mobileSize:480},t("div",null,t("strong",null,wp.i18n.__("Billing Name","surecart"))),t("div",null,(i=this.customer)===null||i===void 0?void 0:i.name),t("div",null)),!!((A=this===null||this===void 0?void 0:this.customer)===null||A===void 0?void 0:A.email)&&t("sc-stacked-list-row",{style:{"--columns":"3"},mobileSize:480},t("div",null,t("strong",null,wp.i18n.__("Billing Email","surecart"))),t("div",null,(e=this.customer)===null||e===void 0?void 0:e.email),t("div",null)),!!Object.keys(((r=this===null||this===void 0?void 0:this.customer)===null||r===void 0?void 0:r.shipping_address)||{}).length&&this.renderAddress(wp.i18n.__("Shipping Address","surecart"),this.customer.shipping_address),!!Object.keys(((s=this===null||this===void 0?void 0:this.customer)===null||s===void 0?void 0:s.billing_address)||{}).length&&this.renderAddress(wp.i18n.__("Billing Address","surecart"),this.customer.billing_address),!!((C=this===null||this===void 0?void 0:this.customer)===null||C===void 0?void 0:C.phone)&&t("sc-stacked-list-row",{style:{"--columns":"3"},mobileSize:480},t("div",null,t("strong",null,wp.i18n.__("Phone","surecart"))),t("div",null,(O=this.customer)===null||O===void 0?void 0:O.phone),t("div",null)),(()=>{var n,i,A,e;const{number_type:r,number:s}=((n=this.customer)===null||n===void 0?void 0:n.tax_identifier)||{};if(!s||!r)return;const C=((i=N===null||N===void 0?void 0:N[r])===null||i===void 0?void 0:i.label)||wp.i18n.__("Tax Id","surecart");const O=((e=(A=this.customer)===null||A===void 0?void 0:A.tax_identifier)===null||e===void 0?void 0:e[`valid_${r}`])===false;return t("sc-stacked-list-row",{style:{"--columns":"3"},mobileSize:480},t("div",null,t("strong",null,C)),t("div",null,s," ",O&&t("sc-tag",{type:"warning"},wp.i18n.__("Invalid","surecart"))),t("div",null))})()))}renderAddress(n="Address",i){var A;const{name:e,line_1:N,line_2:C,city:O,state:l,postal_code:o,country:Z}=i;const d=(A=r.find((({value:n})=>n===Z)))===null||A===void 0?void 0:A.label;return t("sc-stacked-list-row",{style:{"--columns":"3"},mobileSize:480},t("div",null,t("strong",null,n)),t("div",null,s.formatAddress({name:e,postalCountry:Z,administrativeArea:l,locality:O,postalCode:o,addressLines:[N,C]}).join("\n")+"\n"+d||Z),t("div",null))}renderEmpty(){return t("div",null,t("sc-divider",{style:{"--spacing":"0"}}),t("slot",{name:"empty"},t("sc-empty",{icon:"user"},wp.i18n.__("You don't have any billing information.","surecart"))))}renderLoading(){return t("sc-card",{"no-padding":true},t("sc-stacked-list",null,t("sc-stacked-list-row",{style:{"--columns":"2"},"mobile-size":0},t("div",{style:{padding:"0.5em"}},t("sc-skeleton",{style:{width:"30%",marginBottom:"0.75em"}}),t("sc-skeleton",{style:{width:"20%",marginBottom:"0.75em"}}),t("sc-skeleton",{style:{width:"40%"}})))))}render(){var n,i,A;return t("sc-dashboard-module",{exportparts:"base, heading, heading-text, heading-title, heading-description",class:"customer-details",error:this.error},t("span",{slot:"heading"},this.heading||wp.i18n.__("Billing Details","surecart")," ",!!((n=this===null||this===void 0?void 0:this.customer)===null||n===void 0?void 0:n.id)&&!((i=this===null||this===void 0?void 0:this.customer)===null||i===void 0?void 0:i.live_mode)&&t("sc-tag",{exportparts:"base:test-tag__base, content:test-tag__content",type:"warning",size:"small"},wp.i18n.__("Test","surecart"))),!!this.editLink&&!!((A=this.customer)===null||A===void 0?void 0:A.id)&&t("sc-button",{exportparts:"base:button__base, label:button__label, prefix:button__prefix",type:"link",href:this.editLink,slot:"end"},t("sc-icon",{name:"edit-3",slot:"prefix"}),wp.i18n.__("Update","surecart")),this.renderContent())}get el(){return i(this)}};O.style=C;export{O as sc_customer_details};
//# sourceMappingURL=p-7cb0640c.entry.js.map