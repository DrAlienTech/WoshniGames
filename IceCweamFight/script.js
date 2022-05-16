let canvas;

function prepareCanvas() {
    canvas = document.getElementById('canvas');
    canvas.width = innerWidth * 0.5;
    canvas.style.border = "1px solid black";

    var ctx = canvas.getContext('2d');

    ctx.save();

    ctx.clearRect(0, 0, 800, 800);

    window.requestAnimationFrame(drawBackground);
}

function drawBackground() {
    // Draw user-defined constant graphics

    window.requestAnimationFrame(drawFrame);
}

function drawFrame() {
    ctx.save();

    ctx.moveTo(canvas.width/2, canvas.height/2);

    ctx.restore();
}

function cleanCanvas() {
    ctx.restore();
}

const c = window.requestAnimationFrame(prepareCanvas);
console.log(c);