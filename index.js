document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault(); // Prevent the page from scrolling
        const largeDog = document.getElementById('large-dog');
        const lightbulb = document.getElementById('lightbulb');

        if (largeDog) {
            largeDog.style.display = largeDog.style.display === 'none' ? 'block' : 'none';
        }

        if (lightbulb) {
            lightbulb.style.display = lightbulb.style.display === 'none' ? 'block' : 'none';
        }
    }
});


const bannerWindow = document.querySelector('.banner-window');

if (bannerWindow) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    bannerWindow.addEventListener('mousedown', (event) => {
        isDragging = true;
        offsetX = event.clientX - bannerWindow.offsetLeft;
        offsetY = event.clientY - bannerWindow.offsetTop;
        bannerWindow.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            bannerWindow.style.left = `${event.clientX - offsetX}px`;
            bannerWindow.style.top = `${event.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        bannerWindow.style.cursor = 'grab';
    });
}