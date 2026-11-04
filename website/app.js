const categories = ["all", "office", "notes", "video", "player", "audio", "image", "capture", "browser", "download", "archives", "files", "launcher", "menu", "maintenance", "privacy", "productivity", "efficiency"];
const categoryIcons = {
  all: "apps",
  office: "briefcase",
  notes: "notebook",
  video: "video",
  player: "player-play",
  audio: "headphones",
  image: "photo",
  capture: "screenshot",
  browser: "world-www",
  download: "download",
  launcher: "layout-grid",
  menu: "adjustments-horizontal",
  maintenance: "tool",
  files: "folder",
  archives: "file-zip",
  privacy: "shield-lock",
  productivity: "bolt",
  efficiency: "code"
};
const licenseOrder = ["MIT", "GPL-2.0", "GPL-3.0", "GPL-2.0 / GPL-3.0", "AGPL-3.0", "MPL-2.0", "Apache-2.0", "Unlicense", "LGPL-2.1", "LGPL-3.0", "BSD-2-Clause", "BSD-3-Clause"];
const categoryOrder = ["video", "player", "audio", "image", "capture", "browser", "download", "launcher", "menu", "office", "notes", "productivity", "archives", "files", "maintenance", "privacy", "efficiency"];
const workflowOrder = {
  video: ["shotmap", "mp4flow", "handbrake", "lossless-cut", "subler", "mediainfo", "subtitle-edit", "openscreen", "blender"],
  player: ["iina", "vlc", "mpv", "kodi", "jellyfin-media-player", "cog", "feishin", "yesplaymusic"],
  audio: ["cog", "feishin", "audacity", "mixxx", "musescore", "finetune", "background-music", "yesplaymusic"],
  image: ["lumaview", "shotmap", "macshot", "flameshot", "imageoptim", "darktable", "rawtherapee", "krita", "drawio-desktop", "blender", "freecad", "godot"],
  capture: ["macshot", "flameshot", "bettercapture", "kap", "openscreen", "obs-studio", "screenity"],
  browser: ["firefox", "waterfox", "floorp", "zen-browser", "brave", "helium", "netnewswire"],
  download: ["ab-download-manager", "gopeed", "aria2", "ytdownloader", "yt-dlp", "transmission", "qbittorrent", "cyberduck"],
  launcher: ["launchpad-back", "loop", "rectangle", "layoutkeeper", "alt-tab", "aerospace", "amethyst", "hammerspoon"],
  menu: ["ice", "thaw", "stats", "monitorcontrol", "layoutkeeper", "linearmouse", "karabiner-elements", "maccy", "finetune", "background-music", "onlyswitch", "keeping-you-awake"],
  office: ["lumaview", "libreoffice", "onlyoffice", "thunderbird", "koodo-reader", "anki", "drawio-desktop"],
  notes: ["zettlr", "qownnotes", "joplin", "logseq", "appflowy"],
  productivity: ["super-productivity", "maccy", "espanso", "hammerspoon", "swiftbar"],
  archives: ["macpacker", "peazip", "macrar"],
  files: ["macpacker", "peazip", "macrar", "localsend", "openmtp", "cyberduck", "syncthing", "kopia"],
  maintenance: ["puremac", "purge", "mangodisk", "dupeguru", "latest", "applite", "sloth"],
  privacy: ["signal", "keepassxc", "cryptomator", "lulu"],
  efficiency: ["github-desktop", "vscodium", "zed", "codeedit", "xcodes", "alacritty", "dbeaver", "tablepro", "bruno", "kilobat-cli", "utm", "hammerspoon", "swiftbar"]
};
const siteURL = "https://ixiehao.github.io/MacBetter/";
const essentialAppIds = ["lumaview", "iina", "macshot", "imageoptim", "macrar", "firefox", "launchpad-back", "purge"];
const defaultLanguage = "en";
const languageStorageKey = "MacBetter-language";
const legacyLanguageStorageKey = "mac-better-language";
const ogLocales = { zh: "zh_CN", en: "en_US", ja: "ja_JP" };

const copy = {
  zh: {
    essentialsHeading: "新 Mac 必备工具",
    essentialsCopy: "日常刚需，一次配齐。",
    essentialsFor: "查看 {name}：{task}",
    essentialsTask: { lumaview: "看图", iina: "看视频", macshot: "截屏", imageoptim: "压缩图片", macrar: "解压缩", firefox: "浏览网页", "launchpad-back": "启动应用", purge: "缓存清理" },
    pageTitle: "让 Mac 更好用 · MAC免费开源软件",
    pageDescription: "一个由 Mac 用户共同维护的开源 macOS 软件目录：免费、开源、实用，并标明许可证、项目入口与关键权限。",
    htmlLang: "zh-CN",
    skipLink: "跳到软件目录",
    wordmark: "MAC免费开源软件",
    wordmarkAria: "MAC免费开源软件，返回顶部",
    navLabel: "主导航",
    navContribute: "推荐软件",
    navCatalog: "软件目录",
    navStandards: "开源说明",
    navGithub: "在 GitHub 共建",
    languageLabel: "选择语言",
    languageOption: { zh: "切换为中文", en: "切换为 English", ja: "切换为日本語" },
    languageChanged: "已切换为中文",
    category: { all: "全部", office: "办公与学习", notes: "笔记与知识", video: "视频处理", player: "影音播放", audio: "音频与音乐", image: "图片与设计", capture: "截图与录屏", browser: "网络浏览", download: "下载工具", launcher: "窗口与启动", menu: "菜单栏与硬件", maintenance: "Mac 优化与维护", archives: "压缩与解压", files: "文件与备份", privacy: "隐私与安全", productivity: "效率与自动化", efficiency: "开发工具" },
    communityEyebrow: "MACOS · 开源软件导航",
    communityHeading: "让 Mac 更好用",
    brandMeaning: "i 代表独立开发者，o 代表开源建设者。",
    communityCopy: "免费、开源、按用途整理。官方入口、许可证和 io 实测状态，一眼看清。",
    heroStatsLabel: "目录概况",
    statApps: "款开源软件",
    statCategories: "个用途分类",
    submitKicker: "社区共建",
    submitHeading: "好工具，等你推荐。",
    recommendApp: "推荐一款软件",
    viewCriteria: "了解收录方式",
    communityInstructions: "提交项目链接、开源许可证和真实使用场景，我们会核对公开信息。",
    contributionStepsLabel: "推荐软件需要的信息",
    contribution: { sourceTitle: "项目地址", sourceDetail: "作者仓库或官网", licenseTitle: "开源许可证", licenseDetail: "例如 MIT、GPL-3.0", reasonTitle: "推荐理由", reasonDetail: "它具体解决什么问题" },
    catalogEyebrow: "开源 Mac 软件",
    catalogHeading: "软件目录",
    catalogControlsLabel: "搜索和筛选软件",
    recommendInline: "推荐一款好软件",
    shareDirectory: "分享目录",
    shareCopied: "目录链接已复制，可以分享给朋友。",
    shareFailed: "暂时无法分享，请从地址栏复制当前页面地址。",
    searchPlaceholder: "搜索名称、用途或标签",
    searchLabel: "搜索软件目录",
    clearSearch: "清空搜索",
    testedFilter: "仅显示 io 实测",
    appCategoriesLabel: "软件分类",
    foundCount: "找到 {count} 款软件",
    dataError: "软件目录暂时无法载入。",
    dataErrorLink: "在 GitHub 查看",
    emptyState: "没有找到匹配的软件。",
    clearFilters: "清除筛选条件",
    metadataLabel: "项目属性",
    detailsSummary: "系统要求与权限",
    compatibilityLabel: "系统要求",
    permissionsLabel: "权限与安全提示",
    licenseFor: "查看 {license} 许可证说明（{name}）",
    licenseNote: "通俗摘要，不构成法律意见。项目可能包含第三方组件；实际使用或分发时，请核对仓库中的 LICENSE，以及如有的 NOTICE 文件。",
    projectSiteFor: "打开 {name} 项目主页",
    downloadFor: "下载 {name}",
    iconAlt: "{name} 图标",
    previewFor: "预览 {name} 的软件截图",
    previewLabel: "预览",
    projectSite: "项目主页",
    download: "下载",
    status: {
      tested: { label: "io 实测", note: "已在 iXiehao 的实际使用环境中运行；不等同于安全审计，也不保证适配所有 macOS 版本。" }
    },
    requires: "需：{permission}",
    permission: { accessibility: "辅助功能", files: "文件访问", fullDiskOptional: "完整磁盘访问（可选）", screenRecording: "屏幕录制", inputMonitoring: "输入监控" },
    license: {
      MIT: "MIT：个人或商业使用、修改和再发布都可以；分发时保留许可证与版权声明即可，通常不要求公开自己的修改版源码。",
      "GPL-2.0": "GPL-2.0：可自由使用和修改；若向他人分发程序或修改版，须按 GPL-2.0 提供对应源码，并保留许可与版权声明。",
      "GPL-3.0": "GPL-3.0：可自由使用和修改；分发程序或修改版时，须按 GPL-3.0 提供对应源码。它还包含明确的专利条款。",
      "GPL-2.0 / GPL-3.0": "GPL-2.0 / GPL-3.0：项目允许选择 GPLv2 或 GPLv3；发布时遵守所选版本，并提供对应源码，保留适用的例外与组件声明。",
      "AGPL-3.0": "AGPL-3.0：若修改后的软件通过网络服务供他人使用，也须向这些用户提供对应源码；这比 GPL 多了网络服务场景的要求。",
      "MPL-2.0": "MPL-2.0：对外发布时，修改过的 MPL 覆盖文件须提供源码并继续按 MPL 授权；独立的新文件可使用其他许可证。",
      "Apache-2.0": "Apache-2.0：宽松许可，可用于闭源组合和再发布；需保留许可证、版权与专利声明，并按要求附带 NOTICE 文件内容。",
      "LGPL-2.1": "LGPL-2.1：主要用于库；修改该库并分发时须提供库源码。应用可采用其他许可证，但需让用户能按许可条件替换或重新链接该库。",
      "LGPL-3.0": "LGPL-3.0：主要用于库；分发修改版须提供对应库源码。应用可使用其他许可证，但须按条件允许用户替换或重新链接库，并保留相关声明。",
      "BSD-2-Clause": "BSD-2-Clause：宽松许可，可用于闭源项目；再发布时保留版权、许可条件和免责声明即可。",
      "BSD-3-Clause": "BSD-3-Clause：与 BSD-2-Clause 类似；除保留版权与免责声明外，不得未经许可用作者或贡献者姓名为衍生产品背书。",
      Unlicense: "Unlicense：作者尽可能将作品贡献到公有领域，并放弃保证；适用范围仍受当地法律及第三方组件许可影响。"
    },
    standardsEyebrow: "开源说明",
    standardsHeading: "常见许可证，怎么理解",
    standardsCopy: "下列为当前目录实际出现的许可证；具体权利与义务以项目仓库中的 LICENSE 为准。",
    standard: {
      oneTitle: "MIT", oneCopy: "可使用、修改和再发布；保留许可证与版权声明即可。",
      twoTitle: "GPL", twoCopy: "公开发布修改版时，需要以 GPL 提供对应源码。",
      threeTitle: "MPL", threeCopy: "改动到的 MPL 文件需开源，可与其他代码组合。"
    },
    footerMaintained: "由 iXiehao 维护，欢迎通过 GitHub 一起完善。",
    footerRights: "第三方商标、名称和图标归各自权利人所有。",
    footerSource: "查看源代码"
  },
  en: {
    essentialsHeading: "New Mac essentials",
    essentialsCopy: "Everyday tasks, covered.",
    essentialsFor: "View {name}: {task}",
    essentialsTask: { lumaview: "View images", iina: "Play video", macshot: "Take screenshots", imageoptim: "Compress images", macrar: "Open archives", firefox: "Browse the web", "launchpad-back": "Launch apps", purge: "Clear caches" },
    pageTitle: "Make Your Mac Better · Open-Source macOS Apps",
    pageDescription: "A maintained, practical directory of free and open-source macOS apps, with licenses, official links, and key permission notes.",
    htmlLang: "en",
    skipLink: "Skip to app directory",
    wordmark: "Free & Open-Source Mac Apps",
    wordmarkAria: "Mac app directory — back to top",
    navLabel: "Page navigation",
    navContribute: "Recommend an app",
    navCatalog: "All apps",
    navStandards: "Open-source guide",
    navGithub: "Contribute on GitHub",
    languageLabel: "Choose language",
    languageOption: { zh: "Switch to Chinese", en: "Switch to English", ja: "Switch to Japanese" },
    languageChanged: "Language changed to English",
    category: { all: "All", office: "Office & Learning", notes: "Notes & Knowledge", video: "Video Tools", player: "Media Players", audio: "Audio & Music", image: "Images & Design", capture: "Screen Capture", browser: "Web Browsing", download: "Download Tools", launcher: "Windows & Launchers", menu: "Menu Bar & Hardware", maintenance: "Mac Maintenance", archives: "Archives", files: "Files & Backup", privacy: "Privacy & Security", productivity: "Productivity & Automation", efficiency: "Developer Tools" },
    communityEyebrow: "macOS · OPEN-SOURCE APP DIRECTORY",
    communityHeading: "Make your Mac better",
    brandMeaning: "i for independent developer; o for open-source builder.",
    communityCopy: "Free, open-source apps organized by task—with official links, licenses, and real-world notes.",
    heroStatsLabel: "Directory overview",
    statApps: "open-source apps",
    statCategories: "useful categories",
    submitKicker: "COMMUNITY PICKS",
    submitHeading: "Know a good Mac app?",
    recommendApp: "Recommend an app",
    viewCriteria: "View submission criteria",
    communityInstructions: "Share the project link, license, and the problem it solves. We check public details before listing.",
    contributionStepsLabel: "What to include with an app recommendation",
    contribution: { sourceTitle: "Project source", sourceDetail: "Author’s repository or official site", licenseTitle: "Open-source license", licenseDetail: "e.g. MIT or GPL-3.0", reasonTitle: "Why you recommend it", reasonDetail: "What problem it solves" },
    catalogEyebrow: "Open-source Mac apps",
    catalogHeading: "App directory",
    catalogControlsLabel: "Search and filter apps",
    recommendInline: "Recommend an app",
    shareDirectory: "Share directory",
    shareCopied: "Directory link copied. It is ready to share.",
    shareFailed: "Sharing is unavailable. Copy this page address from your browser.",
    searchPlaceholder: "Search apps, features, or tags",
    searchLabel: "Search the app directory",
    clearSearch: "Clear search",
    testedFilter: "Show apps tested by io",
    appCategoriesLabel: "App categories",
    foundCount: "{count} apps found",
    dataError: "The app directory could not be loaded.",
    dataErrorLink: "View it on GitHub",
    emptyState: "No matching apps found.",
    clearFilters: "Clear filters",
    metadataLabel: "App metadata",
    detailsSummary: "System requirements & permissions",
    compatibilityLabel: "System requirements",
    permissionsLabel: "Permissions & safety notes",
    licenseFor: "View the {license} license notes for {name}",
    licenseNote: "Plain-language summary, not legal advice. Projects may include third-party components; check the repository’s LICENSE and any NOTICE file for actual terms.",
    projectSiteFor: "Open the {name} project site",
    downloadFor: "Download {name}",
    iconAlt: "{name} icon",
    previewFor: "Preview a screenshot of {name}",
    previewLabel: "Preview",
    projectSite: "Project site",
    download: "Download",
    status: {
      tested: { label: "Tested by io", note: "Personally used on iXiehao’s everyday Mac. This is not a security audit or a guarantee of compatibility with every macOS version." }
    },
    requires: "Requires: {permission}",
    permission: { accessibility: "Accessibility", files: "File access", fullDiskOptional: "Full Disk Access (optional)", screenRecording: "Screen Recording", inputMonitoring: "Input Monitoring" },
    license: {
      MIT: "MIT: Free to use, modify, and redistribute, including commercially. Keep the license and copyright notice; it generally does not require publishing your own modified source.",
      "GPL-2.0": "GPL-2.0: You may use and modify it. If you distribute the program or a modified version, provide the corresponding source under GPL-2.0 and preserve its notices.",
      "GPL-3.0": "GPL-3.0: You may use and modify it. Distribution of the program or a modified version requires corresponding source under GPL-3.0; it also includes express patent terms.",
      "GPL-2.0 / GPL-3.0": "GPL-2.0 / GPL-3.0: Choose GPLv2 or GPLv3 as the project permits. Follow that version when distributing the software and its source, including applicable exceptions and component notices.",
      "AGPL-3.0": "AGPL-3.0: If you modify the software and let others use it over a network, you must offer those users the corresponding source—a requirement beyond the usual GPL distribution trigger.",
      "MPL-2.0": "MPL-2.0: When distributing it, publish changes to MPL-covered files under the MPL. Independent new files may use other licenses.",
      "Apache-2.0": "Apache-2.0: A permissive license that allows closed-source combinations. Preserve license, copyright, and patent notices, and include any required NOTICE content.",
      "LGPL-2.1": "LGPL-2.1: Mainly intended for libraries. If you distribute a modified library, provide its source; an application may use another license if users can replace or relink the library under the license terms.",
      "LGPL-3.0": "LGPL-3.0: Mainly used for libraries. Distributing a modified version requires the corresponding library source. Applications may use other licenses if users can replace or relink the library as required and notices are preserved.",
      "BSD-2-Clause": "BSD-2-Clause: A permissive license that can be used in closed-source projects. Keep the copyright, license conditions, and disclaimer when redistributing.",
      "BSD-3-Clause": "BSD-3-Clause: Similar to BSD-2-Clause, with an added rule against using authors’ or contributors’ names to endorse derived products without permission.",
      Unlicense: "Unlicense: The author dedicates the work to the public domain as far as possible and disclaims warranties; local law and third-party component licenses still matter."
    },
    standardsEyebrow: "Open-source basics",
    standardsHeading: "Common licenses, plainly explained",
    standardsCopy: "These are the licenses currently used by apps in this directory. Always defer to each project’s LICENSE for the exact terms.",
    standard: {
      oneTitle: "MIT", oneCopy: "Use, modify, and redistribute it; keep the license and copyright notice.",
      twoTitle: "GPL", twoCopy: "When distributing a modified version, provide its corresponding source under GPL.",
      threeTitle: "MPL", threeCopy: "Changes to MPL-covered files stay open; other code can remain separate."
    },
    footerMaintained: "Maintained by iXiehao. Help improve it on GitHub.",
    footerRights: "All third-party names, trademarks, and icons belong to their respective owners.",
    footerSource: "View source code"
  },
  ja: {
    essentialsHeading: "新しいMacに、まずこのアプリ",
    essentialsCopy: "毎日の作業に、このセット。",
    essentialsFor: "{name}を見る：{task}",
    essentialsTask: { lumaview: "画像を見る", iina: "動画を見る", macshot: "画面を撮る", imageoptim: "画像を圧縮", macrar: "圧縮・解凍", firefox: "Webを使う", "launchpad-back": "アプリを開く", purge: "Macを整理" },
    pageTitle: "Macを、もっと使いやすく。｜オープンソースアプリ集",
    pageDescription: "Macユーザーと育てる、無料・オープンソースのmacOSアプリ集。ライセンス、公式リンク、主な権限を確認できます。",
    htmlLang: "ja",
    skipLink: "アプリ一覧へ移動",
    wordmark: "Macアプリ集",
    wordmarkAria: "Macアプリ集、ページ上部へ戻る",
    navLabel: "ページ内ナビゲーション",
    navContribute: "アプリを紹介",
    navCatalog: "すべてのアプリ",
    navStandards: "ライセンスガイド",
    navGithub: "GitHubで参加する",
    languageLabel: "言語を選択",
    languageOption: { zh: "中国語に切り替え", en: "英語に切り替え", ja: "日本語に切り替え" },
    languageChanged: "表示言語を日本語に切り替えました",
    category: { all: "すべて", office: "オフィス・学習", notes: "ノート・情報整理", video: "動画編集・変換", player: "メディア再生", audio: "音声・音楽", image: "画像・デザイン", capture: "スクリーンショット・録画", browser: "Webブラウジング", download: "ダウンロード", launcher: "ウインドウ・ランチャー", menu: "メニューバー・周辺機器", maintenance: "Macのメンテナンス", archives: "圧縮・解凍", files: "ファイル・バックアップ", privacy: "プライバシー・セキュリティ", productivity: "作業効率化・自動化", efficiency: "開発ツール" },
    communityEyebrow: "macOS · オープンソースアプリガイド",
    communityHeading: "Macを、もっと使いやすく。",
    brandMeaning: "i は独立開発者、o はオープンソースを育てる人。",
    communityCopy: "無料のオープンソースアプリを用途別に整理。公式リンク、ライセンス、実使用メモを確認できます。",
    heroStatsLabel: "ディレクトリの概要",
    statApps: "個のアプリ",
    statCategories: "カテゴリ",
    submitKicker: "コミュニティのおすすめ",
    submitHeading: "便利なMacアプリ、教えてください。",
    recommendApp: "おすすめのアプリを紹介する",
    viewCriteria: "掲載条件を見る",
    communityInstructions: "プロジェクトのリンク、ライセンス、解決できる課題をお寄せください。掲載前に公開情報を確認します。",
    contributionStepsLabel: "アプリ紹介に必要な情報",
    contribution: { sourceTitle: "プロジェクトの出所", sourceDetail: "作者のリポジトリまたは公式サイト", licenseTitle: "オープンソースライセンス", licenseDetail: "例：MIT / GPL-3.0", reasonTitle: "おすすめの理由", reasonDetail: "どんな課題を解決するか" },
    catalogEyebrow: "オープンソースのMacアプリ",
    catalogHeading: "アプリ一覧",
    catalogControlsLabel: "アプリを検索・絞り込み",
    recommendInline: "アプリを紹介する",
    shareDirectory: "一覧を共有",
    shareCopied: "一覧のリンクをコピーしました。共有できます。",
    shareFailed: "共有できません。ブラウザーのアドレスをコピーしてください。",
    searchPlaceholder: "名前・機能・タグで検索",
    searchLabel: "アプリ一覧を検索",
    clearSearch: "検索をクリア",
    testedFilter: "ioが実際に使ったアプリのみ",
    appCategoriesLabel: "アプリのカテゴリ",
    foundCount: "{count} 件のアプリ",
    dataError: "アプリ情報を読み込めません。",
    dataErrorLink: "GitHubで確認",
    emptyState: "条件に合うアプリは見つかりませんでした。",
    clearFilters: "絞り込みをクリア",
    metadataLabel: "アプリの属性",
    detailsSummary: "システム要件と権限",
    compatibilityLabel: "システム要件",
    permissionsLabel: "権限・安全に関する注意",
    licenseFor: "{name} の {license} ライセンス説明を見る",
    licenseNote: "平易な要約であり、法的助言ではありません。第三者のコードを含む場合があります。実際の条件はリポジトリの LICENSE と、NOTICE がある場合はその内容を確認してください。",
    projectSiteFor: "{name} のプロジェクトページを開く",
    downloadFor: "{name} をダウンロード",
    iconAlt: "{name}のアイコン",
    previewFor: "{name}のスクリーンショットをプレビュー",
    previewLabel: "プレビュー",
    projectSite: "プロジェクトページ",
    download: "ダウンロード",
    status: {
      tested: { label: "ioで使用確認済み", note: "iXiehaoの日常用Macで実際に使用しています。セキュリティ監査ではなく、すべてのmacOSバージョンでの動作を保証するものでもありません。" }
    },
    requires: "要：{permission}",
    permission: { accessibility: "アクセシビリティ", files: "ファイルアクセス", fullDiskOptional: "フルディスクアクセス（任意）", screenRecording: "画面収録", inputMonitoring: "入力監視" },
    license: {
      MIT: "MIT：商用を含め、自由に利用・改変・再配布できます。ライセンスと著作権表示を残します。通常、独自の改変ソースを公開する義務はありません。",
      "GPL-2.0": "GPL-2.0：利用・改変は自由です。プログラムや改変版を配布する場合、GPL-2.0で対応するソースコードを提供し、表示を保持する必要があります。",
      "GPL-3.0": "GPL-3.0：利用・改変は自由です。プログラムや改変版の配布時はGPL-3.0で対応するソースコードを提供します。特許に関する条項も含まれます。",
      "GPL-2.0 / GPL-3.0": "GPL-2.0 / GPL-3.0：プロジェクトの条件に従ってGPLv2またはGPLv3を選べます。配布時は選んだ版でソースを提供し、適用される例外や各部品の表示も保ちます。",
      "AGPL-3.0": "AGPL-3.0：改変したソフトをネットワーク経由で他者に使わせる場合も、利用者に対応するソースコードを提供する必要があります。通常のGPLよりネットワーク利用の条件が加わります。",
      "MPL-2.0": "MPL-2.0：配布する場合、MPL対象ファイルへの変更はMPLで公開します。独立した新規ファイルには別のライセンスを適用できます。",
      "Apache-2.0": "Apache-2.0：寛容なライセンスで、クローズドソースの製品にも組み込めます。ライセンス・著作権・特許表示を残し、必要な場合はNOTICEも含めます。",
      "LGPL-2.1": "LGPL-2.1：主にライブラリ向けです。改変したライブラリを配布する場合はソースを提供します。アプリ側は、利用者が条件に従ってライブラリを交換・再リンクできれば別のライセンスにできます。",
      "LGPL-3.0": "LGPL-3.0：主にライブラリ向け。変更版を配布する場合は対応するライブラリのソースを提供します。所定の条件で差し替え・再リンクを可能にし、告知を残せば、アプリに別のライセンスを使えます。",
      "BSD-2-Clause": "BSD-2-Clause：クローズドソースの製品にも使える寛容なライセンスです。再配布時は著作権表示、条件、免責表示を残します。",
      "BSD-3-Clause": "BSD-3-Clause：BSD-2-Clauseと同様ですが、許可なく作者や貢献者の名前を派生製品の推奨・宣伝に使えない条件が加わります。",
      Unlicense: "Unlicense：可能な範囲で著作権を放棄し、公有領域に置くことを意図しています。保証はなく、各地域の法律や第三者コードのライセンスも関係します。"
    },
    standardsEyebrow: "オープンソースの説明",
    standardsHeading: "よくあるライセンスの見方",
    standardsCopy: "この一覧にあるアプリで使われているライセンスです。正確な条件は各プロジェクトの LICENSE を確認してください。",
    standard: {
      oneTitle: "MIT", oneCopy: "利用・改変・再配布が可能。ライセンスと著作権表示を残します。",
      twoTitle: "GPL", twoCopy: "改変版を公開配布する場合、対応するソースを GPL で提供します。",
      threeTitle: "MPL", threeCopy: "改変した MPL 対象ファイルを公開し、他のコードは分けて扱えます。"
    },
    footerMaintained: "iXiehaoが継続して管理しています。GitHubで一緒に改善できます。",
    footerRights: "第三者の商標、名称、アイコンは各権利者に帰属します。",
    footerSource: "ソースコードを見る"
  }
};

