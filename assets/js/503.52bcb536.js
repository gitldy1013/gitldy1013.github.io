(window.webpackJsonp=window.webpackJsonp||[]).push([[503],{1198:function(s,a,e){"use strict";e.r(a);var n=e(5),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"监听主机目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#监听主机目录"}},[s._v("#")]),s._v(" 监听主机目录")]),s._v(" "),e("h2",{attrs:{id:"v-还是-mount-参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-还是-mount-参数"}},[s._v("#")]),s._v(" -v 还是 -–mount 参数")]),s._v(" "),e("p",[s._v("Docker 新用户应该选择 "),e("code",[s._v("--mount")]),s._v(" 参数，经验丰富的 Docker 使用者对 "),e("code",[s._v("-v")]),s._v(" 或者 "),e("code",[s._v("--volume")]),s._v(" 已经很熟悉了，但是推荐使用 "),e("code",[s._v("--mount")]),s._v(" 参数。")]),s._v(" "),e("h3",{attrs:{id:"挂载一个主机目录作为数据卷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#挂载一个主机目录作为数据卷"}},[s._v("#")]),s._v(" 挂载一个主机目录作为数据卷")]),s._v(" "),e("p",[s._v("使用 "),e("code",[s._v("--mount")]),s._v(" 标记可以指定挂载一个本地主机的目录到容器中去。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    $ docker run -d -P \\\n        --name web \\\n        # -v /src/webapp:/opt/webapp \\\n        --mount type=bind,source=/src/webapp,target=/opt/webapp \\\n        training/webapp \\\n        python app.py\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("上面的命令加载主机的 "),e("code",[s._v("/src/webapp")]),s._v(" 目录到容器的 "),e("code",[s._v("/opt/webapp")]),s._v("目录。这个功能在进行测试的时候十分方便，比如用户可以放置一些程序到本地目录中，来查看容器是否正常工作。本地目录的路径必须是绝对路径，以前使用 "),e("code",[s._v("-v")]),s._v(" 参数时如果本地目录不存在 Docker 会自动为你创建一个文件夹，现在使用 "),e("code",[s._v("--mount")]),s._v(" 参数时如果本地目录不存在，Docker 会报错。")]),s._v(" "),e("p",[s._v("Docker 挂载主机目录的默认权限是 "),e("code",[s._v("读写")]),s._v("，用户也可以通过增加 "),e("code",[s._v("readonly")]),s._v(" 指定为 "),e("code",[s._v("只读")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    $ docker run -d -P \\\n        --name web \\\n        # -v /src/webapp:/opt/webapp:ro \\\n        --mount type=bind,source=/src/webapp,target=/opt/webapp,readonly \\\n        training/webapp \\\n        python app.py\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("加了 "),e("code",[s._v("readonly")]),s._v(" 之后，就挂载为 "),e("code",[s._v("只读")]),s._v(" 了。如果你在容器内 "),e("code",[s._v("/opt/webapp")]),s._v(" 目录新建文件，会显示如下错误")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    /opt/webapp # touch new.txt\n    touch: new.txt: Read-only file system\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"查看数据卷的具体信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看数据卷的具体信息"}},[s._v("#")]),s._v(" 查看数据卷的具体信息")]),s._v(" "),e("p",[s._v("在主机里使用以下命令可以查看 "),e("code",[s._v("web")]),s._v(" 容器的信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    $ docker inspect web\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("code",[s._v("挂载主机目录")]),s._v(' 的配置信息在 "Mounts" Key 下面')]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    "Mounts": [\n        {\n            "Type": "bind",\n            "Source": "/src/webapp",\n            "Destination": "/opt/webapp",\n            "Mode": "",\n            "RW": true,\n            "Propagation": "rprivate"\n        }\n    ],\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h3",{attrs:{id:"挂载一个本地主机文件作为数据卷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#挂载一个本地主机文件作为数据卷"}},[s._v("#")]),s._v(" 挂载一个本地主机文件作为数据卷")]),s._v(" "),e("p",[e("code",[s._v("--mount")]),s._v(" 标记也可以从主机挂载单个文件到容器中")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    $ docker run --rm -it \\\n       # -v $HOME/.bash_history:/root/.bash_history \\\n       --mount type=bind,source=$HOME/.bash_history,target=/root/.bash_history \\\n       ubuntu:17.10 \\\n       bash\n    \n    root@2affd44b4667:/# history\n    1  ls\n    2  diskutil list   \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("这样就可以记录在容器输入过的命令了。")])])}),[],!1,null,null,null);a.default=t.exports}}]);