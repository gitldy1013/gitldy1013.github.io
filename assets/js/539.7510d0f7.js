(window.webpackJsonp=window.webpackJsonp||[]).push([[539],{1235:function(e,s,t){"use strict";t.r(s);var n=t(5),r=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"配置-docker0-网桥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-docker0-网桥"}},[e._v("#")]),e._v(" 配置 docker0 网桥")]),e._v(" "),t("p",[e._v("Docker 服务默认会创建一个 "),t("code",[e._v("docker0")]),e._v(" 网桥（其上有一个 "),t("code",[e._v("docker0")]),e._v(" 内部接口），它在内核层连通了其他的物理或虚拟网卡，这就将所有容器和本地主机都放到同一个物理网络。")]),e._v(" "),t("p",[e._v("Docker 默认指定了 "),t("code",[e._v("docker0")]),e._v(" 接口 的 IP 地址和子网掩码，让主机和容器之间可以通过网桥相互通信，它还给出了 MTU（接口允许接收的最大传输单元），通常是 1500 Bytes，或宿主主机网络路由上支持的默认值。这些值都可以在服务启动的时候进行配置。")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("--bip=CIDR")]),e._v(" IP 地址加掩码格式，例如 192.168.1.5/24")]),e._v(" "),t("li",[t("code",[e._v("--mtu=BYTES")]),e._v(" 覆盖默认的 Docker mtu 配置")])]),e._v(" "),t("p",[e._v("也可以在配置文件中配置 DOCKER_OPTS，然后重启服务。")]),e._v(" "),t("p",[e._v("由于目前 Docker 网桥是 Linux 网桥，用户可以使用 "),t("code",[e._v("brctl show")]),e._v(" 来查看网桥和端口连接信息。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    $ sudo brctl show\n    bridge name     bridge id               STP enabled     interfaces\n    docker0         8000.3a1d7362b4ee       no              veth65f9\n                                                 vethdda6\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("*注："),t("code",[e._v("brctl")]),e._v(" 命令在 Debian、Ubuntu 中可以使用 "),t("code",[e._v("sudo apt-get install bridge-utils")]),e._v(" 来安装。")]),e._v(" "),t("p",[e._v("每次创建一个新容器的时候，Docker 从可用的地址段中选择一个空闲的 IP 地址分配给容器的 eth0 端口。使用本地主机上 "),t("code",[e._v("docker0")]),e._v(" 接口的 IP 作为所有容器的默认网关。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    $ sudo docker run -i -t --rm base /bin/bash\n    $ ip addr show eth0\n    24: eth0: <BROADCAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000\n        link/ether 32:6f:e0:35:57:91 brd ff:ff:ff:ff:ff:ff\n        inet 172.17.0.3/16 scope global eth0\n           valid_lft forever preferred_lft forever\n        inet6 fe80::306f:e0ff:fe35:5791/64 scope link\n           valid_lft forever preferred_lft forever\n    $ ip route\n    default via 172.17.42.1 dev eth0\n    172.17.0.0/16 dev eth0  proto kernel  scope link  src 172.17.0.3\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);