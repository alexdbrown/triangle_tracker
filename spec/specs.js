describe('triangleTracker', function() {
    it("is not a triangle if the sum of two sides is less than the third", function() {
        expect(triangleTracker(1, 3, 1)).to.equal("not a triangle");
    });

    it("is equilateral when all sides are equal", function() {
    expect(triangleTracker(2, 2, 2)).to.equal("equilateral");
    });

    it("is isosceles when exactly two sides are equal", function() {
    expect(triangleTracker(2, 2, 1)).to.equal("isosceles");
    });

    it("is scalene when no sides are equal", function() {
    expect(triangleTracker(2, 4, 5)).to.equal("scalene");
    });


});
