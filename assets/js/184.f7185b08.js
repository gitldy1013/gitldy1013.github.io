(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{879:function(a,e,t){"use strict";t.r(e);var s=t(5),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"服务网关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务网关"}},[a._v("#")]),a._v(" 服务网关")]),a._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("zuul目前已经出现了分歧，zuul  升级到 Zuul2的时候出现了内部分歧，并且导致Zuul的核心人员的离职，导致Zuul2一直跳票，等了两年，目前造成的局面是Zuul已经没人维护，Zuul2一直在开发中")]),a._v(" "),t("p",[a._v("目前主流的服务网关采用的是Spring Cloud 社区推出了 Gateway")]),a._v(" "),t("h2",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),t("h3",{attrs:{id:"zuul"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zuul"}},[a._v("#")]),a._v(" Zuul")]),a._v(" "),t("p",[a._v("官网：https://github.com/Netflix/zuul/wiki")]),a._v(" "),t("blockquote",[t("p",[a._v("Zuul是所有来自设备和web站点到Netflix流媒体应用程序后端的请求的前门。作为一个边缘服务应用程序，Zuul的构建是为了支持动态路由、监视、弹性和安全性。它还可以根据需要将请求路由到多个Amazon自动伸缩组。")])]),a._v(" "),t("h3",{attrs:{id:"gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gateway"}},[a._v("#")]),a._v(" Gateway")]),a._v(" "),t("p",[a._v("Cloud全家桶有个很重要的组件就是网关，在1.X版本中都是采用Zuul网关，但在2.X版本中，zuul的升级一直跳票，SpringCloud最后自己研发了一个网关替代Zuul，那就是SpringCloudGateway，一句话Gateway是原来Zuul 1.X 版本的替代品")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200409142909500.png",alt:"image-20200409142909500"}})]),a._v(" "),t("p",[a._v("Gateway是在Spring生态系统之上构建的API网关服务，基于Spring 5，Spring Boot 2 和 Project Reactor等技术。Gateway旨在提供一种简单而且有效的方式来对API进行路由，以及提供一些强大的过滤器功能，例如：熔断，限流，重试等。")]),a._v(" "),t("p",[a._v("Spring Cloud Gateway 是Spring Cloud的一个全新项目，作为Spring Cloud生态系统中的网关，目标是替代Zuul，在Spring Cloud 2.0以上版本中，没有对新版本的Zuul 2.0以上最新高性能版本进行集成，仍然还是使用的Zuul 1.X非Reactor模式的老版本，而为了提高网关的性能，Spring Cloud Gateway是基于WebFlux框架实现的，而WebFlux框架底层则使用了高性能的Reactor模式通信框架Netty。")]),a._v(" "),t("p",[a._v("Spring Cloud Gateway的目标提供统一的路由方式，且基于Filter链的方式提供了网关基本的功能，例如：安全，监控、指标 和 限流。")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200409143630282.png",alt:"image-20200409143630282"}})]),a._v(" "),t("h3",{attrs:{id:"能做啥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#能做啥"}},[a._v("#")]),a._v(" 能做啥")]),a._v(" "),t("ul",[t("li",[a._v("反向代理")]),a._v(" "),t("li",[a._v("鉴权")]),a._v(" "),t("li",[a._v("流量控制")]),a._v(" "),t("li",[a._v("熔断")]),a._v(" "),t("li",[a._v("日志监控")])]),a._v(" "),t("h3",{attrs:{id:"使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[a._v("#")]),a._v(" 使用场景")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200409143804936.png",alt:"image-20200409143804936"}})]),a._v(" "),t("p",[a._v("网关可以想象成是所有服务的入口")]),a._v(" "),t("h3",{attrs:{id:"为什么选用gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么选用gateway"}},[a._v("#")]),a._v(" 为什么选用Gateway")]),a._v(" "),t("p",[a._v("目前已经有了Zuul了，为什么还要开发出Gateway呢？")]),a._v(" "),t("p",[a._v("一方面是因为Zuul 1.0已经进入了维护阶段，而且Gateway是Spring Cloud团队研发的，属于亲儿子，值得信赖，并且很多功能Zuul都没有用起来，同时Gateway也非常简单便捷")]),a._v(" "),t("p",[a._v("Gateway是基于异步非阻塞模型上进行开发的，性能方面不需要担心。虽然Netflix早就发布了Zuul 2.X，但是Spring Cloud没有整合计划，因为NetFlix相关组件都进入维护期，随意综合考虑Gateway是很理想的网关选择。")]),a._v(" "),t("h3",{attrs:{id:"gateway特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gateway特性"}},[a._v("#")]),a._v(" Gateway特性")]),a._v(" "),t("p",[a._v("基于Spring Framework 5，Project Reactor 和Spring boot 2.0 进行构建")]),a._v(" "),t("ul",[t("li",[a._v("动态路由，能匹配任何请求属性")]),a._v(" "),t("li",[a._v("可以对路由指定Predicate（断言） 和 Filter（过滤器）")]),a._v(" "),t("li",[a._v("集成Hystrix的断路器功能")]),a._v(" "),t("li",[a._v("集成Spring Cloud服务发现功能")]),a._v(" "),t("li",[a._v("易于编写Predicate 和 Filter")]),a._v(" "),t("li",[a._v("请求限流功能")]),a._v(" "),t("li",[a._v("支持路径重写")])]),a._v(" "),t("h3",{attrs:{id:"spring-cloud-gateway-和-zuul的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-gateway-和-zuul的区别"}},[a._v("#")]),a._v(" Spring Cloud Gateway  和 Zuul的区别")]),a._v(" "),t("p",[a._v("在Spring Cloud Gateway Finchley正式版发布之前，Spring Cloud推荐网关是NetFlix提供的Zuul")]),a._v(" "),t("ul",[t("li",[a._v("Zuul 1.X 是一个基于阻塞IO的API Gateway")]),a._v(" "),t("li",[a._v("Zuul 1.x 基于Servlet 2.5使用阻塞架构，它不支持任何场连接，Zuul的设计模式和Nginx比较像，每次IO操作都是从工作线程中选择一个执行，请求线程被阻塞到工作线程完成，但是差别是Nginx用C++实现，Zuul用Java实现，而JVM本身会有第一次加载较慢的情况，使得Zuul的性能较差。")]),a._v(" "),t("li",[a._v("Zuul 2.X理念更先进，想基于Netty非阻塞和支持长连接，但Spring Cloud目前还没有整合。Zuul 2.X的性能相比于1.X有较大提升，在性能方面，根据官方提供的基准测试，Spring Cloud Gateway的RPS（每秒请求数）是Zuul的1.6倍。")]),a._v(" "),t("li",[a._v("Spring Cloud Gateway建立在Spring 5，Spring Boot 2.X之上，使用非阻塞API")]),a._v(" "),t("li",[a._v("Spring Cloud Gateway还支持WebSocket，并且与Spring紧密集成拥有更好的开发体验。")])]),a._v(" "),t("p",[a._v("Spring Cloud 中所集成的Zuul版本，采用的是Tomcat容器，使用的还是传统的Servlet IO处理模型")]),a._v(" "),t("p",[a._v("Servlet的生命周期中，Servlet由Servlet Container进行生命周期管理。")]),a._v(" "),t("p",[a._v("Container启动时构建servlet对象，并调用servlet init()进行初始化")]),a._v(" "),t("p",[a._v("Container运行时接收请求，并为每个请求分配一个线程，（一般从线程池中获取空闲线程），然后调用Service")]),a._v(" "),t("p",[a._v("container关闭时，调用servlet destory() 销毁servlet")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200409145343133.png",alt:"image-20200409145343133"}})]),a._v(" "),t("p",[a._v("上述模式的缺点：")]),a._v(" "),t("p",[a._v("servlet是一个简单的网络IO模型，当请求进入Servlet container时，servlet container就会为其绑定一个线程，在并发不高的场景下，这种网络模型是适用的，但是一旦高并发（Jmeter测试），线程数就会上涨，而线程资源代价是昂贵的（上下文切换，内存消耗大），严重影响了请求的处理时间。在一些简单业务场景下，不希望为每个Request分配一个线程，只需要1个或几个线程就能应对极大并发的请求，这种业务场景下Servlet模型没有优势。")]),a._v(" "),t("p",[a._v("所以Zuul 1.X是基于Servlet之上的一种阻塞式锤模型，即Spring实现了处理所有request请求的Servlet（DispatcherServlet）并由该Servlet阻塞式处理，因此Zuul 1.X无法摆脱Servlet模型的弊端")]),a._v(" "),t("h3",{attrs:{id:"webflux框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webflux框架"}},[a._v("#")]),a._v(" WebFlux框架")]),a._v(" "),t("p",[a._v("传统的Web框架，比如Struts2，Spring MVC等都是基于Servlet API 与Servlet容器基础之上运行的，但是在Servlet 3.1之后有了异步非阻塞的支持，而WebFlux是一个典型的非阻塞异步的框架，它的核心是基于Reactor的相关API实现的，相对于传统的Web框架来说，它可以运行在如 Netty，Undertow 及支持Servlet3.1的容器上。非阻塞式 + 函数式编程（Spring5必须让你使用Java8）")]),a._v(" "),t("p",[a._v("Spring WebFlux是Spring 5.0引入的新的响应式框架，区别与Spring MVC，他不依赖Servlet API，它是完全异步非阻塞的，并且基于Reactor来实现响应式流规范。")]),a._v(" "),t("h2",{attrs:{id:"三大核心概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三大核心概念"}},[a._v("#")]),a._v(" 三大核心概念")]),a._v(" "),t("h3",{attrs:{id:"route-路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#route-路由"}},[a._v("#")]),a._v(" Route 路由")]),a._v(" "),t("p",[a._v("路由就是构建网关的基本模块，它由ID，目标URI，一系列的断言和过滤器组成，如果断言为True则匹配该路由")]),a._v(" "),t("h3",{attrs:{id:"predicate-断言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#predicate-断言"}},[a._v("#")]),a._v(" Predicate 断言")]),a._v(" "),t("p",[a._v("参考的Java8的 "),t("code",[a._v("java.util.function.Predicate")])]),a._v(" "),t("p",[a._v("开发人员可以匹配HTTP请求中的所有内容，例如请求头和请求参数，如果请求与断言想匹配则进行路由")]),a._v(" "),t("h3",{attrs:{id:"filter-过滤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filter-过滤"}},[a._v("#")]),a._v(" Filter 过滤")]),a._v(" "),t("p",[a._v("指的是Spring框架中GatewayFilter的实例，使用过滤器，可以在请求被路由前或者之后对请求进行修改。")]),a._v(" "),t("h2",{attrs:{id:"gateway工作流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gateway工作流程"}},[a._v("#")]),a._v(" Gateway工作流程")]),a._v(" "),t("p",[a._v("Web请求通过一些匹配条件，定位到真正的服务节点，并在这个转发过程的前后，进行了一些精细化的控制。")]),a._v(" "),t("p",[a._v("Predicate就是我们的匹配条件，而Filter就可以理解为一个无所不能的拦截器，有了这两个元素，在加上目标URL，就可以实现一个具体的路由了。")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200409152623392.png",alt:"image-20200409152623392"}})]),a._v(" "),t("p",[a._v("客户端向Spring Cloud Gateway发出请求，然后在Gateway Handler Mapping中找到与请求相匹配的路由，将其发送到Gateway Web Handler。")]),a._v(" "),t("p",[a._v("Handler在通过指定的过滤器链来将请求发送到我们实际的服务执行业务逻辑，然后返回。")]),a._v(" "),t("p",[a._v("过滤器之间用虚线分开是因为过滤器可能会在发送代理请求前（pre）或之后（post）执行业务逻辑。")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200409153225014.png",alt:"image-20200409153225014"}})]),a._v(" "),t("p",[a._v("Filter在 Pre 类型的过滤器可以做参数校验，权限校验，流量监控，日志输出，协议转换等。")]),a._v(" "),t("p",[a._v("在 Post类型的过滤器中可以做响应内容，响应头的修改，日志的输出，流量监控等有着非常重要的作用。")]),a._v(" "),t("p",[a._v("Gateway的核心逻辑：路由转发 + 执行过滤链")]),a._v(" "),t("h2",{attrs:{id:"入门配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#入门配置"}},[a._v("#")]),a._v(" 入门配置")]),a._v(" "),t("h3",{attrs:{id:"引入依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖"}},[a._v("#")]),a._v(" 引入依赖")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-gateway</artifactId>\n</dependency>\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"修改yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改yml"}},[a._v("#")]),a._v(" 修改YML")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("spring:\n  application:\n    name: cloud-gateway\n  cloud:\n    gateway:\n      discovery:\n        locator:\n          enabled: true # 开启从注册中心动态创建路由的功能，利用微服务名称进行路由\n      routes:\n        - id: payment_route # 路由的id,没有规定规则但要求唯一,建议配合服务名\n          #匹配后提供服务的路由地址\n          #uri: http://localhost:8001\n          uri: lb://CLOUD-PAYMENT-SERVICE\n          predicates:\n            - Path=/payment/get/** # 断言，路径相匹配的进行路由\n        - id: payment_route2\n          #uri: http://localhost:8001\n          uri: lb://CLOUD-PAYMENT-SERVICE\n          predicates:\n            - Path=/payment/lb/** #断言,路径相匹配的进行路由\n            - After=2020-03-09T22:40:37.365+08:00[Asia/Shanghai]\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br")])]),t("h3",{attrs:{id:"访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问"}},[a._v("#")]),a._v(" 访问")]),a._v(" "),t("p",[a._v("在添加网关之前，我们的访问是")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http://localhost:8001/payment/get/31\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("添加网关之后，我们的访问路径是")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http://localhost:9527/payment/get/31\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("这么做的好处是慢慢淡化我们真实的IP端口号")]),a._v(" "),t("h3",{attrs:{id:"路由匹配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由匹配"}},[a._v("#")]),a._v(" 路由匹配")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200409154741550.png",alt:"image-20200409154741550"}})]),a._v(" "),t("h3",{attrs:{id:"路由配置的两种方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由配置的两种方式"}},[a._v("#")]),a._v(" 路由配置的两种方式")]),a._v(" "),t("ul",[t("li",[a._v("在配置文件yml中配置")]),a._v(" "),t("li",[a._v("代码中注入RouteLocator的Bean")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('@Configuration\npublic class GateWayConfig {\n\n\t// 配置了一个id为route-name的路由规则，当访问地址 http://localhost:9527/guonei时，会自动转发到\n\t// 地址 http;//news.baidu.com/guonei\n    @Bean\n    public RouteLocator customRouteLocator(RouteLocatorBuilder routeLocatorBuilder){\n        RouteLocatorBuilder.Builder routes = routeLocatorBuilder.routes();\n        routes.route("path route atguigu",\n                r ->r.path("/guonei").uri("https://www.baidu.com")).build();\n        return routes.build();\n    }\n}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("h2",{attrs:{id:"通过微服务名实现动态路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过微服务名实现动态路由"}},[a._v("#")]),a._v(" 通过微服务名实现动态路由")]),a._v(" "),t("p",[a._v("默认情况下Gateway会根据注册中心的服务列表，以注册中心上微服务名为路径创建动态路由进行转发，从而实现动态路由的功能。")]),a._v(" "),t("p",[a._v("首先需要开启从注册中心动态创建路由的功能，利用微服务名进行路由")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("spring:\n  application:\n    name: cloud-gateway\n  cloud:\n    gateway:\n      discovery:\n        locator:\n          enabled: true # 开启从注册中心动态创建路由的功能，利用微服务名称进行路由\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("p",[a._v("URL换成服务名")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("uri: lb://CLOUD-PAYMENT-SERVICE\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"predicate的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#predicate的使用"}},[a._v("#")]),a._v(" Predicate的使用")]),a._v(" "),t("h3",{attrs:{id:"概念-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念-2"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),t("p",[a._v("断言，路径相匹配的进行路由")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200409160651792.png",alt:"image-20200409160651792"}})]),a._v(" "),t("p",[a._v("Spring Cloud Gateway将路由匹配作为Spring WebFlux HandlerMapping基础架构的一部分")]),a._v(" "),t("p",[a._v("Spring Cloud Gateway包括许多内置的Route Predicate 工厂，所有这些Predicate都与Http请求的不同属性相匹配，多个Route Predicate工厂可以进行组合")]),a._v(" "),t("p",[a._v("Spring Cloud Gateway创建Route对象时，使用RoutePredicateFactory创建Predicate对象，Predicate对象可以赋值给Route，SpringCloudGateway包含许多内置的RoutePredicateFactores。")]),a._v(" "),t("p",[a._v("所有这些谓词都匹配Http请求的不同属性。多种谓词工厂可以组合，并通过逻辑 and")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200409161216925.png",alt:"image-20200409161216925"}})]),a._v(" "),t("h3",{attrs:{id:"常用的predicate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用的predicate"}},[a._v("#")]),a._v(" 常用的Predicate")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("After Route Predicate：在什么时间之后执行")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200409161713254.png",alt:"image-20200409161713254"}})])]),a._v(" "),t("li",[t("p",[a._v("Before Route Predicate：在什么时间之前执行")])]),a._v(" "),t("li",[t("p",[a._v("Between Route Predicate：在什么时间之间执行")])]),a._v(" "),t("li",[t("p",[a._v("Cookie  Route Predicate：Cookie级别")]),a._v(" "),t("p",[a._v("常用的测试工具：")]),a._v(" "),t("ul",[t("li",[a._v("jmeter")]),a._v(" "),t("li",[a._v("postman")]),a._v(" "),t("li",[a._v("curl")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('// curl命令进行测试，携带Cookie\ncurl http://localhost:9527/payment/lb --cookie "username=zzyy"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("Header  Route Predicate：携带请求头")])]),a._v(" "),t("li",[t("p",[a._v("Host  Route Predicate：什么样的URL路径过来")])]),a._v(" "),t("li",[t("p",[a._v("Method  Route Predicate：什么方法请求的，Post，Get")])]),a._v(" "),t("li",[t("p",[a._v("Path  Route Predicate：请求什么路径 \t"),t("code",[a._v("- Path=/api-web/**")])])]),a._v(" "),t("li",[t("p",[a._v("Query  Route Predicate：带有什么参数的")])])]),a._v(" "),t("h2",{attrs:{id:"filter的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filter的使用"}},[a._v("#")]),a._v(" Filter的使用")]),a._v(" "),t("h3",{attrs:{id:"概念-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念-3"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),t("p",[a._v("路由过滤器可用于修改进入的HTTP请求和返回的HTTP响应，路由过滤器只能指定路由进行使用")]),a._v(" "),t("p",[a._v("Spring Cloud Gateway内置了多种路由过滤器，他们都由GatewayFilter的工厂类来产生的")]),a._v(" "),t("h3",{attrs:{id:"spring-cloud-gateway-filter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-gateway-filter"}},[a._v("#")]),a._v(" Spring Cloud Gateway Filter")]),a._v(" "),t("p",[a._v("生命周期：only Two：pre，Post")]),a._v(" "),t("p",[a._v("种类：Only Two")]),a._v(" "),t("ul",[t("li",[a._v("GatewayFilter")]),a._v(" "),t("li",[a._v("GlobalFilter")])]),a._v(" "),t("h3",{attrs:{id:"自定义过滤器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义过滤器"}},[a._v("#")]),a._v(" 自定义过滤器")]),a._v(" "),t("p",[a._v("主要作用：")]),a._v(" "),t("ul",[t("li",[a._v("全局日志记录")]),a._v(" "),t("li",[a._v("统一网关鉴权")])]),a._v(" "),t("p",[a._v("需要实现接口："),t("code",[a._v("implements GlobalFilter, Ordered")])]),a._v(" "),t("p",[a._v("全局过滤器代码如下：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('@Component\n@Slf4j\npublic class MyLogGateWayFilter implements GlobalFilter, Ordered {\n\n    @Override\n    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {\n        log.info("come in global filter: {}", new Date());\n\n        ServerHttpRequest request = exchange.getRequest();\n        String uname = request.getQueryParams().getFirst("uname");\n        if (uname == null) {\n            log.info("用户名为null，非法用户");\n            exchange.getResponse().setStatusCode(HttpStatus.NOT_ACCEPTABLE);\n            return exchange.getResponse().setComplete();\n        }\n        // 放行\n        return chain.filter(exchange);\n    }\n\n    /**\n     * 过滤器加载的顺序 越小,优先级别越高\n     *\n     * @return\n     */\n    @Override\n    public int getOrder() {\n        return 0;\n    }\n}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);