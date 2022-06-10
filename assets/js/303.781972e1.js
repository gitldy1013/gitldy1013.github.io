(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{1e3:function(a,v,s){"use strict";s.r(v);var _=s(5),t=Object(_.a)({},(function(){var a=this,v=a.$createElement,s=a._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"为什么synchronized无法禁止指令重排-却能保证有序性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么synchronized无法禁止指令重排-却能保证有序性"}},[a._v("#")]),a._v(" 为什么Synchronized无法禁止指令重排，却能保证有序性")]),a._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),s("p",[a._v("首先我们要分析下这道题，这简单的一个问题，其实里面还是包含了很多信息的，要想回答好这个问题，面试者至少要知道一下概念：")]),a._v(" "),s("ul",[s("li",[a._v("Java内存模型")]),a._v(" "),s("li",[a._v("并发编程有序性问题")]),a._v(" "),s("li",[a._v("指令重排")]),a._v(" "),s("li",[a._v("synchronized锁")]),a._v(" "),s("li",[a._v("可重入锁")]),a._v(" "),s("li",[a._v("排它锁")]),a._v(" "),s("li",[a._v("as-if-serial语义")]),a._v(" "),s("li",[a._v("单线程&多线程")])]),a._v(" "),s("h2",{attrs:{id:"标准解答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标准解答"}},[a._v("#")]),a._v(" 标准解答")]),a._v(" "),s("p",[a._v("为了进一步提升计算机各方面能力，在硬件层面做了很多优化，如处理器优化和指令重排等，但是这些技术的引入就会导致有序性问题。")]),a._v(" "),s("blockquote",[s("p",[a._v("先解释什么是有序性问题，也知道是什么原因导致的有序性问题")])]),a._v(" "),s("p",[a._v("我们也知道，最好的解决有序性问题的办法，就是禁止处理器优化和指令重排，就像volatile中使用内存屏障一样。")]),a._v(" "),s("blockquote",[s("p",[a._v("表明你知道啥是指令重排，也知道他的实现原理")])]),a._v(" "),s("p",[a._v("但是，虽然很多硬件都会为了优化做一些重排，但是在Java中，不管怎么排序，都不能影响单线程程序的执行结果。这就是as-if-serial语义，所有硬件优化的前提都是必须遵守as-if-serial语义。")]),a._v(" "),s("p",[a._v("as-if-serial语义把"),s("strong",[a._v("单线程")]),a._v("程序保护了起来，遵守as-if-serial语义的编译器，runtime 和处理器共同为编写单线程程序的程序员创建了一个幻觉：单线程程序是按程序的顺序来执行的。as-if-serial语义使单线程程序员无需担心重排序会 干扰他们，也无需担心内存可见性问题。")]),a._v(" "),s("blockquote",[s("p",[a._v("重点！解释下什么是as-if-serial语义，因为这是这道题的第一个关键词，答上来就对了一半了")])]),a._v(" "),s("p",[a._v("再说下synchronized，他是Java提供的锁，可以通过他对Java中的对象加锁，并且他是一种排他的、可重入的锁。")]),a._v(" "),s("p",[a._v("所以，当某个线程执行到一段被synchronized修饰的代码之前，会先进行加锁，执行完之后再进行解锁。在加锁之后，解锁之前，其他线程是无法再次获得锁的，只有这条加锁线程可以重复获得该锁。")]),a._v(" "),s("blockquote",[s("p",[a._v("介绍synchronized的原理，这是本题的第二个关键点，到这里基本就可以拿满分了。")])]),a._v(" "),s("p",[a._v("synchronized通过排他锁的方式就保证了同一时间内，被synchronized修饰的代码是单线程执行的。所以呢，这就满足了as-if-serial语义的一个关键前提，那就是"),s("strong",[a._v("单线程")]),a._v("，因为有as-if-serial语义保证，单线程的有序性就天然存在了。")]),a._v(" "),s("h2",{attrs:{id:"来源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#来源"}},[a._v("#")]),a._v(" 来源")]),a._v(" "),s("p",[a._v("https://mp.weixin.qq.com/s/Pd6dOXaMQFUHfAUnOhnwtw")])])}),[],!1,null,null,null);v.default=t.exports}}]);