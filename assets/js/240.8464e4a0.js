(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{937:function(n,s,a){"use strict";a.r(s);var e=a(5),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"整数中1出现的个数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整数中1出现的个数"}},[n._v("#")]),n._v(" 整数中1出现的个数")]),n._v(" "),a("p",[a("a",{attrs:{href:"https://www.nowcoder.com/practice/bd7f978302044eee894445e244c7eee6?tpId=13&tqId=11184&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking",target:"_blank",rel:"noopener noreferrer"}},[n._v("题目传送门"),a("OutboundLink")],1)]),n._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[n._v("#")]),n._v(" 题目描述")]),n._v(" "),a("p",[n._v("求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了。ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）")]),n._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[n._v("#")]),n._v(" 思路")]),n._v(" "),a("p",[a("img",{attrs:{src:"/images/%E6%95%B4%E6%95%B0%E4%B8%AD1%E5%87%BA%E7%8E%B0%E7%9A%84%E6%AC%A1%E6%95%B0.png",alt:"整数中1出现的次数"}})]),n._v(" "),a("p",[n._v("如上图所示，如果那个数 是我们 的 1-n 中 n 这个数，那么这个数就是一个特别大的数，不能遍历计算每个数字的1 的个数， 那就只能去寻找1在数字中出现的规律来。")]),n._v(" "),a("p",[n._v("那么我们可以把 这个数字中 ，分段来 看 1 在这个数字片段中可能出现的情况都有多少。")]),n._v(" "),a("p",[n._v("**若 以上 栗子 中的 十万位上的 0  那一位  为 数字1 的话，有多少种 可能？ **")]),n._v(" "),a("p",[n._v("​\t首先  直接 为1 的话，这个数就会大于 我们的n 这个数，所以 它需要 向前一位借 一位，来计算 可能出现的 情况 有多少种，那么就是 一共 有")]),n._v(" "),a("p",[a("code",[n._v("0-3458")]),n._v(" 个数 那么就一共是 3459 中可能性。")]),n._v(" "),a("p",[n._v("​\t"),a("strong",[n._v("那么十万位 后面 出现1 的情况有多少种 可能性 ？")])]),n._v(" "),a("p",[n._v("​\t0 后面一共有5 位，每 一 位 的数字 可能的情况 是 0-9 共 十 个数字，也就是说  后面 为的可能性是 "),a("code",[n._v("10^5")]),n._v(".")]),n._v(" "),a("p",[n._v("那么就是说对于 十万位数字是0 来说，一共有3459*（10^5 )种 可能。")]),n._v(" "),a("p",[n._v("​\t"),a("strong",[n._v("接下来我们在考虑一个 数字 那就是 万 位 上的数字，8，如果8 这一位为1 的话，有多少种可能性？")])]),n._v(" "),a("p",[n._v("如果8 为1 的话，那么就是我们前面的数字 有 1-34590，共"),a("code",[n._v("34591")]),n._v("种情况，后面 是一共 4 位，那么就有\t\t"),a("code",[n._v("10^4")]),n._v("种情况。")]),n._v(" "),a("p",[n._v("那么就是说对于 万位数字是0 来说，一共有34591*(10^4) 种 可能。")]),n._v(" "),a("p",[n._v("​\t"),a("strong",[n._v("我们再考虑另一个特殊的，那就是我们的百位上的 1 那一位，除了现在的n 的百位上是1，那么其他 这个一位为1 的情况，一共有多少种可能？")])]),n._v(" "),a("p",[n._v("如果说1 这个数字不变的话，那么1前面 的位数 可能为1 的可能性就是 0-3459082，后面的两位的 可能性为 0-90，不能大于90，如果大于的话，需要 跟 百位来借 一位了，我们先考虑这种不借位的可能性，那就是")]),n._v(" "),a("p",[n._v("3459083*91，如果借位的话，那么前面就是 0-3459081，后面就10^2-91 为9 种 情况，那么最后 一共有")]),n._v(" "),a("p",[n._v("3459083 x 91+3459082 x 9，最后推导为 3459082 x 91 + 91 + 3459082 x 9，最后为 3459082 *10^2 +91种 可能性。")]),n._v(" "),a("p",[n._v("分析了三种特殊的情况，那么我们可以用递归的方式来找，只不过因为递归的话 时间复杂度比较高，那么我们可以写一个 与递归等价的 while 循环来实现，递归和 while 循环是可以互相转换的。")]),n._v(" "),a("h2",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[n._v("#")]),n._v(" 代码")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("class Solution:\n    def NumberOf1Between1AndN_Solution(self, n):        \n        #循环的出口是 highValue = 0\n        \n        #我们从最低位开始一个位一个位的来寻找 1 的可能出现的 情况次数。\n        \n        # 一开始 精准度为1.高位低位中位 先赋值为1.\n        preceise = 1\n        # 高位数\n        highValue = 1\n        # 低位数\n        lowValue = 1\n        # 中位数\n        midValue =1\n        \n        #计数 后面的位数。\n        count = 0\n        #计数 1 的次数和\n        sumNum = 0\n        #循环的 出口是我们找不到最高位了，那么这个时候就说明，我们遍历到了 这个数字的最高位。\n        while highValue != 0:\n            #高位 先将这个数 除以10 得到高位\n            highValue = n // (preceise * 10)\n            #中位 先将这个数  与 10 取余。\n            midValue = (n // preceise)%10\n            #低位 先将这个数 除以 1 那么低位就是个位后面的，没有就是0.\n            lowValue = n % preceise\n            #每遍历一次 向右移一位，那么就是说 精准度要乘以10.\n            preceise *= 10\n\t\t\t#如果这个数是0 的话，\n            \n            if midValue == 0:\n                #那么它就是高位的值，乘以 10^后面的位数 次方，但是这个时候 对于中位 来说 它是个位，后面没有位，所以是0，\n                num = (highValue)* pow(10,count)\n            #如果这个数 大于1 的话，\n            elif midValue > 1:\n                #那么它 就是 最高位加1 乘以 10^后面的位数 次方，\n                num = (highValue+1)*pow(10,count)\n            else:\n                #否则的话 它就是等于1 的情况了，对于等于1 的1情况，又是比较特殊的情况，它需要 最高位 * 它10 的后面位数个数的次方，然后要加上我们低位 的数值再加 1， 原因在上面的分析中已经给出。\n                num = highValue*pow(10,count)+(lowValue+1)\n            #最后 我们1 出现的 次数 就是这 三个 num 的和，。\n            sumNum += num\n            #没循环一次，这个三个就往左移一次吗，那么这个时候它们 后面的位数也就会 多一位。\n            count += 1\n\t\t#最后返回这个  次数和。\n        return sumNum\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);