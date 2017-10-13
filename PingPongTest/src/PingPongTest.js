function PingPongSpec() {
  this.expectation = null;
  this._it = null;
  this._testObject = null;
}

PingPongSpec.prototype.expect = function(expectation) {
  this.expectation = expectation;
};

PingPongSpec.prototype.it = function(testDescription) {
  this._it = testDescription.toString();
};

PingPongSpec.prototype.toEqual = function(a, b) {
  return a === b;
};

PingPongSpec.prototype.expectToEqual = function(object) {
  this._testObject = object;
  if (this.toEqual(object, this.expectation)) {
    console.log(this._it + " PASSED");
  } else {
    throw new Error(
      this._it +
        " FAILED, Expected " +
        this.expectation +
        " and got " +
        this._testObject
    );
  }
};
