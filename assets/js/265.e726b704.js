(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{962:function(s,n,t){"use strict";t.r(n);var a=t(5),i=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"快速排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速排序"}},[s._v("#")]),s._v(" 快速排序")]),s._v(" "),t("h2",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),t("p",[s._v("快速排序也是分治的思想，但是它于归并算法更加好，是因为归并算法会用到辅助数组，其空间复杂度为O(n)，而快速排序不需要用到新的数组空间，它的空间复杂度是O(1)")]),s._v(" "),t("p",[s._v("快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：")]),s._v(" "),t("ul",[t("li",[s._v("从数列中挑出一个元素，称为 “基准”（"),t("strong",[s._v("pivot")]),s._v("）；")]),s._v(" "),t("li",[s._v("重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；")]),s._v(" "),t("li",[s._v("递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/1551078742204.gif",alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('def quick_sort(li, start, end):\n    # 分治 一分为二\n    # start=end ,证明要处理的数据只有一个\n    # start>end ,证明右边没有数据\n    if start >= end:\n        return\n    # 定义两个游标，分别指向0和末尾位置\n    left = start\n    right = end\n    # 把0位置的数据，认为是中间值\n    mid = li[left]\n    while left < right:\n        # 让右边游标往左移动，目的是找到小于mid的值，放到left游标位置\n        while left < right and li[right] >= mid:\n            right -= 1\n        print("left 1", li)\n        li[left] = li[right]\n        print("left 2", li)\n        # 让左边游标往右移动，目的是找到大于mid的值，放到right游标位置\n        while left < right and li[left] < mid:\n            left += 1\n        li[right] = li[left]\n        print("right ", li)\n    # while结束后，把mid放到中间位置，left=right\n    li[left] = mid\n    # 递归处理左边的数据\n    quick_sort(li, start, left-1)\n    # 递归处理右边的数据\n    quick_sort(li, left+1, end)\n\nif __name__ == \'__main__\':\n    l = [1,5,4,6,2,8]\n    # l = 3 [2,1,5,6,5,4]\n    # [2, 1, 5, 6, 5, 4]\n    quick_sort(l,0,len(l)-1)\n    print(l)\n    # 稳定性：不稳定\n    # 最优时间复杂度：O(nlogn)\n    # 最坏时间复杂度：O(n^2)\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br")])])])}),[],!1,null,null,null);n.default=i.exports}}]);