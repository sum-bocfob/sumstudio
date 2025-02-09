const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const totalSlides = slides.length;
let autoSlideTimeout; // 初回呼び出し用タイマー
let autoSlideInterval; // 以降の間隔用タイマー

function updateSlide() {
    // 毎回最新のスライド幅を取得
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
}

/**
 * 自動スライドを開始する関数
 * @param {number} initialDelay - 最初の自動スライドまでの遅延（ミリ秒）
 *                              初期読み込み時は3000ms、マウス離脱時は例として500ms
 */
function startAutoSlide(initialDelay = 3000) {
    // まず初回呼び出し用タイマーを設定
    autoSlideTimeout = setTimeout(() => {
        nextSlide();
        // 初回呼び出し後、以降は通常の間隔で呼び出す
        autoSlideInterval = setInterval(nextSlide, 3000);
    }, initialDelay);
}

function stopAutoSlide() {
    clearTimeout(autoSlideTimeout);
    clearInterval(autoSlideInterval);
}

/* オーバーレイアイコン表示用の関数 */
function showOverlayIcon(icon) {
    const overlay = document.querySelector(".overlay-icon");
    overlay.textContent = icon;
    overlay.style.opacity = 1;
    // 500ms後にフェードアウト（必要に応じて調整）
    setTimeout(() => {
        overlay.style.opacity = 0;
    }, 500);
}

// ボタン操作時の処理（クリックで自動スライドのリセット）
nextBtn.addEventListener("click", () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide(); // デフォルトは3000ms初回遅延
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

// slider のマウスエンター時（関連要素が左右ボタンの場合はアイコン表示をスキップ）
slider.addEventListener("mouseenter", (event) => {
    if (event.relatedTarget && (event.relatedTarget.closest(".prev") || event.relatedTarget.closest(".next"))) {
        stopAutoSlide();
        return;
    }
    stopAutoSlide();
    showOverlayIcon("❚❚"); // 一時停止状態のアイコン
});

// slider のマウスリーブ時（関連要素が左右ボタンの場合はアイコン表示をスキップ）
// ※ここで、初回遅延を短く（例：500ms）して自動スライドを再開
slider.addEventListener("mouseleave", (event) => {
    if (event.relatedTarget && (event.relatedTarget.closest(".prev") || event.relatedTarget.closest(".next"))) {
        return;
    }
    startAutoSlide(500); // 初回の自動スライドまでの遅延を500msに設定
    showOverlayIcon("▶"); // 再生状態のアイコン
});

// ボタンホバー時にも自動スライド停止
prevBtn.addEventListener("mouseenter", stopAutoSlide);
nextBtn.addEventListener("mouseenter", stopAutoSlide);

// ウィンドウサイズ変更時に位置調整
window.addEventListener("resize", updateSlide);

// 初期化（ページ読み込み時は通常3000msの遅延）
startAutoSlide();
