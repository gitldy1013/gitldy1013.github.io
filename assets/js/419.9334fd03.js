(window.webpackJsonp=window.webpackJsonp||[]).push([[419],{1115:function(s,a,n){"use strict";n.r(a);var e=n(5),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"docker-compose-实战-mysql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-实战-mysql"}},[s._v("#")]),s._v(" Docker Compose 实战 MySQL")]),s._v(" "),n("h2",{attrs:{id:"mysql5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql5"}},[s._v("#")]),s._v(" MySQL5")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    version: '3.1'\n    services:\n      mysql:\n        restart: always\n        image: mysql:5.7.22\n        container_name: mysql\n        ports:\n          - 3306:3306\n        environment:\n          TZ: Asia/Shanghai\n          MYSQL_ROOT_PASSWORD: 123456\n        command:\n          --character-set-server=utf8mb4\n          --collation-server=utf8mb4_general_ci\n          --explicit_defaults_for_timestamp=true\n          --lower_case_table_names=1\n          --max_allowed_packet=128M\n          --sql-mode=\"STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION,NO_ZERO_DATE,NO_ZERO_IN_DATE,ERROR_FOR_DIVISION_BY_ZERO\"\n        volumes:\n          - mysql-data:/var/lib/mysql\n    \n    volumes:\n      mysql-data:\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h2",{attrs:{id:"mysql8"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql8"}},[s._v("#")]),s._v(" MySQL8")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    version: '3.1'\n    services:\n      db:\n        image: mysql\n        restart: always\n        environment:\n          MYSQL_ROOT_PASSWORD: 123456\n        command:\n          --default-authentication-plugin=mysql_native_password\n          --character-set-server=utf8mb4\n          --collation-server=utf8mb4_general_ci\n          --explicit_defaults_for_timestamp=true\n          --lower_case_table_names=1\n        ports:\n          - 3306:3306\n        volumes:\n          - ./data:/var/lib/mysql\n    \n      adminer:\n        image: adminer\n        restart: always\n        ports:\n          - 8080:8080\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);