(function(exports) {
  function NoteBuddy() {
    this.list = [];
  }

  NoteBuddy.prototype.storeNote = function(note) {
    return this.list.push(note);
  };

  NoteBuddy.prototype.createNote = function(string, noteConstructor = Note) {
    var note = new noteConstructor(string);
    this.storeNote(note);
    return note;
  };

  NoteBuddy.prototype.noteList = function() {
    var noteListHtml = ["<ul class='note_list'>"];
    var notes = this.list;
    notes.forEach(function(note, index) {
      noteListHtml.push(
        "<a href='#$" + index + "'>" +
        note.returnNote().substring(0, 20) +
        "</a>"
      );
    });
    noteListHtml.push("</ul>");
    return noteListHtml.join("");
  };

  NoteBuddy.prototype.singleNote = function (noteIndex) {
    var note = this.list[noteIndex];
    return "<div class='single_note'>" + note.returnNote() + "</div>";
  };

  exports.NoteBuddy = NoteBuddy;
})(this);
