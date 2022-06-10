(window.webpackJsonp=window.webpackJsonp||[]).push([[935],{1630:function(s,n,a){"use strict";a.r(n);var e=a(5),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用熔断器仪表盘监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用熔断器仪表盘监控"}},[s._v("#")]),s._v(" 使用熔断器仪表盘监控")]),s._v(" "),a("h2",{attrs:{id:"sentinel-控制台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sentinel-控制台"}},[s._v("#")]),s._v(" Sentinel 控制台")]),s._v(" "),a("p",[s._v("Sentinel 控制台提供一个轻量级的控制台，它提供机器发现、单机资源实时监控、集群资源汇总，以及规则管理的功能。您只需要对应用进行简单的配置，就可以使用这些功能。")]),s._v(" "),a("p",[a("strong",[s._v("注意:")]),s._v(" 集群资源汇总仅支持 500 台以下的应用集群，有大概 1 - 2 秒的延时。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/20190108023342.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"下载并打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载并打包"}},[s._v("#")]),s._v(" 下载并打包")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    # 下载源码\n    git clone https://github.com/alibaba/Sentinel.git\n    \n    # 编译打包\n    mvn clean package\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("注：下载依赖时间较长，请耐心等待...")])]),s._v(" "),a("h2",{attrs:{id:"启动控制台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动控制台"}},[s._v("#")]),s._v(" 启动控制台")]),s._v(" "),a("p",[s._v("Sentinel 控制台是一个标准的 SpringBoot 应用，以 SpringBoot 的方式运行 jar 包即可。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    cd sentinel-dashboard\\target\n    java -Dserver.port=8080 -Dcsp.sentinel.dashboard.server=localhost:8080 -Dproject.name=sentinel-dashboard -jar sentinel-dashboard.jar\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如若 8080 端口冲突，可使用 "),a("code",[s._v("-Dserver.port=新端口")]),s._v(" 进行设置。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/20190108024018.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"访问服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问服务"}},[s._v("#")]),s._v(" 访问服务")]),s._v(" "),a("p",[s._v("打开浏览器访问：http://localhost:8080/#/dashboard/home")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/20190108024151.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"配置控制台信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置控制台信息"}},[s._v("#")]),s._v(" 配置控制台信息")]),s._v(" "),a("p",[a("code",[s._v("application.yml")]),s._v(" 配置文件中增加如下配置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    spring:\n      cloud:\n        sentinel:\n          transport:\n            port: 8719\n            dashboard: localhost:8080\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("这里的 "),a("code",[s._v("spring.cloud.sentinel.transport.port")]),s._v(" 端口配置会在应用对应的机器上启动一个 Http Server，该 Server 会与 Sentinel 控制台做交互。比如 Sentinel 控制台添加了 1 个限流规则，会把规则数据 push 给这个 Http Server 接收，Http Server 再将规则注册到 Sentinel 中。")]),s._v(" "),a("h2",{attrs:{id:"测试-sentinel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试-sentinel"}},[s._v("#")]),s._v(" 测试 Sentinel")]),s._v(" "),a("p",[s._v("使用之前的 Feign 客户端，"),a("code",[s._v("application.yml")]),s._v(" 完整配置如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    spring:\n      application:\n        name: nacos-consumer-feign\n      cloud:\n        nacos:\n          discovery:\n            server-addr: 127.0.0.1:8848\n        sentinel:\n          transport:\n            port: 8720\n            dashboard: localhost:8080\n    \n    server:\n      port: 9092\n    \n    feign:\n      sentinel:\n        enabled: true\n    \n    management:\n      endpoints:\n        web:\n          exposure:\n            include: "*"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[a("strong",[s._v("注：由于 8719 端口已被 sentinel-dashboard 占用，故这里修改端口号为 8720；不修改也能注册，会自动帮你在端口号上 + 1；")])]),s._v(" "),a("p",[s._v("打开浏览器访问：http://localhost:8080/#/dashboard/home")]),s._v(" "),a("p",[s._v("此时会多一个名为 "),a("code",[s._v("nacos-consumer-feign")]),s._v(" 的服务")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/20190108025044.png",alt:""}})])])}),[],!1,null,null,null);n.default=t.exports}}]);