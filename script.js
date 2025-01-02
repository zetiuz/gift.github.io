const container = document.querySelector('.fireworks-container');
const fireworks = new Fireworks(container, {
    hue: { min: 0, max: 360 },
    // Aquí se añade la opción para el sonido
    sound: {
        explosion: 'explosion.mp3', // Ruta al archivo de sonido
        enable: true // Habilitar el sonido
    },
});

// Función para iniciar los fuegos artificiales
function startFireworks() {
    fireworks.start();
}

function playExplosionSound() {
    const audio = new Audio('explosion.mp3'); // Crea un nuevo objeto Audio
    audio.play(); // Reproduce el sonido

    // Detener el sonido después de 2 segundos
    setTimeout(() => {
        audio.pause(); // Pausa el sonido
        audio.currentTime = 0; // Reinicia el tiempo del audio
    }, 2000); // 2000 milisegundos = 2 segundos
}

// Iniciar fuegos artificiales automáticamente al cargar la página
window.onload = function() {
    startFireworks();
    
    // Crear un nuevo fuego artificial cada 750 ms
    setInterval(() => {
        fireworks.start();
    }, 750);
};
