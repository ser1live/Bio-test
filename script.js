document.addEventListener('DOMContentLoaded', () => {

    // 1. SWIPER SLIDER KURULUMU
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 2.2,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2.1,
                spaceBetween: 15
            },
            480: {
                slidesPerView: 2.5,
                spaceBetween: 20
            }
        }
    });

    // 2. DİNAMİK YAZI (TYPEWRITER EFEKTİ)
    const dynamicText = document.getElementById('dynamicText');
    const phrases = [
        "Error: 404 Sleep Not Found ☕",
        "Building Future Web Experiences... 🚀",
        "Liquid Glass UI Enthusiast 💎"
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            dynamicText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            dynamicText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000; // Cümle bittiğinde bekleme süresi
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    if (dynamicText) {
        typeEffect();
    }
});
