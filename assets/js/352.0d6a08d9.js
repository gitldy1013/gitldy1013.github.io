(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{1049:function(s,a,e){"use strict";e.r(a);var t=e(5),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"持续交付实战用户管理服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持续交付实战用户管理服务"}},[s._v("#")]),s._v(" 持续交付实战用户管理服务")]),s._v(" "),e("h2",{attrs:{id:"写在前面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在前面"}},[s._v("#")]),s._v(" 写在前面")]),s._v(" "),e("p",[s._v("Jenkins 的持续交付流程与 GitLab Runner 的持续集成差不多，但 GitLab Runner 已经默认是配置好了 Git，所以 Jenkins 需要额外配置多一个 GitLab 的 SSH 登录。按照之前 GitLab Runner 的持续集成流程，Jenkins 的持续交付流程大致如下（其实原理还是挺简单的，但对于刚刚接触 Jenkins 者理解起来可能还是有一点难度的。）：")]),s._v(" "),e("ul",[e("li",[s._v("拉取代码")]),s._v(" "),e("li",[s._v("打包构建")]),s._v(" "),e("li",[s._v("上传镜像")]),s._v(" "),e("li",[s._v("运行容器")]),s._v(" "),e("li",[s._v("维护清理")])]),s._v(" "),e("h2",{attrs:{id:"配置-jenkins-的-gitlab-ssh-免密登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-jenkins-的-gitlab-ssh-免密登录"}},[s._v("#")]),s._v(" 配置 Jenkins 的 GitLab SSH 免密登录")]),s._v(" "),e("p",[s._v("步骤同 "),e("RouterLink",{attrs:{to:"/zh/gitlab/GitLab-创建第一个项目.html#使用-ssh-的方式拉取和推送项目"}},[s._v("使用 SSH 的方式拉取和推送项目")])],1),s._v(" "),e("ul",[e("li",[s._v("交互式进入 Jenkins 容器")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    docker exec -it jenkins /bin/bash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("生成 SSH KEY")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    ssh-keygen -t rsa -C "your_email@example.com"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("查看公钥")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    cat /var/jenkins_home/.ssh/id_rsa.pub\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("复制公钥到 GitLab")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029040829.png",alt:""}})]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("手动克隆一次项目")]),s._v("，该步骤的主要作用是为了生成和服务器的验证信息")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029040629.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("查看刚才生成的文件")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029040917.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"配置-publish-over-ssh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-publish-over-ssh"}},[s._v("#")]),s._v(" 配置 Publish over SSH")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("系统管理")]),s._v(" -> "),e("code",[s._v("系统设置")]),s._v(" -> "),e("code",[s._v("Publish over SSH")])])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029042448.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029042803.png",alt:""}})]),s._v(" "),e("p",[s._v("其中 "),e("code",[s._v("Remote Directory")]),s._v(" 是指 Jenkins 可以在目标服务器操作的目录")]),s._v(" "),e("ul",[e("li",[s._v("测试是否能够正常通信")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029042948.png",alt:""}})]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("别忘记保存")])])]),s._v(" "),e("h2",{attrs:{id:"持续交付依赖管理项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持续交付依赖管理项目"}},[s._v("#")]),s._v(" 持续交付依赖管理项目")]),s._v(" "),e("p",[s._v("由于我们所有项目的父工程都是依赖于 "),e("code",[s._v("myshop-dependencies")]),s._v("，所以我们的第一步是实现该项目的持续交付")]),s._v(" "),e("h3",{attrs:{id:"为项目创建标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为项目创建标签"}},[s._v("#")]),s._v(" 为项目创建标签")]),s._v(" "),e("p",[s._v("在 GitLab 中为项目创建标签")]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029033939.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029034014.png",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"创建-maven-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建-maven-project"}},[s._v("#")]),s._v(" 创建 Maven Project")]),s._v(" "),e("p",[s._v("在 Jenkins 中创建一个基于 Maven 的任务")]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029031827.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029032145.png",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"配置-maven-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-maven-project"}},[s._v("#")]),s._v(" 配置 Maven Project")]),s._v(" "),e("h4",{attrs:{id:"配置第一次构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置第一次构建"}},[s._v("#")]),s._v(" 配置第一次构建")]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029053458.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("构建项目")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029044458.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("查看构建日志")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029045327.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029053826.png",alt:""}})]),s._v(" "),e("h4",{attrs:{id:"配置正式构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置正式构建"}},[s._v("#")]),s._v(" 配置正式构建")]),s._v(" "),e("ul",[e("li",[s._v("增加参数化构建过程")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029051942.png",alt:""}})]),s._v(" "),e("p",[s._v("这里使用了 Groovy 脚本来查询最近的 tags 版本，代码如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    def ver_keys = [ 'bash', '-c', 'cd /var/jenkins_home/workspace/myshop-dependencies;git pull>/dev/null; git remote prune origin >/dev/null; git tag -l|sort -r |head -10 ' ]\n    ver_keys.execute().text.tokenize('\\n')\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("关闭源码管理")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029052233.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("增加构建步骤")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029052318.png",alt:""}})]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    echo $RELEASE_VERSION\n    cd /var/jenkins_home/workspace/myshop-dependencies\n    git checkout $RELEASE_VERSION\n    git pull origin $RELEASE_VERSION\n    mvn clean package\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ul",[e("li",[s._v("使用参数化构建项目")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029052413.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029052453.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("查看构建日志")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029052538.png",alt:""}})]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029054240.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"持续交付用户服务提供者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持续交付用户服务提供者"}},[s._v("#")]),s._v(" 持续交付用户服务提供者")]),s._v(" "),e("p",[s._v("在 Jenkins 中创建一个基于 Maven 的任务")]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181030063447.png",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"配置-maven-project-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-maven-project-2"}},[s._v("#")]),s._v(" 配置 Maven Project")]),s._v(" "),e("h4",{attrs:{id:"配置第一次构建-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置第一次构建-2"}},[s._v("#")]),s._v(" 配置第一次构建")]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181030063703.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("构建项目")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181030063834.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("查看构建日志")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181030064122.png",alt:""}})]),s._v(" "),e("h4",{attrs:{id:"配置正式构建-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置正式构建-2"}},[s._v("#")]),s._v(" 配置正式构建")]),s._v(" "),e("ul",[e("li",[s._v("增加参数化构建过程")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181030064556.png",alt:""}})]),s._v(" "),e("p",[s._v("这里使用了 Groovy 脚本来查询最近的 tags 版本，代码如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    def ver_keys = [ 'bash', '-c', 'cd /var/jenkins_home/workspace/myshop-service-user-provider;git pull>/dev/null; git remote prune origin >/dev/null; git tag -l|sort -r |head -10 ' ]\n    ver_keys.execute().text.tokenize('\\n')\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("关闭源码管理")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181029052233.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("增加构建步骤")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181030071141.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("Execute Shell（本地执行 Shell 脚本）")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    echo $RELEASE_VERSION\n    cd /var/jenkins_home/workspace/myshop-service-user-provider\n    git checkout $RELEASE_VERSION\n    git pull origin $RELEASE_VERSION\n    mvn clean package\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ul",[e("li",[e("p",[s._v("Send files or execute commands over SSH（发送文件或执行远程命令）")]),s._v(" "),e("ul",[e("li",[s._v("Source files：需要传输到远程目标服务器的文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    `**/*.jar,docker/**`\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("Remove prefix：删除前缀。比如传输 "),e("code",[s._v("**/*.jar")]),s._v("，我们打包的 "),e("code",[s._v(".jar")]),s._v(" 文件是在 "),e("code",[s._v("target")]),s._v(" 目录下的，传输时会一并创建 "),e("code",[s._v("target")]),s._v(" 目录，如果不希望创建 "),e("code",[s._v("target")]),s._v(" 目录，则可以使用该参数屏蔽掉这些前缀文件夹。")]),s._v(" "),e("li",[s._v("Remote directory：在远程目标服务器创建操作目录")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    myshop-service-user-provider\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("Exec command：在远程目标服务器执行控制台命令")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    cd /usr/local/jenkins/myshop-service-user-provider\n    cp target/myshop-service-user-provider-1.0.0-SNAPSHOT.jar docker\n    cd docker\n    docker build -t 192.168.10.133:5000/myshop-service-user-provider:v1.0.0 .\n    docker push 192.168.10.133:5000/myshop-service-user-provider:v1.0.0\n    docker-compose down\n    docker-compose up -d\n    docker image prune -f\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("使用参数化构建项目")])])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181030073005.png",alt:""}})]),s._v(" "),e("ul",[e("li",[s._v("查看构建日志")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/20181030073032.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"持续交付用户服务消费者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持续交付用户服务消费者"}},[s._v("#")]),s._v(" 持续交付用户服务消费者")]),s._v(" "),e("p",[s._v("操作步骤同上")])])}),[],!1,null,null,null);a.default=r.exports}}]);