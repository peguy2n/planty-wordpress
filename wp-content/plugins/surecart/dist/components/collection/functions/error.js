export const getAdditionalErrorMessages=e=>((null==e?void 0:e.additional_errors)||[]).map((e=>e.message));export const getTopLevelError=e=>{var o;return"checkout.invalid"===(null==e?void 0:e.code)&&(null===(o=getAdditionalErrorMessages(e))||void 0===o?void 0:o.length)?"":null==e?void 0:e.message};