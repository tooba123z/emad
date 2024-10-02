// Selecting the elements
const envelope = document.getElementById('envelope');
const closedEnvelope = document.querySelector('.closed-envelope');
const openEnvelope = document.querySelector('.open-envelope');
const letterPage = document.getElementById('letterPage');
const loveSong = document.getElementById('loveSong');

// When envelope is clicked
envelope.addEventListener('click', function() {
    // Open the envelope
    closedEnvelope.style.display = 'none';
    openEnvelope.style.display = 'block';
    
    // Play the song
    loveSong.play();
    
    // Show the letter after a small delay
    setTimeout(() => {
        letterPage.style.display = 'flex';
    }, 1000);
});
