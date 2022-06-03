var tonerow = ["c.mp3", "d.mp3", "e.mp3", "f.mp3", "g.mp3", "f.mp3", "e.mp3", "d.mp3", "c.mp3"];
var tonepool = ["c.mp3", "d.mp3", "e.mp3", "f.mp3", "g.mp3", "a.mp3", "b.mp3", "af.mp3", "bf.mp3", "df.mp3", "ef.mp3", "gf.mp3"];
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
window.addEventListener("load", function () {
    document.querySelector(".fa-play").addEventListener("click", click);
    document.querySelector("#remix").addEventListener("click", remix);
});
//Start, Stop + Loop der Melodie
function click() {
    clickcount++;
    selector = 0;
    document.getElementById("xxx").setAttribute("class", "fas fa-stop");
    if (clickcount == 1) {
        var tones = setInterval(function () {
            var sound = new Audio("../Aufgabe_9/sounds/Keyboard/" + tonerow[selector]);
            sound.play();
            selector++;
            if (selector == 9) {
                selector = 0;
            }
        }, 1000);
    }
    if (clickcount == 2) {
        document.getElementById("xxx").setAttribute("class", "fas fa-play");
        clickcount = 0;
        selector = 10;
    }
}
//Remix
var selectorRemix;
function remix() {
    var remixplay = setInterval(function () {
        selectorRemix = Math.round(Math.random());
        var sound = new Audio("../Aufgabe_9/sounds/Keyboard/" + tonepool[selectorRemix]);
        sound.play();
        selector++;
    }, 1600);
}
//# sourceMappingURL=script_keyboard.js.map