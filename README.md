This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Descripción General
Desarrollar un sistema de gestión de eventos que permita a los usuarios crear, listar, modificar y eliminar eventos.
Los eventos tendrán una fecha, hora, descripción, y capacidad máxima de asistentes.
Además, se debe poder registrar usuarios a eventos específicos con límite de capacidad y gestionar listas de espera.

Requerimientos Funcionales

1. Gestión de Usuarios

   - Registro e inicio de sesión de usuarios.
   - Autenticación y autorización para diferentes roles (administrador, usuario común).

2. Gestión de Eventos

   - CRUD (Crear, Leer, Actualizar, Eliminar) de eventos.
   - Inscripción de usuarios a eventos y manejo de listas de espera.
   - Búsqueda y filtrado de eventos por fecha, ubicación, y disponibilidad.

3. Interfaz de Usuario

   - Desarrollar con React usando TypeScript.
   - Diseño responsive adaptado a varios tamaños de pantalla.
   - Mejores prácticas de UX/UI.

4. Backend
   - Implementar API RESTful con Node.js y Express, usando TypeScript.
   - Uso de JWT para autenticación y autorización.
   - Implementación de microservicios para diferentes dominios (usuarios, eventos).
