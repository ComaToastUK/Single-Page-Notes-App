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
    });
}

function displayNoteList() {
  noteBuddyView = new NoteBuddyView(noteBuddy);
  document.getElementById("note_list").innerHTML = noteBuddyView.toHTML();
  var randomImageNumber = Math.floor(Math.random() * 5);
  document.getElementById("buddy").innerHTML =
    "<img src='public/buddy_createnote" +
    randomImageNumber +
    ".png' width='600'>";
}
