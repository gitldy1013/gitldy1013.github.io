(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{843:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux下通过nginx配置https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux下通过nginx配置https"}},[s._v("#")]),s._v(" Linux下通过nginx配置https")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("这阵子在做蘑菇博客的小程序端，因为小程序的发布需要接口采用https加密的方式，因此打算通过nginx配置一下ssl安全证书")]),s._v(" "),a("h2",{attrs:{id:"证书购买"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#证书购买"}},[s._v("#")]),s._v(" 证书购买")]),s._v(" "),a("p",[s._v("证书一般都需要到对应的云服务厂商进行购买，当然貌似也可以自己生成证书，但是好像生成的证书也会出现不安全的提示，所以还是去云服务厂商购买")]),s._v(" "),a("p",[s._v("本着能不花钱就不花钱的态度，我们来到了 "),a("a",{attrs:{href:"https://cloud.tencent.com/product/ssl",target:"_blank",rel:"noopener noreferrer"}},[s._v("腾讯云SSL证书"),a("OutboundLink")],1),s._v(" （ps：阿里云免费的证书找了一阵子没找到）")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20200806143806254.png",alt:"image-20200806143806254"}})]),s._v(" "),a("p",[s._v("我们点击立即选购按钮，来到了我们的购买页面")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20200806143919814.png",alt:"image-20200806143919814"}})]),s._v(" "),a("p",[s._v("需要注意的是，免费型的域名证书，只能支持单个域名，也就是如果我们多个域名需要绑定SSL的话，那么就需要购买多个证书，下面就是填写我们哪个域名需要用到https，这是我是图片服务用到了，所以就填写图片服务器")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20200806144401828.png",alt:"image-20200806144401828"}})]),s._v(" "),a("p",[s._v("然后我们选择手动DNS验证，然后确认")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20200806144507660.png",alt:"image-20200806144507660"}})]),s._v(" "),a("p",[s._v("确认后，我们就需要到我们的域名管理添加一条解析")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20200806144529801.png",alt:"image-20200806144529801"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20200806144615582.png",alt:"image-20200806144615582"}})]),s._v(" "),a("p",[s._v("因为我的域名是在阿里云购买的，所以我需要到阿里云的域名解析处进行配置，添加上述的记录到阿里云解析中")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20200806144844883.png",alt:"image-20200806144844883"}})]),s._v(" "),a("p",[s._v("然后点击确定")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20200806145000357.png",alt:"image-20200806145000357"}})]),s._v(" "),a("p",[s._v("同时我们还需要让域名解析到我们的服务器上，我们在添加一条记录，指向的是我们的服务器（ipv4地址）")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20201107214047644.png",alt:"image-20201107214047644"}})]),s._v(" "),a("p",[s._v("添加完成后的效果")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20201107214125370.png",alt:"image-20201107214125370"}})]),s._v(" "),a("p",[s._v("然后在等待一段时间后，即可完成证书域名证书的认证")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20200806150616092.png",alt:"image-20200806150616092"}})]),s._v(" "),a("p",[s._v("认证完成后，我们需要下载我们的证书，点击右侧的下载按钮，下载完成后，有多个方式的配置，我们进入nginx文件夹")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/image-20200806145932184.png",alt:"image-20200806145932184"}})]),s._v(" "),a("p",[s._v("然后把里面的内容拷贝到我们的服务器上，首先我们先到服务器中，创建一个目录")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /home/ssl/uniapp/web\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("创建完成后，将刚刚nginx文件夹中的公钥和私钥拷贝到该目录下")]),s._v(" "),a("p",[s._v("然后我们就需要安装nginx的https模块了，关于nginx的https模块的安装可以参考下面的博客")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://moguit.cn/#/info?blogUid=e8d3e38ba35b4765ae128256eb44e341",target:"_blank",rel:"noopener noreferrer"}},[s._v("CentOS下如何安装Nginx？"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("然后使用下面的配置")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./configure "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/soft/nginx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--pid-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/run/nginx/nginx.pid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--lock-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lock/nginx.lock "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--error-log-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/log/nginx/error.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--http-log-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/log/nginx/access.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--with-http_gzip_static_module "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--http-client-body-temp-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/temp/nginx/client "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--http-proxy-temp-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/temp/nginx/proxy "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--http-fastcgi-temp-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/temp/nginx/fastcgi "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--http-uwsgi-temp-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/temp/nginx/uwsgi "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--http-scgi-temp-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/temp/nginx/scgi "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--with-http_ssl_module \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("然后在进行make  和 make install，安装完成nginx后，我们进入到nginx的配置文件中")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("    server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server_name  apiweb.moguit.cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        ssl_certificate  /home/ssl/uniapp/web/1_apiweb.moguit.cn_bundle.crt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl_certificate_key /home/ssl/uniapp/web/2_apiweb.moguit.cn.key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        ssl_session_timeout  5m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("NULL:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("aNULL:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("MD5:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("ADH:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("RC4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        ssl_protocols TLSv1 TLSv1.1 TLSv1.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl_prefer_server_ciphers  on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n           proxy_pass   http://127.0.0.1:8603"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("配置完成后，我们通过https，即可访问我们的项目了~")]),s._v(" "),a("p",[s._v("同理，如果配置  https://apipicture.moguit.cn 我们也是按照上述的操作再次执行一遍，然后最后在nginx中添加如下的配置信息")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("    server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server_name  apipicture.moguit.cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        ssl_certificate  /home/ssl/uniapp/picture/1_apipicture.moguit.cn_bundle.crt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl_certificate_key /home/ssl/uniapp/picture/2_apipicture.moguit.cn.key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        ssl_session_timeout  5m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("NULL:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("aNULL:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("MD5:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("ADH:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("RC4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        ssl_protocols TLSv1 TLSv1.1 TLSv1.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl_prefer_server_ciphers  on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n           proxy_pass   http://127.0.0.1:8602"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);