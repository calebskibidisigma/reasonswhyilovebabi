document.addEventListener('DOMContentLoaded', function() {
    const messages = document.querySelectorAll('.glassmorphism');
    
    // Animate messages on page load
    messages.forEach((message, index) => {
        setTimeout(() => {
            message.style.opacity = '1';
            message.style.transform = 'translateY(0)';
        }, index * 100);
    });
}); 