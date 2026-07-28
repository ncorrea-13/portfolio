---
pagetitle: Proyectos
lang: es
---

<nav class="site-nav">
  <a href="index.html">Inicio</a>
  <a href="sobre-mi.html">Sobre mí</a>
  <a href="proyectos.html">Proyectos</a>
  <a href="sobre-el-proyecto.html">Arquitectura del homeserver</a>
  <button class="theme-toggle" id="theme-toggle" aria-label="Cambiar tema" onclick="toggleTheme()">◐</button>
</nav>

# Proyectos

Proyectos personales y académicos, la mayoría open source. Código y detalles en cada repositorio.

## Destacados

<div class="filter-bar" id="filter-bar">
  <button class="filter-btn active" data-filter="all">Todos</button>
  <button class="filter-btn" data-filter="python">Python</button>
  <button class="filter-btn" data-filter="typescript">TypeScript</button>
  <button class="filter-btn" data-filter="TUI/CLI">TUI/CLI</button>
  <button class="filter-btn" data-filter="infra">Infraestructura</button>
  <button class="filter-btn" data-filter="ml">Machine Learning</button>
</div>

<div class="project-card" data-tags="TUI/CLI">

**[bw-tui](https://github.com/ncorrea-13/bw-tui)**
Terminal User Interface que funciona como wrapper para utilizar Bitwarden desde la terminal. _(GPLv3)_

</div>
<div class="project-card" data-tags="TUI/CLI">

**[weathertui](https://github.com/ncorrea-13/weathertui)**
Terminal User Interface basada en meteo-cli. Utiliza OpenweatherMap para mostrar el pronóstico del tiempo en la terminal. _(GPLv3)_
</div>

<div class="project-card" data-tags="infra">

**[homeserver](https://github.com/ncorrea-13/homeserver)** - Configuración y compose files de mi servidor personal. Debian Trixie + Podman rootless. El mismo servidor que hostea esta web. _(MIT License)_

</div>

<div class="project-card" data-tags="infra">

**[dotfiles](https://github.com/ncorrea-13/dotfiles)**
Configuración personal de Linux para Devuan 6 (Excalibur) sobre Wayland. 100% systemd-free. _(Mit License)_

</div>

<div class="project-card" data-tags="typescript">

**[mailMicroservicio](https://github.com/ncorrea-13/mailMicroservicio)**
Microservicio de correo con arquitectura RESTful, trabajo final de Arquitectura de Microservicios (2025). TypeScript. _(GPLv3)_

</div>

<div class="project-card" data-tags="python ml">

**[generadorLibros](https://github.com/ncorrea-13/generadorLibros)**
cGAN y cVAE para síntesis de estructuras de texto, trabajo final de Redes Neuronales Profundas (2025) apoyandose en Jupyter Notebook y Google Colab. _(GPLv3)_

</div>

<script>
(function() {
  var buttons = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.project-card');
  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      buttons.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      cards.forEach(function(card) {
        var tags = card.getAttribute('data-tags');
        card.classList.toggle('hidden', filter !== 'all' && tags.indexOf(filter) === -1);
      });
    });
  });
})();
</script>

## Ver todo

Además de estos cinco proyectos poseo varios trabajos académicos y experimentos menores. El listado completo, siempre actualizado, está en mi cuenta de Github:

[github.com/ncorrea-13](https://github.com/ncorrea-13)

---

_Última actualización: julio 2026 · [MIT License](https://github.com/ncorrea-13/homeserver-landing/blob/main/LICENSE)_
