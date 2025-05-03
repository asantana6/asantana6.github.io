// Select all nav links and content sections
var navLinks = document.querySelectorAll('.nav-link');
var contentSections = document.querySelectorAll('.content-section');

// Function to show the default section
function showSection(sectionId) {
    // Hide all sections
    contentSections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the section corresponding to the given ID
    var targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

// Add event listeners to each nav link
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Show the clicked section
        var targetId = link.getAttribute('data-target');
        showSection(targetId);
    });
});

// Show Section 2 by default when the page loads
window.onload = function() {
    showSection('index');
};