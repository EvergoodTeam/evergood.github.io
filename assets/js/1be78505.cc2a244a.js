"use strict";(self.webpackChunkevergood_docs=self.webpackChunkevergood_docs||[]).push([[514,248],{841:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ce});var a=n(7294),l=n(6010),r=n(9488),o=n(3702),c=n(246),i=n(8259),s=n(8801),d=n(4432),m=n(6937),u=n(7325),b=n(2957),p=n(3266);const h="backToTopButton_sjWU",E="backToTopButtonShow_xfvO";function g(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:o,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const o=null==n?void 0:n.scrollY;o&&(r.current?r.current=!1:a>=o?(c(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(r.current=!0,l(!1))})),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",o.k.common.backToTopButton,h,e&&E),type:"button",onClick:t})}var f=n(6775),v=n(3488),_=n(107),k=n(6811),C=n(7462);function S(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I="collapseSidebarButton_PEFL",N="collapseSidebarButtonIcon_kv0_";function Z(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",I),onClick:t},a.createElement(S,{className:N}))}var y=n(5830),T=n(3768);const x=Symbol("EmptyContext"),w=a.createContext(x);function F(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(w.Provider,{value:r},t)}var L=n(4639),A=n(9003),M=n(3699),B=n(1048);function H(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function P(e){let{item:t,onItemClick:n,activePath:r,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,_.L)(),g=function(e){const t=(0,B.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),f=(0,i._F)(t,r),v=(0,A.Mg)(h,r),{collapsed:k,setCollapsed:S}=(0,L.u)({initialState:()=>!!b&&(!f&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=function(){const e=(0,a.useContext)(w);if(e===x)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=function(e){void 0===e&&(e=!k),N(e?null:s),S(e)};!function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const r=(0,T.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:f,collapsed:k,updateCollapsed:Z}),(0,a.useEffect)((()=>{b&&null!=I&&I!==s&&E&&S(!0)}),[b,I,s,S,E]);const y=1==c&&"sidebar-intro"!=p?a.createElement("div",{className:"sidebar-category-separator"}):a.createElement(a.Fragment,null);return a.createElement(a.Fragment,null,y,a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":k},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(M.Z,(0,C.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?e=>{null==n||n(t),h?Z(!1):(e.preventDefault(),Z())}:()=>{null==n||n(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!k:void 0,href:b?g??"#":g},d),u),h&&b&&a.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),a.createElement(L.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(K,{items:m,tabIndex:k?-1:0,onItemClick:n,activePath:r,level:c+1}))))}var W=n(2735),D=n(4082);const R="menuExternalLink_NnFM";function V(e){let{item:t,onItemClick:n,activePath:r,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i._F)(t,r),E=(0,W.Z)(m),g=1==c&&"sidebar-intro"!=b?a.createElement("div",{className:"sidebar-category-separator"}):a.createElement(a.Fragment,null);return a.createElement(a.Fragment,null,g,a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(M.Z,(0,C.Z)({className:(0,l.Z)("menu__link",!E&&R,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(D.Z,null))))}const z="menuHtmlItem_M9Kj";function U(e){let{item:t,level:n,index:r}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),i&&[z,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:c}})}function j(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(P,(0,C.Z)({item:t},n));case"html":return a.createElement(U,(0,C.Z)({item:t},n));default:return a.createElement(V,(0,C.Z)({item:t},n))}}function G(e){let{items:t,...n}=e;return a.createElement(F,null,t.map(((e,t)=>a.createElement(j,(0,C.Z)({key:t,item:e,index:t},n)))))}const K=(0,a.memo)(G),Y="menu_SIkG",q="menuWithAnnouncementBar_GW3s";function O(e){let{path:t,sidebar:n,className:r}=e;const c=function(){const{isActive:e}=(0,y.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",Y,c&&q,r)},a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(K,{items:n,activePath:t,level:1})))}const X="sidebar_njMd",J="sidebarWithHideableNavbar_wUlq",Q="sidebarHidden_VK0M",$="sidebarLogo_isFc";function ee(e){let{path:t,sidebar:n,onCollapse:r,isHidden:o}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,_.L)();return a.createElement("div",{className:(0,l.Z)(X,c&&J,o&&Q)},c&&a.createElement(k.Z,{tabIndex:-1,className:$}),a.createElement(O,{path:t,sidebar:n}),i&&a.createElement(Z,{onClick:r}))}const te=a.memo(ee);var ne=n(3086),ae=n(735);const le=e=>{let{sidebar:t,path:n}=e;const r=(0,ae.e)();return a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(K,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function re(e){return a.createElement(ne.Zo,{component:le,props:e})}const oe=a.memo(re);function ce(e){const t=(0,v.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(te,e),l&&a.createElement(oe,e))}const ie="expandButton_m80_",se="expandButtonIcon_BlDH";function de(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ie,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(S,{className:se}))}const me={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function ue(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:(null==n?void 0:n.name)??"noSidebar"},t)}function be(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:c}=(0,f.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),r((e=>!e))}),[r,i]);return a.createElement("aside",{className:(0,l.Z)(o.k.docs.docSidebarContainer,me.docSidebarContainer,n&&me.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(me.docSidebarContainer)&&n&&s(!0)}},a.createElement(ue,null,a.createElement("div",{className:(0,l.Z)(me.sidebarViewport,i&&me.sidebarViewportHidden)},a.createElement(ce,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&a.createElement(de,{toggleSidebar:d}))))}const pe={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function he(e){let{hiddenSidebarContainer:t,children:n}=e;const r=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(pe.docMainContainer,(t||!r)&&pe.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",pe.docItemWrapper,t&&pe.docItemWrapperEnhanced)},n))}const Ee="docPage__5DB",ge="docsWrapper_BCFX";function fe(e){let{children:t}=e;const n=(0,d.V)(),[l,r]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:ge},a.createElement(g,null),a.createElement("div",{className:Ee},n&&a.createElement(be,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:r}),a.createElement(he,{hiddenSidebarContainer:l},t)))}var ve=n(4248),_e=n(3647);function ke(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(_e.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(r.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ce(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(ve.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(ke,e),a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(fe,null,c)))))}},4248:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(7294),l=n(7325),r=n(9488),o=n(6937);function c(){return a.createElement(a.Fragment,null,a.createElement(r.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);