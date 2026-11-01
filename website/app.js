const categories = ["all", "office", "notes", "video", "player", "audio", "image", "capture", "browser", "download", "files", "launcher", "menu", "maintenance", "privacy", "productivity", "efficiency"];
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
  privacy: "shield-lock",
  productivity: "bolt",
  efficiency: "code"
};
const licenseOrder = ["MIT", "GPL-2.0", "GPL-3.0", "AGPL-3.0", "MPL-2.0", "Apache-2.0", "Unlicense", "LGPL-2.1", "BSD-2-Clause", "BSD-3-Clause"];
const categoryOrder = ["video", "player", "audio", "image", "capture", "browser", "download", "launcher", "menu", "office", "notes", "productivity", "files", "maintenance", "privacy", "efficiency"];
const workflowOrder = {
  video: ["shotmap", "mp4flow", "handbrake", "lossless-cut", "subler", "mediainfo", "subtitle-edit", "blender"],
  player: ["iina", "vlc", "jellyfin-media-player"],
  audio: ["audacity", "mixxx", "musescore", "finetune", "background-music"],
  image: ["lumaview", "shotmap", "macshot", "imageoptim", "darktable", "rawtherapee", "krita", "drawio-desktop", "blender", "freecad", "godot"],
  capture: ["macshot", "kap", "obs-studio"],
  browser: ["firefox", "zen-browser", "netnewswire"],
  download: ["yt-dlp", "cyberduck"],
  launcher: ["launchpad-back", "loop", "rectangle", "layoutkeeper", "alt-tab", "aerospace", "amethyst", "hammerspoon"],
  menu: ["ice", "thaw", "stats", "monitorcontrol", "layoutkeeper", "linearmouse", "karabiner-elements", "maccy", "finetune", "background-music", "onlyswitch", "keeping-you-awake"],
  office: ["lumaview", "libreoffice", "onlyoffice", "thunderbird", "koodo-reader", "anki", "drawio-desktop"],
  notes: ["zettlr", "qownnotes", "joplin", "logseq", "appflowy"],
  productivity: ["super-productivity", "maccy", "espanso", "hammerspoon", "swiftbar"],
  files: ["localsend", "openmtp", "cyberduck", "syncthing", "kopia"],
  maintenance: ["puremac", "purge", "mangodisk", "dupeguru", "latest", "applite", "sloth"],
  privacy: ["signal", "keepassxc", "cryptomator", "lulu"],
  efficiency: ["github-desktop", "vscodium", "zed", "codeedit", "xcodes", "alacritty", "dbeaver", "tablepro", "bruno", "kilobat-cli", "utm", "hammerspoon", "swiftbar"]
};
const siteURL = "https://ixiehao.github.io/MacBetter/";
const defaultLanguage = "en";
const languageStorageKey = "MacBetter-language";
const legacyLanguageStorageKey = "mac-better-language";
const ogLocales = { zh: "zh_CN", en: "en_US", ja: "ja_JP" };

