(window.webpackJsonp=window.webpackJsonp||[]).push([[828],{1524:function(s,a,e){"use strict";e.r(a);var n=e(5),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"mybatis-动态-sql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-动态-sql"}},[s._v("#")]),s._v(" MyBatis 动态 SQL")]),s._v(" "),e("p",[s._v("动态 SQL，主要用于解决查询条件不确定的情况：在程序运行期间，根据用户提交的查询条件进行查询。提交的查询条件不同，执行的 SQL 语句不同。若将每种可能的情况均逐一列出，对所有条件进行排列组合，将会出现大量的 SQL 语句。此时，可使用动态 SQL 来解决这样的问题。")]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/1514409215.png",alt:""}})]),s._v(" "),e("p",[s._v("动态 SQL，即通过 MyBatis 提供的各种标签对条件作出判断以实现动态拼接 SQL 语句。")]),s._v(" "),e("p",[s._v("这里的条件判断使用的表达式为 OGNL 表达式。常用的动态 SQL 标签有 "),e("code",[s._v("<if>")]),s._v("、"),e("code",[s._v("<where>")]),s._v("、"),e("code",[s._v("<choose>")]),s._v("、"),e("code",[s._v("<foreach>")]),s._v(" 等。")]),s._v(" "),e("h2",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),e("p",[s._v("在 mapper 的动态 SQL 中若出现大于号（"),e("code",[s._v(">")]),s._v("）、小于号（"),e("code",[s._v("<")]),s._v("）、大于等于号（"),e("code",[s._v(">=")]),s._v("），小于等于号（"),e("code",[s._v("<=")]),s._v("）等符号，最好将其转换为实体符号。否则，XML 可能会出现解析出错问题。")]),s._v(" "),e("p",[s._v("特别是对于小于号（"),e("code",[s._v("<")]),s._v("），在 XML 中是绝对不能出现的。否则，一定出错。")]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/1514409933.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"if-标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#if-标签"}},[s._v("#")]),s._v(" if 标签")]),s._v(" "),e("p",[s._v("对于该标签的执行，当 test 的值为 true 时，会将其包含的 SQL 片断拼接到其所在的 SQL 语句中。")]),s._v(" "),e("p",[s._v("本例实现的功能是：查询出满足用户提交查询条件的所有学生。用户提交的查询条件可以包含一个姓名的模糊查询，同时还可以包含一个年龄的下限。当然，用户在提交表单时可能两个条件均做出了设定，也可能两个条件均不做设定，也可以只做其中一项设定。")]),s._v(" "),e("p",[s._v("这引发的问题是，查询条件不确定，查询条件依赖于用户提交的内容。此时，就可使用动态 SQL 语句，根据用户提交内容对将要执行的 SQL 进行拼接。")]),s._v(" "),e("h3",{attrs:{id:"定义映射文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义映射文件"}},[s._v("#")]),s._v(" 定义映射文件")]),s._v(" "),e("p",[s._v("为了解决两个条件均未做设定的情况，在 "),e("code",[s._v("where")]),s._v(" 后添加了一个“"),e("code",[s._v("1=1")]),s._v("”的条件。这样就不至于两个条件均未设定而出现只剩下一个 "),e("code",[s._v("where")]),s._v("，而没有任何可拼接的条件的不完整 SQL 语句。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    <?xml version="1.0" encoding="UTF-8" ?>\n    <!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n    <mapper namespace="com.cmcc.mybatis.dao.DynamicStudentDao">\n        \x3c!-- if --\x3e\n        <select id="selectByIf" resultType="com.cmcc.mybatis.entity.Student">\n            SELECT\n                id,\n                name,\n                age,\n                score\n            FROM\n                student\n            WHERE 1 = 1\n            <if test="name != null and name != \'\'">\n                AND name LIKE concat(\'%\', #{name}, \'%\')\n            </if>\n            <if test="age != null and age > 0">\n                AND age > #{age}\n            </if>\n        </select>\n    </mapper>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("h2",{attrs:{id:"where-标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#where-标签"}},[s._v("#")]),s._v(" where 标签")]),s._v(" "),e("p",[e("code",[s._v("<if/>")]),s._v(" 标签的中存在一个比较麻烦的地方：需要在 "),e("code",[s._v("where")]),s._v(" 后手工添加 "),e("code",[s._v("1=1")]),s._v(" 的子句。因为，若 "),e("code",[s._v("where")]),s._v(" 后的所有 "),e("code",[s._v("<if/>")]),s._v(" 条件均为 "),e("code",[s._v("false")]),s._v("，而 "),e("code",[s._v("where")]),s._v(" 后若又没有 "),e("code",[s._v("1=1")]),s._v(" 子句，则 SQL 中就会只剩下一个空的 "),e("code",[s._v("where")]),s._v("，SQL 出错。所以，在 "),e("code",[s._v("where")]),s._v(" 后，需要添加永为真子句 "),e("code",[s._v("1=1")]),s._v("，以防止这种情况的发生。但当数据量很大时，会严重影响查询效率。")]),s._v(" "),e("h3",{attrs:{id:"定义映射文件-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义映射文件-2"}},[s._v("#")]),s._v(" 定义映射文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    \x3c!-- where--\x3e\n    <select id="selectByWhere" resultType="com.cmcc.mybatis.entity.Student">\n        SELECT\n            id,\n            name,\n            age,\n            score\n        FROM\n          student\n        <where>\n            <if test="name != null and name != \'\'">\n                AND name LIKE concat(\'%\', #{name}, \'%\')\n            </if>\n            <if test="age != null and age > 0">\n                AND age > #{age}\n            </if>\n        </where>\n    </select>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("h2",{attrs:{id:"choose-标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#choose-标签"}},[s._v("#")]),s._v(" choose 标签")]),s._v(" "),e("p",[s._v("该标签中只可以包含 "),e("code",[s._v("<when/>")]),s._v(" "),e("code",[s._v("<otherwise/>")]),s._v("，可以包含多个 "),e("code",[s._v("<when/>")]),s._v(" 与一个 "),e("code",[s._v("<otherwise/>")]),s._v("。它们联合使用，完成 Java 中的开关语句 switch..case 功能。")]),s._v(" "),e("p",[s._v("本例要完成的需求是，若姓名不空，则按照姓名查询；若姓名为空，则按照年龄查询；若没有查询条件，则没有查询结果。")]),s._v(" "),e("h3",{attrs:{id:"定义映射文件-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义映射文件-3"}},[s._v("#")]),s._v(" 定义映射文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    \x3c!-- choose --\x3e\n    <select id="selectByChoose" resultType="com.cmcc.mybatis.entity.Student">\n        SELECT\n            id,\n            name,\n            age,\n            score\n        FROM\n          student\n        <where>\n            <choose>\n                <when test="name != null and name != \'\'">\n                    AND name LIKE concat(\'%\', #{name}, \'%\')\n                </when>\n                <when test="age != null and age > 0">\n                    AND age > #{age}\n                </when>\n                <otherwise>\n                    AND 1 != 1\n                </otherwise>\n            </choose>\n        </where>\n    </select>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("h2",{attrs:{id:"foreach-标签-遍历数组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#foreach-标签-遍历数组"}},[s._v("#")]),s._v(" foreach 标签-遍历数组")]),s._v(" "),e("p",[e("code",[s._v("<foreach/>")]),s._v(" 标签用于实现对于数组与集合的遍历。对其使用，需要注意：")]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("collection")]),s._v(" 表示要遍历的集合类型，这里是数组，即 array。")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("open")]),s._v("、"),e("code",[s._v("close")]),s._v("、"),e("code",[s._v("separator")]),s._v(" 为对遍历内容的 SQL 拼接。")])])]),s._v(" "),e("p",[s._v("本例实现的需求是，查询出 id 为 2 与 4 的学生信息。")]),s._v(" "),e("h3",{attrs:{id:"定义映射文件-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义映射文件-4"}},[s._v("#")]),s._v(" 定义映射文件")]),s._v(" "),e("p",[s._v("动态 SQL 的判断中使用的都是 OGNL 表达式。OGNL 表达式中的数组使用 "),e("code",[s._v("array")]),s._v(" 表示，数组长度使用 "),e("code",[s._v("array.length")]),s._v(" 表示。")]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/1514413085.png",alt:""}})]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    \x3c!-- foreach --\x3e\n    <select id="selectByForeach" resultType="com.cmcc.mybatis.entity.Student">\n        \x3c!-- select * from student where id in (2, 4) --\x3e\n        SELECT\n            id,\n            name,\n            age,\n            score\n        FROM\n          student\n        <if test="array != null and array.length > 0">\n            WHERE id IN\n            <foreach collection="array" open="(" close=")" item="id" separator=",">\n                #{id}\n            </foreach>\n        </if>\n    </select>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("h2",{attrs:{id:"foreach-标签-遍历集合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#foreach-标签-遍历集合"}},[s._v("#")]),s._v(" foreach 标签-遍历集合")]),s._v(" "),e("p",[s._v("遍历集合的方式与遍历数组的方式相同，只不过是将 "),e("code",[s._v("array")]),s._v(" 替换成了 "),e("code",[s._v("list")])]),s._v(" "),e("h3",{attrs:{id:"遍历泛型为基本类型的-list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遍历泛型为基本类型的-list"}},[s._v("#")]),s._v(" 遍历泛型为基本类型的 List")]),s._v(" "),e("h4",{attrs:{id:"定义-dao-接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义-dao-接口"}},[s._v("#")]),s._v(" 定义 DAO 接口")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    /**\n     * 使用 foreach 标签以 list 基本类型的形式查询\n     * @param ids\n     * @return\n     */\n    public List<Student> selectByForeachWithListBase(List<Long> ids);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h4",{attrs:{id:"定义映射文件-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义映射文件-5"}},[s._v("#")]),s._v(" 定义映射文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    \x3c!-- foreach --\x3e\n    <select id="selectByForeachWithListBase" resultType="com.cmcc.mybatis.entity.Student">\n        \x3c!-- select * from student where id in (2, 4) --\x3e\n        SELECT\n            id,\n            name,\n            age,\n            score\n        FROM\n          student\n        <if test="list != null and list.size > 0">\n            WHERE id IN\n            <foreach collection="list" open="(" close=")" item="id" separator=",">\n                #{id}\n            </foreach>\n        </if>\n    </select>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("h3",{attrs:{id:"遍历泛型为自定义类型的-list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遍历泛型为自定义类型的-list"}},[s._v("#")]),s._v(" 遍历泛型为自定义类型的 List")]),s._v(" "),e("h4",{attrs:{id:"定义-dao-接口-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义-dao-接口-2"}},[s._v("#")]),s._v(" 定义 DAO 接口")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    /**\n     * 使用 foreach 标签以 list 自定义类型的形式查询\n     * @param students\n     * @return\n     */\n    public List<Student> selectByForeachWithListCustom(List<Student> students);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h4",{attrs:{id:"定义映射文件-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义映射文件-6"}},[s._v("#")]),s._v(" 定义映射文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    \x3c!-- foreach --\x3e\n    <select id="selectByForeachWithListCustom" resultType="com.cmcc.mybatis.entity.Student">\n        \x3c!-- select * from student where id in (2, 4) --\x3e\n        SELECT\n            id,\n            name,\n            age,\n            score\n        FROM\n          student\n        <if test="list != null and list.size > 0">\n            WHERE id IN\n            <foreach collection="list" open="(" close=")" item="student" separator=",">\n                #{student.id}\n            </foreach>\n        </if>\n    </select>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("h2",{attrs:{id:"sql-标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql-标签"}},[s._v("#")]),s._v(" sql 标签")]),s._v(" "),e("p",[e("code",[s._v("<sql/>")]),s._v(" 标签用于定义 SQL 片断，以便其它 SQL 标签复用。而其它标签使用该 SQL 片断， 需要使用 "),e("code",[s._v("<include/>")]),s._v(" 子标签。该 "),e("code",[s._v("<sql/>")]),s._v(" 标签可以定义 SQL 语句中的任何部分，所以 "),e("code",[s._v("<include/>")]),s._v(" 子标签可以放在动态 SQL 的任何位置。")]),s._v(" "),e("h3",{attrs:{id:"修改映射文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改映射文件"}},[s._v("#")]),s._v(" 修改映射文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    <sql id="select">\n        SELECT\n            id,\n            name,\n            age,\n            score\n        FROM\n          student\n    </sql>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    \x3c!-- foreach --\x3e\n    <select id="selectByForeachWithListCustom" resultType="com.cmcc.mybatis.entity.Student">\n        \x3c!-- select * from student where id in (2, 4) --\x3e\n        <include refid="select" />\n    \n        <if test="list != null and list.size > 0">\n            WHERE id IN\n            <foreach collection="list" open="(" close=")" item="student" separator=",">\n                #{student.id}\n            </foreach>\n        </if>\n    </select>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[e("img",{attrs:{src:"/img/1514414809.png",alt:""}})])])}),[],!1,null,null,null);a.default=t.exports}}]);