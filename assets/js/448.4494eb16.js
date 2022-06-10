(window.webpackJsonp=window.webpackJsonp||[]).push([[448],{1144:function(e,r,t){"use strict";t.r(r);var s=t(5),a=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"docker-镜像加速器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-镜像加速器"}},[e._v("#")]),e._v(" Docker 镜像加速器")]),e._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),t("p",[e._v("国内从 Docker Hub 拉取镜像有时会遇到困难，此时可以配置镜像加速器。Docker 官方和国内很多云服务商都提供了国内加速器服务，例如：")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.docker.com/registry/recipes/mirror/#use-case-the-china-registry-mirror",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker 官方提供的中国 registry mirror"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://cr.console.aliyun.com/#/accelerator",target:"_blank",rel:"noopener noreferrer"}},[e._v("阿里云加速器"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.daocloud.io/mirror#accelerator-doc",target:"_blank",rel:"noopener noreferrer"}},[e._v("DaoCloud 加速器"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("我们以 Docker 官方加速器为例进行介绍。")]),e._v(" "),t("h2",{attrs:{id:"ubuntu-14-04、debian-7-wheezy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-14-04、debian-7-wheezy"}},[e._v("#")]),e._v(" Ubuntu 14.04、Debian 7 Wheezy")]),e._v(" "),t("p",[e._v("对于使用 "),t("a",{attrs:{href:"http://upstart.ubuntu.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("upstart"),t("OutboundLink")],1),e._v(" 的系统而言，编辑 "),t("code",[e._v("/etc/default/docker")]),e._v(" 文件，在其中的 "),t("code",[e._v("DOCKER_OPTS")]),e._v(" 中配置加速器地址：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    DOCKER_OPTS="--registry-mirror=https://registry.docker-cn.com"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("重新启动服务。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    $ sudo service docker restart\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"ubuntu-16-04-、debian-8-、centos-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-16-04-、debian-8-、centos-7"}},[e._v("#")]),e._v(" Ubuntu 16.04+、Debian 8+、CentOS 7")]),e._v(" "),t("p",[e._v("对于使用 "),t("a",{attrs:{href:"https://www.freedesktop.org/wiki/Software/systemd/",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemd"),t("OutboundLink")],1),e._v(" 的系统，请在 "),t("code",[e._v("/etc/docker/daemon.json")]),e._v(" 中写入如下内容（如果文件不存在请新建该文件）")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    {\n      "registry-mirrors": [\n        "https://registry.docker-cn.com"\n      ]\n    }\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("blockquote",[t("p",[e._v("注意，一定要保证该文件符合 json 规范，否则 Docker 将不能启动。")])]),e._v(" "),t("p",[e._v("之后重新启动服务。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    $ sudo systemctl daemon-reload\n    $ sudo systemctl restart docker\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("blockquote",[t("p",[e._v("注意：如果您之前查看旧教程，修改了 "),t("code",[e._v("docker.service")]),e._v(" 文件内容，请去掉您添加的内容（"),t("code",[e._v("--registry-mirror=https://registry.docker-cn.com")]),e._v("），这里不再赘述。")])]),e._v(" "),t("h2",{attrs:{id:"windows-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-10"}},[e._v("#")]),e._v(" Windows 10")]),e._v(" "),t("p",[e._v("对于使用 Windows 10 的系统，在系统右下角托盘 Docker 图标内右键菜单选择 "),t("code",[e._v("Settings")]),e._v("，打开配置窗口后左侧导航菜单选择 "),t("code",[e._v("Daemon")]),e._v("。在 "),t("code",[e._v("Registry mirrors")]),e._v(" 一栏中填写加速器地址 "),t("code",[e._v("https://registry.docker-cn.com")]),e._v("，之后点击 "),t("code",[e._v("Apply")]),e._v(" 保存后 Docker 就会重启并应用配置的镜像地址了。")]),e._v(" "),t("h2",{attrs:{id:"macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[e._v("#")]),e._v(" macOS")]),e._v(" "),t("p",[e._v("对于使用 macOS 的用户，在任务栏点击 Docker for mac 应用图标 -> Perferences... -> Daemon -> Registry mirrors。在列表中填写加速器地址 "),t("code",[e._v("https://registry.docker-cn.com")]),e._v("。修改完成之后，点击 "),t("code",[e._v("Apply & Restart")]),e._v(" 按钮，Docker 就会重启并应用配置的镜像地址了。")]),e._v(" "),t("h2",{attrs:{id:"检查加速器是否生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查加速器是否生效"}},[e._v("#")]),e._v(" 检查加速器是否生效")]),e._v(" "),t("p",[e._v("配置加速器之后，如果拉取镜像仍然十分缓慢，请手动检查加速器配置是否生效，在命令行执行 "),t("code",[e._v("docker info")]),e._v("，如果从结果中看到了如下内容，说明配置成功。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    Registry Mirrors:\n     https://registry.docker-cn.com/\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])])}),[],!1,null,null,null);r.default=a.exports}}]);