// Initialize theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
});

// Animation trigger function
function triggerAnimation() {
    const logo = document.getElementById('logo');
    logo.classList.add('animate-pulse');
    
    // Remove animation class after completion
    logo.addEventListener('animationend', () => {
        logo.classList.remove('animate-pulse');
    }, {once: true});
}

// Theme toggling function
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Save theme preference
    const theme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
    localStorage.setItem('theme', theme);
}

// Store animation preference example
function storeAnimationPreference(preference) {
    localStorage.setItem('animationPreference', preference);
}