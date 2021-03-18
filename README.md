# Nobelium

Nobelium is a static blog build on top of Notion API and NextJS, deployed on Vercel.

[简体中文](README-CN.md)

---

DEMO：[https://nobelium.vercel.app/](https://nobelium.vercel.app/)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## What makes you feel excited

- Deployed on Vercel, along with Next.js SSG, your blog will be blisteringly fast 
- With Next.js, you have Incremental Static Regeneration; there's no need for re-deploy when you update the content.
- Nobelium is built using tailwindcss, easy for customization.
- Use `@tailwindcss/jit` compiler, faster build times.
- Render notion content using [react-notion](https://github.com/splitbee/react-notion)
- Responsive for desktop / mobile, obviously
- Quick search and tag filter
- Gitalk for comments, more options coming soon
- Support about page
- Tags, RSS feed, website Analytics... and so much more!

<details><summary>Screenshot</summary>
<img src="https://github.com/craigary/nobelium/blob/main/desktop.png?raw=true">
</details>

## Setup

- [Fork](https://github.com/craigary/nobelium/fork) this project
- Duplicate [this Notion template](https://www.notion.so/68be9021bca34b8e89f0246f27e608df) to your workspace, make sure the page is shared with the public
- Tweak `blog.config.js` based on your preference
- Replace with your own avatar and logo in `/public` folder
- Deploy on Vercel, set following environment variables：
    - `NOTION_PAGE_ID`: The ID of the Notion page you previously shared with the public, usually has 32 digits after your workspace address
- That's it, how about star this project?

## Roadmap

Check out our roadmap [here](https://www.notion.so/craigary/Public-Roadmap-3cfc4d0f0ca642ef8f652673c37add22)

- [x]  Better SEO
- [ ]  Use preact when deploying in production
- [ ]  Add more comment system
- [ ]  Add more analytics system
- [ ]  Dark mode
- [ ]  Sitemap
- [ ]  Open Graph support
- [ ]  Figma design file
- [ ]  ...

## Special Thanks

[Notion CN community](https://notion.so/cnotion)

[SilentDepth](https://twitter.com/SilentDepthCN)

[Lee Rob](https://leerob.io)

[Spencer Woo](https://spencerwoo.com)
