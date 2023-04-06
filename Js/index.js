function spin() {
    var circle = document.querySelector('.circle');
    circle.classList.add('spin-animation');
    setTimeout(function () {
        circle.classList.remove('spin-animation');
    }, 5000);
}
