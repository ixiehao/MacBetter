# MacBetter 官网维护

[文档索引](README.md) · [开发指南](DEVELOPMENT.md)

## 源码与地址

- 官网源码：[`website/`](../website/)。
- 线上地址：https://ixiehao.github.io/MacBetter/
- 部署流程：[`deploy-pages.yml`](../.github/workflows/deploy-pages.yml)。
- 软件库：[`website/data/apps.json`](../website/data/apps.json)。

## 语言

- 官网默认英语；`index.html`、`zh.html`、`ja.html` 均包含完整的本地化目录和元数据，不执行 JavaScript 也可阅读和下载。
- 语言优先级：旧链接中的显式 `lang` → `zh.html` / `ja.html` 路径 → 已保存的语言选择 → 英语。不按浏览器语言自动切换；不支持的语言回退到英语。
- 中文标准链接为 `zh.html`，日语为 `ja.html`；旧版 `?lang=en/zh/ja` 继续可用，交互初始化后保留搜索、分类和锚点并规范为语言页面。语言链接顺序为 EN、中、日，关闭 JavaScript 后也可切换。
- 回复社区投稿人（Issue / PR）时优先使用英语；需要时补充中文或日语说明。

## 网页图标

- 网页界面图标统一使用 [`assets/tabler-icons.svg`](../website/assets/tabler-icons.svg) 中的 Tabler Icons Outline v3.49.0；新增界面图标时从同一版本选取，使用 `<svg class="ui-icon" aria-hidden="true"><use href="assets/tabler-icons.svg#icon-name"></use></svg>`。
- 图标用途：分类、搜索、分享、项目外链、信息提示、完成状态与推荐入口。不要添加手绘小图标、Emoji、Unicode 图案或其他图标库。
- 网站品牌使用 `website/assets/site-mark.svg`，浏览器图标使用 `favicon.svg`；配色、来源和分享图导出要求见 [`BRAND.md`](../website/assets/BRAND.md)。修改品牌后同步 `social-card.svg` 与网页引用的 `social-card.png`。
- ShotMap 图标采用其[官方品牌源文件](https://github.com/ixiehao/ShotMap/blob/main/Assets/Brand/app-icon.svg)，保存为 `website/assets/icons/shotmap.svg`；更新时直接同步定稿资产，不自行重绘。
- 软件卡片的第三方产品 Logo 和 MacBetter 自身品牌图形不是界面图标，分别保留其真实产品/品牌资源；软件 Logo 仅用于识别及链接到官方项目。
- Tabler Icons 来源、版权与完整 MIT 许可见 [`website/assets/TABLER-ICONS-LICENSE.md`](../website/assets/TABLER-ICONS-LICENSE.md)。

源码目录不进入公开 URL；迁移后不要把外链改成 `/MacBetter/website/`。软件库和图标以网站根目录为相对基准，保持其相对结构。

## 预览与验证

在仓库根目录运行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory website
```

访问 <http://127.0.0.1:8000/>，按[开发指南](DEVELOPMENT.md#验证)检查数据与 JavaScript。核查中文、英文、日语，桌面四列/窄屏换行，搜索、分类、推荐入口和下载；确认新文案的字形包含在自托管字体子集中。

所有软件卡片共用 `cardTemplate` 和同一套样式，不为单款软件增加专用布局。检查三语的简介、推荐语、功能标签、系统要求和权限说明是否完整；同时检查 320–430px 手机宽度及 700/820/1160px 列数切换处。正常换行和推荐语省略不算越界，文字、标签和操作控件不能伸出卡片。

权限与许可证弹窗共用视口边界处理：根据空间选择上方或下方，并修正左右位置；长说明在弹窗内滚动。页面滚动或窗口调整后重新定位，触发控件离开可见区域时关闭。弹窗可用 Tab 进入，按 Escape 关闭后焦点回到触发控件。检查左、中、右列，以及手机横竖屏、键盘和内部滚动。

截图通过原项目的公开 HTTPS 图片地址加载；页面初始加载不会预取所有截图。桌面检查预览能否避开当前卡片、在视口内显示；手机检查预览按钮、底部弹层和原比例图片。确认图片失效时仍能打开来源页，键盘可关闭并恢复焦点。更新 `previews.js` 时也需刷新其 HTML 缓存版本。

搜索框与目录标题同排、靠右对齐，窄屏自适应换行；清除按钮独立于浏览器原生搜索控件。核查三语下输入、清空与 Escape：清空后 URL 应删除 `q`，并保留语言、分类与 io 实测筛选。

启用分类或实测筛选、或没有搜索结果时，结果行提供统一的“清除筛选条件”入口，恢复全部目录并清理相关 URL 参数。中文、日文输入法组词期间暂停筛选，避免 Escape 取消候选词时误清空搜索。悬停预览经 Escape 关闭后，同一卡片要移开再进入才重新触发。

## 自动检查与发布门槛

`deploy-pages.yml` 在相关文件提交到 `main`、提交 PR 或手动运行时自动检查，只有主分支检查全部通过后才部署；PR 只检查，不发布。验证失败时保留当前线上版本。

- Playwright 使用固定版本的 Chromium、WebKit；手机用例启用触屏与移动视口模拟，检查页面实际宽度。依赖由 `package-lock.json` 锁定，CI 使用 Node.js 24 与 Ubuntu 24.04。
- CI 按浏览器与语言拆成六个并行任务，全部通过才发布。弹窗用例的执行时限随条目数量增长；每个弹窗的越界判定及单次操作超时不放宽。
- 对每款软件检查英语、中文、日语，在 19 种桌面与手机尺寸下检测标题、标签、操作栏、卡片边界、控件重叠及单款软件的样式偏差。正常换行、简介行数限制与推荐语省略允许保留。
- 在 820px 桌面宽度和 320px 手机宽度下，逐一打开所有软件的权限及许可证弹窗，检查边界和文字溢出；另检查短屏幕中的内部滚动、Tab、Escape、焦点返回和窗口调整。
- 文案覆盖检查要求每款软件的英日简介、推荐语、功能标签、系统要求和权限说明齐全；测试数量跟随软件库增长，不固定为当前条目数。
- 测试通过 `/MacBetter/` 子路径访问本地站点，等待自托管字体加载，并屏蔽外部截图和下载请求；不依赖第三方网站在线状态。
- `npm run check` 拒绝过期的三语 HTML、Markdown、schema 和 sitemap，避免更新条目后只更新交互页面。新增浏览器用例覆盖无 JavaScript 手机阅读、真实语言链接及旧查询链接的兼容性。

本地运行方式见 [开发指南](DEVELOPMENT.md#验证)。可用 `MACBETTER_TEST_PORT` 更改默认测试端口 4173。测试服务器由 Playwright 启动和关闭，不复用正在运行的其他服务。

定位某个矩阵任务时，可运行 `MACBETTER_TEST_LANGUAGE=ja npm run test:layout -- --project=webkit`，只执行该语言与引擎；不设置语言变量时运行全部三语。

在 GitHub 的 **Actions → Deploy GitHub Pages → 对应运行 → Artifacts** 下载 `layout-report-*`。每个浏览器和语言任务各有一份报告，保留 7 天。HTML 报告包含失败截图、trace 和定位附件，另存 JSON 结果摘要；卡片问题会标出软件 ID、语言、视口及越界原因。下载后运行 `npx playwright show-report <解压后的 playwright-report 目录>` 查看。报告不放进官网，公用 README 和本地维护记录仍只保存在本地。

## SEO 与 AI 抓取维护

运行 `npm run build:search`，脚本复用 `app.js` 的同一套卡片、分类、实测标记和许可证渲染器，生成三语 HTML、`index.md` / `zh.md` / `ja.md`、`llms.txt` 和 `sitemap.xml`。页面模板在 `scripts/templates/index.html`，不要手改生成文件。`npm run check` 在 CI 检查生成结果；它不会替你覆盖旧文件。

- 三个语言页面分别有正确的 title、description、canonical、Open Graph 和双向 hreflang。筛选和搜索参数不进入 canonical 或 sitemap，不为每个查询生成重复页面。
- `WebSite`、`CollectionPage`、`ItemList` 和 `SoftwareApplication` 描述页面实际内容；不虚构评分、评论、版本号、免费付费范围或发布日期。交互筛选后 schema 随当前可见列表更新。
- 页面与 Markdown 向访客和所有抓取工具输出相同事实。`llms.txt` 是可选的机器阅读入口，不能保证模型使用、收录或引用；Google 的 AI 搜索仍依赖可抓取、可索引、有帮助的正文，详见[官方说明](https://developers.google.com/search/docs/appearance/ai-features)。
- **robots 的生效位置是域名根目录** <https://ixiehao.github.io/robots.txt>，由个人主页仓库维护。本站的 `/MacBetter/robots.txt` 不是独立规则入口。根文件允许抓取并列出本站 sitemap；不以修改子目录 robots 冒充 AI 开放配置。AI 搜索与训练机器人用途不同，本次保持已有开放规则。
- Pages 发布成功后，独立的 **Notify search engines** 任务通过 [IndexNow](https://www.indexnow.org/documentation) 提交三个标准页面。`website/indexnow-key.txt` 是公开的站点归属验证文件，范围仅覆盖 `/MacBetter/`，不是统计或账户登录凭据。没有增加访客追踪。
- 通知步骤先回读线上 key；传播延迟、网络或服务失败会显示 warning，已发布的官网不回滚。可以稍后运行 `npm run notify:search` 重试。HTTP 200 表示已接收；202 表示已接收、归属验证待完成。两者都不代表已收录。Google 不使用 IndexNow；本次没有登录 Search Console / Bing Webmaster 或声称完成手动提交。

回读时检查原始 HTML（不要只看执行 JavaScript 后的 DOM），确认三语各有完整卡片与正确 canonical，再检查 sitemap、Markdown、llms.txt 和 key 的 HTTP 响应。不得把 `llms.txt`、schema 或更新通知宣传成收录保证。

## 部署

工作流上传 `website/` 为站点根目录，不上传根 README 或维护文档。

Pages 发布来源现为 **GitHub Actions**，不再从 `main` 分支根目录直接发布。重建仓库或恢复设置时，在 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**；仅新增工作流文件不会自动改动该设置。

工作流监听 `website/**`、`scripts/**`、`tests/**`、Playwright 配置、测试依赖与自身配置，可手动触发。上线后核对图标、JSON、语言切换、canonical、分享图、robots、sitemap 和浏览器缓存；未确认线上新版本前不宣称完成发布。
