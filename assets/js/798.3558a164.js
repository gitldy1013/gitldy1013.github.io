(window.webpackJsonp=window.webpackJsonp||[]).push([[798],{1494:function(t,a,r){"use strict";r.r(a);var v=r(5),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"log4j-日志级别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#log4j-日志级别"}},[t._v("#")]),t._v(" Log4j 日志级别")]),t._v(" "),r("h2",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),r("p",[t._v("为了方便对于日志信息的输出显示，对日志内容进行了分级管理。日志级别由高到低，共分 6 个级别：")]),t._v(" "),r("ul",[r("li",[t._v("fatal(致命的)")]),t._v(" "),r("li",[t._v("error")]),t._v(" "),r("li",[t._v("warn")]),t._v(" "),r("li",[t._v("info")]),t._v(" "),r("li",[t._v("debug")]),t._v(" "),r("li",[t._v("trace(堆栈)")])]),t._v(" "),r("h2",{attrs:{id:"为什么要对日志进行分级"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么要对日志进行分级"}},[t._v("#")]),t._v(" 为什么要对日志进行分级")]),t._v(" "),r("p",[t._v("无论是将日志输出到控制台，还是文件，其输出都会降低程序的运行效率。但由于调试、运行维护的需要，客户的要求等原因，需要进行必要的日志输出。这时就必须要在代码中加入日志输出语句。")]),t._v(" "),r("p",[t._v("这些输出语句若在程序运行时全部执行， 则势必会降低运行效率。例如， 使用 System.out.println() 将信息输出到控制台，则所有的该输出语句均将执行。会大大降低程序的执行效率。而要使其不输出，唯一的办法就是将这些输出语句逐个全部删除。这是个费时费力的过程。")]),t._v(" "),r("p",[t._v("将日志信息进行分级管理，便可方便的控制信息输出内容及输出位置：哪些信息需要输出，哪些信息不需要输出，只需在一个日志输出控制文件中稍加修改即可。而代码中的输出语句不用做任何修改。")]),t._v(" "),r("p",[t._v("从这个角度来说，代码中的日志编写，其实就是写大量的输出语句。只不过，这些输出语句比较特殊，它们具有级别，在程序运行期间不一定被执行。它们的执行是由另一个控制文件控制。")])])}),[],!1,null,null,null);a.default=_.exports}}]);