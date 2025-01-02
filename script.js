const container = document.querySelector('.fireworks-container');
const fireworks = new Fireworks(container, {
    hue: { min: 0, max: 360 },
    sound: {
        enabled: true, // Habilitar el sonido
        files: ['explosion.mp3'], // Ruta al archivo de sonido
        volume: { 
            min: 2, // Valor mínimo
            max: 4  // Valor máximo
        }
    },
});

// Función para iniciar los fuegos artificiales
function startFireworks() {
    fireworks.start();
}

// Iniciar fuegos artificiales automáticamente al cargar la página
window.onload = function () {
    startFireworks();

    // Crear un nuevo fuego artificial cada 750 ms
    setInterval(() => {
        fireworks.start();
    }, 750);
};
