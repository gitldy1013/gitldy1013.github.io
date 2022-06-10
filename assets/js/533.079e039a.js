(window.webpackJsonp=window.webpackJsonp||[]).push([[533],{1229:function(e,s,a){"use strict";a.r(s);var t=a(5),v=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"docker-容器访问控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-容器访问控制"}},[e._v("#")]),e._v(" Docker 容器访问控制")]),e._v(" "),a("p",[e._v("容器的访问控制，主要通过 Linux 上的 "),a("code",[e._v("iptables")]),e._v(" 防火墙来进行管理和实现。"),a("code",[e._v("iptables")]),e._v(" 是 Linux 上默认的防火墙软件，在大部分发行版中都自带。")]),e._v(" "),a("h2",{attrs:{id:"容器访问外部网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器访问外部网络"}},[e._v("#")]),e._v(" 容器访问外部网络")]),e._v(" "),a("p",[e._v("容器要想访问外部网络，需要本地系统的转发支持。在Linux 系统中，检查转发是否打开。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    $sysctl net.ipv4.ip_forward\n    net.ipv4.ip_forward = 1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("如果为 0，说明没有开启转发，则需要手动打开。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    $sysctl -w net.ipv4.ip_forward=1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("如果在启动 Docker 服务的时候设定 "),a("code",[e._v("--ip-forward=true")]),e._v(", Docker 就会自动设定系统的 "),a("code",[e._v("ip_forward")]),e._v(" 参数为 1。")]),e._v(" "),a("h2",{attrs:{id:"容器之间访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器之间访问"}},[e._v("#")]),e._v(" 容器之间访问")]),e._v(" "),a("p",[e._v("容器之间相互访问，需要两方面的支持。")]),e._v(" "),a("ul",[a("li",[e._v("容器的网络拓扑是否已经互联。默认情况下，所有容器都会被连接到 "),a("code",[e._v("docker0")]),e._v(" 网桥上。")]),e._v(" "),a("li",[e._v("本地系统的防火墙软件 -- "),a("code",[e._v("iptables")]),e._v(" 是否允许通过。")])]),e._v(" "),a("h3",{attrs:{id:"访问所有端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问所有端口"}},[e._v("#")]),e._v(" 访问所有端口")]),e._v(" "),a("p",[e._v("当启动 Docker 服务时候，默认会添加一条转发策略到 iptables 的 FORWARD 链上。策略为通过（"),a("code",[e._v("ACCEPT")]),e._v("）还是禁止（"),a("code",[e._v("DROP")]),e._v("）取决于配置"),a("code",[e._v("--icc=true")]),e._v("（缺省值）还是 "),a("code",[e._v("--icc=false")]),e._v("。当然，如果手动指定 "),a("code",[e._v("--iptables=false")]),e._v(" 则不会添加 "),a("code",[e._v("iptables")]),e._v(" 规则。")]),e._v(" "),a("p",[e._v("可见，默认情况下，不同容器之间是允许网络互通的。如果为了安全考虑，可以在 "),a("code",[e._v("/etc/default/docker")]),e._v(" 文件中配置 "),a("code",[e._v("DOCKER_OPTS=--icc=false")]),e._v(" 来禁止它。")]),e._v(" "),a("h3",{attrs:{id:"访问指定端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问指定端口"}},[e._v("#")]),e._v(" 访问指定端口")]),e._v(" "),a("p",[e._v("在通过 "),a("code",[e._v("-icc=false")]),e._v(" 关闭网络访问后，还可以通过 "),a("code",[e._v("--link=CONTAINER_NAME:ALIAS")]),e._v(" 选项来访问容器的开放端口。")]),e._v(" "),a("p",[e._v("例如，在启动 Docker 服务时，可以同时使用 "),a("code",[e._v("icc=false --iptables=true")]),e._v(" 参数来关闭允许相互的网络访问，并让 Docker 可以修改系统中的 "),a("code",[e._v("iptables")]),e._v(" 规则。")]),e._v(" "),a("p",[e._v("此时，系统中的 "),a("code",[e._v("iptables")]),e._v(" 规则可能是类似")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    $ sudo iptables -nL\n    ...\n    Chain FORWARD (policy ACCEPT)\n    target     prot opt source               destination\n    DROP       all  --  0.0.0.0/0            0.0.0.0/0\n    ...\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("之后，启动容器（"),a("code",[e._v("docker run")]),e._v("）时使用 "),a("code",[e._v("--link=CONTAINER_NAME:ALIAS")]),e._v(" 选项。Docker 会在 "),a("code",[e._v("iptable")]),e._v(" 中为 两个容器分别添加一条 "),a("code",[e._v("ACCEPT")]),e._v(" 规则，允许相互访问开放的端口（取决于 "),a("code",[e._v("Dockerfile")]),e._v(" 中的 "),a("code",[e._v("EXPOSE")]),e._v(" 指令）。")]),e._v(" "),a("p",[e._v("当添加了 "),a("code",[e._v("--link=CONTAINER_NAME:ALIAS")]),e._v(" 选项后，添加了 "),a("code",[e._v("iptables")]),e._v(" 规则。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    $ sudo iptables -nL\n    ...\n    Chain FORWARD (policy ACCEPT)\n    target     prot opt source               destination\n    ACCEPT     tcp  --  172.17.0.2           172.17.0.3           tcp spt:80\n    ACCEPT     tcp  --  172.17.0.3           172.17.0.2           tcp dpt:80\n    DROP       all  --  0.0.0.0/0            0.0.0.0/0\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("注意："),a("code",[e._v("--link=CONTAINER_NAME:ALIAS")]),e._v(" 中的 "),a("code",[e._v("CONTAINER_NAME")]),e._v(" 目前必须是 Docker 分配的名字，或使用 "),a("code",[e._v("--name")]),e._v(" 参数指定的名字。主机名则不会被识别。")])])}),[],!1,null,null,null);s.default=v.exports}}]);