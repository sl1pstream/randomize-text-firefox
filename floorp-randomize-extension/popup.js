// popup.js: Handles the enable/disable toggles for the extension
const toggle = document.getElementById('toggle-extension');
const blurToggle = document.getElementById('toggle-blur');

// Load state from chrome.storage.local
chrome.storage.local.get(['floorpRandomizeEnabled', 'floorpBlurEnabled'], (result) => {
    toggle.checked = !!result.floorpRandomizeEnabled;
    blurToggle.checked = !!result.floorpBlurEnabled;
});

toggle.addEventListener('change', () => {
    chrome.storage.local.set({ floorpRandomizeEnabled: toggle.checked });
});

blurToggle.addEventListener('change', () => {
    chrome.storage.local.set({ floorpBlurEnabled: blurToggle.checked });
});
