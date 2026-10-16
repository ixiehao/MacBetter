const categories = ["all", "office", "video", "image", "launcher", "menu", "maintenance"];

const copy = {
  zh: {
    pageTitle: "让 Mac 更好用 · 开源 Mac 软件库",
    pageDescription: "一个由 Mac 用户共同维护的开源 macOS 软件目录。",
    htmlLang: "zh-CN",
    skipLink: "跳到软件目录",
    wordmark: "Mac 软件库",
    wordmarkAria: "Mac 软件库，返回顶部",
    navLabel: "主导航",
    navContribute: "推荐软件",
    navCategories: "分类浏览",
    navCatalog: "软件目录",
    navFeatured: "iXiehao 出品",
    navStandards: "收录说明",
    navGithub: "在 GitHub 共建 ↗",
    languageLabel: "选择语言",
    railLabel: "按用途浏览",
    railAllPrefix: "查看全部",
    railAllSuffix: "款",
    category: { all: "全部", office: "办公与创作", video: "视频与音频", image: "图片与图像", launcher: "窗口与启动", menu: "菜单栏与硬件", maintenance: "Mac 优化与维护" },
    communityEyebrow: "共同推荐",
    communityHeading: "让 Mac 更好用",
    communityCopy: "从推荐一款你真正用过的开源软件开始。",
    recommendApp: "推荐一款软件",
    viewCriteria: "了解收录方式",
    communityInstructions: "在 GitHub Issue 中提交项目链接、开源许可证和适用场景。收录前会核对公开信息。",
    contributionStepsLabel: "推荐软件需要的信息",
    contribution: { sourceTitle: "项目地址", sourceDetail: "作者仓库或官网", licenseTitle: "开源许可证", licenseDetail: "例如 MIT、GPL-3.0", reasonTitle: "推荐理由", reasonDetail: "它具体解决什么问题" },
    featuredEyebrow: "iXiehao 出品",
    featuredHeading: "原生 Mac 工具",
    featuredCopy: "本地优先，减少打扰。",
    catalogEyebrow: "开源 Mac 软件",
    catalogHeading: "软件目录",
    catalogCopy: "按用途查找；每项都标明许可证、核验状态和必要权限。",
    searchPlaceholder: "搜索名称、用途或标签",
    testedFilter: "仅显示 io 实测",
    appCategoriesLabel: "软件分类",
    foundCount: "找到 {count} 款软件",
    dataError: "软件目录暂时无法载入。请前往 GitHub 查看。",
    emptyState: "没有找到匹配的软件。",
    clearFilters: "清除筛选条件",
    metadataLabel: "项目属性",
    iconAlt: "{name} 图标",
    projectSite: "项目主页",
    download: "下载",
    status: {
      made: { label: "iXiehao 出品", note: "源码与发布由 iXiehao 维护。" },
      tested: { label: "io 实测", note: "已在 iXiehao 的实际使用环境中运行；不等同于安全审计，也不保证适配所有 macOS 版本。" },
      verified: { label: "来源已核验", note: "已检查公开仓库、许可证与官方发布入口；并非独立安全审计。" }
    },
    requires: "需：{permission}",
    permission: { accessibility: "辅助功能", files: "文件访问", fullDiskOptional: "完整磁盘访问（可选）", screenRecording: "屏幕录制", inputMonitoring: "输入监控" },
    license: {
      MIT: "MIT：可使用、修改和再发布；需保留许可证与版权声明。",
      "GPL-2.0": "GPL-2.0：可使用和修改；公开发布修改版时，须以 GPL-2.0 提供对应源码。",
      "GPL-3.0": "GPL-3.0：可使用和修改；公开发布修改版时，须以 GPL-3.0 提供对应源码。",
      "AGPL-3.0": "AGPL-3.0：在 GPL-3.0 基础上，向用户提供网络服务的修改版也须提供对应源码。",
      "MPL-2.0": "MPL-2.0：可使用和修改；发布修改过的 MPL 文件时，须公开这些文件的源码。",
      Unlicense: "Unlicense：作者尽可能放弃版权；仍需遵守第三方组件许可与适用法律。"
    },
    standardsEyebrow: "收录原则",
    standardsHeading: "为什么会出现在这里",
    standard: {
      oneTitle: "来源可查", oneCopy: "源码、许可证和官方入口都可回查。",
      twoTitle: "边界明确", twoCopy: "明显的权限、兼容性与数据风险会直接写明。",
      threeTitle: "状态分开", threeCopy: "自研、io 实测和来源核验分别标注，不能互相替代。"
    },
    footerMaintained: "由 iXiehao 维护，欢迎通过 GitHub 一起完善。",
    footerRights: "第三方商标、名称和图标归各自权利人所有。",
    footerSource: "查看源代码 ↗"
  },
  en: {
    pageTitle: "Make Your Mac Better · Open-Source macOS Apps",
    pageDescription: "A maintained directory of open-source macOS apps, built with Mac users.",
    htmlLang: "en",
    skipLink: "Skip to app directory",
    wordmark: "Mac App Directory",
    wordmarkAria: "Mac app directory — back to top",
    navLabel: "Page navigation",
    navContribute: "Recommend an app",
    navCategories: "Categories",
    navCatalog: "All apps",
    navFeatured: "Built by iXiehao",
    navStandards: "Selection criteria",
    navGithub: "Build it on GitHub ↗",
    languageLabel: "Choose language",
    railLabel: "Browse by task",
    railAllPrefix: "All",
    railAllSuffix: "apps",
    category: { all: "All", office: "Work & Create", video: "Video & Audio", image: "Images & Graphics", launcher: "Windows & Launchers", menu: "Menu Bar & Hardware", maintenance: "Mac Care & Maintenance" },
    communityEyebrow: "Community picks",
    communityHeading: "Make your Mac better",
    communityCopy: "Start by recommending an open-source app you actually use.",
    recommendApp: "Recommend an app",
    viewCriteria: "View submission criteria",
    communityInstructions: "Submit through a GitHub Issue with the project link, open-source license, and a real use case. Public information is checked before listing.",
    contributionStepsLabel: "What to include with an app recommendation",
    contribution: { sourceTitle: "Project source", sourceDetail: "Author’s repository or official site", licenseTitle: "Open-source license", licenseDetail: "e.g. MIT or GPL-3.0", reasonTitle: "Why you recommend it", reasonDetail: "What problem it solves" },
    featuredEyebrow: "Built by iXiehao",
    featuredHeading: "Native Mac apps",
    featuredCopy: "Local-first, with less friction.",
    catalogEyebrow: "Open-source Mac apps",
    catalogHeading: "App directory",
    catalogCopy: "Browse by task. Every entry includes its license, source status, and any essential system-access requirements.",
    searchPlaceholder: "Search apps, features, or tags",
    testedFilter: "Only show apps tested by io",
    appCategoriesLabel: "App categories",
    foundCount: "{count} apps found",
    dataError: "The app directory could not be loaded. View it on GitHub instead.",
    emptyState: "No matching apps found.",
    clearFilters: "Clear filters",
    metadataLabel: "App metadata",
    iconAlt: "{name} icon",
    projectSite: "Project site",
    download: "Download",
    status: {
      made: { label: "Built by iXiehao", note: "The source and release channels are maintained by iXiehao." },
      tested: { label: "Tested by io", note: "Used in iXiehao’s day-to-day environment. This is not a security audit and does not guarantee compatibility with every macOS version." },
      verified: { label: "Source checked", note: "The public repository, license, and official release channel have been checked. This is not an independent security audit." }
    },
    requires: "Requires: {permission}",
    permission: { accessibility: "Accessibility", files: "File access", fullDiskOptional: "Full Disk Access (optional)", screenRecording: "Screen Recording", inputMonitoring: "Input Monitoring" },
    license: {
      MIT: "MIT: You may use, modify, and redistribute it; retain the license and copyright notice.",
      "GPL-2.0": "GPL-2.0: You may use and modify it. If you distribute a modified version, you must release the corresponding source under GPL-2.0.",
      "GPL-3.0": "GPL-3.0: You may use and modify it. If you distribute a modified version, you must release the corresponding source under GPL-3.0.",
      "AGPL-3.0": "AGPL-3.0: In addition to GPL-3.0 obligations, modified versions used to provide a network service must offer corresponding source to users.",
      "MPL-2.0": "MPL-2.0: You may use and modify it; changes to existing MPL-covered files must be made available under the MPL.",
      Unlicense: "Unlicense: The author waives copyright as far as possible; third-party licenses and applicable law still apply."
    },
    standardsEyebrow: "Selection principles",
    standardsHeading: "Why it is listed",
    standard: {
      oneTitle: "Traceable sources", oneCopy: "The source code, license, and official entry point can all be checked.",
      twoTitle: "Clear caveats", twoCopy: "Notable permissions, compatibility notes, and data risks are stated plainly.",
      threeTitle: "Statuses stay distinct", threeCopy: "In-house apps, hands-on testing, and source checks are labeled separately."
    },
    footerMaintained: "Maintained by iXiehao. Help improve it on GitHub.",
    footerRights: "All third-party names, trademarks, and icons belong to their respective owners.",
    footerSource: "View source code ↗"
  },
  ja: {
    pageTitle: "Macを、もっと使いやすく。｜オープンソースアプリ集",
    pageDescription: "継続的に更新する、Macユーザーと作るオープンソースのmacOSアプリ集。",
    htmlLang: "ja",
    skipLink: "アプリ一覧へ移動",
    wordmark: "Macアプリ集",
    wordmarkAria: "Macアプリ集、ページ上部へ戻る",
    navLabel: "ページ内ナビゲーション",
    navContribute: "アプリを紹介",
    navCategories: "カテゴリー",
    navCatalog: "すべてのアプリ",
    navFeatured: "iXiehaoのアプリ",
    navStandards: "掲載基準",
    navGithub: "GitHubで参加する ↗",
    languageLabel: "言語を選択",
    railLabel: "用途から探す",
    railAllPrefix: "すべて",
    railAllSuffix: "件",
    category: { all: "すべて", office: "仕事・クリエイティブ", video: "動画・オーディオ", image: "写真・画像", launcher: "ウインドウ・起動", menu: "メニューバー・周辺機器", maintenance: "Macの最適化・メンテナンス" },
    communityEyebrow: "コミュニティのおすすめ",
    communityHeading: "Macを、もっと使いやすく。",
    communityCopy: "実際に使っているオープンソースのアプリを、一つ紹介するところから。",
    recommendApp: "おすすめのアプリを紹介する",
    viewCriteria: "掲載条件を見る",
    communityInstructions: "GitHub Issueから、プロジェクトのリンク、オープンソースライセンス、利用シーンをお寄せください。掲載前に公開情報を確認します。",
    contributionStepsLabel: "アプリ紹介に必要な情報",
    contribution: { sourceTitle: "プロジェクトの出所", sourceDetail: "作者のリポジトリまたは公式サイト", licenseTitle: "オープンソースライセンス", licenseDetail: "例：MIT / GPL-3.0", reasonTitle: "おすすめの理由", reasonDetail: "どんな課題を解決するか" },
    featuredEyebrow: "iXiehao製",
    featuredHeading: "ネイティブMacアプリ",
    featuredCopy: "ローカル優先。余計なことは、少なく。",
    catalogEyebrow: "オープンソースのMacアプリ",
    catalogHeading: "アプリ一覧",
    catalogCopy: "用途で絞り込めます。各アプリにライセンス、確認状況、必要なアクセス許可を記載しています。",
    searchPlaceholder: "名前・機能・タグで検索",
    testedFilter: "io 使用中のみ",
    appCategoriesLabel: "アプリのカテゴリー",
    foundCount: "{count} 件のアプリ",
    dataError: "アプリ情報を読み込めません。GitHubでご確認ください。",
    emptyState: "条件に合うアプリは見つかりませんでした。",
    clearFilters: "絞り込みをクリア",
    metadataLabel: "アプリの属性",
    iconAlt: "{name}のアイコン",
    projectSite: "プロジェクトページ",
    download: "ダウンロード",
    status: {
      made: { label: "iXiehao製", note: "ソースコードと配布先は iXiehao が管理しています。" },
      tested: { label: "io 使用中", note: "iXiehaoの日常用Macで使用を確認済みです。セキュリティ監査ではなく、すべてのmacOSバージョンでの互換性を保証するものではありません。" },
      verified: { label: "公式情報を確認済み", note: "公開リポジトリ、ライセンス、公式配布先を確認済みです。第三者によるセキュリティ監査ではありません。" }
    },
    requires: "要：{permission}",
    permission: { accessibility: "アクセシビリティ", files: "ファイルアクセス", fullDiskOptional: "フルディスクアクセス（任意）", screenRecording: "画面収録", inputMonitoring: "入力監視" },
    license: {
      MIT: "MIT：利用・改変・再配布が可能です。元のライセンス表示と著作権表示を残してください。",
      "GPL-2.0": "GPL-2.0：利用・改変が可能です。改変版を配布する場合、GPL-2.0で対応するソースコードを提供する必要があります。",
      "GPL-3.0": "GPL-3.0：利用・改変が可能です。改変版を配布する場合、GPL-3.0で対応するソースコードを提供する必要があります。",
      "AGPL-3.0": "AGPL-3.0：GPL-3.0に加え、ネットワークサービスとして提供する改変版も利用者に対応するソースコードを提供する必要があります。",
      "MPL-2.0": "MPL-2.0：利用・改変が可能です。MPL対象の既存ファイルを改変して配布する場合、そのファイルのソースコードを公開する必要があります。",
      Unlicense: "Unlicense：作者は可能な限り著作権を放棄しています。第三者のライセンスと適用法令には従ってください。"
    },
    standardsEyebrow: "掲載の考え方",
    standardsHeading: "ここに掲載する理由",
    standard: {
      oneTitle: "出所を確認できる", oneCopy: "ソースコード、ライセンス、公式ページを確認できます。",
      twoTitle: "注意点を明記する", twoCopy: "必要なアクセス許可、互換性、データに関するリスクを明記します。",
      threeTitle: "確認状況を混同しない", threeCopy: "自作アプリ、実機での使用、公式情報の確認は区別して表示します。"
    },
    footerMaintained: "iXiehaoが継続して管理しています。GitHubで一緒に改善できます。",
    footerRights: "第三者の商標、名称、アイコンは各権利者に帰属します。",
    footerSource: "ソースコードを見る ↗"
  }
};

