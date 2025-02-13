// js/includeFixedElements.js

/**日本語Webサイト用
 * 固定要素（ヘッダー、フッターなど）のインクルード設定配列
 */
var fixedElements = [
    { id: "header-container", url: "includes/header.html" },
    { id: "installation-container", url: "includes/installation.html" },
    { id: "footer-container", url: "includes/footer.html" },
    { id: "shareButtons-container", url: "includes/shareButtons.html" },
    { id: "popularAddons-container", url: "includes/popularAddons.html" },
    // 必要に応じて他の固定要素を追加できます。
];

/**
 * 固定要素を一括でインクルードする関数
 * @param {function} [callback] - 全ての固定要素の読み込み完了後に呼び出すコールバック
 */
function includeFixedElements(callback) {
    // includeMultipleHTML が定義されている場合はそれを利用
    if (typeof includeMultipleHTML === "function") {
        includeMultipleHTML(fixedElements, callback);
    } else {
        // includeMultipleHTML がない場合は、個別に includeHTML を呼び出す
        let loaded = 0;
        fixedElements.forEach(function (item) {
            includeHTML(item.id, item.url, function () {
                loaded++;
                if (loaded === fixedElements.length && typeof callback === "function") {
                    callback();
                }
            });
        });
    }
}

// グローバルに公開
window.includeFixedElements = includeFixedElements;

/////////////////////////////////////////////////////////////////////

/**Blender Market用
 * 固定要素（ヘッダー、フッターなど）のインクルード設定配列
 */
var fixedElements_ForBlenderMarket = [
    { id: "installation_ForBlenderMarket-container", url: "includes/installation_ForBlenderMarket.html" },
    { id: "shareButtons_ForBlenderMarket-container", url: "includes/shareButtons_ForBlenderMarket.html" },
    { id: "footer_ForBlenderMarket-container", url: "includes/footer_ForBlenderMarket.html" },
];

/**
 * 固定要素を一括でインクルードする関数
 * @param {function} [callback] - 全ての固定要素の読み込み完了後に呼び出すコールバック
 */
function includeFixedElements_ForBlenderMarket(callback) {
    // includeMultipleHTML が定義されている場合はそれを利用
    if (typeof includeMultipleHTML === "function") {
        includeMultipleHTML(fixedElements_ForBlenderMarket, callback);
    } else {
        // includeMultipleHTML がない場合は、個別に includeHTML を呼び出す
        let loaded = 0;
        fixedElements_ForBlenderMarket.forEach(function (item) {
            includeHTML(item.id, item.url, function () {
                loaded++;
                if (loaded === fixedElements_ForBlenderMarket.length && typeof callback === "function") {
                    callback();
                }
            });
        });
    }
}

// グローバルに公開
window.includeFixedElements_ForBlenderMarket = includeFixedElements_ForBlenderMarket;
