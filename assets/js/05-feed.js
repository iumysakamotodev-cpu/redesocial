/* reacoes, ver mais e comentarios */
/* ---------- Feed: botão Gostei com reações (estilo LinkedIn) ---------- */
const RXIMG = (n,c) => '<span class="rx-svg" style="background-image:url(uploads/reactions/'+n+'.svg)"></span>';
const REACTIONS = [
  { key:'like',        label:'Gostei',      emoji:RXIMG('Like','#378FE9'),        color:'#378FE9' },
  { key:'celebrate',   label:'Parabéns',    emoji:RXIMG('Celebrate','#6DAE4F'),   color:'#6DAE4F' },
  { key:'love',        label:'Amei',        emoji:RXIMG('Love','#DF704D'),        color:'#DF704D' },
  { key:'insight',     label:'Genial',      emoji:RXIMG('Insightful','#F5BB5C'),  color:'#F5BB5C' },
  { key:'sensational', label:'Sensacional', emoji:RXIMG('Sensational','#00ACAC'), color:'#00ACAC' }
];

function initReactions(btn){
  const post    = btn.closest('.post');
  const countEl = post.querySelector('.rx-count');
  if (!countEl.dataset.base) countEl.dataset.base = countEl.textContent.trim();
  const base = parseInt(countEl.dataset.base, 10) || 0;

  const wrap = document.createElement('div');
  wrap.className = 'react-wrap';
  btn.parentNode.insertBefore(wrap, btn);
  wrap.appendChild(btn);

  const bar = document.createElement('div');
  bar.className = 'react-bar';
  bar.innerHTML = REACTIONS.map((r, i) =>
    '<button class="react-btn" data-key="' + r.key + '" aria-label="' + r.label + '" style="--i:' + i + '">' +
      '<span class="rb-emoji">' + r.emoji + '</span>' +
      '<span class="rb-label">' + r.label + '</span>' +
    '</button>').join('');
  wrap.appendChild(bar);

  let current = null, openT, closeT;
  const open  = () => { clearTimeout(closeT); openT = setTimeout(() => wrap.classList.add('open'), 320); };
  const close = () => { clearTimeout(openT); closeT = setTimeout(() => wrap.classList.remove('open'), 260); };
  wrap.addEventListener('mouseenter', open);
  wrap.addEventListener('mouseleave', close);

  function render(){
    if (current){
      btn.classList.add('liked');
      btn.style.color = current.color;
      btn.innerHTML = '<span class="rx-emoji">' + current.emoji + '</span> ' + current.label;
    } else {
      btn.classList.remove('liked');
      btn.style.color = '';
      btn.innerHTML = '<i class="fa-regular fa-thumbs-up"></i> Gostei';
    }
    countEl.textContent = base + (current ? 1 : 0);
  }

  function setReaction(r, fromEl){
    current = r;
    if(fromEl){
      fromEl.classList.add('rb-pick');
      setTimeout(function(){ render(); wrap.classList.remove('open'); fromEl.classList.remove('rb-pick'); }, 170);
    } else { render(); wrap.classList.remove('open'); }
  }

  btn.addEventListener('click', () => setReaction(current ? null : REACTIONS[0]));
  bar.querySelectorAll('.react-btn').forEach(b =>
    b.addEventListener('click', () => setReaction(REACTIONS.find(x => x.key === b.dataset.key), b)));
}
$$('.p-act.like').forEach(initReactions);

/* ---------- Feed: "...ver mais" ---------- */
$$('.see-more').forEach(b => {
  b.addEventListener('click', () => {
    b.closest('.post-text').classList.add('open');
    b.remove();
  });
});

