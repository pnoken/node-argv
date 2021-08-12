const getNotes = require("./note");
const chalk = require("chalk");
const yargs = require("yargs");
const { describe } = require("yargs");

//Cutomize yargs version
yargs.version("1.1.0");

//add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("adding a new note");
  },
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("removing a note");
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "list a note",
  handler: function () {
    console.log("listing a note");
  },
});

//Create Read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("reading a note");
  },
});

//add, remove, read, list
console.log(yargs.argv);
