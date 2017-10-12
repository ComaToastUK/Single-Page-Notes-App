(function(exports) {
  function exampleTest() {
    var exampleTest = new PingPongSpec(); // Create a new instance of the test class
    var yourObject = new YourObject(); // This is the object you want to test
    exampleTest.it("Expects something"); // Write what you want to test as an arg
    exampleTest.expect(yourObject.SomeMethod()); // Input the method you want to test as an arg
    exampleTest.expectToEqual(Some_expected_output); // Input the expected output as an arg
  }

exampleTest();
})(this);
