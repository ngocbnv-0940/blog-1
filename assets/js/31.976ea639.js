(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{190:function(s,e,t){"use strict";var a=t(69);t.n(a).a},235:function(s,e,t){"use strict";t.r(e);var a={name:"SidebarGroup",props:["item","first","open","collapsable"]},i=(t(190),t(1)),n=Object(i.a)(a,function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"sidebar-group",class:{first:s.first,collapsable:s.collapsable}},[t("p",{staticClass:"sidebar-heading",class:{open:s.open},on:{click:function(e){s.$emit("toggle")}}},[t("span",[s._v(s._s(s.item.title))]),s._v(" "),s.collapsable?t("span",{staticClass:"arrow",class:s.open?"down":"right"}):s._e()]),s._v(" "),t("DropdownTransition",[s.open||!s.collapsable?t("ul",{ref:"items",staticClass:"sidebar-group-items"},s._l(s.item.children,function(s){return t("li",[t("SidebarLink",{attrs:{item:s}})],1)}),0):s._e()])],1)},[],!1,null,null,null);n.options.__file="SidebarGroup.vue";e.default=n.exports},69:function(s,e,t){}}]);