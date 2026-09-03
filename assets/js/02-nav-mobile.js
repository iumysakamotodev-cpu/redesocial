/* barra inferior do mobile */
/* ---------- Nav inferior do mobile ----------
   Cada item leva a uma seção que a home já tem; o "+" abre as mesmas ações
   rápidas do header. Rolagem descontando o header, que é sticky. */
(() => {
  const mnav = $('#mnav');
  if (!mnav) return;
  const alvos = { home: null, shorts: '#homeShorts', feed: '#homeFeedTitle', comunicados: '#homeComPanel' };
  const fecharModulos = () => {
    ['closeStories', 'closeForum', 'closeNewsModule'].forEach(f => { if (typeof window[f] === 'function') window[f](); });
  };
  /* a folha copia o que o painel da home mostraria agora: assim ela acompanha
     o cenario ligado (SULTS, Crunchyroll, vazio) sem duplicar conteudo */
  window.comSheetAbrir = function(){
    const painel = $('#homeComPanel'), corpo = $('#comSheetBody'), fundo = $('#comSheetBack');
    if (!painel || !corpo || !fundo) return;
    corpo.innerHTML = '';
    painel.querySelectorAll(':scope > *').forEach(el => {
      if (el.classList.contains('com-head')) return;
      if (getComputedStyle(el).display === 'none') return;
      corpo.appendChild(el.cloneNode(true));
    });
    /* a barra de baixo e fixa e fica por cima da folha, e o "+" ainda sobe
       acima dela. O fim da lista reserva a barra mais essa saliencia, senao o
       "Ver todos os comunicados" fica escondido atras dos dois. */
    const barra = $('#mnav'), fab = $('#mnav .fab');
    const rb = barra ? barra.getBoundingClientRect() : null;
    const alturaBarra = rb ? Math.round(rb.height) : 64;
    const saliencia = (rb && fab) ? Math.max(0, Math.round(rb.top - fab.getBoundingClientRect().top)) : 0;
    corpo.style.paddingBottom = (alturaBarra + saliencia + 32) + 'px';
    fundo.hidden = false;
    document.body.style.overflow = 'hidden';
  };
  window.comSheetFechar = function(){
    const fundo = $('#comSheetBack'); if (!fundo) return;
    fundo.hidden = true;
    document.body.style.overflow = '';
    const mnav = $('#mnav');
    if (mnav){ mnav.querySelectorAll('button').forEach(x => x.classList.remove('on')); const h = mnav.querySelector('[data-t="home"]'); if (h) h.classList.add('on'); }
  };
  /* folha de "Criar nova publicação": as mesmas opções do compositor da home,
     mais o short, para o "+" da barra virar uma escolha e não um atalho unico */
  window.novoSheetAbrir = function(){
    const fundo = $('#novoSheetBack'), corpo = $('#novoSheetBody'); if (!fundo || !corpo) return;
    const barra = $('#mnav'), fab = $('#mnav .fab');
    const rb = barra ? barra.getBoundingClientRect() : null;
    const alturaBarra = rb ? Math.round(rb.height) : 64;
    const saliencia = (rb && fab) ? Math.max(0, Math.round(rb.top - fab.getBoundingClientRect().top)) : 0;
    corpo.style.paddingBottom = (alturaBarra + saliencia + 32) + 'px';
    fundo.hidden = false;
    document.body.style.overflow = 'hidden';
  };
  window.novoSheetFechar = function(){
    const fundo = $('#novoSheetBack'); if (!fundo) return;
    fundo.hidden = true; document.body.style.overflow = '';
    const mnav = $('#mnav');
    if (mnav){ mnav.querySelectorAll('button').forEach(x => x.classList.remove('on')); const h = mnav.querySelector('[data-t="home"]'); if (h) h.classList.add('on'); }
  };
  $('#novoSheetClose') && $('#novoSheetClose').addEventListener('click', novoSheetFechar);
  $('#novoSheetBack') && $('#novoSheetBack').addEventListener('click', e => { if (e.target.id === 'novoSheetBack') novoSheetFechar(); });
  $('#novoSheetBody') && $('#novoSheetBody').addEventListener('click', e => {
    const b = e.target.closest('[data-novo]'); if (!b) return;
    const tipo = b.dataset.novo;
    novoSheetFechar();
    if (tipo === 'short'){ if (typeof crOpen === 'function') crOpen(); return; }
    if (tipo === 'art'){ const alvo = $('#homeQArt'); if (alvo) alvo.click(); return; }
    if (typeof qpOpen !== 'function') return;
    if (tipo === 'pub') qpOpen(); else qpOpen(tipo);
  });
  $('#comSheetClose') && $('#comSheetClose').addEventListener('click', comSheetFechar);
  $('#comSheetBack') && $('#comSheetBack').addEventListener('click', e => { if (e.target.id === 'comSheetBack') comSheetFechar(); });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!$('#comSheetBack').hidden) comSheetFechar();
    if (!$('#novoSheetBack').hidden) novoSheetFechar();
  });
  const irPara = sel => {
    const el = sel && $(sel);
    if (!el) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const header = $('.topbar');
    const desconto = (header ? header.getBoundingClientRect().height : 0) + 12;
    const y = el.getBoundingClientRect().top + window.scrollY - desconto;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  };
  mnav.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    const t = b.dataset.t;
    /* o "+" abre a folha de opções, e não direto o editor */
    if (t === 'novo') { novoSheetAbrir(); return; }
    /* as abas do módulo trocam de tela DENTRO dele: vêm antes de fecharModulos(),
       senão o módulo fecharia e a tela abriria escondida */
    if (t === 'mod-pub') { const alvo = $('#nmtFeed'); if (alvo) alvo.click(); return; }
    if (t === 'mod-shorts') { const alvo = $('#nmtStories'); if (alvo) alvo.click(); return; }
    mnav.querySelectorAll('button').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    fecharModulos();
    /* Home, Shorts e Feed rolam ate o bloco correspondente da home; so os
       Comunicados abrem tela propria, a folha que sobe de baixo */
    if (t === 'comunicados') { comSheetAbrir(); return; }
    if (t === 'home') {
      document.body.classList.remove('demo-suporte');
      if (document.body.classList.contains('demo-empty') && typeof demoToggle !== 'undefined') demoToggle.click();
      setNav($('#navHome'));
    }
    irPara(alvos[t]);
  });
})();
$('#navStories') && $('#navStories').addEventListener('click', e => { e.preventDefault(); setNav($('#navStories')); closeNewsModule(); openStories(); });
$('#navHome').addEventListener('click', e => {
  e.preventDefault();
  document.body.classList.remove('demo-suporte');
  if (document.body.classList.contains('demo-empty')) demoToggle.click();
  setNav($('#navHome'));
  closeStories(); closeForum(); closeNewsModule();
});
$('#reelsSeeAll') && $('#reelsSeeAll').addEventListener('click', e => { e.preventDefault(); if(typeof abrirShorts==='function'){ abrirShorts(); } else if(typeof openNewsModule==='function'){ openNewsModule(); newsShow('shorts'); } });

