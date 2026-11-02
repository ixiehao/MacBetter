# MacBetter 开发指南

[文档索引](README.md) · [官网维护](WEBSITE.md)

## 目录职责

- `website/index.html`、`styles.css`、`app.js`：页面结构、样式、交互及本地化。
- `website/data/apps.json`：软件条目数据。
- `website/assets/`：软件图标、字体和分享素材；保留各项来源与许可证。
- `.github/ISSUE_TEMPLATE/`：社区推荐入口。
- `docs/`：开发与部署文档；`PROMOTION.md`：本项目公开推广说明。

页面不需要 npm 安装或打包。预览方法见 [WEBSITE.md](WEBSITE.md)。

## 更新软件库

1. 按 [CONTRIBUTING.md](../CONTRIBUTING.md) 核对官方仓库、许可证、macOS 支持和官方发行入口。
2. 使用唯一且稳定的 `id`，填写名称、简介、简短推荐语、分类、功能标签、链接和图标；字段结构以现有 JSON 与消费代码为准。
3. `io 实测` 只用于维护者确实使用过的软件；不要以来源检查代替实测。
4. 将功能相近的软件排在一起，检查 `sortOrder`、分类筛选与多语言映射。
5. 新许可证必须同步“开源说明”；权限信息按当前 UI 设计呈现，不重新塞回功能标签行。

### 用途分类

- `category` 是卡片显示的主要用途，`categories` 列出所有适用分类，必须包含主分类。分类名称统一从 `app.js` 的三语文案读取，不在软件数据中重复保存名称。
- 分类定义、三语名称、Tabler 图标及同类软件排序均在 `website/app.js` 中维护。新增分类要同步 `categories`、`categoryIcons`、`categoryOrder`、三语 `copy.*.category`、`workflowOrder` 和初始 HTML 的分类数量。
- 下载工具、网络浏览、笔记与知识、影音播放、音频与音乐、截图与录屏、效率与自动化独立分类。开发工具与隐私安全按实际用途归类，不把浏览器或一般效率工具都放进开发分类。
- 多用途归类应有明确功能依据，例如 MacShot 属于截图与录屏，也支持图片标注；Cyberduck 属于下载工具，也提供文件传输。不要因为具备隐私设置就把所有浏览器放进安全分类。
- 全部目录按主用途排列；进入分类后按该分类的 `workflowOrder` 排列，包括从其他主分类进入的多用途软件。软件总数按唯一 ID 统计，分类数量允许重叠。

### 软件截图预览

- 有合适截图时，可添加 `preview: { image, source }`：`image` 是项目官网或官方仓库提供的 HTTPS 图片原址，`source` 是展示该截图的官方页面。不要填 logo、用户头像、手机端界面或无法代表软件的宣传素材。
- 若项目提供三语截图，可补充 `preview.images`，使用 `en`、`zh`、`ja` 键；缺少某语种时回退到 `image`。不把截图文件复制进本仓库，来源及图片权利保留给原项目。
- 卡片由 `app.js` 输出预览入口，交互在 `previews.js`，样式在 `styles.css`。鼠标停留后才加载侧边截图；触屏与键盘通过按钮打开原比例大图。
- 悬停时，黑色半透明遮罩位于页面与当前卡片之间，不拦截鼠标；当前卡片和截图保持清晰。移开、Escape、滚动、切换筛选或窗口失焦时同步清除高亮与遮罩。
- 浮层按截图比例和可见区域计算宽高，标题与底栏使用实际高度；图片网格必须允许收缩，防止竖图的固有尺寸撑开网格后被裁切。
- 更新后检查左右定位、窄屏弹层、Escape、焦点恢复、异步加载切换及图片失效；未核实的截图不启用入口。图片和来源 URL 必须为 HTTPS，不需要绕过防盗链或登录限制。

## 验证

从仓库根目录运行：

```sh
node --check website/app.js
node --check website/previews.js
node scripts/check-icons.mjs
node -e 'const fs=require("node:fs"); const a=JSON.parse(fs.readFileSync("website/data/apps.json","utf8")); if(!Array.isArray(a)||new Set(a.map(x=>x.id)).size!==a.length) throw Error("Invalid catalog or duplicate id"); console.log(a.length+" apps");'
git diff --check
```

然后检查中文、英文、日语下的搜索、分类、排序、许可证说明、推荐按钮、官方下载链接和窄屏换行。检查每个本地图标实际存在；来源页面可访问不代表安装包已实测。

软件图标统一保存在 `website/assets/icons/`，目录数据使用本站相对路径。优先采用官方原始 SVG 或 128–256 像素 PNG，不重绘第三方标志；避免用开发者照片代替软件图标。保留原图字节，在 `SOURCES.md` 与 `sources.json` 同步记录来源、权利说明和 SHA-256；保留的旧素材若缺少原图地址，要如实标记。

新增或替换图标时运行 `node scripts/check-icons.mjs`，再检查浏览器实际解码成功（`naturalWidth > 0`、没有 `data-icon-fallback`）。HTTP 200 不代表图片有效或允许跨站显示，应留意 `Cross-Origin-Resource-Policy`。加载失败时使用本站通用图标兜底；兜底不替代修复真实素材。

Pages 工作流在上传站点前自动执行图标与脚本检查，阻止外链图标、缺失文件或来源校验值不一致的版本发布。

## 发布边界

仅修改网站与目录数据，不生成桌面应用 Release。通过 [官网部署](WEBSITE.md) 发布；更新完成后回读线上数据和版本缓存，不能只凭本地页面判断上线。
