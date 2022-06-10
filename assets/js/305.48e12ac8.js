(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{1001:function(n,s,a){"use strict";a.r(s);var r=a(5),e=Object(r.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"cyclicbarrier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cyclicbarrier"}},[n._v("#")]),n._v(" CyclicBarrier")]),n._v(" "),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[n._v("#")]),n._v(" 概念")]),n._v(" "),a("p",[n._v("和CountDownLatch相反，需要集齐七颗龙珠，召唤神龙。也就是做加法，开始是0，加到某个值的时候就执行")]),n._v(" "),a("p",[n._v("CyclicBarrier的字面意思就是可循环（cyclic）使用的屏障（Barrier）。它要求做的事情是，让一组线程到达一个屏障（也可以叫同步点）时被阻塞，直到最后一个线程到达屏障时，屏障才会开门，所有被屏障拦截的线程才会继续干活，线程进入屏障通过CyclicBarrier的await方法")]),n._v(" "),a("h2",{attrs:{id:"案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[n._v("#")]),n._v(" 案例")]),n._v(" "),a("p",[n._v("集齐7个龙珠，召唤神龙的Demo，我们需要首先创建CyclicBarrier")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('/**\n* 定义一个循环屏障，参数1：需要累加的值，参数2 需要执行的方法\n*/\nCyclicBarrier cyclicBarrier = new CyclicBarrier(7, () -> {\n\tSystem.out.println("召唤神龙");\n});\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br")])]),a("p",[n._v("然后同时编写七个线程，进行龙珠收集，但一个线程收集到了的时候，我们需要让他执行await方法，等待到7个线程全部执行完毕后，我们就执行原来定义好的方法")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('        for (int i = 0; i < 7; i++) {\n            final Integer tempInt = i;\n            new Thread(() -> {\n                System.out.println(Thread.currentThread().getName() + "\\t 收集到 第" + tempInt + "颗龙珠");\n\n                try {\n                    // 先到的被阻塞，等全部线程完成后，才能执行方法\n                    cyclicBarrier.await();\n                } catch (InterruptedException e) {\n                    e.printStackTrace();\n                } catch (BrokenBarrierException e) {\n                    e.printStackTrace();\n                }\n            }, String.valueOf(i)).start();\n        }\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br")])]),a("p",[n._v("完整代码")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('/**\n * CyclicBarrier循环屏障\n *\n * @author: 陌溪\n * @create: 2020-03-16-14:40\n */\npublic class CyclicBarrierDemo {\n\n\n    public static void main(String[] args) {\n        /**\n         * 定义一个循环屏障，参数1：需要累加的值，参数2 需要执行的方法\n         */\n        CyclicBarrier cyclicBarrier = new CyclicBarrier(7, () -> {\n            System.out.println("召唤神龙");\n        });\n\n        for (int i = 0; i < 7; i++) {\n            final Integer tempInt = i;\n            new Thread(() -> {\n                System.out.println(Thread.currentThread().getName() + "\\t 收集到 第" + tempInt + "颗龙珠");\n\n                try {\n                    // 先到的被阻塞，等全部线程完成后，才能执行方法\n                    cyclicBarrier.await();\n                } catch (InterruptedException e) {\n                    e.printStackTrace();\n                } catch (BrokenBarrierException e) {\n                    e.printStackTrace();\n                }\n            }, String.valueOf(i)).start();\n        }\n    }\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);