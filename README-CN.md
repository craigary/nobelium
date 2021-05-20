<img src="Nobelium-Logo.svg" width="50" height="50">

# Nobelium

一个使用 NextJS + Notion API 实现的，部署在 Vercel 上的静态博客系统。为 Notion 和所有创作者设计。

<p>
  <a aria-label="GitHub commit activity" href="https://github.com/craigary/nobelium/commits/main" title="GitHub commit activity">
    <img src="https://img.shields.io/github/commit-activity/m/craigary/nobelium?style=for-the-badge">
  </a>
  <a aria-label="GitHub contributors" href="https://github.com/craigary/nobelium/graphs/contributors" title="GitHub contributors">
    <img src="https://img.shields.io/github/contributors/craigary/nobelium?color=orange&style=for-the-badge">
  </a>
  <a aria-label="Build status" href="#" title="Build status">
    <img src="https://img.shields.io/github/deployments/craigary/nobelium/Preview?logo=Vercel&style=for-the-badge">
  </a>
</p>

[中文说明 / [English](README.md)]

演示地址：[https://nobelium.vercel.app/](https://nobelium.vercel.app/)

<details><summary>截图</summary>
<img src="https://github.com/craigary/nobelium/blob/main/desktop.png?raw=true">
</details>

## 亮点 ✨

**🚀 &nbsp;秒开，设备全适配**

- 快速的页面渲染和响应式设计
- 高效编译器的快速静态页面生成

**🤖 &nbsp;自动，无需重新部署**

- 部署在免费、高速的 Vercel 平台
- 支持增量式更新，更新文章后无需重复部署

**🚙 &nbsp;全功能，完全不操心**

- 评论、宽页面、搜索和标签
- 订阅、网站统计、Web Vital 分析…… 还有更多功能待你发现

**🎨 &nbsp;美观，轻松自定义**

- 丰富的配置项，更支持多语言
- 使用 Tailwind CSS，轻松实现二次开发

**🕸 &nbsp;网址美观、搜索引擎优化**

## 快速起步

- 给这个项目点个小星星 😉
- 将 [这个 Notion 模板](https://www.notion.so/68be9021bca34b8e89f0246f27e608df) 制作副本，并分享这个页面给所有人
- [Fork](https://github.com/craigary/nobelium/fork) 这个项目
- 在 `blog.config.js` 配置相关选项
- _(可选)_ 用自己的图片替换 `/public` 文件夹里的 `favicon.svg` 和 `favicon.ico`
- 在 [Vercel](https://vercel.com) 上部署这个项目, 设定一下环境变量：
  - `NOTION_PAGE_ID`: 你刚刚分享出去的 Notion 页面网址中的页面 ID，通常是网址中工作区地址后的 32 位字符串
  - `NOTION_ACCESS_TOKEN`（可选）: 如果你决定不分享你的数据库，你可以使用 token 来让 Nobelium 从 Notion 数据库中抓取数据。你可以在你的浏览器 cookies 中找到它，名称是 `token_v2'
    - Notion token 的有效期只有 180 天，请确保在 Vercel Dashboard 上手动更新，我们可能会在未来切换到官方 API 来解决这个问题。此外，如果数据库是非公开到，Notion 中的图片可能无法正常显示到网页上
- **稍微等等就可以访问了！** 简单吗?

<details><summary>等等，什么是 Page ID？</summary>
  <img src="https://github.com/craigary/nobelium/blob/main/pageid.png?raw=true">
</details>

## Roadmap

在这里看看我们的 [Roadmap](https://www.notion.so/craigary/Public-Roadmap-3cfc4d0f0ca642ef8f652673c37add22)

- [x] 搜索引擎优化
- [x] 深色模式
- [x] Open Graph 支持
- [x] 切换到 react-notion-x
- [ ] 站点地图
- [ ] ...

## 技术细节

- **生成**: Next.js SSG 和 Incremental Static Regeneration
- **页面渲染**: [React-notion-x](https://github.com/NotionX/react-notion-x)
- **样式**: Tailwind CSS 和 `@tailwindcss/jit` compiler
- **评论**: Gitalk，Cusdis... 更多评论系统还在路上

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

## License

The MIT License.
