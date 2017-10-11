createNote();
showSingleNote();

noteBuddy = new NoteBuddy();

function createNote() {
  document
    .getElementById("create_note")
    .addEventListener("click", function(clickEvent) {
      clickEvent.preventDefault();
      var text = document.getElementById("note").value;
      var exampleNote = noteBuddy.createNote(text);
      displayNoteList();
    });
}

function showSingleNote() {
  window
    .addEventListener("hashchange", function(showNote) {
      singleNoteText(getShortTitleFromUrl(window.location));
    });
}

function getShortTitleFromUrl () {
  return location.hash.split("$")[1];
}

function singleNoteText(noteIndex) {
  var note = noteBuddy.list[noteIndex];
  var singleNote = "<div id='singlenote'>" + note.returnNote() + "</div>";
  document
    .getElementById("single_note")
    .innerHTML = singleNote;
}

function displayNoteList() {
  noteBuddyView = new NoteBuddyView(noteBuddy);
  document.getElementById("note_list").innerHTML = noteBuddyView.toHTML();
}
