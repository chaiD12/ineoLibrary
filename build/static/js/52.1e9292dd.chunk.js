(this["webpackJsonplightence-admin"]=this["webpackJsonplightence-admin"]||[]).push([[52],{2426:function(e,r,t){"use strict";t.r(r);var c=t(0),a=t(468),n=t(461),l=t(469),b=t(30),s=t(2326),i=t(2327),o=t(49),j=t(4),d=t(16),u=t(13),p=t(12),m=t(8),h=t(9),O=t(15),f=t(14),x=t.n(f),v=t(61),y=t(82),g=t(241),E=t(35),k=t(183),w=t(424),C=function(e,r){var t={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&r.indexOf(c)<0&&(t[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)r.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(t[c[a]]=e[c[a]])}return t},N=function(e){var r=e.prefixCls,t=e.separator,a=void 0===t?"/":t,n=e.children,l=e.menu,b=e.overlay,s=e.dropdownProps,i=C(e,["prefixCls","separator","children","menu","overlay","dropdownProps"]),o=(0,c.useContext(y.b).getPrefixCls)("breadcrumb",r);var j,d;return j="href"in i?c.createElement("a",Object(h.a)({className:"".concat(o,"-link")},i),n):c.createElement("span",Object(h.a)({className:"".concat(o,"-link")},i),n),d=j,j=l||b?c.createElement(w.a,Object(h.a)({menu:l,overlay:b,placement:"bottom"},s),c.createElement("span",{className:"".concat(o,"-overlay-link")},d,c.createElement(k.a,null))):d,void 0!==n&&null!==n?c.createElement("li",null,j,a&&c.createElement("span",{className:"".concat(o,"-separator")},a)):null};N.__ANT_BREADCRUMB_ITEM=!0;var P=N,_=function(e){var r=e.children,t=(0,c.useContext(y.b).getPrefixCls)("breadcrumb");return c.createElement("span",{className:"".concat(t,"-separator")},r||"/")};_.__ANT_BREADCRUMB_SEPARATOR=!0;var R=_,S=function(e,r){var t={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&r.indexOf(c)<0&&(t[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)r.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(t[c[a]]=e[c[a]])}return t};function A(e,r,t,a){var n=t.indexOf(e)===t.length-1,l=function(e,r){if(!e.breadcrumbName)return null;var t=Object.keys(r).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),(function(e,t){return r[t]||e}))}(e,r);return n?c.createElement("span",null,l):c.createElement("a",{href:"#/".concat(a.join("/"))},l)}var I=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach((function(t){e=e.replace(":".concat(t),r[t])})),e},B=function(e,r,t){var c=Object(O.a)(e),a=I(r||"",t);return a&&c.push(a),c},T=function(e){var r,t=e.prefixCls,a=e.separator,n=void 0===a?"/":a,l=e.style,b=e.className,s=e.routes,i=e.children,o=e.itemRender,j=void 0===o?A:o,d=e.params,u=void 0===d?{}:d,p=S(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),O=c.useContext(y.b),f=O.getPrefixCls,k=O.direction,w=f("breadcrumb",t);if(s&&s.length>0){var C=[];r=s.map((function(e){var r,t=I(e.path,u);t&&C.push(t),e.children&&e.children.length&&(r=c.createElement(g.a,{items:e.children.map((function(e){return{key:e.path||e.breadcrumbName,label:j(e,u,s,B(C,e.path,u))}}))}));var a={separator:n};return r&&(a.overlay=r),c.createElement(P,Object(h.a)({},a,{key:t||e.breadcrumbName}),j(e,u,s,C))}))}else i&&(r=Object(v.a)(i).map((function(e,r){return e?Object(E.a)(e,{separator:n,key:r}):e})));var N=x()(w,Object(m.a)({},"".concat(w,"-rtl"),"rtl"===k),b);return c.createElement("nav",Object(h.a)({className:N,style:l},p),c.createElement("ol",null,r))};T.Item=P,T.Separator=R;var D,L,M=T,J=M.Item,U=Object(p.default)(J)(D||(D=Object(u.a)([""]))),F=Object(p.default)(M)(L||(L=Object(u.a)([""]))),q=t(2),z=["children"],G=U,H=function(e){var r=e.children,t=Object(d.a)(e,z);return Object(q.jsx)(F,Object(j.a)(Object(j.a)({},t),{},{children:r}))},K=t(88),Q=t(341),V=t(327);r.default=function(){var e=Object(l.a)().t,r=Object(b.l)().pathname,t=Object(q.jsxs)(Q.a,{children:[Object(q.jsx)(Q.b,{children:Object(q.jsx)(o.a,{type:"link",target:"_blank",rel:"noopener noreferrer",children:e("breadcrumbs.general")})},1),Object(q.jsx)(Q.b,{children:Object(q.jsx)(o.a,{type:"link",target:"_blank",rel:"noopener noreferrer",children:e("breadcrumbs.layout")})},2),Object(q.jsx)(Q.b,{children:Object(q.jsx)(o.a,{type:"link",target:"_blank",rel:"noopener noreferrer",children:e("breadcrumbs.navigation")})},3)]});return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(K.a,{children:e("common.breadcrumbs")}),Object(q.jsxs)(a.a,{children:[Object(q.jsx)(V.a,{title:e("breadcrumbs.basic"),children:Object(q.jsxs)(H,{children:[Object(q.jsx)(G,{href:r,children:e("breadcrumbs.home")}),Object(q.jsx)(G,{href:r,children:e("breadcrumbs.applicationCenter")}),Object(q.jsx)(G,{href:r,children:e("breadcrumbs.applicationList")}),Object(q.jsx)(G,{href:r,children:e("breadcrumbs.application")})]})}),Object(q.jsx)(V.a,{title:e("breadcrumbs.withIcon"),children:Object(q.jsxs)(H,{children:[Object(q.jsx)(G,{href:r,children:Object(q.jsx)(s.a,{})}),Object(q.jsx)(G,{href:r,children:Object(q.jsxs)(n.b,{children:[Object(q.jsx)(i.a,{}),Object(q.jsx)("span",{children:e("breadcrumbs.applicationList")})]})}),Object(q.jsx)(G,{href:r,children:e("breadcrumbs.application")})]})}),Object(q.jsx)(V.a,{title:e("breadcrumbs.customSeparator"),children:Object(q.jsxs)(H,{separator:">",children:[Object(q.jsx)(G,{href:r,children:e("breadcrumbs.home")}),Object(q.jsx)(G,{href:r,children:e("breadcrumbs.applicationCenter")}),Object(q.jsx)(G,{href:r,children:e("breadcrumbs.applicationList")}),Object(q.jsx)(G,{href:r,children:e("breadcrumbs.application")})]})}),Object(q.jsx)(V.a,{title:e("breadcrumbs.withDropdown"),children:Object(q.jsxs)(H,{children:[Object(q.jsx)(G,{href:r,children:e("breadcrumbs.antd")}),Object(q.jsx)(G,{href:r,children:e("breadcrumbs.component")}),Object(q.jsx)(G,{overlay:t,children:e("breadcrumbs.general")}),Object(q.jsx)(G,{href:r,children:e("breadcrumbs.button")})]})})]})]})}}}]);