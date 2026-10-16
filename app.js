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
    navCatalog: "软件目录",
    navStandards: "开源说明",
    navGithub: "在 GitHub 共建 ↗",
    languageLabel: "选择语言",
    category: { all: "全部", office: "办公与创作", video: "视频与音频", image: "图片与图像", launcher: "窗口与启动", menu: "菜单栏与硬件", maintenance: "Mac 优化与维护" },
    communityEyebrow: "共同推荐",
    communityHeading: "让 Mac 更好用",
    communityCopy: "从推荐一款你真正用过的开源软件开始。",
    recommendApp: "推荐一款软件",
    viewCriteria: "了解收录方式",
    communityInstructions: "在 GitHub Issue 中提交项目链接、开源许可证和适用场景。收录前会核对公开信息。",
    contributionStepsLabel: "推荐软件需要的信息",
    contribution: { sourceTitle: "项目地址", sourceDetail: "作者仓库或官网", licenseTitle: "开源许可证", licenseDetail: "例如 MIT、GPL-3.0", reasonTitle: "推荐理由", reasonDetail: "它具体解决什么问题" },
    catalogEyebrow: "开源 Mac 软件",
    catalogHeading: "软件目录",
    catalogCopy: "按用途查找；每项标明许可证与 io 实测状态。",
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
      tested: { label: "io 实测", note: "已在 iXiehao 的实际使用环境中运行；不等同于安全审计，也不保证适配所有 macOS 版本。" }
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
    standardsEyebrow: "开源说明",
    standardsHeading: "常见许可证，怎么理解",
    standard: {
      oneTitle: "MIT", oneCopy: "可使用、修改和再发布；保留许可证与版权声明即可。",
      twoTitle: "GPL", twoCopy: "公开发布修改版时，需要以 GPL 提供对应源码。",
      threeTitle: "MPL", threeCopy: "改动到的 MPL 文件需开源，可与其他代码组合。"
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
    navCatalog: "All apps",
    navStandards: "Open-source guide",
    navGithub: "Build it on GitHub ↗",
    languageLabel: "Choose language",
    category: { all: "All", office: "Work & Create", video: "Video & Audio", image: "Images & Graphics", launcher: "Windows & Launchers", menu: "Menu Bar & Hardware", maintenance: "Mac Care & Maintenance" },
    communityEyebrow: "Community picks",
    communityHeading: "Make your Mac better",
    communityCopy: "Start by recommending an open-source app you actually use.",
    recommendApp: "Recommend an app",
    viewCriteria: "View submission criteria",
    communityInstructions: "Submit through a GitHub Issue with the project link, open-source license, and a real use case. Public information is checked before listing.",
    contributionStepsLabel: "What to include with an app recommendation",
    contribution: { sourceTitle: "Project source", sourceDetail: "Author’s repository or official site", licenseTitle: "Open-source license", licenseDetail: "e.g. MIT or GPL-3.0", reasonTitle: "Why you recommend it", reasonDetail: "What problem it solves" },
    catalogEyebrow: "Open-source Mac apps",
    catalogHeading: "App directory",
    catalogCopy: "Browse by task. Every entry shows its license and io hands-on status.",
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
      tested: { label: "Tested by io", note: "Used in iXiehao’s day-to-day environment. This is not a security audit and does not guarantee compatibility with every macOS version." }
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
    standardsEyebrow: "Open-source basics",
    standardsHeading: "Common licenses, plainly explained",
    standard: {
      oneTitle: "MIT", oneCopy: "Use, modify, and redistribute it; keep the license and copyright notice.",
      twoTitle: "GPL", twoCopy: "When distributing a modified version, provide its corresponding source under GPL.",
      threeTitle: "MPL", threeCopy: "Changes to MPL-covered files stay open; other code can remain separate."
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
    navCatalog: "すべてのアプリ",
    navStandards: "オープンソースの説明",
    navGithub: "GitHubで参加する ↗",
    languageLabel: "言語を選択",
    category: { all: "すべて", office: "仕事・クリエイティブ", video: "動画・オーディオ", image: "写真・画像", launcher: "ウインドウ・起動", menu: "メニューバー・周辺機器", maintenance: "Macの最適化・メンテナンス" },
    communityEyebrow: "コミュニティのおすすめ",
    communityHeading: "Macを、もっと使いやすく。",
    communityCopy: "実際に使っているオープンソースのアプリを、一つ紹介するところから。",
    recommendApp: "おすすめのアプリを紹介する",
    viewCriteria: "掲載条件を見る",
    communityInstructions: "GitHub Issueから、プロジェクトのリンク、オープンソースライセンス、利用シーンをお寄せください。掲載前に公開情報を確認します。",
    contributionStepsLabel: "アプリ紹介に必要な情報",
    contribution: { sourceTitle: "プロジェクトの出所", sourceDetail: "作者のリポジトリまたは公式サイト", licenseTitle: "オープンソースライセンス", licenseDetail: "例：MIT / GPL-3.0", reasonTitle: "おすすめの理由", reasonDetail: "どんな課題を解決するか" },
    catalogEyebrow: "オープンソースのMacアプリ",
    catalogHeading: "アプリ一覧",
    catalogCopy: "用途で絞り込めます。各アプリにライセンスとioの実使用状況を記載しています。",
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
      tested: { label: "io 使用中", note: "iXiehaoの日常用Macで使用を確認済みです。セキュリティ監査ではなく、すべてのmacOSバージョンでの互換性を保証するものではありません。" }
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
    standardsEyebrow: "オープンソースの説明",
    standardsHeading: "よくあるライセンスの見方",
    standard: {
      oneTitle: "MIT", oneCopy: "利用・改変・再配布が可能。ライセンスと著作権表示を残します。",
      twoTitle: "GPL", twoCopy: "改変版を公開配布する場合、対応するソースを GPL で提供します。",
      threeTitle: "MPL", threeCopy: "改変した MPL 対象ファイルを公開し、他のコードは分けて扱えます。"
    },
    footerMaintained: "iXiehaoが継続して管理しています。GitHubで一緒に改善できます。",
    footerRights: "第三者の商標、名称、アイコンは各権利者に帰属します。",
    footerSource: "ソースコードを見る ↗"
  }
};

