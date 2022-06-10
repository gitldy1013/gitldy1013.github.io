(window.webpackJsonp=window.webpackJsonp||[]).push([[936],{1633:function(e,a,n){"use strict";n.r(a);var s=n(5),t=Object(s.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"使用熔断器防止服务雪崩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用熔断器防止服务雪崩"}},[e._v("#")]),e._v(" 使用熔断器防止服务雪崩")]),e._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),n("p",[e._v("在微服务架构中，根据业务来拆分成一个个的服务，服务与服务之间可以通过 "),n("code",[e._v("RPC")]),e._v(" 相互调用，在 Spring Cloud 中可以用 "),n("code",[e._v("RestTemplate + LoadBalanceClient")]),e._v(" 和 "),n("code",[e._v("Feign")]),e._v(" 来调用。为了保证其高可用，单个服务通常会集群部署。由于网络原因或者自身的原因，服务并不能保证 100% 可用，如果单个服务出现问题，调用这个服务就会出现线程阻塞，此时若有大量的请求涌入，"),n("code",[e._v("Servlet")]),e._v(" 容器的线程资源会被消耗完毕，导致服务瘫痪。服务与服务之间的依赖性，故障会传播，会对整个微服务系统造成灾难性的严重后果，这就是服务故障的 "),n("strong",[e._v("“雪崩”")]),e._v(" 效应。")]),e._v(" "),n("p",[e._v("为了解决这个问题，业界提出了熔断器模型。")]),e._v(" "),n("p",[e._v("阿里巴巴开源了 Sentinel 组件，实现了熔断器模式，Spring Cloud 对这一组件进行了整合。在微服务架构中，一个请求需要调用多个服务是非常常见的，如下图：")]),e._v(" "),n("p",[n("img",{attrs:{src:"/img/201805292246007.png",alt:""}})]),e._v(" "),n("p",[e._v("较底层的服务如果出现故障，会导致连锁故障。当对特定的服务的调用的不可用达到一个阀值熔断器将会被打开。")]),e._v(" "),n("p",[n("img",{attrs:{src:"/img/201901080205008.png",alt:""}})]),e._v(" "),n("p",[e._v("熔断器打开后，为了避免连锁故障，通过 "),n("code",[e._v("fallback")]),e._v(" 方法可以直接返回一个固定值。")]),e._v(" "),n("h2",{attrs:{id:"什么是-sentinel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是-sentinel"}},[e._v("#")]),e._v(" 什么是 Sentinel")]),e._v(" "),n("p",[e._v("随着微服务的流行，服务和服务之间的稳定性变得越来越重要。 Sentinel 以流量为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性。")]),e._v(" "),n("h2",{attrs:{id:"sentinel-的特征"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sentinel-的特征"}},[e._v("#")]),e._v(" Sentinel 的特征")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("丰富的应用场景：")]),e._v(" Sentinel 承接了阿里巴巴近 10 年的 "),n("strong",[e._v("双十一大促流量")]),e._v(" 的核心场景，例如秒杀（即突发流量控制在系统容量可以承受的范围）、消息削峰填谷、实时熔断下游不可用应用等。")]),e._v(" "),n("li",[n("strong",[e._v("完备的实时监控：")]),e._v(" Sentinel 同时提供实时的监控功能。您可以在控制台中看到接入应用的单台机器秒级数据，甚至 500 台以下规模的集群的汇总运行情况。")]),e._v(" "),n("li",[n("strong",[e._v("广泛的开源生态：")]),e._v(" Sentinel 提供开箱即用的与其它开源框架/库的整合模块，例如与 Spring Cloud、Dubbo、gRPC 的整合。您只需要引入相应的依赖并进行简单的配置即可快速地接入 Sentinel。")]),e._v(" "),n("li",[n("strong",[e._v("完善的 SPI 扩展点：")]),e._v(" Sentinel 提供简单易用、完善的 SPI 扩展点。您可以通过实现扩展点，快速的定制逻辑。例如定制规则管理、适配数据源等。")])]),e._v(" "),n("h2",{attrs:{id:"feign-中使用-sentinel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#feign-中使用-sentinel"}},[e._v("#")]),e._v(" Feign 中使用 Sentinel")]),e._v(" "),n("p",[e._v("如果要在您的项目中引入 Sentinel，使用 group ID 为 "),n("code",[e._v("org.springframework.cloud")]),e._v(" 和 artifact ID 为 "),n("code",[e._v("spring-cloud-starter-alibaba-sentinel")]),e._v(" 的 starter。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>\n    </dependency>\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])]),n("p",[e._v("Sentinel 适配了 Feign 组件。但默认是关闭的。需要在配置文件中配置打开它，在配置文件增加以下代码：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    feign:\n      sentinel:\n        enabled: true\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("h3",{attrs:{id:"在-service-中增加-fallback-指定类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-service-中增加-fallback-指定类"}},[e._v("#")]),e._v(" 在 Service 中增加 fallback 指定类")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    package com.cmcc.hello.spring.cloud.alibaba.nacos.consumer.feign.service;\n    \n    import com.cmcc.hello.spring.cloud.alibaba.nacos.consumer.feign.service.fallback.EchoServiceFallback;\n    import org.springframework.cloud.openfeign.FeignClient;\n    import org.springframework.web.bind.annotation.GetMapping;\n    import org.springframework.web.bind.annotation.PathVariable;\n    \n    @FeignClient(value = "nacos-provider", fallback = EchoServiceFallback.class)\n    public interface EchoService {\n    \n        @GetMapping(value = "/echo/{message}")\n        String echo(@PathVariable("message") String message);\n    }\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br")])]),n("h3",{attrs:{id:"创建熔断器类并实现对应的-feign-接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建熔断器类并实现对应的-feign-接口"}},[e._v("#")]),e._v(" 创建熔断器类并实现对应的 Feign 接口")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    package com.cmcc.hello.spring.cloud.alibaba.nacos.consumer.feign.service.fallback;\n    \n    import com.cmcc.hello.spring.cloud.alibaba.nacos.consumer.feign.service.EchoService;\n    import org.springframework.stereotype.Component;\n    \n    @Component\n    public class EchoServiceFallback implements EchoService {\n        @Override\n        public String echo(String message) {\n            return "echo fallback";\n        }\n    }\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br")])]),n("h2",{attrs:{id:"测试熔断器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试熔断器"}},[e._v("#")]),e._v(" 测试熔断器")]),e._v(" "),n("p",[e._v("此时我们关闭服务提供者，再次请求 http://localhost:9092/echo/hi 浏览器会显示：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    echo fallback\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);