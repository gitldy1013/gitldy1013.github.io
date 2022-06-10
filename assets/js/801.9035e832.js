(window.webpackJsonp=window.webpackJsonp||[]).push([[801],{1497:function(s,e,n){"use strict";n.r(e);var a=n(5),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"第一个-log4j-日志文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一个-log4j-日志文件"}},[s._v("#")]),s._v(" 第一个 Log4j 日志文件")]),s._v(" "),n("h2",{attrs:{id:"slf4j-简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slf4j-简介"}},[s._v("#")]),s._v(" Slf4j 简介")]),s._v(" "),n("p",[s._v("slf4j 的全称是 Simple Loging Facade For Java，即它仅仅是一个为 Java 程序提供日志输出的统一接口，并不是一个具体的日志实现方案，就比如 JDBC 一样，只是一种规则而已。所以单独的 slf4j 是不能工作的，必须搭配其他具体的日志实现方案，比如 apache 的 "),n("code",[s._v("org.apache.log4j.Logger")]),s._v("，JDK 自带的 "),n("code",[s._v("java.util.logging.Logger")]),s._v(" 以及 "),n("code",[s._v("log4j")]),s._v(" 等。")]),s._v(" "),n("h2",{attrs:{id:"pom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[s._v("#")]),s._v(" POM")]),s._v(" "),n("p",[s._v("继续之前的项目，"),n("code",[s._v("pom.xml")]),s._v(" 配置如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    <?xml version="1.0" encoding="UTF-8"?>\n    <project xmlns="http://maven.apache.org/POM/4.0.0"\n             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n        <modelVersion>4.0.0</modelVersion>\n    \n        <groupId>com.cmcc</groupId>\n        <artifactId>hello-spring</artifactId>\n        <version>1.0.0-SNAPSHOT</version>\n        <packaging>jar</packaging>\n    \n        <dependencies>\n            <dependency>\n                <groupId>org.springframework</groupId>\n                <artifactId>spring-context</artifactId>\n                <version>4.3.17.RELEASE</version>\n            </dependency>\n            <dependency>\n                <groupId>junit</groupId>\n                <artifactId>junit</artifactId>\n                <version>4.12</version>\n                <scope>test</scope>\n            </dependency>\n            <dependency>\n                <groupId>org.slf4j</groupId>\n                <artifactId>slf4j-log4j12</artifactId>\n                <version>1.7.25</version>\n            </dependency>\n        </dependencies>\n    </project>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("p",[s._v("主要增加了 "),n("code",[s._v("org.slf4j:slf4j-log4j12")]),s._v(" 依赖")]),s._v(" "),n("h2",{attrs:{id:"创建-log4j-properties-配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建-log4j-properties-配置文件"}},[s._v("#")]),s._v(" 创建 "),n("code",[s._v("log4j.properties")]),s._v(" 配置文件")]),s._v(" "),n("p",[s._v("在 "),n("code",[s._v("src/main/resources")]),s._v(" 目录下创建名为 "),n("code",[s._v("log4j.properties")]),s._v(" 的属性配置文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    log4j.rootLogger=INFO, console, file\n    \n    log4j.appender.console=org.apache.log4j.ConsoleAppender\n    log4j.appender.console.layout=org.apache.log4j.PatternLayout\n    log4j.appender.console.layout.ConversionPattern=%d %p [%c] - %m%n\n    \n    log4j.appender.file=org.apache.log4j.DailyRollingFileAppender\n    log4j.appender.file.File=logs/log.log\n    log4j.appender.file.layout=org.apache.log4j.PatternLayout\n    log4j.appender.A3.MaxFileSize=1024KB\n    log4j.appender.A3.MaxBackupIndex=10\n    log4j.appender.file.layout.ConversionPattern=%d %p [%c] - %m%n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("日志配置相关说明：")]),s._v(" "),n("ul",[n("li",[n("p",[n("code",[s._v("log4j.rootLogger")]),s._v("：根日志，配置了日志级别为 "),n("code",[s._v("INFO")]),s._v("，预定义了名称为 "),n("code",[s._v("console")]),s._v("、"),n("code",[s._v("file")]),s._v(" 两种附加器")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("log4j.appender.console")]),s._v("：console 附加器，日志输出位置在控制台")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("log4j.appender.console.layout")]),s._v("：console 附加器，采用匹配器布局模式")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("log4j.appender.console.layout.ConversionPattern")]),s._v("：console 附加器，日志输出格式为：日期 日志级别 [类名] - 消息"),n("code",[s._v("换行符")])])]),s._v(" "),n("li",[n("p",[n("code",[s._v("log4j.appender.file")]),s._v("：file 附加器，每天产生一个日志文件")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("log4j.appender.file.File")]),s._v("：file 附加器，日志文件输出位置 "),n("code",[s._v("logs/log.log")])])]),s._v(" "),n("li",[n("p",[n("code",[s._v("log4j.appender.file.layout")]),s._v("：file 附加器，采用匹配器布局模式")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("log4j.appender.A3.MaxFileSize")]),s._v("：日志文件最大值")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("log4j.appender.A3.MaxBackupIndex")]),s._v("：最多纪录文件数")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("log4j.appender.file.layout.ConversionPattern")]),s._v("：file 附加器，日志输出格式为：日期 日志级别 [类名] - 消息"),n("code",[s._v("换行符")])])])]),s._v(" "),n("h2",{attrs:{id:"测试日志输出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试日志输出"}},[s._v("#")]),s._v(" 测试日志输出")]),s._v(" "),n("p",[s._v("创建一个测试类，并测试日志输出效果，代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    package com.cmcc.hello.spring;\n    \n    import org.slf4j.Logger;\n    import org.slf4j.LoggerFactory;\n    \n    public class MyTest {\n    \n        public static final Logger logger = LoggerFactory.getLogger(MyTest.class);\n    \n        public static void main(String[] args) {\n            logger.info("slf4j for info");\n            logger.debug("slf4j for debug");\n            logger.error("slf4j for error");\n            logger.warn("slf4j for warn");\n    \n            String message = "Hello SLF4J";\n            logger.info("slf4j message is : {}", message);\n        }\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("此时控制台显示为：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    2018-06-07 05:15:42,914 INFO [com.cmcc.hello.spring.MyTest] - slf4j for info\n    2018-06-07 05:15:42,915 ERROR [com.cmcc.hello.spring.MyTest] - slf4j for error\n    2018-06-07 05:15:42,915 WARN [com.cmcc.hello.spring.MyTest] - slf4j for warn\n    2018-06-07 05:15:42,916 INFO [com.cmcc.hello.spring.MyTest] - slf4j message is : Hello SLF4J\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("项目根目录下也会多出 "),n("code",[s._v("logs/log.log")]),s._v(" 目录及文件")]),s._v(" "),n("h3",{attrs:{id:"附-占位符说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#附-占位符说明"}},[s._v("#")]),s._v(" 附：占位符说明")]),s._v(" "),n("p",[s._v("打日志的时候使用了 "),n("code",[s._v("{}")]),s._v(" 占位符，这样就不会有字符串拼接操作，减少了无用 "),n("code",[s._v("String")]),s._v(" 对象的数量，节省了内存。并且，记住，在生产最终日志信息的字符串之前，这个方法会检查一个特定的日志级别是不是打开了，这不仅降低了内存消耗而且预先降低了 "),n("code",[s._v("CPU")]),s._v(" 去处理字符串连接命令的时间。")])])}),[],!1,null,null,null);e.default=r.exports}}]);