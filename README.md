# El club de MrBarri · web de la comunidad

Una página para que la gente que viene de Twitch vea los emotes, las coronas de suscripción y las recompensas del canal [mrbarri_](https://www.twitch.tv/mrbarri_).

Es HTML, CSS y JavaScript sin dependencias. No tiene servidor, base de datos, cookies ni seguimiento.

## Estructura
```
index.html          la página (tres secciones: #emotes, #club-vip, #recompensas)
css/estilos.css     estilos (negro, blanco y rojo #D41316; primero móvil)
js/web.js           probador de coronas, pausa de animados y enlaces directos
assets/emotes/      emotes estáticos (224 px, desde las maestras finales)
assets/animados/    GIF originales de 112 px + una imagen fija de cada uno
assets/coronas/     las 6 insignias originales (72 y 36 px)
assets/adornos/     adornos VIP+ y Leyenda originales (72 px)
assets/marca/       cara oficial para el logo y el icono de la pestaña
```

## Enlaces directos (para los paneles de Twitch)
- `…/#emotes` → TUS EMOTES
- `…/#club-vip` → EVOLUCIÓN VIP
- `…/#recompensas` → RECOMPENSAS

## Mantenimiento
- **Recursos:** se regeneran desde los archivos finales con `Twitch con Claude\proyectos\web\preparar_assets.py`.
- **Añadir un emote:** pon su PNG en `assets/emotes/` y copia un bloque `<li class="emote">…</li>` del grupo que toque en `index.html`, con su `alt`.
- **Después de cambiar el CSS o el JS:** sube el número de versión en `index.html` (`estilos.css?v=4` → `?v=5`) para que nadie se quede con la versión vieja guardada.
- **Pruebas automáticas:** `node "Twitch con Claude\proyectos\web\capturas.cjs"`, con el servidor local en marcha. Comprueba los enlaces directos, los cinco anchos (360, 390, 768, 1366 y 1920), las imágenes, el teclado, el movimiento reducido y los errores. Las capturas van a `FINAL\12_WEB_COMUNIDAD_MRBARRI_PRUEBAS\`.
- **Ver la web en local:** `python -m http.server 8765` dentro de esta carpeta y abre http://localhost:8765.
