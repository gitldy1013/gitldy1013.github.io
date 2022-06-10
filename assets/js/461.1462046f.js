(window.webpackJsonp=window.webpackJsonp||[]).push([[461],{1157:function(s,e,a){"use strict";a.r(e);var n=a(5),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker-compose-模板文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-模板文件"}},[s._v("#")]),s._v(" Docker Compose 模板文件")]),s._v(" "),a("p",[s._v("模板文件是使用 "),a("code",[s._v("Compose")]),s._v(" 的核心，涉及到的指令关键字也比较多。但大家不用担心，这里面大部分指令跟 "),a("code",[s._v("docker run")]),s._v(" 相关参数的含义都是类似的。")]),s._v(" "),a("p",[s._v("默认的模板文件名称为 "),a("code",[s._v("docker-compose.yml")]),s._v("，格式为 YAML 格式。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    version: "3"\n    \n    services:\n      webapp:\n        image: examples/web\n        ports:\n          - "80:80"\n        volumes:\n          - "/data"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("注意每个服务都必须通过 "),a("code",[s._v("image")]),s._v(" 指令指定镜像或 "),a("code",[s._v("build")]),s._v(" 指令（需要 Dockerfile）等来自动构建生成镜像。")]),s._v(" "),a("p",[s._v("如果使用 "),a("code",[s._v("build")]),s._v(" 指令，在 "),a("code",[s._v("Dockerfile")]),s._v(" 中设置的选项(例如："),a("code",[s._v("CMD")]),s._v(", "),a("code",[s._v("EXPOSE")]),s._v(", "),a("code",[s._v("VOLUME")]),s._v(", "),a("code",[s._v("ENV")]),s._v(" 等) 将会自动被获取，无需在 "),a("code",[s._v("docker-compose.yml")]),s._v(" 中再次设置。")]),s._v(" "),a("p",[s._v("下面分别介绍各个指令的用法。")]),s._v(" "),a("h2",{attrs:{id:"build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[s._v("#")]),s._v(" "),a("code",[s._v("build")])]),s._v(" "),a("p",[s._v("指定 "),a("code",[s._v("Dockerfile")]),s._v(" 所在文件夹的路径（可以是绝对路径，或者相对 docker-compose.yml 文件的路径）。 "),a("code",[s._v("Compose")]),s._v(" 将会利用它自动构建这个镜像，然后使用这个镜像。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    version: '3'\n    services:\n    \n      webapp:\n        build: ./dir\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("你也可以使用 "),a("code",[s._v("context")]),s._v(" 指令指定 "),a("code",[s._v("Dockerfile")]),s._v(" 所在文件夹的路径。")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("dockerfile")]),s._v(" 指令指定 "),a("code",[s._v("Dockerfile")]),s._v(" 文件名。")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("arg")]),s._v(" 指令指定构建镜像时的变量。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    version: '3'\n    services:\n    \n      webapp:\n        build:\n          context: ./dir\n          dockerfile: Dockerfile-alternate\n          args:\n            buildno: 1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("使用 "),a("code",[s._v("cache_from")]),s._v(" 指定构建镜像的缓存")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    build:\n      context: .\n      cache_from:\n        - alpine:latest\n        - corp/web_app:3.14\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"cap-add-cap-drop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cap-add-cap-drop"}},[s._v("#")]),s._v(" "),a("code",[s._v("cap_add, cap_drop")])]),s._v(" "),a("p",[s._v("指定容器的内核能力（capacity）分配。")]),s._v(" "),a("p",[s._v("例如，让容器拥有所有能力可以指定为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    cap_add:\n      - ALL\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("去掉 NET_ADMIN 能力可以指定为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    cap_drop:\n      - NET_ADMIN\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[s._v("#")]),s._v(" "),a("code",[s._v("command")])]),s._v(" "),a("p",[s._v("覆盖容器启动后默认执行的命令。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    command: echo "hello world"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"configs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configs"}},[s._v("#")]),s._v(" "),a("code",[s._v("configs")])]),s._v(" "),a("p",[s._v("仅用于 "),a("code",[s._v("Swarm mode")])]),s._v(" "),a("h2",{attrs:{id:"cgroup-parent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cgroup-parent"}},[s._v("#")]),s._v(" "),a("code",[s._v("cgroup_parent")])]),s._v(" "),a("p",[s._v("指定父 "),a("code",[s._v("cgroup")]),s._v(" 组，意味着将继承该组的资源限制。")]),s._v(" "),a("p",[s._v("例如，创建了一个 cgroup 组名称为 "),a("code",[s._v("cgroups_1")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    cgroup_parent: cgroups_1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"container-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-name"}},[s._v("#")]),s._v(" "),a("code",[s._v("container_name")])]),s._v(" "),a("p",[s._v("指定容器名称。默认将会使用 "),a("code",[s._v("项目名称_服务名称_序号")]),s._v(" 这样的格式。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    container_name: docker-web-container\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("注意: 指定容器名称后，该服务将无法进行扩展（scale），因为 Docker 不允许多个容器具有相同的名称。")])]),s._v(" "),a("h2",{attrs:{id:"deploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[s._v("#")]),s._v(" "),a("code",[s._v("deploy")])]),s._v(" "),a("p",[s._v("仅用于 "),a("code",[s._v("Swarm mode")])]),s._v(" "),a("h2",{attrs:{id:"devices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devices"}},[s._v("#")]),s._v(" "),a("code",[s._v("devices")])]),s._v(" "),a("p",[s._v("指定设备映射关系。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    devices:\n      - "/dev/ttyUSB1:/dev/ttyUSB0"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"depends-on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#depends-on"}},[s._v("#")]),s._v(" "),a("code",[s._v("depends_on")])]),s._v(" "),a("p",[s._v("解决容器的依赖、启动先后的问题。以下例子中会先启动 "),a("code",[s._v("redis")]),s._v(" "),a("code",[s._v("db")]),s._v(" 再启动 "),a("code",[s._v("web")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    version: '3'\n    \n    services:\n      web:\n        build: .\n        depends_on:\n          - db\n          - redis\n    \n      redis:\n        image: redis\n    \n      db:\n        image: postgres\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("blockquote",[a("p",[s._v("注意："),a("code",[s._v("web")]),s._v(" 服务不会等待 "),a("code",[s._v("redis")]),s._v(" "),a("code",[s._v("db")]),s._v(" 「完全启动」之后才启动。")])]),s._v(" "),a("h2",{attrs:{id:"dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[s._v("#")]),s._v(" "),a("code",[s._v("dns")])]),s._v(" "),a("p",[s._v("自定义 "),a("code",[s._v("DNS")]),s._v(" 服务器。可以是一个值，也可以是一个列表。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    dns: 8.8.8.8\n    \n    dns:\n      - 8.8.8.8\n      - 114.114.114.114\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"dns-search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-search"}},[s._v("#")]),s._v(" "),a("code",[s._v("dns_search")])]),s._v(" "),a("p",[s._v("配置 "),a("code",[s._v("DNS")]),s._v(" 搜索域。可以是一个值，也可以是一个列表。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    dns_search: example.com\n    \n    dns_search:\n      - domain1.example.com\n      - domain2.example.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"tmpfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tmpfs"}},[s._v("#")]),s._v(" "),a("code",[s._v("tmpfs")])]),s._v(" "),a("p",[s._v("挂载一个 tmpfs 文件系统到容器。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    tmpfs: /run\n    tmpfs:\n      - /run\n      - /tmp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"env-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env-file"}},[s._v("#")]),s._v(" "),a("code",[s._v("env_file")])]),s._v(" "),a("p",[s._v("从文件中获取环境变量，可以为单独的文件路径或列表。")]),s._v(" "),a("p",[s._v("如果通过 "),a("code",[s._v("docker-compose -f FILE")]),s._v(" 方式来指定 Compose 模板文件，则 "),a("code",[s._v("env_file")]),s._v(" 中变量的路径会基于模板文件路径。")]),s._v(" "),a("p",[s._v("如果有变量名称与 "),a("code",[s._v("environment")]),s._v(" 指令冲突，则按照惯例，以后者为准。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    env_file: .env\n    \n    env_file:\n      - ./common.env\n      - ./apps/web.env\n      - /opt/secrets.env\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("环境变量文件中每一行必须符合格式，支持 "),a("code",[s._v("#")]),s._v(" 开头的注释行。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    # common.env: Set development environment\n    PROG_ENV=development\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[s._v("#")]),s._v(" "),a("code",[s._v("environment")])]),s._v(" "),a("p",[s._v("设置环境变量。你可以使用数组或字典两种格式。")]),s._v(" "),a("p",[s._v("只给定名称的变量会自动获取运行 Compose 主机上对应变量的值，可以用来防止泄露不必要的数据。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    environment:\n      RACK_ENV: development\n      SESSION_SECRET:\n    \n    environment:\n      - RACK_ENV=development\n      - SESSION_SECRET\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("如果变量名称或者值中用到 "),a("code",[s._v("true|false，yes|no")]),s._v(" 等表达 "),a("a",{attrs:{href:"http://yaml.org/type/bool.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("布尔"),a("OutboundLink")],1),s._v(" 含义的词汇，最好放到引号里，避免 YAML 自动解析某些内容为对应的布尔语义。这些特定词汇，包括")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"expose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expose"}},[s._v("#")]),s._v(" "),a("code",[s._v("expose")])]),s._v(" "),a("p",[s._v("暴露端口，但不映射到宿主机，只被连接的服务访问。")]),s._v(" "),a("p",[s._v("仅可以指定内部端口为参数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    expose:\n     - "3000"\n     - "8000"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"external-links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-links"}},[s._v("#")]),s._v(" "),a("code",[s._v("external_links")])]),s._v(" "),a("blockquote",[a("p",[s._v("注意：不建议使用该指令。")])]),s._v(" "),a("p",[s._v("链接到 "),a("code",[s._v("docker-compose.yml")]),s._v(" 外部的容器，甚至并非 "),a("code",[s._v("Compose")]),s._v(" 管理的外部容器。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    external_links:\n     - redis_1\n     - project_db_1:mysql\n     - project_db_1:postgresql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"extra-hosts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extra-hosts"}},[s._v("#")]),s._v(" "),a("code",[s._v("extra_hosts")])]),s._v(" "),a("p",[s._v("类似 Docker 中的 "),a("code",[s._v("--add-host")]),s._v(" 参数，指定额外的 host 名称映射信息。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    extra_hosts:\n     - "googledns:8.8.8.8"\n     - "dockerhub:52.1.157.61"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("会在启动后的服务容器中 "),a("code",[s._v("/etc/hosts")]),s._v(" 文件中添加如下两条条目。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    8.8.8.8 googledns\n    52.1.157.61 dockerhub\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"healthcheck"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#healthcheck"}},[s._v("#")]),s._v(" "),a("code",[s._v("healthcheck")])]),s._v(" "),a("p",[s._v("通过命令检查容器是否健康运行。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    healthcheck:\n      test: ["CMD", "curl", "-f", "http://localhost"]\n      interval: 1m30s\n      timeout: 10s\n      retries: 3\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image"}},[s._v("#")]),s._v(" "),a("code",[s._v("image")])]),s._v(" "),a("p",[s._v("指定为镜像名称或镜像 ID。如果镜像在本地不存在，"),a("code",[s._v("Compose")]),s._v(" 将会尝试拉取这个镜像。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    image: ubuntu\n    image: orchardup/postgresql\n    image: a4bc65fd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"labels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#labels"}},[s._v("#")]),s._v(" "),a("code",[s._v("labels")])]),s._v(" "),a("p",[s._v("为容器添加 Docker 元数据（metadata）信息。例如可以为容器添加辅助说明信息。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    labels:\n      com.startupteam.description: "webapp for a startup team"\n      com.startupteam.department: "devops department"\n      com.startupteam.release: "rc3 for v1.0"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[s._v("#")]),s._v(" "),a("code",[s._v("links")])]),s._v(" "),a("blockquote",[a("p",[s._v("注意：不推荐使用该指令。")])]),s._v(" "),a("h2",{attrs:{id:"logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[s._v("#")]),s._v(" "),a("code",[s._v("logging")])]),s._v(" "),a("p",[s._v("配置日志选项。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    logging:\n      driver: syslog\n      options:\n        syslog-address: "tcp://192.168.0.42:123"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("目前支持三种日志驱动类型。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    driver: "json-file"\n    driver: "syslog"\n    driver: "none"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("code",[s._v("options")]),s._v(" 配置日志驱动的相关参数。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    options:\n      max-size: "200k"\n      max-file: "10"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"network-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-mode"}},[s._v("#")]),s._v(" "),a("code",[s._v("network_mode")])]),s._v(" "),a("p",[s._v("设置网络模式。使用和 "),a("code",[s._v("docker run")]),s._v(" 的 "),a("code",[s._v("--network")]),s._v(" 参数一样的值。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    network_mode: "bridge"\n    network_mode: "host"\n    network_mode: "none"\n    network_mode: "service:[service name]"\n    network_mode: "container:[container name/id]"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"networks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#networks"}},[s._v("#")]),s._v(" "),a("code",[s._v("networks")])]),s._v(" "),a("p",[s._v("配置容器连接的网络。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    version: "3"\n    services:\n    \n      some-service:\n        networks:\n         - some-network\n         - other-network\n    \n    networks:\n      some-network:\n      other-network:\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"pid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pid"}},[s._v("#")]),s._v(" "),a("code",[s._v("pid")])]),s._v(" "),a("p",[s._v("跟主机系统共享进程命名空间。打开该选项的容器之间，以及容器和宿主机系统之间可以通过进程 ID 来相互访问和操作。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    pid: "host"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"ports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ports"}},[s._v("#")]),s._v(" "),a("code",[s._v("ports")])]),s._v(" "),a("p",[s._v("暴露端口信息。")]),s._v(" "),a("p",[s._v("使用宿主端口：容器端口 "),a("code",[s._v("(HOST:CONTAINER)")]),s._v(" 格式，或者仅仅指定容器的端口（宿主将会随机选择端口）都可以。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    ports:\n     - "3000"\n     - "8000:8000"\n     - "49100:22"\n     - "127.0.0.1:8001:8001"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("em",[s._v("注意：当使用 "),a("code",[s._v("HOST:CONTAINER")]),s._v(" 格式来映射端口时，如果你使用的容器端口小于 60 并且没放到引号里，可能会得到错误结果，因为 "),a("code",[s._v("YAML")]),s._v(" 会自动解析 "),a("code",[s._v("xx:yy")]),s._v(" 这种数字格式为 60 进制。为避免出现这种问题，建议数字串都采用引号包括起来的字符串格式。")])]),s._v(" "),a("h2",{attrs:{id:"secrets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secrets"}},[s._v("#")]),s._v(" "),a("code",[s._v("secrets")])]),s._v(" "),a("p",[s._v("存储敏感数据，例如 "),a("code",[s._v("mysql")]),s._v(" 服务密码。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    version: "3.1"\n    services:\n    \n    mysql:\n      image: mysql\n      environment:\n        MYSQL_ROOT_PASSWORD_FILE: /run/secrets/db_root_password\n      secrets:\n        - db_root_password\n        - my_other_secret\n    \n    secrets:\n      my_secret:\n        file: ./my_secret.txt\n      my_other_secret:\n        external: true\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"security-opt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-opt"}},[s._v("#")]),s._v(" "),a("code",[s._v("security_opt")])]),s._v(" "),a("p",[s._v("指定容器模板标签（label）机制的默认属性（用户、角色、类型、级别等）。例如配置标签的用户名和角色名。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    security_opt:\n        - label:user:USER\n        - label:role:ROLE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"stop-signal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop-signal"}},[s._v("#")]),s._v(" "),a("code",[s._v("stop_signal")])]),s._v(" "),a("p",[s._v("设置另一个信号来停止容器。在默认情况下使用的是 SIGTERM 停止容器。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    stop_signal: SIGUSR1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"sysctls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sysctls"}},[s._v("#")]),s._v(" "),a("code",[s._v("sysctls")])]),s._v(" "),a("p",[s._v("配置容器内核参数。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    sysctls:\n      net.core.somaxconn: 1024\n      net.ipv4.tcp_syncookies: 0\n    \n    sysctls:\n      - net.core.somaxconn=1024\n      - net.ipv4.tcp_syncookies=0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"ulimits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ulimits"}},[s._v("#")]),s._v(" "),a("code",[s._v("ulimits")])]),s._v(" "),a("p",[s._v("指定容器的 ulimits 限制值。")]),s._v(" "),a("p",[s._v("例如，指定最大进程数为 65535，指定文件句柄数为 20000（软限制，应用可以随时修改，不能超过硬限制） 和 40000（系统硬限制，只能 root 用户提高）。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("      ulimits:\n        nproc: 65535\n        nofile:\n          soft: 20000\n          hard: 40000\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"volumes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volumes"}},[s._v("#")]),s._v(" "),a("code",[s._v("volumes")])]),s._v(" "),a("p",[s._v("数据卷所挂载路径设置。可以设置宿主机路径 （"),a("code",[s._v("HOST:CONTAINER")]),s._v("） 或加上访问模式 （"),a("code",[s._v("HOST:CONTAINER:ro")]),s._v("）。")]),s._v(" "),a("p",[s._v("该指令中路径支持相对路径。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    volumes:\n     - /var/lib/mysql\n     - cache/:/tmp/cache\n     - ~/configs:/etc/configs/:ro\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"其它指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它指令"}},[s._v("#")]),s._v(" 其它指令")]),s._v(" "),a("p",[s._v("此外，还有包括 "),a("code",[s._v("domainname, entrypoint, hostname, ipc, mac_address, privileged, read_only, shm_size, restart, stdin_open, tty, user, working_dir")]),s._v(" 等指令，基本跟 "),a("code",[s._v("docker run")]),s._v(" 中对应参数的功能一致。")]),s._v(" "),a("p",[s._v("指定服务容器启动后执行的入口文件。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    entrypoint: /code/entrypoint.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("指定容器中运行应用的用户名。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    user: nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("指定容器中工作目录。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    working_dir: /code\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("指定容器中搜索域名、主机名、mac 地址等。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    domainname: your_website.com\n    hostname: test\n    mac_address: 08-00-27-00-0C-0A\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("允许容器中运行一些特权命令。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    privileged: true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("指定容器退出后的重启策略为始终重启。该命令对保持服务始终运行十分有效，在生产环境中推荐配置为 "),a("code",[s._v("always")]),s._v(" 或者 "),a("code",[s._v("unless-stopped")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    restart: always\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("以只读模式挂载容器的 root 文件系统，意味着不能对容器内容进行修改。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    read_only: true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("打开标准输入，可以接受外部输入。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    stdin_open: true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("模拟一个伪终端。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    tty: true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"读取变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取变量"}},[s._v("#")]),s._v(" 读取变量")]),s._v(" "),a("p",[s._v("Compose 模板文件支持动态读取主机的系统环境变量和当前目录下的 "),a("code",[s._v(".env")]),s._v(" 文件中的变量。")]),s._v(" "),a("p",[s._v("例如，下面的 Compose 文件将从运行它的环境中读取变量 "),a("code",[s._v("${MONGO_VERSION}")]),s._v(" 的值，并写入执行的指令中。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    version: "3"\n    services:\n    \n    db:\n      image: "mongo:${MONGO_VERSION}"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("如果执行 "),a("code",[s._v("MONGO_VERSION=3.2 docker-compose up")]),s._v(" 则会启动一个 "),a("code",[s._v("mongo:3.2")]),s._v(" 镜像的容器；如果执行 "),a("code",[s._v("MONGO_VERSION=2.8 docker-compose up")]),s._v(" 则会启动一个 "),a("code",[s._v("mongo:2.8")]),s._v(" 镜像的容器。")]),s._v(" "),a("p",[s._v("若当前目录存在 "),a("code",[s._v(".env")]),s._v(" 文件，执行 "),a("code",[s._v("docker-compose")]),s._v(" 命令时将从该文件中读取变量。")]),s._v(" "),a("p",[s._v("在当前目录新建 "),a("code",[s._v(".env")]),s._v(" 文件并写入以下内容。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    # 支持 # 号注释\n    MONGO_VERSION=3.6\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("执行 "),a("code",[s._v("docker-compose up")]),s._v(" 则会启动一个 "),a("code",[s._v("mongo:3.6")]),s._v(" 镜像的容器。")])])}),[],!1,null,null,null);e.default=t.exports}}]);