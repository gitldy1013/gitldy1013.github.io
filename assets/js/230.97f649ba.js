(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{927:function(n,s,e){"use strict";e.r(s);var a=e(5),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"反转链表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#反转链表"}},[n._v("#")]),n._v(" 反转链表")]),n._v(" "),e("h2",{attrs:{id:"题目描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[n._v("#")]),n._v(" 题目描述")]),n._v(" "),e("p",[n._v("来源：https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca")]),n._v(" "),e("p",[n._v("输入一个链表，反转链表后，输出新链表的表头。")]),n._v(" "),e("h2",{attrs:{id:"思考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[n._v("#")]),n._v(" 思考")]),n._v(" "),e("p",[n._v("这个时候，我们就不能使用上一题的做法了")]),n._v(" "),e("p",[e("img",{attrs:{src:"/images/image-20200425104541126.png",alt:"image-20200425104541126"}})]),n._v(" "),e("p",[n._v("反转后")]),n._v(" "),e("p",[e("img",{attrs:{src:"/images/image-20200425104523244.png",alt:"image-20200425104523244"}})]),n._v(" "),e("p",[n._v("步骤：")]),n._v(" "),e("ul",[e("li",[n._v("将现有的头换成尾，尾部的next换成None")]),n._v(" "),e("li",[n._v("将从第二个指针node开始，循环将next指向前一个")]),n._v(" "),e("li",[n._v("需要一直有一个指针指向还没有反转的链表的头部")])]),n._v(" "),e("p",[n._v("我们需要有三个指针，一个是左指针，中指针，右指针")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("# 反转链表\n# 输入一个链表，反转链表后，输出新链表的表头。\n\n# 链表结构\nclass ListNode:\n    def __init__(self, x):\n        self.val = x\n        self.next = None\n\n# 打印链表\ndef printChain(head):\n    node = head\n    while node:\n        print(node.val)\n        node = node.next\n\nclass Solution:\n    def ReverseList(self, pHead):\n        if pHead == None:\n            return None\n        if pHead.next == None:\n            return pHead\n\n        leftPointer = pHead\n        middlePointer = pHead.next\n        rightPointer = pHead.next.next\n        leftPointer.next = None\n\n        while rightPointer != None:\n            middlePointer.next = leftPointer\n            leftPointer = middlePointer\n            middlePointer = rightPointer\n            rightPointer = rightPointer.next\n\n        middlePointer.next = leftPointer\n\n        return middlePointer\n\nif __name__ == '__main__':\n    # 创建链表\n    l1 = ListNode(1)\n    l2 = ListNode(2)\n    l3 = ListNode(3)\n    l4 = ListNode(4)\n    l5 = ListNode(5)\n\n    l1.next = l2\n    l2.next = l3\n    l3.next = l4\n    l4.next = l5\n\n    print(Solution().ReverseList(l1))\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);