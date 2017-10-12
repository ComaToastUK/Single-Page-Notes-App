
function testSpec(){
  this.expectation = null;
  this._it = null;
  this._testObject = null
}

testSpec.prototype.expect = function (expectation){
  this.expectation = expectation;
};

testSpec.prototype.it = function (testDescription) {
  this._it = testDescription.toString();
};


testSpec.prototype.toEqual = function (a,b) {
    return a === b;
};

testSpec.prototype.expectToEqual = function (object){
  this._testObject = object
  if ( this.toEqual(object, this.expectation)) {
    console.log(this._it + " PASSED");
  } else {
    console.log(this._it + " FAIL");
    console.log("Expected " + this.expectation + " and got " + this._testObject)
  }
};

//
// How to run tests
//
// var newTest = new testSpec();
// newTest.it('Expects a cheeseburger');
// newTest.expect('cheeseburger');
// newTest.expectToEqual('cheeseburger');
