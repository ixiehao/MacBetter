# MacBetter 桌面版

桌面版使用 SwiftUI 和系统字体，支持英语、简体中文和日语，默认跟随系统。通过「发现」浏览官网目录，按 Apple Silicon 或 Intel 筛选当前原生支持。打开软件详情可查看芯片支持的来源、项目截图和官方下载入口。分类条固定在工具栏下方，「新 Mac 必备工具」每行显示 4 项。通过「已安装」查看支持识别的软件及版本，从「更新」检查上游稳定版。

## 在本机构建

需要 Xcode 命令行工具、Node.js 22 或更高版本。打包 DMG 另需 Python 3.10 或更高版本。在仓库根目录运行：

```sh
python3 -m venv desktop/.build/dmg-tools
desktop/.build/dmg-tools/bin/python3 -m pip install -r desktop/Packaging/dmg-requirements.txt
for arch in arm64 x86_64; do
  ./desktop/build-app.sh release "$arch"
  ./desktop/package-trial.sh "$arch"
done
```

脚本分开构建 Apple Silicon 和 Intel 应用，各自嵌入同一份软件目录、图标和许可说明。最低系统版本为 macOS 14。应用位于 `desktop/dist/<架构>/MacBetter.app`，可用对应架构打开。每份 DMG 对应的 dSYM 保存在 `desktop/dist/Symbols/`，按 UUID 核对。

桌面版标识使用 [macbetter-mark.svg](../desktop/Brand/macbetter-mark.svg)。侧栏使用矢量原图，构建脚本从同一原图生成系统应用图标。官网和 favicon 使用官网原有的 io 标识。

打包脚本在 `desktop/dist/` 生成带版本和架构的 DMG、ZIP 和 SHA-256 文件，并挂载 DMG 核查 Finder 布局与签名。GitHub Release 分别附上两个 DMG 和各自的校验文件。官网从应用的 Info.plist 生成版本对应的下载链接，先确认两份公开附件均可下载，再部署官网。应用采用 ad-hoc 签名，未经 Apple 公证。打包和应用使用 Tabler Icons Outline，随包保留 MIT 许可。

## 目录与离线

官网的生成器同时生成 `website/data/desktop-v1.json`，由既有 Pages 流程部署。桌面端使用同一套条目 ID、分类、语言和新 Mac 精选。新版数据经过结构检查后，以原子写入保存在本机 Application Support。打开应用时先显示最近一次可用数据，首次运行使用内置目录。图标随试用包分发，项目截图在打开详情时按需在线加载。

在新的 JSON 上线之前，试用版从当前官网的 `apps.json` 和三语 Markdown 读取内容。只有条目和项目链接三语均匹配才更新缓存。Markdown 提供简介、分类、系统要求和权限说明。推荐语和功能标签从内置数据补充，官网版本化 JSON 生效后可统一刷新这些字段。

## 找到已安装的软件

仅匹配 `Updates.swift` 中列出的 Bundle ID，读取系统或个人 Applications 文件夹中的应用。使用 macOS 登记信息补充目录内的子文件夹，并排除工作区构建产物。看到多个已安装副本时，在已安装页逐项显示并暂停该应用的版本比较。Firefox、Any2WebP 等采用官方渠道提示，MacShot 首版识别 Offline 版。

## 检查更新

「MacBetter → 关于 MacBetter」显示应用实际版本、构建号、许可、官网、源码和反馈入口。「帮助 → 检查更新…」检查 MacBetter 客户端自身的 [官方稳定发行入口](https://github.com/ixiehao/MacBetter/releases/latest)。启动时执行一次静默检查，只有发现新版时提示，手动检查会明确报告当前状态。

进入更新页自动检查，可点击「立即检查」重新请求。使用官方稳定版入口，以 GitHub Releases API 作为备用读取方式。拒绝无法比较的版本和异仓库跳转。遇到限流时保留已有结果与退避时间，新的结果显示检查时间。正式版检查按数值版本比较，官网的系统要求及上游 Release 仍是安装前的参考。驱动、预览版和更新器由原项目处理。

检查请求只包含预设的公开项目地址。已安装列表、版本和路径在本机处理。应用无账号、分析统计、后台常驻服务或管理员组件。

## 开发校验

```sh
npm ci --ignore-scripts
npm run build:search
npm run check
swift test --package-path desktop
```

Swift 测试覆盖三语目录回退、发布不一致、离线缓存和版本比较。实机验收需检查三语界面、搜索和筛选、Finder 定位、官方更新检查及断网或请求失败。
