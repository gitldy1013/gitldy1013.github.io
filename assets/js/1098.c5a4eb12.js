(window.webpackJsonp=window.webpackJsonp||[]).push([[1098],{1794:function(s,a,e){"use strict";e.r(a);var n=e(5),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"表单输入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表单输入"}},[s._v("#")]),s._v(" 表单输入")]),s._v(" "),e("h2",{attrs:{id:"什么是双向数据绑定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是双向数据绑定"}},[s._v("#")]),s._v(" 什么是双向数据绑定")]),s._v(" "),e("p",[s._v("Vue.js 是一个 MVVM 框架，即数据双向绑定，即当数据发生变化的时候，视图也就发生变化，当视图发生变化的时候，数据也会跟着同步变化。这也算是 Vue.js 的精髓之处了。值得注意的是，"),e("strong",[s._v("我们所说的数据双向绑定，一定是对于 UI 控件来说的")]),s._v("，非 UI 控件不会涉及到数据双向绑定。单向数据绑定是使用状态管理工具的前提。如果我们使用 "),e("code",[s._v("vuex")]),s._v("，那么数据流也是单项的，这时就会和双向数据绑定有冲突。")]),s._v(" "),e("h2",{attrs:{id:"为什么要实现数据的双向绑定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要实现数据的双向绑定"}},[s._v("#")]),s._v(" 为什么要实现数据的双向绑定")]),s._v(" "),e("p",[s._v("在 Vue.js 中，如果使用 "),e("code",[s._v("vuex")]),s._v("，实际上数据还是单向的，之所以说是数据双向绑定，这是用的 UI 控件来说，对于我们处理表单，Vue.js 的双向数据绑定用起来就特别舒服了。即两者并不互斥，在全局性数据流使用单项，方便跟踪；局部性数据流使用双向，简单易操作。")]),s._v(" "),e("h2",{attrs:{id:"在表单中使用双向数据绑定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在表单中使用双向数据绑定"}},[s._v("#")]),s._v(" 在表单中使用双向数据绑定")]),s._v(" "),e("p",[s._v("你可以用 "),e("code",[s._v("v-model")]),s._v(" 指令在表单 "),e("code",[s._v("<input>")]),s._v("、"),e("code",[s._v("<textarea>")]),s._v(" 及 "),e("code",[s._v("<select>")]),s._v(" 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 "),e("code",[s._v("v-model")]),s._v(" 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。")]),s._v(" "),e("p",[e("strong",[s._v("注意："),e("code",[s._v("v-model")]),s._v(" 会忽略所有表单元素的 "),e("code",[s._v("value")]),s._v("、"),e("code",[s._v("checked")]),s._v("、"),e("code",[s._v("selected")]),s._v(" 特性的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 "),e("code",[s._v("data")]),s._v(" 选项中声明初始值。")])]),s._v(" "),e("h3",{attrs:{id:"单行文本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单行文本"}},[s._v("#")]),s._v(" 单行文本")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    <div id="vue">\n        单行文本：<input type="text" v-model="message" />&nbsp;&nbsp;单行文本是：{{message}}\n    </div>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    <script type="text/javascript">\n        var vm = new Vue({\n            el: \'#vue\',\n            data: {\n                message: "Hello Vue"\n            }\n        });\n    <\/script>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[e("img",{attrs:{src:"/img/20181220024155.png",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"多行文本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多行文本"}},[s._v("#")]),s._v(" 多行文本")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    <div id="vue">\n        多行文本：<textarea v-model="message"></textarea>&nbsp;&nbsp;多行文本是：{{message}}\n    </div>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    <script type="text/javascript">\n        var vm = new Vue({\n            el: \'#vue\',\n            data: {\n                message: "Hello Textarea"\n            }\n        });\n    <\/script>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[e("img",{attrs:{src:"/img/20181220024312.png",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"单复选框"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单复选框"}},[s._v("#")]),s._v(" 单复选框")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    <div id="vue">\n        单复选框：<input type="checkbox" id="checkbox" v-model="checked">&nbsp;&nbsp;<label for="checkbox">{{ checked }}</label>\n    </div>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    <script type=\"text/javascript\">\n        var vm = new Vue({\n            el: '#vue',\n            data: {\n                checked: false\n            }\n        });\n    <\/script>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[e("img",{attrs:{src:"/img/20181220024856.png",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"多复选框"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多复选框"}},[s._v("#")]),s._v(" 多复选框")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    <div id="vue">\n        多复选框：\n        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">\n        <label for="jack">Jack</label>\n        <input type="checkbox" id="john" value="John" v-model="checkedNames">\n        <label for="john">John</label>\n        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">\n        <label for="mike">Mike</label>\n        <span>选中的值: {{ checkedNames }}</span>\n    </div>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    <script type=\"text/javascript\">\n        var vm = new Vue({\n            el: '#vue',\n            data: {\n                checkedNames: []\n            }\n        });\n    <\/script>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[e("img",{attrs:{src:"/img/20181220025310.png",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"单选按钮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单选按钮"}},[s._v("#")]),s._v(" 单选按钮")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    <div id="vue">\n        单选按钮：\n        <input type="radio" id="one" value="One" v-model="picked">\n        <label for="one">One</label>\n        <input type="radio" id="two" value="Two" v-model="picked">\n        <label for="two">Two</label>\n        <span>选中的值: {{ picked }}</span>\n    </div>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    <script type=\"text/javascript\">\n        var vm = new Vue({\n            el: '#vue',\n            data: {\n                picked: ''\n            }\n        });\n    <\/script>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[e("img",{attrs:{src:"/img/20181220025722.png",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"下拉框"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下拉框"}},[s._v("#")]),s._v(" 下拉框")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    <div id="vue">\n        下拉框：\n        <select v-model="selected">\n            <option disabled value="">请选择</option>\n            <option>A</option>\n            <option>B</option>\n            <option>C</option>\n        </select>\n        <span>选中的值: {{ selected }}</span>\n    </div>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    <script type=\"text/javascript\">\n        var vm = new Vue({\n            el: '#vue',\n            data: {\n                selected: ''\n            }\n        });\n    <\/script>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[e("img",{attrs:{src:"/img/20181220030112.png",alt:""}})]),s._v(" "),e("p",[e("strong",[s._v("注意：如果 "),e("code",[s._v("v-model")]),s._v(" 表达式的初始值未能匹配任何选项，"),e("code",[s._v("<select>")]),s._v(" 元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。")])])])}),[],!1,null,null,null);a.default=t.exports}}]);