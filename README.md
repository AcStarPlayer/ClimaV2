# 🌦️ Atmosfera

Atmosfera es una aplicación web moderna de pronóstico climático desarrollada con **HTML, CSS y JavaScript Vanilla**, utilizando la API de **Open-Meteo** para ofrecer información meteorológica en tiempo real.

La aplicación incorpora una experiencia visual premium inspirada en aplicaciones modernas como **Apple Weather**, incluyendo animaciones climáticas, geolocalización automática, radar meteorológico interactivo y pronósticos detallados.

---

# Características principales

## Geolocalización automática

Obtiene automáticamente el clima de la ubicación actual del usuario mediante `navigator.geolocation`.

## Información meteorológica avanzada

Muestra:

* Temperatura actual
* Sensación térmica
* Humedad
* Velocidad del viento
* Dirección del viento
* Índice UV
* Precipitación
* Amanecer y atardecer

## Estado del clima dinámico

Interpretación visual de códigos meteorológicos:

* Soleado
* Nublado
* Lluvia
* Tormenta
* Nieve

## Fondos dinámicos

Cambio automático de estilos visuales según:

* Clima actual
* Día o noche

## Animaciones climáticas

Incluye:

* Lluvia animada
* Relámpagos
* Íconos climáticos GIF
* Efectos visuales modernos

## Pronóstico extendido

Pronóstico climático de los próximos 5 días.

## Pronóstico por horas

Visualización del clima de las próximas horas.

## 🗺️ Radar meteorológico interactivo

Mapa integrado usando **Leaflet.js** y **OpenStreetMap**.

## Caché inteligente

Uso de `localStorage` para optimizar consultas y mejorar rendimiento.

## Diseño responsive

Compatible con:

* Escritorio
* Tablets
* Dispositivos móviles

---

# Tecnologías utilizadas

## Frontend

* HTML5
* CSS3
* JavaScript ES6

## APIs

* Open-Meteo API
* Open-Meteo Geocoding API

## Librerías

* Leaflet.js
* OpenStreetMap

## Otras tecnologías

* Fetch API
* LocalStorage
* Geolocation API

---

# 📂 Estructura del proyecto

```plaintext
Atmosfera/
│
├── assets/
│   ├── animations/
│   ├── weather/
│   └── weather-icon.png
│
├── css/
│   └── style.css
│
├── js/
│   ├── api.js
│   ├── app.js
│   ├── cache.js
│   └── ui.js
│
├── docs/
│
├── index.html
└── README.md
```

---

# ⚙️ Instalación y ejecución

## 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/AcStarPlayer/ClimaV2.git
```

---

## 2️⃣ Abrir la carpeta

```bash
cd ClimaV2
```

---

## 3️⃣ Ejecutar el proyecto

Abrir:

```plaintext
index.html
```

o utilizar una extensión como:

* Live Server (VSCode)

---

# APIs utilizadas

## Open-Meteo API

API principal para obtener datos meteorológicos.

```plaintext
https://open-meteo.com/
```

---

## Geocoding API

Conversión de ciudades a coordenadas geográficas.

```plaintext
https://geocoding-api.open-meteo.com/
```

---

# Funcionalidades implementadas

* [x] Búsqueda por ciudad
* [x] Geolocalización automática
* [x] Pronóstico de 5 días
* [x] Pronóstico por horas
* [x] Fondos dinámicos
* [x] Modo día/noche
* [x] Animaciones climáticas
* [x] Radar meteorológico
* [x] Caché local
* [x] Responsive Design

---

# Próximas mejoras

## Roadmap

* [ ] Calidad del aire
* [ ] Guardar ciudades favoritas
* [ ] Historial de búsquedas
* [ ] Notificaciones meteorológicas
* [ ] Radar meteorológico avanzado
* [ ] Integración con backend Node.js
* [ ] Base de datos MongoDB
* [ ] Login de usuarios
* [ ] PWA instalable
* [ ] App Android/iOS
* [ ] IA para recomendaciones climáticas

---

# 👨‍💻 Autor

## Brayan Andrés Castro

Desarrollador frontend y desarrollador de videojuegos.

---

# Licencia

Proyecto desarrollado con fines educativos y de práctica profesional.

---

# ⭐ Estado del proyecto

🟢 En desarrollo activo.
