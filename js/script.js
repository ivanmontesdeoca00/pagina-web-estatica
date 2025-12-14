// Validación básica del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;
    
    if (name && email && message) {
        alert('¡Gracias por contactarme! (Esto es simulado; en proyectos futuros, enviaremos emails reales.)');
        // Limpia el formulario
        this.reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Animación simple al scroll (opcional)
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Estilos iniciales para animación
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s';
});