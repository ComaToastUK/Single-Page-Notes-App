
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
  if ( this.toEqual(object, this.expectation)) {
    return this._it + " PASSED";
  } else {
    return this._it + " FAIL";
  }
  this._testObject = object
};

newTest = new testSpec();
newTest.it('Expects a cheeseburger');
newTest.expect('cheeseburger');
newTest.expectToEqual('cheeseburger');
