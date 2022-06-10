(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{837:function(s,a,n){"use strict";n.r(a);var t=n(5),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"asciinema一种基于文本的终端录制方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#asciinema一种基于文本的终端录制方法"}},[s._v("#")]),s._v(" Asciinema一种基于文本的终端录制方法")]),s._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("在我之前写博客教程的时候，一般都是通过文档的形式来进行记录的具体的操作过程。但是很多时候文档并不能很好的记录我们每一步，所以为了更加直观的展示，一般我们会使用视频来进行记录。但是如果使用视频记录的话，需要小伙伴暂停视频，然后跟着视频敲代码，最后在自己环境下运行，很显然这个方法也不是特别友好【竟然要小伙伴手动敲代码，而不是copy】，这个时候 Asciinema 的出现，就是为了解决这个问题，它是基于文本的终端录制方法，能够拥有像看视频一样的体验，同时支持终端内容的复制。")]),s._v(" "),n("h2",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),n("p",[s._v("Asciinema官网："),n("a",{attrs:{href:"https://asciinema.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("点我传送"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("来自官网的话：以正确的方式记录并分享您的终端会话，忘记屏幕录音应用程序和模糊的视频吧。享受一种轻量级的、纯粹基于文本的终端录制方法。")]),s._v(" "),n("p",[s._v('Asciinema是Linux系统下一款"高级"终端会话记录和回放的神器, 它是一个在终端下非常棒的录制分享软件，基于文本的录屏工具，对终端输入输出进行捕捉， 然后以文本的形式来记录和回放！'),n("strong",[s._v("这使其拥有非常炫酷的特性")]),s._v('：在播放过程中随时可以暂停， 然后对"播放器"中的文本进行复制或者其它操作！并且它支持各个操作系统（除了windows之外）')]),s._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("p",[s._v("目前Asciinema支持："),n("code",[s._v("linux")]),s._v("、 "),n("code",[s._v("macOS")]),s._v(" 和 "),n("code",[s._v("*BSD")])]),s._v(" "),n("p",[s._v("下面我将以Linux为例，讲解Asciinema的具体使用，下面将介绍多个安装的方式")]),s._v(" "),n("h3",{attrs:{id:"ubuntu安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu安装"}},[s._v("#")]),s._v(" ubuntu安装")]),s._v(" "),n("p",[s._v("ubuntu系统使用的是apt作为包管理工具")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-add-repository ppa:zanchey/asciinema\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" asciinema\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"centos安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#centos安装"}},[s._v("#")]),s._v(" CentOS安装")]),s._v(" "),n("p",[s._v("CentOS系统使用的是yum作为包管理工具，下载过程如下")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" asciinema\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"docker安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[s._v("#")]),s._v(" Docker安装")]),s._v(" "),n("p",[s._v("同时也支持使用Docker安装")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --rm -ti -v "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('/.config/asciinema"')]),s._v(":/root/.config/asciinema asciinema/asciinema\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"快速开始"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[s._v("#")]),s._v(" 快速开始")]),s._v(" "),n("p",[s._v("下面我们就可以开始进行脚本的录制了")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将终端记录到本地文件")]),s._v("\nasciinema rec demo.cast\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始一系列的录制操作")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出")]),s._v("\neixt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 播放录制的终端命令")]),s._v("\nasciinema play demo.cast\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"上传到asciinema官网"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#上传到asciinema官网"}},[s._v("#")]),s._v(" 上传到Asciinema官网")]),s._v(" "),n("p",[s._v("但是只是在终端上查看，还是不能分享给其它的小伙伴们，所以我们需要将我们录制的内容上传Asciinema官网，首先需要注册账号："),n("a",{attrs:{href:"https://asciinema.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("点我传送"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/image-20201215153055937.png",alt:"image-20201215153055937"}})]),s._v(" "),n("p",[s._v("我第一打开这个页面，没有找到注册的地方？？，根据边上的英语提示，告诉我们第一次过来的话，只需要输入你的邮箱，然后系统就会向该邮箱输入一串验证信息，然后点击该链接即可完成注册~")]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/image-20201215153221416.png",alt:"image-20201215153221416"}})]),s._v(" "),n("p",[s._v("以后登录的话，操作也是一样的，输入邮箱号码，然后到邮箱的邮件点击登录即可")]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/image-20201215153315794.png",alt:"image-20201215153315794"}})]),s._v(" "),n("p",[s._v("我们需要在我们终端输入下面的命令，给我们账号进行绑定")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("asciinema auth\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("然后会得到一个地址")]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/image-20201215153458086.png",alt:"image-20201215153458086"}})]),s._v(" "),n("p",[s._v("我们把地址复制到浏览器上打开即可")]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/image-20201215153018756.png",alt:"image-20201215153018756"}})]),s._v(" "),n("p",[s._v("绑定账号完成后，下面我们可以按照操作开始录制终端命令")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始录制")]),s._v("\nasciinema rec\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出录制【按下回车上传】")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("img",{attrs:{src:"/images/image-20201215153727952.png",alt:"image-20201215153727952"}})]),s._v(" "),n("p",[s._v("下面访问这个地址，即可看到我们的内容了")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("https://asciinema.org/a/7IvnEDLigSVLr0So5lGyNtT7V\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://asciinema.org/a/KwyQLaLd99P6SjdytFpisci31",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"/images/KwyQLaLd99P6SjdytFpisci31.svg",alt:"asciicast"}}),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"asciinema常见命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#asciinema常见命令"}},[s._v("#")]),s._v(" Asciinema常见命令")]),s._v(" "),n("p",[s._v("下面看看Asciinema的常见命令")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录【得到url，到浏览器打开即可，需要提前在浏览器登录Asciinema】")]),s._v("\nasciinema auth\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 记录终端并将其上传到asciinema.org【】")]),s._v("\nasciinema rec  \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将终端记录到本地文件")]),s._v("\nasciinema rec mogu.cast\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将终端记录到本地文件，将空闲时间限制到最大2秒")]),s._v("\nasciinema play -i "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" mogu.cast\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以两倍速播放")]),s._v("\nasciinema play -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" mogu.cast\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从本地文件重放终端记录")]),s._v("\nasciinema play demo.cast\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印记录的会话的全部输出")]),s._v("\nasciinema "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" demo.cast\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将本地文件上传")]),s._v("\nasciinema upload mogu.cast\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h2",{attrs:{id:"修改配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[s._v("#")]),s._v(" 修改配置")]),s._v(" "),n("p",[s._v("同时我们在录制脚本的时候，也可以修改asciinema的配置")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.config/asciinema/config\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("然后可以添加如下 内容，下是每个部分的所有可用选项列表")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" API server URL, default: https://asciinema.org\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" If you run your own instance of asciinema-server "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" its address here\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" It can also be overriden by setting ASCIINEMA_API_URL environment variable\nurl "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" https://asciinema.example.com\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("record"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Command to record, default: "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SHELL")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /bin/bash -l\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Enable stdin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("keyboard"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" recording, default: no\nstdin "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" List of environment variables to capture, default: "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SHELL")]),s._v(","),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("TERM")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SHELL")]),s._v(","),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("TERM")]),s._v(","),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Limit recorded terminal inactivity to max n seconds, default: off\nidle_time_limit "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Answer "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yes"')]),s._v(" to all interactive prompts, default: no\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Be quiet, suppress all notices/warnings, default: no\nquiet "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("play"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Playback speed "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("can be fractional"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", default: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nspeed "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Limit replayed terminal inactivity to max n seconds, default: off\nidle_time_limit "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br")])]),n("p",[s._v("例如我需要限制播放的速度 和 空闲的时间")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("record"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nidle_time_limit "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("play"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nspeed "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("配置完成后，我们就可以来进行录制了~")]),s._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/kevingrace/p/10188283.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux终端回话记录和回放工具 - asciinema使用总结"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://asciinema.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Asciinema官网"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);