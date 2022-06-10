(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{817:function(a,s,e){"use strict";e.r(s);var t=e(5),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"kubernetes核心技术helm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes核心技术helm"}},[a._v("#")]),a._v(" Kubernetes核心技术Helm")]),a._v(" "),e("p",[a._v("Helm就是一个包管理工具【类似于npm】")]),a._v(" "),e("p",[e("img",{attrs:{src:"/images/892532-20180224212352306-705544441.png",alt:"img"}})]),a._v(" "),e("h2",{attrs:{id:"为什么引入helm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么引入helm"}},[a._v("#")]),a._v(" 为什么引入Helm")]),a._v(" "),e("p",[a._v("首先在原来项目中都是基于yaml文件来进行部署发布的，而目前项目大部分微服务化或者模块化，会分成很多个组件来部署，每个组件可能对应一个deployment.yaml,一个service.yaml,一个Ingress.yaml还可能存在各种依赖关系，这样一个项目如果有5个组件，很可能就有15个不同的yaml文件，这些yaml分散存放，如果某天进行项目恢复的话，很难知道部署顺序，依赖关系等，而所有这些包括")]),a._v(" "),e("ul",[e("li",[a._v("基于yaml配置的集中存放")]),a._v(" "),e("li",[a._v("基于项目的打包")]),a._v(" "),e("li",[a._v("组件间的依赖")])]),a._v(" "),e("p",[a._v("但是这种方式部署，会有什么问题呢？")]),a._v(" "),e("ul",[e("li",[a._v("如果使用之前部署单一应用，少数服务的应用，比较合适")]),a._v(" "),e("li",[a._v("但如果部署微服务项目，可能有几十个服务，每个服务都有一套yaml文件，需要维护大量的yaml文件，版本管理特别不方便")])]),a._v(" "),e("p",[a._v("Helm的引入，就是为了解决这个问题")]),a._v(" "),e("ul",[e("li",[a._v("使用Helm可以把这些YAML文件作为整体管理")]),a._v(" "),e("li",[a._v("实现YAML文件高效复用")]),a._v(" "),e("li",[a._v("使用helm应用级别的版本管理")])]),a._v(" "),e("h2",{attrs:{id:"helm介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#helm介绍"}},[a._v("#")]),a._v(" Helm介绍")]),a._v(" "),e("p",[a._v("Helm是一个Kubernetes的包管理工具，就像Linux下的包管理器，如yum/apt等，可以很方便的将之前打包好的yaml文件部署到kubernetes上。")]),a._v(" "),e("p",[a._v("Helm有三个重要概念")]),a._v(" "),e("ul",[e("li",[a._v("helm：一个命令行客户端工具，主要用于Kubernetes应用chart的创建、打包、发布和管理")]),a._v(" "),e("li",[a._v("Chart：应用描述，一系列用于描述k8s资源相关文件的集合")]),a._v(" "),e("li",[a._v("Release：基于Chart的部署实体，一个chart被Helm运行后将会生成对应的release，将在K8S中创建出真实的运行资源对象。也就是应用级别的版本管理")]),a._v(" "),e("li",[a._v("Repository：用于发布和存储Chart的仓库")])]),a._v(" "),e("h2",{attrs:{id:"helm组件及架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#helm组件及架构"}},[a._v("#")]),a._v(" Helm组件及架构")]),a._v(" "),e("p",[a._v("Helm采用客户端/服务端架构，有如下组件组成")]),a._v(" "),e("ul",[e("li",[a._v("Helm CLI是Helm客户端，可以在本地执行")]),a._v(" "),e("li",[a._v("Tiller是服务器端组件，在Kubernetes集群上运行，并管理Kubernetes应用程序")]),a._v(" "),e("li",[a._v("Repository是Chart仓库，Helm客户端通过HTTP协议来访问仓库中Chart索引文件和压缩包")])]),a._v(" "),e("p",[e("img",{attrs:{src:"/images/image-20201119095458328.png",alt:"image-20201119095458328"}})]),a._v(" "),e("h2",{attrs:{id:"helm-v3变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#helm-v3变化"}},[a._v("#")]),a._v(" Helm v3变化")]),a._v(" "),e("p",[a._v("2019年11月13日，Helm团队发布了Helm v3的第一个稳定版本")]),a._v(" "),e("p",[a._v("该版本主要变化如下")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("架构变化")]),a._v(" "),e("ul",[e("li",[a._v("最明显的变化是Tiller的删除")]),a._v(" "),e("li",[a._v("V3版本删除Tiller")]),a._v(" "),e("li",[a._v("relesase可以在不同命名空间重用")])])])]),a._v(" "),e("p",[a._v("V3之前")]),a._v(" "),e("p",[e("img",{attrs:{src:"/images/image-20201118171523403.png",alt:"image-20201118171523403"}})]),a._v(" "),e("p",[a._v("V3版本")]),a._v(" "),e("p",[e("img",{attrs:{src:"/images/image-20201118171956054.png",alt:"image-20201118171956054"}})]),a._v(" "),e("h2",{attrs:{id:"helm配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#helm配置"}},[a._v("#")]),a._v(" helm配置")]),a._v(" "),e("p",[a._v("首先我们需要去 "),e("a",{attrs:{href:"https://helm.sh/docs/intro/quickstart/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网下载"),e("OutboundLink")],1)]),a._v(" "),e("ul",[e("li",[a._v("第一步，"),e("a",{attrs:{href:"https://github.com/helm/helm/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载helm"),e("OutboundLink")],1),a._v("安装压缩文件，上传到linux系统中")]),a._v(" "),e("li",[a._v("第二步，解压helm压缩文件，把解压后的helm目录复制到 usr/bin 目录中")]),a._v(" "),e("li",[a._v("使用命令：helm")])]),a._v(" "),e("p",[a._v("我们都知道yum需要配置yum源，那么helm就就要配置helm源")]),a._v(" "),e("h2",{attrs:{id:"helm仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#helm仓库"}},[a._v("#")]),a._v(" helm仓库")]),a._v(" "),e("p",[a._v("添加仓库")]),a._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("helm repo "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" 仓库名  仓库地址 \n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("例如")]),a._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置微软源")]),a._v("\nhelm repo "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" stable http://mirror.azure.cn/kubernetes/charts\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置阿里源")]),a._v("\nhelm repo "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" aliyun https://kubernetes.oss-cn-hangzhou.aliyuncs.com/charts\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置google源")]),a._v("\nhelm repo "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" google https://kubernetes-charts.storage.googleapis.com/\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更新")]),a._v("\nhelm repo update\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])]),e("p",[a._v("然后可以查看我们添加的仓库地址")]),a._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看全部")]),a._v("\nhelm repo list\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看某个")]),a._v("\nhelm search repo stable\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/image-20201118195732281.png",alt:"image-20201118195732281"}})]),a._v(" "),e("p",[a._v("或者可以删除我们添加的源")]),a._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("helm repo remove stable\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"helm基本命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#helm基本命令"}},[a._v("#")]),a._v(" helm基本命令")]),a._v(" "),e("ul",[e("li",[a._v("chart install")]),a._v(" "),e("li",[a._v("chart upgrade")]),a._v(" "),e("li",[a._v("chart rollback")])]),a._v(" "),e("h2",{attrs:{id:"使用helm快速部署应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用helm快速部署应用"}},[a._v("#")]),a._v(" 使用helm快速部署应用")]),a._v(" "),e("h3",{attrs:{id:"使用命令搜索应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用命令搜索应用"}},[a._v("#")]),a._v(" 使用命令搜索应用")]),a._v(" "),e("p",[a._v("首先我们使用命令，搜索我们需要安装的应用")]),a._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 搜索 weave仓库")]),a._v("\nhelm search repo weave\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/image-20201118200603643.png",alt:"image-20201118200603643"}})]),a._v(" "),e("h3",{attrs:{id:"根据搜索内容选择安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根据搜索内容选择安装"}},[a._v("#")]),a._v(" 根据搜索内容选择安装")]),a._v(" "),e("p",[a._v("搜索完成后，使用命令进行安装")]),a._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("helm "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" ui aliyun/weave-scope\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("可以通过下面命令，来下载yaml文件【如果】")]),a._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("kubectl apply -f weave-scope.yaml\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("安装完成后，通过下面命令即可查看")]),a._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("helm list\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/image-20201118203727585.png",alt:"image-20201118203727585"}})]),a._v(" "),e("p",[a._v("同时可以通过下面命令，查看更新具体的信息")]),a._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("helm status ui\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("但是我们通过查看 svc状态，发现没有对象暴露端口")]),a._v(" "),e("p",[e("img",{attrs:{src:"/images/image-20201118205031343.png",alt:"image-20201118205031343"}})]),a._v(" "),e("p",[a._v("所以我们需要修改service的yaml文件，添加NodePort")]),a._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("kubectl edit svc ui-weave-scope\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/image-20201118205129431.png",alt:"image-20201118205129431"}})]),a._v(" "),e("p",[a._v("这样就可以对外暴露端口了")]),a._v(" "),e("p",[e("img",{attrs:{src:"/images/image-20201118205147631.png",alt:"image-20201118205147631"}})]),a._v(" "),e("p",[a._v("然后我们通过 ip + 32185 即可访问")]),a._v(" "),e("h3",{attrs:{id:"如果自己创建chart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果自己创建chart"}},[a._v("#")]),a._v(" 如果自己创建Chart")]),a._v(" "),e("p",[a._v("使用命令，自己创建Chart")]),a._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("helm create mychart\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("创建完成后，我们就能看到在当前文件夹下，创建了一个 mychart目录")]),a._v(" "),e("p",[e("img",{attrs:{src:"/images/image-20201118210755621.png",alt:"image-20201118210755621"}})]),a._v(" "),e("h4",{attrs:{id:"目录格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录格式"}},[a._v("#")]),a._v(" 目录格式")]),a._v(" "),e("ul",[e("li",[a._v("templates：编写yaml文件存放到这个目录")]),a._v(" "),e("li",[a._v("values.yaml：存放的是全局的yaml文件")]),a._v(" "),e("li",[a._v("chart.yaml：当前chart属性配置信息")])]),a._v(" "),e("h3",{attrs:{id:"在templates文件夹创建两个文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在templates文件夹创建两个文件"}},[a._v("#")]),a._v(" 在templates文件夹创建两个文件")]),a._v(" "),e("p",[a._v("我们创建以下两个")]),a._v(" "),e("ul",[e("li",[a._v("deployment.yaml")]),a._v(" "),e("li",[a._v("service.yaml")])]),a._v(" "),e("p",[a._v("我们可以通过下面命令创建出yaml文件")]),a._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 导出deployment.yaml")]),a._v("\nkubectl create deployment web1 --image"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nginx --dry-run -o yaml "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" deployment.yaml\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 导出service.yaml 【可能需要创建 deployment，不然会报错】")]),a._v("\nkubectl expose deployment web1 --port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" --target-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" --type"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("NodePort --dry-run -o yaml "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" service.yaml\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h3",{attrs:{id:"安装mychart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装mychart"}},[a._v("#")]),a._v(" 安装mychart")]),a._v(" "),e("p",[a._v("执行命令创建")]),a._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("helm "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" web1 mychart\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/image-20201118213120916.png",alt:"image-20201118213120916"}})]),a._v(" "),e("h3",{attrs:{id:"应用升级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用升级"}},[a._v("#")]),a._v(" 应用升级")]),a._v(" "),e("p",[a._v("当我们修改了mychart中的东西后，就可以进行升级操作")]),a._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("helm upgrade web1 mychart\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"chart模板使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chart模板使用"}},[a._v("#")]),a._v(" chart模板使用")]),a._v(" "),e("p",[a._v("通过传递参数，动态渲染模板，yaml内容动态从传入参数生成")]),a._v(" "),e("p",[e("img",{attrs:{src:"/images/image-20201118213630083.png",alt:"image-20201118213630083"}})]),a._v(" "),e("p",[a._v("刚刚我们创建mychart的时候，看到有values.yaml文件，这个文件就是一些全局的变量，然后在templates中能取到变量的值，下面我们可以利用这个，来完成动态模板")]),a._v(" "),e("ul",[e("li",[a._v("在values.yaml定义变量和值")]),a._v(" "),e("li",[a._v("具体yaml文件，获取定义变量值")]),a._v(" "),e("li",[a._v("yaml文件中大题有几个地方不同\n"),e("ul",[e("li",[a._v("image")]),a._v(" "),e("li",[a._v("tag")]),a._v(" "),e("li",[a._v("label")]),a._v(" "),e("li",[a._v("port")]),a._v(" "),e("li",[a._v("replicas")])])])]),a._v(" "),e("h3",{attrs:{id:"定义变量和值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义变量和值"}},[a._v("#")]),a._v(" 定义变量和值")]),a._v(" "),e("p",[a._v("在values.yaml定义变量和值")]),a._v(" "),e("p",[e("img",{attrs:{src:"/images/image-20201118214050899.png",alt:"image-20201118214050899"}})]),a._v(" "),e("h3",{attrs:{id:"获取变量和值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取变量和值"}},[a._v("#")]),a._v(" 获取变量和值")]),a._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("    我们通过表达式形式 使用全局变量  "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(".Values.变量名称"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n    \n    例如： "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(".Release.Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/image-20201118214413203.png",alt:"image-20201118214413203"}})]),a._v(" "),e("h3",{attrs:{id:"安装应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装应用"}},[a._v("#")]),a._v(" 安装应用")]),a._v(" "),e("p",[a._v("在我们修改完上述的信息后，就可以尝试的创建应用了")]),a._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("helm "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --dry-run web2 mychart\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/image-20201118214727058.png",alt:"image-20201118214727058"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);