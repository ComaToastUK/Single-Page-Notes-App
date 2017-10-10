createNote();

function createNote() {
  document
    .getElementById("create_note")
    .addEventListener("click", function(clickEvent) {
      clickEvent.preventDefault();
      // function in noteBuddy - create and add note to array
      displayNoteList();
    });
};

function displayNoteList() {
  document
    .getElementById("note_list")
    .innerHTML =  ; // function in noteBuddy - create HTML format
};
