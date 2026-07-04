/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


/* ==========================================
   ACTIVE NAVBAR LINK
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.className = "btn btn-warning position-fixed";

scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================================
   THEME TOGGLE
========================================== */

const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");
        themeBtn.innerHTML = "☀️";

    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeBtn.innerHTML = "☀️";
            localStorage.setItem("theme", "dark");

        } else {

            themeBtn.innerHTML = "🌙";
            localStorage.setItem("theme", "light");

        }

    });

}

/* ==========================================
   LEAFLET MAP
========================================== */

if (document.getElementById("map")) {

    const map = L.map("map").setView([30.7333, 76.7794], 14);

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "&copy; OpenStreetMap contributors",
            maxZoom: 19
        }
    ).addTo(map);

    const marker = L.marker([30.7333, 76.7794]).addTo(map);

    marker.bindPopup(
        `
        <b>🍽 Savora Restaurant</b><br>
        Sector 17 Plaza<br>
        Chandigarh, India
        `
    ).openPopup();

}
/* ==========================================
   CONTACT FORM VALIDATION
========================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document
            .getElementById("contactName")
            .value
            .trim();

        const email = document
            .getElementById("contactEmail")
            .value
            .trim();

        const subject = document
            .getElementById("subject")
            .value
            .trim();

        const message = document
            .getElementById("message")
            .value
            .trim();

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name.length < 3) {

            alert("Please enter a valid name.");
            return;

        }

        if (!emailRegex.test(email)) {

            alert("Please enter a valid email.");
            return;

        }

        if (subject.length < 3) {

            alert("Please enter a subject.");
            return;

        }

        if (message.length < 10) {

            alert("Message must be at least 10 characters.");
            return;

        }

        alert("✅ Thank you! Your message has been sent.");

        contactForm.reset();

    });

}





/* ==========================================
   TODAY'S SPECIAL
========================================== */

const specialBadge = document.getElementById("specialBadge");

if (specialBadge) {

    const specials = [

        "☕ Sunday Special: Caramel Latte",
        "🥐 Monday Special: Butter Croissant",
        "🍫 Tuesday Special: Chocolate Mocha",
        "🧁 Wednesday Special: Blueberry Muffin",
        "🍰 Thursday Special: Cheesecake Delight",
        "🥪 Friday Special: Avocado Toast",
        "🍹 Saturday Special: Hazelnut Cappuccino"

    ];

    specialBadge.innerHTML = specials[new Date().getDay()];

}

/* ==========================================
   TABLE RESERVATION FORM
========================================== */

const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {

    reservationForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("🎉 Your table has been reserved successfully!");

        reservationForm.reset();

    });

}
