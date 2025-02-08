// js/carousel_video.js（動画カルーセル）
(function () {
    const videoCarouselContainer = document.querySelector(".video-carousel-container");
    if (!videoCarouselContainer) return; // 動画カルーセルが存在しない場合は何もしない

    const videoCarousel = videoCarouselContainer.querySelector(".video-carousel");
    const videoSlides = videoCarouselContainer.querySelectorAll(".video-slide");
    const videoPrevBtn = videoCarouselContainer.querySelector(".video_prev");
    const videoNextBtn = videoCarouselContainer.querySelector(".video_next");

    let videoCurrentIndex = 0;
    const videoTotalSlides = videoSlides.length;

    function updateVideoSlide() {
        const videoSlideWidth = videoSlides[0].clientWidth;
        videoCarousel.style.transform = `translateX(${-videoCurrentIndex * videoSlideWidth}px)`;
    }

    videoNextBtn.addEventListener("click", () => {
        videoCurrentIndex = (videoCurrentIndex + 1) % videoTotalSlides;
        updateVideoSlide();
    });

    videoPrevBtn.addEventListener("click", () => {
        videoCurrentIndex = (videoCurrentIndex - 1 + videoTotalSlides) % videoTotalSlides;
        updateVideoSlide();
    });

    window.addEventListener("resize", updateVideoSlide);
})();
