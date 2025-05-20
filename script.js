var workSpace = document.getElementById('workarea');
var clearButton = document.getElementById('clearButton');
var increaseFontButton = document.getElementById('increaseFontButton');
var decreaseFontButton = document.getElementById('decreaseFontButton');

var currentDataKey = "currentData";
var fontSizeKey = "preferredFontSize";

// Font size constants
var minFontSize = 0.8; // em
var maxFontSize = 2.5; // em
var fontStep = 0.1;    // em
var defaultFontSize = 1.2; // em (matches initial CSS)

// Function to apply font size in 'em'
function applyFontSize(sizeInEm) {
    // Ensure size is within bounds
    var clampedSize = Math.max(minFontSize, Math.min(sizeInEm, maxFontSize));
    workSpace.style.fontSize = clampedSize + "em";
}

// Function to get current font size in 'em'
function getCurrentFontSizeInEm() {
    // 1. Try to get from the element's directly set style if it's in 'em'
    if (workSpace.style.fontSize && workSpace.style.fontSize.endsWith('em')) {
        var parsedSize = parseFloat(workSpace.style.fontSize);
        if (!isNaN(parsedSize)) {
            return parsedSize;
        }
    }

    // 2. Try to get from localStorage (last saved preference)
    try {
        var storedFontSize = localStorage.getItem(fontSizeKey);
        if (storedFontSize) {
            var parsedSize = parseFloat(storedFontSize);
            if (!isNaN(parsedSize)) {
                return parsedSize;
            }
        }
    } catch (e) {
        console.error("Error reading font size from localStorage for getCurrentFontSizeInEm:", e);
    }

    // 3. Fallback to default font size
    return defaultFontSize;
}

// Load text data from localStorage
try {
    var storedText = localStorage.getItem(currentDataKey);
    if (storedText !== null) { // Check for null explicitly, as empty string is a valid value
        workSpace.value = storedText;
    }
} catch (e) {
    console.error("Error reading text data from localStorage:", e);
}

// Load and apply preferred font size from localStorage on initial load
try {
    var initialFontSize = getCurrentFontSizeInEm(); // This will use localStorage or default
    applyFontSize(initialFontSize); // Apply it respecting bounds
} catch (e) {
    console.error("Error applying initial font size:", e);
    applyFontSize(defaultFontSize); // Apply default in case of any error
}

// Save text data to localStorage on change
workSpace.addEventListener("change", function() {
    try {
        localStorage.setItem(currentDataKey, workSpace.value);
    } catch (e) {
        console.error("Error writing text data to localStorage:", e);
        alert("Error: Could not save text. Storage might be full or access denied.");
    }
}, false);

// Event listener for Clear Button
if (clearButton) {
    clearButton.addEventListener("click", function() {
        workSpace.value = "";
        try {
            localStorage.removeItem(currentDataKey);
            console.log("Text area cleared and localStorage item removed.");
        } catch (e) {
            console.error("Error removing text data from localStorage:", e);
            alert("Error: Could not clear saved text. Storage access might be denied.");
        }
    });
} else {
    console.warn("Clear button not found.");
}

// Event listener for Increase Font Button
if (increaseFontButton) {
    increaseFontButton.addEventListener("click", function() {
        var currentSizeInEm = getCurrentFontSizeInEm();
        var newSizeInEm = currentSizeInEm + fontStep;
        applyFontSize(newSizeInEm); // applyFontSize will handle clamping
        try {
            // Save the actual applied size (after clamping)
            localStorage.setItem(fontSizeKey, workSpace.style.fontSize.replace('em', ''));
        } catch (e) {
            console.error("Error saving font size to localStorage:", e);
        }
    });
} else {
    console.warn("Increase Font button not found.");
}

// Event listener for Decrease Font Button
if (decreaseFontButton) {
    decreaseFontButton.addEventListener("click", function() {
        var currentSizeInEm = getCurrentFontSizeInEm();
        var newSizeInEm = currentSizeInEm - fontStep;
        applyFontSize(newSizeInEm); // applyFontSize will handle clamping
        try {
            // Save the actual applied size (after clamping)
            localStorage.setItem(fontSizeKey, workSpace.style.fontSize.replace('em', ''));
        } catch (e) {
            console.error("Error saving font size to localStorage:", e);
        }
    });
} else {
    console.warn("Decrease Font button not found.");
}
