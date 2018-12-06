var countDownDate = new Date("December 22, 2018 00:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("counter").innerHTML = days + "d " + hours + "t "
        + minutes + "m " + seconds + "s ";
    document.getElementById('counter').style.opacity = 1;


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "EXPIRED";
    }
}, 1000);

var i = 0;
var txt = 'Ullernrevyen 2019';
var speed = 70; //Duration

var typeWriter = setInterval(() => {
    if (i < txt.length) {
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
    }
}, speed);