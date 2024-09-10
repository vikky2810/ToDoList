// Get references to the elements
const input = document.querySelector('input[name="note"]');
const insertBtn = document.querySelectorAll('button')[0];
const deleteBtn = document.querySelectorAll('button')[1];
const modifyBtn = document.querySelectorAll('button')[2];
const clearBtn = document.querySelectorAll('button')[3];
const noteList = document.querySelector('.note-list');

// Array to hold the list of notes
let notes = [];

// Function to update the list of notes and highlight selected note
function updateNotes() {
    noteList.innerHTML = '';
    notes.forEach((note, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${note}`;
      noteList.appendChild(li);
    });
  }

// Insert a new note with duplicate check
insertBtn.addEventListener('click', () => {
    const newNote = input.value.trim();
    if (newNote === "") {
      displayMessage("Please enter a valid note.");
    } else if (notes.includes(newNote)) {
      displayMessage("Same note present.");
    } else {
      notes.push(newNote);
      input.value = "";
      updateNotes();
    }
  });



// Delete selected note
deleteBtn.addEventListener('click', () => {
    const selectedNote = input.value.trim();
    if (selectedNote === "") {
      displayMessage("Not selected note.");
    } else if (notes.includes(selectedNote)) {
      notes = notes.filter(note => note !== selectedNote);
      input.value = "";
      updateNotes();
    } else {
      displayMessage("Note not found.");
    }
  });


// Modify the last note (optional behavior, you can modify this logic)
modifyBtn.addEventListener('click', () => {
  if (notes.length > 0 && input.value.trim() !== "") {
    notes[notes.length - 1] = input.value;
    input.value = "";
    updateNotes();
  } else {
    displayMessage("Please enter a valid note to modify.");
  }
});

// Clear all notes
clearBtn.addEventListener('click', () => {
  notes = [];
  updateNotes();
});


// Function to display messages in the UI instead of using displayMessage
function displayMessage(message) {
    let messageDiv = document.querySelector('.message');
    if (!messageDiv) {
      messageDiv = document.createElement('div');
      messageDiv.classList.add('message');
      document.querySelector('.content').appendChild(messageDiv);
    }
    messageDiv.textContent = message;
    setTimeout(() => {
      messageDiv.textContent = '';
    }, 3000);
  }
  