# Servidor HTTP Distribuido - AREP Exercise

## 📋 Descripción

Este proyecto implementa un servidor web HTTP desde cero usando únicamente Java y las librerías estándar para el manejo de red. El servidor soporta múltiples solicitudes secuenciales no concurrentes y puede servir diferentes tipos de archivos estáticos (HTML, CSS, JavaScript, imágenes) además de proveer servicios REST.

## 🎯 Objetivos

- ✅ Crear un servidor web que maneje múltiples solicitudes secuenciales
- ✅ Servir archivos estáticos desde el disco local (HTML, CSS, JS, imágenes)
- ✅ Implementar servicios REST para comunicación asíncrona
- ✅ Construir una aplicación web completa para demostrar todas las funcionalidades
- ✅ NO usar frameworks web como Spark o Spring

## 🏗️ Arquitectura

### Componentes Principales

```
┌─────────────────────────────────────────────────────────────┐
│                    Cliente (Navegador)                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │   HTML      │  │     CSS     │  │    JavaScript       │ │
│  │ (index.html)│  │(styles.css) │  │    (app.js)        │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP/1.1
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    HttpServer (Puerto 35000)                │
│  ┌─────────────────────┐  ┌─────────────────────────────┐   │
│  │   Servidor HTTP     │  │   Servicios REST Simples   │   │
│  │   - Archivos        │  │     - /api/hello            │   │
│  │     estáticos       │  │     - /api/weather (mock)   │   │
│  │   - Tipos MIME      │  │     - /api/quote (mock)     │   │
│  │   - Cache simple    │  │                             │   │
│  └─────────────────────┘  └─────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Clases Principales

1. **HttpServer**: Servidor HTTP principal que maneja las conexiones, enruta las peticiones, detecta tipos MIME y provee servicios REST simulados

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Java 21 o superior
- Maven 3.6 o superior

### Pasos de Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone <repository-url>
   cd exercise_1/exercise
   ```

2. **Compilar el proyecto**:
   ```bash
   mvn clean compile
   ```

3. **Ejecutar las pruebas**:
   ```bash
   mvn test
   ```

4. **Empaquetar la aplicación**:
   ```bash
   mvn package
   ```

5. **Ejecutar el servidor**:
   ```bash
   # Opción 1: Usando Maven
   mvn exec:java -Dexec.mainClass="com.escuelaing.arep.HttpServer"
   
   # Opción 2: Usando Java directamente
   java -cp target/classes com.escuelaing.arep.HttpServer
   
   # Opción 3: Usando el JAR compilado
   java -cp target/urlobject-1.0-SNAPSHOT.jar com.escuelaing.arep.HttpServer
   ```

6. **Abrir en el navegador**:
   ```
   http://localhost:35000
   ```

## 🌐 Funcionalidades

### Servidor de Archivos Estáticos

El servidor puede servir los siguientes tipos de archivos:

- **HTML** (text/html): Páginas web
- **CSS** (text/css): Hojas de estilo
- **JavaScript** (application/javascript): Scripts del cliente
- **Imágenes**: PNG, JPG, JPEG, GIF, SVG, ICO, WebP
- **Fuentes**: WOFF, WOFF2, TTF, EOT
- **Otros**: PDF, ZIP, archivos de texto

### Servicios REST

El servidor expone los siguientes endpoints REST:

- **GET /api/hello?name={nombre}**: Servicio de saludo personalizado
- **GET /api/weather**: Información simulada del clima de Bogotá
- **GET /api/quote**: Cita inspiradora aleatoria simulada

### Aplicación Web de Demostración

La aplicación incluye:

- **Formularios de prueba**: GET y POST requests con comunicación asíncrona
- **Integración con servicios REST**: Ejemplos de llamadas a APIs simuladas
- **Interfaz moderna**: CSS responsivo con efectos visuales
- **Manejo de errores**: Gestión de estados de carga y errores de red

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

The requirements for running the project.

- Java 21
- Maven 3.6+

### Installing

To install the project
A step by step series of examples that tell you how to get a development env running
Say what the step will be
1. Clone the repository
2. Navigate to the project directory
3. Build the project using Maven

Give the example
```
git clone https://github.com/diegcard/Arep_Taller_1.git
cd Arep_Taller_1
mvn clean install
```

## Running the tests

To run the tests, you can use the following Maven command:

```
mvn test
```

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds
* [JUnit](https://junit.org/junit5/) - Testing framework

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Diego Cardenas** - [diegcard](https://github.com/diegcard)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
