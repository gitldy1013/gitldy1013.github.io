(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{932:function(s,n,a){"use strict";a.r(n);var t=a(5),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"链表中环的入口结点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链表中环的入口结点"}},[s._v("#")]),s._v(" 链表中环的入口结点")]),s._v(" "),a("h2",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),a("p",[s._v("来源：https://www.nowcoder.com/practice/253d2c59ec3e4bc68da16833f79a38e4")]),s._v(" "),a("p",[s._v("给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null")]),s._v(" "),a("h2",{attrs:{id:"思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[s._v("#")]),s._v(" 思考")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20200426105846170.png",alt:"image-20200426105846170"}})]),s._v(" "),a("p",[a("strong",[s._v("如何确定是否有环")])]),s._v(" "),a("ul",[a("li",[s._v("把所有出现的点，都放到list中")]),s._v(" "),a("li",[s._v("如果下次的节点，在list中出现，说明出现了环")]),s._v(" "),a("li",[s._v("但是这种时间复杂度比较高")])]),s._v(" "),a("p",[a("strong",[s._v("第二种方式")])]),s._v(" "),a("p",[s._v("定义：两个 指针，一个是慢指针，一个是快指针")]),s._v(" "),a("p",[s._v("假设 slow 走了 L 步，那么 fast 就走了 2L 步。")]),s._v(" "),a("p",[s._v("我们 链表的头部 到 链表的环的入口结点处 的距离是 S")]),s._v(" "),a("p",[s._v("那么 从入口结点 到 我们 快慢指针相遇的地点 的距离 为 d。")]),s._v(" "),a("p",[s._v("链表的环中，慢指针走过的距离是d，那么没走过的距离是M。")]),s._v(" "),a("p",[s._v("我们不确定的是快指针在链表的环里走过了多少圈来与慢指针相遇，因此 将这个参数设置为n。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("那么 L = s + d\n2L = 2(s+d) = n*(m + d) + d + s\n由上面公式 推导出 n(m+d) = s + d\n得到：s = n(m+d) -d；\ns = nm + (n-1)(d)\ns = m + (n-1)(m+d)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"完整代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整代码"}},[s._v("#")]),s._v(" 完整代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# -*- coding:utf-8 -*-\n# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None\nclass Solution:\n    def EntryNodeOfLoop(self, pHead):\n        # write code here\n        #首先需要定义两个指针，其中一个快，跳两步，一个慢跳一步。\n        #循环跳\n        #要么是快的指针 为 none（没有环），要么是快慢指针相等（有环）。\n        if pHead == None:\n            return None \n\t\t#定义两个指针，一个快的一个慢的。\n        fastPointer = pHead\n        slowPointer = pHead\n\t\t#当快指针存在时，而且快指针的结点指向的下一个也存在\n        while fastPointer and fastPointer.next :\n            #那么让快指针走两步\n            fastPointer = fastPointer.next.next\n            #让慢指针走一步\n            slowPointer = slowPointer.next\n            #如果慢指针等于快指针时，那么就说明这个链表中有环。有环的话那么就跳出，break\n            if fastPointer == slowPointer:\n                break\n        #如果说两个指针没有相等的时候，快指针就已经走到链表的尽头了，说明这个链表没有环。那么就返回None。\n        if fastPointer == None or fastPointer.next == None:\n            return None\n        #如果slow 走了 l 的长度 那么 fast 就走了 2l 的长度\n        #假设 从开始到入口点的长度是 s；slow 在环里面走的长度是 d\n\n        # 那么  L = s + d\n        #假设 环内 slow 没走的 长度 是 m; fast 走的长度是多少\n        # fast 走的长度 就是 ( m + d ) * n + d + s = 2 L\n        #带入 ( m + d ) * n + d + s = 2 （s + d ）\n        # s = m + (n-1)(m+d)\n\t\t#有环的话，那么就让快指针从头开始走，这次一次走一步，\n        fastPointer = pHead\n\t\t#此时慢指针还在环里走着，没有走到结点\n        while fastPointer != slowPointer:\n            fastPointer = fastPointer.next\n            slowPointer = slowPointer.next\n        #当两个指针相等时，就会相遇，这时返回一个指针的值，就为 入口结点处。\n        return fastPointer\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);