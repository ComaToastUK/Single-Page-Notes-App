(function(exports){
  function noteChecker() {
    var note = new Note('string');

    if (note.body !== 'string') {
      throw new Error("Note does not match");
    } else {
      console.log('Note checker verified');
    }
  };

  noteChecker();
})(this);
