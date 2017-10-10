(function(exports) {
  function noteChecker() {
    var note = new Note("string");

    if (note.body !== "string") {
      throw new Error("Note does not match");
    } else {
      console.log("Note checker verified");
    }
    if (note.returnNote() !== note.body) {
      throw new Error("returnNote does not match");
    } else {
      console.log("returnNote verified");
    }
  }

  noteChecker();
})(this);
