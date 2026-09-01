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
});
/* Falar com o suporte: cenário de demonstração em que a rede só tem os módulos
   — shorts, feed e comunicados desligados, e a grade de aplicativos aberta. */
$('#navSuporte') && $('#navSuporte').addEventListener('click', e => {
  e.preventDefault();
  if (document.body.classList.contains('demo-empty')) demoToggle.click();
  document.body.classList.add('demo-suporte');
  setNav($('#navSuporte'));       /* fica selecionado no menu */
  fgToast('Cenário: rede só com módulos');
});

