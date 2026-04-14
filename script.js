window.addEventListener('load' , () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => { loader.style.display = 'none'; } , 500);
    } , 800);
});

const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click' , () => {
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

function copyBGMI() {
    const bgmiId = "5882897278";
    navigator.clipboard.writeText(bgmiId).then(() => {
        const statusElement = document.getElementById('bgmi-text');
        statusElement.innerText = "ID Copied";
        setTimeout(() => { statusElement.innerText = ""; } , 2000);
    });
}
