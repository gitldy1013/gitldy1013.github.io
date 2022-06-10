(window.webpackJsonp=window.webpackJsonp||[]).push([[802],{1498:function(a,t,n){"use strict";n.r(t);var e=n(5),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"maven-pom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven-pom"}},[a._v("#")]),a._v(" Maven POM")]),a._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),n("p",[a._v("POM 代表项目对象模型。它是 Maven 中工作的基本单位，这是一个 XML 文件。它始终保存在该项目基本目录中的 pom.xml 文件。")]),a._v(" "),n("p",[a._v("POM 包含的项目是使用 Maven 来构建的，它用来包含各种配置信息。")]),a._v(" "),n("p",[a._v("POM 也包含了目标和插件。在执行任务或目标时，Maven 会使用当前目录中的 POM。它读取POM得到所需要的配置信息，然后执行目标。部分的配置可以在 POM 使用如下：")]),a._v(" "),n("ul",[n("li",[a._v("project dependencies")]),a._v(" "),n("li",[a._v("plugins")]),a._v(" "),n("li",[a._v("goals")]),a._v(" "),n("li",[a._v("build profiles")]),a._v(" "),n("li",[a._v("project version")]),a._v(" "),n("li",[a._v("developers")]),a._v(" "),n("li",[a._v("mailing list")])]),a._v(" "),n("p",[a._v("创建一个POM之前，应该要先决定项目组(groupId)，它的名字(artifactId)和版本，因为这些属性在项目仓库是唯一标识的。")]),a._v(" "),n("h2",{attrs:{id:"pom-的例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pom-的例子"}},[a._v("#")]),a._v(" POM 的例子")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('    <project xmlns="http://maven.apache.org/POM/4.0.0"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://maven.apache.org/POM/4.0.0\n       http://maven.apache.org/xsd/maven-4.0.0.xsd">\n       <modelVersion>4.0.0</modelVersion>\n       <groupId>com.cmcc</groupId>\n       <artifactId>project</artifactId>\n       <version>1.0</version>\n    <project>\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br")])]),n("p",[a._v("要注意的是，每个项目只有一个 POM 文件")]),a._v(" "),n("ul",[n("li",[a._v("所有的 POM 文件要项目元素必须有三个必填字段: groupId，artifactId，version")]),a._v(" "),n("li",[a._v("在库中的项目符号是："),n("code",[a._v("groupId:artifactId:version")])]),a._v(" "),n("li",[n("code",[a._v("pom.xml")]),a._v(" 的根元素是 project，它有三个主要的子节点。")])]),a._v(" "),n("table",[n("thead",[n("tr",[n("th",[a._v("节点")]),a._v(" "),n("th",[a._v("描述")])])]),a._v(" "),n("tbody",[n("tr",[n("td",[a._v("groupId")]),a._v(" "),n("td",[a._v("这是项目组的编号，这在组织或项目中通常是独一无二的。 例如，一家银行集团 com.company.bank 拥有所有银行相关项目。")])]),a._v(" "),n("tr",[n("td",[a._v("artifactId")]),a._v(" "),n("td",[a._v("这是项目的 ID。这通常是项目的名称。 例如，consumer-banking。 除了 groupId 之外，artifactId 还定义了 artifact 在存储库中的位置。")])]),a._v(" "),n("tr",[n("td",[a._v("version")]),a._v(" "),n("td",[a._v("这是项目的版本。与 groupId 一起使用，artifact 在存储库中用于将版本彼此分离。 例如：com.company.bank:consumer-banking:1.0，com.company.bank:consumer-banking:1.1")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);