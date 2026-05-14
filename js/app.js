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
    desc: 'Un cours structuré en 10 séances pour maîtriser le style et la mise en page — du sélecteur à l\'animation.',
    tags: ['Sélecteurs', 'Couleurs', 'Box Model', 'Backgrounds', 'Position', 'Flexbox', 'Grid', 'Responsive', 'Animations', 'Variables'],
    nav: [
      { label: 'Séance 1', href: 'pages/css/seance1-css.html' },
      { label: 'Séance 2', href: 'pages/css/seance2-css.html' },
      { label: 'Séance 3', href: 'pages/css/seance3-css.html' },
      { label: 'Séance 4', href: 'pages/css/seance4-css.html' },
      { label: 'Séance 5', href: 'pages/css/seance5-css.html' },
      { label: 'Séance 6', href: 'pages/css/seance6-css.html' },
      { label: 'Séance 7', href: 'pages/css/seance7-css.html' },
      { label: 'Séance 8', href: 'pages/css/seance8-css.html' },
      { label: 'Séance 9', href: 'pages/css/seance9-css.html' },
      { label: 'Séance 10', href: 'pages/css/seance10-css.html' },
    ]
  },
  php: {
    brand: 'Cours PHP',
    highlight: 'PHP',
    subtitle: 'Pour apprenants avec quelques bases en programmation',
    desc: 'Un cours structuré en 10 séances pour maîtriser PHP côté serveur — des variables au CRUD.',
    tags: ['Variables', 'Opérateurs', 'Conditions', 'Boucles', 'Fonctions', 'Formulaires', 'Sessions', 'PDO', 'CRUD', 'POO'],
    nav: [
      { label: 'Séance 1', href: 'pages/php/seance1-php.html' },
      { label: 'Séance 2', href: 'pages/php/seance2-php.html' },
      { label: 'Séance 3', href: 'pages/php/seance3-php.html' },
      { label: 'Séance 4', href: 'pages/php/seance4-php.html' },
      { label: 'Séance 5', href: 'pages/php/seance5-php.html' },
      { label: 'Séance 6', href: 'pages/php/seance6-php.html' },
      { label: 'Séance 7', href: 'pages/php/seance7-php.html' },
      { label: 'Séance 8', href: 'pages/php/seance8-php.html' },
      { label: 'Séance 9', href: 'pages/php/seance9-php.html' },
      { label: 'Séance 10', href: 'pages/php/seance10-php.html' },
    ]
  },
  js: {
    brand: 'Cours JavaScript',
    highlight: 'JavaScript',
    subtitle: 'Pour apprenants avec quelques bases en programmation',
    desc: 'Un cours structuré en 10 séances pour maîtriser JavaScript — du DOM aux APIs asynchrones.',
    tags: ['Variables', 'Conditions', 'Fonctions', 'Objets', 'Tableaux', 'DOM', 'Événements', 'JSON', 'Fetch', 'Modules'],
    nav: [
      { label: 'Séance 1', href: 'pages/js/seance1-js.html' },
      { label: 'Séance 2', href: 'pages/js/seance2-js.html' },
      { label: 'Séance 3', href: 'pages/js/seance3-js.html' },
      { label: 'Séance 4', href: 'pages/js/seance4-js.html' },
      { label: 'Séance 5', href: 'pages/js/seance5-js.html' },
      { label: 'Séance 6', href: 'pages/js/seance6-js.html' },
      { label: 'Séance 7', href: 'pages/js/seance7-js.html' },
      { label: 'Séance 8', href: 'pages/js/seance8-js.html' },
      { label: 'Séance 9', href: 'pages/js/seance9-js.html' },
      { label: 'Séance 10', href: 'pages/js/seance10-js.html' },
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
(function initSearch() {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;

  const wrap = document.createElement('div');
  wrap.className = 'search-wrap';
  wrap.innerHTML = `<input type="text" placeholder="Rechercher..." id="search-input" spellcheck="false">
    <span class="search-icon">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    </span>`;

  const hamburger = topbar.querySelector('.hamburger');
  if (hamburger) {
    hamburger.parentNode.insertBefore(wrap, hamburger);
  } else {
    topbar.appendChild(wrap);
  }

  const input = wrap.querySelector('input');
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  const title = sidebar.querySelector('.sidebar-title');
  const hint = document.createElement('div');
  hint.className = 'sidebar-search-hint';
  hint.textContent = 'Filtrage par recherche...';
  if (title) {
    title.after(hint);
  } else {
    sidebar.prepend(hint);
  }

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    const items = sidebar.querySelectorAll('.sidebar-item');
    let visibleCount = 0;

    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      const match = !q || text.includes(q);
      item.classList.toggle('hidden', !match);
      if (match) visibleCount++;
    });

    hint.textContent = q ? `${visibleCount} résultat(s)` : 'Filtrage par recherche...';
  });
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
    const total = document.documentElement.scrollHeight - window.innerHeight;
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
    // ===================== PHP =====================
    'php-01': {
      title: 'Introduction & Syntaxe',
      questions: [
        { q: 'Que signifie PHP ?', options: ['PHP: Hypertext Preprocessor', 'Personal Home Page', 'Private Host Protocol'], correct: 0 },
        { q: 'Comment d\u00e9buter du code PHP ?', options: ['&lt;?php', '&lt;script php&gt;', '&lt;% php'], correct: 0 },
        { q: 'Quel symbole pr\u00e9c\u00e8de les variables PHP ?', options: ['$', '@', '&'], correct: 0 },
        { q: 'Quelle fonction affiche du texte en PHP ?', options: ['write', 'echo', 'display'], correct: 1 },
        { q: 'Quelle fonction affiche des informations d\'une variable ?', options: ['print_r', 'var_dump', 'Les deux'], correct: 2 },
        { q: 'Quels sont les types de base en PHP ?', options: ['String int float bool', 'Text number bool decimal', 'Char int double bool'], correct: 0 },
        { q: 'Comment \u00e9crire un commentaire une ligne en PHP ?', options: ['// commentaire', '# commentaire', 'Les deux'], correct: 2 },
        { q: 'Comment \u00e9crire un commentaire multi-lignes ?', options: ['/* commentaire */', '<!-- commentaire -->', '// commentaire //'], correct: 0 },
        { q: 'Quelle fonction affiche le type d\'une variable ?', options: ['gettype()', 'typeof()', 'vartype()'], correct: 0 },
        { q: 'PHP est ex\u00e9cut\u00e9...', options: ['C\u00f4t\u00e9 serveur', 'C\u00f4t\u00e9 client', 'C\u00f4t\u00e9 navigateur'], correct: 0 }
      ]
    },
    'php-02': {
      title: 'Op\u00e9rateurs & Cha\u00eenes',
      questions: [
        { q: 'Quel op\u00e9rateur concat\u00e8ne deux cha\u00eenes ?', options: ['+', '.', '&'], correct: 1 },
        { q: 'Que retourne 10 % 3 ?', options: ['1', '3', '3.33'], correct: 0 },
        { q: 'Que compare l\'op\u00e9rateur === ?', options: ['Valeur et type', 'Valeur seulement', 'Type seulement'], correct: 0 },
        { q: 'Que compare l\'op\u00e9rateur == ?', options: ['Valeur et type', 'Valeur seulement', 'Type seulement'], correct: 1 },
        { q: 'Quel op\u00e9rateur logique signifie ET ?', options: ['&&', '||', '!'], correct: 0 },
        { q: 'Quel op\u00e9rateur logique signifie OU ?', options: ['&&', '||', '!'], correct: 1 },
        { q: 'Quelle fonction calcule la longueur d\'une cha\u00eene ?', options: ['strlen()', 'strlength()', 'len()'], correct: 0 },
        { q: 'Quelle fonction remplace du texte dans une cha\u00eene ?', options: ['str_replace()', 'str_ireplace()', 'Les deux'], correct: 2 },
        { q: 'Comment d\u00e9clarer une constante en PHP ?', options: ['define("NOM", valeur)', 'const NOM = valeur', 'Les deux'], correct: 2 },
        { q: 'Que fait strtolower() ?', options: ['Met en minuscules', 'Met en majuscules', 'Supprime les espaces'], correct: 0 }
      ]
    },
    'php-03': {
      title: 'Conditions',
      questions: [
        { q: 'Quel mot-cl\u00e9 commence une condition ?', options: ['if', 'when', 'switch'], correct: 0 },
        { q: 'Que teste elseif ?', options: ['Une condition alternative', 'Une fin de boucle', 'Une exception'], correct: 0 },
        { q: 'Quel mot-cl\u00e9 termine une condition simple ?', options: ['endif', 'fi', '}'], correct: 2 },
        { q: 'Que permet switch ?', options: ['Tester plusieurs valeurs', 'Tester une condition bool\u00e9enne', 'Tester une boucle'], correct: 0 },
        { q: 'Quel mot-cl\u00e9 casse un switch ?', options: ['stop', 'break', 'exit'], correct: 1 },
        { q: 'Qu\'est-ce que l\'op\u00e9rateur ternaire ?', options: ['condition ? vrai : faux', 'condition ! vrai : faux', 'condition : vrai ? faux'], correct: 0 },
        { q: 'Que fait l\'op\u00e9rateur ?? (null coalescent) ?', options: ['Retourne la valeur ou un d\u00e9faut si null', 'Compare deux valeurs', 'Ajoute deux valeurs'], correct: 0 },
        { q: 'Que v\u00e9rifie isset() ?', options: ['Si une variable existe et n\'est pas null', 'Si une variable est vide', 'Si une variable est vraie'], correct: 0 },
        { q: 'Que v\u00e9rifie empty() ?', options: ['Si une variable est vide', 'Si une variable existe', 'Si une variable est d\u00e9finie'], correct: 0 },
        { q: 'Quel mot-cl\u00e9 correspond \u00e0 "sinon" en PHP ?', options: ['else', 'otherwise', 'sinon'], correct: 0 }
      ]
    },
    'php-04': {
      title: 'Boucles & Tableaux',
      questions: [
        { q: 'Quel mot-cl\u00e9 commence une boucle compt\u00e9e ?', options: ['for', 'while', 'foreach'], correct: 0 },
        { q: 'Quand utiliser while ?', options: ['R\u00e9p\u00e9ter tant qu\'une condition est vraie', 'Parcourir un tableau', 'Compter de 1 \u00e0 10'], correct: 0 },
        { q: 'Quand utiliser foreach ?', options: ['Parcourir un tableau', 'R\u00e9p\u00e9ter un nombre de fois', 'Tant qu\'une condition est vraie'], correct: 0 },
        { q: 'Que fait break dans une boucle ?', options: ['Sort de la boucle', 'Passe \u00e0 l\'it\u00e9ration suivante', 'Recommence la boucle'], correct: 0 },
        { q: 'Que fait continue dans une boucle ?', options: ['Sort de la boucle', 'Passe \u00e0 l\'it\u00e9ration suivante', 'Recommence la boucle'], correct: 1 },
        { q: 'Comment cr\u00e9er un tableau index\u00e9 ?', options: ['$t = [1, 2, 3]', '$t = {1, 2, 3}', '$t = (1, 2, 3)'], correct: 0 },
        { q: 'Comment cr\u00e9er un tableau associatif ?', options: ['$t = ["a" => 1]', '$t = ["a" = 1]', '$t = ["a" : 1]'], correct: 0 },
        { q: 'Comment acc\u00e9der au premier \u00e9l\u00e9ment d\'un tableau ?', options: ['$t[0]', '$t[1]', '$t.first()'], correct: 0 },
        { q: 'Quelle boucle ex\u00e9cute au moins une fois ?', options: ['do-while', 'while', 'for'], correct: 0 },
        { q: 'Quelle fonction ajoute un \u00e9l\u00e9ment \u00e0 un tableau ?', options: ['array_push()', 'array_add()', 'append()'], correct: 0 }
      ]
    },
    'php-05': {
      title: 'Fonctions',
      questions: [
        { q: 'Comment d\u00e9clarer une fonction en PHP ?', options: ['function maFonction()', 'func maFonction()', 'def maFonction()'], correct: 0 },
        { q: 'Quel mot-cl\u00e9 retourne une valeur ?', options: ['return', 'yield', 'stop'], correct: 0 },
        { q: 'Comment d\u00e9finir une valeur par d\u00e9faut ?', options: ['function f($x = 5)', 'function f($x = 5)', 'function f($x def 5)'], correct: 0 },
        { q: 'Que permet le type hinting ?', options: ['Indiquer le type attendu', 'Donner un indice', 'D\u00e9finir un defaut'], correct: 0 },
        { q: 'Qu\'est-ce que la port\u00e9e d\'une variable ?', options: ['Sa visibilit\u00e9 dans le code', 'Sa valeur', 'Son type'], correct: 0 },
        { q: 'Qu\'est-ce qu\'une closure ?', options: ['Une fonction anonyme', 'Une fonction nomm\u00e9e', 'Une classe'], correct: 0 },
        { q: 'Que fait include ?', options: ['Inclut un fichier PHP', 'Inclut une classe', 'Inclut un style'], correct: 0 },
        { q: 'Diff\u00e9rence entre include et require ?', options: ['Require stoppe en cas d\'erreur', 'Include est plus rapide', 'Require est optionnel'], correct: 0 },
        { q: 'Une variable globale dans une fonction...', options: ['Doit \u00eatre d\u00e9clar\u00e9e avec global', 'Est accessible directement', 'N\'existe pas'], correct: 0 },
        { q: 'Combien de valeurs peut retourner return ?', options: ['Une seule', 'Plusieurs', 'Aucune'], correct: 0 }
      ]
    },
    'php-06': {
      title: 'Formulaires & $_GET/$_POST',
      questions: [
        { q: 'Quelle superglobale r\u00e9cup\u00e8re les donn\u00e9es GET ?', options: ['$_GET', '$_POST', '$_REQUEST'], correct: 0 },
        { q: 'Quelle superglobale r\u00e9cup\u00e8re les donn\u00e9es POST ?', options: ['$_GET', '$_POST', '$_REQUEST'], correct: 1 },
        { q: 'Que fait $_REQUEST ?', options: ['Combine $_GET et $_POST', 'Remplace $_GET', 'Ignore $_POST'], correct: 0 },
        { q: 'Qu\'est-ce qu\'une attaque XSS ?', options: ['Injection de script malveillant', 'Injection SQL', 'Vol de session'], correct: 0 },
        { q: 'Que fait strip_tags() ?', options: ['Supprime les balises HTML', 'Ajoute des balises', 'Nettoie les espaces'], correct: 0 },
        { q: 'Que fait trim() ?', options: ['Supprime les espaces au d\u00e9but et fin', 'Supprime tous les espaces', 'Tronque le texte'], correct: 0 },
        { q: 'Comment valider un champ requis ?', options: ['if (empty($_POST["x"]))', 'if ($_POST["x"] == "")', 'Les deux'], correct: 0 },
        { q: 'Quelle m\u00e9thode envoie les donn\u00e9es dans l\'URL ?', options: ['GET', 'POST', 'REQUEST'], correct: 0 },
        { q: 'Quelle m\u00e9thode envoie les donn\u00e9es dans le corps ?', options: ['GET', 'POST', 'BOTH'], correct: 1 },
        { q: 'htmlspecialchars() prot\u00e8ge contre...', options: ['XSS', 'SQL injection', 'CSRF'], correct: 0 }
      ]
    },
    'php-07': {
      title: 'Sessions & Cookies',
      questions: [
        { q: 'Quelle fonction d\u00e9marre une session ?', options: ['session_start()', 'session_begin()', 'start_session()'], correct: 0 },
        { q: 'Comment stocker une donn\u00e9e en session ?', options: ['$_SESSION["key"] = valeur', '$SESSION["key"] = valeur', 'session_set("key", valeur)'], correct: 0 },
        { q: 'Comment cr\u00e9er un cookie en PHP ?', options: ['setcookie()', 'cookie()', 'create_cookie()'], correct: 0 },
        { q: 'O\u00f9 sont stock\u00e9es les sessions c\u00f4t\u00e9 serveur ?', options: ['Dans un fichier temporaire', 'Dans le navigateur', 'Dans la base de donn\u00e9es'], correct: 0 },
        { q: 'Qu\'est-ce qu\'un flash message ?', options: ['Un message affich\u00e9 une seule fois', 'Une animation flash', 'Un message persistant'], correct: 0 },
        { q: 'Comment d\u00e9truire une session ?', options: ['session_destroy()', 'session_delete()', 'session_end()'], correct: 0 },
        { q: 'Les cookies sont stock\u00e9s...', options: ['C\u00f4t\u00e9 client', 'C\u00f4t\u00e9 serveur', 'Les deux'], correct: 0 },
        { q: 'Quel param\u00e8tre de session prot\u00e8ge contre le vol ?', options: ['session.use_strict_mode', 'session.secure', 'Les deux'], correct: 0 },
        { q: 'Que fait un logout ?', options: ['D\u00e9truit la session', 'Supprime le compte', 'Ferme le navigateur'], correct: 0 },
        { q: 'Qu\'est-ce que l\'ID de session ?', options: ['Un identifiant unique de session', 'Un identifiant utilisateur', 'Un mot de passe'], correct: 0 }
      ]
    },
    'php-08': {
      title: 'Fichiers & Uploads',
      questions: [
        { q: 'Quelle fonction ouvre un fichier ?', options: ['fopen()', 'fopen()', 'file_open()'], correct: 0 },
        { q: 'Que fait fwrite() ?', options: ['\u00c9crit dans un fichier', 'Lit un fichier', 'Ferme un fichier'], correct: 0 },
        { q: 'Que fait fgets() ?', options: ['Lit une ligne du fichier', '\u00c9crit dans le fichier', 'Supprime le fichier'], correct: 0 },
        { q: 'Que fait file_get_contents() ?', options: ['Lit tout le fichier en cha\u00eene', '\u00c9crit dans le fichier', 'Ouvre le fichier'], correct: 0 },
        { q: 'Quelle superglobale g\u00e8re les fichiers upload\u00e9s ?', options: ['$_FILES', '$_FILE', '$_UPLOAD'], correct: 0 },
        { q: 'Que fait move_uploaded_file() ?', options: ['D\u00e9place un fichier upload\u00e9', 'Copie un fichier', 'Supprime un fichier'], correct: 0 },
        { q: 'Comment valider le type d\'un fichier upload\u00e9 ?', options: ['V\u00e9rifier $_FILES["type"]', 'V\u00e9rifier l\'extension', 'V\u00e9rifier la taille'], correct: 2 },
        { q: 'Quel mode fopen(\'fichier\', \'w\') ?', options: ['\u00c9criture (\u00e9crase)', 'Lecture seule', 'Ajout'], correct: 0 },
        { q: 'Quel mode fopen(\'fichier\', \'a\') ?', options: ['Ajout \u00e0 la fin', '\u00c9criture (\u00e9crase)', 'Lecture seule'], correct: 0 },
        { q: 'Que fait fclose() ?', options: ['Ferme un fichier', 'Supprime un fichier', 'Vide un fichier'], correct: 0 }
      ]
    },
    'php-09': {
      title: 'PDO & MySQL',
      questions: [
        { q: 'Qu\'est-ce que PDO ?', options: ['Une couche d\'abstraction de base de donn\u00e9es', 'Un type de base de donn\u00e9es', 'Un serveur web'], correct: 0 },
        { q: 'Comment cr\u00e9er une connexion PDO ?', options: ['new PDO($dsn, $user, $pass)', 'PDO::connect($dsn)', 'connect_pdo($dsn)'], correct: 0 },
        { q: 'Quelle m\u00e9thode PDO ex\u00e9cute une requ\u00eate ?', options: ['query()', 'exec()', 'Les deux'], correct: 2 },
        { q: 'Que retourne fetch() en PDO ?', options: ['Une seule ligne', 'Toutes les lignes', 'Un bool\u00e9en'], correct: 0 },
        { q: 'Que retourne fetchAll() en PDO ?', options: ['Toutes les lignes', 'Une seule ligne', 'Le nombre de lignes'], correct: 0 },
        { q: 'Pourquoi utiliser les requ\u00eates pr\u00e9par\u00e9es ?', options: ['Contre les injections SQL', 'Pour la vitesse', 'Pour la simplicit\u00e9'], correct: 0 },
        { q: 'Que signifie CRUD ?', options: ['Create Read Update Delete', 'Copy Run Update Data', 'Code Read Use Debug'], correct: 0 },
        { q: '\u00c0 quoi sert INNER JOIN ?', options: ['Lier deux tables', 'Supprimer des donn\u00e9es', 'Cr\u00e9er une table'], correct: 0 },
        { q: 'Que fait CREATE TABLE ?', options: ['Cr\u00e9e une nouvelle table', 'Ajoute une colonne', 'Ins\u00e8re des donn\u00e9es'], correct: 0 },
        { q: 'Qu\'est-ce que phpMyAdmin ?', options: ['Une interface web pour MySQL', 'Un IDE PHP', 'Un serveur de base'], correct: 0 }
      ]
    },
    'php-10': {
      title: 'POO, MVC & Projet',
      questions: [
        { q: 'Quel mot-cl\u00e9 cr\u00e9e une classe ?', options: ['class', 'struct', 'object'], correct: 0 },
        { q: 'Quel mot-cl\u00e9 instancie un objet ?', options: ['new', 'create', 'make'], correct: 0 },
        { q: 'Quelle visibilit\u00e9 est publique ?', options: ['public', 'private', 'protected'], correct: 0 },
        { q: 'Que fait le constructeur __construct() ?', options: ['Initialise l\'objet', 'D\u00e9truit l\'objet', 'Clone l\'objet'], correct: 0 },
        { q: 'Que sont les namespaces ?', options: ['Organiser le code en espaces nomm\u00e9s', 'Cr\u00e9er des fichiers', 'D\u00e9finir des constantes'], correct: 0 },
        { q: 'Que fait Composer autoload ?', options: ['Charge automatiquement les classes', 'Installe des librairies', 'Compile le code'], correct: 0 },
        { q: 'Que signifie l\'architecture MVC ?', options: ['Model View Controller', 'Module View Class', 'Main View Code'], correct: 0 },
        { q: 'Que sont les PSR ?', options: ['Recommandations d\'\u00e9criture PHP', 'Des librairies PHP', 'Des extensions PHP'], correct: 0 },
        { q: '\u00c0 quoi sert PHPUnit ?', options: ['Tester le code PHP', 'D\u00e9ployer en production', 'Debugger le code'], correct: 0 },
        { q: 'Que fait le d\u00e9ploiement d\'une app PHP ?', options: ['Met l\'application en ligne', 'Supprime l\'application', 'Teste l\'application'], correct: 0 }
      ]
    },
    // ===================== JavaScript =====================
    'js-01': {
      title: 'Introduction & Variables',
      questions: [
        { q: 'Quel mot-cl\u00e9 d\u00e9clare une variable muable ?', options: ['let', 'const', 'var'], correct: 0 },
        { q: 'Quel mot-cl\u00e9 d\u00e9clare une constante ?', options: ['let', 'const', 'var'], correct: 1 },
        { q: 'Quel type repr\u00e9sente un nombre d\u00e9cimal ?', options: ['number', 'float', 'decimal'], correct: 0 },
        { q: 'Que retourne typeof "hello" ?', options: ['string', 'String', 'text'], correct: 0 },
        { q: 'Que vaut typeof null ?', options: ['null', 'object', 'undefined'], correct: 1 },
        { q: 'Qu\'est-ce qu\'un template string ?', options: ['Cha\u00eene avec backticks et ${}', 'Cha\u00eene avec guillemets', 'Cha\u00eene avec +'], correct: 0 },
        { q: 'Comment \u00e9crire un commentaire une ligne ?', options: ['// commentaire', '# commentaire', '/* commentaire */'], correct: 0 },
        { q: 'Quelle est la diff\u00e9rence entre let et var ?', options: ['La port\u00e9e (bloc vs fonction)', 'La rapidit\u00e9', 'Le type de donn\u00e9e'], correct: 0 },
        { q: 'Que signifie undefined ?', options: ['Variable d\u00e9clar\u00e9e sans valeur', 'Variable inexistante', 'Valeur vide'], correct: 0 },
        { q: 'Quel type est true ou false ?', options: ['boolean', 'bool', 'logical'], correct: 0 }
      ]
    },
    'js-02': {
      title: 'Op\u00e9rateurs & Conditions',
      questions: [
        { q: 'Que compare === en JS ?', options: ['Valeur et type', 'Valeur seulement', 'Type seulement'], correct: 0 },
        { q: 'Que compare == en JS ?', options: ['Valeur et type', 'Valeur seulement', 'Type seulement'], correct: 1 },
        { q: 'Quel op\u00e9rateur signifie ET logique ?', options: ['&&', '||', '!'], correct: 0 },
        { q: 'Quel op\u00e9rateur signifie OU logique ?', options: ['&&', '||', '!'], correct: 1 },
        { q: 'Que signifie !x ?', options: ['N\u00e9gation de x', 'Double n\u00e9gation', 'Valeur de x'], correct: 0 },
        { q: 'Que teste un if ?', options: ['Si une condition est vraie', 'Si une variable existe', 'Si une valeur est nulle'], correct: 0 },
        { q: 'Quelles valeurs sont falsy ?', options: ['0 null undefined false ""', '0 "false" null', '"0" false undefined'], correct: 0 },
        { q: '\u00c0 quoi sert un switch ?', options: ['Tester plusieurs cas', 'R\u00e9p\u00e9ter du code', 'D\u00e9clarer une variable'], correct: 0 },
        { q: 'Que fait l\'op\u00e9rateur ternaire ?', options: ['cond ? vrai : faux', 'cond : vrai ? faux', 'cond ! vrai : faux'], correct: 0 },
        { q: 'Quel op\u00e9rateur donne le reste de division ?', options: ['%', '/', '*'], correct: 0 }
      ]
    },
    'js-03': {
      title: 'Boucles & Fonctions',
      questions: [
        { q: 'Quelle boucle parcourt les propri\u00e9t\u00e9s d\'un objet ?', options: ['for...in', 'for...of', 'forEach'], correct: 0 },
        { q: 'Quelle boucle parcourt les valeurs d\'un it\u00e9rable ?', options: ['for...in', 'for...of', 'for...each'], correct: 1 },
        { q: 'Comment d\u00e9clarer une fonction fl\u00e9ch\u00e9e ?', options: ['const f = () => {}', 'function f => {}', 'const f = function => {}'], correct: 0 },
        { q: 'Que retourne une fonction sans return ?', options: ['undefined', 'null', '0'], correct: 0 },
        { q: 'Qu\'est-ce que la port\u00e9e (scope) ?', options: ['La visibilit\u00e9 des variables', 'La taille du code', 'Le nom de la fonction'], correct: 0 },
        { q: 'Qu\'est-ce qu\'une closure ?', options: ['Fonction avec acc\u00e8s au scope parent', 'Fonction anonyme', 'Fonction r\u00e9cursive'], correct: 0 },
        { q: 'Quelle boucle ex\u00e9cute au moins une fois ?', options: ['do-while', 'while', 'for'], correct: 0 },
        { q: 'Que fait break dans une boucle ?', options: ['Stoppe la boucle', 'Continue la boucle', 'Recommence'], correct: 0 },
        { q: 'Quelle boucle utilise un compteur ?', options: ['for', 'for...of', 'while'], correct: 0 },
        { q: 'Une arrow function n\'a pas son propre...', options: ['this', 'return', 'arguments'], correct: 0 }
      ]
    },
    'js-04': {
      title: 'Objets & This',
      questions: [
        { q: 'Comment cr\u00e9er un objet litt\u00e9ral ?', options: ['const o = {}', 'const o = new {}', 'const o = Object()'], correct: 0 },
        { q: 'Comment acc\u00e9der \u00e0 une propri\u00e9t\u00e9 dynamique ?', options: ['objet["prop"]', 'objet.prop', 'objet::prop'], correct: 0 },
        { q: 'Que repr\u00e9sente this dans une m\u00e9thode ?', options: ['L\'objet appelant', 'La fonction', 'Le global'], correct: 0 },
        { q: 'Qu\'est-ce qu\'une factory function ?', options: ['Fonction qui retourne un objet', 'Fonction qui fabrique du DOM', 'Constructeur'], correct: 0 },
        { q: 'Que retourne Object.keys(obj) ?', options: ['Les cl\u00e9s en tableau', 'Les valeurs en tableau', 'Les entr\u00e9es en tableau'], correct: 0 },
        { q: 'Que retourne Object.values(obj) ?', options: ['Les cl\u00e9s', 'Les valeurs', 'Les deux'], correct: 1 },
        { q: 'Que fait l\'optional chaining ?.', options: ['Acc\u00e8de sans erreur si null/undefined', 'Enchaine des m\u00e9thodes', 'Cr\u00e9e des objets'], correct: 0 },
        { q: 'Comment ajouter une m\u00e9thode \u00e0 un objet ?', options: ['obj.method = function() {}', 'obj::method()', 'obj->method()'], correct: 0 },
        { q: 'Que vaut this dans une fonction fl\u00e9ch\u00e9e ?', options: ['Le this du contexte parent', 'L\'objet lui-m\u00eame', 'undefined'], correct: 0 },
        { q: 'Comment d\u00e9clarer une m\u00e9thode dans un objet ?', options: ['methode() {}', 'methode: function() {}', 'Les deux'], correct: 2 }
      ]
    },
    'js-05': {
      title: 'Tableaux & M\u00e9thodes',
      questions: [
        { q: 'Que fait push() sur un tableau ?', options: ['Ajoute \u00e0 la fin', 'Ajoute au d\u00e9but', 'Supprime le dernier'], correct: 0 },
        { q: 'Que fait pop() sur un tableau ?', options: ['Supprime le dernier', 'Supprime le premier', 'Ajoute \u00e0 la fin'], correct: 0 },
        { q: 'Que fait shift() sur un tableau ?', options: ['Supprime le premier', 'Supprime le dernier', 'Ajoute au d\u00e9but'], correct: 0 },
        { q: 'Que fait unshift() sur un tableau ?', options: ['Ajoute au d\u00e9but', 'Ajoute \u00e0 la fin', 'Supprime le premier'], correct: 0 },
        { q: 'Que retourne map() ?', options: ['Un nouveau tableau transform\u00e9', 'Le m\u00eame tableau', 'Un bool\u00e9en'], correct: 0 },
        { q: 'Que retourne filter() ?', options: ['Un tableau filtr\u00e9', 'Un \u00e9l\u00e9ment unique', 'Un bool\u00e9en'], correct: 0 },
        { q: 'Que retourne reduce() ?', options: ['Une valeur accumul\u00e9e', 'Un tableau r\u00e9duit', 'Un bool\u00e9en'], correct: 0 },
        { q: 'Que retourne find() ?', options: ['Le premier \u00e9l\u00e9ment trouv\u00e9', 'Tous les \u00e9l\u00e9ments', 'Un bool\u00e9en'], correct: 0 },
        { q: 'Que v\u00e9rifie some() ?', options: ['Si au moins un \u00e9l\u00e9ment valide', 'Si tous les \u00e9l\u00e9ments valident', 'Aucun'], correct: 0 },
        { q: 'Que fait l\'op\u00e9rateur spread ... ?', options: ['D\u00e9compose un tableau', 'Compose un tableau', '\u00c9tend une classe'], correct: 0 }
      ]
    },
    'js-06': {
      title: 'DOM',
      questions: [
        { q: 'Que retourne querySelector() ?', options: ['Le premier \u00e9l\u00e9ment correspondant', 'Tous les \u00e9l\u00e9ments', 'Une liste NodeList'], correct: 0 },
        { q: 'Que retourne querySelectorAll() ?', options: ['Une NodeList statique', 'Un seul \u00e9l\u00e9ment', 'Un tableau'], correct: 0 },
        { q: 'Que fait textContent ?', options: ['Modifie le texte d\'un \u00e9l\u00e9ment', 'Modifie le HTML', 'Ajoute un attribut'], correct: 0 },
        { q: 'Que fait innerHTML ?', options: ['Modifie le contenu HTML', 'Modifie le texte seulement', 'Ajoute une classe'], correct: 0 },
        { q: 'Comment cr\u00e9er un \u00e9l\u00e9ment en JS ?', options: ['createElement()', 'new Element()', 'addElement()'], correct: 0 },
        { q: 'Que fait appendChild() ?', options: ['Ajoute un enfant \u00e0 un \u00e9l\u00e9ment', 'Supprime un enfant', 'Cr\u00e9e un enfant'], correct: 0 },
        { q: 'Comment ajouter une classe CSS en JS ?', options: ['classList.add()', 'classList.remove()', 'classList.toggle()'], correct: 0 },
        { q: 'Que fait classList.toggle() ?', options: ['Ajoute ou supprime une classe', 'Ajoute toujours', 'Supprime toujours'], correct: 0 },
        { q: 'Comment modifier le style en JS ?', options: ['element.style.prop = valeur', 'element.css.prop = valeur', 'element.class = valeur'], correct: 0 },
        { q: '\u00c0 quoi sert le dataset en JS ?', options: ['Acc\u00e9der aux attributs data-*', 'Acc\u00e9der aux classes', 'Acc\u00e9der au style'], correct: 0 }
      ]
    },
    'js-07': {
      title: '\u00c9v\u00e9nements & Formulaires',
      questions: [
        { q: 'Quelle m\u00e9thode attache un \u00e9v\u00e9nement ?', options: ['addEventListener()', 'attachEvent()', 'on()'], correct: 0 },
        { q: 'Quel \u00e9v\u00e9nement se produit au clic ?', options: ['click', 'mouseover', 'change'], correct: 0 },
        { q: 'Quel \u00e9v\u00e9nement se produit \u00e0 la soumission d\'un formulaire ?', options: ['submit', 'send', 'form'], correct: 0 },
        { q: 'Qu\'est-ce que la d\u00e9l\u00e9gation d\'\u00e9v\u00e9nements ?', options: ['Attacher sur un parent pour les enfants', 'Attacher sur chaque enfant', 'Supprimer les \u00e9v\u00e9nements'], correct: 0 },
        { q: 'Comment r\u00e9cup\u00e9rer la valeur d\'un input ?', options: ['input.value', 'input.text', 'input.innerHTML'], correct: 0 },
        { q: 'Que contient l\'objet event ?', options: ['Des informations sur l\'\u00e9v\u00e9nement', 'Le DOM complet', 'Les cookies'], correct: 0 },
        { q: 'Quel \u00e9v\u00e9nement r\u00e9agit \u00e0 une frappe clavier ?', options: ['keydown', 'key', 'type'], correct: 0 },
        { q: 'Que fait event.preventDefault() ?', options: ['Emp\u00eache le comportement par d\u00e9faut', 'Stop la propagation', 'Supprime l\'\u00e9l\u00e9ment'], correct: 0 },
        { q: 'Que fait event.stopPropagation() ?', options: ['Emp\u00eache la propagation du parent', 'Emp\u00eache le comportement par d\u00e9faut', 'Supprime l\'\u00e9v\u00e9nement'], correct: 0 },
        { q: 'Comment retirer un \u00e9couteur d\'\u00e9v\u00e9nement ?', options: ['removeEventListener()', 'detachEvent()', 'off()'], correct: 0 }
      ]
    },
    'js-08': {
      title: 'JSON & Stockage Local',
      questions: [
        { q: 'Que fait JSON.stringify() ?', options: ['Convertit un objet en cha\u00eene JSON', 'Analyse du JSON', 'Valide du JSON'], correct: 0 },
        { q: 'Que fait JSON.parse() ?', options: ['Convertit une cha\u00eene JSON en objet', 'Cr\u00e9e du JSON', 'Formate du JSON'], correct: 0 },
        { q: 'Comment stocker dans localStorage ?', options: ['localStorage.setItem(key, value)', 'localStorage.store(key, value)', 'localStorage.add(key, value)'], correct: 0 },
        { q: 'Comment lire depuis localStorage ?', options: ['localStorage.getItem(key)', 'localStorage.read(key)', 'localStorage.get(key)'], correct: 0 },
        { q: 'Que fait localStorage.removeItem() ?', options: ['Supprime une cl\u00e9', 'Vide tout', 'Lit une cl\u00e9'], correct: 0 },
        { q: 'Que fait localStorage.clear() ?', options: ['Vide tout le localStorage', 'Supprime une cl\u00e9', 'Ferme le stockage'], correct: 0 },
        { q: 'Diff\u00e9rence localStorage et sessionStorage ?', options: ['Persistant vs session', 'Taille vs rapidit\u00e9', 'S\u00e9curis\u00e9 vs ouvert'], correct: 0 },
        { q: 'sessionStorage est effac\u00e9 quand...', options: ['L\'onglet est ferm\u00e9', 'Le navigateur red\u00e9marre', 'Jamais'], correct: 0 },
        { q: 'Quelle limite de taille pour localStorage ?', options: ['Environ 5 Mo', 'Environ 1 Mo', 'Illimit\u00e9'], correct: 0 },
        { q: 'Avantage des cookies vs localStorage ?', options: ['Envoi automatique au serveur', 'Plus grande capacit\u00e9', 'Plus rapide'], correct: 0 }
      ]
    },
    'js-09': {
      title: 'Async & Fetch API',
      questions: [
        { q: 'Qu\'est-ce que le code asynchrone ?', options: ['N\'attend pas la fin pour continuer', 'S\'ex\u00e9cute en s\u00e9quence', 'Plus rapide'], correct: 0 },
        { q: 'Que fait setTimeout(fn, 1000) ?', options: ['Ex\u00e9cute fn apr\u00e8s 1 seconde', 'Ex\u00e9cute fn toutes les secondes', 'Annule une ex\u00e9cution'], correct: 0 },
        { q: 'Qu\'est-ce qu\'une Promise ?', options: ['Une promesse de valeur future', 'Une valeur imm\u00e9diate', 'Une fonction'], correct: 0 },
        { q: 'Que fait .then() sur une Promise ?', options: ['Traite le r\u00e9sultat r\u00e9solu', 'Traite l\'erreur', 'Cr\u00e9e la promesse'], correct: 0 },
        { q: 'Que fait .catch() sur une Promise ?', options: ['Traite l\'erreur', 'Traite le succ\u00e8s', 'Relance la promesse'], correct: 0 },
        { q: 'Quel mot-cl\u00e9 pr\u00e9c\u00e8de une fonction asynchrone ?', options: ['async', 'await', 'sync'], correct: 0 },
        { q: 'Que fait await ?', options: ['Attend la r\u00e9solution d\'une promesse', 'Cr\u00e9e une promesse', 'Rejette une promesse'], correct: 0 },
        { q: 'Que retourne fetch() ?', options: ['Une Promise', 'Une Response directement', 'Du JSON'], correct: 0 },
        { q: 'Comment sp\u00e9cifier la m\u00e9thode HTTP dans fetch ?', options: ['{ method: \'POST\' }', '{ type: \'POST\' }', '{ action: \'POST\' }'], correct: 0 },
        { q: 'Que fait try/catch ?', options: ['Attraper les erreurs', 'Tester une valeur', 'Valider un formulaire'], correct: 0 }
      ]
    },
    'js-10': {
      title: 'Modules, Classes & Projet',
      questions: [
        { q: 'Comment exporter une fonction en ES6 ?', options: ['export function f() {}', 'module.exports = f', 'Les deux'], correct: 0 },
        { q: 'Comment importer un module ES6 ?', options: ['import { f } from \'./f\'', 'require(\'./f\')', 'Les deux'], correct: 0 },
        { q: 'Quel mot-cl\u00e9 d\u00e9finit une classe en JS ?', options: ['class', 'struct', 'prototype'], correct: 0 },
        { q: 'Que fait le constructeur d\'une classe ?', options: ['Initialise l\'instance', 'D\u00e9truit l\'instance', 'Clone l\'instance'], correct: 0 },
        { q: 'Quel mot-cl\u00e9 prolonge une classe ?', options: ['extends', 'inherits', 'super'], correct: 0 },
        { q: 'Que fait super() dans une classe ?', options: ['Appelle le constructeur parent', 'Appelle la m\u00e9thode parente', 'Cr\u00e9e l\'objet parent'], correct: 0 },
        { q: 'Qu\'est-ce qu\'une m\u00e9thode statique ?', options: ['Appartient \u00e0 la classe, pas \u00e0 l\'instance', 'Appartient \u00e0 l\'instance', 'Est priv\u00e9e'], correct: 0 },
        { q: '\u00c0 quoi sert un getter ?', options: ['Obtenir une propri\u00e9t\u00e9 calcul\u00e9e', 'D\u00e9finir une propri\u00e9t\u00e9', 'Supprimer une propri\u00e9t\u00e9'], correct: 0 },
        { q: '\u00c0 quoi sert un setter ?', options: ['D\u00e9finir une propri\u00e9t\u00e9 avec contr\u00f4le', 'Obtenir une propri\u00e9t\u00e9', 'Supprimer une propri\u00e9t\u00e9'], correct: 0 },
        { q: 'Exporter par d\u00e9faut utilise...', options: ['export default', 'export main', 'export only'], correct: 0 }
      ]
    }
  };
}


