# NexoWeb - Agencia Digital (Neo-Brutalismo Premium)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

NexoWeb es una plataforma web moderna para una agencia digital, diseñada con una estética **Neo-Brutalista Premium**. El proyecto se enfoca en ofrecer una experiencia de usuario audaz, de alto contraste y técnicamente optimizada, utilizando las últimas tecnologías del ecosistema React.

## 🚀 Características Principales

- **Diseño Único**: Estética Neo-Brutalista con sombras duras, bordes gruesos y colores vibrantes.
- **Tipografía de Élite**: Combinación de _Space Grotesk_ para impacto visual y _Inter_ para máxima legibilidad.
- **Rendimiento Optimizado**: Prevención de Layout Shifts (CLS) mediante aspect-ratio y carga eficiente de recursos.
- **Micro-interacciones**: Animaciones fluidas y feedback táctil ("snappy") con Framer Motion.
- **Dark Mode Nativo**: Soporte completo para temas claro y oscuro con persistencia.

## 📂 Estructura del Sitio

El sitio está organizado en secciones lógicas que guían al usuario a través del embudo de conversión:

- **Inicio (Home)**: Landing page principal con propuesta de valor, resumen de servicios y llamadas a la acción.
- **Nosotros (About)**: Sección dedicada a la visión, misión y valores fundamentales de la agencia, respaldada por métricas de éxito.
- **Proceso (Process)**: Guía detallada de la metodología de trabajo en 5 pasos (Descubrimiento, Estrategia, Desarrollo, Lanzamiento y Crecimiento).
- **Proyectos (Projects)**: Portfolio interactivo con filtrado por categorías para mostrar casos de éxito reales.
- **Contacto (Contact)**: Punto de conversión final con formulario y datos de contacto rápido.

## 🛠️ Stack Tecnológico

- **Framework**: React 18 + Vite
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Animaciones**: Framer Motion
- **Iconografía**: Lucide React
- **Componentes UI**: shadcn/ui (basado en Radix UI)

## 📂 Estructura del Proyecto

```text
src/
├── app/
│   ├── components/       # Componentes globales (Header, Footer, Layout)
│   │   ├── figma/        # Componentes de utilidad visual
│   │   └── ui/           # Biblioteca de componentes atómicos (shadcn)
│   └── pages/            # Vistas principales de la aplicación
├── styles/               # Configuración de Tailwind v4 y variables de tema
└── main.tsx              # Punto de entrada de la aplicación
```

## 💻 Instalación y Uso

### Requisitos Previos

- Node.js (versión 18 o superior)
- npm o pnpm

### Pasos

1. **Instalar dependencias:**

   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**

   ```bash
   npm run dev
   ```

3. **Construir para producción:**
   ```bash
   npm run build
   ```

## 📄 Licencia
