/**
 * JavaScript para la aplicación web del servidor HTTP
 * Maneja comunicación asíncrona con servicios REST simplificados
 */

// Configuración
const API_BASE_URL = '';
const ENDPOINTS = {
    hello: '/api/hello',
    weather: '/api/weather',
    quote: '/api/quote'
};

/**
 * Realiza una petición GET con el nombre del usuario
 */
function loadGetMsg() {
    const nameElement = document.getElementById("name");
    const responseElement = document.getElementById("getrespmsg");
    
    if (!nameElement || !responseElement) {
        console.error('Elementos del DOM no encontrados');
        return;
    }
    
    const nameVar = nameElement.value.trim() || 'World';
    const url = `${ENDPOINTS.hello}?name=${encodeURIComponent(nameVar)}`;
    
    // Mostrar estado de carga
    showLoading(responseElement, 'Enviando petición GET...');
    
    // Realizar petición con XMLHttpRequest
    const xhttp = new XMLHttpRequest();
    
    xhttp.onload = function() {
        hideLoading(responseElement);
        
        if (this.status === 200) {
            try {
                const response = JSON.parse(this.responseText);
                displayResponse(responseElement, response, 'success');
            } catch (e) {
                displayError(responseElement, 'Error al parsear respuesta JSON');
            }
        } else {
            displayError(responseElement, `Error HTTP ${this.status}: ${this.statusText}`);
        }
    };
    
    xhttp.onerror = function() {
        hideLoading(responseElement);
        displayError(responseElement, 'Error de conexión');
    };
    
    xhttp.ontimeout = function() {
        hideLoading(responseElement);
        displayError(responseElement, 'Timeout de la petición');
    };
    
    xhttp.open("GET", url);
    xhttp.timeout = 10000; // 10 segundos
    xhttp.send();
}

/**
 * Realiza una petición POST con el nombre del usuario
 */
function loadPostMsg() {
    const nameElement = document.getElementById("postname");
    const responseElement = document.getElementById("postrespmsg");
    
    if (!nameElement || !responseElement) {
        console.error('Elementos del DOM no encontrados');
        return;
    }
    
    const nameVar = nameElement.value.trim() || 'World';
    const url = `${ENDPOINTS.hello}?name=${encodeURIComponent(nameVar)}`;
    
    // Mostrar estado de carga
    showLoading(responseElement, 'Enviando petición POST...');
    
    // Realizar petición con Fetch API
    fetch(url, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        hideLoading(responseElement);
        displayResponse(responseElement, data, 'success');
    })
    .catch(error => {
        hideLoading(responseElement);
        displayError(responseElement, error.message);
    });
}

/**
 * Obtiene información del clima (datos simulados)
 */
function getWeather() {
    const responseElement = document.getElementById("weather-result");
    
    if (!responseElement) {
        console.error('Elemento de respuesta del clima no encontrado');
        return;
    }
    
    showLoading(responseElement, 'Consultando información del clima...');
    
    fetch(ENDPOINTS.weather)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        hideLoading(responseElement);
        displayWeatherResponse(responseElement, data);
    })
    .catch(error => {
        hideLoading(responseElement);
        displayError(responseElement, error.message);
    });
}

/**
 * Obtiene una cita inspiradora (datos simulados)
 */
function getQuote() {
    const responseElement = document.getElementById("quote-result");
    
    if (!responseElement) {
        console.error('Elemento de respuesta de cita no encontrado');
        return;
    }
    
    showLoading(responseElement, 'Obteniendo cita inspiradora...');
    
    fetch(ENDPOINTS.quote)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        hideLoading(responseElement);
        displayQuoteResponse(responseElement, data);
    })
    .catch(error => {
        hideLoading(responseElement);
        displayError(responseElement, error.message);
    });
}

/**
 * Muestra estado de carga en un elemento
 */
function showLoading(element, message = 'Cargando...') {
    element.className = 'response-area loading';
    element.textContent = message;
}

/**
 * Oculta estado de carga de un elemento
 */
function hideLoading(element) {
    element.classList.remove('loading');
}

/**
 * Muestra una respuesta exitosa
 */
function displayResponse(element, data, type = 'info') {
    element.className = `response-area ${type}`;
    
    if (typeof data === 'object') {
        element.textContent = JSON.stringify(data, null, 2);
    } else {
        element.textContent = data;
    }
}

/**
 * Muestra una respuesta de clima formateada
 */
function displayWeatherResponse(element, data) {
    element.className = 'response-area success';
    
    element.innerHTML = `
<strong>🌤️ Información del Clima</strong>
Ciudad: ${data.city || 'N/A'}
Temperatura: ${data.temperature || 'N/A'}
Descripción: ${data.description || 'N/A'}
Humedad: ${data.humidity || 'N/A'}

${data.message ? '📝 ' + data.message : ''}
    `.trim();
}

/**
 * Muestra una cita formateada
 */
function displayQuoteResponse(element, data) {
    element.className = 'response-area success';
    
    element.innerHTML = `
<strong>💭 Cita Inspiradora</strong>

"${data.content || 'Contenido no disponible'}"
— ${data.author || 'Autor desconocido'}

${data.message ? '📝 ' + data.message : ''}
    `.trim();
}

/**
 * Muestra un error
 */
function displayError(element, message) {
    element.className = 'response-area error';
    element.innerHTML = `
<strong>❌ Error</strong>
${message}

Verifique la conexión con el servidor y vuelva a intentar.
    `.trim();
}

/**
 * Inicialización cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('📱 Aplicación web cargada correctamente');
    console.log('🌐 Servidor HTTP: http://localhost:35000');
    
    // Agregar event listeners para Enter en los campos de texto
    const nameInput = document.getElementById('name');
    const postnameInput = document.getElementById('postname');
    
    if (nameInput) {
        nameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                loadGetMsg();
            }
        });
    }
    
    if (postnameInput) {
        postnameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                loadPostMsg();
            }
        });
    }
    
    // Mostrar información del navegador
    console.log('🔍 User Agent:', navigator.userAgent);
    console.log('📱 Platform:', navigator.platform);
});

/**
 * Manejo de errores globales
 */
window.addEventListener('error', function(e) {
    console.error('❌ Error global capturado:', e.error);
});

/**
 * Manejo de promesas rechazadas no capturadas
 */
window.addEventListener('unhandledrejection', function(e) {
    console.error('❌ Promesa rechazada no manejada:', e.reason);
});

/**
 * Función de utilidad para mostrar notificaciones
 */
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos inline para la notificación
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        background: type === 'error' ? '#e74c3c' : '#27ae60',
        color: 'white',
        fontWeight: '600',
        zIndex: '1000',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animación de entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}
