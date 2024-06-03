document.querySelectorAll('.sidebar_link').forEach(link => {
    const text = link.textContent;
    link.innerHTML = text.split('').map(letter => {
        if (letter === ' ') {
            return `<span style="display:inline-block; width:0.3em;">&nbsp;</span>`;
        }
        return `<span>${letter}</span>`;
    }).join('');

    link.addEventListener('mouseover', () => {
        link.querySelectorAll('span').forEach((span, index) => {
          setTimeout(() => {
              span.style.transform = 'scale(1.3)';
              span.style.transition = 'transform 0.5s';
              span.style.color = `hsl(${index * 30}, 100%, 50%)`; // Adjust the hue value for the gradient effect

              setTimeout(() => {
                  span.style.transform = 'scale(1)';
                  span.style.transition = 'transform 0.5s';
                  span.style.color = ''; // Reset color after scaling down
              }, 300);
          }, index * 100);
        });
    });
});
