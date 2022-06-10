(window.webpackJsonp=window.webpackJsonp||[]).push([[532],{1228:function(s,n,e){"use strict";e.r(n);var a=e(5),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"实例-创建一个点到点连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例-创建一个点到点连接"}},[s._v("#")]),s._v(" 实例：创建一个点到点连接")]),s._v(" "),e("p",[s._v("默认情况下，Docker 会将所有容器连接到由 "),e("code",[s._v("docker0")]),s._v(" 提供的虚拟子网中。")]),s._v(" "),e("p",[s._v("用户有时候需要两个容器之间可以直连通信，而不用通过主机网桥进行桥接。")]),s._v(" "),e("p",[s._v("解决办法很简单：创建一对 "),e("code",[s._v("peer")]),s._v(" 接口，分别放到两个容器中，配置成点到点链路类型即可。")]),s._v(" "),e("p",[s._v("首先启动 2 个容器：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    $ docker run -i -t --rm --net=none base /bin/bash\n    root@1f1f4c1f931a:/#\n    $ docker run -i -t --rm --net=none base /bin/bash\n    root@12e343489d2f:/#\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("找到进程号，然后创建网络命名空间的跟踪文件。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    $ docker inspect -f '{{.State.Pid}}' 1f1f4c1f931a\n    2989\n    $ docker inspect -f '{{.State.Pid}}' 12e343489d2f\n    3004\n    $ sudo mkdir -p /var/run/netns\n    $ sudo ln -s /proc/2989/ns/net /var/run/netns/2989\n    $ sudo ln -s /proc/3004/ns/net /var/run/netns/3004\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("创建一对 "),e("code",[s._v("peer")]),s._v(" 接口，然后配置路由")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    $ sudo ip link add A type veth peer name B\n    \n    $ sudo ip link set A netns 2989\n    $ sudo ip netns exec 2989 ip addr add 10.1.1.1/32 dev A\n    $ sudo ip netns exec 2989 ip link set A up\n    $ sudo ip netns exec 2989 ip route add 10.1.1.2/32 dev A\n    \n    $ sudo ip link set B netns 3004\n    $ sudo ip netns exec 3004 ip addr add 10.1.1.2/32 dev B\n    $ sudo ip netns exec 3004 ip link set B up\n    $ sudo ip netns exec 3004 ip route add 10.1.1.1/32 dev B\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("现在这 2 个容器就可以相互 ping 通，并成功建立连接。点到点链路不需要子网和子网掩码。")]),s._v(" "),e("p",[s._v("此外，也可以不指定 "),e("code",[s._v("--net=none")]),s._v(" 来创建点到点链路。这样容器还可以通过原先的网络来通信。")]),s._v(" "),e("p",[s._v("利用类似的办法，可以创建一个只跟主机通信的容器。但是一般情况下，更推荐使用 "),e("code",[s._v("--icc=false")]),s._v(" 来关闭容器之间的通信。")])])}),[],!1,null,null,null);n.default=t.exports}}]);