
// تأثير ظهور البطاقات عند التمرير

const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

cards.forEach((card) => {

    card.classList.add("hidden");

    observer.observe(card);

});

// تحديث سنة حقوق النشر تلقائياً

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} معرض أعمالي | جميع الحقوق محفوظة`;

}
