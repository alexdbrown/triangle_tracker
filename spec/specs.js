describe('traingleTracker', function() {
    it("is not a triangle if the sum of two sides is less than the third", function() {
        expect(triangleTracker(1, 3, 1).to.equal("not a triangle"));
    });



  // it("is equilateral when all sides are equal", function() {
  //   expect(traingleTracker(2, 2, 2).to.equal("equilateral"));
  // });

});
