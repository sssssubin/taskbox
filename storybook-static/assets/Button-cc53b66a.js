var c=Object.defineProperty;var n=(e,t)=>c(e,"name",{value:t,configurable:!0});import{r as m,a as l,b as u,t as y,n as d,d as b,o as k}from"./vue.esm-bundler-63d9ef9a.js";const p=n((e,t)=>{const a=e.__vccOpts||e;for(const[o,r]of t)a[o]=r;return a},"_export_sfc"),s={name:"my-button",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,validator:function(e){return["small","medium","large"].indexOf(e)!==-1}},backgroundColor:{type:String}},emits:["click"],setup(e,{emit:t}){return e=m(e),{classes:l(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),style:l(()=>({backgroundColor:e.backgroundColor})),onClick(){t("click")}}}};function f(e,t,a,o,r,g){return k(),u("button",{type:"button",class:d(o.classes),onClick:t[0]||(t[0]=(...i)=>o.onClick&&o.onClick(...i)),style:b(o.style)},y(a.label),7)}n(f,"_sfc_render");const v=p(s,[["render",f]]);s.__docgenInfo={displayName:"my-button",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}]};export{v as M,p as _};
//# sourceMappingURL=Button-cc53b66a.js.map