(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{918:function(s,n,t){"use strict";t.r(n);var a=t(5),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"解决vue项目打包后js文件过大的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决vue项目打包后js文件过大的问题"}},[s._v("#")]),s._v(" 解决Vue项目打包后js文件过大的问题")]),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("这阵子因为白嫖了一台阿里云的服务器，配置是 2核4G1M，但是因为带宽太低了，每次在首屏加载的时候，时间过于缓慢，通过Chrome的F12性能调试，发现主要原因是因为加载的 "),t("strong",[s._v("js")]),s._v(" 过大而引起的。因为之前已经提到了将我们一些组件改成CDN方式引入，例如 Vue、ElementUi、ECharts等。但是还是存在一些打包后的内部 js 文件，他们的大小也过于庞大，因此本文将主要讲解如何解决Vue项目打包后js文件过大的问题。")]),s._v(" "),t("h2",{attrs:{id:"引入插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引入插件"}},[s._v("#")]),s._v(" 引入插件")]),s._v(" "),t("p",[s._v("我们可以通过引入 "),t("strong",[s._v("compression-webpack-plugin")]),s._v(" 插件，然后开启 "),t("strong",[s._v("gzip")]),s._v(" 来解决本问题")]),s._v(" "),t("p",[s._v("首先安装插件依赖")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i compression-webpack-plugin@5.0.1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后修改  "),t("strong",[s._v("config/index.js")]),s._v(" 文件，把 "),t("strong",[s._v("productionGzip")]),s._v(" 改为："),t("strong",[s._v("true")])]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("productionGzip: true,\nproductionGzipExtensions: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'js'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("然后在修改 "),t("strong",[s._v("build/webpack.prod.conf.js")]),s._v(" 文件，修改如下内容")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("// 判断配置文件是否开启了gzip加速\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config.build.productionGzip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  // 引入压缩文件的组件，该插件会对生成的文件进行压缩，生成一个.gz文件\n  const CompressionWebpackPlugin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" require"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'compression-webpack-plugin'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  webpackConfig.plugins.push"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    new CompressionWebpackPlugin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      filename: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[path].gz[query]'")]),s._v(", // 目标文件名\n      algorithm: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gzip'")]),s._v(",  // 使用gzip压缩\n      test: new RegExp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" // 满足正则表达式的文件会被压缩\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\\\.('")]),s._v(" + config.build.productionGzipExtensions.join"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'|'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("')$'")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n      threshold: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10240")]),s._v(", // 资源大于10240"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("10KB时会被压缩\n      minRatio: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),s._v(",\n      deleteOriginalAssets: false, // 是否删除原资源\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[s._v("#")]),s._v(" 打包")]),s._v(" "),t("p",[s._v("修改完成后，我们打包项目")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("打包完成后，我们查看 dist目录，能够发现很多 "),t("strong",[s._v("js")]),s._v(" 文件已经被压缩了")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20210102112105715.png",alt:"image-20210102112105715"}})]),s._v(" "),t("p",[s._v("我们看到这里，说明已经成功将js压缩了")]),s._v(" "),t("h2",{attrs:{id:"修改nginx配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改nginx配置"}},[s._v("#")]),s._v(" 修改Nginx配置")]),s._v(" "),t("p",[s._v("因为我们 "),t("strong",[s._v("Vue")]),s._v(" 项目打包后，部署的是静态文件，因此我们还需要在 "),t("strong",[s._v("nginx")]),s._v(" 处开启 "),t("strong",[s._v("gzip")]),s._v("， 找到 "),t("strong",[s._v("nginx.conf")])]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# on为启用，off为关闭")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v(" on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Nginx的动态压缩是对每个请求先压缩再输出，这样造成虚拟机浪费了很多cpu，解决这个问题可以利用nginx模块Gzip Precompression，这个模块的作用是对于需要压缩的文件，直接读取已经压缩好的文件(文件名为加.gz)，而不是动态压缩，对于不支持gzip的请求则读取原文件")]),s._v("\ngzip_static on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置允许压缩的页面最小字节数，页面字节数从header头中的Content-Length中进行获取。默认值是0，不管页面多大都压缩。建议设置成大于1k的字节数，小于1k可能会越压越大。")]),s._v("\ngzip_min_length 1k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取多少内存用于缓存压缩结果，‘4 16k’表示以16k*4为单位获得")]),s._v("\ngzip_buffers "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" 32k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 识别http协议的版本,早起浏览器可能不支持gzip自解压,用户会看到乱码")]),s._v("\ngzip_http_version "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gzip压缩比（1~9），越小压缩效果越差，但是越大处理越慢，所以一般取中间值;")]),s._v("\ngzip_comp_level "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对特定的MIME类型生效,其中'text/html’被系统强制启用")]),s._v("\ngzip_types text/plain application/x-javascript text/css application/xml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 启用应答头"Vary: Accept-Encoding"')]),s._v("\ngzip_vary on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# IE5.5和IE6 SP1使用msie6参数来禁止gzip压缩 )指定哪些不需要gzip压缩的浏览器(将和User-Agents进行匹配),依赖于PCRE库")]),s._v("\ngzip_disable "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MSIE [1-6]."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("设置完成后，我们重启 "),t("strong",[s._v("nginx")])]),s._v(" "),t("h2",{attrs:{id:"测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),t("p",[s._v("下面我们开始进行测试，首先开未压缩前的，我们可以看到打包后的 "),t("strong",[s._v("js")]),s._v(" 大小为 "),t("strong",[s._v("410KB")]),s._v(" 和 "),t("strong",[s._v("229KB")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20210102112805832.png",alt:"image-20210102112805832"}})]),s._v(" "),t("p",[s._v("然后在看压缩后的效果，我们发现文件的大小已经被大幅度的压缩，同时响应时间也得到了提升")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20210102113120340.png",alt:"image-20210102113120340"}})]),s._v(" "),t("p",[s._v("到这里为止，我们的响应时间过于缓慢的问题也得到了解决")])])}),[],!1,null,null,null);n.default=e.exports}}]);