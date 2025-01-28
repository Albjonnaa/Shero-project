document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.querySelector(".dropdown").classList.add("show");
    });
    item.addEventListener("mouseleave", () => {
        item.querySelector(".dropdown").classList.remove("show");
    });
});
var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
let testimonials = document.querySelectorAll(".testimonial");
let index = 0;
