// DOM Elements
const addNoteBtn = document.getElementById("add-note");
const notesContainer = document.getElementById("notes-container");
const noteModal = document.getElementById("note-modal");
const saveNoteBtn = document.getElementById("save-note");
const cancelBtn = document.getElementById("cancel");
const noteText = document.getElementById("note-text");

// Notes Array
let notes = [];

// Function to render notes
function renderNotes() {
  notesContainer.innerHTML = ""; // Clear previous notes

  notes.forEach((note, index) => {
    const noteCard = document.createElement("div");
    noteCard.className = "note-card";

    noteCard.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <div class="note-footer">
        <span>${note.date}</span>
        <button onclick="deleteNote(${index})" class="btn-secondary">Delete</button>
      </div>
    `;

    notesContainer.appendChild(noteCard);
  });
}

// Add new note
addNoteBtn.addEventListener("click", () => {
  noteModal.classList.add("show");
  noteText.value = ""; // Clear textarea
});

// Save note
saveNoteBtn.addEventListener("click", () => {
  const content = noteText.value.trim();

  if (!content) {
    alert("Note content cannot be empty.");
    return;
  }

  const note = {
    title: `Note ${notes.length + 1}`,
    content: content,
    date: new Date().toLocaleDateString(),
  };

  notes.push(note);
  renderNotes();

  noteModal.classList.remove("show");
});

// Cancel adding note
cancelBtn.addEventListener("click", () => {
  noteModal.classList.remove("show");
});

// Delete note
function deleteNote(index) {
  notes.splice(index, 1);
  renderNotes();
}
