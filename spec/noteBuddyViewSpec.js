(function(exports) {
  function noteBuddyViewChecker() {
    noteBuddy = new NoteBuddy();
    noteBuddy.createNote("This is a note longer than 20 characters to check that it gets summarized.");
    noteBuddy.createNote("Testing, testing - we should only see 20 characters of this.");
    var noteBuddyView = new NoteBuddyView(noteBuddy);
    if (
      noteBuddyView.toHTML() !==
      "<ul><li><div>This is a note longe</div></li><li><div>Testing, testing - w</div></li></ul>"
    ) {
      throw new Error("NoteBuddyView has malfunctioned");
    } else {
      console.log("NoteBuddyView.toHTML verified");
    }
  }

  noteBuddyViewChecker();
})(this);
