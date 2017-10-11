(function(exports) {
  function noteBuddyViewChecker() {
    noteBuddy = new NoteBuddy();
    noteBuddy.createNote("This is a note longer than 20 characters to check that it gets summarized.");
    noteBuddy.createNote("Testing, testing we should only see 20 characters of this.");
    var noteBuddyView = new NoteBuddyView(noteBuddy);
    if (
      noteBuddyView.toHTML() !==
      "<ul><div id='noteLink'><a href='#This-is-a-note-longe$0'>This is a note longe</a></div><div id='noteLink'><a href='#Testing,-testing-we-$1'>Testing, testing we </a></div></ul>"    ) {
      throw new Error("NoteBuddyView has malfunctioned");
    } else {
      console.log("NoteBuddyView.toHTML verified");
    }
  }

  noteBuddyViewChecker();
})(this);
