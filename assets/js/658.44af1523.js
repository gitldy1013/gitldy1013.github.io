(window.webpackJsonp=window.webpackJsonp||[]).push([[658],{1355:function(e,t,r){"use strict";r.r(t);var l=r(5),v=Object(l.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"spring-mvc-运行流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc-运行流程"}},[e._v("#")]),e._v(" Spring MVC 运行流程")]),e._v(" "),r("ul",[r("li",[e._v("Spring MVC 将所有的请求都提交给 "),r("code",[e._v("DispatcherServlet")]),e._v("，它会委托应用系统的其他模块负责对请求进行真正的处理工作。")]),e._v(" "),r("li",[r("code",[e._v("DispatcherServlet")]),e._v(" 查询一个或多个 "),r("code",[e._v("HandlerMapping")]),e._v("，找到处理请求的 Controller.")]),e._v(" "),r("li",[r("code",[e._v("DispatcherServlet")]),e._v(" 请求提交到目标 Controller")]),e._v(" "),r("li",[e._v("Controller 进行业务逻辑处理后，会返回一个 "),r("code",[e._v("ModelAndView")])]),e._v(" "),r("li",[e._v("Dispatcher 查询一个或多个 "),r("code",[e._v("ViewResolver")]),e._v(" 视图解析器,找到 "),r("code",[e._v("ModelAndView")]),e._v(" 对象指定的视图对象")]),e._v(" "),r("li",[e._v("视图对象负责渲染返回给客户端。")])])])}),[],!1,null,null,null);t.default=v.exports}}]);