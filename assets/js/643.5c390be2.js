(window.webpackJsonp=window.webpackJsonp||[]).push([[643],{1340:function(t,e,r){"use strict";r.r(e);var f=r(5),n=Object(f.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"netty-内部执行流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#netty-内部执行流程"}},[t._v("#")]),t._v(" Netty 内部执行流程")]),t._v(" "),r("ul",[r("li",[t._v("Netty 的接收和发送 ByteBuffer 采用 DIRECT BUFFERS，使用堆外直接内存进行 Socket 读写，不需要进行字节缓冲区的二次拷贝。如果使用传统的堆内存（HEAP BUFFERS）进行 Socket 读写，JVM 会将堆内存 Buffer 拷贝一份到直接内存中，然后才写入 Socket 中。相比于堆外直接内存，消息在发送过程中多了一次缓冲区的内存拷贝。")]),t._v(" "),r("li",[t._v("Netty 提供了组合 Buffer 对象，可以聚合多个 ByteBuffer 对象，用户可以像操作一个 Buffer 那样方便的对组合 Buffer 进行操作，避免了传统通过内存拷贝的方式将几个小 Buffer 合并成一个大的 Buffer。")]),t._v(" "),r("li",[t._v("Netty 的文件传输采用了 transferTo 方法，它可以直接将文件缓冲区的数据发送到目标 Channel，避免了传统通过循环 write 方式导致的内存拷贝问题。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);