/* ==========================================================================
   MERIDIAN — Interações da landing page
   JavaScript puro (sem dependências).
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. Header: adiciona sombra/borda sutil após rolar a página
  ------------------------------------------------------------------------ */
  const header = document.getElementById('header');

  const handleScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // estado inicial


  /* ------------------------------------------------------------------------
     2. Menu mobile (hambúrguer)
  ------------------------------------------------------------------------ */
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');

  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  // Fecha o menu automaticamente ao clicar em um link (mobile)
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });


  /* ------------------------------------------------------------------------
     3. Accordion do FAQ
     Apenas um item aberto por vez, para manter a página limpa e objetiva.
  ------------------------------------------------------------------------ */
  const accordionItems = document.querySelectorAll('.accordion__item');

  accordionItems.forEach((item) => {
    const trigger = item.querySelector('.accordion__trigger');

    trigger.addEventListener('click', () => {
      const isCurrentlyOpen = item.classList.contains('is-open');

      // Fecha todos os itens
      accordionItems.forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('.accordion__trigger').setAttribute('aria-expanded', 'false');
      });

      // Reabre o item clicado, se ele não estava já aberto
      if (!isCurrentlyOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });


  /* ------------------------------------------------------------------------
     4. Elemento de assinatura: seletor de idiomas no Hero
     A palavra de saudação ("Hello" / "Hola" / "Bonjour") troca sozinha a
     cada poucos segundos e também pode ser controlada pelas pills —
     reforça de forma lúdica que a escola vai além do inglês.
  ------------------------------------------------------------------------ */
  const languages = [
    { code: 'en', greeting: '“Hello”', colorVar: '--color-en' },
    { code: 'es', greeting: '“Hola”', colorVar: '--color-es' },
    { code: 'fr', greeting: '“Bonjour”', colorVar: '--color-fr' },
  ];

  const greetingWordEl = document.getElementById('greetingWord');
  const langPills = document.querySelectorAll('.lang-pill');

  let currentIndex = 0;
  let rotationTimer = null;

  const applyLanguage = (index) => {
    const lang = languages[index];
    if (!greetingWordEl || !lang) return;

    // Pequena animação de "pop" a cada troca de palavra
    greetingWordEl.classList.remove('is-swapping');
    // Força reflow para permitir reiniciar a animação em trocas seguidas
    void greetingWordEl.offsetWidth;
    greetingWordEl.classList.add('is-swapping');

    greetingWordEl.textContent = lang.greeting;
    greetingWordEl.style.color = `var(${lang.colorVar})`;

    // Atualiza o estado visual das pills
    langPills.forEach((pill) => {
      const isActive = pill.dataset.lang === lang.code;
      pill.classList.toggle('is-active', isActive);
      pill.setAttribute('aria-selected', String(isActive));
    });
  };

  const startRotation = () => {
    rotationTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % languages.length;
      applyLanguage(currentIndex);
    }, 3200);
  };

  const stopRotation = () => {
    if (rotationTimer) clearInterval(rotationTimer);
  };

  // Estado inicial
  applyLanguage(currentIndex);
  startRotation();

  // Clique manual numa pill: define o idioma e reinicia a rotação automática
  langPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const index = languages.findIndex((lang) => lang.code === pill.dataset.lang);
      if (index === -1) return;

      currentIndex = index;
      applyLanguage(currentIndex);

      stopRotation();
      startRotation();
    });
  });


  /* ------------------------------------------------------------------------
     5. Atualiza o ano no rodapé automaticamente
  ------------------------------------------------------------------------ */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
