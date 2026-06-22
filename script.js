const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Close menu when a navigation link is clicked
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// Gallery image click preview
const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {
    image.addEventListener("click", () => {

        const overlay = document.createElement("div");
        overlay.className = "image-overlay";

        const enlargedImage = document.createElement("img");
        enlargedImage.src = image.src;

        overlay.appendChild(enlargedImage);

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });
    });
});