/* ---------- Comentários (estilo LinkedIn) ---------- */
const COMMENTS = [
  [
    { av:'av-pl', ini:'PL', name:'Pedro Lima', role:'Comercial · Shopping Plazza Rio', text:'Que marco incrível! 🚀 Parabéns a todos os times envolvidos.', time:'1 h', likes:14,
      replies:[ { av:'av-rc', ini:'RC', name:'Rodrigo Caetano', role:'CEO · SULTS', text:'Valeu, Pedro! Mérito de todo mundo. 💙', time:'55 min', likes:3 } ] },
    { av:'av-lf', ini:'LF', name:'Livia Fernandes', role:'Head de Customer Success · SULTS', text:'Boas-vindas Boatlux e Constance! Vamos com tudo. 💙', time:'45 min', likes:8 }
  ],
  [
    { av:'av-ms', ini:'MS', name:'Matheus Scussel', role:'COO · Bella Capri Centro', text:'NPS 87 é surreal. Que time! 👏', time:'3 h', likes:21 },
    { av:'av-cm', ini:'CM', name:'Carla Mendes', role:'Universidade Corporativa · Lugano Gramado', text:'Orgulho de fazer parte disso. Parabéns Livia!', time:'2 h', likes:6 }
  ],
  [
    { av:'av-js', ini:'JS', name:'João Santos', role:'Suporte · Boatlux Marina Sul', text:'Já quero testar o MCP server nas integrações do time. 🔥', time:'20 h', likes:11 },
    { av:'av-as', ini:'AS', name:'Ana Souza', role:'Marketing · Pit Stop Barra', text:'Isso abre um mundo de possibilidades. Bora divulgar!', time:'18 h', likes:5 }
  ],
  [
    { av:'av-bo', ini:'B', name:'Breno', role:'Time SULTS · FarMelhor Savassi', text:'Obrigado pessoal! Vejo todo mundo às 16h. 🎂', time:'1 h', likes:32 },
    { av:'av-gc', ini:'GC', name:'Gente & Cultura', role:'Recursos Humanos · Mormaii Balneário', text:'Parabéns, Breno! Muitas felicidades. 🎉', time:'3 h', likes:9 }
  ]
];

function makeComposer(placeholder, onSend, compact){
  const composer = document.createElement('div');
  composer.className = 'comment-composer' + (compact ? ' reply-composer' : '');
  composer.innerHTML =
    '<span class="avatar av-rc">RC</span>' +
    '<div class="cc-field">' +
      '<input type="text" autocomplete="off">' +
      '<button class="cc-send" title="Publicar" disabled><i class="fa-solid fa-paper-plane"></i></button>' +
    '</div>';
  const input = composer.querySelector('input');
  const send  = composer.querySelector('.cc-send');
  input.placeholder = placeholder;
  input.addEventListener('input', () => { send.disabled = !input.value.trim(); });
  function publish(){ const t = input.value.trim(); if (!t) return; onSend(t); input.value=''; send.disabled=true; }
  send.addEventListener('click', publish);
  input.addEventListener('keydown', e => { if (e.key === 'Enter'){ e.preventDefault(); publish(); } });
  return { composer, input };
}

