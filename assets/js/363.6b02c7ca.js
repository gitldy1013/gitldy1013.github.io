(window.webpackJsonp=window.webpackJsonp||[]).push([[363],{1059:function(e,i,v){"use strict";v.r(i);var s=v(5),t=Object(s.a)({},(function(){var e=this,i=e.$createElement,v=e._self._c||i;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"redis-命令汇总"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-命令汇总"}},[e._v("#")]),e._v(" Redis 命令汇总")]),e._v(" "),v("h2",{attrs:{id:"参考资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),v("ul",[v("li",[e._v("http://redisdoc.com/")]),e._v(" "),v("li",[e._v("http://redis.io/commands")])]),e._v(" "),v("h2",{attrs:{id:"连接操作相关的命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#连接操作相关的命令"}},[e._v("#")]),e._v(" 连接操作相关的命令")]),e._v(" "),v("ul",[v("li",[e._v("ping：测试连接是否存活如果正常会返回 pong")]),e._v(" "),v("li",[e._v("echo：打印")]),e._v(" "),v("li",[e._v("select：切换到指定的数据库，数据库索引号 index 用数字值指定，以 0 作为起始索引值")]),e._v(" "),v("li",[e._v("quit：关闭连接（connection）")]),e._v(" "),v("li",[e._v("auth：简单密码认证")])]),e._v(" "),v("h2",{attrs:{id:"服务端相关命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务端相关命令"}},[e._v("#")]),e._v(" 服务端相关命令")]),e._v(" "),v("ul",[v("li",[e._v("time：返回当前服务器时间")]),e._v(" "),v("li",[e._v("client list: 返回所有连接到服务器的客户端信息和统计数据 参见 http://redisdoc.com/server/client_list.html")]),e._v(" "),v("li",[e._v("client kill ip:port：关闭地址为 ip:port 的客户端")]),e._v(" "),v("li",[e._v("save：将数据同步保存到磁盘")]),e._v(" "),v("li",[e._v("bgsave：将数据异步保存到磁盘")]),e._v(" "),v("li",[e._v("lastsave：返回上次成功将数据保存到磁盘的Unix时戳")]),e._v(" "),v("li",[e._v("shundown：将数据同步保存到磁盘，然后关闭服务")]),e._v(" "),v("li",[e._v("info：提供服务器的信息和统计")]),e._v(" "),v("li",[e._v("config resetstat：重置 info 命令中的某些统计数据")]),e._v(" "),v("li",[e._v("config get：获取配置文件信息")]),e._v(" "),v("li",[e._v("config set：动态地调整 Redis 服务器的配置(configuration)而无须重启，可以修改的配置参数可以使用命令 CONFIG GET * 来列出")]),e._v(" "),v("li",[e._v("config rewrite：Redis 服务器时所指定的 redis.conf 文件进行改写")]),e._v(" "),v("li",[e._v("monitor：实时转储收到的请求")]),e._v(" "),v("li",[e._v("slaveof：改变复制策略设置")])]),e._v(" "),v("h2",{attrs:{id:"发布订阅相关命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅相关命令"}},[e._v("#")]),e._v(" 发布订阅相关命令")]),e._v(" "),v("ul",[v("li",[e._v("psubscribe：订阅一个或多个符合给定模式的频道 例如 psubscribe news.* tweet.*")]),e._v(" "),v("li",[e._v('publish：将信息 message 发送到指定的频道 channel 例如 publish msg "good morning"')]),e._v(" "),v("li",[e._v("pubsub channels：列出当前的活跃频道 例如 PUBSUB CHANNELS news.i*")]),e._v(" "),v("li",[e._v("pubsub numsub：返回给定频道的订阅者数量 例如 PUBSUB NUMSUB news.it news.internet news.sport news.music")]),e._v(" "),v("li",[e._v("pubsub numpat：返回客户端订阅的所有模式的数量总和")]),e._v(" "),v("li",[e._v("punsubscribe：指示客户端退订所有给定模式。")]),e._v(" "),v("li",[e._v("subscribe：订阅给定的一个或多个频道的信息。例如 subscribe msg chat_room")]),e._v(" "),v("li",[e._v("unsubscribe：指示客户端退订给定的频道。")])]),e._v(" "),v("h2",{attrs:{id:"对-key-操作的命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对-key-操作的命令"}},[e._v("#")]),e._v(" 对 KEY 操作的命令")]),e._v(" "),v("ul",[v("li",[e._v("exists(key)：确认一个 key 是否存在")]),e._v(" "),v("li",[e._v("del(key)：删除一个 key")]),e._v(" "),v("li",[e._v("type(key)：返回值的类型")]),e._v(" "),v("li",[e._v("keys(pattern)：返回满足给定 pattern 的所有 key")]),e._v(" "),v("li",[e._v("randomkey：随机返回 key 空间的一个")]),e._v(" "),v("li",[e._v("keyrename(oldname, newname)：重命名 key")]),e._v(" "),v("li",[e._v("dbsize：返回当前数据库中 key 的数目")]),e._v(" "),v("li",[e._v("expire：设定一个 key 的活动时间（s）")]),e._v(" "),v("li",[e._v("ttl：获得一个 key 的活动时间")]),e._v(" "),v("li",[e._v("move(key, dbindex)：移动当前数据库中的 key 到 dbindex 数据库")]),e._v(" "),v("li",[e._v("flushdb：删除当前选择数据库中的所有 key")]),e._v(" "),v("li",[e._v("flushall：删除所有数据库中的所有 key")])]),e._v(" "),v("h2",{attrs:{id:"对-string-操作的命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对-string-操作的命令"}},[e._v("#")]),e._v(" 对 String 操作的命令")]),e._v(" "),v("ul",[v("li",[e._v("set(key, value)：给数据库中名称为 key 的 string 赋予值 value")]),e._v(" "),v("li",[e._v("get(key)：返回数据库中名称为 key 的 string 的 value")]),e._v(" "),v("li",[e._v("getset(key, value)：给名称为 key 的 string 赋予上一次的 value")]),e._v(" "),v("li",[e._v("mget(key1, key2,…, key N)：返回库中多个 string 的 value")]),e._v(" "),v("li",[e._v("setnx(key, value)：添加 string，名称为 key，值为 value")]),e._v(" "),v("li",[e._v("setex(key, time, value)：向库中添加 string，设定过期时间 time")]),e._v(" "),v("li",[e._v("mset(key N, value N)：批量设置多个 string 的值")]),e._v(" "),v("li",[e._v("msetnx(key N, value N)：如果所有名称为 key i 的 string 都不存在")]),e._v(" "),v("li",[e._v("incr(key)：名称为 key 的 string 增 1 操作")]),e._v(" "),v("li",[e._v("incrby(key, integer)：名称为 key 的 string 增加 integer")]),e._v(" "),v("li",[e._v("decr(key)：名称为 key 的 string 减 1 操作")]),e._v(" "),v("li",[e._v("decrby(key, integer)：名称为 key 的 string 减少 integer")]),e._v(" "),v("li",[e._v("append(key, value)：名称为 key 的 string 的值附加 value")]),e._v(" "),v("li",[e._v("substr(key, start, end)：返回名称为 key 的 string 的 value 的子串")])]),e._v(" "),v("h2",{attrs:{id:"对-list-操作的命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对-list-操作的命令"}},[e._v("#")]),e._v(" 对 List 操作的命令")]),e._v(" "),v("ul",[v("li",[e._v("rpush(key, value)：在名称为 key 的 list 尾添加一个值为 value 的元素")]),e._v(" "),v("li",[e._v("lpush(key, value)：在名称为 key 的 list 头添加一个值为 value 的元素")]),e._v(" "),v("li",[e._v("llen(key)：返回名称为 key 的 list 的长度")]),e._v(" "),v("li",[e._v("lrange(key, start, end)：返回名称为 key 的 list 中 start 至 end 之间的元素")]),e._v(" "),v("li",[e._v("ltrim(key, start, end)：截取名称为 key 的 list")]),e._v(" "),v("li",[e._v("lindex(key, index)：返回名称为 key 的 list 中 index 位置的元素")]),e._v(" "),v("li",[e._v("lset(key, index, value)：给名称为 key 的 list 中 index 位置的元素赋值")]),e._v(" "),v("li",[e._v("lrem(key, count, value)：删除 count 个 key 的 list 中值为 value 的元素")]),e._v(" "),v("li",[e._v("lpop(key)：返回并删除名称为 key 的 list 中的首元素")]),e._v(" "),v("li",[e._v("rpop(key)：返回并删除名称为 key 的 list 中的尾元素")]),e._v(" "),v("li",[e._v("blpop(key1, key2,… key N, timeout)：lpop 命令的 block 版本。")]),e._v(" "),v("li",[e._v("brpop(key1, key2,… key N, timeout)：rpop 的 block 版本。")]),e._v(" "),v("li",[e._v("rpoplpush(srckey, dstkey)：返回并删除名称为 srckey 的 list 的尾元素，并将该元素添加到名称为 dstkey 的 list 的头部")])]),e._v(" "),v("h2",{attrs:{id:"对-set-操作的命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对-set-操作的命令"}},[e._v("#")]),e._v(" 对 Set 操作的命令")]),e._v(" "),v("ul",[v("li",[e._v("sadd(key, member)：向名称为 key 的 set 中添加元素 member")]),e._v(" "),v("li",[e._v("srem(key, member) ：删除名称为 key 的 set 中的元素 member")]),e._v(" "),v("li",[e._v("spop(key) ：随机返回并删除名称为 key 的 set 中一个元素")]),e._v(" "),v("li",[e._v("smove(srckey, dstkey, member) ：移到集合元素")]),e._v(" "),v("li",[e._v("scard(key) ：返回名称为 key 的 set 的基数")]),e._v(" "),v("li",[e._v("sismember(key, member) ：member 是否是名称为 key 的 set 的元素")]),e._v(" "),v("li",[e._v("sinter(key1, key2,…key N) ：求交集")]),e._v(" "),v("li",[e._v("sinterstore(dstkey, (keys)) ：求交集并将交集保存到 dstkey 的集合")]),e._v(" "),v("li",[e._v("sunion(key1, (keys)) ：求并集")]),e._v(" "),v("li",[e._v("sunionstore(dstkey, (keys)) ：求并集并将并集保存到 dstkey 的集合")]),e._v(" "),v("li",[e._v("sdiff(key1, (keys)) ：求差集")]),e._v(" "),v("li",[e._v("sdiffstore(dstkey, (keys)) ：求差集并将差集保存到 dstkey 的集合")]),e._v(" "),v("li",[e._v("smembers(key) ：返回名称为 key 的 set 的所有元素")]),e._v(" "),v("li",[e._v("srandmember(key) ：随机返回名称为 key 的 set 的一个元素")])]),e._v(" "),v("h2",{attrs:{id:"对-hash-操作的命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对-hash-操作的命令"}},[e._v("#")]),e._v(" 对 Hash 操作的命令")]),e._v(" "),v("ul",[v("li",[e._v("hset(key, field, value)：向名称为 key 的 hash 中添加元素 field")]),e._v(" "),v("li",[e._v("hget(key, field)：返回名称为 key 的 hash 中 field 对应的 value")]),e._v(" "),v("li",[e._v("hmget(key, (fields))：返回名称为 key 的 hash 中 field i 对应的 value")]),e._v(" "),v("li",[e._v("hmset(key, (fields))：向名称为 key 的 hash 中添加元素 field")]),e._v(" "),v("li",[e._v("hincrby(key, field, integer)：将名称为 key 的 hash 中 field 的 value 增加 integer")]),e._v(" "),v("li",[e._v("hexists(key, field)：名称为 key 的 hash 中是否存在键为 field 的域")]),e._v(" "),v("li",[e._v("hdel(key, field)：删除名称为 key 的 hash 中键为 field 的域")]),e._v(" "),v("li",[e._v("hlen(key)：返回名称为 key 的 hash 中元素个数")]),e._v(" "),v("li",[e._v("hkeys(key)：返回名称为 key 的 hash 中所有键")]),e._v(" "),v("li",[e._v("hvals(key)：返回名称为 key 的 hash 中所有键对应的 value")]),e._v(" "),v("li",[e._v("hgetall(key)：返回名称为 key 的 hash 中所有的键（field）及其对应的 value")])]),e._v(" "),v("h2",{attrs:{id:"redis-sentinel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-sentinel"}},[e._v("#")]),e._v(" Redis Sentinel")]),e._v(" "),v("ul",[v("li",[e._v("ping ：返回 pong")]),e._v(" "),v("li",[e._v("sentinel masters ：列出所有被监视的主服务器，以及这些主服务器的当前状态。")]),e._v(" "),v("li",[e._v("sentinel slaves：列出给定主服务器的所有从服务器，以及这些从服务器的当前状态。")]),e._v(" "),v("li",[e._v("sentinel get-master-addr-by-name：返回给定名字的主服务器的 IP 地址和端口号。如果这个主服务器正在执行故障转移操作，或者针对这个主服务器的故障转移操作已经完成，那么这个命令返回新的主服务器的 IP 地址和端口号。")]),e._v(" "),v("li",[e._v("sentinel reset：重置所有名字和给定模式 pattern 相匹配的主服务器。pattern 参数是一个 Glob 风格的模式 重置操作清楚主服务器目前的所有状态，包括正在执行中的故障转移，并移除目前已经发现和关联的，主服务器的所有从服务器和 Sentinel 。")]),e._v(" "),v("li",[e._v("sentinel failover：当主服务器失效时，在不询问其他 Sentinel 意见的情况下，强制开始一次自动故障迁移（不过发起故障转移的 Sentinel 会向其他 Sentinel 发送一个新的配置，其他 Sentinel 会根据这个配置进行相应的更新）。")])])])}),[],!1,null,null,null);i.default=t.exports}}]);