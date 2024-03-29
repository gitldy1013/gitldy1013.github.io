(window.webpackJsonp=window.webpackJsonp||[]).push([[918],{1614:function(s,n,a){"use strict";a.r(n);var e=a(5),r=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"发送注册成功邮件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发送注册成功邮件"}},[s._v("#")]),s._v(" 发送注册成功邮件")]),s._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("p",[s._v("本章节指导使用 Spring Boot + RocketMQ + Thymeleaf 实现 "),a("strong",[s._v("异步消息队列发送模板邮件")]),s._v(" 的功能，体验一下微服务架构中的 "),a("strong",[s._v("异步通信")]),s._v(" 场景；所有代码都是基于之前课程已完成的代码进行开发；")]),s._v(" "),a("h2",{attrs:{id:"pom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[s._v("#")]),s._v(" POM")]),s._v(" "),a("h3",{attrs:{id:"用户注册服务增加依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户注册服务增加依赖"}},[s._v("#")]),s._v(" 用户注册服务增加依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-stream-rocketmq</artifactId>\n    </dependency>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"创建邮件服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建邮件服务"}},[s._v("#")]),s._v(" 创建邮件服务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    <?xml version="1.0" encoding="UTF-8"?>\n    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n        <modelVersion>4.0.0</modelVersion>\n    \n        <parent>\n            <groupId>com.cmcc</groupId>\n            <artifactId>myshop-dependencies</artifactId>\n            <version>1.0.0-SNAPSHOT</version>\n            <relativePath>../myshop-dependencies/pom.xml</relativePath>\n        </parent>\n    \n        <artifactId>myshop-service-email</artifactId>\n        <packaging>jar</packaging>\n    \n        <name>myshop-service-email</name>\n        <url>http://www.cmcc.com</url>\n        <inceptionYear>2018-Now</inceptionYear>\n    \n        <dependencies>\n            \x3c!-- Spring Boot Begin --\x3e\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-web</artifactId>\n            </dependency>\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-actuator</artifactId>\n            </dependency>\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-test</artifactId>\n                <scope>test</scope>\n            </dependency>\n    \n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-mail</artifactId>\n            </dependency>\n    \n            <dependency>\n                <groupId>net.sourceforge.nekohtml</groupId>\n                <artifactId>nekohtml</artifactId>\n            </dependency>\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-thymeleaf</artifactId>\n            </dependency>\n            \x3c!-- Spring Boot End --\x3e\n    \n            \x3c!-- Spring Cloud Begin --\x3e\n            <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>\n            </dependency>\n            <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n            </dependency>\n            <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>\n            </dependency>\n            <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-starter-stream-rocketmq</artifactId>\n            </dependency>\n            \x3c!-- Spring Cloud End --\x3e\n    \n            \x3c!-- Projects Begin --\x3e\n            <dependency>\n                <groupId>com.cmcc</groupId>\n                <artifactId>myshop-commons-domain</artifactId>\n                <version>${project.parent.version}</version>\n            </dependency>\n            \x3c!-- Projects End --\x3e\n        </dependencies>\n    \n        <build>\n            <plugins>\n                <plugin>\n                    <groupId>org.springframework.boot</groupId>\n                    <artifactId>spring-boot-maven-plugin</artifactId>\n                    <configuration>\n                        <mainClass>com.cmcc.myshop.service.reg.MyShopServiceEmailApplication</mainClass>\n                    </configuration>\n                </plugin>\n            </plugins>\n        </build>\n    </project>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br")])]),a("h2",{attrs:{id:"application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application"}},[s._v("#")]),s._v(" Application")]),s._v(" "),a("h3",{attrs:{id:"用户注册服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户注册服务"}},[s._v("#")]),s._v(" 用户注册服务")]),s._v(" "),a("p",[s._v("主要增加了 "),a("code",[s._v("@EnableBinding")]),s._v(" 和 "),a("code",[s._v("@EnableAsync")]),s._v(" 注解，其中 "),a("code",[s._v("@EnableAsync")]),s._v(" 注解用于开启异步调用功能")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    package com.cmcc.myshop.service.reg;\n    \n    import org.springframework.boot.SpringApplication;\n    import org.springframework.boot.autoconfigure.SpringBootApplication;\n    import org.springframework.cloud.client.discovery.EnableDiscoveryClient;\n    import org.springframework.cloud.stream.annotation.EnableBinding;\n    import org.springframework.cloud.stream.messaging.Source;\n    import org.springframework.context.annotation.ComponentScan;\n    import org.springframework.scheduling.annotation.EnableAsync;\n    import tk.mybatis.spring.annotation.MapperScan;\n    \n    @SpringBootApplication\n    @EnableDiscoveryClient\n    @ComponentScan(basePackages = "com.cmcc.myshop")\n    @MapperScan(basePackages = "com.cmcc.myshop.commons.mapper")\n    @EnableBinding({Source.class})\n    @EnableAsync\n    public class MyShopServiceRegApplication {\n        public static void main(String[] args) {\n            SpringApplication.run(MyShopServiceRegApplication.class, args);\n        }\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"邮件发送服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#邮件发送服务"}},[s._v("#")]),s._v(" 邮件发送服务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    package com.cmcc.myshop.service.email;\n    \n    import org.springframework.boot.SpringApplication;\n    import org.springframework.boot.autoconfigure.SpringBootApplication;\n    import org.springframework.cloud.client.discovery.EnableDiscoveryClient;\n    import org.springframework.cloud.stream.annotation.EnableBinding;\n    import org.springframework.cloud.stream.messaging.Sink;\n    import org.springframework.context.annotation.ComponentScan;\n    import org.springframework.scheduling.annotation.EnableAsync;\n    \n    @SpringBootApplication\n    @EnableDiscoveryClient\n    @ComponentScan(basePackages = "com.cmcc.myshop")\n    @EnableBinding({Sink.class})\n    @EnableAsync\n    public class MyShopServiceEmailApplication {\n        public static void main(String[] args) {\n            SpringApplication.run(MyShopServiceEmailApplication.class, args);\n        }\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service"}},[s._v("#")]),s._v(" Service")]),s._v(" "),a("h3",{attrs:{id:"用户注册服务-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户注册服务-2"}},[s._v("#")]),s._v(" 用户注册服务")]),s._v(" "),a("p",[s._v("点击获取 "),a("RouterLink",{attrs:{to:"/zh/supplement1/MapperUtils-Jackson-工具类.html#mapperutils"}},[a("strong",[s._v("MapperUtils")])]),s._v(" 工具类")],1),s._v(" "),a("p",[a("strong",[s._v("PS：听说有人有强迫症，问为什么不叫 JacksonUtils ，因为我们是在封装 Jackson 中的 ObjectMapper ╮(￣▽￣)╭")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    package com.cmcc.myshop.service.reg.service;\n    \n    import com.cmcc.myshop.commons.domain.TbUser;\n    import com.cmcc.myshop.commons.utils.MapperUtils;\n    import org.springframework.beans.factory.annotation.Autowired;\n    import org.springframework.messaging.MessageChannel;\n    import org.springframework.messaging.support.MessageBuilder;\n    import org.springframework.scheduling.annotation.Async;\n    import org.springframework.stereotype.Service;\n    \n    @Service\n    public class RegService {\n    \n        @Autowired\n        private MessageChannel output;\n    \n        /**\n         * 该方法将被异步调用\n         * @param tbUser\n         */\n        @Async\n        public void sendEmail(TbUser tbUser) {\n            try {\n                output.send(MessageBuilder.withPayload(MapperUtils.obj2json(tbUser)).build());\n            } catch (Exception e) {\n                e.printStackTrace();\n            }\n        }\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h3",{attrs:{id:"邮件发送服务-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#邮件发送服务-2"}},[s._v("#")]),s._v(" 邮件发送服务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    package com.cmcc.myshop.service.email.service;\n    \n    import com.cmcc.myshop.commons.domain.TbUser;\n    import com.cmcc.myshop.commons.utils.MapperUtils;\n    import org.springframework.beans.factory.annotation.Autowired;\n    import org.springframework.cloud.stream.annotation.StreamListener;\n    import org.springframework.context.ConfigurableApplicationContext;\n    import org.springframework.mail.SimpleMailMessage;\n    import org.springframework.mail.javamail.JavaMailSender;\n    import org.springframework.mail.javamail.MimeMessageHelper;\n    import org.springframework.scheduling.annotation.Async;\n    import org.springframework.stereotype.Service;\n    import org.thymeleaf.TemplateEngine;\n    import org.thymeleaf.context.Context;\n    \n    import javax.mail.internet.MimeMessage;\n    \n    @Service\n    public class EmailService {\n    \n        @Autowired\n        private ConfigurableApplicationContext applicationContext;\n    \n        @Autowired\n        private JavaMailSender javaMailSender;\n    \n        @Autowired\n        private TemplateEngine templateEngine;\n    \n        @StreamListener("input")\n        public void receive(String tbUserJson) {\n            try {\n                // 发送普通邮件\n                TbUser tbUser = MapperUtils.json2pojo(tbUserJson, TbUser.class);\n                sendEmail("欢迎注册", "欢迎 " + tbUser.getUsername() + " 加入LEG项目！", tbUser.getEmail());\n    \n                // 发送 HTML 模板邮件\n                Context context = new Context();\n                context.setVariable("username", tbUser.getUsername());\n                String emailTemplate = templateEngine.process("reg", context);\n                sendTemplateEmail("欢迎注册", emailTemplate, tbUser.getEmail());\n            } catch (Exception e) {\n                e.printStackTrace();\n            }\n        }\n    \n        /**\n         * 发送普通邮件\n         * @param subject\n         * @param body\n         * @param to\n         */\n        @Async\n        public void sendEmail(String subject, String body, String to) {\n            SimpleMailMessage message = new SimpleMailMessage();\n            message.setFrom(applicationContext.getEnvironment().getProperty("spring.mail.username"));\n            message.setTo(to);\n            message.setSubject(subject);\n            message.setText(body);\n            javaMailSender.send(message);\n        }\n    \n        /**\n         * 发送 HTML 模板邮件\n         * @param subject\n         * @param body\n         * @param to\n         */\n        @Async\n        public void sendTemplateEmail(String subject, String body, String to) {\n            MimeMessage message = javaMailSender.createMimeMessage();\n            try {\n                MimeMessageHelper helper = new MimeMessageHelper(message, true);\n                helper.setFrom(applicationContext.getEnvironment().getProperty("spring.mail.username"));\n                helper.setTo(to);\n                helper.setSubject(subject);\n                helper.setText(body, true);\n                javaMailSender.send(message);\n            } catch (Exception e) {\n    \n            }\n        }\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br")])]),a("h2",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),a("p",[s._v("温馨提示")]),s._v(" "),a("p",[s._v("RocketMQ 配置在 Nacos Config 配置中心会导致无法连接 RocketMQ Server 的问题，故我们还需要在项目中额外配置 "),a("code",[s._v("application.yml")])]),s._v(" "),a("h3",{attrs:{id:"用户注册服务-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户注册服务-3"}},[s._v("#")]),s._v(" 用户注册服务")]),s._v(" "),a("p",[s._v("创建 "),a("code",[s._v("application.yml")]),s._v(" 配置文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    spring:\n      cloud:\n        stream:\n          rocketmq:\n            binder:\n              namesrv-addr: 192.168.10.149:9876\n          bindings:\n            output: {destination: topic-email, content-type: application/json}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"邮件发送服务-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#邮件发送服务-3"}},[s._v("#")]),s._v(" 邮件发送服务")]),s._v(" "),a("p",[s._v("创建 "),a("code",[s._v("bootstrap.properties")]),s._v(" 配置文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    spring.application.name=myshop-service-email-config\n    spring.cloud.nacos.config.file-extension=yaml\n    spring.cloud.nacos.config.server-addr=192.168.10.151:8848\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("创建 "),a("code",[s._v("application.yml")]),s._v(" 配置文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    spring:\n      cloud:\n        stream:\n          rocketmq:\n            binder:\n              namesrv-addr: 192.168.10.149:9876\n            bindings:\n              input: {consumer.orderly: true}\n          bindings:\n            input: {destination: topic-email, content-type: application/json, group: group-email, consumer.maxAttempts: 1}\n      thymeleaf:\n        cache: false\n        mode: HTML\n        encoding: UTF-8\n        servlet:\n          content-type: text/html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("Nacos Config 中创建名为 "),a("code",[s._v("myshop-service-email-config.yaml")]),s._v(" 配置文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    spring:\n      application:\n        name: myshop-service-email\n      mail:\n        host: smtp.qq.com\n        # 你的邮箱授权码\n        password: \n        properties:\n          mail:\n            smtp:\n              auth: true\n              starttls:\n                enable: true\n                required: true\n        # 发送邮件的邮箱地址\n        username: \n      cloud:\n        nacos:\n          discovery:\n            server-addr: 192.168.10.151:8848\n        sentinel:\n          transport:\n            port: 8719\n            dashboard: 192.168.10.151:8080\n    \n    server:\n      port: 9507\n    \n    management:\n      endpoints:\n        web:\n          exposure:\n            include: "*"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("h2",{attrs:{id:"模板文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板文件"}},[s._v("#")]),s._v(" 模板文件")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("myshop-service-email")]),s._v(" 服务的 "),a("code",[s._v("src/main/resources/templates")]),s._v(" 目录下创建名为 "),a("code",[s._v("reg.html")]),s._v(" 的模板文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    <!DOCTYPE html SYSTEM "http://www.thymeleaf.org/dtd/xhtml1-strict-thymeleaf-spring4-4.dtd">\n    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:th="http://www.thymeleaf.org">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport"\n              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n        <title>注册通知</title>\n    </head>\n    <body>\n        <div>\n            我来自 Thymeleaf 模板 <br />\n            恭喜 <span th:text="${username}"></span> 加入LEG项目！\n        </div>\n    </body>\n    </html>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"测试效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试效果"}},[s._v("#")]),s._v(" 测试效果")]),s._v(" "),a("p",[s._v("至此 Spring Boot + RocketMQ + Thymeleaf 实现 "),a("strong",[s._v("异步消息队列发送模板邮件")]),s._v(" 的功能配置完成，发送成功后效果图如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/20190125140043.png",alt:""}})])])}),[],!1,null,null,null);n.default=r.exports}}]);