const appCopy = {
  en: {
    shotmap: { summary: "Turn key frames from local videos into controllable storyboards and contact sheets. Export PNG or JPG.", recommendation: "Review a long video at a glance.", tags: ["Swift-native", "Offline processing", "Video", "Images"] },
    lumaview: { summary: "A fast, minimal local image viewer for opening, browsing, and inspecting details.", recommendation: "Viewing images should stay lightweight.", tags: ["Swift-native", "Local images", "Lightweight"] },
    mp4flow: { summary: "Convert, trim, rotate, and merge MP4 files locally with lightweight editing tools.", recommendation: "Make an MP4 without opening an editor.", tags: ["Swift-native", "Local processing", "MP4"] },
    "launchpad-back": { summary: "Restores the familiar Launchpad experience: grid, pages, folders, drag and drop, and search.", recommendation: "Find apps the familiar way again.", tags: ["App launcher", "Grid layout"] },
    loop: { summary: "Arrange windows quickly with drag and drop, shortcuts, and a floating menu—ideal for split views and multitasking.", recommendation: "Arrange windows with one easy move.", tags: ["Window management", "Keyboard shortcuts", "Open source"], permissions: "Requires Accessibility permission to move and resize other apps’ windows." },
    "alt-tab": { summary: "Switch between windows—not just apps—with thumbnails, minimized windows, and multi-display support.", recommendation: "Switch windows when apps are not enough.", tags: ["Window switching", "Multiple displays", "Keyboard"], permissions: "Requires Accessibility permission to read and switch windows." },
    ice: { summary: "Group, hide, or always show menu bar icons so utility apps stop crowding the top of your screen.", recommendation: "Keep the menu bar from becoming clutter.", tags: ["Menu bar", "Organization", "Lightweight"] },
    stats: { summary: "Monitor CPU, memory, storage, network, battery, sensors, and more from the menu bar.", recommendation: "See what is happening before “optimizing.”", tags: ["System monitoring", "Menu bar", "Performance"] },
    monitorcontrol: { summary: "Control an external display’s brightness and volume via DDC/CI, including with your keyboard media keys.", recommendation: "Adjust an external display without its buttons.", tags: ["External display", "Brightness", "DDC/CI"], permissions: "Using the native brightness keys with external displays requires Accessibility permission." },
    puremac: { summary: "See storage use and cleanable items more transparently, so you understand before you act.", recommendation: "See what will change before cleaning.", tags: ["Storage analysis", "Cleanup", "Preview before cleaning"], permissions: "Cleanup tools may request broader file access. Review every path they will touch before proceeding." },
    purge: { summary: "Scan caches, development leftovers, and large files, then keep cleanup actions in a reviewable interface.", recommendation: "My first choice for cache cleanup.", tags: ["Cache cleanup", "Large files", "Development files"], permissions: "Full Disk Access is optional; grant it only when you need to scan additional locations." },
    libreoffice: { summary: "A free, open-source suite for documents, spreadsheets, and presentations—useful for viewing, light editing, and converting Office files.", recommendation: "A dependable offline fallback for Office files.", tags: ["Documents", "Spreadsheets", "Presentations"] },
    zettlr: { summary: "A Markdown writing workspace for notes, citations, and long-form projects.", recommendation: "Keep long-form writing and citations in your files.", tags: ["Markdown", "Writing", "Citations"] },
    joplin: { summary: "A Markdown notes app with notebooks, end-to-end encrypted sync options, and an optional Web Clipper.", recommendation: "Sync notes without locking them to one service.", tags: ["Notes", "Markdown", "Sync"] },
    iina: { summary: "A modern macOS media player built on mpv, with strong format support, playlists, and subtitle controls.", recommendation: "Open local video and get on with it.", tags: ["Media player", "Subtitles", "Local playback"] },
    handbrake: { summary: "An open-source video transcoder for converting supported video sources into practical presets and formats.", recommendation: "Reliable video conversion without the guesswork.", tags: ["Transcoding", "Video conversion", "Presets"] },
    "yt-dlp": { summary: "A command-line downloader for audio and video from many supported sites.", recommendation: "Automate permitted downloads with control.", tags: ["Command line", "Media download", "Automation"] },
    macshot: { summary: "A native macOS capture tool for screenshots, screen recording, annotation, OCR, scrolling capture, and GIF export.", recommendation: "Capture, annotate, and share in one pass.", tags: ["Screenshots", "Screen recording", "Scrolling capture"], permissions: "Requires Screen Recording. macOS may also ask for Microphone, Accessibility, or Input Monitoring when you use relevant features." },
    imageoptim: { summary: "A macOS image optimizer that reduces file size through a simple drag-and-drop workflow.", recommendation: "Make images lighter before publishing.", tags: ["Image optimization", "Compression", "Drag and drop"] },
    krita: { summary: "A free, open-source digital painting app for illustration, concept art, comics, and animation.", recommendation: "A real canvas for serious drawing.", tags: ["Digital painting", "Illustration", "Animation"] },
    rectangle: { summary: "Snap, move, and resize macOS windows with keyboard shortcuts, edge gestures, and custom layouts.", recommendation: "Give every window a predictable place.", tags: ["Window management", "Keyboard shortcuts", "Snap layouts"], permissions: "Requires Accessibility permission to move and resize other apps’ windows." },
    aerospace: { summary: "An i3-style tiling window manager for macOS, driven by keyboard shortcuts and a plain-text configuration file.", recommendation: "Make window layout a keyboard habit.", tags: ["Tiling window manager", "Keyboard-first", "Config file"], permissions: "Requires Accessibility permission to control windows. The project is not notarized; review its official installation instructions before opening it." },
    maccy: { summary: "A lightweight menu-bar clipboard manager that keeps a searchable history of what you copy.", recommendation: "Never lose a copied snippet again.", tags: ["Clipboard history", "Menu bar", "Lightweight"] },
    "karabiner-elements": { summary: "A powerful macOS keyboard customizer for remapping keys, building complex rules, and configuring devices.", recommendation: "Remap the keys macOS will not.", tags: ["Keyboard remapping", "Complex rules", "Input devices"], permissions: "Requires Input Monitoring and a system extension, and may request Accessibility and background-service approval. Review these elevated system changes before installing." },
    dupeguru: { summary: "Finds duplicate files using filenames or file contents, with separate modes for pictures and music.", recommendation: "Find duplicates before deciding what to remove.", tags: ["Duplicate finder", "File cleanup", "Images & music"] },
    logseq: { summary: "A local-first knowledge base for linked notes, tasks, and long-term research, built around blocks and Markdown.", recommendation: "Keep growing knowledge in your own files.", tags: ["Notes", "Local-first", "Knowledge base"] },
    "drawio-desktop": { summary: "Create flowcharts, architecture diagrams, UML, and more offline, with import and export for common formats.", recommendation: "Diagram without sending the file to a whiteboard.", tags: ["Diagrams", "Flowcharts", "Offline"] },
    "obs-studio": { summary: "An open-source studio for recording and streaming, with scenes, sources, audio mixing, and local capture.", recommendation: "Record and stream from one capable workspace.", tags: ["Recording", "Live streaming", "Scenes"], permissions: "Screen Recording access is required to capture your display. Grant only the camera and microphone access you need." },
    "lossless-cut": { summary: "Trim, join, and extract video or audio quickly around keyframes, avoiding re-encoding when possible.", recommendation: "Cut a clip without re-encoding the whole video.", tags: ["Lossless trim", "Video", "FFmpeg"] },
    audacity: { summary: "A mature multitrack audio editor for recording, editing, noise reduction, and format conversion.", recommendation: "Use a proper timeline when audio needs detail.", tags: ["Audio editing", "Recording", "Noise reduction"] },
    mangodisk: { summary: "Inspect disk use, duplicates, and uninstallable apps before choosing what to remove.", recommendation: "Understand each item before you clean it.", tags: ["Disk analysis", "Uninstaller", "Duplicates"] }
  },
  ja: {
    shotmap: { summary: "ローカル動画からキーフレームを抽出し、調整可能なストーリーボードとコンタクトシートを生成。PNG / JPGで書き出せます。", recommendation: "長い動画を、一枚で見返せる。", tags: ["Swiftネイティブ", "オフライン処理", "動画", "画像"] },
    lumaview: { summary: "高速でミニマルなローカル画像ビューア。開く、めくる、細部を見ることに絞りました。", recommendation: "画像を見るだけなら、軽くていい。", tags: ["Swiftネイティブ", "ローカル画像", "軽量"] },
    mp4flow: { summary: "MP4の変換、トリミング、回転、結合などを、ローカルで手軽に行えます。", recommendation: "MP4だけなら、重い編集ソフトは要らない。", tags: ["Swiftネイティブ", "ローカル処理", "MP4"] },
    "launchpad-back": { summary: "従来のLaunchpadのグリッド、ページ、フォルダ、ドラッグ＆ドロップ、検索の操作感を再現します。", recommendation: "アプリ探しを、手になじむ操作へ。", tags: ["アプリ起動", "グリッド", "フォルダ"] },
    loop: { summary: "ドラッグ、ショートカット、フローティングメニューでウインドウを素早く整列。画面分割やマルチタスクに向いています。", recommendation: "ウインドウ整理は、ドラッグ一つで。", tags: ["ウインドウ管理", "ショートカット", "画面分割"], permissions: "ほかのアプリのウインドウを移動・リサイズするため、「アクセシビリティ」へのアクセスが必要です。" },
    "alt-tab": { summary: "アプリではなくウインドウ単位で切り替え。サムネイル、最小化したウインドウ、複数ディスプレイに対応します。", recommendation: "アプリではなく、ウインドウを切り替える。", tags: ["ウインドウ切替", "複数ディスプレイ", "キーボード"], permissions: "ウインドウの読み取りと切り替えに、「アクセシビリティ」へのアクセスが必要です。" },
    ice: { summary: "メニューバーのアイコンを区分けし、隠すか常時表示するかを選べます。上部がツールで埋まるのを防ぎます。", recommendation: "メニューバーを、物置にしない。", tags: ["メニューバー", "整理", "軽量"] },
    stats: { summary: "CPU、メモリ、ディスク、ネットワーク、バッテリー、センサーなどの状態をメニューバーから確認できます。", recommendation: "最適化の前に、まず状態を見る。", tags: ["システム監視", "メニューバー", "パフォーマンス"] },
    monitorcontrol: { summary: "DDC/CI対応ディスプレイの明るさと音量を調整。キーボードのメディアキーとも連携します。", recommendation: "外部ディスプレイの調整に、ボタン探しは不要。", tags: ["外部ディスプレイ", "明るさ", "DDC/CI"], permissions: "外部ディスプレイをキーボードの標準輝度キーで操作するには、「アクセシビリティ」へのアクセスが必要です。" },
    puremac: { summary: "ストレージの使用状況と削除候補を分かりやすく可視化。理解してから操作できます。", recommendation: "消す前に、何が変わるかを知る。", tags: ["ストレージ分析", "クリーニング", "プレビュー"], permissions: "クリーニング機能は追加のファイルアクセスを求めることがあります。実行前に対象パスを一つずつ確認してください。" },
    purge: { summary: "キャッシュ、開発環境の残り、大きなファイルをスキャンし、削除操作を確認可能な画面にまとめます。", recommendation: "キャッシュを掃除するなら、まずこれ。", tags: ["キャッシュ削除", "大容量ファイル", "開発環境"], permissions: "フルディスクアクセスは任意です。より多くのフォルダをスキャンする必要があるときだけ検討してください。" },
    libreoffice: { summary: "無料のオープンソース文書・表計算・プレゼンテーションスイート。Officeファイルの閲覧、軽い編集、変換の予備手段になります。", recommendation: "Officeファイルのための、頼れるオフライン予備。", tags: ["文書", "表計算", "プレゼンテーション"] },
    zettlr: { summary: "Markdown、引用管理、長文執筆を一つの作業環境にまとめる、研究・執筆向けのエディタです。", recommendation: "原稿と引用を、自分のファイルに残せる。", tags: ["Markdown", "引用管理", "長文執筆"] },
    joplin: { summary: "Markdown対応のノートアプリ。端末間同期やエンドツーエンド暗号化を、自分で選んだ保存先で利用できます。", recommendation: "同期先を自分で選べるノート。", tags: ["ノート", "Markdown", "同期"] },
    iina: { summary: "macOS向けに設計された動画プレーヤー。字幕、プレイリスト、各種動画・音声形式を軽快に扱えます。", recommendation: "ローカル動画は、ただ気持ちよく再生したい。", tags: ["動画再生", "字幕", "mpv"] },
    handbrake: { summary: "動画を多様な形式へ変換できる、定番のオープンソース・トランスコーダーです。プリセットと詳細設定の両方を備えます。", recommendation: "動画変換を、迷わず確実に。", tags: ["動画変換", "エンコード", "プリセット"] },
    "yt-dlp": { summary: "多数の対応サイトから動画・音声を取得できる、機能豊富なコマンドラインツールです。", recommendation: "許可された保存を、きちんと自動化。", tags: ["コマンドライン", "動画・音声", "ダウンロード"] },
    macshot: { summary: "注釈、スクロールキャプチャ、OCR、画面収録、簡易編集を一つにまとめたネイティブのキャプチャツールです。", recommendation: "撮る、隠す、注釈を入れる。一度で。", tags: ["スクリーンショット", "画面収録", "スクロールキャプチャ"], permissions: "撮影・録画には「画面収録」許可が必要です。音声録音では「マイク」、グローバル操作では必要に応じて「アクセシビリティ」または「入力監視」を求めます。" },
    imageoptim: { summary: "画像をドラッグ＆ドロップで最適化し、見た目を保ちながらファイルサイズを小さくします。", recommendation: "公開前の画像を、軽く整える。", tags: ["画像圧縮", "最適化", "ドラッグ＆ドロップ"] },
    krita: { summary: "イラスト、コンセプトアート、コミック制作に対応する、機能豊富なデジタルペイントソフトです。", recommendation: "描くための道具が、ここにある。", tags: ["デジタルペイント", "イラスト", "PSD"] },
    rectangle: { summary: "ショートカットやスナップ領域でウインドウを移動・リサイズし、画面を素早く整えます。", recommendation: "ウインドウの置き場所を、迷わず決める。", tags: ["ウインドウ整列", "ショートカット", "スナップ"], permissions: "ほかのアプリのウインドウを操作するため、「アクセシビリティ」へのアクセスが必要です。" },
    aerospace: { summary: "i3のようなキーボード中心の操作で、ウインドウをタイル状に配置するmacOS向けウインドウマネージャです。", recommendation: "キーボードで、ウインドウを整列。", tags: ["タイル型WM", "キーボード操作", "ワークスペース"], permissions: "ウインドウ操作に「アクセシビリティ」へのアクセスが必要です。公式バイナリは未公証と明記されているため、配布元と更新情報を確認して導入してください。" },
    maccy: { summary: "コピー履歴を軽量に保存し、必要な内容をすばやく呼び出せるクリップボードマネージャです。", recommendation: "さっきコピーしたものを、すぐ戻せる。", tags: ["クリップボード", "履歴", "軽量"] },
    "karabiner-elements": { summary: "キーの入れ替え、複合キー、デバイス別設定まで扱える、macOS向けの高機能キーボードカスタマイザーです。", recommendation: "合わないキー配置を、自分で変える。", tags: ["キーリマップ", "キーボード", "高度な設定"], permissions: "キー入力を扱うため、「入力監視」と「アクセシビリティ」、システム拡張の許可が必要です。公式配布パッケージから導入し、設定内容を確認してください。" },
    dupeguru: { summary: "ファイル名や内容を比較して重複ファイルを探し、削除候補を自分で確認できるツールです。類似画像の検索にも対応します。", recommendation: "重複を見つけてから、削除を決める。", tags: ["重複ファイル", "類似画像", "ストレージ整理"] },
    logseq: { summary: "ブロックとMarkdownを軸に、ノート、タスク、長期的な知識を自分のファイルで整理するローカル優先のツールです。", recommendation: "増える知識を、自分のファイルに残せる。", tags: ["ノート", "ローカル優先", "ナレッジ管理"] },
    "drawio-desktop": { summary: "フローチャート、構成図、UMLなどをオフラインで作成。一般的な形式の読み込みと書き出しに対応します。", recommendation: "図はオンラインのホワイトボードに預けなくていい。", tags: ["図表作成", "フローチャート", "オフライン"] },
    "obs-studio": { summary: "シーン、映像・音声ソース、ミキサーをまとめて扱える、録画・配信向けのオープンソーススタジオです。", recommendation: "録画も配信も、一つの作業場所で。", tags: ["画面収録", "ライブ配信", "シーン"], permissions: "画面を取り込むには「画面収録」が必要です。カメラとマイクは使う機能に応じて許可してください。" },
    "lossless-cut": { summary: "キーフレームを基準に動画・音声をすばやく切り出し、可能な限り再エンコードを避けます。", recommendation: "一部を切るだけなら、全編を再エンコードしない。", tags: ["ロスレスカット", "動画", "FFmpeg"] },
    audacity: { summary: "録音、編集、ノイズ除去、形式変換まで対応する、定番のマルチトラック音声エディタです。", recommendation: "音声を詰めるなら、きちんとしたタイムラインで。", tags: ["音声編集", "録音", "ノイズ除去"] },
    mangodisk: { summary: "ディスク使用量、重複ファイル、削除可能なアプリを確認してから、整理の対象を選べます。", recommendation: "掃除の前に、一つずつ正体を見る。", tags: ["ディスク分析", "アンインストール", "重複ファイル"] }
  }
};

