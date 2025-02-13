document.addEventListener("DOMContentLoaded", function () {
    // 現在のURLをエンコード（URLエンコード）
    var currentUrl = encodeURIComponent(window.location.href);

    // Twitter
    // シェアURLを作成
    var shareUrl = "https://twitter.com/share?url=" + currentUrl + "&hashtags=blender,blender3d,b3d,blenderaddon";
    // クラスを持つリンクのhref属性を更新
    var snsBtn = document.querySelector("share_twitter");
    if (snsBtn) {
        snsBtn.href = shareUrl;
    }

    // Facebook
    // シェアURLを作成
    var shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + currentUrl;
    // クラスを持つリンクのhref属性を更新
    var snsBtn = document.querySelector("share_facebook");
    if (snsBtn) {
        snsBtn.href = shareUrl;
    }

    // LINE
    // シェアURLを作成
    var shareUrl = "https://social-plugins.line.me/lineit/share?url=" + currentUrl;
    // クラスを持つリンクのhref属性を更新
    var snsBtn = document.querySelector("share_line");
    if (snsBtn) {
        snsBtn.href = shareUrl;
    }

    // はてなブックマーク
    // シェアURLを作成
    var shareUrl = "https://b.hatena.ne.jp/entry/s/" + currentUrl;
    // クラスを持つリンクのhref属性を更新
    var snsBtn = document.querySelector("share_hatena");
    if (snsBtn) {
        snsBtn.href = shareUrl;
    }
});
