// 1 task
let height = 24, lenght = 8, width = 30, volume;
volume = height * lenght * width;
console.log("parallelepiped volume =", volume);

if (height > width) {
	console.log("height is greater than width");
}
else {
	console.log("width is greater than height");
}

let answer = height > width ? 'height is greater than width' : 'width is greater than height';
console.log(answer);

// 2 task
let square = 1000, width1 = 15, height1 = 25, squareBed, remain;
squareBed = width1 * height1;
remain = square - squareBed;
console.log("remain =", remain);

// 3 task
let squareEllipse = 15, squareEllipse1 = 600, squareRing;
squareEllipse = squareEllipse * 100;
squareRing = squareEllipse - squareEllipse1;
console.log("square ring =", squareRing);

// 4 task
let x = 70, y = 40;
// if (x > y) {
// 	[x, y] = [y, x];
// }
[x, y] = x > y ? [y, x] : [x, y];
console.log("x =", x);
console.log("y =", y);

// 5 task
let m = 9.5, n = 12.6, l = 10, mOst, nOst;
mOst = l - m;
nOst = l - n;
mOst = Math.abs(mOst);
nOst = Math.abs(nOst);
if (mOst < nOst) {
	console.log("nearest number =", m);
}
else {
	console.log("nearest number =", n);
}

// 6 task
let value = 3500000, percent = 0.09, years = 30, pay, overPay;
pay = ((value * percent) / (1 - Math.pow((1 + percent), - years))) * years;
overPay = pay - value;
console.log("Overpayment =", overPay);