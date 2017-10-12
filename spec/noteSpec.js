(function(exports) {
  function noteChecker() {
    var firstTest = new PingPongSpec();
    var note1 = new Note("string");
    firstTest.it('Expects note.body to equal "string"');
    firstTest.expect(note1.body);
    firstTest.expectToEqual("string");

    var secondTest = new PingPongSpec();
    var note2 = new Note("string2");
    secondTest.it("expects note2.returnNote() to return note.body");
    secondTest.expect(note2.returnNote());
    secondTest.expectToEqual("string2");
  }

  noteChecker();
})(this);
