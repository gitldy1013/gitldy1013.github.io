(window.webpackJsonp=window.webpackJsonp||[]).push([[538],{1234:function(e,s,r){"use strict";r.r(s);var a=r(5),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"docker-自定义网桥"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-自定义网桥"}},[e._v("#")]),e._v(" Docker 自定义网桥")]),e._v(" "),r("p",[e._v("除了默认的 "),r("code",[e._v("docker0")]),e._v(" 网桥，用户也可以指定网桥来连接各个容器。")]),e._v(" "),r("p",[e._v("在启动 Docker 服务的时候，使用 "),r("code",[e._v("-b BRIDGE")]),e._v("或"),r("code",[e._v("--bridge=BRIDGE")]),e._v(" 来指定使用的网桥。")]),e._v(" "),r("p",[e._v("如果服务已经运行，那需要先停止服务，并删除旧的网桥。")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    $ sudo systemctl stop docker\n    $ sudo ip link set dev docker0 down\n    $ sudo brctl delbr docker0\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("p",[e._v("然后创建一个网桥 "),r("code",[e._v("bridge0")]),e._v("。")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    $ sudo brctl addbr bridge0\n    $ sudo ip addr add 192.168.5.1/24 dev bridge0\n    $ sudo ip link set dev bridge0 up\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("p",[e._v("查看确认网桥创建并启动。")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    $ ip addr show bridge0\n    4: bridge0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state UP group default\n        link/ether 66:38:d0:0d:76:18 brd ff:ff:ff:ff:ff:ff\n        inet 192.168.5.1/24 scope global bridge0\n           valid_lft forever preferred_lft forever\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br")])]),r("p",[e._v("在 Docker 配置文件 "),r("code",[e._v("/etc/docker/daemon.json")]),e._v(" 中添加如下内容，即可将 Docker 默认桥接到创建的网桥上。")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('    {\n      "bridge": "bridge0"\n    }\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("p",[e._v("启动 Docker 服务。")]),e._v(" "),r("p",[e._v("新建一个容器，可以看到它已经桥接到了 "),r("code",[e._v("bridge0")]),e._v(" 上。")]),e._v(" "),r("p",[e._v("可以继续用 "),r("code",[e._v("brctl show")]),e._v(" 命令查看桥接的信息。另外，在容器中可以使用 "),r("code",[e._v("ip addr")]),e._v(" 和 "),r("code",[e._v("ip route")]),e._v(" 命令来查看 IP 地址配置和路由信息。")])])}),[],!1,null,null,null);s.default=n.exports}}]);