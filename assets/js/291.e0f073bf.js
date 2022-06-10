(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{988:function(a,s,n){"use strict";n.r(s);var t=n(5),e=Object(t.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("ul",[n("li",[a._v("JUC（java.util.concurrent）\n"),n("ul",[n("li",[a._v("进程和线程\n"),n("ul",[n("li",[a._v("进程：后台运行的程序（我们打开的一个软件，就是进程）")]),a._v(" "),n("li",[a._v("线程：轻量级的进程，并且一个进程包含多个线程（同在一个软件内，同时运行窗口，就是线程）")])])]),a._v(" "),n("li",[a._v("并发和并行\n"),n("ul",[n("li",[a._v("并发：同时访问某个东西，就是并发")]),a._v(" "),n("li",[a._v("并行：一起做某些事情，就是并行")])])])])]),a._v(" "),n("li",[a._v("JUC下的三个包\n"),n("ul",[n("li",[a._v("java.util.concurrent\n"),n("ul",[n("li",[a._v("java.util.concurrent.atomic")]),a._v(" "),n("li",[a._v("java.util.concurrent.locks")])])])])])]),a._v(" "),n("h2",{attrs:{id:"谈谈对volatile的理解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#谈谈对volatile的理解"}},[a._v("#")]),a._v(" 谈谈对Volatile的理解")]),a._v(" "),n("p",[a._v("Volatile在日常的单线程环境是应用不到的")]),a._v(" "),n("ul",[n("li",[a._v("Volatile是Java虚拟机提供的"),n("code",[a._v("轻量级")]),a._v("的同步机制（三大特性）\n"),n("ul",[n("li",[a._v("保证可见性")]),a._v(" "),n("li",[a._v("不保证原子性")]),a._v(" "),n("li",[a._v("禁止指令重排")])])])]),a._v(" "),n("h2",{attrs:{id:"jmm是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jmm是什么"}},[a._v("#")]),a._v(" JMM是什么")]),a._v(" "),n("p",[a._v("JMM是Java内存模型，也就是Java Memory Model，简称JMM，本身是一种抽象的概念，实际上并不存在，它描述的是一组规则或规范，通过这组规范定义了程序中各个变量（包括实例字段，静态字段和构成数组对象的元素）的访问方式")]),a._v(" "),n("p",[a._v("JMM关于同步的规定：")]),a._v(" "),n("ul",[n("li",[a._v("线程解锁前，必须把共享变量的值刷新回主内存")]),a._v(" "),n("li",[a._v("线程加锁前，必须读取主内存的最新值，到自己的工作内存")]),a._v(" "),n("li",[a._v("加锁和解锁是同一把锁")])]),a._v(" "),n("p",[a._v("由于JVM运行程序的实体是线程，而每个线程创建时JVM都会为其创建一个工作内存（有些地方称为栈空间），工作内存是每个线程的私有数据区域，而Java内存模型中规定所有变量都存储在主内存，主内存是共享内存区域，所有线程都可以访问，"),n("code",[a._v("但线程对变量的操作（读取赋值等）必须在工作内存中进行，首先要将变量从主内存拷贝到自己的工作内存空间，然后对变量进行操作，操作完成后再将变量写会主内存")]),a._v("，不能直接操作主内存中的变量，各个线程中的工作内存中存储着主内存中的变量副本拷贝，因此不同的线程间无法访问对方的工作内存，线程间的通信（传值）必须通过主内存来完成，其简要访问过程：")]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/image-20200309153225758.png",alt:"image-20200309153225758"}})]),a._v(" "),n("p",[a._v("数据传输速率：硬盘 < 内存 < < cache < CPU")]),a._v(" "),n("p",[a._v("上面提到了两个概念：主内存  和 工作内存")]),a._v(" "),n("ul",[n("li",[n("p",[a._v("主内存：就是计算机的内存，也就是经常提到的8G内存，16G内存")])]),a._v(" "),n("li",[n("p",[a._v("工作内存：但我们实例化 new student，那么 age = 25 也是存储在主内存中")]),a._v(" "),n("ul",[n("li",[a._v("当同时有三个线程同时访问 student中的age变量时，那么每个线程都会拷贝一份，到各自的工作内存，从而实现了变量的拷贝")])]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/image-20200309154435933.png",alt:"image-20200309154435933"}})])])]),a._v(" "),n("p",[a._v("即：JMM内存模型的可见性，指的是当主内存区域中的值被某个线程写入更改后，其它线程会马上知晓更改后的值，并重新得到更改后的值。")]),a._v(" "),n("h2",{attrs:{id:"缓存一致性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#缓存一致性"}},[a._v("#")]),a._v(" 缓存一致性")]),a._v(" "),n("p",[a._v("为什么这里主线程中某个值被更改后，其它线程能马上知晓呢？其实这里是用到了总线嗅探技术")]),a._v(" "),n("p",[a._v("在说嗅探技术之前，首先谈谈缓存一致性的问题，就是当多个处理器运算任务都涉及到同一块主内存区域的时候，将可能导致各自的缓存数据不一。")]),a._v(" "),n("p",[a._v("为了解决缓存一致性的问题，需要各个处理器访问缓存时都遵循一些协议，在读写时要根据协议进行操作，这类协议主要有MSI、MESI等等。")]),a._v(" "),n("h3",{attrs:{id:"mesi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mesi"}},[a._v("#")]),a._v(" MESI")]),a._v(" "),n("p",[a._v("当CPU写数据时，如果发现操作的变量是共享变量，即在其它CPU中也存在该变量的副本，会发出信号通知其它CPU将该内存变量的缓存行设置为无效，因此当其它CPU读取这个变量的时，发现自己缓存该变量的缓存行是无效的，那么它就会从内存中重新读取。")]),a._v(" "),n("h3",{attrs:{id:"总线嗅探"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总线嗅探"}},[a._v("#")]),a._v(" 总线嗅探")]),a._v(" "),n("p",[a._v("那么是如何发现数据是否失效呢？")]),a._v(" "),n("p",[a._v("这里是用到了总线嗅探技术，就是每个处理器通过嗅探在总线上传播的数据来检查自己缓存值是否过期了，当处理器发现自己的缓存行对应的内存地址被修改，就会将当前处理器的缓存行设置为无效状态，当处理器对这个数据进行修改操作的时候，会重新从内存中把数据读取到处理器缓存中。")]),a._v(" "),n("h3",{attrs:{id:"总线风暴"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总线风暴"}},[a._v("#")]),a._v(" 总线风暴")]),a._v(" "),n("p",[a._v("总线嗅探技术有哪些缺点？")]),a._v(" "),n("p",[a._v("由于Volatile的MESI缓存一致性协议，需要不断的从主内存嗅探和CAS循环，无效的交互会导致总线带宽达到峰值。因此不要大量使用volatile关键字，至于什么时候使用volatile、什么时候用锁以及Syschonized都是需要根据实际场景的。")]),a._v(" "),n("h2",{attrs:{id:"jmm的特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jmm的特性"}},[a._v("#")]),a._v(" JMM的特性")]),a._v(" "),n("p",[a._v("JMM的三大特性，volatile只保证了两个，即可见性和有序性，不满足原子性")]),a._v(" "),n("ul",[n("li",[a._v("可见性")]),a._v(" "),n("li",[a._v("原子性")]),a._v(" "),n("li",[a._v("有序性")])]),a._v(" "),n("h2",{attrs:{id:"可见性代码验证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可见性代码验证"}},[a._v("#")]),a._v(" 可见性代码验证")]),a._v(" "),n("p",[a._v("但我们对于成员变量没有添加任何修饰时，是无法感知其它线程修改后的值")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('package com.moxi.interview.study.thread;\n\n/**\n * Volatile Java虚拟机提供的轻量级同步机制\n *\n * 可见性（及时通知）\n * 不保证原子性\n * 禁止指令重排\n *\n * @author: 陌溪\n * @create: 2020-03-09-15:58\n */\n\nimport java.util.concurrent.TimeUnit;\n\n/**\n * 假设是主物理内存\n */\nclass MyData {\n\n    int number = 0;\n\n    public void addTo60() {\n        this.number = 60;\n    }\n}\n\n/**\n * 验证volatile的可见性\n * 1. 假设int number = 0， number变量之前没有添加volatile关键字修饰\n */\npublic class VolatileDemo {\n\n    public static void main(String args []) {\n\n        // 资源类\n        MyData myData = new MyData();\n\n        // AAA线程 实现了Runnable接口的，lambda表达式\n        new Thread(() -> {\n\n            System.out.println(Thread.currentThread().getName() + "\\t come in");\n\n            // 线程睡眠3秒，假设在进行运算\n            try {\n                TimeUnit.SECONDS.sleep(3);\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n            // 修改number的值\n            myData.addTo60();\n\n            // 输出修改后的值\n            System.out.println(Thread.currentThread().getName() + "\\t update number value:" + myData.number);\n\n        }, "AAA").start();\n\n        while(myData.number == 0) {\n            // main线程就一直在这里等待循环，直到number的值不等于零\n        }\n\n        // 按道理这个值是不可能打印出来的，因为主线程运行的时候，number的值为0，所以一直在循环\n        // 如果能输出这句话，说明AAA线程在睡眠3秒后，更新的number的值，重新写入到主内存，并被main线程感知到了\n        System.out.println(Thread.currentThread().getName() + "\\t mission is over");\n\n        /**\n         * 最后输出结果：\n         * AAA\t come in\n         * AAA\t update number value:60\n         * 最后线程没有停止，并行没有输出  mission is over 这句话，说明没有用volatile修饰的变量，是没有可见性\n         */\n\n    }\n}\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br"),n("span",{staticClass:"line-number"},[a._v("25")]),n("br"),n("span",{staticClass:"line-number"},[a._v("26")]),n("br"),n("span",{staticClass:"line-number"},[a._v("27")]),n("br"),n("span",{staticClass:"line-number"},[a._v("28")]),n("br"),n("span",{staticClass:"line-number"},[a._v("29")]),n("br"),n("span",{staticClass:"line-number"},[a._v("30")]),n("br"),n("span",{staticClass:"line-number"},[a._v("31")]),n("br"),n("span",{staticClass:"line-number"},[a._v("32")]),n("br"),n("span",{staticClass:"line-number"},[a._v("33")]),n("br"),n("span",{staticClass:"line-number"},[a._v("34")]),n("br"),n("span",{staticClass:"line-number"},[a._v("35")]),n("br"),n("span",{staticClass:"line-number"},[a._v("36")]),n("br"),n("span",{staticClass:"line-number"},[a._v("37")]),n("br"),n("span",{staticClass:"line-number"},[a._v("38")]),n("br"),n("span",{staticClass:"line-number"},[a._v("39")]),n("br"),n("span",{staticClass:"line-number"},[a._v("40")]),n("br"),n("span",{staticClass:"line-number"},[a._v("41")]),n("br"),n("span",{staticClass:"line-number"},[a._v("42")]),n("br"),n("span",{staticClass:"line-number"},[a._v("43")]),n("br"),n("span",{staticClass:"line-number"},[a._v("44")]),n("br"),n("span",{staticClass:"line-number"},[a._v("45")]),n("br"),n("span",{staticClass:"line-number"},[a._v("46")]),n("br"),n("span",{staticClass:"line-number"},[a._v("47")]),n("br"),n("span",{staticClass:"line-number"},[a._v("48")]),n("br"),n("span",{staticClass:"line-number"},[a._v("49")]),n("br"),n("span",{staticClass:"line-number"},[a._v("50")]),n("br"),n("span",{staticClass:"line-number"},[a._v("51")]),n("br"),n("span",{staticClass:"line-number"},[a._v("52")]),n("br"),n("span",{staticClass:"line-number"},[a._v("53")]),n("br"),n("span",{staticClass:"line-number"},[a._v("54")]),n("br"),n("span",{staticClass:"line-number"},[a._v("55")]),n("br"),n("span",{staticClass:"line-number"},[a._v("56")]),n("br"),n("span",{staticClass:"line-number"},[a._v("57")]),n("br"),n("span",{staticClass:"line-number"},[a._v("58")]),n("br"),n("span",{staticClass:"line-number"},[a._v("59")]),n("br"),n("span",{staticClass:"line-number"},[a._v("60")]),n("br"),n("span",{staticClass:"line-number"},[a._v("61")]),n("br"),n("span",{staticClass:"line-number"},[a._v("62")]),n("br"),n("span",{staticClass:"line-number"},[a._v("63")]),n("br"),n("span",{staticClass:"line-number"},[a._v("64")]),n("br"),n("span",{staticClass:"line-number"},[a._v("65")]),n("br"),n("span",{staticClass:"line-number"},[a._v("66")]),n("br"),n("span",{staticClass:"line-number"},[a._v("67")]),n("br"),n("span",{staticClass:"line-number"},[a._v("68")]),n("br"),n("span",{staticClass:"line-number"},[a._v("69")]),n("br"),n("span",{staticClass:"line-number"},[a._v("70")]),n("br"),n("span",{staticClass:"line-number"},[a._v("71")]),n("br"),n("span",{staticClass:"line-number"},[a._v("72")]),n("br"),n("span",{staticClass:"line-number"},[a._v("73")]),n("br"),n("span",{staticClass:"line-number"},[a._v("74")]),n("br")])]),n("p",[a._v("输出结果为")]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/image-20200309162154191.png",alt:"image-20200309162154191"}})]),a._v(" "),n("p",[a._v("最后线程没有停止，并行没有输出  mission is over 这句话，说明没有用volatile修饰的变量，是没有可见性")]),a._v(" "),n("p",[a._v("当我们修改MyData类中的成员变量时，并且添加volatile关键字修饰")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("/**\n * 假设是主物理内存\n */\nclass MyData {\n    /**\n     * volatile 修饰的关键字，是为了增加 主线程和线程之间的可见性，只要有一个线程修改了内存中的值，其它线程也能马上感知\n     */\n    volatile int number = 0;\n\n    public void addTo60() {\n        this.number = 60;\n    }\n}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br")])]),n("p",[a._v("最后输出的结果为：")]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/image-20200309162314054.png",alt:"image-20200309162314054"}})]),a._v(" "),n("p",[a._v("主线程也执行完毕了，说明volatile修饰的变量，是具备JVM轻量级同步机制的，能够感知其它线程的修改后的值。")]),a._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),n("p",[a._v("https://mp.weixin.qq.com/s/Oa3tcfAFO9IgsbE22C5TEg")])])}),[],!1,null,null,null);s.default=e.exports}}]);