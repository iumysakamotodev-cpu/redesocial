/* botao +Novo e sino de notificacoes */
/* ---------- Botão global "+ Novo" ---------- */
const NEW_MODULES = {
  chamados:    { c:'#2f6fe4', icon:'fa-comment-dots',           nome:'Chamados' },
  tarefas:     { c:'#34597a', icon:'fa-list-check',             nome:'Tarefas' },
  comunicado:  { c:'#6f6ae0', icon:'fa-bullhorn',               nome:'Comunicado' },
  checklist:   { c:'#27a689', icon:'fa-clipboard-check',        nome:'Checklist' },
  agenda:      { c:'#a93438', icon:'fa-calendar-days',          nome:'Agenda' },
  projetos:    { c:'#e3444f', icon:'fa-file-lines',             nome:'Projetos' },
  enquete:     { c:'#7a52c7', icon:'fa-magnifying-glass-chart', nome:'Enquete' },
  universidade:{ c:'#9c4ec9', icon:'fa-person-chalkboard',      nome:'Universidade Corporativa' },
  unidades:    { c:'#00bfb3', icon:'fa-store',                  nome:'Unidades' },
  disco:       { c:'#4285f4', icon:'fa-cloud',                  nome:'Disco Virtual' }
};

// Cenário A · Gestor de rede (8 ações, ordenadas por frequência)
const NEW_ACTIONS = [
  { id:'comunicado_novo',  label:'Novo comunicado',   modulo:'comunicado',  abertura:'navegacao', short:'Chamado' },
  { id:'chamado_novo',     label:'Novo chamado',      modulo:'chamados',    abertura:'modal',     n:'#4832' },
  { id:'tarefa_nova',      label:'Nova tarefa',       modulo:'tarefas',     abertura:'modal',     n:'#T-219' },
  { id:'projeto_novo',     label:'Novo projeto',      modulo:'projetos',    abertura:'navegacao' },
  { id:'evento_novo',      label:'Novo evento',       modulo:'agenda',      abertura:'modal',     n:'#EV-88' },
  { id:'enquete_nova',     label:'Nova enquete',      modulo:'enquete',     abertura:'navegacao' },
  { id:'treinamento_novo', label:'Novo treinamento',  modulo:'universidade',abertura:'navegacao' },
  { id:'unidade_nova',     label:'Nova unidade',      modulo:'unidades',    abertura:'navegacao' }
];

const newWrap = $('#newWrap');
const newBtn  = $('#newBtn');
const newMenu = $('#newMenu');
const newSheetBd = $('#newSheetBd');
let newSel = 0;
const newHasSearch = NEW_ACTIONS.length > 8;

function renderNewMenu(filter){
  const q = norm(filter || '');
  const list = NEW_ACTIONS.filter(a => !q || norm(a.label).includes(q) || norm(NEW_MODULES[a.modulo].nome).includes(q));
  let html = '';
  if (newHasSearch){
    html += '<div class="new-search"><i class="fa-solid fa-magnifying-glass"></i>' +
      '<input type="text" id="newSearchInput" placeholder="Buscar ação" autocomplete="off" value="' + (filter || '') + '"></div>';
  }
  html += '<div class="new-list" role="none">';
  if (!list.length){
    html += '<div class="new-empty">Nenhuma ação encontrada</div>';
  } else {
    list.forEach((a, i) => {
      const m = NEW_MODULES[a.modulo];
      html += '<button class="new-item' + (i === 0 ? ' sel' : '') + '" role="menuitem" data-id="' + a.id + '" ' +
        'aria-label="Criar ' + a.label.toLowerCase() + ' no módulo ' + m.nome + '">' +
        '<span class="new-ic" style="--c:' + m.c + '"><i class="fa-solid ' + m.icon + '"></i></span>' +
        '<span class="new-txt"><span class="new-title">' + a.label + '</span>' +
        '<span class="new-sub">' + m.nome + '</span></span>' +
        '<span class="new-enter">Enter</span></button>';
    });
  }
  html += '</div>';
  html += '<div class="new-foot"><span><kbd>↑</kbd><kbd>↓</kbd> navegar</span><span><kbd>Enter</kbd> criar</span><span><kbd>Esc</kbd> fechar</span></div>';
  newMenu.innerHTML = html;
  newSel = 0;
  const si = $('#newSearchInput');
  if (si){
    si.addEventListener('input', () => renderNewMenu(si.value));
    si.addEventListener('keydown', handleNewKeys);
  }
  newMenu.querySelectorAll('.new-item').forEach(el =>
    el.addEventListener('click', () => runNewAction(el.dataset.id)));
}

