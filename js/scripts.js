var rp_slides = document.getElementsByClassName("rp-images");
var ba_slides = document.getElementsByClassName("ba-images");
var ss_slides = document.getElementsByClassName("ss-images");
var slide_progress_rp = document.getElementsByClassName("slide-progress-rp");
var slide_progress_ba = document.getElementsByClassName("slide-progress-ba");
var slide_progress_ss = document.getElementsByClassName("slide-progress-ss");
var RP_GLOBAL_INDEX = 0;
var BA_GLOBAL_INDEX = 0;
var SS_GLOBAL_INDEX = 0;
var gallery_images = ["gallery_rp", "gallery_ba", "gallery_ss"]

/* Function for Previous/Next Button Implementation */
function onload_gallery() {
    for (i = 0; i < rp_slides.length; i++) {
        if (i != 0) {
            rp_slides[i].className = "rp-images inactive";
        }
    }
    for (i = 0; i < ba_slides.length; i++) {
        if (i != 0) {
            ba_slides[i].className = "ba-images inactive";
        }
    }
    for (i = 0; i < ss_slides.length; i++) {
        if (i != 0) {
            ss_slides[i].className = "ss-images inactive";
        }
    }
}

function onload_mobile() {
    var nav_button_closed = document.getElementById("mobileMenu-closed")
    var nav_button_open = document.getElementById("mobileMenu-open")
    nav_button_closed.className = "mobileMenu active";
    nav_button_open.className = "mobileMenu inactive"
}

function switchImage(imageNum, gallery) {
    if (gallery == "RP") {
        RP_GLOBAL_INDEX = imageNum - 1;
        for (i = 0; i < rp_slides.length; i++) {
            if (i != RP_GLOBAL_INDEX) {
                rp_slides[i].className = "rp-images inactive";
            }
            else {
                rp_slides[i].className = "rp-images active";
            }
        }
        updateProgress(RP_GLOBAL_INDEX, "RP");
    }
    else if (gallery == "BA") {
        BA_GLOBAL_INDEX = imageNum - 1;
        for (i = 0; i < ba_slides.length; i++) {
            if (i != BA_GLOBAL_INDEX) {
                ba_slides[i].className = "ba-images inactive";
            }
            else {
                ba_slides[i].className = "ba-images active";
            }
        }
        updateProgress(BA_GLOBAL_INDEX, "BA");
    }
    else if (gallery == "SS") {
        SS_GLOBAL_INDEX = imageNum - 1;
        for (i = 0; i < ss_slides.length; i++) {
            if (i != SS_GLOBAL_INDEX) {
                ss_slides[i].className = "ss-images inactive";
            }
            else {
                ss_slides[i].className = "ss-images active";
            }
        }
        updateProgress(SS_GLOBAL_INDEX, "SS");
    }
}

function nextImage(gallery) {
    if (gallery == "RP") {
        if (RP_GLOBAL_INDEX == (rp_slides.length - 1)) {
            RP_GLOBAL_INDEX = rp_slides.length;
            switchImage(RP_GLOBAL_INDEX, "RP");
        }
        else {
            RP_GLOBAL_INDEX += 2;
            switchImage(RP_GLOBAL_INDEX, "RP");
        }
    }
    else if (gallery == "BA") {
        if (BA_GLOBAL_INDEX == (ba_slides.length - 1)) {
            BA_GLOBAL_INDEX = ba_slides.length;
            switchImage(BA_GLOBAL_INDEX, "BA");
        }
        else {
            BA_GLOBAL_INDEX += 2;
            switchImage(BA_GLOBAL_INDEX, "BA");
        }
    }
    else if (gallery == "SS") {
        if (SS_GLOBAL_INDEX == (ss_slides.length - 1)) {
            SS_GLOBAL_INDEX = ss_slides.length;
            switchImage(SS_GLOBAL_INDEX, "SS");
        }
        else {
            SS_GLOBAL_INDEX += 2;
            switchImage(SS_GLOBAL_INDEX, "SS");
        }
    }
}

function prevImage(gallery) {
    if (gallery == "RP") {
        if (RP_GLOBAL_INDEX == 0) {
            RP_GLOBAL_INDEX = 1;
            switchImage(RP_GLOBAL_INDEX, "RP");
        }
        else {
            switchImage(RP_GLOBAL_INDEX, "RP");
        }
    }
    else if (gallery == "BA") {
        if (BA_GLOBAL_INDEX == 0) {
            BA_GLOBAL_INDEX = 1;
            switchImage(BA_GLOBAL_INDEX, "BA");
        }
        else {
            switchImage(BA_GLOBAL_INDEX, "BA");
        }
    }
    else if (gallery == "SS") {
        if (SS_GLOBAL_INDEX == 0) {
            SS_GLOBAL_INDEX = 1;
            switchImage(SS_GLOBAL_INDEX, "SS");
        }
        else {
            switchImage(SS_GLOBAL_INDEX, "SS");
        }
    }
}

function updateProgress(curIndex, gallery) {
    if (gallery == "RP") {
        slide_progress_rp.innerHTML = "Image " + (curIndex + 1) + " of " + (rp_slides.length);
    }
    else if (gallery == "BA") {
        slide_progress_ba.innerHTML = "Image " + (curIndex + 1) + " of " + (ba_slides.length);
    }
    else if (gallery = "SS") {
        slide_progress_ss.innerHTML = "Image " + (curIndex + 1) + " of " + (ss_slides.length);
    }
}


function sendForm() {
    var form = document.getElementsById("contact_us_form")
    form.submit();
    form.reset();
    // return false; // Prevent Form Refresh
    var article = document.getElementById("contact_form")
    var message = document.createElement("p");
    message.innerHTML = "Thank you! Your submission was received.";
    message.id = "thank_you-message";
    article.appendChild(message);
    return false;
}

function toggleMobileDrawer() {
    var nav_button_closed = document.getElementById("mobileMenu-closed");
    var nav_button_open = document.getElementById("mobileMenu-open");
    var nav_buttons = document.getElementById("top-navigation");

    if (nav_buttons.style.display === "flex") {
        nav_buttons.style.display = "none";
    }
    else {
        nav_buttons.style.display = "flex";
    }
    if (nav_button_closed.className === "mobileMenu active") {
        nav_button_closed.className = "mobileMenu inactive";
        nav_button_open.className = "mobileMenu active";
    }
    else if (nav_button_open.className === "mobileMenu active") {
        nav_button_open.className = "mobileMenu inactive";
        nav_button_closed.className = "mobileMenu active";
    }
}

function addGalleryBorder(gallery) {
    for (let i = 0; i < gallery_images.length; i++) {
        if (gallery != gallery_images[i]) {
            removeGalleryBorder(gallery_images[i])
        }
    }
    curGallery = document.getElementById(gallery)
    curGallery.classList.add("selected-figure");
}

function removeGalleryBorder(gallery) {
    rmGallery = document.getElementById(gallery)
    rmGallery.classList.remove("selected-figure");
}

onload_gallery();
onload_mobile();