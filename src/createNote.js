createNote();

noteBuddy = new NoteBuddy();

function createNote() {
  document
    .getElementById("create_note")
    .addEventListener("click", function(clickEvent) {
      clickEvent.preventDefault();
      var text = document.getElementById("note").value;
      var exampleNote = noteBuddy.createNote(text);
      displayNoteList();
        xhttp.open("GET", "/store_note", true);
    });
}

function displayNoteList() {
  noteBuddyView = new NoteBuddyView(noteBuddy);
  document.getElementById("note_list").innerHTML = noteBuddyView.toHTML();
}
