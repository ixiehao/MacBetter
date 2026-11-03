const grid = document.querySelector("#app-grid");
const copy = {
  en: { preview: "App preview", loading: "Loading screenshot…", failed: "This screenshot could not be loaded.", hint: "Use the card’s preview button to enlarge.", close: "Close", original: "Original image", source: "Image source", credit: "Screenshot provided by the project" },
  zh: { preview: "软件预览", loading: "正在加载截图…", failed: "暂时无法加载这张截图。", hint: "点击卡片上的预览按钮查看大图", close: "关闭", original: "查看原图", source: "截图来源", credit: "截图由项目提供" },
  ja: { preview: "アプリのプレビュー", loading: "スクリーンショットを読み込み中…", failed: "画像を読み込めませんでした。", hint: "カードのプレビューボタンで拡大", close: "閉じる", original: "元の画像", source: "画像の出典", credit: "プロジェクト提供のスクリーンショット" }
};
const text = key => (copy[document.documentElement.lang.startsWith("zh") ? "zh" : document.documentElement.lang.startsWith("ja") ? "ja" : "en"])[key];

const scrim = document.createElement("div");
scrim.className = "preview-scrim";
scrim.hidden = true;
scrim.setAttribute("aria-hidden", "true");
document.body.append(scrim);

const hover = document.createElement("aside");
hover.className = "app-preview";
hover.hidden = true;
hover.setAttribute("aria-hidden", "true");
hover.innerHTML = '<div class="preview-heading"><strong></strong><span></span></div><div class="preview-frame"><img referrerpolicy="no-referrer" decoding="async" hidden /><span class="preview-message"></span></div><p class="preview-caption"></p>';
document.body.append(hover);

const dialog = document.createElement("dialog");
dialog.id = "app-preview-dialog";
dialog.className = "app-preview-dialog";
dialog.setAttribute("aria-labelledby", "preview-dialog-title");
dialog.innerHTML = '<header class="preview-dialog-heading"><div><h2 id="preview-dialog-title"></h2><p></p></div><button class="preview-close" type="button"></button></header><div class="preview-dialog-image"><img referrerpolicy="no-referrer" decoding="async" hidden /><p class="preview-message" role="status"></p></div><footer><a class="preview-original" target="_blank" rel="noreferrer"></a><a class="preview-source" target="_blank" rel="noreferrer"></a></footer>';
document.body.append(dialog);

const hoverImage = hover.querySelector("img");
const hoverFrame = hover.querySelector(".preview-frame");
const dialogImage = dialog.querySelector("img");
let activeCard = null;
let pendingCard = null;
let dismissedCard = null;
let showTimer;
let hoverRequest = 0;
let dialogRequest = 0;
let opener = null;
const hoverCapability = matchMedia("(hover: hover) and (pointer: fine)");

function clearSpotlight() {
  activeCard?.classList.remove("is-previewing");
  scrim.hidden = true;
}

function syncSpotlight() {
  const onCard = Boolean(activeCard?.isConnected && activeCard.matches(":hover") && !hover.hidden && !dialog.open);
  activeCard?.classList.toggle("is-previewing", onCard);
  scrim.hidden = !onCard;
}

function dataFor(card) {
  if (!card?.dataset.previewImage) return null;
  try {
    const image = new URL(card.dataset.previewImage);
    const source = new URL(card.dataset.previewSource);
    if (image.protocol !== "https:" || source.protocol !== "https:") return null;
    return { image: image.href, source: source.href, name: card.dataset.appName };
  } catch {
    return null;
  }
}

function hideHover() {
  if (!activeCard && !pendingCard && hover.hidden && scrim.hidden) return;
  clearTimeout(showTimer);
  pendingCard = null;
  clearSpotlight();
  activeCard = null;
  hover.hidden = true;
  hoverRequest++;
  hoverImage.onload = null;
  hoverImage.onerror = null;
  hoverImage.removeAttribute("src");
}

function positionHover(card) {
  if (!card?.isConnected || innerWidth < 760 || innerHeight < 280) return false;
  const rect = card.getBoundingClientRect();
  const viewportWidth = document.documentElement.clientWidth;
  const viewportHeight = document.documentElement.clientHeight;
  const margin = 16;
  const gap = 12;
  const left = rect.left - gap - margin;
  const right = viewportWidth - rect.right - gap - margin;
  if (Math.max(left, right) < 270) return false;
  const side = right >= left ? "right" : "left";
  const maxWidth = Math.min(560, side === "right" ? right : left);
  hover.style.width = `${Math.floor(maxWidth)}px`;
  // Measure the translated heading and caption rather than assuming a fixed height.
  const chromeHeight = hover.offsetHeight - hoverFrame.offsetHeight;
  const borderWidth = hover.offsetWidth - hover.clientWidth;
  const maxImageHeight = Math.min(560, viewportHeight - margin * 2 - chromeHeight);
  if (maxImageHeight < 120) return false;
  // A hidden image may still contain the previous app's intrinsic dimensions.
  const aspect = !hoverImage.hidden && hoverImage.naturalWidth ? hoverImage.naturalWidth / hoverImage.naturalHeight : 1.6;
  const width = Math.min(maxWidth, Math.max(260, maxImageHeight * aspect + borderWidth));
  const height = Math.min(maxImageHeight, Math.max(120, (width - borderWidth) / aspect));
  hover.style.width = `${Math.floor(width)}px`;
  hover.style.setProperty("--preview-image-height", `${Math.floor(height)}px`);
  hover.dataset.side = side;
  const panelWidth = hover.offsetWidth;
  hover.style.left = `${Math.round(side === "right" ? rect.right + gap : rect.left - gap - panelWidth)}px`;
  const panelHeight = hover.offsetHeight;
  const top = Math.max(margin, Math.min(rect.top + (rect.height - panelHeight) / 2, viewportHeight - panelHeight - margin));
  hover.style.top = `${Math.round(top)}px`;
  return true;
}