const appCopy = {
  en: {
    "ytdownloader": {"summary": "Download videos, audio, and playlists from YouTube and other sites, with quality selection and batch downloads.", "recommendation": "Paste a link. Save the video.", "tags": ["Video downloads", "Playlists", "Audio extraction"], "compatibility": "Official Apple Silicon and Intel builds; tested on macOS 27. Follow the project instructions for yt-dlp and other components. The Mac release is unsigned.", "permissions": "Reading Chrome Cookies requires access to Chrome app data. On macOS 27, enable Google Chrome under YTDownloader in Files & Folders."},
    "macpacker": {"summary": "Browse and preview archives in a native Mac interface. Create ZIP and 7z files, open RAR, and extract only what you need.", "recommendation": "Take one file out, not the whole archive.", "tags": ["Archives", "ZIP / 7z", "Preview contents"], "compatibility": "The current release requires macOS 14.6+ and supports Intel and Apple Silicon. Official DMG / ZIP builds are signed and notarized; macOS 13 support ended at v0.14.1.", "permissions": "Accesses selected archives and output folders. Enable Finder and Quick Look extensions when needed."},
    "peazip": {"summary": "A cross-platform archive manager for ZIP, 7z, TAR, and RAR extraction, with encryption, split volumes, and integrity checks.", "recommendation": "Handle mixed archive formats in one place.", "tags": ["Archives", "Multiple formats", "Encryption & splitting"], "compatibility": "Separate official macOS packages are available for Intel and Apple Silicon. Mac builds lack Developer ID signing and may be blocked on first launch; see the official installation notes.", "permissions": "Reads selected files and writes to the chosen destination. Finder services are optional. Compression and RAR extraction are free; RAR creation is not supported."},
    "macrar": {"summary": "A native archive manager with ZIP, 7z, and TAR creation, RAR extraction, encryption, split volumes, and Finder actions.", "recommendation": "A familiar WinRAR-style workflow on Mac.", "tags": ["Archives", "RAR extraction", "Finder actions"], "compatibility": "macOS 13+; Universal builds support Intel and Apple Silicon. Official GitHub DMG / ZIP builds are signed and notarized. ZIP, 7z, and TAR creation and RAR extraction are free.", "permissions": "Reads selected files and writes to the chosen destination; enable Finder Quick Actions as needed. Creating or modifying RAR requires your own paid RARLAB rar tool (a trial is available). MIT covers MacRAR source only; 7-Zip and other components retain their own terms."},
    "shotmap": {"summary": "Turn local videos into storyboard sheets with smart frame selection, manual adjustments, and batch PNG / JPG export.", "recommendation": "Review a long video at a glance.", "tags": ["Swift-native","Offline processing","Video","Images"], "compatibility": "macOS 13+ · Intel and Apple Silicon", "permissions": "Local file access: processes only the videos you select."},
    lumaview: { summary: "Browse local images and PDFs in a lightweight viewer, with folder navigation, EXIF details, zoom, rotation, and printing.", recommendation: "Viewing images should stay lightweight.", tags: ["Swift-native", "Images & PDFs", "Lightweight"], compatibility: "macOS 12+ · Intel and Apple Silicon", permissions: "Local file access to images, PDFs, and folders you choose." },
    "mp4flow": {"summary": "Batch-convert videos to MP4, trim and merge clips, adjust the picture, and choose audio tracks, subtitles, and a target file size.", "recommendation": "Make an MP4 without opening an editor.", "tags": ["Swift-native","Local processing","MP4"], "compatibility": "macOS 13+ · Intel and Apple Silicon · Requires local FFmpeg / ffprobe", "permissions": "Local file access: processes only the videos you select."},
    "launchpad-back": {"summary": "Restores the familiar Launchpad experience: grid, pages, folders, drag and drop, and search.", "recommendation": "Find apps the familiar way again.", "tags": ["App launcher","Grid layout"], "compatibility": "Project requirements: macOS 15.6 or later.", "permissions": "The project release is not notarized. Follow the project’s Gatekeeper instructions before opening it."},
    loop: { summary: "Arrange windows quickly with drag and drop, shortcuts, and a floating menu—ideal for split views and multitasking.", recommendation: "Arrange windows with one easy move.", tags: ["Window management", "Keyboard shortcuts", "Open source"], permissions: "Requires Accessibility permission to move and resize other apps’ windows.", compatibility: "macOS 13+ · Intel and Apple Silicon" },
    "alt-tab": { summary: "Switch between windows—not just apps—with thumbnails, minimized windows, and multi-display support.", recommendation: "Switch windows when apps are not enough.", tags: ["Window switching", "Multiple displays", "Keyboard"], permissions: "Requires Accessibility permission to read and switch windows.", compatibility: "macOS 12+ · Core window switching is free; search and some visual options require paid Pro." },
    "ice": {"summary": "Group, hide, or always show menu bar icons so utility apps stop crowding the top of your screen.", "recommendation": "Keep the menu bar from becoming clutter.", "tags": ["Menu bar","Organization","Lightweight"], "compatibility": "macOS 14+ · Intel and Apple Silicon", "permissions": "Required permissions depend on the feature and macOS version. Check the project’s permission notes before installing."},
    "stats": {"summary": "Monitor CPU, memory, storage, network, battery, sensors, and more from the menu bar.", "recommendation": "See what is happening before “optimizing.”", "tags": ["System monitoring","Menu bar","Performance"], "compatibility": "macOS 12+ · Intel and Apple Silicon", "permissions": "Displaying the Wi-Fi network name may require Location Services. Grant other permissions as prompted."},
    "monitorcontrol": {"summary": "Control an external display’s brightness and volume via DDC/CI, including with your keyboard media keys.", "recommendation": "Adjust an external display without its buttons.", "tags": ["External display","Brightness","DDC/CI"], "permissions": "Using the native brightness keys with external displays requires Accessibility permission.", "compatibility": "Requires a display with DDC/CI support. See the project’s compatibility notes."},
    puremac: { summary: "Inspect disk usage, review app and development caches before cleaning, and remove unwanted apps.", recommendation: "See what will change before cleaning.", tags: ["Storage analysis", "Cleanup", "Preview before cleaning"], permissions: "Cleanup tools may request broader file access. Review every path they will touch before proceeding.", compatibility: "macOS 13+" },
    purge: { summary: "Review caches, development leftovers, and large files before cleaning. Regular files go to the Trash by default.", recommendation: "My first choice for cache cleanup.", tags: ["Cache cleanup", "Large files", "Development files"], permissions: "Full Disk Access is optional; grant it only when you need to scan additional locations.", compatibility: "macOS 13+" },
    "libreoffice": {"summary": "A free, open-source suite for documents, spreadsheets, and presentations—useful for viewing, light editing, and converting Office files.", "recommendation": "Work with Office files offline, without a subscription.", "tags": ["Documents","Spreadsheets","Presentations"], "compatibility": "Check the current macOS requirements on the official LibreOffice download page.", "permissions": "Take care when opening unfamiliar documents containing macros or external links."},
    "zettlr": {"summary": "A Markdown writing workspace for notes, citations, and long-form projects.", "recommendation": "Keep long-form writing and citations in your files.", "tags": ["Markdown","Writing","Citations"], "compatibility": "Check the macOS requirements for the current project release.", "permissions": "Take care when opening files or scripts from unfamiliar sources."},
    "joplin": {"summary": "A Markdown notes app with notebooks, end-to-end encrypted sync options, and an optional Web Clipper.", "recommendation": "Sync notes without locking them to one service.", "tags": ["Notes","Markdown","Sync"], "compatibility": "A macOS desktop app is available. Check the current release requirements.", "permissions": "You configure the sync service, encryption password, and third-party plugins. Check the service and plugin sources before use."},
    "iina": {"summary": "A modern macOS media player built on mpv, with strong format support, playlists, and subtitle controls.", "recommendation": "Open local video and get on with it.", "tags": ["Media player","Subtitles","Local playback"], "compatibility": "Official macOS releases are available. Check the system requirements for the current version.", "permissions": "Local playback needs no additional sensitive permissions. Check the source before opening network streams or extensions."},
    "handbrake": {"summary": "An open-source video transcoder for converting supported video sources into practical presets and formats.", "recommendation": "Reliable video conversion without the guesswork.", "tags": ["Transcoding","Video conversion","Presets"], "compatibility": "Official macOS releases are available. Check the system requirements for the current version.", "permissions": "Processes the local media you select. Check the output folder and overwrite settings before converting."},
    "yt-dlp": {"summary": "A command-line downloader for audio and video from many supported sites.", "recommendation": "Automate permitted downloads with control.", "tags": ["Command line","Media download","Automation"], "compatibility": "Available on macOS through Python or a package manager. Follow the project’s installation instructions.", "permissions": "Save only content you are entitled to download, and follow the platform’s terms, copyright rules, and local law."},
    "macshot": {"summary": "A native macOS capture tool for screenshots, screen recording, annotation, OCR, scrolling capture, and GIF export.", "recommendation": "Capture, annotate, and share in one pass.", "tags": ["Screenshots","Screen recording","Scrolling capture"], "permissions": "Requires Screen Recording. macOS may also ask for Microphone, Accessibility, or Input Monitoring when you use relevant features.", "compatibility": "Native macOS releases are available. Check the requirements for the current version."},
    "imageoptim": {"summary": "A macOS image optimizer that reduces file size through a simple drag-and-drop workflow.", "recommendation": "Make images lighter before publishing.", "tags": ["Image optimization","Compression","Drag and drop"], "compatibility": "A native macOS app. Check the official site for current system requirements.", "permissions": "Processes only images you drop into the app or select. Keep the originals so you can restore them."},
    "krita": {"summary": "A free, open-source digital painting app for illustration, concept art, comics, and animation.", "recommendation": "A real canvas for serious drawing.", "tags": ["Digital painting","Illustration","Animation"], "compatibility": "A macOS download is available. Check the official site for current system requirements.", "permissions": "Check the source before importing unfamiliar asset packs or scripts."},
    rectangle: { summary: "Snap, move, and resize macOS windows with keyboard shortcuts, edge gestures, and custom layouts.", recommendation: "Give every window a predictable place.", tags: ["Window management", "Keyboard shortcuts", "Snap layouts"], permissions: "Requires Accessibility permission to move and resize other apps’ windows.", compatibility: "The latest version requires macOS 14+. Version 1.100 supports macOS 10.15–13." },
    "aerospace": {"summary": "An i3-style tiling window manager for macOS, driven by keyboard shortcuts and a plain-text configuration file.", "recommendation": "Make window layout a keyboard habit.", "tags": ["Tiling window manager","Keyboard-first","Config file"], "permissions": "Requires Accessibility permission to control windows. The project is not notarized; review its official installation instructions before opening it.", "compatibility": "macOS installation instructions are available. Read the current limitations and configuration guide first."},
    "maccy": {"summary": "A lightweight menu-bar clipboard manager that keeps a searchable history of what you copy.", "recommendation": "Never lose a copied snippet again.", "tags": ["Clipboard history","Menu bar","Lightweight"], "compatibility": "macOS 14+", "permissions": "Stores clipboard history. Avoid copying passwords, keys, or other sensitive content you do not want retained."},
    "karabiner-elements": {"summary": "A powerful macOS keyboard customizer for remapping keys, building complex rules, and configuring devices.", "recommendation": "Remap the keys macOS will not.", "tags": ["Keyboard remapping","Complex rules","Input devices"], "permissions": "Requires Input Monitoring and a system extension, and may request Accessibility and background-service approval. Review these elevated system changes before installing.", "compatibility": "A macOS installer is available. Check the official site for supported system versions."},
    "dupeguru": {"summary": "Finds duplicate files using filenames or file contents, with separate modes for pictures and music.", "recommendation": "Find duplicates before deciding what to remove.", "tags": ["Duplicate finder","File cleanup","Images & music"], "compatibility": "A macOS download is available. Check the current version notes on the official site.", "permissions": "Review every result before deleting files. Duplicate files may serve different purposes."},
    "logseq": {"summary": "Organize notes, tasks, and knowledge with outlines, block references, and backlinks. The current 2.x database edition is in beta.", "recommendation": "Connect scattered notes into knowledge.", "tags": ["Notes","Local-first","Knowledge base"], "compatibility": "The 2.x database edition is in beta. Legacy Markdown / Org file graphs moved to Logseq OG. Back up before migrating.", "permissions": "Read the data and permission notes before using sync, plugins, or external services."},
    "drawio-desktop": {"summary": "Create flowcharts, architecture diagrams, UML, and more offline, with import and export for common formats.", "recommendation": "Diagram without sending the file to a whiteboard.", "tags": ["Diagrams","Flowcharts","Offline"], "compatibility": "Official releases include a Universal macOS installer.", "permissions": "Check the source before opening external templates or configuration files."},
    "obs-studio": {"summary": "An open-source studio for recording and streaming, with scenes, sources, audio mixing, and local capture.", "recommendation": "Record and stream from one capable workspace.", "tags": ["Recording","Live streaming","Scenes"], "permissions": "Screen Recording access is required to capture your display. Grant only the camera and microphone access you need.", "compatibility": "Official releases include macOS installers for Apple Silicon and Intel."},
    "lossless-cut": {"summary": "Trim, join, and extract video or audio quickly around keyframes, avoiding re-encoding when possible.", "recommendation": "Cut a clip without re-encoding the whole video.", "tags": ["Lossless trim","Video","FFmpeg"], "compatibility": "The current version no longer supports macOS 11. Apple Silicon and Intel releases are available.", "permissions": "Processes local media and reads only the files you choose to open or import."},
    "audacity": {"summary": "A mature multitrack audio editor for recording, editing, noise reduction, and format conversion.", "recommendation": "Use a proper timeline when audio needs detail.", "tags": ["Audio editing","Recording","Noise reduction"], "compatibility": "macOS installers are available in the project’s releases. Check the current system requirements.", "permissions": "Recording requires microphone permission. Check the source of files you import."},
    "mangodisk": {"summary": "Inspect disk use, duplicates, and uninstallable apps before choosing what to remove.", "recommendation": "See what is taking up space before you delete it.", "tags": ["Disk analysis","Uninstaller","Duplicates"], "compatibility": "Check the project’s current release and macOS requirements.", "permissions": "Disk analysis and cleanup may require extra file access. Review each item before deleting it."},
    "netnewswire": {"summary": "A fast, local-first RSS reader that brings sites, blogs, and subscriptions into one quiet inbox.", "recommendation": "Read your favorite sites together in one place.", "tags": ["RSS","Reading","Local-first"], "compatibility": "Official project releases include a macOS installer.", "permissions": "Feeds connect to the network for updates according to your settings."},
    "appflowy": {"summary": "A local-first workspace for documents, databases, and projects, with optional collaboration and sync.", "recommendation": "Keep notes, tasks, and knowledge in your hands.", "tags": ["Documents","Databases","Local-first"], "compatibility": "macOS downloads include Apple Silicon, Intel, and Universal builds.", "permissions": "Check the sync and sharing scope before connecting a cloud workspace."},
    "onlyoffice": {"summary": "Edit documents, spreadsheets, presentations, and PDFs offline, with support for common Office formats and PDF forms.", "recommendation": "Start here when Office compatibility matters.", "tags": ["Office compatible","Documents","Spreadsheets"], "compatibility": "macOS 10.13+ · Intel and Apple Silicon downloads available", "permissions": "Take care with macros, external links, and embedded content in unfamiliar documents."},
    "qownnotes": {"summary": "A Markdown notes app built around ordinary files, with folder and Nextcloud workflows.", "recommendation": "Notes are files—take them anywhere.", "tags": ["Markdown","Notes","Nextcloud"], "compatibility": "Official project releases include a macOS installer.", "permissions": "Accesses only the notes folder you specify. You configure any sync service."},
    "koodo-reader": {"summary": "Read EPUB, PDF, MOBI, and more offline, with annotations, notes, and a local library.", "recommendation": "A personal library without platform lock-in.", "tags": ["E-books","PDF","Local library"], "compatibility": "Official releases include macOS builds for Apple Silicon and Intel.", "permissions": "You choose which books and notes to import or sync."},
    "darktable": {"summary": "An open-source darkroom workflow for RAW photo management and non-destructive editing.", "recommendation": "Edit RAW seriously, without a subscription.", "tags": ["RAW","Color grading","Photo management"], "compatibility": "The current 5.6.2 Mac installer is Apple Silicon only. Check the download page for OS requirements; Intel users need an older build.", "permissions": "Processes the photo folders you import. Keep a backup of the originals."},
    "rawtherapee": {"summary": "A high-quality RAW processor with deep control over exposure, sharpening, and color.", "recommendation": "Bring the detail back from your camera files.", "tags": ["RAW","Developing","Color"], "compatibility": "The current macOS release is a Universal ZIP archive. Check the download page for the required macOS version.", "permissions": "Reads the photos you import. Keep originals and exported files in separate folders."},
    amethyst: { summary: "An approachable automatic tiling window manager for macOS, with layouts and shortcuts.", recommendation: "Let windows arrange themselves so you can focus.", tags: ["Auto tiling", "Window management", "Shortcuts"], permissions: "Requires Accessibility permission to read and arrange other apps’ windows.", compatibility: "macOS 10.15+" },
    "thaw": {"summary": "Organize, hide, and search menu bar icons so the top of your screen stays usable.", "recommendation": "Keep your menu bar tidy and easy to use.", "tags": ["Menu bar","Icon organizer","Search"], "compatibility": "Stable 2.1 supports macOS 26 only; the 3.x beta requires macOS 27. Use Releases to find builds for older systems.", "permissions": "Menu bar management may require Accessibility or other permissions, depending on macOS."},
    "linearmouse": {"summary": "Give each external mouse and trackpad its own scrolling, pointer, and acceleration feel.", "recommendation": "An external mouse should feel like yours.", "tags": ["Mouse","Trackpad","Scrolling"], "permissions": "Requires Accessibility permission to apply input-device settings.", "compatibility": "Official project releases include a macOS installer."},
    "background-music": { summary: "Control each app’s volume separately and optionally record system audio.", recommendation: "One loud app should not surprise you.", tags: ["Per-app volume", "System audio", "Recording"], permissions: "Installs an audio driver. Recording may also request Microphone permission.", compatibility: "macOS 10.13+" },
    "keeping-you-awake": {"summary": "Prevent your Mac from sleeping for a set time—handy for downloads, demos, and transfers.", "recommendation": "When you need it awake, keep it awake.", "tags": ["Stay awake","Menu bar","Timer"], "compatibility": "macOS 10.13+", "permissions": "Uses the system’s keep-awake function as needed, without reading personal files."},
    "latest": {"summary": "Check for and install updates for supported apps from the Mac App Store or apps using Sparkle.", "recommendation": "Check app updates without opening every app.", "tags": ["App updates","Checks","Lightweight"], "compatibility": "macOS 10.15+", "permissions": "Reads installed app information to check for updates. You confirm updates before they run."},
    layoutkeeper: { summary: "Restore saved window layouts when you reconnect a monitor, with optional brightness sync and keep-awake modes.", recommendation: "Reconnect. Restore your windows.", tags: ["External display", "Window layout", "Stay awake"], compatibility: "macOS 14+ · Intel and Apple Silicon. Restoring windows across Spaces requires macOS 26+. Hardware brightness control needs Apple Silicon and a compatible DDC display.", permissions: "Requires Accessibility. No Screen Recording or Input Monitoring is needed. Release builds are self-signed, not notarized by Apple." },
    "localsend": {"summary": "Send files, text, and clipboard content directly over the local network, without a cloud relay.", "recommendation": "Send a file without uploading it first.", "tags": ["Local transfer","Cross-platform","No cloud"], "compatibility": "Official project releases include a macOS installer.", "permissions": "Uses local-network discovery and transfers. Accept only devices and files you recognize."},
    "openmtp": {"summary": "Browse, drag, and transfer files directly between a Mac and Android or other MTP devices.", "recommendation": "Move files between your Mac and Android with ease.", "tags": ["Android","MTP","File transfer"], "compatibility": "macOS 11+", "permissions": "Accesses the USB device you connect and authorize, and the local files you select."},
    "kopia": {"summary": "A backup tool with snapshots, deduplication, and encryption for local or remote destinations.", "recommendation": "A backup only counts when it restores.", "tags": ["Backup","Snapshots","Encryption"], "compatibility": "Official releases include macOS builds for Apple Silicon and Intel.", "permissions": "Reads selected backup sources and writes to the backup destination. Test a restore before relying on it."},
    "syncthing": {"summary": "Sync chosen folders directly between devices without handing files to a third-party cloud.", "recommendation": "Sync files without giving them away.", "tags": ["File sync","End-to-end","Decentralized"], "compatibility": "Official macOS archives contain a command-line program configured through a browser interface. Choose the build for your chip.", "permissions": "You choose the sync scope. Review the devices and version-retention settings for each shared folder."},
    "cryptomator": {"summary": "Encrypt files locally before they reach a cloud drive; you keep control of the keys.", "recommendation": "Lock files before they go to the cloud.", "tags": ["Encryption","Cloud drives","Privacy"], "compatibility": "Official releases include macOS builds for Apple Silicon and Intel.", "permissions": "Accesses the vaults and sync folders you select. Keep recovery keys and passwords safe."},
    "lulu": {"summary": "Monitor and allow or block outbound network connections on a per-app basis.", "recommendation": "You should decide which apps get online.", "tags": ["Firewall","Network connections","Privacy"], "compatibility": "macOS installers are available in the project’s releases. Check the current system requirements.", "permissions": "Installs a network-filtering system extension and requests administrator approval. Read the project’s instructions first."},
    "utm": {"summary": "Run other operating systems on your Mac using QEMU or Apple’s virtualization framework, including cross-architecture emulation.", "recommendation": "Use another system without another computer.", "tags": ["Virtual machines","QEMU","Development & testing"], "compatibility": "Official releases include UTM.dmg. Guest-system support depends on the Mac architecture and system image.", "permissions": "Virtual machines can access folders you mount and their configured network. Avoid exposing personal files to untrusted images."},
    "alacritty": {"summary": "A fast, clearly configured cross-platform terminal for people who live in the command line.", "recommendation": "A terminal should be fast, not flashy.", "tags": ["Terminal","Development","GPU rendering"], "compatibility": "Official releases include a macOS DMG installer.", "permissions": "Terminal commands run with your account’s permissions. Run only commands you understand."},
    "espanso": {"summary": "Expand short phrases into templates, dates, and reusable text to avoid repetitive typing.", "recommendation": "Do not type the same thing twice.", "tags": ["Text expansion","Templates","Automation"], "compatibility": "Official releases include a Universal macOS installer.", "permissions": "Keyboard monitoring requires the permissions described by the project. Do not put sensitive content in untrusted templates."},
    "hammerspoon": {"summary": "Use Lua to connect shortcuts, windows, menu-bar items, and system actions into your own workflow.", "recommendation": "Give repetitive actions to a script.", "tags": ["Lua","Automation","Shortcuts"], "permissions": "Automation scripts can request Accessibility, file, or network access. Run only configurations you have reviewed.", "compatibility": "macOS installers are available in the project’s releases. Check the current system requirements."},
    "swiftbar": {"summary": "Turn script output into menu-bar tools for status, reminders, and custom quick actions.", "recommendation": "Keep useful information out of the terminal.", "tags": ["Menu bar","Scripts","Automation"], "compatibility": "macOS 12+", "permissions": "Runs the scripts you enable. Add only trusted plugins whose contents you can review."},
    "anki": {"summary": "Build durable knowledge with spaced repetition, flexible card templates, and optional sync for your own study material.", "recommendation": "To remember longer, do not just review once.", "tags": ["Flashcards","Spaced repetition","Learning"], "compatibility": "Official releases include macOS DMG installers for Apple Silicon and Intel.", "permissions": "Optional sync uploads the decks and media you choose. Review sync settings before including sensitive material."},
    "super-productivity": {"summary": "A local-first workspace for tasks, time tracking, Pomodoro sessions, and project rhythm.", "recommendation": "Today’s work should not live in four apps.", "tags": ["Tasks","Time tracking","Pomodoro"], "compatibility": "Official releases include Universal, Apple Silicon, and Intel macOS DMGs.", "permissions": "No account is needed for local use. Grant access as needed when connecting third-party task services."},
    "tablepro": {"summary": "A native Mac client for browsing, editing, and querying SQL and NoSQL databases, with data import and export.", "recommendation": "Checking one record should not require a full IDE.", "tags": ["Databases","SQL","Native Mac"], "compatibility": "macOS 13+", "permissions": "Check the host, account, and network scope before connecting to a database. Use only trusted connection profiles."},
    "kap": {"summary": "A lightweight screen recorder made for macOS, ideal for quick, polished demonstrations.", "recommendation": "Record a demo without opening a broadcast studio.", "tags": ["Screen recording","GIF","Demos"], "compatibility": "Official project releases include macOS installers for Apple Silicon and Intel.", "permissions": "Screen capture requires macOS Screen Recording permission. Allow microphone access when recording audio."},
    "jellyfin-media-player": {"summary": "Play films, music, and TV from your own Jellyfin server. Previously named Jellyfin Media Player.", "recommendation": "Your library deserves its own player.", "tags": ["Media center","Jellyfin","Personal library"], "compatibility": "Stable v1.12 requires macOS 13+. Its installers still use the Jellyfin Media Player name. Requires a Jellyfin server.", "permissions": "Connects to the server address and media account you specify. Use only servers you trust."},
    "godot": {"summary": "A complete, approachable open-source engine for making 2D, 3D, and interactive work on a Mac.", "recommendation": "Make the playable idea before buying an engine.", "tags": ["Game engine","2D","3D"], "compatibility": "Official releases include a Universal macOS installer.", "permissions": "Opening third-party projects may run build scripts or import assets. Run only trusted projects."},
    "freecad": {"summary": "Parametric 3D modeling for parts, technical drawings, and designs that need to change cleanly.", "recommendation": "A model worth making should survive a dimension change.", "tags": ["3D modeling","CAD","Parametric"], "compatibility": "Official releases include macOS DMG installers for Apple Silicon and Intel.", "permissions": "Processes the design files you open or export. Check the source of external workbenches and macros."},
    "keepassxc": {"summary": "Keep passwords in an encrypted database you control, with offline use and optional browser integration.", "recommendation": "Your password vault belongs in your hands.", "tags": ["Password manager","Offline-first","Encryption"], "compatibility": "Official releases include macOS DMG installers for Apple Silicon and Intel.", "permissions": "Browser autofill requires the official extension and connection approval. Keep your master password and key file safe."},
    "cyberduck": {"summary": "A native client for SFTP, WebDAV, S3, and many cloud stores, with bookmarks and straightforward transfers.", "recommendation": "Managing server files can feel like using Finder.", "tags": ["SFTP","Cloud storage","File transfer"], "compatibility": "A macOS installer is available on the official site. Check its notes for protocol and server compatibility.", "permissions": "Stores the server bookmarks and credentials you choose. Use keys or Keychain, and protect access tokens."},
    finetune: { summary: "Set each app’s volume, route audio to different output devices, and shape the sound with a 10-band equalizer.", recommendation: "Give every app its own volume.", tags: ["Per-app volume", "Audio routing", "Equalizer"], compatibility: "macOS 15+", permissions: "Requires Screen & System Audio Recording permission to capture and adjust app audio." },
    "onlyswitch": {"summary": "Put common macOS controls—such as hidden files, appearance, and low-power mode—in the menu bar.", "recommendation": "One switch should not take three layers of Settings.", "tags": ["Menu bar","System controls","Productivity"], "compatibility": "Official releases include a macOS DMG. Available switches depend on the macOS version.", "permissions": "Some features use system services or request permission. Enable only features you understand."},
    "sloth": {"summary": "See which processes hold files, listen on ports, or keep network connections open.", "recommendation": "You should see who is holding a file at a glance.", "tags": ["Process diagnostics","Open files","Network connections"], "compatibility": "Official releases include a macOS archive. Check the release page for system requirements.", "permissions": "Reads process and connection information. Follow your organization’s security rules on managed devices."},
    applite: { summary: "Install, update, and uninstall Homebrew Cask apps through a native interface. Applite can set up Homebrew for you.", recommendation: "Install apps without learning Terminal.", tags: ["Homebrew", "App updates", "GUI"], compatibility: "macOS 14+ · Intel and Apple Silicon · No existing Homebrew installation required", permissions: "Needs network access to download apps. Some installations may request administrator approval. Can reuse an existing Homebrew installation." },
    "github-desktop": {"summary": "Use a clear visual workflow for commits, branches, comparisons, and pull requests in everyday Git work.", "recommendation": "Git should be powerful without feeling punishing.", "tags": ["Git","Version control","Development"], "compatibility": "Official project releases include macOS installers for Apple Silicon and Intel.", "permissions": "Accesses local repositories you add and your signed-in GitHub account. Review changes before committing."},
    "vscodium": {"summary": "A community-built, open-source code editor distribution with familiar extensions and debugging workflows.", "recommendation": "Keep your editor capable, with less telemetry.", "tags": ["Code editor","Extensions","Development"], "compatibility": "macOS 12+", "permissions": "Extensions can access project files and the network. Install trusted extensions and read their permission notes."},
    "dbeaver": {"summary": "A universal database client for queries, schema browsing, and data import or export across many engines.", "recommendation": "One client for the databases you use.", "tags": ["Databases","SQL","Data management"], "compatibility": "Official releases include macOS DMG installers for Apple Silicon and Intel.", "permissions": "Stores database connections you create. Avoid saving privileged credentials on insecure networks."},
    "zed": {"summary": "A fast native code editor focused on collaboration, language tooling, and a fluid daily coding experience.", "recommendation": "Fast editing that keeps you in the flow.", "tags": ["Code editor","Collaboration","Native performance"], "compatibility": "Official releases include macOS DMG installers for Apple Silicon and Intel.", "permissions": "Projects, extensions, and collaboration may access files and the network. Check workspace and extension sources."},
    "codeedit": {"summary": "A native Mac code editor in development, with project browsing, syntax highlighting, a terminal, and Git integration.", "recommendation": "Try a native editor taking shape.", "tags": ["Code editor","Swift-native","Lightweight"], "compatibility": "Still in development; the project does not yet recommend it for production work. Check each release for macOS requirements.", "permissions": "Accesses project files you open. Review any extra access needed by language services or plugins."},
    "xcodes": {"summary": "Download, switch, and manage multiple Xcode versions in one place for different projects and systems.", "recommendation": "Manage multiple Xcode versions without hunting down installers.", "tags": ["Xcode","Dev environment","Version management"], "compatibility": "macOS 13+ · An Apple Account is required to download Xcode.", "permissions": "Manages Xcode files and your Apple Developer sign-in. Use official download sources and protect your account."},
    "vlc": {"summary": "The classic play-anything media player for local files, discs, streams, and less common codecs.", "recommendation": "If a video will not open, try VLC first.", "tags": ["Media player","Wide format support","Streaming"], "compatibility": "An official Universal macOS installer is available. Check the current VideoLAN release for compatibility.", "permissions": "Plays local files and network streams. Open only network addresses and playlists you trust."},
    "subtitle-edit": {"summary": "A complete subtitle editor for writing, proofreading, translating, and syncing subtitles with waveforms and spectrograms.", "recommendation": "When subtitles drift, do not drag them by eye.", "tags": ["Subtitles","Timeline","Speech recognition"], "compatibility": "Official releases include macOS DMG installers for Apple Silicon and Intel.", "permissions": "Processes selected media and subtitle files. Online speech recognition or translation may require additional access when used."},
    "subler": {"summary": "A native MP4/M4V packaging and metadata tool for organizing subtitles, audio tracks, artwork, and media details.", "recommendation": "Put the subtitles and artwork into the delivered file.", "tags": ["MP4","Subtitle muxing","Metadata"], "compatibility": "Official releases include a macOS archive. Check the release page for system requirements.", "permissions": "Modifies only the media files you select. Keep a copy of the originals before making changes."},
    "mediainfo": {"summary": "Inspect codecs, bit rates, tracks, colour, subtitles, and other technical facts inside media containers.", "recommendation": "Before delivery, know exactly what is in the file.", "tags": ["Codec details","Media inspection","Metadata"], "compatibility": "Official macOS installers are available. Choose the build for your Mac’s architecture.", "permissions": "Reads only the media files you open and their technical metadata."},
    "mixxx": {"summary": "Free DJ software with multiple decks, controller mappings, beat synchronization, and music library management.", "recommendation": "Serious mixing does not require a subscription.", "tags": ["DJ","Mixing","Music library"], "compatibility": "Download the Mac installer from the official site; the current stable GitHub release has no installers attached. Check the supported-controller list.", "permissions": "Accesses your selected music library. Grant controller or microphone access when needed."},
    "musescore": {"summary": "Create, edit, and engrave sheet music with MIDI, import/export, and a complete notation workflow.", "recommendation": "Write a score without renting notation software.", "tags": ["Sheet music","MIDI","Music creation"], "compatibility": "Official releases include a macOS DMG. Check the release page for system requirements.", "permissions": "Accesses scores you open or export and the audio devices you use. Check extension sources before installing."},
    "firefox": {"summary": "A mature open-source browser with sync, extensions, privacy controls, and capable developer tools.", "recommendation": "For a dependable browser, Firefox remains a first choice.", "tags": ["Browser","Extensions","Privacy"], "compatibility": "An official macOS DMG is available. Check the download page for current system requirements.", "permissions": "Websites request camera, microphone, location, or notification access as needed. Grant access only to sites you trust."},
    "zen-browser": {"summary": "An open-source Firefox-based browser that emphasizes workspaces, split views, and organized tabs for focused browsing.", "recommendation": "Lots of tabs still deserve room to focus.", "tags": ["Browser","Workspaces","Tab management"], "permissions": "Websites request camera, microphone, location, or notification access as needed. Grant access only to sites you trust.", "compatibility": "Official releases include a Universal macOS DMG for Apple Silicon and Intel."},
    "thunderbird": {"summary": "An open-source desktop email client that brings multiple accounts, calendars, contacts, RSS, and local search together.", "recommendation": "Bring multiple inboxes into one quiet desktop.", "tags": ["Email","Calendar","RSS"], "compatibility": "An official macOS installer is available. Check the download page for current requirements.", "permissions": "Signs in to your email and calendar accounts. Configure servers, OAuth access, and local mail storage as needed."},
    "signal": {"summary": "An open-source private messenger for messages and calls, with optional history transfer from a linked phone.", "recommendation": "Private conversations deserve verifiable end-to-end encryption.", "tags": ["Private messaging","End-to-end encryption","Cross-platform"], "compatibility": "An official macOS app is available. First install Signal on your phone and link the desktop app.", "permissions": "Calls and media sharing may request microphone, camera, and local file access. Grant only the access you need."},
    "blender": {"summary": "A complete 3D creation suite for modeling, materials, animation, rendering, and even video editing.", "recommendation": "Model, animate, and render in one capable tool.", "tags": ["3D creation","Modeling","Rendering"], "compatibility": "Blender 5.x for Mac supports Apple Silicon only. Intel Mac users should choose 4.5 LTS and check its hardware requirements.", "permissions": "Accesses projects you open, import, or export. Check the source before enabling add-ons or online assets."},
    "bruno": {"summary": "An open-source, offline-first API client that stores collections as local files and works well with Git.", "recommendation": "Test APIs without handing your work to a cloud first.", "tags": ["API testing","Offline-first","Git"], "compatibility": "Official releases include macOS DMG and PKG installers for Apple Silicon and Intel.", "permissions": "Sends requests to the API endpoints you configure and reads local collections. Keep keys out of shared repositories."},
    "kilobat-cli": { summary: "Diagnose network connections, latency, and DNS from Terminal. Get JSON output or use it as a local MCP server.", recommendation: "Find out why a connection fails.", tags: ["Command line", "Network diagnostics", "MCP"], compatibility: "macOS 14+; building through Homebrew requires Xcode 16+. This listing covers the free, open-source CLI. The separate desktop app is proprietary and has optional paid features.", permissions: "Diagnostics access the network. Some Wi-Fi names, filter status, and budget data require the separate desktop app and location permission. System-changing commands may need confirmation or administrator approval." },
    "mpv": {"summary": "A minimal media player with subtitles, scripts, detailed playback controls, and a command-line interface.", "recommendation": "Just the video, without the clutter.", "tags": ["Media player", "Scripting", "Command line"], "compatibility": "Follow the official macOS install guide for Homebrew, MacPorts, or prebuilt packages. Homebrew does not include an .app bundle; requirements vary by build. GPLv2+ by default, or LGPLv2.1+ when GPL components are disabled.", "permissions": "Reads selected media, subtitles, and configuration. Network playback and third-party scripts may access the internet."},
    "kodi": {"summary": "A media center for organizing local and network movies, shows, and music, with a remote-friendly interface.", "recommendation": "Turn scattered files into a media library.", "tags": ["Media center", "Library", "Big screen"], "compatibility": "Official stable installers support Intel and Apple Silicon on macOS 10.14 or later.", "permissions": "Reads media folders you add. Artwork lookup, network media, and add-ons use the internet; third-party add-ons have separate terms."},
    "cog": {"summary": "A native Mac audio player for lossless files, cue sheets, game music, and playlists, without importing a library first.", "recommendation": "Play your files without importing them.", "tags": ["Music player", "Lossless audio", "CUE"], "compatibility": "The current direct download requires macOS 12 or later and updates through Sparkle. An App Store edition is also available.", "permissions": "Reads authorized music folders. Online lyrics and Last.fm or ListenBrainz scrobbling connect when enabled."},
    "feishin": {"summary": "A desktop client for self-hosted music servers such as Navidrome and Jellyfin, with albums, playlists, and synced lyrics.", "recommendation": "A better front end for your music server.", "tags": ["Music player", "Self-hosted", "Lyrics"], "compatibility": "macOS releases include Intel and Apple Silicon installers. A compatible music server is required; this is not a standalone local-file player.", "permissions": "Connects to your configured music server. Online lyrics use external services; media-key control may request Accessibility access."},
    "gopeed": {"summary": "A download manager for HTTP, HTTPS, torrents, and magnets, with queues, browser integration, and extensions.", "recommendation": "One queue for links and torrents.", "tags": ["Download manager", "Magnet links", "Extensions"], "compatibility": "Stable macOS releases offer Intel, Apple Silicon, and Universal installers. Version 2.0 also has beta builds; the download link selects the latest stable release.", "permissions": "Downloads to selected folders. Torrent tasks exchange data with peers; installed extensions add their own network functions."},
    "ab-download-manager": {"summary": "Multi-connection downloads with resuming, categories, scheduled queues, and optional browser integration.", "recommendation": "Pause a large download and finish it later.", "tags": ["Resume downloads", "Queues", "Browser integration"], "compatibility": "Official releases include Intel and Apple Silicon DMGs. Browser integration uses an optional extension; resuming requires server support.", "permissions": "Reads download URLs and writes to selected folders. The optional browser extension receives download requests within its granted access."},
    "qbittorrent": {"summary": "An ad-free torrent and magnet client with queues, file selection, speed limits, and optional remote Web management.", "recommendation": "Torrent downloads without the ads.", "tags": ["BitTorrent", "Magnet links", "Queues"], "compatibility": "The official Mac download is currently 5.2.3 for macOS 13+. Other platforms may be newer; the project notes limited macOS maintenance. Source is GPLv2+; distributed binaries are GPLv3+.", "permissions": "Torrent downloads exchange data with peers. Remote Web management is optional and should be authenticated when enabled."},
    "transmission": {"summary": "A native Mac torrent client with a simple interface for magnets, speed limits, and seeding ratios.", "recommendation": "A clean Mac app for torrents.", "tags": ["BitTorrent", "Native Mac", "Magnet links"], "compatibility": "The current official Mac app requires macOS 12 or later and ships as a DMG. It uses a native interface rather than the Qt interface on other platforms.", "permissions": "Torrent tasks upload and download data with peers. Optional remote access exposes a management interface."},
    "aria2": {"summary": "A command-line downloader for HTTP, FTP, SFTP, BitTorrent, and Metalink, with batch tasks and RPC control.", "recommendation": "Put batch downloads in a script.", "tags": ["Command line", "Multiple protocols", "Batch downloads"], "compatibility": "Follow the project instructions for Homebrew or MacPorts on macOS. There is no GUI; stable releases are infrequent and the tool suits scripted workflows.", "permissions": "Connects to supplied URLs and writes downloads. Torrents exchange data with peers; configure RPC authentication for its intended scope."},
    "brave": {"summary": "A Chromium browser with Chrome extension support, built-in ad and tracker blocking, sync, and privacy controls.", "recommendation": "Keep your Chrome extensions, lose more ads.", "tags": ["Chromium", "Ad blocking", "Chrome extensions"], "compatibility": "The current stable release requires macOS 13+ and offers Intel, Apple Silicon, and Universal builds. Select Brave-Browser; Brave Origin is a separate paid edition. The core browser is free, with paid VPN and some AI services.", "permissions": "Sites request camera, microphone, and other access as needed. Sync, Rewards, AI, and other online features follow their own settings and service terms."},
    "floorp": {"summary": "A Firefox-based browser with workspaces, a sidebar, and extensive interface customization for multitasking.", "recommendation": "Give busy browsing a workspace.", "tags": ["Firefox-based", "Workspaces", "Customization"], "compatibility": "Official documentation lists macOS 10.15 or later. Releases provide a Universal DMG for Intel and Apple Silicon.", "permissions": "Sites and extensions request access as needed. Settings control sync, recommended extensions, and other network features."},
    "waterfox": {"summary": "An independent Firefox-based browser with a familiar extension ecosystem and its own privacy and interface settings.", "recommendation": "A different take on familiar Firefox browsing.", "tags": ["Firefox-based", "Browser", "Extensions"], "compatibility": "The official site offers a Universal DMG for macOS 10.15+ on Intel and Apple Silicon. GitHub releases mainly provide version notes.", "permissions": "Websites and extensions use the access you grant. Sync and other online services depend on your settings."},
    "helium": {"summary": "A Chromium browser in beta, with a minimal interface, content blocking, vertical tabs, and Chrome extension support.", "recommendation": "Try a simpler take on Chromium.", "tags": ["Chromium", "Content blocking", "Beta"], "compatibility": "macOS 13+; Intel and Apple Silicon DMGs are available. The project is explicitly in beta, so unexpected issues may occur. Auto-updates require Helium services to be enabled.", "permissions": "Helium services for extension proxying, filter lists, and updates connect according to your choices. Third-party assets retain their own licenses."},
    "bettercapture": {"summary": "A native menu bar recorder for screen, system audio, and microphone, with H.264, HEVC, and ProRes encoding.", "recommendation": "Screen and system audio, with less setup.", "tags": ["Native Mac", "System audio", "ProRes"], "compatibility": "The official requirement is macOS 15.2+. The current release provides an Apple Silicon DMG only, with no Intel installer.", "permissions": "Screen and system-audio recording require macOS permission. Microphone and camera access are granted when used; recordings are stored locally by default."},
    "openscreen": {"summary": "Turn a screen recording into a demo with auto-zoom, cursor effects, webcam overlays, editing, and MP4/GIF export.", "recommendation": "Record a demo, then polish it in place.", "tags": ["Demo recording", "Auto-zoom", "Video editing"], "compatibility": "Official DMGs support Intel and Apple Silicon. Recording and editing are free; development is active and formats may change. Optional cloud AI requires your own API key and may incur provider charges.", "permissions": "Requests Screen Recording, Accessibility, microphone, and camera access as needed. Optional bring-your-own-key AI sends requests to the selected provider."},
    "flameshot": {"summary": "Capture a region, then add arrows, text, highlights, and redactions before copying, saving, or optionally uploading it.", "recommendation": "Capture it and mark what matters.", "tags": ["Screenshots", "Annotations", "Cross-platform"], "compatibility": "Current 14.x Mac packages require macOS 15+ and provide separate Intel and Apple Silicon DMGs. Signing checks may appear on first launch.", "permissions": "Screenshots require Screen Recording permission. Saving and copying can stay local; upload actions send images to the configured service."},
    "screenity": {"summary": "A Chrome extension for recording tabs or the desktop, annotating while recording, and trimming, cropping, and exporting videos.", "recommendation": "Explain a browser task as you record it.", "tags": ["Browser extension", "Screen recording", "Live annotations"], "compatibility": "A Chrome/Chromium extension, not a standalone Mac app. Free recording and local export are available; Screenity Pro is a separate paid cloud service.", "permissions": "Captures the selected tab, desktop, microphone, or camera. Cloud saving and Pro sharing connect and upload the relevant content."},
    "yesplaymusic": {"summary": "A third-party NetEase Cloud Music client centered on playlists, albums, lyrics, and light or dark themes.", "recommendation": "A different interface for NetEase music.", "tags": ["NetEase music", "Third-party client", "Lyrics"], "compatibility": "Stable v0.4.11 (2026-10-10) offers Intel, Apple Silicon, and Universal Mac builds. Recent users report blocked logins, not established as Mac-specific. Availability depends on service APIs, account status, and track rights. The hosted demo was unavailable during this review; use the official releases for installation.", "permissions": "Login and playlists contact NetEase or third-party music APIs. Optional additional music sources connect to other services."}
  },
  ja: {
    "ytdownloader": {"summary": "YouTubeなどの動画・音声・再生リストを保存。画質の選択や複数URLの一括ダウンロードに対応。", "recommendation": "リンクを貼って、動画を手元に。", "tags": ["動画ダウンロード", "再生リスト", "音声抽出"], "compatibility": "Apple Silicon用とIntel用の公式ビルドがあります。macOS 27で実使用を確認。yt-dlpなどは公式手順に沿って用意してください。Mac版は未署名です。", "permissions": "ChromeのCookieを読むには、Chromeのアプリデータへのアクセスが必要です。macOS 27では「ファイルとフォルダ」のYTDownloaderでGoogle Chromeを有効にします。"},
    "macpacker": {"summary": "Mac向けの圧縮ファイル管理アプリ。ZIP・7zの作成、RARなどの閲覧・プレビュー、必要なファイルだけの取り出しに対応。", "recommendation": "全部解凍せず、必要なファイルだけ。", "tags": ["圧縮・解凍", "ZIP / 7z", "中身をプレビュー"], "compatibility": "現行版はmacOS 14.6以降が必要で、IntelとApple Siliconに対応。公式DMG・ZIPは署名・公証済みです。macOS 13対応は旧版v0.14.1までです。", "permissions": "選択した圧縮ファイルと保存先にアクセスします。Finder・Quick Look拡張は必要に応じて有効にします。"},
    "peazip": {"summary": "ZIP・7z・TARの作成やRARの解凍に対応する、クロスプラットフォームの圧縮ソフト。暗号化、分割、整合性チェックも備えています。", "recommendation": "形式が混在していても、一つで扱える。", "tags": ["圧縮・解凍", "多形式対応", "暗号化・分割"], "compatibility": "Intel用とApple Silicon用の公式Mac版があります。Developer IDによる署名がないため、初回起動がブロックされる場合があります。導入手順は公式案内を確認してください。", "permissions": "選択したファイルを読み書きし、指定先に保存します。Finderサービスの導入は任意です。圧縮とRARの解凍は無料で、RARの作成には対応していません。"},
    "macrar": {"summary": "ZIP・7z・TARの作成とRARの解凍に対応するMac向けアプリ。暗号化、分割、Finderのクイックアクションを使えます。", "recommendation": "Macでも、WinRARに近い操作感で。", "tags": ["圧縮・解凍", "RAR解凍", "Finder連携"], "compatibility": "macOS 13以降。Intel・Apple Silicon対応のUniversal版です。公式GitHubのDMG・ZIPは署名・公証済み。ZIP・7z・TARの作成とRARの解凍は無料です。", "permissions": "選択したファイルと保存先にアクセスし、Finderのクイックアクションは必要に応じて有効にします。RARの作成・変更には、別途有料のRARLAB製rarが必要です（試用あり）。MITはMacRARのソースコードに適用され、7-Zipなどの部品には各自のライセンスが適用されます。"},
    "shotmap": {"summary": "動画から自動で選んだコマを手動で調整。複数の動画を分割画像にまとめ、PNG / JPGで書き出せます。", "recommendation": "長い動画を、一枚で見返せる。", "tags": ["Swiftネイティブ","オフライン処理","動画","画像"], "compatibility": "macOS 13以降 · Intel / Apple Silicon", "permissions": "ローカルファイルへのアクセス：選択した動画だけを処理します。"},
    lumaview: { summary: "画像やPDFを軽快に閲覧。フォルダ内の画像送り、EXIF表示、拡大・回転、印刷に対応します。", recommendation: "画像を見るだけなら、軽くていい。", tags: ["Swiftネイティブ", "画像・PDF", "軽量"], compatibility: "macOS 12以降 · Intel / Apple Silicon", permissions: "選択した画像・PDF・フォルダへのアクセスが必要です。" },
    "mp4flow": {"summary": "動画をまとめてMP4に変換。カット・結合・画面調整に加え、音声トラックや字幕、目標ファイルサイズを選べます。", "recommendation": "MP4だけなら、重い編集ソフトは要らない。", "tags": ["Swiftネイティブ","ローカル処理","MP4"], "compatibility": "macOS 13以降 · Intel / Apple Silicon · FFmpeg / ffprobeが別途必要", "permissions": "ローカルファイルへのアクセス：選択した動画だけを処理します。"},
    "launchpad-back": {"summary": "従来のLaunchpadのグリッド、ページ、フォルダ、ドラッグ＆ドロップ、検索の操作感を再現します。", "recommendation": "アプリ探しを、手になじむ操作へ。", "tags": ["アプリ起動","グリッド","フォルダ"], "compatibility": "プロジェクトの要件：macOS 15.6以降。", "permissions": "配布版は公証されていません。起動前に、プロジェクトのGatekeeperに関する案内を確認してください。"},
    loop: { summary: "ドラッグ、ショートカット、フローティングメニューでウインドウを素早く整列。画面分割やマルチタスクに向いています。", recommendation: "ウインドウ整理は、ドラッグ一つで。", tags: ["ウインドウ管理", "ショートカット", "画面分割"], permissions: "ほかのアプリのウインドウを移動・リサイズするため、「アクセシビリティ」へのアクセスが必要です。", compatibility: "macOS 13以降 · Intel / Apple Silicon" },
    "alt-tab": { summary: "アプリではなくウインドウ単位で切り替え。サムネイル、最小化したウインドウ、複数ディスプレイに対応します。", recommendation: "アプリではなく、ウインドウを切り替える。", tags: ["ウインドウ切替", "複数ディスプレイ", "キーボード"], permissions: "ウインドウの読み取りと切り替えに、「アクセシビリティ」へのアクセスが必要です。", compatibility: "macOS 12以降 · ウィンドウ切り替えなどの基本機能は無料。検索や一部の外観設定は有料のPro機能です。" },
    "ice": {"summary": "メニューバーのアイコンを区分けし、隠すか常時表示するかを選べます。上部がツールで埋まるのを防ぎます。", "recommendation": "メニューバーを、物置にしない。", "tags": ["メニューバー","整理","軽量"], "compatibility": "macOS 14以降 · Intel / Apple Silicon", "permissions": "必要な権限は機能とmacOSのバージョンによって異なります。導入前に公式の権限説明を確認してください。"},
    "stats": {"summary": "CPU、メモリ、ディスク、ネットワーク、バッテリー、センサーなどの状態をメニューバーから確認できます。", "recommendation": "最適化の前に、まず状態を見る。", "tags": ["システム監視","メニューバー","パフォーマンス"], "compatibility": "macOS 12以降 · Intel / Apple Silicon", "permissions": "Wi-Fiのネットワーク名を表示する際に、位置情報の許可が必要な場合があります。その他の権限はシステムの案内に従って設定します。"},
    "monitorcontrol": {"summary": "DDC/CI対応ディスプレイの明るさと音量を調整。キーボードのメディアキーとも連携します。", "recommendation": "外部ディスプレイの調整に、ボタン探しは不要。", "tags": ["外部ディスプレイ","明るさ","DDC/CI"], "permissions": "外部ディスプレイをキーボードの標準輝度キーで操作するには、「アクセシビリティ」へのアクセスが必要です。", "compatibility": "DDC/CI対応ディスプレイが必要です。対応機種はプロジェクトの案内を確認してください。"},
    puremac: { summary: "ディスク使用量を確認し、アプリや開発用キャッシュを整理。削除前に対象を確認でき、アプリのアンインストールにも対応します。", recommendation: "消す前に、何が変わるかを知る。", tags: ["ストレージ分析", "クリーニング", "プレビュー"], permissions: "クリーニング機能は追加のファイルアクセスを求めることがあります。実行前に対象パスを一つずつ確認してください。", compatibility: "macOS 13以降" },
    purge: { summary: "キャッシュ、開発作業の残り、大きなファイルを確認して整理。通常のファイルは標準でゴミ箱へ移動します。", recommendation: "キャッシュを掃除するなら、まずこれ。", tags: ["キャッシュ削除", "大容量ファイル", "開発環境"], permissions: "フルディスクアクセスは任意です。より多くのフォルダをスキャンする必要があるときだけ検討してください。", compatibility: "macOS 13以降" },
    "libreoffice": {"summary": "無料のオープンソース文書・表計算・プレゼンテーションスイート。Officeファイルの閲覧、軽い編集、変換に使えます。", "recommendation": "Officeファイルをオフラインで扱うときの、頼れる選択肢。", "tags": ["文書","表計算","プレゼンテーション"], "compatibility": "現在のmacOS要件は、LibreOffice公式のダウンロードページで確認してください。", "permissions": "出所が不明な文書のマクロや外部リンクを開く際は注意してください。"},
    "zettlr": {"summary": "Markdown、引用管理、長文執筆を一つの作業環境にまとめる、研究・執筆向けのエディタです。", "recommendation": "原稿と引用を、自分のファイルに残せる。", "tags": ["Markdown","引用管理","長文執筆"], "compatibility": "macOSの要件は、プロジェクトの最新リリースで確認してください。", "permissions": "出所が不明なファイルやスクリプトを開く際は注意してください。"},
    "joplin": {"summary": "Markdown対応のノートアプリ。端末間同期やエンドツーエンド暗号化を、自分で選んだ保存先で利用できます。", "recommendation": "同期先を自分で選べるノート。", "tags": ["ノート","Markdown","同期"], "compatibility": "macOSデスクトップ版があります。必要な環境は最新リリースで確認してください。", "permissions": "同期先、暗号化パスワード、外部プラグインは自分で設定します。利用前にサービスとプラグインの提供元を確認してください。"},
    "iina": {"summary": "macOS向けに設計された動画プレーヤー。字幕、プレイリスト、各種動画・音声形式を軽快に扱えます。", "recommendation": "ローカル動画は、ただ気持ちよく再生したい。", "tags": ["動画再生","字幕","mpv"], "compatibility": "公式のmacOS版があります。必要な環境は現在のバージョンの案内を確認してください。", "permissions": "ローカル再生に追加の機密性の高い権限は不要です。ネットワーク配信や拡張機能を使う際は提供元を確認してください。"},
    "handbrake": {"summary": "動画を多様な形式へ変換できる、定番のオープンソース・トランスコーダーです。プリセットと詳細設定の両方を備えます。", "recommendation": "動画変換を、迷わず確実に。", "tags": ["動画変換","エンコード","プリセット"], "compatibility": "公式のmacOS版があります。必要な環境は現在のバージョンの案内を確認してください。", "permissions": "選択したローカルメディアを処理します。変換前に保存先と上書き設定を確認してください。"},
    "yt-dlp": {"summary": "多数の対応サイトから動画・音声を取得できる、機能豊富なコマンドラインツールです。", "recommendation": "許可された保存を、きちんと自動化。", "tags": ["コマンドライン","動画・音声","ダウンロード"], "compatibility": "Pythonまたはパッケージ管理ツールでmacOSに導入できます。公式の手順に従ってください。", "permissions": "保存する権利のあるコンテンツだけを取得し、サービスの利用規約、著作権、地域の法律に従ってください。"},
    "macshot": {"summary": "注釈、スクロールキャプチャ、OCR、画面収録、簡易編集を一つにまとめたネイティブのキャプチャツールです。", "recommendation": "撮影から注釈まで、これ一つで。", "tags": ["スクリーンショット","画面収録","スクロールキャプチャ"], "permissions": "撮影・録画には「画面収録」許可が必要です。音声録音では「マイク」、グローバル操作では必要に応じて「アクセシビリティ」または「入力監視」を求めます。", "compatibility": "ネイティブのmacOS版があります。現在のバージョンの動作要件を確認してください。"},
    "imageoptim": {"summary": "画像をドラッグ＆ドロップで最適化し、見た目を保ちながらファイルサイズを小さくします。", "recommendation": "公開前の画像を、軽く整える。", "tags": ["画像圧縮","最適化","ドラッグ＆ドロップ"], "compatibility": "macOSネイティブアプリです。現在の動作要件は公式サイトで確認してください。", "permissions": "ドラッグまたは選択した画像だけを処理します。元に戻せるよう、原本を残しておくことをおすすめします。"},
    "krita": {"summary": "イラスト、コンセプトアート、コミック制作に対応する、機能豊富なデジタルペイントソフトです。", "recommendation": "描くための道具が、ここにある。", "tags": ["デジタルペイント","イラスト","PSD"], "compatibility": "macOS版を配布しています。現在の動作要件は公式サイトで確認してください。", "permissions": "出所が不明な素材集やスクリプトを読み込む前に、提供元を確認してください。"},
    rectangle: { summary: "ショートカットやスナップ領域でウインドウを移動・リサイズし、画面を素早く整えます。", recommendation: "ウインドウの置き場所を、迷わず決める。", tags: ["ウインドウ整列", "ショートカット", "スナップ"], permissions: "ほかのアプリのウインドウを操作するため、「アクセシビリティ」へのアクセスが必要です。", compatibility: "最新版はmacOS 14以降が必要です。macOS 10.15〜13では1.100を利用できます。" },
    "aerospace": {"summary": "i3のようなキーボード中心の操作で、ウインドウをタイル状に配置するmacOS向けウインドウマネージャです。", "recommendation": "キーボードで、ウインドウを整列。", "tags": ["タイル型WM","キーボード操作","ワークスペース"], "permissions": "ウインドウ操作に「アクセシビリティ」へのアクセスが必要です。公式バイナリは未公証と明記されているため、配布元と更新情報を確認して導入してください。", "compatibility": "macOS向けの導入手順があります。現在の制限事項と設定方法を先に確認してください。"},
    "maccy": {"summary": "コピー履歴を軽量に保存し、必要な内容をすばやく呼び出せるクリップボードマネージャです。", "recommendation": "さっきコピーしたものを、すぐ戻せる。", "tags": ["クリップボード","履歴","軽量"], "compatibility": "macOS 14以降", "permissions": "クリップボードの履歴を保存します。保存したくないパスワードや鍵などの機密情報はコピーしないよう注意してください。"},
    "karabiner-elements": {"summary": "キーの入れ替え、複合キー、デバイス別設定まで扱える、macOS向けの高機能キーボードカスタマイザーです。", "recommendation": "合わないキー配置を、自分で変える。", "tags": ["キーリマップ","キーボード","高度な設定"], "permissions": "キー入力を扱うため、「入力監視」と「アクセシビリティ」、システム拡張の許可が必要です。公式配布パッケージから導入し、設定内容を確認してください。", "compatibility": "macOS用のインストーラがあります。対応するOSの範囲は公式サイトで確認してください。"},
    "dupeguru": {"summary": "ファイル名や内容を比較して重複ファイルを探し、削除候補を自分で確認できるツールです。類似画像の検索にも対応します。", "recommendation": "重複を見つけてから、削除を決める。", "tags": ["重複ファイル","類似画像","ストレージ整理"], "compatibility": "macOS版を配布しています。現在のバージョンの案内は公式サイトで確認してください。", "permissions": "削除前に結果を一件ずつ確認してください。同じ内容のファイルでも、用途が異なる場合があります。"},
    "logseq": {"summary": "アウトライン、ブロック参照、双方向リンクでノートやタスクを整理。現在の2.xデータベース版はベータ版です。", "recommendation": "散らばったメモを、つながる知識に。", "tags": ["ノート","ローカル優先","ナレッジ管理"], "compatibility": "2.xデータベース版はベータ版です。従来のMarkdown / Orgファイル版はLogseq OGへ移行しました。移行前にバックアップしてください。", "permissions": "同期、プラグイン、外部サービスを使う前に、データの扱いと必要な権限を確認してください。"},
    "drawio-desktop": {"summary": "フローチャート、構成図、UMLなどをオフラインで作成。一般的な形式の読み込みと書き出しに対応します。", "recommendation": "図はオンラインのホワイトボードに預けなくていい。", "tags": ["図表作成","フローチャート","オフライン"], "compatibility": "公式リリースでmacOS用のUniversal版を配布しています。", "permissions": "外部のテンプレートや設定ファイルを開く前に、提供元を確認してください。"},
    "obs-studio": {"summary": "シーン、映像・音声ソース、ミキサーをまとめて扱える、録画・配信向けのオープンソーススタジオです。", "recommendation": "録画も配信も、一つの作業場所で。", "tags": ["画面収録","ライブ配信","シーン"], "permissions": "画面を取り込むには「画面収録」が必要です。カメラとマイクは使う機能に応じて許可してください。", "compatibility": "公式リリースでApple Silicon用とIntel用のmacOS版を配布しています。"},
    "lossless-cut": {"summary": "キーフレームを基準に動画・音声をすばやく切り出し、可能な限り再エンコードを避けます。", "recommendation": "一部を切るだけなら、全編を再エンコードしない。", "tags": ["ロスレスカット","動画","FFmpeg"], "compatibility": "現行版はmacOS 11に対応していません。Apple Silicon用とIntel用の配布版があります。", "permissions": "ローカルメディアを処理し、開くか読み込むことを選んだファイルだけにアクセスします。"},
    "audacity": {"summary": "録音、編集、ノイズ除去、形式変換まで対応する、定番のマルチトラック音声エディタです。", "recommendation": "音声を詰めるなら、きちんとしたタイムラインで。", "tags": ["音声編集","録音","ノイズ除去"], "compatibility": "プロジェクトのリリースでmacOS版を配布しています。現在の動作要件を確認してください。", "permissions": "録音にはマイクの許可が必要です。読み込むファイルの提供元も確認してください。"},
    "mangodisk": {"summary": "ディスク使用量、重複ファイル、削除可能なアプリを確認してから、整理の対象を選べます。", "recommendation": "削除前に、容量を使っている項目を確認。", "tags": ["ディスク分析","アンインストール","重複ファイル"], "compatibility": "プロジェクトの最新リリースとmacOSの動作要件を確認してください。", "permissions": "ディスクの分析や整理には、追加のファイルアクセス権限が必要な場合があります。削除前に各項目を確認してください。"},
    "netnewswire": {"summary": "軽快でローカル優先のRSSリーダー。サイトやブログの更新を、静かな受信箱にまとめます。", "recommendation": "お気に入りのサイトを、デスクトップでまとめて読める。", "tags": ["RSS","読む","ローカル優先"], "compatibility": "プロジェクトの公式リリースでmacOS版を配布しています。", "permissions": "設定に従ってネットワークに接続し、購読フィードを更新します。"},
    "appflowy": {"summary": "文書、データベース、プロジェクトをまとめるローカル優先のワークスペース。必要に応じて同期や共同作業も選べます。", "recommendation": "ノートもタスクも、手元に残せる。", "tags": ["文書","データベース","ローカル優先"], "compatibility": "macOS向けにApple Silicon・Intel・Universal版を配布しています。", "permissions": "クラウドのワークスペースに接続する前に、同期と共有の範囲を確認してください。"},
    "onlyoffice": {"summary": "文書・表計算・プレゼン・PDFをオフラインで編集。Office形式のファイルやPDFフォームにも対応します。", "recommendation": "Office互換が必要なら、まずこれ。", "tags": ["Office互換","文書","表計算"], "compatibility": "macOS 10.13以降 · Intel / Apple Silicon向けを配布", "permissions": "出所が不明な文書のマクロ、外部リンク、埋め込みコンテンツを開く際は注意してください。"},
    "qownnotes": {"summary": "普通のMarkdownファイルを軸にしたノートアプリ。フォルダやNextcloudと組み合わせて使えます。", "recommendation": "ノートはファイル。どこへでも持っていける。", "tags": ["Markdown","ノート","Nextcloud"], "compatibility": "プロジェクトの公式リリースでmacOS版を配布しています。", "permissions": "指定したノートフォルダだけにアクセスします。同期サービスは自分で設定します。"},
    "koodo-reader": {"summary": "EPUB、PDF、MOBIなどをオフラインで読める電子書籍リーダー。注釈、ノート、ローカル書庫に対応します。", "recommendation": "自分の書庫を、特定のサービスに縛られない。", "tags": ["電子書籍","PDF","ローカル書庫"], "compatibility": "公式リリースにApple Silicon用とIntel用のmacOS版があります。", "permissions": "読み込みや同期を行う書籍とノートは自分で選択します。"},
    "darktable": {"summary": "RAW写真の管理と非破壊編集に向く、オープンソースの暗室ワークフローです。", "recommendation": "RAWを本気で仕上げるなら、サブスクなしで。", "tags": ["RAW","カラー調整","写真管理"], "compatibility": "現行5.6.2の公式MacインストーラーはApple Silicon版のみです。OS要件はダウンロードページを確認し、Intelでは旧版を探してください。", "permissions": "読み込んだ写真フォルダを処理します。元の写真のバックアップを残しておくことをおすすめします。"},
    "rawtherapee": {"summary": "露出、シャープネス、色を細かく追い込める、高品質なRAW現像ソフトです。", "recommendation": "カメラの原データから、細部を取り戻す。", "tags": ["RAW","現像","色"], "compatibility": "現行のmacOS版はUniversalのZIP形式です。必要なmacOSバージョンはダウンロードページで確認してください。", "permissions": "読み込んだ写真にアクセスします。原本と書き出したファイルは別のフォルダに保存することをおすすめします。"},
    amethyst: { summary: "複数のレイアウトとショートカットを備えた、使い始めやすい自動タイル型ウインドウマネージャです。", recommendation: "ウインドウは任せて、作業に集中。", tags: ["自動タイル", "ウインドウ管理", "ショートカット"], permissions: "ほかのアプリのウインドウを読み取り・整列するため、「アクセシビリティ」へのアクセスが必要です。", compatibility: "macOS 10.15以降" },
    "thaw": {"summary": "メニューバーのアイコンを整理、非表示、検索。上部がアイコンだらけでも使いやすくします。", "recommendation": "メニューバーをすっきり整理。", "tags": ["メニューバー","アイコン整理","検索"], "compatibility": "安定版2.1はmacOS 26専用。3.xベータ版はmacOS 27が必要です。古いOS向けはReleasesで対応版を確認してください。", "permissions": "メニューバーの管理には、macOSのバージョンによってアクセシビリティなどの権限が必要な場合があります。"},
    "linearmouse": {"summary": "外付けマウスやトラックパッドごとに、スクロール、ポインタ、加速感を設定できます。", "recommendation": "外付けマウスも、自分の手になじむ。", "tags": ["マウス","トラックパッド","スクロール"], "permissions": "入力デバイスの設定を適用するため、「アクセシビリティ」へのアクセスが必要です。", "compatibility": "プロジェクトの公式リリースでmacOS版を配布しています。"},
    "background-music": { summary: "アプリごとの音量を個別に調整し、必要ならシステム音声も録音できます。", recommendation: "一つのアプリに、突然大きな音を出させない。", tags: ["アプリ別音量", "システム音声", "録音"], permissions: "オーディオドライバを導入します。録音では「マイク」許可を求めることがあります。", compatibility: "macOS 10.13以降" },
    "keeping-you-awake": {"summary": "決めた時間だけMacの自動スリープを防止。ダウンロード、デモ、転送時に便利です。", "recommendation": "眠らせたくないときは、起こしておく。", "tags": ["スリープ防止","メニューバー","タイマー"], "compatibility": "macOS 10.13以降", "permissions": "個人ファイルは読み取らず、必要に応じてシステムのスリープ防止機能を使います。"},
    "latest": {"summary": "Mac App StoreのアプリやSparkle対応アプリの更新をまとめて確認・実行できます。", "recommendation": "アプリを一つずつ開かずに、更新を確認。", "tags": ["アプリ更新","確認","軽量"], "compatibility": "macOS 10.15以降", "permissions": "インストール済みアプリの情報を読み取って更新を確認します。更新の実行は自分で判断できます。"},
    layoutkeeper: { summary: "外付けディスプレイの再接続時にウィンドウ配置を復元。明るさ連動やスリープ防止にも対応します。", recommendation: "つなぎ直して、元の配置へ。", tags: ["外付けディスプレイ", "ウィンドウ配置", "スリープ防止"], compatibility: "macOS 14以降 · Intel / Apple Silicon。Spaces間の復元はmacOS 26以降が必要です。ハードウェア輝度調整はApple SiliconとDDC対応ディスプレイが必要です。", permissions: "「アクセシビリティ」が必要です。画面収録・入力監視は不要です。配布版は自己署名で、Appleの公証を受けていません。" },
    "localsend": {"summary": "クラウドを経由せず、同じネットワーク内でファイル、テキスト、クリップボードを直接送れます。", "recommendation": "送る前に、アップロードしなくていい。", "tags": ["ローカル転送","クロスプラットフォーム","クラウド不要"], "compatibility": "プロジェクトの公式リリースでmacOS版を配布しています。", "permissions": "ローカルネットワークで端末を検出し、ファイルを転送します。確認できる端末とファイルだけを受け入れてください。"},
    "openmtp": {"summary": "MacとAndroidなどのMTP機器の間で、ファイルを直接ブラウズ、ドラッグ、転送できます。", "recommendation": "Androidとのファイル転送も、Macから手軽に。", "tags": ["Android","MTP","ファイル転送"], "compatibility": "macOS 11以降", "permissions": "USBで接続して許可した端末と、選択したローカルファイルにアクセスします。"},
    "kopia": {"summary": "スナップショット、重複排除、暗号化を備え、ローカルや各種リモート保存先にバックアップできます。", "recommendation": "バックアップは、復元できて初めて役に立つ。", "tags": ["バックアップ","スナップショット","暗号化"], "compatibility": "公式リリースにApple Silicon用とIntel用のmacOS版があります。", "permissions": "選択したバックアップ元を読み取り、保存先に書き込みます。本格的な運用前に復元を試してください。"},
    "syncthing": {"summary": "指定したフォルダを端末同士で直接同期。第三者のクラウドにファイルを預ける必要はありません。", "recommendation": "同期しても、ファイルを手放さない。", "tags": ["ファイル同期","エンドツーエンド","分散型"], "compatibility": "公式macOS版はコマンドラインプログラムの圧縮ファイルで、設定はブラウザから行います。CPUに合う版を選んでください。", "permissions": "同期する範囲は自分で選択します。共有フォルダごとに接続端末とバージョンの保存設定を確認してください。"},
    "cryptomator": {"summary": "クラウドドライブへ送る前にファイルをローカルで暗号化。鍵は自分で管理します。", "recommendation": "クラウドへ行く前に、ファイルをロック。", "tags": ["暗号化","クラウドドライブ","プライバシー"], "compatibility": "公式リリースにApple Silicon用とIntel用のmacOS版があります。", "permissions": "選択した保管庫と同期フォルダにアクセスします。復旧キーとパスワードを安全に保管してください。"},
    "lulu": {"summary": "アプリごとに外向きのネットワーク接続を監視し、許可またはブロックするルールを作れます。", "recommendation": "どのアプリをネットにつなぐかは、自分で決める。", "tags": ["ファイアウォール","ネットワーク接続","プライバシー"], "compatibility": "プロジェクトのリリースでmacOS版を配布しています。現在の動作要件を確認してください。", "permissions": "ネットワークをフィルタリングするシステム拡張を導入し、管理者の承認を求めます。事前に公式の手順を確認してください。"},
    "utm": {"summary": "QEMUとAppleの仮想化フレームワークで別のOSを実行。仮想化に加え、異なるCPU構成のエミュレーションにも対応します。", "recommendation": "別のOSが必要でも、別のPCは要らない。", "tags": ["仮想マシン","QEMU","開発・テスト"], "compatibility": "公式リリースでUTM.dmgを配布しています。利用できるゲストOSは、Macのアーキテクチャとシステムイメージによって異なります。", "permissions": "仮想マシンは、接続したフォルダと設定されたネットワークにアクセスできます。信頼できないイメージに個人ファイルを公開しないでください。"},
    "alacritty": {"summary": "応答が速く、設定も明快なクロスプラットフォーム端末。コマンドラインを日常的に使う人向けです。", "recommendation": "端末は速く、派手でなくていい。", "tags": ["ターミナル","開発","GPUレンダリング"], "compatibility": "公式リリースでmacOS用のDMGを配布しています。", "permissions": "ターミナルのコマンドは、利用中のアカウントと同じ権限で実行されます。内容を理解できるコマンドだけを実行してください。"},
    "espanso": {"summary": "短い入力からテンプレート、日付、定型文を展開し、繰り返し入力を減らします。", "recommendation": "いつもの言葉を、何度も打たない。", "tags": ["テキスト展開","テンプレート","自動化"], "compatibility": "公式リリースでmacOS用のUniversal版を配布しています。", "permissions": "キーボード入力の監視には、公式手順に沿った権限設定が必要です。信頼できないテンプレートに機密情報を入れないでください。"},
    "hammerspoon": {"summary": "Luaでショートカット、ウインドウ、メニューバー、システム操作を自分のワークフローにつなげます。", "recommendation": "繰り返す操作は、スクリプトへ。", "tags": ["Lua","自動化","ショートカット"], "permissions": "自動化スクリプトは「アクセシビリティ」、ファイル、ネットワークへのアクセスを求めることがあります。確認済みの設定だけを実行してください。", "compatibility": "プロジェクトのリリースでmacOS版を配布しています。現在の動作要件を確認してください。"},
    "swiftbar": {"summary": "スクリプトの出力をメニューバーツールに変え、状態表示、リマインダー、独自の操作を置けます。", "recommendation": "よく見る情報を、ターミナルの外へ。", "tags": ["メニューバー","スクリプト","自動化"], "compatibility": "macOS 12以降", "permissions": "有効にしたスクリプトを実行します。内容を確認でき、提供元を信頼できるプラグインだけを追加してください。"},
    "anki": {"summary": "間隔反復と柔軟なカードで、学習内容を長く記憶に残せます。必要に応じて自分の教材を同期できます。", "recommendation": "長く覚えるなら、一度読むだけにしない。", "tags": ["暗記カード","間隔反復","学習"], "compatibility": "公式リリースでApple Silicon用とIntel用のmacOS DMGを配布しています。", "permissions": "任意の同期機能は、選択したデッキとメディアをアップロードします。機密情報を含める前に同期設定を確認してください。"},
    "super-productivity": {"summary": "タスク、時間記録、ポモドーロ、プロジェクトのリズムを一か所で扱うローカル優先の作業台です。", "recommendation": "今日の仕事を、四つのアプリに散らさない。", "tags": ["タスク","時間記録","ポモドーロ"], "compatibility": "公式リリースにUniversal、Apple Silicon、Intel向けのmacOS DMGがあります。", "permissions": "ローカルでの利用にアカウントは不要です。外部のタスク管理サービスに接続する場合は、必要な範囲だけ許可してください。"},
    "tablepro": {"summary": "SQL・NoSQLデータベースの閲覧・編集・クエリ実行に対応するMacネイティブクライアント。データの入出力も行えます。", "recommendation": "一件のデータ確認に、重いIDEは要らない。", "tags": ["データベース","SQL","Macネイティブ"], "compatibility": "macOS 13以降", "permissions": "データベースへの接続前に、ホスト、アカウント、ネットワーク範囲を確認してください。信頼できる接続設定だけを使ってください。"},
    "kap": {"summary": "macOS向けの軽量な画面収録ツール。手早く見やすいデモを作るのに向いています。", "recommendation": "デモを撮るだけなら、配信スタジオは要らない。", "tags": ["画面収録","GIF","デモ"], "compatibility": "プロジェクトの公式リリースにApple Silicon用とIntel用のmacOS版があります。", "permissions": "画面の録画にはmacOSの画面収録の許可が必要です。音声も録る場合はマイクのアクセスを許可してください。"},
    "jellyfin-media-player": {"summary": "自分のJellyfinサーバーに接続し、映画・音楽・番組を再生。旧称はJellyfin Media Playerです。", "recommendation": "自分のライブラリには、自分のプレーヤーを。", "tags": ["メディアセンター","Jellyfin","自前のライブラリ"], "compatibility": "安定版v1.12はmacOS 13以降に対応。配布ファイル名はJellyfin Media Playerのままです。Jellyfinサーバーが必要です。", "permissions": "指定したサーバーとメディア用アカウントに接続します。信頼できるサーバーだけを利用してください。"},
    "godot": {"summary": "2D、3D、インタラクティブ作品をMacで作れる、親しみやすく本格的なオープンソースゲームエンジンです。", "recommendation": "エンジンを買う前に、遊べるアイデアを作る。", "tags": ["ゲームエンジン","2D","3D"], "compatibility": "公式リリースでmacOS用のUniversal版を配布しています。", "permissions": "外部のプロジェクトを開くと、ビルドスクリプトの実行や素材の読み込みが行われる場合があります。信頼できるプロジェクトだけを実行してください。"},
    "freecad": {"summary": "部品、技術図面、変更に強い設計のためのパラメトリック3Dモデラーです。", "recommendation": "寸法変更に耐えるモデルこそ、きちんと作る価値がある。", "tags": ["3Dモデリング","CAD","パラメトリック"], "compatibility": "公式リリースでApple Silicon用とIntel用のmacOS DMGを配布しています。", "permissions": "開くか書き出すことを選んだ設計ファイルを処理します。外部のワークベンチやマクロは提供元を確認してください。"},
    "keepassxc": {"summary": "自分で管理する暗号化データベースにパスワードを保存。オフライン利用とブラウザー連携に対応します。", "recommendation": "パスワード保管庫は、自分の手元に。", "tags": ["パスワード管理","オフライン優先","暗号化"], "compatibility": "公式リリースでApple Silicon用とIntel用のmacOS DMGを配布しています。", "permissions": "ブラウザーの自動入力には、公式拡張機能の導入と接続の許可が必要です。マスターパスワードと鍵ファイルを安全に保管してください。"},
    "cyberduck": {"summary": "SFTP、WebDAV、S3、各種クラウドストレージを、ブックマークと分かりやすい転送画面で扱えます。", "recommendation": "サーバーのファイルも、Finderのように扱える。", "tags": ["SFTP","クラウドストレージ","ファイル転送"], "compatibility": "公式サイトでmacOS版を配布しています。プロトコルとサーバーの対応状況は公式の案内を確認してください。", "permissions": "選択したサーバーのブックマークと認証情報を保存します。鍵やキーチェーンを活用し、アクセストークンを安全に管理してください。"},
    finetune: { summary: "アプリごとに音量と出力先を設定。10バンドのイコライザーで音質も調整できます。", recommendation: "アプリごとに、ちょうどいい音量。", tags: ["アプリ別音量", "音声ルーティング", "イコライザー"], compatibility: "macOS 15以降", permissions: "アプリの音声を取得・調整するため、「画面収録とシステムオーディオ録音」の権限が必要です。" },
    "onlyswitch": {"summary": "隠しファイル、外観、低電力モードなど、よく使うmacOSの切り替えをメニューバーに置けます。", "recommendation": "一つの切り替えに、設定を三階層たどらない。", "tags": ["メニューバー","システム設定","効率化"], "compatibility": "公式リリースでmacOS用のDMGを配布しています。利用できるスイッチはmacOSのバージョンによって異なります。", "permissions": "一部の機能はシステムサービスを利用したり、権限を求めたりします。内容を理解できる機能だけを有効にしてください。"},
    "sloth": {"summary": "どのプロセスがファイルを開き、ポートを待ち受け、ネットワーク接続を維持しているか確認できます。", "recommendation": "どのプロセスがファイルを掴んでいるか、ひと目で分かる。", "tags": ["プロセス診断","開いているファイル","ネットワーク接続"], "compatibility": "公式リリースでmacOS版の圧縮ファイルを配布しています。動作要件はリリースページを確認してください。", "permissions": "プロセスと接続の情報を読み取ります。管理対象の端末では、組織のセキュリティ方針に従ってください。"},
    applite: { summary: "Homebrew Caskのアプリを画面操作でインストール・更新・削除。Homebrewの準備も自動で行えます。", recommendation: "ターミナルを覚えずにアプリ管理。", tags: ["Homebrew", "アプリ更新", "GUI"], compatibility: "macOS 14以降 · Intel / Apple Silicon · Homebrewの事前インストールは不要", permissions: "ダウンロード時にネット接続が必要です。一部のインストールでは管理者認証を求められます。既存のHomebrewも利用できます。" },
    "github-desktop": {"summary": "コミット、ブランチ、比較、プルリクエストを視覚的な流れで扱える、日常のGit作業向けアプリです。", "recommendation": "Gitは強力であっても、怖くなくていい。", "tags": ["Git","バージョン管理","開発"], "compatibility": "プロジェクトの公式リリースにApple Silicon用とIntel用のmacOS版があります。", "permissions": "追加したローカルリポジトリとログイン中のGitHubアカウントにアクセスします。コミット前に変更内容を確認してください。"},
    "vscodium": {"summary": "馴染みある拡張機能とデバッグの流れを備えた、コミュニティビルドのオープンソースコードエディタです。", "recommendation": "便利なエディタを、より少ないテレメトリーで。", "tags": ["コードエディタ","拡張機能","開発"], "compatibility": "macOS 12以降", "permissions": "拡張機能はプロジェクトのファイルやネットワークにアクセスできます。信頼できる拡張機能を選び、権限の説明を確認してください。"},
    "dbeaver": {"summary": "多様なDBに対応する汎用クライアント。クエリ、スキーマ閲覧、データ入出力をまとめて扱えます。", "recommendation": "よく使うデータベースを、一つのツールで。", "tags": ["データベース","SQL","データ管理"], "compatibility": "公式リリースでApple Silicon用とIntel用のmacOS DMGを配布しています。", "permissions": "作成したデータベース接続を保存します。安全でないネットワークでは、強い権限を持つ認証情報を保存しないよう注意してください。"},
    "zed": {"summary": "共同作業、言語ツール、日々の滑らかなコーディング体験に焦点を当てた高速ネイティブコードエディタです。", "recommendation": "エディタの待ち時間を減らして、流れを止めない。", "tags": ["コードエディタ","共同作業","ネイティブ性能"], "compatibility": "公式リリースでApple Silicon用とIntel用のmacOS DMGを配布しています。", "permissions": "プロジェクト、拡張機能、共同作業ではファイルやネットワークにアクセスする場合があります。ワークスペースと拡張機能の提供元を確認してください。"},
    "codeedit": {"summary": "開発中のMacネイティブコードエディター。プロジェクト閲覧、構文強調、ターミナル、Git連携を試せます。", "recommendation": "育っていくネイティブエディターを試す。", "tags": ["コードエディタ","Swiftネイティブ","軽量"], "compatibility": "現在も開発中で、公式はまだ実務での利用を推奨していません。macOSの要件は各リリースを確認してください。", "permissions": "開いたプロジェクトのファイルにアクセスします。言語サービスやプラグインに追加のアクセスが必要な場合は、個別に確認してください。"},
    "xcodes": {"summary": "異なるプロジェクトやOS向けに、複数のXcodeを一か所でダウンロード、切り替え、管理できます。", "recommendation": "複数のXcodeを、探し回らずに管理。", "tags": ["Xcode","開発環境","バージョン管理"], "compatibility": "macOS 13以降 · XcodeのダウンロードにはApple Accountが必要です。", "permissions": "XcodeのファイルとApple Developerのログイン状態を管理します。公式の配布元を利用し、アカウントを安全に管理してください。"},
    "vlc": {"summary": "ローカルファイル、ディスク、ストリーム、珍しいコーデックまで扱える、定番の万能メディアプレーヤーです。", "recommendation": "開けない動画があれば、まずVLC。", "tags": ["メディアプレーヤー","幅広い形式","ストリーミング"], "compatibility": "公式のmacOS Universal版があります。対応環境はVideoLANの現在のリリースで確認してください。", "permissions": "ローカルファイルとネットワーク配信を再生します。信頼できるURLとプレイリストだけを開いてください。"},
    "subtitle-edit": {"summary": "波形やスペクトログラムを見ながら、字幕の作成、校正、翻訳、同期まで行える総合エディタです。", "recommendation": "字幕のずれを、目だけで直さない。", "tags": ["字幕","タイムライン","音声認識"], "compatibility": "公式リリースでApple Silicon用とIntel用のmacOS DMGを配布しています。", "permissions": "選択したメディアと字幕ファイルを処理します。オンラインの音声認識や翻訳には、利用に応じて追加の許可が必要な場合があります。"},
    "subler": {"summary": "字幕、音声トラック、アートワーク、メタデータを整理できる、MP4/M4V向けネイティブ編集ツールです。", "recommendation": "納品前に、字幕と表紙を一つのファイルへ。", "tags": ["MP4","字幕mux","メタデータ"], "compatibility": "公式リリースでmacOS版の圧縮ファイルを配布しています。動作要件はリリースページを確認してください。", "permissions": "選択したメディアファイルだけを変更します。操作前に原本のコピーを残してください。"},
    "mediainfo": {"summary": "映像・音声コンテナ内のコーデック、ビットレート、トラック、色、字幕などの技術情報を確認できます。", "recommendation": "納品前に、ファイルの中身を正確に知る。", "tags": ["コーデック情報","メディア検査","メタデータ"], "compatibility": "公式のmacOS版があります。Macのアーキテクチャに合う配布版を選んでください。", "permissions": "開いたメディアファイルと、その技術的なメタデータだけを読み取ります。"},
    "mixxx": {"summary": "複数デッキのミックス、コントローラー設定、ビート同期、音楽ライブラリ管理に対応する無料のDJソフトです。", "recommendation": "本格的なミックスに、サブスクは要らない。", "tags": ["DJ","ミキシング","音楽ライブラリ"], "compatibility": "Mac用インストーラーは公式サイトから入手できます。現在のGitHub安定版には添付されていません。対応コントローラーは公式一覧を確認してください。", "permissions": "選択した音楽ライブラリにアクセスします。コントローラーやマイクを使う場合は、必要な権限を許可してください。"},
    "musescore": {"summary": "MIDI、読み書き、出力を備えた本格的なワークフローで、楽譜の作成、編集、レイアウトができます。", "recommendation": "楽譜を、無料のソフトで作成・編集。", "tags": ["楽譜","MIDI","音楽制作"], "compatibility": "公式リリースでmacOS用のDMGを配布しています。動作要件はリリースページで確認してください。", "permissions": "開くか書き出すことを選んだ楽譜と、利用するオーディオ機器にアクセスします。拡張機能の導入前に提供元を確認してください。"},
    "firefox": {"summary": "同期、拡張機能、プライバシー設定、開発者ツールを備えた、成熟したオープンソースブラウザーです。", "recommendation": "迷ったら、まずFirefoxを。", "tags": ["ブラウザー","拡張機能","プライバシー"], "compatibility": "公式のmacOS用DMGがあります。現在の動作要件はダウンロードページで確認してください。", "permissions": "カメラ、マイク、位置情報、通知などの権限は、利用するサイトが必要に応じて要求します。信頼できるサイトにだけ許可してください。"},
    "zen-browser": {"summary": "Firefoxを基盤に、ワークスペース、分割表示、タブ整理に力を入れたオープンソースブラウザーです。", "recommendation": "タブが多くても、集中できる場所を。", "tags": ["ブラウザー","ワークスペース","タブ管理"], "permissions": "カメラ、マイク、位置情報、通知などの権限は、利用するサイトが必要に応じて要求します。信頼できるサイトにだけ許可してください。", "compatibility": "公式リリースにApple SiliconとIntelに対応したmacOS Universal版のDMGがあります。"},
    "thunderbird": {"summary": "複数のメール、カレンダー、連絡先、RSS、ローカル検索をまとめて扱えるオープンソースのメールクライアントです。", "recommendation": "複数の受信箱を、一つの静かなデスクトップへ。", "tags": ["メール","カレンダー","RSS"], "compatibility": "公式のmacOS版があります。現在の動作要件はダウンロードページで確認してください。", "permissions": "メールとカレンダーのアカウントにログインします。サーバー、OAuth認証、ローカルでのメール保存を必要に応じて設定してください。"},
    "signal": {"summary": "メッセージと通話に対応するオープンソースのプライベートメッセンジャー。連携したスマートフォンから履歴も移せます。", "recommendation": "私的な会話には、検証できるエンドツーエンド暗号化を。", "tags": ["プライベートメッセージ","エンドツーエンド暗号化","クロスプラットフォーム"], "compatibility": "公式のmacOS版があります。利用を始めるには、先にスマートフォンにSignalを入れ、デスクトップ版と連携してください。", "permissions": "通話やメディアの送信では、マイク、カメラ、ローカルファイルへのアクセスを求める場合があります。必要な範囲だけ許可してください。"},
    "blender": {"summary": "モデリング、マテリアル、アニメーション、レンダリング、動画編集まで扱える、統合型の3D制作スイートです。", "recommendation": "モデリングからレンダリングまで、一つで。", "tags": ["3D制作","モデリング","レンダリング"], "compatibility": "Mac版Blender 5.xはApple Silicon専用です。Intel Macでは4.5 LTSを選び、動作要件を確認してください。", "permissions": "開く、読み込む、書き出すことを選んだプロジェクトにアクセスします。アドオンやオンライン素材を使う前に提供元を確認してください。"},
    "bruno": {"summary": "APIコレクションをローカルファイルとして保存し、Gitとも相性がよいオープンソースのオフライン優先APIクライアントです。", "recommendation": "APIを試す前に、仕事をクラウドへ渡さない。", "tags": ["APIテスト","オフライン優先","Git"], "compatibility": "公式リリースにApple Silicon用とIntel用のmacOS DMG・PKGがあります。", "permissions": "設定したAPIにリクエストを送り、ローカルのコレクションを読み取ります。共有リポジトリに鍵を書き込まないでください。"},
    "kilobat-cli": { summary: "ターミナルで接続・遅延・DNSを診断し、結果をJSONで出力。ローカルのMCPサーバーとしても使えます。", recommendation: "つながらない原因を調べる。", tags: ["コマンドライン", "ネットワーク診断", "MCP"], compatibility: "macOS 14以降。Homebrew経由のソースビルドにはXcode 16以降が必要です。掲載対象は無料・オープンソースのCLIです。別配布のデスクトップ版はオープンソースではなく、一部機能は有料です。", permissions: "診断時にネットワークへ接続します。一部のWi-Fi名、フィルター状態、通信量の予算情報には別途デスクトップアプリと位置情報の許可が必要です。システム設定の変更には確認や管理者認証を求められる場合があります。" },
    "mpv": {"summary": "字幕やスクリプト、細かな再生設定に対応するミニマルなプレーヤー。コマンドラインからも使えます。", "recommendation": "余計な画面なしで、動画を再生。", "tags": ["メディア再生", "スクリプト", "コマンドライン"], "compatibility": "公式のMac向け導入案内からHomebrew、MacPorts、ビルド済みパッケージを選べます。Homebrew版には.appがなく、必要なOSはビルドごとに異なります。標準はGPLv2+、GPL部品を無効にした構成はLGPLv2.1+です。", "permissions": "選択したメディア、字幕、設定を読み込みます。ネットワーク再生や外部スクリプトでは通信が発生します。"},
    "kodi": {"summary": "ローカルやネットワーク上の映画・番組・音楽をライブラリに整理。大画面やリモコンでの操作にも向いています。", "recommendation": "散らばった動画を、自分のライブラリに。", "tags": ["メディアセンター", "ライブラリ", "大画面"], "compatibility": "公式安定版はmacOS 10.14以降に対応し、Intel用とApple Silicon用を配布しています。", "permissions": "追加したメディアフォルダーを読み込みます。作品情報の取得、ネットワーク再生、アドオンでは通信が発生し、外部アドオンには個別の利用条件があります。"},
    "cog": {"summary": "ロスレス音源、CUE、ゲーム音楽、プレイリストに対応するMac用プレーヤー。曲を事前に取り込む必要がありません。", "recommendation": "取り込まず、そのまま音楽を再生。", "tags": ["音楽再生", "ロスレス音源", "CUE"], "compatibility": "現在の公式直接配布版はmacOS 12以降が必要で、Sparkleによる更新に対応します。App Store版もあります。", "permissions": "許可した音楽フォルダーを読み込みます。オンライン歌詞やLast.fm・ListenBrainzへの再生記録は、設定に応じて通信します。"},
    "feishin": {"summary": "NavidromeやJellyfinなどの音楽サーバーに接続し、アルバム、プレイリスト、同期歌詞を使えるデスクトップクライアントです。", "recommendation": "自分の音楽サーバーを、聴きやすく。", "tags": ["音楽再生", "セルフホスト", "歌詞"], "compatibility": "Intel用とApple Silicon用のMac版を配布しています。対応する音楽サーバーが必要で、単体のローカルファイル再生用ではありません。", "permissions": "設定した音楽サーバーへ接続します。オンライン歌詞は外部サービスを利用し、メディアキー操作にはアクセシビリティ権限を求める場合があります。"},
    "gopeed": {"summary": "HTTP・HTTPS・BT・マグネットリンクをまとめて管理。キュー、ブラウザー連携、拡張機能に対応しています。", "recommendation": "リンクもTorrentも、一つのキューに。", "tags": ["ダウンロード管理", "マグネットリンク", "拡張機能"], "compatibility": "Mac安定版にはIntel、Apple Silicon、Universalのパッケージがあります。2.0にはベータ版もありますが、ダウンロード先は最新の安定版です。", "permissions": "選択したフォルダーへダウンロードします。BTでは他のピアとデータを交換し、拡張機能を入れると個別の通信機能が追加されます。"},
    "ab-download-manager": {"summary": "複数接続、再開、分類、予約キューに対応するダウンロード管理ツール。拡張機能でブラウザーとも連携できます。", "recommendation": "大きなファイルも、一時停止して続きから。", "tags": ["ダウンロード再開", "キュー", "ブラウザー連携"], "compatibility": "Intel用とApple Silicon用の公式DMGがあります。ブラウザー連携は任意の拡張機能で、再開には配信サーバーの対応が必要です。", "permissions": "ダウンロードURLを読み、選んだフォルダーへ保存します。任意のブラウザー拡張は、許可の範囲でダウンロード要求を受け取ります。"},
    "qbittorrent": {"summary": "広告のないBT・マグネット対応クライアント。キュー、ファイル選択、速度制限、任意のWeb管理に対応します。", "recommendation": "広告に邪魔されず、Torrentを管理。", "tags": ["BitTorrent", "マグネットリンク", "キュー"], "compatibility": "現在の公式Mac版は5.2.3で、macOS 13以降が必要です。他OSとは版が異なる場合があり、Mac版の保守人員は限られています。ソースはGPLv2+、配布バイナリはGPLv3+です。", "permissions": "BTでは他のピアとデータを交換します。Webによる遠隔管理は任意で、有効にする場合は認証を設定します。"},
    "transmission": {"summary": "MacネイティブのシンプルなBTクライアント。マグネットリンク、速度制限、共有比率を管理できます。", "recommendation": "Torrentに、すっきりしたMacアプリを。", "tags": ["BitTorrent", "Macネイティブ", "マグネットリンク"], "compatibility": "現在の公式Mac版はmacOS 12以降に対応し、DMGで配布されます。他OSのQt版とは異なるネイティブUIです。", "permissions": "BTのタスクは他のピアと送受信します。任意のリモート接続を有効にすると管理用インターフェースが開きます。"},
    "aria2": {"summary": "HTTP・FTP・SFTP・BT・Metalinkに対応するコマンドラインツール。一括処理やRPC制御にも使えます。", "recommendation": "まとめて落とす作業を、スクリプトに。", "tags": ["コマンドライン", "複数プロトコル", "一括ダウンロード"], "compatibility": "Macでは公式案内に従ってHomebrewやMacPortsから導入できます。GUIはなく、安定版の更新間隔は長めです。スクリプト用途に向いています。", "permissions": "指定URLへ接続してファイルを保存します。BTは他のピアとデータを交換し、RPCには用途に応じた認証設定が必要です。"},
    "brave": {"summary": "Chrome拡張に対応するChromium系ブラウザー。広告・トラッカーのブロック、同期、プライバシー設定を備えています。", "recommendation": "Chrome拡張はそのまま、広告を減らす。", "tags": ["Chromium", "広告ブロック", "Chrome拡張"], "compatibility": "現在の安定版はmacOS 13以降が必要で、Intel、Apple Silicon、Universal版があります。Brave-Browserを選んでください。Brave Originは別の有料版です。基本ブラウザーは無料で、VPNや一部AIは有料です。", "permissions": "サイトが必要に応じてカメラやマイクなどを要求します。同期、Rewards、AIなどは個別の設定とサービス規約に従って通信します。"},
    "floorp": {"summary": "Firefoxベースで、ワークスペースやサイドバー、細かなUI変更に対応。複数の作業を並行する人向けです。", "recommendation": "増えたページを、ワークスペースで整理。", "tags": ["Firefoxベース", "ワークスペース", "カスタマイズ"], "compatibility": "公式案内ではmacOS 10.15以降に対応し、IntelとApple Silicon向けのUniversal DMGを配布しています。", "permissions": "サイトや拡張機能が必要な権限を要求します。同期、おすすめ拡張などのネットワーク機能は設定に従います。"},
    "waterfox": {"summary": "Firefoxをベースにした独立系ブラウザー。なじみのある拡張機能を使え、独自のプライバシー・UI設定も備えています。", "recommendation": "慣れたFirefoxに、もう一つの選択肢。", "tags": ["Firefoxベース", "ブラウザー", "拡張機能"], "compatibility": "公式サイトはmacOS 10.15以降のIntel・Apple Silicon向けにUniversal DMGを配布しています。GitHubのReleaseは主に更新情報用です。", "permissions": "サイトと拡張機能は許可した範囲にアクセスします。同期などのオンラインサービスは設定に応じて動作します。"},
    "helium": {"summary": "ベータ開発中のChromium系ブラウザー。簡潔なUI、コンテンツブロック、縦型タブ、Chrome拡張に対応しています。", "recommendation": "シンプルなChromiumを試す選択肢。", "tags": ["Chromium", "コンテンツブロック", "ベータ版"], "compatibility": "macOS 13以降向けにIntel用とApple Silicon用のDMGがあります。明確にベータ段階のため不具合の可能性があり、自動更新にはHeliumサービスの有効化が必要です。", "permissions": "拡張のプロキシ、フィルター更新などのHeliumサービスは選択に応じて通信します。第三者の素材には各自のライセンスが適用されます。"},
    "bettercapture": {"summary": "画面、システム音声、マイクを収録できるネイティブのメニューバーアプリ。H.264・HEVC・ProResに対応します。", "recommendation": "画面もシステム音声も、手間を減らして。", "tags": ["Macネイティブ", "システム音声", "ProRes"], "compatibility": "公式要件はmacOS 15.2以降です。現在の配布物はApple Silicon用DMGのみで、Intel用はありません。", "permissions": "画面とシステム音声の収録にはmacOSの許可が必要です。マイク・カメラは使用時に許可し、録画は標準でローカルへ保存します。"},
    "openscreen": {"summary": "録画をそのままデモ動画に。自動ズーム、カーソル効果、カメラ合成、編集、MP4・GIF書き出しを備えています。", "recommendation": "録ったデモを、その場で仕上げる。", "tags": ["デモ録画", "自動ズーム", "動画編集"], "compatibility": "Intel用とApple Silicon用の公式DMGがあります。録画・編集は無料で、開発中のため形式が変わる場合があります。任意のクラウドAIには自分のAPIキーが必要で、提供元の料金が発生し得ます。", "permissions": "画面収録、アクセシビリティ、マイク、カメラを必要に応じて許可します。自分のキーでAIを使う場合は、選んだ提供元へリクエストを送信します。"},
    "flameshot": {"summary": "範囲を撮って、その場で矢印、文字、強調、マスクを追加。コピー・保存のほか、任意のアップロードにも対応します。", "recommendation": "撮ったその場で、伝えたい所をマーク。", "tags": ["スクリーンショット", "注釈", "クロスプラットフォーム"], "compatibility": "現在の14.x Mac版はmacOS 15以降が必要で、Intel用とApple Silicon用のDMGがあります。初回に署名の確認が出る場合があります。", "permissions": "撮影には画面収録の許可が必要です。保存やコピーはローカルで行えますが、アップロードを選ぶと設定したサービスへ画像を送信します。"},
    "screenity": {"summary": "タブやデスクトップを録画するChrome拡張。録画中の注釈、トリミング、クロップ、動画の書き出しに対応します。", "recommendation": "ブラウザーの操作を、録りながら説明。", "tags": ["ブラウザー拡張", "画面録画", "録画中の注釈"], "compatibility": "Chrome・Chromium用の拡張機能で、独立したMacアプリではありません。録画とローカル書き出しは無料で、Screenity Proは別の有料クラウドサービスです。", "permissions": "選んだタブ、デスクトップ、マイク、カメラを収録します。クラウド保存やProの共有機能では、該当コンテンツをアップロードします。"},
    "yesplaymusic": {"summary": "网易云音乐（NetEase Cloud Music）の非公式クライアント。プレイリスト、アルバム、歌詞を中心に、ライト・ダーク表示を使えます。", "recommendation": "网易云音乐に、別の使い心地を。", "tags": ["NetEase音楽", "非公式クライアント", "歌詞"], "compatibility": "安定版v0.4.11（2026-10-10）はIntel・Apple Silicon・UniversalのMac版を配布しています。最近もログイン制限の報告がありますが、Mac固有とは確認されていません。API、アカウント、楽曲の利用条件に左右されます。 確認時はWebデモが利用できなかったため、導入には公式Releaseを使ってください。", "permissions": "ログインやプレイリスト機能はNetEaseまたは外部の音楽APIへ接続します。任意の追加音源は別のサービスを利用します。"}
  }
};

