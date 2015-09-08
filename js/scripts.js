var triangleTracker = function(num1, num2, num3) {
    if ((num1 + num2) <= (num3)) ||
       ((num2 + num3) <= (num1)) ||
       ((num3 + num1) <= (num2)) {
    return "not a triangle";
}
};
