// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// RSVP Form Handling
const rsvpForm = document.querySelector('.rsvp-form');
if (rsvpForm) {
    // Show/hide second person form based on invitation question
    const invitationRadios = document.querySelectorAll('input[name="invitation"]');
    const secondPersonForm = document.getElementById('second-person-form');
    
    invitationRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'yes') {
                secondPersonForm.style.display = 'block';
                // Make second person fields required
                document.getElementById('second-name').required = true;
                document.querySelectorAll('input[name="second-attending"]').forEach(input => {
                    input.required = true;
                });
            } else {
                secondPersonForm.style.display = 'none';
                // Remove required from second person fields
                document.getElementById('second-name').required = false;
                document.querySelectorAll('input[name="second-attending"]').forEach(input => {
                    input.required = false;
                });
                // Clear second person form
                document.getElementById('second-name').value = '';
                document.querySelectorAll('input[name="second-attending"]').forEach(input => {
                    input.checked = false;
                });
                document.getElementById('second-dietary').value = '';
            }
        });
    });
    
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.name || !data.email || !data.attending || !data.invitation) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Veuillez entrer une adresse courriel valide.');
            return;
        }
        
        // If second person is invited, validate their information
        if (data.invitation === 'yes') {
            if (!data['second-name'] || !data['second-attending']) {
                alert('Veuillez remplir les informations de la deuxième personne.');
                return;
            }
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Soumission en cours...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Merci pour votre RSVP ! Nous vous contacterons bientôt.');
            this.reset();
            secondPersonForm.style.display = 'none';
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.story, .details, .gallery, .rsvp');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Gallery lightbox functionality (placeholder for future implementation)
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Placeholder for lightbox functionality
        console.log('Gallery item clicked - lightbox would open here');
    });
});

