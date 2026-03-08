# 💳 PayPal Balance Changer

A browser extension that allows you to change the displayed balance on PayPal's website to any custom value.

## ✨ Features

- Changes the displayed balance value in PayPal's interface
- Simple interface to enter your desired value
- Maintains the custom value even with site navigation
- Does not interfere with other PayPal functionalities

## 📦 Installation

1. Download the extension files
2. Open your browser and go to `about:extensions`
3. Enable **Developer mode** (top right corner)
4. Click **Load unpacked**
5. Select the folder where you saved the extension files

## 🚀 How to Use

1. Go to the PayPal website
2. Click the extension icon in the browser toolbar
3. Enter your desired value (e.g., `1,250.00`)
4. Click **Apply**
5. The page automatically reloads and the displayed balance will be changed

## 📁 Extension Files

| File | Description |
|---|---|
| `manifest.json` | Extension configuration (Manifest V3) |
| `content.js` | Script that injects into PayPal and changes the balance |
| `popup.html` | Popup interface for entering the value |
| `popup.js` | Popup logic (saves value and reloads page) |
| `icon.png` | Extension icon |

## 🔧 How It Works

The extension uses a `MutationObserver` to detect when PayPal renders the balance element and replaces it with the custom value. The observer is surgical and only affects the balance element, without interfering with other site interactions.

## 🔐 Permissions

- `storage`: To save the custom value
- `activeTab`: To reload the tab after applying the value
- `scripting`: To inject the content script
- `host_permissions`: To work on PayPal pages

## 🌍 Compatibility

- Any PayPal website (paypal.com)

## ⚠️ Notes

- The change is visual only and does not affect the real account balance
- The value is saved locally in the browser
- The extension works even with navigation within PayPal

## 🛠️ Development

To modify the extension:

1. Edit the desired files
2. Reload the extension in `about:extensions`
3. Test the changes on the PayPal website

## 📜 License

This project is open-source and can be used, modified, and distributed freely under the terms of the MIT license.
