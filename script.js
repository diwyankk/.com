// script.js

// page load hone par loader hide karne ka logic
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }, 1500);
});

// dark and light mode automatically badalna
setInterval(() => {
    const body = document.body;
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
}, 10000);

// bgmi id copy functionality
function copyBGMI() {
    const bgmiId = "5882897278";
    navigator.clipboard.writeText(bgmiId).then(() => {
        const textElement = document.getElementById('bgmi-text');
        const originalText = "BGMI ID: " + bgmiId;
        textElement.innerText = "ID Copied!";
        setTimeout(() => {
            textElement.innerText = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Copy fail ho gaya', err);
    });
}
