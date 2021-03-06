const fs = require("fs");
const chalk = require("chalk");

//Add Notes fn
const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New Note added"));
  } else {
    console.log(chalk.red.inverse("Note Title already exist"));
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//Load Notes Fn
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

//Read Notes

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

//Remove Notes Fn
const removeNote = function (title) {
  const notes = loadNotes();
  const remainingNotes = notes.filter((note) => {
    return note.title !== title;
  });

  if (notes.length > remainingNotes.length) {
    notes.push(remainingNotes);
    saveNotes(remainingNotes);
    console.log(chalk.green.inverse(`${title} successfully removed`));
  } else {
    console.log(chalk.red.inverse("Note doesn't exist"));
  }
};

//List notes
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your notes"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