function pmNeedsApproval(){ return false; }
function pmApprovalOn(){ const c=document.getElementById('pmApprove'); return !!(c && c.checked); }
function cmDT(c){
  if(c && c.dt) return c.dt;
  const d=new Date(); const s=String((c&&c.time)||'agora');
  let mins=0; let m;
  if(/agora/i.test(s)) mins=0;
  else if(/hoje/i.test(s)) mins=120;
  else if(/ontem/i.test(s)) mins=1440;
  else if((m=s.match(/(\d+)\s*min/i))) mins=+m[1];
  else if((m=s.match(/(\d+)\s*h/i))) mins=+m[1]*60;
  else if((m=s.match(/(\d+)\s*d/i))) mins=+m[1]*1440;
  const t=new Date(d.getTime()-mins*60000); const p=x=>('0'+x).slice(-2);
  return p(t.getDate())+'/'+p(t.getMonth()+1)+'/'+t.getFullYear()+' '+p(t.getHours())+':'+p(t.getMinutes());
}
function buildComment(c, fresh, pending){
  const el = document.createElement('div');
  el.className = 'comment' + (fresh ? ' fresh' : '') + (pending ? ' pending' : '');
  el.innerHTML =
    '<span class="avatar ' + c.av + '">' + c.ini + '</span>' +
    '<div class="comment-main">' +
      '<div class="comment-bubble">' +
        '<div class="comment-top"><span class="comment-name">' + c.name + '</span>' +
        '<span class="comment-time">' + cmDT(c) + '</span>' +
        '<div class="comment-menu"><button class="comment-dots" title="Opções"><i class="fa-solid fa-ellipsis"></i></button><div class="comment-drop" hidden><button class="comment-del"><i class="fa-solid fa-trash-can"></i> Excluir</button></div></div></div>' +
        '<div class="comment-role">' + c.role + '</div>' +
        '<div class="comment-text"></div>' +
        (pending ? '<div class="comment-pend"><i class="fa-solid fa-clock"></i> Aguardando aprovação</div>' : '') +
      '</div>' +
      (pending ? '<div class="comment-mod"><button class="cmod-ok"><i class="fa-solid fa-check"></i> Aprovar</button><button class="cmod-no"><i class="fa-solid fa-xmark"></i> Recusar</button></div>' : '') +
      '<div class="comment-actions"'+(pending?' style="display:none"':'')+'>' +
        '<button class="comment-act clike"><i class="fa-regular fa-thumbs-up"></i> Gostei</button>' +
        '<span class="comment-sep"></span>' +
        '<span class="comment-likes"' + (c.likes ? '' : ' style="display:none"') + '><i class="fa-solid fa-thumbs-up"></i> <b>' + (c.likes || 0) + '</b></span>' +
      '</div>' +
      '<div class="comment-replies"></div>' +
    '</div>';
  el.querySelector('.comment-text').textContent = c.text;
  const dots=el.querySelector('.comment-dots'), drop=el.querySelector('.comment-drop');
  if(dots){ dots.addEventListener('click', ev=>{ ev.stopPropagation(); const wasHidden=drop.hidden; $$('.comment-drop').forEach(d=>d.hidden=true); drop.hidden=!wasHidden; }); el.querySelector('.comment-del').addEventListener('click', ()=>{ el.remove(); fgToast('Comentário excluído'); }); }
  const likeBtn  = el.querySelector('.clike');
  const likesWrap = el.querySelector('.comment-likes');
  const likesEl  = el.querySelector('.comment-likes b');
  const base = c.likes || 0;
  likeBtn.addEventListener('click', () => {
    const on = likeBtn.classList.toggle('liked');
    likeBtn.innerHTML = '<i class="fa-'+(on?'solid':'regular')+' fa-thumbs-up"></i> '+(on?'Curtido':'Gostei');
    const val = on ? base + 1 : base;
    likesEl.textContent = val;
    likesWrap.style.display = val ? '' : 'none';
  });
  likesWrap.style.cursor='pointer';
  likesWrap.addEventListener('click', ()=>{ const val=parseInt(likesEl.textContent,10)||0; openCmLikes(val); });
  const repliesBox = el.querySelector('.comment-replies');
  (c.replies || []).forEach(r => repliesBox.appendChild(buildComment(r, false)));
  if (pending){
    const doOk=()=>{ el.classList.remove('pending'); const pb=el.querySelector('.comment-pend'); if(pb) pb.remove(); const md=el.querySelector('.comment-mod'); if(md) md.remove(); el.querySelector('.comment-actions').style.display=''; };
    const mq={author:c.name,av:c.av,text:c.text,post:(c.postLabel||'Publicação'),approve:()=>doOk(),reject:()=>el.remove()};
    modAdd(mq);
    el.querySelector('.cmod-ok').addEventListener('click', () => { doOk(); modRemove(mq.mid); fgToast('Comentário aprovado'); });
    el.querySelector('.cmod-no').addEventListener('click', () => { askReject(function(motivo){ mq.motivo=motivo; modRemove(mq.mid); el.remove(); fgToast('Comentário recusado'); }); });
  }
  return el;
}

function initComments(post, comments){
  const box = document.createElement('div');
  box.className = 'comments';
  const postLabel=(post.querySelector('.post-name')?post.querySelector('.post-name').textContent.trim():'Publicação');
  const made = makeComposer('Adicione um comentário...', txt => {
    const pend = pmNeedsApproval();
    box.appendChild(buildComment({ av:'av-rc', ini:'RC', name:'Rodrigo Caetano', role:'CEO · SULTS', text:txt, time:'agora', likes:0, postLabel:postLabel }, true, pend));
    if (pend) fgToast('Comentário enviado para aprovação');
  });
  box.appendChild(made.composer);
  (comments || []).forEach(c => box.appendChild(buildComment(c, false)));
  post.appendChild(box);
  const toggle = post.querySelector('.comment-toggle');
  const openBox = () => { if(!box.classList.contains('open')){ box.classList.add('open'); made.input.focus(); } };
  toggle.addEventListener('click', () => {
    const open = box.classList.toggle('open');
    if (open) made.input.focus();
  });
  const cc = post.querySelector('.post-stats .right');
  if (cc) cc.addEventListener('click', openBox);
}
$$('.feed .post').forEach((post, idx) => initComments(post, COMMENTS[idx]));

