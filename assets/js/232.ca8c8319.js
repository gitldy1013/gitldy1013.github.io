(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{929:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"复杂链表的复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂链表的复制"}},[s._v("#")]),s._v(" 复杂链表的复制")]),s._v(" "),a("h2",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),a("p",[s._v("来源：https://www.nowcoder.com/practice/f836b2c43afc4b35ad6adc41ec941dba")]),s._v(" "),a("p",[s._v("输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针random指向一个随机节点），请对此链表进行深拷贝，并返回拷贝后的头结点。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）")]),s._v(" "),a("h2",{attrs:{id:"思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[s._v("#")]),s._v(" 思考")]),s._v(" "),a("p",[s._v("下图是复杂链表的数据结构")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 链表结构")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RandomListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("label "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("random "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("img",{attrs:{src:"/images/image-20200425214035668.png",alt:"image-20200425214035668"}})]),s._v(" "),a("p",[s._v("最简单的思路是，使用python提供的深拷贝实现")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" copy\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回 RandomListNode")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pHead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# write code here")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" copy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("deepcopy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pHead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"方法2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法2"}},[s._v("#")]),s._v(" 方法2")]),s._v(" "),a("p",[s._v("关于Random指针，因为我们不知道它是指向，因此我们每次都需要从头到尾进行遍历")]),s._v(" "),a("p",[s._v("我们要做的就是把上面的节点复制一份出来")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20200425215533799.png",alt:"image-20200425215533799"}})]),s._v(" "),a("p",[s._v("这样得到了： 11,22,33,44 的链表，就相当于在每个数的后面，同时又复制了一份，最后执行一下的方法")]),s._v(" "),a("blockquote",[a("p",[s._v("A.next.random = a.random.next")])]),s._v(" "),a("p",[s._v("最后我们得到了两个链表")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20200425233303213.png",alt:"image-20200425233303213"}})]),s._v(" "),a("p",[s._v("完整图")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20200426105420274.png",alt:"image-20200426105420274"}})]),s._v(" "),a("p",[s._v("完整代码")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复杂链表的复制")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针random指向一个随机节点），")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请对此链表进行深拷贝，并返回拷贝后的头结点。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 链表结构")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回合并后列表")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pHead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" pHead "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\n        pTmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pHead\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制一个一样的node，并且添加到之前的链表的每一个node后面")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" pTmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个和原来一样的node")]),s._v("\n            node "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" RandomListNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pTmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("laebl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pTmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将原来的指向刚刚创建的节点")]),s._v("\n            pTmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同时移动被复制的节点")]),s._v("\n            pTmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实现新建node的random的指向")]),s._v("\n        pTmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pHead\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" pHead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将复制节点的random，指向 它Random的next")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" pTmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                pTmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("random "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pTmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n            pTmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pTmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 断开原来的node 和 新 node 之间的连接")]),s._v("\n        pTmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pHead\n        newHead "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pHead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n        pNewTmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pHead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" pTmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            pTmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pTmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" pNewTmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                pNewTmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pNewTmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n                pNewTmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pNewTmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n            pTmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pTmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("            \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" newHead\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);