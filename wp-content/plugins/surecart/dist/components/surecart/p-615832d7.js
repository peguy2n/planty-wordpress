import{o}from"./p-49b14288.js";import{o as s,s as i}from"./p-d93fa5d8.js";import{o as d,a as r,b as l,c as n}from"./p-9fdc1fc7.js";const t=()=>{const o=[...r().map((({processor_type:o})=>o)),...l().map((({id:o})=>o))];o.includes(i.id)||(i.id=(null==o?void 0:o.length)?null==o?void 0:o[0]:null)},c=()=>{const o=(n()||[]).map((({id:o})=>o));o.includes(i.method)||(i.method=(null==o?void 0:o.length)?null==o?void 0:o[0]:null)};o("checkout",(()=>{t(),c()})),s("id",(()=>t())),d("processors",(()=>t())),d("methods",(()=>c()));