const starContainer = document.querySelector('.stars');
const numStars = 400;

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    starContainer.appendChild(star);
}

for (let i = 0; i < numStars; i++) {
    createStar();
}
