(function(exports) {
  function noteBuddyViewChecker() {
    newTest1 = new PingPongSpec();
    noteBuddy = new NoteBuddy();
    noteBuddyView = new NoteBuddyView(noteBuddy);

    noteBuddy.createNote(
      "This is a note longer than 20 characters to check that it gets summarized."
    );
    newTest1.it("Expects noteBuddyView.toHTML to contain a HTML string");
    newTest1.expect(noteBuddyView.toHTML());
    newTest1.expectToEqual(
      "<ul class='note_list'><div id='noteLink'><a href='#This-is-a-note-longe$0'>This is a note longe</a></div></ul>"
    );
  }
  noteBuddyViewChecker();
})(this);
