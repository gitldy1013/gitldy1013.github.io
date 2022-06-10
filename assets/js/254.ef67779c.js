(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{951:function(s,t,e){"use strict";e.r(t);var n=e(5),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"对称的二叉树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对称的二叉树"}},[s._v("#")]),s._v(" 对称的二叉树")]),s._v(" "),e("h2",{attrs:{id:"来源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#来源"}},[s._v("#")]),s._v(" 来源")]),s._v(" "),e("p",[s._v("https://www.nowcoder.com/practice/ff05d44dfdb04e1d83bdbdab320efbcb")]),s._v(" "),e("h2",{attrs:{id:"描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),e("p",[s._v("请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。")]),s._v(" "),e("h2",{attrs:{id:"思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),e("p",[s._v("之前我们做过一道题目，就是二叉树的镜像，那么判断对称二叉树，就变成了二叉树和它的镜像是否相同")]),s._v(" "),e("h2",{attrs:{id:"代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class TreeNode:\n    def __init__(self, x):\n        self.val = x\n        self.left = None\n        self.right = None\nclass Solution:\n    def isSymmetrical(self, pRoot):\n\n        if pRoot == None:\n            return True\n\n        def isMirror(left, right):\n            if left == None and right == None:\n                return True\n            elif left == None or right == None:\n                return False\n            if left.val != right.val:\n                return False\n            ret1 = isMirror(left.left, right.right)\n            ret2 = isMirror(left.right, right.left)\n            return ret1 and ret2\n\n        return isMirror(pRoot.left, pRoot.right)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);