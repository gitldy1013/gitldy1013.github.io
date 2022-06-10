(window.webpackJsonp=window.webpackJsonp||[]).push([[952],{1649:function(t,a,s){"use strict";s.r(a);var r=s(5),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"actor-模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actor-模型"}},[t._v("#")]),t._v(" Actor 模型")]),t._v(" "),s("h2",{attrs:{id:"什么是-actor-模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-actor-模型"}},[t._v("#")]),t._v(" 什么是 Actor 模型")]),t._v(" "),s("p",[t._v("Actor 模式是一个解决分布式计算的数学模型，其中 Actor 是基础，它能回应接收到消息，能够自我决策，创建更多的 Actor，发送更多的消息，决定如何回应下一个接收到的消息。Actor 认为一切皆是 Actor，类似于面向对象认为一切皆 Object 一样。OO 的执行是顺序的，Actor 模型内在设计就是并行的")]),t._v(" "),s("h2",{attrs:{id:"actor-是异步的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actor-是异步的"}},[t._v("#")]),t._v(" Actor 是异步的")]),t._v(" "),s("p",[t._v("Actor 是计算实体，它回复接收到的消息，能够并行的：")]),t._v(" "),s("ul",[s("li",[t._v("发生有限的消息给其他 Actor")]),t._v(" "),s("li",[t._v("创建有限数目的新 Actor")]),t._v(" "),s("li",[t._v("指定一个消息到达时的行为")])]),t._v(" "),s("p",[t._v("这些操作并没有顺序要求，它们能够并行地实施。由于没有对消息的时序做规定，Actor 模式是一种异步模型，发送到 Actor 不等待消息被接收而继续执行。Actor 之间不共享状态，如果想获取其他 Actor 的状态，只能通过消息请求的方式")]),t._v(" "),s("p",[t._v("Actor 在消息内部指定接收消息的 Actor 地址。Actor 可以用自己的地址发送消息，相当于自己接收到自己发送的消息，可以驱动自己的状态")]),t._v(" "),s("h2",{attrs:{id:"所谓真正的-actor-模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#所谓真正的-actor-模型"}},[t._v("#")]),t._v(" 所谓真正的 Actor 模型")]),t._v(" "),s("p",[t._v("Actor 可以被认为是在用户空间实现的并发实体，所以它应该是应用级别的线程。如果认同这个观点那么 "),s("strong",[t._v("Actor 要满足的要求 = 操作系统对进程/线程")]),t._v(" 提出的要求一样")]),t._v(" "),s("h2",{attrs:{id:"内存结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存结构"}},[t._v("#")]),t._v(" 内存结构")]),t._v(" "),s("p",[t._v("每个并发实体都是要有一个固定的数据结构，必须有一个容器可以保存当前所有的并发实体。这一点基本上很容易满足，Akka 中 Actor 就是一个类，所以它的结构就是这个类的数据结构，大小也就是这个类的大小。Akka 中的 Dispatcher 保存有所有 Actor 的列表")]),t._v(" "),s("h2",{attrs:{id:"并发原语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发原语"}},[t._v("#")]),t._v(" 并发原语")]),t._v(" "),s("p",[t._v("操作系统的是通过临界区，锁来定义多线程共享数据模型的。在 Actor 中是通过消息来共享数据的。基于消息传递要求“数据只读”，你发送出去的数据再修改肯定就不对了。但是这一点在 Java 里面无论如何都是做不到的，你不修改变量的引用但是还可以修改变量里面的值，调用对象的方法。")]),t._v(" "),s("h2",{attrs:{id:"调度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调度"}},[t._v("#")]),t._v(" 调度")]),t._v(" "),s("p",[t._v("这是最重要的：没有调度，并发实体根本不能称之为并发实体。操作系统中 CPU 是由内核管理的，调度算法是基于时间片来调任务的，内核随时可以剥夺一个任务的 CPU 使用权这就是“抢占”。这一点非常重要，没有这个功能就意味着调度是不公平的。一个任务耗费大量 CPU 会把另个一任务给饿死。但是在用户空间（应用层）很难实现这一点，毕竟 CPU 是不受应用程序的控制的，没有把办法剥夺。抢占看似可有可无，但是没有它就没有“公平调度”，也就谈不上并发。（有任务撑死，有任务饿死）")]),t._v(" "),s("h2",{attrs:{id:"所谓-公平调度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#所谓-公平调度"}},[t._v("#")]),t._v(" 所谓“公平调度”")]),t._v(" "),s("p",[t._v("比如写两个 Actor，使用无限循环输出字符串（while(true)）会疯狂的吃 CPU，如果是可抢占的公平调度，则 actor1 和 actor2 应该是比较有规律的交替（大家得到的 CPU 时间差不多）")]),t._v(" "),s("h3",{attrs:{id:"java-中的-akka"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-中的-akka"}},[t._v("#")]),t._v(" Java 中的 Akka")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("    test1\n    test1\n    test1\n    ...\n    test2\n    test2\n    test2\n    ...\n    test1\n    ...\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h3",{attrs:{id:"erlang"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#erlang"}},[t._v("#")]),t._v(" ErLang")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("    test1\n    test2\n    test1\n    test2\n    test1\n    test2\n    test1\n    test2\n    ...\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("ErLang 非常均匀的任务切换，实现了“可抢占的公平”")])])}),[],!1,null,null,null);a.default=e.exports}}]);