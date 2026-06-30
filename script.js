// --- 📦 SWIPER 3D COVERFLOW MOTORU AYARLARI ---
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 25,     // Kartların yana doğru dönme açısı (Görseldeki gibi)
        stretch: -10,   // Kartların birbirinin üzerine binme payı
        depth: 130,     // Arkadaki kartların derinlik/uzaklık hissi
        modifier: 1,
        slideShadows: false, // Kartların üzerine yapay siyah gölge düşmesin
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// --- 🎭 DAKTİLO EFEKTİ SCRIPT'İ ---
const dynamicText = document.getElementById('dynamicText');
const words = [
    "Web Developer 🌐", 
    "Turning ideas into reality 💡", 
    "Focusing on clean code ✨", 
    "Always adapting, always learning 🚀"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        dynamicText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        dynamicText.textContent = currentWord.substring(0, charIndex + 1);
    }
    
    if (!isDeleting) {
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 30 : 60;
    
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 400; 
    }
    
    setTimeout(typeEffect, typeSpeed);
}

window.addEventListener('load', () => {
    setTimeout(typeEffect, 600);
});
