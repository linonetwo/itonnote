# itonnote

事体笔记，基于[事体理论](http://onetwo.ren/处理人格的边界/)整合模因，处于原型阶段。

## 术语

- 事体：一件事、一个组织、一个人格等等你用来组织你做事成果的单位
- 模因：由其他模因重组拼凑而成的信息，或对某个事体有意义的信息
- 占意：注意力流入一个事体，事体占用注意力形成的积累量，用于量化事体价值等
- itonnote：事体的英文翻译似乎是 it，因此事体笔记可尝试译作 itonnote

## 概述

多任务、多人格的现代生活需要一个新的知识归档方式，以便每个人切换角色、切换所做事务时能很快获取到所需信息，这些信息可能来自于个人笔记、爬虫和物联网设备。

事体可能是我们所需的归档方式之一，itonnote 将实验性地用事体理论进行知识管理   *~~虽然这理论只是个来自小说的脑洞？~~*

## 项目概述

### 项目背景

repo 作者林一二感觉 Evernote 等笔记常常不能帮他找回支离破碎的笔记和网页剪藏，不是很好的知识管理系统，因此没法支持好他挖坑不填的习性。他决定实验性地写一个简单的原型，验证自己关于个人知识管理的一些脑洞。  *~~ 如果这个坑填了，他就可以变本加厉地挖坑不填了 ~~*

### 目标用户和特点

本原型主要针对拥有多个信息来源，经常开始新项目，需要从多信息来源做调研的个人用户。特殊的设计使得它更适合「容易想起自己做个什么事但是记不清怎么做」的人，尤其适合「记得跟某人吹过牛但是忘了具体装了哪些逼」等场景。

具体需要满足以下基本需求：

- 有笔记应用基本功能
- 将笔记放进多个事体
- 根据当前事体高效探索或推荐知识
- 运行 JS 程序将笔记作为输入，输出图表或文字引用

### 项目风险

- repo 作者可能不会填坑
- 关于事体的脑洞被证明是低效无用的，存在更能满足目标用户的理论框架

## 功能需求（筹）

-|-
-|-
功能|创建事体
编号|FR-IO-001
优先级|高
用户场景|调研者、立项者
功能描述|使用事体笔记需要创建事体作为信息的容器，可以有匿名的事体被自动创建出来。
处理流程|检查当前账户下是否已经有事体存在，不存在则创建一个匿名事体
用户痛点|有了一个用于放所有项目文件的「文件夹」
补充说明|事体每次形成占意，都连接到 neo4j 时间树的起止日期上

-|-
-|-
功能|创建和编辑笔记
编号|FR-IO-002
优先级|高
用户场景|调研者、立项者
功能描述|将blob（二进制大文件）存到数据库里，blob可以是任何格式，并存放在某些事体里
处理流程|根据用户意愿将blob关联到至少一个事体上
用户痛点|用户可能上传任何文件，想把笔记系统当仓库云使用，而且还能添加「快捷方式」
补充说明|目前想存在 mongo 里

-|-
-|-
功能|查看笔记
编号|FR-UI-001
优先级|高
用户场景|调研者
功能描述|将blob以其格式展示在网页上
处理流程|根据blob格式，使用适当的插件渲染内容
用户痛点|PDF和markdown都可以查看
补充说明|主要支持 markdown，其他某些数据的格式可以是一段 JS 的地址，就用这段 JS 来渲染内容为 iframe

-|-
-|-
功能|查看相关事体和模因
编号|FR-UI-002
优先级|中
用户场景|调研者、阅读者
功能描述|在笔记边栏显示本笔记所在的事体、本笔记各段落相关的模因或事体。打开事体时显示各模因所属的事体
处理流程|随着笔记滚动，边栏同步滚动，并用有色线段标识出段落与模因或事体的相关性
用户痛点|方便用户通过摘要型模因进行知识探索或交互式搜索
补充说明|类似于「PROJECT XANADU®」或某些同步滚动的 Markdown 预览，也为类 quip 的文档评论提供了可能，还可以插入广告呢！

-|-
-|-
功能|渲染插件系统
编号|FR-PLUG-001
优先级|中
用户场景|阅读者
功能描述|用个性化的 JS 脚本渲染 blob（二进制大文件）
处理流程|
用户痛点|用户可能想看 CSV 格式渲染出来的标签云、想用自己的 Markdown 渲染器等
补充说明|还不会设计插件系统，需要时间学习（坑！）

## 非功能需求

### 安全需求

### 性能需求

暂不理会此类需求

### 日志记录

实现回滚或行为采集

### 文档需求

个人开发，原型系统，文档误国

### 盈利需求

大公无私，只求无过

### 部署场景

Docker CE 一键部署 docker compose 的 Neo4j、nodeJS、Mongo
