
const fs = require('fs');

var fetchNotes = () => {
  var notes = [];
  try{
    notes = JSON.parse(fs.readFileSync('notes.json'));
  }
  catch(e){
  }
  return notes;
}

var addNote = (title, body) => {
  var allNotes = fetchNotes();
  var noteObj = {
    title,
    body
  }
  var duplicateNotes = allNotes.filter(note => note.title === title);
  if(duplicateNotes.length == 0){
    allNotes.push(noteObj);
    var noteString = JSON.stringify(allNotes);
    fs.writeFileSync('notes.json', noteString);
    return title;
  }
}

var removeNote = (title) => {
  var allNotes = fetchNotes();

  var notes = allNotes.filter(note => note.title !== title);
  if(notes.length > 0){
    var noteString = JSON.stringify(notes);
    fs.writeFileSync('notes.json', noteString);
  }
  return notes.length !== allNotes.length; 
}

var getAll = () => {
  console.log(fetchNotes())
}

var readNote = (title) => {
  console.log(fetchNotes().filter(note => note.title == title));
}

module.exports = {
  addNote,
  removeNote,
  getAll,
  readNote
}
