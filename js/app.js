/* ── Cours Web — app.js ── */

// ── Course tab switching ────────────────────────────────────────────
const courseData = {
  html: {
    brand: 'Cours HTML',
    highlight: 'HTML',
    subtitle: 'Pour apprenants avec quelques bases',
    desc: 'Un cours structuré en 10 séances progressives pour maîtriser le langage fondamental du web — de la structure à la sémantique.',
    tags: ['Structure', 'Texte', 'Listes', 'Liens', 'Images', 'Tableaux', 'Formulaires', 'Sémantique', 'SEO', 'Accessibilité'],
    nav: [
      { label: 'Séance 1', href: 'pages/seance1.html' },
      { label: 'Séance 2', href: 'pages/seance2.html' },
      { label: 'Séance 3', href: 'pages/seance3.html' },
      { label: 'Séance 4', href: 'pages/seance4.html' },
      { label: 'Séance 5', href: 'pages/seance5.html' },
      { label: 'Séance 6', href: 'pages/seance6.html' },
      { label: 'Séance 7', href: 'pages/seance7.html' },
      { label: 'Séance 8', href: 'pages/seance8.html' },
      { label: 'Séance 9', href: 'pages/seance9.html' },
      { label: 'Séance 10', href: 'pages/seance10.html' },
    ]
  },
  css: {
    brand: 'Cours CSS',
    highlight: 'CSS',
    subtitle: 'Pour apprenants avec quelques bases',
    desc: 'Un cours structuré en 16 sujets pour maîtriser le style et la mise en page — des sélecteurs aux animations.',
    tags: ['CSS de Base', 'Design', 'Unités', 'Pseudo-classes', 'Couleurs', 'Formulaires', 'Box Model', 'Flexbox', 'Typographie', 'Accessibilité', 'Positionnement', 'Attributs', 'Responsive', 'Variables', 'Grid', 'Animations'],
    nav: [
      { label: 'CSS de Base', href: 'pages/css-topics/basic-css.html' },
      { label: 'Design', href: 'pages/css-topics/design.html' },
      { label: 'Unités', href: 'pages/css-topics/units.html' },
      { label: 'Pseudo-classes', href: 'pages/css-topics/pseudo-classes-elements.html' },
      { label: 'Couleurs', href: 'pages/css-topics/colors.html' },
      { label: 'Formulaires', href: 'pages/css-topics/styling-forms.html' },
      { label: 'Box Model', href: 'pages/css-topics/box-model.html' },
      { label: 'Flexbox', href: 'pages/css-topics/flexbox.html' },
      { label: 'Typographie', href: 'pages/css-topics/typography.html' },
      { label: 'Accessibilité', href: 'pages/css-topics/accessibility.html' },
      { label: 'Position', href: 'pages/css-topics/positioning.html' },
      { label: 'Attributs', href: 'pages/css-topics/attribute-selectors.html' },
      { label: 'Responsive', href: 'pages/css-topics/responsive-design.html' },
      { label: 'Variables', href: 'pages/css-topics/variables.html' },
      { label: 'Grid', href: 'pages/css-topics/grid.html' },
      { label: 'Animations', href: 'pages/css-topics/animations.html' },
    ]
  }
};

