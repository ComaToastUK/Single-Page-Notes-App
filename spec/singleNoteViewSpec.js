(function(exports) {
  function singleNoteViewChecker() {
    noteBuddy = new NoteBuddy();
    note = noteBuddy.createNote("This is a note longer than 20 characters and we should see all of it.");
    var singleNoteView = new SingleNoteView(note);
    if (
      singleNoteView.getHTML() !==
      "<div id='singlenote'>This is a note longer than 20 characters and we should see all of it.</div>"
    ) {
      throw new Error("SingleNoteView has malfunctioned");
    } else {
      console.log("SingleNoteView.getHTML verified");
    }
  }

  singleNoteViewChecker();
})(this);
