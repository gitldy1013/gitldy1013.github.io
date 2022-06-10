(window.webpackJsonp=window.webpackJsonp||[]).push([[559],{1255:function(s,a,n){"use strict";n.r(a);var t=n(5),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"gitlab-创建第一个项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-创建第一个项目"}},[s._v("#")]),s._v(" GitLab 创建第一个项目")]),s._v(" "),n("h2",{attrs:{id:"gitlab-创建第一个项目-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-创建第一个项目-2"}},[s._v("#")]),s._v(" GitLab 创建第一个项目")]),s._v(" "),n("p",[s._v("点击 "),n("code",[s._v("+")]),s._v(" 号 --\x3e "),n("code",[s._v("新建项目")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/1511800438.png",alt:""}})]),s._v(" "),n("p",[s._v("输入项目名称及描述信息，设置可见等级为私有，这样别人就看不见你的项目")]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/1511800627.png",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"初始化项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目"}},[s._v("#")]),s._v(" 初始化项目")]),s._v(" "),n("p",[s._v("我们选择通过增加一个 README 的方式来初始化项目")]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/1511800836.png",alt:""}})]),s._v(" "),n("p",[s._v("直接提交修改即可")]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/1511800904.png",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"使用-ssh-的方式拉取和推送项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-ssh-的方式拉取和推送项目"}},[s._v("#")]),s._v(" 使用 SSH 的方式拉取和推送项目")]),s._v(" "),n("h3",{attrs:{id:"生成-ssh-key"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生成-ssh-key"}},[s._v("#")]),s._v(" 生成 SSH KEY")]),s._v(" "),n("p",[s._v("使用 ssh-keygen 工具生成，位置在 Git 安装目录下，我的是 "),n("code",[s._v("C:\\Program Files\\Git\\usr\\bin")])]),s._v(" "),n("p",[s._v("输入命令：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    ssh-keygen -t rsa -C "your_email@example.com"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("执行成功后的效果：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    Microsoft Windows [版本 10.0.14393]\n    (c) 2016 Microsoft Corporation。保留所有权利。\n    \n    C:\\Program Files\\Git\\usr\\bin>ssh-keygen -t rsa -C "136913633167@163.com"\n    Generating public/private rsa key pair.\n    Enter file in which to save the key (/c/Users/cmcc/.ssh/id_rsa):\n    Enter passphrase (empty for no passphrase):\n    Enter same passphrase again:\n    Your identification has been saved in /c/Users/cmcc/.ssh/id_rsa.\n    Your public key has been saved in /c/Users/cmcc/.ssh/id_rsa.pub.\n    The key fingerprint is:\n    SHA256:cVesJKa5VnQNihQOTotXUAIyphsqjb7Z9lqOji2704E 136913633167@163.com\n    The key\'s randomart image is:\n    +---[RSA 2048]----+\n    |  + ..=o=.  .+.  |\n    | o o + B .+.o.o  |\n    |o   . + +=o+..   |\n    |.=   .  oo...    |\n    |= o     So       |\n    |oE .    o        |\n    | .. .. .         |\n    | o*o+            |\n    | *B*oo           |\n    +----[SHA256]-----+\n    \n    C:\\Program Files\\Git\\usr\\bin>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("h3",{attrs:{id:"复制-ssh-key-信息到-gitlab"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复制-ssh-key-信息到-gitlab"}},[s._v("#")]),s._v(" 复制 SSH-KEY 信息到 GitLab")]),s._v(" "),n("p",[s._v("秘钥位置在："),n("code",[s._v("C:\\Users\\你的用户名\\.ssh")]),s._v(" 目录下，找到 "),n("code",[s._v("id_rsa.pub")]),s._v(" 并使用编辑器打开，如：")]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/1511801618.png",alt:""}})]),s._v(" "),n("p",[s._v("登录 GitLab，点击“用户头像”--\x3e“设置”--\x3e“SSH 密钥”")]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/1511801730.png",alt:""}})]),s._v(" "),n("p",[s._v("成功增加密钥后的效果")]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/1511801884.png",alt:""}})]),s._v(" "),n("h3",{attrs:{id:"使用-tortoisegit-克隆项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-tortoisegit-克隆项目"}},[s._v("#")]),s._v(" 使用 TortoiseGit 克隆项目")]),s._v(" "),n("ul",[n("li",[s._v("新建一个存放代码仓库的本地文件夹")]),s._v(" "),n("li",[s._v("在文件夹空白处按右键")]),s._v(" "),n("li",[s._v("选择“Git 克隆...”")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/1511802101.png",alt:""}})]),s._v(" "),n("ul",[n("li",[s._v("服务项目地址到 URL")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/1511802242.png",alt:""}})]),s._v(" "),n("ul",[n("li",[s._v("如果弹出连接信息请选择是")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/1511802354.png",alt:""}})]),s._v(" "),n("ul",[n("li",[s._v("成功克隆项目到本地")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/1511802402.png",alt:""}})]),s._v(" "),n("h3",{attrs:{id:"使用-tortoisegit-推送项目-提交代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-tortoisegit-推送项目-提交代码"}},[s._v("#")]),s._v(" 使用 TortoiseGit 推送项目（提交代码）")]),s._v(" "),n("ul",[n("li",[s._v("创建或修改文件（这里的文件为所有文件，包括：代码、图片等）")]),s._v(" "),n("li",[s._v("我们以创建 "),n("code",[s._v(".gitignore")]),s._v(" 过滤配置文件为例，该文件的主要作用为过滤不需要上传的文件，比如：IDE 生成的工程文件、编译后的 class 文件等")]),s._v(" "),n("li",[s._v("在工程目录下，新建 "),n("code",[s._v(".gitignore")]),s._v(" 文件，并填入如下配置：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    .gradle\n    *.sw?\n    .#*\n    *#\n    *~\n    /build\n    /code\n    .classpath\n    .project\n    .settings\n    .metadata\n    .factorypath\n    .recommenders\n    bin\n    build\n    target\n    .factorypath\n    .springBeans\n    interpolated*.xml\n    dependency-reduced-pom.xml\n    build.log\n    _site/\n    .*.md.html\n    manifest.yml\n    MANIFEST.MF\n    settings.xml\n    activemq-data\n    overridedb.*\n    *.iml\n    *.ipr\n    *.iws\n    .idea\n    .DS_Store\n    .factorypath\n    dump.rdb\n    transaction-logs\n    **/overlays/\n    **/logs/\n    **/temp/\n    **/classes/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br")])]),n("ul",[n("li",[s._v("右键呼出菜单，选择“提交 Master...”")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/1511802947.png",alt:""}})]),s._v(" "),n("ul",[n("li",[s._v("点击“全部”并填入“日志信息”")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/1511803046.png",alt:""}})]),s._v(" "),n("ul",[n("li",[s._v("点击“提交并推送”")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/1511803174.png",alt:""}})]),s._v(" "),n("ul",[n("li",[s._v("成功后的效果图")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/1511803209.png",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"查看-gitlab-确认提交成功"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看-gitlab-确认提交成功"}},[s._v("#")]),s._v(" 查看 GitLab 确认提交成功")]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/1511803280.png",alt:""}})])])}),[],!1,null,null,null);a.default=r.exports}}]);