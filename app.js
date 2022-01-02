const notes = require("./note");
const chalk = require("chalk");
const yargs = require("yargs");

//Cutomize yargs version
yargs.version("1.1.0");

//add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("removing a note...");
    notes.removeNote(argv.title);
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "list a note",
  handler: function () {
    notes.listNotes()
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
yargs.parse();
