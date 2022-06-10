(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{838:function(n,t,a){"use strict";a.r(t);var s=a(5),e=Object(s.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"_1、下载nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、下载nginx"}},[n._v("#")]),n._v(" 1、下载nginx")]),n._v(" "),a("p",[n._v("官方网站  http://nginx.org")]),n._v(" "),a("p",[n._v("下载链接："),a("a",{attrs:{href:"http://nginx.org/download/",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://nginx.org/download/"),a("OutboundLink")],1)]),n._v(" "),a("p",[n._v("下载完成后的安装包：")]),n._v(" "),a("p",[a("img",{attrs:{src:"http://image.moguit.cn/1556796571439.png",alt:""}})]),n._v(" "),a("h2",{attrs:{id:"_2、使用解压命令进行解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、使用解压命令进行解压"}},[n._v("#")]),n._v(" 2、使用解压命令进行解压")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("tar -zxvf nginx-1.13.7.tar.gz\n")])])]),a("h2",{attrs:{id:"_3、在安装所需的安装环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、在安装所需的安装环境"}},[n._v("#")]),n._v(" 3、在安装所需的安装环境")]),n._v(" "),a("h3",{attrs:{id:"安装gcc环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装gcc环境"}},[n._v("#")]),n._v(" 安装gcc环境")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("yum install gcc-c++\n")])])]),a("h3",{attrs:{id:"安装第三方开发包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装第三方开发包"}},[n._v("#")]),n._v(" 安装第三方开发包")]),n._v(" "),a("p",[n._v("- "),a("strong",[n._v("PCRE")]),n._v("(Perl Compatible Regular Expressions)是一个Perl库，包括 perl 兼容的正则表达式库。nginx的http模块使用pcre来解析正则表达式，所以需要在linux上安装pcre库")]),n._v(" "),a("p",[n._v("注：pcre-devel是使用pcre开发的一个二次开发库。nginx也需要此库。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("yum install -y pcre pcre-devel\n")])])]),a("p",[n._v("- "),a("strong",[n._v("zlib")]),n._v("库提供了很多种压缩和解压缩的方式，nginx使用zlib对http包的内容进行gzip，所以需要在linux上安装zlib库。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("yum install -y zlib zlib-devel\n")])])]),a("p",[n._v("- "),a("strong",[n._v("OpenSSL")]),n._v(" 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及SSL协议，并提供丰富的应用程序供测试或其它目的使用。nginx不仅支持http协议，还支持https（即在ssl协议上传输http），所以需要在linux安装openssl库。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("yum install -y openssl openssl-devel\n")])])]),a("h2",{attrs:{id:"安装好上面的依赖后-进入解压的好的nginx目录中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装好上面的依赖后-进入解压的好的nginx目录中"}},[n._v("#")]),n._v(" 安装好上面的依赖后，进入解压的好的nginx目录中")]),n._v(" "),a("p",[a("img",{attrs:{src:"http://image.moguit.cn/1556797681396.png",alt:""}})]),n._v(" "),a("p",[n._v("然后执行下面的代码，使用configure命令创建makeFile文件")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("./configure \\\n--prefix=/soft/nginx \\\n--pid-path=/var/run/nginx/nginx.pid \\\n--lock-path=/var/lock/nginx.lock \\\n--error-log-path=/var/log/nginx/error.log \\\n--http-log-path=/var/log/nginx/access.log \\\n--with-http_gzip_static_module \\\n--http-client-body-temp-path=/var/temp/nginx/client \\\n--http-proxy-temp-path=/var/temp/nginx/proxy \\\n--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \\\n--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \\\n--http-scgi-temp-path=/var/temp/nginx/scgi\n")])])]),a("p",[n._v("如果小伙伴需要使用Nginx配置https的话，那么这里需要安装SSL模块哦，在上面加上这句话（如果不需要，请忽略）")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("./configure \\\n--prefix=/soft/nginx \\\n--pid-path=/var/run/nginx/nginx.pid \\\n--lock-path=/var/lock/nginx.lock \\\n--error-log-path=/var/log/nginx/error.log \\\n--http-log-path=/var/log/nginx/access.log \\\n--with-http_gzip_static_module \\\n--http-client-body-temp-path=/var/temp/nginx/client \\\n--http-proxy-temp-path=/var/temp/nginx/proxy \\\n--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \\\n--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \\\n--http-scgi-temp-path=/var/temp/nginx/scgi \\\n--with-http_ssl_module \n")])])]),a("p",[n._v("在安装完上面的模块后，然后nginx.conf这样进行配置")]),n._v(" "),a("p",[n._v("tip：不需要配置 https的小伙伴，下面的代码也不需要修改")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("    server {\n        listen       443 ssl;\n        server_name  admin.moguit.cn;\n        ssl on;\n\n        ssl_certificate /home/ssl/admin/2181043_admin.moguit.cn.pem;\n        ssl_certificate_key /home/ssl/admin/2181043_admin.moguit.cn.key;\n\n        ssl_session_timeout  5m;\n        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\n\n        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n        ssl_prefer_server_ciphers  on;\n        root   /home/mogu_blog/vue_mogu_admin/dist;\n\n    }\n")])])]),a("p",[n._v("注意：启动nginx之前，上边将临时文件目录指定为/var/temp/nginx，需要在/var下创建temp及nginx目录")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("mkdir /var/temp/nginx/client -p\n")])])]),a("p",[n._v("然后执行make命令已经编译和安装")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("#编译\nmake\n#安装\nmake install\n")])])]),a("h2",{attrs:{id:"启动nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动nginx"}},[n._v("#")]),n._v(" 启动Nginx")]),n._v(" "),a("p",[n._v("进入 /soft/nginx/sbin目录下，使用下面命令进行启动")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v(" ./nginx\n")])])]),a("p",[n._v("我们在查看端口号，发现nginx已经成功启动了")]),n._v(" "),a("p",[a("img",{attrs:{src:"http://image.moguit.cn/1556797881757.png",alt:""}})]),n._v(" "),a("h2",{attrs:{id:"nginx常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx常用命令"}},[n._v("#")]),n._v(" nginx常用命令")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("启动nginx\n./nginx\n# 关闭nginx\n./nginx -s stop\n#退出nginx\n./nginx -s quit\n# 重启nginx（重启用户基本感觉不到）\n./nginx -s reload")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);