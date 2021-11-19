"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[3125],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return y}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),y=i,m=d["".concat(c,".").concat(y)]||d[y]||p[y]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2348:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a={},s="Security",c={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Security",description:"Information about Yearn's security processes, team members, disclosures, PGP keys and more can be found in the /yearn-security repo on Github.",source:"@site/docs/security/index.md",sourceDirName:".",slug:"/index",permalink:"/yearn-devdocs/security/index",tags:[],version:"current",lastUpdatedBy:"Daniel Lehnberg",lastUpdatedAt:1626620968,formattedLastUpdatedAt:"7/18/2021",frontMatter:{}},u=[{value:"Vulnerability disclosure process",id:"vulnerability-disclosure-process",children:[]},{value:"Audits",id:"audits",children:[]},{value:"Security assumption",id:"security-assumption",children:[]}],l={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"security"},"Security"),(0,o.kt)("p",null,"Information about Yearn's security processes, team members, disclosures, PGP keys and more can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-security"},"/yearn-security")," repo on Github."),(0,o.kt)("h2",{id:"vulnerability-disclosure-process"},"Vulnerability disclosure process"),(0,o.kt)("p",null,"Potential vulnerabilities are welcomed to be disclosed following the guidelines established in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-security/blob/master/SECURITY.md"},"/yearn-security/SECURITY.md"),". Valid vulnerabilities may be eligible for bounty rewards."),(0,o.kt)("h2",{id:"audits"},"Audits"),(0,o.kt)("p",null,"Reports from audits on Yearn's vaults, strategies, and other protocol components can be found under ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-security/tree/master/audits"},"yearn-security/audits"),"."),(0,o.kt)("h2",{id:"security-assumption"},"Security assumption"),(0,o.kt)("p",null,"Yearn as a protocol hinges on the critical assumption that the ",(0,o.kt)("inlineCode",{parentName:"p"},"Governance")," role is honest. This role is currently controlled by a ",(0,o.kt)("a",{parentName:"p",href:"https://gov.yearn.finance/t/yip-62-change-two-multisig-signers/10758"},"6 of 9 Gnosis Safe mu-sig"),"."),(0,o.kt)("p",null,"A compromised or malicious Governance can cause catastrophic damage across the entire protocol."),(0,o.kt)("p",null,"It is a conscious design decision that this role is not behind a time lock. Priority is given to the ability to rapidly update and iterate on live vaults, strategies, and other components. Both so as not to advertise new investment strategies in advance, but also in order to rapidly improve our existing components without interruption. It also avoids downtimes whenever there is a bug or security vulnerability that needs to be fixed."),(0,o.kt)("p",null,"Trusting ",(0,o.kt)("inlineCode",{parentName:"p"},"Governance")," to be honest is a pre-requisite in order to be able to trust Yearn's vaults."),(0,o.kt)("p",null,"Modifications to these design decisions can be proposed in the forum through ",(0,o.kt)("a",{parentName:"p",href:"https://gov.yearn.finance/t/yip-61-governance-2-0/10460"},"Yearn's governance process"),"."))}p.isMDXComponent=!0}}]);