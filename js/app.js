/* ── HTML Course — app.js ── */

// ── Copy to clipboard ──────────────────────────────────────────────────────
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.copy-btn');
  if (!btn) return;
  const block = btn.closest('.code-block');
  const pre = block?.querySelector('pre');
  if (!pre) return;
  navigator.clipboard.writeText(pre.innerText).then(() => {
    btn.textContent = 'COPIÉ ✓';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'COPIER'; btn.classList.remove('copied'); }, 2000);
  });
});

// ── Reading progress bar ───────────────────────────────────────────────────
const fill = document.getElementById('progress-fill');
if (fill) {
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.width = (window.scrollY / total * 100) + '%';
  }, { passive: true });
}

// ── Active sidebar link on scroll ─────────────────────────────────────────
const sidebarLinks = document.querySelectorAll('.sidebar-item[href^="#"]');
const sections = [...sidebarLinks]
  .map(l => document.querySelector(l.getAttribute('href')))
  .filter(Boolean);

if (sections.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sidebarLinks.forEach(l => l.classList.remove('active'));
        const active = [...sidebarLinks].find(
          l => l.getAttribute('href') === '#' + entry.target.id
        );
        if (active) {
          active.classList.add('active');
          active.scrollIntoView({ block: 'nearest' });
        }
      }
    });
  }, { rootMargin: '-56px 0px -70% 0px', threshold: 0 });
  sections.forEach(s => observer.observe(s));
}

// ── Mobile sidebar toggle ──────────────────────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

if (hamburger && sidebar) {
  hamburger.addEventListener('click', () => sidebar.classList.toggle('open'));
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
  sidebar.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => sidebar.classList.remove('open'))
  );
}

// ── Syntax highlighting ────────────────────────────────────────────────────
// Single-pass attribute tokenization: handles both attr="val" and
// boolean/standalone attributes in ONE replace call so already-inserted
// <span> tags are never re-scanned and mangled.
function highlight(code) {
  return code
    // Escape raw HTML so the browser won't parse it
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

    // ── Comments (must come before tag processing) ──
    .replace(/(<!--[\s\S]*?-->)/g,
      '<span class="tok-comment">$1</span>')

    // ── Tags: name + attribute string ──
    .replace(
      /(&lt;\/?)([\w-]+)((?:\s[^&]*?)?)(\/?)(&gt;)/g,
      (_, lt, tagName, attrs, slash, gt) => {

        // One regex, two branches:
        //   branch A  \s attr = "value"
        //   branch B  \s attr          (boolean / no value)
        const attrHtml = attrs.replace(
          /(\s)([\w-:]+)(?:(=)("([^"]*)"))?/g,
          (__, space, attr, eq, _quoted, val) => {
            if (eq !== undefined) {
              // attr="value" pair
              return space
                + '<span class="tok-attr">' + attr + '</span>'
                + '<span class="tok-punct">=</span>'
                + '<span class="tok-val">"' + val + '"</span>';
            }
            // standalone / boolean attribute
            return space + '<span class="tok-attr">' + attr + '</span>';
          }
        );

        return '<span class="tok-tag">' + lt + tagName + '</span>'
             + attrHtml
             + '<span class="tok-tag">' + slash + gt + '</span>';
      }
    )

    // ── DOCTYPE ──
    .replace(/&lt;!DOCTYPE html&gt;/gi,
      '<span class="tok-comment">&lt;!DOCTYPE html&gt;</span>');
}

// Apply to all code blocks tagged with data-lang="html"
document.querySelectorAll('.code-body pre[data-lang="html"]').forEach(pre => {
  pre.innerHTML = highlight(pre.textContent);
});
