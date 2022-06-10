(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{1058:function(s,n,e){"use strict";e.r(n);var a=e(5),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"redis-sentinel-集群部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-sentinel-集群部署"}},[s._v("#")]),s._v(" Redis Sentinel 集群部署")]),s._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),e("p",[s._v("Redis 集群可以在一组 redis 节点之间实现高可用性和 sharding。在集群中会有 1 个 master 和多个 slave 节点。当 master 节点失效时，应选举出一个 slave 节点作为新的 master。然而 Redis 本身(包括它的很多客户端)没有实现自动故障发现并进行主备切换的能力，需要外部的监控方案来实现自动故障恢复。")]),s._v(" "),e("p",[s._v("Redis Sentinel 是官方推荐的高可用性解决方案。它是 Redis 集群的监控管理工具，可以提供节点监控、通知、自动故障恢复和客户端配置发现服务。")]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/18841d5327556bfa750148943011901d1eac3cd8.jpg",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"redis-sentinel-核心配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-sentinel-核心配置"}},[s._v("#")]),s._v(" Redis Sentinel 核心配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    # Example sentinel.conf\n    \n    # *** IMPORTANT ***\n    #\n    # By default Sentinel will not be reachable from interfaces different than\n    # localhost, either use the \'bind\' directive to bind to a list of network\n    # interfaces, or disable protected mode with "protected-mode no" by\n    # adding it to this configuration file.\n    #\n    # Before doing that MAKE SURE the instance is protected from the outside\n    # world via firewalling or other means.\n    #\n    # For example you may use one of the following:\n    #\n    # bind 127.0.0.1 192.168.1.1\n    #\n    # protected-mode no\n    \n    # port <sentinel-port>\n    # The port that this sentinel instance will run on\n    port 26379\n    \n    # sentinel announce-ip <ip>\n    # sentinel announce-port <port>\n    #\n    # The above two configuration directives are useful in environments where,\n    # because of NAT, Sentinel is reachable from outside via a non-local address.\n    #\n    # When announce-ip is provided, the Sentinel will claim the specified IP address\n    # in HELLO messages used to gossip its presence, instead of auto-detecting the\n    # local address as it usually does.\n    #\n    # Similarly when announce-port is provided and is valid and non-zero, Sentinel\n    # will announce the specified TCP port.\n    #\n    # The two options don\'t need to be used together, if only announce-ip is\n    # provided, the Sentinel will announce the specified IP and the server port\n    # as specified by the "port" option. If only announce-port is provided, the\n    # Sentinel will announce the auto-detected local IP and the specified port.\n    #\n    # Example:\n    #\n    # sentinel announce-ip 1.2.3.4\n    \n    # dir <working-directory>\n    # Every long running process should have a well-defined working directory.\n    # For Redis Sentinel to chdir to /tmp at startup is the simplest thing\n    # for the process to don\'t interfere with administrative tasks such as\n    # unmounting filesystems.\n    dir /tmp\n    \n    # sentinel monitor <master-name> <ip> <redis-port> <quorum>\n    #\n    # Tells Sentinel to monitor this master, and to consider it in O_DOWN\n    # (Objectively Down) state only if at least <quorum> sentinels agree.\n    #\n    # Note that whatever is the ODOWN quorum, a Sentinel will require to\n    # be elected by the majority of the known Sentinels in order to\n    # start a failover, so no failover can be performed in minority.\n    #\n    # Slaves are auto-discovered, so you don\'t need to specify slaves in\n    # any way. Sentinel itself will rewrite this configuration file adding\n    # the slaves using additional configuration options.\n    # Also note that the configuration file is rewritten when a\n    # slave is promoted to master.\n    #\n    # Note: master name should not include special characters or spaces.\n    # The valid charset is A-z 0-9 and the three characters ".-_".\n    sentinel monitor mymaster 127.0.0.1 6379 2\n    \n    # sentinel auth-pass <master-name> <password>\n    #\n    # Set the password to use to authenticate with the master and slaves.\n    # Useful if there is a password set in the Redis instances to monitor.\n    #\n    # Note that the master password is also used for slaves, so it is not\n    # possible to set a different password in masters and slaves instances\n    # if you want to be able to monitor these instances with Sentinel.\n    #\n    # However you can have Redis instances without the authentication enabled\n    # mixed with Redis instances requiring the authentication (as long as the\n    # password set is the same for all the instances requiring the password) as\n    # the AUTH command will have no effect in Redis instances with authentication\n    # switched off.\n    #\n    # Example:\n    #\n    # sentinel auth-pass mymaster MySUPER--secret-0123passw0rd\n    \n    # sentinel down-after-milliseconds <master-name> <milliseconds>\n    #\n    # Number of milliseconds the master (or any attached slave or sentinel) should\n    # be unreachable (as in, not acceptable reply to PING, continuously, for the\n    # specified period) in order to consider it in S_DOWN state (Subjectively\n    # Down).\n    #\n    # Default is 30 seconds.\n    sentinel down-after-milliseconds mymaster 30000\n    \n    # sentinel parallel-syncs <master-name> <numslaves>\n    #\n    # How many slaves we can reconfigure to point to the new slave simultaneously\n    # during the failover. Use a low number if you use the slaves to serve query\n    # to avoid that all the slaves will be unreachable at about the same\n    # time while performing the synchronization with the master.\n    sentinel parallel-syncs mymaster 1\n    \n    # sentinel failover-timeout <master-name> <milliseconds>\n    #\n    # Specifies the failover timeout in milliseconds. It is used in many ways:\n    #\n    # - The time needed to re-start a failover after a previous failover was\n    #   already tried against the same master by a given Sentinel, is two\n    #   times the failover timeout.\n    #\n    # - The time needed for a slave replicating to a wrong master according\n    #   to a Sentinel current configuration, to be forced to replicate\n    #   with the right master, is exactly the failover timeout (counting since\n    #   the moment a Sentinel detected the misconfiguration).\n    #\n    # - The time needed to cancel a failover that is already in progress but\n    #   did not produced any configuration change (SLAVEOF NO ONE yet not\n    #   acknowledged by the promoted slave).\n    #\n    # - The maximum time a failover in progress waits for all the slaves to be\n    #   reconfigured as slaves of the new master. However even after this time\n    #   the slaves will be reconfigured by the Sentinels anyway, but not with\n    #   the exact parallel-syncs progression as specified.\n    #\n    # Default is 3 minutes.\n    sentinel failover-timeout mymaster 180000\n    \n    # SCRIPTS EXECUTION\n    #\n    # sentinel notification-script and sentinel reconfig-script are used in order\n    # to configure scripts that are called to notify the system administrator\n    # or to reconfigure clients after a failover. The scripts are executed\n    # with the following rules for error handling:\n    #\n    # If script exits with "1" the execution is retried later (up to a maximum\n    # number of times currently set to 10).\n    #\n    # If script exits with "2" (or an higher value) the script execution is\n    # not retried.\n    #\n    # If script terminates because it receives a signal the behavior is the same\n    # as exit code 1.\n    #\n    # A script has a maximum running time of 60 seconds. After this limit is\n    # reached the script is terminated with a SIGKILL and the execution retried.\n    \n    # NOTIFICATION SCRIPT\n    #\n    # sentinel notification-script <master-name> <script-path>\n    # \n    # Call the specified notification script for any sentinel event that is\n    # generated in the WARNING level (for instance -sdown, -odown, and so forth).\n    # This script should notify the system administrator via email, SMS, or any\n    # other messaging system, that there is something wrong with the monitored\n    # Redis systems.\n    #\n    # The script is called with just two arguments: the first is the event type\n    # and the second the event description.\n    #\n    # The script must exist and be executable in order for sentinel to start if\n    # this option is provided.\n    #\n    # Example:\n    #\n    # sentinel notification-script mymaster /var/redis/notify.sh\n    \n    # CLIENTS RECONFIGURATION SCRIPT\n    #\n    # sentinel client-reconfig-script <master-name> <script-path>\n    #\n    # When the master changed because of a failover a script can be called in\n    # order to perform application-specific tasks to notify the clients that the\n    # configuration has changed and the master is at a different address.\n    # \n    # The following arguments are passed to the script:\n    #\n    # <master-name> <role> <state> <from-ip> <from-port> <to-ip> <to-port>\n    #\n    # <state> is currently always "failover"\n    # <role> is either "leader" or "observer"\n    # \n    # The arguments from-ip, from-port, to-ip, to-port are used to communicate\n    # the old address of the master and the new address of the elected slave\n    # (now a master).\n    #\n    # This script should be resistant to multiple invocations.\n    #\n    # Example:\n    #\n    # sentinel client-reconfig-script mymaster /var/redis/reconfig.sh\n    \n    # SECURITY\n    #\n    # By default SENTINEL SET will not be able to change the notification-script\n    # and client-reconfig-script at runtime. This avoids a trivial security issue\n    # where clients can set the script to anything and trigger a failover in order\n    # to get the program executed.\n    \n    sentinel deny-scripts-reconfig yes\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br"),e("span",{staticClass:"line-number"},[s._v("87")]),e("br"),e("span",{staticClass:"line-number"},[s._v("88")]),e("br"),e("span",{staticClass:"line-number"},[s._v("89")]),e("br"),e("span",{staticClass:"line-number"},[s._v("90")]),e("br"),e("span",{staticClass:"line-number"},[s._v("91")]),e("br"),e("span",{staticClass:"line-number"},[s._v("92")]),e("br"),e("span",{staticClass:"line-number"},[s._v("93")]),e("br"),e("span",{staticClass:"line-number"},[s._v("94")]),e("br"),e("span",{staticClass:"line-number"},[s._v("95")]),e("br"),e("span",{staticClass:"line-number"},[s._v("96")]),e("br"),e("span",{staticClass:"line-number"},[s._v("97")]),e("br"),e("span",{staticClass:"line-number"},[s._v("98")]),e("br"),e("span",{staticClass:"line-number"},[s._v("99")]),e("br"),e("span",{staticClass:"line-number"},[s._v("100")]),e("br"),e("span",{staticClass:"line-number"},[s._v("101")]),e("br"),e("span",{staticClass:"line-number"},[s._v("102")]),e("br"),e("span",{staticClass:"line-number"},[s._v("103")]),e("br"),e("span",{staticClass:"line-number"},[s._v("104")]),e("br"),e("span",{staticClass:"line-number"},[s._v("105")]),e("br"),e("span",{staticClass:"line-number"},[s._v("106")]),e("br"),e("span",{staticClass:"line-number"},[s._v("107")]),e("br"),e("span",{staticClass:"line-number"},[s._v("108")]),e("br"),e("span",{staticClass:"line-number"},[s._v("109")]),e("br"),e("span",{staticClass:"line-number"},[s._v("110")]),e("br"),e("span",{staticClass:"line-number"},[s._v("111")]),e("br"),e("span",{staticClass:"line-number"},[s._v("112")]),e("br"),e("span",{staticClass:"line-number"},[s._v("113")]),e("br"),e("span",{staticClass:"line-number"},[s._v("114")]),e("br"),e("span",{staticClass:"line-number"},[s._v("115")]),e("br"),e("span",{staticClass:"line-number"},[s._v("116")]),e("br"),e("span",{staticClass:"line-number"},[s._v("117")]),e("br"),e("span",{staticClass:"line-number"},[s._v("118")]),e("br"),e("span",{staticClass:"line-number"},[s._v("119")]),e("br"),e("span",{staticClass:"line-number"},[s._v("120")]),e("br"),e("span",{staticClass:"line-number"},[s._v("121")]),e("br"),e("span",{staticClass:"line-number"},[s._v("122")]),e("br"),e("span",{staticClass:"line-number"},[s._v("123")]),e("br"),e("span",{staticClass:"line-number"},[s._v("124")]),e("br"),e("span",{staticClass:"line-number"},[s._v("125")]),e("br"),e("span",{staticClass:"line-number"},[s._v("126")]),e("br"),e("span",{staticClass:"line-number"},[s._v("127")]),e("br"),e("span",{staticClass:"line-number"},[s._v("128")]),e("br"),e("span",{staticClass:"line-number"},[s._v("129")]),e("br"),e("span",{staticClass:"line-number"},[s._v("130")]),e("br"),e("span",{staticClass:"line-number"},[s._v("131")]),e("br"),e("span",{staticClass:"line-number"},[s._v("132")]),e("br"),e("span",{staticClass:"line-number"},[s._v("133")]),e("br"),e("span",{staticClass:"line-number"},[s._v("134")]),e("br"),e("span",{staticClass:"line-number"},[s._v("135")]),e("br"),e("span",{staticClass:"line-number"},[s._v("136")]),e("br"),e("span",{staticClass:"line-number"},[s._v("137")]),e("br"),e("span",{staticClass:"line-number"},[s._v("138")]),e("br"),e("span",{staticClass:"line-number"},[s._v("139")]),e("br"),e("span",{staticClass:"line-number"},[s._v("140")]),e("br"),e("span",{staticClass:"line-number"},[s._v("141")]),e("br"),e("span",{staticClass:"line-number"},[s._v("142")]),e("br"),e("span",{staticClass:"line-number"},[s._v("143")]),e("br"),e("span",{staticClass:"line-number"},[s._v("144")]),e("br"),e("span",{staticClass:"line-number"},[s._v("145")]),e("br"),e("span",{staticClass:"line-number"},[s._v("146")]),e("br"),e("span",{staticClass:"line-number"},[s._v("147")]),e("br"),e("span",{staticClass:"line-number"},[s._v("148")]),e("br"),e("span",{staticClass:"line-number"},[s._v("149")]),e("br"),e("span",{staticClass:"line-number"},[s._v("150")]),e("br"),e("span",{staticClass:"line-number"},[s._v("151")]),e("br"),e("span",{staticClass:"line-number"},[s._v("152")]),e("br"),e("span",{staticClass:"line-number"},[s._v("153")]),e("br"),e("span",{staticClass:"line-number"},[s._v("154")]),e("br"),e("span",{staticClass:"line-number"},[s._v("155")]),e("br"),e("span",{staticClass:"line-number"},[s._v("156")]),e("br"),e("span",{staticClass:"line-number"},[s._v("157")]),e("br"),e("span",{staticClass:"line-number"},[s._v("158")]),e("br"),e("span",{staticClass:"line-number"},[s._v("159")]),e("br"),e("span",{staticClass:"line-number"},[s._v("160")]),e("br"),e("span",{staticClass:"line-number"},[s._v("161")]),e("br"),e("span",{staticClass:"line-number"},[s._v("162")]),e("br"),e("span",{staticClass:"line-number"},[s._v("163")]),e("br"),e("span",{staticClass:"line-number"},[s._v("164")]),e("br"),e("span",{staticClass:"line-number"},[s._v("165")]),e("br"),e("span",{staticClass:"line-number"},[s._v("166")]),e("br"),e("span",{staticClass:"line-number"},[s._v("167")]),e("br"),e("span",{staticClass:"line-number"},[s._v("168")]),e("br"),e("span",{staticClass:"line-number"},[s._v("169")]),e("br"),e("span",{staticClass:"line-number"},[s._v("170")]),e("br"),e("span",{staticClass:"line-number"},[s._v("171")]),e("br"),e("span",{staticClass:"line-number"},[s._v("172")]),e("br"),e("span",{staticClass:"line-number"},[s._v("173")]),e("br"),e("span",{staticClass:"line-number"},[s._v("174")]),e("br"),e("span",{staticClass:"line-number"},[s._v("175")]),e("br"),e("span",{staticClass:"line-number"},[s._v("176")]),e("br"),e("span",{staticClass:"line-number"},[s._v("177")]),e("br"),e("span",{staticClass:"line-number"},[s._v("178")]),e("br"),e("span",{staticClass:"line-number"},[s._v("179")]),e("br"),e("span",{staticClass:"line-number"},[s._v("180")]),e("br"),e("span",{staticClass:"line-number"},[s._v("181")]),e("br"),e("span",{staticClass:"line-number"},[s._v("182")]),e("br"),e("span",{staticClass:"line-number"},[s._v("183")]),e("br"),e("span",{staticClass:"line-number"},[s._v("184")]),e("br"),e("span",{staticClass:"line-number"},[s._v("185")]),e("br"),e("span",{staticClass:"line-number"},[s._v("186")]),e("br"),e("span",{staticClass:"line-number"},[s._v("187")]),e("br"),e("span",{staticClass:"line-number"},[s._v("188")]),e("br"),e("span",{staticClass:"line-number"},[s._v("189")]),e("br"),e("span",{staticClass:"line-number"},[s._v("190")]),e("br"),e("span",{staticClass:"line-number"},[s._v("191")]),e("br"),e("span",{staticClass:"line-number"},[s._v("192")]),e("br"),e("span",{staticClass:"line-number"},[s._v("193")]),e("br"),e("span",{staticClass:"line-number"},[s._v("194")]),e("br"),e("span",{staticClass:"line-number"},[s._v("195")]),e("br"),e("span",{staticClass:"line-number"},[s._v("196")]),e("br"),e("span",{staticClass:"line-number"},[s._v("197")]),e("br"),e("span",{staticClass:"line-number"},[s._v("198")]),e("br"),e("span",{staticClass:"line-number"},[s._v("199")]),e("br"),e("span",{staticClass:"line-number"},[s._v("200")]),e("br"),e("span",{staticClass:"line-number"},[s._v("201")]),e("br"),e("span",{staticClass:"line-number"},[s._v("202")]),e("br"),e("span",{staticClass:"line-number"},[s._v("203")]),e("br"),e("span",{staticClass:"line-number"},[s._v("204")]),e("br")])]),e("h2",{attrs:{id:"搭建-redis-集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建-redis-集群"}},[s._v("#")]),s._v(" 搭建 Redis 集群")]),s._v(" "),e("p",[s._v("搭建一主两从环境，docker-compose.yml 配置如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    version: '3.1'\n    services:\n      master:\n        image: redis\n        container_name: redis-master\n        ports:\n          - 6379:6379\n    \n      slave1:\n        image: redis\n        container_name: redis-slave-1\n        ports:\n          - 6380:6379\n        command: redis-server --slaveof redis-master 6379\n    \n      slave2:\n        image: redis\n        container_name: redis-slave-2\n        ports:\n          - 6381:6379\n        command: redis-server --slaveof redis-master 6379\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("h2",{attrs:{id:"搭建-sentinel-集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建-sentinel-集群"}},[s._v("#")]),s._v(" 搭建 Sentinel 集群")]),s._v(" "),e("p",[s._v("我们至少需要创建三个 Sentinel 服务，docker-compose.yml 配置如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    version: '3.1'\n    services:\n      sentinel1:\n        image: redis\n        container_name: redis-sentinel-1\n        ports:\n          - 26379:26379\n        command: redis-sentinel /usr/local/etc/redis/sentinel.conf\n        volumes:\n          - ./sentinel1.conf:/usr/local/etc/redis/sentinel.conf\n    \n      sentinel2:\n        image: redis\n        container_name: redis-sentinel-2\n        ports:\n          - 26380:26379\n        command: redis-sentinel /usr/local/etc/redis/sentinel.conf\n        volumes:\n          - ./sentinel2.conf:/usr/local/etc/redis/sentinel.conf\n    \n      sentinel3:\n        image: redis\n        container_name: redis-sentinel-3\n        ports:\n          - 26381:26379\n        command: redis-sentinel /usr/local/etc/redis/sentinel.conf\n        volumes:\n          - ./sentinel3.conf:/usr/local/etc/redis/sentinel.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br")])]),e("h3",{attrs:{id:"修改-sentinel-配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改-sentinel-配置文件"}},[s._v("#")]),s._v(" 修改 Sentinel 配置文件")]),s._v(" "),e("p",[s._v("需要三份 sentinel.conf 配置文件，分别为 "),e("code",[s._v("sentinel1.conf")]),s._v("，"),e("code",[s._v("sentinel2.conf")]),s._v("，"),e("code",[s._v("sentinel3.conf")]),s._v("，配置文件内容相同")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    port 26379\n    dir /tmp\n    # 自定义集群名，其中 127.0.0.1 为 redis-master 的 ip，6379 为 redis-master 的端口，2 为最小投票数（因为有 3 台 Sentinel 所以可以设置成 2）\n    sentinel monitor mymaster 127.0.0.1 6379 2\n    sentinel down-after-milliseconds mymaster 30000\n    sentinel parallel-syncs mymaster 1\n    sentinel failover-timeout mymaster 180000\n    sentinel deny-scripts-reconfig yes\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"查看集群是否生效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看集群是否生效"}},[s._v("#")]),s._v(" 查看集群是否生效")]),s._v(" "),e("p",[s._v("进入 Sentinel 容器，使用 Sentinel API 查看监控情况：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    docker exec -it redis-sentinel-1 /bin/bash\n    redis-cli -p 26379\n    sentinel master mymaster\n    sentinel slaves mymaster\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("img",{attrs:{src:"/img/1533594806.png",alt:""}})])])}),[],!1,null,null,null);n.default=t.exports}}]);