// Countdown timer (optional feature)
function createCountdown() {
    const weddingDate = new Date('2024-06-15T16:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        if (distance < 0) {
            document.getElementById('countdown')?.remove();
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            countdownElement.innerHTML = `
                <div class="countdown-item">
                    <span class="countdown-number">${days}</span>
                    <span class="countdown-label">Days</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${hours}</span>
                    <span class="countdown-label">Hours</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${minutes}</span>
                    <span class="countdown-label">Minutes</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${seconds}</span>
                    <span class="countdown-label">Seconds</span>
                </div>
            `;
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Initialize countdown if element exists
document.addEventListener('DOMContentLoaded', createCountdown);

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateName(name) {
    return name.trim().length >= 2;
}

// Add loading states to buttons
function addLoadingState(button, text = 'Loading...') {
    button.dataset.originalText = button.textContent;
    button.textContent = text;
    button.disabled = true;
}

function removeLoadingState(button) {
    button.textContent = button.dataset.originalText;
    button.disabled = false;
}

// Utility function for smooth animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.detail-card, .gallery-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});

// Hotel card click functionality
document.addEventListener('DOMContentLoaded', () => {
    const hotelCards = document.querySelectorAll('.hotel-card');
    
    hotelCards.forEach(card => {
        card.addEventListener('click', function() {
            const hotelId = this.getAttribute('data-hotel');
            openHotelDetails(hotelId);
        });
        
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Hotel details data
const hotelDetails = {
    'manoir-hovey': {
        name: 'Manoir Hovey',
        type: 'Hôtel',
        rating: 5,
        address: '575 Chemin Hovey, J0B 2C0 North Hatley, Canada',
        travelTime: '~35 min',
        price: '$$$',
        description: '51 chambres. Petit-déjeuner inclus dans certaines offres. Politique d\'annulation variable selon l\'offre. Spa interne, piscine, vue sur le lac, etc.',
        website: 'https://manoirhovey.com/fr/'
    },
    'ripplecove': {
        name: 'Ripplecove Hotel & Spa',
        type: 'Hôtel',
        rating: 5,
        address: '700 rue Ripplecove, J0B 1C0 Ayer\'s Cliff, Canada',
        travelTime: '~25 min',
        price: '$$',
        description: 'Hôtel au bord du lac, spa. Activités nautiques. Politique d\'annulation dépend de la réservation. Capacité modérée (nombre limité de chambres).',
        website: 'https://ripplecove.com/'
    },
    'estrimont': {
        name: 'Estrimont Suites & Spa',
        type: 'Hôtel',
        rating: 4,
        address: '44 avenue de l\'auberge, J1X 6J3 Magog-Orford, Canada',
        travelTime: '~15 min',
        price: '$$',
        description: 'Petit-déjeuner souvent inclus ou disponible selon l\'offre de suite. Spa, bains, installations de bien-être. Politique d\'annulation dépend de la catégorie de réservation.',
        website: 'https://www.estrimont.ca/'
    },
    'espace-4-saisons': {
        name: 'Espace 4 Saisons',
        type: 'Hôtel',
        rating: 4,
        address: '4940 Chemin du Parc, J1X 7N9 Magog-Orford, Canada',
        travelTime: '~20 min',
        price: '$',
        description: 'Station touristique avec activités saisonnières. Petit-déjeuners selon l\'hébergement. Annulation selon les conditions du site de réservation.',
        website: 'https://espace4saisons.com/'
    },
    'bois-dormant': {
        name: 'Ô Bois Dormant',
        type: 'B&B',
        rating: 4,
        address: '205 rue Abbott, J1X 2H4 Magog-Orford, Canada',
        travelTime: '~10 min',
        price: '$',
        description: 'B&B local. Politique d\'annulation modérée. Nombre limité de chambres (souvent 4-10).',
        website: 'https://www.oboisdormant.qc.ca/'
    }
};

function openHotelDetails(hotelId) {
    const hotel = hotelDetails[hotelId];
    if (!hotel) return;
    
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'hotel-modal';
    modal.innerHTML = `
        <div class="hotel-modal-content">
            <div class="hotel-modal-header">
                <h2>${hotel.name}</h2>
                <span class="hotel-modal-close">&times;</span>
            </div>
            <div class="hotel-modal-body">
                <div class="hotel-info-grid">
                    <div class="hotel-info-item">
                        <strong>Type:</strong> ${hotel.type}
                    </div>
                    <div class="hotel-info-item">
                        <strong>Note:</strong> ${'★'.repeat(hotel.rating)} (${hotel.rating}/5)
                    </div>
                    <div class="hotel-info-item">
                        <strong>Distance:</strong> ${hotel.travelTime}
                    </div>
                    <div class="hotel-info-item">
                        <strong>Tarif:</strong> ${hotel.price}
                    </div>
                </div>
                <div class="hotel-address-full">
                    <strong>Adresse:</strong><br>
                    ${hotel.address}
                </div>
                <div class="hotel-description">
                    <strong>Description:</strong><br>
                    ${hotel.description}
                </div>
                <div class="hotel-actions">
                    <a href="${hotel.website}" target="_blank" class="btn btn-primary">Visiter le site web</a>
                    <button class="btn btn-tertiary hotel-modal-close-btn">Fermer</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.appendChild(modal);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .hotel-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease;
        }
        
        .hotel-modal-content {
            background: white;
            border-radius: 10px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            animation: slideIn 0.3s ease;
        }
        
        .hotel-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid #eee;
        }
        
        .hotel-modal-header h2 {
            margin: 0;
            color: #333;
        }
        
        .hotel-modal-close {
            font-size: 24px;
            cursor: pointer;
            color: #999;
        }
        
        .hotel-modal-close:hover {
            color: #333;
        }
        
        .hotel-modal-body {
            padding: 20px;
        }
        
        .hotel-info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-bottom: 20px;
        }
        
        .hotel-info-item {
            padding: 10px;
            background: #f8f9fa;
            border-radius: 5px;
        }
        
        .hotel-address-full, .hotel-description {
            margin-bottom: 20px;
            line-height: 1.6;
        }
        
        
        .hotel-actions {
            display: flex;
            gap: 10px;
            justify-content: center;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @media (max-width: 768px) {
            .hotel-info-grid {
                grid-template-columns: 1fr;
            }
            
            .hotel-actions {
                flex-direction: column;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Close modal functionality
    const closeModal = () => {
        modal.remove();
        style.remove();
    };
    
    modal.querySelector('.hotel-modal-close').addEventListener('click', closeModal);
    modal.querySelector('.hotel-modal-close-btn').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Chalet card click functionality
document.addEventListener('DOMContentLoaded', () => {
    const chaletCards = document.querySelectorAll('.chalet-card');
    
    chaletCards.forEach(card => {
        card.addEventListener('click', function() {
            const chaletId = this.getAttribute('data-chalet');
            openChaletDetails(chaletId);
        });
        
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Chalet details data
const chaletDetails = {
    'maison-magog': {
        name: 'La Maison MAGOG HOUSE',
        type: 'Chalet (VRBO)',
        rating: 10,
        ratingLabel: 'Exceptionnel',
        location: 'Magog, Centre ville',
        travelTime: '~10 min',
        price: '$',
        capacity: 'Jusqu\'à 12 personnes',
        bedrooms: 6,
        bathrooms: 5,
        description: 'Chalet exceptionnel au centre-ville de Magog avec vue sur le lac et accès au ski. Parfait pour les grands groupes.',
        features: ['6 chambres', '5 salles de bain complètes', 'BBQ', 'Foyer extérieur', 'Chaises Adirondack', 'Vue sur le lac', 'Accès au ski'],
        website: 'https://www.vrbo.com',
        platform: 'VRBO'
    },
    'family-autumn': {
        name: 'Family Autumn House',
        type: 'Chalet (VRBO)',
        rating: 9.2,
        ratingLabel: '',
        location: 'Ayer\'s Cliff',
        travelTime: '~25 min',
        price: '$',
        capacity: 'Jusqu\'à 6 personnes',
        bedrooms: 3,
        bathrooms: 2,
        description: 'Chalet familial confortable à Ayer\'s Cliff, idéal pour les familles et petits groupes.',
        features: ['3 chambres', '2 salles de bain', 'Ambiance familiale', 'Prix abordable'],
        website: 'https://www.vrbo.com',
        platform: 'VRBO'
    },
    'le-memph': {
        name: 'Le Memph - Condo Orford',
        type: 'VRBO',
        rating: 9.8,
        ratingLabel: 'Exceptionnel',
        location: 'Orford',
        travelTime: '~15 min',
        price: '$$',
        capacity: 'Jusqu\'à 8 personnes',
        bedrooms: 3,
        bathrooms: 3,
        description: 'Condo moderne à Orford avec toutes les commodités, parfait pour les groupes moyens.',
        features: ['3 chambres', '3 salles de bain', 'Condo moderne', 'Toutes commodités'],
        website: 'https://www.vrbo.com',
        platform: 'VRBO'
    }
};

function openChaletDetails(chaletId) {
    const chalet = chaletDetails[chaletId];
    if (!chalet) return;
    
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'chalet-modal';
    modal.innerHTML = `
        <div class="chalet-modal-content">
            <div class="chalet-modal-header">
                <h2>${chalet.name}</h2>
                <span class="chalet-modal-close">&times;</span>
            </div>
            <div class="chalet-modal-body">
                <div class="chalet-info-grid">
                    <div class="chalet-info-item">
                        <strong>Type:</strong> ${chalet.type}
                    </div>
                    <div class="chalet-info-item">
                        <strong>Note:</strong> ${chalet.rating}/10 ${chalet.ratingLabel ? `(${chalet.ratingLabel})` : ''}
                    </div>
                    <div class="chalet-info-item">
                        <strong>Distance:</strong> ${chalet.travelTime}
                    </div>
                    <div class="chalet-info-item">
                        <strong>Tarif:</strong> ${chalet.price}
                    </div>
                </div>
                <div class="chalet-location">
                    <strong>Localisation:</strong><br>
                    ${chalet.location}
                </div>
                <div class="chalet-capacity-details">
                    <strong>Capacité:</strong> ${chalet.capacity}<br>
                    <strong>Chambres:</strong> ${chalet.bedrooms} chambres<br>
                    <strong>Salles de bain:</strong> ${chalet.bathrooms} salles de bain
                </div>
                <div class="chalet-description">
                    <strong>Description:</strong><br>
                    ${chalet.description}
                </div>
                <div class="chalet-amenities">
                    <strong>Équipements:</strong><br>
                    ${chalet.features.map(feature => `<span class="amenity-tag">${feature}</span>`).join('')}
                </div>
                <div class="chalet-actions">
                    <a href="${chalet.website}" target="_blank" class="btn btn-primary">Réserver sur ${chalet.platform}</a>
                    <button class="btn btn-tertiary chalet-modal-close-btn">Fermer</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.appendChild(modal);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .chalet-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease;
        }
        
        .chalet-modal-content {
            background: white;
            border-radius: 10px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            animation: slideIn 0.3s ease;
        }
        
        .chalet-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid #eee;
        }
        
        .chalet-modal-header h2 {
            margin: 0;
            color: #333;
        }
        
        .chalet-modal-close {
            font-size: 24px;
            cursor: pointer;
            color: #999;
        }
        
        .chalet-modal-close:hover {
            color: #333;
        }
        
        .chalet-modal-body {
            padding: 20px;
        }
        
        .chalet-info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-bottom: 20px;
        }
        
        .chalet-info-item {
            padding: 10px;
            background: #f8f9fa;
            border-radius: 5px;
        }
        
        .chalet-location, .chalet-capacity-details, .chalet-description {
            margin-bottom: 20px;
            line-height: 1.6;
        }
        
        .chalet-amenities {
            margin-bottom: 20px;
        }
        
        .amenity-tag {
            display: inline-block;
            background: #e8f5e8;
            color: #2e7d32;
            padding: 4px 8px;
            border-radius: 15px;
            font-size: 12px;
            margin: 2px;
        }
        
        .chalet-actions {
            display: flex;
            gap: 10px;
            justify-content: center;
        }
        
        @media (max-width: 768px) {
            .chalet-info-grid {
                grid-template-columns: 1fr;
            }
            
            .chalet-actions {
                flex-direction: column;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Close modal functionality
    const closeModal = () => {
        modal.remove();
        style.remove();
    };
    
    modal.querySelector('.chalet-modal-close').addEventListener('click', closeModal);
    modal.querySelector('.chalet-modal-close-btn').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}
