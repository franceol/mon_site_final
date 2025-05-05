// Slideshow
    document.addEventListener('DOMContentLoaded', function() {
        let slideIndex = 0; // Commencer à 0 pour l'index
        let autoSlideTimeout;
    
        // Fonction pour afficher les slides
        function showSlides(n) {
            let i;
            const slides = document.getElementsByClassName("mySlides");
            const dots = document.getElementsByClassName("dot");
    
            if (n >= slides.length) {
                slideIndex = 0;
            }
            if (n < 0) {
                slideIndex = slides.length - 1;
            }
    
            // Masquer toutes les slides
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
    
            // Désactiver tous les dots
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
    
            // Afficher la slide active et activer le dot correspondant
            slides[slideIndex].style.display = "block";
            dots[slideIndex].className += " active";
        }
    
        // Fonction pour avancer/reculer dans les slides
        function plusSlides(n) {
            slideIndex += n;
            showSlides(slideIndex);
            resetAutoSlide();
        }
    
        // Fonction pour afficher une slide spécifique avec les dots
        function currentSlide(n) {
            slideIndex = n;
            showSlides(slideIndex);
            resetAutoSlide();
        }
    
        // Fonction pour automatiser le défilement des slides
        function autoSlide() {
            slideIndex++;
            showSlides(slideIndex);
            autoSlideTimeout = setTimeout(autoSlide, 4000);  // Change de slide toutes les 4 secondes
        }
    
        // Réinitialiser le défilement automatique après interaction
        function resetAutoSlide() {
            clearTimeout(autoSlideTimeout);
            autoSlideTimeout = setTimeout(autoSlide, 4000);  // Redémarrer après 4 secondes
        }
    
        // Ajouter les événements pour les dots
        const dots = document.getElementsByClassName("dot");
        for (let i = 0; i < dots.length; i++) {
            dots[i].addEventListener('click', function() {
                currentSlide(i);
            });
        }
    
        // Ajouter les événements pour les flèches (next/prev)
        document.querySelector('.prev').addEventListener('click', function() {
            plusSlides(-1);
        });
    
        document.querySelector('.next').addEventListener('click', function() {
            plusSlides(1);
        });
    
        // Initialiser la première slide et lancer l'auto-défilement
        showSlides(slideIndex);
        autoSlide();
    });
    

    // Function for filtering gallery items
function filterSelection(category) {
    const columns = document.getElementsByClassName("column");
    const filterCategory = category.toLowerCase();

    Array.from(columns).forEach(column => {
        if (filterCategory === "all" || column.className.toLowerCase().includes(filterCategory)) {
            column.style.display = "block"; // Show matching items
            column.classList.add("show");
        } else {
            column.style.display = "none"; // Hide non-matching items
            column.classList.remove("show");
        }
    }
    )};

    function toggleMenu() {
        const burgerButton = document.getElementById('burgerButton');
        const navMenu = document.getElementById('navMenu');
    
        // Toggle the "open" class for the burger animation
        burgerButton.classList.toggle('open');
    
        // Toggle the "is-active" class for the menu visibility on mobile
        navMenu.classList.toggle('is-active');
    }
    

   


    // Update the active button
    const buttons = document.querySelectorAll("#myBtnContainer .btn2");
    buttons.forEach(button => button.classList.remove("active"));
    document.querySelector(`[onclick="filterSelection('${column}')"]`).classList.add("active");


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le formulaire de recharger la page
    
    var form = event.target;
    var formData = new FormData(form);
    
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            document.getElementById('confirmationMessage').style.display = 'block';
            form.reset(); // Réinitialise le formulaire après l'envoi
        } else {
            alert('Oops! There was an error sending your message. Please try again.');
        }
    }).catch(function(error) {
        alert('Oops! There was an error sending your message. Please try again.');
    });
});


// Fonction pour initialiser le paiement Stripe
function setupStripePayment() {
    // Logique pour initialiser Stripe
    console.log("Stripe initialized");
}

// Fonction pour configurer le bouton "Pay Now"
function setupPayNowButton() {
    const payNowButton = document.querySelector('.pay-now-button');
    if (payNowButton) {
        payNowButton.addEventListener('click', function() {
            console.log("Pay Now button clicked");
            // Logique pour gérer le paiement ici
        });
    } else {
        console.error("Le bouton 'Pay Now' n'existe pas dans le DOM");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'flex';  // Make the modal visible immediately on page load
        console.log("Modal forcibly displayed on page load");
    }
});


    const closeModal = document.querySelector('.close-modal');  // Modal close button
    const productName = document.getElementById('product-name');  // Modal product name
    const productPrice = document.getElementById('product-price');  // Modal product price

    if (buyButtons.length > 0 && modal) {
        // Add event listeners to each Buy button
        buyButtons.forEach(function(buyButton) {
            console.log("Adding event listener to Buy button");  // Debugging event listener addition
            buyButton.addEventListener('click', function() {
                console.log("Buy button clicked");  // Debugging Buy button click

                const name = buyButton.getAttribute('data-name');
                const price = buyButton.getAttribute('data-price');
                console.log("Product Name:", name, "Product Price:", price);  // Debugging product details
    
                // Update modal content with product information
                productName.textContent = name;
                productPrice.textContent = price + ' CHF';
    
                // Show the modal
                modal.style.display = 'flex';  // Set modal to display (becomes visible)
                console.log("Modal displayed");  // Debugging modal display
            });
        });

        // Close modal on click of 'X' button
        closeModal.addEventListener('click', function() {
            console.log("Close modal clicked");  // Debugging close modal
            modal.style.display = 'none';  // Hide modal
        });

        // Close modal if user clicks outside the modal content
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                console.log("Outside modal clicked, closing modal");  // Debugging outside click
                modal.style.display = 'none';  // Hide modal
            }
        });
    } else {
        console.error("Buy buttons or modal not found in the DOM");
    }
;


