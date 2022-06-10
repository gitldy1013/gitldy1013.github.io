(window.webpackJsonp=window.webpackJsonp||[]).push([[411],{1107:function(s,t,a){"use strict";a.r(t);var r=a(5),n=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"bootstrap-环境安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-环境安装"}},[s._v("#")]),s._v(" Bootstrap 环境安装")]),s._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("p",[s._v("Bootstrap 安装是非常容易的。本章将讲解如何下载并安装 Bootstrap，讨论 Bootstrap 文件结构，并通过一个实例演示它的用法。")]),s._v(" "),a("h2",{attrs:{id:"下载-bootstrap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载-bootstrap"}},[s._v("#")]),s._v(" 下载 Bootstrap")]),s._v(" "),a("p",[s._v("您可以从 http://getbootstrap.com/ 上下载 Bootstrap 的最新版本。")]),s._v(" "),a("h2",{attrs:{id:"文件结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件结构"}},[s._v("#")]),s._v(" 文件结构")]),s._v(" "),a("h3",{attrs:{id:"预编译的-bootstrap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预编译的-bootstrap"}},[s._v("#")]),s._v(" 预编译的 Bootstrap")]),s._v(" "),a("p",[s._v("当您下载了 Bootstrap 的已编译的版本，解压缩 ZIP 文件，您将看到下面的文件/目录结构：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/1526581943.png",alt:""}})]),s._v(" "),a("p",[s._v("如上图所示，可以看到已编译的 CSS 和 JS（bootstrap."),a("em",[s._v("），以及已编译压缩的 CSS 和 JS（bootstrap.min.")]),s._v("）。同时也包含了 Glyphicons 的字体，这是一个可选的 Bootstrap 主题。")]),s._v(" "),a("h2",{attrs:{id:"html-模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-模板"}},[s._v("#")]),s._v(" HTML 模板")]),s._v(" "),a("p",[s._v("一个使用了 Bootstrap 的基本的 HTML 模板如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    <!DOCTYPE html>\n    <html>\n       <head>\n          <title>Bootstrap 模板</title>\n          <meta name="viewport" content="width=device-width, initial-scale=1.0">\n          \x3c!-- 引入 Bootstrap --\x3e\n          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/css/bootstrap.min.css" rel="stylesheet">\n     \n          \x3c!-- HTML5 Shiv 和 Respond.js 用于让 IE8 支持 HTML5元素和媒体查询 --\x3e\n          \x3c!-- 注意： 如果通过 file://  引入 Respond.js 文件，则该文件无法起效果 --\x3e\n          \x3c!--[if lt IE 9]>\n             <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"><\/script>\n             <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"><\/script>\n          <![endif]--\x3e\n       </head>\n       <body>\n          <h1>Hello, world!</h1>\n     \n          \x3c!-- jQuery (Bootstrap 的 JavaScript 插件需要引入 jQuery) --\x3e\n          <script src="https://code.jquery.com/jquery.js"><\/script>\n          \x3c!-- 包括所有已编译的插件 --\x3e\n          <script src="js/bootstrap.min.js"><\/script>\n       </body>\n    </html>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("在这里，您可以看到包含了 jquery.js、bootstrap.min.js 和 bootstrap.min.css 文件，用于让一个常规的 HTML 文件变为使用了 Bootstrap 的模板。")]),s._v(" "),a("h2",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v('现在让我们尝试使用 Bootstrap 输出 "Hello, world!"：')]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    <h1>Hello, world!</h1>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);