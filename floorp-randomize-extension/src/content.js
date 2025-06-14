// Store the last randomized element and its original text
let lastRandomized = null;
let lastOriginalText = '';

// Use a stack to support multiple undos
const undoStack = [];

// Helper to check if extension is enabled
function isExtensionEnabled(callback) {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        chrome.storage.local.get(['floorpRandomizeEnabled', 'floorpBlurEnabled'], (result) => {
            callback({
                randomize: !!result.floorpRandomizeEnabled,
                blur: !!result.floorpBlurEnabled
            });
        });
    } else {
        callback({ randomize: true, blur: true }); // fallback: always enabled
    }
}

document.addEventListener('mousedown', function (e) {
    isExtensionEnabled((enabled) => {
        if (!e.altKey) return;
        const selection = window.getSelection();
        selection.removeAllRanges(); // Clear any existing selection
        let range, node, offset;
        if (document.caretPositionFromPoint) {
            const pos = document.caretPositionFromPoint(e.clientX, e.clientY);
            node = pos && pos.offsetNode;
            offset = pos && pos.offset;
        } else if (document.caretRangeFromPoint) {
            const pos = document.caretRangeFromPoint(e.clientX, e.clientY);
            node = pos && pos.startContainer;
            offset = pos && pos.startOffset;
        }
        if (!node || node.nodeType !== Node.TEXT_NODE) return;
        const text = node.textContent;
        // Find word boundaries (only spaces are separators)
        let start = offset, end = offset;
        while (start > 0 && text[start - 1] !== ' ') start--;
        while (end < text.length && text[end] !== ' ') end++;
        const word = text.slice(start, end);
        if (!word.trim()) return;
        // Prepare replacement
        function randomString(length) {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
        }
        const span = document.createElement('span');
        if (enabled.randomize && enabled.blur) {
            span.textContent = randomString(word.length);
            span.className = 'floorp-blur-randomized';
        } else if (enabled.randomize) {
            span.textContent = randomString(word.length);
        } else if (enabled.blur) {
            span.textContent = word;
            span.className = 'floorp-blur-randomized';
        } else {
            return;
        }
        // Replace the word in the text node
        const before = text.slice(0, start);
        const after = text.slice(end);
        const parent = node.parentNode;
        const frag = document.createDocumentFragment();
        if (before) frag.appendChild(document.createTextNode(before));
        frag.appendChild(span);
        if (after) frag.appendChild(document.createTextNode(after));
        parent.replaceChild(frag, node);
        undoStack.push({ element: span, originalText: word });
    });
});

// Listen for Ctrl+Z to undo the last randomization/blur
window.addEventListener('keydown', function(e) {
    isExtensionEnabled((enabled) => {
        if (!enabled) return;

        if (e.ctrlKey && e.key === 'z') {
            const last = undoStack.pop();
            if (last && last.element && last.originalText) {
                const parent = last.element.parentNode;
                if (parent) {
                    const textNode = document.createTextNode(last.originalText);
                    parent.replaceChild(textNode, last.element);
                }
            }
        }
    });
});