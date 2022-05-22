var tonerow = ["c.mp3", "d.mp3", "e.mp3", "f.mp3", "g.mp3", "f.mp3", "e.mp3", "d.mp3", "c.mp3"];
var selector = 0;
//Sample Funktion
function playSample(file) {
    var sound = new Audio("assets/keyboard/" + file);
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
//Melodie
function melody() {
    setInterval(function () {
        var sound = new Audio("assets/keyboard/" + tonerow[selector]);
        sound.play();
        selector++;
    }, 1000);
}
;
window.addEventListener('load', function () {
    document.querySelector("#playbutton").addEventListener('click', melody);
});
//# sourceMappingURL=script_keyboard.js.map