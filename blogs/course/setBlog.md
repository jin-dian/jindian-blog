---
title: 个人博客搭建
date: 2021-12-29
tags: [vuepress]
categories:
 -  教程
---

# vercel+vuepress个人博客搭建

> 使用vercel免费资源作为服务器，博客框架使用vuepress

## 博客搭建

### 安装

```bash
#npm
npm install @vuepress-reco/theme-cli -g
theme-cli init

#yarn
yarn global add @vuepress-reco/theme-cli
theme-cli init
```

[github地址](https://github.com/vuepress-reco/vuepress-theme-reco-demo) 选择1.x版本即可

将代码推送到个人github库的master分支即可

## 博客部署

在[vercel](https://vercel.com)注册账号后登录

![image-20220415104234290](https://cdn.jsdelivr.net/gh/jin-dian/image/blog/image-20220415104234290.png)

点击New Project创建项目，导入github仓库

![image-20220415104315493](https://cdn.jsdelivr.net/gh/jin-dian/image/blog/image-20220415104315493.png)

![image-20220415104330977](https://cdn.jsdelivr.net/gh/jin-dian/image/blog/image-20220415104330977.png)

选择对应仓库后，点击import导入，再点击Deploy构建部署

![image-20220415104352349](https://cdn.jsdelivr.net/gh/jin-dian/image/blog/image-20220415104352349.png)

构建完成后进入概览页，点击Visit按钮，进入博客页面。
