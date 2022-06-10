(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{1266:function(s,a,e){"use strict";e.r(a);var n=e(5),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"无论是软件开发的调试阶段还是软件上线之后的运行阶段-日志一直都是非常重要的一个环节-我们也应该养成在程序中记录日志的好习惯。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#无论是软件开发的调试阶段还是软件上线之后的运行阶段-日志一直都是非常重要的一个环节-我们也应该养成在程序中记录日志的好习惯。"}},[s._v("#")]),s._v(" 无论是软件开发的调试阶段还是软件上线之后的运行阶段，日志一直都是非常重要的一个环节，我们也应该养成在程序中记录日志的好习惯。")]),s._v(" "),e("h2",{attrs:{id:"log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[s._v("#")]),s._v(" log")]),s._v(" "),e("p",[s._v("Go语言内置的"),e("code",[s._v("log")]),s._v("包实现了简单的日志服务。本文介绍了标准库"),e("code",[s._v("log")]),s._v("的基本使用。")]),s._v(" "),e("h3",{attrs:{id:"使用logger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用logger"}},[s._v("#")]),s._v(" 使用Logger")]),s._v(" "),e("p",[s._v("log包定义了Logger类型，该类型提供了一些格式化输出的方法。本包也提供了一个预定义的“标准”logger，可以通过调用函数"),e("code",[s._v("Print系列")]),s._v("(Print|Printf|Println）、"),e("code",[s._v("Fatal系列")]),s._v("（Fatal|Fatalf|Fatalln）、和"),e("code",[s._v("Panic系列")]),s._v("（Panic|Panicf|Panicln）来使用，比自行创建一个logger对象更容易使用。")]),s._v(" "),e("p",[s._v("例如，我们可以像下面的代码一样直接通过"),e("code",[s._v("log")]),s._v("包来调用上面提到的方法，默认它们会将日志信息打印到终端界面：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    package main\n    \n    import (\n    \t"log"\n    )\n    \n    func main() {\n    \tlog.Println("这是一条很普通的日志。")\n    \tv := "很普通的"\n    \tlog.Printf("这是一条%s日志。\\n", v)\n    \tlog.Fatalln("这是一条会触发fatal的日志。")\n    \tlog.Panicln("这是一条会触发panic的日志。")\n    }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("编译并执行上面的代码会得到如下输出：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    2017/06/19 14:04:17 这是一条很普通的日志。\n    2017/06/19 14:04:17 这是一条很普通的日志。\n    2017/06/19 14:04:17 这是一条会触发fatal的日志。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("logger会打印每条日志信息的日期、时间，默认输出到系统的标准错误。Fatal系列函数会在写入日志信息后调用os.Exit(1)。Panic系列函数会在写入日志信息后panic。")]),s._v(" "),e("h3",{attrs:{id:"配置logger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置logger"}},[s._v("#")]),s._v(" 配置logger")]),s._v(" "),e("h4",{attrs:{id:"标准logger的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标准logger的配置"}},[s._v("#")]),s._v(" 标准logger的配置")]),s._v(" "),e("p",[s._v("默认情况下的logger只会提供日志的时间信息，但是很多情况下我们希望得到更多信息，比如记录该日志的文件名和行号等。"),e("code",[s._v("log")]),s._v("标准库中为我们提供了定制这些设置的方法。")]),s._v(" "),e("p",[e("code",[s._v("log")]),s._v("标准库中的"),e("code",[s._v("Flags")]),s._v("函数会返回标准logger的输出配置，而"),e("code",[s._v("SetFlags")]),s._v("函数用来设置标准logger的输出配置。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    func Flags() int\n    func SetFlags(flag int)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"flag选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flag选项"}},[s._v("#")]),s._v(" flag选项")]),s._v(" "),e("p",[e("code",[s._v("log")]),s._v("标准库提供了如下的flag选项，它们是一系列定义好的常量。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    const (\n        // 控制输出日志信息的细节，不能控制输出的顺序和格式。\n        // 输出的日志在每一项后会有一个冒号分隔：例如2009/01/23 01:23:23.123123 /a/b/c/d.go:23: message\n        Ldate         = 1 << iota     // 日期：2009/01/23\n        Ltime                         // 时间：01:23:23\n        Lmicroseconds                 // 微秒级别的时间：01:23:23.123123（用于增强Ltime位）\n        Llongfile                     // 文件全路径名+行号： /a/b/c/d.go:23\n        Lshortfile                    // 文件名+行号：d.go:23（会覆盖掉Llongfile）\n        LUTC                          // 使用UTC时间\n        LstdFlags     = Ldate | Ltime // 标准logger的初始值\n    )\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("下面我们在记录日志之前先设置一下标准logger的输出选项如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    func main() {\n    \tlog.SetFlags(log.Llongfile | log.Lmicroseconds | log.Ldate)\n    \tlog.Println("这是一条很普通的日志。")\n    }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("编译执行后得到的输出结果如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    2020/05/19 16:33:46.231852 .../log_demo/main.go:11: 这是一条很普通的日志。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"配置日志前缀"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置日志前缀"}},[s._v("#")]),s._v(" 配置日志前缀")]),s._v(" "),e("p",[e("code",[s._v("log")]),s._v("标准库中还提供了关于日志信息前缀的两个方法：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    func Prefix() string\n    func SetPrefix(prefix string)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("其中"),e("code",[s._v("Prefix")]),s._v("函数用来查看标准logger的输出前缀，"),e("code",[s._v("SetPrefix")]),s._v("函数用来设置输出前缀。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    func main() {\n    \tlog.SetFlags(log.Llongfile | log.Lmicroseconds | log.Ldate)\n    \tlog.Println("这是一条很普通的日志。")\n    \tlog.SetPrefix("[小桃子]")\n    \tlog.Println("这是一条很普通的日志。")\n    }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("上面的代码输出如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    [小桃子]2020/05/19 16:35:46.367862 .../log_demo/main.go:13: 这是一条很普通的日志。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这样我们就能够在代码中为我们的日志信息添加指定的前缀，方便之后对日志信息进行检索和处理。")]),s._v(" "),e("h3",{attrs:{id:"配置日志输出位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置日志输出位置"}},[s._v("#")]),s._v(" 配置日志输出位置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    func SetOutput(w io.Writer)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("code",[s._v("SetOutput")]),s._v("函数用来设置标准logger的输出目的地，默认是标准错误输出。")]),s._v(" "),e("p",[s._v("例如，下面的代码会把日志输出到同目录下的"),e("code",[s._v("xx.log")]),s._v("文件中。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    func main() {\n    \tlogFile, err := os.OpenFile("./xx.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)\n    \tif err != nil {\n    \t\tfmt.Println("open log file failed, err:", err)\n    \t\treturn\n    \t}\n    \tlog.SetOutput(logFile)\n    \tlog.SetFlags(log.Llongfile | log.Lmicroseconds | log.Ldate)\n    \tlog.Println("这是一条很普通的日志。")\n    \tlog.SetPrefix("[小王子]")\n    \tlog.Println("这是一条很普通的日志。")\n    }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("如果你要使用标准的logger，我们通常会把上面的配置操作写到"),e("code",[s._v("init")]),s._v("函数中。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    func init() {\n    \tlogFile, err := os.OpenFile("./xx.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)\n    \tif err != nil {\n    \t\tfmt.Println("open log file failed, err:", err)\n    \t\treturn\n    \t}\n    \tlog.SetOutput(logFile)\n    \tlog.SetFlags(log.Llongfile | log.Lmicroseconds | log.Ldate)\n    }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h3",{attrs:{id:"创建logger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建logger"}},[s._v("#")]),s._v(" 创建logger")]),s._v(" "),e("p",[e("code",[s._v("log")]),s._v("标准库中还提供了一个创建新logger对象的构造函数–"),e("code",[s._v("New")]),s._v("，支持我们创建自己的logger示例。"),e("code",[s._v("New")]),s._v("函数的签名如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    func New(out io.Writer, prefix string, flag int) *Logger\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("New创建一个Logger对象。其中，参数out设置日志信息写入的目的地。参数prefix会添加到生成的每一条日志前面。参数flag定义日志的属性（时间、文件等等）。")]),s._v(" "),e("p",[s._v("举个例子：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    func main() {\n    \tlogger := log.New(os.Stdout, "<New>", log.Lshortfile|log.Ldate|log.Ltime)\n    \tlogger.Println("这是自定义的logger记录的日志。")\n    }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("将上面的代码编译执行之后，得到结果如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    <New>2017/06/19 14:06:51 main.go:34: 这是自定义的logger记录的日志。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("p",[s._v("Go内置的log库功能有限，例如无法满足记录不同级别日志的情况，我们在实际的项目中根据自己的需要选择使用第三方的日志库，如"),e("a",{attrs:{href:"https://github.com/sirupsen/logrus",target:"_blank",rel:"noopener noreferrer"}},[s._v("logrus"),e("OutboundLink")],1),s._v("、"),e("a",{attrs:{href:"https://github.com/uber-go/zap",target:"_blank",rel:"noopener noreferrer"}},[s._v("zap"),e("OutboundLink")],1),s._v("等。")])])}),[],!1,null,null,null);a.default=t.exports}}]);