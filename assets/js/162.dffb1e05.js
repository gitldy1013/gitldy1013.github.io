(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{858:function(s,a,n){"use strict";n.r(a);var e=n(5),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"springboot解决时区问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#springboot解决时区问题"}},[s._v("#")]),s._v(" SpringBoot解决时区问题")]),s._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("蘑菇博客一直存在时区不正确的问题，让我苦不堪言，比如刚刚发表的评论会显示八小时前")]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/image-20200311153938129.png",alt:"image-20200311153938129"}})]),s._v(" "),n("p",[s._v("但是我们查看数据库的和服务器的时间能够发现，时间显示是正常的")]),s._v(" "),n("p",[s._v("刚刚发表的评论的时间：")]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/image-20200311154023478.png",alt:"image-20200311154023478"}})]),s._v(" "),n("p",[s._v("以及服务器的时间")]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/image-20200311154111362.png",alt:"image-20200311154111362"}})]),s._v(" "),n("h2",{attrs:{id:"解决方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[s._v("#")]),s._v(" 解决方法")]),s._v(" "),n("p",[s._v("最近通过热心的小伙伴提出，打算彻底解决这个时区的问题，进过查阅相关博客，总结出下面有效的配置")]),s._v(" "),n("p",[s._v("1、我们设置mysql连接，在连接语句后面加上")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("&serverTimezone=Asia/Shanghai\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("2、然后修改jackson配置")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#spring\nspring:\n  jackson:\n    date-format: yyyy-MM-dd HH:mm:ss\n    time-zone: Asia/Shanghai\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("3、修改启动类")]),s._v(" "),n("p",[s._v("在启动类中，添加这个方法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    /**\n     * 设置时区\n     */\n    @PostConstruct\n    void setDefaultTimezone() {\n        TimeZone.setDefault(TimeZone.getTimeZone("Asia/Shanghai"));\n    }\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("然后在启动类的main方法中，设置时区")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    public static void main(String[] args) {\n        TimeZone.setDefault(TimeZone.getTimeZone("Asia/Shanghai"));\n        SpringApplication.run(AdminApplication.class, args);\n    }\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);