const _course = (function(){const p=window.location.pathname;return p.includes('/css/')?'css':p.includes('/php/')?'php':p.includes('/js/')?'js':'html';})();

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
    js: '// JavaScript\nfunction action() {\n  var p = document.getElementById("demo");\n  if (!p) { console.warn("L\\\'élément #demo est introuvable dans le HTML"); return; }\n  p.textContent = "Vous avez cliqué sur le bouton !";\n  p.style.color = "green";\n}',
    php: '<?php\n// Code PHP (c\u00f4t\u00e9 serveur)\n$message = "Bonjour le monde !";\necho "<p>" . $message . "</p>";\necho "<p>Le PHP n\u00e9cessite un serveur pour s\'ex\u00e9cuter.</p>";\n?>'
  };
  const langLabels = { html: 'HTML', css: 'CSS', js: 'JS', php: 'PHP' };
  // Determine which tabs to show based on course folder
  const p = window.location.pathname;
  let langOrder;
  if (p.includes('/pages/js/'))       langOrder = ['html', 'css', 'js'];
  else if (p.includes('/pages/css/'))  langOrder = ['html', 'css'];
  else if (p.includes('/pages/php/'))  langOrder = ['html', 'php'];
  else                                langOrder = ['html'];

  function buildPage(html, css, js, php) {
    const th = themeColors();
    const style = css ? '<style>' + css + '</style>' : '';
    const script = js ? '<script>try{\n' + js + '\n}catch(e){console.warn("JS Error:",e.message)}<\/script>' : '';
    let phpBlock = '';
    if (php) {
      phpBlock = '<div style="margin-bottom:16px;border:1px solid #d4a017;border-radius:8px;overflow:hidden;">'
        + '<div style="background:#d4a017;color:#1a1a1a;padding:4px 12px;font-size:.8rem;font-weight:bold;letter-spacing:.5px;">🐘 Code PHP (côté serveur — ne peut pas être exécuté dans le navigateur)</div>'
        + '<pre style="margin:0;padding:12px;background:#1e1e1e;color:#d4d4d4;font-size:13px;overflow-x:auto;border:none;line-height:1.5;tab-size:4;">'
        + php.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</pre></div>';
    }
    return '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
      + '<link rel="stylesheet" href="' + cssPath() + '">' + style
      + '</head><body style="margin:0;padding:20px;background:' + th.bg + ';color:' + th.text + ';font-family:Georgia,serif;line-height:1.7;">'
      + phpBlock
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
    if (primaryLang === 'javascript') primaryLang = 'js';

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
      const p = (editors.php?.textContent || '').trim();
      if (!h && !c && !j && !p) {
        iframe.srcdoc = '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body style="display:flex;align-items:center;justify-content:center;min-height:200px;margin:0;background:' + th.bg + ';color:' + th.text2 + ';font-size:.9rem;opacity:.6;">✅ ' + (includeJS ? 'Code vide' : 'Chargez le code avec ▶ Valider') + ' — écrivez du code à gauche puis cliquez Valider</body></html>';
        return;
      }
      iframe.srcdoc = buildPage(h, c, j, p);
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
      php: [
        'Le code PHP s\'exécute côté serveur — il n\'y a pas de rendu visuel direct.',
        'Copiez ce code dans un fichier .php, placez-le sur un serveur local (XAMPP/WAMP) et ouvrez-le dans votre navigateur.',
        'Le résultat est du HTML généré par PHP.'
      ],
      javascript: [
        'Ce code JavaScript s\'exécute dans le navigateur.',
        'Copiez-le dans une balise &lt;script&gt; ou un fichier .js et ouvrez la page avec les DevTools (F12) pour voir le résultat.',
      ]
    };
    const exts = { html: 'html', css: 'css', php: 'php', javascript: 'js' };

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


