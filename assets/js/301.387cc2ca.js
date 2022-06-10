(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{998:function(n,s,a){"use strict";a.r(s);var e=a(5),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"java锁之自旋锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java锁之自旋锁"}},[n._v("#")]),n._v(" Java锁之自旋锁")]),n._v(" "),a("p",[n._v("自旋锁：spinlock，是指尝试获取锁的线程不会立即阻塞，而是采用循环的方式去尝试获取锁，这样的好处是减少线程上下文切换的消耗，缺点是循环会消耗CPU")]),n._v(" "),a("p",[n._v("原来提到的比较并交换，底层使用的就是自旋，自旋就是多次尝试，多次访问，不会阻塞的状态就是自旋。")]),n._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20200315154143781.png",alt:"image-20200315154143781"}})]),n._v(" "),a("h2",{attrs:{id:"优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[n._v("#")]),n._v(" 优缺点")]),n._v(" "),a("p",[n._v("优点：循环比较获取直到成功为止，没有类似于wait的阻塞")]),n._v(" "),a("p",[n._v("缺点：当不断自旋的线程越来越多的时候，会因为执行while循环不断的消耗CPU资源")]),n._v(" "),a("h2",{attrs:{id:"手写自旋锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手写自旋锁"}},[n._v("#")]),n._v(" 手写自旋锁")]),n._v(" "),a("p",[n._v("通过CAS操作完成自旋锁，A线程先进来调用myLock方法自己持有锁5秒，B随后进来发现当前有线程持有锁，不是null，所以只能通过自旋等待，直到A释放锁后B随后抢到")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('\n/**\n * 手写一个自旋锁\n *\n * 循环比较获取直到成功为止，没有类似于wait的阻塞\n *\n * 通过CAS操作完成自旋锁，A线程先进来调用myLock方法自己持有锁5秒，B随后进来发现当前有线程持有锁，不是null，所以只能通过自旋等待，直到A释放锁后B随后抢到\n * @author: 陌溪\n * @create: 2020-03-15-15:46\n */\npublic class SpinLockDemo {\n\n    // 现在的泛型装的是Thread，原子引用线程\n    AtomicReference<Thread>  atomicReference = new AtomicReference<>();\n\n    public void myLock() {\n        // 获取当前进来的线程\n        Thread thread = Thread.currentThread();\n        System.out.println(Thread.currentThread().getName() + "\\t come in ");\n\n        // 开始自旋，期望值是null，更新值是当前线程，如果是null，则更新为当前线程，否者自旋\n        while(!atomicReference.compareAndSet(null, thread)) {\n\n        }\n    }\n\n    /**\n     * 解锁\n     */\n    public void myUnLock() {\n\n        // 获取当前进来的线程\n        Thread thread = Thread.currentThread();\n\n        // 自己用完了后，把atomicReference变成null\n        atomicReference.compareAndSet(thread, null);\n\n        System.out.println(Thread.currentThread().getName() + "\\t invoked myUnlock()");\n    }\n\n    public static void main(String[] args) {\n\n        SpinLockDemo spinLockDemo = new SpinLockDemo();\n\n        // 启动t1线程，开始操作\n        new Thread(() -> {\n\n            // 开始占有锁\n            spinLockDemo.myLock();\n\n\n            try {\n                TimeUnit.SECONDS.sleep(5);\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n\n            // 开始释放锁\n            spinLockDemo.myUnLock();\n\n        }, "t1").start();\n\n\n        // 让main线程暂停1秒，使得t1线程，先执行\n        try {\n            TimeUnit.SECONDS.sleep(1);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n\n        // 1秒后，启动t2线程，开始占用这个锁\n        new Thread(() -> {\n\n            // 开始占有锁\n            spinLockDemo.myLock();\n            // 开始释放锁\n            spinLockDemo.myUnLock();\n\n        }, "t2").start();\n\n    }\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br"),a("span",{staticClass:"line-number"},[n._v("68")]),a("br"),a("span",{staticClass:"line-number"},[n._v("69")]),a("br"),a("span",{staticClass:"line-number"},[n._v("70")]),a("br"),a("span",{staticClass:"line-number"},[n._v("71")]),a("br"),a("span",{staticClass:"line-number"},[n._v("72")]),a("br"),a("span",{staticClass:"line-number"},[n._v("73")]),a("br"),a("span",{staticClass:"line-number"},[n._v("74")]),a("br"),a("span",{staticClass:"line-number"},[n._v("75")]),a("br"),a("span",{staticClass:"line-number"},[n._v("76")]),a("br"),a("span",{staticClass:"line-number"},[n._v("77")]),a("br"),a("span",{staticClass:"line-number"},[n._v("78")]),a("br"),a("span",{staticClass:"line-number"},[n._v("79")]),a("br"),a("span",{staticClass:"line-number"},[n._v("80")]),a("br"),a("span",{staticClass:"line-number"},[n._v("81")]),a("br"),a("span",{staticClass:"line-number"},[n._v("82")]),a("br")])]),a("p",[n._v("最后输出结果")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("t1 come in\n.....一秒后.....\nt2 come in\n.....五秒后.....\nt1 invoked myUnlock()\nt2 invoked myUnlock()\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br")])]),a("p",[n._v("首先输出的是 t1\t come in")]),n._v(" "),a("p",[n._v("然后1秒后，t2线程启动，发现锁被t1占有，所有不断的执行 compareAndSet方法，来进行比较，直到t1释放锁后，也就是5秒后，t2成功获取到锁，然后释放")])])}),[],!1,null,null,null);s.default=t.exports}}]);