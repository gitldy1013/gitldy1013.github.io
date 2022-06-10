(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{864:function(e,n,t){"use strict";t.r(n);var r=t(5),a=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),t("p",[e._v("今天对蘑菇博客的springboot和springcloud的版本进行升级，在升级后发现挺多地方需要更改的")]),e._v(" "),t("p",[e._v("首先是yml配置文件里面的security已经更改了，由之前的配置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("security:\n  basic:\n    enabled: true\n  user:\n    name: user\n    password: password123\n")])])]),t("p",[e._v("更改成下面这样的配置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("spring:\n  security:\n    user:\n      name: user\n      password: password123\n")])])]),t("p",[e._v("然后，我们需要引入的eureka依赖，也由原来的")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("<dependency>\n  <groupId>org.springframework.cloud</groupId>\n  <artifactId>spring-cloud-starter-eureka-server</artifactId>\n</dependency>\n")])])]),t("p",[e._v("变成了下面的")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("<dependency>\n  <groupId>org.springframework.cloud</groupId>\n  <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>\n</dependency>\n")])])]),t("p",[e._v("在启动eureka之前，我们还需要添加一个配置文件：WebSecurityConfig")]),e._v(" "),t("p",[t("img",{attrs:{src:"http://image.moguit.cn/1576929701250.png",alt:""}})]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("package com.moxi.mogublog.eureka.config;\n\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;\nimport org.springframework.security.config.http.SessionCreationPolicy;\n\n/**\n * WebSecurityConfig\n *\n * @author: 陌溪\n * @create: 2019-12-21-19:20\n */\n@Configuration\n@EnableWebSecurity\npublic class WebSecurityConfig extends WebSecurityConfigurerAdapter {\n\n    /**\n     *\n     * @param http\n     * @throws Exception\n     */\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        // Configure HttpSecurity as needed (e.g. enable http basic).\n        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.NEVER);\n        http.csrf().disable();\n        // 如果是form方式,不能使用url格式登录\n        http.authorizeRequests().anyRequest().authenticated().and().httpBasic();\n    }\n\n}\n")])])]),t("p",[e._v("因为springboot 2.x版本，将下列的yml配置给废弃了")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("#高版本的丢弃了\nsecurity:\n basic:\n  enabled: true\n")])])]),t("p",[e._v("所以我们需要通过配置类的方式，来启动安全验证，如果不配置的话，就会出现下面的问题")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("javax.ws.rs.WebApplicationException: com.fasterxml.jackson.databind.exc.MismatchedInputException: Root name 'timestamp' does not match expected ('instance') for type [simple type, class com.netflix.appinfo.InstanceInfo]")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);