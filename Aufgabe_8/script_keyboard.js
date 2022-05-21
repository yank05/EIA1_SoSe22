var tonerow = ["assets/keyboard/c.mp3" + "assets/keyboard/d.mp3" + "assets/keyboard/e.mp3" + "assets/keyboard/f.mp3" + "assets/keyboard/g.mp3" + "assets/keyboard/f.mp3" + "assets/keyboard/e.mp3" + "assets/keyboard/d.mp3" + "assets/keyboard/c.mp3"];
var selector = 0;
function playSample(file) {
    var sound = new Audio("assets/keyboard/" + file);
    sound.play();
}
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
    document.querySelector('#playbutton').addEventListener('click', Interval);
});
function Interval() {
    setInterval(function () {
        var sound = new Audio("assets/Keyboard/" + tonerow[selector]);
        sound.play();
    }, 500);
    selector++;
}
;
//# sourceMappingURL=script_keyboard.js.map