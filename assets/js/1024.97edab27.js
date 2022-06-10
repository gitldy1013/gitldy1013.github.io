(window.webpackJsonp=window.webpackJsonp||[]).push([[1024],{1720:function(e,n,a){"use strict";a.r(n);var t=a(5),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"基于内存存储令牌"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于内存存储令牌"}},[e._v("#")]),e._v(" 基于内存存储令牌")]),e._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),a("p",[e._v("本章节基于 "),a("strong",[e._v("内存存储令牌")]),e._v(' 的模式用于演示最基本的操作，帮助大家快速理解 oAuth2 认证服务器中 "认证"、"授权"、"访问令牌” 的基本概念')]),e._v(" "),a("p",[a("strong",[e._v("操作流程")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/201904030001.png",alt:""}})]),e._v(" "),a("ul",[a("li",[e._v("配置认证服务器\n"),a("ul",[a("li",[e._v("配置客户端信息："),a("code",[e._v("ClientDetailsServiceConfigurer")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("inMemory")]),e._v("：内存配置")]),e._v(" "),a("li",[a("code",[e._v("withClient")]),e._v("：客户端标识")]),e._v(" "),a("li",[a("code",[e._v("secret")]),e._v("：客户端安全码")]),e._v(" "),a("li",[a("code",[e._v("authorizedGrantTypes")]),e._v("：客户端授权类型")]),e._v(" "),a("li",[a("code",[e._v("scopes")]),e._v("：客户端授权范围")]),e._v(" "),a("li",[a("code",[e._v("redirectUris")]),e._v("：注册回调地址")])])])])]),e._v(" "),a("li",[e._v("配置 Web 安全")]),e._v(" "),a("li",[e._v("通过 GET 请求访问认证服务器获取授权码\n"),a("ul",[a("li",[e._v("端点："),a("code",[e._v("/oauth/authorize")])])])]),e._v(" "),a("li",[e._v("通过 POST 请求利用授权码访问认证服务器获取令牌\n"),a("ul",[a("li",[e._v("端点："),a("code",[e._v("/oauth/token")])])])])]),e._v(" "),a("p",[a("strong",[e._v("附：默认的端点 URL")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("/oauth/authorize")]),e._v("：授权端点")]),e._v(" "),a("li",[a("code",[e._v("/oauth/token")]),e._v("：令牌端点")]),e._v(" "),a("li",[a("code",[e._v("/oauth/confirm_access")]),e._v("：用户确认授权提交端点")]),e._v(" "),a("li",[a("code",[e._v("/oauth/error")]),e._v("：授权服务错误信息端点")]),e._v(" "),a("li",[a("code",[e._v("/oauth/check_token")]),e._v("：用于资源服务访问的令牌解析端点")]),e._v(" "),a("li",[a("code",[e._v("/oauth/token_key")]),e._v("：提供公有密匙的端点，如果你使用 JWT 令牌的话")])]),e._v(" "),a("h2",{attrs:{id:"配置认证服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置认证服务器"}},[e._v("#")]),e._v(" 配置认证服务器")]),e._v(" "),a("p",[e._v("创建一个类继承 "),a("code",[e._v("AuthorizationServerConfigurerAdapter")]),e._v(" 并添加相关注解：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("@Configuration")])]),e._v(" "),a("li",[a("code",[e._v("@EnableAuthorizationServer")])])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    package com.cmcc.oauth2.server.config;\n    \n    import org.springframework.context.annotation.Configuration;\n    import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;\n    import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;\n    import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;\n    \n    @Configuration\n    @EnableAuthorizationServer\n    public class AuthorizationServerConfiguration extends AuthorizationServerConfigurerAdapter {\n        @Override\n        public void configure(ClientDetailsServiceConfigurer clients) throws Exception {\n            // 配置客户端\n            clients\n                    // 使用内存设置\n                    .inMemory()\n                    // client_id\n                    .withClient("client")\n                    // client_secret\n                    .secret("secret")\n                    // 授权类型\n                    .authorizedGrantTypes("authorization_code")\n                    // 授权范围\n                    .scopes("app")\n                    // 注册回调地址\n                    .redirectUris("http://www.cmcc.com");\n        }\n    }\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br")])]),a("h2",{attrs:{id:"服务器安全配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器安全配置"}},[e._v("#")]),e._v(" 服务器安全配置")]),e._v(" "),a("p",[e._v("创建一个类继承 "),a("code",[e._v("WebSecurityConfigurerAdapter")]),e._v(" 并添加相关注解：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("@Configuration")])]),e._v(" "),a("li",[a("code",[e._v("@EnableWebSecurity")])]),e._v(" "),a("li",[a("code",[e._v("@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true, jsr250Enabled = true)")]),e._v("：全局方法拦截")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    package com.cmcc.oauth2.server.config;\n    \n    import org.springframework.context.annotation.Configuration;\n    import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;\n    import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\n    import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;\n    \n    @Configuration\n    @EnableWebSecurity\n    @EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true, jsr250Enabled = true)\n    public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {\n    \n    }\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("h2",{attrs:{id:"application-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-yml"}},[e._v("#")]),e._v(" application.yml")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    spring:\n      application:\n        name: oauth2-server\n      security:\n        user:\n          # 账号\n          name: root\n          # 密码\n          password: 123456\n    \n    server:\n      port: 8080\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("h2",{attrs:{id:"访问获取授权码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问获取授权码"}},[e._v("#")]),e._v(" 访问获取授权码")]),e._v(" "),a("p",[e._v("打开浏览器，输入地址：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    http://localhost:8080/oauth/authorize?client_id=client&response_type=code\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("第一次访问会跳转到登录页面")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/20190401195014.png",alt:""}})]),e._v(" "),a("p",[e._v("验证成功后会询问用户是否授权客户端")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/20190401195129.png",alt:""}})]),e._v(" "),a("p",[e._v("选择授权后会跳转到我的博客，浏览器地址上还会包含一个授权码（"),a("code",[e._v("code=1JuO6V")]),e._v("），浏览器地址栏会显示如下地址：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    http://www.cmcc.com/?code=1JuO6V\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("有了这个授权码就可以获取访问令牌了")]),e._v(" "),a("h2",{attrs:{id:"通过授权码向服务器申请令牌"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过授权码向服务器申请令牌"}},[e._v("#")]),e._v(" 通过授权码向服务器申请令牌")]),e._v(" "),a("p",[e._v("通过 CURL 或是 Postman 请求")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d \'grant_type=authorization_code&code=1JuO6V\' "http://client:secret@localhost:8080/oauth/token"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"/img/20190402232952.png",alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("注意：此时无法请求到令牌，访问服务器会报错 "),a("code",[e._v("There is no PasswordEncoder mapped for the id “null”")]),e._v("解决方案请移步 "),a("RouterLink",{attrs:{to:"/zh/spring-security-oauth2/PasswordEncoder.html"}},[e._v("这里")])],1)])])}),[],!1,null,null,null);n.default=s.exports}}]);