const copy = {
  zh: {
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
    category: { all: "全部", office: "办公与学习", notes: "笔记与知识", video: "视频处理", player: "影音播放", audio: "音频与音乐", image: "图片与设计", capture: "截图与录屏", browser: "网络浏览", download: "下载工具", launcher: "窗口与启动", menu: "菜单栏与硬件", maintenance: "Mac 优化与维护", files: "文件与备份", privacy: "隐私与安全", productivity: "效率与自动化", efficiency: "开发工具" },
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
    catalogCopy: "按用途查找；多用途软件可出现在多个分类。",
    catalogControlsLabel: "搜索和筛选软件",
    recommendInline: "推荐一款好软件",
    shareDirectory: "分享目录",
    shareCopied: "目录链接已复制，可以分享给朋友。",
    shareFailed: "暂时无法分享，请从地址栏复制当前页面地址。",
    searchPlaceholder: "搜索名称、用途或标签",
    searchLabel: "搜索软件目录",
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
      "AGPL-3.0": "AGPL-3.0：若修改后的软件通过网络服务供他人使用，也须向这些用户提供对应源码；这比 GPL 多了网络服务场景的要求。",
      "MPL-2.0": "MPL-2.0：对外发布时，修改过的 MPL 覆盖文件须提供源码并继续按 MPL 授权；独立的新文件可使用其他许可证。",
      "Apache-2.0": "Apache-2.0：宽松许可，可用于闭源组合和再发布；需保留许可证、版权与专利声明，并按要求附带 NOTICE 文件内容。",
      "LGPL-2.1": "LGPL-2.1：主要用于库；修改该库并分发时须提供库源码。应用可采用其他许可证，但需让用户能按许可条件替换或重新链接该库。",
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
    category: { all: "All", office: "Office & Learning", notes: "Notes & Knowledge", video: "Video Tools", player: "Media Players", audio: "Audio & Music", image: "Images & Design", capture: "Screen Capture", browser: "Web Browsing", download: "Download Tools", launcher: "Windows & Launchers", menu: "Menu Bar & Hardware", maintenance: "Mac Maintenance", files: "Files & Backup", privacy: "Privacy & Security", productivity: "Productivity & Automation", efficiency: "Developer Tools" },
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
    catalogCopy: "Browse by task. Apps may appear in more than one category.",
    catalogControlsLabel: "Search and filter apps",
    recommendInline: "Recommend an app",
    shareDirectory: "Share directory",
    shareCopied: "Directory link copied. It is ready to share.",
    shareFailed: "Sharing is unavailable. Copy this page address from your browser.",
    searchPlaceholder: "Search apps, features, or tags",
    searchLabel: "Search the app directory",
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
      "AGPL-3.0": "AGPL-3.0: If you modify the software and let others use it over a network, you must offer those users the corresponding source—a requirement beyond the usual GPL distribution trigger.",
      "MPL-2.0": "MPL-2.0: When distributing it, publish changes to MPL-covered files under the MPL. Independent new files may use other licenses.",
      "Apache-2.0": "Apache-2.0: A permissive license that allows closed-source combinations. Preserve license, copyright, and patent notices, and include any required NOTICE content.",
      "LGPL-2.1": "LGPL-2.1: Mainly intended for libraries. If you distribute a modified library, provide its source; an application may use another license if users can replace or relink the library under the license terms.",
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
    category: { all: "すべて", office: "オフィス・学習", notes: "ノート・情報整理", video: "動画編集・変換", player: "メディア再生", audio: "音声・音楽", image: "画像・デザイン", capture: "スクリーンショット・録画", browser: "Webブラウジング", download: "ダウンロード", launcher: "ウインドウ・ランチャー", menu: "メニューバー・周辺機器", maintenance: "Macのメンテナンス", files: "ファイル・バックアップ", privacy: "プライバシー・セキュリティ", productivity: "作業効率化・自動化", efficiency: "開発ツール" },
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
    catalogCopy: "用途から探せます。複数の分類に掲載されるアプリもあります。",
    catalogControlsLabel: "アプリを検索・絞り込み",
    recommendInline: "アプリを紹介する",
    shareDirectory: "一覧を共有",
    shareCopied: "一覧のリンクをコピーしました。共有できます。",
    shareFailed: "共有できません。ブラウザーのアドレスをコピーしてください。",
    searchPlaceholder: "名前・機能・タグで検索",
    searchLabel: "アプリ一覧を検索",
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
      "AGPL-3.0": "AGPL-3.0：改変したソフトをネットワーク経由で他者に使わせる場合も、利用者に対応するソースコードを提供する必要があります。通常のGPLよりネットワーク利用の条件が加わります。",
      "MPL-2.0": "MPL-2.0：配布する場合、MPL対象ファイルへの変更はMPLで公開します。独立した新規ファイルには別のライセンスを適用できます。",
      "Apache-2.0": "Apache-2.0：寛容なライセンスで、クローズドソースの製品にも組み込めます。ライセンス・著作権・特許表示を残し、必要な場合はNOTICEも含めます。",
      "LGPL-2.1": "LGPL-2.1：主にライブラリ向けです。改変したライブラリを配布する場合はソースを提供します。アプリ側は、利用者が条件に従ってライブラリを交換・再リンクできれば別のライセンスにできます。",
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
    shotmap: { summary: "Turn local videos into storyboard sheets with smart frame selection, manual adjustments, and batch PNG / JPG export.", recommendation: "Review a long video at a glance.", tags: ["Swift-native", "Offline processing", "Video", "Images"], compatibility: "macOS 13+ · Intel and Apple Silicon" },
    lumaview: { summary: "Browse local images and PDFs in a lightweight viewer, with folder navigation, EXIF details, zoom, rotation, and printing.", recommendation: "Viewing images should stay lightweight.", tags: ["Swift-native", "Images & PDFs", "Lightweight"], compatibility: "macOS 12+ · Intel and Apple Silicon", permissions: "Local file access to images, PDFs, and folders you choose." },
    "mp4flow": { summary: "Batch-convert videos to MP4, trim and merge clips, adjust the picture, and choose audio tracks, subtitles, and a target file size.", recommendation: "Make an MP4 without opening an editor.", tags: ["Swift-native", "Local processing", "MP4"], compatibility: "macOS 13+ · Intel and Apple Silicon · Requires local FFmpeg / ffprobe" },
    "launchpad-back": { summary: "Restores the familiar Launchpad experience: grid, pages, folders, drag and drop, and search.", recommendation: "Find apps the familiar way again.", tags: ["App launcher", "Grid layout"] },
    loop: { summary: "Arrange windows quickly with drag and drop, shortcuts, and a floating menu—ideal for split views and multitasking.", recommendation: "Arrange windows with one easy move.", tags: ["Window management", "Keyboard shortcuts", "Open source"], permissions: "Requires Accessibility permission to move and resize other apps’ windows.", compatibility: "macOS 13+ · Intel and Apple Silicon" },
    "alt-tab": { summary: "Switch between windows—not just apps—with thumbnails, minimized windows, and multi-display support.", recommendation: "Switch windows when apps are not enough.", tags: ["Window switching", "Multiple displays", "Keyboard"], permissions: "Requires Accessibility permission to read and switch windows.", compatibility: "macOS 12+ · Core window switching is free; search and some visual options require paid Pro." },
    ice: { summary: "Group, hide, or always show menu bar icons so utility apps stop crowding the top of your screen.", recommendation: "Keep the menu bar from becoming clutter.", tags: ["Menu bar", "Organization", "Lightweight"], compatibility: "macOS 14+ · Intel and Apple Silicon" },
    stats: { summary: "Monitor CPU, memory, storage, network, battery, sensors, and more from the menu bar.", recommendation: "See what is happening before “optimizing.”", tags: ["System monitoring", "Menu bar", "Performance"], compatibility: "macOS 12+ · Intel and Apple Silicon" },
    monitorcontrol: { summary: "Control an external display’s brightness and volume via DDC/CI, including with your keyboard media keys.", recommendation: "Adjust an external display without its buttons.", tags: ["External display", "Brightness", "DDC/CI"], permissions: "Using the native brightness keys with external displays requires Accessibility permission." },
    puremac: { summary: "Inspect disk usage, review app and development caches before cleaning, and remove unwanted apps.", recommendation: "See what will change before cleaning.", tags: ["Storage analysis", "Cleanup", "Preview before cleaning"], permissions: "Cleanup tools may request broader file access. Review every path they will touch before proceeding.", compatibility: "macOS 13+" },
    purge: { summary: "Review caches, development leftovers, and large files before cleaning. Regular files go to the Trash by default.", recommendation: "My first choice for cache cleanup.", tags: ["Cache cleanup", "Large files", "Development files"], permissions: "Full Disk Access is optional; grant it only when you need to scan additional locations.", compatibility: "macOS 13+" },
    libreoffice: { summary: "A free, open-source suite for documents, spreadsheets, and presentations—useful for viewing, light editing, and converting Office files.", recommendation: "Work with Office files offline, without a subscription.", tags: ["Documents", "Spreadsheets", "Presentations"] },
    zettlr: { summary: "A Markdown writing workspace for notes, citations, and long-form projects.", recommendation: "Keep long-form writing and citations in your files.", tags: ["Markdown", "Writing", "Citations"] },
    joplin: { summary: "A Markdown notes app with notebooks, end-to-end encrypted sync options, and an optional Web Clipper.", recommendation: "Sync notes without locking them to one service.", tags: ["Notes", "Markdown", "Sync"] },
    iina: { summary: "A modern macOS media player built on mpv, with strong format support, playlists, and subtitle controls.", recommendation: "Open local video and get on with it.", tags: ["Media player", "Subtitles", "Local playback"] },
    handbrake: { summary: "An open-source video transcoder for converting supported video sources into practical presets and formats.", recommendation: "Reliable video conversion without the guesswork.", tags: ["Transcoding", "Video conversion", "Presets"] },
    "yt-dlp": { summary: "A command-line downloader for audio and video from many supported sites.", recommendation: "Automate permitted downloads with control.", tags: ["Command line", "Media download", "Automation"] },
    macshot: { summary: "A native macOS capture tool for screenshots, screen recording, annotation, OCR, scrolling capture, and GIF export.", recommendation: "Capture, annotate, and share in one pass.", tags: ["Screenshots", "Screen recording", "Scrolling capture"], permissions: "Requires Screen Recording. macOS may also ask for Microphone, Accessibility, or Input Monitoring when you use relevant features." },
    imageoptim: { summary: "A macOS image optimizer that reduces file size through a simple drag-and-drop workflow.", recommendation: "Make images lighter before publishing.", tags: ["Image optimization", "Compression", "Drag and drop"] },
    krita: { summary: "A free, open-source digital painting app for illustration, concept art, comics, and animation.", recommendation: "A real canvas for serious drawing.", tags: ["Digital painting", "Illustration", "Animation"] },
    rectangle: { summary: "Snap, move, and resize macOS windows with keyboard shortcuts, edge gestures, and custom layouts.", recommendation: "Give every window a predictable place.", tags: ["Window management", "Keyboard shortcuts", "Snap layouts"], permissions: "Requires Accessibility permission to move and resize other apps’ windows.", compatibility: "The latest version requires macOS 14+. Version 1.100 supports macOS 10.15–13." },
    aerospace: { summary: "An i3-style tiling window manager for macOS, driven by keyboard shortcuts and a plain-text configuration file.", recommendation: "Make window layout a keyboard habit.", tags: ["Tiling window manager", "Keyboard-first", "Config file"], permissions: "Requires Accessibility permission to control windows. The project is not notarized; review its official installation instructions before opening it." },
    maccy: { summary: "A lightweight menu-bar clipboard manager that keeps a searchable history of what you copy.", recommendation: "Never lose a copied snippet again.", tags: ["Clipboard history", "Menu bar", "Lightweight"], compatibility: "macOS 14+" },
    "karabiner-elements": { summary: "A powerful macOS keyboard customizer for remapping keys, building complex rules, and configuring devices.", recommendation: "Remap the keys macOS will not.", tags: ["Keyboard remapping", "Complex rules", "Input devices"], permissions: "Requires Input Monitoring and a system extension, and may request Accessibility and background-service approval. Review these elevated system changes before installing." },
    dupeguru: { summary: "Finds duplicate files using filenames or file contents, with separate modes for pictures and music.", recommendation: "Find duplicates before deciding what to remove.", tags: ["Duplicate finder", "File cleanup", "Images & music"] },
    logseq: { summary: "Organize notes, tasks, and knowledge with outlines, block references, and backlinks. The current 2.x database edition is in beta.", recommendation: "Connect scattered notes into knowledge.", tags: ["Notes", "Local-first", "Knowledge base"], compatibility: "The 2.x database edition is in beta. Legacy Markdown / Org file graphs moved to Logseq OG. Back up before migrating." },
    "drawio-desktop": { summary: "Create flowcharts, architecture diagrams, UML, and more offline, with import and export for common formats.", recommendation: "Diagram without sending the file to a whiteboard.", tags: ["Diagrams", "Flowcharts", "Offline"] },
    "obs-studio": { summary: "An open-source studio for recording and streaming, with scenes, sources, audio mixing, and local capture.", recommendation: "Record and stream from one capable workspace.", tags: ["Recording", "Live streaming", "Scenes"], permissions: "Screen Recording access is required to capture your display. Grant only the camera and microphone access you need." },
    "lossless-cut": { summary: "Trim, join, and extract video or audio quickly around keyframes, avoiding re-encoding when possible.", recommendation: "Cut a clip without re-encoding the whole video.", tags: ["Lossless trim", "Video", "FFmpeg"] },
    audacity: { summary: "A mature multitrack audio editor for recording, editing, noise reduction, and format conversion.", recommendation: "Use a proper timeline when audio needs detail.", tags: ["Audio editing", "Recording", "Noise reduction"] },
    mangodisk: { summary: "Inspect disk use, duplicates, and uninstallable apps before choosing what to remove.", recommendation: "See what is taking up space before you delete it.", tags: ["Disk analysis", "Uninstaller", "Duplicates"] },
    netnewswire: { summary: "A fast, local-first RSS reader that brings sites, blogs, and subscriptions into one quiet inbox.", recommendation: "Read your favorite sites together in one place.", tags: ["RSS", "Reading", "Local-first"] },
    appflowy: { summary: "A local-first workspace for documents, databases, and projects, with optional collaboration and sync.", recommendation: "Keep notes, tasks, and knowledge in your hands.", tags: ["Documents", "Databases", "Local-first"], compatibility: "macOS downloads include Apple Silicon, Intel, and Universal builds." },
    onlyoffice: { summary: "Edit documents, spreadsheets, presentations, and PDFs offline, with support for common Office formats and PDF forms.", recommendation: "Start here when Office compatibility matters.", tags: ["Office compatible", "Documents", "Spreadsheets"], compatibility: "macOS 10.13+ · Intel and Apple Silicon downloads available" },
    qownnotes: { summary: "A Markdown notes app built around ordinary files, with folder and Nextcloud workflows.", recommendation: "Notes are files—take them anywhere.", tags: ["Markdown", "Notes", "Nextcloud"] },
    "koodo-reader": { summary: "Read EPUB, PDF, MOBI, and more offline, with annotations, notes, and a local library.", recommendation: "A personal library without platform lock-in.", tags: ["E-books", "PDF", "Local library"] },
    darktable: { summary: "An open-source darkroom workflow for RAW photo management and non-destructive editing.", recommendation: "Edit RAW seriously, without a subscription.", tags: ["RAW", "Color grading", "Photo management"], compatibility: "The current 5.6.2 Mac installer is Apple Silicon only. Check the download page for OS requirements; Intel users need an older build." },
    rawtherapee: { summary: "A high-quality RAW processor with deep control over exposure, sharpening, and color.", recommendation: "Bring the detail back from your camera files.", tags: ["RAW", "Developing", "Color"], compatibility: "The current macOS release is a Universal ZIP archive. Check the download page for the required macOS version." },
    amethyst: { summary: "An approachable automatic tiling window manager for macOS, with layouts and shortcuts.", recommendation: "Let windows arrange themselves so you can focus.", tags: ["Auto tiling", "Window management", "Shortcuts"], permissions: "Requires Accessibility permission to read and arrange other apps’ windows.", compatibility: "macOS 10.15+" },
    thaw: { summary: "Organize, hide, and search menu bar icons so the top of your screen stays usable.", recommendation: "Keep your menu bar tidy and easy to use.", tags: ["Menu bar", "Icon organizer", "Search"], compatibility: "Stable 2.1 supports macOS 26 only; the 3.x beta requires macOS 27. Use Releases to find builds for older systems." },
    linearmouse: { summary: "Give each external mouse and trackpad its own scrolling, pointer, and acceleration feel.", recommendation: "An external mouse should feel like yours.", tags: ["Mouse", "Trackpad", "Scrolling"], permissions: "Requires Accessibility permission to apply input-device settings." },
    "background-music": { summary: "Control each app’s volume separately and optionally record system audio.", recommendation: "One loud app should not surprise you.", tags: ["Per-app volume", "System audio", "Recording"], permissions: "Installs an audio driver. Recording may also request Microphone permission.", compatibility: "macOS 10.13+" },
    "keeping-you-awake": { summary: "Prevent your Mac from sleeping for a set time—handy for downloads, demos, and transfers.", recommendation: "When you need it awake, keep it awake.", tags: ["Stay awake", "Menu bar", "Timer"], compatibility: "macOS 10.13+" },
    latest: { summary: "Check for and install updates for supported apps from the Mac App Store or apps using Sparkle.", recommendation: "Check app updates without opening every app.", tags: ["App updates", "Checks", "Lightweight"], compatibility: "macOS 10.15+" },
    layoutkeeper: { summary: "Restore saved window layouts when you reconnect a monitor, with optional brightness sync and keep-awake modes.", recommendation: "Reconnect. Restore your windows.", tags: ["External display", "Window layout", "Stay awake"], compatibility: "macOS 14+ · Intel and Apple Silicon. Restoring windows across Spaces requires macOS 26+. Hardware brightness control needs Apple Silicon and a compatible DDC display.", permissions: "Requires Accessibility. No Screen Recording or Input Monitoring is needed. Release builds are self-signed, not notarized by Apple." },
    localsend: { summary: "Send files, text, and clipboard content directly over the local network, without a cloud relay.", recommendation: "Send a file without uploading it first.", tags: ["Local transfer", "Cross-platform", "No cloud"] },
    openmtp: { summary: "Browse, drag, and transfer files directly between a Mac and Android or other MTP devices.", recommendation: "Move files between your Mac and Android with ease.", tags: ["Android", "MTP", "File transfer"], compatibility: "macOS 11+" },
    kopia: { summary: "A backup tool with snapshots, deduplication, and encryption for local or remote destinations.", recommendation: "A backup only counts when it restores.", tags: ["Backup", "Snapshots", "Encryption"] },
    syncthing: { summary: "Sync chosen folders directly between devices without handing files to a third-party cloud.", recommendation: "Sync files without giving them away.", tags: ["File sync", "End-to-end", "Decentralized"], compatibility: "Official macOS archives contain a command-line program configured through a browser interface. Choose the build for your chip." },
    cryptomator: { summary: "Encrypt files locally before they reach a cloud drive; you keep control of the keys.", recommendation: "Lock files before they go to the cloud.", tags: ["Encryption", "Cloud drives", "Privacy"] },
    lulu: { summary: "Monitor and allow or block outbound network connections on a per-app basis.", recommendation: "You should decide which apps get online.", tags: ["Firewall", "Network connections", "Privacy"] },
    utm: { summary: "Run other operating systems on your Mac using QEMU or Apple’s virtualization framework, including cross-architecture emulation.", recommendation: "Use another system without another computer.", tags: ["Virtual machines", "QEMU", "Development & testing"] },
    alacritty: { summary: "A fast, clearly configured cross-platform terminal for people who live in the command line.", recommendation: "A terminal should be fast, not flashy.", tags: ["Terminal", "Development", "GPU rendering"] },
    espanso: { summary: "Expand short phrases into templates, dates, and reusable text to avoid repetitive typing.", recommendation: "Do not type the same thing twice.", tags: ["Text expansion", "Templates", "Automation"] },
    hammerspoon: { summary: "Use Lua to connect shortcuts, windows, menu-bar items, and system actions into your own workflow.", recommendation: "Give repetitive actions to a script.", tags: ["Lua", "Automation", "Shortcuts"], permissions: "Automation scripts can request Accessibility, file, or network access. Run only configurations you have reviewed." },
    swiftbar: { summary: "Turn script output into menu-bar tools for status, reminders, and custom quick actions.", recommendation: "Keep useful information out of the terminal.", tags: ["Menu bar", "Scripts", "Automation"], compatibility: "macOS 12+" },
    anki: { summary: "Build durable knowledge with spaced repetition, flexible card templates, and optional sync for your own study material.", recommendation: "To remember longer, do not just review once.", tags: ["Flashcards", "Spaced repetition", "Learning"] },
    "super-productivity": { summary: "A local-first workspace for tasks, time tracking, Pomodoro sessions, and project rhythm.", recommendation: "Today’s work should not live in four apps.", tags: ["Tasks", "Time tracking", "Pomodoro"] },
    tablepro: { summary: "A native Mac client for browsing, editing, and querying SQL and NoSQL databases, with data import and export.", recommendation: "Checking one record should not require a full IDE.", tags: ["Databases", "SQL", "Native Mac"], compatibility: "macOS 13+" },
    kap: { summary: "A lightweight screen recorder made for macOS, ideal for quick, polished demonstrations.", recommendation: "Record a demo without opening a broadcast studio.", tags: ["Screen recording", "GIF", "Demos"] },
    "jellyfin-media-player": { summary: "Play films, music, and TV from your own Jellyfin server. Previously named Jellyfin Media Player.", recommendation: "Your library deserves its own player.", tags: ["Media center", "Jellyfin", "Personal library"], compatibility: "Stable v1.12 requires macOS 13+. Its installers still use the Jellyfin Media Player name. Requires a Jellyfin server." },
    godot: { summary: "A complete, approachable open-source engine for making 2D, 3D, and interactive work on a Mac.", recommendation: "Make the playable idea before buying an engine.", tags: ["Game engine", "2D", "3D"] },
    freecad: { summary: "Parametric 3D modeling for parts, technical drawings, and designs that need to change cleanly.", recommendation: "A model worth making should survive a dimension change.", tags: ["3D modeling", "CAD", "Parametric"] },
    keepassxc: { summary: "Keep passwords in an encrypted database you control, with offline use and optional browser integration.", recommendation: "Your password vault belongs in your hands.", tags: ["Password manager", "Offline-first", "Encryption"] },
    cyberduck: { summary: "A native client for SFTP, WebDAV, S3, and many cloud stores, with bookmarks and straightforward transfers.", recommendation: "Managing server files can feel like using Finder.", tags: ["SFTP", "Cloud storage", "File transfer"] },
    finetune: { summary: "Set each app’s volume, route audio to different output devices, and shape the sound with a 10-band equalizer.", recommendation: "Give every app its own volume.", tags: ["Per-app volume", "Audio routing", "Equalizer"], compatibility: "macOS 15+", permissions: "Requires Screen & System Audio Recording permission to capture and adjust app audio." },
    onlyswitch: { summary: "Put common macOS controls—such as hidden files, appearance, and low-power mode—in the menu bar.", recommendation: "One switch should not take three layers of Settings.", tags: ["Menu bar", "System controls", "Productivity"] },
    sloth: { summary: "See which processes hold files, listen on ports, or keep network connections open.", recommendation: "You should see who is holding a file at a glance.", tags: ["Process diagnostics", "Open files", "Network connections"] },
    applite: { summary: "Install, update, and uninstall Homebrew Cask apps through a native interface. Applite can set up Homebrew for you.", recommendation: "Install apps without learning Terminal.", tags: ["Homebrew", "App updates", "GUI"], compatibility: "macOS 14+ · Intel and Apple Silicon · No existing Homebrew installation required", permissions: "Needs network access to download apps. Some installations may request administrator approval. Can reuse an existing Homebrew installation." },
    "github-desktop": { summary: "Use a clear visual workflow for commits, branches, comparisons, and pull requests in everyday Git work.", recommendation: "Git should be powerful without feeling punishing.", tags: ["Git", "Version control", "Development"] },
    vscodium: { summary: "A community-built, open-source code editor distribution with familiar extensions and debugging workflows.", recommendation: "Keep your editor capable, with less telemetry.", tags: ["Code editor", "Extensions", "Development"], compatibility: "macOS 12+" },
    dbeaver: { summary: "A universal database client for queries, schema browsing, and data import or export across many engines.", recommendation: "One client for the databases you use.", tags: ["Databases", "SQL", "Data management"] },
    zed: { summary: "A fast native code editor focused on collaboration, language tooling, and a fluid daily coding experience.", recommendation: "Fast editing that keeps you in the flow.", tags: ["Code editor", "Collaboration", "Native performance"] },
    codeedit: { summary: "A native Mac code editor in development, with project browsing, syntax highlighting, a terminal, and Git integration.", recommendation: "Try a native editor taking shape.", tags: ["Code editor", "Swift-native", "Lightweight"], compatibility: "Still in development; the project does not yet recommend it for production work. Check each release for macOS requirements." },
    xcodes: { summary: "Download, switch, and manage multiple Xcode versions in one place for different projects and systems.", recommendation: "Manage multiple Xcode versions without hunting down installers.", tags: ["Xcode", "Dev environment", "Version management"], compatibility: "macOS 13+ · An Apple Account is required to download Xcode." },
    vlc: { summary: "The classic play-anything media player for local files, discs, streams, and less common codecs.", recommendation: "If a video will not open, try VLC first.", tags: ["Media player", "Wide format support", "Streaming"] },
    "subtitle-edit": { summary: "A complete subtitle editor for writing, proofreading, translating, and syncing subtitles with waveforms and spectrograms.", recommendation: "When subtitles drift, do not drag them by eye.", tags: ["Subtitles", "Timeline", "Speech recognition"] },
    subler: { summary: "A native MP4/M4V packaging and metadata tool for organizing subtitles, audio tracks, artwork, and media details.", recommendation: "Put the subtitles and artwork into the delivered file.", tags: ["MP4", "Subtitle muxing", "Metadata"] },
    mediainfo: { summary: "Inspect codecs, bit rates, tracks, colour, subtitles, and other technical facts inside media containers.", recommendation: "Before delivery, know exactly what is in the file.", tags: ["Codec details", "Media inspection", "Metadata"] },
    mixxx: { summary: "Free DJ software with multiple decks, controller mappings, beat synchronization, and music library management.", recommendation: "Serious mixing does not require a subscription.", tags: ["DJ", "Mixing", "Music library"], compatibility: "Download the Mac installer from the official site; the current stable GitHub release has no installers attached. Check the supported-controller list." },
    musescore: { summary: "Create, edit, and engrave sheet music with MIDI, import/export, and a complete notation workflow.", recommendation: "Write a score without renting notation software.", tags: ["Sheet music", "MIDI", "Music creation"] },
    firefox: { summary: "A mature open-source browser with sync, extensions, privacy controls, and capable developer tools.", recommendation: "For a dependable browser, Firefox remains a first choice.", tags: ["Browser", "Extensions", "Privacy"] },
    "zen-browser": { summary: "An open-source Firefox-based browser that emphasizes workspaces, split views, and organized tabs for focused browsing.", recommendation: "Lots of tabs still deserve room to focus.", tags: ["Browser", "Workspaces", "Tab management"] },
    thunderbird: { summary: "An open-source desktop email client that brings multiple accounts, calendars, contacts, RSS, and local search together.", recommendation: "Bring multiple inboxes into one quiet desktop.", tags: ["Email", "Calendar", "RSS"] },
    signal: { summary: "An open-source private messenger for messages and calls, with optional history transfer from a linked phone.", recommendation: "Private conversations deserve verifiable end-to-end encryption.", tags: ["Private messaging", "End-to-end encryption", "Cross-platform"] },
    blender: { summary: "A complete 3D creation suite for modeling, materials, animation, rendering, and even video editing.", recommendation: "Model, animate, and render in one capable tool.", tags: ["3D creation", "Modeling", "Rendering"], compatibility: "Blender 5.x for Mac supports Apple Silicon only. Intel Mac users should choose 4.5 LTS and check its hardware requirements." },
    bruno: { summary: "An open-source, offline-first API client that stores collections as local files and works well with Git.", recommendation: "Test APIs without handing your work to a cloud first.", tags: ["API testing", "Offline-first", "Git"] },
    "kilobat-cli": { summary: "Diagnose network connections, latency, and DNS from Terminal. Get JSON output or use it as a local MCP server.", recommendation: "Find out why a connection fails.", tags: ["Command line", "Network diagnostics", "MCP"], compatibility: "macOS 14+; building through Homebrew requires Xcode 16+. This listing covers the free, open-source CLI. The separate desktop app is proprietary and has optional paid features.", permissions: "Diagnostics access the network. Some Wi-Fi names, filter status, and budget data require the separate desktop app and location permission. System-changing commands may need confirmation or administrator approval." }
  },
  ja: {
    shotmap: { summary: "動画から自動で選んだコマを手動で調整。複数の動画を分割画像にまとめ、PNG / JPGで書き出せます。", recommendation: "長い動画を、一枚で見返せる。", tags: ["Swiftネイティブ", "オフライン処理", "動画", "画像"], compatibility: "macOS 13以降 · Intel / Apple Silicon" },
    lumaview: { summary: "画像やPDFを軽快に閲覧。フォルダ内の画像送り、EXIF表示、拡大・回転、印刷に対応します。", recommendation: "画像を見るだけなら、軽くていい。", tags: ["Swiftネイティブ", "画像・PDF", "軽量"], compatibility: "macOS 12以降 · Intel / Apple Silicon", permissions: "選択した画像・PDF・フォルダへのアクセスが必要です。" },
    "mp4flow": { summary: "動画をまとめてMP4に変換。カット・結合・画面調整に加え、音声トラックや字幕、目標ファイルサイズを選べます。", recommendation: "MP4だけなら、重い編集ソフトは要らない。", tags: ["Swiftネイティブ", "ローカル処理", "MP4"], compatibility: "macOS 13以降 · Intel / Apple Silicon · FFmpeg / ffprobeが別途必要" },
    "launchpad-back": { summary: "従来のLaunchpadのグリッド、ページ、フォルダ、ドラッグ＆ドロップ、検索の操作感を再現します。", recommendation: "アプリ探しを、手になじむ操作へ。", tags: ["アプリ起動", "グリッド", "フォルダ"] },
    loop: { summary: "ドラッグ、ショートカット、フローティングメニューでウインドウを素早く整列。画面分割やマルチタスクに向いています。", recommendation: "ウインドウ整理は、ドラッグ一つで。", tags: ["ウインドウ管理", "ショートカット", "画面分割"], permissions: "ほかのアプリのウインドウを移動・リサイズするため、「アクセシビリティ」へのアクセスが必要です。", compatibility: "macOS 13以降 · Intel / Apple Silicon" },
    "alt-tab": { summary: "アプリではなくウインドウ単位で切り替え。サムネイル、最小化したウインドウ、複数ディスプレイに対応します。", recommendation: "アプリではなく、ウインドウを切り替える。", tags: ["ウインドウ切替", "複数ディスプレイ", "キーボード"], permissions: "ウインドウの読み取りと切り替えに、「アクセシビリティ」へのアクセスが必要です。", compatibility: "macOS 12以降 · ウィンドウ切り替えなどの基本機能は無料。検索や一部の外観設定は有料のPro機能です。" },
    ice: { summary: "メニューバーのアイコンを区分けし、隠すか常時表示するかを選べます。上部がツールで埋まるのを防ぎます。", recommendation: "メニューバーを、物置にしない。", tags: ["メニューバー", "整理", "軽量"], compatibility: "macOS 14以降 · Intel / Apple Silicon" },
    stats: { summary: "CPU、メモリ、ディスク、ネットワーク、バッテリー、センサーなどの状態をメニューバーから確認できます。", recommendation: "最適化の前に、まず状態を見る。", tags: ["システム監視", "メニューバー", "パフォーマンス"], compatibility: "macOS 12以降 · Intel / Apple Silicon" },
    monitorcontrol: { summary: "DDC/CI対応ディスプレイの明るさと音量を調整。キーボードのメディアキーとも連携します。", recommendation: "外部ディスプレイの調整に、ボタン探しは不要。", tags: ["外部ディスプレイ", "明るさ", "DDC/CI"], permissions: "外部ディスプレイをキーボードの標準輝度キーで操作するには、「アクセシビリティ」へのアクセスが必要です。" },
    puremac: { summary: "ディスク使用量を確認し、アプリや開発用キャッシュを整理。削除前に対象を確認でき、アプリのアンインストールにも対応します。", recommendation: "消す前に、何が変わるかを知る。", tags: ["ストレージ分析", "クリーニング", "プレビュー"], permissions: "クリーニング機能は追加のファイルアクセスを求めることがあります。実行前に対象パスを一つずつ確認してください。", compatibility: "macOS 13以降" },
    purge: { summary: "キャッシュ、開発作業の残り、大きなファイルを確認して整理。通常のファイルは標準でゴミ箱へ移動します。", recommendation: "キャッシュを掃除するなら、まずこれ。", tags: ["キャッシュ削除", "大容量ファイル", "開発環境"], permissions: "フルディスクアクセスは任意です。より多くのフォルダをスキャンする必要があるときだけ検討してください。", compatibility: "macOS 13以降" },
    libreoffice: { summary: "無料のオープンソース文書・表計算・プレゼンテーションスイート。Officeファイルの閲覧、軽い編集、変換に使えます。", recommendation: "Officeファイルをオフラインで扱うときの、頼れる選択肢。", tags: ["文書", "表計算", "プレゼンテーション"] },
    zettlr: { summary: "Markdown、引用管理、長文執筆を一つの作業環境にまとめる、研究・執筆向けのエディタです。", recommendation: "原稿と引用を、自分のファイルに残せる。", tags: ["Markdown", "引用管理", "長文執筆"] },
    joplin: { summary: "Markdown対応のノートアプリ。端末間同期やエンドツーエンド暗号化を、自分で選んだ保存先で利用できます。", recommendation: "同期先を自分で選べるノート。", tags: ["ノート", "Markdown", "同期"] },
    iina: { summary: "macOS向けに設計された動画プレーヤー。字幕、プレイリスト、各種動画・音声形式を軽快に扱えます。", recommendation: "ローカル動画は、ただ気持ちよく再生したい。", tags: ["動画再生", "字幕", "mpv"] },
    handbrake: { summary: "動画を多様な形式へ変換できる、定番のオープンソース・トランスコーダーです。プリセットと詳細設定の両方を備えます。", recommendation: "動画変換を、迷わず確実に。", tags: ["動画変換", "エンコード", "プリセット"] },
    "yt-dlp": { summary: "多数の対応サイトから動画・音声を取得できる、機能豊富なコマンドラインツールです。", recommendation: "許可された保存を、きちんと自動化。", tags: ["コマンドライン", "動画・音声", "ダウンロード"] },
    macshot: { summary: "注釈、スクロールキャプチャ、OCR、画面収録、簡易編集を一つにまとめたネイティブのキャプチャツールです。", recommendation: "撮影から注釈まで、これ一つで。", tags: ["スクリーンショット", "画面収録", "スクロールキャプチャ"], permissions: "撮影・録画には「画面収録」許可が必要です。音声録音では「マイク」、グローバル操作では必要に応じて「アクセシビリティ」または「入力監視」を求めます。" },
    imageoptim: { summary: "画像をドラッグ＆ドロップで最適化し、見た目を保ちながらファイルサイズを小さくします。", recommendation: "公開前の画像を、軽く整える。", tags: ["画像圧縮", "最適化", "ドラッグ＆ドロップ"] },
    krita: { summary: "イラスト、コンセプトアート、コミック制作に対応する、機能豊富なデジタルペイントソフトです。", recommendation: "描くための道具が、ここにある。", tags: ["デジタルペイント", "イラスト", "PSD"] },
    rectangle: { summary: "ショートカットやスナップ領域でウインドウを移動・リサイズし、画面を素早く整えます。", recommendation: "ウインドウの置き場所を、迷わず決める。", tags: ["ウインドウ整列", "ショートカット", "スナップ"], permissions: "ほかのアプリのウインドウを操作するため、「アクセシビリティ」へのアクセスが必要です。", compatibility: "最新版はmacOS 14以降が必要です。macOS 10.15〜13では1.100を利用できます。" },
    aerospace: { summary: "i3のようなキーボード中心の操作で、ウインドウをタイル状に配置するmacOS向けウインドウマネージャです。", recommendation: "キーボードで、ウインドウを整列。", tags: ["タイル型WM", "キーボード操作", "ワークスペース"], permissions: "ウインドウ操作に「アクセシビリティ」へのアクセスが必要です。公式バイナリは未公証と明記されているため、配布元と更新情報を確認して導入してください。" },
    maccy: { summary: "コピー履歴を軽量に保存し、必要な内容をすばやく呼び出せるクリップボードマネージャです。", recommendation: "さっきコピーしたものを、すぐ戻せる。", tags: ["クリップボード", "履歴", "軽量"], compatibility: "macOS 14以降" },
    "karabiner-elements": { summary: "キーの入れ替え、複合キー、デバイス別設定まで扱える、macOS向けの高機能キーボードカスタマイザーです。", recommendation: "合わないキー配置を、自分で変える。", tags: ["キーリマップ", "キーボード", "高度な設定"], permissions: "キー入力を扱うため、「入力監視」と「アクセシビリティ」、システム拡張の許可が必要です。公式配布パッケージから導入し、設定内容を確認してください。" },
    dupeguru: { summary: "ファイル名や内容を比較して重複ファイルを探し、削除候補を自分で確認できるツールです。類似画像の検索にも対応します。", recommendation: "重複を見つけてから、削除を決める。", tags: ["重複ファイル", "類似画像", "ストレージ整理"] },
    logseq: { summary: "アウトライン、ブロック参照、双方向リンクでノートやタスクを整理。現在の2.xデータベース版はベータ版です。", recommendation: "散らばったメモを、つながる知識に。", tags: ["ノート", "ローカル優先", "ナレッジ管理"], compatibility: "2.xデータベース版はベータ版です。従来のMarkdown / Orgファイル版はLogseq OGへ移行しました。移行前にバックアップしてください。" },
    "drawio-desktop": { summary: "フローチャート、構成図、UMLなどをオフラインで作成。一般的な形式の読み込みと書き出しに対応します。", recommendation: "図はオンラインのホワイトボードに預けなくていい。", tags: ["図表作成", "フローチャート", "オフライン"] },
    "obs-studio": { summary: "シーン、映像・音声ソース、ミキサーをまとめて扱える、録画・配信向けのオープンソーススタジオです。", recommendation: "録画も配信も、一つの作業場所で。", tags: ["画面収録", "ライブ配信", "シーン"], permissions: "画面を取り込むには「画面収録」が必要です。カメラとマイクは使う機能に応じて許可してください。" },
    "lossless-cut": { summary: "キーフレームを基準に動画・音声をすばやく切り出し、可能な限り再エンコードを避けます。", recommendation: "一部を切るだけなら、全編を再エンコードしない。", tags: ["ロスレスカット", "動画", "FFmpeg"] },
    audacity: { summary: "録音、編集、ノイズ除去、形式変換まで対応する、定番のマルチトラック音声エディタです。", recommendation: "音声を詰めるなら、きちんとしたタイムラインで。", tags: ["音声編集", "録音", "ノイズ除去"] },
    mangodisk: { summary: "ディスク使用量、重複ファイル、削除可能なアプリを確認してから、整理の対象を選べます。", recommendation: "削除前に、容量を使っている項目を確認。", tags: ["ディスク分析", "アンインストール", "重複ファイル"] },
    netnewswire: { summary: "軽快でローカル優先のRSSリーダー。サイトやブログの更新を、静かな受信箱にまとめます。", recommendation: "お気に入りのサイトを、デスクトップでまとめて読める。", tags: ["RSS", "読む", "ローカル優先"] },
    appflowy: { summary: "文書、データベース、プロジェクトをまとめるローカル優先のワークスペース。必要に応じて同期や共同作業も選べます。", recommendation: "ノートもタスクも、手元に残せる。", tags: ["文書", "データベース", "ローカル優先"], compatibility: "macOS向けにApple Silicon・Intel・Universal版を配布しています。" },
    onlyoffice: { summary: "文書・表計算・プレゼン・PDFをオフラインで編集。Office形式のファイルやPDFフォームにも対応します。", recommendation: "Office互換が必要なら、まずこれ。", tags: ["Office互換", "文書", "表計算"], compatibility: "macOS 10.13以降 · Intel / Apple Silicon向けを配布" },
    qownnotes: { summary: "普通のMarkdownファイルを軸にしたノートアプリ。フォルダやNextcloudと組み合わせて使えます。", recommendation: "ノートはファイル。どこへでも持っていける。", tags: ["Markdown", "ノート", "Nextcloud"] },
    "koodo-reader": { summary: "EPUB、PDF、MOBIなどをオフラインで読める電子書籍リーダー。注釈、ノート、ローカル書庫に対応します。", recommendation: "自分の書庫を、特定のサービスに縛られない。", tags: ["電子書籍", "PDF", "ローカル書庫"] },
    darktable: { summary: "RAW写真の管理と非破壊編集に向く、オープンソースの暗室ワークフローです。", recommendation: "RAWを本気で仕上げるなら、サブスクなしで。", tags: ["RAW", "カラー調整", "写真管理"], compatibility: "現行5.6.2の公式MacインストーラーはApple Silicon版のみです。OS要件はダウンロードページを確認し、Intelでは旧版を探してください。" },
    rawtherapee: { summary: "露出、シャープネス、色を細かく追い込める、高品質なRAW現像ソフトです。", recommendation: "カメラの原データから、細部を取り戻す。", tags: ["RAW", "現像", "色"], compatibility: "現行のmacOS版はUniversalのZIP形式です。必要なmacOSバージョンはダウンロードページで確認してください。" },
    amethyst: { summary: "複数のレイアウトとショートカットを備えた、使い始めやすい自動タイル型ウインドウマネージャです。", recommendation: "ウインドウは任せて、作業に集中。", tags: ["自動タイル", "ウインドウ管理", "ショートカット"], permissions: "ほかのアプリのウインドウを読み取り・整列するため、「アクセシビリティ」へのアクセスが必要です。", compatibility: "macOS 10.15以降" },
    thaw: { summary: "メニューバーのアイコンを整理、非表示、検索。上部がアイコンだらけでも使いやすくします。", recommendation: "メニューバーをすっきり整理。", tags: ["メニューバー", "アイコン整理", "検索"], compatibility: "安定版2.1はmacOS 26専用。3.xベータ版はmacOS 27が必要です。古いOS向けはReleasesで対応版を確認してください。" },
    linearmouse: { summary: "外付けマウスやトラックパッドごとに、スクロール、ポインタ、加速感を設定できます。", recommendation: "外付けマウスも、自分の手になじむ。", tags: ["マウス", "トラックパッド", "スクロール"], permissions: "入力デバイスの設定を適用するため、「アクセシビリティ」へのアクセスが必要です。" },
    "background-music": { summary: "アプリごとの音量を個別に調整し、必要ならシステム音声も録音できます。", recommendation: "一つのアプリに、突然大きな音を出させない。", tags: ["アプリ別音量", "システム音声", "録音"], permissions: "オーディオドライバを導入します。録音では「マイク」許可を求めることがあります。", compatibility: "macOS 10.13以降" },
    "keeping-you-awake": { summary: "決めた時間だけMacの自動スリープを防止。ダウンロード、デモ、転送時に便利です。", recommendation: "眠らせたくないときは、起こしておく。", tags: ["スリープ防止", "メニューバー", "タイマー"], compatibility: "macOS 10.13以降" },
    latest: { summary: "Mac App StoreのアプリやSparkle対応アプリの更新をまとめて確認・実行できます。", recommendation: "アプリを一つずつ開かずに、更新を確認。", tags: ["アプリ更新", "確認", "軽量"], compatibility: "macOS 10.15以降" },
    layoutkeeper: { summary: "外付けディスプレイの再接続時にウィンドウ配置を復元。明るさ連動やスリープ防止にも対応します。", recommendation: "つなぎ直して、元の配置へ。", tags: ["外付けディスプレイ", "ウィンドウ配置", "スリープ防止"], compatibility: "macOS 14以降 · Intel / Apple Silicon。Spaces間の復元はmacOS 26以降が必要です。ハードウェア輝度調整はApple SiliconとDDC対応ディスプレイが必要です。", permissions: "「アクセシビリティ」が必要です。画面収録・入力監視は不要です。配布版は自己署名で、Appleの公証を受けていません。" },
    localsend: { summary: "クラウドを経由せず、同じネットワーク内でファイル、テキスト、クリップボードを直接送れます。", recommendation: "送る前に、アップロードしなくていい。", tags: ["ローカル転送", "クロスプラットフォーム", "クラウド不要"] },
    openmtp: { summary: "MacとAndroidなどのMTP機器の間で、ファイルを直接ブラウズ、ドラッグ、転送できます。", recommendation: "Androidとのファイル転送も、Macから手軽に。", tags: ["Android", "MTP", "ファイル転送"], compatibility: "macOS 11以降" },
    kopia: { summary: "スナップショット、重複排除、暗号化を備え、ローカルや各種リモート保存先にバックアップできます。", recommendation: "バックアップは、復元できて初めて役に立つ。", tags: ["バックアップ", "スナップショット", "暗号化"] },
    syncthing: { summary: "指定したフォルダを端末同士で直接同期。第三者のクラウドにファイルを預ける必要はありません。", recommendation: "同期しても、ファイルを手放さない。", tags: ["ファイル同期", "エンドツーエンド", "分散型"], compatibility: "公式macOS版はコマンドラインプログラムの圧縮ファイルで、設定はブラウザから行います。CPUに合う版を選んでください。" },
    cryptomator: { summary: "クラウドドライブへ送る前にファイルをローカルで暗号化。鍵は自分で管理します。", recommendation: "クラウドへ行く前に、ファイルをロック。", tags: ["暗号化", "クラウドドライブ", "プライバシー"] },
    lulu: { summary: "アプリごとに外向きのネットワーク接続を監視し、許可またはブロックするルールを作れます。", recommendation: "どのアプリをネットにつなぐかは、自分で決める。", tags: ["ファイアウォール", "ネットワーク接続", "プライバシー"] },
    utm: { summary: "QEMUとAppleの仮想化フレームワークで別のOSを実行。仮想化に加え、異なるCPU構成のエミュレーションにも対応します。", recommendation: "別のOSが必要でも、別のPCは要らない。", tags: ["仮想マシン", "QEMU", "開発・テスト"] },
    alacritty: { summary: "応答が速く、設定も明快なクロスプラットフォーム端末。コマンドラインを日常的に使う人向けです。", recommendation: "端末は速く、派手でなくていい。", tags: ["ターミナル", "開発", "GPUレンダリング"] },
    espanso: { summary: "短い入力からテンプレート、日付、定型文を展開し、繰り返し入力を減らします。", recommendation: "いつもの言葉を、何度も打たない。", tags: ["テキスト展開", "テンプレート", "自動化"] },
    hammerspoon: { summary: "Luaでショートカット、ウインドウ、メニューバー、システム操作を自分のワークフローにつなげます。", recommendation: "繰り返す操作は、スクリプトへ。", tags: ["Lua", "自動化", "ショートカット"], permissions: "自動化スクリプトは「アクセシビリティ」、ファイル、ネットワークへのアクセスを求めることがあります。確認済みの設定だけを実行してください。" },
    swiftbar: { summary: "スクリプトの出力をメニューバーツールに変え、状態表示、リマインダー、独自の操作を置けます。", recommendation: "よく見る情報を、ターミナルの外へ。", tags: ["メニューバー", "スクリプト", "自動化"], compatibility: "macOS 12以降" },
    anki: { summary: "間隔反復と柔軟なカードで、学習内容を長く記憶に残せます。必要に応じて自分の教材を同期できます。", recommendation: "長く覚えるなら、一度読むだけにしない。", tags: ["暗記カード", "間隔反復", "学習"] },
    "super-productivity": { summary: "タスク、時間記録、ポモドーロ、プロジェクトのリズムを一か所で扱うローカル優先の作業台です。", recommendation: "今日の仕事を、四つのアプリに散らさない。", tags: ["タスク", "時間記録", "ポモドーロ"] },
    tablepro: { summary: "SQL・NoSQLデータベースの閲覧・編集・クエリ実行に対応するMacネイティブクライアント。データの入出力も行えます。", recommendation: "一件のデータ確認に、重いIDEは要らない。", tags: ["データベース", "SQL", "Macネイティブ"], compatibility: "macOS 13以降" },
    kap: { summary: "macOS向けの軽量な画面収録ツール。手早く見やすいデモを作るのに向いています。", recommendation: "デモを撮るだけなら、配信スタジオは要らない。", tags: ["画面収録", "GIF", "デモ"] },
    "jellyfin-media-player": { summary: "自分のJellyfinサーバーに接続し、映画・音楽・番組を再生。旧称はJellyfin Media Playerです。", recommendation: "自分のライブラリには、自分のプレーヤーを。", tags: ["メディアセンター", "Jellyfin", "自前のライブラリ"], compatibility: "安定版v1.12はmacOS 13以降に対応。配布ファイル名はJellyfin Media Playerのままです。Jellyfinサーバーが必要です。" },
    godot: { summary: "2D、3D、インタラクティブ作品をMacで作れる、親しみやすく本格的なオープンソースゲームエンジンです。", recommendation: "エンジンを買う前に、遊べるアイデアを作る。", tags: ["ゲームエンジン", "2D", "3D"] },
    freecad: { summary: "部品、技術図面、変更に強い設計のためのパラメトリック3Dモデラーです。", recommendation: "寸法変更に耐えるモデルこそ、きちんと作る価値がある。", tags: ["3Dモデリング", "CAD", "パラメトリック"] },
    keepassxc: { summary: "自分で管理する暗号化データベースにパスワードを保存。オフライン利用とブラウザー連携に対応します。", recommendation: "パスワード保管庫は、自分の手元に。", tags: ["パスワード管理", "オフライン優先", "暗号化"] },
    cyberduck: { summary: "SFTP、WebDAV、S3、各種クラウドストレージを、ブックマークと分かりやすい転送画面で扱えます。", recommendation: "サーバーのファイルも、Finderのように扱える。", tags: ["SFTP", "クラウドストレージ", "ファイル転送"] },
    finetune: { summary: "アプリごとに音量と出力先を設定。10バンドのイコライザーで音質も調整できます。", recommendation: "アプリごとに、ちょうどいい音量。", tags: ["アプリ別音量", "音声ルーティング", "イコライザー"], compatibility: "macOS 15以降", permissions: "アプリの音声を取得・調整するため、「画面収録とシステムオーディオ録音」の権限が必要です。" },
    onlyswitch: { summary: "隠しファイル、外観、低電力モードなど、よく使うmacOSの切り替えをメニューバーに置けます。", recommendation: "一つの切り替えに、設定を三階層たどらない。", tags: ["メニューバー", "システム設定", "効率化"] },
    sloth: { summary: "どのプロセスがファイルを開き、ポートを待ち受け、ネットワーク接続を維持しているか確認できます。", recommendation: "どのプロセスがファイルを掴んでいるか、ひと目で分かる。", tags: ["プロセス診断", "開いているファイル", "ネットワーク接続"] },
    applite: { summary: "Homebrew Caskのアプリを画面操作でインストール・更新・削除。Homebrewの準備も自動で行えます。", recommendation: "ターミナルを覚えずにアプリ管理。", tags: ["Homebrew", "アプリ更新", "GUI"], compatibility: "macOS 14以降 · Intel / Apple Silicon · Homebrewの事前インストールは不要", permissions: "ダウンロード時にネット接続が必要です。一部のインストールでは管理者認証を求められます。既存のHomebrewも利用できます。" },
    "github-desktop": { summary: "コミット、ブランチ、比較、プルリクエストを視覚的な流れで扱える、日常のGit作業向けアプリです。", recommendation: "Gitは強力であっても、怖くなくていい。", tags: ["Git", "バージョン管理", "開発"] },
    vscodium: { summary: "馴染みある拡張機能とデバッグの流れを備えた、コミュニティビルドのオープンソースコードエディタです。", recommendation: "便利なエディタを、より少ないテレメトリーで。", tags: ["コードエディタ", "拡張機能", "開発"], compatibility: "macOS 12以降" },
    dbeaver: { summary: "多様なDBに対応する汎用クライアント。クエリ、スキーマ閲覧、データ入出力をまとめて扱えます。", recommendation: "よく使うデータベースを、一つのツールで。", tags: ["データベース", "SQL", "データ管理"] },
    zed: { summary: "共同作業、言語ツール、日々の滑らかなコーディング体験に焦点を当てた高速ネイティブコードエディタです。", recommendation: "エディタの待ち時間を減らして、流れを止めない。", tags: ["コードエディタ", "共同作業", "ネイティブ性能"] },
    codeedit: { summary: "開発中のMacネイティブコードエディター。プロジェクト閲覧、構文強調、ターミナル、Git連携を試せます。", recommendation: "育っていくネイティブエディターを試す。", tags: ["コードエディタ", "Swiftネイティブ", "軽量"], compatibility: "現在も開発中で、公式はまだ実務での利用を推奨していません。macOSの要件は各リリースを確認してください。" },
    xcodes: { summary: "異なるプロジェクトやOS向けに、複数のXcodeを一か所でダウンロード、切り替え、管理できます。", recommendation: "複数のXcodeを、探し回らずに管理。", tags: ["Xcode", "開発環境", "バージョン管理"], compatibility: "macOS 13以降 · XcodeのダウンロードにはApple Accountが必要です。" },
    vlc: { summary: "ローカルファイル、ディスク、ストリーム、珍しいコーデックまで扱える、定番の万能メディアプレーヤーです。", recommendation: "開けない動画があれば、まずVLC。", tags: ["メディアプレーヤー", "幅広い形式", "ストリーミング"] },
    "subtitle-edit": { summary: "波形やスペクトログラムを見ながら、字幕の作成、校正、翻訳、同期まで行える総合エディタです。", recommendation: "字幕のずれを、目だけで直さない。", tags: ["字幕", "タイムライン", "音声認識"] },
    subler: { summary: "字幕、音声トラック、アートワーク、メタデータを整理できる、MP4/M4V向けネイティブ編集ツールです。", recommendation: "納品前に、字幕と表紙を一つのファイルへ。", tags: ["MP4", "字幕mux", "メタデータ"] },
    mediainfo: { summary: "映像・音声コンテナ内のコーデック、ビットレート、トラック、色、字幕などの技術情報を確認できます。", recommendation: "納品前に、ファイルの中身を正確に知る。", tags: ["コーデック情報", "メディア検査", "メタデータ"] },
    mixxx: { summary: "複数デッキのミックス、コントローラー設定、ビート同期、音楽ライブラリ管理に対応する無料のDJソフトです。", recommendation: "本格的なミックスに、サブスクは要らない。", tags: ["DJ", "ミキシング", "音楽ライブラリ"], compatibility: "Mac用インストーラーは公式サイトから入手できます。現在のGitHub安定版には添付されていません。対応コントローラーは公式一覧を確認してください。" },
    musescore: { summary: "MIDI、読み書き、出力を備えた本格的なワークフローで、楽譜の作成、編集、レイアウトができます。", recommendation: "楽譜を、無料のソフトで作成・編集。", tags: ["楽譜", "MIDI", "音楽制作"] },
    firefox: { summary: "同期、拡張機能、プライバシー設定、開発者ツールを備えた、成熟したオープンソースブラウザーです。", recommendation: "迷ったら、まずFirefoxを。", tags: ["ブラウザー", "拡張機能", "プライバシー"] },
    "zen-browser": { summary: "Firefoxを基盤に、ワークスペース、分割表示、タブ整理に力を入れたオープンソースブラウザーです。", recommendation: "タブが多くても、集中できる場所を。", tags: ["ブラウザー", "ワークスペース", "タブ管理"] },
    thunderbird: { summary: "複数のメール、カレンダー、連絡先、RSS、ローカル検索をまとめて扱えるオープンソースのメールクライアントです。", recommendation: "複数の受信箱を、一つの静かなデスクトップへ。", tags: ["メール", "カレンダー", "RSS"] },
    signal: { summary: "メッセージと通話に対応するオープンソースのプライベートメッセンジャー。連携したスマートフォンから履歴も移せます。", recommendation: "私的な会話には、検証できるエンドツーエンド暗号化を。", tags: ["プライベートメッセージ", "エンドツーエンド暗号化", "クロスプラットフォーム"] },
    blender: { summary: "モデリング、マテリアル、アニメーション、レンダリング、動画編集まで扱える、統合型の3D制作スイートです。", recommendation: "モデリングからレンダリングまで、一つで。", tags: ["3D制作", "モデリング", "レンダリング"], compatibility: "Mac版Blender 5.xはApple Silicon専用です。Intel Macでは4.5 LTSを選び、動作要件を確認してください。" },
    bruno: { summary: "APIコレクションをローカルファイルとして保存し、Gitとも相性がよいオープンソースのオフライン優先APIクライアントです。", recommendation: "APIを試す前に、仕事をクラウドへ渡さない。", tags: ["APIテスト", "オフライン優先", "Git"] },
    "kilobat-cli": { summary: "ターミナルで接続・遅延・DNSを診断し、結果をJSONで出力。ローカルのMCPサーバーとしても使えます。", recommendation: "つながらない原因を調べる。", tags: ["コマンドライン", "ネットワーク診断", "MCP"], compatibility: "macOS 14以降。Homebrew経由のソースビルドにはXcode 16以降が必要です。掲載対象は無料・オープンソースのCLIです。別配布のデスクトップ版はオープンソースではなく、一部機能は有料です。", permissions: "診断時にネットワークへ接続します。一部のWi-Fi名、フィルター状態、通信量の予算情報には別途デスクトップアプリと位置情報の許可が必要です。システム設定の変更には確認や管理者認証を求められる場合があります。" }
  }
};

