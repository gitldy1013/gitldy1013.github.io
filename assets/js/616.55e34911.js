(window.webpackJsonp=window.webpackJsonp||[]).push([[616],{1313:function(n,t,e){"use strict";e.r(t);var a=e(5),r=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"挂起-suspend-与线程阻塞工具类locksupport"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#挂起-suspend-与线程阻塞工具类locksupport"}},[n._v("#")]),n._v(" 挂起(suspend)与线程阻塞工具类LockSupport")]),n._v(" "),e("p",[n._v("一般来说是不推荐使用suspend去挂起线程的,因为suspend在导致线程暂停的同时,并不会去释放任何锁资源. 如果其他任何线程想要访问被它暂用的锁时,都会被牵连,导致无法正常继续运行. 直到对应的线程上进行了resume操作.")]),n._v(" "),e("p",[n._v("并且,如果resume操作意外的在suspend前执行了,那么被挂起的线程可能很难有机会被继续执行,更严重的是:它所占用的锁不会被释放,因此可能会导致整个系统工作不正常,而且,对于被挂起的线程,从它的线程状态上看,居然还是Runnable")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('/**\n * @author luozhiyun on 2018/6/24.\n */\npublic class BadSuspend {\n\n    public static Object u = new Object();\n    static ChangeObjectThread t1 = new ChangeObjectThread("t1");\n    static ChangeObjectThread t2 = new ChangeObjectThread("t2");\n    public static class ChangeObjectThread extends Thread{\n        public ChangeObjectThread(String name) {\n            super.setName(name);\n        }\n\n        @Override\n        public void run() {\n            synchronized (u) {\n                System.out.println("in " + getName());\n                Thread.currentThread().suspend();\n            }\n        }\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        t1.start();\n        Thread.sleep(100);\n        t2.start();\n        t1.resume();\n        t2.resume();\n        t1.join();\n        t2.join();\n    }\n}\n')])])]),e("p",[n._v("执行后我们可能会得到以下输出:")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("in t1\nin t2\n")])])]),e("p",[n._v("这表明两个线程先后进入了临界区,但是程序不会退出")]),n._v(" "),e("h2",{attrs:{id:"线程阻塞类-locksupport"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程阻塞类-locksupport"}},[n._v("#")]),n._v(" 线程阻塞类:LockSupport")]),n._v(" "),e("p",[n._v("它可以在线程内任意位置让线程阻塞. 和Thread.suspend()相比,它弥补了由于resume()在前发生,导致线程无法继续执行的情况.和Object.wait()相比,它不需要先获得某个对象的锁,也不会抛出InterruptedException")]),n._v(" "),e("p",[n._v("LockSupport的静态方法park()可以阻塞当前线程,类似的还有parkNanos() / parkUntil()等方法.它们实现了一个限时的等待")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('/**\n * @author luozhiyun on 2018/6/24.\n */\npublic class LockSupportDemo {\n\n    public static Object u = new Object();\n    static ChangeObjectThread t1 = new ChangeObjectThread("t1");\n    static ChangeObjectThread t2 = new ChangeObjectThread("t2");\n    public static class ChangeObjectThread extends Thread{\n        public ChangeObjectThread(String name) {\n            super.setName(name);\n        }\n\n        @Override\n        public void run() {\n            synchronized (u) {\n                System.out.println("in " + getName());\n                LockSupport.park(this);\n            }\n        }\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        t1.start();\n        Thread.sleep(100);\n        t2.start();\n        LockSupport.unpark(t1);\n        LockSupport.unpark(t2);\n        t1.join();\n        t2.join();\n    }\n}\n')])])]),e("p",[n._v("这段代码至始至终都可以正常的结束,不会因为park()方法而导致线程永久性的挂起")]),n._v(" "),e("p",[n._v("这事因为LockSupport类使用类似信号量的机制.它为每一个线程准备了一个许可,如果许可可用,那么park()函数会立即返回,并且消费这个许可(也就是将许可变成不可用).如果许可不可用,就会阻塞.而unpark()则使得一个许可变为可用(但是和信号量不同的是,许可不能累加,你不可能拥有超过一个许可,它永远只有一个)")]),n._v(" "),e("p",[n._v("这个特点使得:即使unpark()操作发生在park()之前,它也可以使下一次的park()操作立即返回")]),n._v(" "),e("p",[n._v("同时,处于park()挂起状态的线程不会像suspend()那样还给出一个令人费解的Runnable的状态.它会非常明确地给出一个WAITING状态,甚至还会是标注是park()引起的")])])}),[],!1,null,null,null);t.default=r.exports}}]);