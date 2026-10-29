// ============================================
// 1. GET HTML ELEMENTS
// ============================================

const mainGallery = document.getElementById("mainGallery");
const galleryItems = document.querySelectorAll(".gallery-item");
const filterButtons = document.querySelectorAll(".filter-btn");

const collectionGallery = document.getElementById("collectionGallery");
const collectionTitle = document.getElementById("collectionTitle");
const collectionDescription = document.getElementById("collectionDescription");

const backBtn = document.getElementById("backBtn");

const slideImage = document.getElementById("slideImage");
const slideTitle = document.getElementById("slideTitle");
const slideCounter = document.getElementById("slideCounter");

const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");
const sliderDots = document.getElementById("sliderDots");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

// ============================================
// 2. CATEGORY FILTERS
// ============================================

filterButtons.forEach(function (button) {

button.addEventListener("click", function () {

    const selectedCategory = button.dataset.category;

    filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    galleryItems.forEach(function (item) {

        const itemCategory = item.dataset.category;

        if (
            selectedCategory === "all" ||
            selectedCategory === itemCategory
        ) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }

    });

});

});

// ============================================
// 3. COLLECTION DATA: 6 COLLECTIONS, 8 PHOTOS
// ============================================

const collections = {

// ----------------------------------------
// COLLECTION 1: MOUNTAIN ESCAPE
// ----------------------------------------

mountains: {
    title: "Mountain Escape 🏔️",
    description: "Explore the beauty of mountains.",

    images: [
        {
            url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200",
            title: "Snowy Peaks"
        },
        {
            url: "https://media.istockphoto.com/id/177346037/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=ZPegQBWjiLMqcjt11PDgBXV-3ac2F9TZEw8MOXz6ksY=",
            title: "Mountain Beauty"
        },
        {
            url: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=1200",
            title: "Nature Escape"
        },
        {
            url: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=1200",
            title: "Peaceful Mountains"
        },
        {
            url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200",
            title: "Mountain Lake"
        },
        {
            url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
            title: "Wild Landscape"
        },
        {
            url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200",
            title: "Mountain Night"
        },
        {
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200",
            title: "Mountain Adventure"
        }
    ]
},


// ----------------------------------------
// COLLECTION 2: GREEN FOREST
// ----------------------------------------

forests: {
    title: "Green Forest 🌲",
    description: "Discover the magic of green nature.",

    images: [
        {
            url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200",
            title: "Deep Green Forest"
        },
        {
            url: "https://images.unsplash.com/photo-1511497584788-876760111969?w=1200",
            title: "Forest Canopy"
        },
        {
            url: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=1200",
            title: "Into the Woods"
        },
        {
            url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200",
            title: "Woodland Path"
        },
        {
            url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200",
            title: "Quiet Forest"
        },
        {
            url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200",
            title: "Tall Trees"
        },
        {
            url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200",
            title: "Forest Light"
        },
        {
            url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&sat=-20",
            title: "Nature Retreat"
        }
    ]
},


// ----------------------------------------
// COLLECTION 3: LOVELY COMPANION
// ----------------------------------------

dogs: {
    title: "Lovely Companion 🐶",
    description: "Little friends, endless love.",

    images: [
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99vnty9m_E3vvnJTxI_AbCBD7qIHVitSkN2xq8_XnSQ&s=10"
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7C9cCD2kTxFVO49dP88sppbkN_QMbh54gVpNXT2T3IQ&s=10",
            title: "Golden Friend"
        },
        {
            url: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1200",
            title: "Playful Puppy"
        },
        {
            url: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=1200",
            title: "Sweet Companion"
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3fITBeJze1ZhT_tXB1jAa_zaoZBR0Ujk3gZkbJuECQ&s=10",
            title: "Friends Forever"
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrN1E7y7F-Tr73sd02PW7wh7fuQoIK-JlZKYJdI1oMmg&s=10",
            title: "Little Bestie"
        },
        {
            url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200",
            title: "Adorable Puppy"
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGFJLCxgCmVGA-aVNyNHCOxvGjCJvX44qYO6eN2YoIQ&s=10",
            title: "Puppy Love"
        }
    ]
},


// ----------------------------------------
// COLLECTION 4: CITY LIGHTS
// ----------------------------------------

