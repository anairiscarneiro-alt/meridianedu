/* ==========================================================================
   MERIDIAN — Landing page principal
   JavaScript puro. Detecção automática de idioma (PT/EN/ES) pelo
   navegador do visitante — sem seletor manual, por decisão de produto.
   ========================================================================== */

// Evita que o navegador restaure a última posição de rolagem ao reabrir
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

/* ============================================================================
   DICIONÁRIO DE TRADUÇÃO
   Cada chave corresponde a um atributo data-i18n no HTML. Strings podem
   conter HTML simples (ex: <em>) porque são inseridas via innerHTML —
   todo o conteúdo é fixo/estático, definido aqui pelo desenvolvedor.
   ============================================================================ */

const translations = {

  pt: {
    'nav.cta': 'Aula grátis',

    'hero.eyebrow': 'Escola de idiomas online',
    'hero.title': 'Fale o idioma que abre <em>a próxima porta da sua vida.</em>',
    'hero.subtitle': 'Aulas ao vivo, 1:1, com professores especializados — em Inglês, Espanhol e Português para Estrangeiros. Mandarim e Francês já estão a caminho.',
    'hero.cta': 'Agendar Aula Experimental Grátis',
    'hero.note': 'Sem cartão de crédito · Sem compromisso',
    'hero.trust1': 'Aulas 100% ao vivo',
    'hero.trust2': 'Professores especializados',
    'hero.trust3': 'Turmas pequenas',

    'courses.eyebrow': 'Idiomas',
    'courses.title': 'Escolha o seu idioma',
    'courses.subtitle': 'Aulas 1:1 ao vivo, com professor dedicado ao seu objetivo.',

    'course.en.title': 'Inglês',
    'course.en.text': 'Do zero à fluência — pra viajar, trabalhar e se comunicar com o mundo todo.',
    'course.en.tag': 'Todos os níveis',

    'course.es.title': 'Espanhol',
    'course.es.text': 'Conversa real desde a primeira aula — ideal pra viagens, negócios e novas amizades.',
    'course.es.tag': 'Todos os níveis',

    'course.pt.title': 'Português para Estrangeiros',
    'course.pt.text': 'Pra quem chegou ao Brasil e quer viver o dia a dia com naturalidade, não só sobreviver a ele.',
    'course.pt.tag': 'Todos os níveis',

    'course.zh.title': 'Mandarim',
    'course.zh.text': 'Turmas em preparação. Entre na lista e seja avisado assim que abrirem as vagas.',

    'course.fr.title': 'Francês',
    'course.fr.text': 'Turmas em preparação. Entre na lista e seja avisado assim que abrirem as vagas.',

    'course.waitlist.cta': 'Entrar na lista de espera',

    'method.eyebrow': 'Como funciona',
    'method.title': 'Simples, direto e sob medida',
    'method.step1.title': 'Diagnóstico',
    'method.step1.text': 'Avaliamos seu nível e seu objetivo na aula experimental gratuita.',
    'method.step2.title': 'Aulas ao vivo',
    'method.step2.text': 'Conversas reais, 1:1, no idioma e no ritmo que fazem sentido pra você.',
    'method.step3.title': 'Acompanhamento',
    'method.step3.text': 'Progresso visível, com feedback constante do seu professor.',

    'testimonials.eyebrow': 'Depoimentos',
    'testimonials.title': 'Quem já fala, recomenda',

    'testimonial1.quote': 'Fechei um contrato com um fornecedor no Vietnã numa chamada só em inglês. Ninguém ali era nativo — e funcionou perfeitamente.',
    'testimonial1.role': 'Aluna de Inglês',

    'testimonial2.quote': 'Sempre tive vergonha do meu sotaque. Aqui aprendi que o importante é ser entendido — e isso mudou como eu falo em qualquer idioma.',
    'testimonial2.role': 'Aluno de Espanhol',

    'testimonial3.quote': 'Me mudei pro Brasil sem falar quase nada de português. Hoje resolvo tudo sozinho — banco, aluguel, até piada com vizinho.',
    'testimonial3.role': 'Aluno de Português para Estrangeiros',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Perguntas frequentes',

    'faq.q1.q': 'Como funciona a aula experimental gratuita?',
    'faq.q1.a': 'Você agenda um horário, faz uma breve avaliação de nível com um professor e sai da chamada já com uma sugestão de plano de estudos personalizado. Sem custo e sem compromisso.',

    'faq.q2.q': 'Preciso já saber o idioma pra começar?',
    'faq.q2.a': 'Não. Atendemos desde o nível iniciante absoluto até alunos avançados que buscam refinar a fluência.',

    'faq.q3.q': 'As aulas são ao vivo ou gravadas?',
    'faq.q3.a': 'Todas as aulas são 100% ao vivo, individuais (1:1). Não trabalhamos com conteúdo pré-gravado como método principal.',

    'faq.q4.q': 'Quando abrem as turmas de Mandarim e Francês?',
    'faq.q4.a': 'Estão em fase de montagem de turma. Quem entra na lista de espera é avisado em primeira mão assim que as vagas abrirem.',

    'faq.q5.q': 'Consigo cancelar ou pausar quando quiser?',
    'faq.q5.a': 'Sim. Não há fidelidade. Você pode pausar, trocar de horário ou cancelar a qualquer momento.',

    'ctaFinal.title': 'Sua próxima conversa <em>começa aqui.</em>',
    'ctaFinal.subtitle': 'Agende sua aula experimental gratuita e descubra seu plano personalizado em 20 minutos.',

    'footer.copyright': '© <span id="year"></span> Meridian Escola de Idiomas. Todos os direitos reservados.',

    'meta.title': 'Meridian — Aulas de idiomas ao vivo, com professores especializados',
    'meta.description': 'Aulas particulares ao vivo de Inglês, Espanhol e Português para Estrangeiros. Mandarim e Francês em lista de espera. Agende sua aula experimental grátis.',
  },

  en: {
    'nav.cta': 'Free lesson',

    'hero.eyebrow': 'Online Language School',
    'hero.title': 'Speak the language that opens <em>the next door in your life.</em>',
    'hero.subtitle': 'Live 1:1 lessons with specialized teachers — in English, Spanish and Portuguese for Foreigners. Mandarin and French are on the way.',
    'hero.cta': 'Book a Free Trial Lesson',
    'hero.note': 'No credit card · No commitment',
    'hero.trust1': '100% live lessons',
    'hero.trust2': 'Specialized teachers',
    'hero.trust3': 'Small class sizes',

    'courses.eyebrow': 'Languages',
    'courses.title': 'Choose your language',
    'courses.subtitle': 'Live 1:1 lessons, with a teacher dedicated to your goal.',

    'course.en.title': 'English',
    'course.en.text': 'From zero to fluency — to travel, work, and communicate with the whole world.',
    'course.en.tag': 'All levels',

    'course.es.title': 'Spanish',
    'course.es.text': 'Real conversation from lesson one — ideal for travel, business, and new friendships.',
    'course.es.tag': 'All levels',

    'course.pt.title': 'Portuguese for Foreigners',
    'course.pt.text': 'For those who moved to Brazil and want to live daily life naturally, not just get by.',
    'course.pt.tag': 'All levels',

    'course.zh.title': 'Mandarin',
    'course.zh.text': 'Classes are being organized. Join the waitlist and be the first to know when spots open.',

    'course.fr.title': 'French',
    'course.fr.text': 'Classes are being organized. Join the waitlist and be the first to know when spots open.',

    'course.waitlist.cta': 'Join the waitlist',

    'method.eyebrow': 'How it works',
    'method.title': 'Simple, direct, tailored to you',
    'method.step1.title': 'Diagnosis',
    'method.step1.text': 'We assess your level and your goal during the free trial lesson.',
    'method.step2.title': 'Live lessons',
    'method.step2.text': 'Real conversations, 1:1, in the language and at the pace that makes sense for you.',
    'method.step3.title': 'Follow-up',
    'method.step3.text': 'Visible progress, with constant feedback from your teacher.',

    'testimonials.eyebrow': 'Testimonials',
    'testimonials.title': 'Those who already speak, recommend',

    'testimonial1.quote': "I closed a deal with a supplier in Vietnam on a call entirely in English. No one there was a native speaker — and it worked perfectly.",
    'testimonial1.role': 'English student',

    'testimonial2.quote': "I always felt embarrassed about my accent. Here I learned that what matters is being understood — and that changed how I speak in any language.",
    'testimonial2.role': 'Spanish student',

    'testimonial3.quote': "I moved to Brazil barely speaking any Portuguese. Now I handle everything myself — banking, renting an apartment, even joking with my neighbor.",
    'testimonial3.role': 'Portuguese for Foreigners student',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Frequently asked questions',

    'faq.q1.q': 'How does the free trial lesson work?',
    'faq.q1.a': "You book a time, do a quick level assessment with a teacher, and leave the call with a personalized study plan suggestion. No cost, no commitment.",

    'faq.q2.q': 'Do I need to already know the language to start?',
    'faq.q2.a': 'No. We take students from absolute beginners to advanced students looking to refine their fluency.',

    'faq.q3.q': 'Are the lessons live or recorded?',
    'faq.q3.a': "All lessons are 100% live, one-on-one. We don't rely on pre-recorded content as the main method.",

    'faq.q4.q': 'When do the Mandarin and French classes open?',
    'faq.q4.a': "They're currently being organized. Waitlist members are notified first as soon as spots open.",

    'faq.q5.q': 'Can I cancel or pause anytime?',
    'faq.q5.a': "Yes. There's no lock-in contract. You can pause, change your schedule, or cancel at any time.",

    'ctaFinal.title': 'Your next conversation <em>starts here.</em>',
    'ctaFinal.subtitle': 'Book your free trial lesson and get your personalized plan in 20 minutes.',

    'footer.copyright': '© <span id="year"></span> Meridian Language School. All rights reserved.',

    'meta.title': 'Meridian — Live language lessons with specialized teachers',
    'meta.description': 'Live private lessons in English, Spanish, and Portuguese for Foreigners. Mandarin and French on the waitlist. Book your free trial lesson.',
  },

  es: {
    'nav.cta': 'Clase gratis',

    'hero.eyebrow': 'Escuela de idiomas online',
    'hero.title': 'Habla el idioma que abre <em>la próxima puerta de tu vida.</em>',
    'hero.subtitle': 'Clases en vivo, 1:1, con profesores especializados — en Inglés, Español y Portugués para Extranjeros. Mandarín y Francés ya están en camino.',
    'hero.cta': 'Agendar Clase de Prueba Gratis',
    'hero.note': 'Sin tarjeta de crédito · Sin compromiso',
    'hero.trust1': 'Clases 100% en vivo',
    'hero.trust2': 'Profesores especializados',
    'hero.trust3': 'Grupos reducidos',

    'courses.eyebrow': 'Idiomas',
    'courses.title': 'Elige tu idioma',
    'courses.subtitle': 'Clases 1:1 en vivo, con un profesor dedicado a tu objetivo.',

    'course.en.title': 'Inglés',
    'course.en.text': 'Desde cero hasta la fluidez — para viajar, trabajar y comunicarte con todo el mundo.',
    'course.en.tag': 'Todos los niveles',

    'course.es.title': 'Español',
    'course.es.text': 'Conversación real desde la primera clase — ideal para viajes, negocios y nuevas amistades.',
    'course.es.tag': 'Todos los niveles',

    'course.pt.title': 'Portugués para Extranjeros',
    'course.pt.text': 'Para quienes llegaron a Brasil y quieren vivir el día a día con naturalidad, no solo sobrevivirlo.',
    'course.pt.tag': 'Todos los niveles',

    'course.zh.title': 'Mandarín',
    'course.zh.text': 'Grupos en preparación. Anótate en la lista y sé el primero en saber cuándo abran los cupos.',

    'course.fr.title': 'Francés',
    'course.fr.text': 'Grupos en preparación. Anótate en la lista y sé el primero en saber cuándo abran los cupos.',

    'course.waitlist.cta': 'Anotarme en la lista de espera',

    'method.eyebrow': 'Cómo funciona',
    'method.title': 'Simple, directo y a tu medida',
    'method.step1.title': 'Diagnóstico',
    'method.step1.text': 'Evaluamos tu nivel y tu objetivo durante la clase de prueba gratuita.',
    'method.step2.title': 'Clases en vivo',
    'method.step2.text': 'Conversaciones reales, 1:1, en el idioma y al ritmo que tenga sentido para ti.',
    'method.step3.title': 'Seguimiento',
    'method.step3.text': 'Progreso visible, con feedback constante de tu profesor.',

    'testimonials.eyebrow': 'Testimonios',
    'testimonials.title': 'Quien ya habla, lo recomienda',

    'testimonial1.quote': 'Cerré un contrato con un proveedor en Vietnam en una llamada completamente en inglés. Nadie ahí era nativo — y funcionó perfectamente.',
    'testimonial1.role': 'Alumna de Inglés',

    'testimonial2.quote': 'Siempre me dio vergüenza mi acento. Aquí aprendí que lo importante es que te entiendan — y eso cambió cómo hablo en cualquier idioma.',
    'testimonial2.role': 'Alumno de Español',

    'testimonial3.quote': 'Me mudé a Brasil casi sin hablar portugués. Hoy resuelvo todo solo — banco, alquiler, hasta bromas con el vecino.',
    'testimonial3.role': 'Alumno de Portugués para Extranjeros',

    'faq.eyebrow': 'Preguntas frecuentes',
    'faq.title': 'Preguntas frecuentes',

    'faq.q1.q': '¿Cómo funciona la clase de prueba gratuita?',
    'faq.q1.a': 'Agendas un horario, haces una breve evaluación de nivel con un profesor y sales de la llamada con una sugerencia de plan de estudio personalizado. Sin costo ni compromiso.',

    'faq.q2.q': '¿Necesito ya saber el idioma para empezar?',
    'faq.q2.a': 'No. Recibimos desde principiantes absolutos hasta alumnos avanzados que buscan perfeccionar su fluidez.',

    'faq.q3.q': '¿Las clases son en vivo o grabadas?',
    'faq.q3.a': 'Todas las clases son 100% en vivo, individuales (1:1). No trabajamos con contenido pregrabado como método principal.',

    'faq.q4.q': '¿Cuándo abren los grupos de Mandarín y Francés?',
    'faq.q4.a': 'Están en fase de preparación. Quienes se anotan en la lista de espera son avisados primero en cuanto se abran los cupos.',

    'faq.q5.q': '¿Puedo cancelar o pausar cuando quiera?',
    'faq.q5.a': 'Sí. No hay permanencia. Puedes pausar, cambiar de horario o cancelar en cualquier momento.',

    'ctaFinal.title': 'Tu próxima conversación <em>empieza aquí.</em>',
    'ctaFinal.subtitle': 'Agenda tu clase de prueba gratuita y descubre tu plan personalizado en 20 minutos.',

    'footer.copyright': '© <span id="year"></span> Meridian Escuela de Idiomas. Todos los derechos reservados.',

    'meta.title': 'Meridian — Clases de idiomas en vivo, con profesores especializados',
    'meta.description': 'Clases particulares en vivo de Inglés, Español y Portugués para Extranjeros. Mandarín y Francés en lista de espera. Agenda tu clase de prueba gratuita.',
  },

};