let activeLanguage = new URLSearchParams(location.search).get("lang") || localStorage.getItem(languageStorageKey) || localStorage.getItem(legacyLanguageStorageKey) || defaultLanguage;
if (!copy[activeLanguage]) activeLanguage = defaultLanguage;
localStorage.setItem(languageStorageKey, activeLanguage);
let activeCategory = new URLSearchParams(location.search).get("category") || "all";
if (!categories.includes(activeCategory)) activeCategory = "all";
let apps = [];

const appGrid = document.querySelector("#app-grid");
const essentialsBand = document.querySelector("#essentials");
const essentialsGrid = document.querySelector("#essentials-grid");
let searchTimer;
let catalogKey = "";
const filters = document.querySelector("#category-filters");
const standardsList = document.querySelector("#standards-list");
const searchInput = document.querySelector("#search-input");
const searchClear = document.querySelector("#clear-search");
let isSearchComposing = false;
const testedFilter = document.querySelector("#tested-filter");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const clearFilters = document.querySelector("#clear-filters");
const languageStatus = document.querySelector("#language-status");
const shareButton = document.querySelector("#share-directory");
const shareStatus = document.querySelector("#share-status");

function valueAt(object, path) {
  return path.split(".").reduce((value, key) => value?.[key], object);
}

function t(path, parameters = {}) {
  const fallback = valueAt(copy[defaultLanguage], path);
  const value = valueAt(copy[activeLanguage], path) ?? fallback ?? path;
  return String(value).replace(/\{(\w+)\}/g, (_, key) => parameters[key] ?? `{${key}}`);
}

