(function(exports) {
  function noteBuddyChecker() {
    var noteBuddy = new NoteBuddy();

    var mockNote = function() {
      "I am an example note";
    };

    noteBuddy.storeNote(mockNote);

    if (noteBuddy.list.includes(mockNote)) {
      console.log("Note contained in list");
    } else {
      throw new Error("Does not contain note");
    }

    var realNote = noteBuddy.createNote("I'm a brand new note!");
    if (noteBuddy.list.includes(realNote)) {
      console.log("Note was created!!");
    } else {
      throw new Error("Does not contain note");
    }
  }

  noteBuddyChecker();
})(this);
