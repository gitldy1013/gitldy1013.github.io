(window.webpackJsonp=window.webpackJsonp||[]).push([[1e3],{1696:function(n,s,a){"use strict";a.r(s);var e=a(5),r=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"创建统一的依赖管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建统一的依赖管理"}},[n._v("#")]),n._v(" 创建统一的依赖管理")]),n._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[n._v("#")]),n._v(" 概述")]),n._v(" "),a("p",[n._v("Spring Cloud 项目都是基于 Spring Boot 进行开发，并且都是使用 Maven 做项目管理工具。在实际开发中，我们一般都会创建一个依赖管理项目作为 Maven 的 Parent 项目使用，这样做可以极大的方便我们对 Jar 包版本的统一管理。")]),n._v(" "),a("h2",{attrs:{id:"创建依赖管理项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建依赖管理项目"}},[n._v("#")]),n._v(" 创建依赖管理项目")]),n._v(" "),a("p",[n._v("创建一个工程名为 "),a("code",[n._v("hello-spring-cloud-dependencies")]),n._v(" 的项目，"),a("code",[n._v("pom.xml")]),n._v(" 配置文件如下：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    <?xml version="1.0" encoding="UTF-8"?>\n    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n        <modelVersion>4.0.0</modelVersion>\n    \n        <parent>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-parent</artifactId>\n            <version>2.0.2.RELEASE</version>\n        </parent>\n    \n        <groupId>com.cmcc</groupId>\n        <artifactId>hello-spring-cloud-dependencies</artifactId>\n        <version>1.0.0-SNAPSHOT</version>\n        <packaging>pom</packaging>\n    \n        <name>hello-spring-cloud-dependencies</name>\n        <url>http://www.cmcc.com</url>\n        <inceptionYear>2018-Now</inceptionYear>\n    \n        <properties>\n            \x3c!-- Environment Settings --\x3e\n            <java.version>1.8</java.version>\n            <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n            <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n    \n            \x3c!-- Spring Settings --\x3e\n            <spring-cloud.version>Finchley.RC1</spring-cloud.version>\n        </properties>\n    \n        <dependencyManagement>\n            <dependencies>\n                <dependency>\n                    <groupId>org.springframework.cloud</groupId>\n                    <artifactId>spring-cloud-dependencies</artifactId>\n                    <version>${spring-cloud.version}</version>\n                    <type>pom</type>\n                    <scope>import</scope>\n                </dependency>\n            </dependencies>\n        </dependencyManagement>\n    \n        <build>\n            <plugins>\n                \x3c!-- Compiler 插件, 设定 JDK 版本 --\x3e\n                <plugin>\n                    <groupId>org.apache.maven.plugins</groupId>\n                    <artifactId>maven-compiler-plugin</artifactId>\n                    <configuration>\n                        <showWarnings>true</showWarnings>\n                    </configuration>\n                </plugin>\n    \n                \x3c!-- 打包 jar 文件时，配置 manifest 文件，加入 lib 包的 jar 依赖 --\x3e\n                <plugin>\n                    <groupId>org.apache.maven.plugins</groupId>\n                    <artifactId>maven-jar-plugin</artifactId>\n                    <configuration>\n                        <archive>\n                            <addMavenDescriptor>false</addMavenDescriptor>\n                        </archive>\n                    </configuration>\n                    <executions>\n                        <execution>\n                            <configuration>\n                                <archive>\n                                    <manifest>\n                                        \x3c!-- Add directory entries --\x3e\n                                        <addDefaultImplementationEntries>true</addDefaultImplementationEntries>\n                                        <addDefaultSpecificationEntries>true</addDefaultSpecificationEntries>\n                                        <addClasspath>true</addClasspath>\n                                    </manifest>\n                                </archive>\n                            </configuration>\n                        </execution>\n                    </executions>\n                </plugin>\n    \n                \x3c!-- resource --\x3e\n                <plugin>\n                    <groupId>org.apache.maven.plugins</groupId>\n                    <artifactId>maven-resources-plugin</artifactId>\n                </plugin>\n    \n                \x3c!-- install --\x3e\n                <plugin>\n                    <groupId>org.apache.maven.plugins</groupId>\n                    <artifactId>maven-install-plugin</artifactId>\n                </plugin>\n    \n                \x3c!-- clean --\x3e\n                <plugin>\n                    <groupId>org.apache.maven.plugins</groupId>\n                    <artifactId>maven-clean-plugin</artifactId>\n                </plugin>\n    \n                \x3c!-- ant --\x3e\n                <plugin>\n                    <groupId>org.apache.maven.plugins</groupId>\n                    <artifactId>maven-antrun-plugin</artifactId>\n                </plugin>\n    \n                \x3c!-- dependency --\x3e\n                <plugin>\n                    <groupId>org.apache.maven.plugins</groupId>\n                    <artifactId>maven-dependency-plugin</artifactId>\n                </plugin>\n            </plugins>\n    \n            <pluginManagement>\n                <plugins>\n                    \x3c!-- Java Document Generate --\x3e\n                    <plugin>\n                        <groupId>org.apache.maven.plugins</groupId>\n                        <artifactId>maven-javadoc-plugin</artifactId>\n                        <executions>\n                            <execution>\n                                <phase>prepare-package</phase>\n                                <goals>\n                                    <goal>jar</goal>\n                                </goals>\n                            </execution>\n                        </executions>\n                    </plugin>\n    \n                    \x3c!-- YUI Compressor (CSS/JS压缩) --\x3e\n                    <plugin>\n                        <groupId>net.alchim31.maven</groupId>\n                        <artifactId>yuicompressor-maven-plugin</artifactId>\n                        <version>1.5.1</version>\n                        <executions>\n                            <execution>\n                                <phase>prepare-package</phase>\n                                <goals>\n                                    <goal>compress</goal>\n                                </goals>\n                            </execution>\n                        </executions>\n                        <configuration>\n                            <encoding>UTF-8</encoding>\n                            <jswarn>false</jswarn>\n                            <nosuffix>true</nosuffix>\n                            <linebreakpos>30000</linebreakpos>\n                            <force>true</force>\n                            <includes>\n                                <include>**/*.js</include>\n                                <include>**/*.css</include>\n                            </includes>\n                            <excludes>\n                                <exclude>**/*.min.js</exclude>\n                                <exclude>**/*.min.css</exclude>\n                            </excludes>\n                        </configuration>\n                    </plugin>\n                </plugins>\n            </pluginManagement>\n    \n            \x3c!-- 资源文件配置 --\x3e\n            <resources>\n                <resource>\n                    <directory>src/main/java</directory>\n                    <excludes>\n                        <exclude>**/*.java</exclude>\n                    </excludes>\n                </resource>\n                <resource>\n                    <directory>src/main/resources</directory>\n                </resource>\n            </resources>\n        </build>\n    \n        <repositories>\n            <repository>\n                <id>aliyun-repos</id>\n                <name>Aliyun Repository</name>\n                <url>http://maven.aliyun.com/nexus/content/groups/public</url>\n                <releases>\n                    <enabled>true</enabled>\n                </releases>\n                <snapshots>\n                    <enabled>false</enabled>\n                </snapshots>\n            </repository>\n    \n            <repository>\n                <id>sonatype-repos</id>\n                <name>Sonatype Repository</name>\n                <url>https://oss.sonatype.org/content/groups/public</url>\n                <releases>\n                    <enabled>true</enabled>\n                </releases>\n                <snapshots>\n                    <enabled>false</enabled>\n                </snapshots>\n            </repository>\n            <repository>\n                <id>sonatype-repos-s</id>\n                <name>Sonatype Repository</name>\n                <url>https://oss.sonatype.org/content/repositories/snapshots</url>\n                <releases>\n                    <enabled>false</enabled>\n                </releases>\n                <snapshots>\n                    <enabled>true</enabled>\n                </snapshots>\n            </repository>\n    \n            <repository>\n                <id>spring-snapshots</id>\n                <name>Spring Snapshots</name>\n                <url>https://repo.spring.io/snapshot</url>\n                <snapshots>\n                    <enabled>true</enabled>\n                </snapshots>\n            </repository>\n            <repository>\n                <id>spring-milestones</id>\n                <name>Spring Milestones</name>\n                <url>https://repo.spring.io/milestone</url>\n                <snapshots>\n                    <enabled>false</enabled>\n                </snapshots>\n            </repository>\n        </repositories>\n    \n        <pluginRepositories>\n            <pluginRepository>\n                <id>aliyun-repos</id>\n                <name>Aliyun Repository</name>\n                <url>http://maven.aliyun.com/nexus/content/groups/public</url>\n                <releases>\n                    <enabled>true</enabled>\n                </releases>\n                <snapshots>\n                    <enabled>false</enabled>\n                </snapshots>\n            </pluginRepository>\n        </pluginRepositories>\n    </project>\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br"),a("span",{staticClass:"line-number"},[n._v("68")]),a("br"),a("span",{staticClass:"line-number"},[n._v("69")]),a("br"),a("span",{staticClass:"line-number"},[n._v("70")]),a("br"),a("span",{staticClass:"line-number"},[n._v("71")]),a("br"),a("span",{staticClass:"line-number"},[n._v("72")]),a("br"),a("span",{staticClass:"line-number"},[n._v("73")]),a("br"),a("span",{staticClass:"line-number"},[n._v("74")]),a("br"),a("span",{staticClass:"line-number"},[n._v("75")]),a("br"),a("span",{staticClass:"line-number"},[n._v("76")]),a("br"),a("span",{staticClass:"line-number"},[n._v("77")]),a("br"),a("span",{staticClass:"line-number"},[n._v("78")]),a("br"),a("span",{staticClass:"line-number"},[n._v("79")]),a("br"),a("span",{staticClass:"line-number"},[n._v("80")]),a("br"),a("span",{staticClass:"line-number"},[n._v("81")]),a("br"),a("span",{staticClass:"line-number"},[n._v("82")]),a("br"),a("span",{staticClass:"line-number"},[n._v("83")]),a("br"),a("span",{staticClass:"line-number"},[n._v("84")]),a("br"),a("span",{staticClass:"line-number"},[n._v("85")]),a("br"),a("span",{staticClass:"line-number"},[n._v("86")]),a("br"),a("span",{staticClass:"line-number"},[n._v("87")]),a("br"),a("span",{staticClass:"line-number"},[n._v("88")]),a("br"),a("span",{staticClass:"line-number"},[n._v("89")]),a("br"),a("span",{staticClass:"line-number"},[n._v("90")]),a("br"),a("span",{staticClass:"line-number"},[n._v("91")]),a("br"),a("span",{staticClass:"line-number"},[n._v("92")]),a("br"),a("span",{staticClass:"line-number"},[n._v("93")]),a("br"),a("span",{staticClass:"line-number"},[n._v("94")]),a("br"),a("span",{staticClass:"line-number"},[n._v("95")]),a("br"),a("span",{staticClass:"line-number"},[n._v("96")]),a("br"),a("span",{staticClass:"line-number"},[n._v("97")]),a("br"),a("span",{staticClass:"line-number"},[n._v("98")]),a("br"),a("span",{staticClass:"line-number"},[n._v("99")]),a("br"),a("span",{staticClass:"line-number"},[n._v("100")]),a("br"),a("span",{staticClass:"line-number"},[n._v("101")]),a("br"),a("span",{staticClass:"line-number"},[n._v("102")]),a("br"),a("span",{staticClass:"line-number"},[n._v("103")]),a("br"),a("span",{staticClass:"line-number"},[n._v("104")]),a("br"),a("span",{staticClass:"line-number"},[n._v("105")]),a("br"),a("span",{staticClass:"line-number"},[n._v("106")]),a("br"),a("span",{staticClass:"line-number"},[n._v("107")]),a("br"),a("span",{staticClass:"line-number"},[n._v("108")]),a("br"),a("span",{staticClass:"line-number"},[n._v("109")]),a("br"),a("span",{staticClass:"line-number"},[n._v("110")]),a("br"),a("span",{staticClass:"line-number"},[n._v("111")]),a("br"),a("span",{staticClass:"line-number"},[n._v("112")]),a("br"),a("span",{staticClass:"line-number"},[n._v("113")]),a("br"),a("span",{staticClass:"line-number"},[n._v("114")]),a("br"),a("span",{staticClass:"line-number"},[n._v("115")]),a("br"),a("span",{staticClass:"line-number"},[n._v("116")]),a("br"),a("span",{staticClass:"line-number"},[n._v("117")]),a("br"),a("span",{staticClass:"line-number"},[n._v("118")]),a("br"),a("span",{staticClass:"line-number"},[n._v("119")]),a("br"),a("span",{staticClass:"line-number"},[n._v("120")]),a("br"),a("span",{staticClass:"line-number"},[n._v("121")]),a("br"),a("span",{staticClass:"line-number"},[n._v("122")]),a("br"),a("span",{staticClass:"line-number"},[n._v("123")]),a("br"),a("span",{staticClass:"line-number"},[n._v("124")]),a("br"),a("span",{staticClass:"line-number"},[n._v("125")]),a("br"),a("span",{staticClass:"line-number"},[n._v("126")]),a("br"),a("span",{staticClass:"line-number"},[n._v("127")]),a("br"),a("span",{staticClass:"line-number"},[n._v("128")]),a("br"),a("span",{staticClass:"line-number"},[n._v("129")]),a("br"),a("span",{staticClass:"line-number"},[n._v("130")]),a("br"),a("span",{staticClass:"line-number"},[n._v("131")]),a("br"),a("span",{staticClass:"line-number"},[n._v("132")]),a("br"),a("span",{staticClass:"line-number"},[n._v("133")]),a("br"),a("span",{staticClass:"line-number"},[n._v("134")]),a("br"),a("span",{staticClass:"line-number"},[n._v("135")]),a("br"),a("span",{staticClass:"line-number"},[n._v("136")]),a("br"),a("span",{staticClass:"line-number"},[n._v("137")]),a("br"),a("span",{staticClass:"line-number"},[n._v("138")]),a("br"),a("span",{staticClass:"line-number"},[n._v("139")]),a("br"),a("span",{staticClass:"line-number"},[n._v("140")]),a("br"),a("span",{staticClass:"line-number"},[n._v("141")]),a("br"),a("span",{staticClass:"line-number"},[n._v("142")]),a("br"),a("span",{staticClass:"line-number"},[n._v("143")]),a("br"),a("span",{staticClass:"line-number"},[n._v("144")]),a("br"),a("span",{staticClass:"line-number"},[n._v("145")]),a("br"),a("span",{staticClass:"line-number"},[n._v("146")]),a("br"),a("span",{staticClass:"line-number"},[n._v("147")]),a("br"),a("span",{staticClass:"line-number"},[n._v("148")]),a("br"),a("span",{staticClass:"line-number"},[n._v("149")]),a("br"),a("span",{staticClass:"line-number"},[n._v("150")]),a("br"),a("span",{staticClass:"line-number"},[n._v("151")]),a("br"),a("span",{staticClass:"line-number"},[n._v("152")]),a("br"),a("span",{staticClass:"line-number"},[n._v("153")]),a("br"),a("span",{staticClass:"line-number"},[n._v("154")]),a("br"),a("span",{staticClass:"line-number"},[n._v("155")]),a("br"),a("span",{staticClass:"line-number"},[n._v("156")]),a("br"),a("span",{staticClass:"line-number"},[n._v("157")]),a("br"),a("span",{staticClass:"line-number"},[n._v("158")]),a("br"),a("span",{staticClass:"line-number"},[n._v("159")]),a("br"),a("span",{staticClass:"line-number"},[n._v("160")]),a("br"),a("span",{staticClass:"line-number"},[n._v("161")]),a("br"),a("span",{staticClass:"line-number"},[n._v("162")]),a("br"),a("span",{staticClass:"line-number"},[n._v("163")]),a("br"),a("span",{staticClass:"line-number"},[n._v("164")]),a("br"),a("span",{staticClass:"line-number"},[n._v("165")]),a("br"),a("span",{staticClass:"line-number"},[n._v("166")]),a("br"),a("span",{staticClass:"line-number"},[n._v("167")]),a("br"),a("span",{staticClass:"line-number"},[n._v("168")]),a("br"),a("span",{staticClass:"line-number"},[n._v("169")]),a("br"),a("span",{staticClass:"line-number"},[n._v("170")]),a("br"),a("span",{staticClass:"line-number"},[n._v("171")]),a("br"),a("span",{staticClass:"line-number"},[n._v("172")]),a("br"),a("span",{staticClass:"line-number"},[n._v("173")]),a("br"),a("span",{staticClass:"line-number"},[n._v("174")]),a("br"),a("span",{staticClass:"line-number"},[n._v("175")]),a("br"),a("span",{staticClass:"line-number"},[n._v("176")]),a("br"),a("span",{staticClass:"line-number"},[n._v("177")]),a("br"),a("span",{staticClass:"line-number"},[n._v("178")]),a("br"),a("span",{staticClass:"line-number"},[n._v("179")]),a("br"),a("span",{staticClass:"line-number"},[n._v("180")]),a("br"),a("span",{staticClass:"line-number"},[n._v("181")]),a("br"),a("span",{staticClass:"line-number"},[n._v("182")]),a("br"),a("span",{staticClass:"line-number"},[n._v("183")]),a("br"),a("span",{staticClass:"line-number"},[n._v("184")]),a("br"),a("span",{staticClass:"line-number"},[n._v("185")]),a("br"),a("span",{staticClass:"line-number"},[n._v("186")]),a("br"),a("span",{staticClass:"line-number"},[n._v("187")]),a("br"),a("span",{staticClass:"line-number"},[n._v("188")]),a("br"),a("span",{staticClass:"line-number"},[n._v("189")]),a("br"),a("span",{staticClass:"line-number"},[n._v("190")]),a("br"),a("span",{staticClass:"line-number"},[n._v("191")]),a("br"),a("span",{staticClass:"line-number"},[n._v("192")]),a("br"),a("span",{staticClass:"line-number"},[n._v("193")]),a("br"),a("span",{staticClass:"line-number"},[n._v("194")]),a("br"),a("span",{staticClass:"line-number"},[n._v("195")]),a("br"),a("span",{staticClass:"line-number"},[n._v("196")]),a("br"),a("span",{staticClass:"line-number"},[n._v("197")]),a("br"),a("span",{staticClass:"line-number"},[n._v("198")]),a("br"),a("span",{staticClass:"line-number"},[n._v("199")]),a("br"),a("span",{staticClass:"line-number"},[n._v("200")]),a("br"),a("span",{staticClass:"line-number"},[n._v("201")]),a("br"),a("span",{staticClass:"line-number"},[n._v("202")]),a("br"),a("span",{staticClass:"line-number"},[n._v("203")]),a("br"),a("span",{staticClass:"line-number"},[n._v("204")]),a("br"),a("span",{staticClass:"line-number"},[n._v("205")]),a("br"),a("span",{staticClass:"line-number"},[n._v("206")]),a("br"),a("span",{staticClass:"line-number"},[n._v("207")]),a("br"),a("span",{staticClass:"line-number"},[n._v("208")]),a("br"),a("span",{staticClass:"line-number"},[n._v("209")]),a("br"),a("span",{staticClass:"line-number"},[n._v("210")]),a("br"),a("span",{staticClass:"line-number"},[n._v("211")]),a("br"),a("span",{staticClass:"line-number"},[n._v("212")]),a("br"),a("span",{staticClass:"line-number"},[n._v("213")]),a("br"),a("span",{staticClass:"line-number"},[n._v("214")]),a("br"),a("span",{staticClass:"line-number"},[n._v("215")]),a("br"),a("span",{staticClass:"line-number"},[n._v("216")]),a("br"),a("span",{staticClass:"line-number"},[n._v("217")]),a("br"),a("span",{staticClass:"line-number"},[n._v("218")]),a("br"),a("span",{staticClass:"line-number"},[n._v("219")]),a("br"),a("span",{staticClass:"line-number"},[n._v("220")]),a("br"),a("span",{staticClass:"line-number"},[n._v("221")]),a("br"),a("span",{staticClass:"line-number"},[n._v("222")]),a("br"),a("span",{staticClass:"line-number"},[n._v("223")]),a("br"),a("span",{staticClass:"line-number"},[n._v("224")]),a("br"),a("span",{staticClass:"line-number"},[n._v("225")]),a("br"),a("span",{staticClass:"line-number"},[n._v("226")]),a("br"),a("span",{staticClass:"line-number"},[n._v("227")]),a("br"),a("span",{staticClass:"line-number"},[n._v("228")]),a("br"),a("span",{staticClass:"line-number"},[n._v("229")]),a("br"),a("span",{staticClass:"line-number"},[n._v("230")]),a("br"),a("span",{staticClass:"line-number"},[n._v("231")]),a("br"),a("span",{staticClass:"line-number"},[n._v("232")]),a("br"),a("span",{staticClass:"line-number"},[n._v("233")]),a("br"),a("span",{staticClass:"line-number"},[n._v("234")]),a("br"),a("span",{staticClass:"line-number"},[n._v("235")]),a("br"),a("span",{staticClass:"line-number"},[n._v("236")]),a("br"),a("span",{staticClass:"line-number"},[n._v("237")]),a("br"),a("span",{staticClass:"line-number"},[n._v("238")]),a("br"),a("span",{staticClass:"line-number"},[n._v("239")]),a("br")])]),a("ul",[a("li",[n._v("parent：继承了 Spring Boot 的 Parent，表示我们是一个 Spring Boot 工程")]),n._v(" "),a("li",[n._v("package："),a("code",[n._v("pom")]),n._v("，表示该项目仅当做依赖项目，没有具体的实现代码")]),n._v(" "),a("li",[a("code",[n._v("spring-cloud-dependencies")]),n._v("：在 "),a("code",[n._v("properties")]),n._v(" 配置中预定义了版本号为 "),a("code",[n._v("Finchley.RC1")]),n._v(" ，表示我们的 Spring Cloud 使用的是 F 版")]),n._v(" "),a("li",[n._v("build：配置了项目所需的各种插件")]),n._v(" "),a("li",[n._v("repositories：配置项目下载依赖时的第三方库")])]),n._v(" "),a("p",[n._v("在实际开发中，我们所有的项目都会依赖这个 "),a("code",[n._v("dependencies")]),n._v(" 项目，整个项目周期中的所有第三方依赖的版本也都由该项目进行管理。")])])}),[],!1,null,null,null);s.default=r.exports}}]);