const appCopy = {
  en: {
    shotmap: { summary: "Turn key frames from local videos into controllable storyboards and contact sheets. Export PNG or JPG.", recommendation: "When you need to revisit a long video quickly, turn finding a moment into looking at one image.", tags: ["Swift-native", "Offline processing", "Video", "Images"] },
    lumaview: { summary: "A fast, minimal local image viewer for opening, browsing, and inspecting details.", recommendation: "Viewing an image should feel lighter than opening a web page.", tags: ["Swift-native", "Local images", "Lightweight"] },
    mp4flow: { summary: "Convert, trim, rotate, and merge MP4 files locally with lightweight editing tools.", recommendation: "When all you need to deliver is an MP4, you shouldn’t have to open a full-scale editor.", tags: ["Swift-native", "Local processing", "MP4"] },
    "launchpad-back": { summary: "Restores the familiar Launchpad experience: grid, pages, folders, drag and drop, and search.", recommendation: "It turns finding an app back into muscle memory.", tags: ["App launcher", "Grid layout"] },
    loop: { summary: "Arrange windows quickly with drag and drop, shortcuts, and a floating menu—ideal for split views and multitasking.", recommendation: "More intuitive than memorizing another set of shortcuts.", tags: ["Window management", "Keyboard shortcuts", "Open source"], permissions: "Requires Accessibility permission to move and resize other apps’ windows." },
    "alt-tab": { summary: "Switch between windows—not just apps—with thumbnails, minimized windows, and multi-display support.", recommendation: "When you have a dozen windows open rather than a dozen apps, it matches the way you actually switch.", tags: ["Window switching", "Multiple displays", "Keyboard"], permissions: "Requires Accessibility permission to read and switch windows." },
    ice: { summary: "Group, hide, or always show menu bar icons so utility apps stop crowding the top of your screen.", recommendation: "Your menu bar should support your work, not become a warehouse.", tags: ["Menu bar", "Organization", "Lightweight"] },
    stats: { summary: "Monitor CPU, memory, storage, network, battery, sensors, and more from the menu bar.", recommendation: "Seeing what the system is doing is often more useful than installing another “optimizer.”", tags: ["System monitoring", "Menu bar", "Performance"] },
    monitorcontrol: { summary: "Control an external display’s brightness and volume via DDC/CI, including with your keyboard media keys.", recommendation: "No more reaching for a physical button just to adjust an external display’s brightness.", tags: ["External display", "Brightness", "DDC/CI"], permissions: "Using the native brightness keys with external displays requires Accessibility permission." },
    puremac: { summary: "See storage use and cleanable items more transparently, so you understand before you act.", recommendation: "First show what will change; then let you decide.", tags: ["Storage analysis", "Cleanup", "Preview before cleaning"], permissions: "Cleanup tools may request broader file access. Review every path they will touch before proceeding." },
    purge: { summary: "Scan caches, development leftovers, and large files, then keep cleanup actions in a reviewable interface.", recommendation: "My first choice for cache cleanup.", tags: ["Cache cleanup", "Large files", "Development files"], permissions: "Full Disk Access is optional; grant it only when you need to scan additional locations." },
    libreoffice: { summary: "A free, open-source suite for documents, spreadsheets, and presentations—useful for viewing, light editing, and converting Office files.", recommendation: "It is not a one-to-one replacement for Microsoft Office, but it is a dependable, offline-controlled fallback.", tags: ["Documents", "Spreadsheets", "Presentations"] },
    zettlr: { summary: "A Markdown writing workspace for notes, citations, and long-form projects.", recommendation: "A better fit when a folder of Markdown files should stay yours—not become another web service.", tags: ["Markdown", "Writing", "Citations"] },
    joplin: { summary: "A Markdown notes app with notebooks, end-to-end encrypted sync options, and an optional Web Clipper.", recommendation: "Useful when notes need to stay portable while still syncing across the devices you choose.", tags: ["Notes", "Markdown", "Sync"] },
    iina: { summary: "A modern macOS media player built on mpv, with strong format support, playlists, and subtitle controls.", recommendation: "The player to reach for when a video file should simply open and play well on a Mac.", tags: ["Media player", "Subtitles", "Local playback"] },
    handbrake: { summary: "An open-source video transcoder for converting supported video sources into practical presets and formats.", recommendation: "When the job is compression or conversion, its presets remove much of the guesswork without hiding the controls.", tags: ["Transcoding", "Video conversion", "Presets"] },
    "yt-dlp": { summary: "A command-line downloader for audio and video from many supported sites.", recommendation: "Powerful for personal, permitted downloads—but you are responsible for copyright, platform terms, and the rights to the material.", tags: ["Command line", "Media download", "Automation"] },
    macshot: { summary: "A native macOS capture tool for screenshots, screen recording, annotation, OCR, scrolling capture, and GIF export.", recommendation: "For documentation and visual feedback, it keeps capture, markup, and basic editing in one focused flow.", tags: ["Screenshots", "Screen recording", "Scrolling capture"], permissions: "Requires Screen Recording. macOS may also ask for Microphone, Accessibility, or Input Monitoring when you use relevant features." },
    imageoptim: { summary: "A macOS image optimizer that reduces file size through a simple drag-and-drop workflow.", recommendation: "A dependable finishing step before publishing images—especially when file weight matters more than endlessly tweaking settings.", tags: ["Image optimization", "Compression", "Drag and drop"] },
    krita: { summary: "A free, open-source digital painting app for illustration, concept art, comics, and animation.", recommendation: "A serious creative canvas when you want capable brushes and layers without a subscription.", tags: ["Digital painting", "Illustration", "Animation"] },
    rectangle: { summary: "Snap, move, and resize macOS windows with keyboard shortcuts, edge gestures, and custom layouts.", recommendation: "A quick, low-friction way to give every window a predictable place.", tags: ["Window management", "Keyboard shortcuts", "Snap layouts"], permissions: "Requires Accessibility permission to move and resize other apps’ windows." },
    aerospace: { summary: "An i3-style tiling window manager for macOS, driven by keyboard shortcuts and a plain-text configuration file.", recommendation: "For keyboard-first workflows, it turns window layout into a system rather than a series of manual adjustments.", tags: ["Tiling window manager", "Keyboard-first", "Config file"], permissions: "Requires Accessibility permission to control windows. The project is not notarized; review its official installation instructions before opening it." },
    maccy: { summary: "A lightweight menu-bar clipboard manager that keeps a searchable history of what you copy.", recommendation: "Helpful when copy and paste is part of the work and you want history without a heavy workflow.", tags: ["Clipboard history", "Menu bar", "Lightweight"] },
    "karabiner-elements": { summary: "A powerful macOS keyboard customizer for remapping keys, building complex rules, and configuring devices.", recommendation: "The right tool when macOS keyboard settings stop short of the behavior you actually need.", tags: ["Keyboard remapping", "Complex rules", "Input devices"], permissions: "Requires Input Monitoring and a system extension, and may request Accessibility and background-service approval. Review these elevated system changes before installing." },
    dupeguru: { summary: "Finds duplicate files using filenames or file contents, with separate modes for pictures and music.", recommendation: "A safer way to reclaim space: inspect duplicate groups first, then decide what stays and what goes.", tags: ["Duplicate finder", "File cleanup", "Images & music"] }
  },
  ja: {
    shotmap: { summary: "ローカル動画からキーフレームを抽出し、調整可能なストーリーボードとコンタクトシートを生成。PNG / JPGで書き出せます。", recommendation: "長い動画をすばやく見返したいとき、「目的の場面を探す」を一枚の画像に。", tags: ["Swiftネイティブ", "オフライン処理", "動画", "画像"] },
    lumaview: { summary: "高速でミニマルなローカル画像ビューア。開く、めくる、細部を見ることに絞りました。", recommendation: "画像を見るだけなら、Webページを開くより軽くあるべき。", tags: ["Swiftネイティブ", "ローカル画像", "軽量"] },
    mp4flow: { summary: "MP4の変換、トリミング、回転、結合などを、ローカルで手軽に行えます。", recommendation: "MP4を一つ仕上げたいだけなら、大がかりな編集ソフトは要りません。", tags: ["Swiftネイティブ", "ローカル処理", "MP4"] },
    "launchpad-back": { summary: "従来のLaunchpadのグリッド、ページ、フォルダ、ドラッグ＆ドロップ、検索の操作感を再現します。", recommendation: "「アプリを探す」を、もう一度手になじむ操作へ。", tags: ["アプリ起動", "グリッド", "フォルダ"] },
    loop: { summary: "ドラッグ、ショートカット、フローティングメニューでウインドウを素早く整列。画面分割やマルチタスクに向いています。", recommendation: "ショートカットを覚えるより、ずっと直感的。", tags: ["ウインドウ管理", "ショートカット", "画面分割"], permissions: "ほかのアプリのウインドウを移動・リサイズするため、「アクセシビリティ」へのアクセスが必要です。" },
    "alt-tab": { summary: "アプリではなくウインドウ単位で切り替え。サムネイル、最小化したウインドウ、複数ディスプレイに対応します。", recommendation: "開いているのがアプリではなく十数個のウインドウなら、こちらの方が欲しい切り替えに近い。", tags: ["ウインドウ切替", "複数ディスプレイ", "キーボード"], permissions: "ウインドウの読み取りと切り替えに、「アクセシビリティ」へのアクセスが必要です。" },
    ice: { summary: "メニューバーのアイコンを区分けし、隠すか常時表示するかを選べます。上部がツールで埋まるのを防ぎます。", recommendation: "メニューバーは、仕事を支える場所。物置ではありません。", tags: ["メニューバー", "整理", "軽量"] },
    stats: { summary: "CPU、メモリ、ディスク、ネットワーク、バッテリー、センサーなどの状態をメニューバーから確認できます。", recommendation: "まずシステムの状態を知ることが、安易な「最適化」より効くことが多い。", tags: ["システム監視", "メニューバー", "パフォーマンス"] },
    monitorcontrol: { summary: "DDC/CI対応ディスプレイの明るさと音量を調整。キーボードのメディアキーとも連携します。", recommendation: "外部ディスプレイの明るさを変えるたびに、物理ボタンを探さなくていい。", tags: ["外部ディスプレイ", "明るさ", "DDC/CI"], permissions: "外部ディスプレイをキーボードの標準輝度キーで操作するには、「アクセシビリティ」へのアクセスが必要です。" },
    puremac: { summary: "ストレージの使用状況と削除候補を分かりやすく可視化。理解してから操作できます。", recommendation: "何が変わるのかを先に示し、決めるのはあなたに任せる。", tags: ["ストレージ分析", "クリーニング", "プレビュー"], permissions: "クリーニング機能は追加のファイルアクセスを求めることがあります。実行前に対象パスを一つずつ確認してください。" },
    purge: { summary: "キャッシュ、開発環境の残り、大きなファイルをスキャンし、削除操作を確認可能な画面にまとめます。", recommendation: "キャッシュを掃除するなら、まず選びたい一本。", tags: ["キャッシュ削除", "大容量ファイル", "開発環境"], permissions: "フルディスクアクセスは任意です。より多くのフォルダをスキャンする必要があるときだけ検討してください。" },
    libreoffice: { summary: "無料のオープンソース文書・表計算・プレゼンテーションスイート。Officeファイルの閲覧、軽い編集、変換の予備手段になります。", recommendation: "Microsoft Officeの完全な置き換えではない。それでも、オフラインで管理できる頼れる予備手段です。", tags: ["文書", "表計算", "プレゼンテーション"] },
    zettlr: { summary: "Markdown、引用管理、長文執筆を一つの作業環境にまとめる、研究・執筆向けのエディタです。", recommendation: "原稿、引用、メモを散らかさず、書くことに集中したいときに。", tags: ["Markdown", "引用管理", "長文執筆"] },
    joplin: { summary: "Markdown対応のノートアプリ。端末間同期やエンドツーエンド暗号化を、自分で選んだ保存先で利用できます。", recommendation: "メモの居場所と同期先を、自分で決めておきたい人へ。", tags: ["ノート", "Markdown", "同期"] },
    iina: { summary: "macOS向けに設計された動画プレーヤー。字幕、プレイリスト、各種動画・音声形式を軽快に扱えます。", recommendation: "動画を観るためのアプリに、余計な主張はいらない。", tags: ["動画再生", "字幕", "mpv"] },
    handbrake: { summary: "動画を多様な形式へ変換できる、定番のオープンソース・トランスコーダーです。プリセットと詳細設定の両方を備えます。", recommendation: "変換設定を急がず選べる、長く使える定番の一台。", tags: ["動画変換", "エンコード", "プリセット"] },
    "yt-dlp": { summary: "多数の対応サイトから動画・音声を取得できる、機能豊富なコマンドラインツールです。", recommendation: "配信を扱う前に、まず利用規約と権利を確認する。その前提で強力な道具です。", tags: ["コマンドライン", "動画・音声", "ダウンロード"] },
    macshot: { summary: "注釈、スクロールキャプチャ、OCR、画面収録、簡易編集を一つにまとめたネイティブのキャプチャツールです。", recommendation: "一枚のスクリーンショットで、説明まで終わらせたいときに。", tags: ["スクリーンショット", "画面収録", "スクロールキャプチャ"], permissions: "撮影・録画には「画面収録」許可が必要です。音声録音では「マイク」、グローバル操作では必要に応じて「アクセシビリティ」または「入力監視」を求めます。" },
    imageoptim: { summary: "画像をドラッグ＆ドロップで最適化し、見た目を保ちながらファイルサイズを小さくします。", recommendation: "画像を軽くする作業を、書き出しの最後のひと手間に。", tags: ["画像圧縮", "最適化", "ドラッグ＆ドロップ"] },
    krita: { summary: "イラスト、コンセプトアート、コミック制作に対応する、機能豊富なデジタルペイントソフトです。", recommendation: "描くための道具は、作品の出発点を邪魔しない。", tags: ["デジタルペイント", "イラスト", "PSD"] },
    rectangle: { summary: "ショートカットやスナップ領域でウインドウを移動・リサイズし、画面を素早く整えます。", recommendation: "ウインドウ整理を、考える前に手が動く操作へ。", tags: ["ウインドウ整列", "ショートカット", "スナップ"], permissions: "ほかのアプリのウインドウを操作するため、「アクセシビリティ」へのアクセスが必要です。" },
    aerospace: { summary: "i3のようなキーボード中心の操作で、ウインドウをタイル状に配置するmacOS向けウインドウマネージャです。", recommendation: "キーボード中心で、ウインドウの置き方まで自分で組み立てたい人へ。", tags: ["タイル型WM", "キーボード操作", "ワークスペース"], permissions: "ウインドウ操作に「アクセシビリティ」へのアクセスが必要です。公式バイナリは未公証と明記されているため、配布元と更新情報を確認して導入してください。" },
    maccy: { summary: "コピー履歴を軽量に保存し、必要な内容をすばやく呼び出せるクリップボードマネージャです。", recommendation: "さっきコピーしたものを探す時間を、ほぼなくせる。", tags: ["クリップボード", "履歴", "軽量"] },
    "karabiner-elements": { summary: "キーの入れ替え、複合キー、デバイス別設定まで扱える、macOS向けの高機能キーボードカスタマイザーです。", recommendation: "キーボードを買い替える前に、キー配列を自分に合わせられる。", tags: ["キーリマップ", "キーボード", "高度な設定"], permissions: "キー入力を扱うため、「入力監視」と「アクセシビリティ」、システム拡張の許可が必要です。公式配布パッケージから導入し、設定内容を確認してください。" },
    dupeguru: { summary: "ファイル名や内容を比較して重複ファイルを探し、削除候補を自分で確認できるツールです。類似画像の検索にも対応します。", recommendation: "容量を空ける前に、似たファイルを見つけて自分で判断できる。", tags: ["重複ファイル", "類似画像", "ストレージ整理"] }
  }
};

