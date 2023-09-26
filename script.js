document.addEventListener("DOMContentLoaded", function() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    let currentIndex = 0;

    radioButtons.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            if (index === currentIndex + 1) {
                currentIndex = index;
            } else {
                radioButtons[currentIndex].checked = true;
            }
        });
    });
});
