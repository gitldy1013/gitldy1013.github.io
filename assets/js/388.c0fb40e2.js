(window.webpackJsonp=window.webpackJsonp||[]).push([[388],{1084:function(a,s,e){"use strict";e.r(s);var t=e(5),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"dubbo-的负载均衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-的负载均衡"}},[a._v("#")]),a._v(" Dubbo 的负载均衡")]),a._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),e("p",[a._v("在集群负载均衡时，Dubbo 提供了多种均衡策略，缺省为 "),e("code",[a._v("random")]),a._v(" 随机调用。")]),a._v(" "),e("h2",{attrs:{id:"负载均衡策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡策略"}},[a._v("#")]),a._v(" 负载均衡策略")]),a._v(" "),e("h3",{attrs:{id:"random-loadbalance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#random-loadbalance"}},[a._v("#")]),a._v(" Random LoadBalance")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("随机")]),a._v("，按权重设置随机概率。")]),a._v(" "),e("li",[a._v("在一个截面上碰撞的概率高，但调用量越大分布越均匀，而且按概率使用权重后也比较均匀，有利于动态调整提供者权重。")])]),a._v(" "),e("h3",{attrs:{id:"roundrobin-loadbalance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#roundrobin-loadbalance"}},[a._v("#")]),a._v(" RoundRobin LoadBalance")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("轮询")]),a._v("，按公约后的权重设置轮询比率。")]),a._v(" "),e("li",[a._v("存在慢的提供者累积请求的问题，比如：第二台机器很慢，但没挂，当请求调到第二台时就卡在那，久而久之，所有请求都卡在调到第二台上。")])]),a._v(" "),e("h3",{attrs:{id:"leastactive-loadbalance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#leastactive-loadbalance"}},[a._v("#")]),a._v(" LeastActive LoadBalance")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("最少活跃调用数")]),a._v("，相同活跃数的随机，活跃数指调用前后计数差。")]),a._v(" "),e("li",[a._v("使慢的提供者收到更少请求，因为越慢的提供者的调用前后计数差会越大。")])]),a._v(" "),e("h3",{attrs:{id:"consistenthash-loadbalance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#consistenthash-loadbalance"}},[a._v("#")]),a._v(" ConsistentHash LoadBalance")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("一致性 Hash")]),a._v("，相同参数的请求总是发到同一提供者。")]),a._v(" "),e("li",[a._v("当某一台提供者挂时，原本发往该提供者的请求，基于虚拟节点，平摊到其它提供者，不会引起剧烈变动。")]),a._v(" "),e("li",[a._v("算法参见：http://en.wikipedia.org/wiki/Consistent_hashing")]),a._v(" "),e("li",[a._v("缺省只对第一个参数 Hash，如果要修改，请配置 "),e("code",[a._v('<dubbo:parameter key="hash.arguments" value="0,1" />')])]),a._v(" "),e("li",[a._v("缺省用 160 份虚拟节点，如果要修改，请配置 "),e("code",[a._v('<dubbo:parameter key="hash.nodes" value="320" />')])])]),a._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),e("h3",{attrs:{id:"服务端服务级别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务端服务级别"}},[a._v("#")]),a._v(" 服务端服务级别")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    dubbo:\n      provider:\n        loadbalance: leastactive\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h3",{attrs:{id:"客户端服务级别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端服务级别"}},[a._v("#")]),a._v(" 客户端服务级别")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    dubbo:\n      consumer:\n        loadbalance: leastactive\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h2",{attrs:{id:"测试负载均衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试负载均衡"}},[a._v("#")]),a._v(" 测试负载均衡")]),a._v(" "),e("h3",{attrs:{id:"修改-userserviceimpl-代码为"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改-userserviceimpl-代码为"}},[a._v("#")]),a._v(" 修改 "),e("code",[a._v("UserServiceImpl")]),a._v(" 代码为")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('    package com.cmcc.hello.dubbo.service.user.provider.api.impl;\n    \n    import com.alibaba.dubbo.config.annotation.Service;\n    import com.cmcc.hello.dubbo.service.user.api.UserService;\n    import org.springframework.beans.factory.annotation.Value;\n    \n    @Service(version = "${user.service.version}")\n    public class UserServiceImpl implements UserService {\n    \n        @Value("${dubbo.protocol.port}")\n        private String port;\n    \n        @Override\n        public String sayHi() {\n            return "Hello Dubbo , i am from port:" + port;\n        }\n    }\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br")])]),e("p",[a._v("注入了端口属性，当消费者访问时可以看出是从哪个端口请求的数据。")]),a._v(" "),e("h3",{attrs:{id:"修改负载均衡策略为轮询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改负载均衡策略为轮询"}},[a._v("#")]),a._v(" 修改负载均衡策略为轮询")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    dubbo:\n      provider:\n        loadbalance: roundrobin\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h3",{attrs:{id:"测试访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试访问"}},[a._v("#")]),a._v(" 测试访问")]),a._v(" "),e("p",[a._v("修改端口号并分别启动服务提供者，此时访问服务消费者：http://localhost:9090/hi")]),a._v(" "),e("p",[a._v("浏览器会交替显示：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    Hello Dubbo , i am from port:12345\n    Hello Dubbo , i am from port:12346\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h2",{attrs:{id:"附-在-idea-中配置一个工程启动多个实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附-在-idea-中配置一个工程启动多个实例"}},[a._v("#")]),a._v(" 附：在 IDEA 中配置一个工程启动多个实例")]),a._v(" "),e("h3",{attrs:{id:"步骤一"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤一"}},[a._v("#")]),a._v(" 步骤一")]),a._v(" "),e("p",[a._v("点击 "),e("code",[a._v("Run -> Edit Configurations...")])]),a._v(" "),e("p",[e("img",{attrs:{src:"/img/20181022015716.png",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"步骤二"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤二"}},[a._v("#")]),a._v(" 步骤二")]),a._v(" "),e("p",[a._v("选择需要启动多实例的项目并去掉 "),e("code",[a._v("Single instance only")]),a._v(" 前面的勾")]),a._v(" "),e("p",[e("img",{attrs:{src:"/img/20181022015801.png",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"步骤三"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤三"}},[a._v("#")]),a._v(" 步骤三")]),a._v(" "),e("p",[a._v("通过修改 "),e("code",[a._v("application.yml")]),a._v(" 配置文件的 "),e("code",[a._v("dubbo.protocol.port")]),a._v(" 的端口，启动多个实例，需要多个端口，分别进行启动即可。")])])}),[],!1,null,null,null);s.default=r.exports}}]);