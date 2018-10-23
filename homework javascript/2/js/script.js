// Task 1
let side1, side2, side3;
let x1 = 1; x2 = 1; y1 = 4; y2 = 1; z1 = 4; z2 = 7;
side1 = Math.sqrt(Math.pow((y1 - x1), 2) + Math.pow((y2 - x2), 2));
side2 = Math.sqrt(Math.pow((z1 - y1), 2) + Math.pow((z2 - y2), 2));
side3 = Math.sqrt(Math.pow((x1 - z1), 2) + Math.pow((x2 - z2), 2));
console.log(side1, side2, side3);
if (Math.floor(Math.pow(side1, 2)) === Math.floor(Math.pow(side2, 2)) + 
	Math.floor(Math.pow(side3, 2)) || Math.floor(Math.pow(side2, 2)) === 
	Math.floor(Math.pow(side1, 2)) + Math.floor(Math.pow(side3, 2)) ||
	Math.floor(Math.pow(side3, 2)) === Math.floor(Math.pow(side1, 2)) + 
	Math.floor(Math.pow(side2, 2))) {
	console.log("Треугольник является прямоугольным");
} else {
	console.log("Треугольник не является прямоугольным");
}

// Task 2
let monthNum = new Date().getMonth();
if (monthNum == 11 || monthNum == 0 || monthNum == 1) {
	console.log("Winter");
} else if (monthNum == 2 || monthNum == 3 || monthNum == 4) {
	console.log("Spring");
} else if (monthNum == 5 || monthNum == 6 || monthNum == 7) {
	console.log("Summer");
} else if (monthNum == 8 || monthNum == 9 || monthNum == 10) {
	console.log("Autumn");
} else {
	console.log("Error");
}