function switchCourse(courseId) {
  const data = courseData[courseId];
  if (!data) return;

  document.querySelectorAll('.course-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.course-tab[data-course="${courseId}"]`).classList.add('active');

  document.querySelectorAll('.course-content').forEach(c => c.classList.remove('active'));
  document.querySelector(`.course-content[data-course="${courseId}"]`).classList.add('active');

  document.getElementById('course-brand').textContent = data.brand;
  document.querySelector('.hero-subtitle').textContent = data.subtitle;
  document.getElementById('hero-highlight').textContent = data.highlight;
  document.getElementById('hero-desc').textContent = data.desc;

  const tagsContainer = document.getElementById('hero-tags');
  tagsContainer.innerHTML = data.tags.map(t => `<span class="tag-pill">${t}</span>`).join('');

  const nav = document.getElementById('topbar-nav');
  nav.innerHTML = `<a href="index.html" class="active">Accueil</a>` +
    data.nav.map(n => `<a href="${n.href}">${n.label}</a>`).join('');

  updateProgressBadges();
}

document.addEventListener('click', (e) => {
  const tab = e.target.closest('.course-tab');
  if (tab) switchCourse(tab.dataset.course);
});


// ── Theme toggle ────────────────────────────────────────────────────
(function initTheme() {
  const saved = localStorage.getItem('cetemoh-theme');
  if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');

  const topbar = document.querySelector('.topbar');
  if (!topbar) return;

  const btn = document.createElement('button');
  btn.className = 'theme-toggle';
  btn.setAttribute('aria-label', 'Basculer thème clair/sombre');
  btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>`;

  btn.addEventListener('click', () => {
    const html = document.documentElement;
    const isLight = html.getAttribute('data-theme') === 'light';
    if (isLight) {
      html.removeAttribute('data-theme');
      localStorage.setItem('cetemoh-theme', 'dark');
    } else {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem('cetemoh-theme', 'light');
    }
  });

  const hamburger = topbar.querySelector('.hamburger');
  if (hamburger) {
    hamburger.parentNode.insertBefore(btn, hamburger);
  } else {
    topbar.appendChild(btn);
  }
})();


// ── Search bar ──────────────────────────────────────────────────────
window.__BASE = (function(){
  var p = window.location.pathname;
  if (p.startsWith('/CETEMOH_Web')) return '/CETEMOH_Web';
  if (p.startsWith('/CETEMOH_Html')) return '/CETEMOH_Html';
  return '';
})();
const _searchData = [
  // ── HTML (pages/) ──
  { t:'Client/Serveur', u:'pages/seance1.html#s1-client', s:'S1·01' },
  { t:'Navigateur', u:'pages/seance1.html#s1-navig', s:'S1·02' },
  { t:'Fichier HTML', u:'pages/seance1.html#s1-premier', s:'S1·03' },
  { t:'DOCTYPE', u:'pages/seance1.html#s1-doctype', s:'S1·04' },
  { t:'Encodage UTF-8', u:'pages/seance1.html#s1-langue', s:'S1·05' },
  { t:'Meta tag', u:'pages/seance1.html#s1-meta', s:'S1·06' },
  { t:'DevTools', u:'pages/seance1.html#s1-tools', s:'S1·07' },
  { t:'Live Server', u:'pages/seance1.html#s1-bonnes', s:'S1·08' },
  { t:'Balise ouvrante', u:'pages/seance2.html#s2-balises', s:'S2·01' },
  { t:'Élément HTML', u:'pages/seance2.html#s2-elements', s:'S2·02' },
  { t:'Attribut HTML', u:'pages/seance2.html#s2-attributs', s:'S2·03' },
  { t:'Commentaire HTML', u:'pages/seance2.html#s2-comment', s:'S2·04' },
  { t:'Entité HTML', u:'pages/seance2.html#s2-entites', s:'S2·05' },
  { t:'Balise orpheline', u:'pages/seance2.html#s2-orphelins', s:'S2·06' },
  { t:'Indentation', u:'pages/seance2.html#s2-indent', s:'S2·07' },
  { t:'Validation W3C', u:'pages/seance2.html#s2-w3c', s:'S2·08' },
  { t:'Hiérarchie des titres', u:'pages/seance3.html#s3-hierarchie', s:'S3·01' },
  { t:'Paragraphe <p>', u:'pages/seance3.html#s3-paragraphes', s:'S3·02' },
  { t:'<strong>', u:'pages/seance3.html#s3-valeur', s:'S3·03' },
  { t:'<blockquote>', u:'pages/seance3.html#s3-citations', s:'S3·04' },
  { t:'<code>', u:'pages/seance3.html#s3-code', s:'S3·05' },
  { t:'<abbr>', u:'pages/seance3.html#s3-abrev', s:'S3·06' },
  { t:'<ins>/<del>', u:'pages/seance3.html#s3-modif', s:'S3·07' },
  { t:'<hr>', u:'pages/seance3.html#s3-hr', s:'S3·08' },
  { t:'Liste <ul>', u:'pages/seance4.html#s4-ul', s:'S4·01' },
  { t:'Liste <ol>', u:'pages/seance4.html#s4-ol', s:'S4·02' },
  { t:'Imbrication listes', u:'pages/seance4.html#s4-imbric', s:'S4·03' },
  { t:'Liste <dl>', u:'pages/seance4.html#s4-dl', s:'S4·04' },
  { t:'Lien <a>', u:'pages/seance4.html#s4-externes', s:'S4·05' },
  { t:'Chemin relatif', u:'pages/seance4.html#s4-internes', s:'S4·06' },
  { t:'Ancre #id', u:'pages/seance4.html#s4-ancres', s:'S4·07' },
  { t:'target="_blank"', u:'pages/seance4.html#s4-attributs', s:'S4·08' },
  { t:'<img>', u:'pages/seance5.html#s5-img', s:'S5·01' },
  { t:'<figure>', u:'pages/seance5.html#s5-figure', s:'S5·02' },
  { t:'JPEG/PNG/WebP', u:'pages/seance5.html#s5-formats', s:'S5·03' },
  { t:'Srcset', u:'pages/seance5.html#s5-srcset', s:'S5·04' },
  { t:'<picture>', u:'pages/seance5.html#s5-picture', s:'S5·05' },
  { t:'<video>', u:'pages/seance5.html#s5-video', s:'S5·06' },
  { t:'<audio>', u:'pages/seance5.html#s5-audio', s:'S5·07' },
  { t:'<iframe>', u:'pages/seance5.html#s5-iframe', s:'S5·08' },
  { t:'Tableau <table>', u:'pages/seance6.html#s6-basique', s:'S6·01' },
  { t:'<thead>', u:'pages/seance6.html#s6-thead', s:'S6·02' },
  { t:'<th>', u:'pages/seance6.html#s6-th', s:'S6·03' },
  { t:'Colspan', u:'pages/seance6.html#s6-colspan', s:'S6·04' },
  { t:'Rowspan', u:'pages/seance6.html#s6-rowspan', s:'S6·05' },
  { t:'<caption>', u:'pages/seance6.html#s6-caption', s:'S6·06' },
  { t:'Styler tableau', u:'pages/seance6.html#s6-styler', s:'S6·07' },
  { t:'Accessibilité tableaux', u:'pages/seance6.html#s6-a11y', s:'S6·08' },
  { t:'<form>', u:'pages/seance7.html#s7-form', s:'S7·01' },
  { t:'<input>', u:'pages/seance7.html#s7-input', s:'S7·02' },
  { t:'<label>', u:'pages/seance7.html#s7-label', s:'S7·03' },
  { t:'<button>', u:'pages/seance7.html#s7-button', s:'S7·04' },
  { t:'<select>', u:'pages/seance7.html#s7-select', s:'S7·05' },
  { t:'<textarea>', u:'pages/seance7.html#s7-textarea', s:'S7·06' },
  { t:'<fieldset>', u:'pages/seance7.html#s7-fieldset', s:'S7·07' },
  { t:'Placeholder', u:'pages/seance7.html#s7-placeholder', s:'S7·08' },
  { t:'Input date/color/range', u:'pages/seance8.html#s8-types', s:'S8·01' },
  { t:'Checkbox/Radio', u:'pages/seance8.html#s8-check', s:'S8·02' },
  { t:'Input file', u:'pages/seance8.html#s8-file', s:'S8·03' },
  { t:'Validation required', u:'pages/seance8.html#s8-required', s:'S8·04' },
  { t:'Pattern regex', u:'pages/seance8.html#s8-pattern', s:'S8·05' },
  { t:'Min/Max/Step', u:'pages/seance8.html#s8-minmax', s:'S8·06' },
  { t:'autocomplete/disabled', u:'pages/seance8.html#s8-attributs', s:'S8·07' },
  { t:'Organisation formulaires', u:'pages/seance8.html#s8-orga', s:'S8·08' },
  { t:'<header>', u:'pages/seance9.html#s9-header', s:'S9·01' },
  { t:'<nav>', u:'pages/seance9.html#s9-nav', s:'S9·02' },
  { t:'<main>', u:'pages/seance9.html#s9-main', s:'S9·03' },
  { t:'<article>', u:'pages/seance9.html#s9-article', s:'S9·04' },
  { t:'<section>', u:'pages/seance9.html#s9-section', s:'S9·05' },
  { t:'<aside>', u:'pages/seance9.html#s9-aside', s:'S9·06' },
  { t:'<footer>', u:'pages/seance9.html#s9-footer', s:'S9·07' },
  { t:'<time>/<details>', u:'pages/seance9.html#s9-time', s:'S9·08' },
  { t:'SEO', u:'pages/seance10.html#s10-meta', s:'S10·01' },
  { t:'Open Graph', u:'pages/seance10.html#s10-og', s:'S10·02' },
  { t:'Twitter Cards', u:'pages/seance10.html#s10-twitter', s:'S10·03' },
  { t:'JSON-LD', u:'pages/seance10.html#s10-jsonld', s:'S10·04' },
  { t:'ARIA', u:'pages/seance10.html#s10-aria', s:'S10·05' },
  { t:'WCAG', u:'pages/seance10.html#s10-wcag', s:'S10·06' },
  { t:'Lecteur d\'écran', u:'pages/seance10.html#s10-screen', s:'S10·07' },
  { t:'Lighthouse', u:'pages/seance10.html#s10-lighthouse', s:'S10·08' },

  // ── CSS (pages/css/) ──
  { t:'CSS', u:'pages/css/seance1-css.html#s1-role', s:'S1·01' },
  { t:'Règle CSS', u:'pages/css/seance1-css.html#s1-syntax', s:'S1·02' },
  { t:'CSS inline/interne/externe', u:'pages/css/seance1-css.html#s1-methods', s:'S1·03' },
  { t:'Cascade CSS', u:'pages/css/seance1-css.html#s1-cascade', s:'S1·04' },
  { t:'Spécificité', u:'pages/css/seance1-css.html#s1-specific', s:'S1·05' },
  { t:'!important', u:'pages/css/seance1-css.html#s1-important', s:'S1·06' },
  { t:'DevTools CSS', u:'pages/css/seance1-css.html#s1-inspect', s:'S1·07' },
  { t:'Normalize.css', u:'pages/css/seance1-css.html#s1-normalize', s:'S1·08' },
  { t:'Sélecteur de type', u:'pages/css/seance2-css.html#s2-tag', s:'S2·01' },
  { t:'Sélecteur .class', u:'pages/css/seance2-css.html#s2-class', s:'S2·02' },
  { t:'Sélecteur #id', u:'pages/css/seance2-css.html#s2-id', s:'S2·03' },
  { t:'Sélecteur *', u:'pages/css/seance2-css.html#s2-universal', s:'S2·04' },
  { t:'Sélecteur [attr]', u:'pages/css/seance2-css.html#s2-attr', s:'S2·05' },
  { t:'Combinateur descendant', u:'pages/css/seance2-css.html#s2-desc', s:'S2·06' },
  { t:'Combinateurs > + ~', u:'pages/css/seance2-css.html#s2-combi', s:'S2·07' },
  { t:'Pseudo-classe :hover', u:'pages/css/seance2-css.html#s2-pseudo', s:'S2·08' },
  { t:'Couleurs CSS', u:'pages/css/seance3-css.html#s3-colors', s:'S3·01' },
  { t:'Unités px', u:'pages/css/seance3-css.html#s3-abs', s:'S3·02' },
  { t:'Unités em/rem', u:'pages/css/seance3-css.html#s3-rel', s:'S3·03' },
  { t:'font-family', u:'pages/css/seance3-css.html#s3-font', s:'S3·04' },
  { t:'font-size/line-height', u:'pages/css/seance3-css.html#s3-size', s:'S3·05' },
  { t:'font-weight', u:'pages/css/seance3-css.html#s3-weight', s:'S3·06' },
  { t:'text-align', u:'pages/css/seance3-css.html#s3-text', s:'S3·07' },
  { t:'letter-spacing', u:'pages/css/seance3-css.html#s3-space', s:'S3·08' },
  { t:'Box Model', u:'pages/css/seance4-css.html#s4-content', s:'S4·01' },
  { t:'Padding', u:'pages/css/seance4-css.html#s4-padding', s:'S4·02' },
  { t:'Border', u:'pages/css/seance4-css.html#s4-border', s:'S4·03' },
  { t:'border-radius', u:'pages/css/seance4-css.html#s4-radius', s:'S4·04' },
  { t:'Margin', u:'pages/css/seance4-css.html#s4-margin', s:'S4·05' },
  { t:'box-sizing', u:'pages/css/seance4-css.html#s4-boxsize', s:'S4·06' },
  { t:'min/max-width', u:'pages/css/seance4-css.html#s4-minmax', s:'S4·07' },
  { t:'Overflow', u:'pages/css/seance4-css.html#s4-overflow', s:'S4·08' },
  { t:'background-color', u:'pages/css/seance5-css.html#s5-color', s:'S5·01' },
  { t:'background-image', u:'pages/css/seance5-css.html#s5-image', s:'S5·02' },
  { t:'background-repeat', u:'pages/css/seance5-css.html#s5-repeat', s:'S5·03' },
  { t:'background-size', u:'pages/css/seance5-css.html#s5-size', s:'S5·04' },
  { t:'background-position', u:'pages/css/seance5-css.html#s5-pos', s:'S5·05' },
  { t:'linear-gradient', u:'pages/css/seance5-css.html#s5-linear', s:'S5·06' },
  { t:'radial-gradient', u:'pages/css/seance5-css.html#s5-radial', s:'S5·07' },
  { t:'box-shadow', u:'pages/css/seance5-css.html#s5-shadow', s:'S5·08' },
  { t:'Display block/inline', u:'pages/css/seance6-css.html#s6-display', s:'S6·01' },
  { t:'Position static', u:'pages/css/seance6-css.html#s6-static', s:'S6·02' },
  { t:'Position relative', u:'pages/css/seance6-css.html#s6-relative', s:'S6·03' },
  { t:'Position absolute', u:'pages/css/seance6-css.html#s6-absolute', s:'S6·04' },
  { t:'Position fixed', u:'pages/css/seance6-css.html#s6-fixed', s:'S6·05' },
  { t:'Position sticky', u:'pages/css/seance6-css.html#s6-sticky', s:'S6·06' },
  { t:'z-index', u:'pages/css/seance6-css.html#s6-zindex', s:'S6·07' },
  { t:'Float', u:'pages/css/seance6-css.html#s6-float', s:'S6·08' },
  { t:'Flexbox', u:'pages/css/seance7-css.html#s7-flex', s:'S7·01' },
  { t:'flex-direction', u:'pages/css/seance7-css.html#s7-direction', s:'S7·02' },
  { t:'flex-wrap', u:'pages/css/seance7-css.html#s7-wrap', s:'S7·03' },
  { t:'justify-content', u:'pages/css/seance7-css.html#s7-justify', s:'S7·04' },
  { t:'align-items', u:'pages/css/seance7-css.html#s7-align', s:'S7·05' },
  { t:'flex-grow/shrink', u:'pages/css/seance7-css.html#s7-grow', s:'S7·06' },
  { t:'flex-basis', u:'pages/css/seance7-css.html#s7-basis', s:'S7·07' },
  { t:'order', u:'pages/css/seance7-css.html#s7-order', s:'S7·08' },
  { t:'CSS Grid', u:'pages/css/seance8-css.html#s8-grid', s:'S8·01' },
  { t:'grid-template', u:'pages/css/seance8-css.html#s8-template', s:'S8·02' },
  { t:'Gap', u:'pages/css/seance8-css.html#s8-gap', s:'S8·03' },
  { t:'grid-column/row', u:'pages/css/seance8-css.html#s8-span', s:'S8·04' },
  { t:'grid-area', u:'pages/css/seance8-css.html#s8-area', s:'S8·05' },
  { t:'auto-fit/fill', u:'pages/css/seance8-css.html#s8-autofit', s:'S8·06' },
  { t:'minmax()', u:'pages/css/seance8-css.html#s8-minmax', s:'S8·07' },
  { t:'Grille implicite', u:'pages/css/seance8-css.html#s8-implicit', s:'S8·08' },
  { t:'Viewport meta', u:'pages/css/seance9-css.html#s9-viewport', s:'S9·01' },
  { t:'@media', u:'pages/css/seance9-css.html#s9-queries', s:'S9·02' },
  { t:'Breakpoint', u:'pages/css/seance9-css.html#s9-break', s:'S9·03' },
  { t:'Mobile-first', u:'pages/css/seance9-css.html#s9-mobile', s:'S9·04' },
  { t:'Desktop-first', u:'pages/css/seance9-css.html#s9-desktop', s:'S9·05' },
  { t:'vw/vh/%', u:'pages/css/seance9-css.html#s9-units', s:'S9·06' },
  { t:'Image responsive', u:'pages/css/seance9-css.html#s9-images', s:'S9·07' },
  { t:'Container queries', u:'pages/css/seance9-css.html#s9-modular', s:'S9·08' },
  { t:'Transition', u:'pages/css/seance10-css.html#s10-trans', s:'S10·01' },
  { t:'Transform', u:'pages/css/seance10-css.html#s10-transform', s:'S10·02' },
  { t:'@keyframes', u:'pages/css/seance10-css.html#s10-keyframes', s:'S10·03' },
  { t:'Animation CSS', u:'pages/css/seance10-css.html#s10-anim', s:'S10·04' },
  { t:'Variable CSS', u:'pages/css/seance10-css.html#s10-vars', s:'S10·05' },
  { t:'calc()/min()/max()', u:'pages/css/seance10-css.html#s10-calc', s:'S10·06' },
  { t:'Filter CSS', u:'pages/css/seance10-css.html#s10-filters', s:'S10·07' },
  { t:'BEM', u:'pages/css/seance10-css.html#s10-bem', s:'S10·08' },

  // ── CSS Topics (pages/css-topics/) ──
  { t:'CSS de Base', u:'pages/css-topics/basic-css.html#s1-role', s:'CSS·01' },
  { t:'Syntaxe CSS', u:'pages/css-topics/basic-css.html#s1-syntax', s:'CSS·01' },
  { t:'Cascade CSS', u:'pages/css-topics/basic-css.html#s1-cascade', s:'CSS·01' },
  { t:'Spécificité CSS', u:'pages/css-topics/basic-css.html#s1-specific', s:'CSS·01' },
  { t:'Design CSS', u:'pages/css-topics/design.html', s:'CSS·02' },
  { t:'Background CSS', u:'pages/css-topics/design.html', s:'CSS·02' },
  { t:'Dégradé CSS', u:'pages/css-topics/design.html', s:'CSS·02' },
  { t:'Ombre CSS', u:'pages/css-topics/design.html', s:'CSS·02' },
  { t:'Unité px/em/rem', u:'pages/css-topics/units.html', s:'CSS·03' },
  { t:'Unité vw/vh', u:'pages/css-topics/units.html', s:'CSS·03' },
  { t:'Pseudo-classe :hover', u:'pages/css-topics/pseudo-classes-elements.html', s:'CSS·04' },
  { t:'Pseudo-élément ::before', u:'pages/css-topics/pseudo-classes-elements.html', s:'CSS·04' },
  { t:'Couleur hex/rgb/hsl', u:'pages/css-topics/colors.html', s:'CSS·05' },
  { t:'Opacité CSS', u:'pages/css-topics/colors.html', s:'CSS·05' },
  { t:'Formulaire CSS', u:'pages/css-topics/styling-forms.html', s:'CSS·06' },
  { t:'Input CSS', u:'pages/css-topics/styling-forms.html', s:'CSS·06' },
  { t:'Bouton CSS', u:'pages/css-topics/styling-forms.html', s:'CSS·06' },
  { t:'Box Model', u:'pages/css-topics/box-model.html', s:'CSS·07' },
  { t:'Padding/Margin', u:'pages/css-topics/box-model.html', s:'CSS·07' },
  { t:'Border CSS', u:'pages/css-topics/box-model.html', s:'CSS·07' },
  { t:'Flexbox', u:'pages/css-topics/flexbox.html', s:'CSS·08' },
  { t:'justify-content', u:'pages/css-topics/flexbox.html', s:'CSS·08' },
  { t:'align-items', u:'pages/css-topics/flexbox.html', s:'CSS·08' },
  { t:'Typographie CSS', u:'pages/css-topics/typography.html', s:'CSS·09' },
  { t:'Google Fonts', u:'pages/css-topics/typography.html', s:'CSS·09' },
  { t:'Accessibilité CSS', u:'pages/css-topics/accessibility.html', s:'CSS·10' },
  { t:'Contraste CSS', u:'pages/css-topics/accessibility.html', s:'CSS·10' },
  { t:'Position CSS', u:'pages/css-topics/positioning.html', s:'CSS·11' },
  { t:'Position absolute', u:'pages/css-topics/positioning.html', s:'CSS·11' },
  { t:'z-index', u:'pages/css-topics/positioning.html', s:'CSS·11' },
  { t:'Sélecteur [attr]', u:'pages/css-topics/attribute-selectors.html', s:'CSS·12' },
  { t:'Media Query', u:'pages/css-topics/responsive-design.html', s:'CSS·13' },
  { t:'Mobile-first', u:'pages/css-topics/responsive-design.html', s:'CSS·13' },
  { t:'Variable CSS', u:'pages/css-topics/variables.html', s:'CSS·14' },
  { t:'CSS Grid', u:'pages/css-topics/grid.html', s:'CSS·15' },
  { t:'grid-template', u:'pages/css-topics/grid.html', s:'CSS·15' },
  { t:'Animation CSS', u:'pages/css-topics/animations.html', s:'CSS·16' },
  { t:'@keyframes', u:'pages/css-topics/animations.html', s:'CSS·16' },
  { t:'Transition CSS', u:'pages/css-topics/animations.html', s:'CSS·16' },

];

(function initSearch() {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;

  const wrap = document.createElement('div');
  wrap.className = 'search-wrap';
  wrap.innerHTML = `<input type="text" placeholder="Rechercher..." id="search-input" spellcheck="false" autocomplete="off">
    <span class="search-icon">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    </span>`;

  const dd = document.createElement('div');
  dd.id = 'search-dropdown';

  const hamburger = topbar.querySelector('.hamburger');
  if (hamburger) { hamburger.parentNode.insertBefore(wrap, hamburger); }
  else { topbar.appendChild(wrap); }
  wrap.appendChild(dd);

  const input = wrap.querySelector('input');
  const sidebar = document.querySelector('.sidebar');
  let hideTimer;

  if (sidebar) {
    const t = sidebar.querySelector('.sidebar-title');
    const h = document.createElement('div');
    h.className = 'sidebar-search-hint';
    h.textContent = 'Filtrage par recherche...';
    t ? t.after(h) : sidebar.prepend(h);
  }

  function _escHtml(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function siteUrl(path) {
    if (window.__BASE) return window.__BASE + '/' + path;
    const href = window.location.href;
    if (window.location.protocol === 'file:') {
      const root = href.includes('/pages/') ? href.split('/pages/')[0] + '/' : href.replace(/[^/]*$/, '');
      return new URL(path, root).href;
    }
    const currentPath = window.location.pathname;
    const root = currentPath.includes('/pages/') ? currentPath.split('/pages/')[0] + '/' : currentPath.replace(/[^/]*$/, '');
    return root + path;
  }
  function renderDropdown(q) {
    const trimmed = q.toLowerCase().trim();
    if (!trimmed) { dd.hidden = true; return; }
    let results = _searchData.filter(i => i.t.toLowerCase().includes(trimmed)).slice(0, 10);
    if (!results.length) { dd.hidden = true; return; }
    dd.innerHTML = results.map(i =>
      `<a class="search-dd-item" href="${siteUrl(i.u)}">
        <span class="search-dd-title">${_escHtml(i.t)}</span>
        <span class="search-dd-scope">${i.s}</span>
      </a>`
    ).join('');
    dd.hidden = false;
  }

  input.addEventListener('input', () => {
    renderDropdown(input.value);
    if (!sidebar) return;
    const items = sidebar.querySelectorAll('.sidebar-item');
    let cnt = 0;
    const v = input.value.toLowerCase().trim();
    items.forEach(el => { const m = !v || el.textContent.toLowerCase().includes(v); el.classList.toggle('hidden', !m); if (m) cnt++; });
    const hint = sidebar.querySelector('.sidebar-search-hint');
    if (hint) hint.textContent = v ? cnt + ' résultat(s)' : 'Filtrage par recherche...';
  });

  input.addEventListener('keydown', e => { if (e.key === 'Escape') { dd.hidden = true; input.blur(); } });
  input.addEventListener('blur', () => { hideTimer = setTimeout(() => dd.hidden = true, 200); });
  input.addEventListener('focus', () => { clearTimeout(hideTimer); if (input.value.trim()) renderDropdown(input.value); });
  document.addEventListener('click', e => { if (!wrap.contains(e.target)) dd.hidden = true; });
})();


// ── Copy to clipboard ───────────────────────────────────────────────
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.copy-btn');
  if (!btn) return;

  const block = btn.closest('.code-block');
  const pre = block?.querySelector('pre') || block?.querySelector('.code-editor');
  if (!pre) return;

  navigator.clipboard.writeText(pre.textContent).then(() => {
    btn.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(0.9)' },
      { transform: 'scale(1.1)' },
      { transform: 'scale(1)' }
    ], {
      duration: 400,
      easing: 'cubic-bezier(.34,1.56,.64,1)'
    });

    btn.textContent = 'COPIÉ ✓';
    btn.classList.add('copied');

    setTimeout(() => {
      btn.textContent = 'COPIER';
      btn.classList.remove('copied');
    }, 2000);
  });
});


// ── Reading progress bar ────────────────────────────────────────────
const fill = document.getElementById('progress-fill');

if (fill) {
  let current = 0;
  let ticking = false;

  const update = () => {
    const total = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const target = (window.scrollY / total) * 100;

    current += (target - current) * 0.1;
    fill.style.width = current + '%';

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  });
}


// ── Active sidebar link on scroll ───────────────────────────────────
const sidebarLinks = document.querySelectorAll('.sidebar-item[href^="#"]');

const sections = [...sidebarLinks]
  .map(l => document.querySelector(l.getAttribute('href')))
  .filter(Boolean);

if (sections.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      sidebarLinks.forEach(l => l.classList.remove('active'));

      const active = [...sidebarLinks].find(
        l => l.getAttribute('href') === '#' + entry.target.id
      );

      if (active) {
        active.classList.add('active');
        active.scrollIntoView({ block: 'nearest' });
      }
    });
  }, {
    rootMargin: '-56px 0px -70% 0px',
    threshold: 0
  });

  sections.forEach(s => observer.observe(s));
}


// ── Sidebar toggle ─────────────────────────────────────────────────
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');
const sidebarToggle = document.querySelector('.sidebar-toggle');

function openSidebar() {
  if (sidebar) sidebar.classList.add('open');
}

function closeSidebar() {
  if (sidebar) sidebar.classList.remove('open');
}

function toggleSidebar() {
  if (sidebar) sidebar.classList.toggle('open');
}

if (sidebarToggle) {
  sidebarToggle.addEventListener('click', toggleSidebar);
}

if (hamburger) {
  hamburger.addEventListener('click', toggleSidebar);
}

document.addEventListener('click', (e) => {
  if (!sidebar) return;
  if (sidebar.classList.contains('open') &&
      !sidebar.contains(e.target) &&
      !hamburger?.contains(e.target) &&
      !sidebarToggle?.contains(e.target)) {
    closeSidebar();
  }
});

if (sidebar) {
  sidebar.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', closeSidebar)
  );
}


// ── Progress tracking (localStorage) ────────────────────────────────
function getProgress() {
  try {
    return JSON.parse(localStorage.getItem('cetemoh-progress') || '{}');
  } catch { return {}; }
}

function setProgress(progress) {
  localStorage.setItem('cetemoh-progress', JSON.stringify(progress));
}

function markSessionComplete(sessionId) {
  const p = getProgress();
  p[sessionId] = true;
  setProgress(p);
  updateProgressBadges();
}

function isSessionComplete(sessionId) {
  return !!getProgress()[sessionId];
}

function updateProgressBadges() {
  document.querySelectorAll('.session-card').forEach(card => {
    const link = card.tagName === 'A' ? card : card.querySelector('a');
    if (!link) return;
    const href = (link.getAttribute('href') || '').split('/').pop();
    let badge = card.querySelector('.progress-badge');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'progress-badge';
      badge.textContent = '✓ Fini';
      card.appendChild(badge);
    }
    badge.classList.toggle('done', isSessionComplete(href));
  });
}

document.querySelectorAll('.session-card').forEach(card => {
  const a = card.tagName === 'A' ? card : card.querySelector('a');
  if (a) a.addEventListener('click', () => markSessionComplete((a.getAttribute('href') || '').split('/').pop()));
});

updateProgressBadges();

// On session pages: mark complete when scrolling past 80%
if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
  let progressMarked = false;
  window.addEventListener('scroll', () => {
    if (progressMarked) return;
    const scrollPct = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
    if (scrollPct > 0.8) {
      const path = window.location.pathname.split('/').pop() || 'index.html';
      markSessionComplete(path);
      progressMarked = true;
    }
  }, { passive: true });
}


// ── Quiz handling ──────────────────────────────────────────────────
function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function getSessions() {
  return {
    // ===================== HTML =====================
    'html-01': {
      title: 'Fondamentaux du Web',
      questions: [
        { q: 'Que signifie HTTP ?', options: ['HyperText Transfer Protocol', 'HyperText Transmission Process', 'High Transfer Text Protocol'], correct: 0 },
        { q: 'Quel protocole est utilisé pour naviguer sur le Web ?', options: ['FTP', 'HTTP', 'SMTP'], correct: 1 },
        { q: 'Quel port par défaut utilise HTTP ?', options: ['21', '80', '443'], correct: 1 },
        { q: 'Quel est le r\u00f4le d\'un serveur DNS ?', options: ['Traduire les noms de domaine en IP', 'H\u00e9berger des pages web', 'Chiffrer les donn\u00e9es'], correct: 0 },
        { q: 'Qu\'est-ce qu\'un navigateur web ?', options: ['Un serveur', 'Un client HTTP', 'Un langage de programmation'], correct: 1 },
        { q: 'Quel mod\u00e8le d\u00e9finit l\'\u00e9change client-serveur ?', options: ['P2P', 'Requ\u00eate-R\u00e9ponse', 'Publication-Abonnement'], correct: 1 },
        { q: '\u00c0 quoi sert Live Server ?', options: ['D\u00e9ployer en production', 'Recharger automatiquement le navigateur', 'Compresser les images'], correct: 1 },
        { q: 'Quel en-t\u00eate HTTP indique le statut d\'une r\u00e9ponse ?', options: ['Status-Line', 'Content-Type', 'User-Agent'], correct: 0 },
        { q: 'Que signifie URL ?', options: ['Uniform Resource Locator', 'Universal Resource Link', 'Uniform Reference Locator'], correct: 0 },
        { q: 'Quel code HTTP signifie "Not Found" ?', options: ['200', '301', '404'], correct: 2 }
      ]
    },
    'html-02': {
      title: 'Syntaxe & Structure HTML',
      questions: [
        { q: 'Que d\u00e9clare le DOCTYPE ?', options: ['Le type de fichier', 'La version HTML utilis\u00e9e', 'Le jeu de caract\u00e8res'], correct: 1 },
        { q: 'Quelle balise contient les m\u00e9ta-donn\u00e9es ?', options: ['head', 'body', 'meta'], correct: 0 },
        { q: 'Qu\'est-ce qu\'une balise orpheline ?', options: ['Une balise sans contenu', 'Une balise qui ferme seule', 'Une balise inconnue'], correct: 1 },
        { q: 'O\u00f9 place-t-on le contenu visible de la page ?', options: ['head', 'body', 'footer'], correct: 1 },
        { q: 'Quel attribut d\u00e9finit la langue de la page ?', options: ['charset', 'lang', 'dir'], correct: 1 },
        { q: 'Comment \u00e9crire un commentaire HTML ?', options: ['/* commentaire */', '<!-- commentaire -->', '# commentaire'], correct: 1 },
        { q: '\u00c0 quoi sert la balise &lt;meta charset&gt; ?', options: ['D\u00e9finir l\'encodage des caract\u00e8res', 'D\u00e9finir le titre', 'Ajouter un mot-cl\u00e9'], correct: 0 },
        { q: 'Quel attribut est obligatoire sur &lt;html&gt; ?', options: ['lang', 'dir', 'class'], correct: 0 },
        { q: 'Qu\'est-ce que l\'indentation en HTML ?', options: ['Un outil de d\u00e9bogage', 'Une convention de formatage', 'Une balise sp\u00e9ciale'], correct: 1 },
        { q: 'Les attributs HTML s\'\u00e9crivent dans...', options: ['La balise ouvrante', 'La balise fermante', 'Entre les balises'], correct: 0 }
      ]
    },
    'html-03': {
      title: 'Texte, Titres & Paragraphes',
      questions: [
        { q: 'Quelle balise repr\u00e9sente un titre de niveau 1 ?', options: ['&lt;heading&gt;', '&lt;h1&gt;', '&lt;title&gt;'], correct: 1 },
        { q: 'Combien de niveaux de titres existe-t-il en HTML ?', options: ['3', '6', '9'], correct: 1 },
        { q: 'Quelle balise met un texte en gras ?', options: ['&lt;em&gt;', '&lt;strong&gt;', '&lt;b&gt;'], correct: 1 },
        { q: 'Quelle balise met un texte en italique ?', options: ['&lt;strong&gt;', '&lt;em&gt;', '&lt;mark&gt;'], correct: 1 },
        { q: '\u00c0 quoi sert &lt;br&gt; ?', options: ['Ajouter un saut de ligne', 'Ajouter une ligne horizontale', 'Ajouter un paragraphe'], correct: 0 },
        { q: '\u00c0 quoi sert &lt;hr&gt; ?', options: ['Saut de ligne', 'S\u00e9paration th\u00e9matique horizontale', 'Titre secondaire'], correct: 1 },
        { q: 'Quelle balise affiche du code informatique ?', options: ['&lt;code&gt;', '&lt;pre&gt;', '&lt;kbd&gt;'], correct: 0 },
        { q: 'Quelle balise pr\u00e9serve les espaces et sauts de ligne ?', options: ['&lt;code&gt;', '&lt;pre&gt;', '&lt;blockquote&gt;'], correct: 1 },
        { q: 'Quelle balise indique une abr\u00e9viation ?', options: ['&lt;abbr&gt;', '&lt;acronym&gt;', '&lt;short&gt;'], correct: 0 },
        { q: 'Quelles balises indiquent du texte ins\u00e9r\u00e9 et supprim\u00e9 ?', options: ['&lt;ins&gt; &lt;del&gt;', '&lt;add&gt; &lt;rem&gt;', '&lt;new&gt; &lt;old&gt;'], correct: 0 }
      ]
    },
    'html-04': {
      title: 'Listes & Liens',
      questions: [
        { q: 'Quelle balise cr\u00e9e une liste non ordonn\u00e9e ?', options: ['&lt;ol&gt;', '&lt;ul&gt;', '&lt;li&gt;'], correct: 1 },
        { q: 'Quelle balise cr\u00e9e une liste ordonn\u00e9e ?', options: ['&lt;ul&gt;', '&lt;ol&gt;', '&lt;dl&gt;'], correct: 1 },
        { q: 'Quelle balise d\u00e9finit un \u00e9l\u00e9ment de liste ?', options: ['&lt;item&gt;', '&lt;li&gt;', '&lt;el&gt;'], correct: 1 },
        { q: '\u00c0 quoi sert &lt;dl&gt; ?', options: ['Liste ordonn\u00e9e', 'Liste de d\u00e9finitions', 'Liste non ordonn\u00e9e'], correct: 1 },
        { q: 'Quel attribut de &lt;a&gt; d\u00e9finit la destination ?', options: ['src', 'href', 'link'], correct: 1 },
        { q: 'Quel attribut ouvre le lien dans un nouvel onglet ?', options: ['target="_blank"', 'rel="external"', 'target="_self"'], correct: 0 },
        { q: 'Que signifie rel="noopener" ?', options: ['Am\u00e9liore la s\u00e9curit\u00e9', 'Ouvre en arri\u00e8re-plan', 'Ajoute un favicon'], correct: 0 },
        { q: 'Comment cr\u00e9er un lien vers une ancre ?', options: ['&lt;a href="#id"&gt;', '&lt;a anchor="id"&gt;', '&lt;a target="id"&gt;'], correct: 0 },
        { q: 'Quel chemin est absolu ?', options: ['/images/photo.jpg', '../photo.jpg', 'https://site.com/photo.jpg'], correct: 2 },
        { q: 'Quel pr\u00e9fixe cr\u00e9e un lien mail ?', options: ['mail:', 'mailto:', 'email:'], correct: 1 }
      ]
    },
    'html-05': {
      title: 'Images & Multim\u00e9dia',
      questions: [
        { q: 'Quelle balise affiche une image ?', options: ['&lt;img&gt;', '&lt;picture&gt;', '&lt;image&gt;'], correct: 0 },
        { q: 'Quel attribut de &lt;img&gt; est obligatoire ?', options: ['alt', 'src', 'title'], correct: 1 },
        { q: '\u00c0 quoi sert l\'attribut alt ?', options: ['Texte alternatif accessible', 'Titre de l\'image', 'L\u00e9gende'], correct: 0 },
        { q: 'Quelle balise associe une l\u00e9gende \u00e0 une image ?', options: ['&lt;figcaption&gt;', '&lt;legend&gt;', '&lt;caption&gt;'], correct: 0 },
        { q: 'Quel attribut permet des images responsives ?', options: ['responsive', 'srcset', 'media'], correct: 1 },
        { q: 'Quelle balise int\u00e8gre une vid\u00e9o ?', options: ['&lt;video&gt;', '&lt;media&gt;', '&lt;movie&gt;'], correct: 0 },
        { q: 'Quelle balise int\u00e8gre un fichier audio ?', options: ['&lt;audio&gt;', '&lt;sound&gt;', '&lt;music&gt;'], correct: 0 },
        { q: 'Quel attribut de &lt;video&gt; lance automatiquement ?', options: ['play', 'autoplay', 'start'], correct: 1 },
        { q: '\u00c0 quoi sert &lt;iframe&gt; ?', options: ['Int\u00e9grer une page dans une page', 'Redimensionner une image', 'Cr\u00e9er un formulaire'], correct: 0 },
        { q: 'La balise &lt;picture&gt; permet...', options: ['Plusieurs sources d\'image', 'Une galerie d\'images', 'Modifier une image'], correct: 0 }
      ]
    },
    'html-06': {
      title: 'Tableaux',
      questions: [
        { q: 'Quelle balise cr\u00e9e un tableau ?', options: ['&lt;table&gt;', '&lt;tab&gt;', '&lt;grid&gt;'], correct: 0 },
        { q: 'Quelle balise d\u00e9finit une cellule d\'en-t\u00eate ?', options: ['&lt;td&gt;', '&lt;th&gt;', '&lt;thead&gt;'], correct: 1 },
        { q: 'Quelle balise d\u00e9finit une cellule standard ?', options: ['&lt;th&gt;', '&lt;td&gt;', '&lt;tc&gt;'], correct: 1 },
        { q: 'Quelle balise regroupe l\'en-t\u00eate du tableau ?', options: ['&lt;header&gt;', '&lt;thead&gt;', '&lt;head&gt;'], correct: 1 },
        { q: 'Quelle balise regroupe le corps du tableau ?', options: ['&lt;tbody&gt;', '&lt;body&gt;', '&lt;main&gt;'], correct: 0 },
        { q: 'Quelle balise regroupe le pied du tableau ?', options: ['&lt;tfoot&gt;', '&lt;footer&gt;', '&lt;tbottom&gt;'], correct: 0 },
        { q: 'Quel attribut fusionne deux colonnes ?', options: ['merge', 'colspan', 'rowspan'], correct: 1 },
        { q: 'Quel attribut fusionne deux lignes ?', options: ['colspan', 'rowspan', 'merge'], correct: 1 },
        { q: 'Quelle balise ajoute un titre au tableau ?', options: ['&lt;caption&gt;', '&lt;title&gt;', '&lt;legend&gt;'], correct: 0 },
        { q: 'L\'attribut scope sert \u00e0...', options: ['D\u00e9finir la port\u00e9e de l\'en-t\u00eate', 'D\u00e9finir la taille', 'D\u00e9finir la couleur'], correct: 0 }
      ]
    },
    'html-07': {
      title: 'Formulaires',
      questions: [
        { q: 'Quel attribut de &lt;form&gt; d\u00e9finit l\'URL cible ?', options: ['method', 'action', 'target'], correct: 1 },
        { q: 'Quelles sont les deux m\u00e9thodes HTTP pour un formulaire ?', options: ['GET et POST', 'GET et PUT', 'POST et DELETE'], correct: 0 },
        { q: 'Quelle balise cr\u00e9e un champ de saisie ?', options: ['&lt;input&gt;', '&lt;field&gt;', '&lt;text&gt;'], correct: 0 },
        { q: 'Quel type d\'input masque les caract\u00e8res ?', options: ['hidden', 'password', 'secret'], correct: 1 },
        { q: 'Quelle balise associe un texte \u00e0 un champ ?', options: ['&lt;label&gt;', '&lt;span&gt;', '&lt;text&gt;'], correct: 0 },
        { q: 'Quelle balise cr\u00e9e un bouton cliquable ?', options: ['&lt;btn&gt;', '&lt;button&gt;', '&lt;input type="btn"&gt;'], correct: 1 },
        { q: 'Quelle balise cr\u00e9e une liste d\u00e9roulante ?', options: ['&lt;select&gt;', '&lt;dropdown&gt;', '&lt;list&gt;'], correct: 0 },
        { q: 'Quelle balise cr\u00e9e une zone de texte multiple ?', options: ['&lt;input type="text"&gt;', '&lt;textarea&gt;', '&lt;multitext&gt;'], correct: 1 },
        { q: 'Quelle balise regroupe des champs connexes ?', options: ['&lt;group&gt;', '&lt;fieldset&gt;', '&lt;section&gt;'], correct: 1 },
        { q: 'Quelle balise donne un titre \u00e0 un fieldset ?', options: ['&lt;title&gt;', '&lt;caption&gt;', '&lt;legend&gt;'], correct: 2 }
      ]
    },
    'html-08': {
      title: 'Formulaires avanc\u00e9s',
      questions: [
        { q: 'Quel type d\'input permet de choisir une date ?', options: ['date', 'calendar', 'time'], correct: 0 },
        { q: 'Quel type d\'input affiche un s\u00e9lecteur de couleur ?', options: ['picker', 'color', 'palette'], correct: 1 },
        { q: 'Quel type d\'input est un curseur num\u00e9rique ?', options: ['slider', 'range', 'number'], correct: 1 },
        { q: 'Quel type d\'input permet de s\u00e9lectionner un fichier ?', options: ['file', 'upload', 'document'], correct: 0 },
        { q: 'Quel type d\'input permet une s\u00e9lection unique ?', options: ['checkbox', 'radio', 'select'], correct: 1 },
        { q: 'Quel type d\'input permet des s\u00e9lections multiples ?', options: ['radio', 'checkbox', 'toggle'], correct: 1 },
        { q: 'Quel attribut rend un champ obligatoire ?', options: ['mandatory', 'required', 'obligate'], correct: 1 },
        { q: 'Quel attribut valide par expression r\u00e9guli\u00e8re ?', options: ['regex', 'pattern', 'match'], correct: 1 },
        { q: 'Quel attribut d\u00e9sactive un champ ?', options: ['inactive', 'disabled', 'blocked'], correct: 1 },
        { q: 'L\'attribut autocomplete am\u00e9liore...', options: ['La s\u00e9curit\u00e9', 'L\'exp\u00e9rience utilisateur', 'Le design'], correct: 1 }
      ]
    },
    'html-09': {
      title: 'S\u00e9mantique HTML5',
      questions: [
        { q: 'Quelle balise s\u00e9mantique repr\u00e9sente l\'en-t\u00eate ?', options: ['&lt;head&gt;', '&lt;header&gt;', '&lt;top&gt;'], correct: 1 },
        { q: 'Quelle balise repr\u00e9sente la navigation principale ?', options: ['&lt;nav&gt;', '&lt;menu&gt;', '&lt;navigation&gt;'], correct: 0 },
        { q: 'Quelle balise contient le contenu principal unique ?', options: ['&lt;main&gt;', '&lt;body&gt;', '&lt;content&gt;'], correct: 0 },
        { q: 'Quelle balise repr\u00e9sente un contenu autonome ?', options: ['&lt;section&gt;', '&lt;article&gt;', '&lt;div&gt;'], correct: 1 },
        { q: 'Quelle balise regroupe une portion th\u00e9matique ?', options: ['&lt;article&gt;', '&lt;section&gt;', '&lt;part&gt;'], correct: 1 },
        { q: 'Quelle balise repr\u00e9sente un contenu compl\u00e9mentaire ?', options: ['&lt;sidebar&gt;', '&lt;aside&gt;', '&lt;extra&gt;'], correct: 1 },
        { q: 'Quelle balise repr\u00e9sente le pied de page ?', options: ['&lt;bottom&gt;', '&lt;footer&gt;', '&lt;foot&gt;'], correct: 1 },
        { q: 'Quelle balise repr\u00e9sente une date ou une dur\u00e9e ?', options: ['&lt;date&gt;', '&lt;time&gt;', '&lt;datetime&gt;'], correct: 1 },
        { q: 'Quelle balise cr\u00e9e un contenu repliable ?', options: ['&lt;details&gt; &lt;summary&gt;', '&lt;fold&gt; &lt;head&gt;', '&lt;collapse&gt; &lt;title&gt;'], correct: 0 },
        { q: 'Pourquoi utiliser la s\u00e9mantique HTML5 ?', options: ['Accessibilit\u00e9 et SEO', 'Meilleur design', 'Vitesse de chargement'], correct: 0 }
      ]
    },
    'html-10': {
      title: 'SEO & Accessibilit\u00e9',
      questions: [
        { q: 'Quel &lt;meta&gt; am\u00e9liore le SEO ?', options: ['&lt;meta description&gt;', '&lt;meta color&gt;', '&lt;meta size&gt;'], correct: 0 },
        { q: '\u00c0 quoi sert Open Graph ?', options: ['Am\u00e9liorer le r\u00e9f\u00e9rencement', 'Contr\u00f4ler l\'affichage sur les r\u00e9seaux sociaux', 'Analyser le trafic'], correct: 1 },
        { q: 'Que sont les Twitter Cards ?', options: ['Cartes de visite', 'Aper\u00e7us de liens sur Twitter', 'Publicit\u00e9s Twitter'], correct: 1 },
        { q: 'Qu\'est-ce que JSON-LD ?', options: ['Un format de feuille de style', 'Un format de donn\u00e9es structur\u00e9es', 'Un langage serveur'], correct: 1 },
        { q: 'Qu\'est-ce que ARIA ?', options: ['Un framework CSS', 'Des attributs d\'accessibilit\u00e9', 'Un outil de test'], correct: 1 },
        { q: '\u00c0 quoi sert un r\u00f4le ARIA ?', options: ['D\u00e9finir le type d\'\u00e9l\u00e9ment', 'Ajouter du style', 'Charger des donn\u00e9es'], correct: 0 },
        { q: 'Que sont les WCAG ?', options: ['R\u00e8gles d\'accessibilit\u00e9 web', 'Standards HTML', 'Normes CSS'], correct: 0 },
        { q: '\u00c0 quoi sert Lighthouse ?', options: ['Auditer les performances et l\'accessibilit\u00e9', 'H\u00e9berger un site', '\u00c9diter du code'], correct: 0 },
        { q: 'Quel attribut rend une image accessible ?', options: ['title', 'alt', 'src'], correct: 1 },
        { q: 'Pourquoi les balises s\u00e9mantiques aident le SEO ?', options: ['Elles structurent le contenu', 'Elles ajoutent du style', 'Elles acc\u00e9l\u00e8rent le site'], correct: 0 }
      ]
    },
    // ===================== CSS =====================
    'css-01': {
      title: 'Introduction & Syntaxe CSS',
      questions: [
        { q: 'Comment s\'appelle une r\u00e8gle CSS ?', options: ['Une r\u00e8gle', 'Un s\u00e9lecteur', 'Une d\u00e9claration'], correct: 0 },
        { q: 'Que contient une d\u00e9claration CSS ?', options: ['Propri\u00e9t\u00e9 et valeur', 'S\u00e9lecteur et r\u00e8gle', 'Balise et attribut'], correct: 0 },
        { q: 'O\u00f9 place-t-on du CSS externe ?', options: ['Dans &lt;style&gt;', 'Dans un fichier .css', 'Dans l\'attribut style'], correct: 1 },
        { q: 'Qu\'est-ce que la cascade CSS ?', options: ['L\'ordre de priorit\u00e9 des styles', 'Un effet d\'animation', 'Une m\u00e9thode de s\u00e9lection'], correct: 0 },
        { q: 'Qu\'est-ce que la sp\u00e9cificit\u00e9 CSS ?', options: ['Le poids d\'un s\u00e9lecteur', 'La vitesse du site', 'La taille du fichier'], correct: 0 },
        { q: 'Que signifie !important ?', options: ['Priorit\u00e9 maximale', 'Style facultatif', 'Propri\u00e9t\u00e9 supprim\u00e9e'], correct: 0 },
        { q: 'Comment inclure du CSS dans le HTML ?', options: ['&lt;link&gt; ou &lt;style&gt;', '&lt;css&gt; ou &lt;style&gt;', '&lt;link&gt; ou &lt;script&gt;'], correct: 0 },
        { q: 'Quel attribut HTML permet du CSS inline ?', options: ['class', 'style', 'css'], correct: 1 },
        { q: 'Que signifie le C de CSS ?', options: ['Cascading', 'Coding', 'Creative'], correct: 0 },
        { q: 'Quel s\u00e9lecteur cible tous les &lt;p&gt; ?', options: ['.p', '#p', 'p'], correct: 2 }
      ]
    },
    'css-02': {
      title: 'S\u00e9lecteurs CSS',
      questions: [
        { q: 'Comment cibler une classe en CSS ?', options: ['.classe', '#classe', '*classe'], correct: 0 },
        { q: 'Comment cibler un id en CSS ?', options: ['.id', '#id', 'id'], correct: 1 },
        { q: 'Que cible le s\u00e9lecteur universel * ?', options: ['Tous les \u00e9l\u00e9ments', 'Aucun \u00e9l\u00e9ment', 'Le premier \u00e9l\u00e9ment'], correct: 0 },
        { q: 'Comment cibler un attribut sp\u00e9cifique ?', options: ['[attr]', '{attr}', '(attr)'], correct: 0 },
        { q: 'Que signifie le combinateur espace ?', options: ['Enfant direct', 'Descendant', 'Fr\u00e8re adjacent'], correct: 1 },
        { q: 'Que cible :hover ?', options: ['\u00c9l\u00e9ment survol\u00e9', '\u00c9l\u00e9ment cliqu\u00e9', '\u00c9l\u00e9ment s\u00e9lectionn\u00e9'], correct: 0 },
        { q: 'Que cible :nth-child(2) ?', options: ['Deuxi\u00e8me enfant', 'Deuxi\u00e8me parent', 'Deuxi\u00e8me classe'], correct: 0 },
        { q: 'Que fait :not(.x) ?', options: ['S\u00e9lectionne tout sauf .x', 'S\u00e9lectionne .x', 'Inverse le style'], correct: 0 },
        { q: 'Que signifie le combinateur > ?', options: ['Descendant', 'Enfant direct', 'Fr\u00e8re suivant'], correct: 1 },
        { q: 'Que cible le combinateur + ?', options: ['Fr\u00e8re adjacent', 'Enfant direct', 'Tous les fr\u00e8res'], correct: 0 }
      ]
    },
    'css-03': {
      title: 'Couleurs, Unit\u00e9s & Typographie',
      questions: [
        { q: 'Comment \u00e9crire du rouge en hexad\u00e9cimal ?', options: ['#ff0000', '#00ff00', '#0000ff'], correct: 0 },
        { q: 'Que signifie rgb(255,0,0) ?', options: ['Vert', 'Bleu', 'Rouge'], correct: 2 },
        { q: 'Qu\'est-ce que hsl ?', options: ['Teinte saturation luminosit\u00e9', 'Rouge vert bleu', 'Hexa saturation ligne'], correct: 0 },
        { q: 'Quelle unit\u00e9 est relative \u00e0 la police parente ?', options: ['px', 'rem', 'em'], correct: 2 },
        { q: 'Quelle unit\u00e9 est relative \u00e0 la police racine ?', options: ['em', 'rem', '%'], correct: 1 },
        { q: 'Quelle propri\u00e9t\u00e9 change la police ?', options: ['font-face', 'font-family', 'font-style'], correct: 1 },
        { q: 'Quelle propri\u00e9t\u00e9 met le texte en gras ?', options: ['font-style', 'font-weight', 'text-transform'], correct: 1 },
        { q: 'Quelle propri\u00e9t\u00e9 aligne le texte ?', options: ['text-align', 'text-indent', 'vertical-align'], correct: 0 },
        { q: 'Quelle propri\u00e9t\u00e9 d\u00e9finit l\'interligne ?', options: ['letter-spacing', 'line-height', 'word-spacing'], correct: 1 },
        { q: 'Comment importer Google Fonts ?', options: ['@import url()', '@font-face', 'font-import'], correct: 0 }
      ]
    },
    'css-04': {
      title: 'Box Model',
      questions: [
        { q: 'Quels sont les \u00e9l\u00e9ments du box model ?', options: ['Content padding border margin', 'Content border margin padding', 'Padding border margin content'], correct: 0 },
        { q: 'Quelle propri\u00e9t\u00e9 ajoute un espace int\u00e9rieur ?', options: ['margin', 'padding', 'border'], correct: 1 },
        { q: 'Quelle propri\u00e9t\u00e9 ajoute un espace ext\u00e9rieur ?', options: ['padding', 'margin', 'gap'], correct: 1 },
        { q: 'Quelle propri\u00e9t\u00e9 arrondit les coins ?', options: ['corner-radius', 'border-radius', 'round'], correct: 1 },
        { q: 'Que fait box-sizing: border-box ?', options: ['Inclut padding et border dans la largeur', 'Ignore le padding', 'Ajoute du margin'], correct: 0 },
        { q: 'Que fait overflow: hidden ?', options: ['Cache le contenu qui d\u00e9borde', 'Ajoute une barre de d\u00e9filement', 'Supprime l\'\u00e9l\u00e9ment'], correct: 0 },
        { q: 'Que fait min-width ?', options: ['Largeur minimale', 'Largeur maximale', 'Largeur fixe'], correct: 0 },
        { q: 'Que fait max-width ?', options: ['Largeur minimale', 'Largeur maximale', 'Largeur automatique'], correct: 1 },
        { q: 'Quelle propri\u00e9t\u00e9 ajoute une bordure ?', options: ['border', 'outline', 'stroke'], correct: 0 },
        { q: 'Quel ordre pour margin: 10px 20px ?', options: ['Haut et bas, gauche et droite', 'Haut, droite, bas, gauche', 'Gauche et droite, haut et bas'], correct: 0 }
      ]
    },
    'css-05': {
      title: 'Backgrounds & D\u00e9grad\u00e9s',
      questions: [
        { q: 'Quelle propri\u00e9t\u00e9 d\u00e9finit la couleur de fond ?', options: ['color', 'background-color', 'bgcolor'], correct: 1 },
        { q: 'Quelle propri\u00e9t\u00e9 d\u00e9finit une image de fond ?', options: ['background-image', 'background-src', 'bg-image'], correct: 0 },
        { q: 'Que fait background-repeat: no-repeat ?', options: ['R\u00e9p\u00e8te l\'image', 'Ne r\u00e9p\u00e8te pas l\'image', '\u00c9tire l\'image'], correct: 1 },
        { q: 'Que fait background-size: cover ?', options: ['Couvre tout le conteneur', 'Taille r\u00e9elle', 'R\u00e9duit l\'image'], correct: 0 },
        { q: 'Que fait background-position: center ?', options: ['Centre l\'image de fond', 'R\u00e9p\u00e8te au centre', 'Agrandit au centre'], correct: 0 },
        { q: 'Comment cr\u00e9er un d\u00e9grad\u00e9 lin\u00e9aire ?', options: ['linear-gradient()', 'gradient()', 'linear()'], correct: 0 },
        { q: 'Comment cr\u00e9er un d\u00e9grad\u00e9 radial ?', options: ['radial-gradient()', 'oval-gradient()', 'circle-gradient()'], correct: 0 },
        { q: 'Quelle propri\u00e9t\u00e9 cr\u00e9e une ombre ?', options: ['shadow', 'box-shadow', 'drop-shadow'], correct: 1 },
        { q: 'Que fait background-attachment: fixed ?', options: ['Fond fixe pendant le scroll', 'Fond qui d\u00e9file', 'Fond transparent'], correct: 0 },
        { q: 'Combien de valeurs pour box-shadow ?', options: ['2 valeurs minimum', '3 valeurs minimum', '4 valeurs minimum'], correct: 0 }
      ]
    },
    'css-06': {
      title: 'Positionnement & Display',
      questions: [
        { q: 'Quelle valeur de display met sur une ligne ?', options: ['block', 'inline', 'none'], correct: 1 },
        { q: 'Quelle valeur de display prend toute la largeur ?', options: ['inline', 'block', 'flex'], correct: 1 },
        { q: 'Que fait display: none ?', options: ['Cache et supprime l\'espace', 'Cache mais garde l\'espace', 'Rend invisible'], correct: 0 },
        { q: 'Quel positionnement suit le flux normal ?', options: ['absolute', 'static', 'fixed'], correct: 1 },
        { q: 'Quel positionnement est relatif \u00e0 sa position normale ?', options: ['absolute', 'relative', 'fixed'], correct: 1 },
        { q: 'Quel positionnement sort du flux normal ?', options: ['static', 'relative', 'absolute'], correct: 2 },
        { q: 'Quel positionnement est fixe par rapport \u00e0 la fen\u00eatre ?', options: ['relative', 'absolute', 'fixed'], correct: 2 },
        { q: 'Qu\'est-ce que z-index ?', options: ['L\'ordre d\'empilement', 'La largeur', 'La transparence'], correct: 0 },
        { q: '\u00c0 quoi sert float ?', options: ['Faire flotter un \u00e9l\u00e9ment \u00e0 gauche ou droite', 'Animer un \u00e9l\u00e9ment', 'Cacher un \u00e9l\u00e9ment'], correct: 0 },
        { q: 'Quel display permet le inline avec largeur/hauteur ?', options: ['inline', 'inline-block', 'block'], correct: 1 }
      ]
    },
    'css-07': {
      title: 'Flexbox',
      questions: [
        { q: 'Quelle propri\u00e9t\u00e9 active Flexbox ?', options: ['display: flex', 'display: block', 'display: inline'], correct: 0 },
        { q: 'Que fait flex-direction: column ?', options: ['Aligne en ligne', 'Aligne en colonne', 'Inverse l\'ordre'], correct: 1 },
        { q: 'Que fait flex-wrap: wrap ?', options: ['Passe \u00e0 la ligne', 'Ne passe jamais \u00e0 la ligne', 'R\u00e9duit les \u00e9l\u00e9ments'], correct: 0 },
        { q: 'Que fait justify-content: center ?', options: ['Centre sur l\'axe principal', 'Centre sur l\'axe secondaire', 'Centre les deux'], correct: 0 },
        { q: 'Que fait align-items: center ?', options: ['Centre sur l\'axe principal', 'Centre sur l\'axe secondaire', 'Centre les deux'], correct: 1 },
        { q: 'Que fait flex-grow ?', options: ['Permet \u00e0 un \u00e9l\u00e9ment de grandir', 'Permet \u00e0 un \u00e9l\u00e9ment de r\u00e9tr\u00e9cir', 'Taille initiale'], correct: 0 },
        { q: 'Que fait flex-shrink ?', options: ['Permet de grandir', 'Permet de r\u00e9tr\u00e9cir', 'D\u00e9finit l\'ordre'], correct: 1 },
        { q: 'Que d\u00e9finit flex-basis ?', options: ['La taille de base', 'La taille maximale', 'La taille minimale'], correct: 0 },
        { q: 'Que fait la propri\u00e9t\u00e9 order ?', options: ['D\u00e9finit l\'ordre d\'affichage', 'D\u00e9finit la taille', 'D\u00e9finit l\'alignement'], correct: 0 },
        { q: 'Quel est l\'axe principal par d\u00e9faut ?', options: ['Horizontal (row)', 'Vertical (column)', 'Diagonal'], correct: 0 }
      ]
    },
    'css-08': {
      title: 'CSS Grid',
      questions: [
        { q: 'Quelle propri\u00e9t\u00e9 active Grid ?', options: ['display: grid', 'display: flex', 'display: block'], correct: 0 },
        { q: 'Que fait grid-template-columns ?', options: ['D\u00e9finit les colonnes', 'D\u00e9finit les lignes', 'D\u00e9finit les espaces'], correct: 0 },
        { q: 'Que fait grid-template-rows ?', options: ['D\u00e9finit les colonnes', 'D\u00e9finit les lignes', 'D\u00e9finit les gaps'], correct: 1 },
        { q: 'Quelle propri\u00e9t\u00e9 d\u00e9finit l\'espacement ?', options: ['space', 'gap', 'margin'], correct: 1 },
        { q: 'Que fait grid-column: 1 / 3 ?', options: ['De la colonne 1 \u00e0 3', 'Colonnes 1 et 3', 'Colonne 1 sur 3'], correct: 0 },
        { q: 'Que fait grid-area ?', options: ['D\u00e9finit une zone nomm\u00e9e', 'D\u00e9finit la taille', 'D\u00e9finit l\'ordre'], correct: 0 },
        { q: 'Que signifie l\'unit\u00e9 fr ?', options: ['Fraction de l\'espace restant', 'Taille fixe', 'Pourcentage'], correct: 0 },
        { q: 'Que fait minmax(100px, 1fr) ?', options: ['Taille entre 100px et 1fr', 'Taille minimale 1fr', 'Taille maximale 100px'], correct: 0 },
        { q: 'Que fait auto-fit ?', options: ['Ajuste automatiquement le nombre de colonnes', 'Ajuste la hauteur', 'Centre le contenu'], correct: 0 },
        { q: 'Que fait auto-fill ?', options: ['Remplit avec des pistes vides', 'Remplit avec du contenu', 'Remplit la largeur'], correct: 0 }
      ]
    },
    'css-09': {
      title: 'Responsive Design',
      questions: [
        { q: 'Quel meta viewport est essentiel pour le responsive ?', options: ['width=device-width', 'height=device-height', 'scale=1.0'], correct: 0 },
        { q: 'Quelle r\u00e8gle CSS permet le responsive ?', options: ['@media', '@import', '@font-face'], correct: 0 },
        { q: 'Que sont les breakpoints ?', options: ['Points de rupture pour le design responsive', 'Points d\'arr\u00eat de d\u00e9bogage', 'Points de connexion'], correct: 0 },
        { q: 'Que signifie mobile-first ?', options: ['Commencer par le petit \u00e9cran', 'Commencer par le grand \u00e9cran', 'Ignorer les mobiles'], correct: 0 },
        { q: 'Que signifie desktop-first ?', options: ['Commencer par le petit \u00e9cran', 'Commencer par le grand \u00e9cran', 'Ignorer les desktop'], correct: 1 },
        { q: 'Que repr\u00e9sente l\'unit\u00e9 vw ?', options: ['1% de la largeur de la fen\u00eatre', '1% de la hauteur', '100% de la largeur'], correct: 0 },
        { q: 'Que repr\u00e9sente l\'unit\u00e9 vh ?', options: ['1% de la largeur', '1% de la hauteur de la fen\u00eatre', '1px de hauteur'], correct: 1 },
        { q: 'Que fait clamp(1rem, 2vw, 3rem) ?', options: ['Borne une valeur entre min et max', 'Choisit la valeur moyenne', 'Ignore les extr\u00eames'], correct: 0 },
        { q: 'Comment rendre une image responsive ?', options: ['max-width: 100%', 'width: 100vw', 'height: auto'], correct: 0 },
        { q: 'Quel est l\'avantage du responsive ?', options: ['S\'adapte \u00e0 tous les \u00e9crans', 'Charge plus vite', 'Utilise moins de CSS'], correct: 0 }
      ]
    },
    'css-10': {
      title: 'Animations & CSS Moderne',
      questions: [
        { q: 'Quelle propri\u00e9t\u00e9 cr\u00e9e une transition ?', options: ['transition', 'animation', 'transform'], correct: 0 },
        { q: 'Que permet transform: rotate(45deg) ?', options: ['Tourner un \u00e9l\u00e9ment de 45 degr\u00e9s', 'D\u00e9placer de 45px', 'Agrandir de 45%'], correct: 0 },
        { q: 'Que d\u00e9finit @keyframes ?', options: ['Les \u00e9tapes d\'une animation', 'La dur\u00e9e d\'une transition', 'Le point de d\u00e9part'], correct: 0 },
        { q: 'Quelle propri\u00e9t\u00e9 lie une animation \u00e0 un \u00e9l\u00e9ment ?', options: ['animation-name', 'animation-trigger', 'animation-run'], correct: 0 },
        { q: 'Que sont les custom properties CSS ?', options: ['Des variables CSS (--var)', 'Des fonctions CSS', 'Des classes sp\u00e9ciales'], correct: 0 },
        { q: 'Que fait calc(100% - 50px) ?', options: ['Calcule une valeur dynamique', 'Ajoute 100% et 50px', 'Multiplie les valeurs'], correct: 0 },
        { q: 'Quelle propri\u00e9t\u00e9 applique un flou ?', options: ['blur()', 'filter: blur()', 'opacity: blur()'], correct: 1 },
        { q: 'Que signifie BEM ?', options: ['Block Element Modifier', 'Best Element Method', 'Basic CSS Model'], correct: 0 },
        { q: 'Comment \u00e9crire un \u00e9l\u00e9ment BEM ?', options: ['block__element--modifier', 'block-element-modifier', 'block_element_modifier'], correct: 0 },
        { q: 'Que fait animation-iteration-count: infinite ?', options: ['R\u00e9p\u00e8te l\'animation ind\u00e9finiment', 'Joue une fois', 'Joue deux fois'], correct: 0 }
      ]
    },


    'css-base': {
      title: 'CSS de Base',
      questions: [
        { q: 'Quel s\u00e9lecteur cible tous les \u00e9l\u00e9ments d\'une page ?', options:['.tous','#tous','*'], correct:2 },
        { q: 'Comment applique-t-on une classe "rouge" \u00e0 un \u00e9l\u00e9ment en CSS ?', options:['.rouge { }','#rouge { }','rouge { }'], correct:0 },
        { q: 'Quelle propri\u00e9t\u00e9 change la couleur du texte ?', options:['text-color','color','foreground-color'], correct:1 },
        { q: 'Quelle syntaxe est correcte pour un commentaire CSS ?', options:['// commentaire','/* commentaire */','<!-- commentaire -->'], correct:1 },
        { q: 'Quel s\u00e9lecteur cible un \u00e9l\u00e9ment avec l\'id "header" ?', options:['.header','#header','header'], correct:1 },
        { q: 'Quelle r\u00e8gle CSS importe une feuille de style externe ?', options:['@import url("style.css");','<link rel="stylesheet">','include("style.css")'], correct:0 },
        { q: 'Que signifie la valeur "inherit" en CSS ?', options:['Utiliser la valeur du navigateur','H\u00e9riter la valeur du parent','Forcer une valeur par d\u00e9faut'], correct:1 },
        { q: 'Quel attribut HTML lie une feuille de style externe ?', options:['src','href','rel'], correct:1 },
        { q: 'Quelle unit\u00e9 est relative \u00e0 la taille de la police du parent ?', options:['px','em','vw'], correct:1 },
        { q: 'Comment centrer horizontalement un bloc avec margin ?', options:['margin: center;','margin: 0 auto;','margin: auto 0;'], correct:1 }
      ]
    },
    'css-design': {
      title: 'Design CSS',
      questions: [
        { q: 'Quelle propri\u00e9t\u00e9 applique un d\u00e9grad\u00e9 lin\u00e9aire ?', options:['linear-gradient()','gradient()','background-gradient()'], correct:0 },
        { q: 'Comment ajouter une ombre port\u00e9e \u00e0 un \u00e9l\u00e9ment ?', options:['shadow-box','box-shadow','element-shadow'], correct:1 },
        { q: 'Quelle fonction cr\u00e9e un d\u00e9grad\u00e9 radial ?', options:['radial-gradient()','circle-gradient()','radial()'], correct:0 },
        { q: 'Quelle propri\u00e9t\u00e9 r\u00e9p\u00e8te une image de fond ?', options:['background-repeat','image-repeat','repeat-background'], correct:0 },
        { q: 'Que fait "border-radius: 50%;" sur un carr\u00e9 ?', options:['Arrondit l\u00e9g\u00e8rement les coins','Cr\u00e9e un cercle','Ajoute une bordure arrondie'], correct:1 },
        { q: 'Quelle valeur de "background-size" adapte l\'image sans d\u00e9formation ?', options:['cover','contain','fit'], correct:1 },
        { q: 'Comment superposer plusieurs ombres sur un \u00e9l\u00e9ment ?', options:['En utilisant une seule box-shadow avec des virgules','En utilisant plusieurs propri\u00e9t\u00e9s box-shadow','Ce n\'est pas possible'], correct:0 },
        { q: 'Que permet "background-clip: text;" ?', options:['Afficher le fond uniquement sous le texte','Couper l\'arri\u00e8re-plan','Rogner le texte'], correct:0 },
        { q: 'Quelle propri\u00e9t\u00e9 contr\u00f4le le flou d\'une ombre ?', options:['blur','spread-radius','Le troisi\u00e8me param\u00e8tre de box-shadow'], correct:2 },
        { q: 'Quelle fonction d\u00e9grade avec des arr\u00eats de couleur nets ?', options:['hard-stop()','linear-gradient() avec des positions identiques','conic-gradient()'], correct:1 }
      ]
    },
    'css-units': {
      title: 'Unit\u00e9s CSS',
      questions: [
        { q: 'Quelle unit\u00e9 est relative \u00e0 la taille de la police de l\'\u00e9l\u00e9ment racine ?', options:['em','rem','ex'], correct:1 },
        { q: 'Que vaut 1vw ?', options:['1 % de la largeur du viewport','100 pixels','1 % de la largeur du parent'], correct:0 },
        { q: 'Quelle fonction CSS permet d\'effectuer des calculs ?', options:['calc()','sum()','math()'], correct:0 },
        { q: 'Quelle diff\u00e9rence entre em et rem ?', options:['em est relatif au parent, rem \u00e0 la racine','em est absolu, rem est relatif','Il n\'y a pas de diff\u00e9rence'], correct:0 },
        { q: 'Que fait clamp(1rem, 2vw, 3rem) ?', options:['D\u00e9finit une valeur entre min 1rem et max 3rem','Choisit al\u00e9atoirement une valeur','Bloque la valeur \u00e0 2vw'], correct:0 },
        { q: 'Quelle unit\u00e9 repr\u00e9sente 1 % de la hauteur du viewport ?', options:['vh','vw','vmin'], correct:0 },
        { q: '\u00c0 quoi correspond 1ch ?', options:['1 caract\u00e8re','La largeur du chiffre "0"','1 centim\u00e8tre'], correct:1 },
        { q: 'Quand utiliser "%" plut\u00f4t que "vw" ?', options:['Quand la r\u00e9f\u00e9rence est le parent','Quand la r\u00e9f\u00e9rence est le viewport','C\'est interchangeable'], correct:0 },
        { q: 'Que signifie "max(50%, 300px)" ?', options:['La plus grande des deux valeurs','La moyenne des deux','La plus petite des deux'], correct:0 },
        { q: 'Quelle unit\u00e9 est adapt\u00e9e aux interfaces tactiles pour les tailles minimales ?', options:['px','cm','rem'], correct:2 }
      ]
    },
    'css-pseudo': {
      title: 'Pseudo-classes & Pseudo-\u00e9l\u00e9ments',
      questions: [
        { q: 'Quel pseudo-\u00e9l\u00e9ment ins\u00e8re du contenu avant un \u00e9l\u00e9ment ?', options:['::before','::after',':before'], correct:0 },
        { q: 'Quelle pseudo-classe cible le premier enfant d\'un parent ?', options:[':first-child',':first-of-type',':nth-child(1)'], correct:0 },
        { q: 'Quel pseudo-\u00e9l\u00e9ment permet de styler la premi\u00e8re lettre ?', options:['::first-letter','::first-line',':initial-letter'], correct:0 },
        { q: 'Quelle pseudo-classe cible un \u00e9l\u00e9ment survol\u00e9 par la souris ?', options:[':hover',':focus',':active'], correct:0 },
        { q: 'Quelle diff\u00e9rence entre :nth-child(2n) et :nth-child(even) ?', options:['Aucune, les deux ciblent les pairs',':nth-child(2n) commence \u00e0 0',':nth-child(even) ne fonctionne pas'], correct:0 },
        { q: 'Quel pseudo-\u00e9l\u00e9ment est obligatoirement accompagn\u00e9 de "content" ?', options:['::before et ::after','::first-line','::selection'], correct:0 },
        { q: 'Quelle pseudo-classe cible un \u00e9l\u00e9ment lorsque le formulaire est invalide ?', options:[':error',':invalid',':bad'], correct:1 },
        { q: 'Que cible ":not(.exclu)" ?', options:['Tous les \u00e9l\u00e9ments sauf la classe exclu','Uniquement les \u00e9l\u00e9ments sans classe','Les \u00e9l\u00e9ments avec la classe exclu'], correct:0 },
        { q: 'Quelle pseudo-classe cible le dernier \u00e9l\u00e9ment d\'un type parmi ses fr\u00e8res ?', options:[':last-of-type',':last-child',':nth-last-of-type(1)'], correct:2 },
        { q: 'Comment cibler un \u00e9l\u00e9ment vide (sans enfant ni texte) ?', options:[':blank',':empty',':void'], correct:1 }
      ]
    },
    'css-colors': {
      title: 'Couleurs CSS',
      questions: [
        { q: 'Que signifie #ff0 ?', options:['Jaune','Violet','Cyan'], correct:0 },
        { q: 'Quelle fonction CSS exprime une couleur avec teinte, saturation et luminosit\u00e9 ?', options:['rgb()','hsl()','hsv()'], correct:1 },
        { q: 'Dans rgba(255,0,0,0.5), que repr\u00e9sente 0.5 ?', options:['La saturation','L\'opacit\u00e9','La luminosit\u00e9'], correct:1 },
        { q: 'Quelle est la valeur RGB du blanc ?', options:['rgb(0,0,0)','rgb(255,255,255)','rgb(255,0,255)'], correct:1 },
        { q: 'Quelle fonction permet d\'ajouter de la transparence \u00e0 une couleur hexad\u00e9cimale moderne ?', options:['hex() avec 8 chiffres','opacity()','transparent()'], correct:0 },
        { q: 'Que produit "hsl(0,100%,50%)" ?', options:['Du bleu','Du rouge','Du vert'], correct:1 },
        { q: 'Comment modifier la transparence d\'un \u00e9l\u00e9ment sans affecter ses enfants ?', options:['Utiliser opacity','Utiliser rgba() ou hsla() sur le fond','Utiliser visibility'], correct:1 },
        { q: 'Quelle couleur est "#000" ?', options:['Blanc','Noir','Gris fonc\u00e9'], correct:1 },
        { q: 'Quel canal ajoute la notation hsl() par rapport \u00e0 hsla() ?', options:['Luminosit\u00e9','Alpha (transparence)','Teinte'], correct:1 },
        { q: 'Comment le navigateur interpr\u00e8te-t-il "red" en CSS ?', options:['Comme un mot-cl\u00e9 de couleur pr\u00e9d\u00e9fini','Comme une variable','Comme une fonction'], correct:0 }
      ]
    },
    'css-forms': {
      title: 'Formulaires CSS',
      questions: [
        { q: 'Quelle pseudo-classe cible un champ obligatoire ?', options:[':mandatory',':required',':obligatoire'], correct:1 },
        { q: 'Comment d\u00e9sactiver le style par d\u00e9faut d\'un input ?', options:['border: none; outline: none;','reset: true;','input-style: none;'], correct:0 },
        { q: 'Quelle pseudo-classe cible un champ valide ?', options:[':valid',':correct',':checked'], correct:0 },
        { q: 'Quel attribut CSS stylise un input file ?', options:['::file-selector-button','::file-input','::upload-button'], correct:0 },
        { q: 'Comment styliser un bouton au clic ?', options:[':focus',':active',':click'], correct:1 },
        { q: 'Quelle pseudo-classe cible un champ dont la validation a \u00e9chou\u00e9 ?', options:[':fail',':invalid',':error'], correct:1 },
        { q: 'Comment espacer les champs d\'un formulaire ?', options:['gap sur le formulaire','margin sur chaque input','Les deux sont possibles'], correct:2 },
        { q: 'Quelle pseudo-classe cible un champ "readonly" ?', options:[':read-only',':disabled',':static'], correct:0 },
        { q: 'Comment changer la couleur de fond d\'une checkbox coch\u00e9e ?', options:[':checked + label','input[checked]','Les deux fonctionnent'], correct:2 },
        { q: 'Que permet "appearance: none" sur un input ?', options:['Supprime le style natif du navigateur','D\u00e9sactive l\'input','Cache l\'\u00e9l\u00e9ment'], correct:0 }
      ]
    },
    'css-boxmodel': {
      title: 'Box Model',
      questions: [
        { q: 'Quels sont les composants du box model dans l\'ordre de l\'int\u00e9rieur vers l\'ext\u00e9rieur ?', options:['Margin, border, padding, content','Content, padding, border, margin','Padding, content, border, margin'], correct:1 },
        { q: 'Quelle propri\u00e9t\u00e9 inclut le padding et la border dans la largeur totale ?', options:['box-sizing: border-box;','box-sizing: content-box;','box-model: border-box;'], correct:0 },
        { q: 'Que fait "overflow: hidden;" ?', options:['Cache le contenu qui d\u00e9passe','Ajoute une scrollbar','Supprime l\'\u00e9l\u00e9ment'], correct:0 },
        { q: 'Quelle diff\u00e9rence entre padding et margin ?', options:['padding est int\u00e9rieur, margin est ext\u00e9rieur','padding est vertical, margin est horizontal','Aucune diff\u00e9rence'], correct:0 },
        { q: 'Que signifie la valeur "auto" pour margin ?', options:['Calcule automatiquement l\'espace restant','Utilise la valeur du navigateur','Supprime la marge'], correct:0 },
        { q: 'Comment appliquer une bordure uniquement en haut ?', options:['border-top','border: top;','border-horizontal'], correct:0 },
        { q: 'Que se passe-t-il avec deux margins verticales qui se touchent ?', options:['Elles s\'additionnent','Elles fusionnent (collapse)','La plus grande annule l\'autre'], correct:1 },
        { q: 'Quelle valeur de "display" annule le box model standard ?', options:['block','inline','inline-block'], correct:1 },
        { q: 'Comment emp\u00eacher un enfant de d\u00e9passer son parent ?', options:['overflow: hidden;','max-width: 100%;','Les deux sont possibles'], correct:2 },
        { q: 'Quelle propri\u00e9t\u00e9 d\u00e9finit la largeur minimale d\'un \u00e9l\u00e9ment ?', options:['min-width','minimum-width','width: min;'], correct:0 }
      ]
    },
    'css-flexbox': {
      title: 'Flexbox',
      questions: [
        { q: 'Quelle propri\u00e9t\u00e9 active Flexbox sur un conteneur ?', options:['display: flex;','display: block;','position: flex;'], correct:0 },
        { q: 'Quelle propri\u00e9t\u00e9 d\u00e9finit la direction des \u00e9l\u00e9ments flexibles ?', options:['flex-flow','flex-direction','flex-orient'], correct:1 },
        { q: 'Quelle valeur de justify-content espace uniform\u00e9ment les \u00e9l\u00e9ments ?', options:['space-between','space-around','space-evenly'], correct:2 },
        { q: 'Que fait "flex-wrap: wrap;" ?', options:['Passe les \u00e9l\u00e9ments \u00e0 la ligne','Emp\u00eache le passage \u00e0 la ligne','Inverse l\'ordre'], correct:0 },
        { q: 'Quelle propri\u00e9t\u00e9 aligne les \u00e9l\u00e9ments sur l\'axe transversal ?', options:['align-items','justify-content','align-content'], correct:0 },
        { q: 'Que signifie "flex: 1;" sur un enfant ?', options:['Prend tout l\'espace disponible','Prend 1 % de l\'espace','Affiche l\'\u00e9l\u00e9ment en bloc'], correct:0 },
        { q: 'Quelle diff\u00e9rence entre align-items et align-content ?', options:['align-items aligne une ligne, align-content g\u00e8re plusieurs lignes','C\'est identique','align-content n\'existe pas'], correct:0 },
        { q: 'Que fait "order: -1;" sur un \u00e9l\u00e9ment flex ?', options:['Le place avant les autres','Le cache','Le place apr\u00e8s les autres'], correct:0 },
        { q: 'Quelle propri\u00e9t\u00e9 emp\u00eache un enfant flex de r\u00e9tr\u00e9cir ?', options:['flex-grow: 0;','flex-shrink: 0;','flex-basis: 0;'], correct:1 },
        { q: 'Comment centrer parfaitement un \u00e9l\u00e9ment en Flexbox ?', options:['justify-content: center; align-items: center;','margin: auto;','Les deux fonctionnent'], correct:2 }
      ]
    },
    'css-t9': {
      title: 'Typographie CSS',
      questions: [
        { q: 'Quelle propri\u00e9t\u00e9 d\u00e9finit la police de caract\u00e8res ?', options:['font-family','font-type','font-name'], correct:0 },
        { q: 'Quelle valeur de font-weight correspond au gras ?', options:['400','700','900'], correct:1 },
        { q: 'Comment charger une police personnalis\u00e9e avec CSS ?', options:['@font-face','@import font()','@font-family'], correct:0 },
        { q: 'Que contr\u00f4le "line-height" ?', options:['L\'espace entre les lignes','La hauteur des lettres','La taille de la police'], correct:0 },
        { q: 'Quelle propri\u00e9t\u00e9 met le texte en majuscules ?', options:['text-transform: uppercase;','font-variant: caps;','text-decoration: uppercase;'], correct:0 },
        { q: 'Quelle unit\u00e9 est pr\u00e9f\u00e9rable pour l\'accessibilit\u00e9 des tailles de police ?', options:['px','rem','pt'], correct:1 },
        { q: 'Que fait "letter-spacing: 2px;" ?', options:['Ajoute un espacement entre les lettres','Ajoute un espacement entre les mots','Augmente la taille des lettres'], correct:0 },
        { q: 'Quelle propri\u00e9t\u00e9 emp\u00eache le texte de d\u00e9passer ?', options:['overflow-wrap','text-overflow','Les deux sont utiles'], correct:2 },
        { q: 'Comment barrer un texte horizontalement ?', options:['text-decoration: line-through;','text-style: strikethrough;','text-transform: strike;'], correct:0 },
        { q: 'Quelle propri\u00e9t\u00e9 contr\u00f4le l\'espacement entre les mots ?', options:['word-spacing','letter-spacing','text-spacing'], correct:0 }
      ]
    },
    'css-t10': {
      title: 'Accessibilit\u00e9 CSS',
      questions: [
        { q: 'Que d\u00e9tecte "prefers-reduced-motion" ?', options:['Si l\'utilisateur pr\u00e9f\u00e8re moins d\'animations','Si l\'utilisateur a un \u00e9cran lent','Si le navigateur ne supporte pas les animations'], correct:0 },
        { q: 'Quelle media query d\u00e9tecte le th\u00e8me sombre ?', options:['prefers-color-scheme: dark','color-scheme: dark','theme: dark'], correct:0 },
        { q: 'Quel s\u00e9lecteur cible un \u00e9l\u00e9ment focalis\u00e9 au clavier uniquement ?', options:[':focus',':focus-visible',':keyboard-focus'], correct:1 },
        { q: 'Pourquoi \u00e9viter "outline: none;" sans alternative ?', options:['Cela supprime l\'indicateur de focus pour les utilisateurs clavier','Cela ralentit le navigateur','Cela casse le design'], correct:0 },
        { q: 'Que mesure le "contrast ratio" en CSS ?', options:['Le rapport de contraste entre texte et fond','La luminosit\u00e9 de l\'\u00e9cran','La taille relative des polices'], correct:0 },
        { q: 'Quelle propri\u00e9t\u00e9 pr\u00e9serve l\'espace blanc et les retours \u00e0 la ligne ?', options:['white-space: pre;','word-break: keep-all;','overflow-wrap: normal;'], correct:0 },
        { q: 'Que signifie "prefers-reduced-transparency" ?', options:['L\'utilisateur veut moins de transparence','L\'utilisateur veut des couleurs vives','L\'utilisateur utilise un th\u00e8me sombre'], correct:0 },
        { q: 'Comment cibler un lien visit\u00e9 diff\u00e9remment ?', options:['a:visited','a:visited-link','a:clicked'], correct:0 },
        { q: 'Pourquoi utiliser du texte plut\u00f4t qu\'une image pour des informations ?', options:['Pour les lecteurs d\'\u00e9cran et le zoom','C\'est plus l\u00e9ger','Les images ne sont pas support\u00e9es partout'], correct:0 },
        { q: 'Quelle propri\u00e9t\u00e9 garantit une taille minimale des cibles tactiles ?', options:['min-height et min-width','touch-size','click-area'], correct:0 }
      ]
    },
    'css-t11': {
      title: 'Positionnement CSS',
      questions: [
        { q: 'Quelle est la valeur par d\u00e9faut de "position" ?', options:['static','relative','absolute'], correct:0 },
        { q: 'Avec "position: absolute;", l\'\u00e9l\u00e9ment se positionne par rapport \u00e0 quoi ?', options:['Son parent positionn\u00e9 le plus proche','La fen\u00eatre du navigateur','Son parent direct'], correct:0 },
        { q: 'Que fait "position: sticky;" ?', options:['Reste coll\u00e9 jusqu\'\u00e0 un seuil puis d\u00e9file','Reste fixe en permanence','Suit la souris'], correct:0 },
        { q: 'Comment empiler des \u00e9l\u00e9ments positionn\u00e9s ?', options:['Avec z-index','Avec stack-order','Avec layer'], correct:0 },
        { q: 'Avec "position: fixed;", l\'\u00e9l\u00e9ment est positionn\u00e9 par rapport \u00e0 quoi ?', options:['La fen\u00eatre du viewport','Son parent','Le document entier'], correct:0 },
        { q: 'Que fait "top: 0; left: 0;" sur un \u00e9l\u00e9ment absolute ?', options:['Le colle en haut \u00e0 gauche du conteneur de r\u00e9f\u00e9rence','Le colle en haut \u00e0 gauche de la page','Ne fait rien sans position'], correct:0 },
        { q: 'Quelle valeur de "float" est celle par d\u00e9faut ?', options:['left','right','none'], correct:2 },
        { q: 'Quel effet "float" a-t-il sur les \u00e9l\u00e9ments voisins ?', options:['Les \u00e9l\u00e9ments inline contournent l\'\u00e9l\u00e9ment flottant','Les \u00e9l\u00e9ments se superposent','Rien, float est obsol\u00e8te'], correct:0 },
        { q: 'Comment emp\u00eacher un \u00e9l\u00e9ment de flotter \u00e0 c\u00f4t\u00e9 d\'un floated ?', options:['clear: both;','stop-float: true;','display: no-float;'], correct:0 },
        { q: 'Quel est le risque d\'un z-index tr\u00e8s \u00e9lev\u00e9 ?', options:['Rendre difficile la gestion de la superposition','Casser le navigateur','Ralentir la page'], correct:0 }
      ]
    },
    'css-t12': {
      title: 'S\u00e9lecteurs d\'attributs',
      questions: [
        { q: 'Quel s\u00e9lecteur cible les \u00e9l\u00e9ments avec l\'attribut "disabled" ?', options:['[disabled]','[attr=disabled]','[disabled=true]'], correct:0 },
        { q: 'Que signifie "[attr^=val]" ?', options:['L\'attribut commence par "val"','L\'attribut contient "val"','L\'attribut se termine par "val"'], correct:0 },
        { q: 'Quel s\u00e9lecteur cible un attribut qui se termine par ".pdf" ?', options:['[href$=.pdf]','[href^=.pdf]','[href*=.pdf]'], correct:0 },
        { q: 'Que signifie "[attr*=val]" ?', options:['L\'attribut contient "val" n\'importe o\u00f9','L\'attribut est exactement "val"','L\'attribut commence par "val"'], correct:0 },
        { q: 'Quel s\u00e9lecteur cible un attribut dont la valeur contient "mot" s\u00e9par\u00e9 par des espaces ?', options:['[attr~=mot]','[attr*=mot]','[attr|=mot]'], correct:0 },
        { q: 'Que fait "[attr|=fr]" ?', options:['Cible les valeurs "fr" ou commen\u00e7ant par "fr-"','Cible les valeurs contenant "fr"','Cible les valeurs finissant par "fr"'], correct:0 },
        { q: 'Comment cibler un input de type "email" ?', options:['[type=email]','input[type="email"]','Les deux fonctionnent'], correct:2 },
        { q: 'Que signifie "[class~=important]" ?', options:['La classe contient le mot "important"','La classe commence par "important"','La classe se termine par "important"'], correct:0 },
        { q: 'Peut-on combiner plusieurs s\u00e9lecteurs d\'attributs ?', options:['Oui, comme [attr1][attr2]','Non, un seul \u00e0 la fois','Oui, mais seulement avec des classes'], correct:0 },
        { q: 'Quel s\u00e9lecteur d\'attribut est insensible \u00e0 la casse ?', options:['[attr=value i]','[attr=value s]','[attr=value ci]'], correct:0 }
      ]
    },
    'css-RD': {
      title: 'Responsive Design',
      questions: [
        { q: 'Quelle r\u00e8gle conditionnelle adapte le style \u00e0 la largeur de l\'\u00e9cran ?', options:['@media','@viewport','@responsive'], correct:0 },
        { q: 'Que signifie "mobile-first" en CSS ?', options:['\u00c9crire d\'abord le style mobile, puis ajouter des surcharges avec min-width','Cibler uniquement les mobiles','Utiliser max-width pour tout'], correct:0 },
        { q: 'Que fait "min-width: 768px" dans une media query ?', options:['Applique le style si l\'\u00e9cran fait au moins 768px','Applique le style si l\'\u00e9cran fait moins de 768px','Cible les imprimantes'], correct:0 },
        { q: 'Quelle propri\u00e9t\u00e9 permet des conteneurs adaptatifs sans media queries globales ?', options:['container queries','element queries','responsive queries'], correct:0 },
        { q: 'Quel meta tag viewport est essentiel pour le responsive ?', options:['<meta viewport="width=device-width">','<meta name="viewport" content="width=device-width, initial-scale=1">','<meta responsive="true">'], correct:1 },
        { q: 'Que permet "grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));" ?', options:['Cr\u00e9e automatiquement des colonnes adaptatives','Force 3 colonnes fixes','Cr\u00e9e une seule colonne'], correct:0 },
        { q: 'Quelle unit\u00e9 est particuli\u00e8rement utile pour le responsive ?', options:['vw / vh / rem / %','px / pt / cm','em / ex'], correct:0 },
        { q: 'Quelle est la diff\u00e9rence entre "max-width" et "width" en responsive ?', options:['max-width permet de r\u00e9tr\u00e9cir plus que la valeur fix\u00e9e','C\'est identique','max-width est plus prioritaire'], correct:0 },
        { q: 'Que signifie "prefers-color-scheme" dans @media ?', options:['D\u00e9tecte si l\'utilisateur pr\u00e9f\u00e8re un th\u00e8me clair ou sombre','D\u00e9tecte la luminosit\u00e9 ambiante','D\u00e9tecte le contraste \u00e9lev\u00e9'], correct:0 },
        { q: 'Quel avantage ont les container queries sur les media queries ?', options:['Elles s\'adaptent \u00e0 la taille du conteneur, pas du viewport','Elles sont plus rapides','Elles fonctionnent sur tous les navigateurs'], correct:0 }
      ]
    },
    'css-VAR': {
      title: 'Variables CSS',
      questions: [
        { q: 'Comment d\u00e9clare-t-on une variable CSS ?', options:['var(--ma-variable)','--ma-variable: valeur;','$ma-variable: valeur;'], correct:1 },
        { q: 'Quelle fonction lit une variable CSS ?', options:['var(--nom)','get(--nom)','css(--nom)'], correct:0 },
        { q: 'Que se passe-t-il si une variable CSS n\'est pas d\u00e9finie ?', options:['La propri\u00e9t\u00e9 utilise la valeur par d\u00e9faut ou est invalide','Le navigateur plante','La variable vaut 0'], correct:0 },
        { q: 'Comment d\u00e9finir une valeur de repli pour une variable ?', options:['var(--nom, valeur_repli)','var(--nom, fallback: valeur)','var(--nom) fallback valeur'], correct:0 },
        { q: 'O\u00f9 d\u00e9clarer des variables globales accessibles partout ?', options:['Dans :root','Dans body','Dans n\'importe quel s\u00e9lecteur'], correct:0 },
        { q: 'Les variables CSS h\u00e9ritent-elles ?', options:['Oui, comme les autres propri\u00e9t\u00e9s CSS','Non, elles sont toujours globales','Uniquement si d\u00e9clar\u00e9es dans :root'], correct:0 },
        { q: 'Peut-on utiliser une variable dans une autre variable ?', options:['Oui, ex: --a: var(--b);','Non, ce n\'est pas possible','Oui, mais seulement avec calc()'], correct:0 },
        { q: 'Que produit "var(--inexistant)" sans valeur de repli ?', options:['La valeur initiale de la propri\u00e9t\u00e9','Une erreur CSS','Rien, la ligne est ignor\u00e9e'], correct:0 },
        { q: 'Les variables CSS sont-elles dynamiques ?', options:['Oui, elles se mettent \u00e0 jour si modifi\u00e9es via JS ou media queries','Non, elles sont fig\u00e9es au chargement','Uniquement dans les animations'], correct:0 },
        { q: 'Quel est l\'avantage des variables CSS par rapport aux pr\u00e9processeurs ?', options:['Accessibles et modifiables au runtime','Plus rapides \u00e0 compiler','Supportent les calculs complexes'], correct:0 }
      ]
    },
    'css-GRID': {
      title: 'CSS Grid',
      questions: [
        { q: 'Quelle propri\u00e9t\u00e9 active CSS Grid sur un conteneur ?', options:['display: grid;','display: flex;','display: block;'], correct:0 },
        { q: 'Que d\u00e9finit "grid-template-columns: 1fr 2fr 1fr;" ?', options:['3 colonnes avec un ratio 1:2:1','3 colonnes de taille \u00e9gale','2 colonnes'], correct:0 },
        { q: 'Quelle propri\u00e9t\u00e9 d\u00e9finit l\'espace entre les cellules ?', options:['grid-gap / gap','grid-spacing','grid-margin'], correct:0 },
        { q: 'Que fait "grid-column: 1 / 3;" ?', options:['L\'\u00e9l\u00e9ment s\'\u00e9tend de la ligne 1 \u00e0 la ligne 3','L\'\u00e9l\u00e9ment va dans la colonne 3','L\'\u00e9l\u00e9ment occupe les colonnes 1 et 3'], correct:0 },
        { q: 'Que signifie "auto-fill" dans repeat() ?', options:['Remplit l\'espace avec autant de pistes que possible','Cr\u00e9e une seule piste','Remplit avec des valeurs al\u00e9atoires'], correct:0 },
        { q: '\u00c0 quoi sert "minmax(200px, 1fr)" ?', options:['D\u00e9finit une taille minimale de 200px et maximale de 1fr','D\u00e9finit une taille fixe de 200px','Cr\u00e9e une piste de 200px \u00e0 1fr minimum'], correct:0 },
        { q: 'Quelle propri\u00e9t\u00e9 nomme une zone de grille ?', options:['grid-area','grid-cell','grid-zone'], correct:0 },
        { q: 'Que fait "grid-template-areas" ?', options:['Permet de nommer des zones pour placer les \u00e9l\u00e9ments','Cr\u00e9e des lignes de grille','D\u00e9finit la taille des colonnes'], correct:0 },
        { q: 'Quelle diff\u00e9rence entre "auto-fill" et "auto-fit" ?', options:['auto-fit r\u00e9duit les pistes vides, auto-fill les maintient','C\'est identique','auto-fill est plus r\u00e9cent'], correct:0 },
        { q: 'Comment centrer un \u00e9l\u00e9ment dans une cellule de grille ?', options:['justify-items et align-items sur le conteneur','margin: auto;','Les deux fonctionnent'], correct:2 }
      ]
    },
    'css-ANIM': {
      title: 'Animations CSS',
      questions: [
        { q: 'Quelle propri\u00e9t\u00e9 d\u00e9clenche une transition CSS ?', options:['transition','animation','transform'], correct:0 },
        { q: 'Que fait "transform: rotate(45deg);" ?', options:['Fait pivoter l\'\u00e9l\u00e9ment de 45 degr\u00e9s','D\u00e9place l\'\u00e9l\u00e9ment de 45px','Agrandit l\'\u00e9l\u00e9ment de 45 %'], correct:0 },
        { q: 'Comment d\u00e9finir une s\u00e9quence d\'animation avec plusieurs \u00e9tapes ?', options:['@keyframes','@animation','@steps'], correct:0 },
        { q: 'Quelle propri\u00e9t\u00e9 d\u00e9finit la dur\u00e9e d\'une animation ?', options:['animation-duration','animation-speed','animation-time'], correct:0 },
        { q: 'Que fait "animation-iteration-count: infinite;" ?', options:['R\u00e9p\u00e8te l\'animation ind\u00e9finiment','Joue l\'animation une fois','Joue l\'animation 2 fois'], correct:0 },
        { q: 'Quelle fonction de timing acc\u00e9l\u00e8re puis ralentit ?', options:['ease-in-out','linear','steps()'], correct:0 },
        { q: 'Quel filtre applique un flou \u00e0 un \u00e9l\u00e9ment ?', options:['filter: blur(5px);','filter: blurry(5px);','filter: blur-radius(5px);'], correct:0 },
        { q: 'Quelle propri\u00e9t\u00e9 retarde le d\u00e9but d\'une animation ?', options:['animation-delay','animation-wait','animation-start'], correct:0 },
        { q: 'Que fait "animation-fill-mode: forwards;" ?', options:['Conserve l\'\u00e9tat final apr\u00e8s l\'animation','Rejoue l\'animation en avant','Applique l\'\u00e9tat initial avant l\'animation'], correct:0 },
        { q: 'Quelle propri\u00e9t\u00e9 est plus performante pour les animations (ne d\u00e9clenche pas de reflow) ?', options:['transform et opacity','width et height','margin et padding'], correct:0 }
      ]
    }
  };
}


const _course = window.location.pathname.includes('/css/') || window.location.pathname.includes('/css-topics/') ? 'css' : 'html';

document.querySelectorAll('.quiz').forEach(quizEl => {
  const sessionId = quizEl.dataset.session || 'unknown';
  const sessions = getSessions();
  const session = sessions[_course + '-' + sessionId];
  if (!session) return;

  const title = quizEl.querySelector('.quiz-title');
  if (title) title.textContent = `Quiz — ${session.title}`;

  const container = quizEl.querySelector('.quiz-questions');
  if (!container) return;

  let html = '';
  let qIdx = 0;
  for (const sq of session.questions) {
    html += `<div class="quiz-question" data-q="${qIdx}">
      <div class="quiz-q-text">${esc(qIdx + 1)}. ${esc(sq.q)}</div>`;
    for (let oi = 0; oi < sq.options.length; oi++) {
      html += `<label class="quiz-option"><input type="radio" name="q${qIdx}" value="${oi}"> ${esc(sq.options[oi])}</label>`;
    }
    html += '</div>';
    qIdx++;
  }

  container.innerHTML = html;

  const submit = quizEl.querySelector('.quiz-submit');
  if (!submit) return;
  submit.disabled = true;

  const scoreEl = quizEl.querySelector('.quiz-score');
  const total = session.questions.length;

  function checkAllAnswered() {
    const answered = container.querySelectorAll('.quiz-question input:checked').length;
    submit.disabled = answered < total;
  }

  container.addEventListener('change', checkAllAnswered);

  submit.addEventListener('click', () => {
    let correct = 0;

    container.querySelectorAll('.quiz-question').forEach((qDiv, idx) => {
      const selected = qDiv.querySelector('input:checked');
      qDiv.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('correct', 'wrong'));

      if (selected) {
        const val = parseInt(selected.value);
        if (val === session.questions[idx].correct) {
          correct++;
          selected.closest('.quiz-option').classList.add('correct');
        } else {
          selected.closest('.quiz-option').classList.add('wrong');
          qDiv.querySelectorAll('.quiz-option')[session.questions[idx].correct].classList.add('correct');
        }
      } else {
        qDiv.querySelectorAll('.quiz-option')[session.questions[idx].correct].classList.add('correct');
      }
    });

    if (scoreEl) scoreEl.textContent = `Score : ${correct} / ${total}`;
    submit.disabled = true;
  });
});


// ── Glossary link injection ─────────────────────────────────────────
(function() {
  const nav = document.querySelector('.topbar-nav');
  if (!nav) return;
  const p = window.location.pathname;
  let href, label;
  if (p.includes('/css/')) { href = 'glossaire-css.html'; label = 'Glossaire CSS'; }
  else if (p.includes('pages/')) { href = 'glossaire-html.html'; label = 'Glossaire HTML'; }
  else { href = 'pages/glossaire-html.html'; label = 'Glossaire HTML'; }
  const a = document.createElement('a');
  a.href = href; a.textContent = label;
  a.className = 'topbar-nav-extra';
  nav.appendChild(a);
})();

// ── Keyboard navigation ───────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  const tag = e.target.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return;

  const nav = document.querySelector('.topbar-nav');
  if (!nav) return;

  const links = [...nav.querySelectorAll('a[href]:not([href="#"])')];
  const currentIdx = links.findIndex(l => l.classList.contains('active') || l.href === window.location.href);

  switch (e.key) {
    case 'ArrowLeft':
      if (currentIdx > 0) { e.preventDefault(); window.location.href = links[currentIdx - 1].href; }
      break;
    case 'ArrowRight':
      if (currentIdx < links.length - 1 && currentIdx >= 0) { e.preventDefault(); window.location.href = links[currentIdx + 1].href; }
      break;
    case 't':
    case 'T':
      toggleSidebar();
      break;
    case 's':
    case 'S':
      e.preventDefault();
      const searchInput = document.getElementById('search-input');
      if (searchInput) searchInput.focus();
      break;
  }
});


// ── Floating table of contents ─────────────────────────────────────
(function initFloatingToc() {
  const content = document.querySelector('.content');
  if (!content) return;

  const headings = content.querySelectorAll('h2[id], h3[id]');
  if (headings.length < 3) return;

  const toc = document.createElement('nav');
  toc.className = 'floating-toc';
  toc.setAttribute('aria-label', 'Table des matières');

  headings.forEach(h => {
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.setAttribute('title', h.textContent);
    toc.appendChild(a);
  });

  document.body.appendChild(toc);

  let lastActive = -1;
  const tocLinks = toc.querySelectorAll('a');

  const scrollObserver = new IntersectionObserver((entries) => {
    let maxIdx = -1;
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = [...headings].indexOf(entry.target);
        if (idx > maxIdx) maxIdx = idx;
      }
    });

    if (maxIdx >= 0 && maxIdx !== lastActive) {
      tocLinks.forEach(l => l.classList.remove('active'));
      if (tocLinks[maxIdx]) tocLinks[maxIdx].classList.add('active');
      lastActive = maxIdx;
    }

    toc.classList.toggle('visible', maxIdx >= 0);
  }, { rootMargin: '-60px 0px -75% 0px', threshold: 0 });

  headings.forEach(h => scrollObserver.observe(h));
})();


// ── Animated diagrams ──────────────────────────────────────────────
(function initAnimatedDiagrams() {
  document.querySelectorAll('.diagram-animated').forEach(diagram => {
    const diagObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.diagram-step').forEach((step, i) => {
          step.style.animation = 'none';
          void step.offsetHeight;
          step.style.animation = `diagFadeIn .5s forwards`;
          step.style.animationDelay = `${.3 + i * .5}s`;
        });
        diagObserver.unobserve(entry.target);
      });
    }, { threshold: .3 });
    diagObserver.observe(diagram);
  });
})();


// ── Interactive code editor (FCC-style: 3 editable tabs left, render right) ──
(function initCodeEditor() {
  function cssPath() {
    const p = window.location.pathname;
    const parts = p.split('/').filter(Boolean);
    const pagesIdx = parts.indexOf('pages');
    if (pagesIdx === -1) return 'css/style.css';
    const depth = parts.length - pagesIdx - 1;
    return '../'.repeat(depth) + 'css/style.css';
  }
  function themeColors() {
    const L = document.documentElement.getAttribute('data-theme') === 'light';
    return { bg: L ? '#FFFFFF' : '#0D1117', text: L ? '#1F2328' : '#E6EDF3', text2: L ? '#59636E' : '#8B949E' };
  }

  const defaultCodes = {
    html: '<!DOCTYPE html>\n<html lang="fr">\n<head>\n  <meta charset="UTF-8">\n  <title>Demo</title>\n</head>\n<body>\n  <h1>Bienvenue</h1>\n  <p id="demo">Ceci est un paragraphe.</p>\n  <button onclick="action()">Cliquez-moi</button>\n</body>\n</html>',
    css: '/* CSS */\nbody { font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; }\nh1 { color: #333; }\np { color: #555; line-height: 1.6; }\nbutton { background: #007bff; color: #fff; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; }\nbutton:hover { background: #0056b3; }',
    js: '// JavaScript\nfunction action() {\n  var p = document.getElementById("demo");\n  if (!p) { console.warn("L\\\'élément #demo est introuvable dans le HTML"); return; }\n  p.textContent = "Vous avez cliqué sur le bouton !";\n  p.style.color = "green";\n}'
  };
  const langLabels = { html: 'HTML', css: 'CSS', js: 'JS' };
  // Determine which tabs to show based on course folder
  const p = window.location.pathname;
  let langOrder;
  if (p.includes('/pages/css/'))  langOrder = ['html', 'css'];
  else                            langOrder = ['html'];

  function buildPage(html, css, js) {
    const th = themeColors();
    const style = css ? '<style>' + css + '</style>' : '';
    const script = js ? '<script>try{\n' + js + '\n}catch(e){console.warn("JS Error:",e.message)}<\/script>' : '';
    return '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
      + '<link rel="stylesheet" href="' + cssPath() + '">' + style
      + '</head><body style="margin:0;padding:20px;background:' + th.bg + ';color:' + th.text + ';font-family:Georgia,serif;line-height:1.7;">'
      + (html || '<p style="color:' + th.text2 + '">Contenu HTML vide</p>')
      + '<div style="margin-top:1.5rem;padding:.5rem;border-radius:6px;background:' + th.text2 + '15;font-size:.8rem;color:' + th.text2 + ';text-align:center;">Rendu final — modifiez le code à gauche puis cliquez Valider</div>'
      + script + '</body></html>';
  }

  document.querySelectorAll('.code-preview-split').forEach(split => {
    const pre = split.querySelector('.code-body pre');
    const previewPanel = split.querySelector('.preview-panel');
    const previewBody = split.querySelector('.preview-body') || previewPanel;
    if (!pre || !previewBody) return;

    const initCode = pre.textContent;
    let primaryLang = pre.dataset.lang || 'html';

    // ── Left panel: tab bar + 3 editors ──
    const codeBody = pre.parentNode;
    pre.remove();

    // Keep lang badge showing primary language
    const langSpan = split.querySelector('.code-header')?.querySelector('.code-lang');
    if (langSpan) langSpan.innerHTML = langLabels[primaryLang] + ' <span class="code-badge code-badge--editable">Modifiable</span>';

    // Editor tab bar
    const editorTabBar = document.createElement('div');
    editorTabBar.className = 'code-editor-tab-bar';

    const editors = {};
    const wraps = {};

    langOrder.forEach((l, i) => {
      const tab = document.createElement('button');
      tab.className = 'code-editor-tab' + (l === primaryLang ? ' active' : '');
      tab.dataset.lang = l;
      tab.textContent = langLabels[l];
      editorTabBar.appendChild(tab);

      const wrap = document.createElement('div');
      wrap.className = 'code-editor-wrap' + (l === primaryLang ? ' active' : '');
      wrap.dataset.lang = l;

      const ed = document.createElement('div');
      ed.contentEditable = 'plaintext-only';
      ed.spellcheck = false;
      ed.className = 'code-editor';
      ed.textContent = l === primaryLang ? initCode : defaultCodes[l];
      wrap.appendChild(ed);
      codeBody.appendChild(wrap);
      editors[l] = ed;
      wraps[l] = wrap;
    });

    codeBody.prepend(editorTabBar);

    // Tab switching on left
    editorTabBar.addEventListener('click', e => {
      const tab = e.target.closest('.code-editor-tab');
      if (!tab) return;
      const l = tab.dataset.lang;
      editorTabBar.querySelectorAll('.code-editor-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      codeBody.querySelectorAll('.code-editor-wrap').forEach(w => w.classList.remove('active'));
      wraps[l].classList.add('active');
    });

    // ── Validate button ──
    let validateBtn = split.querySelector('.code-validate');
    if (!validateBtn) {
      validateBtn = document.createElement('button');
      validateBtn.className = 'code-validate';
      validateBtn.textContent = '▶ Valider';
      split.querySelector('.code-header')?.after(validateBtn);
    }

    // ── Right panel: just iframe (no label, no tabs) ──
    if (split.querySelector('.preview-label')) split.querySelector('.preview-label').remove();
    previewBody.innerHTML = '';
    const iframe = document.createElement('iframe');
    iframe.className = 'code-preview-iframe';
    previewBody.appendChild(iframe);

    // Render
    function render(includeJS) {
      const th = themeColors();
      const h = (editors.html?.textContent || '').trim();
      const c = (editors.css?.textContent || '').trim();
      const j = includeJS && (editors.js?.textContent || '').trim();
      if (!h && !c && !j) {
        iframe.srcdoc = '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body style="display:flex;align-items:center;justify-content:center;min-height:200px;margin:0;background:' + th.bg + ';color:' + th.text2 + ';font-size:.9rem;opacity:.6;">✅ ' + (includeJS ? 'Code vide' : 'Chargez le code avec ▶ Valider') + ' — écrivez du code à gauche puis cliquez Valider</body></html>';
        return;
      }
      iframe.srcdoc = buildPage(h, c, j);
    }

    validateBtn.addEventListener('click', () => render(true));
    render(false);
    split.classList.add('code-visual');
  });
})();

// ── 2. Non-visual / read-only blocks (standalone .code-block) ──
document.querySelectorAll('.code-block').forEach(block => {
  if (block.closest('.code-preview-split')) return;

  const pre = block.querySelector('.code-body pre');
  const header = block.querySelector('.code-header');
  if (!pre) return;

  const lang = pre.dataset.lang || 'html';

    // Add explanation box after code-body
    const body = block.querySelector('.code-body');
    if (!body) return;

    const info = document.createElement('div');
    info.className = 'code-static-info';

    const explanations = {
      html: [
        'Cet exemple illustre la structure HTML présentée ci-dessus.',
        'Copiez ce code dans votre fichier .html et ouvrez-le dans un navigateur pour voir le résultat.',
        'Le code ci-dessus n\'est pas modifiable ici car il sert de référence fixe.'
      ],
      css: [
        'Cette règle CSS s\'applique aux éléments ciblés par le sélecteur.',
        'Copiez ce code dans votre fichier .css pour l\'essayer sur votre propre page.',
        'Ce bloc est en lecture seule car il sert de référence.'
      ],
    };
    const exts = { html: 'html', css: 'css' };

    const items = (explanations[lang] || explanations.html).map(t => '<li>' + t + '</li>').join('');
    info.innerHTML =
      '<div class="code-static-title">📖 Code de référence — non modifiable</div>'
      + '<ol>' + items + '</ol>'
      + '<div class="code-static-copy">💡 Utilisez le bouton <strong>COPIER</strong> en haut du bloc pour coller ce code dans votre éditeur.</div>';

    body.after(info);
    block.classList.add('code-static');
  });


// ── Reveal on scroll ───────────────────────────────────────────────
const revealEls = document.querySelectorAll(
  '.session-card, .home-hero, .callout, .grid-2 > div'
);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.animate(
        [
          { opacity: 0, transform: 'translateY(30px) scale(.98)' },
          { opacity: 1, transform: 'translateY(0) scale(1)' }
        ],
        {
          duration: 600,
          easing: 'cubic-bezier(.2,.8,.2,1)',
          fill: 'forwards'
        }
      );

      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.willChange = 'transform, opacity';
    revealObserver.observe(el);
  });
}


// ── Magnetic hover effect ──────────────────────────────────────────
if (!reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll('.session-card').forEach(card => {
    let raf = null;

    card.addEventListener('mousemove', (e) => {
      if (raf) cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        card.style.transform = `
          perspective(600px)
          rotateX(${y * -6}deg)
          rotateY(${x * 6}deg)
          scale(1.03)
        `;
      });
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)';
    });
  });
}


// ── Syntax highlighting ────────────────────────────────────────────
function highlightHTML(code) {
  code = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return code.replace(
    /(<!--[\s\S]*?-->)|(&lt;!DOCTYPE html&gt;)|(&lt;\/?)([\w-]+)((?:\s[^&]*?)?)(\/?)(&gt;)|("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')/gi,
    (m, comment, doctype, lt, tagName, attrs, slash, gt, dq, sq) => {
      if (comment) return '<span class="tok-comment">' + comment + '</span>';
      if (doctype) return '<span class="tok-comment">' + doctype + '</span>';
      if (lt !== undefined) {
        const attrHtml = (attrs || '').replace(
          /(\s)([\w-:]+)(?:(=)("([^"]*)"))?/g,
          (__, space, attr, eq) => {
            if (eq !== undefined)
              return space + '<span class="tok-attr">' + attr + '</span><span class="tok-punct">=</span><span class="tok-val">"' + arguments[5] + '"</span>';
            return space + '<span class="tok-attr">' + attr + '</span>';
          }
        );
        return '<span class="tok-tag">' + lt + tagName + '</span>' + attrHtml + '<span class="tok-tag">' + (slash||'') + gt + '</span>';
      }
      if (dq) return '<span class="tok-val">' + dq + '</span>';
      if (sq) return '<span class="tok-val">' + sq + '</span>';
      return m;
    }
  );
}

function highlightCSS(code) {
  return code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-comment">$1</span>')
    .replace(/([-\w]+)\s*(?=:)/g, '<span class="tok-attr">$1</span>')
    .replace(/:\s*([^;{}]+)/g, (_, val) => ': <span class="tok-val">' + val.trim() + '</span>')
    .replace(/([@#.]?[-\w]+\s*)(?={)/g, '<span class="tok-tag">$1</span>');
}

document.querySelectorAll('.code-body pre').forEach(pre => {
  const lang = pre.dataset.lang || 'html';
  const code = pre.textContent;
  if (lang === 'html') pre.innerHTML = highlightHTML(code);
  else if (lang === 'css') pre.innerHTML = highlightCSS(code);
});


// ── Live CSS preview for contenteditable editors ─────────────────────
(function initCSSLivePreview() {
  document.querySelectorAll('.code-preview-split').forEach(split => {
    const editor = split.querySelector('.code-body .code-editor');
    const iframe = split.querySelector('.code-preview-iframe');
    if (!editor || !iframe) return;

    const srcdoc = iframe.getAttribute('srcdoc') || '';
    const styleMatch = srcdoc.match(/<style>[\s\S]*?<\/style>/);
    let before, after;
    if (styleMatch) {
      before = srcdoc.slice(0, styleMatch.index);
      after = srcdoc.slice(styleMatch.index + styleMatch[0].length);
    } else {
      const headEnd = srcdoc.indexOf('</head>');
      before = headEnd === -1 ? srcdoc : srcdoc.slice(0, headEnd);
      after = headEnd === -1 ? '' : srcdoc.slice(headEnd);
    }

    function updatePreview() {
      const css = editor.textContent.trim();
      iframe.srcdoc = before + '<style>' + css + '</style>' + after;
    }

    editor.addEventListener('input', updatePreview);
    updatePreview();
  });
})();


// ── Presentation mode ──────────────────────────────────────────────────
(function initPresentationMode() {
  function fsReq() {
    var e = document.documentElement;
    (e.requestFullscreen || e.webkitRequestFullscreen || e.msRequestFullscreen).call(e);
  }
  function fsExit() {
    (document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen).call(document);
  }
  function fsEl() {
    return document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
  }

  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = (window.__BASE || '') + '/css/presentation.css';
  document.head.appendChild(link);

  var saved = localStorage.getItem('cetemoh-presentation');
  if (saved === 'on') document.body.classList.add('presentation-mode');

  var topbar = document.querySelector('.topbar');
  if (!topbar) return;

  var btn = document.createElement('button');
  btn.className = 'presentation-toggle';
  btn.setAttribute('aria-label', 'Activer/désactiver le mode présentation');
  btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> Pr\u00e9sentation';

  if (document.body.classList.contains('presentation-mode')) {
    btn.classList.add('active');
  }

  function setMode(on) {
    document.body.classList.toggle('presentation-mode', on);
    btn.classList.toggle('active', on);
    localStorage.setItem('cetemoh-presentation', on ? 'on' : 'off');
    if (on) window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  btn.addEventListener('click', function() {
    var on = !document.body.classList.contains('presentation-mode');
    setMode(on);
    if (on) { try { fsReq(); } catch(e) {} }
    else { try { fsExit(); } catch(e) {} }
  });

  document.addEventListener('fullscreenchange', function sync() {
    if (!fsEl() && document.body.classList.contains('presentation-mode')) setMode(false);
  });
  document.addEventListener('webkitfullscreenchange', function sync() {
    if (!fsEl() && document.body.classList.contains('presentation-mode')) setMode(false);
  });

  var hamburger = topbar.querySelector('.hamburger');
  var themeToggle = topbar.querySelector('.theme-toggle');
  if (hamburger) {
    hamburger.parentNode.insertBefore(btn, hamburger);
  } else if (themeToggle) {
    themeToggle.parentNode.insertBefore(btn, themeToggle.nextSibling);
  } else {
    topbar.appendChild(btn);
  }
})();
