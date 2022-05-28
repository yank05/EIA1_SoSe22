var tonerow = ["c.mp3", "d.mp3", "e.mp3", "f.mp3", "g.mp3", "f.mp3", "e.mp3", "d.mp3", "c.mp3"];
var selector = 0;
//Sample Funktion
function playSample(file) {
    var sound = new Audio("../Aufgabe_9/sounds/Keyboard/" + file);
    sound.play();
}
//Tastenfunktionen
window.addEventListener('load', function () {
    document.querySelector("#white1").addEventListener('click', function () {
        playSample("c.mp3");
    });
    document.querySelector("#white2").addEventListener('click', function () {
        playSample("d.mp3");
    });
    document.querySelector("#white3").addEventListener('click', function () {
        playSample("e.mp3");
    });
    document.querySelector("#white4").addEventListener('click', function () {
        playSample("f.mp3");
    });
    document.querySelector("#white5").addEventListener('click', function () {
        playSample("g.mp3");
    });
    document.querySelector("#white6").addEventListener('click', function () {
        playSample("a.mp3");
    });
    document.querySelector("#white7").addEventListener('click', function () {
        playSample("b.mp3");
    });
    document.querySelector("#black1").addEventListener('click', function () {
        playSample("df.mp3");
    });
    document.querySelector("#black2").addEventListener('click', function () {
        playSample("ef.mp3");
    });
    document.querySelector("#black3").addEventListener('click', function () {
        playSample("gf.mp3");
    });
    document.querySelector("#black4").addEventListener('click', function () {
        playSample("af.mp3");
    });
    document.querySelector("#black5").addEventListener('click', function () {
        playSample("bf.mp3");
    });
});
var clickcount = 0;
var true_false = 0;
window.addEventListener('load', function () {
    document.querySelector("#playbutton").addEventListener('click', click);
});
function click() {
    clickcount++;
    if (clickcount == 1) {
        setInterval(function () {
            var sound = new Audio("../Aufgabe_9/sounds/Keyboard/" + tonerow[selector]);
            sound.play();
            selector++;
        }, 1600);
        console.log(clickcount);
    }
    else {
        clickcount = 0;
        console.log(clickcount);
        clearInterval();
        selector = 0;
        console.log(selector);
    }
    ;
}
//# sourceMappingURL=script_keyboard.js.map