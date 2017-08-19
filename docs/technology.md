# 技术依赖

## UI

- 存取后端数据：Apollo GraphQL
- 前端状态转移：redux-observable
- 前端样式库：styled-components
- 离线应用：[jIO](https://lab.nexedi.com/nexedi/jio/)
- 质量控制：FlowType, Jest, ReactStorybook

环形菜单使用了 ```react-track``` 来获得触发点位置，并用 ```styled-components``` 运行时生成 css 把菜单项放到正确的位置，用 ```react-cursor-position``` 判断鼠标位置而触发函数。将来将加入多种触发方式、自动避开边缘、出现消失动画，并发布为单独的 npm 包。

## 存储

- 暴露后端数据：Apollo GraphQL
- 图论模型：Neo4j, GraphawareTimeTree

我没有直接将 GraphQL 转换为 Cypher，因为当前业务只需要从一个节点出发探索以确定步数相邻的其他节点，没有动态生成很复杂的图遍历 GraphQL 语句的需求，所以我将直接在 GraphQL 的 resolver 里调用固定的 Cypher 模板。

元信息尽量用点之间的特定类型的边来存储，而不是保存为点的属性。比如任务的起始时间就应该用特定类型的边关联到时间树上，以便插件快速获取此类元信息。

## SSR

利用了 [apollo-fullstack-starter-kit](https://github.com/sysgears/apollo-fullstack-starter-kit)

## 部署

### Docker

Neo4j 的 Dockerfile 是我自己写的，打包了 Graphaware 的 UUID 和 TimeTree 进去。
  
UI 服务器用 NodeJS + express，而不是用 Nginx 直接反代 HTML 文件，主要是为了未来进行服务端渲染，方便可能有的博客功能的 SEO 、缓存和洗流量。
