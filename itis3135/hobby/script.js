// Select all nav links and content sections
const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');

// Function to show the default section
function showSection(sectionId) {
    // Hide all sections
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the section corresponding to the given ID
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

// Add event listeners to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Show the clicked section
        const targetId = link.getAttribute('data-target');
        showSection(targetId);
    });
});

// Show Section 2 by default when the page loads
window.onload = () => {
    showSection('what');
};