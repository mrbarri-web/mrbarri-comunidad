/* El club de MrBarri · interacción mínima (sin dependencias, sin seguimiento) */
(function () {
  "use strict";

  /* --- Probador de coronas: meses + nivel (el adorno se superpone a la corona, sin deformarla) --- */
  var corona = document.getElementById("pr-corona");
  var adorno = document.getElementById("pr-adorno");
  var NOMBRES = { "00_base": "Corona base", "02_meses": "Corona de 2 meses (cobre)", "03_meses": "Corona de 3 meses (plata)",
    "06_meses": "Corona de 6 meses (oro)", "09_meses": "Corona de 9 meses (piedras rojas)", "12_meses": "Corona de 12 meses (leyenda)" };
  var ADORNOS = { "2": ["assets/adornos/adorno_vipplus_72.png", "con el diamante rojo del Club VIP+"],
                  "3": ["assets/adornos/adorno_leyenda_72.png", "con los destellos dorados del Club Leyenda"] };
  function probar() {
    var m = document.querySelector('input[name="meses"]:checked').value;
    var n = document.querySelector('input[name="nivel"]:checked').value;
    corona.src = "assets/coronas/corona_" + m + "_72.png";
    var texto = NOMBRES[m];
    if (ADORNOS[n]) { adorno.src = ADORNOS[n][0]; adorno.hidden = false; texto += " " + ADORNOS[n][1]; }
    else { adorno.hidden = true; }
    corona.alt = texto;
  }
  if (corona) {
    document.querySelectorAll('input[name="meses"], input[name="nivel"]').forEach(function (i) { i.addEventListener("change", probar); });
    probar();
  }

  /* --- Animados: con «reducir movimiento» se ven quietos; se pueden pausar/reanudar --- */
  var anims = Array.prototype.slice.call(document.querySelectorAll(".emote--anim img"));
  var boton = document.getElementById("pausar");
  var quietos = false;
  function ponerQuietos(q) {
    quietos = q;
    anims.forEach(function (img) {
      if (!img.dataset.gif) img.dataset.gif = img.getAttribute("src");
      img.src = q ? img.dataset.fijo : img.dataset.gif;
    });
    if (boton) { boton.textContent = q ? "Ver animaciones" : "Pausar animaciones"; boton.setAttribute("aria-pressed", q ? "true" : "false"); }
  }
  var reducir = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
  if (boton) {
    boton.hidden = false;
    boton.addEventListener("click", function () { ponerQuietos(!quietos); });
  }
  if (reducir && reducir.matches) ponerQuietos(true);

  /* --- Enlaces directos desde Twitch (#emotes, #club-vip, #recompensas): al abrir la página, ir a la sección.
         Se repite cuando termina de cargar todo, por si algo cambió de alto mientras tanto. --- */
  function irAlAncla() {
    var id = decodeURIComponent((location.hash || "").slice(1));
    var el = id && document.getElementById(id);
    if (el) el.scrollIntoView({ block: "start", behavior: "auto" });
  }
  if (location.hash) {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    irAlAncla();
    window.addEventListener("load", function () { irAlAncla(); setTimeout(irAlAncla, 250); });
  }

  /* --- Menú: marca la sección visible --- */
  var enlaces = document.querySelectorAll(".menu a");
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        enlaces.forEach(function (a) { a.setAttribute("aria-current", a.getAttribute("href") === "#" + e.target.id ? "true" : "false"); });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    ["emotes", "club-vip", "recompensas"].forEach(function (id) { var s = document.getElementById(id); if (s) obs.observe(s); });
  }
})();
