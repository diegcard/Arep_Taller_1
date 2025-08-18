# Servidor HTTP - AREP Taller 1

Un servidor web HTTP implementado desde cero en Java puro, sin frameworks externos. Soporta archivos estáticos, servicios REST y manejo de múltiples tipos MIME.

## 🎯 Características

- ✅ Servidor HTTP completo sin dependencias externas
- ✅ Soporte para archivos estáticos (HTML, CSS, JS, imágenes)
- ✅ API REST con endpoints simulados
- ✅ Cache de archivos en memoria
- ✅ Detección automática de tipos MIME
- ✅ Aplicación web de demostración

## 🏗️ Arquitectura

```
Cliente (Navegador)
       │ HTTP/1.1
       ▼
HttpServer (Puerto 35000)
├── Servidor de Archivos Estáticos
│   ├── HTML, CSS, JavaScript
│   ├── Imágenes (PNG, JPG, SVG, etc.)
│   └── Cache en memoria
└── API REST
    ├── /api/hello?name={nombre}
    ├── /api/weather
    └── /api/quote
```

### Clase Principal

- **HttpServer** (`src/main/java/com/escuelaing/arep/HttpServer.java`): Servidor principal que maneja conexiones, enrutamiento, tipos MIME y servicios REST

## 🚀 Inicio Rápido

### Prerrequisitos

- Java 21+
- Maven 3.6+

### Instalación y Ejecución

1. **Clonar y compilar**:
   ```bash
   git clone https://github.com/diegcard/Arep_Taller_1.git
   cd Arep_Taller_1
   mvn clean compile
   ```

2. **Ejecutar servidor**:
   ```bash
   # Opción recomendada
   mvn exec:java -Dexec.mainClass="com.escuelaing.arep.HttpServer"
   
   # Alternativas
   java -cp target/classes com.escuelaing.arep.HttpServer
   java -cp target/urlobject-1.0-SNAPSHOT.jar com.escuelaing.arep.HttpServer
   ```

3. **Acceder a la aplicación**:
   ```
   http://localhost:35000
   ```

## 🌐 API y Funcionalidades

### Archivos Estáticos

Soporta múltiples tipos de archivo con detección automática de MIME:

| Tipo | Extensiones | Content-Type |
|------|-------------|--------------|
| HTML | .html, .htm | text/html |
| CSS | .css | text/css |
| JavaScript | .js | application/javascript |
| Imágenes | .png, .jpg, .gif, .svg, .ico, .webp | image/* |
| Fuentes | .woff, .woff2, .ttf, .eot | font/* |
| Documentos | .pdf, .txt, .zip | application/* |

### Endpoints REST

| Endpoint | Método | Descripción | Ejemplo |
|----------|--------|-------------|---------|
| `/api/hello` | GET | Saludo personalizado | `/api/hello?name=Diego` |
| `/api/weather` | GET | Clima simulado de Bogotá | Respuesta JSON con temperatura |
| `/api/quote` | GET | Cita inspiradora aleatoria | Respuesta JSON con cita |

### Demo Web

La aplicación incluye una interfaz completa con:
- Formularios interactivos para probar APIs
- Comunicación asíncrona con JavaScript
- Interfaz responsiva con CSS moderno
- Manejo de estados de carga y errores

## 🧪 Pruebas

```bash
# Ejecutar todas las pruebas
mvn test

# Generar reporte de cobertura
mvn jacoco:report
```

Las pruebas incluyen:
- Pruebas unitarias del servidor HTTP
- Validación de tipos MIME
- Pruebas de endpoints REST
- Manejo de errores y casos límite

## 📦 Estructura del Proyecto

```
src/
├── main/java/com/escuelaing/arep/
│   └── HttpServer.java           # Servidor principal
├── main/resources/static/
│   ├── index.html               # Página principal
│   ├── styles.css               # Estilos
│   ├── app.js                   # Lógica del cliente
│   └── logo.svg                 # Logo de la aplicación
└── test/java/com/escuelaing/arep/
    └── HttpServerTest.java      # Pruebas unitarias
```

## 🛠️ Tecnologías

- **Java 21**: Lenguaje principal
- **Maven**: Gestión de dependencias y construcción
- **JUnit 5**: Framework de pruebas
- **Vanilla JavaScript**: Frontend sin frameworks
- **CSS3**: Estilos responsivos

## 👨‍💻 Autor

**Diego Cardenas** - [diegcard](https://github.com/diegcard)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver [LICENSE.md](LICENSE.md) para detalles.

---

**Escuela Colombiana de Ingeniería Julio Garavito**  
**Arquitecturas Empresariales (AREP) - Taller 1**