function showHover(card) {
  // A delayed callback must never revive a preview after the pointer has left.
  if (pendingCard !== card || !card.isConnected || !card.matches(":hover")) {
    if (pendingCard === card) pendingCard = null;
    return;
  }
  const data = dataFor(card);
  if (!data || dialog.open || card.querySelector(".card-popover[open]")) return;
  activeCard = card;
  pendingCard = null;
  const request = ++hoverRequest;
  hover.setAttribute("aria-label", `${data.name} · ${text("preview")}`);
  hover.querySelector("strong").textContent = data.name;
  hover.querySelector(".preview-heading span").textContent = text("preview");
  hover.querySelector(".preview-caption").textContent = text("hint");
  const message = hover.querySelector(".preview-message");
  message.textContent = text("loading");
  message.hidden = false;
  hoverImage.hidden = true;
  hoverImage.alt = `${data.name} · ${text("preview")}`;
  hover.hidden = false;
  if (!positionHover(card)) {
    hideHover();
    return;
  }
  syncSpotlight();
  hoverImage.onload = () => {
    if (request !== hoverRequest || activeCard !== card) return;
    hoverImage.hidden = false;
    message.hidden = true;
    if (!positionHover(card)) hideHover();
  };
  hoverImage.onerror = () => {
    if (request !== hoverRequest) return;
    message.textContent = text("failed");
  };
  hoverImage.src = data.image;
}

function openDialog(card) {
  const data = dataFor(card);
  if (!data) return;
  if (typeof dialog.showModal !== "function") {
    window.open(data.image, "_blank", "noopener,noreferrer");
    return;
  }
  hideHover();
  opener = card.querySelector(".preview-trigger");
  const request = ++dialogRequest;
  dialog.querySelector("h2").textContent = data.name;
  dialog.querySelector(".preview-dialog-heading p").textContent = text("credit");
  dialog.querySelector(".preview-close").textContent = text("close");
  const original = dialog.querySelector(".preview-original");
  original.textContent = text("original");
  original.href = data.image;
  const source = dialog.querySelector(".preview-source");
  source.textContent = text("source");
  source.href = data.source;
  const message = dialog.querySelector(".preview-message");
  message.textContent = text("loading");
  message.hidden = false;
  dialogImage.hidden = true;
  dialogImage.alt = `${data.name} · ${text("preview")}`;
  dialogImage.onload = () => {
    if (request !== dialogRequest || !dialog.open) return;
    dialogImage.hidden = false;
    message.hidden = true;
  };
  dialogImage.onerror = () => {
    if (request === dialogRequest) message.textContent = text("failed");
  };
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("preview-dialog-open");
  dialogImage.src = data.image;
}

grid.addEventListener("pointerover", event => {
  if (event.pointerType !== "mouse" || !hoverCapability.matches || dialog.open) return;
  const card = event.target.closest(".app-card[data-preview-image]");
  if (!card || card === dismissedCard) return;
  if (card === activeCard) {
    syncSpotlight();
    return;
  }
  if (card === pendingCard) return;
  hideHover();
  pendingCard = card;
  showTimer = setTimeout(() => showHover(card), 320);
});

grid.addEventListener("pointerout", event => {
  const card = event.target.closest(".app-card[data-preview-image]");
  if (!card || card.contains(event.relatedTarget)) return;
  if (card === dismissedCard) dismissedCard = null;
  hideHover();
});

grid.addEventListener("click", event => {
  const button = event.target.closest(".preview-trigger");
  if (button) openDialog(button.closest(".app-card"));
});
grid.addEventListener("toggle", hideHover, true);
// Only the card owns the hover preview and scrim; neither can keep itself open.
document.addEventListener("pointerover", event => {
  if (event.pointerType !== "mouse") return;
  const owner = activeCard || pendingCard;
  if (owner && !owner.contains(event.target)) hideHover();
}, { capture: true, passive: true });
document.addEventListener("pointerout", event => {
  if (!event.relatedTarget) hideHover();
}, { capture: true, passive: true });
dialog.querySelector(".preview-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener("close", () => {
  dialogRequest++;
  dialogImage.onload = null;
  dialogImage.onerror = null;
  dialogImage.removeAttribute("src");
  document.body.classList.remove("preview-dialog-open");
  if (opener?.isConnected) opener.focus({ preventScroll: true });
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !event.isComposing) {
    dismissedCard = activeCard || pendingCard || dismissedCard;
    hideHover();
  }
});
window.addEventListener("scroll", hideHover, { passive: true, capture: true });
window.addEventListener("resize", hideHover, { passive: true });
window.addEventListener("blur", hideHover);
document.addEventListener("visibilitychange", () => { if (document.hidden) hideHover(); });
new MutationObserver(() => {
  if (activeCard && !activeCard.isConnected) hideHover();
  if (dismissedCard && !dismissedCard.isConnected) dismissedCard = null;
}).observe(grid, { childList: true });
