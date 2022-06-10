(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{723:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"对象存储minio入门介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象存储minio入门介绍"}},[s._v("#")]),s._v(" 对象存储MinIO入门介绍")]),s._v(" "),a("h2",{attrs:{id:"常见的对象存储方式对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的对象存储方式对比"}},[s._v("#")]),s._v(" 常见的对象存储方式对比")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("直接将图片保存到服务的硬盘")]),s._v(" "),a("ul",[a("li",[s._v("优点：开发便捷，成本低")]),s._v(" "),a("li",[s._v("缺点：扩容困难")])])]),s._v(" "),a("li",[a("p",[s._v("使用分布式文件系统进行存储")]),s._v(" "),a("ul",[a("li",[s._v("优点：容易实现扩容")]),s._v(" "),a("li",[s._v("缺点：开发复杂度稍大（尤其是开发复杂的功能）")])])]),s._v(" "),a("li",[a("p",[s._v("使用nfs做存储")]),s._v(" "),a("ul",[a("li",[s._v("优点：开发较为便捷")]),s._v(" "),a("li",[s._v("缺点：需要有一定的运维知识进行部署和维护")])])]),s._v(" "),a("li",[a("p",[s._v("使用第三方的存储服务")]),s._v(" "),a("ul",[a("li",[s._v("优点：开发简单，拥有强大功能，免维护")]),s._v(" "),a("li",[s._v("缺点：付费")])])])]),s._v(" "),a("h2",{attrs:{id:"为何不采取fastdfs进行文件存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为何不采取fastdfs进行文件存储"}},[s._v("#")]),s._v(" 为何不采取FastDFs进行文件存储")]),s._v(" "),a("p",[s._v("我们前面使用分布式文件系统FastDFS简直不要太爽，但是有几个问题不知道大家发现没有")]),s._v(" "),a("ul",[a("li",[s._v("第一个就是FastDFS没有一个完善的官方文档，各种第三方文档满天飞。")]),s._v(" "),a("li",[s._v("第二个就是创建容器比较麻烦，要创建存储服务与跟踪服务.")]),s._v(" "),a("li",[s._v("第三个就是安全性问题")])]),s._v(" "),a("h2",{attrs:{id:"对象存储minio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象存储minio"}},[s._v("#")]),s._v(" 对象存储MinIO")]),s._v(" "),a("p",[s._v("MinIO是世界上最快的对象存储服务器，在标准硬件上，读写速度分贝为183GB/s 和 171GB/s，对象存储可以作为主要存储层，用于Spark，Presto，TensorFlow，H20.ai 以及替代产品等各种工作负载用于Hadoop HDFS")]),s._v(" "),a("p",[s._v("MinIO是一种高性能的分布式对象存储系统，它是软件定义的，可在行业标准硬件上运行，并且在Apache 2.0许可下，百分百开放源代码。")]),s._v(" "),a("p",[s._v("文档地址：https://docs.min.io/cn/")]),s._v(" "),a("h2",{attrs:{id:"下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[s._v("#")]),s._v(" 下载")]),s._v(" "),a("p",[s._v("我们使用的是Docker的方式安装MinIO，首先拉取对应的镜像")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull minio/minio\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后我们需要创建两个目录，用于保存我们的文件和配置")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/minio/data\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/minio/config\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"启动容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[s._v("#")]),s._v(" 启动容器")]),s._v(" "),a("p",[s._v("然后我们启动我们的容器，后面有个目录，就是我们需要挂载的硬盘目录")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v(":9000 --name minio "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MINIO_ACCESS_KEY=mogu2018"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--privileged"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MINIO_SECRET_KEY=mogu2018"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /home/minio/data:/data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /home/minio/config:/root/.minio "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nminio/minio server /data\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("上面的配置中，包含两个重要的信息【以后登录时会用到，可以修改成自己的】")]),s._v(" "),a("ul",[a("li",[s._v("MINIO_ACCESS_KEY：公钥")]),s._v(" "),a("li",[s._v("MINIO_SECRET_KEY：密钥")])]),s._v(" "),a("p",[s._v("运行成功后，我们就能看到我们下面的提示信息")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20201015150408263.png",alt:"image-20201015150408263"}})]),s._v(" "),a("p",[s._v("如果需要后台运行，使用这条语句")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --privileged -d -it -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v(":9000 --name minio "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MINIO_ACCESS_KEY=mogu2018"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--privileged"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MINIO_SECRET_KEY=mogu2018"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /home/minio/data:/data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /home/minio/config:/root/.minio "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nminio/minio server /data\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问"}},[s._v("#")]),s._v(" 访问")]),s._v(" "),a("p",[s._v("我们只需要访问上面提到的ip地址，就能够进入到我们的页面了【部署云服务器，需要自行开启安全组！】")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("http://192.168.1.101:9000\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"/images/image-20201015150747476.png",alt:"image-20201015150747476"}})]),s._v(" "),a("p",[s._v("会有一个不错的登录页面，我们输入刚刚配置的账号和密码  mogu2018  mogu2018 即可进入")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20201015150824563.png",alt:"image-20201015150824563"}})]),s._v(" "),a("h2",{attrs:{id:"创建bucket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建bucket"}},[s._v("#")]),s._v(" 创建bucket")]),s._v(" "),a("p",[s._v("我们首先需要创建一个桶，可以当成是一个目录，点击我们的右下角 加号 按钮，选择 create bucket进行创建")]),s._v(" "),a("p",[s._v("我们创建一个叫 mogublog 的桶，创建完成后，在侧边栏就能够看到我们刚刚创建的了")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20201015151202753.png",alt:"image-20201015151202753"}})]),s._v(" "),a("h2",{attrs:{id:"上传文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传文件"}},[s._v("#")]),s._v(" 上传文件")]),s._v(" "),a("p",[s._v("然后我们选中我们的桶，在点击加号，选择 upload file进行文件上传")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20201015151340507.png",alt:"image-20201015151340507"}})]),s._v(" "),a("p",[s._v("上传成功后，即可看到我们刚刚上传的文件列表了~")]),s._v(" "),a("h2",{attrs:{id:"springboot整合minio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot整合minio"}},[s._v("#")]),s._v(" SpringBoot整合MinIO")]),s._v(" "),a("p",[s._v("参考文档：Java Client API文档")]),s._v(" "),a("h3",{attrs:{id:"修改权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改权限"}},[s._v("#")]),s._v(" 修改权限")]),s._v(" "),a("p",[s._v("如果要使用SDK，比如Java客户端来操作我们的minio的话，那么我们还需要修改一下我们的bucket权限")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20201015151639447.png",alt:"image-20201015151639447"}})]),s._v(" "),a("p",[s._v("首先点击我们的mogublog的右边区域，点击Edit policy，然后添加我们的权限为 可读可写，保存即可")]),s._v(" "),a("h3",{attrs:{id:"添加依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖"}},[s._v("#")]),s._v(" 添加依赖")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("io.minio"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("minio"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("7.0.2"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"添加application-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加application-yml"}},[s._v("#")]),s._v(" 添加application.yml")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9001")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" minio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("application\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("allow-bean-definition-overriding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("minio")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("endpoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//192.168.1.101"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("accessKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mogu2018\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("secretKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mogu2018\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bucketImageName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mogublog\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"添加配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加配置文件"}},[s._v("#")]),s._v(" 添加配置文件")]),s._v(" "),a("p",[s._v("然后我们需要编写配置文件，用于初始化配置 MinioClient装载到spring容器中")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("@Configuration\npublic class MinIoConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    @Value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${minio.endpoint}")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    private String endpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    @Value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${minio.accessKey}")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    private String accessKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    @Value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${minio.secretKey}")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    private String secretKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    @Bean\n    public MinioClient minioClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" throws Exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        // 使用MinIO服务的URL，端口，Access key和Secret key创建一个MinioClient对象\n        MinioClient minioClient "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" new MinioClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("endpoint, accessKey, secretKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" minioClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h3",{attrs:{id:"编写controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写controller"}},[s._v("#")]),s._v(" 编写Controller")]),s._v(" "),a("p",[s._v("然后在写一个前端控制器")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RestController")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MinIoController")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Autowired")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MinioClient")]),s._v(" minioClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@PostMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/upload"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("upload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestParam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"data"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MultipartFile")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" fileName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getOriginalFilename")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InputStream")]),s._v(" inputStram "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getInputStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        minioClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("putObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PutObjectArgs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bucket")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mogublog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fileName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                        inputStram"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("contentType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getContentType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"上传成功"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@PostMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/download"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("download")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestParam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fileName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" fileName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" minioClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("presignedGetObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mogublog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fileName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h3",{attrs:{id:"测试图片上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试图片上传"}},[s._v("#")]),s._v(" 测试图片上传")]),s._v(" "),a("p",[s._v("下面我们就需要进行测试了，我们运行我们的项目，然后使用postman进行上传测试")]),s._v(" "),a("p",[s._v("首先我们在postman中添加我们的上传接口，然后在修改请求头中添加Content-Type")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Content-Type  multipart/form-data\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"/images/image-20201018222200593.png",alt:"image-20201018222200593"}})]),s._v(" "),a("p",[s._v("然后在选择我们的图片上传")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20201018222251132.png",alt:"image-20201018222251132"}})]),s._v(" "),a("p",[s._v("最后在刷新MinIO，就能够看到我们刚刚上传的文件了")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/Q041@R@%7D5GDOIN_Y$BUTY%5DX.png",alt:"img"}})]),s._v(" "),a("p",[s._v("我们可以通过下面的地址直接访问我们的图片")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("http://192.168.1.101:9000/mogublog/1578926382309.jpg\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"蘑菇博客配置minio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#蘑菇博客配置minio"}},[s._v("#")]),s._v(" 蘑菇博客配置Minio")]),s._v(" "),a("p",[s._v("蘑菇博客已经集成了Minio对象存储服务，我们只需要在系统配置，找到我们的Minio对象存储")]),s._v(" "),a("p",[s._v("例如：我在上面已经部署了 http://101.132.122.175:8080 的Minio服务【按照你部署的ip和端口填写】")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20201024085505782.png",alt:"image-20201024085505782"}})]),s._v(" "),a("p",[s._v("这里有5个内容需要我们填写的")]),s._v(" "),a("ul",[a("li",[s._v("Minio访问域名：文件上传到Minio对象存储服务器后，通过哪个域名或者ip进行访问")]),s._v(" "),a("li",[s._v("Minio连接地址：Minio的访问地址，也就是上面提到的EndPoint")]),s._v(" "),a("li",[s._v("Minio公钥：创建Minio容器时的公钥")]),s._v(" "),a("li",[s._v("Minio私钥：创建Minio容器时的私钥")]),s._v(" "),a("li",[s._v("Minio上传空间：创建Minio时的bucket")])]),s._v(" "),a("p",[s._v("配置完成后，我们就需要访问我们的Minio服务，然后创建对应的 Minio上传空间【Bucket】，访问Minio地址")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("http://101.132.122.175:8080\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输入账号和密码，然后选择 Create Bucket")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20201024090123987.png",alt:"image-20201024090123987"}})]),s._v(" "),a("p",[s._v("还需要修改一下我们的bucket权限，允许读写权限")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20201015151639447.png",alt:"image-20201015151639447"}})]),s._v(" "),a("p",[s._v("最后在回到我们的系统配置，开启Minio上传功能，同时在开启Minio的图片显示")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20201024090404973.png",alt:"image-20201024090404973"}})]),s._v(" "),a("p",[s._v("我们可以上传图片进行测试，打开博客管理，添加博客后进行图片上传测试")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20201024090500799.png",alt:"image-20201024090500799"}})]),s._v(" "),a("p",[s._v("通过上图发现，能够成功的访问到我们的图片了~，我们再到 minio后台管理查看")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20201024090556372.png",alt:"image-20201024090556372"}})]),s._v(" "),a("p",[s._v("也能够看到我们刚刚上传的文件了~")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20201024090606824.png",alt:"image-20201024090606824"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);