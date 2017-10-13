(function(exports) {
  function noteBuddyChecker() {
    var mockNote = function() {
      "I am an example note";
    };

    function testStoreNote() {
      var test = new PingPongSpec();
      var noteBuddy = new NoteBuddy();
      test.it("Expects note to be contained in list");
      noteBuddy.storeNote(mockNote);
      test.expect(noteBuddy.list.includes(mockNote));
      test.expectToEqual(true);
    }
    testStoreNote();

    function testCreateNote() {
      var test = new PingPongSpec();
      var noteBuddy = new NoteBuddy();
      var newNote = noteBuddy.createNote("I'm a brand new note!");
      test.it("Expects a note to be created");
      test.expect(noteBuddy.list.includes(newNote));
      test.expectToEqual(true);
    }
    testCreateNote();
  

    function testNoteList() {
      var test = new PingPongSpec();
      var noteBuddy = new NoteBuddy();
      var newNote = noteBuddy.createNote("I'm a brand new note!");
      test.it("Expects an HTML string to be created");
      console.log(noteBuddy.noteList());
      test.expect(noteBuddy.noteList());
      test.expectToEqual("<ul class='note_list'><a href='#$0'>I'm a brand new note</a></ul>");
    }
    testNoteList();
  }
  noteBuddyChecker();
})(this);