let activeLanguage = new URLSearchParams(location.search).get("lang") || localStorage.getItem("mac-better-language") || "zh";
if (!copy[activeLanguage]) activeLanguage = "zh";
let activeCategory = new URLSearchParams(location.search).get("category") || "all";
if (!categories.includes(activeCategory)) activeCategory = "all";
let apps = [];

const railAppCount = document.querySelector("#rail-app-count");
const featuredGrid = document.querySelector("#featured-grid");
const appGrid = document.querySelector("#app-grid");
const filters = document.querySelector("#category-filters");
const searchInput = document.querySelector("#search-input");
const testedFilter = document.querySelector("#tested-filter");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const clearFilters = document.querySelector("#clear-filters");

function valueAt(object, path) {
  return path.split(".").reduce((value, key) => value?.[key], object);
}

function t(path, parameters = {}) {
  const fallback = valueAt(copy.zh, path);
  const value = valueAt(copy[activeLanguage], path) ?? fallback ?? path;
  return String(value).replace(/\{(\w+)\}/g, (_, key) => parameters[key] ?? `{${key}}`);
}

function localized(app, key) {
  return appCopy[activeLanguage]?.[app.id]?.[key] ?? app[key];
}

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function link(url, text, className = "") {
  return `<a class="${className}" href="${escapeHTML(url)}" target="_blank" rel="noreferrer">${escapeHTML(text)} <span aria-hidden="true">↗</span></a>`;
}