cities: {
    title: "City Lights 🌃",
    description: "Experience the beauty of city life.",

    images: [
        {
            url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200",
            title: "City Skyline"
        },
        {
            url: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1200",
            title: "City at Night"
        },
        {
            url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200",
            title: "Urban Views"
        },
        {
            url: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1200&sat=-20",
            title: "Evening Lights"
        },
        {
            url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200",
            title: "Busy City"
        },
        {
            url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200",
            title: "City Streets"
        },
        {
            url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200",
            title: "Urban Skyline"
        },
        {
            url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200",
            title: "Modern City"
        }
    ]
},


// ----------------------------------------
// COLLECTION 5: LITTLE EXPLORER
// ----------------------------------------

animals: {
    title: "Little Explorer 🐾",
    description: "Meet amazing animals from around the world.",

    images: [
        {
            url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1200",
            title: "Curious Explorer"
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILQck6JPgsu4toGCq4umyrJh_VWM1YVhbbKtEMZe4Cw&s=10",
            title: "Curious Cat"
        },
        {
            url: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=1200",
            title: "Cute Little Friend"
        },
        {
            url: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=1200",
            title: "Little Cat"
        },
        {
            url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=1200",
            title: "Funny Explorer"
        },
        {
            url: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=1200",
            title: "Animal Moments"
        },
        {
            url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200",
            title: "Wild Beauty"
        },
        {
            url: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=1200&sat=-20",
            title: "Nature's Friend"
        }
    ]
},


// ----------------------------------------
// COLLECTION 6: URBAN ARCHITECTURE
// ----------------------------------------

architecture: {
    title: "Urban Architecture 🏙️",
    description: "Discover beautiful buildings and structures.",

    images: [
        {
            url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200",
            title: "Modern Architecture"
        },
        {
            url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200",
            title: "Minimalist Design"
        },
        {
            url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
            title: "Tall Buildings"
        },
        {
            url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
            title: "Modern Interiors"
        },
        {
            url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
            title: "Creative Workspace"
        },
        {
            url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&sat=-30",
            title: "Architectural Lines"
        },
        {
            url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200",
            title: "Designed Spaces"
        },
        {
            url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&sat=-20",
            title: "Contemporary Design"
        }
    ]
}

};

// ============================================
// 4. SLIDER VARIABLES
// ============================================

let currentCollection = null;
let currentSlideIndex = 0;
let autoSlideTimer = null;

const AUTO_SLIDE_DELAY = 4000;

// ============================================
// 5. SHOW A SLIDE
// ============================================

function showSlide(index) {

if (!currentCollection) {
    return;
}

const images = currentCollection.images;

currentSlideIndex =
    (index + images.length) % images.length;

const selectedImage = images[currentSlideIndex];

slideImage.style.opacity = "0";

setTimeout(function () {

    slideImage.src = selectedImage.url;
    slideImage.alt = selectedImage.title;

    slideTitle.textContent = selectedImage.title;

    slideCounter.textContent =
        `${currentSlideIndex + 1} / ${images.length}`;

    slideImage.style.opacity = "1";

}, 150);


// Update active dot

const dots = sliderDots.querySelectorAll(".slider-dot");

dots.forEach(function (dot, dotIndex) {

    dot.classList.toggle(
        "active",
        dotIndex === currentSlideIndex
    );

});

}

// ============================================
// 6. CREATE SLIDER DOTS
// ============================================

function createSliderDots() {

sliderDots.innerHTML = "";

currentCollection.images.forEach(function (image, index) {

    const dot = document.createElement("button");

    dot.type = "button";
    dot.className = "slider-dot";

    dot.setAttribute(
        "aria-label",
        `Show image ${index + 1}`
    );

    dot.addEventListener("click", function () {

        showSlide(index);

        restartAutoSlide();

    });

    sliderDots.appendChild(dot);

});

}

// ============================================
// 7. OPEN A COLLECTION
// ============================================

function openCollection(collectionKey) {

const selectedCollection = collections[collectionKey];

if (!selectedCollection) {
    return;
}

// Stop the previous collection's timer

stopAutoSlide();

currentCollection = selectedCollection;
currentSlideIndex = 0;


// Update collection heading

collectionTitle.textContent = selectedCollection.title;

collectionDescription.textContent =
    selectedCollection.description;


// Hide main gallery and show selected collection

mainGallery.style.display = "none";
collectionGallery.style.display = "block";


// Create eight navigation dots

createSliderDots();


// Display first image

showSlide(0);


// Start automatic sliding

startAutoSlide();


// Scroll to the collection

collectionGallery.scrollIntoView({
    behavior: "smooth",
    block: "start"
});

}

