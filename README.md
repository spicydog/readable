Readable
========

**A simple web application for a clean, readable view of pasted text, with features to enhance readability and manage content.**

This tool helps you focus on reading by providing a distraction-free interface for any text you copy from websites or other sources. Your text is automatically saved in your browser, so you can come back to it later.

[Try it here!](https://cdn.rawgit.com/spicydog/readable/master/index.html)

## Features

*   **Clean Text Area:** A spacious, distraction-free environment for reading.
*   **Text Persistence:** Automatically saves your pasted text in the browser's local storage, so it's available when you reopen the application.
*   **Clear Button:** Easily clear the current text from the work area and local storage.
*   **Font Size Adjustment:** Increase or decrease the font size for optimal readability. Your preference is saved for future sessions.
*   **Responsive Design:** The layout adapts to different screen sizes for a good experience on desktop or mobile.

## How to Use

1.  **Paste Your Text:** Simply copy text from any source and paste it into the main work area.
2.  **Adjust Font Size:** Use the "Increase Font" and "Decrease Font" buttons to find a comfortable size.
3.  **Clear Text:** Click the "Clear Text" button to remove the current text.
4.  **Return Later:** Your text and font size preference will be waiting for you the next time you open the app in the same browser.

## Technical Overview & Improvements

This project has been structured with modern web practices:

*   **Semantic HTML:** The HTML structure has been refactored to use semantic elements like `<header>`, `<main>`, and `aria-label` for better accessibility and understanding.
*   **Externalized CSS & JavaScript:** Styles and scripts are managed in separate files (`style.css`, `script.js`) for improved organization and maintainability.
*   **Improved Styling:** CSS has been enhanced for better visual appeal, layout management using Flexbox, and responsiveness.
*   **Accessibility:** Basic accessibility features, such as ARIA labels and language attributes, have been implemented.
*   **Error Handling:** JavaScript includes error handling for `localStorage` operations to ensure a smoother user experience.

This project was initially a tiny helper and has been progressively enhanced with these features.
