(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{1034:function(a,s,t){"use strict";t.r(s);var e=t(5),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"spring中的事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring中的事务"}},[a._v("#")]),a._v(" Spring中的事务")]),a._v(" "),t("p",[a._v("来源：https://www.bilibili.com/video/BV1EE411p7dD")]),a._v(" "),t("h2",{attrs:{id:"什么是事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是事务"}},[a._v("#")]),a._v(" 什么是事务")]),a._v(" "),t("p",[a._v("事务：是数据库操作的最小工作单元，是作为单个逻辑工作单元执行的一系列操作，这些操作作为一个整体像系统提交，要么都执行，要么都不执行；事务是一组不可再分割的操作集合（工作逻辑单元）")]),a._v(" "),t("p",[a._v("通俗点说就是为了达到某个目的而做的一系列的操作要么一起成功（事务提交），要么一起失败（事务回滚）")]),a._v(" "),t("p",[a._v("最常见的例子就是转账：")]),a._v(" "),t("p",[a._v("小明给如花转账：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("开启事务-------\n① 从小明的账户扣除1000元\n② 给如花的账户增加1000元\n事务提交-------\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("从上面的例子的任何步骤一旦出现问题，都会导致事务回滚。")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200503101957103.png",alt:"image-20200503101957103"}})]),a._v(" "),t("p",[a._v("从搭讪到结婚就是事务提交，女方要求男方重新追求她一次就是事务回滚~")]),a._v(" "),t("h2",{attrs:{id:"事务的四大特征"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务的四大特征"}},[a._v("#")]),a._v(" 事务的四大特征")]),a._v(" "),t("p",[a._v("ACID是事务的基本特征：口诀（一原持久隔离）")]),a._v(" "),t("ul",[t("li",[a._v("原子性（Atomicity）：事务是一个原子操作，由一系列动作组成。事务的原子性确保动作要么全部完成，要么完全不起作用。")]),a._v(" "),t("li",[a._v("一致性（Consistency）：事务执行后，数据库状态与其它业务规则保持一致，如转账业务，无论事务执行成功与否，参与转账的两个账号余额之和应该是不变的")]),a._v(" "),t("li",[a._v("隔离性（Isolation）：隔离性指在并发操作中，不同事务之间应该隔离开来，使每个并发中的事务不会相互干扰。")]),a._v(" "),t("li",[a._v("持久性（Durability）：一旦事务提交成功，事务中所有的数据操作都必须持久化到数据库中，即使提交事务后，数据库马上崩溃，在数据库重启时，也必须保证通过某种机制恢复数据。")])]),a._v(" "),t("h2",{attrs:{id:"原生jdbc事务操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原生jdbc事务操作"}},[a._v("#")]),a._v(" 原生JDBC事务操作")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("try {\n\t// 设置是否自动提交\n\tconnection.setAutoCommit(false)\n\t\n\t// 数据库操作 insert，update，delete\n\t\n\tconnection.commit()\n} catch(Exception ex) {\n\t// 回滚\n\tconnection.rollback()\n} finally {\n\tconnection.setAutoCommit(true)\n}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("h2",{attrs:{id:"事务隔离级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务隔离级别"}},[a._v("#")]),a._v(" 事务隔离级别")]),a._v(" "),t("p",[a._v("数据库事务的隔离级别有4中，由低到高分别是："),t("code",[a._v("Read uncomomitted（读取未被提交的数据）")]),a._v("、"),t("code",[a._v("Read committed（读取以被提交的数据）")]),a._v("、"),t("code",[a._v("Repeatable read（可重复读）")]),a._v("、"),t("code",[a._v("Serializable（完全隔离）")]),a._v("。而且，在事务的并发操作中，可能出现脏读、不可重复读、幻读、事务丢失")]),a._v(" "),t("h3",{attrs:{id:"四种隔离级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四种隔离级别"}},[a._v("#")]),a._v(" 四种隔离级别")]),a._v(" "),t("h4",{attrs:{id:"read-uncommitted"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read-uncommitted"}},[a._v("#")]),a._v(" Read UnCommitted")]),a._v(" "),t("p",[a._v("读未提交，顾名思义，就是一个事务可以读取另一个未提交事务的数据，会产生脏读")]),a._v(" "),t("h4",{attrs:{id:"read-committed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read-committed"}},[a._v("#")]),a._v(" Read Committed")]),a._v(" "),t("p",[t("code",[a._v("这种使用的概率比较高，因为很多时候我们就以最后一次读取的为准")])]),a._v(" "),t("p",[a._v("读提交，顾名思义，就是一个事务要等另一个事务提交后才能读取数据，会产生不可重复读。")]),a._v(" "),t("h4",{attrs:{id:"repeatable-read"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#repeatable-read"}},[a._v("#")]),a._v(" Repeatable Read")]),a._v(" "),t("p",[t("code",[a._v("相当于加锁，MySQL的默认级别")])]),a._v(" "),t("p",[a._v("重复读，就是在开始读取数据（事务开启）时，不在允许修改操作，可能会产生幻读。")]),a._v(" "),t("h4",{attrs:{id:"serializable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serializable"}},[a._v("#")]),a._v(" Serializable")]),a._v(" "),t("p",[a._v("最高的事务隔离级别，在改级别下，事务串行化顺序执行，可以避免脏读，不可重复读与幻读。但是这种事务隔离级别效率低下，比较耗数据库性能，一般不使用")]),a._v(" "),t("h4",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("大多数数据库默认的事务隔离级别是："),t("code",[a._v("Read Committed")]),a._v("，比如SqlServer，Oracle")]),a._v(" "),t("p",[a._v("MySQL的默认隔离级别是Repeatable Read")]),a._v(" "),t("h3",{attrs:{id:"可能出现的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可能出现的问题"}},[a._v("#")]),a._v(" 可能出现的问题")]),a._v(" "),t("h4",{attrs:{id:"脏读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脏读"}},[a._v("#")]),a._v(" 脏读")]),a._v(" "),t("p",[t("code",[a._v("读取了未提交的新事务，然后被回滚了")])]),a._v(" "),t("p",[a._v("事务A读取了事务B中尚未提交的数据，如果事务B回滚，则A读取使用了错误的数据")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200503111507422.png",alt:"image-20200503111507422"}})]),a._v(" "),t("h4",{attrs:{id:"不可重复读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不可重复读"}},[a._v("#")]),a._v(" 不可重复读")]),a._v(" "),t("p",[t("code",[a._v("读取了提交的新事物，指更新操作")])]),a._v(" "),t("p",[a._v("不可重复读是指对于数据库中某个数据，一个事务范围内多次查询却反悔不同的数值，这是由于在查询间隔，被另一个事务修改并提交了")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200503114507968.png",alt:"image-20200503114507968"}})]),a._v(" "),t("p",[a._v("解决不可重复读的一个解决方案，就是调整隔离级别。")]),a._v(" "),t("h4",{attrs:{id:"幻读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#幻读"}},[a._v("#")]),a._v(" 幻读")]),a._v(" "),t("p",[t("code",[a._v("读取了提交的新事物，指增删操作")])]),a._v(" "),t("p",[a._v("在事务A多次读取构成中，事务B对数据进行了新增操作，导致事务A多次读取的数据不一致")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200503114709457.png",alt:"image-20200503114709457"}})]),a._v(" "),t("p",[a._v("对于幻读的另外一个理解，可以为：")]),a._v(" "),t("p",[t("code",[a._v("幻读就是指新增了数据记录条数，第一次查询数据记录数为1000，再次查询的时候，变成了1001，这个就是幻读")])]),a._v(" "),t("h4",{attrs:{id:"不可重复读和幻读的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不可重复读和幻读的区别"}},[a._v("#")]),a._v(" 不可重复读和幻读的区别")]),a._v(" "),t("p",[a._v("很多人容易搞混不可重复读和幻读，确实这两者有些相似。但不可重复读重点在于update和delete，而幻读的重点在于insert")]),a._v(" "),t("ul",[t("li",[a._v("不可重复读,  只需要锁住满足条件的记录 "),t("code",[a._v("避免不可重复读需要锁行就行")])]),a._v(" "),t("li",[a._v("幻读  要锁住满足条件及其相近的记录 "),t("code",[a._v("避免幻读则需要锁表")])])]),a._v(" "),t("p",[a._v("所以说不可重复读和幻读最大的区别，就在于如何通过锁机制来解决他们产生的问题")]),a._v(" "),t("h2",{attrs:{id:"事务丢失"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务丢失"}},[a._v("#")]),a._v(" 事务丢失")]),a._v(" "),t("h3",{attrs:{id:"第一类事务丢失"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一类事务丢失"}},[a._v("#")]),a._v(" 第一类事务丢失")]),a._v(" "),t("p",[t("code",[a._v("称为：回滚丢失")])]),a._v(" "),t("p",[a._v("对于第一类事务丢失，就是比如A和B同时在执行一个数据，然后B事务已经提交了，然后A事务回滚了，这样B事务的操作就因A事务回滚而丢失了。")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200503115622743.png",alt:"image-20200503115622743"}})]),a._v(" "),t("h3",{attrs:{id:"第二类事务丢失"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二类事务丢失"}},[a._v("#")]),a._v(" 第二类事务丢失")]),a._v(" "),t("p",[t("code",[a._v("称为：覆盖丢失")])]),a._v(" "),t("p",[a._v("对于第二类事务丢失，也称为覆盖丢失，就是A和B一起执行一个数据，两个同时取到一个数据，然后B事务首先提交，但是A事务接下来又提交，这样就覆盖了B事务")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200503121151996.png",alt:"image-20200503121151996"}})]),a._v(" "),t("h2",{attrs:{id:"spring怎么配置事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring怎么配置事务"}},[a._v("#")]),a._v(" Spring怎么配置事务")]),a._v(" "),t("p",[t("code",[a._v("具体说出一些关键的xml元素")])]),a._v(" "),t("p",[a._v("准备数据表：")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200503212336011.png",alt:"image-20200503212336011"}})]),a._v(" "),t("p",[a._v("实体类：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("public class User {\n\tprivate Integer id;\n\tprivate String name;\n\tprivate Integer money;\n}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("Dao：")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200503213406622.png",alt:"image-20200503213406622"}})]),a._v(" "),t("p",[a._v("Service：默认一个出错的场景")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200503221133377.png",alt:"image-20200503221133377"}})]),a._v(" "),t("h3",{attrs:{id:"编程式事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编程式事务"}},[a._v("#")]),a._v(" 编程式事务")]),a._v(" "),t("p",[a._v("XML配置事务：在applicationContext.xml中添加事务管理器和事务管理器模板的配置")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200503222130639.png",alt:"image-20200503222130639"}})]),a._v(" "),t("p",[a._v("注解方式配置事务管理器和事务管理器模板")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/image-20200503222459984.png",alt:"image-20200503222459984"}})]),a._v(" "),t("h3",{attrs:{id:"声明式事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#声明式事务"}},[a._v("#")]),a._v(" 声明式事务")]),a._v(" "),t("p",[t("code",[a._v("基于AspectJ XML方式")])]),a._v(" "),t("p",[a._v("注：基于TransactionProxyFactoryBean，代理的方式是比较古老的方式，我们这里就不叙述了")]),a._v(" "),t("p",[a._v("删除applicationContext.xml中的事务管理模版的配置，就是下面的配置：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('\x3c!-- 事务管理的模板 --\x3e\n<bean id="transactionTemplate"\nclass="org.springframework.transaction.support.TransactionTemplate">\n\t<property name="transactionManager" ref="transactionManager" />\n</bean>\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("添加事务定义和AOP配置")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('\x3c!--基于AspectJ 申明式事务XML配置方式--\x3e\n\x3c!-- 定义一个增强 --\x3e\n<tx:advice id="txAdvice"\ntransaction-manager="transactionManager">\n\x3c!-- 增强(事务)的属性的配置 --\x3e\n    <tx:attributes>\n    \x3c!-- isolation：DEFAULT ，事务的隔离级别。\n    propagation：事务的传播行为.\n    read-only：false，不是只读\n    timeout：-1\n    no-rollback-for：发生哪些异常不回滚\n    rollback-for：发生哪些异常回滚事务\n    --\x3e\n    <tx:method name="transfer" isolation="DEFAULT" propagation="REQUIRED"/>\n    </tx:attributes>\n</tx:advice>\n\x3c!-- aop配置定义切面和切点的信息 --\x3e\n<aop:config>\n    \x3c!-- 定义切点:哪些类的哪些方法应用增强 --\x3e\n    <aop:pointcut\n    expression="execution(* com.dk.beans.service..*.*(..))"\n    id="mypointcut" />\n    \x3c!-- 定义切面: --\x3e\n    <aop:advisor advice-ref="txAdvice" pointcut-ref="mypointcut" />\n</aop:config>\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br")])]),t("p",[a._v("业务类改成原来的方式")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('/**\n* 沒有事務的转账的业务\n* @param fromName\n* @param toName\n* @param money\n*/\npublic void transfer(String fromName, String toName, Integer money) {\n    userDAO.out(fromName, money);// 转出钱\n    int x = 10;\n    if(x == 10)\n    throw new RuntimeException("出错啦！");\n    userDAO.in(toName, money);// 收入钱\n}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("p",[a._v("基于注解的申明式事务：\n在配置类上配置@EnableTransactionManagement开启事务。删除注解类中和事务相关的@Bane")]),a._v(" "),t("p",[a._v("在UserService类上方或者方法上方通过@Transactional完成事务配置：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("@Service\n@Transactional\npublic class UserService {\n\n}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("申明式事务可以按照对应什么开头的方法 给配置事务")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('\x3c!-- 以insert开头的方法配置事务 --\x3e\n<tx:method name="insert*" isolation="DEFAULT" propagation="REQUIRED"/>\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h3",{attrs:{id:"spring事务传播特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring事务传播特性"}},[a._v("#")]),a._v(" Spring事务传播特性")]),a._v(" "),t("p",[a._v("指的就是当一个事务方法被另一个事务方法调用时，这个事务方法应该如何进行。举例子")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('public class PersonService {\n    @Transactional\n    public void laoda(){\n        System.out.println("老大的方法");\n        xiaodi();\n    }\n    @Transactional\n    public void xiaodi(){\n        System.out.println("小弟方法");\n    }\n}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("p",[a._v("也就是当老大的方法，调用小弟的方法时，小弟的事务该怎么办？")]),a._v(" "),t("p",[a._v("假设老大的方法出现异常，那么小弟的需不需要回滚？")]),a._v(" "),t("p",[a._v("假设小弟的方法出现异常，那么老大的放法需不需要回滚？")]),a._v(" "),t("h4",{attrs:{id:"死活不要事务的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#死活不要事务的"}},[a._v("#")]),a._v(" 死活不要事务的")]),a._v(" "),t("ul",[t("li",[a._v("PROPAGATION_NEVER：没有就非事务执行，有就抛出异常")]),a._v(" "),t("li",[a._v("PROPAGATION_NOT_SUPPORTED：没有就非事务执行，有就直接挂起，然后非事务执行\n"),t("ul",[t("li",[a._v("这个容易出现死锁")])])])]),a._v(" "),t("h4",{attrs:{id:"可有可无的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可有可无的"}},[a._v("#")]),a._v(" 可有可无的")]),a._v(" "),t("ul",[t("li",[a._v("PROPAGATION_SUPPORTS: 有就用，没有就算了")])]),a._v(" "),t("h4",{attrs:{id:"必须有事务的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#必须有事务的"}},[a._v("#")]),a._v(" 必须有事务的")]),a._v(" "),t("ul",[t("li",[a._v("PROPAGATION_REQUIRES_NEW：有没有都新建事务，如果原来有，就将原来的挂起。也就是说事务之间完全隔离，一个事务不影响其它的事务")]),a._v(" "),t("li",[a._v("PROPAGATION_NESTED: 如果没有，就新建一个事务；如果有，就在当前事务中嵌套其他事务。嵌套事务就是外面的事务出异常，里面的事务全部回滚")]),a._v(" "),t("li",[a._v("PROPAGATION_REQUIRED: （默认的配置）如果没有，就新建一个事务；如果有，就加入当前事务")]),a._v(" "),t("li",[a._v("PROPAGATION_MANDATORY: 如果没有，就抛出异常；如果有，就使用当前事务。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);