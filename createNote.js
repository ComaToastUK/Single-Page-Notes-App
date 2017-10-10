
  console.log("anyone there?")
createNote();
noteBuddy = new NoteBuddy

function createNote() {
  document
    .getElementById("create_note")
    .addEventListener("click", function(clickEvent) {
      clickEvent.preventDefault();
      var text = document.getElementById("note");
      var exampleNote = noteBuddy.createNote(text);
      console.log(exampleNote)
      console.log("Hello")
      displayNoteList();
    });
};

function displayNoteList() {
  document
    .getElementById("note_list")
    .innerHTML =  noteBuddy.returnNotesArray(); // function in noteBuddy - create HTML format
};
