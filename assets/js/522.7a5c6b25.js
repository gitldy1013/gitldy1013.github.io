(window.webpackJsonp=window.webpackJsonp||[]).push([[522],{1218:function(e,s,a){"use strict";a.r(s);var n=a(5),r=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"swarm-mode-管理配置信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#swarm-mode-管理配置信息"}},[e._v("#")]),e._v(" Swarm mode 管理配置信息")]),e._v(" "),a("p",[e._v("在动态的、大规模的分布式集群上，管理和分发配置文件也是很重要的工作。传统的配置文件分发方式（如配置文件放入镜像中，设置环境变量，volume 动态挂载等）都降低了镜像的通用性。")]),e._v(" "),a("p",[e._v("在 Docker 17.06 以上版本中，Docker 新增了 "),a("code",[e._v("docker config")]),e._v(" 子命令来管理集群中的配置信息，以后你无需将配置文件放入镜像或挂载到容器中就可实现对服务的配置。")]),e._v(" "),a("blockquote",[a("p",[e._v("注意："),a("code",[e._v("config")]),e._v(" 仅能在 Swarm 集群中使用。")])]),e._v(" "),a("p",[e._v("这里我们以在 Swarm 集群中部署 "),a("code",[e._v("redis")]),e._v(" 服务为例。")]),e._v(" "),a("h2",{attrs:{id:"创建-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-config"}},[e._v("#")]),e._v(" 创建 config")]),e._v(" "),a("p",[e._v("新建 "),a("code",[e._v("redis.conf")]),e._v(" 文件")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    port 6380\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("此项配置 Redis 监听 "),a("code",[e._v("6380")]),e._v(" 端口")]),e._v(" "),a("p",[e._v("我们使用 "),a("code",[e._v("docker config create")]),e._v(" 命令创建 "),a("code",[e._v("config")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    $ docker config create redis.conf redis.conf\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"查看-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-config"}},[e._v("#")]),e._v(" 查看 config")]),e._v(" "),a("p",[e._v("使用 "),a("code",[e._v("docker config ls")]),e._v(" 命令来查看 "),a("code",[e._v("config")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    $ docker config ls\n    \n    ID                          NAME                CREATED             UPDATED\n    yod8fx8iiqtoo84jgwadp86yk   redis.conf          4 seconds ago       4 seconds ago\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h2",{attrs:{id:"创建-redis-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-redis-服务"}},[e._v("#")]),e._v(" 创建 redis 服务")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    $ docker service create \\\n         --name redis \\\n         # --config source=redis.conf,target=/etc/redis.conf \\\n         --config redis.conf \\\n         -p 6379:6380 \\\n         redis:latest \\\n         redis-server /redis.conf\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("如果你没有在 "),a("code",[e._v("target")]),e._v(" 中显式的指定路径时，默认的 "),a("code",[e._v("redis.conf")]),e._v(" 以 "),a("code",[e._v("tmpfs")]),e._v(" 文件系统挂载到容器的 "),a("code",[e._v("/config.conf")]),e._v("。")]),e._v(" "),a("p",[e._v("经过测试，redis 可以正常使用。")]),e._v(" "),a("p",[e._v("以前我们通过监听主机目录来配置 Redis，就需要在集群的每个节点放置该文件，如果采用 "),a("code",[e._v("docker config")]),e._v(" 来管理服务的配置信息，我们只需在集群中的管理节点创建 "),a("code",[e._v("config")]),e._v("，当部署服务时，集群会自动的将配置文件分发到运行服务的各个节点中，大大降低了配置信息的管理和分发难度。")])])}),[],!1,null,null,null);s.default=r.exports}}]);