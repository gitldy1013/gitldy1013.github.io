(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{1091:function(e,a,r){"use strict";r.r(a);var t=r(5),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"什么是-zookeeper"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-zookeeper"}},[e._v("#")]),e._v(" 什么是 Zookeeper")]),e._v(" "),r("h2",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),r("p",[e._v("ZooKeeper 是一种分布式协调服务，用于管理大型主机。在分布式环境中协调和管理服务是一个复杂的过程。ZooKeeper 通过其简单的架构和 API 解决了这个问题。ZooKeeper 允许开发人员专注于核心应用程序逻辑，而不必担心应用程序的分布式特性。")]),e._v(" "),r("p",[e._v("以下为 Zookeeper 的基本概念")]),e._v(" "),r("h2",{attrs:{id:"zookeeper-的数据模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-的数据模型"}},[e._v("#")]),e._v(" Zookeeper 的数据模型")]),e._v(" "),r("p",[e._v("Zookeeper 的数据模型是什么样子呢？它很像数据结构当中的树，也很像文件系统的目录。")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/201810170010.png",alt:""}})]),e._v(" "),r("p",[e._v("树是由节点所组成，Zookeeper 的数据存储也同样是基于节点，这种节点叫做 "),r("strong",[e._v("Znode")])]),e._v(" "),r("p",[e._v("但是，不同于树的节点，Znode 的引用方式是路径引用，类似于文件路径：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    /动物/猫\n    /汽车/宝马\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("这样的层级结构，让每一个 Znode 节点拥有唯一的路径，就像命名空间一样对不同信息作出清晰的隔离。")]),e._v(" "),r("h3",{attrs:{id:"znode-包含哪些元素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#znode-包含哪些元素"}},[e._v("#")]),e._v(" Znode 包含哪些元素")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/201810170011.png",alt:""}})]),e._v(" "),r("ul",[r("li",[e._v("data：Znode 存储的数据信息。")]),e._v(" "),r("li",[e._v("ACL：记录 Znode 的访问权限，即哪些人或哪些 IP 可以访问本节点。")]),e._v(" "),r("li",[e._v("stat：包含 Znode 的各种元数据，比如事务 ID、版本号、时间戳、大小等等。")]),e._v(" "),r("li",[e._v("child：当前节点的子节点引用")])]),e._v(" "),r("p",[e._v("这里需要注意一点，Zookeeper 是为读多写少的场景所设计。Znode 并不是用来存储大规模业务数据，而是用于存储少量的状态和配置信息，"),r("code",[e._v("每个节点的数据最大不能超过 1MB")]),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"zookeeper-的基本操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-的基本操作"}},[e._v("#")]),e._v(" Zookeeper 的基本操作")]),e._v(" "),r("p",[e._v("创建节点")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    create\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("删除节点")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    delete\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("判断节点是否存在")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    exists\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("获得一个节点的数据")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    getData\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("设置一个节点的数据")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    setData\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("获取节点下的所有子节点")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    getChildren\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("这其中，"),r("code",[e._v("exists")]),e._v("，"),r("code",[e._v("getData")]),e._v("，"),r("code",[e._v("getChildren")]),e._v(" 属于读操作。Zookeeper 客户端在请求读操作的时候，可以选择是否设置 "),r("strong",[e._v("Watch")])]),e._v(" "),r("h2",{attrs:{id:"zookeeper-的事件通知"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-的事件通知"}},[e._v("#")]),e._v(" Zookeeper 的事件通知")]),e._v(" "),r("p",[e._v("我们可以把 "),r("strong",[e._v("Watch")]),e._v(" 理解成是注册在特定 Znode 上的触发器。当这个 Znode 发生改变，也就是调用了 "),r("code",[e._v("create")]),e._v("，"),r("code",[e._v("delete")]),e._v("，"),r("code",[e._v("setData")]),e._v(" 方法的时候，将会触发 Znode 上注册的对应事件，请求 Watch 的客户端会接收到异步通知。")]),e._v(" "),r("p",[e._v("具体交互过程如下：")]),e._v(" "),r("ul",[r("li",[e._v("客户端调用 "),r("code",[e._v("getData")]),e._v(" 方法，"),r("code",[e._v("watch")]),e._v(" 参数是 "),r("code",[e._v("true")]),e._v("。服务端接到请求，返回节点数据，并且在对应的哈希表里插入被 Watch 的 Znode 路径，以及 Watcher 列表。")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/201810170012.png",alt:""}})]),e._v(" "),r("ul",[r("li",[e._v("当被 Watch 的 Znode 已删除，服务端会查找哈希表，找到该 Znode 对应的所有 Watcher，异步通知客户端，并且删除哈希表中对应的 Key-Value。")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/201810170013.png",alt:""}})]),e._v(" "),r("h2",{attrs:{id:"zookeeper-的一致性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-的一致性"}},[e._v("#")]),e._v(" Zookeeper 的一致性")]),e._v(" "),r("p",[e._v("Zookeeper 身为分布式系统协调服务，如果自身挂了如何处理呢？为了防止单机挂掉的情况，Zookeeper 维护了一个集群。如下图：")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20181017182528.jpg",alt:""}})]),e._v(" "),r("p",[e._v("Zookeeper Service 集群是一主多从结构。")]),e._v(" "),r("p",[e._v("在更新数据时，首先更新到主节点（这里的节点是指服务器，不是 Znode），再同步到从节点。")]),e._v(" "),r("p",[e._v("在读取数据时，直接读取任意从节点。")]),e._v(" "),r("p",[e._v("为了保证主从节点的数据一致性，Zookeeper 采用了 "),r("strong",[e._v("ZAB 协议")]),e._v("，这种协议非常类似于一致性算法 "),r("strong",[e._v("Paxos")]),e._v(" 和 "),r("strong",[e._v("Raft")]),e._v("。")]),e._v(" "),r("h3",{attrs:{id:"什么是-zab"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-zab"}},[e._v("#")]),e._v(" 什么是 ZAB")]),e._v(" "),r("p",[e._v("Zookeeper Atomic Broadcast，有效解决了 Zookeeper 集群崩溃恢复，以及主从同步数据的问题。")]),e._v(" "),r("h4",{attrs:{id:"zab-协议定义的三种节点状态"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zab-协议定义的三种节点状态"}},[e._v("#")]),e._v(" ZAB 协议定义的三种节点状态")]),e._v(" "),r("ul",[r("li",[e._v("Looking ：选举状态。")]),e._v(" "),r("li",[e._v("Following ：Follower 节点（从节点）所处的状态。")]),e._v(" "),r("li",[e._v("Leading ：Leader 节点（主节点）所处状态。")])]),e._v(" "),r("h4",{attrs:{id:"最大-zxid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#最大-zxid"}},[e._v("#")]),e._v(" 最大 ZXID")]),e._v(" "),r("p",[e._v("最大 ZXID 也就是节点本地的最新事务编号，包含 epoch 和计数两部分。epoch 是纪元的意思，相当于 Raft 算法选主时候的 term。")]),e._v(" "),r("h4",{attrs:{id:"zab-的崩溃恢复"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zab-的崩溃恢复"}},[e._v("#")]),e._v(" ZAB 的崩溃恢复")]),e._v(" "),r("p",[e._v("假如 Zookeeper 当前的主节点挂掉了，集群会进行崩溃恢复。ZAB 的崩溃恢复分成三个阶段：")]),e._v(" "),r("p",[r("strong",[e._v("Leader election")])]),e._v(" "),r("p",[e._v("选举阶段，此时集群中的节点处于 Looking 状态。它们会各自向其他节点发起投票，投票当中包含自己的服务器 ID 和最新事务 ID（ZXID）。")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/201810170014.png",alt:""}})]),e._v(" "),r("p",[e._v("接下来，节点会用自身的 ZXID 和从其他节点接收到的 ZXID 做比较，如果发现别人家的 ZXID 比自己大，也就是数据比自己新，那么就重新发起投票，投票给目前已知最大的 ZXID 所属节点。")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/201810170015.png",alt:""}})]),e._v(" "),r("p",[e._v("每次投票后，服务器都会统计投票数量，判断是否有某个节点得到半数以上的投票。如果存在这样的节点，该节点将会成为准 Leader，状态变为 Leading。其他节点的状态变为 Following。")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/201810170016.png",alt:""}})]),e._v(" "),r("p",[r("strong",[e._v("Discovery")])]),e._v(" "),r("p",[e._v("发现阶段，用于在从节点中发现最新的 ZXID 和事务日志。或许有人会问：既然 Leader 被选为主节点，已经是集群里数据最新的了，为什么还要从节点中寻找最新事务呢？")]),e._v(" "),r("p",[e._v("这是为了防止某些意外情况，比如因网络原因在上一阶段产生多个 Leader 的情况。")]),e._v(" "),r("p",[e._v("所以这一阶段，Leader 集思广益，接收所有 Follower 发来各自的最新 epoch 值。Leader 从中选出最大的 epoch，基于此值加 1，生成新的 epoch 分发给各个 Follower。")]),e._v(" "),r("p",[e._v("各个 Follower 收到全新的 epoch 后，返回 ACK 给 Leader，带上各自最大的 ZXID 和历史事务日志。Leader 选出最大的 ZXID，并更新自身历史日志。")]),e._v(" "),r("p",[r("strong",[e._v("Synchronization")])]),e._v(" "),r("p",[e._v("同步阶段，把 Leader 刚才收集得到的最新历史事务日志，同步给集群中所有的 Follower。只有当半数 Follower 同步成功，这个准 Leader 才能成为正式的 Leader。")]),e._v(" "),r("p",[e._v("自此，故障恢复正式完成。")]),e._v(" "),r("h4",{attrs:{id:"zab-的数据写入"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zab-的数据写入"}},[e._v("#")]),e._v(" ZAB 的数据写入")]),e._v(" "),r("p",[r("strong",[e._v("Broadcast")])]),e._v(" "),r("p",[e._v("ZAB 的数据写入涉及到 Broadcast 阶段，简单来说，就是 Zookeeper 常规情况下更新数据的时候，由 Leader 广播到所有的 Follower。其过程如下：")]),e._v(" "),r("ul",[r("li",[e._v("客户端发出写入数据请求给任意 Follower。")]),e._v(" "),r("li",[e._v("Follower 把写入数据请求转发给 Leader。")]),e._v(" "),r("li",[e._v("Leader 采用二阶段提交方式，先发送 Propose 广播给 Follower。")]),e._v(" "),r("li",[e._v("Follower 接到 Propose 消息，写入日志成功后，返回 ACK 消息给 Leader。")]),e._v(" "),r("li",[e._v("Leader 接到半数以上ACK消息，返回成功给客户端，并且广播 Commit 请求给 Follower")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20181017192657.jpg",alt:""}})]),e._v(" "),r("p",[e._v("ZAB 协议既不是强一致性，也不是弱一致性，而是处于两者之间的"),r("strong",[e._v("单调一致性（顺序一致性）")]),e._v("。它依靠事务 ID 和版本号，保证了数据的更新和读取是有序的。")]),e._v(" "),r("h2",{attrs:{id:"zookeeper-的应用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-的应用场景"}},[e._v("#")]),e._v(" Zookeeper 的应用场景")]),e._v(" "),r("h3",{attrs:{id:"分布式锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[e._v("#")]),e._v(" 分布式锁")]),e._v(" "),r("p",[e._v("这是雅虎研究员设计 Zookeeper 的初衷。利用 Zookeeper 的临时顺序节点，可以轻松实现分布式锁。")]),e._v(" "),r("h3",{attrs:{id:"服务注册和发现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务注册和发现"}},[e._v("#")]),e._v(" 服务注册和发现")]),e._v(" "),r("p",[e._v("利用 Znode 和 Watcher，可以实现分布式服务的注册和发现。最著名的应用就是阿里的分布式 RPC 框架 Dubbo。")]),e._v(" "),r("h3",{attrs:{id:"共享配置和状态信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#共享配置和状态信息"}},[e._v("#")]),e._v(" 共享配置和状态信息")]),e._v(" "),r("p",[e._v("Redis 的分布式解决方案 Codis，就利用了 Zookeeper 来存放数据路由表和 codis-proxy 节点的元信息。同时 codis-config 发起的命令都会通过 ZooKeeper 同步到各个存活的 codis-proxy。")]),e._v(" "),r("p",[e._v("此外，Kafka、HBase、Hadoop，也都依靠Zookeeper同步节点信息，实现高可用。")])])}),[],!1,null,null,null);a.default=s.exports}}]);