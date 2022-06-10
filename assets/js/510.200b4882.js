(window.webpackJsonp=window.webpackJsonp||[]).push([[510],{1206:function(e,s,n){"use strict";n.r(s);var a=n(5),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"docker-获取镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-获取镜像"}},[e._v("#")]),e._v(" Docker 获取镜像")]),e._v(" "),n("p",[e._v("之前提到过，"),n("a",{attrs:{href:"https://hub.docker.com/explore/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),n("OutboundLink")],1),e._v(" 上有大量的高质量的镜像可以用，这里我们就说一下怎么获取这些镜像。")]),e._v(" "),n("p",[e._v("从 Docker 镜像仓库获取镜像的命令是 "),n("code",[e._v("docker pull")]),e._v("。其命令格式为：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    docker pull [选项] [Docker Registry 地址[:端口号]/]仓库名[:标签]\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("具体的选项可以通过 "),n("code",[e._v("docker pull --help")]),e._v(" 命令看到，这里我们说一下镜像名称的格式。")]),e._v(" "),n("ul",[n("li",[e._v("Docker 镜像仓库地址：地址的格式一般是 "),n("code",[e._v("<域名/IP>[:端口号]")]),e._v("。默认地址是 Docker Hub。")]),e._v(" "),n("li",[e._v("仓库名：如之前所说，这里的仓库名是两段式名称，即 "),n("code",[e._v("<用户名>/<软件名>")]),e._v("。对于 Docker Hub，如果不给出用户名，则默认为 "),n("code",[e._v("library")]),e._v("，也就是官方镜像。")])]),e._v(" "),n("p",[e._v("比如：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    $ docker pull ubuntu:16.04\n    16.04: Pulling from library/ubuntu\n    bf5d46315322: Pull complete\n    9f13e0ac480c: Pull complete\n    e8988b5b3097: Pull complete\n    40af181810e7: Pull complete\n    e6f7c7e5c03e: Pull complete\n    Digest: sha256:147913621d9cdea08853f6ba9116c2e27a3ceffecf3b492983ae97c3d643fbbe\n    Status: Downloaded newer image for ubuntu:16.04\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br")])]),n("p",[e._v("上面的命令中没有给出 Docker 镜像仓库地址，因此将会从 Docker Hub 获取镜像。而镜像名称是 "),n("code",[e._v("ubuntu:16.04")]),e._v("，因此将会获取官方镜像 "),n("code",[e._v("library/ubuntu")]),e._v(" 仓库中标签为 "),n("code",[e._v("16.04")]),e._v(" 的镜像。")]),e._v(" "),n("p",[e._v("从下载过程中可以看到我们之前提及的分层存储的概念，镜像是由多层存储所构成。下载也是一层层的去下载，并非单一文件。下载过程中给出了每一层的 ID 的前 12 位。并且下载结束后，给出该镜像完整的 "),n("code",[e._v("sha256")]),e._v(" 的摘要，以确保下载一致性。")]),e._v(" "),n("p",[e._v("在使用上面命令的时候，你可能会发现，你所看到的层 ID 以及 "),n("code",[e._v("sha256")]),e._v(" 的摘要和这里的不一样。这是因为官方镜像是一直在维护的，有任何新的 bug，或者版本更新，都会进行修复再以原来的标签发布，这样可以确保任何使用这个标签的用户可以获得更安全、更稳定的镜像。")]),e._v(" "),n("p",[n("em",[e._v("如果从 Docker Hub 下载镜像非常缓慢，可以参照 "),n("code",[e._v("镜像加速器")]),e._v(" 一节配置加速器。")])]),e._v(" "),n("h2",{attrs:{id:"运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[e._v("#")]),e._v(" 运行")]),e._v(" "),n("p",[e._v("有了镜像后，我们就能够以这个镜像为基础启动并运行一个容器。以上面的 "),n("code",[e._v("ubuntu:16.04")]),e._v(" 为例，如果我们打算启动里面的 "),n("code",[e._v("bash")]),e._v(" 并且进行交互式操作的话，可以执行下面的命令。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    $ docker run -it --rm \\\n        ubuntu:16.04 \\\n        bash\n    \n    root@e7009c6ce357:/# cat /etc/os-release\n    NAME="Ubuntu"\n    VERSION="16.04.4 LTS, Trusty Tahr"\n    ID=ubuntu\n    ID_LIKE=debian\n    PRETTY_NAME="Ubuntu 16.04.4 LTS"\n    VERSION_ID="16.04"\n    HOME_URL="http://www.ubuntu.com/"\n    SUPPORT_URL="http://help.ubuntu.com/"\n    BUG_REPORT_URL="http://bugs.launchpad.net/ubuntu/"\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br")])]),n("p",[n("code",[e._v("docker run")]),e._v(" 就是运行容器的命令，我们这里简要的说明一下上面用到的参数。")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("-it")]),e._v("：这是两个参数，一个是 "),n("code",[e._v("-i")]),e._v("：交互式操作，一个是 "),n("code",[e._v("-t")]),e._v(" 终端。我们这里打算进入 "),n("code",[e._v("bash")]),e._v(" 执行一些命令并查看返回结果，因此我们需要交互式终端。")]),e._v(" "),n("li",[n("code",[e._v("--rm")]),e._v("：这个参数是说容器退出后随之将其删除。默认情况下，为了排障需求，退出的容器并不会立即删除，除非手动 "),n("code",[e._v("docker rm")]),e._v("。我们这里只是随便执行个命令，看看结果，不需要排障和保留结果，因此使用 "),n("code",[e._v("--rm")]),e._v(" 可以避免浪费空间。")]),e._v(" "),n("li",[n("code",[e._v("ubuntu:16.04")]),e._v("：这是指用 "),n("code",[e._v("ubuntu:16.04")]),e._v(" 镜像为基础来启动容器。")]),e._v(" "),n("li",[n("code",[e._v("bash")]),e._v("：放在镜像名后的是"),n("strong",[e._v("命令")]),e._v("，这里我们希望有个交互式 Shell，因此用的是 "),n("code",[e._v("bash")]),e._v("。")])]),e._v(" "),n("p",[e._v("进入容器后，我们可以在 Shell 下操作，执行任何所需的命令。这里，我们执行了 "),n("code",[e._v("cat /etc/os-release")]),e._v("，这是 Linux 常用的查看当前系统版本的命令，从返回的结果可以看到容器内是 "),n("code",[e._v("Ubuntu 16.04.4 LTS")]),e._v(" 系统。")]),e._v(" "),n("p",[e._v("最后我们通过 "),n("code",[e._v("exit")]),e._v(" 退出了这个容器。")])])}),[],!1,null,null,null);s.default=t.exports}}]);