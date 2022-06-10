(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{1232:function(s,e,t){"use strict";t.r(e);var a=t(5),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker-端口映射实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-端口映射实现"}},[s._v("#")]),s._v(" Docker 端口映射实现")]),s._v(" "),t("p",[s._v("默认情况下，容器可以主动访问到外部网络的连接，但是外部网络无法访问到容器。")]),s._v(" "),t("h2",{attrs:{id:"容器访问外部实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器访问外部实现"}},[s._v("#")]),s._v(" 容器访问外部实现")]),s._v(" "),t("p",[s._v("容器所有到外部网络的连接，源地址都会被 NAT 成本地系统的 IP 地址。这是使用 "),t("code",[s._v("iptables")]),s._v(" 的源地址伪装操作实现的。")]),s._v(" "),t("p",[s._v("查看主机的 NAT 规则。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    $ sudo iptables -t nat -nL\n    ...\n    Chain POSTROUTING (policy ACCEPT)\n    target     prot opt source               destination\n    MASQUERADE  all  --  172.17.0.0/16       !172.17.0.0/16\n    ...\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("其中，上述规则将所有源地址在 "),t("code",[s._v("172.17.0.0/16")]),s._v(" 网段，目标地址为其他网段（外部网络）的流量动态伪装为从系统网卡发出。MASQUERADE 跟传统 SNAT 的好处是它能动态从网卡获取地址。")]),s._v(" "),t("h2",{attrs:{id:"外部访问容器实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外部访问容器实现"}},[s._v("#")]),s._v(" 外部访问容器实现")]),s._v(" "),t("p",[s._v("容器允许外部访问，可以在 "),t("code",[s._v("docker run")]),s._v(" 时候通过 "),t("code",[s._v("-p")]),s._v(" 或 "),t("code",[s._v("-P")]),s._v(" 参数来启用。")]),s._v(" "),t("p",[s._v("不管用那种办法，其实也是在本地的 "),t("code",[s._v("iptable")]),s._v(" 的 nat 表中添加相应的规则。")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("-P")]),s._v(" 时：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    $ iptables -t nat -nL\n    ...\n    Chain DOCKER (2 references)\n    target     prot opt source               destination\n    DNAT       tcp  --  0.0.0.0/0            0.0.0.0/0            tcp dpt:49153 to:172.17.0.2:80\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("使用 "),t("code",[s._v("-p 80:80")]),s._v(" 时：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    $ iptables -t nat -nL\n    Chain DOCKER (2 references)\n    target     prot opt source               destination\n    DNAT       tcp  --  0.0.0.0/0            0.0.0.0/0            tcp dpt:80 to:172.17.0.2:80\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("注意：")]),s._v(" "),t("ul",[t("li",[s._v("这里的规则映射了 "),t("code",[s._v("0.0.0.0")]),s._v("，意味着将接受主机来自所有接口的流量。用户可以通过 "),t("code",[s._v("-p IP:host_port:container_port")]),s._v(" 或 "),t("code",[s._v("-p IP::port")]),s._v(" 来指定允许访问容器的主机上的 IP、接口等，以制定更严格的规则。")]),s._v(" "),t("li",[s._v("如果希望永久绑定到某个固定的 IP 地址，可以在 Docker 配置文件 "),t("code",[s._v("/etc/docker/daemon.json")]),s._v(" 中添加如下内容。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('    {\n      "ip": "0.0.0.0"\n    }\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);