(window.webpackJsonp=window.webpackJsonp||[]).push([[1083],{1779:function(s,n,a){"use strict";a.r(n);var e=a(5),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"第一个-elementui-页面-登录页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一个-elementui-页面-登录页"}},[s._v("#")]),s._v(" 第一个 ElementUI 页面 (登录页)")]),s._v(" "),a("h2",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),a("p",[s._v("在源码目录中创建如下结构：")]),s._v(" "),a("ul",[a("li",[s._v("assets：用于存放资源文件")]),s._v(" "),a("li",[s._v("components：用于存放 Vue 功能组件")]),s._v(" "),a("li",[s._v("views：用于存放 Vue 视图组件")]),s._v(" "),a("li",[s._v("router：用于存放 vue-router 配置")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/20190217012252.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"创建视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建视图"}},[s._v("#")]),s._v(" 创建视图")]),s._v(" "),a("h3",{attrs:{id:"创建首页视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建首页视图"}},[s._v("#")]),s._v(" 创建首页视图")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("views")]),s._v(" 目录下创建一个名为 "),a("code",[s._v("Main.vue")]),s._v(" 的视图组件；该组件在当前章节无任何作用，主要用于登录后展示登录成功的跳转效果；")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    <template>\n        <div>\n          首页\n        </div>\n    </template>\n    \n    <script>\n        export default {\n            name: "Main"\n        }\n    <\/script>\n    \n    <style scoped>\n    \n    </style>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"创建登录页视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建登录页视图"}},[s._v("#")]),s._v(" 创建登录页视图")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("views")]),s._v(" 目录下创建一个名为 "),a("code",[s._v("Login.vue")]),s._v(" 的视图组件，其中 "),a("code",[s._v("el-*")]),s._v(" 的元素为 ElementUI 组件；")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    <template>\n      <div>\n        <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">\n          <h3 class="login-title">欢迎登录</h3>\n          <el-form-item label="账号" prop="username">\n            <el-input type="text" placeholder="请输入账号" v-model="form.username"/>\n          </el-form-item>\n          <el-form-item label="密码" prop="password">\n            <el-input type="password" placeholder="请输入密码" v-model="form.password"/>\n          </el-form-item>\n          <el-form-item>\n            <el-button type="primary" v-on:click="onSubmit(\'loginForm\')">登录</el-button>\n          </el-form-item>\n        </el-form>\n    \n        <el-dialog\n          title="温馨提示"\n          :visible.sync="dialogVisible"\n          width="30%"\n          :before-close="handleClose">\n          <span>请输入账号和密码</span>\n          <span slot="footer" class="dialog-footer">\n            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>\n          </span>\n        </el-dialog>\n      </div>\n    </template>\n    \n    <script>\n      export default {\n        name: "Login",\n        data() {\n          return {\n            form: {\n              username: \'\',\n              password: \'\'\n            },\n    \n            // 表单验证，需要在 el-form-item 元素中增加 prop 属性\n            rules: {\n              username: [\n                {required: true, message: \'账号不可为空\', trigger: \'blur\'}\n              ],\n              password: [\n                {required: true, message: \'密码不可为空\', trigger: \'blur\'}\n              ]\n            },\n    \n            // 对话框显示和隐藏\n            dialogVisible: false\n          }\n        },\n        methods: {\n          onSubmit(formName) {\n            // 为表单绑定验证功能\n            this.$refs[formName].validate((valid) => {\n              if (valid) {\n                // 使用 vue-router 路由到指定页面，该方式称之为编程式导航\n                this.$router.push("/main");\n              } else {\n                this.dialogVisible = true;\n                return false;\n              }\n            });\n          }\n        }\n      }\n    <\/script>\n    \n    <style lang="scss" scoped>\n      .login-box {\n        border: 1px solid #DCDFE6;\n        width: 350px;\n        margin: 180px auto;\n        padding: 35px 35px 15px 35px;\n        border-radius: 5px;\n        -webkit-border-radius: 5px;\n        -moz-border-radius: 5px;\n        box-shadow: 0 0 25px #909399;\n      }\n    \n      .login-title {\n        text-align: center;\n        margin: 0 auto 40px auto;\n        color: #303133;\n      }\n    </style>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br")])]),a("h2",{attrs:{id:"创建路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建路由"}},[s._v("#")]),s._v(" 创建路由")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("router")]),s._v(" 目录下创建一个名为 "),a("code",[s._v("index.js")]),s._v(" 的 vue-router 路由配置文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    import Vue from 'vue'\n    import Router from 'vue-router'\n    \n    import Login from \"../views/Login\"\n    import Main from '../views/Main'\n    \n    Vue.use(Router);\n    \n    export default new Router({\n      routes: [\n        {\n          // 登录页\n          path: '/login',\n          name: 'Login',\n          component: Login\n        },\n        {\n          // 首页\n          path: '/main',\n          name: 'Main',\n          component: Main\n        }\n      ]\n    });\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h2",{attrs:{id:"配置路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置路由"}},[s._v("#")]),s._v(" 配置路由")]),s._v(" "),a("h3",{attrs:{id:"修改入口代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改入口代码"}},[s._v("#")]),s._v(" 修改入口代码")]),s._v(" "),a("p",[s._v("修改 "),a("code",[s._v("main.js")]),s._v(" 入口代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    import Vue from 'vue'\n    import VueRouter from 'vue-router'\n    import router from './router'\n    \n    // 导入 ElementUI\n    import ElementUI from 'element-ui'\n    import 'element-ui/lib/theme-chalk/index.css'\n    \n    import App from './App'\n    \n    // 安装路由\n    Vue.use(VueRouter);\n    \n    // 安装 ElementUI\n    Vue.use(ElementUI);\n    \n    new Vue({\n      el: '#app',\n      // 启用路由\n      router,\n      // 启用 ElementUI\n      render: h => h(App)\n    });\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("修改 "),a("code",[s._v("App.vue")]),s._v(" 组件代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    <template>\n      <div id=\"app\">\n        <router-view/>\n      </div>\n    </template>\n    \n    <script>\n      export default {\n        name: 'App',\n      }\n    <\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"效果演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#效果演示"}},[s._v("#")]),s._v(" 效果演示")]),s._v(" "),a("p",[s._v("在浏览器打开 http://localhost:8080/#/login 你会看到如下效果")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/201902170001.gif",alt:""}})])])}),[],!1,null,null,null);n.default=t.exports}}]);