console.log("Starting app");

const fs = require('fs');
const os = require('os');
const yargs = require('yargs');
const _ = require('lodash')

const notes = require('./notes.js')

const argv = yargs.argv


var command = process.argv[2]
if (command == 'add'){
  var title = notes.addNote(argv.title, argv.body);
  console.log(title ? title + " added" : "Note with that title already exists");
}
else if (command == 'remove') {
    var response = notes.removeNote(argv.title);
    console.log(response ? argv.title + " deleted" : "Note not found");
}
else if (command == 'read') {
  notes.readNote(argv.title);
}
else if (command == 'list') {
  notes.getAll();
}
else{
  console.log("Command not recognized");
}

// notes.addNote()
