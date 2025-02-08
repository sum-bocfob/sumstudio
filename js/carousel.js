const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth;
let autoSlideInterval;

function updateSlide() {
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

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

/* オーバーレイアイコンを表示する関数
   icon には "▶"（再生）や "❚❚"（一時停止）などの文字を指定 */
function showOverlayIcon(icon) {
    const overlay = document.querySelector(".overlay-icon");
    overlay.textContent = icon;
    overlay.style.opacity = 1;
    // 1秒後にフェードアウト
    setTimeout(() => {
        overlay.style.opacity = 0;
    }, 500);
}

// 既存のボタン操作時のイベント（クリック時は自動スライドのリセット）
nextBtn.addEventListener("click", () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

// slider のマウスエンター時（※ relatedTarget が左右ボタンの場合は何も表示しない）
slider.addEventListener("mouseenter", (event) => {
    // もしマウスが .prev あるいは .next の要素から移動してきたなら、アイコン表示をスキップ
    if (event.relatedTarget && (event.relatedTarget.closest(".prev") || event.relatedTarget.closest(".next"))) {
        stopAutoSlide();
        return;
    }
    stopAutoSlide();
    showOverlayIcon("❚❚"); // 通常は一時停止アイコンを表示
});

// slider のマウスリーブ時（※ relatedTarget が左右ボタンの場合はアイコン表示しない）
slider.addEventListener("mouseleave", (event) => {
    // もしマウスが .prev あるいは .next の要素へ移動する場合、アイコン表示をスキップ
    if (event.relatedTarget && (event.relatedTarget.closest(".prev") || event.relatedTarget.closest(".next"))) {
        return;
    }
    startAutoSlide();
    showOverlayIcon("▶"); // 通常は再生アイコンを表示
});

// ボタンホバーでも自動スライド停止（必要に応じて追加）
prevBtn.addEventListener("mouseenter", stopAutoSlide);
nextBtn.addEventListener("mouseenter", stopAutoSlide);

// ウィンドウサイズ変更時の調整
window.addEventListener("resize", () => {
    updateSlide();
});

// 初期化
startAutoSlide();
