(window.webpackJsonp=window.webpackJsonp||[]).push([[959],{1656:function(a,s,t){"use strict";t.r(s);var r=t(5),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"rabbitmq-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-安装"}},[a._v("#")]),a._v(" RabbitMQ 安装")]),a._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),t("p",[a._v("我们基于 Docker 来安装 RabbitMQ")]),a._v(" "),t("h2",{attrs:{id:"docker-compose-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml"}},[a._v("#")]),a._v(" docker-compose.yml")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    version: '3.1'\n    services:\n      rabbitmq:\n        restart: always\n        image: rabbitmq:management\n        container_name: rabbitmq\n        ports:\n          - 5672:5672\n          - 15672:15672\n        environment:\n          TZ: Asia/Shanghai\n          RABBITMQ_DEFAULT_USER: rabbit\n          RABBITMQ_DEFAULT_PASS: 123456\n        volumes:\n          - ./data:/var/lib/rabbitmq\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br")])]),t("h2",{attrs:{id:"rabbitmq-webui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-webui"}},[a._v("#")]),a._v(" RabbitMQ WebUI")]),a._v(" "),t("h3",{attrs:{id:"访问地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问地址"}},[a._v("#")]),a._v(" 访问地址")]),a._v(" "),t("p",[a._v("http://ip:15672")]),a._v(" "),t("h3",{attrs:{id:"首页"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首页"}},[a._v("#")]),a._v(" 首页")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/2018050122030001.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"global-counts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#global-counts"}},[a._v("#")]),a._v(" Global counts")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/2018050122030002.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("Connections：连接数")]),a._v(" "),t("li",[a._v("Channels：频道数")]),a._v(" "),t("li",[a._v("Exchanges：交换机数")]),a._v(" "),t("li",[a._v("Queues：队列数")]),a._v(" "),t("li",[a._v("Consumers：消费者数")])]),a._v(" "),t("h3",{attrs:{id:"交换机页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#交换机页面"}},[a._v("#")]),a._v(" 交换机页面")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/2018050122030003.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"队列页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#队列页面"}},[a._v("#")]),a._v(" 队列页面")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/2018050122030004.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("Name：消息队列的名称，这里是通过程序创建的")]),a._v(" "),t("li",[a._v("Features：消息队列的类型，durable:true为会持久化消息")]),a._v(" "),t("li",[a._v("Ready：准备好的消息")]),a._v(" "),t("li",[a._v("Unacked：未确认的消息")]),a._v(" "),t("li",[a._v("Total：全部消息")]),a._v(" "),t("li",[a._v("备注：如果都为 0 则说明全部消息处理完成")])])])}),[],!1,null,null,null);s.default=e.exports}}]);