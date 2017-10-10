(function(exports) {
  function NoteBuddy() {
    this.list = [];
  }

  NoteBuddy.prototype.storeNote = function(note) {
    return this.list.push(note);
  };

  NoteBuddy.prototype.createNote = function(string) {
    var note = new Note(string);
    this.storeNote(note);
    return note;
  };

  NoteBuddy.prototype.outputList = function() {
    return this.list;
  };


  exports.NoteBuddy = NoteBuddy;
})(this);
