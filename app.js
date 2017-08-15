console.log("Starting app");

const fs = require('fs')
const os = require('os')
const notes = require('./notes.js')

const _ = require('lodash')
console.log(_.isString(true))
console.log(_.isString("chandan"))
console.log(_.uniq([1,2,4,1,2,4,5,5,1]))
console.log(notes.addNote())
console.log("Result:" , notes.add(1,2))
var userInfo = os.userInfo()

fs.appendFile('greetings.txt', `Hello ${userInfo.username}. You are just ${notes.age}`, function(err){
  if(err){
    console.log("Unable to write to file");
  }
})
