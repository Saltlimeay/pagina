// Add this to your JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const dessertBtn = document.getElementById('dessert-coupon-btn');
    const dessertPopup = document.getElementById('dessert-popup');
    const closeBtn = document.querySelector('.close-dessert-popup');
    const dessertForm = document.getElementById('dessert-form');
    const successMessage = document.getElementById('success-message');

    // Open popup
    dessertBtn.addEventListener('click', (e) => {
        e.preventDefault();
        dessertPopup.style.display = 'flex';
    });

    // Close popup
    closeBtn.addEventListener('click', () => {
        dessertPopup.style.display = 'none';
        successMessage.style.display = 'none';
    });

    // Close when clicking outside
    dessertPopup.addEventListener('click', (e) => {
        if (e.target === dessertPopup) {
            dessertPopup.style.display = 'none';
            successMessage.style.display = 'none';
        }
    });

    // Handle form submission
    dessertForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const contactInfo = document.getElementById('contact-info').value;
        
        // Here you would typically send this to your server
        console.log('Contact info submitted:', contactInfo);
        
        // Show success message
        dessertForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Close popup after delay
        setTimeout(() => {
            dessertPopup.style.display = 'none';
            dessertForm.style.display = 'block';
            successMessage.style.display = 'none';
            dessertForm.reset();
        }, 3000);
    });
});