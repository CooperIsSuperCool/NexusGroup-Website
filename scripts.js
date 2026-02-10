document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    document.addEventListener('click', (e) => {
        if (e.target.matches('.grid-item img')) {
            lightboxImg.src = e.target.src;
            lightbox.classList.add('active');
        }

        if (e.target.matches('.scroll-track img')) {
            lightboxImg.src = e.target.src;
            lightbox.classList.add('active');
        }

        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel .slide");
    const tracks = document.querySelectorAll(".infinite-scroll .scroll-track");
    const nextBtn = document.querySelector(".carousel .next");
    const prevBtn = document.querySelector(".carousel .prev");

    let index = 0;

    function updateCarousel(i) {
        slides.forEach(slide => slide.classList.remove("active"));
        tracks.forEach(track => track.classList.remove("active"));

        slides[i].classList.add("active");
        tracks[i].classList.add("active");
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        updateCarousel(index);
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel(index);
    });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation flags
    let isValid = true;

    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (phone === '' || !phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Valid phone number is required';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    // Message validation
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    // If form is valid, you can submit it or perform any other action
    if (isValid) {
        alert('Form submitted successfully!');
        // You can also submit the form here using AJAX or similar methods
    }
});