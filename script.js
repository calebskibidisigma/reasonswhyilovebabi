document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.getElementById('revealButton');
    const loveContent = document.getElementById('loveContent');
    
    revealButton.addEventListener('click', function() {
        // Fade out the button
        revealButton.style.opacity = '0';
        revealButton.style.pointerEvents = 'none';
        
        // Show the content container
        loveContent.classList.add('visible');
        
        // Animate each message with a staggered delay
        const messages = document.querySelectorAll('#loveContent .glassmorphism');
        messages.forEach((message, index) => {
            setTimeout(() => {
                message.style.opacity = '1';
                message.style.transform = 'translateY(0)';
            }, index * 100); // 100ms delay between each message
        });
    });
}); 