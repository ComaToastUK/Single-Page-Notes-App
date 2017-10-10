(function(exports) {
  function noteBuddyViewChecker() {
    noteBuddy = new NoteBuddy();
    noteBuddy.createNote("a");
    noteBuddy.createNote("b");
    noteBuddy.createNote("c");
    var noteBuddyView = new NoteBuddyView(noteBuddy);
    if (
      noteBuddyView.toHTML() !==
      "<ul><li><div>a</div></li><li><div>b</div></li><li><div>c</div></li></ul>"
    ) {
      throw new Error("NoteBuddyView has malfunctioned");
    } else {
      console.log("NoteBuddyView.toHTML verified");
    }
  }

  noteBuddyViewChecker();
})(this);
