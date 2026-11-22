# Cómo publicar la web gratis (GitHub Pages)

GitHub Pages es gratis, no lleva anuncios, usa HTTPS y vale perfectamente para una web estática como esta. Netlify o Cloudflare Pages también servirían, pero no aportan nada que haga falta aquí.

**Qué se publica:** solo el contenido de esta carpeta (`index.html`, `css/`, `js/`, `assets/` y estos `.md`). Son 44 archivos y 2 MB, revisados: no contienen datos personales, rutas del PC ni metadatos. **No se publica la carpeta FINAL**.

> En este PC **no están instalados Git ni GitHub CLI**. Hay dos caminos.

## Camino A · Desde la web de GitHub (sin instalar nada)
1. Entra en github.com con tu cuenta, o créala.
2. Arriba a la derecha, **+** → **New repository**.
   - Nombre: `mrbarri-comunidad`.
   - Visibilidad: **Public**. Pages gratis lo necesita, y el contenido es el que quieres enseñar.
   - **Create repository**.
3. En el repositorio vacío: **uploading an existing file**. Arrastra **el contenido** de `FINAL\12_WEB_COMUNIDAD_MRBARRI\` (no la carpeta entera, sino lo que hay dentro: `index.html`, `css`, `js`, `assets`, `README.md`, `GUIA_PUBLICACION.md`). Después, **Commit changes**.
4. **Settings** → **Pages** → en «Build and deployment», Source: **Deploy from a branch**, Branch: **main** / **(root)** → **Save**.
5. En uno o dos minutos aparece la dirección: `https://TU-USUARIO.github.io/mrbarri-comunidad/`.

## Camino B · Que lo publique yo
Hay que instalar **Git para Windows** y **GitHub CLI**, y que inicies sesión tú en GitHub. Yo nunca toco tu contraseña. Con eso creo el repositorio, subo solo estos archivos y activo Pages. Necesito tu permiso para instalarlos y para publicar.

## Enlaces para los paneles de Twitch
Con la dirección real (cambia `TU-USUARIO`):
- TUS EMOTES → `https://TU-USUARIO.github.io/mrbarri-comunidad/#emotes`
- EVOLUCIÓN VIP → `https://TU-USUARIO.github.io/mrbarri-comunidad/#club-vip`
- RECOMPENSAS → `https://TU-USUARIO.github.io/mrbarri-comunidad/#recompensas`

En Twitch: **Acerca de** → **Editar paneles** → en cada panel, pega su enlace en **«La imagen enlaza a»** → **Enviar**.

## Actualizar la web más adelante
- **Desde la web de GitHub:** **Add file** → **Upload files**, y arrastra los archivos cambiados. Se sustituyen.
- **Si cambias el CSS o el JS:** sube antes el número de versión en `index.html` (`?v=4` → `?v=5`).
