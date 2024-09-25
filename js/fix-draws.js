document.addEventListener('DOMContentLoaded', function() {
    const drawButtons = document.querySelectorAll('.draw-button');
    const iframes = document.querySelectorAll('iframe');

    drawButtons.forEach(button => {
        button.addEventListener('click', function() {
            iframes.forEach(iframe => {
                // This will reload the iframe, effectively stopping the video
                iframe.src = iframe.src;
            });
        });
    });
});