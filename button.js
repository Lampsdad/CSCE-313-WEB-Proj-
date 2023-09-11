let isAlternateStyle = false;

function toggleStyle() {
    const linkElement = document.getElementById('stylesheet');

    if (isAlternateStyle) {
        linkElement.href = 'landingstyle.css'; // Use the original CSS file
    } else {
        linkElement.href = 'landingaltstyle.css'; // Use the alternate CSS file
    }

    isAlternateStyle = !isAlternateStyle; // Toggle the style state
}

// Attach the toggle function to the button
document.getElementById('toggleButton').addEventListener('click', toggleStyle);