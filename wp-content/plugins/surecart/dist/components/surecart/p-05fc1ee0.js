import{s}from"./p-09484d0e.js";import{c as t}from"./p-25433d0f.js";const e=t({type:"default",code:"",message:"",data:{status:0,type:"",http_status:""},additional_errors:[],dismissible:!1},((s,e)=>JSON.stringify(s)!==JSON.stringify(e))),{state:a,onChange:o,on:i,dispose:r,forceUpdate:n}=e,d={dismissible:!1},p=(e,t,r=d)=>{"string"==typeof t&&(t={type:e,message:t,code:""}),(null==t?void 0:t.message)||(t.message=wp.i18n.__("Something went wrong. Please try again.","surecart")),a.type=e,t={...r,...t},s(t.message,"assertive"),Object.keys(t).forEach((s=>{a[s]=t[s]}))},c=(s,e=d)=>{p("error",s,e)},f=(s,e=d)=>{p("info",s,e)},l=()=>{a.type="default",a.code="",a.message="",a.data={status:0,type:"",http_status:""},a.additional_errors=[]};export{f as a,c,l as r,a as s};