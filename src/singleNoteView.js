(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.getHTML = function() {
    return "<div id='singlenote'>" + this.note.returnNote() + "</div>";
  }

  exports.SingleNoteView = SingleNoteView;
})(this);
