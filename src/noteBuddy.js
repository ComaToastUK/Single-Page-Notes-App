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

  NoteBuddy.prototype.outputList = function() {
    return this.list;
  };

  exports.NoteBuddy = NoteBuddy;
})(this);
