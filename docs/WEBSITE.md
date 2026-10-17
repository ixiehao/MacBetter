# MacBetter 官网维护

[文档索引](README.md) · [开发指南](DEVELOPMENT.md)

## 源码与地址

- 官网源码：[`website/`](../website/)。
- 线上地址：https://ixiehao.github.io/MacBetter/
- 部署流程：[`deploy-pages.yml`](../.github/workflows/deploy-pages.yml)。
- 软件库：[`website/data/apps.json`](../website/data/apps.json)。

源码目录不进入公开 URL；迁移后不要把外链改成 `/MacBetter/website/`。软件库和图标以网站根目录为相对基准，保持其相对结构。

## 预览与验证

在仓库根目录运行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory website
```

访问 <http://127.0.0.1:8000/>，按[开发指南](DEVELOPMENT.md#验证)检查数据与 JavaScript。核查中文、英文、日语，桌面四列/窄屏换行，搜索、分类、推荐入口和下载；确认新文案的字形包含在自托管字体子集中。

## 部署

工作流上传 `website/` 为站点根目录，不上传根 README 或维护文档。

Pages 发布来源现为 **GitHub Actions**，不再从 `main` 分支根目录直接发布。重建仓库或恢复设置时，在 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**；仅新增工作流文件不会自动改动该设置。

工作流监听 `website/**` 与自身配置，可手动触发。上线后核对图标、JSON、语言切换、canonical、分享图、robots、sitemap 和浏览器缓存；未确认线上新版本前不宣称完成发布。