function statusClass(level) {
  return `status-${level}`;
}

function categoryName(id) {
  return t(`category.${id}`);
}

function featuredTemplate(app) {
  return `<article class="featured-card">
    <img class="app-icon" src="${escapeHTML(app.icon)}" alt="${escapeHTML(t("iconAlt", { name: app.name }))}" />
    <span class="app-type">${escapeHTML(categoryName(app.category))}</span>
    <h3>${escapeHTML(app.name)}</h3>
    <p class="card-summary">${escapeHTML(localized(app, "summary"))}</p>
    <p class="recommendation">“${escapeHTML(localized(app, "recommendation"))}”</p>
    ${link(app.homepage, t("projectSite"), "card-link")}
  </article>`;
}

function cardTemplate(app) {
  const permission = app.permissionKey ? t(`permission.${app.permissionKey}`) : "";
  const permissionWarning = permission ? `<span class="tag warning" title="${escapeHTML(localized(app, "permissions") || "")}">${escapeHTML(t("requires", { permission }))}</span>` : "";
  const status = valueAt(copy[activeLanguage], `status.${app.status.level}`) ?? valueAt(copy.zh, `status.${app.status.level}`);
  return `<article class="app-card">
    <img class="app-icon" src="${escapeHTML(app.icon)}" alt="${escapeHTML(t("iconAlt", { name: app.name }))}" />
    <div class="app-card-head"><div><h3>${escapeHTML(app.name)}</h3><span class="app-type">${escapeHTML(categoryName(app.category))}</span></div><div class="app-card-meta" aria-label="${escapeHTML(t("metadataLabel"))}"><span class="license" title="${escapeHTML(t(`license.${app.license}`))}" aria-label="${escapeHTML(t(`license.${app.license}`))}">${escapeHTML(app.license)}</span><span class="tag ${statusClass(app.status.level)}" title="${escapeHTML(status.note)}">${escapeHTML(status.label)}</span>${permissionWarning}</div></div>
    <p class="card-summary">${escapeHTML(localized(app, "summary"))}</p>
    <p class="recommendation">“${escapeHTML(localized(app, "recommendation"))}”</p>
    <div class="tags" aria-label="${escapeHTML(t("metadataLabel"))}">
      ${(localized(app, "tags") || []).map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}
    </div>
    <div class="app-links">
      ${link(app.homepage, t("projectSite"))}
      ${link(app.download, t("download"))}
    </div>
  </article>`;
}

