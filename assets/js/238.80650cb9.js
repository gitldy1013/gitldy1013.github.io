(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{935:function(s,t,a){"use strict";a.r(t);var n=a(5),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"不用加减乘除做加法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不用加减乘除做加法"}},[s._v("#")]),s._v(" 不用加减乘除做加法")]),s._v(" "),a("h2",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),a("p",[s._v("来源：https://www.nowcoder.com/practice/59ac416b4b944300b617d4f7f111b215")]),s._v(" "),a("p",[s._v("写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。")]),s._v(" "),a("h2",{attrs:{id:"思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[s._v("#")]),s._v(" 思考")]),s._v(" "),a("p",[s._v("对于数字运算，如果说四则运算不能用的话，那么我们只能用位运算来做了。")]),s._v(" "),a("p",[s._v("我们以 5 + 17 为例 结果为 22，那么 22 的计算结果，我们可以分为三步 来进行：")]),s._v(" "),a("p",[s._v("​\t第一步： 只做各位相加不进位  也就是说 没一位上的数字 相应的来相加 但是不进位，那么  5 + 7 为 12")]),s._v(" "),a("p",[s._v("​\t个位数 5 和 7 相加 不进位 是2  十位是0 和1  相加 为 1")]),s._v(" "),a("p",[s._v("​\t第二步： 5 + 7 中有进位，进位值 是10 ;")]),s._v(" "),a("p",[s._v("​\t第三步： 把前面两个结果 加起来： 12 + 10 = 22")]),s._v(" "),a("p",[s._v("以上为我们用十进制计算的 策略，那么 我们用于位运算中是不是也合适，我们来举个栗子：")]),s._v(" "),a("p",[s._v("还是以 5 + 17 为例，那么 5 的二进制是101 ； 17 的二进制是 10001；")]),s._v(" "),a("p",[s._v("第一步：各位相加 但不进位： 101 + 10001 = 10110  不进位的话  结果为 10100 （最后一位两个数都是1，相加的结果需要进位，但是这一位不进位，意味着结果仍然是0）")]),s._v(" "),a("p",[s._v("第二步： 记下进位，它只在最后一位相加时产生了一个进位。")]),s._v(" "),a("p",[s._v("第三步： 把前面两个结果相加，得到的结果是 10110.")]),s._v(" "),a("p",[a("strong",[s._v("那么现在我们把前面的 二进制的加法用位运算来替代的话")])]),s._v(" "),a("p",[s._v("第一步的 求 和 运算就是 不考虑 进位的话，对每一位来相加，0 和0 以及  1 和1 的结果都是0  , 0+1 或者 1+0 的结果 都是1；那么我们会看出它与我们学过的异或运算相同，就是相同为假，不同为真，所以叫 异  或  XOR 。")]),s._v(" "),a("p",[s._v("第二步： 对0 加 0、1加0、0加1 而言，都不会产生进位，只有1+1 的时候，会产生一个进位。此时 我们可以想象成两个数 先做了一个 位 与 & 运算，然后再向 左移 一位。只有两个数是1 的时候，位与 & 得到的结果是 1，其余的都是0。")]),s._v(" "),a("p",[s._v("第三步：把前面两个步骤的结果再相加，然后在继续判断是否有进位，直到没有进位为止，那么此时的相加的过程，依然是重复前面的两步，直到不产生进位为止。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/%E4%B8%8D%E7%94%A8%E5%8A%A0%E5%87%8F%E6%B3%95%E7%AE%97%E5%92%8C%E8%BF%90%E7%AE%97.png",alt:"不用加减法算和运算"}})]),s._v(" "),a("h2",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding:utf-8 -*-")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第一种代码：循环。简洁但是原理相同，那么我们以下面第二段代码为例；来解析。")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# while (num2):")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     num1, num2 = (num1 ^ num2) & 0xFFFFFFFF, ((num1 & num2) << 1) & 0xFFFFFFFF")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# return num1 if num1 <= 0x7FFFFFFF else ~(num1 ^ 0xFFFFFFFF)")]),s._v("\n\t\t\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第二种代码：")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#首先两个数做 一个 异或 运算^ 那就是 在不进位的情况下，让两个相加 求和。")]),s._v("\n        xorNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" num2\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#让两个数 做 位与 操作，然后再向 左 移 一位，得到它 向前进位的值。")]),s._v("\n        andNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" num2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#判断，当 进位 的值不等于0 的时候，说明 一直有进位，也就是 过程没有结束。")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" andNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#那么我们就继续上面的操作。但是这次的 数值 改为上次的两个结果，")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#一个 是异或的结果，一个是 与 操作 & 以后 左移一位的 结果。")]),s._v("\n            tmp1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" xorNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" andNum\n            tmp2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xorNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" andNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#因为如果这个数为负数的话，那么负数 左移 一位与正数 不同，负数 是数值变小，正数 数值变大")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果是正数的话那么这一步就 不变，如果是负数的话，这一步就对负数来起作用。")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对于python来说  负数的 二进制 可能会有无数个1，我们用这个方法让它变成一个可数的数字长度。")]),s._v("\n            tmp1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tmp1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xffffffff")]),s._v("\n\n            xorNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tmp1\n            andNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tmp2\n         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#一个负整数（或原码）与其补数（或补码）相加，和为模。 0xffffffff ")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ~(xorNum ^ 0xFFFFFFFF)  这个是 异或数  与  模 来 异或，最后 按位 取反 来求得 负数的补码。")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" xorNum "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" xorNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x7ffffff")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xorNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xFFFFFFFF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);