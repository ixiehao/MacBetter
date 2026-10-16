const categories = [
  ["all", "全部"],
  ["office", "办公与创作"],
  ["video", "视频与音频"],
  ["image", "图片与图像"],
  ["launcher", "窗口与启动"],
  ["menu", "菜单栏与硬件"],
  ["maintenance", "Mac 优化与维护"]
];

const appCount = document.querySelector("#app-count");
const featuredGrid = document.querySelector("#featured-grid");
const appGrid = document.querySelector("#app-grid");
const filters = document.querySelector("#category-filters");
const searchInput = document.querySelector("#search-input");
const testedFilter = document.querySelector("#tested-filter");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const clearFilters = document.querySelector("#clear-filters");

let apps = [];
let activeCategory = new URLSearchParams(location.search).get("category") || "all";
if (!categories.some(([id]) => id === activeCategory)) activeCategory = "all";

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function link(url, text, className = "") {
  return `<a class="${className}" href="${escapeHTML(url)}" target="_blank" rel="noreferrer">${text} <span aria-hidden="true">↗</span></a>`;
}

function statusClass(level) {
  return `status-${level}`;
}

function featuredTemplate(app) {
  return `<article class="featured-card">
    <img class="app-icon" src="${escapeHTML(app.icon)}" alt="${escapeHTML(app.name)} 图标" loading="lazy" />
    <span class="app-type">${escapeHTML(app.categoryLabel)}</span>
    <h3>${escapeHTML(app.name)}</h3>
    <p class="card-summary">${escapeHTML(app.summary)}</p>
    <p class="recommendation">“${escapeHTML(app.recommendation)}”</p>
    ${link(app.homepage, "访问项目", "card-link")}
  </article>`;
}

function cardTemplate(app) {
  const permissionWarning = app.permissions ? `<span class="tag warning" title="${escapeHTML(app.permissions)}">权限说明</span>` : "";
  return `<article class="app-card">
    <img class="app-icon" src="${escapeHTML(app.icon)}" alt="${escapeHTML(app.name)} 图标" loading="lazy" />
    <div class="app-card-main">
      <div class="app-card-head"><div><h3>${escapeHTML(app.name)}</h3><span class="app-type">${escapeHTML(app.categoryLabel)}</span></div><span class="license">${escapeHTML(app.license)}</span></div>
      <p class="card-summary">${escapeHTML(app.summary)}</p>
      <p class="recommendation">“${escapeHTML(app.recommendation)}”</p>
    </div>
    <div class="tags" aria-label="软件属性">
      <span class="tag ${statusClass(app.status.level)}" title="${escapeHTML(app.status.note)}">${escapeHTML(app.status.label)}</span>
      ${app.tags.map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}
      ${permissionWarning}
    </div>
    <div class="app-links">
      ${link(app.homepage, "项目主页")}
      ${link(app.github, "源代码")}
    </div>
  </article>`;
}

function renderFilters() {
  filters.innerHTML = categories.map(([id, label]) => `<button class="filter" type="button" data-category="${id}" aria-pressed="${id === activeCategory}">${label}</button>`).join("");
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
  history.replaceState({}, "", url);
}

function renderCatalog() {
  const query = searchInput.value.trim().toLocaleLowerCase("zh-CN");
  const list = apps.filter(app => !app.featured).filter(app => {
    const searchText = [app.name, app.summary, app.recommendation, app.categoryLabel, ...app.tags].join(" ").toLocaleLowerCase("zh-CN");
    const appCategories = app.categories || [app.category];
    const categoryMatch = activeCategory === "all" || appCategories.includes(activeCategory);
    const testedMatch = !testedFilter.checked || app.status.level === "tested";
    return categoryMatch && testedMatch && searchText.includes(query);
  });
  appGrid.innerHTML = list.map(cardTemplate).join("");
  emptyState.hidden = list.length !== 0;
  resultCount.textContent = `显示 ${list.length} 款经过编辑筛选的工具`;
  updateURL();
}

function resetFilters() {
  activeCategory = "all";
  searchInput.value = "";
  testedFilter.checked = false;
  renderFilters();
  renderCatalog();
}

async function init() {
  try {
    const response = await fetch("data/apps.json");
    if (!response.ok) throw new Error("无法读取软件数据");
    apps = await response.json();
    apps.sort((a, b) => a.sortOrder - b.sortOrder);
    appCount.textContent = String(apps.length).padStart(2, "0");
    featuredGrid.innerHTML = apps.filter(app => app.featured).map(featuredTemplate).join("");
    testedFilter.checked = new URLSearchParams(location.search).get("tested") === "1";
    renderFilters();
    renderCatalog();
  } catch (error) {
    resultCount.textContent = "软件数据暂时无法加载，请从 GitHub 查看。";
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