function renderFilters() {
  filters.innerHTML = categories.map(id => `<button class="filter" type="button" data-category="${id}" aria-pressed="${id === activeCategory}">${escapeHTML(categoryName(id))}</button>`).join("");
  filters.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    renderFilters();
    renderCatalog();
  }));
}

function updateURL() {
  const url = new URL(location.href);
  if (activeCategory === "all") url.searchParams.delete("category");
  else url.searchParams.set("category", activeCategory);
  if (testedFilter.checked) url.searchParams.set("tested", "1");
  else url.searchParams.delete("tested");
  if (activeLanguage === "zh") url.searchParams.delete("lang");
  else url.searchParams.set("lang", activeLanguage);
  history.replaceState({}, "", url);
}

function renderCatalog() {
  const locale = activeLanguage === "ja" ? "ja-JP" : activeLanguage === "en" ? "en-US" : "zh-CN";
  const query = searchInput.value.trim().toLocaleLowerCase(locale);
  const list = apps.filter(app => !app.featured).filter(app => {
    const tags = localized(app, "tags") || [];
    const searchText = [app.name, localized(app, "summary"), localized(app, "recommendation"), categoryName(app.category), ...tags].join(" ").toLocaleLowerCase(locale);
    const appCategories = app.categories || [app.category];
    const categoryMatch = activeCategory === "all" || appCategories.includes(activeCategory);
    const testedMatch = !testedFilter.checked || app.status.level === "tested";
    return categoryMatch && testedMatch && searchText.includes(query);
  });
  appGrid.innerHTML = list.map(cardTemplate).join("");
  emptyState.hidden = list.length !== 0;
  resultCount.textContent = t("foundCount", { count: list.length });
  updateURL();
}

