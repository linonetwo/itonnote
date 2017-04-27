# 技术依赖

## UI

- 存取后端数据：Apollo GraphQL
- 前端状态转移：redux-observable
- 前端样式库：styled-components
- 离线应用：[jIO](https://lab.nexedi.com/nexedi/jio/)
- 质量控制：FlowType, Jest, ReactStorybook

## 存储

- 暴露后端数据：Apollo GraphQL
- 图论模型：Neo4j, GraphawareTimeTree

我没有直接将 GraphQL 转换为 Cypher，因为当前业务只需要从一个节点出发探索以确定步数相邻的其他节点，没有动态生成很复杂的图遍历 GraphQL 语句的需求，所以我将直接在 GraphQL 的 resolver 里调用固定的 Cypher 模板。

## SSR

利用了 [apollo-fullstack-starter-kit](https://github.com/sysgears/apollo-fullstack-starter-kit)

## 部署

### Docker

Neo4j 的 Dockerfile 是我自己写的，打包了 Graphaware 的 UUID 和 TimeTree 进去。
  
UI 服务器用 NodeJS + express，而不是用 Nginx 直接反代 HTML 文件，主要是为了未来进行服务端渲染，方便可能有的博客功能的 SEO 、缓存和洗流量。
