(window.webpackJsonp=window.webpackJsonp||[]).push([[450],{1146:function(e,a,s){"use strict";s.r(a);var t=s(5),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"ubuntu-安装-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-安装-docker"}},[e._v("#")]),e._v(" Ubuntu 安装 Docker")]),e._v(" "),s("h2",{attrs:{id:"准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[e._v("#")]),e._v(" 准备工作")]),e._v(" "),s("blockquote",[s("p",[e._v("警告：切勿在没有配置 Docker APT 源的情况下直接使用 apt 命令安装 Docker.")])]),e._v(" "),s("h3",{attrs:{id:"系统要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统要求"}},[e._v("#")]),e._v(" 系统要求")]),e._v(" "),s("p",[e._v("Docker CE 支持以下版本的 "),s("a",{attrs:{href:"https://www.ubuntu.com/server",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ubuntu"),s("OutboundLink")],1),e._v(" 操作系统：")]),e._v(" "),s("ul",[s("li",[e._v("Artful 17.10 (Docker CE 17.11 Edge +)")]),e._v(" "),s("li",[e._v("Xenial 16.04 (LTS)")]),e._v(" "),s("li",[e._v("Trusty 14.04 (LTS)")])]),e._v(" "),s("p",[e._v("Docker CE 可以安装在 64 位的 x86 平台或 ARM 平台上。Ubuntu 发行版中，LTS（Long-Term-Support）长期支持版本，会获得 5 年的升级维护支持，这样的版本会更稳定，因此在生产环境中推荐使用 LTS 版本,当前最新的 LTS 版本为 Ubuntu 16.04。")]),e._v(" "),s("h3",{attrs:{id:"卸载旧版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本"}},[e._v("#")]),e._v(" 卸载旧版本")]),e._v(" "),s("p",[e._v("旧版本的 Docker 称为 "),s("code",[e._v("docker")]),e._v(" 或者 "),s("code",[e._v("docker-engine")]),e._v("，使用以下命令卸载旧版本：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ sudo apt-get remove docker \\\n                   docker-engine \\\n                   docker.io\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"ubuntu-14-04-可选内核模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-14-04-可选内核模块"}},[e._v("#")]),e._v(" Ubuntu 14.04 可选内核模块")]),e._v(" "),s("p",[e._v("从 Ubuntu 14.04 开始，一部分内核模块移到了可选内核模块包 ("),s("code",[e._v("linux-image-extra-*")]),e._v(") ，以减少内核软件包的体积。正常安装的系统应该会包含可选内核模块包，而一些裁剪后的系统可能会将其精简掉。"),s("code",[e._v("AUFS")]),e._v(" 内核驱动属于可选内核模块的一部分，作为推荐的 Docker 存储层驱动，一般建议安装可选内核模块包以使用 "),s("code",[e._v("AUFS")]),e._v("。")]),e._v(" "),s("p",[e._v("如果系统没有安装可选内核模块的话，可以执行下面的命令来安装可选内核模块包：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ sudo apt-get update\n    \n    $ sudo apt-get install \\\n        linux-image-extra-$(uname -r) \\\n        linux-image-extra-virtual\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h3",{attrs:{id:"ubuntu-16-04"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-16-04"}},[e._v("#")]),e._v(" Ubuntu 16.04 +")]),e._v(" "),s("p",[e._v("Ubuntu 16.04 + 上的 Docker CE 默认使用 "),s("code",[e._v("overlay2")]),e._v(" 存储层驱动,无需手动配置。")]),e._v(" "),s("h2",{attrs:{id:"使用-apt-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-apt-安装"}},[e._v("#")]),e._v(" 使用 APT 安装")]),e._v(" "),s("h3",{attrs:{id:"安装必要的一些系统工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装必要的一些系统工具"}},[e._v("#")]),e._v(" 安装必要的一些系统工具")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    sudo apt-get update\n    sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"安装-gpg-证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-gpg-证书"}},[e._v("#")]),e._v(" 安装 GPG 证书")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"写入软件源信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写入软件源信息"}},[e._v("#")]),e._v(" 写入软件源信息")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('    sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"更新并安装-docker-ce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新并安装-docker-ce"}},[e._v("#")]),e._v(" 更新并安装 Docker CE")]),e._v(" "),s("p",[e._v("···\nsudo apt-get -y update\nsudo apt-get -y install docker-ce\n···")]),e._v(" "),s("blockquote",[s("p",[e._v("以上命令会添加稳定版本的 Docker CE APT 镜像源，如果需要最新或者测试版本的 Docker CE 请将 stable 改为 edge 或者 test。从 Docker 17.06 开始，edge test 版本的 APT 镜像源也会包含稳定版本的 Docker。")])]),e._v(" "),s("h2",{attrs:{id:"使用脚本自动安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用脚本自动安装"}},[e._v("#")]),e._v(" 使用脚本自动安装")]),e._v(" "),s("p",[e._v("在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，Ubuntu 系统上可以使用这套脚本安装：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ curl -fsSL get.docker.com -o get-docker.sh\n    # 可能会出现 404 错误，请移步下面的特别说明\n    $ sudo sh get-docker.sh --mirror Aliyun\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker CE 的 Edge 版本安装在系统中。")]),e._v(" "),s("h3",{attrs:{id:"特别说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特别说明"}},[e._v("#")]),e._v(" 特别说明")]),e._v(" "),s("p",[e._v("2018 年 7 月 21 日，貌似阿里云这边在做调整，故导致 Docker 的 Aliyun 安装脚本不可用，是永久性还是临时性的尚不清除，如果你已经按照之前的操作安装 Docker，请按以下步骤进行修复并重新安装")]),e._v(" "),s("ul",[s("li",[e._v("如果已经使用了 Aliyun 脚本安装并成功的\n"),s("ul",[s("li",[e._v("请先卸载 Docker，命令为："),s("code",[e._v("apt-get autoremove docker-ce")])]),e._v(" "),s("li",[e._v("删除 "),s("code",[e._v("/etc/apt/sources.list.d")]),e._v(" 目录下的 "),s("code",[e._v("docker.list")]),e._v(" 文件")])])]),e._v(" "),s("li",[e._v("使用 "),s("code",[e._v("AzureChinaCloud")]),e._v(" 镜像脚本重新安装，命令为："),s("code",[e._v("sudo sh get-docker.sh --mirror AzureChinaCloud")])])]),e._v(" "),s("h2",{attrs:{id:"启动-docker-ce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-docker-ce"}},[e._v("#")]),e._v(" 启动 Docker CE")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ sudo systemctl enable docker\n    $ sudo systemctl start docker\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Ubuntu 14.04 请使用以下命令启动：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ sudo service docker start\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"建立-docker-用户组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立-docker-用户组"}},[e._v("#")]),e._v(" 建立 docker 用户组")]),e._v(" "),s("p",[e._v("默认情况下，"),s("code",[e._v("docker")]),e._v(" 命令会使用 "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Unix_domain_socket",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unix socket"),s("OutboundLink")],1),e._v(" 与 Docker 引擎通讯。而只有 "),s("code",[e._v("root")]),e._v(" 用户和 "),s("code",[e._v("docker")]),e._v(" 组的用户才可以访问 Docker 引擎的 Unix socket。出于安全考虑，一般 Linux 系统上不会直接使用 "),s("code",[e._v("root")]),e._v(" 用户。因此，更好地做法是将需要使用 "),s("code",[e._v("docker")]),e._v(" 的用户加入 "),s("code",[e._v("docker")]),e._v(" 用户组。")]),e._v(" "),s("p",[e._v("建立 "),s("code",[e._v("docker")]),e._v(" 组：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ sudo groupadd docker\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("将当前用户加入 "),s("code",[e._v("docker")]),e._v(" 组：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ sudo usermod -aG docker $USER\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("退出当前终端并重新登录，进行如下测试。")]),e._v(" "),s("h2",{attrs:{id:"测试-docker-是否安装正确"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试-docker-是否安装正确"}},[e._v("#")]),e._v(" 测试 Docker 是否安装正确")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    $ docker run hello-world\n    \n    Unable to find image 'hello-world:latest' locally\n    latest: Pulling from library/hello-world\n    ca4f61b1923c: Pull complete\n    Digest: sha256:be0cd392e45be79ffeffa6b05338b98ebb16c87b255f48e297ec7f98e123905c\n    Status: Downloaded newer image for hello-world:latest\n    \n    Hello from Docker!\n    This message shows that your installation appears to be working correctly.\n    \n    To generate this message, Docker took the following steps:\n     1. The Docker client contacted the Docker daemon.\n     2. The Docker daemon pulled the \"hello-world\" image from the Docker Hub.\n        (amd64)\n     3. The Docker daemon created a new container from that image which runs the\n        executable that produces the output you are currently reading.\n     4. The Docker daemon streamed that output to the Docker client, which sent it\n        to your terminal.\n    \n    To try something more ambitious, you can run an Ubuntu container with:\n     $ docker run -it ubuntu bash\n    \n    Share images, automate workflows, and more with a free Docker ID:\n     https://cloud.docker.com/\n    \n    For more examples and ideas, visit:\n     https://docs.docker.com/engine/userguide/\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br")])]),s("p",[e._v("若能正常输出以上信息，则说明安装成功。")]),e._v(" "),s("h2",{attrs:{id:"镜像加速"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像加速"}},[e._v("#")]),e._v(" 镜像加速")]),e._v(" "),s("p",[e._v("鉴于国内网络问题，后续拉取 Docker 镜像十分缓慢，强烈建议安装 Docker 之后配置 "),s("code",[e._v("国内镜像加速")]),e._v("。")]),e._v(" "),s("h2",{attrs:{id:"参考文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[e._v("#")]),e._v(" 参考文档")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker 官方 Ubuntu 安装文档"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);