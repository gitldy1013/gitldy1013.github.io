(window.webpackJsonp=window.webpackJsonp||[]).push([[569],{1264:function(a,s,n){"use strict";n.r(s);var e=n(5),t=Object(e.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"go语言内置的flag包实现了命令行参数的解析-flag包使得开发命令行工具更为简单。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#go语言内置的flag包实现了命令行参数的解析-flag包使得开发命令行工具更为简单。"}},[a._v("#")]),a._v(" Go语言内置的"),n("code",[a._v("flag")]),a._v("包实现了命令行参数的解析，"),n("code",[a._v("flag")]),a._v("包使得开发命令行工具更为简单。")]),a._v(" "),n("h2",{attrs:{id:"os-args"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#os-args"}},[a._v("#")]),a._v(" os.Args")]),a._v(" "),n("p",[a._v("如果你只是简单的想要获取命令行参数，可以像下面的代码示例一样使用"),n("code",[a._v("os.Args")]),a._v("来获取命令行参数。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('    package main\n    \n    import (\n    \t"fmt"\n    \t"os"\n    )\n    \n    //os.Args demo\n    func main() {\n    \t//os.Args是一个[]string\n    \tif len(os.Args) > 0 {\n    \t\tfor index, arg := range os.Args {\n    \t\t\tfmt.Printf("args[%d]=%v\\n", index, arg)\n    \t\t}\n    \t}\n    }\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br")])]),n("p",[a._v("将上面的代码执行"),n("code",[a._v('go build -o "args_demo"')]),a._v("编译之后，执行：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("    $ ./args_demo a b c d\n    args[0]=./args_demo\n    args[1]=a\n    args[2]=b\n    args[3]=c\n    args[4]=d\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br")])]),n("p",[n("code",[a._v("os.Args")]),a._v("是一个存储命令行参数的字符串切片，它的第一个元素是执行文件的名称。")]),a._v(" "),n("h2",{attrs:{id:"flag包基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flag包基本使用"}},[a._v("#")]),a._v(" flag包基本使用")]),a._v(" "),n("p",[a._v("本文介绍了flag包的常用函数和基本用法，更详细的内容请查看"),n("a",{attrs:{href:"https://studygolang.com/pkgdoc",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),n("OutboundLink")],1),a._v("。")]),a._v(" "),n("h3",{attrs:{id:"导入flag包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导入flag包"}},[a._v("#")]),a._v(" 导入flag包")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("    import flag\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("h3",{attrs:{id:"flag参数类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flag参数类型"}},[a._v("#")]),a._v(" flag参数类型")]),a._v(" "),n("p",[a._v("flag包支持的命令行参数类型有"),n("code",[a._v("bool")]),a._v("、"),n("code",[a._v("int")]),a._v("、"),n("code",[a._v("int64")]),a._v("、"),n("code",[a._v("uint")]),a._v("、"),n("code",[a._v("uint64")]),a._v("、"),n("code",[a._v("float")]),a._v(" "),n("code",[a._v("float64")]),a._v("、"),n("code",[a._v("string")]),a._v("、"),n("code",[a._v("duration")]),a._v("。")]),a._v(" "),n("table",[n("thead",[n("tr",[n("th",[a._v("flag参数")]),a._v(" "),n("th",[a._v("有效值")])])]),a._v(" "),n("tbody",[n("tr",[n("td",[a._v("字符串flag")]),a._v(" "),n("td",[a._v("合法字符串")])]),a._v(" "),n("tr",[n("td",[a._v("整数flag")]),a._v(" "),n("td",[a._v("1234、0664、0x1234等类型，也可以是负数。")])]),a._v(" "),n("tr",[n("td",[a._v("浮点数flag")]),a._v(" "),n("td",[a._v("合法浮点数")])]),a._v(" "),n("tr",[n("td",[a._v("bool类型flag")]),a._v(" "),n("td",[a._v("1, 0, t, f, T, F, true, false, TRUE, FALSE, True, False。")])]),a._v(" "),n("tr",[n("td",[a._v("时间段flag")]),a._v(" "),n("td",[a._v("任何合法的时间段字符串。如”300ms”、”-1.5h”、”2h45m”。合法的单位有”ns”、”us” /“µs”、”ms”、”s”、”m”、”h”。")])])])]),a._v(" "),n("h3",{attrs:{id:"定义命令行flag参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义命令行flag参数"}},[a._v("#")]),a._v(" 定义命令行flag参数")]),a._v(" "),n("p",[a._v("有以下两种常用的定义命令行"),n("code",[a._v("flag")]),a._v("参数的方法。")]),a._v(" "),n("h4",{attrs:{id:"flag-type"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flag-type"}},[a._v("#")]),a._v(" flag.Type()")]),a._v(" "),n("p",[a._v("基本格式如下：")]),a._v(" "),n("p",[n("code",[a._v("flag.Type(flag名, 默认值, 帮助信息)*Type")]),a._v(" 例如我们要定义姓名、年龄、婚否三个命令行参数，我们可以按如下方式定义：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('    name := flag.String("name", "张三", "姓名")\n    age := flag.Int("age", 18, "年龄")\n    married := flag.Bool("married", false, "婚否")\n    delay := flag.Duration("d", 0, "时间间隔")\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[a._v("需要注意的是，此时"),n("code",[a._v("name")]),a._v("、"),n("code",[a._v("age")]),a._v("、"),n("code",[a._v("married")]),a._v("、"),n("code",[a._v("delay")]),a._v("均为对应类型的指针。")]),a._v(" "),n("h4",{attrs:{id:"flag-typevar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flag-typevar"}},[a._v("#")]),a._v(" flag.TypeVar()")]),a._v(" "),n("p",[a._v("基本格式如下： "),n("code",[a._v("flag.TypeVar(Type指针, flag名, 默认值, 帮助信息)")]),a._v(" 例如我们要定义姓名、年龄、婚否三个命令行参数，我们可以按如下方式定义：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('    var name string\n    var age int\n    var married bool\n    var delay time.Duration\n    flag.StringVar(&name, "name", "张三", "姓名")\n    flag.IntVar(&age, "age", 18, "年龄")\n    flag.BoolVar(&married, "married", false, "婚否")\n    flag.DurationVar(&delay, "d", 0, "时间间隔")\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br")])]),n("h3",{attrs:{id:"flag-parse"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flag-parse"}},[a._v("#")]),a._v(" flag.Parse()")]),a._v(" "),n("p",[a._v("通过以上两种方法定义好命令行flag参数后，需要通过调用"),n("code",[a._v("flag.Parse()")]),a._v("来对命令行参数进行解析。")]),a._v(" "),n("p",[a._v("支持的命令行参数格式有以下几种：")]),a._v(" "),n("ul",[n("li",[n("code",[a._v("-flag xxx")]),a._v(" （使用空格，一个"),n("code",[a._v("-")]),a._v("符号）")]),a._v(" "),n("li",[n("code",[a._v("--flag xxx")]),a._v(" （使用空格，两个"),n("code",[a._v("-")]),a._v("符号）")]),a._v(" "),n("li",[n("code",[a._v("-flag=xxx")]),a._v(" （使用等号，一个"),n("code",[a._v("-")]),a._v("符号）")]),a._v(" "),n("li",[n("code",[a._v("--flag=xxx")]),a._v(" （使用等号，两个"),n("code",[a._v("-")]),a._v("符号）")])]),a._v(" "),n("p",[a._v("其中，布尔类型的参数必须使用等号的方式指定。")]),a._v(" "),n("p",[a._v("Flag解析在第一个非flag参数（单个”-“不是flag参数）之前停止，或者在终止符”–“之后停止。")]),a._v(" "),n("h3",{attrs:{id:"flag其他函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flag其他函数"}},[a._v("#")]),a._v(" flag其他函数")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("    flag.Args()  ////返回命令行参数后的其他参数，以[]string类型\n    flag.NArg()  //返回命令行参数后的其他参数个数\n    flag.NFlag() //返回使用的命令行参数个数\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br")])]),n("h3",{attrs:{id:"完整示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#完整示例"}},[a._v("#")]),a._v(" 完整示例")]),a._v(" "),n("h4",{attrs:{id:"定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[a._v("#")]),a._v(" 定义")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('    func main() {\n    \t//定义命令行参数方式1\n    \tvar name string\n    \tvar age int\n    \tvar married bool\n    \tvar delay time.Duration\n    \tflag.StringVar(&name, "name", "张三", "姓名")\n    \tflag.IntVar(&age, "age", 18, "年龄")\n    \tflag.BoolVar(&married, "married", false, "婚否")\n    \tflag.DurationVar(&delay, "d", 0, "延迟的时间间隔")\n    \n    \t//解析命令行参数\n    \tflag.Parse()\n    \tfmt.Println(name, age, married, delay)\n    \t//返回命令行参数后的其他参数\n    \tfmt.Println(flag.Args())\n    \t//返回命令行参数后的其他参数个数\n    \tfmt.Println(flag.NArg())\n    \t//返回使用的命令行参数个数\n    \tfmt.Println(flag.NFlag())\n    }\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br")])]),n("h4",{attrs:{id:"使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),n("p",[a._v("命令行参数使用提示：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('    $ ./flag_demo -help\n    Usage of ./flag_demo:\n      -age int\n            年龄 (default 18)\n      -d duration\n            时间间隔\n      -married\n            婚否\n      -name string\n            姓名 (default "张三")\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br")])]),n("p",[a._v("正常使用命令行flag参数：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("    $ ./flag_demo -name 沙河娜扎 --age 28 -married=false -d=1h30m\n    沙河娜扎 28 false 1h30m0s\n    []\n    0\n    4\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])]),n("p",[a._v("使用非flag命令行参数：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("    $ ./flag_demo a b c\n    张三 18 false 0s\n    [a b c]\n    3\n    0\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);