function localized(app, key) {
  return appCopy[activeLanguage]?.[app.id]?.[key] ?? app[key];
}

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function link(url, text, className, accessibleName, iconName) {
  return `<a class="${className}" href="${escapeHTML(url)}" aria-label="${escapeHTML(accessibleName)}" target="_blank" rel="noreferrer">${escapeHTML(text)}<svg class="ui-icon" aria-hidden="true"><use href="assets/tabler-icons.svg?v=f3f9ffa728c5#${iconName}"></use></svg></a>`;
}

function statusClass(level) {
  return `status-${level}`;
}

function categoryName(id) {
  return t(`category.${id}`);
}

function appCategoryIds(app) {
  return app.categories || [app.category];
}

function buildSearchIndex(app) {
  const variants = [app, ...Object.values(appCopy).map(localeCopy => localeCopy[app.id] || {})];
  const categoryLabels = Object.values(copy).flatMap(localeCopy => appCategoryIds(app).map(id => localeCopy.category?.[id] || ""));
  return [
    app.name,
    app.license,
    app.compatibility,
    app.permissions,
    ...categoryLabels,
    ...variants.flatMap(variant => [variant.summary, variant.recommendation, variant.compatibility, variant.permissions, ...(variant.tags || [])])
  ].filter(Boolean).join(" ");
}

