function drawArc(context, radiusX, radiusY, radius, startAngle, endAngle, ccw) {
    context.beginPath();
    context.arc(radiusX, radiusY, radius, startAngle, endAngle, ccw);
    context.stroke();
}
function drawLine(context, fromX, fromY, toX, toY) {
    context.beginPath();
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
}

function drawGrid(context) {
    for (var i = 0; i < 500; i += 10) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, 500);
        context.stroke();
    }

    for (var i = 0; i < 500; i += 10) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(500, i);
        context.stroke();
    }
}

function drawRectangle(context, x, y, larg, long) {
    context.fillRect(x, y, larg, long)
}

function drawCurves(context, startX, startY, x1, y1, x2, y2, endX, endY) {
    context.beginPath();
    context.moveTo(startX, startY);
    context.bezierCurveTo(
        x1, y1,
        x2, y2,
        endX, endY
    );
    context.stroke();
}