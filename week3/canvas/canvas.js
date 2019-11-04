const canvas = document.getElementById('draw');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = '#000000';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 10;

var isDrawing = false; // 현재 그림을 그리는 중인지
var lastX = 0; // 마지막 x 좌표
var lastY = 0; // 마지막 y 좌표
var direction = true;

function draw(e) {
    if (!isDrawing) return; // 그림 그리는 중에만 함수가 동작하도록
    context.beginPath();

    // 시작점
    context.moveTo(lastX, lastY);
    // 도착점
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();

    lastX = e.offsetX;
    lastY = e.offsetY;
    
    // // 필압 최대 굵기
    // if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    //     direction = !direction;
    // }

    // // 필압 설정
    // if (direction) {
    //     context.lineWidth++;
    // } else {
    //     context.lineWidth--;
    // }
}

function changeLineWidth(value) {
    context.lineWidth = value;
}

function changeColor(value) {
    context.strokeStyle = value;
}

// 마우스 이벤트 설정
canvas.addEventListener('mousedown', function(e) {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);