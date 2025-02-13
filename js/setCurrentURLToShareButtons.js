function setCurrentURLToShareButtons() {
    var currentUrl = encodeURIComponent(window.location.href);
    var mainUrl = window.location.href.replace(window.location.protocol + "//", "");

    // TwitterのシェアURLを生成
    var twitterShareUrl = "https://twitter.com/share?url=" + currentUrl;
    console.log(twitterShareUrl);
    var twitterBtn = document.querySelector(".share_twitter");
    if (twitterBtn) {
        twitterBtn.href = twitterShareUrl;
    } else {
        console.error("Twitter share button not found.");
    }

    // FacebookのシェアURLを生成
    var facebookShareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + currentUrl;
    var facebookBtn = document.querySelector(".share_facebook");
    if (facebookBtn) {
        facebookBtn.href = facebookShareUrl;
        console.log(facebookShareUrl);
    } else {
        console.error("Facebook share button not found.");
    }

    // LINEのシェアURLを生成
    var lineShareUrl = "https://social-plugins.line.me/lineit/share?url=" + currentUrl;
    var lineBtn = document.querySelector(".share_line");
    if (lineBtn) {
        lineBtn.href = lineShareUrl;
    } else {
        console.error("LINE share button not found.");
    }

    // はてなブックマークのシェアURLを生成
    console.log(currentUrl);
    console.log(mainUrl);
    var hatenaShareUrl = "https://b.hatena.ne.jp/entry/s/" + mainUrl;
    var hatenaBtn = document.querySelector(".share_hatena");
    if (hatenaBtn) {
        hatenaBtn.href = hatenaShareUrl;
    } else {
        console.error("Hatena bookmark share button not found.");
    }
}