function compareApps(a, b, category = "all") {
  const featuredDifference = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
  if (featuredDifference) return featuredDifference;
  if (a.featured && b.featured) return a.sortOrder - b.sortOrder;

  const categoryDifference = category === "all" ? categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category) : 0;
  if (categoryDifference) return categoryDifference;

  const withinCategory = workflowOrder[category === "all" ? a.category : category] || [];
  const aRank = withinCategory.indexOf(a.id);
  const bRank = withinCategory.indexOf(b.id);
  const workflowDifference = (aRank === -1 ? Number.MAX_SAFE_INTEGER : aRank) - (bRank === -1 ? Number.MAX_SAFE_INTEGER : bRank);
  return workflowDifference || a.sortOrder - b.sortOrder;
}

function licenseDescription(id) {
  return copy[activeLanguage]?.license?.[id] ?? copy.zh.license?.[id] ?? id;
}

function renderStandards() {
  const licenses = [...new Set(apps.map(app => app.license))].sort((a, b) => {
    const aIndex = licenseOrder.indexOf(a);
    const bIndex = licenseOrder.indexOf(b);
    return (aIndex === -1 ? licenseOrder.length : aIndex) - (bIndex === -1 ? licenseOrder.length : bIndex) || a.localeCompare(b);
  });
  standardsList.innerHTML = licenses.map((license, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><div><h3 lang="en">${escapeHTML(license)}</h3><p>${escapeHTML(licenseDescription(license))}</p></div></li>`).join("");
}

function renderEssentials() {
  const selected = essentialAppIds.map(id => apps.find(app => app.id === id)).filter(Boolean);
  essentialsGrid.innerHTML = selected.map(app => {
    const url = new URL(location.href);
    for (const key of ["q", "category", "tested"]) url.searchParams.delete(key);
    if (activeLanguage === defaultLanguage) url.searchParams.delete("lang");
    else url.searchParams.set("lang", activeLanguage);
    url.hash = `app-${app.id}`;
    const task = t(`essentialsTask.${app.id}`);
    return `<li><a class="essentials-item" href="${escapeHTML(url.pathname + url.search + url.hash)}" data-essential-app="${app.id}" aria-label="${escapeHTML(t("essentialsFor", { name: app.name, task }))}"><img class="essentials-icon" src="${escapeHTML(app.icon)}" alt="" width="44" height="44" loading="lazy" decoding="async" /><span class="essentials-task">${escapeHTML(task)}</span><span class="essentials-name" lang="en">${escapeHTML(app.name)}</span></a></li>`;
  }).join("");
  document.querySelector("#essentials-tested").hidden = !selected.length || !selected.every(app => app.status.level === "tested");
  essentialsBand.hidden = selected.length !== essentialAppIds.length;
}

function focusLinkedApp() {
  if (!location.hash.startsWith("#app-")) return;
  const target = document.getElementById(location.hash.slice(1));
  if (!target || !appGrid.contains(target)) return;
  target.focus({ preventScroll: true });
  target.scrollIntoView({ block: "center", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
}

function cardTemplate(app) {
  const status = app.status.level === "verified" ? null : (valueAt(copy[activeLanguage], `status.${app.status.level}`) ?? valueAt(copy.zh, `status.${app.status.level}`));
  const license = licenseDescription(app.license);
  const licenseExplanation = license.slice(app.license.length).replace(/^[：:]\s*/, "");
  const compatibility = localized(app, "compatibility") || app.compatibility;
  const permissions = localized(app, "permissions") || app.permissions;
  const compatibilityLanguage = appCopy[activeLanguage]?.[app.id]?.compatibility ? (activeLanguage === "ja" ? "ja" : "en") : "zh-CN";
  const permissionsLanguage = appCopy[activeLanguage]?.[app.id]?.permissions ? (activeLanguage === "ja" ? "ja" : "en") : "zh-CN";
  const licensePopover = `<details class="license-details card-popover"><summary class="license" aria-label="${escapeHTML(t("licenseFor", { license: app.license, name: app.name }))}" title="${escapeHTML(t("licenseFor", { license: app.license, name: app.name }))}" lang="en">${escapeHTML(app.license)}</summary><div class="license-popover" tabindex="0"><strong lang="en">${escapeHTML(app.license)}</strong><p>${escapeHTML(licenseExplanation)}</p><p class="license-note">${escapeHTML(t("licenseNote"))}</p></div></details>`;
  const details = compatibility || permissions ? `<details class="app-details card-popover"><summary aria-label="${escapeHTML(t("detailsSummary"))}" title="${escapeHTML(t("detailsSummary"))}"><svg class="ui-icon" aria-hidden="true"><use href="assets/tabler-icons.svg?v=f3f9ffa728c5#info-circle"></use></svg></summary><dl tabindex="0">${compatibility ? `<div><dt>${escapeHTML(t("compatibilityLabel"))}</dt><dd lang="${compatibilityLanguage}">${escapeHTML(compatibility)}</dd></div>` : ""}${permissions ? `<div><dt>${escapeHTML(t("permissionsLabel"))}</dt><dd lang="${permissionsLanguage}">${escapeHTML(permissions)}</dd></div>` : ""}</dl></details>` : "";
  const previewImage = app.preview?.images?.[activeLanguage] || app.preview?.image;
  const preview = app.preview ? ` data-app-name="${escapeHTML(app.name)}" data-preview-image="${escapeHTML(previewImage)}" data-preview-source="${escapeHTML(app.preview.source)}"` : "";
  const previewButton = app.preview ? `<button class="preview-trigger" type="button" aria-haspopup="dialog" aria-controls="app-preview-dialog" aria-label="${escapeHTML(t("previewFor", { name: app.name }))}" title="${escapeHTML(t("previewFor", { name: app.name }))}"><svg class="ui-icon" aria-hidden="true"><use href="assets/tabler-icons.svg?v=f3f9ffa728c5#photo"></use></svg><span class="preview-label">${escapeHTML(t("previewLabel"))}</span></button>` : "";
  return `<article class="app-card" id="app-${escapeHTML(app.id)}" tabindex="-1"${preview}>
    <img class="app-icon" src="${escapeHTML(app.icon)}" alt="${escapeHTML(t("iconAlt", { name: app.name }))}" width="46" height="46" loading="lazy" decoding="async" />
    <div class="app-card-head"><div><h3 lang="en">${escapeHTML(app.name)}</h3><span class="app-type">${escapeHTML(categoryName(app.category))}</span></div><div class="app-card-meta" aria-label="${escapeHTML(t("metadataLabel"))}">${status ? `<span class="tag ${statusClass(app.status.level)}" aria-label="${escapeHTML(`${status.label}: ${status.note}`)}"><svg class="ui-icon status-check" aria-hidden="true"><use href="assets/tabler-icons.svg?v=f3f9ffa728c5#check"></use></svg>${escapeHTML(status.label)}</span>` : ""}<div class="card-tools">${details}</div></div></div>
    <p class="card-summary">${escapeHTML(localized(app, "summary"))}</p>
    <p class="recommendation" title="${escapeHTML(localized(app, "recommendation"))}">${escapeHTML(localized(app, "recommendation"))}</p>
    <div class="tags" aria-label="${escapeHTML(t("metadataLabel"))}">
      ${(localized(app, "tags") || []).map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}
    </div>
    <div class="app-links">
      ${link(app.homepage, t("projectSite"), "project-link", t("projectSiteFor", { name: app.name }), "world-www")}
      ${previewButton}
      ${link(app.download, t("download"), "download-link", t("downloadFor", { name: app.name }), "download")}
      ${licensePopover}
    </div>
  </article>`;
}

function renderFilters() {
  const focusedCategory = document.activeElement?.closest?.("#category-filters .filter")?.dataset.category;
  filters.innerHTML = categories.map(id => {
    const count = id === "all" ? apps.length : apps.filter(app => appCategoryIds(app).includes(id)).length;
    return `<button class="filter" type="button" data-category="${id}" aria-pressed="${id === activeCategory}"><svg class="ui-icon" aria-hidden="true"><use href="assets/tabler-icons.svg?v=f3f9ffa728c5#${categoryIcons[id]}"></use></svg><span>${escapeHTML(categoryName(id))}</span><span class="filter-count">${count}</span></button>`;
  }).join("");
  filters.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    renderFilters();
    renderCatalog();
  }));
  if (focusedCategory) filters.querySelector(`[data-category="${focusedCategory}"]`)?.focus();
}

function updateURL() {
  const url = new URL(location.href);
  if (activeCategory === "all") url.searchParams.delete("category");
  else url.searchParams.set("category", activeCategory);
  if (testedFilter.checked) url.searchParams.set("tested", "1");
  else url.searchParams.delete("tested");
  if (searchInput.value.trim()) url.searchParams.set("q", searchInput.value.trim());
  else url.searchParams.delete("q");
  if (activeLanguage === defaultLanguage) url.searchParams.delete("lang");
  else url.searchParams.set("lang", activeLanguage);
  history.replaceState({}, "", url);
}

function renderCatalog() {
  clearTimeout(searchTimer);
  searchClear.hidden = searchInput.value.length === 0;
  const query = searchInput.value.trim().toLowerCase();
  const list = apps.filter(app => {
    const appCategories = appCategoryIds(app);
    const categoryMatch = activeCategory === "all" || appCategories.includes(activeCategory);
    const testedMatch = !testedFilter.checked || app.status.level === "tested";
    return categoryMatch && testedMatch && app.searchIndex.includes(query);
  }).sort((a, b) => compareApps(a, b, activeCategory));
  const nextKey = `${activeLanguage}:${list.map(app => app.id).join(",")}`;
  if (nextKey !== catalogKey) {
    appGrid.innerHTML = list.map(cardTemplate).join("");
    catalogKey = nextKey;
  }
  emptyState.hidden = list.length !== 0;
  clearFilters.hidden = activeCategory === "all" && !testedFilter.checked && list.length !== 0;
  resultCount.textContent = activeLanguage === "en" && list.length === 1 ? "1 app found" : t("foundCount", { count: list.length });
  updateURL();
}

function restoreURLState() {
  const params = new URLSearchParams(location.search);
  activeCategory = categories.includes(params.get("category")) ? params.get("category") : "all";
  searchInput.value = params.get("q") || "";
  testedFilter.checked = params.get("tested") === "1";
  const requestedLanguage = params.get("lang") || localStorage.getItem(languageStorageKey) || localStorage.getItem(legacyLanguageStorageKey) || defaultLanguage;
  activeLanguage = copy[requestedLanguage] ? requestedLanguage : defaultLanguage;
  localStorage.setItem(languageStorageKey, activeLanguage);
  applyStaticCopy();
  renderEssentials();
  renderFilters();
  renderCatalog();
  renderStandards();
  focusLinkedApp();
}

function resetFilters() {
  activeCategory = "all";
  searchInput.value = "";
  testedFilter.checked = false;
  renderFilters();
  renderCatalog();
  searchInput.focus({ preventScroll: true });
}

function clearSearchQuery() {
  searchInput.value = "";
  renderCatalog();
  searchInput.focus({ preventScroll: true });
}

function setMetaContent(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", value);
}

function updateMetadata() {
  const canonicalURL = new URL(siteURL);
  if (activeLanguage !== defaultLanguage) canonicalURL.searchParams.set("lang", activeLanguage);
  const canonical = canonicalURL.toString();
  const title = t("pageTitle");
  const description = t("pageDescription");
  const siteName = activeLanguage === "en" ? "Make Your Mac Better" : activeLanguage === "ja" ? "Macアプリ集" : "让 Mac 更好用";

  document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonical);
  setMetaContent('meta[property="og:url"]', canonical);
  setMetaContent('meta[property="og:locale"]', ogLocales[activeLanguage]);
  setMetaContent('meta[property="og:site_name"]', siteName);
  setMetaContent('meta[property="og:title"]', title);
  setMetaContent('meta[property="og:description"]', description);
  setMetaContent('meta[property="og:image:alt"]', title);
  setMetaContent('meta[name="twitter:title"]', title);
  setMetaContent('meta[name="twitter:description"]', description);
  setMetaContent('meta[name="twitter:image:alt"]', title);

  const schema = document.querySelector("#site-schema");
  if (schema) {
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteURL}#website`,
      url: siteURL,
      name: siteName,
      alternateName: ["让 Mac 更好用", "Make Your Mac Better", "Macアプリ集"],
      description,
      inLanguage: activeLanguage === "zh" ? "zh-CN" : activeLanguage,
      publisher: { "@type": "Person", name: "iXiehao", url: "https://github.com/ixiehao" }
    });
  }
}

