(window.webpackJsonp=window.webpackJsonp||[]).push([[854],{1647:function(e,t,c){"use strict";c.r(t);var v=c(5),l=Object(v.a)({},(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[c("h1",{attrs:{id:"kubectl-与-docker-命令"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-与-docker-命令"}},[e._v("#")]),e._v(" Kubectl 与 Docker 命令")]),e._v(" "),c("h2",{attrs:{id:"概述"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),c("p",[e._v("Docker 命令和 Kubectl 命令有很多相似的地方，Docker 操作容器，Kubectl 操作 Pod（容器的集合）等")]),e._v(" "),c("h2",{attrs:{id:"运行容器"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#运行容器"}},[e._v("#")]),e._v(" 运行容器")]),e._v(" "),c("ul",[c("li",[e._v("docker："),c("code",[e._v("docker run -d --restart=always -e DOMAIN=cluster --name nginx-app -p 80:80 nginx")])]),e._v(" "),c("li",[e._v("kubectl：\n"),c("ul",[c("li",[c("code",[e._v('kubectl run --image=nginx nginx-app --port=80 --env="DOMAIN=cluster"')])]),e._v(" "),c("li",[c("code",[e._v("kubectl expose deployment nginx-app --port=80 --name=nginx-http")])])])])]),e._v(" "),c("blockquote",[c("p",[c("strong",[e._v("注意：")]),e._v(" "),c("code",[e._v("kubectl run")]),e._v(" 会创建一个 "),c("strong",[e._v("Deployment")]),e._v(" 并且默认会在后台运行，以上面的代码为例它的名称为 "),c("strong",[e._v("nginx-app")]),e._v("。默认情况 Deployment 并不会将端口暴露出去，所以我们还需要使用 "),c("code",[e._v("kubectl expose")]),e._v(" 暴露端口以供访问，此时还会创建一个同名的 "),c("strong",[e._v("Service")])])]),e._v(" "),c("h2",{attrs:{id:"查看已运行的容器"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#查看已运行的容器"}},[e._v("#")]),e._v(" 查看已运行的容器")]),e._v(" "),c("ul",[c("li",[e._v("docker："),c("code",[e._v("docker ps")])]),e._v(" "),c("li",[e._v("kubectl：\n"),c("ul",[c("li",[c("code",[e._v("kubectl get pods")])]),e._v(" "),c("li",[c("code",[e._v("kubectl get deployment")])]),e._v(" "),c("li",[c("code",[e._v("kubectl get service")])])])])]),e._v(" "),c("h2",{attrs:{id:"交互式进入容器"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#交互式进入容器"}},[e._v("#")]),e._v(" 交互式进入容器")]),e._v(" "),c("ul",[c("li",[e._v("docker："),c("code",[e._v("docker exec -it <容器 ID/NAME> /bin/bash")])]),e._v(" "),c("li",[e._v("kubectl："),c("code",[e._v("kubectl exec -it <容器名> -- /bin/bash")])])]),e._v(" "),c("h2",{attrs:{id:"打印日志"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#打印日志"}},[e._v("#")]),e._v(" 打印日志")]),e._v(" "),c("ul",[c("li",[e._v("docker："),c("code",[e._v("docker logs -f <容器 ID/NAME>")])]),e._v(" "),c("li",[e._v("kubectl："),c("code",[e._v("kubectl logs -f <容器名>")])])]),e._v(" "),c("h2",{attrs:{id:"停止和删除容器"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#停止和删除容器"}},[e._v("#")]),e._v(" 停止和删除容器")]),e._v(" "),c("ul",[c("li",[e._v("docker：\n"),c("ul",[c("li",[c("code",[e._v("docker stop <容器 ID/NAME>")])]),e._v(" "),c("li",[c("code",[e._v("docker rm <容器 ID/NAME>")])])])]),e._v(" "),c("li",[e._v("kubectl：\n"),c("ul",[c("li",[c("code",[e._v("kubectl delete deployment <Deployment 名称>")])]),e._v(" "),c("li",[c("code",[e._v("kubectl delete service <Service 名称>")])])])])]),e._v(" "),c("blockquote",[c("p",[c("strong",[e._v("注意：")]),e._v(" 不要直接删除 Pod，使用 kubectl 请删除拥有该 Pod 的 Deployment。如果直接删除 Pod，则 Deployment 将会重新创建该 Pod。")])]),e._v(" "),c("h2",{attrs:{id:"查看版本"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#查看版本"}},[e._v("#")]),e._v(" 查看版本")]),e._v(" "),c("ul",[c("li",[e._v("docker："),c("code",[e._v("docker version")])]),e._v(" "),c("li",[e._v("kubectl："),c("code",[e._v("kubectl version")])])]),e._v(" "),c("h2",{attrs:{id:"查看环境信息"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#查看环境信息"}},[e._v("#")]),e._v(" 查看环境信息")]),e._v(" "),c("ul",[c("li",[e._v("docker："),c("code",[e._v("docker info")])]),e._v(" "),c("li",[e._v("kubectl："),c("code",[e._v("kubectl cluster-info")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);