function openNewMenu(){
  if (typeof gsClose === 'function') gsClose();
  renderNewMenu('');
  newMenu.hidden = false;
  newWrap.classList.add('open');
  newBtn.setAttribute('aria-expanded', 'true');
  if (window.matchMedia('(max-width:640px)').matches) newSheetBd.hidden = false;
  const si = $('#newSearchInput');
  if (si && !window.matchMedia('(max-width:640px)').matches) si.focus();
}
function closeNewMenu(){
  newMenu.hidden = true;
  newWrap.classList.remove('open');
  newBtn.setAttribute('aria-expanded', 'false');
  newSheetBd.hidden = true;
}
function toggleNewMenu(){ newMenu.hidden ? openNewMenu() : closeNewMenu(); }

function runNewAction(id){
  const a = NEW_ACTIONS.find(x => x.id === id);
  closeNewMenu();
  newBtn.focus();
  if (a && a.abertura === 'modal'){
    showToast(a.label.replace(/^Nov[oa] /, '').replace(/^./, c => c.toUpperCase()) +
      (a.n ? ' ' + a.n : '') + ' criado');
  }
}

function newMoveSel(d){
  const els = newMenu.querySelectorAll('.new-item');
  if (!els.length) return;
  els[newSel] && els[newSel].classList.remove('sel');
  newSel = (newSel + d + els.length) % els.length;
  els[newSel].classList.add('sel');
  els[newSel].scrollIntoView({ block:'nearest' });
}
function handleNewKeys(e){
  if (newMenu.hidden) return;
  if (e.key === 'ArrowDown'){ e.preventDefault(); newMoveSel(1); }
  else if (e.key === 'ArrowUp'){ e.preventDefault(); newMoveSel(-1); }
  else if (e.key === 'Enter'){ e.preventDefault(); const el = newMenu.querySelectorAll('.new-item')[newSel]; if (el) el.click(); }
  else if (e.key === 'Escape'){ e.preventDefault(); closeNewMenu(); newBtn.focus(); }
}

newBtn.addEventListener('click', toggleNewMenu);
newMenu.addEventListener('keydown', handleNewKeys);
newSheetBd.addEventListener('click', closeNewMenu);
document.addEventListener('click', e => { if (!newWrap.contains(e.target) && e.target !== newSheetBd) closeNewMenu(); });
document.addEventListener('keydown', e => {
  const digitando = /^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName);
  if (!newMenu.hidden){ handleNewKeys(e); return; }
  if (e.key.toLowerCase() === 'n' && !digitando && !e.ctrlKey && !e.metaKey && !e.altKey){
    e.preventDefault(); openNewMenu();
  }
});

// Toast de sucesso
let toastN = 0;
function showToast(text){
  const wrap = $('#toastWrap');
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = '<span class="tk"><i class="fa-solid fa-check"></i></span>' +
    '<span class="tt">' + text + '</span><button class="tv">Ver</button>';
  wrap.appendChild(t);
  const kill = () => { t.classList.add('out'); setTimeout(() => t.remove(), 250); };
  t.querySelector('.tv').addEventListener('click', kill);
  setTimeout(kill, 4000);
}

// Fecha o "+ Novo" quando a busca global abre
if (typeof gsOpen === 'function'){
  const _gsOpen = gsOpen;
  gsOpen = function(){ closeNewMenu(); if (typeof closeNotif === 'function') closeNotif(); _gsOpen(); };
  gsInput.addEventListener('focus', closeNewMenu);
}

/* ---------- Sino de notificações ---------- */
const NF_MODULES = {
  chamados:   { c:'#2f6fe4', icon:'fa-comment-dots',        nome:'Chamados' },
  checklist:  { c:'#27a689', icon:'fa-clipboard-check',     nome:'Checklist' },
  comunicado: { c:'#6f6ae0', icon:'fa-bullhorn',            nome:'Comunicado' },
  processos:  { c:'#8161d8', icon:'fa-arrows-spin',         nome:'Processos' },
  tarefas:    { c:'#34597a', icon:'fa-list-check',          nome:'Tarefas' },
  projetos:   { c:'#e3444f', icon:'fa-file-lines',          nome:'Projetos' },
  universidade:{c:'#9c4ec9', icon:'fa-person-chalkboard',   nome:'Universidade Corporativa' },
  agenda:     { c:'#a93438', icon:'fa-calendar-days',       nome:'Agenda' },
  enquete:    { c:'#7a52c7', icon:'fa-magnifying-glass-chart', nome:'Enquete' }
};

