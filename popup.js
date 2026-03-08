const balanceInput = document.getElementById("balance");
const saveBtn = document.getElementById("save");
const statusDiv = document.getElementById("status");

chrome.storage.local.get("customBalance", (data) => {
  if (data.customBalance) {
    balanceInput.value = data.customBalance;
  }
});

saveBtn.addEventListener("click", () => {
  const value = balanceInput.value.trim();
  if (!value) return;

  chrome.storage.local.set({ customBalance: value }, () => {
    statusDiv.textContent = "Saldo aplicado!";
    setTimeout(() => (statusDiv.textContent = ""), 2000);

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.tabs.reload(tabs[0].id);
      }
    });
  });
});
