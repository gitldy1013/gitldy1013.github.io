(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{933:function(s,t,a){"use strict";a.r(t);var n=a(5),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"二进制中的1的个数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制中的1的个数"}},[s._v("#")]),s._v(" 二进制中的1的个数")]),s._v(" "),a("h2",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),a("p",[s._v("来源：https://www.nowcoder.com/practice/8ee967e43c2c4ec193b040ea7fbb10b8")]),s._v(" "),a("p",[s._v("输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示")]),s._v(" "),a("h4",{attrs:{id:"补码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补码"}},[s._v("#")]),s._v(" 补码")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("正数不变，负数就是它的正数的反码 + 1")])]),s._v(" "),a("li",[a("p",[s._v("一个负整数（或原码）与其补数（或补码）相加，和为模。")])]),s._v(" "),a("li",[a("p",[s._v("对一个整数的补码再求补码，等于该整数自身。")])]),s._v(" "),a("li",[a("p",[s._v("补码的正零与负零表示方法相同")])])]),s._v(" "),a("blockquote",[a("p",[s._v("-2 的 补码：")]),s._v(" "),a("p",[s._v("-2 的二进制为   1 0 0 0 0 .......0 0 0 1 0 ,")]),s._v(" "),a("p",[s._v("-2 的 反码为：  1 1 1 1 1 .......1 1 1 0 1")]),s._v(" "),a("p",[s._v("-2 的 补码为：  1 1 1 1 1 .......1 1 1 1 0")]),s._v(" "),a("p",[s._v("对于任意一个数n：")]),s._v(" "),a("p",[s._v("n = n & 0xFFFFFFFF")])]),s._v(" "),a("h4",{attrs:{id:"按位取反"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按位取反"}},[s._v("#")]),s._v(" 按位取反 ~")]),s._v(" "),a("p",[s._v("~，用法只有一个那就是按位取反，需要注意的是：")]),s._v(" "),a("ul",[a("li",[s._v("~ 的按位取反，包括符号位")]),s._v(" "),a("li",[s._v("正数各位取反变为负数，显示时转化为其补码")]),s._v(" "),a("li",[s._v("负数本身需要先转换为补码（符号位不变，各位取反再加 1），再对其补码进行各位去反")])]),s._v(" "),a("h5",{attrs:{id:"_1-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5"}},[s._v("#")]),s._v(" 1. ~5")]),s._v(" "),a("p",[s._v("5 的二进制为 0101，")]),s._v(" "),a("p",[s._v("~5")]),s._v(" "),a("ul",[a("li",[s._v("（1）各位取反，1010")]),s._v(" "),a("li",[s._v("（2）变为负数，转化为其补码形式（符号位保持不变），各位取反 1（1101），再加1（1110），也即 -6")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h5",{attrs:{id:"_2-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5"}},[s._v("#")]),s._v(" 2. ~(-5)")]),s._v(" "),a("p",[s._v("-5 因为是负数，存储时存储的是其补码：")]),s._v(" "),a("ul",[a("li",[s._v("-5 的补码是：1011，")]),s._v(" "),a("li",[s._v("~(-5)将其各位取反（包括符号位），也即 0100（4）")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第一种")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("NumberOf1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这一步是求补码的")]),s._v("\n        n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xFFFFFFFF")]),s._v("\n        count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" count\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("NumberOf2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这一步是求补码的")]),s._v("\n        n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xFFFFFFFF")]),s._v("\n        count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            mask "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" i\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" mask "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" count\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第二种：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("           \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("NumberOf1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# write code here")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#补码：正数不变，负数是它的正数的反码 + 1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -2 补码： -2 的 1 0000.。。000010，")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#                 1 1111.。。111101 + 1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-2 的补码就是    1 1111.。。111110")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#把输入的正数n转化为二进制的数，并把0b 替换掉，计算1的数量，如果输入的值不是正数的话")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#一个负整数（或原码）与其补数（或补码）相加，和为模。2 的32 次方 是模。")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#那么就是 2 的32 次方 然后 + n  这是在取一个负数的补码  就相当于  n & 0xffffffff")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#然后计算 这个数里面 1 的 数量")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("replace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("replace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第三种：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding:utf-8 -*-")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("NumberOf1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# write code here")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1 出现的次数为0 次")]),s._v("\n        count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#判断 这个数 n 是不是负数，如果是负数的话 求其补码：")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xffffffff")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果这个数不是0 的话，那么它在二进制的表示中至少有一位是1，所以一开始我们赋值 count +=1.")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#把一个整数先减去1，再和原整数做与运算，会把该整数最右边的1 变从成0，那么一个二进制中有多少个1，就可以进行多少次这样的操作。")]),s._v("\n            n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" count\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v('"\n    例如：一个二进制'),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1100")]),s._v("， 它的第二位 是从最右边数起的一个"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，减去一个"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("后，第二位变成"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("，它后面的两位"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("变成"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，而前面的"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("保持不变，因此结果是"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1011.")]),s._v("\n    那把 这个整数 和它 减去"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 的结果  做一个按位 与运算，相当于 把 最右边的 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 变成 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("。\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1011")]),s._v(" 和 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1100")]),s._v(" 做 按位与 运算  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1011")]),s._v("  结果为  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("，那么刚好是我们 要得到 将最右边的"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 变成"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 的结果   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000.")]),s._v("\n    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);