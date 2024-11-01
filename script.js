const menuBtn = document.getElementById('menuBtn');
const menuList = document.getElementById('menuList');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('show');
    menuBtn.textContent = menuList.classList.contains('show') ? '✖' : '☰';
});

const videos = document.querySelectorAll('video');

videos.forEach(video => {
    video.addEventListener('mouseenter', () => video.play());
    video.addEventListener('mouseleave', () => video.pause());
});
