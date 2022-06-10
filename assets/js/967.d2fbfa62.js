(window.webpackJsonp=window.webpackJsonp||[]).push([[967],{1668:function(s,a,n){"use strict";n.r(a);var e=n(5),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"配置-swagger2-接口文档引擎"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-swagger2-接口文档引擎"}},[s._v("#")]),s._v(" 配置 Swagger2 接口文档引擎")]),s._v(" "),n("h2",{attrs:{id:"手写文档存在的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#手写文档存在的问题"}},[s._v("#")]),s._v(" 手写文档存在的问题")]),s._v(" "),n("ul",[n("li",[s._v("文档需要更新的时候，需要再次发送一份给前端，也就是文档更新交流不及时。")]),s._v(" "),n("li",[s._v("接口返回结果不明确")]),s._v(" "),n("li",[s._v("不能直接在线测试接口，通常需要使用工具，比如："),n("code",[s._v("Postman")])]),s._v(" "),n("li",[s._v("接口文档太多，不好管理")])]),s._v(" "),n("h2",{attrs:{id:"使用-swagger-解决问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-swagger-解决问题"}},[s._v("#")]),s._v(" 使用 Swagger 解决问题")]),s._v(" "),n("p",[s._v("Swagger 也就是为了解决这个问题，当然也不能说 Swagger 就一定是完美的，当然也有缺点，最明显的就是代码植入性比较强。")]),s._v(" "),n("h3",{attrs:{id:"maven"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven"}},[s._v("#")]),s._v(" Maven")]),s._v(" "),n("p",[s._v("增加 Swagger2 所需依赖，"),n("code",[s._v("pom.xml")]),s._v(" 配置如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    \x3c!-- Swagger2 Begin --\x3e\n    <dependency>\n        <groupId>io.springfox</groupId>\n        <artifactId>springfox-swagger2</artifactId>\n        <version>2.8.0</version>\n    </dependency>\n    <dependency>\n        <groupId>io.springfox</groupId>\n        <artifactId>springfox-swagger-ui</artifactId>\n        <version>2.8.0</version>\n    </dependency>\n    \x3c!-- Swagger2 End --\x3e\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"配置-swagger2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-swagger2"}},[s._v("#")]),s._v(" 配置 Swagger2")]),s._v(" "),n("p",[s._v("注意："),n("code",[s._v('RequestHandlerSelectors.basePackage("com.cmcc.itoken.service.admin.controller")')]),s._v(" 为 Controller 包路径，不然生成的文档扫描不到接口")]),s._v(" "),n("p",[s._v("创建一个名为 "),n("code",[s._v("Swagger2Config")]),s._v(" 的 Java 配置类，代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    package com.cmcc.itoken.service.admin.config;\n    \n    import org.springframework.context.annotation.Bean;\n    import org.springframework.context.annotation.Configuration;\n    import springfox.documentation.builders.ApiInfoBuilder;\n    import springfox.documentation.builders.PathSelectors;\n    import springfox.documentation.builders.RequestHandlerSelectors;\n    import springfox.documentation.service.ApiInfo;\n    import springfox.documentation.spi.DocumentationType;\n    import springfox.documentation.spring.web.plugins.Docket;\n    \n    @Configuration\n    public class Swagger2Config {\n        @Bean\n        public Docket createRestApi() {\n            return new Docket(DocumentationType.SWAGGER_2)\n                    .apiInfo(apiInfo())\n                    .select()\n                    .apis(RequestHandlerSelectors.basePackage("com.cmcc.itoken.service.admin.controller"))\n                    .paths(PathSelectors.any())\n                    .build();\n        }\n    \n        private ApiInfo apiInfo() {\n            return new ApiInfoBuilder()\n                    .title("iToken API 文档")\n                    .description("iToken API 网关接口，http://www.cmcc.com")\n                    .termsOfServiceUrl("http://www.cmcc.com")\n                    .version("1.0.0")\n                    .build();\n        }\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("h3",{attrs:{id:"启用-swagger2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启用-swagger2"}},[s._v("#")]),s._v(" 启用 Swagger2")]),s._v(" "),n("p",[s._v("Application 中加上注解 "),n("code",[s._v("@EnableSwagger2")]),s._v(" 表示开启 Swagger")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    package com.cmcc.itoken.service.admin;\n    \n    import org.springframework.boot.SpringApplication;\n    import org.springframework.boot.autoconfigure.SpringBootApplication;\n    import org.springframework.cloud.netflix.eureka.EnableEurekaClient;\n    import springfox.documentation.swagger2.annotations.EnableSwagger2;\n    import tk.mybatis.spring.annotation.MapperScan;\n    \n    @SpringBootApplication(scanBasePackages = "com.cmcc.itoken")\n    @EnableEurekaClient\n    @EnableSwagger2\n    @MapperScan(basePackages = {"com.cmcc.itoken.common.mapper", "com.cmcc.itoken.service.admin.mapper"})\n    public class ServiceAdminApplication {\n        public static void main(String[] args) {\n            SpringApplication.run(ServiceAdminApplication.class, args);\n        }\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h3",{attrs:{id:"使用-swagger2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-swagger2"}},[s._v("#")]),s._v(" 使用 Swagger2")]),s._v(" "),n("p",[s._v("在 Controller 中增加 Swagger2 相关注解，代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    /**\n     * 分页查询\n     *\n     * @param pageNum\n     * @param pageSize\n     * @param tbSysUserJson\n     * @return\n     */\n    @ApiOperation(value = "管理员分页查询")\n    @ApiImplicitParams({\n            @ApiImplicitParam(name = "pageNum", value = "页码", required = true, dataType = "int", paramType = "path"),\n            @ApiImplicitParam(name = "pageSize", value = "笔数", required = true, dataType = "int", paramType = "path"),\n            @ApiImplicitParam(name = "tbSysUserJson", value = "管理员对象 JSON 字符串", required = false, dataTypeClass = String.class, paramType = "json")\n    })\n    @RequestMapping(value = "page/{pageNum}/{pageSize}", method = RequestMethod.GET)\n    public BaseResult page(\n            @PathVariable(required = true) int pageNum,\n            @PathVariable(required = true) int pageSize,\n            @RequestParam(required = false) String tbSysUserJson\n    ) throws Exception {\n    \n        TbSysUser tbSysUser = null;\n        if (tbSysUserJson != null) {\n            tbSysUser = MapperUtils.json2pojo(tbSysUserJson, TbSysUser.class);\n        }\n        PageInfo pageInfo = adminService.page(pageNum, pageSize, tbSysUser);\n    \n        // 分页后的结果集\n        List<TbSysUser> list = pageInfo.getList();\n    \n        // 封装 Cursor 对象\n        BaseResult.Cursor cursor = new BaseResult.Cursor();\n        cursor.setTotal(new Long(pageInfo.getTotal()).intValue());\n        cursor.setOffset(pageInfo.getPageNum());\n        cursor.setLimit(pageInfo.getPageSize());\n    \n        return BaseResult.ok(list, cursor);\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br")])]),n("h3",{attrs:{id:"swagger-注解说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#swagger-注解说明"}},[s._v("#")]),s._v(" Swagger 注解说明")]),s._v(" "),n("p",[s._v("Swagger 通过注解表明该接口会生成文档，包括接口名、请求方法、参数、返回信息的等等。")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("@Api")]),s._v("：修饰整个类，描述 Controller 的作用")]),s._v(" "),n("li",[n("code",[s._v("@ApiOperation")]),s._v("：描述一个类的一个方法，或者说一个接口")]),s._v(" "),n("li",[n("code",[s._v("@ApiParam")]),s._v("：单个参数描述")]),s._v(" "),n("li",[n("code",[s._v("@ApiModel")]),s._v("：用对象来接收参数")]),s._v(" "),n("li",[n("code",[s._v("@ApiProperty")]),s._v("：用对象接收参数时，描述对象的一个字段")]),s._v(" "),n("li",[n("code",[s._v("@ApiResponse")]),s._v("：HTTP 响应其中 1 个描述")]),s._v(" "),n("li",[n("code",[s._v("@ApiResponses")]),s._v("：HTTP 响应整体描述")]),s._v(" "),n("li",[n("code",[s._v("@ApiIgnore")]),s._v("：使用该注解忽略这个API")]),s._v(" "),n("li",[n("code",[s._v("@ApiError")]),s._v("：发生错误返回的信息")]),s._v(" "),n("li",[n("code",[s._v("@ApiImplicitParam")]),s._v("：一个请求参数")]),s._v(" "),n("li",[n("code",[s._v("@ApiImplicitParams")]),s._v("：多个请求参数")])]),s._v(" "),n("h3",{attrs:{id:"访问-swagger2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#访问-swagger2"}},[s._v("#")]),s._v(" 访问 Swagger2")]),s._v(" "),n("p",[s._v("访问地址：http://ip:port/swagger-ui.html")]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/1534120243.png",alt:""}})])])}),[],!1,null,null,null);a.default=r.exports}}]);