// ── Magnetic hover effect ──────────────────────────────────────────
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

function highlightPHP(code) {
  return code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/(\/\/.*$|#.*$)/gm, '<span class="tok-comment">$1</span>')
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-comment">$1</span>')
    .replace(/("(?:[^"\\]|\\.)*")/g, '<span class="tok-val">$1</span>')
    .replace(/('(?:[^'\\]|\\.)*')/g, '<span class="tok-val">$1</span>')
    .replace(/\b(echo|return|if|else|foreach|for|while|function|class|new|public|private|protected|static|\$[\w]+)\b/g, '<span class="tok-keyword">$1</span>');
}

function highlightJS(code) {
  code = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return code.replace(
    /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')|\b(const|let|var|function|if|else|for|while|return|class|new|this|async|await|export|import|try|catch|throw)\b/gm,
    (m, comment, blockComment, dq, sq, kw) => {
      if (comment) return '<span class="tok-comment">' + comment + '</span>';
      if (blockComment) return '<span class="tok-comment">' + blockComment + '</span>';
      if (dq) return '<span class="tok-val">' + dq + '</span>';
      if (sq) return '<span class="tok-val">' + sq + '</span>';
      if (kw) return '<span class="tok-keyword">' + kw + '</span>';
      return m;
    }
  );
}

document.querySelectorAll('.code-body pre').forEach(pre => {
  const lang = pre.dataset.lang || 'html';
  const code = pre.textContent;
  if (lang === 'html') pre.innerHTML = highlightHTML(code);
  else if (lang === 'css') pre.innerHTML = highlightCSS(code);
  else if (lang === 'php') pre.innerHTML = highlightPHP(code);
  else if (lang === 'javascript' || lang === 'js') pre.innerHTML = highlightJS(code);
});
