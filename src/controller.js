createNote();
showSingleNote();

var noteBuddy = new NoteBuddy;
var buddy = new Buddy;
var renderer = new Renderer;

function createNote() {
  document
  .getElementById("create_note")
  .addEventListener("click", function(clickEvent) {
    clickEvent.preventDefault();
    var text = document.getElementById("note").value;
    noteBuddy.createNote(text);
    var values = {
      note_list: noteBuddy.noteList(),
      buddy: buddy.createNote()
    };
    renderer.view(values);
  });
}

function showSingleNote() {
  window
    .addEventListener("hashchange", function(showNote) {
      var noteIndex = location.hash.split("$")[1];
      var values = {
        single_note: noteBuddy.singleNote(noteIndex)
      };
      renderer.view(values);
    });
}
