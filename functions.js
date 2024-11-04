document.getElementById('subscribeBtn').onclick = function() {
    document.getElementById('popup').style.display = 'flex';
};

document.querySelector('.close-btn').onclick = function() {
    document.getElementById('popup').style.display = 'none';
};
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Show the pop-up automatically after 5 seconds
setTimeout(showPopup, 3000);

// Close the pop-up when the close button is clicked
document.querySelector('.close-btn').onclick = function() {
    document.getElementById('popup').style.display = 'none';
};

// Close the pop-up when clicking outside of it
window.onclick = function(event) {
    if (event.target === document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
};