# 程云来的个人站

这是基于 [Once UI Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) fork 的中文个人站，部署目标为 `chengyunlai.top`。

当前首版只保留两类内容：个人介绍和开源项目。项目数据来自 [Chengyunlai 的 GitHub](https://github.com/Chengyunlai)，后续可为独立项目配置 `*.chengyunlai.top` 二级域名。

本 fork 的主要改动：

- 将主站文案、导航、项目卡片和日期格式改为中文。
- 使用程云来的公开开源项目替换模板示例内容。
- 关闭博客、相册和订阅功能，减少首版维护面。
- 将 SEO 主域名改为 `https://chengyunlai.top`。

Magic Portfolio is a simple, clean, beginner-friendly portfolio template. It supports an MDX-based content system for projects and blog posts, an about / CV page and a gallery.

View the demo [here](https://demo.magic-portfolio.com).

![Magic Portfolio](public/images/og/home.jpg)

Launch your portfolio on [Aveiro](https://www.aveiro.app/marketplace/spotlight), our managed publishing platform. Update case studies, blog posts and content through MCP from your favorite AI tools.

## Getting started

**1. 克隆仓库**
```
git clone https://github.com/Chengyunlai/magic-portfolio.git
```

**2. 安装依赖**
```
npm install
```

**3. 启动开发服务器**
```
npm run dev
```

**4. 修改站点配置**
```
src/resources/once-ui.config.ts
```

**5. 修改个人内容**
```
src/resources/content.tsx
```

**6. 添加开源项目**
```
Add a new .mdx file to src/app/blog/posts or src/app/work/projects
```

本项目使用 [Once UI](https://once-ui.com) 和 [Next.js](https://nextjs.org) 构建，需要 Node.js 22+。

## Documentation

Docs available at: [docs.once-ui.com](https://docs.once-ui.com/docs/magic-portfolio/quick-start)

## Features

### Once UI
- All tokens, components & features of [Once UI](https://once-ui.com)

### SEO
- Automatic open-graph and X image generation with next/og
- Automatic schema and metadata generation based on the content file

### Design
- Responsive layout optimized for all screen sizes
- Timeless design without heavy animations and motion
- Endless customization options through [data attributes](https://once-ui.com/docs/theming)

### Content
- Render sections conditionally based on the content file
- Enable or disable pages for blog, work, gallery and about / CV
- Generate and display social links automatically
- Set up password protection for URLs

### Localization
- A localized, earlier version of Magic Portfolio is available with the next-intl library
- To use localization, switch to the 'i18n' branch

## Creators

Lorant One: [Threads](https://www.threads.net/@lorant.one) / [LinkedIn](https://www.linkedin.com/in/lorant-one/)

## Get involved

- Join the Design Engineers Club on [Discord](https://discord.com/invite/5EyAQ4eNdS) and share your project with us!
- Deployed your docs? Share it on the [Once UI Hub](https://once-ui.com/hub) too! We feature our favorite apps on our landing page.

## License

本项目及其修改版本继续遵循 CC BY-NC 4.0：必须保留署名并注明修改，不得用于商业用途。页脚保留 Once UI 署名链接，完整条款见 [`LICENSE`](LICENSE)。

如需商业使用，请先联系原作者确认授权范围。

## Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&project-name=portfolio&repository-name=portfolio&redirect-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&demo-title=Magic%20Portfolio&demo-description=Showcase%20your%20designers%20or%20developer%20portfolio&demo-url=https%3A%2F%2Fdemo.magic-portfolio.com&demo-image=%2F%2Fraw.githubusercontent.com%2Fonce-ui-system%2Fmagic-portfolio%2Fmain%2Fpublic%2Fimages%2Fog%2Fhome.jpg)
