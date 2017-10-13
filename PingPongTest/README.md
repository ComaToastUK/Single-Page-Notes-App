# 🏓 PING PONG TEST 🏓

This is a super-lightweight testing library for unit testing pure javascript models.

### How to use

- Clone the repo into your project folder
- Add your sources to the PingPongSpecRunner.html file
- Write your tests using the syntax below
- Add your test files to the PingPongSpecRunner.html file
- $ open PingPongSpecRunner.html
- Check the console in your browser for results
- Test results will be visible in the console and failed tests will throw error with details

```
(function(exports) {
  function exampleTest() {
    var exampleTest = new PingPongSpec(); // Create a new instance of the test class
    var yourObject = new YourObject(); // This is the object you want to test
    exampleTest.it("Expects something"); // Write what you want to test as an arg
    exampleTest.expect(yourObject.SomeMethod()); // Input the method you want to test as an arg
    exampleTest.expectToEqual(Some_expected_output); // Input the expected output as an arg
  }

exampleTest();
})(this);
```
### Collaborators

- James Stubbs
- Rory Hodgson
- Mengchen Wang
- Zoe Hopkins


###Code Notes For Maintenance/Extension

FLOW: Index.html -> Input text; click button
                        -> Controller
                          -> NoteBuddy
                            -> Note (create)
                          -> NoteBuddy.NoteList -> Renderer
                            -> Renderer -> Index.HTML
      Index.html -> Click link -> Controller
                                -> Renderer -> NoteBuddy -> Index.HTML


- renderer.js: takes in a key/value pair (hash), and renders the value to the key (i.e. key = html element ID, and value = whatever you want to appear within the tags for that element ID)
  - Operates in an each loop - when calling it, define your array of key-value pairs beforehand, and pass it as an argument to renderer.view. If you only wish to change one element, only do one key-value pair; if you'd like to edit multiple elements, use all the elements you need.

- note.js handles the creation of specific items which will be rendered on the page. It is a simple string container. Creation of notes is the responsibility of noteBuddy

- When creating notess, noteBuddy.js is used. It creates from note.js, it assigns it a "buddy" from buddy.js (which is a random number generator, assigning it a random image to be served when calling that note back up), and then calls the renderer to display the value of the note's body and its "buddy" image to the page.
 - Rendering of the HTML for the ahref link that appears on the page is handled by noteBuddy, as it takes in all the necessary arguments it needs for this -- extracting this back out to the render might make following the logic a bit harder, thus convoluting the code.

- When recalling notes, the controller handles this responsibility. Clicking a link adds #hashchange to the end of a URL, but does not redirect. The controller listens for these changes, calls up the note from the noteBuddy array, and calls the renderer to display that note in a certain way based on the key/value pairs it was given.
