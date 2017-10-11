(function(exports) {
  function NoteBuddyView(noteBuddy) {
    this.list = noteBuddy;
    this.htmlArray = ["<ul>"];
  }

  NoteBuddyView.prototype.toHTML = function() {
    var notes = this.list.outputList();
    var noteCount = notes.length;
    if (noteCount === 0) {
      return "No notes found";
    } else {
      for (var i = 0; i < noteCount; i++) {
        var note = notes[i];
        var noteLink = note
          .returnNote()
          .substring(0, 20)
          .split(" ")
          .join("-") + "$" + i;
        this.htmlArray.push(
          "<div id=" +
            "'noteLink'" +
            "><a href='#" +
            noteLink +
            "'>" +
            note.returnNote().substring(0, 20) +
            "</a></div>"
        );
      }
    }
    this.htmlArray.push("</ul>");
    return this.htmlArray.join("");
  };

  exports.NoteBuddyView = NoteBuddyView;
})(this);
