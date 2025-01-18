// script.js

// Toggle Dark Mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Dynamic Grant List Filtering
const grantFilter = document.getElementById('grant-filter');
const grantList = document.getElementById('grant-list');

grantFilter.addEventListener('change', () => {
    const filterValue = grantFilter.value;
    const grantCards = document.querySelectorAll('.grant-card');

    grantCards.forEach(card => {
        if (filterValue === 'all' || card.dataset.status === filterValue) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

function showForm(formId) {
    // Hide all forms first
    document.querySelectorAll('.auth-form').forEach(function(form) {
        form.style.display = 'none';
    });

    // Show the selected form based on the formId
    document.getElementById(formId).style.display = 'block';
}

// Initially show the login form
showForm('login-form');


const announcements = [
    "Saheli is our new leader | All hail Saheli | Santanu Pramanik is Gay | Cooooooooooooooool ",
];

let currentAnnouncementIndex = 0; // To keep track of which announcement is being displayed

// Function to update the announcement text
function updateAnnouncements() {
    // Set the new announcement text
    document.getElementById('announcement-text').textContent = announcements[currentAnnouncementIndex];

    // Increment the index, and if it's at the end of the array, reset to 0
    currentAnnouncementIndex = (currentAnnouncementIndex + 1) % announcements.length;
}

// Call the function once to set an initial announcement
updateAnnouncements();

// Update the announcement every 10 seconds (10000ms)
setInterval(updateAnnouncements, 5000); // Change announcement every 10 seconds

// Feedback Form Submission
const feedbackForm = document.getElementById('feedback-form');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const feedback = feedbackForm.querySelector('textarea').value;
        alert(`Thank you for your feedback: "${feedback}"`);
        feedbackForm.reset();
    });
}



// Example search function (can be customized later)
function search() {
    const query = document.querySelector('.search-bar').value;
    alert('Searching for: ' + query);
    // You can replace the alert with actual search logic
}













// Predefined admin data (normally would come from a database)
const admins = [
    { id: "admin1", email: "admin1@example.com", password: "password123" },
    { id: "admin2", email: "admin2@example.com", password: "password456" }
];

// Show specific form
function showForm(formId) {
    // Hide all forms first
    document.querySelectorAll('.auth-form').forEach(function(form) {
        form.style.display = 'none';
    });

    // Show the selected form based on the formId
    document.getElementById(formId).style.display = 'block';
}

// Admin Login Validation
function adminLogin(event) {
    event.preventDefault(); // Prevent form submission

    const adminEmail = document.getElementById('admin-email').value;
    const adminPassword = document.getElementById('admin-password').value;
    const adminId = document.getElementById('admin-id').value;

    // Find the admin by ID
    const admin = admins.find(a => a.id === adminId && a.email === adminEmail && a.password === adminPassword);

    if (admin) {
        alert("Admin login successful! Welcome " + admin.id);

        // Show the admin dashboard link
        document.getElementById('admin-link').style.display = 'block';  // Make the admin link visible

        // Optionally, hide the admin login form after success
        showForm('login-form');  // You can show the login form again or redirect
    } else {
        alert("Invalid admin credentials or ID.");
    }
}

// Initially show the login form
showForm('login-form');
