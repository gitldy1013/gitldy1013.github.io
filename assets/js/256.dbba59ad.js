(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{953:function(s,e,n){"use strict";n.r(e);var t=n(5),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"把二叉树打印成多行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#把二叉树打印成多行"}},[s._v("#")]),s._v(" 把二叉树打印成多行")]),s._v(" "),n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[s._v("https://www.nowcoder.com/practice/445c44d982d04483b04a54f298796288")]),s._v(" "),n("h2",{attrs:{id:"描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),n("p",[s._v("从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。")]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("p",[s._v("本题的思路，和上一题是一样的，也是使用两个队列来进行存储，然后交替换行，需要注意的是，这里用的是队列，上一题之字形的用的是栈")]),s._v(" "),n("h2",{attrs:{id:"代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class TreeNode:\n    def __init__(self, x):\n        self.val = x\n        self.left = None\n        self.right = None\nclass Solution:\n    # 返回二维列表[[1,2],[4,5]]\n    def Print(self, pRoot):\n        if pRoot == None:\n            return []\n        queue1 = [pRoot]\n        queue2 = []\n        ret = []\n        while queue1 or queue2:\n            if queue1:\n                tmpRet = []\n                while queue1:\n                    tmpNode = queue1.pop(0)\n                    tmpRet.append(tmpNode.val)\n                    if tmpNode.left:\n                        queue2.append(tmpNode.left)\n                    if tmpNode.right:\n                        queue2.append(tmpNode.right)\n                ret.append(tmpRet)\n            if queue2:\n                tmpRet = []\n                while queue2:\n                    tmpNode = queue2.pop(0)\n                    tmpRet.append(tmpNode.val)\n                    if tmpNode.left:\n                        queue1.append(tmpNode.left)\n                    if tmpNode.right:\n                        queue1.append(tmpNode.right)\n                ret.append(tmpRet)\n        return ret\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);