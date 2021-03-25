# Nobelium   
A free and fast blog builder for Notion, and for every creator.

[[中文说明](README-CN.md) | English] 

## Showcases
Official demo: [https://nobelium.vercel.app/](https://nobelium.vercel.app/)

<details><summary>Screenshot</summary>
<img src="https://github.com/craigary/nobelium/blob/main/desktop.png?raw=true">
</details>


## Amazing points ✨
**🚀 &nbsp;Fast and responsive**

  - Fast page render and responsive design
  - Static generation and quick building using an efficient compiler

**🤖 &nbsp;Serverless and automated**

  - Deploy on a free and fast platform, Vercel, in few minutes
  - Incremental rgeneration and the content is always up to date

**🚙 &nbsp;Fully functional**

  - Comments, quick search and tag filter
  - RSS, about page, analytics, SSL, and more!

**🎨 &nbsp;Easy for customization**

  - Night mode
  - Nobelium is built using tailwindcss, easy for customization

**🕸 &nbsp;Pretty URLs and SEO friendly** 

## Getting started
### Step 0: Star this repo
😉
### Step 1: Prerequisite

- Duplicate [this Notion template](https://www.notion.so/68be9021bca34b8e89f0246f27e608df)
- Share it to the web
### Step 2: Fork this project to customize
- [Fork](https://github.com/craigary/nobelium/fork) this project
- Customize `blog.config.js` 
- *(Optional)* Replace `avatar.svg`, `logo.svg`, and `favicon.ico` in `/public` folder with your own

### Step 3: Deploy in few seconds
- Deploy on [Vercel](https://vercel.com), set following environment variables：
    - `NOTION_PAGE_ID`: The ID of the Notion page you previously shared to the web, usually has 32 digits after your workspace address
- **That's it!** Easy-peasy?

## FAQ
**Q:** Do I need to buy a server?  
**A:** No! You can use Vercel **without any cost**!

**Q:** Can I use my own domain?  
**A:** Definitely **YES**!  
  
**Q:** What can I customize?  
**A:** Literally **everything**!  

## Roadmap

Check out our roadmap [here](https://www.notion.so/craigary/Public-Roadmap-3cfc4d0f0ca642ef8f652673c37add22)

- [x]  Better SEO
- [x]  Dark mode
- [x]  Open Graph support
- [ ]  Sitemap
- [ ]  Figma design file
- [ ]  ...

## Technical details

- **Generation**: Next.js SSG and Incremental Static Regeneration
- **Page render**: [React-notion](https://github.com/splitbee/react-notion)
- **Style**: Tailwindcss and `@tailwindcss/jit` compiler
- **Comments**: Gitalk and more incoming  

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)


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