// Cenário A · Dia cheio
let NF_GROUPS = [
  { modulo:'chamados', total:8, itens:[
    { id:'n1', ator:'Livia Fernandes', ini:'LF', av:'av-lf', texto:'e <b>+2</b> comentaram o chamado #4821', ctx:'Unidade Boatlux Litoral 01', quando:'há 12 min', lida:false },
    { id:'n2', ator:'Pedro Lima', ini:'PL', av:'av-pl', texto:'atribuiu o chamado #4835 a você', ctx:'Unidade Constance Centro', quando:'há 40 min', lida:false },
    { id:'n3', sistema:true, texto:'SLA do chamado #4790 vence em <b>2h</b>', ctx:'Prioridade alta', quando:'há 1 h', lida:false }
  ]},
  { modulo:'checklist', total:2, itens:[
    { id:'n4', sistema:true, texto:'Checklist <b>Abertura de Loja</b> agendado para hoje', ctx:'Unidade Corpore Fit Barra', quando:'há 2 h', lida:false },
    { id:'n5', ator:'Matheus Scussel', ini:'MS', av:'av-ms', texto:'criou um plano de ação para você', ctx:'Auditoria mensal', quando:'ontem', lida:true }
  ]},
  { modulo:'comunicado', total:1, itens:[
    { id:'n6', sistema:true, texto:'Novo comunicado exige sua ciência: <b>Convenção SULTS 2026</b>', ctx:'Comunicado da rede', quando:'há 3 h', lida:false }
  ]},
  { modulo:'processos', total:1, itens:[
    { id:'n7', ator:'Matheus Scussel', ini:'MS', av:'av-ms', texto:'solicitou sua aprovação em <b>Compra de equipamentos</b>', ctx:'Fila de aprovação', quando:'ontem', lida:true }
  ]}
];

const bellWrap  = $('#bellWrap');
const bellBtn   = $('#bellBtn');
const bellBadge = $('#bellBadge');
const notifMenu = $('#notifMenu');
let nfFilter = 'todas';

function nfUnreadTotal(){
  return NF_GROUPS.reduce((s, g) => s + g.itens.filter(i => !i.lida).length, 0);
}
function updateBellBadge(){
  if(!bellBadge || !bellBtn) return;
  const n = nfUnreadTotal();
  bellBadge.textContent = n > 99 ? '99+' : n;
  bellBadge.hidden = n === 0;
  bellBtn.setAttribute('aria-label', 'Notificações, ' + n + ' não lidas');
}

function nfItemHTML(g, it){
  const m = NF_MODULES[g.modulo];
  const vis = it.sistema
    ? '<span class="nf-modic" style="--c:' + m.c + '"><i class="fa-solid ' + m.icon + '"></i></span>'
    : '<span class="avatar ' + it.av + '">' + it.ini + '</span>';
  const l1 = it.sistema ? it.texto : '<b>' + it.ator + '</b> ' + it.texto;
  return '<div class="nf-item' + (it.lida ? '' : ' unread') + '" role="menuitem" data-id="' + it.id + '" ' +
    'aria-label="' + (it.sistema ? '' : it.ator + ' ') + it.texto.replace(/<[^>]+>/g, '') + ', ' +
      (it.lida ? 'lida' : 'não lida') + ', ' + it.quando + '">' +
    '<span class="nf-vis">' + vis + '</span>' +
    '<span class="nf-body"><span class="nf-l1">' + l1 + '</span>' +
    '<span class="nf-l2">' + it.ctx + ' · ' + it.quando + '</span></span>' +
    '<span class="nf-dot" title="Marcar como lida"><span class="d"></span><i class="fa-solid fa-check"></i></span>' +
    '</div>';
}

