(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{1135:function(s,a,n){"use strict";n.r(a);var e=n(5),l=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"docker-构建-mysql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-构建-mysql"}},[s._v("#")]),s._v(" Docker 构建 MySQL")]),s._v(" "),n("h2",{attrs:{id:"查找-docker-hub-上的-mysql-镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查找-docker-hub-上的-mysql-镜像"}},[s._v("#")]),s._v(" 查找 Docker Hub 上的 MySQL 镜像")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    root@UbuntuBase:/usr/local/docker/mysql# docker search mysql\n    NAME                                                   DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED\n    mysql                                                  MySQL is a widely used, open-source relati...   5177                [OK]                \n    mariadb                                                MariaDB is a community-developed fork of M...   1602                [OK]                \n    mysql/mysql-server                                     Optimized MySQL Server Docker images. Crea...   361                                     [OK]\n    percona                                                Percona Server is a fork of the MySQL rela...   298                 [OK]                \n    hypriot/rpi-mysql                                      RPi-compatible Docker Image with Mysql          72                                      \n    zabbix/zabbix-server-mysql                             Zabbix Server with MySQL database support       62                                      [OK]\n    centurylink/mysql                                      Image containing mysql. Optimized to be li...   53                                      [OK]\n    sameersbn/mysql                                                                                        48                                      [OK]\n    zabbix/zabbix-web-nginx-mysql                          Zabbix frontend based on Nginx web-server ...   36                                      [OK]\n    tutum/mysql                                            Base docker image to run a MySQL database ...   27                                      \n    1and1internet/ubuntu-16-nginx-php-phpmyadmin-mysql-5   ubuntu-16-nginx-php-phpmyadmin-mysql-5          17                                      [OK]\n    schickling/mysql-backup-s3                             Backup MySQL to S3 (supports periodic back...   16                                      [OK]\n    centos/mysql-57-centos7                                MySQL 5.7 SQL database server                   15                                      \n    linuxserver/mysql                                      A Mysql container, brought to you by Linux...   12                                      \n    centos/mysql-56-centos7                                MySQL 5.6 SQL database server                   6                                       \n    openshift/mysql-55-centos7                             DEPRECATED: A Centos7 based MySQL v5.5 ima...   6                                       \n    frodenas/mysql                                         A Docker Image for MySQL                        3                                       [OK]\n    dsteinkopf/backup-all-mysql                            backup all DBs in a mysql server                3                                       [OK]\n    circleci/mysql                                         MySQL is a widely used, open-source relati...   2                                       \n    cloudposse/mysql                                       Improved `mysql` service with support for ...   0                                       [OK]\n    astronomerio/mysql-sink                                MySQL sink                                      0                                       [OK]\n    ansibleplaybookbundle/rhscl-mysql-apb                  An APB which deploys RHSCL MySQL                0                                       [OK]\n    cloudfoundry/cf-mysql-ci                               Image used in CI of cf-mysql-release            0                                       \n    astronomerio/mysql-source                              MySQL source                                    0                                       [OK]\n    jenkler/mysql                                          Docker Mysql package                            0               ```\n\n这里我们拉取官方的镜像\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("docker pull mysql\n")])])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n等待下载完成后，我们就可以在本地镜像列表里查到 REPOSITORY 为 mysql 的镜像\n\n## 运行容器：\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("docker run -p 3306:3306 --name mysql \\\n-v /usr/local/docker/mysql/conf:/etc/mysql \\\n-v /usr/local/docker/mysql/logs:/var/log/mysql \\\n-v /usr/local/docker/mysql/data:/var/lib/mysql \\\n-e MYSQL_ROOT_PASSWORD=123456 \\\n-d mysql\n")])])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n命令参数：\n\n*   `-p 3306:3306`：将容器的3306端口映射到主机的3306端口\n*   `-v /usr/local/docker/mysql/conf:/etc/mysql`：将主机当前目录下的 conf 挂载到容器的 /etc/mysql\n*   `-v /usr/local/docker/mysql/logs:/var/log/mysql`：将主机当前目录下的 logs 目录挂载到容器的 /var/log/mysql\n*   `-v /usr/local/docker/mysql/data:/var/lib/mysql`：将主机当前目录下的 data 目录挂载到容器的 /var/lib/mysql\n*   `-e MYSQL\\_ROOT\\_PASSWORD=123456`：初始化root用户的密码\n\n查看容器启动情况\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v('root@UbuntuBase:/usr/local/docker/mysql# docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES\nbc49c9de4cdf        mysql:latest        "docker-entrypoint..."   4 minutes ago       Up 4 minutes        0.0.0.0:3306->3306/tcp   mysql\n')])])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n使用客户端工具连接 MySQL\n\n![](/img/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20171103184144.png)")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}),[],!1,null,null,null);a.default=l.exports}}]);