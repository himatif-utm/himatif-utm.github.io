const element = document.querySelector('.gambar');
const navbar = document.querySelector('.navbar-menu');
const title = document.querySelector('.bm');
const count = document.querySelector('#count');

element.style.setProperty('--animate-duration', '3s');
navbar.style.setProperty('--animate-duration', '0.5s');
title.style.setProperty('--animate-duration', '4s');
count.style.setProperty('--animate-duration', '5s');

(function () {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('#' + burger.dataset.target);
    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
})();
let countDownDate = new Date("Oct 3, 2020 ").getTime();

// Update the count down every 1 second
let x = setInterval(function () {

    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("count").innerHTML = days + " Hari " + hours + " Jam " +
        minutes + " menit " + seconds + " detik ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("count").innerHTML = "Dimulai";
    }
}, 1000);