function applyStaticCopy() {
  document.documentElement.lang = t("htmlLang");
  document.title = t("pageTitle");
  document.querySelector('meta[name="description"]').content = t("pageDescription");
  updateMetadata();
  document.querySelectorAll("[data-i18n]").forEach(element => { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-i18n-aria-label]").forEach(element => { element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel)); });
  searchClear.title = t("clearSearch");
  document.querySelectorAll("[data-language]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.language === activeLanguage));
    button.setAttribute("aria-label", t(`languageOption.${button.dataset.language}`));
    button.title = t(`languageOption.${button.dataset.language}`);
  });
}

function applyLanguage(language) {
  activeLanguage = language;
  localStorage.setItem(languageStorageKey, activeLanguage);
  applyStaticCopy();
  languageStatus.textContent = t("languageChanged");
  if (apps.length) {
    renderEssentials();
    renderFilters();
    renderCatalog();
    renderStandards();
  }
}

async function init() {
  applyStaticCopy();
  document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => applyLanguage(button.dataset.language)));
  try {
    const dataURL = new URL("data/apps.json", import.meta.url);
    dataURL.searchParams.set("v", "5eb44ffa6587");
    const response = await fetch(dataURL);
    if (!response.ok) throw new Error("Unable to load app data");
    apps = await response.json();
    apps.forEach(app => { app.searchIndex = buildSearchIndex(app).toLowerCase(); });
    apps.sort(compareApps);
    const params = new URLSearchParams(location.search);
    const requestedCategory = params.get("category");
    activeCategory = categories.includes(requestedCategory) ? requestedCategory : "all";
    searchInput.value = params.get("q") || "";
    testedFilter.checked = params.get("tested") === "1";
    document.querySelector("#app-total").textContent = String(apps.length);
    document.querySelector("#category-total").textContent = String(categories.length - 1);
    renderEssentials();
    renderFilters();
    renderCatalog();
    renderStandards();
    focusLinkedApp();
  } catch (error) {
    resultCount.innerHTML = `${escapeHTML(t("dataError"))} ${link("https://github.com/ixiehao/MacBetter/tree/main/website/data", t("dataErrorLink"), "data-error-link")}`;
    console.error(error);
  }
}

