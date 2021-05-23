<img src="https://cdn.statically.io/gh/craigary/nobelium/main/Nobelium-Logo.svg" width="50" height="50">

# Nobelium

A static blog build on top of Notion and Nextjs, deployed on [Vercel](https://vercel.com?utm_source=Craigary&utm_campaign=oss).

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
  <a aria-label="Powered by Vercel" href="https://vercel.com?utm_source=Craigary&utm_campaign=oss" title="Powered by Vercel">
    <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" height="28">
  </a>
</p>

[[中文说明](README-CN.md) | English]

Demo: [https://nobelium.vercel.app/](https://nobelium.vercel.app/)

<details><summary>Screenshot</summary>
<img src="https://github.com/craigary/nobelium/blob/main/desktop.png?raw=true">
</details>

## Highlights ✨

**🚀 &nbsp;Fast and responsive**

- Fast page render and responsive design
- Fast static generation with efficient compiler

**🤖 &nbsp;Deploy instantly**

- Deploy on Vercel in minutes
- Incremental regeneration and no need to redeploy after update the content in notion

**🚙 &nbsp;Fully functional**

- Comments, full width page, quick search and tag filter
- RSS, analytics, web vital... and much more

**🎨 &nbsp;Easy for customization**

- Rich config options, support English & Chinese interface
- Built with Tailwind CSS, easy for customization

**🕸 &nbsp;Pretty URLs and SEO friendly**

## Quick Start

- Star this repo 😉
- Duplicate [this Notion template](https://www.notion.so/68be9021bca34b8e89f0246f27e608df), and share it to the public
- [Fork](https://github.com/craigary/nobelium/fork) this project
- Customize `blog.config.js`
- _(Optional)_ Replace `favicon.svg`, and `favicon.ico` in `/public` folder with your own
- Deploy on [Vercel](https://vercel.com), set following environment variables：
  - `NOTION_PAGE_ID` (Required): The ID of the Notion page you previously shared to the web, usually has 32 digits after your workspace address
  - `NOTION_ACCESS_TOKEN` (Optional): If you decide not to share your database, you can use token to let Nobelium grab data from Notion database. You can find it in your browser cookies called `token_v2`
    - Keep in mind Notion token is only valid for 180 days, make sure to update manually in vercel dashboard, we probably switch to Official API to resolve this issue in the future. Also, images in Notion database will not properly rendered
- **That's it!** Easy-peasy?

<details><summary>Wait for a sec, what is Page ID？</summary>
  <img src="https://github.com/craigary/nobelium/blob/main/pageid.png?raw=true">
</details>

## Roadmap

Check out our roadmap [here](https://www.notion.so/craigary/Public-Roadmap-3cfc4d0f0ca642ef8f652673c37add22)

- [x] Better SEO
- [x] Dark mode
- [x] Open Graph support
- [x] Switch to react-notion-x
- [ ] Sitemap
- [ ] ...

## Technical details

- **Generation**: Next.js and Incremental Static Regeneration
- **Page render**: [react-notion-x](https://github.com/NotionX/react-notion-x)
- **Style**: Tailwind CSS and `@tailwindcss/jit` compiler
- **Comments**: Gitalk, Cusdis and more

## Special Thanks

<table>
<tr align="left">
    <td align="center"><a href="https://notion.so/cnotion"><img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F815be1aa-a8bf-46d0-887e-a1c9d18d8ae9%2Fnotion-logo-no-background.png?table=block&id=e1826899-1cd1-4de8-9b1c-ad0de60baa91&width=250&userId=1f77c970-e682-4c02-b9e8-4164924f04ab&cache=v2" width="80px;" alt=""/><br /><sub><b>Notion 中文社区</b></sub></a></td>
    <td align="center"><a href="https://twitter.com/SilentDepthCN"><img src="https://avatars.githubusercontent.com/u/7194254?s=460&u=d8c805acedf5c49ab8e1bfde58b16d7b7fe2b1bb&v=4" width="80px;" alt=""/><br /><sub><b>SilentDepth</b></sub></a></td>
    <td align="center"><a href="https://leerob.io"><img src="https://avatars.githubusercontent.com/u/9113740?s=460&u=6b5c9843f6d345ee178d1171dd3025610312af35&v=4" width="80px;" alt=""/><br /><sub><b>Lee Rob</b></sub></a></td>
    <td align="center"><a href="https://spencerwoo.com"><img src="https://avatars.githubusercontent.com/u/32114380?s=460&u=81d1f9754f354c63ece17a83196be14b51ee1056&v=4" width="80px;" alt=""/><br /><sub><b>Spencer Woo</b></sub></a></td>
  </tr>
</table>

## Contributors

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
