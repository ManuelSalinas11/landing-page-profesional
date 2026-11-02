// ===== MENÚ DESPLEGABLE EN DISPOSITIVOS MÓVILES =====
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('abierto');
        const abierto = nav.classList.contains('abierto');
        menuToggle.textContent = abierto ? '✕' : '☰';
        menuToggle.setAttribute('aria-expanded', abierto);
    });

    // Cerrar el menú al hacer clic en un enlace
    nav.querySelectorAll('a').forEach((enlace) => {
        enlace.addEventListener('click', () => {
            nav.classList.remove('abierto');
            menuToggle.textContent = '☰';
            menuToggle.setAttribute('aria-expanded', false);
        });
    });
}

// ===== SOMBRA EN EL ENCABEZADO AL HACER SCROLL =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.08)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// ===== DESPLAZAMIENTO SUAVE PARA ENLACES INTERNOS =====
document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
    enlace.addEventListener('click', (evento) => {
        const destino = document.querySelector(enlace.getAttribute('href'));
        if (destino) {
            evento.preventDefault();
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== ALERTA DE CONFIRMACIÓN EN EL FORMULARIO DE CONTACTO =====
const formulario = document.getElementById('formulario-contacto');

if (formulario) {
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const nombre = document.getElementById('nombre').value.trim();
        const confirmar = confirm(`¿${nombre}, deseas enviar tu mensaje?`);

        if (confirmar) {
            alert('¡Gracias! Tu mensaje fue enviado correctamente. Te responderé pronto.');
            formulario.reset();
        }
    });
}