var triangleTracker = function(num1, num2, num3) {
    if (((num1 + num2) <= (num3)) ||
       ((num2 + num3) <= (num1)) ||
       ((num3 + num1) <= (num2))) {
       return "not a triangle";

  } else if (num1 === num2 && num2 === num3){
       return "equilateral";

  } else if (num1 === num2 || num1 === num3 || num2 === num3){
       return "isosceles";

  } else {
       return "scalene";
  }
};
