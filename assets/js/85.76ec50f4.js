(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{781:function(a,t,s){"use strict";s.r(t);var e=s(5),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"直接内存-direct-memory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#直接内存-direct-memory"}},[a._v("#")]),a._v(" 直接内存 Direct Memory")]),a._v(" "),s("p",[a._v("不是虚拟机运行时数据区的一部分，也不是《Java虚拟机规范》中定义的内存区域。")]),a._v(" "),s("p",[a._v("直接内存是在Java堆外的、直接向系统申请的内存区间。")]),a._v(" "),s("p",[a._v("来源于NIO，通过存在堆中的DirectByteBuffer操作Native内存")]),a._v(" "),s("p",[a._v("通常，访问直接内存的速度会优于Java堆。即读写性能高。")]),a._v(" "),s("ul",[s("li",[a._v("因此出于性能考虑，读写频繁的场合可能会考虑使用直接内存。")]),a._v(" "),s("li",[a._v("Java的NIO库允许Java程序使用直接内存，用于数据缓冲区")])]),a._v(" "),s("p",[a._v("使用下列代码，直接分配本地内存空间")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" BUFFER "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 1GB")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ByteBuffer")]),a._v(" byteBuffer "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ByteBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("allocateDirect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("BUFFER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"非直接缓存区和缓存区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非直接缓存区和缓存区"}},[a._v("#")]),a._v(" 非直接缓存区和缓存区")]),a._v(" "),s("p",[a._v("原来采用BIO的架构，我们需要从用户态切换成内核态")]),a._v(" "),s("p",[s("img",{attrs:{src:"/images/image-20200709170907611.png",alt:"image-20200709170907611"}})]),a._v(" "),s("p",[a._v("NIO的方式使用了缓存区的概念")]),a._v(" "),s("h2",{attrs:{id:"存在的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存在的问题"}},[a._v("#")]),a._v(" 存在的问题")]),a._v(" "),s("p",[a._v("也可能导致outofMemoryError异常")]),a._v(" "),s("p",[a._v("由于直接内存在Java堆外，因此它的大小不会直接受限于-xmx指定的最大堆大小，但是系统内存是有限的，Java堆和直接内存的总和依然受限于操作系统能给出的最大内存。\n缺点")]),a._v(" "),s("ul",[s("li",[a._v("分配回收成本较高")]),a._v(" "),s("li",[a._v("不受JVM内存回收管理")])]),a._v(" "),s("p",[a._v("直接内存大小可以通过MaxDirectMemorySize设置")]),a._v(" "),s("p",[a._v("如果不指定，默认与堆的最大值-xmx参数值一致")]),a._v(" "),s("p",[s("img",{attrs:{src:"/images/image-20200709230647277.png",alt:"image-20200709230647277"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);