function resetFilters() {
  activeCategory = "all";
  searchInput.value = "";
  testedFilter.checked = false;
  renderFilters();
  renderCatalog();
}

function updateRailLinks() {
  document.querySelectorAll(".rail-links a").forEach(anchor => {
    const category = new URL(anchor.href).searchParams.get("category");
    anchor.href = `?category=${encodeURIComponent(category)}${activeLanguage === "zh" ? "" : `&lang=${activeLanguage}`}#catalog`;
  });
}

function applyStaticCopy() {
  document.documentElement.lang = t("htmlLang");
  document.title = t("pageTitle");
  document.querySelector('meta[name="description"]').content = t("pageDescription");
  document.querySelectorAll("[data-i18n]").forEach(element => { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-i18n-aria-label]").forEach(element => { element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel)); });
  document.querySelectorAll("[data-language]").forEach(button => { button.setAttribute("aria-pressed", String(button.dataset.language === activeLanguage)); });
  updateRailLinks();
}

function applyLanguage(language) {
  activeLanguage = language;
  localStorage.setItem("mac-better-language", activeLanguage);
  applyStaticCopy();
  if (apps.length) {
    featuredGrid.innerHTML = apps.filter(app => app.featured).map(featuredTemplate).join("");
    renderFilters();
    renderCatalog();
  }
}

async function init() {
  applyStaticCopy();
  document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => applyLanguage(button.dataset.language)));
  try {
    const dataURL = new URL("data/apps.json", import.meta.url);
    dataURL.searchParams.set("v", "20261016.3");
    const response = await fetch(dataURL, { cache: "no-store" });
    if (!response.ok) throw new Error("Unable to load app data");
    apps = await response.json();
    apps.sort((a, b) => a.sortOrder - b.sortOrder);
    railAppCount.textContent = String(apps.length);
    testedFilter.checked = new URLSearchParams(location.search).get("tested") === "1";
    featuredGrid.innerHTML = apps.filter(app => app.featured).map(featuredTemplate).join("");
    renderFilters();
    renderCatalog();
  } catch (error) {
    resultCount.textContent = t("dataError");
    console.error(error);
  }
}

searchInput.addEventListener("input", renderCatalog);
testedFilter.addEventListener("change", renderCatalog);
clearFilters.addEventListener("click", resetFilters);
document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "/" && document.activeElement?.tagName !== "INPUT") {
    event.preventDefault();
    searchInput.focus();
  }
});

init();
