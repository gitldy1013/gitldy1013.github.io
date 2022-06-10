(window.webpackJsonp=window.webpackJsonp||[]).push([[729],{1426:function(e,t,o){"use strict";o.r(t);var l=o(5),r=Object(l.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"线程池的几种方式与使用场景"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#线程池的几种方式与使用场景"}},[e._v("#")]),e._v(" 线程池的几种方式与使用场景")]),e._v(" "),o("p",[e._v("在 "),o("code",[e._v("Executors")]),e._v(" 类里面提供了一些静态工厂，生成一些常用的线程池。")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("newFixedThreadPool")]),e._v("：创建固定大小的线程池。线程池的大小一旦达到最大值就会保持不变，如果某个线程因为执行异常而结束，那么线程池会补充一个新线程。")]),e._v(" "),o("li",[o("code",[e._v("newCachedThreadPool")]),e._v("：创建一个可缓存的线程池。如果线程池的大小超过了处理任务所需要的线程，那么就会回收部分空闲（60秒不执行任务）的线程，当任务数增加时，此线程池又可以智能的添加新线程来处理任务。此线程池不会对线程池大小做限制，线程池大小完全依赖于操作系统（或者说 JVM）能够创建的最大线程大小。")]),e._v(" "),o("li",[o("code",[e._v("newSingleThreadExecutor")]),e._v("：创建一个单线程的线程池。这个线程池只有一个线程在工作，也就是相当于单线程串行执行所有任务。如果这个唯一的线程因为异常结束，那么会有一个新的线程来替代它。此线程池保证所有任务的执行顺序按照任务的提交顺序执行。")]),e._v(" "),o("li",[o("code",[e._v("newScheduledThreadPool")]),e._v("：创建一个大小无限的线程池。此线程池支持定时以及周期性执行任务的需求。")]),e._v(" "),o("li",[o("code",[e._v("newSingleThreadScheduledExecutor")]),e._v("：创建一个单线程的线程池。此线程池支持定时以及周期性执行任务的需求。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);