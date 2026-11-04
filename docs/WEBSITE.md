# MacBetter 官网维护

[文档索引](README.md) · [开发指南](DEVELOPMENT.md)

## 源码与地址

- 官网源码：[`website/`](../website/)。
- 线上地址：https://ixiehao.github.io/MacBetter/
- 部署流程：[`deploy-pages.yml`](../.github/workflows/deploy-pages.yml)。
- 软件库：[`website/data/apps.json`](../website/data/apps.json)。

## 语言

- 官网默认英语；初始 HTML、元数据、manifest 与无语言参数的标准 URL 均以英语为准。
- 语言优先级：URL 中的 `lang` → 已保存的语言选择 → 英语。不按浏览器语言自动切换；不支持的语言回退到英语。
- 中文直达链接为 `?lang=zh`，日语为 `?lang=ja`；旧版 `?lang=en` 链接继续可用。语言按钮顺序为 EN、中、日。
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
- 对每款软件检查英语、中文、日语，在 19 种桌面与手机尺寸下检测标题、标签、操作栏、卡片边界、控件重叠及单款软件的样式偏差。正常换行、简介行数限制与推荐语省略允许保留。
- 在 820px 桌面宽度和 320px 手机宽度下，逐一打开所有软件的权限及许可证弹窗，检查边界和文字溢出；另检查短屏幕中的内部滚动、Tab、Escape、焦点返回和窗口调整。
- 文案覆盖检查要求每款软件的英日简介、推荐语、功能标签、系统要求和权限说明齐全；测试数量跟随软件库增长，不固定为当前条目数。
- 测试通过 `/MacBetter/` 子路径访问本地站点，等待自托管字体加载，并屏蔽外部截图和下载请求；不依赖第三方网站在线状态。

本地运行方式见 [开发指南](DEVELOPMENT.md#验证)。可用 `MACBETTER_TEST_PORT` 更改默认测试端口 4173。测试服务器由 Playwright 启动和关闭，不复用正在运行的其他服务。

在 GitHub 的 **Actions → Deploy GitHub Pages → 对应运行 → Artifacts** 下载 `layout-report-*`。报告保留 7 天，包含测试结果和每个失败用例的截图、trace；卡片问题还会附上软件 ID、语言、视口及越界原因。下载后运行 `npx playwright show-report <解压后的 playwright-report 目录>` 查看。报告不放进官网，公用 README 和本地维护记录仍只保存在本地。

## 部署

工作流上传 `website/` 为站点根目录，不上传根 README 或维护文档。

Pages 发布来源现为 **GitHub Actions**，不再从 `main` 分支根目录直接发布。重建仓库或恢复设置时，在 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**；仅新增工作流文件不会自动改动该设置。

工作流监听 `website/**`、`scripts/**`、`tests/**`、Playwright 配置、测试依赖与自身配置，可手动触发。上线后核对图标、JSON、语言切换、canonical、分享图、robots、sitemap 和浏览器缓存；未确认线上新版本前不宣称完成发布。
