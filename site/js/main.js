(() => {
  // Menu (telemóvel)
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('menu');
  const label = toggle.querySelector('.sr-only');

  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    header.classList.toggle('menu-open', open);
    label.textContent = open ? 'Fechar menu' : 'Abrir menu';
  };

  toggle.addEventListener('click', () => {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setMenu(false);
      toggle.focus();
    }
  });

  // Header: transparente sobre o hero, sólido depois de começar a descer
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Serviços: tabs Lavandaria / Limpeza
  const tabs = [...document.querySelectorAll('.tab')];
  const panels = tabs.map((t) => document.getElementById(t.getAttribute('aria-controls')));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const selectTab = (index, { focus = false } = {}) => {
    tabs.forEach((tab, i) => {
      const on = i === index;
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
      panels[i].hidden = !on;
      if (on && !reduceMotion) {
        panels[i].classList.remove('is-entering');
        void panels[i].offsetWidth;
        panels[i].classList.add('is-entering');
      }
    });
    if (focus) tabs[index].focus();
    updateArrows(panels[index]);
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => selectTab(i));
    tab.addEventListener('keydown', (e) => {
      const keys = { ArrowRight: 1, ArrowLeft: -1, Home: 'first', End: 'last' };
      if (!(e.key in keys)) return;
      e.preventDefault();
      const k = keys[e.key];
      const next = k === 'first' ? 0 : k === 'last' ? tabs.length - 1 : (i + k + tabs.length) % tabs.length;
      selectTab(next, { focus: true });
    });
  });

  // Links para #lavandaria / #limpeza abrem a tab certa
  const openFromHash = (hash) => {
    const i = panels.findIndex((p) => '#' + p.id === hash);
    if (i === -1) return false;
    selectTab(i);
    document.querySelector('.services').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    return true;
  };
  document.querySelectorAll('a[href="#lavandaria"], a[href="#limpeza"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      if (openFromHash(a.getAttribute('href'))) {
        e.preventDefault();
        history.replaceState(null, '', a.getAttribute('href'));
      }
    });
  });

  // Carrossel: setas (desktop/tablet); no telemóvel desliza-se
  function updateArrows(panel) {
    const track = panel.querySelector('.svc-track');
    const [prev, next] = panel.querySelectorAll('.carousel-btn');
    const max = track.scrollWidth - track.clientWidth - 2;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max;
  }
  panels.forEach((panel) => {
    const track = panel.querySelector('.svc-track');
    panel.querySelectorAll('.carousel-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const card = track.querySelector('.svc-card');
        const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap);
        track.scrollBy({ left: step * Number(btn.dataset.dir), behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    });
    track.addEventListener('scroll', () => updateArrows(panel), { passive: true });
  });
  window.addEventListener('resize', () => panels.forEach((p) => !p.hidden && updateArrows(p)));

  selectTab(0);
  if (location.hash) openFromHash(location.hash);

  // Entrada suave das dobras
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const groups = [
      ['main section:not(.hero) .wrap > *:not(.cases-grid):not(.step-list):not(.benefit-bar)', 0],
      ['.benefit-bar > li, .cases-grid > *, .step-list > li, .gallery > .gal-item, .testimonials > *, .contact-list > li', 90],
      ['.site-footer .footer-grid > *', 80],
    ];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
        // Carrosséis horizontais: os itens fora do ecrã entram junto com o primeiro
        if (entry.target.parentElement.matches('.cases-grid')) {
          entry.target.parentElement.querySelectorAll('.reveal').forEach((el) => {
            el.classList.add('is-in');
            io.unobserve(el);
          });
        }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });

    groups.forEach(([selector, stagger]) => {
      const seen = new Map();
      document.querySelectorAll(selector).forEach((el) => {
        const parent = el.parentElement;
        const i = seen.get(parent) || 0;
        seen.set(parent, i + 1);
        el.classList.add('reveal');
        if (stagger) el.style.setProperty('--d', `${i * stagger}ms`);
        io.observe(el);
      });
    });
  }

  // Traço animado sob frases-chave: desenha-se quando entra no ecrã
  const marks = document.querySelectorAll('.mark');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    marks.forEach((m) => m.classList.add('is-drawn'));
  } else {
    const markIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-drawn');
        markIO.unobserve(entry.target);
      });
    }, { threshold: 0.6 });
    marks.forEach((m) => markIO.observe(m));
  }

  // Contacto rápido (barra móvel e botão flutuante): só depois do hero
  // e escondido quando o formulário de contacto está visível.
  const quick = document.querySelectorAll('.mobile-bar, .wa-float');
  const hero = document.querySelector('.hero');
  const contact = document.getElementById('contacto');
  let pastHero = false;
  let atContact = false;
  const updateQuick = () => {
    quick.forEach((el) => el.classList.toggle('is-visible', pastHero && !atContact));
  };
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      updateQuick();
    }).observe(hero);
    new IntersectionObserver(([entry]) => {
      atContact = entry.isIntersecting;
      updateQuick();
    }, { threshold: 0.25 }).observe(contact);
  } else {
    quick.forEach((el) => el.classList.add('is-visible'));
  }

  // Ano no rodapé
  document.getElementById('year').textContent = new Date().getFullYear();

  // Formulário de orçamento
  // O envio ainda não está ligado a nenhum serviço. Para ativar, substituir
  // o corpo de sendQuote() (ex.: Formspree, Netlify Forms ou mensagem WhatsApp).
  const form = document.getElementById('quote-form');
  const status = document.getElementById('form-status');

  const sendQuote = async (data) => {
    return Promise.reject(new Error('not-configured'));
  };

  const checks = [
    { el: form.elements.nome, test: (v) => v.trim() !== '' },
    { el: form.elements.telefone, test: (v) => v.replace(/\D/g, '').length >= 9 },
    { el: form.elements.email, test: (v) => v.trim() === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
    { el: form.elements.servico, test: (v) => v !== '' },
  ];

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.classList.remove('is-error');

    let firstInvalid = null;
    checks.forEach(({ el, test }) => {
      const invalid = !test(el.value);
      el.setAttribute('aria-invalid', String(invalid));
      if (invalid && !firstInvalid) firstInvalid = el;
    });

    if (firstInvalid) {
      status.classList.add('is-error');
      status.textContent = 'Indique o nome, um telefone válido e o tipo de serviço. O email é opcional, mas tem de ser válido.';
      firstInvalid.focus();
      return;
    }

    try {
      await sendQuote(Object.fromEntries(new FormData(form)));
      status.textContent = 'Pedido enviado. Vamos entrar em contacto consigo.';
      form.reset();
    } catch {
      status.classList.add('is-error');
      status.textContent = 'O envio pelo formulário ainda não está disponível. Fale connosco pelo WhatsApp ou pelo telefone +351 933 145 991.';
    }
  });
})();
