(window.webpackJsonp=window.webpackJsonp||[]).push([[519],{1215:function(e,a,s){"use strict";s.r(a);var n=s(5),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"创建-swarm-集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-swarm-集群"}},[e._v("#")]),e._v(" 创建 Swarm 集群")]),e._v(" "),s("p",[e._v("阅读 "),s("code",[e._v("基本概念")]),e._v(" 一节我们知道 "),s("code",[e._v("Swarm")]),e._v(" 集群由 "),s("strong",[e._v("管理节点")]),e._v(" 和 "),s("strong",[e._v("工作节点")]),e._v(" 组成。本节我们来创建一个包含一个管理节点和两个工作节点的最小 "),s("code",[e._v("Swarm")]),e._v(" 集群。")]),e._v(" "),s("h2",{attrs:{id:"初始化集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化集群"}},[e._v("#")]),e._v(" 初始化集群")]),e._v(" "),s("p",[e._v("在 "),s("code",[e._v("Docker Machine")]),e._v(" 一节中我们了解到 "),s("code",[e._v("Docker Machine")]),e._v(" 可以在数秒内创建一个虚拟的 Docker 主机，下面我们使用它来创建三个 Docker 主机，并加入到集群中。")]),e._v(" "),s("p",[e._v("我们首先创建一个 Docker 主机作为管理节点。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ docker-machine create -d virtualbox manager\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("我们使用 "),s("code",[e._v("docker swarm init")]),e._v(" 在管理节点初始化一个 "),s("code",[e._v("Swarm")]),e._v(" 集群。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ docker-machine ssh manager\n    \n    docker@manager:~$ docker swarm init --advertise-addr 192.168.99.100\n    Swarm initialized: current node (dxn1zf6l61qsb1josjja83ngz) is now a manager.\n    \n    To add a worker to this swarm, run the following command:\n    \n        docker swarm join \\\n        --token SWMTKN-1-49nj1cmql0jkz5s954yi3oex3nedyz0fb0xx14ie39trti4wxv-8vxv8rssmk743ojnwacrr2e7c \\\n        192.168.99.100:2377\n    \n    To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("p",[e._v("如果你的 Docker 主机有多个网卡，拥有多个 IP，必须使用 "),s("code",[e._v("--advertise-addr")]),e._v(" 指定 IP。")]),e._v(" "),s("blockquote",[s("p",[e._v("执行 "),s("code",[e._v("docker swarm init")]),e._v(" 命令的节点自动成为管理节点。")])]),e._v(" "),s("h2",{attrs:{id:"增加工作节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加工作节点"}},[e._v("#")]),e._v(" 增加工作节点")]),e._v(" "),s("p",[e._v("上一步我们初始化了一个 "),s("code",[e._v("Swarm")]),e._v(" 集群，拥有了一个管理节点，下面我们继续创建两个 Docker 主机作为工作节点，并加入到集群中。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ docker-machine create -d virtualbox worker1\n    \n    $ docker-machine ssh worker1\n    \n    docker@worker1:~$ docker swarm join \\\n        --token SWMTKN-1-49nj1cmql0jkz5s954yi3oex3nedyz0fb0xx14ie39trti4wxv-8vxv8rssmk743ojnwacrr2e7c \\\n        192.168.99.100:2377\n    \n    This node joined a swarm as a worker.    \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ docker-machine create -d virtualbox worker2\n    \n    $ docker-machine ssh worker2\n    \n    docker@worker1:~$ docker swarm join \\\n        --token SWMTKN-1-49nj1cmql0jkz5s954yi3oex3nedyz0fb0xx14ie39trti4wxv-8vxv8rssmk743ojnwacrr2e7c \\\n        192.168.99.100:2377\n    \n    This node joined a swarm as a worker.    \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("blockquote",[s("p",[e._v("注意：一些细心的读者可能通过 "),s("code",[e._v("docker-machine create --help")]),e._v(" 查看到 "),s("code",[e._v("--swarm*")]),e._v(" 等一系列参数。该参数是用于旧的 "),s("code",[e._v("Docker Swarm")]),e._v(",与本章所讲的 "),s("code",[e._v("Swarm mode")]),e._v(" 没有关系。")])]),e._v(" "),s("h2",{attrs:{id:"查看集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看集群"}},[e._v("#")]),e._v(" 查看集群")]),e._v(" "),s("p",[e._v("经过上边的两步，我们已经拥有了一个最小的 "),s("code",[e._v("Swarm")]),e._v(" 集群，包含一个管理节点和两个工作节点。")]),e._v(" "),s("p",[e._v("在管理节点使用 "),s("code",[e._v("docker node ls")]),e._v(" 查看集群。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ docker node ls\n    ID                           HOSTNAME  STATUS  AVAILABILITY  MANAGER STATUS\n    03g1y59jwfg7cf99w4lt0f662    worker2   Ready   Active\n    9j68exjopxe7wfl6yuxml7a7j    worker1   Ready   Active\n    dxn1zf6l61qsb1josjja83ngz *  manager   Ready   Active        Leader\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);