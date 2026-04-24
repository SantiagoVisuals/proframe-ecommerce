# ProFrame — E-commerce Equipo Audiovisual

Aplicacion web tipo e-commerce desarrollada con **React + Vite** para la materia Optativa III.

## Descripcion

ProFrame es una tienda online de equipo audiovisual profesional que permite a los usuarios explorar productos, filtrar por categorias, ver detalles de cada producto y gestionar un carrito de compras.

## Tecnologias

- **React 18** — Biblioteca de UI con componentes funcionales y hooks
- **Vite** — Herramienta de build rapida para desarrollo moderno
- **React Router v6** — Navegacion entre paginas (SPA)
- **Context API** — Manejo de estado global para el carrito
- **CSS puro** — Estilos responsive sin frameworks externos

## Funcionalidades

- Vista de productos con grid responsive
- Filtrado por categorias (Camaras, Lentes, Audio, Iluminacion, etc.)
- Detalle de producto con informacion completa
- Carrito de compras con agregar, eliminar y modificar cantidades
- Contador de productos en el navbar
- Navegacion fluida entre paginas
- Diseno responsive (mobile-first)

## Estructura del proyecto

```
src/
├── components/     # Componentes reutilizables (Navbar, ProductCard, Cart, etc.)
├── pages/          # Paginas de la aplicacion (Home, Products, CartPage, etc.)
├── context/        # Context API para estado global
├── data/           # Datos de productos
└── App.jsx         # Configuracion de rutas
```

## Instalacion

```bash
npm install
npm run dev
```

## Deploy

Desplegado en **Vercel**.

## Autor

Jeifer Santiago Marino — Ingenieria Multimedia
