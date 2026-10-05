# Únicas Creativas · Web + panel de administración

Primera versión funcional creada con React + Vite + TypeScript y preparada para Supabase.

## 1. Ejecutar localmente

```bash
npm install
npm run dev
```

## 2. Conectar Supabase

1. Crea un proyecto gratuito en Supabase.
2. Abre SQL Editor y ejecuta todo el contenido de `supabase.sql`.
3. En Authentication > Users crea el usuario que utilizará Fátima para entrar al panel.
4. Copia `.env.example` como `.env`.
5. Completa:

```env
VITE_SUPABASE_URL=TU_URL
VITE_SUPABASE_ANON_KEY=TU_ANON_KEY
```

6. Reinicia `npm run dev`.
7. Entra a `/admin/login`.

## 3. Qué ya funciona

- Inicio moderno con identidad visual de Únicas.
- Animaciones CSS.
- Portafolio dinámico.
- Filtros por categoría.
- Login privado con Supabase Auth.
- Formulario para crear proyectos.
- Subida de imagen de portada.
- Subida de varias imágenes de galería.
- Marcar proyecto como destacado.
- Guardar como publicado o borrador.
- Eliminar proyectos desde el panel.
- Si Supabase aún no está configurado, la web muestra proyectos de demostración y no se rompe.

## 4. Próximo paso recomendado

Reemplazar los textos temporales con información real de Fátima y agregar sus primeras fotografías de trabajos. Después podemos pulir la ficha individual de cada proyecto y añadir edición completa desde el panel.
