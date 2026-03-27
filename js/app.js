/* ── HTML Course — app.js ── */


// ── Copy to clipboard ───────────────────────────────────────────────
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.copy-btn');
  if (!btn) return;

  const block = btn.closest('.code-block');
  const pre = block?.querySelector('pre');
  if (!pre) return;

  navigator.clipboard.writeText(pre.innerText).then(() => {

    // animation
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


// ── Reading progress bar (smooth) ───────────────────────────────────
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


// ── Mobile sidebar toggle ──────────────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

if (hamburger && sidebar) {
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });

  sidebar.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => sidebar.classList.remove('open'))
  );
}


// ── Reveal on scroll (smooth + GPU) ─────────────────────────────────
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


// ── Magnetic hover effect (cards) ───────────────────────────────────
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
function highlight(code) {
  return code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

    .replace(/(<!--[\s\S]*?-->)/g,
      '<span class="tok-comment">$1</span>')

    .replace(
      /(&lt;\/?)([\w-]+)((?:\s[^&]*?)?)(\/?)(&gt;)/g,
      (_, lt, tagName, attrs, slash, gt) => {

        const attrHtml = attrs.replace(
          /(\s)([\w-:]+)(?:(=)("([^"]*)"))?/g,
          (__, space, attr, eq, _quoted, val) => {

            if (eq !== undefined) {
              return space
                + '<span class="tok-attr">' + attr + '</span>'
                + '<span class="tok-punct">=</span>'
                + '<span class="tok-val">"' + val + '"</span>';
            }

            return space + '<span class="tok-attr">' + attr + '</span>';
          }
        );

        return '<span class="tok-tag">' + lt + tagName + '</span>'
             + attrHtml
             + '<span class="tok-tag">' + slash + gt + '</span>';
      }
    )

    .replace(/&lt;!DOCTYPE html&gt;/gi,
      '<span class="tok-comment">&lt;!DOCTYPE html&gt;</span>');
}


// ── Apply highlighting ─────────────────────────────────────────────
document.querySelectorAll('.code-body pre[data-lang="html"]').forEach(pre => {
  pre.innerHTML = highlight(pre.textContent);
});
