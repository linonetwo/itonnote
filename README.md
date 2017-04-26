# itonnote

<!-- TOC -->

- [itonnote](#itonnote)
  - [术语](#术语)
  - [概述](#概述)
  - [项目概述](#项目概述)
    - [项目背景](#项目背景)
    - [目标用户和特点](#目标用户和特点)
    - [项目风险](#项目风险)
    - [部署场景](#部署场景)

<!-- /TOC -->

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

repo 作者林一二感觉 Evernote 等笔记常常不能帮他找回支离破碎的笔记和网页剪藏，不是很好的知识管理系统，因此没法支持好他挖坑不填的习性。他决定实验性地写一个简单的原型，验证自己关于个人知识管理的一些脑洞。  *~~如果这个坑填了，他就可以变本加厉地挖坑不填了~~*

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


### 部署场景

Docker CE 一键部署 docker compose 的 Neo4j、nodeJS、Mongo
