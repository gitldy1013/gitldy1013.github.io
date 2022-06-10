(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{986:function(t,v,_){"use strict";_.r(v);var a=_(5),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"linux诊断原因"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#linux诊断原因"}},[t._v("#")]),t._v(" Linux诊断原因")]),t._v(" "),_("h2",{attrs:{id:"命令集合"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令集合"}},[t._v("#")]),t._v(" 命令集合")]),t._v(" "),_("h3",{attrs:{id:"整机-top-查看整机系统新能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#整机-top-查看整机系统新能"}},[t._v("#")]),t._v(" 整机：top，查看整机系统新能")]),t._v(" "),_("p",[_("img",{attrs:{src:"/images/image-20200326162329550.png",alt:"image-20200326162329550"}})]),t._v(" "),_("p",[t._v("使用top命令的话，重点关注的是 %CPU、%MEM 、load average 三个指标")]),t._v(" "),_("ul",[_("li",[t._v("load average三个指标：分别代表1、5、15分钟的负载情况")])]),t._v(" "),_("p",[t._v("在这个命令下，按1的话，可以看到每个CPU的占用情况")]),t._v(" "),_("p",[t._v("uptime：系统性能命令的精简版")]),t._v(" "),_("h3",{attrs:{id:"cpu-vmstat"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu-vmstat"}},[t._v("#")]),t._v(" CPU：vmstat")]),t._v(" "),_("ul",[_("li",[t._v("查看CPU（包含但是不限于）")]),t._v(" "),_("li",[t._v("查看额外\n"),_("ul",[_("li",[t._v("查看所有CPU核信息：mpstat -p ALL 2")]),t._v(" "),_("li",[t._v("每个进程使用CPU的用量分解信息：pidstat -u 1 -p 进程编号")])])])]),t._v(" "),_("p",[t._v("命令格式："),_("code",[t._v("vmstat -n 2 3")])]),t._v(" "),_("p",[_("img",{attrs:{src:"/images/image-20200326162803165.png",alt:"image-20200326162803165"}})]),t._v(" "),_("p",[t._v("一般vmstat工具的使用是通过两个数字参数来完成的，第一个参数是残阳的时间间隔数（单位秒），第二个参数是采样的次数")]),t._v(" "),_("p",[_("strong",[t._v("procs")])]),t._v(" "),_("p",[t._v("​\t\tr：运行和等待的CPU时间片的进程数，原则上1核的CPU的运行队列不要超过2，整个系统的运行队列不超过总核数的2倍，否则代表系统压力过大，我们看蘑菇博客测试服务器，能发现都超过了2，说明现在压力过大")]),t._v(" "),_("p",[t._v("​\t\tb：等待资源的进程数，比如正在等待磁盘I/O、网络I/O等")]),t._v(" "),_("p",[_("strong",[t._v("cpu")])]),t._v(" "),_("p",[t._v("​\tus：用户进程消耗CPU时间百分比，us值高，用户进程消耗CPU时间多，如果长期大于50%，优化程序")]),t._v(" "),_("p",[t._v("​\tsy：内核进程消耗的CPU时间百分比")]),t._v(" "),_("p",[_("img",{attrs:{src:"/images/image-20200326164521263.png",alt:"image-20200326164521263"}})]),t._v(" "),_("p",[t._v("​\tus + sy 参考值为80%，如果us + sy 大于80%，说明可能存在CPU不足，从上面的图片可以看出，us + sy还没有超过百分80，因此说明蘑菇博客的CPU消耗不是很高")]),t._v(" "),_("p",[t._v("​\tid：处于空闲的CPU百分比")]),t._v(" "),_("p",[t._v("​\twa：系统等待IO的CPU时间百分比")]),t._v(" "),_("p",[t._v("​\tst：来自于一个虚拟机偷取的CPU时间比")]),t._v(" "),_("h3",{attrs:{id:"内存-free"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存-free"}},[t._v("#")]),t._v(" 内存：free")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("应用程序可用内存数：free -m")])]),t._v(" "),_("li",[_("p",[t._v("应用程序可用内存/系统物理内存 > 70% 内存充足")])]),t._v(" "),_("li",[_("p",[t._v("应用程序可用内存/系统物理内存 < 20% 内存不足，需要增加内存")])]),t._v(" "),_("li",[_("p",[t._v("20% <  应用程序可用内存/系统物理内存 < 70%，表示内存基本够用")])])]),t._v(" "),_("p",[t._v("free -h：以人类能看懂的方式查看物理内存")]),t._v(" "),_("p",[_("img",{attrs:{src:"/images/image-20200326170217637.png",alt:"image-20200326170217637"}})]),t._v(" "),_("p",[t._v("free -m：以MB为单位，查看物理内存")]),t._v(" "),_("p",[_("img",{attrs:{src:"/images/image-20200326165815071.png",alt:"image-20200326165815071"}})]),t._v(" "),_("p",[t._v("free -g：以GB为单位，查看物理内存")]),t._v(" "),_("h3",{attrs:{id:"硬盘-df"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#硬盘-df"}},[t._v("#")]),t._v(" 硬盘：df")]),t._v(" "),_("p",[t._v("格式："),_("code",[t._v("df -h /")]),t._v("  (-h：human，表示以人类能看到的方式换算)")]),t._v(" "),_("p",[_("img",{attrs:{src:"/images/image-20200326170318733.png",alt:"image-20200326170318733"}})]),t._v(" "),_("ul",[_("li",[t._v("硬盘IO：iostat")])]),t._v(" "),_("p",[t._v("系统慢有两种原因引起的，一个是CPU高，一个是大量IO操作")]),t._v(" "),_("p",[t._v("格式："),_("code",[t._v("iostat -xdk 2 3")])]),t._v(" "),_("p",[_("img",{attrs:{src:"/images/image-20200326170522559.png",alt:"image-20200326170522559"}})]),t._v(" "),_("p",[t._v("磁盘块设备分布：")]),t._v(" "),_("p",[t._v("rkB /s：每秒读取数据量kB；")]),t._v(" "),_("p",[t._v("wkB/s：每秒写入数据量kB；")]),t._v(" "),_("p",[t._v("svctm I/O：请求的平均服务时间，单位毫秒")]),t._v(" "),_("p",[t._v("await I/O：请求的平均等待时间，单位毫秒，值越小，性能越好")]),t._v(" "),_("p",[t._v("util：一秒钟有百分几的时间用于I/O操作。接近100%时，表示磁盘带宽跑满，需要优化程序或者增加磁盘；")]),t._v(" "),_("p",[t._v("rkB/s，wkB/s根据系统应用不同会有不同的值，但有规律遵循：长期、超大数据读写，肯定不正常，需要优化程序读取。")]),t._v(" "),_("p",[t._v("svctm的值与await的值很接近，表示几乎没有I/O等待，磁盘性能好，如果await的值远高于svctm的值，则表示I/O队列等待太长，需要优化程序或更换更快磁盘")]),t._v(" "),_("h3",{attrs:{id:"网络io-ifstat"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络io-ifstat"}},[t._v("#")]),t._v(" 网络IO：ifstat")]),t._v(" "),_("ul",[_("li",[t._v("默认本地没有，下载ifstat")])]),t._v(" "),_("p",[_("img",{attrs:{src:"/images/image-20200326171559406.png",alt:"image-20200326171559406"}})]),t._v(" "),_("h2",{attrs:{id:"生产环境服务器变慢-诊断思路和性能评估"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#生产环境服务器变慢-诊断思路和性能评估"}},[t._v("#")]),t._v(" 生产环境服务器变慢，诊断思路和性能评估")]),t._v(" "),_("p",[t._v("记一次印象深刻的故障？")]),t._v(" "),_("p",[t._v("结合Linux 和 JDK命令一起分析，步骤如下")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("使用top命令找出CPU占比最高的")])]),t._v(" "),_("li",[_("p",[t._v("ps -ef 或者 jps 进一步定位，得知是一个怎么样的后台程序出的问题")])]),t._v(" "),_("li",[_("p",[t._v("定位到具体线程或者代码")]),t._v(" "),_("ul",[_("li",[t._v("ps -mp 进程  -o THREAD，tid，time")]),t._v(" "),_("li",[t._v("参数解释\n"),_("ul",[_("li",[t._v("-m：显示所有的线程")]),t._v(" "),_("li",[t._v("-p：pid进程使用CPU的时间")]),t._v(" "),_("li",[t._v("-o：该参数后是用户自定义格式")])])])]),t._v(" "),_("p",[_("img",{attrs:{src:"/images/image-20200326173656164.png",alt:"image-20200326173656164"}})])]),t._v(" "),_("li",[_("p",[t._v("将需要的线程ID转换为16进制格式（英文小写格式）")]),t._v(" "),_("ul",[_("li",[t._v("printf “%x\\n” 有问题的线程ID")])])]),t._v(" "),_("li",[_("p",[t._v("jstack 进程ID | grep tid（16进制线程ID小写英文） -A60")]),t._v(" "),_("p",[t._v("精准定位到错误的地方")])])]),t._v(" "),_("p",[_("img",{attrs:{src:"/images/image-20200326174107444.png",alt:"image-20200326174107444"}})])])}),[],!1,null,null,null);v.default=s.exports}}]);