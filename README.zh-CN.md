# MacBetter — 让 Mac 更好用

[English](README.md) · **中文** · [日本語](README.ja.md)

由社区共同维护的免费开源 macOS 软件目录。按用途找工具，了解使用要求，直达官方项目。

**[浏览软件目录](https://ixiehao.github.io/MacBetter/)** · **[推荐一款软件](https://github.com/ixiehao/MacBetter/issues/new?template=recommend-an-app.yml)**

## 这里有什么

- 按用途分类，支持搜索和筛选。
- 悬停查看项目截图，也可通过触屏或键盘打开大图。
- 简短介绍、实用推荐语、许可证和官方安装入口。
- 英文、中文、日文三种语言。
- **io 实测**表示 iXiehao 亲自使用过；其他条目依据项目公开信息核验。两者都不等同于安全审计，也不保证兼容所有系统。

## 推荐好工具

请提供源码仓库、许可证、官方安装入口、macOS 要求，以及它解决的一个具体问题，并补充重要权限或使用限制。

收录项目应有公开源码、明确的开源许可证、可用的免费版本，并能解决实际的 Mac 使用问题。付费扩展功能和独立的闭源产品需要写清楚；Star 数量不能代替质量或安全判断。

发现链接失效或介绍过时？欢迎[提交 Issue](https://github.com/ixiehao/MacBetter/issues/new) 或 Pull Request。参与方式见[贡献指南](CONTRIBUTING.md)。

## 本地预览

已生成的网站可以直接静态托管。修改软件数据、译文或页面模板后，先运行 `npm ci --ignore-scripts` 和 `npm run build:search`，重新生成三语页面。在仓库根目录预览：

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory website
```

打开 <http://127.0.0.1:8000/>。软件条目在 [`website/data/apps.json`](website/data/apps.json)，翻译在 [`website/app.js`](website/app.js)，修改时请同步三语。开发与发布流程见[文档索引](docs/README.md)。

## 许可与致谢

网站代码采用 [MIT](LICENSE) 许可证。收录软件保留各自的许可证，名称和图标归相应权利人所有；收录不代表项目作者为本目录背书。

网站自托管的 [Inter 与 Noto Sans 字体](website/assets/fonts/README.md) 采用 SIL OFL 1.1，[Tabler Icons](website/assets/TABLER-ICONS-LICENSE.md) 采用 MIT。网站 io 标识见[品牌资源说明](website/assets/BRAND.md)。
