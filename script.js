// script.js

// loading animation logic
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }, 1500);
});

// dark and light mode button logic
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    const body = document.body;
    const icon = themeBtn.querySelector('i');
    
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

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
        console.error(err);
    });
}
