document.addEventListener('DOMContentLoaded', () => {
    const menuCategories = document.querySelectorAll('.menu-category');
    const categoryMenuPopup = document.getElementById('category-menu-popup');
    const closeCategoryMenu = document.getElementById('close-category-menu');

    const menuData = {
        appetizers: {
            title: "Pa'compartir",
            image: "Images/guac.jpg",
            items: [
                {
                    name: "Guacamole Salt & Lime",
                    description: "fresh guacamole | homemade chips | chili oil | cilantro baby",
                    toppings: "Toppings: chicharron | birria chicharron | panela cheese"
                },
                {
                    name: "Queso Fundido",
                    description: "melted cheese | homemade tortillas",
                    toppings: "Toppings: chicharron | birria chicharron | mushrooms"
                },
                {
                    name: "Sweet & Sour Popcorn Shrimp",
                    description: "crispy shrimp | chipotle mayo | ancho sweet & sour sesame seeds | chives"
                },
                {
                    name: "Birria Chicharron Huarache",
                    description: "home made corn tortilla | refried beans | avocado salsa | shredded lettuce | crema | radish"
                },
                {
                    name: "Bone Marrow Quesadilla",
                    description: "home made corn tortilla | melted cheese | grilled bone marrow | onion | cilantro | red salsa"
                },
                {
                    name: "Potato Taquitos",
                    description: "mashed potato | shredded lettuce | crema | cotija cheese | pickled onions | green salsa"
                }
            ]
        },
        salads: {
            title: "Salads",
            image: "Images/S&L_June 21-08.jpg",
            items: [
                {
                    name: "Cesar Salad",
                    description: "romian lettuce | bacon | crispy onions | serrano | sourdough shaving croutons | parmesan cheese flakes | house cesar dressing",
                    toppings: "Toppings: chicken | steak | salmon | shrimp"
                },
                {
                    name: "Roasted Vegetables",
                    description: "quinoa | carrot | sweet potato | bell peppers | black olives | onions | tomato | cotija cheese | sesame seeds | crispy onions | baby cilantro | cumin vinaigrette"
                },
                {
                    name: "Salt & Lime Salad",
                    description: "mixed greens | queso panela | toasted almonds | tomato cherry | mandarins | green apple | avocado | cumin vinaigrette",
                    toppings: "Toppings: chicken | steak | salmon | shrimp"
                }
            ]
        },
        tostadas: {
            title: "Tostadas",
            image: "Images/S&L_June 21-09.jpg",
            items: [
                {
                    name: "Sinaloa Style Tostada",
                    description: "shrimp | tuna | sinaloa black marinate | serrano | cucumber | cilantro | avocado | cashew cream"
                },
                {
                    name: "Won-Tostada",
                    description: "marinated tuna | chipotle mayo | avocado | pickled onion | sesame seeds | chives | masago"
                },
                {
                    name: "Nopalita Tostada",
                    description: "grilled cactus | pico de gallo | queso cotija | avocado | cilantro | sikilpak"
                },
                {
                    name: "Tampico Tostada",
                    description: "imitation crab mix | avocado | pickled onions | masago | crispy onion | sesame seeds | cilantro | spicy ponzu sauce on the side"
                }
            ]
        },
        ceviches: {
            title: "Ceviches",
            image: "Images/S&L_June 21-35.jpg",
            items: [
                {
                    name: "Heart of Palm",
                    description: "chayote | heart of palm | sweet potato | cashew cream | citrus vinaigrette | micro cilantro | tomato cherry | avocado"
                },
                {
                    name: "Ceviche a La Mexicana",
                    description: "mahi-mahi | leche de tigre | tomato cherry | pickled onions | avocado | chili powder & oil"
                },
                {
                    name: "Ceviche Yucatan",
                    description: "shrimp | fish | onions | tomato | cilantro | radish orange lime base | creamy cilantro"
                },
                {
                    name: "Aguachile Negro",
                    description: "cured shrimp | black aguachile sauce | cucumber | pickled onions | shrimp oil"
                }
            ]
        },
        tacos: {
            title: "Tacos",
            image: "Images/IMG_8176.jpeg",
            items: [
                {
                    name: "Mr. Asparagus",
                    description: "house made tortilla | marinated miso grilled asparagus | grilled butternut squash | crispy quinoa | pumpkin seeds | shiro miso sauce | chili oil"
                },
                {
                    name: "Chicken Al-Pastor",
                    description: "house made tortillas | crispy melted cheese | pineapple salsa | guacamole | pickled onions | tahini sauce"
                },
                {
                    name: "Quesabirria",
                    description: "house made tortillas | slow-cooked beef birria | crispy cheese | onion | cilantro | birria consome"
                },
                {
                    name: "Taco Mi-Rey",
                    description: "house made tortillas | grilled shrimp | crispy melted cheese | bacon | mixed cabbage | chipotle mayo | ancho sweet & sour | jalapeño"
                },
                {
                    name: "Asada",
                    description: "house made tortillas | marinated steak | avocado | salsa matcha | Crispy onion | cilantro | onion"
                },
                {
                    name: "Baja Fish",
                    description: "house made tortillas | mahi-mahi | mixed-cabbage | pico de gallo | creamy cilantro | mango habanero sweet sauce"
                }
            ]
        },
        mains: {
            title: "Mains",
            image: "Images/S&L_June 21-39.jpg",
            items: [
                {
                    name: "Cafe Mexico City 12oz Steak",
                    description: "Salt & Lime signature grilled ribeye | Mexico City style butter | patatas bravas on the side"
                },
                {
                    name: "Chicken Milanesa",
                    description: "crispy breaded chicken | green and red salsa | radish"
                },
                {
                    name: "White Mole Mushroom",
                    description: "mushroom medley | chili oil | traditional white mole | chili powder | micro cilantro | crispy onions"
                },
                {
                    name: "Salmon Del Mar",
                    description: "quinoa | mango habanero sweet sauce | pineapple pico de gallo | chili oil"
                }
            ]
        },
        sides: {
            title: "Sides",
            image: "Images/rice.png",
            items: [
                {
                    name: "Jalapeño mashed potato",
                    description: ""
                },
                {
                    name: "Patatas Bravas",
                    description: ""
                },
                {
                    name: "Esquites",
                    description: ""
                },
                {
                    name: "Mexican Rice",
                    description: ""
                },
                {
                    name: "Refried Beans",
                    description: ""
                },
                {
                    name: "Side of Tortillas",
                    description: ""
                },
                {
                    name: "Side Salsa",
                    description: ""
                }
            ]
        },
        desserts: {
            title: "Desserts",
            image: "Images/IMG_7640.jpeg",
            items: [
                {
                    name: "Kuty's Churros",
                    description: "cajeta filled churros | cinnamon & sugar",
                    note: "Dipping Sauces - Caramel | Chocolate"
                },
                {   
                    name: "Flan De Cajeta",
                    descritpion: "cajeta caramel sauce | whipped cream | mint"
                },
                {
                    name: "Chocolate Lava Cake",
                    description: "Vanilla ice cream | shaved chocolate | chocolate syrup "
                },
                {  
                    name: "Salt and Lime Donuts",
                    description: "Banana | Espresso Glaze"
                }
            ]
         },
        cocktails: {
            title: "Cocktails",
            image: "Images/Screenshot 2024-10-24 at 11.42.22.png",
            items: [
                {
                    name: "SALT+LIME SHOT",
                    description: "Milagro reposado | salt lime"
                },
                {
                    name: "LA CLASSICA",
                    description: "Milagro silver | S+L agave | lime juice",
                    note: "make it a cadillac"
                },
                {
                    name: "CILANTRO JALAPEÑO",
                    description: "Milagro silver | S+L agave | cilantro jalapeño"
                },
                {
                    name: "LA ROSA",
                    description: "Milagro reposado | cointreau | lime juice | hibiscus"
                },
                {
                    name: "STRAWBERRY TAJIN",
                    description: "milagro silver | strawberry lime juice | chamoy | tajin"
                },
                {
                    name: "MANGO CHILE",
                    description: "milagro silver | mango chamoy | lime juice | tajin"
                },
                {
                    name: "LA PALOMA",
                    description: "mezcal S+L agave | lime juice grapefruit soda | hibiscus"
                },
                {
                    name: "MEXICAN MARTINI",
                    description: "gin | coconut water | lime juice | S+L agave"
                },
                {
                    name: "NOT YOUR AVERAGE ESPRESSO MARTINI",
                    description: "licor forty three | milagro reposado | shot of espresso"
                },
                {
                    name: "PUT THE LIME ON THE COCONUT",
                    description: "Milago silver | lime juice | pineapple juice | coconut cream"
                },
                {
                    name: "VIVA OAXACA OLD FASHION",
                    description: "bourbon | mezcal | S+L agave angostura bitters | orange peel"
                }
            ]
        }
    };

    // Add click event listeners to menu categories
    menuCategories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryName = category.dataset.category;
            if (menuData[categoryName]) {
                displayCategoryMenu(categoryName);
                categoryMenuPopup.style.display = 'flex';
            }
        });
    });

    // Close button functionality
    closeCategoryMenu.addEventListener('click', () => {
        categoryMenuPopup.style.display = 'none';
    });

    // Close when clicking outside the popup
    categoryMenuPopup.addEventListener('click', (event) => {
        if (event.target === categoryMenuPopup) {
            categoryMenuPopup.style.display = 'none';
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && categoryMenuPopup.style.display === 'flex') {
            categoryMenuPopup.style.display = 'none';
        }
    });

    function displayCategoryMenu(category) {
        const data = menuData[category];
        const popupContent = document.querySelector('.category-menu-popup-content');
        
        popupContent.innerHTML = `
            <button id="close-category-menu" class="close-category-menu">&times;</button>
            <div class="menu-content-wrapper">
                <div class="menu-image">
                    <img src="${data.image}" alt="${data.title} dishes">
                </div>
                <div class="menu-details">
                    <h2 class="menu-title">${data.title}</h2>
                    ${data.subtitle ? `<p class="menu-subtitle">${data.subtitle}</p>` : ''}
                    <div class="menu-divider"></div>
                    <div class="menu-items">
                        ${data.items.map(item => `
                            <div class="menu-item">
                                <h3>${item.name}</h3>
                                ${item.description ? `<p>${item.description}</p>` : ''}
                                ${item.toppings ? `<p class="toppings">${item.toppings}</p>` : ''}
                                ${item.note ? `<p class="note">${item.note}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        // Reattach close button event listener
        document.getElementById('close-category-menu').addEventListener('click', () => {
            categoryMenuPopup.style.display = 'none';
        });
    }
});