// Get the necessary elements
const img = document.getElementsByClassName('360-img-rotate')[0];
const leftButton = document.querySelector('.rotatable-img-controller-left');
const rightButton = document.querySelector('.rotatable-img-controller-right');

let hoverCount = 0;
let interval;

function rotateImage(direction) {
    clearInterval(interval);

    interval = setInterval(() => {
        hoverCount = (hoverCount + direction + 16) % 16;
        img.src = `../dist/images/left${hoverCount}.png`;
    }, 400);
}

leftButton.addEventListener('mouseenter', () => {
    rotateImage(-1);
});

rightButton.addEventListener('mouseenter', () => {
    rotateImage(1);
});

// Stop rotation when mouse leaves the buttons
leftButton.addEventListener('mouseleave', () => {
    clearInterval(interval);
});

rightButton.addEventListener('mouseleave', () => {
    clearInterval(interval);
});
