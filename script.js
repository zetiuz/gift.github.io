const container = document.querySelector('.fireworks-container');
let fireworks;

// Función para cargar un sonido
function loadSound(url) {
    return new Promise((resolve, reject) => {
        const audio = new Audio(url);
        audio.oncanplaythrough = () => resolve(audio); // Resuelve cuando el audio está listo
        audio.onerror = () => reject(new Error(`Error al cargar el sonido: ${url}`)); // Rechaza en caso de error
    });
}

// Función para inicializar los fuegos artificiales
async function initFireworks() {
    fireworks = new Fireworks(container, {
        hue: { min: 0, max: 360 },
        sound: {
            enabled: true, // Habilitar el sonido
            files: ['explosion4.mp3'], // Ruta al archivo de sonido
            volume: { 
                min: 0.2, // Valor mínimo
                max: 0.8  // Valor máximo
            }
        },
    });

    // Cargar el sonido
    try {
        await loadSound('explosion.mp3'); // Esperar a que el sonido se cargue
        startFireworks(); // Iniciar los fuegos artificiales después de cargar el sonido

        // Crear un nuevo fuego artificial cada 750 ms
        setInterval(() => {
            startFireworks();
        }, 750);
    } catch (error) {
        console.error(error); // Manejo de errores al cargar el sonido
    }
}

// Función para iniciar los fuegos artificiales
function startFireworks() {
    fireworks.start();
}

// Iniciar todo cuando la ventana se carga
window.onload = initFireworks;
