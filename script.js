// Get all project links
const projectLinks = document.querySelectorAll('.project-link');

// Add click event listener to each project link
projectLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior

    // Get the project URL from the data-project-url attribute
    const projectURL = link.getAttribute('data-project-url');

    // Open the project URL in a new tab or window
    window.open(projectURL, '_blank');
  });
});