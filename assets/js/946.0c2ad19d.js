(window.webpackJsonp=window.webpackJsonp||[]).push([[946],{1641:function(s,a,n){"use strict";n.r(a);var e=n(5),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"附-maven-assembly-插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#附-maven-assembly-插件"}},[s._v("#")]),s._v(" 附：Maven Assembly 插件")]),s._v(" "),n("h2",{attrs:{id:"什么是-assembly-plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是-assembly-plugin"}},[s._v("#")]),s._v(" 什么是 Assembly Plugin")]),s._v(" "),n("p",[s._v("Assembly 插件目的是提供一个把工程依赖元素、模块、网站文档等其他文件存放到单个归档文件里。")]),s._v(" "),n("h2",{attrs:{id:"assembly-支持的归档文件类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#assembly-支持的归档文件类型"}},[s._v("#")]),s._v(" Assembly 支持的归档文件类型")]),s._v(" "),n("ul",[n("li",[s._v("zip")]),s._v(" "),n("li",[s._v("tar.gz")]),s._v(" "),n("li",[s._v("tar.bz2")]),s._v(" "),n("li",[s._v("jar")]),s._v(" "),n("li",[s._v("dir")]),s._v(" "),n("li",[s._v("war")])]),s._v(" "),n("h2",{attrs:{id:"使用步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用步骤"}},[s._v("#")]),s._v(" 使用步骤")]),s._v(" "),n("p",[s._v("此处以将 SkyWalking 探针打包为 "),n("code",[s._v("tar.gz")]),s._v(" 为例，为后期持续集成时构建 Docker 镜像做好准备")]),s._v(" "),n("h3",{attrs:{id:"pom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[s._v("#")]),s._v(" POM")]),s._v(" "),n("p",[s._v("在 "),n("code",[s._v("pom.xml")]),s._v(" 中增加插件配置")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <executions>\n                    \x3c!-- 配置执行器 --\x3e\n                    <execution>\n                        <id>make-assembly</id>\n                        \x3c!-- 绑定到 package 生命周期阶段上 --\x3e\n                        <phase>package</phase>\n                        <goals>\n                            \x3c!-- 只运行一次 --\x3e\n                            <goal>single</goal>\n                        </goals>\n                        <configuration>\n                            <finalName>skywalking</finalName>\n                            <descriptors>\n                                \x3c!-- 配置描述文件路径 --\x3e\n                                <descriptor>src/main/resources/assembly.xml</descriptor>\n                            </descriptors>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("h3",{attrs:{id:"assembly-xml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#assembly-xml"}},[s._v("#")]),s._v(" assembly.xml")]),s._v(" "),n("p",[s._v("创建 "),n("code",[s._v("src/main/resources/assembly.xml")]),s._v(" 配置文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    <assembly>\n        <id>6.0.0-Beta</id>\n        <formats>\n            \x3c!-- 打包的文件格式，支持 zip、tar.gz、tar.bz2、jar、dir、war --\x3e\n            <format>tar.gz</format>\n        </formats>\n        \x3c!-- tar.gz 压缩包下是否生成和项目名相同的根目录，有需要请设置成 true --\x3e\n        <includeBaseDirectory>false</includeBaseDirectory>\n        <dependencySets>\n            <dependencySet>\n                \x3c!-- 是否把本项目添加到依赖文件夹下，有需要请设置成 true --\x3e\n                <useProjectArtifact>false</useProjectArtifact>\n                <outputDirectory>lib</outputDirectory>\n                \x3c!-- 将 scope 为 runtime 的依赖包打包 --\x3e\n                <scope>runtime</scope>\n            </dependencySet>\n        </dependencySets>\n        <fileSets>\n            <fileSet>\n                \x3c!-- 设置需要打包的文件路径 --\x3e\n                <directory>agent</directory>\n                \x3c!-- 打包后的输出路径 --\x3e\n                <outputDirectory></outputDirectory>\n            </fileSet>\n        </fileSets>\n    </assembly>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("h3",{attrs:{id:"打包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[s._v("#")]),s._v(" 打包")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    mvn clean package\n    mvn clean install\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("package：会在 target 目录下创建名为 "),n("code",[s._v("skywalking-6.0.0-Beta.tar.gz")]),s._v(" 的压缩包")]),s._v(" "),n("li",[s._v("install：会在本地仓库目录下创建名为 "),n("code",[s._v("hello-spring-cloud-external-skywalking-1.0.0-SNAPSHOT-6.0.0-Beta.tar.gz")]),s._v(" 的压缩包")])])])}),[],!1,null,null,null);a.default=t.exports}}]);