let activeLanguage = new URLSearchParams(location.search).get("lang") || localStorage.getItem(languageStorageKey) || localStorage.getItem(legacyLanguageStorageKey) || defaultLanguage;
if (!copy[activeLanguage]) activeLanguage = defaultLanguage;
localStorage.setItem(languageStorageKey, activeLanguage);
let activeCategory = new URLSearchParams(location.search).get("category") || "all";
if (!categories.includes(activeCategory)) activeCategory = "all";
let apps = [];

const appGrid = document.querySelector("#app-grid");
const filters = document.querySelector("#category-filters");
const standardsList = document.querySelector("#standards-list");
const searchInput = document.querySelector("#search-input");
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
  return `<a class="${className}" href="${escapeHTML(url)}" aria-label="${escapeHTML(accessibleName)}" target="_blank" rel="noreferrer">${escapeHTML(text)}<svg class="ui-icon" aria-hidden="true"><use href="assets/tabler-icons.svg?v=5c6857ca047b#${iconName}"></use></svg></a>`;
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

function cardTemplate(app) {
  const status = app.status.level === "verified" ? null : (valueAt(copy[activeLanguage], `status.${app.status.level}`) ?? valueAt(copy.zh, `status.${app.status.level}`));
  const license = licenseDescription(app.license);
  const licenseExplanation = license.slice(app.license.length).replace(/^[：:]\s*/, "");
  const compatibility = localized(app, "compatibility") || app.compatibility;
  const permissions = localized(app, "permissions") || app.permissions;
  const compatibilityLanguage = appCopy[activeLanguage]?.[app.id]?.compatibility ? (activeLanguage === "ja" ? "ja" : "en") : "zh-CN";
  const permissionsLanguage = appCopy[activeLanguage]?.[app.id]?.permissions ? (activeLanguage === "ja" ? "ja" : "en") : "zh-CN";
  const licensePopover = `<details class="license-details card-popover"><summary class="license" aria-label="${escapeHTML(t("licenseFor", { license: app.license, name: app.name }))}" title="${escapeHTML(t("licenseFor", { license: app.license, name: app.name }))}" lang="en">${escapeHTML(app.license)}</summary><div class="license-popover"><strong lang="en">${escapeHTML(app.license)}</strong><p>${escapeHTML(licenseExplanation)}</p><p class="license-note">${escapeHTML(t("licenseNote"))}</p></div></details>`;
  const details = compatibility || permissions ? `<details class="app-details card-popover"><summary aria-label="${escapeHTML(t("detailsSummary"))}" title="${escapeHTML(t("detailsSummary"))}"><svg class="ui-icon" aria-hidden="true"><use href="assets/tabler-icons.svg?v=5c6857ca047b#info-circle"></use></svg></summary><dl>${compatibility ? `<div><dt>${escapeHTML(t("compatibilityLabel"))}</dt><dd lang="${compatibilityLanguage}">${escapeHTML(compatibility)}</dd></div>` : ""}${permissions ? `<div><dt>${escapeHTML(t("permissionsLabel"))}</dt><dd lang="${permissionsLanguage}">${escapeHTML(permissions)}</dd></div>` : ""}</dl></details>` : "";
  return `<article class="app-card">
    <img class="app-icon" src="${escapeHTML(app.icon)}" alt="${escapeHTML(t("iconAlt", { name: app.name }))}" width="46" height="46" loading="lazy" decoding="async" />
    <div class="app-card-head"><div><h3 lang="en">${escapeHTML(app.name)}</h3><span class="app-type">${escapeHTML(categoryName(app.category))}</span></div><div class="app-card-meta" aria-label="${escapeHTML(t("metadataLabel"))}">${status ? `<span class="tag ${statusClass(app.status.level)}" aria-label="${escapeHTML(`${status.label}: ${status.note}`)}"><svg class="ui-icon status-check" aria-hidden="true"><use href="assets/tabler-icons.svg?v=5c6857ca047b#check"></use></svg>${escapeHTML(status.label)}</span>` : ""}${details}</div></div>
    <p class="card-summary">${escapeHTML(localized(app, "summary"))}</p>
    <p class="recommendation" title="${escapeHTML(localized(app, "recommendation"))}">${escapeHTML(localized(app, "recommendation"))}</p>
    <div class="tags" aria-label="${escapeHTML(t("metadataLabel"))}">
      ${(localized(app, "tags") || []).map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}
    </div>
    <div class="app-links">
      ${link(app.homepage, t("projectSite"), "project-link", t("projectSiteFor", { name: app.name }), "world-www")}
      ${link(app.download, t("download"), "download-link", t("downloadFor", { name: app.name }), "download")}
      ${licensePopover}
    </div>
  </article>`;
}

