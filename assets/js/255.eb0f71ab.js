(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{952:function(s,a,n){"use strict";n.r(a);var t=n(5),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"按之字形顺序打印二叉树"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#按之字形顺序打印二叉树"}},[s._v("#")]),s._v(" 按之字形顺序打印二叉树")]),s._v(" "),n("h2",{attrs:{id:"来源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#来源"}},[s._v("#")]),s._v(" 来源")]),s._v(" "),n("p",[s._v("https://www.nowcoder.com/practice/91b69814117f4e8097390d107d2efbe0")]),s._v(" "),n("h2",{attrs:{id:"描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),n("p",[s._v("请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。")]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("p",[s._v("我们使用到了两个数组，用于保留每一行的结果，同时两个数组交替进行存储，最后通过ret数组来记录输出值")]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/image-20200624203223700.png",alt:"image-20200624203223700"}})]),s._v(" "),n("h2",{attrs:{id:"代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#  按之字形顺序打印二叉树\nclass TreeNode:\n    def __init__(self, x):\n        self.val = x\n        self.left = None\n        self.right = None\nclass Solution:\n    def Print(self, pRoot):\n        if pRoot == None:\n            return []\n        # write code here\n        stack1 = [pRoot]\n        stack2 = []\n        # 存储打印\n        ret = []\n        # 当1和2中有空时\n        while stack1 or stack2:\n            if stack1:\n                tmpRet = []\n                while stack1:\n                    # 取出stack1中的一个节点\n                    tmpNode = stack1.pop()\n                    tmpRet.append(tmpNode.val)\n                    # 把左右子树放到stack2中\n                    if tmpNode.left:\n                        stack2.append(tmpNode.left)\n                    if tmpNode.right:\n                        stack2.append(tmpNode.right)\n                ret.append(tmpRet)\n\n            if stack2:\n                tmpRet = []\n                while stack2:\n                    # 取出stack1中的一个节点\n                    tmpNode = stack2.pop()\n                    tmpRet.append(tmpNode.val)\n                    # 把左右子树放到stack2中\n                    if tmpNode.right:\n                        stack1.append(tmpNode.right)\n                    if tmpNode.left:\n                        stack1.append(tmpNode.left)\n                ret.append(tmpRet)\n        return ret\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);