// events-popup.js
document.addEventListener('DOMContentLoaded', () => {
    const eventsBtn = document.getElementById('events-btn');
    const eventsPopup = document.getElementById('events-popup');
    const closeBtn = document.querySelector('.close-events-popup');

    // Open popup
    eventsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        eventsPopup.style.display = 'flex';
    });

    // Close popup
    closeBtn.addEventListener('click', () => {
        eventsPopup.style.display = 'none';
    });

    // Close when clicking outside
    eventsPopup.addEventListener('click', (e) => {
        if (e.target === eventsPopup) {
            eventsPopup.style.display = 'none';
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && eventsPopup.style.display === 'flex') {
            eventsPopup.style.display = 'none';
        }
    });
});