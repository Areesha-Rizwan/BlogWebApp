// dashboard.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('post-form');
    const titleInput = document.getElementById('title');
    const bodyInput = document.getElementById('body');
    const blogsList = document.getElementById('blogs-list');
    const usernameDisplay = document.getElementById('username');
    const newPostButton = document.getElementById('new-post-btn');
  
    // Assuming user data is available in local storage or via Firebase
    let userName = "John Doe";  // Replace with real user name from auth (Firebase or similar)
    usernameDisplay.textContent = userName;
  
    // New Blog Post Button
    newPostButton.addEventListener('click', () => {
      form.style.display = 'block'; // Show the form when the button is clicked
    });
  
    // Handle Blog Post Submission
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const title = titleInput.value;
      const body = bodyInput.value;
  
      // Validate inputs
      if (title.length < 5 || title.length > 50) {
        alert('Title should be between 5 and 50 characters');
        return;
      }
  
      if (body.length < 100 || body.length > 3000) {
        alert('Body should be between 100 and 3000 characters');
        return;
      }
  
      // Add the new blog post to the list
      const newBlogPost = document.createElement('li');
      newBlogPost.innerHTML = `
        <h4>${title}</h4>
        <p>${body}</p>
        <p><strong>Published by: ${userName}</strong></p>
        <p><strong>Date: ${new Date().toLocaleString()}</strong></p>
      `;
      
      blogsList.insertBefore(newBlogPost, blogsList.firstChild); // Add to the top of the list
  
      // Clear the form
      titleInput.value = '';
      bodyInput.value = '';
      form.style.display = 'none'; // Hide the form after submission
    });
  });
  