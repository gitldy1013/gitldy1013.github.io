(window.webpackJsonp=window.webpackJsonp||[]).push([[572],{1268:function(s,t,n){"use strict";n.r(t);var e=n(5),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"go语言内置的net-http包十分的优秀-提供了http客户端和服务端的实现。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#go语言内置的net-http包十分的优秀-提供了http客户端和服务端的实现。"}},[s._v("#")]),s._v(" Go语言内置的"),n("code",[s._v("net/http")]),s._v("包十分的优秀，提供了HTTP客户端和服务端的实现。")]),s._v(" "),n("h2",{attrs:{id:"net-http介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#net-http介绍"}},[s._v("#")]),s._v(" net/http介绍")]),s._v(" "),n("p",[s._v("Go语言内置的"),n("code",[s._v("net/http")]),s._v("包提供了HTTP客户端和服务端的实现。")]),s._v(" "),n("h3",{attrs:{id:"http协议"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[s._v("#")]),s._v(" HTTP协议")]),s._v(" "),n("p",[s._v("超文本传输协议（HTTP，HyperText Transfer Protocol)是互联网上应用最为广泛的一种网络传输协议，所有的WWW文件都必须遵守这个标准。设计HTTP最初的目的是为了提供一种发布和接收HTML页面的方法。")]),s._v(" "),n("h2",{attrs:{id:"http客户端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http客户端"}},[s._v("#")]),s._v(" HTTP客户端")]),s._v(" "),n("h3",{attrs:{id:"基本的http-https请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本的http-https请求"}},[s._v("#")]),s._v(" 基本的HTTP/HTTPS请求")]),s._v(" "),n("p",[s._v("Get、Head、Post和PostForm函数发出HTTP/HTTPS请求。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    resp, err := http.Get("http://example.com/")\n    ...\n    resp, err := http.Post("http://example.com/upload", "image/jpeg", &buf)\n    ...\n    resp, err := http.PostForm("http://example.com/form",\n    \turl.Values{"key": {"Value"}, "id": {"123"}})\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("程序在使用完response后必须关闭回复的主体。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    resp, err := http.Get("http://example.com/")\n    if err != nil {\n    \t// handle error\n    }\n    defer resp.Body.Close()\n    body, err := ioutil.ReadAll(resp.Body)\n    // ...\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"get请求示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get请求示例"}},[s._v("#")]),s._v(" GET请求示例")]),s._v(" "),n("p",[s._v("使用"),n("code",[s._v("net/http")]),s._v("包编写一个简单的发送HTTP请求的Client端，代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    package main\n    \n    import (\n    \t"fmt"\n    \t"io/ioutil"\n    \t"net/http"\n    )\n    \n    func main() {\n    \tresp, err := http.Get("https://www.liwenzhou.com/")\n    \tif err != nil {\n    \t\tfmt.Printf("get failed, err:%v\\n", err)\n    \t\treturn\n    \t}\n    \tdefer resp.Body.Close()\n    \tbody, err := ioutil.ReadAll(resp.Body)\n    \tif err != nil {\n    \t\tfmt.Printf("read from resp.Body failed, err:%v\\n", err)\n    \t\treturn\n    \t}\n    \tfmt.Print(string(body))\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("将上面的代码保存之后编译成可执行文件，执行之后就能在终端打印"),n("code",[s._v("liwenzhou.com")]),s._v("网站首页的内容了，我们的浏览器其实就是一个发送和接收HTTP协议数据的客户端，我们平时通过浏览器访问网页其实就是从网站的服务器接收HTTP数据，然后浏览器会按照HTML、CSS等规则将网页渲染展示出来。")]),s._v(" "),n("h3",{attrs:{id:"带参数的get请求示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#带参数的get请求示例"}},[s._v("#")]),s._v(" 带参数的GET请求示例")]),s._v(" "),n("p",[s._v("关于GET请求的参数需要使用Go语言内置的"),n("code",[s._v("net/url")]),s._v("这个标准库来处理。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    func main() {\n    \tapiUrl := "http://127.0.0.1:9090/get"\n    \t// URL param\n    \tdata := url.Values{}\n    \tdata.Set("name", "小王子")\n    \tdata.Set("age", "18")\n    \tu, err := url.ParseRequestURI(apiUrl)\n    \tif err != nil {\n    \t\tfmt.Printf("parse url requestUrl failed, err:%v\\n", err)\n    \t}\n    \tu.RawQuery = data.Encode() // URL encode\n    \tfmt.Println(u.String())\n    \tresp, err := http.Get(u.String())\n    \tif err != nil {\n    \t\tfmt.Printf("post failed, err:%v\\n", err)\n    \t\treturn\n    \t}\n    \tdefer resp.Body.Close()\n    \tb, err := ioutil.ReadAll(resp.Body)\n    \tif err != nil {\n    \t\tfmt.Printf("get resp failed, err:%v\\n", err)\n    \t\treturn\n    \t}\n    \tfmt.Println(string(b))\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[s._v("对应的Server端HandlerFunc如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    func getHandler(w http.ResponseWriter, r *http.Request) {\n    \tdefer r.Body.Close()\n    \tdata := r.URL.Query()\n    \tfmt.Println(data.Get("name"))\n    \tfmt.Println(data.Get("age"))\n    \tanswer := `{"status": "ok"}`\n    \tw.Write([]byte(answer))\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"post请求示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#post请求示例"}},[s._v("#")]),s._v(" Post请求示例")]),s._v(" "),n("p",[s._v("上面演示了使用"),n("code",[s._v("net/http")]),s._v("包发送"),n("code",[s._v("GET")]),s._v("请求的示例，发送"),n("code",[s._v("POST")]),s._v("请求的示例代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    package main\n    \n    import (\n    \t"fmt"\n    \t"io/ioutil"\n    \t"net/http"\n    \t"strings"\n    )\n    \n    // net/http post demo\n    \n    func main() {\n    \turl := "http://127.0.0.1:9090/post"\n    \t// 表单数据\n    \t//contentType := "application/x-www-form-urlencoded"\n    \t//data := "name=小王子&age=18"\n    \t// json\n    \tcontentType := "application/json"\n    \tdata := `{"name":"小王子","age":18}`\n    \tresp, err := http.Post(url, contentType, strings.NewReader(data))\n    \tif err != nil {\n    \t\tfmt.Printf("post failed, err:%v\\n", err)\n    \t\treturn\n    \t}\n    \tdefer resp.Body.Close()\n    \tb, err := ioutil.ReadAll(resp.Body)\n    \tif err != nil {\n    \t\tfmt.Printf("get resp failed, err:%v\\n", err)\n    \t\treturn\n    \t}\n    \tfmt.Println(string(b))\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("p",[s._v("对应的Server端HandlerFunc如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    func postHandler(w http.ResponseWriter, r *http.Request) {\n    \tdefer r.Body.Close()\n    \t// 1. 请求类型是application/x-www-form-urlencoded时解析form数据\n    \tr.ParseForm()\n    \tfmt.Println(r.PostForm) // 打印form数据\n    \tfmt.Println(r.PostForm.Get("name"), r.PostForm.Get("age"))\n    \t// 2. 请求类型是application/json时从r.Body读取数据\n    \tb, err := ioutil.ReadAll(r.Body)\n    \tif err != nil {\n    \t\tfmt.Printf("read request.Body failed, err:%v\\n", err)\n    \t\treturn\n    \t}\n    \tfmt.Println(string(b))\n    \tanswer := `{"status": "ok"}`\n    \tw.Write([]byte(answer))\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"自定义client"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义client"}},[s._v("#")]),s._v(" 自定义Client")]),s._v(" "),n("p",[s._v("要管理HTTP客户端的头域、重定向策略和其他设置，创建一个Client：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    client := &http.Client{\n    \tCheckRedirect: redirectPolicyFunc,\n    }\n    resp, err := client.Get("http://example.com")\n    // ...\n    req, err := http.NewRequest("GET", "http://example.com", nil)\n    // ...\n    req.Header.Add("If-None-Match", `W/"wyzzy"`)\n    resp, err := client.Do(req)\n    // ...\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"自定义transport"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义transport"}},[s._v("#")]),s._v(" 自定义Transport")]),s._v(" "),n("p",[s._v("要管理代理、TLS配置、keep-alive、压缩和其他设置，创建一个Transport：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    tr := &http.Transport{\n    \tTLSClientConfig:    &tls.Config{RootCAs: pool},\n    \tDisableCompression: true,\n    }\n    client := &http.Client{Transport: tr}\n    resp, err := client.Get("https://example.com")\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("Client和Transport类型都可以安全的被多个goroutine同时使用。出于效率考虑，应该一次建立、尽量重用。")]),s._v(" "),n("h2",{attrs:{id:"服务端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务端"}},[s._v("#")]),s._v(" 服务端")]),s._v(" "),n("h3",{attrs:{id:"默认的server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#默认的server"}},[s._v("#")]),s._v(" 默认的Server")]),s._v(" "),n("p",[s._v("ListenAndServe使用指定的监听地址和处理器启动一个HTTP服务端。处理器参数通常是nil，这表示采用包变量DefaultServeMux作为处理器。")]),s._v(" "),n("p",[s._v("Handle和HandleFunc函数可以向DefaultServeMux添加处理器。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    http.Handle("/foo", fooHandler)\n    http.HandleFunc("/bar", func(w http.ResponseWriter, r *http.Request) {\n    \tfmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))\n    })\n    log.Fatal(http.ListenAndServe(":8080", nil))\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"默认的server示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#默认的server示例"}},[s._v("#")]),s._v(" 默认的Server示例")]),s._v(" "),n("p",[s._v("使用Go语言中的"),n("code",[s._v("net/http")]),s._v("包来编写一个简单的接收HTTP请求的Server端示例，"),n("code",[s._v("net/http")]),s._v("包是对net包的进一步封装，专门用来处理HTTP协议的数据。具体的代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    // http server\n    \n    func sayHello(w http.ResponseWriter, r *http.Request) {\n    \tfmt.Fprintln(w, "Hello 沙河！")\n    }\n    \n    func main() {\n    \thttp.HandleFunc("/", sayHello)\n    \terr := http.ListenAndServe(":9090", nil)\n    \tif err != nil {\n    \t\tfmt.Printf("http server failed, err:%v\\n", err)\n    \t\treturn\n    \t}\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("将上面的代码编译之后执行，打开你电脑上的浏览器在地址栏输入"),n("code",[s._v("127.0.0.1:9090")]),s._v("回车，此时就能够看到如下页面了。 "),n("img",{attrs:{src:"/images/Go/socket/hello.png",alt:"hello页面"}})]),s._v(" "),n("h3",{attrs:{id:"自定义server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义server"}},[s._v("#")]),s._v(" 自定义Server")]),s._v(" "),n("p",[s._v("要管理服务端的行为，可以创建一个自定义的Server：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    s := &http.Server{\n    \tAddr:           ":8080",\n    \tHandler:        myHandler,\n    \tReadTimeout:    10 * time.Second,\n    \tWriteTimeout:   10 * time.Second,\n    \tMaxHeaderBytes: 1 << 20,\n    }\n    log.Fatal(s.ListenAndServe())\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);