function renderFilters() {
  const focusedCategory = document.activeElement?.closest?.("#category-filters .filter")?.dataset.category;
  filters.innerHTML = categories.map(id => {
    const count = id === "all" ? apps.length : apps.filter(app => appCategoryIds(app).includes(id)).length;
    return `<button class="filter" type="button" data-category="${id}" aria-pressed="${id === activeCategory}"><svg class="ui-icon" aria-hidden="true"><use href="assets/tabler-icons.svg?v=5c6857ca047b#${categoryIcons[id]}"></use></svg><span>${escapeHTML(categoryName(id))}</span><span class="filter-count">${count}</span></button>`;
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
  const locale = activeLanguage === "ja" ? "ja-JP" : activeLanguage === "en" ? "en-US" : "zh-CN";
  const query = searchInput.value.trim().toLocaleLowerCase(locale);
  const list = apps.filter(app => {
    const searchText = app.searchIndex.toLocaleLowerCase(locale);
    const appCategories = appCategoryIds(app);
    const categoryMatch = activeCategory === "all" || appCategories.includes(activeCategory);
    const testedMatch = !testedFilter.checked || app.status.level === "tested";
    return categoryMatch && testedMatch && searchText.includes(query);
  }).sort((a, b) => compareApps(a, b, activeCategory));
  appGrid.innerHTML = list.map(cardTemplate).join("");
  emptyState.hidden = list.length !== 0;
  resultCount.textContent = t("foundCount", { count: list.length });
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
  renderFilters();
  renderCatalog();
  renderStandards();
}

function resetFilters() {
  activeCategory = "all";
  searchInput.value = "";
  testedFilter.checked = false;
  renderFilters();
  renderCatalog();
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
    dataURL.searchParams.set("v", "6f8dc09ae9b5");
    const response = await fetch(dataURL, { cache: "no-store" });
    if (!response.ok) throw new Error("Unable to load app data");
    apps = await response.json();
    apps.forEach(app => { app.searchIndex = buildSearchIndex(app); });
    apps.sort(compareApps);
    const params = new URLSearchParams(location.search);
    const requestedCategory = params.get("category");
    activeCategory = categories.includes(requestedCategory) ? requestedCategory : "all";
    searchInput.value = params.get("q") || "";
    testedFilter.checked = params.get("tested") === "1";
    document.querySelector("#app-total").textContent = String(apps.length);
    document.querySelector("#category-total").textContent = String(categories.length - 1);
    renderFilters();
    renderCatalog();
    renderStandards();
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

searchInput.addEventListener("input", renderCatalog);
testedFilter.addEventListener("change", renderCatalog);
clearFilters.addEventListener("click", resetFilters);
shareButton.addEventListener("click", shareDirectory);
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
  if (event.key === "Escape") appGrid.querySelectorAll(".card-popover[open]").forEach(popover => { popover.open = false; });
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
    searchInput.value = "";
    renderCatalog();
  }
});

window.addEventListener("popstate", restoreURLState);

init();
