document.addEventListener('DOMContentLoaded', () => {
    const menuTrigger = document.getElementById('menu-trigger');
    const menuPopup = document.getElementById('menu-popup');
    const closeMenu = document.getElementById('close-menu');
    const menuCategories = document.querySelectorAll('.menu-category');
    const menuItemsContainer = document.getElementById('menu-items');

    // Sample menu data (replace with your actual menu items)
    const menuData = {
        'main-menu': [
            { name: 'Tacos al Pastor', price: 12.99, description: 'Marinated pork / pineapple / onions / cilantro' },
            { name: 'Enchiladas Verdes', price: 14.99, description: 'Chicken / green tomatillo sauce / queso fresco' },
            // Add more main menu items...
        ],
        'desserts': [
            { name: 'Churros', price: 6.99, description: 'Crispy fried dough pastry with cinnamon sugar and chocolate dipping sauce' },
            { name: 'Flan', price: 7.99, description: 'Creamy caramel custard with a delicate layer of caramel sauce' },
            // Add more dessert items...
        ],
        'cocktails': [
            { name: 'Margarita', price: 9.99, description: 'Classic tequila cocktail with lime juice and triple sec' },
            { name: 'Piña Colada', price: 10.99, description: 'Tropical blend of rum, coconut cream, and pineapple juice' },
            // Add more cocktail items...
        ],
        'specials': [
            { name: 'Seafood Paella', price: 24.99, description: 'Spanish-style rice dish with a medley of fresh seafood and saffron' },
            { name: 'Mole Poblano', price: 18.99, description: 'Tender chicken in a rich, complex sauce with chocolate and chili peppers' },
            // Add more special items...
        ]
    };

    menuTrigger.addEventListener('click', function(e) {
        e.preventDefault();
        menuPopup.style.display = 'block';
        showWelcomeMessage();
    });

    closeMenu.addEventListener('click', function() {
        menuPopup.style.display = 'none';
    });

    menuPopup.addEventListener('click', function(e) {
        if (e.target === menuPopup) {
            menuPopup.style.display = 'none';
        }
    });

    function displayMenuItems(category) {
        const items = menuData[category];
        menuItemsContainer.innerHTML = items.map(item => `
            <div class="menu-item">
                <h3>${item.name}</h3>
                <hr class="name-underline">
                <span class="price">$${item.price.toFixed(2)}</span>
                <p class="description">${item.description}</p>
            </div>
        `).join('');
    }

    menuCategories.forEach(category => {
        category.addEventListener('click', function() {
            menuCategories.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            displayMenuItems(this.dataset.category);
        });
    });
});

document.querySelector('.story-button').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        target.scrollIntoView();
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const storyImages = document.querySelectorAll('.story-image');
    const storySection = document.querySelector('.story-section');
    let currentImageIndex = 0;

    function changeImage() {
        storyImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % storyImages.length;
        storyImages[currentImageIndex].classList.add('active');
    }

    // Change image every 5 seconds
    setInterval(changeImage, 5000);

    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const sectionTop = storySection.offsetTop;
        const sectionHeight = storySection.offsetHeight;

        if (scrollPosition > sectionTop - window.innerHeight && scrollPosition < sectionTop + sectionHeight) {
            const scrollPercentage = (scrollPosition - (sectionTop - window.innerHeight)) / (sectionHeight + window.innerHeight);
            storyImages.forEach(image => {
                image.style.transform = `scale(0.9) translateY(${scrollPercentage * 30}px)`;
            });
        }
    });
});

// Add touch support for mobile devices
document.addEventListener('DOMContentLoaded', function() {
    // Add touch support for menu categories
    const menuCategories = document.querySelectorAll('.menu-category');
    menuCategories.forEach(category => {
        category.addEventListener('touchstart', function(e) {
            e.preventDefault();
            // Your existing click handler code
        });
    });

    // Improve mobile scroll performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                // Your scroll-based animations/effects here
                ticking = false;
            });
            ticking = true;
        }
    });
});