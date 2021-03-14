# Nobelium

Nobelium 是一个使用 NextJS + Notion 第三方 API 实现的，部署在 Vercel 上的静态博客系统。

演示地址：[https://nobelium.vercel.app/](https://nobelium.vercel.app/)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## 这个东西啊，Excited!

- 部署在 Vercel，配合 NextJS，实现超快的相应速度
- 使用 NextJS 实现，配合 ISG，更新 Notion 文章无需重新部署
- 响应式设计，移动端友好
- 支持搜索，单独筛选页面
- Tag 标签、RSS feed… 还有更多！

## 部署流程

- Fork 此项目
- 将[此 Notion 模版](https://www.notion.so/68be9021bca34b8e89f0246f27e608df)在你的工作区制作副本，并确保此页面是公开分享的
- 修改 `blog.config.js` 文件，定义你的内容
- 替换 `/public` 下的头像和 Logo
- 使用 vercel 部署，并定义以下两个环境变量：
    - `NOTION_API_ENDPOINT`：Notion 第三方 API 地址，可以使用 `https://notion.craigary.net/api`，也可以 [参考此处](https://github.com/splitbee/notion-api-worker) 自行部署，请不要使用 `/` 结尾
    - `NOTION_PAGE_ID` ：此前你公开分享的 Notion 页面的 ID，通常为你的工作区地址后面的 32 位字符。

## Roadmap

稍后会更新在 Notion 中。

- [ ]  部署时使用 Preact
- [ ]  深色模式
- [ ]  站点地图
- [ ]  更好的 RSS feed
- [ ]  SEO 优化
- [ ]  Open Graph 支持
- [ ]  Figma 设计文件
- [ ]  ...

## 特别感谢

[Notion 中文社区](https://notion.so/cnotion)

[Lee Rob](https://leerob.io/)

[Spencer Woo](https://spencerwoo.com/)