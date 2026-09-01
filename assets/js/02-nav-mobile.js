/* barra inferior do mobile */
/* ---------- Nav inferior do mobile ----------
   Cada item leva a uma seção que a home já tem; o "+" abre as mesmas ações
   rápidas do header. Rolagem descontando o header, que é sticky. */
(() => {
  const mnav = $('#mnav');
  if (!mnav) return;
  const alvos = { home: null, shorts: '#homeShorts', modulos: '#appsPanel', comunicados: '#homeComPanel' };
  const fecharModulos = () => {
    ['closeStories', 'closeForum', 'closeNewsModule'].forEach(f => { if (typeof window[f] === 'function') window[f](); });
  };
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
    /* o "+" abre direto o editor de publicação, e não o menu de ações */
    if (t === 'novo') { if (typeof qpOpen === 'function') qpOpen(); return; }
    /* as abas do módulo trocam de tela DENTRO dele: vêm antes de fecharModulos(),
       senão o módulo fecharia e a tela abriria escondida */
    if (t === 'mod-pub') { const alvo = $('#nmtFeed'); if (alvo) alvo.click(); return; }
    if (t === 'mod-shorts') { const alvo = $('#nmtStories'); if (alvo) alvo.click(); return; }
    mnav.querySelectorAll('button').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    fecharModulos();
    /* onde já existe uma tela de verdade, o item leva até ela; onde não existe,
       ele rola até o bloco correspondente da home. Hoje só Shorts tem tela. */
    if (t === 'shorts' && typeof abrirShorts === 'function') { abrirShorts(); return; }
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

