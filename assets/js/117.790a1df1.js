(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{814:function(s,a,e){"use strict";e.r(a);var t=e(5),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"kubernetes配置管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes配置管理"}},[s._v("#")]),s._v(" Kubernetes配置管理")]),s._v(" "),e("h2",{attrs:{id:"secret"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#secret"}},[s._v("#")]),s._v(" Secret")]),s._v(" "),e("p",[s._v("Secret的主要作用就是加密数据，然后存在etcd里面，让Pod容器以挂载Volume方式进行访问")]),s._v(" "),e("p",[s._v("场景：用户名 和 密码进行加密")]),s._v(" "),e("p",[s._v("一般场景的是对某个字符串进行base64编码 进行加密")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -n "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" base64\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/image-20201117212037668.png",alt:"image-20201117212037668"}})]),s._v(" "),e("h3",{attrs:{id:"变量形式挂载到pod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量形式挂载到pod"}},[s._v("#")]),s._v(" 变量形式挂载到Pod")]),s._v(" "),e("ul",[e("li",[s._v("创建secret加密数据的yaml文件    secret.yaml")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/image-20201117212124476.png",alt:"image-20201117212124476"}})]),s._v(" "),e("p",[s._v("然后使用下面命令创建一个pod")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl create -f secret.yaml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("通过get命令查看")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl get pods\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/image-20201118084010980.png",alt:"image-20201118084010980"}})]),s._v(" "),e("p",[s._v("然后我们通过下面的命令，进入到我们的容器内部")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mypod "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后我们就可以输出我们的值，这就是以变量的形式挂载到我们的容器中")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出用户")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SECRET_USERNAME")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出密码")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SECRET_PASSWORD")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/image-20201118084137942.png",alt:"image-20201118084137942"}})]),s._v(" "),e("p",[s._v("最后如果我们要删除这个Pod，就可以使用这个命令")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl delete -f secret-val.yaml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"数据卷形式挂载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据卷形式挂载"}},[s._v("#")]),s._v(" 数据卷形式挂载")]),s._v(" "),e("p",[s._v("首先我们创建一个 secret-val.yaml 文件")]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/image-20201118084321590.png",alt:"image-20201118084321590"}})]),s._v(" "),e("p",[s._v("然后创建我们的 Pod")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据配置创建容器")]),s._v("\nkubectl apply -f secret-val.yaml\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入容器")]),s._v("\nkubectl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mypod "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /etc/foo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/image-20201118084707478.png",alt:"image-20201118084707478"}})]),s._v(" "),e("h2",{attrs:{id:"configmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configmap"}},[s._v("#")]),s._v(" ConfigMap")]),s._v(" "),e("p",[s._v("ConfigMap作用是存储不加密的数据到etcd中，让Pod以变量或数据卷Volume挂载到容器中")]),s._v(" "),e("p",[s._v("应用场景：配置文件")]),s._v(" "),e("h3",{attrs:{id:"创建配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建配置文件"}},[s._v("#")]),s._v(" 创建配置文件")]),s._v(" "),e("p",[s._v("首先我们需要创建一个配置文件 "),e("code",[s._v("redis.properties")])]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("redis.port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\nredis.port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\nredis.password"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"创建configmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建configmap"}},[s._v("#")]),s._v(" 创建ConfigMap")]),s._v(" "),e("p",[s._v("我们使用命令创建configmap")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl create configmap redis-config --from-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redis.properties\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后查看详细信息")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl describe cm redis-config\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/image-20201118085503534.png",alt:"image-20201118085503534"}})]),s._v(" "),e("h3",{attrs:{id:"volume数据卷形式挂载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volume数据卷形式挂载"}},[s._v("#")]),s._v(" Volume数据卷形式挂载")]),s._v(" "),e("p",[s._v("首先我们需要创建一个 "),e("code",[s._v("cm.yaml")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/image-20201118085847424.png",alt:"image-20201118085847424"}})]),s._v(" "),e("p",[s._v("然后使用该yaml创建我们的pod")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建")]),s._v("\nkubectl apply -f cm.yaml\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看")]),s._v("\nkubectl get pods\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/image-20201118090634869.png",alt:"image-20201118090634869"}})]),s._v(" "),e("p",[s._v("最后我们通过命令就可以查看结果输出了")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl logs mypod\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/image-20201118090712780.png",alt:"image-20201118090712780"}})]),s._v(" "),e("h3",{attrs:{id:"以变量的形式挂载pod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#以变量的形式挂载pod"}},[s._v("#")]),s._v(" 以变量的形式挂载Pod")]),s._v(" "),e("p",[s._v("首先我们也有一个 myconfig.yaml文件，声明变量信息，然后以configmap创建")]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/image-20201118090911260.png",alt:"image-20201118090911260"}})]),s._v(" "),e("p",[s._v("然后我们就可以创建我们的配置文件")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建pod")]),s._v("\nkubectl apply -f myconfig.yaml\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取")]),s._v("\nkubectl get cm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/image-20201118091042287.png",alt:"image-20201118091042287"}})]),s._v(" "),e("p",[s._v("然后我们创建完该pod后，我们就需要在创建一个  config-var.yaml 来使用我们的配置信息")]),s._v(" "),e("p",[e("img",{attrs:{src:"/images/image-20201118091249520.png",alt:"image-20201118091249520"}})]),s._v(" "),e("p",[s._v("最后我们查看输出")]),s._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl logs mypod\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/images/image-20201118091448252.png",alt:"image-20201118091448252"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);