/* Injetar no feed inicial uma publicação criada no módulo Notícias */
function nvImgCollage(imgs, cls){ const n=imgs.length; return '<div class="'+cls+' n'+Math.min(n,4)+'" data-imgs=\''+JSON.stringify(imgs).replace(/'/g,'&#39;')+'\'>'+imgs.slice(0,4).map((src,i)=>{ const more=(i===3&&n>4)?'<span class="pig-more">+'+(n-4)+'</span>':''; return '<div class="pig-cell" data-i="'+i+'"><img src="'+src+'">'+more+'</div>'; }).join('')+'</div>'; }
function nvNowStr(){ const d=new Date(); return ('0'+d.getDate()).slice(-2)+'/'+('0'+(d.getMonth()+1)).slice(-2)+'/'+d.getFullYear()+' às '+('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2); }
function addHomePost(n, append){
  const feed = $('.feed');
  if (!feed) return;
  const art = document.createElement('article');
  art.className = 'card post fresh';
  const txt = (n.text||'').replace(/\n/g,'<br>');
  let media = '';
  if (n.video) media = '<div class="post-img"><video class="nvf-img" src="'+n.video+'" controls playsinline style="max-height:560px;background:#000"></video></div>';
  else if (n.images && n.images.length>1) media = '<div class="post-img">'+nvImgCollage(n.images,'post-imggrid')+'</div>';
  else if (n.image) media = '<div class="post-img"><img class="nvf-img" src="'+n.image+'"></div>';
  else if (n.colorBg) media = '<div class="post-img"><div class="banner" style="background:'+n.colorBg+'">'+(n.colorEmoji?'<span class="big-emoji">'+n.colorEmoji+'</span>':'')+'<h4 style="font-size:24px">'+(n.text||'')+'</h4>'+(n.colorSub?'<p>'+n.colorSub+'</p>':'')+'</div></div>';
  else if (n.banner) media = '<div class="post-img"><div class="banner">'+WHITE_LOGO+'<h4>'+n.banner.title+'</h4>'+(n.banner.sub?'<p>'+n.banner.sub+'</p>':'')+'</div></div>';
  const title = n.title ? '<p class="post-text" style="font-weight:700;margin-bottom:0">'+n.title+'</p>' : '';
  const bodyTxt = n.colorBg ? '' : txt;
  const avatarHtml = n.autorAv ? '<span class="avatar '+n.autorAv+'"></span>' : '<span class="avatar av-brand">'+BRAND_LOGO+'</span>';
  const nameHtml = n.autorNome ? n.autorNome : 'SULTS <i class="fa-solid fa-circle-check verified"></i>';
  const metaTxt = n.datetime || n.date || 'agora';
  const rcount = n.reactions||0, ccount = n.comments||0;
  art.innerHTML =
    '<div class="post-head">'+avatarHtml+
      '<div class="post-id"><div class="post-name">'+nameHtml+'</div>'+
      '<div class="post-sub">'+postSub(n)+'</div>'+
      '<div class="post-meta">'+metaTxt+(n.edited?' · <span class="edited-tag">editado</span>':'')+' · <i class="fa-solid fa-earth-americas"></i></div></div>'+
      '<button class="post-more"><i class="fa-solid fa-ellipsis"></i></button></div>'+
    title + (bodyTxt?'<p class="post-text">'+bodyTxt+'</p>':'') + media +
    '<div class="post-stats"><span class="rx"><span class="rxs" data-rx="like"></span>'+(rcount>=90?'<span class="rxs" data-rx="love"></span>':'')+(rcount>=120?'<span class="rxs" data-rx="celebrate"></span>':'')+'</span><span class="rx-count">'+rcount+'</span><span class="right">'+(ccount?'Ver ':'')+ccount+' comentários</span></div>'+
    '<div class="post-actions"><button class="p-act like"><i class="fa-regular fa-thumbs-up"></i> Gostei</button><button class="p-act comment-toggle"><i class="fa-regular fa-comment"></i> Comentar</button></div>';
  if (append) feed.appendChild(art); else feed.insertBefore(art, feed.firstChild);
  initReactions(art.querySelector('.p-act.like'));
  initComments(art, []);
}
/* Injeta as notícias-semente (ids 7+) no feed do painel inicial */

