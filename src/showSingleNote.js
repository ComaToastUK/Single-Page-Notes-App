showSingleNote();

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
  var singleNote = "<div class='note'>" + note.returnNote() + "</div>";
  document
    .getElementById("single_note")
    .innerHTML = singleNote;
}
