// document.addEventListener("DOMContentLoaded", function () {
//     var baseTag = document.createElement("base");
//     baseTag.href = "https://sum-bocfob.github.io/sumstudio/";
//     // baseTag.href = "/";
//     document.head.appendChild(baseTag);
// });

document.addEventListener("DOMContentLoaded", function () {
    var baseTag = document.createElement("base");

    // 環境による判定
    if (window.location.hostname === "localhost") {
        baseTag.href = "/"; // ローカル環境の場合
    } else {
        baseTag.href = "https://sum-bocfob.github.io/sumstudio/"; // GitHub Pages の URL
    }

    document.head.appendChild(baseTag);
});
