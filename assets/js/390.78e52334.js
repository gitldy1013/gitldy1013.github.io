(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{1086:function(s,n,a){"use strict";a.r(n);var e=a(5),r=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"第一个-dubbo-应用程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一个-dubbo-应用程序"}},[s._v("#")]),s._v(" 第一个 Dubbo 应用程序")]),s._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/687474703a2f2f647562626f2e6170616368652e6f72672f696d672f6172636869746563747572652e706e67.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"创建服务接口项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建服务接口项目"}},[s._v("#")]),s._v(" 创建服务接口项目")]),s._v(" "),a("p",[s._v("创建一个名为 "),a("code",[s._v("hello-dubbo-service-user-api")]),s._v(" 的项目，该项目只负责"),a("strong",[s._v("定义接口")])]),s._v(" "),a("h3",{attrs:{id:"pom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[s._v("#")]),s._v(" POM")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    <?xml version="1.0" encoding="UTF-8"?>\n    <project xmlns="http://maven.apache.org/POM/4.0.0"\n             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n        <modelVersion>4.0.0</modelVersion>\n    \n        <groupId>com.cmcc</groupId>\n        <artifactId>hello-dubbo-service-user-api</artifactId>\n        <version>1.0.0-SNAPSHOT</version>\n        <packaging>jar</packaging>\n    \n        <properties>\n            <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n            <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n            <java.version>1.8</java.version>\n        </properties>\n    </project>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h3",{attrs:{id:"定义服务接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义服务接口"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#%E5%AE%9A%E4%B9%89%E6%9C%8D%E5%8A%A1%E6%8E%A5%E5%8F%A3"}},[s._v("#")]),s._v(" 定义服务接口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    package com.cmcc.hello.dubbo.service.user.api;\n    \n    public interface UserService {\n        String sayHi();\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"创建服务提供者项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建服务提供者项目"}},[s._v("#")]),s._v(" 创建服务提供者项目")]),s._v(" "),a("p",[s._v("创建一个名为 "),a("code",[s._v("hello-dubbo-service-user-provider")]),s._v(" 的项目，该项目主要用于实现接口")]),s._v(" "),a("h3",{attrs:{id:"pom-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pom-2"}},[s._v("#")]),s._v(" POM")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    <?xml version="1.0" encoding="UTF-8"?>\n    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n        <modelVersion>4.0.0</modelVersion>\n    \n        <groupId>com.cmcc</groupId>\n        <artifactId>hello-dubbo-service-user-provider</artifactId>\n        <version>1.0.0-SNAPSHOT</version>\n        <packaging>jar</packaging>\n    \n        <name>hello-dubbo-service-user-provider</name>\n        <description>Demo project for Spring Boot</description>\n    \n        <parent>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-parent</artifactId>\n            <version>2.0.6.RELEASE</version>\n            <relativePath/> \x3c!-- lookup parent from repository --\x3e\n        </parent>\n    \n        <properties>\n            <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n            <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n            <java.version>1.8</java.version>\n        </properties>\n    \n        <dependencies>\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter</artifactId>\n            </dependency>\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-actuator</artifactId>\n            </dependency>\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-test</artifactId>\n                <scope>test</scope>\n            </dependency>\n    \n            <dependency>\n                <groupId>com.alibaba.boot</groupId>\n                <artifactId>dubbo-spring-boot-starter</artifactId>\n                <version>0.2.0</version>\n            </dependency>\n            <dependency>\n                <groupId>com.alibaba.boot</groupId>\n                <artifactId>dubbo-spring-boot-actuator</artifactId>\n                <version>0.2.0</version>\n            </dependency>\n    \n            <dependency>\n                <groupId>com.cmcc</groupId>\n                <artifactId>hello-dubbo-service-user-api</artifactId>\n                <version>1.0.0-SNAPSHOT</version>\n            </dependency>\n        </dependencies>\n    \n        <build>\n            <plugins>\n                <plugin>\n                    <groupId>org.springframework.boot</groupId>\n                    <artifactId>spring-boot-maven-plugin</artifactId>\n                    <configuration>\n                        <mainClass>com.cmcc.hello.dubbo.service.user.provider.HelloDubboServiceUserProviderApplication</mainClass>\n                    </configuration>\n                </plugin>\n            </plugins>\n        </build>\n    \n    </project>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br")])]),a("p",[s._v("主要增加了以下依赖：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("com.alibaba.boot:dubbo-spring-boot-starter:0.2.0")]),s._v("：Dubbo Starter，0.2.0 版本支持 Spring Boot 2.x，是一个长期维护的版本。注：0.1.0 版本已经不推荐使用了，是个短期维护的版本，如果你还在用旧版，请大家尽快升级。")]),s._v(" "),a("li",[a("code",[s._v("com.alibaba.boot:dubbo-spring-boot-actuator:0.2.0")]),s._v("：Dubbo 的服务状态检查")]),s._v(" "),a("li",[a("code",[s._v("com.cmcc:hello-dubbo-service-user-api:1.0.0-SNAPSHOT")]),s._v("：刚才创建的接口项目，如果无法依赖别忘记先 "),a("code",[s._v("mvn clean install")]),s._v(" 到本地仓库。")])]),s._v(" "),a("h3",{attrs:{id:"通过-service-注解实现服务提供方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-service-注解实现服务提供方"}},[s._v("#")]),s._v(" 通过 "),a("code",[s._v("@Service")]),s._v(" 注解实现服务提供方")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    package com.cmcc.hello.dubbo.service.user.provider.api.impl;\n    \n    import com.alibaba.dubbo.config.annotation.Service;\n    import com.cmcc.hello.dubbo.service.user.api.UserService;\n    \n    @Service(version = "${user.service.version}")\n    public class UserServiceImpl implements UserService {\n        @Override\n        public String sayHi() {\n            return "Hello Dubbo";\n        }\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application"}},[s._v("#")]),s._v(" Application")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    package com.cmcc.hello.dubbo.service.user.provider;\n    \n    import com.alibaba.dubbo.container.Main;\n    import org.springframework.boot.SpringApplication;\n    import org.springframework.boot.autoconfigure.SpringBootApplication;\n    \n    @SpringBootApplication\n    public class HelloDubboServiceUserProviderApplication {\n        public static void main(String[] args) {\n            SpringApplication.run(HelloDubboServiceUserProviderApplication.class, args);\n            // 启动 Provider 容器，注意这里的 Main 是 com.alibaba.dubbo.container 包下的\n            Main.main(args);\n        }\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"application-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-yml"}},[s._v("#")]),s._v(" application.yml")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    # Spring boot application\n    spring:\n      application:\n        name: hello-dubbo-service-user-provider\n    \n    # UserService service version\n    user:\n      service:\n        version: 1.0.0\n    \n    # Dubbo Config properties\n    dubbo:\n      ## Base packages to scan Dubbo Component：@com.alibaba.dubbo.config.annotation.Service\n      scan:\n        basePackages: com.cmcc.hello.dubbo.service.user.provider.api\n      ## ApplicationConfig Bean\n      application:\n        id: hello-dubbo-service-user-provider\n        name: hello-dubbo-service-user-provider\n        qos-port: 22222\n        qos-enable: true\n      ## ProtocolConfig Bean\n      protocol:\n        id: dubbo\n        name: dubbo\n        port: 12345\n        status: server\n      ## RegistryConfig Bean\n      registry:\n        id: zookeeper\n        address: zookeeper://192.168.10.131:2181?backup=192.168.10.131:2182,192.168.10.131:2183\n    \n    # Enables Dubbo All Endpoints\n    management:\n      endpoint:\n        dubbo:\n          enabled: true\n        dubbo-shutdown:\n          enabled: true\n        dubbo-configs:\n          enabled: true\n        dubbo-services:\n          enabled: true\n        dubbo-references:\n          enabled: true\n        dubbo-properties:\n          enabled: true\n      # Dubbo Health\n      health:\n        dubbo:\n          status:\n            ## StatusChecker Name defaults (default : "memory", "load" )\n            defaults: memory\n            ## StatusChecker Name extras (default : empty )\n            extras: load,threadpool\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br")])]),a("h2",{attrs:{id:"创建服务消费者项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建服务消费者项目"}},[s._v("#")]),s._v(" 创建服务消费者项目")]),s._v(" "),a("p",[s._v("创建一个名为 "),a("code",[s._v("hello-dubbo-service-user-consumer")]),s._v(" 的项目，该项目用于消费接口（调用接口）")]),s._v(" "),a("h3",{attrs:{id:"pom-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pom-3"}},[s._v("#")]),s._v(" POM")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    <?xml version="1.0" encoding="UTF-8"?>\n    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n        <modelVersion>4.0.0</modelVersion>\n    \n        <groupId>com.cmcc</groupId>\n        <artifactId>hello-dubbo-service-user-consumer</artifactId>\n        <version>1.0.0-SNAPSHOT</version>\n        <packaging>jar</packaging>\n    \n        <name>hello-dubbo-service-user-consumer</name>\n        <description>Demo project for Spring Boot</description>\n    \n        <parent>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-parent</artifactId>\n            <version>2.0.6.RELEASE</version>\n            <relativePath/> \x3c!-- lookup parent from repository --\x3e\n        </parent>\n    \n        <properties>\n            <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n            <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n            <java.version>1.8</java.version>\n        </properties>\n    \n        <dependencies>\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-web</artifactId>\n            </dependency>\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-actuator</artifactId>\n            </dependency>\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-test</artifactId>\n                <scope>test</scope>\n            </dependency>\n    \n            <dependency>\n                <groupId>com.alibaba.boot</groupId>\n                <artifactId>dubbo-spring-boot-starter</artifactId>\n                <version>0.2.0</version>\n            </dependency>\n            <dependency>\n                <groupId>com.alibaba.boot</groupId>\n                <artifactId>dubbo-spring-boot-actuator</artifactId>\n                <version>0.2.0</version>\n            </dependency>\n    \n            <dependency>\n                <groupId>com.cmcc</groupId>\n                <artifactId>hello-dubbo-service-user-api</artifactId>\n                <version>1.0.0-SNAPSHOT</version>\n            </dependency>\n        </dependencies>\n    \n        <build>\n            <plugins>\n                <plugin>\n                    <groupId>org.springframework.boot</groupId>\n                    <artifactId>spring-boot-maven-plugin</artifactId>\n                    <configuration>\n                        <mainClass>com.cmcc.hello.dubbo.service.user.consumer.HelloDubboServiceUserConsumerApplication</mainClass>\n                    </configuration>\n                </plugin>\n            </plugins>\n        </build>\n    \n    </project>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br")])]),a("h3",{attrs:{id:"通过-reference-注入-userservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-reference-注入-userservice"}},[s._v("#")]),s._v(" 通过 "),a("code",[s._v("@Reference")]),s._v(" 注入 "),a("code",[s._v("UserService")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    package com.cmcc.hello.dubbo.service.user.consumer.controller;\n    \n    import com.alibaba.dubbo.config.annotation.Reference;\n    import com.cmcc.hello.dubbo.service.user.api.UserService;\n    import org.springframework.web.bind.annotation.RequestMapping;\n    import org.springframework.web.bind.annotation.RestController;\n    \n    @RestController\n    public class UserController {\n    \n        @Reference(version = "${user.service.version}")\n        private UserService userService;\n    \n        @RequestMapping(value = "hi")\n        public String sayHi() {\n            return userService.sayHi();\n        }\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h3",{attrs:{id:"application-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-2"}},[s._v("#")]),s._v(" Application")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    package com.cmcc.hello.dubbo.service.user.consumer;\n    \n    import org.springframework.boot.SpringApplication;\n    import org.springframework.boot.autoconfigure.SpringBootApplication;\n    \n    @SpringBootApplication\n    public class HelloDubboServiceUserConsumerApplication {\n        public static void main(String[] args) {\n            SpringApplication.run(HelloDubboServiceUserConsumerApplication.class, args);\n        }\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"application-yml-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-yml-2"}},[s._v("#")]),s._v(" application.yml")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    # Spring boot application\n    spring:\n      application:\n        name: hello-dubbo-service-user-consumer\n    server:\n      port: 9090\n    \n    # UserService service version\n    user:\n      service:\n        version: 1.0.0\n    \n    # Dubbo Config properties\n    dubbo:\n      scan:\n        basePackages: com.cmcc.hello.dubbo.service.user.consumer.controller\n      ## ApplicationConfig Bean\n      application:\n        id: hello-dubbo-service-user-consumer\n        name: hello-dubbo-service-user-consumer\n      ## RegistryConfig Bean\n      registry:\n        id: zookeeper\n        address: zookeeper://192.168.10.131:2181?backup=192.168.10.131:2182,192.168.10.131:2183\n    \n    # Dubbo Endpoint (default status is disable)\n    endpoints:\n      dubbo:\n        enabled: true\n    \n    management:\n      server:\n        port: 9091\n      # Dubbo Health\n      health:\n        dubbo:\n          status:\n            ## StatusChecker Name defaults (default : "memory", "load" )\n            defaults: memory\n      # Enables Dubbo All Endpoints\n      endpoint:\n        dubbo:\n          enabled: true\n        dubbo-shutdown:\n          enabled: true\n        dubbo-configs:\n          enabled: true\n        dubbo-services:\n          enabled: true\n        dubbo-references:\n          enabled: true\n        dubbo-properties:\n          enabled: true\n      endpoints:\n        web:\n          exposure:\n            include: "*"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br")])]),a("h2",{attrs:{id:"启动-dubbo-admin-控制台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-dubbo-admin-控制台"}},[s._v("#")]),s._v(" 启动 Dubbo Admin 控制台")]),s._v(" "),a("p",[s._v("查看是否成功注册服务，效果图如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/20181022010246.png",alt:""}})])])}),[],!1,null,null,null);n.default=r.exports}}]);