const HTML_LANG_TAGS = { pt: 'pt-BR', en: 'en', es: 'es' };


/* ============================================================================
   DETECÇÃO AUTOMÁTICA DE IDIOMA
   Lê o(s) idioma(s) preferido(s) do navegador do visitante. Se nenhum dos
   idiomas suportados (pt/en/es) for encontrado, cai no português como
   padrão (domínio .online voltado ao público brasileiro).
   ============================================================================ */

function detectLanguage() {
  const supported = Object.keys(translations);
  const browserLangs = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || 'pt'];

  for (const lang of browserLangs) {
    const code = lang.slice(0, 2).toLowerCase();
    if (supported.includes(code)) return code;
  }

  return 'pt';
}


/* ============================================================================
   APLICA A TRADUÇÃO
   Percorre todo elemento com [data-i18n] e substitui o innerHTML pelo
   texto correspondente no dicionário do idioma detectado.
   ============================================================================ */

function applyTranslations(lang) {
  const dict = translations[lang] || translations.pt;

  document.documentElement.lang = HTML_LANG_TAGS[lang] || 'pt-BR';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Título e meta description da aba do navegador
  if (dict['meta.title']) document.title = dict['meta.title'];
  const metaDesc = document.getElementById('pageDescription');
  if (metaDesc && dict['meta.description']) {
    metaDesc.setAttribute('content', dict['meta.description']);
  }

  // O innerHTML do rodapé recria o <span id="year">; preenche o ano de novo
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}


