const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "your notes";
};

//Add Notes fn
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New Note added");
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

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