async function shareDirectory() {
  const url = location.href;
  if (navigator.share) {
    try {
      await navigator.share({ title: t("pageTitle"), text: t("pageDescription"), url });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  try {
    await navigator.clipboard.writeText(url);
    shareStatus.textContent = t("shareCopied");
  } catch {
    shareStatus.textContent = t("shareFailed");
  }
}

searchInput.addEventListener("compositionstart", () => { isSearchComposing = true; clearTimeout(searchTimer); });
searchInput.addEventListener("compositionend", () => {
  isSearchComposing = false;
  renderCatalog();
});
searchInput.addEventListener("input", event => {
  searchClear.hidden = searchInput.value.length === 0;
  clearTimeout(searchTimer);
  if (!event.isComposing && !isSearchComposing) searchTimer = setTimeout(renderCatalog, 100);
});
searchClear.addEventListener("click", clearSearchQuery);
testedFilter.addEventListener("change", renderCatalog);
clearFilters.addEventListener("click", resetFilters);
shareButton.addEventListener("click", shareDirectory);
function handleIconError(event) {
  const image = event.target;
  if (!image.matches?.(".app-icon, .essentials-icon") || image.dataset.iconFallback) return;
  image.dataset.iconFallback = "true";
  image.alt = "";
  image.src = new URL("assets/icons/app-fallback.svg", import.meta.url).href;
}
appGrid.addEventListener("error", handleIconError, true);
essentialsGrid.addEventListener("error", handleIconError, true);
essentialsGrid.addEventListener("click", event => {
  const item = event.target.closest("a[data-essential-app]");
  if (!item || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  if (item.href !== location.href) history.pushState({}, "", item.getAttribute("href"));
  activeCategory = "all";
  searchInput.value = "";
  testedFilter.checked = false;
  renderFilters();
  renderCatalog();
  focusLinkedApp();
});
function fitCardPopover(popover) {
  const panel = popover.querySelector("dl, .license-popover");
  if (!popover.open || !panel) return;
  const anchor = popover.querySelector("summary").getBoundingClientRect();
  const headerBottom = document.querySelector(".site-header").getBoundingClientRect().bottom;
  if (anchor.bottom < headerBottom || anchor.top > innerHeight) {
    popover.open = false;
    return;
  }
  panel.style.removeProperty("--popover-shift-x");
  const above = Math.max(0, anchor.top - headerBottom - 20);
  const below = Math.max(0, innerHeight - anchor.bottom - 20);
  const preferred = popover.classList.contains("license-details") ? "above" : "below";
  const space = { above, below };
  const other = preferred === "above" ? "below" : "above";
  const side = space[preferred] >= panel.scrollHeight + 2 || space[preferred] >= space[other] ? preferred : other;
  popover.dataset.popoverSide = side;
  panel.style.setProperty("--popover-max-height", `${space[side]}px`);
  const rect = panel.getBoundingClientRect();
  const left = Math.min(Math.max(rect.left, 12), innerWidth - rect.width - 12);
  panel.style.setProperty("--popover-shift-x", `${left - rect.left}px`);
}

let popoverFrame = 0;
function updateOpenPopover() {
  if (popoverFrame || !appGrid.querySelector(".card-popover[open]")) return;
  popoverFrame = requestAnimationFrame(() => {
    popoverFrame = 0;
    const popover = appGrid.querySelector(".card-popover[open]");
    if (popover) fitCardPopover(popover);
  });
}
appGrid.addEventListener("toggle", event => {
  if (event.target.matches(".card-popover[open]")) fitCardPopover(event.target);
}, true);
window.addEventListener("resize", updateOpenPopover);
window.addEventListener("scroll", updateOpenPopover, { passive: true });

appGrid.addEventListener("click", event => {
  const activePopover = event.target.closest(".card-popover");
  appGrid.querySelectorAll(".card-popover[open]").forEach(popover => {
    if (popover !== activePopover) popover.open = false;
  });
});
document.addEventListener("click", event => {
  if (!event.target.closest(".card-popover")) {
    appGrid.querySelectorAll(".card-popover[open]").forEach(popover => { popover.open = false; });
  }
});
document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 229 || isSearchComposing) return;
  if (event.key === "Escape") {
    const focusedPopover = document.activeElement.closest(".card-popover[open]");
    appGrid.querySelectorAll(".card-popover[open]").forEach(popover => { popover.open = false; });
    focusedPopover?.querySelector("summary").focus({ preventScroll: true });
  }
  const target = event.target;
  const isEditable = target?.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target?.tagName || "");
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k" && (!isEditable || target === searchInput)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "/" && !isEditable) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput && searchInput.value) {
    clearSearchQuery();
  }
});

window.addEventListener("popstate", restoreURLState);

init();
