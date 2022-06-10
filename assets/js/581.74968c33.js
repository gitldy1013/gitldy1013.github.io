(window.webpackJsonp=window.webpackJsonp||[]).push([[581],{1279:function(t,s,n){"use strict";n.r(s);var a=n(5),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"go语言反射的意义和基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#go语言反射的意义和基本使用"}},[t._v("#")]),t._v(" Go语言反射的意义和基本使用")]),t._v(" "),n("h2",{attrs:{id:"变量的内在机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#变量的内在机制"}},[t._v("#")]),t._v(" 变量的内在机制")]),t._v(" "),n("p",[t._v("Go语言中的变量是分为两部分的:")]),t._v(" "),n("ul",[n("li",[t._v("类型信息：预先定义好的元信息。")]),t._v(" "),n("li",[t._v("值信息：程序运行过程中可动态变化的。")])]),t._v(" "),n("h2",{attrs:{id:"反射介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#反射介绍"}},[t._v("#")]),t._v(" 反射介绍")]),t._v(" "),n("p",[t._v("反射是指在程序运行期对程序本身进行访问和修改的能力。程序在编译时，变量被转换为内存地址，变量名不会被编译器写入到可执行部分。在运行程序时，程序无法获取自身的信息。")]),t._v(" "),n("p",[t._v("支持反射的语言可以在程序编译期将变量的反射信息，如字段名称、类型信息、结构体信息等整合到可执行文件中，并给程序提供接口访问反射信息，这样就可以在程序运行期获取类型的反射信息，并且有能力修改它们。")]),t._v(" "),n("p",[t._v("Go程序在运行期使用reflect包访问程序的反射信息。")]),t._v(" "),n("p",[t._v("在上一篇博客中我们介绍了空接口。 空接口可以存储任意类型的变量，那我们如何知道这个空接口保存的数据是什么呢？ 反射就是在运行时动态的获取一个变量的类型信息和值信息。")]),t._v(" "),n("h2",{attrs:{id:"reflect包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reflect包"}},[t._v("#")]),t._v(" reflect包")]),t._v(" "),n("p",[t._v("在Go语言的反射机制中，任何接口值都由是"),n("code",[t._v("一个具体类型")]),t._v("和"),n("code",[t._v("具体类型的值")]),t._v("两部分组成的(我们在上一篇接口的博客中有介绍相关概念)。 在Go语言中反射的相关功能由内置的reflect包提供，任意接口值在反射中都可以理解为由"),n("code",[t._v("reflect.Type")]),t._v("和"),n("code",[t._v("reflect.Value")]),t._v("两部分组成，并且reflect包提供了"),n("code",[t._v("reflect.TypeOf")]),t._v("和"),n("code",[t._v("reflect.ValueOf")]),t._v("两个函数来获取任意对象的Value和Type。")]),t._v(" "),n("h3",{attrs:{id:"typeof"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typeof"}},[t._v("#")]),t._v(" TypeOf")]),t._v(" "),n("p",[t._v("在Go语言中，使用"),n("code",[t._v("reflect.TypeOf()")]),t._v("函数可以获得任意值的类型对象（reflect.Type），程序通过类型对象可以访问任意值的类型信息。")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    package main\n    \n    import (\n    \t"fmt"\n    \t"reflect"\n    )\n    \n    func reflectType(x interface{}) {\n    \tv := reflect.TypeOf(x)\n    \tfmt.Printf("type:%v\\n", v)\n    }\n    func main() {\n    \tvar a float32 = 3.14\n    \treflectType(a) // type:float32\n    \tvar b int64 = 100\n    \treflectType(b) // type:int64\n    }\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br")])]),n("h4",{attrs:{id:"type-name和type-kind"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#type-name和type-kind"}},[t._v("#")]),t._v(" type name和type kind")]),t._v(" "),n("p",[t._v("在反射中关于类型还划分为两种："),n("code",[t._v("类型（Type）")]),t._v("和"),n("code",[t._v("种类（Kind）")]),t._v("。因为在Go语言中我们可以使用type关键字构造很多自定义类型，而"),n("code",[t._v("种类（Kind）")]),t._v("就是指底层的类型，但在反射中，当需要区分指针、结构体等大品种的类型时，就会用到"),n("code",[t._v("种类（Kind）")]),t._v("。 举个例子，我们定义了两个指针类型和两个结构体类型，通过反射查看它们的类型和种类。")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    package main\n    \n    import (\n    \t"fmt"\n    \t"reflect"\n    )\n    \n    type myInt int64\n    \n    func reflectType(x interface{}) {\n    \tt := reflect.TypeOf(x)\n    \tfmt.Printf("type:%v kind:%v\\n", t.Name(), t.Kind())\n    }\n    \n    func main() {\n    \tvar a *float32 // 指针\n    \tvar b myInt    // 自定义类型\n    \tvar c rune     // 类型别名\n    \treflectType(a) // type: kind:ptr\n    \treflectType(b) // type:myInt kind:int64\n    \treflectType(c) // type:int32 kind:int32\n    \n    \ttype person struct {\n    \t\tname string\n    \t\tage  int\n    \t}\n    \ttype book struct{ title string }\n    \tvar d = person{\n    \t\tname: "沙河小王子",\n    \t\tage:  18,\n    \t}\n    \tvar e = book{title: "《跟小王子学Go语言》"}\n    \treflectType(d) // type:person kind:struct\n    \treflectType(e) // type:book kind:struct\n    }\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br")])]),n("p",[t._v("Go语言的反射中像数组、切片、Map、指针等类型的变量，它们的"),n("code",[t._v(".Name()")]),t._v("都是返回"),n("code",[t._v("空")]),t._v("。")]),t._v(" "),n("p",[t._v("在"),n("code",[t._v("reflect")]),t._v("包中定义的Kind类型如下：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    type Kind uint\n    const (\n        Invalid Kind = iota  // 非法类型\n        Bool                 // 布尔型\n        Int                  // 有符号整型\n        Int8                 // 有符号8位整型\n        Int16                // 有符号16位整型\n        Int32                // 有符号32位整型\n        Int64                // 有符号64位整型\n        Uint                 // 无符号整型\n        Uint8                // 无符号8位整型\n        Uint16               // 无符号16位整型\n        Uint32               // 无符号32位整型\n        Uint64               // 无符号64位整型\n        Uintptr              // 指针\n        Float32              // 单精度浮点数\n        Float64              // 双精度浮点数\n        Complex64            // 64位复数类型\n        Complex128           // 128位复数类型\n        Array                // 数组\n        Chan                 // 通道\n        Func                 // 函数\n        Interface            // 接口\n        Map                  // 映射\n        Ptr                  // 指针\n        Slice                // 切片\n        String               // 字符串\n        Struct               // 结构体\n        UnsafePointer        // 底层指针\n    )\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br")])]),n("h3",{attrs:{id:"valueof"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#valueof"}},[t._v("#")]),t._v(" ValueOf")]),t._v(" "),n("p",[n("code",[t._v("reflect.ValueOf()")]),t._v("返回的是"),n("code",[t._v("reflect.Value")]),t._v("类型，其中包含了原始值的值信息。"),n("code",[t._v("reflect.Value")]),t._v("与原始值之间可以互相转换。")]),t._v(" "),n("p",[n("code",[t._v("reflect.Value")]),t._v("类型提供的获取原始值的方法如下：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("方法")]),t._v(" "),n("th",[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Interface() interface {}")]),t._v(" "),n("td",[t._v("将值以 interface{} 类型返回，可以通过类型断言转换为指定类型")])]),t._v(" "),n("tr",[n("td",[t._v("Int() int64")]),t._v(" "),n("td",[t._v("将值以 int 类型返回，所有有符号整型均可以此方式返回")])]),t._v(" "),n("tr",[n("td",[t._v("Uint() uint64")]),t._v(" "),n("td",[t._v("将值以 uint 类型返回，所有无符号整型均可以此方式返回")])]),t._v(" "),n("tr",[n("td",[t._v("Float() float64")]),t._v(" "),n("td",[t._v("将值以双精度（float64）类型返回，所有浮点数（float32、float64）均可以此方式返回")])]),t._v(" "),n("tr",[n("td",[t._v("Bool() bool")]),t._v(" "),n("td",[t._v("将值以 bool 类型返回")])]),t._v(" "),n("tr",[n("td",[t._v("Bytes() []bytes")]),t._v(" "),n("td",[t._v("将值以字节数组 []bytes 类型返回")])]),t._v(" "),n("tr",[n("td",[t._v("String() string")]),t._v(" "),n("td",[t._v("将值以字符串类型返回")])])])]),t._v(" "),n("h4",{attrs:{id:"通过反射获取值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过反射获取值"}},[t._v("#")]),t._v(" 通过反射获取值")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    func reflectValue(x interface{}) {\n    \tv := reflect.ValueOf(x)\n    \tk := v.Kind()\n    \tswitch k {\n    \tcase reflect.Int64:\n    \t\t// v.Int()从反射中获取整型的原始值，然后通过int64()强制类型转换\n    \t\tfmt.Printf("type is int64, value is %d\\n", int64(v.Int()))\n    \tcase reflect.Float32:\n    \t\t// v.Float()从反射中获取浮点型的原始值，然后通过float32()强制类型转换\n    \t\tfmt.Printf("type is float32, value is %f\\n", float32(v.Float()))\n    \tcase reflect.Float64:\n    \t\t// v.Float()从反射中获取浮点型的原始值，然后通过float64()强制类型转换\n    \t\tfmt.Printf("type is float64, value is %f\\n", float64(v.Float()))\n    \t}\n    }\n    func main() {\n    \tvar a float32 = 3.14\n    \tvar b int64 = 100\n    \treflectValue(a) // type is float32, value is 3.140000\n    \treflectValue(b) // type is int64, value is 100\n    \t// 将int类型的原始值转换为reflect.Value类型\n    \tc := reflect.ValueOf(10)\n    \tfmt.Printf("type c :%T\\n", c) // type c :reflect.Value\n    }\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br")])]),n("h4",{attrs:{id:"通过反射设置变量的值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过反射设置变量的值"}},[t._v("#")]),t._v(" 通过反射设置变量的值")]),t._v(" "),n("p",[t._v("想要在函数中通过反射修改变量的值，需要注意函数参数传递的是值拷贝，必须传递变量地址才能修改变量值。而反射中使用专有的"),n("code",[t._v("Elem()")]),t._v("方法来获取指针对应的值。")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    package main\n    \n    import (\n    \t"fmt"\n    \t"reflect"\n    )\n    \n    func reflectSetValue1(x interface{}) {\n    \tv := reflect.ValueOf(x)\n    \tif v.Kind() == reflect.Int64 {\n    \t\tv.SetInt(200) //修改的是副本，reflect包会引发panic\n    \t}\n    }\n    func reflectSetValue2(x interface{}) {\n    \tv := reflect.ValueOf(x)\n    \t// 反射中使用 Elem()方法获取指针对应的值\n    \tif v.Elem().Kind() == reflect.Int64 {\n    \t\tv.Elem().SetInt(200)\n    \t}\n    }\n    func main() {\n    \tvar a int64 = 100\n    \t// reflectSetValue1(a) //panic: reflect: reflect.Value.SetInt using unaddressable value\n    \treflectSetValue2(&a)\n    \tfmt.Println(a)\n    }\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br")])]),n("h3",{attrs:{id:"isnil-和isvalid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#isnil-和isvalid"}},[t._v("#")]),t._v(" isNil()和isValid()")]),t._v(" "),n("h4",{attrs:{id:"isnil"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#isnil"}},[t._v("#")]),t._v(" isNil()")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    func (v Value) IsNil() bool\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[n("code",[t._v("IsNil()")]),t._v("报告v持有的值是否为nil。v持有的值的分类必须是通道、函数、接口、映射、指针、切片之一；否则IsNil函数会导致panic。")]),t._v(" "),n("h4",{attrs:{id:"isvalid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#isvalid"}},[t._v("#")]),t._v(" isValid()")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    func (v Value) IsValid() bool\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[n("code",[t._v("IsValid()")]),t._v("返回v是否持有一个值。如果v是Value零值会返回假，此时v除了IsValid、String、Kind之外的方法都会导致panic。")]),t._v(" "),n("h4",{attrs:{id:"举个例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#举个例子"}},[t._v("#")]),t._v(" 举个例子")]),t._v(" "),n("p",[n("code",[t._v("IsNil()")]),t._v("常被用于判断指针是否为空；"),n("code",[t._v("IsValid()")]),t._v("常被用于判定返回值是否有效。")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    func main() {\n    \t// *int类型空指针\n    \tvar a *int\n    \tfmt.Println("var a *int IsNil:", reflect.ValueOf(a).IsNil())\n    \t// nil值\n    \tfmt.Println("nil IsValid:", reflect.ValueOf(nil).IsValid())\n    \t// 实例化一个匿名结构体\n    \tb := struct{}{}\n    \t// 尝试从结构体中查找"abc"字段\n    \tfmt.Println("不存在的结构体成员:", reflect.ValueOf(b).FieldByName("abc").IsValid())\n    \t// 尝试从结构体中查找"abc"方法\n    \tfmt.Println("不存在的结构体方法:", reflect.ValueOf(b).MethodByName("abc").IsValid())\n    \t// map\n    \tc := map[string]int{}\n    \t// 尝试从map中查找一个不存在的键\n    \tfmt.Println("map中不存在的键：", reflect.ValueOf(c).MapIndex(reflect.ValueOf("娜扎")).IsValid())\n    }\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br")])]),n("h2",{attrs:{id:"结构体反射"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结构体反射"}},[t._v("#")]),t._v(" 结构体反射")]),t._v(" "),n("h3",{attrs:{id:"与结构体相关的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#与结构体相关的方法"}},[t._v("#")]),t._v(" 与结构体相关的方法")]),t._v(" "),n("p",[t._v("任意值通过"),n("code",[t._v("reflect.TypeOf()")]),t._v("获得反射对象信息后，如果它的类型是结构体，可以通过反射值对象（"),n("code",[t._v("reflect.Type")]),t._v("）的"),n("code",[t._v("NumField()")]),t._v("和"),n("code",[t._v("Field()")]),t._v("方法获得结构体成员的详细信息。")]),t._v(" "),n("p",[n("code",[t._v("reflect.Type")]),t._v("中与获取结构体成员相关的的方法如下表所示。")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("方法")]),t._v(" "),n("th",[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Field(i int) StructField")]),t._v(" "),n("td",[t._v("根据索引，返回索引对应的结构体字段的信息。")])]),t._v(" "),n("tr",[n("td",[t._v("NumField() int")]),t._v(" "),n("td",[t._v("返回结构体成员字段数量。")])]),t._v(" "),n("tr",[n("td",[t._v("FieldByName(name string) (StructField, bool)")]),t._v(" "),n("td",[t._v("根据给定字符串返回字符串对应的结构体字段的信息。")])]),t._v(" "),n("tr",[n("td",[t._v("FieldByIndex(index []int) StructField")]),t._v(" "),n("td",[t._v("多层成员访问时，根据 []int 提供的每个结构体的字段索引，返回字段的信息。")])]),t._v(" "),n("tr",[n("td",[t._v("FieldByNameFunc(match func(string) bool) (StructField,bool)")]),t._v(" "),n("td",[t._v("根据传入的匹配函数匹配需要的字段。")])]),t._v(" "),n("tr",[n("td",[t._v("NumMethod() int")]),t._v(" "),n("td",[t._v("返回该类型的方法集中方法的数目")])]),t._v(" "),n("tr",[n("td",[t._v("Method(int) Method")]),t._v(" "),n("td",[t._v("返回该类型方法集中的第i个方法")])]),t._v(" "),n("tr",[n("td",[t._v("MethodByName(string)(Method, bool)")]),t._v(" "),n("td",[t._v("根据方法名返回该类型方法集中的方法")])])])]),t._v(" "),n("h3",{attrs:{id:"structfield类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#structfield类型"}},[t._v("#")]),t._v(" StructField类型")]),t._v(" "),n("p",[n("code",[t._v("StructField")]),t._v("类型用来描述结构体中的一个字段的信息。")]),t._v(" "),n("p",[n("code",[t._v("StructField")]),t._v("的定义如下：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    type StructField struct {\n        // Name是字段的名字。PkgPath是非导出字段的包路径，对导出字段该字段为""。\n        // 参见http://golang.org/ref/spec#Uniqueness_of_identifiers\n        Name    string\n        PkgPath string\n        Type      Type      // 字段的类型\n        Tag       StructTag // 字段的标签\n        Offset    uintptr   // 字段在结构体中的字节偏移量\n        Index     []int     // 用于Type.FieldByIndex时的索引切片\n        Anonymous bool      // 是否匿名字段\n    }\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("h3",{attrs:{id:"结构体反射示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结构体反射示例"}},[t._v("#")]),t._v(" 结构体反射示例")]),t._v(" "),n("p",[t._v("当我们使用反射得到一个结构体数据之后可以通过索引依次获取其字段信息，也可以通过字段名去获取指定的字段信息。")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    type student struct {\n    \tName  string `json:"name"`\n    \tScore int    `json:"score"`\n    }\n    \n    func main() {\n    \tstu1 := student{\n    \t\tName:  "小王子",\n    \t\tScore: 90,\n    \t}\n    \n    \tt := reflect.TypeOf(stu1)\n    \tfmt.Println(t.Name(), t.Kind()) // student struct\n    \t// 通过for循环遍历结构体的所有字段信息\n    \tfor i := 0; i < t.NumField(); i++ {\n    \t\tfield := t.Field(i)\n    \t\tfmt.Printf("name:%s index:%d type:%v json tag:%v\\n", field.Name, field.Index, field.Type, field.Tag.Get("json"))\n    \t}\n    \n    \t// 通过字段名获取指定结构体字段信息\n    \tif scoreField, ok := t.FieldByName("Score"); ok {\n    \t\tfmt.Printf("name:%s index:%d type:%v json tag:%v\\n", scoreField.Name, scoreField.Index, scoreField.Type, scoreField.Tag.Get("json"))\n    \t}\n    }\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br")])]),n("p",[t._v("接下来编写一个函数"),n("code",[t._v("printMethod(s interface{})")]),t._v("来遍历打印s包含的方法。")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('    // 给student添加两个方法 Study和Sleep(注意首字母大写)\n    func (s student) Study() string {\n    \tmsg := "好好学习，天天向上。"\n    \tfmt.Println(msg)\n    \treturn msg\n    }\n    \n    func (s student) Sleep() string {\n    \tmsg := "好好睡觉，快快长大。"\n    \tfmt.Println(msg)\n    \treturn msg\n    }\n    \n    func printMethod(x interface{}) {\n    \tt := reflect.TypeOf(x)\n    \tv := reflect.ValueOf(x)\n    \n    \tfmt.Println(t.NumMethod())\n    \tfor i := 0; i < v.NumMethod(); i++ {\n    \t\tmethodType := v.Method(i).Type()\n    \t\tfmt.Printf("method name:%s\\n", t.Method(i).Name)\n    \t\tfmt.Printf("method:%s\\n", methodType)\n    \t\t// 通过反射调用方法传递的参数必须是 []reflect.Value 类型\n    \t\tvar args = []reflect.Value{}\n    \t\tv.Method(i).Call(args)\n    \t}\n    }\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br")])]),n("h2",{attrs:{id:"反射是把双刃剑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#反射是把双刃剑"}},[t._v("#")]),t._v(" 反射是把双刃剑")]),t._v(" "),n("p",[t._v("反射是一个强大并富有表现力的工具，能让我们写出更灵活的代码。但是反射不应该被滥用，原因有以下三个。")]),t._v(" "),n("ol",[n("li",[t._v("基于反射的代码是极其脆弱的，反射中的类型错误会在真正运行的时候才会引发panic，那很可能是在代码写完的很长时间之后。")]),t._v(" "),n("li",[t._v("大量使用反射的代码通常难以理解。")]),t._v(" "),n("li",[t._v("反射的性能低下，基于反射实现的代码通常比正常代码运行速度慢一到两个数量级。")])]),t._v(" "),n("h2",{attrs:{id:"练习题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#练习题"}},[t._v("#")]),t._v(" 练习题")]),t._v(" "),n("ol",[n("li",[t._v("编写代码利用反射实现一个ini文件的解析器程序。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);