window.onload = function () {
  //グローバルなガード変数をチェック、設定する
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  function delete_osusume() {
    const allH2Elements = document.querySelectorAll("h1,h2");
    allH2Elements.forEach(elem => {
      if (elem.textContent.includes("読書履歴に基づくおすすめ") || elem.textContent.includes("次に読むものを見つけよう") || elem.textContent.includes("読んだマンガからのおすすめ")) {
        const parentWithTextId = elem.closest('[id^="CardInstance"]');
        if (parentWithTextId) {
          parentWithTextId.style.display = "none";
        }
      }
    })
  }

  function observeDOMChanges() {
    const observer = new MutationObserver(() => {
      delete_osusume();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  observeDOMChanges();
}

