(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{844:function(s,a,t){"use strict";t.r(a);var e=t(5),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vmware中centos如何配置固定ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vmware中centos如何配置固定ip"}},[s._v("#")]),s._v(" VMWare中CentOS如何配置固定IP")]),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("这阵子在整 "),t("strong",[s._v("K8S")]),s._v(" ，因为之前不太清楚VMWare如何设置固定IP地址，所以每次VMWare中都是自动获取IP的，这样就造成了每次只要本地机器重启，虚拟机中的网络又变化了，导致K8S服务无法正常的启动。")]),s._v(" "),t("p",[s._v("这里需要特别感谢群里的小伙伴 "),t("strong",[s._v("@你钉钉响了")]),s._v(" "),t("strong",[s._v("@清欢渡")]),s._v("  手把手的教学，帮助我学习了一波VMware网络知识~，有时间要好好补一补Linux网络知识 ...，言归正传，下面开始给VMware设置固定IP了")]),s._v(" "),t("h2",{attrs:{id:"vmware网络模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vmware网络模式"}},[s._v("#")]),s._v(" VMware网络模式")]),s._v(" "),t("p",[s._v("我们安装 VMware Workstations后，进行虚拟机的网络配置时，一般有四种网络连接方式")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20201111185527326.png",alt:"image-20201111185527326"}})]),s._v(" "),t("p",[s._v("在我们安装好 VMware Workstations后，我们可以打开网络中心会发现生成 两个虚拟网卡，我们打开网络和共享中心能够看到下面的两个")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20201111185846985.png",alt:"image-20201111185846985"}})]),s._v(" "),t("p",[s._v("关于这两个网卡对应的规则，我们可以到VMware的虚拟网络编辑器查看")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20201111190045658.png",alt:"image-20201111190045658"}})]),s._v(" "),t("p",[s._v("可以发现VMnet1网卡，对应的是 仅主机模式，VMnet8 对应的是NAT模式")]),s._v(" "),t("h3",{attrs:{id:"桥接模式-bridged"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#桥接模式-bridged"}},[s._v("#")]),s._v(" 桥接模式(Bridged)")]),s._v(" "),t("p",[s._v("桥接模式，可以这样进行理解")]),s._v(" "),t("blockquote",[t("p",[s._v("它是通过主机网卡，假设了一条桥，直接连入到网络中了，因此，它使得虚拟机能被分配到一个网络中独立的IP，所有网络功能完全和在网络中的真实机器一样。")]),s._v(" "),t("p",[s._v("桥接模式下的虚拟机，我们把它认为是真实计算机就行了~")])]),s._v(" "),t("p",[t("strong",[s._v("虚拟机和主机")]),s._v("：可以相互访问，因为虚拟机在真实网络段中有独立IP，主机与虚拟机处于同一网络段中，彼此可以通过各自IP相互访问")]),s._v(" "),t("p",[t("strong",[s._v("虚拟机与其它主机")]),s._v("：可以相互访问，同样因为虚拟机在真实网络端中有独立IP，虚拟机与所有网络其它主机处于同一个网络段中，彼此可以通过各自IP相互访问")]),s._v(" "),t("p",[t("strong",[s._v("虚拟机与虚拟机")]),s._v("： 同样可以相互转换，原因同上")]),s._v(" "),t("p",[s._v("桥接模式下，虚拟机就像一台真正的计算机一样，直接连接到实际网络，与宿主机没有任何联系")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/161210210454533.png",alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"nat模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nat模式"}},[s._v("#")]),s._v(" NAT模式")]),s._v(" "),t("p",[t("strong",[s._v("NAT")]),s._v("：Network Address Translation，网络地址转换")]),s._v(" "),t("p",[s._v("NAT模式是最简单的实现虚拟机上网的方式")]),s._v(" "),t("p",[s._v("在NAT模式下，宿主计算机相当于一台开启了DHCP功能的路由器，而虚拟机是内网中的一台真实主机，通过路由器(宿主计算机) DHCP动态获得网络参数，因此在NAT模式下，虚拟机可以访问外部网络，反之则不行")]),s._v(" "),t("p",[s._v("使用NAT模式的方便之处在于，我们不需要做任何网络设置，只要宿主机可以连接到外部网络，虚拟机也可以。")]),s._v(" "),t("p",[t("strong",[s._v("虚拟机与主机")]),s._v("：只能单向访问，虚拟机可以通过网络访问到主机，主机无法通过网络访问到虚拟机")]),s._v(" "),t("p",[t("strong",[s._v("虚拟机与其它主机")]),s._v("：只能单向访问，虚拟机可以访问到网络中其它主机，其它主机不能通过网络访问到虚拟机")]),s._v(" "),t("p",[t("strong",[s._v("虚拟机与虚拟机")]),s._v("：VMware NAT模式下，各虚拟机在同一网段下是可以互相访问的")]),s._v(" "),t("p",[s._v("NAT模式下，虚拟机网络连接到宿主机的VMnet8上，此时系统的VMWare NAT Service服务器就充当了路由器的作用，负责将虚拟机发送到VMnet8的包 进行地址转换之后，发到实际的网络上，再将实际网络上返回的包进行地址转换后通过VMnet8发送到虚拟机。VMware DHCP Service 负责为虚拟机提供DHCP服务。")]),s._v(" "),t("p",[s._v("也就是说NAT模式下，虚拟机网卡连接到宿主机的VMnet8的网卡，当VMnet8收到虚拟机发送的数据包时，会吧数据包转发给物理机的网卡。相当于物理网卡不能直接接触虚拟机的数据包，而是接触VMnet8进行处理，实际上VMnet8是NAT模式，自带DHCP功能，能够给虚拟机分配IP地址。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/161210210454532.png",alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"主机模式-host-only-adapter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主机模式-host-only-adapter"}},[s._v("#")]),s._v(" 主机模式(Host-only Adapter)")]),s._v(" "),t("p",[s._v("主机模式：这是一种比较复杂的模式，需要有比较扎实的网络基础知识才能玩转。可以说前面几种模式所实现的功能，在这个模式下，通过虚拟机及网卡的设置都可以被实现。")]),s._v(" "),t("p",[s._v("我们可以理解为Guest在主机中模拟出一张专供虚拟机使用的网卡，所有的虚拟机都是连接到该网卡上的，我们可以通过设置这张网卡来实现上网以及其他功能")]),s._v(" "),t("h2",{attrs:{id:"为什么使用nat模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用nat模式"}},[s._v("#")]),s._v(" 为什么使用NAT模式")]),s._v(" "),t("p",[s._v("桥接模式的配置很简单，但是如果网络环境ip资源很缺少，或者对ip管理比较严格的时候，那么桥接模式就不适用了，因为我们通过上面的理解可以知道，桥接模式就是创建一个和宿主机同一级别的网络环境，它是在网络地址中真实存在的ip地址。")]),s._v(" "),t("p",[s._v("如果我们又想让虚拟机上网，又不想占用真实的IP地址，那么就需要使用NAT模式是最好的选择，NAT模式借助虚拟NAT设备和虚拟DHCP服务器，使得虚拟机可以联网。其网络结构如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/1556289446518.png",alt:"img"}})]),s._v(" "),t("p",[s._v("在NAT模式下，主机网卡直接与虚拟NAT设备相连，然后虚拟NAT设备与虚拟DHCP服务器一起连接在虚拟机交换机VMnet8上，这样就实现了虚拟机联网。")]),s._v(" "),t("h2",{attrs:{id:"使用nat模式配置虚拟机固定ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用nat模式配置虚拟机固定ip"}},[s._v("#")]),s._v(" 使用NAT模式配置虚拟机固定IP")]),s._v(" "),t("h3",{attrs:{id:"找到vmnet8网卡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#找到vmnet8网卡"}},[s._v("#")]),s._v(" 找到VMnet8网卡")]),s._v(" "),t("p",[s._v("因为NAT模式需要借助宿主机的Vmnet8网卡进行虚拟机与主机之间的通信的，因此我们需要首先找到宿主机上的VMnet8网卡")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20201111194922373.png",alt:"image-20201111194922373"}})]),s._v(" "),t("p",[s._v("然后我们右键属性，找到IPv4协议，然后选择 "),t("strong",[s._v("自动获取 IP地址")])]),s._v(" "),t("h3",{attrs:{id:"虚拟网络编辑器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟网络编辑器"}},[s._v("#")]),s._v(" 虚拟网络编辑器")]),s._v(" "),t("p",[s._v("在设置好VMnet8网卡后，我们到VMware中，点击  编辑 -> 虚拟网络编辑器，然后选择 还原默认值")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20201111195255554.png",alt:"image-20201111195255554"}})]),s._v(" "),t("p",[s._v("在还原后，我们在上面能够看到有三种模式了，这里我们主要是 操作 NAT模式")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20201111195414104.png",alt:"image-20201111195414104"}})]),s._v(" "),t("ul",[t("li",[s._v("首先选择NAT模式")]),s._v(" "),t("li",[s._v("然后勾选2中的两个选项")]),s._v(" "),t("li",[s._v("第三步就是打开NAT设置")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20201111195510211.png",alt:"image-20201111195510211"}})]),s._v(" "),t("p",[s._v("然后设置网关IP为： 192.168.13.254  【这里需要记住这个值，以后会用到】，然后保存")]),s._v(" "),t("ul",[t("li",[s._v("第四步点击 DHCP设置")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20201111195622025.png",alt:"image-20201111195622025"}})]),s._v(" "),t("p",[s._v("这里能看到我们的起始ip地址 和 结束ip地址，也就是后面我们在设置固定ip地址时，必须在这个范围内")]),s._v(" "),t("ul",[t("li",[s._v("设置完成后，回到主页面，点击应用")])]),s._v(" "),t("h3",{attrs:{id:"设置centos网络连接方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置centos网络连接方式"}},[s._v("#")]),s._v(" 设置CentOS网络连接方式")]),s._v(" "),t("p",[s._v("我们到我们的创建的CentOS系统，右键选择 设置")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20201111195945529.png",alt:"image-20201111195945529"}})]),s._v(" "),t("p",[s._v("然后找到网络适配器，选择NAT模式，这样我们的系统就通过NAT模式连接了")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20201111200047649.png",alt:"image-20201111200047649"}})]),s._v(" "),t("h3",{attrs:{id:"设置网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置网络"}},[s._v("#")]),s._v(" 设置网络")]),s._v(" "),t("p",[s._v("然后我们就可以启动我们的CentOS系统进行网络配置了")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑网络配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/sysconfig/network-scripts/ifcfg-ens33\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("然后在文件中，加入如下内容")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TYPE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Ethernet\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROXY_METHOD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("none\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BROWSER_ONLY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BOOTPROTO")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("static\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEFROUTE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV4_FAILURE_FATAL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6INIT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6_AUTOCONF")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6_DEFROUTE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6_FAILURE_FATAL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6_ADDR_GEN_MODE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("stable-privacy\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ens33\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1f6d2414-12b7-40ef-8fb1-d2e6db9c739b\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEVICE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ens33\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ONBOOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPADDR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".13.130\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NETMASK")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GATEWAY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".13.254\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DNS1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("223.5")]),s._v(".5.5\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("这里需要注意的几个点就是下面几个参数")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置静态模式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BOOTPROTO")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("static\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ONBOOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ip地址【DHCP中的范围内的】")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPADDR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".13.130 \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#子网掩码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NETMASK")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#网关【刚刚我们在NAT设置中配置的】")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GATEWAY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".13.254\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DNS1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("223.5")]),s._v(".5.5\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("配置完成后，我们就重启网络即可")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启网卡")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" network restart\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),t("p",[s._v("下面我们通过 ping命令，查看是否能够正常访问网络")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" www.baidu.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("发现能够成功访问网络了，这个时候说明我们虚拟机已经能够正常联网~")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20201111220338773.png",alt:"image-20201111220338773"}})]),s._v(" "),t("h2",{attrs:{id:"最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[s._v("#")]),s._v(" 最后")]),s._v(" "),t("p",[s._v("在说一个我遇到的问题，就是在配置好网络后，重启电脑，发现之前配置的虚拟机又不能上网了，后面经过群里小伙伴的指点，发现是重启后，"),t("strong",[s._v("VMware")]),s._v(" 的 "),t("strong",[s._v("NAT")]),s._v(" 和 "),t("strong",[s._v("DHCP")]),s._v(" 服务已经关闭了，所以我们需要手动启动")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20201113145306958.png",alt:"image-20201113145306958"}})]),s._v(" "),t("p",[s._v("重启后打开虚拟机，发现能够成功联网了~")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20201113145500500.png",alt:"image-20201113145500500"}})]),s._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("p",[s._v("https://blog.csdn.net/ning521513/article/details/78441392")]),s._v(" "),t("p",[s._v("https://blog.csdn.net/tyutzhangyukang/article/details/78525086")]),s._v(" "),t("p",[s._v("http://www.moguit.cn/#/info?blogUid=4837a5b04cc34f9f9caee067334baa44")])])}),[],!1,null,null,null);a.default=r.exports}}]);