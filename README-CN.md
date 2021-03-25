# Nobelium
一个免费、快速的的博客系统，为 Notion 和所有创作者设计。

[中文说明 / [English](README.md)]

## 演示

官方：[https://nobelium.vercel.app/](https://nobelium.vercel.app/)
  
<details><summary>截图</summary>
<img src="https://github.com/craigary/nobelium/blob/main/desktop.png?raw=true">
</details>

## 项目亮点  ✨

**🚀 秒开，设备全适配**

  - 快速的页面渲染和响应式设计
  - 得益于高效编译器的快速静态页面生成

**🤖 自动，无需服务器**

  - 在免费、快速的 Vercel 平台上部署，几分钟完成
  - 支持累积式更新，及时展现内容

**🚙 全功能，完全不操心**

  - 评论、搜索和标签
  - 订阅、关于、分析、SSL 加密，还有更多功能待你发现！ 

**🎨 美观，轻松自定义**

  - 夜间模式
  - 使用 tailwindcss，轻松完成自定义

**🕸 网址美观、搜索引擎优化** 

## 马上试试！ 

### 首先：给这个项目点个小星星
😉
### 第一步: 准备开始

- 复制 [这个 Notion 模板](https://www.notion.so/68be9021bca34b8e89f0246f27e608df)
- 分享这个页面给所有人
### 第二部：复制本项目并自定义
- [Fork](https://github.com/craigary/nobelium/fork) 这个项目到你的 GitHub
- 将 `blog.config.js` 的相关信息改为自己的
- *(可选)* 用自己的图片替换 `/public` 文件夹里的 `avatar.svg`、`logo.svg` 和 `favicon.ico`

### 第三步：轻松部署
- 在 [Vercel](https://vercel.com) 上部署这个项目, 只需设定一个环境变量：
    - `NOTION_PAGE_ID`: 你刚刚分享出去的 Notion 页面网址中的页面 ID，通常是网址中工作区地址后的 32 位字符串
- **稍微等等就可以访问了！** 简单吗?


## 你问我答
**问：** 我需要购买服务器吗？   
**答：** 完全不需要！ 你可以 **完全免费** 地部署在 Vercel 上!

**问：** 我能使用自己的域名吗？  
**答：** 当然 **可以**!  
  
**问：** 我可以自定义些什么东西？   
**答：** 基本上 **所有东西**！   

## 项目规划

在这里看看我们的 [项目规划](https://www.notion.so/craigary/Public-Roadmap-3cfc4d0f0ca642ef8f652673c37add22)

- [x]  搜索引擎优化
- [x]  深色模式
- [x]  Open Graph 支持
- [ ]  站点地图
- [ ]  设计文件
- [ ]  ...

## 技术细节

- **生成**: Next.js SSG 和 Incremental Static Regeneration
- **页面渲染**: [React-notion](https://github.com/splitbee/react-notion)
- **样式**: Tailwindcss 和 `@tailwindcss/jit` compiler
- **评论**: Gitalk，还有更多即将到来的系统 

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## 特别感谢

<table>
<tr align="left">
    <td align="center"><a href="https://notion.so/cnotion"><img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F815be1aa-a8bf-46d0-887e-a1c9d18d8ae9%2Fnotion-logo-no-background.png?table=block&id=e1826899-1cd1-4de8-9b1c-ad0de60baa91&width=250&userId=1f77c970-e682-4c02-b9e8-4164924f04ab&cache=v2" width="80px;" alt=""/><br /><sub><b>Notion 中文社区</b></sub></a></td>
    <td align="center"><a href="https://twitter.com/SilentDepthCN"><img src="https://avatars.githubusercontent.com/u/7194254?s=460&u=d8c805acedf5c49ab8e1bfde58b16d7b7fe2b1bb&v=4" width="80px;" alt=""/><br /><sub><b>SilentDepth</b></sub></a></td>
    <td align="center"><a href="https://leerob.io"><img src="https://avatars.githubusercontent.com/u/9113740?s=460&u=6b5c9843f6d345ee178d1171dd3025610312af35&v=4" width="80px;" alt=""/><br /><sub><b>Lee Rob</b></sub></a></td>
    <td align="center"><a href="https://spencerwoo.com"><img src="https://avatars.githubusercontent.com/u/32114380?s=460&u=81d1f9754f354c63ece17a83196be14b51ee1056&v=4" width="80px;" alt=""/><br /><sub><b>Spencer Woo</b></sub></a></td>
  </tr>
</table>

## 贡献者
<table>
<tr align="left">
    <td align="center"><a href="https://github.com/craigary"><img src="https://avatars.githubusercontent.com/u/10571717?s=64&v=4" width="80px;" alt=""/><br /><sub><b>Craig Hart</b></sub></a><br /><a href="https://github.com/craigary/nobelium/commits?author=craigary" title="Owner">🎫 🔧 🎨 🐛</a></td>
    <td align="center"><a href="https://github.com/reycn"><img src="https://avatars.githubusercontent.com/u/11225092?s=64&v=4" width="80px;" alt=""/><br /><sub><b>Reynard</b></sub></a><br /><a href="https://github.com/craigary/nobelium/commits?author=reycn" title="Owner"> 🎨 🐛</a></td>
    <td align="center"><a href="https://github.com/Niinjoy"><img src="https://avatars.githubusercontent.com/u/39721307?s=64&v=4" width="80px;" alt=""/><br /><sub><b>Niin</b></sub></a><br /><a href="https://github.com/craigary/nobelium/commits?author=Niinjoy" title="Owner">🔧 🐛</a></td>
    <td align="center"><a href="https://github.com/ruter"><img src="https://avatars.githubusercontent.com/u/8568876?s=64&v=4" width="80px;" alt=""/><br /><sub><b>Ruter</b></sub></a><br /><a href="https://github.com/craigary/nobelium/commits?author=ruter" title="Owner">🔧 🐛</a></td>
  </tr>
</table>
