(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{1005:function(n,s,a){"use strict";a.r(s);var i=a(5),t=Object(i.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"synchronized和lock的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized和lock的区别"}},[n._v("#")]),n._v(" Synchronized和Lock的区别")]),n._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[n._v("#")]),n._v(" 前言")]),n._v(" "),a("p",[n._v("早期的时候我们对线程的主要操作为：")]),n._v(" "),a("ul",[a("li",[n._v("synchronized wati  notify")])]),n._v(" "),a("p",[n._v("然后后面出现了替代方案")]),n._v(" "),a("ul",[a("li",[n._v("lock await  singal")])]),n._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20200317101210376.png",alt:"image-20200317101210376"}})]),n._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[n._v("#")]),n._v(" 问题")]),n._v(" "),a("h3",{attrs:{id:"synchronized-和-lock-有什么区别-用新的lock有什么好处-举例说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-和-lock-有什么区别-用新的lock有什么好处-举例说明"}},[n._v("#")]),n._v(" synchronized 和 lock 有什么区别？用新的lock有什么好处？举例说明")]),n._v(" "),a("ul",[a("li",[n._v("synchronized 和 lock 有什么区别？用新的lock有什么好处？举例说明")])]),n._v(" "),a("p",[n._v("1）synchronized属于JVM层面，属于java的关键字")]),n._v(" "),a("ul",[a("li",[n._v("​\tmonitorenter（底层是通过monitor对象来完成，其实wait/notify等方法也依赖于monitor对象 只能在同步块或者方法中才能调用 wait/ notify等方法）")]),n._v(" "),a("li",[n._v("Lock是具体类（java.util.concurrent.locks.Lock）是api层面的锁")])]),n._v(" "),a("p",[n._v("2）使用方法：")]),n._v(" "),a("ul",[a("li",[a("p",[n._v("synchronized：不需要用户去手动释放锁，当synchronized代码执行后，系统会自动让线程释放对锁的占用")])]),n._v(" "),a("li",[a("p",[n._v("ReentrantLock：则需要用户去手动释放锁，若没有主动释放锁，就有可能出现死锁的现象，需要lock() 和 unlock() 配置try catch语句来完成")])])]),n._v(" "),a("p",[n._v("3）等待是否中断")]),n._v(" "),a("ul",[a("li",[n._v("synchronized：不可中断，除非抛出异常或者正常运行完成")]),n._v(" "),a("li",[n._v("ReentrantLock：可中断，可以设置超时方法\n"),a("ul",[a("li",[n._v("设置超时方法，trylock(long timeout, TimeUnit unit)")]),n._v(" "),a("li",[n._v("lockInterrupible() 放代码块中，调用interrupt() 方法可以中断")])])])]),n._v(" "),a("p",[n._v("4）加锁是否公平")]),n._v(" "),a("ul",[a("li",[n._v("synchronized：非公平锁")]),n._v(" "),a("li",[n._v("ReentrantLock：默认非公平锁，构造函数可以传递boolean值，true为公平锁，false为非公平锁")])]),n._v(" "),a("p",[n._v("5）锁绑定多个条件Condition")]),n._v(" "),a("ul",[a("li",[n._v("synchronized：没有，要么随机，要么全部唤醒")]),n._v(" "),a("li",[n._v("ReentrantLock：用来实现分组唤醒需要唤醒的线程，可以精确唤醒，而不是像synchronized那样，要么随机，要么全部唤醒")])]),n._v(" "),a("h2",{attrs:{id:"举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[n._v("#")]),n._v(" 举例")]),n._v(" "),a("p",[n._v("针对刚刚提到的区别的第5条，我们有下面这样的一个场景")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("题目：多线程之间按顺序调用，实现 A-> B -> C 三个线程启动，要求如下：\nAA打印5次，BB打印10次，CC打印15次\n紧接着\nAA打印5次，BB打印10次，CC打印15次\n..\n来10轮\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br")])]),a("p",[n._v("我们会发现，这样的场景在使用synchronized来完成的话，会非常的困难，但是使用lock就非常方便了")]),n._v(" "),a("p",[n._v("也就是我们需要实现一个链式唤醒的操作")]),n._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20200317105121435.png",alt:"image-20200317105121435"}})]),n._v(" "),a("p",[n._v("当A线程执行完后，B线程才能执行，然后B线程执行完成后，C线程才执行")]),n._v(" "),a("p",[n._v("首先我们需要创建一个重入锁")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 创建一个重入锁\nprivate Lock lock = new ReentrantLock();\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br")])]),a("p",[n._v("然后定义三个条件，也可以称为锁的钥匙，通过它就可以获取到锁，进入到方法里面")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 这三个相当于备用钥匙\nprivate Condition condition1 = lock.newCondition();\nprivate Condition condition2 = lock.newCondition();\nprivate Condition condition3 = lock.newCondition();\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])]),a("p",[n._v("然后开始记住锁的三部曲： 判断   干活  唤醒")]),n._v(" "),a("p",[n._v("这里的判断，为了避免虚假唤醒，一定要采用  while")]),n._v(" "),a("p",[n._v("干活就是把需要的内容，打印出来")]),n._v(" "),a("p",[n._v("唤醒的话，就是修改资源类的值，然后精准唤醒线程进行干活：这里A 唤醒B， B唤醒C，C又唤醒A")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    public void print5() {\n        lock.lock();\n        try {\n            // 判断\n            while(number != 1) {\n                // 不等于1，需要等待\n                condition1.await();\n            }\n\n            // 干活\n            for (int i = 0; i < 5; i++) {\n                System.out.println(Thread.currentThread().getName() + "\\t " + number + "\\t" + i);\n            }\n\n            // 唤醒 （干完活后，需要通知B线程执行）\n            number = 2;\n            // 通知2号去干活了\n            condition2.signal();\n\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            lock.unlock();\n        }\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('\n/**\n * Synchronized 和 Lock的区别\n * @author: 陌溪\n * @create: 2020-03-17-10:18\n */\n\nclass ShareResource {\n    // A 1   B 2   c 3\n    private int number = 1;\n    // 创建一个重入锁\n    private Lock lock = new ReentrantLock();\n\n    // 这三个相当于备用钥匙\n    private Condition condition1 = lock.newCondition();\n    private Condition condition2 = lock.newCondition();\n    private Condition condition3 = lock.newCondition();\n\n\n    public void print5() {\n        lock.lock();\n        try {\n            // 判断\n            while(number != 1) {\n                // 不等于1，需要等待\n                condition1.await();\n            }\n\n            // 干活\n            for (int i = 0; i < 5; i++) {\n                System.out.println(Thread.currentThread().getName() + "\\t " + number + "\\t" + i);\n            }\n\n            // 唤醒 （干完活后，需要通知B线程执行）\n            number = 2;\n            // 通知2号去干活了\n            condition2.signal();\n\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            lock.unlock();\n        }\n    }\n\n    public void print10() {\n        lock.lock();\n        try {\n            // 判断\n            while(number != 2) {\n                // 不等于1，需要等待\n                condition2.await();\n            }\n\n            // 干活\n            for (int i = 0; i < 10; i++) {\n                System.out.println(Thread.currentThread().getName() + "\\t " + number + "\\t" + i);\n            }\n\n            // 唤醒 （干完活后，需要通知C线程执行）\n            number = 3;\n            // 通知2号去干活了\n            condition3.signal();\n\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            lock.unlock();\n        }\n    }\n\n    public void print15() {\n        lock.lock();\n        try {\n            // 判断\n            while(number != 3) {\n                // 不等于1，需要等待\n                condition3.await();\n            }\n\n            // 干活\n            for (int i = 0; i < 15; i++) {\n                System.out.println(Thread.currentThread().getName() + "\\t " + number + "\\t" + i);\n            }\n\n            // 唤醒 （干完活后，需要通知C线程执行）\n            number = 1;\n            // 通知1号去干活了\n            condition1.signal();\n\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            lock.unlock();\n        }\n    }\n}\n\npublic class SyncAndReentrantLockDemo {\n\n    public static void main(String[] args) {\n\n        ShareResource shareResource = new ShareResource();\n\n        new Thread(() -> {\n            for (int i = 0; i < 10; i++) {\n                    shareResource.print5();\n            }\n        }, "A").start();\n\n        new Thread(() -> {\n            for (int i = 0; i < 10; i++) {\n                shareResource.print10();\n            }\n        }, "B").start();\n\n        new Thread(() -> {\n            for (int i = 0; i < 10; i++) {\n                shareResource.print15();\n            }\n        }, "C").start();\n    }\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br"),a("span",{staticClass:"line-number"},[n._v("68")]),a("br"),a("span",{staticClass:"line-number"},[n._v("69")]),a("br"),a("span",{staticClass:"line-number"},[n._v("70")]),a("br"),a("span",{staticClass:"line-number"},[n._v("71")]),a("br"),a("span",{staticClass:"line-number"},[n._v("72")]),a("br"),a("span",{staticClass:"line-number"},[n._v("73")]),a("br"),a("span",{staticClass:"line-number"},[n._v("74")]),a("br"),a("span",{staticClass:"line-number"},[n._v("75")]),a("br"),a("span",{staticClass:"line-number"},[n._v("76")]),a("br"),a("span",{staticClass:"line-number"},[n._v("77")]),a("br"),a("span",{staticClass:"line-number"},[n._v("78")]),a("br"),a("span",{staticClass:"line-number"},[n._v("79")]),a("br"),a("span",{staticClass:"line-number"},[n._v("80")]),a("br"),a("span",{staticClass:"line-number"},[n._v("81")]),a("br"),a("span",{staticClass:"line-number"},[n._v("82")]),a("br"),a("span",{staticClass:"line-number"},[n._v("83")]),a("br"),a("span",{staticClass:"line-number"},[n._v("84")]),a("br"),a("span",{staticClass:"line-number"},[n._v("85")]),a("br"),a("span",{staticClass:"line-number"},[n._v("86")]),a("br"),a("span",{staticClass:"line-number"},[n._v("87")]),a("br"),a("span",{staticClass:"line-number"},[n._v("88")]),a("br"),a("span",{staticClass:"line-number"},[n._v("89")]),a("br"),a("span",{staticClass:"line-number"},[n._v("90")]),a("br"),a("span",{staticClass:"line-number"},[n._v("91")]),a("br"),a("span",{staticClass:"line-number"},[n._v("92")]),a("br"),a("span",{staticClass:"line-number"},[n._v("93")]),a("br"),a("span",{staticClass:"line-number"},[n._v("94")]),a("br"),a("span",{staticClass:"line-number"},[n._v("95")]),a("br"),a("span",{staticClass:"line-number"},[n._v("96")]),a("br"),a("span",{staticClass:"line-number"},[n._v("97")]),a("br"),a("span",{staticClass:"line-number"},[n._v("98")]),a("br"),a("span",{staticClass:"line-number"},[n._v("99")]),a("br"),a("span",{staticClass:"line-number"},[n._v("100")]),a("br"),a("span",{staticClass:"line-number"},[n._v("101")]),a("br"),a("span",{staticClass:"line-number"},[n._v("102")]),a("br"),a("span",{staticClass:"line-number"},[n._v("103")]),a("br"),a("span",{staticClass:"line-number"},[n._v("104")]),a("br"),a("span",{staticClass:"line-number"},[n._v("105")]),a("br"),a("span",{staticClass:"line-number"},[n._v("106")]),a("br"),a("span",{staticClass:"line-number"},[n._v("107")]),a("br"),a("span",{staticClass:"line-number"},[n._v("108")]),a("br"),a("span",{staticClass:"line-number"},[n._v("109")]),a("br"),a("span",{staticClass:"line-number"},[n._v("110")]),a("br"),a("span",{staticClass:"line-number"},[n._v("111")]),a("br"),a("span",{staticClass:"line-number"},[n._v("112")]),a("br"),a("span",{staticClass:"line-number"},[n._v("113")]),a("br"),a("span",{staticClass:"line-number"},[n._v("114")]),a("br"),a("span",{staticClass:"line-number"},[n._v("115")]),a("br"),a("span",{staticClass:"line-number"},[n._v("116")]),a("br"),a("span",{staticClass:"line-number"},[n._v("117")]),a("br"),a("span",{staticClass:"line-number"},[n._v("118")]),a("br"),a("span",{staticClass:"line-number"},[n._v("119")]),a("br"),a("span",{staticClass:"line-number"},[n._v("120")]),a("br"),a("span",{staticClass:"line-number"},[n._v("121")]),a("br"),a("span",{staticClass:"line-number"},[n._v("122")]),a("br"),a("span",{staticClass:"line-number"},[n._v("123")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);