document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);

  /* ------------------------------------------------------------------------
     1. Detecta e aplica o idioma do visitante
  ------------------------------------------------------------------------ */
  applyTranslations(detectLanguage());


  /* ------------------------------------------------------------------------
     2. Header: sombra/borda sutil após rolar a página
  ------------------------------------------------------------------------ */
  const header = document.getElementById('header');
  const handleScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();


  /* ------------------------------------------------------------------------
     3. Accordion do FAQ — um item aberto por vez
  ------------------------------------------------------------------------ */
  const accordionItems = document.querySelectorAll('.accordion__item');

  accordionItems.forEach((item) => {
    const trigger = item.querySelector('.accordion__trigger');

    trigger.addEventListener('click', () => {
      const isCurrentlyOpen = item.classList.contains('is-open');

      accordionItems.forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('.accordion__trigger').setAttribute('aria-expanded', 'false');
      });

      if (!isCurrentlyOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });


  /* ------------------------------------------------------------------------
     4. Barra de CTA fixa (mobile) — some enquanto o Hero está visível,
        aparece assim que o visitante rola pra além dele
  ------------------------------------------------------------------------ */
  const stickyCta = document.getElementById('stickyCta');
  const hero = document.querySelector('.hero');

  if (stickyCta && hero) {
    const heroObserver = new IntersectionObserver(
      ([entry]) => stickyCta.classList.toggle('is-visible', !entry.isIntersecting),
      { threshold: 0 }
    );
    heroObserver.observe(hero);
  }

});