let activeLanguage = new URLSearchParams(location.search).get("lang") || localStorage.getItem("mac-better-language") || "zh";
if (!copy[activeLanguage]) activeLanguage = "zh";
let activeCategory = new URLSearchParams(location.search).get("category") || "all";
if (!categories.includes(activeCategory)) activeCategory = "all";
let apps = [];

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

function cardTemplate(app) {
  const status = app.status.level === "verified" ? null : (valueAt(copy[activeLanguage], `status.${app.status.level}`) ?? valueAt(copy.zh, `status.${app.status.level}`));
  return `<article class="app-card">
    <img class="app-icon" src="${escapeHTML(app.icon)}" alt="${escapeHTML(t("iconAlt", { name: app.name }))}" />
    <div class="app-card-head"><div><h3>${escapeHTML(app.name)}</h3><span class="app-type">${escapeHTML(categoryName(app.category))}</span></div><div class="app-card-meta" aria-label="${escapeHTML(t("metadataLabel"))}"><span class="license" title="${escapeHTML(t(`license.${app.license}`))}" aria-label="${escapeHTML(t(`license.${app.license}`))}">${escapeHTML(app.license)}</span>${status ? `<span class="tag ${statusClass(app.status.level)}" title="${escapeHTML(status.note)}">${escapeHTML(status.label)}</span>` : ""}</div></div>
    <p class="card-summary">${escapeHTML(localized(app, "summary"))}</p>
    <p class="recommendation" title="${escapeHTML(localized(app, "recommendation"))}">${escapeHTML(localized(app, "recommendation"))}</p>
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
  const list = apps.filter(app => {
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

function applyStaticCopy() {
  document.documentElement.lang = t("htmlLang");
  document.title = t("pageTitle");
  document.querySelector('meta[name="description"]').content = t("pageDescription");
  document.querySelectorAll("[data-i18n]").forEach(element => { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-i18n-aria-label]").forEach(element => { element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel)); });
  document.querySelectorAll("[data-language]").forEach(button => { button.setAttribute("aria-pressed", String(button.dataset.language === activeLanguage)); });
}

function applyLanguage(language) {
  activeLanguage = language;
  localStorage.setItem("mac-better-language", activeLanguage);
  applyStaticCopy();
  if (apps.length) {
    renderFilters();
    renderCatalog();
  }
}

async function init() {
  applyStaticCopy();
  document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => applyLanguage(button.dataset.language)));
  try {
    const dataURL = new URL("data/apps.json", import.meta.url);
    dataURL.searchParams.set("v", "20261016.8");
    const response = await fetch(dataURL, { cache: "no-store" });
    if (!response.ok) throw new Error("Unable to load app data");
    apps = await response.json();
    apps.sort((a, b) => a.sortOrder - b.sortOrder);
    testedFilter.checked = new URLSearchParams(location.search).get("tested") === "1";
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
