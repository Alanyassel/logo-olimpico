canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Usa la función beginPath() para empezar un path.
    Luega, usa strokeStyle para establecer el color a "grey".
    Usa lineWidth para establecer el ancho a 1.
    Usa rect() para crear un rectángulo en 150 y 143
con un ancho de 430 y una altura de 200.
*/

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect(x, y, width, height);
ctx.stroke();

/*
    Usa la función beginPath() para empezar un path.
    Luega, usa strokeStyle para establecer el color a "blue".
    Usa l ineWidthpara establecer el ancho a 5.
    Usa arc() para crear un círculo en x = 150, y = 143
con un radio de 40, un startAngle de 0 y un endAngle de 2 * Math.PI.
*/

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.ineWidthpara  = 5;
ctx.arc(x, y, r, startAngle, endAngle);
ctx.stroke();

