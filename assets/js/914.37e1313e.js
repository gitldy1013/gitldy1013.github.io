(window.webpackJsonp=window.webpackJsonp||[]).push([[914],{1610:function(n,s,a){"use strict";a.r(s);var e=a(5),r=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"创建通用的代码生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建通用的代码生成"}},[n._v("#")]),n._v(" 创建通用的代码生成")]),n._v(" "),a("h2",{attrs:{id:"pom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[n._v("#")]),n._v(" POM")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    <?xml version="1.0" encoding="UTF-8"?>\n    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n        <modelVersion>4.0.0</modelVersion>\n    \n        <parent>\n            <groupId>com.cmcc</groupId>\n            <artifactId>myshop-dependencies</artifactId>\n            <version>1.0.0-SNAPSHOT</version>\n            <relativePath>../myshop-dependencies/pom.xml</relativePath>\n        </parent>\n    \n        <artifactId>myshop-database</artifactId>\n        <packaging>jar</packaging>\n    \n        <name>myshop-database</name>\n        <url>http://www.cmcc.com</url>\n        <inceptionYear>2018-Now</inceptionYear>\n    \n        <dependencies>\n            <dependency>\n                <groupId>tk.mybatis</groupId>\n                <artifactId>mapper</artifactId>\n                <version>4.1.4</version>\n            </dependency>\n        </dependencies>\n    \n        <build>\n            <plugins>\n                <plugin>\n                    <groupId>org.mybatis.generator</groupId>\n                    <artifactId>mybatis-generator-maven-plugin</artifactId>\n                    <version>1.3.5</version>\n                    <configuration>\n                        <configurationFile>${basedir}/src/main/resources/generator/generatorConfig.xml</configurationFile>\n                        <overwrite>true</overwrite>\n                        <verbose>true</verbose>\n                    </configuration>\n                    <dependencies>\n                        <dependency>\n                            <groupId>mysql</groupId>\n                            <artifactId>mysql-connector-java</artifactId>\n                            <version>8.0.13</version>\n                        </dependency>\n                        <dependency>\n                            <groupId>tk.mybatis</groupId>\n                            <artifactId>mapper</artifactId>\n                            <version>4.1.4</version>\n                        </dependency>\n                    </dependencies>\n                </plugin>\n            </plugins>\n        </build>\n    </project>\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br")])]),a("h2",{attrs:{id:"自动生成的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动生成的配置"}},[n._v("#")]),n._v(" 自动生成的配置")]),n._v(" "),a("p",[n._v("在 "),a("code",[n._v("src/main/resources/generator/")]),n._v(" 目录下创建 "),a("code",[n._v("generatorConfig.xml")]),n._v(" 配置文件：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    <?xml version="1.0" encoding="UTF-8"?>\n    <!DOCTYPE generatorConfiguration\n            PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"\n            "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">\n    \n    <generatorConfiguration>\n        \x3c!-- 引入数据库连接配置 --\x3e\n        <properties resource="jdbc.properties"/>\n    \n        <context id="Mysql" targetRuntime="MyBatis3Simple" defaultModelType="flat">\n            <property name="beginningDelimiter" value="`"/>\n            <property name="endingDelimiter" value="`"/>\n    \n            \x3c!-- 配置 tk.mybatis 插件 --\x3e\n            <plugin type="tk.mybatis.mapper.generator.MapperPlugin">\n                <property name="mappers" value="tk.mybatis.mapper.MyMapper"/>\n            </plugin>\n    \n            \x3c!-- 配置数据库连接 --\x3e\n            <jdbcConnection\n                    driverClass="${jdbc.driverClass}"\n                    connectionURL="${jdbc.connectionURL}"\n                    userId="${jdbc.username}"\n                    password="${jdbc.password}">\n            </jdbcConnection>\n    \n            \x3c!-- 配置实体类存放路径 --\x3e\n            <javaModelGenerator targetPackage="com.cmcc.myshop.commons.domain" targetProject="src/main/java"/>\n    \n            \x3c!-- 配置 XML 存放路径 --\x3e\n            <sqlMapGenerator targetPackage="mapper" targetProject="src/main/resources"/>\n    \n            \x3c!-- 配置 DAO 存放路径 --\x3e\n            <javaClientGenerator\n                    targetPackage="com.cmcc.myshop.commons.mapper"\n                    targetProject="src/main/java"\n                    type="XMLMAPPER"/>\n    \n            \x3c!-- 配置需要指定生成的数据库和表，% 代表所有表 --\x3e\n            <table catalog="myshop" tableName="%">\n                \x3c!-- mysql 配置 --\x3e\n                <generatedKey column="id" sqlStatement="Mysql" identity="true"/>\n            </table>\n        </context>\n    </generatorConfiguration>\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br")])]),a("h2",{attrs:{id:"配置数据源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置数据源"}},[n._v("#")]),n._v(" 配置数据源")]),n._v(" "),a("p",[n._v("在 "),a("code",[n._v("src/main/resources")]),n._v(" 目录下创建 "),a("code",[n._v("jdbc.properties")]),n._v(" 数据源配置：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    jdbc.driverClass=com.mysql.cj.jdbc.Driver\n    jdbc.connectionURL=jdbc:mysql://192.168.10.150:3306/myshop?useUnicode=true&characterEncoding=utf-8&useSSL=false\n    jdbc.username=root\n    jdbc.password=123456\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])]),a("h2",{attrs:{id:"插件自动生成命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件自动生成命令"}},[n._v("#")]),n._v(" 插件自动生成命令")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    mvn mybatis-generator:generate\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);