// ============================================
// 8. OPEN COLLECTION WHEN CARD IS CLICKED
// ============================================

galleryItems.forEach(function (item) {

item.addEventListener("click", function () {

    const collectionKey = item.dataset.collection;

    openCollection(collectionKey);

});

});

// ============================================
// 9. NEXT SLIDE BUTTON
// ============================================

nextSlide.addEventListener("click", function () {

if (!currentCollection) {
    return;
}

showSlide(currentSlideIndex + 1);

restartAutoSlide();

});

// ============================================
// 10. PREVIOUS SLIDE BUTTON
// ============================================

prevSlide.addEventListener("click", function () {

if (!currentCollection) {
    return;
}

showSlide(currentSlideIndex - 1);

restartAutoSlide();

});

// ============================================
// 11. AUTOMATIC SLIDING
// ============================================

function startAutoSlide() {

stopAutoSlide();

if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
    return;
}

autoSlideTimer = setInterval(function () {

    if (
        currentCollection &&
        collectionGallery.style.display !== "none"
    ) {
        showSlide(currentSlideIndex + 1);
    }

}, AUTO_SLIDE_DELAY);

}

function stopAutoSlide() {

if (autoSlideTimer !== null) {

    clearInterval(autoSlideTimer);

    autoSlideTimer = null;

}

}

function restartAutoSlide() {

startAutoSlide();

}

// ============================================
// 12. BACK TO MAIN GALLERY
// ============================================

backBtn.addEventListener("click", function () {

stopAutoSlide();

collectionGallery.style.display = "none";
mainGallery.style.display = "block";

currentCollection = null;

window.scrollTo({
    top: 0,
    behavior: "smooth"
});

});

// ============================================
// 13. LIGHTBOX
// ============================================

let lightboxImages = [];
let lightboxIndex = 0;

// Open lightbox when clicking the large slide image

slideImage.addEventListener("click", function () {

if (!currentCollection) {
    return;
}

lightboxImages = currentCollection.images;
lightboxIndex = currentSlideIndex;

showLightboxImage();

lightbox.classList.add("show");

stopAutoSlide();

});

// Display lightbox image

function showLightboxImage() {

if (lightboxImages.length === 0) {
    return;
}

lightboxIndex =
    (lightboxIndex + lightboxImages.length) %
    lightboxImages.length;

const image = lightboxImages[lightboxIndex];

lightboxImage.src = image.url;
lightboxImage.alt = image.title;

}

// Lightbox next button

lightboxNext.addEventListener("click", function () {

lightboxIndex++;

showLightboxImage();

});

// Lightbox previous button

lightboxPrev.addEventListener("click", function () {

lightboxIndex--;

showLightboxImage();

});

// Close lightbox

function closeLightboxViewer() {

lightbox.classList.remove("show");

if (currentCollection) {
    startAutoSlide();
}

}

closeLightbox.addEventListener(
"click",
closeLightboxViewer
);

lightbox.addEventListener("click", function (event) {

if (event.target === lightbox) {
    closeLightboxViewer();
}

});

// ============================================
// 14. KEYBOARD CONTROLS
// ============================================

document.addEventListener("keydown", function (event) {

// Lightbox controls

if (lightbox.classList.contains("show")) {

    if (event.key === "ArrowRight") {

        lightboxIndex++;

        showLightboxImage();

    }

    if (event.key === "ArrowLeft") {

        lightboxIndex--;

        showLightboxImage();

    }

    if (event.key === "Escape") {

        closeLightboxViewer();

    }

    return;

}


// Collection slider controls

if (
    currentCollection &&
    collectionGallery.style.display !== "none"
) {

    if (event.key === "ArrowRight") {

        showSlide(currentSlideIndex + 1);

        restartAutoSlide();

    }

    if (event.key === "ArrowLeft") {

        showSlide(currentSlideIndex - 1);

        restartAutoSlide();

    }

    if (event.key === "Escape") {

        backBtn.click();

    }

}

});

// ============================================
// 15. PAUSE AUTO SLIDE WHEN TAB IS HIDDEN
// ============================================

document.addEventListener("visibilitychange", function () {

if (document.hidden) {

    stopAutoSlide();

} else if (
    currentCollection &&
    collectionGallery.style.display !== "none"
) {

    startAutoSlide();

}

});

// ============================================
// 16. INITIAL SETUP
// ============================================

collectionGallery.style.display = "none";
mainGallery.style.display = "block";