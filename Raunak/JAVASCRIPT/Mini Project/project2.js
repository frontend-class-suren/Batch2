// Select DOM elements
const bookmarkUrlInput = document.getElementById("bookmark-url");
const addBookmarkBtn = document.getElementById("add-bookmark");
const deleteAllBtn = document.getElementById("delete-all");
const bookmarkList = document.getElementById("bookmark-list");

// Function to add a bookmark
function addBookmark(url) {
  // Create a new bookmark item
  const bookmarkItem = document.createElement("div");
  bookmarkItem.className = "bookmark-item";

  bookmarkItem.innerHTML = `
    <a href="${url}" target="_blank">${url}</a>
    <div class="actions">
      <button class="edit" onclick="editBookmark(this)">Edit</button>
      <button class="delete" onclick="deleteBookmark(this)">Delete</button>
    </div>
  `;

  bookmarkList.appendChild(bookmarkItem);
}

// Function to edit a bookmark
function editBookmark(button) {
  const bookmarkItem = button.parentElement.parentElement;
  const link = bookmarkItem.querySelector("a");
  const newUrl = prompt("Edit Bookmark URL:", link.href);

  if (newUrl && isValidUrl(newUrl)) {
    link.href = newUrl;
    link.textContent = newUrl;
  } else {
    alert("Please enter a valid URL.");
  }
}

// Function to delete a single bookmark
function deleteBookmark(button) {
  const bookmarkItem = button.parentElement.parentElement;
  bookmarkItem.remove();
}

// Function to validate URL
function isValidUrl(url) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // Protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // Domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // Port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // Query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );

  return !!pattern.test(url);
}

// Event listener for adding a bookmark
addBookmarkBtn.addEventListener("click", () => {
  const url = bookmarkUrlInput.value.trim();

  if (!url || !isValidUrl(url)) {
    alert("Please enter a valid URL.");
    return;
  }

  addBookmark(url);

  // Clear input
  bookmarkUrlInput.value = "";
});

// Event listener for deleting all bookmarks
deleteAllBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete all bookmarks?")) {
    bookmarkList.innerHTML = "";
  }
});
