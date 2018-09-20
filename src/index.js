module.exports = function solveEquation(equation) {
  var sign = 0;
  var param;
  var arr = [];
  var a;
  var b;
  var c;
  var d;
  var x1;
  var x2;
  var result = [];
  var num = equation.split(' ');

  for (var i = 0; i < num.length; i++) {
    if (num[i] == '+') {
      sign = 1; 
    }
    if (num[i] == '-') {
      sign = -1;
    }

    if (!isNaN(num[i])) {
      if (sign !== 0) {
        param = sign * num[i];
        arr.push(param);
      }
      else {
        arr.push(parseInt(num[i]));
      }
    }
  }

  a = arr[0];
  b = arr[1];
  c = arr[2];

  d = b * b - 4 * a * c;
  x1 = (-1 * b + Math.sqrt(d)) / (2 * a);
  x2 = (-1 * b - Math.sqrt(d)) / (2 * a);
  

  result.push(parseInt(x1.toFixed()));
  result.push(parseInt(x2.toFixed()));
  result.sort(function(a,b){return a - b});
  return result;
}
