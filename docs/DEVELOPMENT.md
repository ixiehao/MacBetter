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

### 日常管理：刷新与收录

这是由 GitHub Pages 发布的静态网站，没有独立管理后台，也不会自动抓取、上架软件。刷新网页只会获取本站已发布的内容，不会重新检查上游项目。

- **获取软件新版**：卡片的“下载”链接通往官方 Releases、下载页或安装说明；使用者从官方入口选择当前版本。本站不托管安装包。
- **更新已有条目**：检查官方 README、许可证、近期 Release、系统与芯片要求，再更新 `website/data/apps.json` 的中文条目，以及 `website/app.js` 中的英语、日语文案。图标变更还须同步 `assets/icons/sources.json` 与 `SOURCES.md`。不要仅凭 Star 或 Release 日期覆盖介绍。
- **收录新软件**：访客可点“推荐一款软件”提交 Issue，也可提交 PR。维护者按下列清单复核后添加，`status.level` 默认用 `verified`；只有维护者确认实际使用过，才改为 `tested`。
- **发布**：运行 `node scripts/update-cache-keys.mjs` 更新资源的内容哈希，再完成本页检查，提交并推送至 `main`。等待 Pages 工作流成功，再回读线上页面和资源；强制刷新浏览器不能替代发布。

公用 README 和本地维护记录不属于发布内容，不要上传。项目公开维护说明保存在本仓库 `docs/`。

### 条目检查清单

1. 按 [CONTRIBUTING.md](../CONTRIBUTING.md) 核对官方仓库、许可证、macOS 支持和官方发行入口。
2. 使用唯一且稳定的 `id`，填写名称、简介、简短推荐语、分类、功能标签、链接和图标；字段结构以现有 JSON 与消费代码为准。
3. `io 实测` 只用于维护者确实使用过的软件；不要以来源检查代替实测。
4. 将功能相近的软件排在一起，检查 `sortOrder`、分类筛选与多语言映射。
5. 新许可证必须同步“开源说明”；权限信息按当前 UI 设计呈现，不重新塞回功能标签行。

### 用途分类

- `category` 是卡片显示的主要用途，`categories` 列出所有适用分类，必须包含主分类。分类名称统一从 `app.js` 的三语文案读取，不在软件数据中重复保存名称。
- 分类定义、三语名称、Tabler 图标及同类软件排序均在 `website/app.js` 中维护。新增分类要同步 `categories`、`categoryIcons`、`categoryOrder`、三语 `copy.*.category`、`workflowOrder` 和初始 HTML 的分类数量。
- 下载工具、网络浏览、笔记与知识、影音播放、音频与音乐、截图与录屏、效率与自动化独立分类。开发工具与隐私安全按实际用途归类，不把浏览器或一般效率工具都放进开发分类。
- `archives` 用于压缩包浏览、压缩与解压工具；与文件传输、备份用途分开显示，在 `files` 中也可按文件工具归类。明确区分 RAR 解压与 RAR 创建，不将另购编码器写成免费功能。
- 多用途归类应有明确功能依据，例如 MacShot 属于截图与录屏，也支持图片标注；Cyberduck 属于下载工具，也提供文件传输。不要因为具备隐私设置就把所有浏览器放进安全分类。
- 全部目录按主用途排列；进入分类后按该分类的 `workflowOrder` 排列，包括从其他主分类进入的多用途软件。软件总数按唯一 ID 统计，分类数量允许重叠。

### 软件截图预览

- 有合适截图时，可添加 `preview: { image, source }`：`image` 是项目官网或官方仓库提供的 HTTPS 图片原址，`source` 是展示该截图的官方页面。不要填 logo、用户头像、手机端界面或无法代表软件的宣传素材。
- 若项目提供三语截图，可补充 `preview.images`，使用 `en`、`zh`、`ja` 键；缺少某语种时回退到 `image`。不把截图文件复制进本仓库，来源及图片权利保留给原项目。
- 卡片由 `app.js` 输出预览入口，交互在 `previews.js`，样式在 `styles.css`。鼠标连续停留 600ms 后才加载侧边截图，快速划过会取消显示；离开卡片仍立即隐藏。触屏与键盘通过按钮打开原比例大图。
- 悬停时，黑色半透明遮罩位于页面与当前卡片之间，不拦截鼠标；当前卡片和截图保持清晰。鼠标离开卡片时立即关闭侧边预览、遮罩与高亮，无关闭延迟。侧边预览不接收鼠标事件、不保留悬停；查看大图使用卡片中的“预览”按钮。Escape、滚动、切换结果或窗口失焦时也关闭侧边预览。
- 侧边预览和遮罩只由当前卡片的真实 `:hover` 状态控制，并有 CSS 条件兜底；两者均不接收指针事件，也不参与悬停保持。显示定时器执行前重新检查鼠标是否仍在卡片上；移到预览区域、离开浏览器或切换标签页均关闭两者，不添加退出动画或关闭延迟。
- 浮层按截图比例和可见区域计算宽高，标题与底栏使用实际高度；图片网格必须允许收缩，防止竖图的固有尺寸撑开网格后被裁切。
- 更新后检查左右定位、窄屏弹层、Escape、焦点恢复、异步加载切换及图片失效；未核实的截图不启用入口。图片和来源 URL 必须为 HTTPS，不需要绕过防盗链或登录限制。

### 新 Mac 必备工具

- `app.js` 的 `essentialAppIds` 定义精选顺序；名称、图标和实测状态复用软件库，不另复制一份软件数据。用途短文案维护在三语 `essentialsTask`，所有项目均实测时才显示栏目实测标记。
- 点击图标会清除目录查询与筛选，定位并聚焦 `#app-软件ID` 卡片；普通链接、新标签页和键盘导航均可使用。新机栏目不改变软件总数与原有分类。
- 搜索索引在加载时统一规范化；输入合并 100ms，输入法组词不触发筛选。结果 ID 和语言未变化时复用现有卡片，避免重复解码图标和重建整个列表。
- 目录 JSON 使用内容哈希 URL 和浏览器默认缓存；截图按需加载，关闭预览后清除活动图片引用。动效限于短暂的 CSS `opacity` / `transform`，支持减少动态效果，不添加持续动画或动画库。

## 验证

从仓库根目录运行：

```sh
node --check website/app.js
node --check website/previews.js
node --check scripts/update-cache-keys.mjs
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
