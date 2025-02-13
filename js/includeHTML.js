// js/includeHTML.js

/**
 * 指定した要素に外部HTMLファイルを読み込み、オプションのコールバックを実行する
 * @param {string} id - インクルード先の要素ID
 * @param {string} url - インクルードするHTMLファイルのURL
 * @param {function} [callback] - オプションのコールバック関数
 */
function includeHTML(id, url, callback) {
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback();
        })
        .catch((error) => console.error("Error loading HTML:", error));
}

/**
 * 複数のインクルード処理を一括で実行する関数の例
 * @param {Array} includes - インクルード処理の設定オブジェクトの配列
 *  例: [{ id: "header-container", url: "includes/header.html" }, ...]
 * @param {function} [callback] - 全ての処理完了後に実行するコールバック（必要なら）
 */
function includeMultipleHTML(includes, callback) {
    let loaded = 0;
    const total = includes.length;

    includes.forEach((item) => {
        includeHTML(item.id, item.url, function () {
            loaded++;
            if (loaded === total && typeof callback === "function") {
                callback();
            }
        });
    });
}

// Expose functions to global scope if needed
window.includeHTML = includeHTML;
window.includeMultipleHTML = includeMultipleHTML;
