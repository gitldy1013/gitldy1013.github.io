(window.webpackJsonp=window.webpackJsonp||[]).push([[1101],{1797:function(s,e,a){"use strict";a.r(e);var n=a(5),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vuex-快速入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex-快速入门"}},[s._v("#")]),s._v(" Vuex 快速入门")]),s._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[s._v("Vuex 是一个专为 Vue.js 应用程序开发的 "),a("strong",[s._v("状态管理模式")]),s._v("。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。")]),s._v(" "),a("h2",{attrs:{id:"目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[s._v("#")]),s._v(" 目标")]),s._v(" "),a("p",[s._v("继续之前 "),a("RouterLink",{attrs:{to:"/zh/vue-router/"}},[s._v("vue-router")]),s._v(" 章节做的案例项目，我们通过完善登录功能将用户信息保存至 Vuex 中来体会它的作用；")],1),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("在项目根目录执行如下命令来安装 Vuex")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    npm install vuex --save\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改 "),a("code",[s._v("main.js")]),s._v(" 文件，导入 Vuex，关键代码如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    import Vuex from 'vuex'\n    Vue.use(Vuex);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"判断用户是否登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断用户是否登录"}},[s._v("#")]),s._v(" 判断用户是否登录")]),s._v(" "),a("p",[s._v("我们利用路由钩子 "),a("code",[s._v("beforeEach")]),s._v(" 来判断用户是否登录，期间会用到 "),a("code",[s._v("sessionStorage")]),s._v(" 存储功能")]),s._v(" "),a("h3",{attrs:{id:"修改-login-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-login-vue"}},[s._v("#")]),s._v(" 修改 "),a("code",[s._v("Login.vue")])]),s._v(" "),a("p",[s._v("在表单验证成功方法内增加如下代码：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    // 设置用户登录成功\n    sessionStorage.setItem('isLogin', 'true');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"修改-main-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-main-js"}},[s._v("#")]),s._v(" 修改 "),a("code",[s._v("main.js")])]),s._v(" "),a("p",[s._v("利用路由钩子 "),a("code",[s._v("beforeEach")]),s._v(" 方法判断用户是否成功登录，关键代码如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    // 在跳转前执行\n    router.beforeEach((to, form, next) => {\n      // 获取用户登录状态\n      let isLogin = sessionStorage.getItem('isLogin');\n    \n      // 注销\n      if (to.path == '/logout') {\n        // 清空\n        sessionStorage.clear();\n    \n        // 跳转到登录\n        next({path: '/login'});\n      }\n    \n      // 如果请求的是登录页\n      else if (to.path == '/login') {\n        if (isLogin != null) {\n          // 跳转到首页\n          next({path: '/main'});\n        }\n      }\n    \n      // 如果为非登录状态\n      else if (isLogin == null) {\n        // 跳转到登录页\n        next({path: '/login'});\n      }\n    \n      // 下一个路由\n      next();\n    });\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("h2",{attrs:{id:"配置-vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-vuex"}},[s._v("#")]),s._v(" 配置 "),a("code",[s._v("vuex")])]),s._v(" "),a("h3",{attrs:{id:"创建-vuex-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-vuex-配置文件"}},[s._v("#")]),s._v(" 创建 Vuex 配置文件")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("src")]),s._v(" 目录下创建一个名为 "),a("code",[s._v("store")]),s._v(" 的目录并新建一个名为 "),a("code",[s._v("index.js")]),s._v(" 文件用来配置 Vuex，代码如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    import Vue from 'vue'\n    import Vuex from 'vuex'\n    Vue.use(Vuex);\n    \n    // 全局 state 对象，用于保存所有组件的公共数据\n    const state = {\n      // 定义一个 user 对象\n      // 在组件中是通过 this.$store.state.user 来获取\n      user: {\n        username: ''\n      }\n    };\n    \n    // 实时监听 state 值的最新状态，注意这里的 getters 可以理解为计算属性\n    const getters = {\n      // 在组件中是通过 this.$store.getters.getUser 来获取\n      getUser(state) {\n        return state.user;\n      }\n    };\n    \n    // 定义改变 state 初始值的方法，这里是唯一可以改变 state 的地方，缺点是只能同步执行\n    const mutations = {\n      // 在组件中是通过 this.$store.commit('updateUser', user); 方法来调用 mutations\n      updateUser(state, user) {\n        state.user = user;\n      }\n    };\n    \n    // 定义触发 mutations 里函数的方法，可以异步执行 mutations 里的函数\n    const actions = {\n      // 在组件中是通过 this.$store.dispatch('asyncUpdateUser', user); 来调用 actions\n      asyncUpdateUser(context, user) {\n        context.commit('updateUser', user);\n      }\n    };\n    \n    export default new Vuex.Store({\n      state,\n      getters,\n      mutations,\n      actions\n    });\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br")])]),a("p",[s._v("修改 "),a("code",[s._v("main.js")]),s._v(" 增加刚才配置的 "),a("code",[s._v("store/index.js")]),s._v("，关键代码如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    import Vue from 'vue'\n    import Vuex from 'vuex'\n    import store from './store'\n    \n    Vue.use(Vuex);\n    \n    new Vue({\n      el: '#app',\n      store\n    });\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"解决浏览器刷新后-vuex-数据消失问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决浏览器刷新后-vuex-数据消失问题"}},[s._v("#")]),s._v(" 解决浏览器刷新后 Vuex 数据消失问题")]),s._v(" "),a("h4",{attrs:{id:"问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[s._v("#")]),s._v(" 问题描述")]),s._v(" "),a("p",[s._v("Vuex 的状态存储是响应式的，当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。但是有一个问题就是：vuex 的存储的数据只是在页面的中，相当于我们定义的全局变量，刷新之后，里边的数据就会恢复到初始化状态。但是这个情况有时候并不是我们所希望的。")]),s._v(" "),a("h4",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),a("p",[s._v("监听页面是否刷新，如果页面刷新了，将 state 对象存入到 sessionStorage 中。页面打开之后，判断 sessionStorage 中是否存在 state 对象，如果存在，则说明页面是被刷新过的，将 sessionStorage 中存的数据取出来给 vuex 中的 state 赋值。如果不存在，说明是第一次打开，则取 vuex 中定义的 state 初始值。")]),s._v(" "),a("h4",{attrs:{id:"修改代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改代码"}},[s._v("#")]),s._v(" 修改代码")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("App.vue")]),s._v(" 中增加监听刷新事件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("      export default {\n        name: 'App',\n        mounted() {\n          window.addEventListener('unload', this.saveState);\n        },\n        methods: {\n          saveState() {\n            sessionStorage.setItem('state', JSON.stringify(this.$store.state));\n          }\n        }\n      }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("修改 "),a("code",[s._v("store/index.js")]),s._v(" 中的 state")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    const state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {\n      user: {\n        username: ''\n      }\n    };\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[s._v("#")]),s._v(" 模块化")]),s._v(" "),a("p",[s._v("由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割")]),s._v(" "),a("h3",{attrs:{id:"创建-user-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-user-模块"}},[s._v("#")]),s._v(" 创建 "),a("code",[s._v("user")]),s._v(" 模块")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("store")]),s._v(" 目录下创建一个名为 "),a("code",[s._v("modules")]),s._v(" 的目录并创建一个名为 "),a("code",[s._v("user.js")]),s._v(" 的文件，代码如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    const user = {\n      // 因为模块化了，所以解决刷新问题的代码需要改造一下\n      state: sessionStorage.getItem('userState') ? JSON.parse(sessionStorage.getItem('userState')) : {\n        user: {\n          username: ''\n        }\n      },\n      getters: {\n        getUser(state) {\n          return state.user;\n        }\n      },\n      mutations: {\n        updateUser(state, user) {\n          state.user = user;\n        }\n      },\n      actions: {\n        asyncUpdateUser(context, user) {\n          context.commit('updateUser', user);\n        }\n      }\n    };\n    \n    export default user;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h3",{attrs:{id:"修改-store-index-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-store-index-js"}},[s._v("#")]),s._v(" 修改 "),a("code",[s._v("store/index.js")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    import Vue from 'vue'\n    import Vuex from 'vuex'\n    \n    import user from './modules/user'\n    \n    Vue.use(Vuex);\n    \n    export default new Vuex.Store({\n      modules: {\n        // this.$store.state.user\n        user\n      }\n    });\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[a("strong",[s._v("备注：由于组件中使用的是 "),a("code",[s._v("getters")]),s._v(" 和 "),a("code",[s._v("actions")]),s._v(" 处理，所以调用代码不变")])]),s._v(" "),a("h3",{attrs:{id:"修改-app-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-app-vue"}},[s._v("#")]),s._v(" 修改 "),a("code",[s._v("App.vue")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("      export default {\n        name: 'App',\n        mounted() {\n          window.addEventListener('unload', this.saveState);\n        },\n        methods: {\n          saveState() {\n            // 模块化后，调用 state 的代码修改为 this.$store.state.user\n            sessionStorage.setItem('userState', JSON.stringify(this.$store.state.user));\n          }\n        }\n      }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);