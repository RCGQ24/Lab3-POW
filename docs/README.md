# Documentación interna de Mi Revista Digital

Este archivo documenta la **estructura de carpetas** y las **decisiones técnicas clave** del proyecto.

## Estructura del proyecto

El proyecto está organizado de la siguiente manera para separar responsabilidades y facilitar el mantenimiento:

```
📁 Lab3-POW
│
├── index.html                  # Página principal del sitio
├── views/
│   ├── contact/
│   │   └── contacto.html       # Página de contacto
│   ├── config/
│   │   └── configuracion.html  # Página de configuración
│
├── assets/
│   └── img/                    # Imágenes, audios y videos usados en el sitio
│       ├── Nintendo Switch 2.jpg
│       ├── Superman.jpg
│       ├── Mario.jpg
│       ├── Donkey Kong.jpg
│       ├── Link.jpg
│       ├── Samus Aran.jpg
│       ├── Yoshi.jpg
│       ├── 117. Gusty Garden Galaxy.mp3
│       └── Nintendo Switch 2 – First-look trailer.mp4
│
├── shared/
│   ├── css/
│   │   ├── vars.css            # Variables CSS globales
│   │   └── common.css          # Estilos comunes para todas las vistas
│   └── js/
│       └── javascript.js       # Lógica JS compartida para formularios y componentes
│
├── docs/
│   └── README.md               # Documentación del proyecto
```

### Decisiones técnicas clave

- **Separación de vistas:**  
  Las páginas de contacto y configuración están en la carpeta `views` para mantener la estructura modular y facilitar la escalabilidad del proyecto.

- **Carpeta `assets/img`:**  
  Todos los archivos multimedia (imágenes, audio, video) se agrupan en una sola carpeta para un acceso centralizado y rutas consistentes, facilitando la gestión de recursos.

- **Carpeta `shared`:**  
  Los archivos CSS y JS compartidos se ubican en `shared` para evitar duplicidad de código y asegurar estilos y lógica coherentes en todas las vistas.

- **Uso de Bootstrap:**  
  Se utiliza Bootstrap para lograr un diseño responsivo y componentes visuales modernos (navbar, cards, toasts, etc.), acelerando el desarrollo y mejorando la experiencia de usuario.

- **JavaScript modular:**  
  Toda la lógica de formularios y componentes interactivos se centraliza en un solo archivo JS, facilitando el mantenimiento y la reutilización.

- **Documentación:**  
  El archivo `README.md` en la carpeta `docs` documenta la estructura, requisitos y decisiones del proyecto para facilitar su comprensión y futuras mejoras.

---

## Requisitos técnicos
  Todos los archivos multimedia (imágenes, audio, video) se agrupan en una sola carpeta para un acceso centralizado y rutas consistentes, facilitando la gestión de recursos.
Para visualizar correctamente este proyecto, necesitarás:
- **Carpeta `shared`:**  no que soporte HTML5, CSS3 y archivos multimedia.
  Los archivos CSS y JS compartidos se ubican en `shared` para evitar duplicidad de código y asegurar estilos y lógica coherentes en todas las vistas.

- **Uso de Bootstrap:**  
  Se utiliza Bootstrap para lograr un diseño responsivo y componentes visuales modernos (navbar, cards, toasts, etc.), acelerando el desarrollo y mejorando la experiencia de usuario.
Ramses, estudiante de ingeniería informática en la Universidad Católica Andrés Bello (UCAB).
- **JavaScript modular:**  
  Toda la lógica de formularios y componentes interactivos se centraliza en un solo archivo JS, facilitando el mantenimiento y la reutilización.

- **Documentación:**  
  El archivo `README.md` en la carpeta `docs` documenta la estructura, requisitos y decisiones del proyecto para facilitar su comprensión y futuras mejoras.

## Autor 
  Ramses, estudiante de ingeniería informática en la Universidad Católica Andrés Bello (UCAB).

## Licencia
  Este proyecto está bajo una licencia de uso personal. © 2025 Mi Revista Digital. Todos los derechos reservados.