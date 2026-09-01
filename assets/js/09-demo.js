/* alternar preenchido / vazio */
/* ---------- Demo: alternar Preenchido / Vazio (para apresentar aos devs) ---------- */
const demoToggle = $('#demoToggle');
const demoState  = $('#demoState');
demoToggle.addEventListener('click', () => {
  const empty = document.body.classList.toggle('demo-empty');
  demoToggle.classList.toggle('empty', empty);
  demoState.textContent = empty ? 'Vazio' : 'Preenchido';
  /* Reinicia os shorts: tudo volta a não visto */
  seenShorts.clear();
  localStorage.setItem(SEEN_KEY, '[]');
  buildStories();
  if (reelsView.classList.contains('open')) renderGrid();
});
$('#navNovidades') && $('#navNovidades').addEventListener('click', e => {
  e.preventDefault();
  document.body.classList.remove('demo-suporte');   /* os cenários não se somam */
  demoToggle.click();
  setNav($('#navNovidades'));
  /* o mesmo aviso do outro cenário: o toggle já alternou, então o estado
     lido aqui é o que acabou de entrar */
  fgToast(document.body.classList.contains('demo-empty')
    ? 'Cenário: rede ainda sem conteúdo'
    : 'Cenário: rede com conteúdo');
});
/* Falar com o suporte: cenário de demonstração em que a pessoa vê o Feed mas
   não pode publicar nele nem criar Shorts — a fileira de shorts some, o campo
   de publicar some, e os comunicados aparecem no estado vazio. */
$('#navSuporte') && $('#navSuporte').addEventListener('click', e => {
  e.preventDefault();
  if (document.body.classList.contains('demo-empty')) demoToggle.click();
  document.body.classList.add('demo-suporte');
  setNav($('#navSuporte'));       /* fica selecionado no menu */
  fgToast('Cenário: sem permissão para publicar');
});

