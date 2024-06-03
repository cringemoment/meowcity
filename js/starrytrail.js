document.addEventListener('mousemove', function(e) {
    createStar(e.pageX, e.pageY);
});

function createStar(x, y) {
    const star = document.createElement('div');
    star.className = 'cursorstar';
    const offsetX = (Math.random() - 0.5) * 10;
    const offsetY = (Math.random() - 0.5) * 10;

    star.style.left = `${x + offsetX}px`;
    star.style.top = `${y + offsetY}px`;

    document.body.appendChild(star);

    // Remove the star after the animation completes
    setTimeout(() => {
        star.remove();
    }, 1000);
}
