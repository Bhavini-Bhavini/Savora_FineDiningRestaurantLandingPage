/* =========================
   SCROLL TO TOP BUTTON
========================= */

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.className =
    "btn btn-warning position-fixed";

scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

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


/* =========================
   THEME TOGGLE
========================= */

const themeBtn = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.innerHTML = "☀️";
}

// Toggle theme
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


/* =========================
   LEAFLET MAP
========================= */

const map = L.map("map").setView(
    [30.7333, 76.7794],
    13
);

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution:
        "&copy; OpenStreetMap contributors"
    }
).addTo(map);

L.marker([30.7333, 76.7694])
    .addTo(map)
    .bindPopup("Savora, Chandigarh")
    .openPopup();


/* =========================
   RESERVATION FORM
========================= */

const reservationForm =
    document.getElementById("reservationForm");

if (reservationForm) {

    reservationForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name.length < 3) {

            alert("Name must be at least 3 characters.");

            return;

        }

        if (!emailRegex.test(email)) {

            alert("Enter a valid email.");

            return;

        }

        alert("Table Reserved Successfully!");

        reservationForm.reset();

    });

}


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name =
            document.getElementById("contactName").value.trim();

        const email =
            document.getElementById("contactEmail").value.trim();

        const message =
            document.getElementById("message").value.trim();

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name.length < 3) {

            alert("Invalid Name");

            return;

        }

        if (!emailRegex.test(email)) {

            alert("Invalid Email");

            return;

        }

        if (message.length < 10) {

            alert("Message should contain at least 10 characters.");

            return;

        }

        alert("Message Sent Successfully!");

        contactForm.reset();

    });

}