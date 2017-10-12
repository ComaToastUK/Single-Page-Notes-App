(function(exports) {
  function noteBuddyChecker() {
    var mockNote = function() {
      "I am an example note";
    };

    function test1() {
      var test = new testSpec();
      var noteBuddy = new NoteBuddy();
      test.it("Expects note to be contained in list");
      noteBuddy.storeNote(mockNote);
      test.expect(noteBuddy.list.includes(mockNote));
      test.expectToEqual(true);
    }
    test1();

    function test2() {
      var test = new testSpec();
      var noteBuddy = new NoteBuddy();
      var newNote = noteBuddy.createNote("I'm a brand new note!");
      test.it("Expects a note to be created");
      test.expect(noteBuddy.list.includes(newNote));
      test.expectToEqual(true);
    }
    test2();
  }

  noteBuddyChecker();
})(this);
