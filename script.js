// Add any dynamic behavior here (e.g., interactive pricing toggles, hover effects)
// This is a simple example; customize it based on your needs
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });

    card.addEventListener('mouseout', () => {
        card.style.boxShadow = 'none';
    });
});
