(window.webpackJsonp=window.webpackJsonp||[]).push([[1097],{1793:function(s,a,t){"use strict";t.r(a);var e=t(5),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"组件基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件基础"}},[s._v("#")]),s._v(" 组件基础")]),s._v(" "),t("h2",{attrs:{id:"什么是组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是组件"}},[s._v("#")]),s._v(" 什么是组件")]),s._v(" "),t("p",[s._v("组件是可复用的 Vue 实例，说白了就是一组可以重复使用的模板，跟 "),t("code",[s._v("JSTL")]),s._v(" 的自定义标签、"),t("code",[s._v("Thymeleaf")]),s._v(" 的 "),t("code",[s._v("th:fragment")]),s._v(" 以及 "),t("code",[s._v("Sitemesh3")]),s._v(" 框架有着异曲同工之妙。通常一个应用会以一棵嵌套的组件树的形式来组织：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/201812220001.png",alt:""}})]),s._v(" "),t("p",[s._v("例如，你可能会有页头、侧边栏、内容区等组件，每个组件又包含了其它的像导航链接、博文之类的组件。")]),s._v(" "),t("h2",{attrs:{id:"第一个-vue-组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一个-vue-组件"}},[s._v("#")]),s._v(" 第一个 Vue 组件")]),s._v(" "),t("p",[t("strong",[s._v("注意：在实际开发中，我们并不会用以下方式开发组件，而是采用 "),t("code",[s._v("vue-cli")]),s._v(" 创建 "),t("code",[s._v(".vue")]),s._v(" 模板文件的方式开发，以下方法只是为了让大家理解什么是组件。")])]),s._v(" "),t("h3",{attrs:{id:"使用-vue-component-方法注册组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-vue-component-方法注册组件"}},[s._v("#")]),s._v(" 使用 "),t("code",[s._v("Vue.component()")]),s._v(" 方法注册组件")]),s._v(" "),t("h4",{attrs:{id:"javascript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[s._v("#")]),s._v(" JavaScript")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    <script type=\"text/javascript\">\n        // 先注册组件\n        Vue.component('my-component-li', {\n            template: '<li>Hello li</li>'\n        });\n    \n        // 再实例化 Vue\n        var vm = new Vue({\n            el: '#vue'\n        });\n    <\/script>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h4",{attrs:{id:"html"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[s._v("#")]),s._v(" HTML")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('    <div id="vue">\n        <ul>\n            <my-component-li></my-component-li>\n        </ul>\n    </div>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h4",{attrs:{id:"说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("Vue.component()")]),s._v("：注册组件")]),s._v(" "),t("li",[t("code",[s._v("my-component-li")]),s._v("：自定义组件的名字")]),s._v(" "),t("li",[t("code",[s._v("template")]),s._v("：组件的模板")])]),s._v(" "),t("h4",{attrs:{id:"测试效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试效果"}},[s._v("#")]),s._v(" 测试效果")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/20181222232831.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"使用-props-属性传递参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-props-属性传递参数"}},[s._v("#")]),s._v(" 使用 "),t("code",[s._v("props")]),s._v(" 属性传递参数")]),s._v(" "),t("p",[s._v("像上面那样用组件没有任何意义，所以我们是需要传递参数到组件的，此时就需要使用 "),t("code",[s._v("props")]),s._v(" 属性了")]),s._v(" "),t("p",[t("strong",[s._v("注意：默认规则下 "),t("code",[s._v("props")]),s._v(" 属性里的值不能为大写；感谢来自 "),t("a",{attrs:{href:"//shang.qq.com/wpa/qunwpa?idkey=7a848842e23f9a9178a7ec3c85c579b9c7acb41ac7c2ee65451152bb36b125d6"}},[s._v("Java微服务技术交流群2")]),s._v(" 的群友 [CV战士蛋蛋面] 帮助大家踩坑；")])]),s._v(" "),t("h4",{attrs:{id:"javascript-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript-2"}},[s._v("#")]),s._v(" JavaScript")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    <script type=\"text/javascript\">\n        // 先注册组件\n        Vue.component('my-component-li', {\n            props: ['item'],\n            template: '<li>Hello {{item}}</li>'\n        });\n    \n        // 再实例化 Vue\n        var vm = new Vue({\n            el: '#vue',\n            data: {\n                items: [\"张三\", \"李四\", \"王五\"]\n            }\n        });\n    <\/script>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h4",{attrs:{id:"html-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html-2"}},[s._v("#")]),s._v(" HTML")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('    <div id="vue">\n        <ul>\n            <my-component-li v-for="item in items" v-bind:item="item"></my-component-li>\n        </ul>\n    </div>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h4",{attrs:{id:"说明-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明-2"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),t("ul",[t("li",[t("code",[s._v('v-for="item in items"')]),s._v("：遍历 Vue 实例中定义的名为 "),t("code",[s._v("items")]),s._v(" 的数组，并创建同等数量的组件")]),s._v(" "),t("li",[t("code",[s._v('v-bind:item="item"')]),s._v("：将遍历的 "),t("code",[s._v("item")]),s._v(" 项绑定到组件中 "),t("code",[s._v("props")]),s._v(" 定义的名为 "),t("code",[s._v("item")]),s._v(" 属性上；"),t("code",[s._v("=")]),s._v(" 号左边的 "),t("code",[s._v("item")]),s._v(" 为 "),t("code",[s._v("props")]),s._v(" 定义的属性名，右边的为 "),t("code",[s._v("item in items")]),s._v(" 中遍历的 "),t("code",[s._v("item")]),s._v(" 项的值")])]),s._v(" "),t("h4",{attrs:{id:"测试效果-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试效果-2"}},[s._v("#")]),s._v(" 测试效果")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/20181222234111.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"完整的-html"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完整的-html"}},[s._v("#")]),s._v(" 完整的 HTML")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('    <!DOCTYPE html>\n    <html>\n    <head>\n        <meta charset="UTF-8">\n        <title>布局篇 组件基础</title>\n        <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"><\/script>\n    </head>\n    <body>\n    \n    <div id="vue">\n        <ul>\n            <my-component-li v-for="item in items" v-bind:item="item"></my-component-li>\n        </ul>\n    </div>\n    \n    <script type="text/javascript">\n        // 先注册组件\n        Vue.component(\'my-component-li\', {\n            props: [\'item\'],\n            template: \'<li>Hello {{item}}</li>\'\n        });\n    \n        // 再实例化 Vue\n        var vm = new Vue({\n            el: \'#vue\',\n            data: {\n                items: ["张三", "李四", "王五"]\n            }\n        });\n    <\/script>\n    </body>\n    </html>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);