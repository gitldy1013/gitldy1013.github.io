(window.webpackJsonp=window.webpackJsonp||[]).push([[578],{1276:function(s,a,n){"use strict";n.r(a);var t=n(5),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"go语言基础之切片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#go语言基础之切片"}},[s._v("#")]),s._v(" Go语言基础之切片")]),s._v(" "),n("h2",{attrs:{id:"为什么会有切片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么会有切片"}},[s._v("#")]),s._v(" 为什么会有切片")]),s._v(" "),n("p",[s._v("因为数组的长度是固定的并且数组长度属于类型的一部分，所以数组有很多的局限性。 例如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    func arraySum(x [3]int) int{\n        sum := 0\n        for _, v := range x{\n            sum = sum + v\n        }\n        return sum\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("这个求和函数只能接受"),n("code",[s._v("[3]int")]),s._v("类型，其他的都不支持。 再比如，")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    a := [3]int{1, 2, 3}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("数组a中已经有三个元素了，我们不能再继续往数组a中添加新元素了。")]),s._v(" "),n("h2",{attrs:{id:"切片是啥"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#切片是啥"}},[s._v("#")]),s._v(" 切片是啥")]),s._v(" "),n("p",[s._v("切片（Slice）是一个拥有相同类型元素的可变长度的序列。它是基于数组类型做的一层封装。它非常灵活，支持自动扩容。")]),s._v(" "),n("p",[s._v("切片是一个引用类型，它的内部结构包含"),n("code",[s._v("地址")]),s._v("、"),n("code",[s._v("长度")]),s._v("和"),n("code",[s._v("容量")]),s._v("。切片一般用于快速地操作一块数据集合。")]),s._v(" "),n("h2",{attrs:{id:"切片的定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#切片的定义"}},[s._v("#")]),s._v(" 切片的定义")]),s._v(" "),n("p",[s._v("声明切片类型的基本语法如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    var name []T\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("其中，")]),s._v(" "),n("ul",[n("li",[s._v("name:表示变量名")]),s._v(" "),n("li",[s._v("T:表示切片中的元素类型")])]),s._v(" "),n("p",[s._v("举个例子：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    func main() {\n    \t// 声明切片类型\n    \tvar a []string              //声明一个字符串切片\n    \tvar b = []int{}             //声明一个整型切片并初始化\n    \tvar c = []bool{false, true} //声明一个布尔切片并初始化\n    \tvar d = []bool{false, true} //声明一个布尔切片并初始化\n    \tfmt.Println(a)              //[]\n    \tfmt.Println(b)              //[]\n    \tfmt.Println(c)              //[false true]\n    \tfmt.Println(a == nil)       //true\n    \tfmt.Println(b == nil)       //false\n    \tfmt.Println(c == nil)       //false\n    \t// fmt.Println(c == d)   //切片是引用类型，不支持直接比较，只能和nil比较\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h3",{attrs:{id:"切片的长度和容量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#切片的长度和容量"}},[s._v("#")]),s._v(" 切片的长度和容量")]),s._v(" "),n("p",[s._v("切片拥有自己的长度和容量，我们可以通过使用内置的len()函数求长度，使用内置的cap()函数求切片的容量。")]),s._v(" "),n("h3",{attrs:{id:"基于数组定义切片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于数组定义切片"}},[s._v("#")]),s._v(" 基于数组定义切片")]),s._v(" "),n("p",[s._v("由于切片的底层就是一个数组，所以我们可以基于数组定义切片。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    func main() {\n    \t// 基于数组定义切片\n    \ta := [5]int{55, 56, 57, 58, 59}\n    \tb := a[1:4]                     //基于数组a创建切片，包括元素a[1],a[2],a[3]\n    \tfmt.Println(b)                  //[56 57 58]\n    \tfmt.Printf("type of b:%T\\n", b) //type of b:[]int\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("还支持如下方式：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    c := a[1:] //[56 57 58 59]\n    d := a[:4] //[55 56 57 58]\n    e := a[:]  //[55 56 57 58 59]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"切片再切片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#切片再切片"}},[s._v("#")]),s._v(" 切片再切片")]),s._v(" "),n("p",[s._v("除了基于数组得到切片，我们还可以通过切片来得到切片。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    func main() {\n    \t//切片再切片\n    \ta := [...]string{"北京", "上海", "广州", "深圳", "成都", "重庆"}\n    \tfmt.Printf("a:%v type:%T len:%d  cap:%d\\n", a, a, len(a), cap(a))\n    \tb := a[1:3]\n    \tfmt.Printf("b:%v type:%T len:%d  cap:%d\\n", b, b, len(b), cap(b))\n    \tc := b[1:5]\n    \tfmt.Printf("c:%v type:%T len:%d  cap:%d\\n", c, c, len(c), cap(c))\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("输出：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    a:[北京 上海 广州 深圳 成都 重庆] type:[6]string len:6  cap:6\n    b:[上海 广州] type:[]string len:2  cap:5\n    c:[广州 深圳 成都 重庆] type:[]string len:4  cap:4\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("strong",[s._v("注意：")]),s._v(" 对切片进行再切片时，索引不能超过原数组的长度，否则会出现索引越界的错误。")]),s._v(" "),n("h3",{attrs:{id:"使用make-函数构造切片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用make-函数构造切片"}},[s._v("#")]),s._v(" 使用make()函数构造切片")]),s._v(" "),n("p",[s._v("我们上面都是基于数组来创建的切片，如果需要动态的创建一个切片，我们就需要使用内置的"),n("code",[s._v("make()")]),s._v("函数，格式如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    make([]T, size, cap)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("其中：")]),s._v(" "),n("ul",[n("li",[s._v("T:切片的元素类型")]),s._v(" "),n("li",[s._v("size:切片中元素的数量")]),s._v(" "),n("li",[s._v("cap:切片的容量")])]),s._v(" "),n("p",[s._v("举个例子：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    func main() {\n    \ta := make([]int, 2, 10)\n    \tfmt.Println(a)      //[0 0]\n    \tfmt.Println(len(a)) //2\n    \tfmt.Println(cap(a)) //10\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("上面代码中"),n("code",[s._v("a")]),s._v("的内部存储空间已经分配了10个，但实际上只用了2个。 容量并不会影响当前元素的个数，所以"),n("code",[s._v("len(a)")]),s._v("返回2，"),n("code",[s._v("cap(a)")]),s._v("则返回该切片的容量。")]),s._v(" "),n("h3",{attrs:{id:"切片的本质"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#切片的本质"}},[s._v("#")]),s._v(" 切片的本质")]),s._v(" "),n("p",[s._v("切片的本质就是对底层数组的封装，它包含了三个信息：底层数组的指针、切片的长度（len）和切片的容量（cap）。")]),s._v(" "),n("p",[s._v("举个例子，现在有一个数组"),n("code",[s._v("a := [8]int{0, 1, 2, 3, 4, 5, 6, 7}")]),s._v("，切片"),n("code",[s._v("s1 := a[:5]")]),s._v("，相应示意图如下。 "),n("img",{attrs:{src:"/images/Go/slice/slice_01.png",alt:"slice_01"}}),s._v(" 切片"),n("code",[s._v("s2 := a[3:6]")]),s._v("，相应示意图如下： "),n("img",{attrs:{src:"/images/Go/slice/slice_02.png",alt:"slice_02"}})]),s._v(" "),n("h3",{attrs:{id:"判断切片是否为空"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#判断切片是否为空"}},[s._v("#")]),s._v(" 判断切片是否为空")]),s._v(" "),n("p",[s._v("要检查切片是否为空，请始终使用"),n("code",[s._v("len(s) == 0")]),s._v("来判断，而不应该使用"),n("code",[s._v("s == nil")]),s._v("来判断。")]),s._v(" "),n("h2",{attrs:{id:"切片不能直接比较"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#切片不能直接比较"}},[s._v("#")]),s._v(" 切片不能直接比较")]),s._v(" "),n("p",[s._v("切片之间是不能比较的，我们不能使用"),n("code",[s._v("==")]),s._v("操作符来判断两个切片是否含有全部相等元素。 切片唯一合法的比较操作是和"),n("code",[s._v("nil")]),s._v("比较。 一个"),n("code",[s._v("nil")]),s._v("值的切片并没有底层数组，一个"),n("code",[s._v("nil")]),s._v("值的切片的长度和容量都是0。但是我们不能说一个长度和容量都是0的切片一定是"),n("code",[s._v("nil")]),s._v("，例如下面的示例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    var s1 []int         //len(s1)=0;cap(s1)=0;s1==nil\n    s2 := []int{}        //len(s2)=0;cap(s2)=0;s2!=nil\n    s3 := make([]int, 0) //len(s3)=0;cap(s3)=0;s3!=nil\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("所以要判断一个切片是否是空的，要是用"),n("code",[s._v("len(s) == 0")]),s._v("来判断，不应该使用"),n("code",[s._v("s == nil")]),s._v("来判断。")]),s._v(" "),n("h2",{attrs:{id:"切片的赋值拷贝"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#切片的赋值拷贝"}},[s._v("#")]),s._v(" 切片的赋值拷贝")]),s._v(" "),n("p",[s._v("下面的代码中演示了拷贝前后两个变量共享底层数组，对一个切片的修改会影响另一个切片的内容，这点需要特别注意。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    func main() {\n    \ts1 := make([]int, 3) //[0 0 0]\n    \ts2 := s1             //将s1直接赋值给s2，s1和s2共用一个底层数组\n    \ts2[0] = 100\n    \tfmt.Println(s1) //[100 0 0]\n    \tfmt.Println(s2) //[100 0 0]\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"切片遍历"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#切片遍历"}},[s._v("#")]),s._v(" 切片遍历")]),s._v(" "),n("p",[s._v("切片的遍历方式和数组是一致的，支持索引遍历和"),n("code",[s._v("for range")]),s._v("遍历。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    func main() {\n    \ts := []int{1, 3, 5}\n    \n    \tfor i := 0; i < len(s); i++ {\n    \t\tfmt.Println(i, s[i])\n    \t}\n    \n    \tfor index, value := range s {\n    \t\tfmt.Println(index, value)\n    \t}\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"append-方法为切片添加元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#append-方法为切片添加元素"}},[s._v("#")]),s._v(" append()方法为切片添加元素")]),s._v(" "),n("p",[s._v("Go语言的内建函数"),n("code",[s._v("append()")]),s._v("可以为切片动态添加元素。 可以一次添加一个元素，可以添加多个元素，也可以添加另一个切片中的元素（后面加…）。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    func main(){\n    \tvar s []int\n    \ts = append(s, 1)        // [1]\n    \ts = append(s, 2, 3, 4)  // [1 2 3 4]\n    \ts2 := []int{5, 6, 7}  \n    \ts = append(s, s2...)    // [1 2 3 4 5 6 7]\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("**注意：**通过var声明的零值切片可以在"),n("code",[s._v("append()")]),s._v("函数直接使用，无需初始化。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    var s []int\n    s = append(s, 1, 2, 3)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("没有必要像下面的代码一样初始化一个切片再传入"),n("code",[s._v("append()")]),s._v("函数使用，")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    s := []int{}  // 没有必要初始化\n    s = append(s, 1, 2, 3)\n    \n    var s = make([]int)  // 没有必要初始化\n    s = append(s, 1, 2, 3)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("每个切片会指向一个底层数组，这个数组的容量够用就添加新增元素。当底层数组不能容纳新增的元素时，切片就会自动按照一定的策略进行“扩容”，此时该切片指向的底层数组就会更换。“扩容”操作往往发生在"),n("code",[s._v("append()")]),s._v("函数调用时，所以我们通常都需要用原变量接收append函数的返回值。")]),s._v(" "),n("p",[s._v("举个例子：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    func main() {\n    \t//append()添加元素和切片扩容\n    \tvar numSlice []int\n    \tfor i := 0; i < 10; i++ {\n    \t\tnumSlice = append(numSlice, i)\n    \t\tfmt.Printf("%v  len:%d  cap:%d  ptr:%p\\n", numSlice, len(numSlice), cap(numSlice), numSlice)\n    \t}\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("输出：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    [0]  len:1  cap:1  ptr:0xc0000a8000\n    [0 1]  len:2  cap:2  ptr:0xc0000a8040\n    [0 1 2]  len:3  cap:4  ptr:0xc0000b2020\n    [0 1 2 3]  len:4  cap:4  ptr:0xc0000b2020\n    [0 1 2 3 4]  len:5  cap:8  ptr:0xc0000b6000\n    [0 1 2 3 4 5]  len:6  cap:8  ptr:0xc0000b6000\n    [0 1 2 3 4 5 6]  len:7  cap:8  ptr:0xc0000b6000\n    [0 1 2 3 4 5 6 7]  len:8  cap:8  ptr:0xc0000b6000\n    [0 1 2 3 4 5 6 7 8]  len:9  cap:16  ptr:0xc0000b8000\n    [0 1 2 3 4 5 6 7 8 9]  len:10  cap:16  ptr:0xc0000b8000\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("从上面的结果可以看出：")]),s._v(" "),n("ol",[n("li",[n("code",[s._v("append()")]),s._v("函数将元素追加到切片的最后并返回该切片。")]),s._v(" "),n("li",[s._v("切片numSlice的容量按照1，2，4，8，16这样的规则自动进行扩容，每次扩容后都是扩容前的2倍。")])]),s._v(" "),n("p",[s._v("append()函数还支持一次性追加多个元素。 例如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    var citySlice []string\n    // 追加一个元素\n    citySlice = append(citySlice, "北京")\n    // 追加多个元素\n    citySlice = append(citySlice, "上海", "广州", "深圳")\n    // 追加切片\n    a := []string{"成都", "重庆"}\n    citySlice = append(citySlice, a...)\n    fmt.Println(citySlice) //[北京 上海 广州 深圳 成都 重庆]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"切片的扩容策略"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#切片的扩容策略"}},[s._v("#")]),s._v(" 切片的扩容策略")]),s._v(" "),n("p",[s._v("可以通过查看"),n("code",[s._v("$GOROOT/src/runtime/slice.go")]),s._v("源码，其中扩容相关代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    newcap := old.cap\n    doublecap := newcap + newcap\n    if cap > doublecap {\n    \tnewcap = cap\n    } else {\n    \tif old.len < 1024 {\n    \t\tnewcap = doublecap\n    \t} else {\n    \t\t// Check 0 < newcap to detect overflow\n    \t\t// and prevent an infinite loop.\n    \t\tfor 0 < newcap && newcap < cap {\n    \t\t\tnewcap += newcap / 4\n    \t\t}\n    \t\t// Set newcap to the requested cap when\n    \t\t// the newcap calculation overflowed.\n    \t\tif newcap <= 0 {\n    \t\t\tnewcap = cap\n    \t\t}\n    \t}\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("从上面的代码可以看出以下内容：")]),s._v(" "),n("ul",[n("li",[s._v("首先判断，如果新申请容量（cap）大于2倍的旧容量（old.cap），最终容量（newcap）就是新申请的容量（cap）。")]),s._v(" "),n("li",[s._v("否则判断，如果旧切片的长度小于1024，则最终容量(newcap)就是旧容量(old.cap)的两倍，即（newcap=doublecap），")]),s._v(" "),n("li",[s._v("否则判断，如果旧切片长度大于等于1024，则最终容量（newcap）从旧容量（old.cap）开始循环增加原来的1/4，即（newcap=old.cap,for {newcap += newcap/4}）直到最终容量（newcap）大于等于新申请的容量(cap)，即（newcap >= cap）")]),s._v(" "),n("li",[s._v("如果最终容量（cap）计算值溢出，则最终容量（cap）就是新申请容量（cap）。")])]),s._v(" "),n("p",[s._v("需要注意的是，切片扩容还会根据切片中元素的类型不同而做不同的处理，比如"),n("code",[s._v("int")]),s._v("和"),n("code",[s._v("string")]),s._v("类型的处理方式就不一样。")]),s._v(" "),n("h2",{attrs:{id:"使用copy-函数复制切片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用copy-函数复制切片"}},[s._v("#")]),s._v(" 使用copy()函数复制切片")]),s._v(" "),n("p",[s._v("首先我们来看一个问题：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    func main() {\n    \ta := []int{1, 2, 3, 4, 5}\n    \tb := a\n    \tfmt.Println(a) //[1 2 3 4 5]\n    \tfmt.Println(b) //[1 2 3 4 5]\n    \tb[0] = 1000\n    \tfmt.Println(a) //[1000 2 3 4 5]\n    \tfmt.Println(b) //[1000 2 3 4 5]\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("由于切片是引用类型，所以a和b其实都指向了同一块内存地址。修改b的同时a的值也会发生变化。")]),s._v(" "),n("p",[s._v("Go语言内建的"),n("code",[s._v("copy()")]),s._v("函数可以迅速地将一个切片的数据复制到另外一个切片空间中，"),n("code",[s._v("copy()")]),s._v("函数的使用格式如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    copy(destSlice, srcSlice []T)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("其中：")]),s._v(" "),n("ul",[n("li",[s._v("srcSlice: 数据来源切片")]),s._v(" "),n("li",[s._v("destSlice: 目标切片")])]),s._v(" "),n("p",[s._v("举个例子：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    func main() {\n    \t// copy()复制切片\n    \ta := []int{1, 2, 3, 4, 5}\n    \tc := make([]int, 5, 5)\n    \tcopy(c, a)     //使用copy()函数将切片a中的元素复制到切片c\n    \tfmt.Println(a) //[1 2 3 4 5]\n    \tfmt.Println(c) //[1 2 3 4 5]\n    \tc[0] = 1000\n    \tfmt.Println(a) //[1 2 3 4 5]\n    \tfmt.Println(c) //[1000 2 3 4 5]\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"从切片中删除元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#从切片中删除元素"}},[s._v("#")]),s._v(" 从切片中删除元素")]),s._v(" "),n("p",[s._v("Go语言中并没有删除切片元素的专用方法，我们可以使用切片本身的特性来删除元素。 代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    func main() {\n    \t// 从切片中删除元素\n    \ta := []int{30, 31, 32, 33, 34, 35, 36, 37}\n    \t// 要删除索引为2的元素\n    \ta = append(a[:2], a[3:]...)\n    \tfmt.Println(a) //[30 31 33 34 35 36 37]\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("总结一下就是：要从切片a中删除索引为"),n("code",[s._v("index")]),s._v("的元素，操作方法是"),n("code",[s._v("a = append(a[:index], a[index+1:]...)")])]),s._v(" "),n("h2",{attrs:{id:"练习题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#练习题"}},[s._v("#")]),s._v(" 练习题")]),s._v(" "),n("p",[s._v("1.请写出下面代码的输出结果。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    func main() {\n    \tvar a = make([]string, 5, 10)\n    \tfor i := 0; i < 10; i++ {\n    \t\ta = append(a, fmt.Sprintf("%v", i))\n    \t}\n    \tfmt.Println(a)\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("2.请使用内置的"),n("code",[s._v("sort")]),s._v("包对数组"),n("code",[s._v("var a = [...]int{3, 7, 8, 9, 1}")]),s._v("进行排序（附加题，自行查资料解答）。")])])}),[],!1,null,null,null);a.default=e.exports}}]);