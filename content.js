let currentValue = null;
let observer = null;
let isUpdating = false;

function changeBalance(value) {
  const el = document.querySelector('[data-test-id="available-balance"]');
  if (!el) return;

  const desired = `R$\u00a0${value}`;
  if (el.textContent === desired) return;

  isUpdating = true;
  el.textContent = desired;
  isUpdating = false;
}

function startObserver(value) {
  currentValue = value;

  if (observer) {
    observer.disconnect();
  }

  changeBalance(value);

  observer = new MutationObserver((mutations) => {
    if (isUpdating) return;

    for (const mutation of mutations) {
      const target = mutation.target;
      const balanceEl = document.querySelector('[data-test-id="available-balance"]');
      if (balanceEl && (target === balanceEl || balanceEl.contains(target))) {
        changeBalance(currentValue);
        break;
      }
    }
  });

  const balanceEl = document.querySelector('[data-test-id="available-balance"]');
  if (balanceEl) {
    observer.observe(balanceEl, {
      childList: true,
      characterData: true,
      subtree: true
    });
  } else {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    const bodyObserver = new MutationObserver(() => {
      const el = document.querySelector('[data-test-id="available-balance"]');
      if (el) {
        bodyObserver.disconnect();
        changeBalance(currentValue);
        observer.disconnect();
        observer.observe(el, {
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    });
    bodyObserver.observe(document.body, { childList: true, subtree: true });
  }
}

chrome.storage.local.get("customBalance", (data) => {
  if (data.customBalance) {
    startObserver(data.customBalance);
  }
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.customBalance) {
    startObserver(changes.customBalance.newValue);
  }
});
