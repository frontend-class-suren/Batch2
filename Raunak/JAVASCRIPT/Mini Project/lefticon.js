function performSearch() {
    const input = document.getElementById('searchInput').value;
    const messageElement = document.createElement('div');
    messageElement.className = 'processing-message';
    messageElement.textContent = 'The course is coming soon!';
    
    // Append the message to the search bar
    const searchBar = document.querySelector('.search-bar');
    if (!searchBar.querySelector('.processing-message')) {
        searchBar.appendChild(messageElement);
    }
    
    // Clear the message after 5 seconds
    setTimeout(() => {
        if (messageElement) {
            messageElement.remove();
        }
    }, 5000);
}
