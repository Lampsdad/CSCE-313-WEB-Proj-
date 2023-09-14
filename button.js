let isAlternateStyle = false;
const linkElement = document.getElementById('stylesheet');

//initially hide the alternate style
window.onload = function() {
    // Attach the overlay function to the hamburger button
    document.querySelector('.hamburger-menu').addEventListener('click', toggleOverlay);
    var sectionToHide = document.getElementById('style2');
    sectionToHide.style.display = "none";
}

function toggleStyle() {
    var sectionToHide = document.getElementById('style2');
    if (isAlternateStyle) {
        linkElement.href = 'landingstyle.css'; // Use the original CSS file
        sectionToHide.style.display = "none";
    } else {
        linkElement.href = 'landingaltstyle.css'; // Use the alternate CSS file
        sectionToHide.style.display = "block";
    }
    isAlternateStyle = !isAlternateStyle; // Toggle the style state
}

function toggleOverlay() {
    var overlay = document.querySelector('.overlay');
    overlay.classList.toggle('active');
}
