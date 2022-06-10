(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{966:function(s,a,n){"use strict";n.r(a);var e=n(5),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"旋转数组的最小数字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#旋转数组的最小数字"}},[s._v("#")]),s._v(" 旋转数组的最小数字")]),s._v(" "),n("h2",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),n("p",[s._v("来源：https://www.nowcoder.com/practice/9f3231a991af4f55b95579b44b7a01ba")]),s._v(" "),n("p",[s._v("把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。")]),s._v(" "),n("h2",{attrs:{id:"暴力破解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#暴力破解"}},[s._v("#")]),s._v(" 暴力破解")]),s._v(" "),n("p",[s._v("第一种方法就是遍历全部的元素，然后找出最小的，时间复杂度为："),n("code",[s._v("O(n)")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Solution:\n    def minNumberInRotateArray(self, rotateArray):\n        minNum = 0\n        # 第一种方法，就是遍历所以的元素，找出最小的\n        for i in range(0, len(rotateArray)):\n            minNum = minNum if minNum < rotateArray[i] and minNum != 0 else rotateArray[i]\n        return minNum\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"方式2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方式2"}},[s._v("#")]),s._v(" 方式2")]),s._v(" "),n("p",[s._v("上面的暴力破解方法，没有用到题目的特性，就是非递减排序的数组，这个时候我们就可以使用二分查找法，来找出最小的元素。")]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/image-20200423120520734.png",alt:"image-20200423120520734"}})]),s._v(" "),n("p",[s._v("首先这个数组局部有序的，假设我们查询一个数，如找出最小是1")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("第一次比较的数为： 5，通过  3 < 5, 2 < 5，  |5 - 3| < |5 - 2| ，所以从右边找\n第二次比较：  5 > 1,  2 > 1，这个时候，它两边的数都比它小，说明它就是最小值。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("img",{attrs:{src:"/images/image-20200423121048934.png",alt:"image-20200423121048934"}})]),s._v(" "),n("p",[s._v("这个时候，我们就需要将原来的 二分查找法变换一下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("|a[middle] - left| < |a[middle] - right|\n如果成立，就往右边查找\n如果不成立，那就左边查找\n\n如果 middle < left，middle < right时，那么就说明这个数是最小值\n即比两边的数都更小\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("给定一个二分查找法的代码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Solution:\n\n    # 二分查找法\n    # 有序的数组中使用\n    def bSearch(self, array, target):\n        left = 0\n        right = len(array) - 1\n        while left < right:\n            # 右移1位，相当于除以2\n            mid = (left + right) >> 1\n            if target == mid:\n                return mid\n            if target > mid:\n                left = mid + 1\n            else:\n                right = mid - 1\n        return None\n\nif __name__ == '__main__':\n    print(Solution().bSearch([1,2,3,4,5,6,7,8,9,10], 8))\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("下面我们需要改进一下代码，让其能够找出我们的最小值。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# -*- coding:utf-8 -*-\nclass Solution:\n    # 二分查找法\n    # 有序的数组中使用\n    def minNumberInRotateArray(self, rotateArray):\n        if not rotateArray:\n            return None\n        left = 0\n        right = len(rotateArray) - 1\n        while left <= right:\n            middle = (left + right) >> 1\n            # middle 比两边的都小，说明是最小值\n            if rotateArray[middle] < rotateArray[middle - 1]:\n                return rotateArray[middle]\n            elif rotateArray[middle] < rotateArray[right]:\n                right = middle - 1                \n            else:\n                left = middle + 1\n        return 0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);