function renderNotif(){
  const unread = nfUnreadTotal();
  let groups = NF_GROUPS.map(g => ({
    g, itens: nfFilter === 'nao' ? g.itens.filter(i => !i.lida) : g.itens
  })).filter(x => x.itens.length);

  // grupos 100% lidos vão para o fim
  groups.sort((a, b) => {
    const au = a.g.itens.some(i => !i.lida), bu = b.g.itens.some(i => !i.lida);
    return (bu - au);
  });

  const isMobile = window.matchMedia('(max-width:640px)').matches;
  let html = '';
  if (isMobile){
    html += '<div class="nf-mob-head"><h3>Notificações</h3><button class="nf-close" id="nfClose"><i class="fa-solid fa-xmark"></i></button></div>';
  } else {
    html += '<div class="nf-head"><h3>Notificações</h3>' +
      (unread ? '<button class="nf-readall" id="nfReadAll">Marcar todas como lidas</button>' : '') + '</div>';
  }
  html += '<div class="nf-filters">' +
    '<button class="nf-fpill' + (nfFilter === 'todas' ? ' on' : '') + '" data-f="todas">Todas</button>' +
    '<button class="nf-fpill' + (nfFilter === 'nao' ? ' on' : '') + '" data-f="nao">Não lidas (' + unread + ')</button>' +
    '</div>';

  html += '<div class="nf-scroll">';
  if (!groups.length){
    html += nfFilter === 'nao'
      ? '<div class="nf-empty"><i class="fa-solid fa-circle-check"></i><div class="t">Nenhuma não lida 🎉</div><div class="s">Você despachou tudo</div></div>'
      : '<div class="nf-empty"><i class="fa-regular fa-bell"></i><div class="t">Você está em dia</div><div class="s">Nenhuma notificação por aqui</div></div>';
  } else {
    groups.forEach(({ g, itens }) => {
      const m = NF_MODULES[g.modulo];
      const gu = g.itens.filter(i => !i.lida).length;
      html += '<div class="nf-group" data-mod="' + g.modulo + '">' +
        '<div class="nf-group-head" role="heading" aria-level="3">' +
        '<span class="nf-gic" style="--c:' + m.c + '"><i class="fa-solid ' + m.icon + '"></i></span>' +
        '<span class="nf-gname">' + m.nome + '</span>' +
        (gu ? '<span class="nf-gcount">(' + gu + ')</span>' : '') +
        (gu ? '<button class="nf-gread" title="Marcar grupo como lidas" data-mod="' + g.modulo + '"><i class="fa-solid fa-check-double"></i></button>' : '') +
        '</div>';
      itens.slice(0, 3).forEach(it => html += nfItemHTML(g, it));
      const rest = g.total - Math.min(itens.length, 3);
      if (rest > 0) html += '<a class="nf-more" href="#">Ver mais ' + rest + ' de ' + m.nome + '</a>';
      html += '</div>';
    });
  }
  html += '</div>';
  html += '<div class="nf-foot"><a href="#">Ver todas as notificações</a>' +
    '<button class="nf-gear" title="Preferências de notificação"><i class="fa-solid fa-gear"></i></button></div>';

  if(!notifMenu) return;
  notifMenu.innerHTML = html;
  wireNotif();
}

function wireNotif(){
  if(!notifMenu) return;
  notifMenu.querySelectorAll('.nf-fpill').forEach(b =>
    b.addEventListener('click', () => { nfFilter = b.dataset.f; renderNotif(); }));
  const ra = $('#nfReadAll');
  if (ra) ra.addEventListener('click', () => { NF_GROUPS.forEach(g => g.itens.forEach(i => i.lida = true)); updateBellBadge(); renderNotif(); });
  const cl = $('#nfClose');
  if (cl) cl.addEventListener('click', closeNotif);
  notifMenu.querySelectorAll('.nf-gread').forEach(b =>
    b.addEventListener('click', e => {
      e.stopPropagation();
      const g = NF_GROUPS.find(x => x.modulo === b.dataset.mod);
      g.itens.forEach(i => i.lida = true);
      updateBellBadge(); renderNotif();
    }));
  notifMenu.querySelectorAll('.nf-item').forEach(el => {
    const dot = el.querySelector('.nf-dot');
    const mark = () => {
      const id = el.dataset.id;
      NF_GROUPS.forEach(g => g.itens.forEach(i => { if (i.id === id) i.lida = true; }));
      updateBellBadge();
    };
    dot.addEventListener('click', e => { e.stopPropagation(); mark(); renderNotif(); });
    el.addEventListener('click', () => { mark(); closeNotif(); });
  });
}

function openNotif(){
  if (typeof gsClose === 'function') gsClose();
  if (typeof closeNewMenu === 'function') closeNewMenu();
  renderNotif();
  if(!notifMenu) return;
  notifMenu.hidden = false;
  bellBtn.setAttribute('aria-expanded', 'true');
}
function closeNotif(){
  if(!notifMenu) return;
  notifMenu.hidden = true;
  bellBtn.setAttribute('aria-expanded', 'false');
}
function toggleNotif(){ if(!notifMenu) return; notifMenu.hidden ? openNotif() : closeNotif(); }

bellBtn && bellBtn.addEventListener('click', e => { e.stopPropagation(); toggleNotif(); });
document.addEventListener('click', e => { if (bellWrap && !bellWrap.contains(e.target)) closeNotif(); });
document.addEventListener('keydown', e => { if (notifMenu && !notifMenu.hidden && e.key === 'Escape') closeNotif(); });
if (typeof openNewMenu === 'function'){
  const _openNew = openNewMenu;
  openNewMenu = function(){ closeNotif(); _openNew(); };
}
updateBellBadge();

