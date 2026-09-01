/* modulo Rede Social */
/* ---------- Módulo Notícias ---------- */
const SULTS_LOGO = '<svg viewBox="0 0 76.6 76.6" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M59.4 28.2 28.2 59.4c-.4.4-1.2.4-1.6 0L17.2 50c-.4-.4-.4-1.2 0-1.6l31.2-31.2c.4-.4 1.2-.4 1.6 0l9.3 9.3c.4.4.4 1.1 0 1.7z"/><path fill="currentColor" d="M32.6.2 5.5 27.4c-3 3-3 7.9 0 10.9l5 5c.2.2.6.2.9 0L53.6 1.1C54 .7 53.8 0 53.2 0H33.1c-.2 0-.3.1-.5.2z"/><path fill="currentColor" d="M65.2 33.3 22.9 75.5c-.4.4-.1 1.1.4 1.1h20.1c.2 0 .3-.1.4-.2l27.2-27.2c3-3 3-7.9 0-10.9l-5-5c-.3-.3-.7-.3-.9 0z"/></svg>';
let NEWS = [
  { id:1, title:'Bem-vindos, Boatlux e Constance!', author:'SULTS', av:null, sub:'Comunicados oficiais', date:'2 h', reactions:128, comments:24, status:'pub',
    text:'',
    banner:{ title:'Bem-vindos, Boatlux e Constance!', sub:'+1.647 marcas · +92.000 unidades · +600.000 usuários' } },
  { id:2, title:'NPS 87 no Customer Success', author:'Livia Fernandes', av:'av-lf', ini:'LF', sub:'Head de Customer Success', date:'5 h', reactions:96, comments:18, status:'pub',
    text:'Fechamos o trimestre com NPS 87 no Customer Success! 🚀 Esse número é resultado de um time que trata cada rede como se fosse a única, todos os dias.\n\nCliente feliz é a nossa melhor métrica, e o melhor ainda está por vir. 💙' },
  { id:3, title:'SULTS Open entra em beta', author:'Willer Matayoshi', av:'av-wm', ini:'WM', sub:'CTO e Co-fundador', date:'ontem', reactions:154, comments:31, status:'pub',
    text:'Bora de SULTS Open! 🔓 API completa e MCP server para conectar a plataforma a agentes de IA e a qualquer sistema da sua stack. Quem quiser participar dos primeiros testes de integração, chama o time de Produto.' },
  { id:4, title:'Aniversário do Breno!', author:'Gente & Cultura', av:'av-gc', ini:'GC', sub:'Recursos Humanos · SULTS', date:'1 d', reactions:210, comments:45, status:'pub',
    text:'',
    banner:{ variant:'bday', emoji:'🎂', title:'Feliz aniversário, Breno!', sub:'Deixe sua mensagem no mural' } },
  { id:5, title:'Resultados do 2º trimestre', author:'Matheus Scussel', av:'av-ms', ini:'MS', sub:'COO', date:'3 d', reactions:0, comments:0, status:'draft',
    text:'Prévia dos resultados do 2º trimestre. Ainda em revisão.' },
  { id:6, author:'SULTS', av:null, sub:'Histórias de sucesso', date:'22/07/2026', reactions:342, comments:57, status:'pub', pinned:true,
    title:'Como a Casa do Construtor centraliza a gestão de mais de 780 lojas em 4 países com a SULTS',
    image:'uploads/news/casa-construtor.jpg',
    article:{
      kicker:'Histórias de sucesso · Case',
      lead:'Informações estratégicas centralizadas, economia em licenciamento de plataformas e tomada de decisão orientada por dados para toda a rede de franqueados.',
      readTime:'6 min de leitura',
      author:{ name:'Adriano Bicalho', role:'Vice-presidente Corporativo · Casa do Construtor', ini:'AB' },
      stats:[['780+','Lojas em operação'],['4 países','Brasil, Paraguai, Uruguai e Argentina'],['400 mil+','Contratos por mês'],['5.000+','Colaboradores diretos']]
    } },
  { id:7, author:'Ana Souza', av:'av-as', ini:'AS', autorNome:'Ana Souza', autorAv:'av-as', sub:'Eventos', reach:'rede', date:'22/07/2026', datetime:'22/07/26 18:20', reactions:214, comments:39, status:'pub', image:'uploads/reels/abf-expo-dia4.jpg',
    text:'Encerramos a ABF Franchising Expo 2026 com o estande lotado nos quatro dias! 🚀 Obrigado a cada franqueado, parceiro e visitante que passou por lá. Levamos muito aprendizado e novas conexões para toda a rede. Até a próxima! 💙' },
  { id:8, author:'SULTS', av:null, sub:'Produto', reach:'rede', date:'21/07/2026', datetime:'21/07/26 10:05', reactions:167, comments:28, status:'pub', image:'uploads/reels/compras-b2b.jpg',
    text:'Chegou o novo Compras B2B! 🛒 Catálogo digital, cotação automática e aprovação em poucos cliques, tudo integrado ao seu fluxo. Menos planilha, mais controle. Já disponível para as unidades participantes do piloto.' },
  { id:9, author:'SULTS', av:null, sub:'Histórias de sucesso', reach:'rede', date:'20/07/2026', datetime:'20/07/26 09:30', reactions:189, comments:22, status:'pub', pinned:false,
    title:'Mormaii: como a rede unificou a comunicação de mais de 200 lojas',
    image:'uploads/reels/mormaii-historia.jpg',
    article:{ kicker:'Histórias de sucesso · Case', lead:'A Mormaii passou a centralizar comunicados, checklists e treinamentos em um só lugar, ganhando agilidade na operação de ponta a ponta.', readTime:'5 min de leitura', author:{name:'Enrico Ferrari', role:'Diretor de Expansão · Mormaii', ini:'EF'}, stats:[['200+','Lojas'],['1 canal','Comunicação unificada'],['-35%','Tempo de resposta'],['98%','Adesão às rotinas']] } },
  { id:10, author:'Livia Fernandes', av:'av-lf', ini:'LF', autorNome:'Livia Fernandes', autorAv:'av-lf', sub:'Gente & Cultura', reach:'matriz', date:'19/07/2026', datetime:'19/07/26 14:12', reactions:96, comments:15, status:'pub',
    text:'Nosso time de Customer Success cresceu! 🎉 Damos as boas-vindas a 4 novas pessoas que vão cuidar ainda mais de perto de cada rede. Preparem o café e o abraço de sempre. ☕💙' },
  { id:11, author:'SULTS', av:null, sub:'Histórias de sucesso', reach:'rede', date:'18/07/2026', datetime:'18/07/26 11:00', reactions:143, comments:19, status:'pub',
    title:'FarMelhor: treinamento padronizado em toda a rede de drogarias',
    image:'uploads/reels/farmelhor-historia.jpg',
    article:{ kicker:'Histórias de sucesso · Case', lead:'Com a Universidade Corporativa da SULTS, a FarMelhor padronizou o treinamento de novos colaboradores e reduziu o tempo de ramp-up nas lojas.', readTime:'4 min de leitura', author:{name:'Luciano Sampaio', role:'Gerente de Operações · FarMelhor', ini:'LS'}, stats:[['+300','Colaboradores treinados'],['-40%','Tempo de onboarding'],['100%','Lojas cobertas'],['4.8','Nota média das trilhas']] } },
  { id:12, author:'Willer Matayoshi', av:'av-wm', ini:'WM', autorNome:'Willer Matayoshi', autorAv:'av-wm', sub:'Produto', reach:'rede', date:'17/07/2026', datetime:'17/07/26 16:45', reactions:201, comments:47, status:'pub',
    text:'SULTS Open agora com webhooks! 🔌 Dá para disparar eventos da plataforma direto para os seus sistemas em tempo real. A documentação já está no ar e o time de Produto está de plantão para ajudar nas primeiras integrações.' },
  { id:13, author:'Ana Souza', av:'av-as', ini:'AS', autorNome:'Ana Souza', autorAv:'av-as', sub:'Eventos', reach:'rede', date:'16/07/2026', datetime:'16/07/26 08:50', reactions:158, comments:26, status:'pub', image:'uploads/reels/abf-summit-dia2.jpg',
    text:'Dia 2 do ABF Franchising Summit Brasil 2026! 🎤 Painéis sobre expansão, tecnologia e o futuro do franchising. Quem está por aqui, passa no nosso espaço para trocar ideia sobre gestão de redes. 👊' },
  { id:14, author:'SULTS', av:null, sub:'Comunicados oficiais', reach:'rede', date:'15/07/2026', datetime:'15/07/26 09:00', reactions:88, comments:12, status:'pub',
    text:'Manutenção programada 🛠️ No próximo domingo, das 2h às 5h, a plataforma pode ficar instável por conta de melhorias na infraestrutura. Nenhuma ação é necessária da sua parte. Obrigado pela compreensão!' },
  { id:15, author:'SULTS', av:null, sub:'Histórias de sucesso', reach:'rede', date:'14/07/2026', datetime:'14/07/26 10:40', reactions:176, comments:33, status:'pub',
    title:'Bella Capri: gestão de qualidade em cada pizzaria da rede',
    image:'uploads/reels/bellacapri-historia.jpg',
    article:{ kicker:'Histórias de sucesso · Case', lead:'A Bella Capri usa checklists e planos de ação da SULTS para manter o mesmo padrão de qualidade em todas as unidades.', readTime:'4 min de leitura', author:{name:'Equipe Bella Capri', role:'Franqueadora', ini:'BC'}, stats:[['120+','Pizzarias'],['+22%','Notas de auditoria'],['1 padrão','Em toda a rede'],['Semanal','Acompanhamento']] } },
  { id:16, author:'Livia Fernandes', av:'av-lf', ini:'LF', autorNome:'Livia Fernandes', autorAv:'av-lf', sub:'Gente & Cultura', reach:'rede', date:'13/07/2026', datetime:'13/07/26 12:15', reactions:132, comments:20, status:'pub',
    text:'Sextou com reconhecimento! 🏆 Parabéns ao time de Implantação, que bateu a meta de onboarding de novas unidades neste mês. Vocês são demais. Bora comemorar! 🎉' },
  { id:17, author:'SULTS', av:null, sub:'Produto', reach:'rede', date:'12/07/2026', datetime:'12/07/26 15:30', reactions:154, comments:31, status:'pub',
    text:'Novidade no Checklist ✅ Agora dá para anexar fotos com marcação e gerar plano de ação automático a partir de itens reprovados. Atualização já disponível para todos. Conta pra gente o que achou!' },
  { id:18, author:'SULTS', av:null, sub:'Histórias de sucesso', reach:'rede', date:'11/07/2026', datetime:'11/07/26 09:20', reactions:121, comments:17, status:'pub',
    title:'Lugano: chocolates com operação sincronizada em todo o Brasil',
    image:'uploads/reels/lugano-historia.jpg',
    article:{ kicker:'Histórias de sucesso · Case', lead:'A Lugano conectou comunicação, projetos e indicadores em uma só plataforma e passou a decidir com base em dados.', readTime:'5 min de leitura', author:{name:'Anibal Martins', role:'Diretor · Lugano', ini:'AM'}, stats:[['150+','Lojas'],['1 visão','Rede inteira'],['+18%','Eficiência operacional'],['Diário','Acompanhamento de KPIs']] } },
  { id:19, author:'Matheus Scussel', av:'av-ms', ini:'MS', autorNome:'Matheus Scussel', autorAv:'av-ms', sub:'Expansão', reach:'matriz', date:'10/07/2026', datetime:'10/07/26 17:05', reactions:110, comments:14, status:'pub',
    text:'Fechamos julho com 3 novas marcas na base! 🤝 Seguimos crescendo com consistência e cuidado. Obrigado ao time comercial e de implantação por mais um mês histórico. Rumo ao próximo! 📈' },
  { id:20, author:'SULTS', av:null, sub:'Eventos', reach:'rede', date:'09/07/2026', datetime:'09/07/26 13:00', reactions:99, comments:21, status:'pub', image:'uploads/reels/abf-expo-dia2.jpg',
    text:'Dia 2 da ABF Expo 2026 foi intenso! 🔥 Muitas conversas sobre padronização, tecnologia e crescimento sustentável de redes. Amanhã tem mais, vem com a gente!' },
  { id:21, author:'Ellen Rocha', av:'av-gc', ini:'ER', autorNome:'Ellen Rocha', autorAv:'av-gc', sub:'Gente & Cultura', reach:'rede', date:'08/07/2026', datetime:'08/07/26 10:30', reactions:145, comments:29, status:'pub',
    text:'Setembro chega com a Convenção SULTS 2026! 🎊 Programe-se: três dias de conteúdo, networking e muita energia. Em breve abrimos as inscrições. Bora juntos? 💙' },
  { id:22, author:'SULTS', av:null, sub:'Comunicados oficiais', reach:'unidades', date:'07/07/2026', datetime:'07/07/26 08:00', reactions:73, comments:9, status:'pub',
    text:'Atenção, gestores de unidade 📌 O novo modelo de relatório mensal já está disponível no módulo de Relatórios. Ele traz visão consolidada de chamados, checklists e tarefas. Deem uma olhada!' },
  { id:23, author:'Willer Matayoshi', av:'av-wm', ini:'WM', autorNome:'Willer Matayoshi', autorAv:'av-wm', sub:'Produto', reach:'rede', date:'06/07/2026', datetime:'06/07/26 11:45', reactions:163, comments:36, status:'pub',
    text:'MCP Server da SULTS em beta! 🤖 Agora agentes de IA podem consultar e agir na plataforma com segurança. É a base para automações inéditas na gestão da sua rede. Quem quer testar?' },
  { id:24, author:'Ana Souza', av:'av-as', ini:'AS', autorNome:'Ana Souza', autorAv:'av-as', sub:'Eventos', reach:'rede', date:'05/07/2026', datetime:'05/07/26 19:10', reactions:118, comments:16, status:'pub', image:'uploads/reels/abf-expo-dia1.jpg',
    text:'Começou a ABF Franchising Expo 2026! 🎉 Primeiro dia e o estande da SULTS já está recebendo muita gente boa. Passa por aqui para conhecer as novidades da plataforma!' },
  { id:25, author:'SULTS', av:null, sub:'Gente & Cultura', reach:'rede', date:'04/07/2026', datetime:'04/07/26 16:00', reactions:0, comments:0, status:'draft',
    text:'[Rascunho] Vagas internas abertas em Produto e CS. Revisar descrições antes de publicar.' },
  { id:26, author:'SULTS', av:null, sub:'Histórias de sucesso', reach:'rede', date:'03/07/2026', datetime:'03/07/26 09:00', reactions:0, comments:0, status:'draft',
    title:'PitStop: controle efetivo da operação em cada unidade',
    image:'uploads/reels/pitstop-historia.jpg',
    article:{ kicker:'Histórias de sucesso · Case', lead:'Rascunho do case PitStop. Validar números com o cliente antes de publicar.', readTime:'4 min de leitura', author:{name:'Equipe PitStop', role:'Franqueadora', ini:'PS'}, stats:[['80+','Unidades'],['1 painel','Operação'],[',','A confirmar'],[',','A confirmar']] } }
];
const newsView = $('#newsView'), nmodSide = $('#nmodSide');

let newsEditId = null, newsQuery = '', nvBanner = false, nvFrom = 'feed';
let composeImg = null, nvEvent = false, composePoll = false, nvType = null;
(function(){
  const un=["Shopping Plazza Rio","Bella Capri Centro","Lugano Gramado","Boatlux Marina Sul","Pit Stop Barra","FarMelhor Savassi","Mormaii Balneário","Casa do Construtor Norte"];
  NEWS.filter(n=>n.status==='pub' && n.author && n.author!=='SULTS').forEach((n,i)=>{ if(i%3!==2) n.unit=un[i%un.length]; });
})();
const newsLiked = new Set();
(function(){ NEWS.filter(n=>n.status==='pub').slice(0,3).forEach(n=>newsLiked.add(n.id)); })();
function postSub(n){
  const base = n.sub || 'Comunicados oficiais';
  const un = n.unit || 'SULTS';
  return base.indexOf('·')>-1 ? base : base+' · '+un;
}
const BRAND_LOGO = '<svg viewBox="0 0 76.6 76.6" xmlns="http://www.w3.org/2000/svg"><path fill="#00acac" d="M59.4 28.2 28.2 59.4c-.4.4-1.2.4-1.6 0L17.2 50c-.4-.4-.4-1.2 0-1.6l31.2-31.2c.4-.4 1.2-.4 1.6 0l9.3 9.3c.4.4.4 1.1 0 1.7z"/><path fill="#00acac" d="M32.6.2 5.5 27.4c-3 3-3 7.9 0 10.9l5 5c.2.2.6.2.9 0L53.6 1.1C54 .7 53.8 0 53.2 0H33.1c-.2 0-.3.1-.5.2z"/><path fill="#00acac" d="M65.2 33.3 22.9 75.5c-.4.4-.1 1.1.4 1.1h20.1c.2 0 .3-.1.4-.2l27.2-27.2c3-3 3-7.9 0-10.9l-5-5c-.3-.3-.7-.3-.9 0z"/></svg>';
const WHITE_LOGO = '<svg class="logo-mark" viewBox="0 0 76.6 76.6" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M59.4 28.2 28.2 59.4c-.4.4-1.2.4-1.6 0L17.2 50c-.4-.4-.4-1.2 0-1.6l31.2-31.2c.4-.4 1.2-.4 1.6 0l9.3 9.3c.4.4.4 1.1 0 1.7z"/><path fill="#fff" d="M32.6.2 5.5 27.4c-3 3-3 7.9 0 10.9l5 5c.2.2.6.2.9 0L53.6 1.1C54 .7 53.8 0 53.2 0H33.1c-.2 0-.3.1-.5.2z"/><path fill="#fff" d="M65.2 33.3 22.9 75.5c-.4.4-.1 1.1.4 1.1h20.1c.2 0 .3-.1.4-.2l27.2-27.2c3-3 3-7.9 0-10.9l-5-5c-.3-.3-.7-.3-.9 0z"/></svg>';
NEWS.filter(n=>n.status==='pub' && n.id>=7).forEach(n=>addHomePost(n, true));
function newsAvatarHTML(n){ return n.av ? '<span class="avatar '+n.av+'"></span>' : '<span class="nv-logo">'+SULTS_LOGO+'</span>'; }
function nmodSetActive(id){ $$('.nmod-tab').forEach(t=>t.classList.remove('active')); const cfg=(id==='nmodCats'||id==='nmodPerm'||id==='nmodParams'); const apr=(id==='nmodMod'||id==='nmodPubAppr'); const inter=(id==='nmodInter'); newsView.classList.toggle('intermode',inter); if(inter&&$('#nmtInter'))$('#nmtInter').classList.add('active'); const aprhome=(id==='nmodApr'); newsView.classList.toggle('aprhome',aprhome); if(aprhome){ if($('#nmtApr'))$('#nmtApr').classList.add('active'); } newsView.classList.toggle('cfg',cfg); newsView.classList.toggle('apr',apr); newsView.classList.toggle('catmode', id==='nmodCats'); if(cfg){ if(id==='nmodCats'){ if($('#nmtCfg'))$('#nmtCfg').classList.add('active'); } else { if($('#nmtPerm'))$('#nmtPerm').classList.add('active'); } } else if(apr){ if($('#nmtApr'))$('#nmtApr').classList.add('active'); } else { if(id==='nmodPub'&&$('#nmtPub'))$('#nmtPub').classList.add('active'); if(id==='nmodNew'&&$('#nmtFeed'))$('#nmtFeed').classList.add('active'); } $$('.nv-cfgitem').forEach(t=>t.classList.remove('active')); if(id==='nmodCats'&&$('#nvcfgCats'))$('#nvcfgCats').classList.add('active'); if(id==='nmodPerm'&&$('#nvcfgPerm'))$('#nvcfgPerm').classList.add('active'); if(id==='nmodParams'&&$('#nvcfgParams'))$('#nvcfgParams').classList.add('active'); if(id==='nmodPerm'&&$('#nvcfgPermPub'))$('#nvcfgPermPub').classList.add('active'); if(id==='nmodParams'&&$('#nvcfgPermCom'))$('#nvcfgPermCom').classList.add('active'); if(id==='nmodMod'&&$('#nvaprCom'))$('#nvaprCom').classList.add('active'); if(id==='nmodPubAppr'&&$('#nvaprPub'))$('#nvaprPub').classList.add('active'); if(id==='nmodStories'&&$('#nmtStories'))$('#nmtStories').classList.add('active'); if(id==='nmodShortsB'&&$('#nmtStories'))$('#nmtStories').classList.add('active'); if(id==='nmodMgShorts'&&$('#nmtMgShorts'))$('#nmtMgShorts').classList.add('active'); }
function nvSetEnv(env){
  const social = env==='social';
  newsView.classList.toggle('env-social', social);
  const gm=$('#nmodGrpManage'), gs=$('#nmodGrpSocial');
  if(gm) gm.classList.toggle('on', !social);
  if(gs) gs.classList.toggle('on', social);
  const nm=$('#nmodEnvName'); if(nm) nm.textContent = social ? 'Social' : 'Gerenciar';
  const sw=$('#nmodEnvSwitch');
  if(sw) sw.innerHTML = social
    ? '<i class="fa-solid fa-gear"></i><span class="lbl">Gerenciar</span>'
    : '<i class="fa-solid fa-users-rectangle"></i><span class="lbl">Acessar Social</span>';
}
$('#nmodEnvSwitch') && $('#nmodEnvSwitch').addEventListener('click', ()=>{
  if(newsView.classList.contains('env-social')) newsShow('list');
  else newsShow('feed');
});
$('#nmtStories') && $('#nmtStories').addEventListener('click', ()=>newsShow('shorts'));
$('#nmtShortsB') && $('#nmtShortsB').addEventListener('click', ()=>newsShow('shortsb'));
$('#sbNew') && $('#sbNew').addEventListener('click', ()=>{ if(typeof crOpen==='function') crOpen(); });
[3,9].forEach(function(i){ const r=REELS_DATA[i]; if(r&&POSTS[r.p]){ POSTS[r.p].name='Rodrigo Caetano'; POSTS[r.p].av='av-rc'; } });
[1,5].forEach(function(i){ if(REELS_DATA[i]) REELS_DATA[i].proc=true; });
[7,12].forEach(function(i){ if(REELS_DATA[i]) REELS_DATA[i].removido=true; });
let sbFmt='', sbAuthorPage=1, sbTab='todos', sbQuery='', sbAct='', sbAuthor='', sbAuthorQuery='', sbShown=12;
function sbTabs(){
  const t=[['todos','Todos os shorts'],['sucesso','Histórias de sucesso']];
  CATEGORIES.filter(c=>c.active!==false).forEach(c=>t.push(['cat:'+c.id, c.name]));
  return t;
}
function sbList(){
  return REELS_DATA.filter(function(r){
    const p=POSTS[r.p]||{};
    if(r.removido) return false;
    if(sbFmt && rFormat(r)!==sbFmt) return false;
    if(sbAct==='naovistos' && isSeen(r.p)) return false;
    if(sbTab==='sucesso' && !/hist[óo]ria/i.test((p.title||p.alt||''))) return false;
    if(sbTab.indexOf('cat:')===0 && r.cat!==sbTab.slice(4)) return false;
    if(sbAct==='curti' && !isLiked(r.p)) return false;
    if(sbAct==='meus' && p.name!=='Rodrigo Caetano') return false;
    if(sbAuthor && p.name!==sbAuthor) return false;
    if(sbQuery){
      const q=rxNorm(sbQuery);
      const hay=rxNorm((p.title||'')+' '+(p.alt||'')+' '+(p.caption||'')+' '+(p.name||''));
      if(!hay.includes(q)) return false;
    }
    return true;
  });
}
function sbActiveCount(){
  let n=0;
  if(sbTab!=='todos') n++;
  if(sbFmt) n++;
  if(sbAct) n++;
  if(sbAuthor) n++;
  if(sbQuery) n++;
  return n;
}
function sbClearAll(){
  sbTab='todos'; sbAct=''; sbFmt=''; sbAuthor=''; sbQuery=''; sbAuthorQuery=''; sbAuthorPage=1; sbShown=12;
  const s=$('#sbSearch'); if(s) s.value='';
  const a=$('#sbAuthorSearch'); if(a) a.value='';
  renderShortsB();
}
$('#sbClear') && $('#sbClear').addEventListener('click', sbClearAll);
function renderShortsB(){
  const sn=$('#sbSearchNote');
  if(sn){ const on=!!(typeof sbQuery!=='undefined'&&sbQuery); sn.hidden=!on; if(on) sn.querySelector('b').textContent=sbQuery; }
  $$('.sb-fmt').forEach(b=>b.classList.toggle('active', (b.dataset.sbfmt||'')===sbFmt));
  const n=sbActiveCount(), cw=$('#sbClearWrap');
  if(cw){ cw.hidden = n===0; const lb=$('#sbClearLbl'); if(lb) lb.textContent='Limpar filtros'+(n?' ('+n+')':''); }
  const pills=$('#sbPills');
  if(pills){ pills.innerHTML = sbTabs().map(t=>'<button class="sb-pill'+(sbTab===t[0]?' on':'')+'" data-sbtab="'+t[0]+'">'+t[1]+'</button>').join(''); requestAnimationFrame(sbArrows); }
  const sbl=$('#sbAuthorBtnLbl'); if(sbl) sbl.textContent = sbAuthor || 'Todas as pessoas';
  const ab=$('#sbAuthors');
  if(ab){
    const q=rxNorm(sbAuthorQuery);
    const names=[...new Set(REELS_DATA.map(r=>(POSTS[r.p]||{}).name).filter(Boolean))].filter(n=>!q||rxNorm(n).includes(q));
    const per=6, pages=Math.max(1,Math.ceil(names.length/per));
    if(sbAuthorPage>pages) sbAuthorPage=pages;
    const pg=names.slice((sbAuthorPage-1)*per, sbAuthorPage*per);
    let ah = pg.map(function(n){
      const p=REELS_DATA.map(r=>POSTS[r.p]).find(x=>x&&x.name===n)||{};
      return '<button class="nvf-pickrow nvf-aitem'+(sbAuthor===n?' on':'')+'" data-sbauthor="'+n+'"><span class="avatar '+(p.av||'av-brand')+'"></span><span>'+n+'</span><span class="nvf-pickradio"></span></button>';
    }).join('') || '<div class="nvf-fnone">Nenhum autor</div>';
    if(names.length>per){
      let nums=''; for(let pn=1;pn<=pages;pn++) nums+='<button class="nvf-apgn'+(pn===sbAuthorPage?' on':'')+'" data-sbapgto="'+pn+'">'+pn+'</button>';
      ah+='<div class="nvf-apager">'+
        '<button class="nvf-apg" data-sbapgto="1"'+(sbAuthorPage===1?' disabled':'')+'><i class="fa-solid fa-angles-left"></i></button>'+
        '<button class="nvf-apg" data-sbapg="-1"'+(sbAuthorPage===1?' disabled':'')+'><i class="fa-solid fa-chevron-left"></i></button>'+
        nums+
        '<button class="nvf-apg" data-sbapg="1"'+(sbAuthorPage===pages?' disabled':'')+'><i class="fa-solid fa-chevron-right"></i></button>'+
        '<button class="nvf-apg" data-sbapgto="'+pages+'"'+(sbAuthorPage===pages?' disabled':'')+'><i class="fa-solid fa-angles-right"></i></button></div>';
    }
    ab.innerHTML = ah;
  }
  const el=$('#sbGrid'); if(!el) return;
  const all=sbList();
  const list=all.slice(0, sbShown);
  const em=$('#sbEmpty'); if(em) em.hidden = all.length>0;
  el.innerHTML = list.map(function(r){
    const post=POSTS[r.p]||{}, cat=(typeof catById==='function')?catById(r.cat):null;
    return '<article class="sb-card" data-sb="'+REELS_DATA.indexOf(r)+'">'+
      '<div class="sb-media">'+
        ((post.img||post.poster)?'<img src="'+(post.img||post.poster)+'" alt="" loading="eager" decoding="async">'
          :(post.video?'<video src="'+post.video+'" muted loop playsinline preload="metadata"></video>':''))+
        (cat?'<span class="sb-cat"><i class="fa-solid '+cat.icon+'"></i> '+cat.name+'</span>':'')+
        (isSeen(r.p)?'':'<span class="sb-newdot"></span>')+
        '<span class="sb-likes"><i class="fa-solid fa-heart"></i> '+likeDisplay(r)+'</span>'+
        '<h3 class="sb-title">'+(post.title||post.alt||'Short')+'</h3>'+
      '</div>'+
      '<div class="sb-author"><span class="avatar '+(post.av||'av-brand')+'"></span><b>'+(post.name||'SULTS')+'</b></div>'+
    '</article>';
  }).join('');
  if(typeof ajustaFundoEm==='function') ajustaFundoEm(el, '.sb-media img,.sb-media video');
  if(typeof sbArrows==='function') sbArrows();
  const mw=$('#sbMore');
  if(mw) mw.hidden = all.length<=sbShown;
  if(typeof sbObserve==='function') sbObserve();
}
let sbIO=null;
function sbObserve(){
  const mw=document.getElementById('sbMore'); if(!mw) return;
  if(!sbIO){
    const root=document.querySelector('.sb-view');
    sbIO=new IntersectionObserver(function(en){
      if(en.some(x=>x.isIntersecting) && !mw.hidden){ sbShown+=12; renderShortsB(); }
    }, {root: root||null, rootMargin:'400px 0px'});
  }
  sbIO.disconnect();
  if(!mw.hidden) sbIO.observe(mw);
}
$('#sbPills') && $('#sbPills').addEventListener('click', function(e){ const b=e.target.closest('[data-sbtab]'); if(!b) return; sbTab=b.dataset.sbtab; sbShown=12; renderShortsB(); });
$('#sbPillLeft') && $('#sbPillLeft').addEventListener('click', ()=>{ $('#sbPills').scrollLeft -= 320; });
$('#sbPillRight') && $('#sbPillRight').addEventListener('click', ()=>{ $('#sbPills').scrollLeft += 320; });
function sbArrows(){
  const p=$('#sbPills'), l=$('#sbPillLeft'), r=$('#sbPillRight');
  if(!p||!l||!r) return;
  l.hidden = p.scrollLeft < 8;
  r.hidden = p.scrollLeft > p.scrollWidth - p.clientWidth - 8;
}
$('#sbPills') && $('#sbPills').addEventListener('scroll', sbArrows);
window.addEventListener('resize', sbArrows);
$('#sbSearch') && $('#sbSearch').addEventListener('input', function(e){ sbQuery=e.target.value.trim(); sbShown=12; renderShortsB(); });
$('#sbAuthorBtn') && $('#sbAuthorBtn').addEventListener('click', function(){ sbAuthorQuery=''; const s=$('#sbAuthorSearch'); if(s) s.value=''; sbAuthorPage=1; renderShortsB(); $('#sbAuthorPickModal').classList.add('open'); });
$('#sbAuthorPickClose') && $('#sbAuthorPickClose').addEventListener('click', ()=>$('#sbAuthorPickModal').classList.remove('open'));
$('#sbAuthorPickModal') && $('#sbAuthorPickModal').addEventListener('click', function(e){ if(e.target===$('#sbAuthorPickModal')) $('#sbAuthorPickModal').classList.remove('open'); });
$('#sbAuthorSearch') && $('#sbAuthorSearch').addEventListener('input', function(e){ sbAuthorQuery=e.target.value.trim(); sbAuthorPage=1; renderShortsB(); });
$('#sbAuthors') && $('#sbAuthors').addEventListener('click', function(e){ const to=e.target.closest('[data-sbapgto]'); if(to){ if(!to.disabled){ sbAuthorPage=+to.dataset.sbapgto; renderShortsB(); } e.stopPropagation(); return; } const pg=e.target.closest('[data-sbapg]'); if(pg){ if(!pg.disabled){ sbAuthorPage=Math.max(1,sbAuthorPage+ +pg.dataset.sbapg); renderShortsB(); } return; } const b=e.target.closest('[data-sbauthor]'); if(!b) return; sbAuthor = sbAuthor===b.dataset.sbauthor ? '' : b.dataset.sbauthor; sbShown=12; renderShortsB(); });
document.addEventListener('click', function(e){
  const sf=e.target.closest('[data-sbfmt]');
  if(sf){ sbFmt=sf.dataset.sbfmt||''; sbShown=12; renderShortsB(); return; }
  const sa=e.target.closest('[data-sbauthor]');
  if(sa){ sbAuthor = (sbAuthor===sa.dataset.sbauthor?'':sa.dataset.sbauthor); sbShown=12; $('#sbAuthorPickModal').classList.remove('open'); renderShortsB(); return; }
});
document.addEventListener('click', function(e){ const b=e.target.closest('[data-sbact]'); if(!b) return; sbAct=b.dataset.sbact; sbShown=12; $$('.sb-act').forEach(x=>x.classList.toggle('active', x===b)); renderShortsB(); });
$('#sbGrid') && $('#sbGrid').addEventListener('click', function(e){
  const c=e.target.closest('[data-sb]'); if(!c) return;
  openPlayer(sbList(), sbList().findIndex(x=>x===REELS_DATA[+c.dataset.sb]));
});
function nvOpenCfgStories(){
  try{ closeCats(); closePerm(); }catch(e){}
  permView.classList.remove('in-cfg');
  reelsView.classList.remove('in-social');
  reelsView.classList.add('in-cfg','in-module');
  curView='lista';
  const g=$('#rxVGrade'), l=$('#rxVLista');
  if(l) l.classList.add('active'); if(g) g.classList.remove('active');
  openStories();
  renderGrid();
}
function nvOpenSocialStories(){
  try{ closeCats(); closePerm(); }catch(e){}
  reelsView.classList.remove('in-cfg','in-module');
  reelsView.classList.add('in-social');
  curView='grade';
  const g=$('#rxVGrade'), l=$('#rxVLista');
  if(g) g.classList.add('active'); if(l) l.classList.remove('active');
  openStories();
  renderGrid();
}
$('#nmtPub') && $('#nmtPub').addEventListener('click', ()=>newsShow('list'));
$('#nmtFeed') && $('#nmtFeed').addEventListener('click', ()=>newsShow('feed'));
$('#nmtPerm') && $('#nmtPerm').addEventListener('click', ()=>{ newsShow('perm'); const s1=$('#permStep1'), ac=$('#permApprGrid'); if(s1)s1.style.display='grid'; permStoriesSecShow(true); if(ac)ac.style.display='none'; $$('#nvCfgSide .nv-cfgitem').forEach(x=>x.classList.remove('active')); const b=$('#nvcfgPubWho'); if(b) b.classList.add('active'); });
$('#nmtCfg') && $('#nmtCfg').addEventListener('click', ()=>{ cfgGo('who'); });
const TEAM_ADMINS = [1,56,978,992,12];
let TEAM = [1,56,978];
let teamQuery='', teamAddQuery='';
function teamPhone(id){ const d=String(9000+(id*37)%9999).padStart(4,'0'); return '(34) 9'+String(8000+(id*13)%1999).slice(0,4)+'-'+d; }
function teamMail(name){ const p=name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').split(' '); return p[0]+'.'+p[p.length-1]+'@sults.com.br'; }
function teamRender(){
  const el=document.getElementById('teamList'); if(!el) return;
  const cnt=document.getElementById('teamCount'); if(cnt) cnt.textContent = TEAM.length ? TEAM.length+' pessoa(s)' : '';
  const list=TEAM.map(id=>PEOPLE.find(p=>p.id===id)).filter(Boolean)
    .filter(p=>!teamQuery || p.name.toLowerCase().includes(teamQuery.toLowerCase()) || (p.role||'').toLowerCase().includes(teamQuery.toLowerCase()));
  if(!list.length){ el.innerHTML='<div class="perm-empty">Nenhum administrador ainda. Use "Novo administrador".</div>'; return; }
  const rows=list.map(p=>'<tr>'+
    '<td class="perm-id">#'+p.id+'</td>'+
    '<td><div class="perm-person"><span class="avatar '+p.av+'"></span><div><b>'+p.name+'</b><span>'+p.role+'</span></div></div></td>'+
    '<td style="white-space:nowrap">'+teamPhone(p.id)+'</td>'+
    '<td style="white-space:nowrap">'+teamMail(p.name)+'</td>'+
    '<td style="text-align:right"><button class="perm-remove" data-teamrm="'+p.id+'"><i class="fa-solid fa-xmark"></i> Remover</button></td></tr>').join('');
  el.innerHTML='<table><thead><tr><th style="width:84px">ID</th><th>Administrador</th><th style="width:170px">Celular</th><th style="width:250px">E-mail</th><th style="width:140px;text-align:right">Ações</th></tr></thead><tbody>'+rows+'</tbody></table>';
}
function teamAddRender(){
  const el=document.getElementById('teamAddList'); if(!el) return;
  const list=TEAM_ADMINS.map(id=>PEOPLE.find(p=>p.id===id)).filter(p=>p && !TEAM.includes(p.id))
    .filter(p=>!teamAddQuery || p.name.toLowerCase().includes(teamAddQuery.toLowerCase()));
  el.innerHTML = list.length ? list.map(p=>'<div class="perm-pickrow" data-teamadd="'+p.id+'"><span class="avatar '+p.av+'"></span><div><b>'+p.name+'</b><span>'+p.role+'</span></div><span class="perm-add"><i class="fa-solid fa-plus"></i></span></div>').join('') : '<div class="perm-empty">Nenhum administrador disponível.</div>';
}
document.addEventListener('click', e=>{
  if(e.target.closest('#teamAdd')){ teamAddQuery=''; const s=document.getElementById('teamAddSearch'); if(s) s.value=''; teamAddRender(); document.getElementById('teamAddModal').classList.add('open'); return; }
  if(e.target.closest('#teamAddClose') || e.target===document.getElementById('teamAddModal')){ document.getElementById('teamAddModal').classList.remove('open'); return; }
  const add=e.target.closest('[data-teamadd]');
  if(add){ TEAM.push(+add.dataset.teamadd); teamAddRender(); teamRender(); fgToast('Administrador adicionado'); return; }
  const rm=e.target.closest('[data-teamrm]');
  if(rm){ TEAM=TEAM.filter(x=>x!==+rm.dataset.teamrm); teamRender(); fgToast('Administrador removido'); return; }
});
document.addEventListener('input', e=>{
  if(e.target.id==='teamSearch'){ teamQuery=e.target.value; teamRender(); }
  if(e.target.id==='teamAddSearch'){ teamAddQuery=e.target.value; teamAddRender(); }
});
function permTeamSecShow(on){ const s=document.getElementById('permTeamSec'); if(s) s.style.display = on ? '' : 'none'; if(on) teamRender(); }
function cfgSetActive(id){ ['cfgNavWho','cfgNavApr','cfgNavTeam','nvcfgCats2'].forEach(x=>{ const b=document.getElementById(x); if(b) b.classList.toggle('active', x===id); }); }
const PERM_TUT_ART = { who:'uploads/tutorial/post.svg', apr:'uploads/tutorial/approve.svg', team:'uploads/tutorial/admin.svg' };
const PERM_TUT = {
  who: ['PERMISSÃO DE PUBLICAÇÃO', 'Defina quem pode publicar na rede social',
    'Escolha se a matriz e as unidades podem publicar e, em cada caso, se todos os colaboradores ou apenas pessoas selecionadas. Quem não tiver permissão continua vendo o conteúdo, mas não cria publicações.'],
  apr: ['FLUXO DE APROVAÇÃO', 'Controle o que vai ao ar antes de publicar',
    'Ative a aprovação para publicações e comentários. Com o fluxo ativo, cada conteúdo criado fica pendente até um administrador aprovar, e o autor é avisado do resultado.'],
  team: ['ADMINISTRADORES DA REDE', 'Defina quem administra a rede social',
    'Administradores têm acesso total ao módulo: publicam sem passar por aprovação, aprovam e reprovam o que vem das unidades, inativam publicações, veem em detalhe quem curtiu e comentou cada post e gerenciam as configurações do módulo. Apenas as pessoas desta lista recebem os itens pendentes.']
};
function permTutFill(which){
  const t = PERM_TUT[which] || PERM_TUT.who;
  const k=document.getElementById('permTutKicker'), ti=document.getElementById('permTutTitle'), tx=document.getElementById('permTutText');
  if(k) k.textContent=t[0]; if(ti) ti.textContent=t[1]; if(tx) tx.textContent=t[2];
  const art=document.getElementById('permTutArt');
  if(art) art.src = PERM_TUT_ART[which] || PERM_TUT_ART.who;
}
function permTutBtn(on, which){
  const b=document.getElementById('permTutorial'); if(b) b.hidden=!on;
  const p=document.getElementById('permTut');
  if(which) permTutFill(which);
  if(p && !on) p.hidden=true;
}
document.addEventListener('click', function(e){
  if(!e.target.closest('#permTutorial')) return;
  const p=document.getElementById('permTut'), b=document.getElementById('permTutorial');
  if(!p||!b) return;
  const show = p.hidden;
  p.hidden = !show;
  b.querySelector('.pt-lbl').textContent = show ? 'Ocultar tutorial' : 'Exibir tutorial';
  b.querySelector('.pt-carat').className = 'fa-solid fa-chevron-'+(show?'up':'down')+' pt-carat';
});
function permHead(which){
  const ic=document.getElementById('permHeadIc'), t=document.getElementById('permHeadTtl');
  if(!ic||!t) return;
  permTutBtn(true, which||'who');
  if(which==='team'){ ic.className='fa-solid fa-user-shield'; t.textContent='Administradores'; return; }
  const apr = which==='apr';
  ic.className = apr ? 'fa-solid fa-circle-check' : 'fa-solid fa-user-shield';
  t.textContent = apr ? 'Aprovações' : 'Quem pode postar';
}
function permStoriesSecShow(on){ const s=document.getElementById('permStoriesSec'); if(s) s.style.display = on ? '' : 'none'; if(on && typeof stPermFeet==='function') stPermFeet(); }
function cfgGo(which){
  permHead(which); permStoriesSecShow(which==='who'||!which); permTeamSecShow(which==='team');
  if(which==='cats'){ newsShow('cats'); cfgSetActive('nvcfgCats2'); }
  else if(which==='team'){ newsShow('perm'); const s1=$('#permStep1'), ac=$('#permApprGrid'); if(s1)s1.style.display='none'; if(ac)ac.style.display='none'; cfgSetActive('cfgNavTeam'); }
  else { newsShow('perm'); const s1=$('#permStep1'), ac=$('#permApprGrid'); if(which==='apr'){ if(s1)s1.style.display='none'; permStoriesSecShow(false); if(ac)ac.style.display='grid'; cfgSetActive('cfgNavApr'); } else { if(s1)s1.style.display='grid'; permStoriesSecShow(true); if(ac)ac.style.display='none'; cfgSetActive('cfgNavWho'); } }
  newsView.classList.add('catmode'); newsView.classList.add('cfg'); newsView.classList.remove('apr'); newsView.classList.remove('aprhome'); if($('#nmtCfg'))$('#nmtCfg').classList.add('active');
}
$('#cfgNavWho') && $('#cfgNavWho').addEventListener('click', ()=>cfgGo('who'));
$('#cfgNavApr') && $('#cfgNavApr').addEventListener('click', ()=>cfgGo('apr'));
$('#cfgNavTeam') && $('#cfgNavTeam').addEventListener('click', ()=>cfgGo('team'));
$('#nvcfgCats2') && $('#nvcfgCats2').addEventListener('click', ()=>cfgGo('cats'));
$('#nmtMgShorts') && $('#nmtMgShorts').addEventListener('click', ()=>newsShow('cfgstories'));
$('#nmtApr') && $('#nmtApr').addEventListener('click', ()=>{ newsView.classList.add('open'); pubFilter='pend'; newsShow('pubappr'); });
$('#nvaprCom') && $('#nvaprCom').addEventListener('click', ()=>newsShow('mod'));
$('#nvaprPub') && $('#nvaprPub').addEventListener('click', ()=>newsShow('pubappr'));
$('#nvcfgCats') && $('#nvcfgCats').addEventListener('click', ()=>newsShow('cats'));
$('#nvcfgPerm') && $('#nvcfgPerm').addEventListener('click', ()=>permShow('who'));
$('#nvcfgPermPub') && $('#nvcfgPermPub').addEventListener('click', ()=>permShow('who'));
function permShow(which){ permStoriesSecShow(which!=='apr'); newsShow('perm'); const s1=$('#permStep1'), ac=$('#permApprGrid'); if(s1&&ac){ if(which==='apr'){ s1.style.display='none'; permStoriesSecShow(false); ac.style.display=''; } else { s1.style.display='grid'; permStoriesSecShow(true); ac.style.display='none'; } } $$('#nvCfgSide .nv-cfgitem').forEach(x=>x.classList.remove('active')); const b=which==='apr'?$('#nvcfgPubApr'):$('#nvcfgPubWho'); if(b) b.classList.add('active'); }
$('#nvcfgPubWho') && $('#nvcfgPubWho').addEventListener('click', ()=>permShow('who'));
$('#nvcfgPubApr') && $('#nvcfgPubApr').addEventListener('click', ()=>permShow('apr'));
$('#nvcfgPermCom') && $('#nvcfgPermCom').addEventListener('click', ()=>newsShow('params'));
$('#nvcfgParams') && $('#nvcfgParams').addEventListener('click', ()=>newsShow('params'));
$('#nvcfgMod') && $('#nvcfgMod').addEventListener('click', ()=>newsShow('mod'));
let MOD_QUEUE = [], modSeq = 0, MOD_HIST = [], modFilter = "pend";
let PUB_APPR = [], pubApprSeq = 0, PUB_HIST = [], pubFilter = "pend";
function aprBadges(){
  const c=MOD_QUEUE.length, p=PUB_APPR.length;
  const cA=(typeof MOD_HIST!=='undefined')?MOD_HIST.filter(e=>e.status==='aprovado').length:0;
  const cR=(typeof MOD_HIST!=='undefined')?MOD_HIST.filter(e=>e.status==='rejeitado').length:0;
  const pA=(typeof PUB_HIST!=='undefined')?PUB_HIST.filter(n=>n.apprStatus==='aprovado').length:0;
  const pR=(typeof PUB_HIST!=='undefined')?PUB_HIST.filter(n=>n.apprStatus==='rejeitado').length:0;
  if(typeof reelApprData==='function') reelApprData();
  const rq=(typeof REEL_APPR!=='undefined'&&REEL_APPR)?REEL_APPR.length:0;
  [['#aprComBadge',c],['#aprPubBadge',p],['#aprReelBadge',rq],['#aprTabBadge',c+p]].forEach(([sel,n])=>{ const b=$(sel); if(b){ b.hidden=!n; b.textContent=n; } });
}
function aprDT(d){ d=d||new Date(); const p=n=>('0'+n).slice(-2); return p(d.getDate())+'/'+p(d.getMonth()+1)+'/'+String(d.getFullYear()).slice(-2)+' '+p(d.getHours())+':'+p(d.getMinutes()); }
function modBadge(){ aprBadges(); }
function modAdd(entry){ entry.mid=++modSeq; MOD_QUEUE.push(entry); modBadge(); if($('#nvModScreen').classList.contains('active')) renderModQueue(); }
function modRemove(mid,status){ const e=MOD_QUEUE.find(x=>x.mid===mid); if(e&&status){ e.status=status; e.decidedBy='Rodrigo Caetano'; e.decidedAt=aprDT(); MOD_HIST.unshift(e); } MOD_QUEUE=MOD_QUEUE.filter(e=>e.mid!==mid); modBadge(); if($('#nvModScreen').classList.contains('active')) renderModQueue(); }
let modSortIdx=null, modSortDir=1;
function modCellVal(e,i){ var m=[ (e.author||'').toLowerCase(), (e.text||'').toLowerCase(), (e.post||'').toLowerCase(), (e.dt||e.time||''), (e.decidedBy||'').toLowerCase(), (e.decidedAt||'') ]; return m[i]!==undefined?m[i]:''; }
function renderModQueue(){
  const el=$('#modQueue');
  const nPend=MOD_QUEUE.length, nApr=MOD_HIST.filter(e=>e.status==='aprovado').length, nRej=MOD_HIST.filter(e=>e.status==='rejeitado').length;
  if($('#modNPend')){ $('#modNPend').textContent=nPend; $('#modNApr').textContent=nApr; $('#modNRej').textContent=nRej; }
  $$('#modSeg button').forEach(b=>b.classList.toggle('on', b.dataset.f===modFilter));
  let list = modFilter==='pend' ? MOD_QUEUE : MOD_HIST.filter(e=>e.status===modFilter);
  const tot=list.length; $('#modCount').textContent = tot? tot+(tot===1?' item':' itens'):'';
  if(!list.length){ el.innerHTML='<div class="mod-empty"><i class="fa-regular fa-circle-check"></i><b>Nenhum comentário '+(modFilter==='pend'?'pendente':(modFilter==='aprovado'?'aprovado':'rejeitado'))+'</b><span>Tudo em dia por aqui.</span></div>'; return; }
  const unitOf = e => e.unit || (typeof STORES!=='undefined' ? STORES[(e.mid||1)%STORES.length].name : '');
  const thumbM = e => { const n=(typeof findNewsByTitle==='function'? (findNewsByTitle(e.post)||{}) : {}); return n.image? '<span class="cmappr-thumb" style="width:44px;height:36px;background-image:url('+n.image+')"></span>' : '<span class="cmappr-thumb ph" style="width:44px;height:36px"><i class="fa-solid fa-'+(n.article?'newspaper':'align-left')+'"></i></span>'; };
  const base = e => '<td><div class="apr-person"><span class="avatar '+(e.av||'av-rc')+'"></span><div><b>'+e.author+'</b><span class="apr-unit">'+unitOf(e)+'</span></div></div></td><td class="apr-cmt">'+e.text.replace(/</g,'&lt;')+'</td><td><div class="pubttl">'+thumbM(e)+'<div><b'+(e.newsId?' class="apr-post" data-nav="'+e.newsId+'"':'')+'>'+e.post+'</b></div></div></td><td class="apr-when">'+(e.dt||e.time||'agora')+'</td>';
  if(modSortIdx!=null){ list=list.slice().sort(function(a,b){ var ka=modCellVal(a,modSortIdx), kb=modCellVal(b,modSortIdx); return ka<kb?-modSortDir:ka>kb?modSortDir:0; }); }
  let head, rows;
  if(modFilter==='pend'){
    head='<th>Autor</th><th>Comentário</th><th>Publicação</th><th style="width:120px">Data/Hora</th><th style="width:170px;text-align:right">Ações</th>';
    rows=list.map(e=>'<tr data-mid="'+e.mid+'">'+base(e)+'<td class="rl-acts"><button class="apr-view" data-view="'+(e.newsId||'')+'"><i class="fa-solid fa-eye"></i> Visualizar</button></td></tr>').join('');
  } else if(modFilter==='aprovado'){
    head='<th>Autor</th><th>Comentário</th><th>Publicação</th><th style="width:120px">Data/Hora</th><th style="width:160px">Aprovado por</th><th style="width:130px">Aprovado em</th>';
    rows=list.map(e=>'<tr>'+base(e)+'<td class="apr-when"><div class="apr-person"><span class="avatar av-rc"></span>'+(e.decidedBy||',')+'</div></td><td class="apr-when">'+(e.decidedAt||',')+'</td></tr>').join('');
  } else {
    head='<th>Autor</th><th>Comentário</th><th style="width:120px">Data/Hora</th><th style="width:150px">Rejeitado por</th><th style="width:120px">Rejeitado em</th><th>Justificativa</th>';
    rows=list.map(e=>'<tr data-mid="'+e.mid+'"><td><div class="apr-person"><span class="avatar '+(e.av||'av-rc')+'"></span><div><b>'+e.author+'</b><span class="apr-unit">'+unitOf(e)+'</span></div></div></td><td class="apr-cmt">'+e.text.replace(/</g,'&lt;')+'</td><td class="apr-when">'+(e.dt||e.time||',')+'</td><td class="apr-when"><div class="apr-person"><span class="avatar av-rc"></span>'+(e.decidedBy||',')+'</div></td><td class="apr-when">'+(e.decidedAt||',')+'</td><td class="apr-cmt">'+(e.motivo?e.motivo.replace(/</g,'&lt;'):',')+'</td></tr>').join('');
  }
  el.innerHTML = '<div class="rlist"><table class="modtbl"><thead><tr>'+head+'</tr></thead><tbody>'+rows+'</tbody></table></div>';
  var ths=el.querySelectorAll('thead th');
  ths.forEach(function(th,i){ if(!th.textContent.trim()) return; th.classList.add('sortable'); if(modSortIdx===i) th.classList.add('active-sort'); th.innerHTML=th.innerHTML+' <span class="sort-ic"><i class="fa-solid fa-'+(modSortIdx===i?(modSortDir===1?'arrow-up-short-wide':'arrow-down-wide-short'):'sort')+'"></i></span>'; th.addEventListener('click', function(){ if(modSortIdx===i) modSortDir=-modSortDir; else { modSortIdx=i; modSortDir=1; } renderModQueue(); }); });
}
$('#modQueue') && $('#modQueue').addEventListener('click', e=>{ const vw=e.target.closest('[data-view]'); if(vw){ const rr=vw.closest('[data-mid]'); const en=rr?MOD_QUEUE.concat(MOD_HIST).find(x=>x.mid===+rr.dataset.mid):null; if(en){ openCmAppr(en); return; } if(vw.dataset.view) focusPublication(+vw.dataset.view); return; } const rowc=e.target.closest('tbody tr[data-mid]'); if(rowc && !e.target.closest('[data-act]')){ const ent=MOD_QUEUE.concat(MOD_HIST).find(x=>x.mid===+rowc.dataset.mid); if(ent){ openCmAppr(ent); return; } } const nav=e.target.closest('[data-nav]'); if(nav){ focusPublication(+nav.dataset.nav); return; } const b=e.target.closest('[data-act]'); if(!b) return; const mid=+b.closest('[data-mid]').dataset.mid; const entry=MOD_QUEUE.find(x=>x.mid===mid); if(!entry) return; if(b.dataset.act==='ok'){ entry.approve(); modRemove(mid,'aprovado'); } else { askReject(function(motivo){ entry.motivo=motivo; entry.reject(); modRemove(mid,'rejeitado'); fgToast('Comentário recusado'); }); } });
let rejCb=null;
function askReject(cb){ if(window.__skipReject){ cb(''); return; } return askRejectDlg(cb); }
function askRejectDlg(cb){ rejCb=cb; $('#rejText').value=''; $('#rejConfirm').disabled=false; $('#rejModal').classList.add('open'); setTimeout(()=>$('#rejText').focus(),30); }
function rejCloseM(){ $('#rejModal').classList.remove('open'); rejCb=null; }
$('#rejClose') && $('#rejClose').addEventListener('click', rejCloseM);
$('#rejCancel') && $('#rejCancel').addEventListener('click', rejCloseM);
$('#rejModal') && $('#rejModal').addEventListener('click', e=>{ if(e.target===$('#rejModal')) rejCloseM(); });
$('#rejConfirm') && $('#rejConfirm').addEventListener('click', ()=>{ const t=$('#rejText').value.trim(); if(!t){ $('#rejText').focus(); fgToast('Informe o motivo da recusa'); return; } const cb=rejCb; rejCloseM(); if(cb) cb(t); });
function focusPublication(newsId){
  const n=NEWS.find(x=>x.id===newsId); if(!n){ fgToast('Publicação não encontrada'); return; }
  openArticle(n);
  setTimeout(()=>{
    const list=$('#npCmList'); if(!list) return;
    MOD_QUEUE.filter(e=>e.newsId===newsId).forEach(e=>{
      if(list.querySelector('[data-mid="'+e.mid+'"]')) return;
      const it=document.createElement('div'); it.className='nvf-cm-item pending'; it.dataset.mid=e.mid;
      it.innerHTML='<span class="avatar '+(e.av||'av-rc')+'"></span><div><div class="nvf-cm-bub"><b>'+e.author+'</b><span>'+e.text.replace(/</g,'&lt;')+'</span></div><div class="comment-pend"><i class="fa-solid fa-clock"></i> Aguardando aprovação</div><div class="comment-mod"><button class="cmod-ok"><i class="fa-solid fa-check"></i> Aprovar</button><button class="cmod-no"><i class="fa-solid fa-xmark"></i> Recusar</button></div></div>';
      list.insertBefore(it, list.firstChild);
      it.querySelector('.cmod-ok').addEventListener('click',()=>{ it.classList.remove('pending'); const pe=it.querySelector('.comment-pend'); if(pe)pe.remove(); const me=it.querySelector('.comment-mod'); if(me)me.remove(); (n.cmts=n.cmts||[]).push({author:e.author,av:e.av,text:e.text}); modRemove(e.mid); fgToast('Comentário aprovado'); });
      it.querySelector('.cmod-no').addEventListener('click',()=>{ askReject(function(motivo){ e.motivo=motivo; it.remove(); modRemove(e.mid); fgToast('Comentário recusado'); }); });
    });
  }, 90);
}
/* apr-sub click */
$$('#nvAprSide .apr-sub').forEach(b=> b.addEventListener('click', ()=>{
  const scope=b.dataset.scope;
  if(scope==='com') newsShow('mod');
  else if(scope==='reel') newsShow('reelappr');
  else newsShow('pubappr');
  $$('#nvAprSide .apr-sub').forEach(x=>x.classList.toggle('active', x===b));
}));
function aprSideSync(scope){ $$('#nvAprSide .apr-sub').forEach(x=>x.classList.toggle('active', x.dataset.scope===scope)); }
$('#modSeg') && $('#modSeg').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;modFilter=b.dataset.f;renderModQueue();});
$('#reelSeg') && $('#reelSeg').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;reelFilter=b.dataset.f;renderReelAppr();});
$('#pubSeg') && $('#pubSeg').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;pubFilter=b.dataset.f;renderPubAppr();});
function pubApprAdd(n){ n.paid=++pubApprSeq; PUB_APPR.push(n); aprBadges(); if($('#nvPubApprScreen').classList.contains('active')) renderPubAppr(); }
let pubSortIdx=null, pubSortDir=1;
function pubCellVal(n,i){ var m=[ (n.author||'').toLowerCase(), (n.title||'').toLowerCase(), (n.article?'artigo':'post'), (n.date||''), (n.decidedBy||'').toLowerCase(), (n.decidedAt||'') ]; return m[i]!==undefined?m[i]:''; }
let reelFilter='pend', REEL_APPR=null, REEL_HIST=null;
function reelApprData(){
  if(REEL_APPR) return;
  const src=(typeof REELS_DATA!=='undefined'?REELS_DATA:[]);
  const mk=(r,i)=>{ const p=(typeof POSTS!=='undefined'?POSTS[r.p]:{})||{}; return {rid:i, title:p.title||p.alt||'Short', author:p.name||'SULTS', av:p.av||'av-rc', image:p.img||p.poster||'', unit:p.company||p.store||p.label||'SULTS', date:p.time||'agora', cat:r.cat, desc:r.cap||p.caption||''}; };
  const all=src.map(mk);
  REEL_APPR=all.slice(0,4);
  if(REEL_APPR[1]) REEL_APPR[1].proc=true;
  if(REEL_APPR[3]) REEL_APPR[3].procFail=true;
  REEL_HIST=all.slice(4,10).map((x,i)=>Object.assign({}, x, {apprStatus: i%2?'rejeitado':'aprovado', decidedBy:'Rodrigo Caetano', decidedAt:x.date, motivo: i%2?'Conteúdo fora das diretrizes da marca.':''}));
}
function renderReelAppr(){
  reelApprData();
  const el=$('#reelApprQueue'); if(!el) return;
  const procList=REEL_APPR.filter(r=>r.proc||r.procFail), pendList=REEL_APPR.filter(r=>!r.proc&&!r.procFail);
  const nPend=pendList.length, nProc=procList.length, nApr=REEL_HIST.filter(r=>r.apprStatus==='aprovado').length, nRej=REEL_HIST.filter(r=>r.apprStatus==='rejeitado').length;
  if($('#reelNPend')){ $('#reelNPend').textContent=nPend; $('#reelNApr').textContent=nApr; $('#reelNRej').textContent=nRej; }
  if($('#reelNProc')) $('#reelNProc').textContent=nProc;
  $$('#reelSeg button').forEach(b=>b.classList.toggle('on', b.dataset.f===reelFilter));
  const list = reelFilter==='proc' ? procList : (reelFilter==='pend' ? pendList : REEL_HIST.filter(r=>r.apprStatus===reelFilter));
  const tot=list.length; if($('#reelApprCount')) $('#reelApprCount').textContent = tot? tot+(tot===1?' item':' itens'):'';
  if(!list.length){ el.innerHTML='<div class="mod-empty"><i class="fa-regular fa-circle-check"></i><b>Nenhum short '+(reelFilter==='proc'?'em processamento':(reelFilter==='pend'?'pendente':(reelFilter==='aprovado'?'aprovado':'rejeitado')))+'</b><span>Tudo em dia por aqui.</span></div>'; return; }
  const thumb=r=> r.procFail? '<span class="rl-procthumb rl-failthumb" style="width:44px;height:36px"><i class="fa-solid fa-triangle-exclamation"></i></span>'
    : r.proc? '<span class="rl-procthumb" style="width:44px;height:36px"><span class="rl-spin"></span></span>'
    : (r.image? '<span class="cmappr-thumb" style="width:44px;height:36px;background-image:url('+r.image+')"></span>' : '<span class="cmappr-thumb ph" style="width:44px;height:36px"><i class="fa-solid fa-clapperboard"></i></span>');
  const base=r=>'<td><div class="apr-person"><span class="avatar '+r.av+'"></span><div><b>'+r.author+'</b><span class="apr-unit">'+r.unit+'</span></div></div></td>'+
    '<td><div class="pubttl">'+thumb(r)+'<div><b>'+r.title+'</b>'+(r.procFail?'<span class="rl-failpill">Falha no processamento</span>':(r.proc?'<span class="rl-procpill">Em processamento</span>':''))+'</div></div></td>'+
    '<td class="apr-when">'+r.date+'</td>';
  let head, rows;
  if(reelFilter==='proc'){
    head='<th>Autor</th><th>Short</th><th style="width:120px">Data/Hora</th><th style="width:170px;text-align:right">Ações</th>';
    rows=list.map(r=>'<tr data-rid="'+r.rid+'" style="cursor:pointer">'+base(r)+'<td class="rl-acts"><button class="apr-view"><i class="fa-solid fa-eye"></i> Visualizar</button></td></tr>').join('');
  } else if(reelFilter==='pend'){
    head='<th>Autor</th><th>Short</th><th style="width:120px">Data/Hora</th><th style="width:170px;text-align:right">Ações</th>';
    rows=list.map(r=>'<tr data-rid="'+r.rid+'" style="cursor:pointer">'+base(r)+'<td class="rl-acts"><button class="apr-view"><i class="fa-solid fa-eye"></i> Visualizar</button></td></tr>').join('');
  } else if(reelFilter==='aprovado'){
    head='<th>Autor</th><th>Short</th><th style="width:120px">Data/Hora</th><th style="width:160px">Aprovado por</th><th style="width:130px">Aprovado em</th>';
    rows=list.map(r=>'<tr>'+base(r)+'<td class="apr-when"><div class="apr-person"><span class="avatar av-rc"></span>'+r.decidedBy+'</div></td><td class="apr-when">'+r.decidedAt+'</td></tr>').join('');
  } else {
    head='<th>Autor</th><th>Short</th><th style="width:120px">Data/Hora</th><th style="width:150px">Rejeitado por</th><th>Justificativa</th>';
    rows=list.map(r=>'<tr>'+base(r)+'<td class="apr-when"><div class="apr-person"><span class="avatar av-rc"></span>'+r.decidedBy+'</div></td><td class="apr-cmt">'+(r.motivo||',')+'</td></tr>').join('');
  }
  el.innerHTML='<div class="rlist"><table class="modtbl"><thead><tr>'+head+'</tr></thead><tbody>'+rows+'</tbody></table></div>';
  el.querySelectorAll('tr[data-rid]').forEach(function(tr){
    tr.addEventListener('click', function(){
      const r=REEL_APPR.find(x=>String(x.rid)===tr.dataset.rid); if(!r) return;
      openReelAppr(r);
    });
  });
}
function openReelAppr(r){
  if(typeof openPubAppr!=='function') return;
  openPubAppr({ paid:'short-'+r.rid, image:r.image, article:false, title:r.title, sub:'Short', av:r.av, author:r.author, unit:r.unit, text:r.desc||'', date:r.date, __story:true, rid:r.rid, proc:r.proc, procFail:r.procFail });
  const m=document.getElementById('pubApprModal'); if(!m) return;
  const h2=m.querySelector('.fg-head h2'); if(h2) h2.textContent='Aprovar short';
  const ty=document.getElementById('pubApprType'); if(ty) ty.textContent='Short';
  const acts=document.getElementById('pubApprActs');
  const body=m.querySelector('.fg-body') || (function(){ const c=document.getElementById('pubApprCard'); return c && c.parentElement; })() || m.querySelector('.fg-modal > div:not(.fg-head)');
  const old=m.querySelector('#reelFailNote'); if(old) old.remove();
  if(r.procFail){
    if(acts){ acts.style.display='flex'; const ok=document.getElementById('pubApprOk'); if(ok) ok.style.display='none'; }
    if(body) body.insertAdjacentHTML('afterbegin',
      '<div class="reel-failnote" id="reelFailNote">'+
        '<i class="fa-solid fa-triangle-exclamation"></i>'+
        '<div><b>Falha no processamento</b><span>Atenção: houve uma falha na formatação do arquivo enviado. Este short não pode ser aprovado. É necessário que o autor reenvie o arquivo para aprovação.</span></div>'+
      '</div>');
  } else if(r.proc){
    if(acts) acts.style.display='none';
    if(body) body.insertAdjacentHTML('afterbegin',
      '<div class="reel-failnote reel-procnote" id="reelFailNote">'+
        '<span class="rl-spin"></span>'+
        '<div><b>Em processamento</b><span>A aprovação fica disponível quando o processamento terminar.</span></div>'+
      '</div>');
  } else if(acts){ acts.style.display='flex'; const ok=document.getElementById('pubApprOk'); if(ok) ok.style.display=''; }
}
function renderPubAppr(){
  const el=$('#pubApprQueue');
  const procP=PUB_APPR.filter(n=>n.proc||n.procFail), pendP=PUB_APPR.filter(n=>!n.proc&&!n.procFail);
  const nPend=pendP.length, nApr=PUB_HIST.filter(n=>n.apprStatus==='aprovado').length, nRej=PUB_HIST.filter(n=>n.apprStatus==='rejeitado').length;
  if($('#pubNPend')){ $('#pubNPend').textContent=nPend; $('#pubNApr').textContent=nApr; $('#pubNRej').textContent=nRej; }
  if($('#pubNProc')) $('#pubNProc').textContent=procP.length;
  $$('#pubSeg button').forEach(b=>b.classList.toggle('on', b.dataset.f===pubFilter));
  let list = pubFilter==='proc' ? procP : (pubFilter==='pend' ? pendP : PUB_HIST.filter(n=>n.apprStatus===pubFilter));
  const tot=list.length; $('#pubApprCount').textContent = tot? tot+(tot===1?' item':' itens'):'';
  if(!list.length){ el.innerHTML='<div class="mod-empty"><i class="fa-regular fa-circle-check"></i><b>Nenhuma publicação '+(pubFilter==='pend'?'pendente':(pubFilter==='aprovado'?'aprovada':'rejeitada'))+'</b><span>Tudo em dia por aqui.</span></div>'; return; }
  const av=n=>n.av?'<span class="avatar '+n.av+'">'+(n.ini||'')+'</span>':'<span class="nv-logo">'+SULTS_LOGO+'</span>';
  const unitOfP=n=>n.unit||((typeof STORES!=='undefined')?STORES[(n.paid||1)%STORES.length].name:'');
  const thumbP=n=> n.procFail? '<span class="rl-procthumb rl-failthumb" style="width:44px;height:36px"><i class="fa-solid fa-triangle-exclamation"></i></span>'
    : n.proc? '<span class="rl-procthumb" style="width:44px;height:36px"><span class="rl-spin"></span></span>'
    : (n.image? '<span class="cmappr-thumb" style="width:44px;height:36px;background-image:url('+n.image+')"></span>' : '<span class="cmappr-thumb ph" style="width:44px;height:36px"><i class="fa-solid fa-'+(n.article?'newspaper':'align-left')+'"></i></span>');
  const base=n=>'<td><div class="apr-person">'+av(n)+'<div><b>'+(n.author||'SULTS')+'</b><span class="apr-unit">'+unitOfP(n)+'</span></div></div></td><td><div class="pubttl">'+thumbP(n)+'<div><b>'+(n.title||'(sem título)')+'</b>'+(n.procFail?'<span class="rl-failpill">Falha no processamento</span>':(n.proc?'<span class="rl-procpill">Em processamento</span>':''))+(n.text?'<span>'+n.text.replace(/<[^>]+>/g,'').replace(/</g,'&lt;').slice(0,80)+'</span>':'')+'</div></div></td><td><span class="apr-type">'+(n.article?'Artigo':'Post')+'</span></td><td class="apr-when">'+(n.date||'agora')+'</td>';
  if(pubSortIdx!=null){ list=list.slice().sort(function(a,b){ var ka=pubCellVal(a,pubSortIdx), kb=pubCellVal(b,pubSortIdx); return ka<kb?-pubSortDir:ka>kb?pubSortDir:0; }); }
  let head, rows;
  if(pubFilter==='proc'||pubFilter==='pend'){
    head='<th>Autor</th><th>Título</th><th style="width:80px">Tipo</th><th style="width:100px">Data/Hora</th><th style="width:170px;text-align:right">Ações</th>';
    rows=list.map(n=>'<tr data-paid="'+n.paid+'" style="cursor:pointer">'+base(n)+'<td class="rl-acts"><button class="apr-view"><i class="fa-solid fa-eye"></i> Visualizar</button></td></tr>').join('');
  } else if(pubFilter==='aprovado'){
    head='<th>Autor</th><th>Título</th><th style="width:80px">Tipo</th><th style="width:100px">Data/Hora</th><th style="width:160px">Aprovado por</th><th style="width:130px">Aprovado em</th>';
    rows=list.map(n=>'<tr data-paid="'+n.paid+'">'+base(n)+'<td class="apr-when"><div class="apr-person"><span class="avatar av-rc"></span>'+(n.decidedBy||',')+'</div></td><td class="apr-when">'+(n.decidedAt||',')+'</td></tr>').join('');
  } else {
    head='<th>Autor</th><th>Título</th><th style="width:80px">Tipo</th><th style="width:150px">Rejeitado por</th><th style="width:120px">Rejeitado em</th><th>Justificativa</th>';
    rows=list.map(n=>'<tr data-paid="'+n.paid+'"><td><div class="apr-person">'+av(n)+'<b>'+(n.author||'SULTS')+'</b></div></td><td class="apr-cmt"><b>'+(n.title||'(sem título)')+'</b></td><td><span class="apr-type">'+(n.article?'Artigo':'Post')+'</span></td><td class="apr-when"><div class="apr-person"><span class="avatar av-rc"></span>'+(n.decidedBy||',')+'</div></td><td class="apr-when">'+(n.decidedAt||',')+'</td><td class="apr-cmt">'+(n.motivo?n.motivo.replace(/</g,'&lt;'):',')+'</td></tr>').join('');
  }
  el.innerHTML = '<div class="rlist"><table class="modtbl"><thead><tr>'+head+'</tr></thead><tbody>'+rows+'</tbody></table></div>';
  el.querySelectorAll('thead th').forEach(function(th,i){ if(!th.textContent.trim()) return; th.classList.add('sortable'); if(pubSortIdx===i) th.classList.add('active-sort'); th.innerHTML=th.innerHTML+' <span class="sort-ic"><i class="fa-solid fa-'+(pubSortIdx===i?(pubSortDir===1?'arrow-up-short-wide':'arrow-down-wide-short'):'sort')+'"></i></span>'; th.addEventListener('click', function(){ if(pubSortIdx===i) pubSortDir=-pubSortDir; else { pubSortIdx=i; pubSortDir=1; } renderPubAppr(); }); });
}
$('#pubApprQueue') && $('#pubApprQueue').addEventListener('click', e=>{ const _r=e.target.closest('[data-paid]'); if(_r && !e.target.closest('[data-act]')){ const _src=(pubFilter==='pend'||pubFilter==='proc')?PUB_APPR:PUB_HIST; const _n=_src.find(x=>x.paid===+_r.dataset.paid); if(_n){ if(_n.proc||_n.procFail){ openPubAppr(_n); } else { reviewPub(_n); } return; } } const b=e.target.closest('[data-act]'); const row=e.target.closest('[data-paid]'); if(!b){ if(row){ const src=((pubFilter==='pend'||pubFilter==='proc')?PUB_APPR:PUB_HIST).find(x=>x.paid===+row.dataset.paid); if(src){ if(src.proc||src.procFail) openPubAppr(src); else reviewPub(src); } } return; } const paid=+b.closest('[data-paid]').dataset.paid; const n=PUB_APPR.find(x=>x.paid===paid); if(!n) return; PUB_APPR=PUB_APPR.filter(x=>x.paid!==paid); if(b.dataset.act==='ok'){ n.apprStatus='aprovado'; n.decidedBy='Rodrigo Caetano'; n.decidedAt=aprDT(); PUB_HIST.unshift(n); n.status='pub'; NEWS.unshift(n); addHomePost(n,true); if(typeof renderNewsList==='function') renderNewsList(); fgToast('Publicação aprovada'); } else { askReject(function(motivo){ n.motivo=motivo; n.apprStatus='rejeitado'; n.decidedBy='Rodrigo Caetano'; n.decidedAt=aprDT(); PUB_HIST.unshift(n); fgToast('Publicação recusada'); aprBadges(); renderPubAppr(); }); return; } aprBadges(); renderPubAppr(); });
function reviewPub(n){ reviewingPub=n; openArticle(n); const bar=$('#nvArtReview'); if(bar) bar.hidden=false; const ed=$('#nvArtEdit'); if(ed) ed.hidden=true; }
function reviewDecide(ok){ const n=reviewingPub; if(!n) return; PUB_APPR=PUB_APPR.filter(x=>x.paid!==n.paid); function finish(){ aprBadges(); reviewingPub=null; const bar=$('#nvArtReview'); if(bar) bar.hidden=true; const ed=$('#nvArtEdit'); if(ed) ed.hidden=false; newsShow('pubappr'); } if(ok){ n.apprStatus='aprovado'; n.decidedBy='Rodrigo Caetano'; n.decidedAt=aprDT(); PUB_HIST.unshift(n); n.status='pub'; NEWS.unshift(n); addHomePost(n,true); if(typeof renderNewsList==='function') renderNewsList(); fgToast('Publicação aprovada'); finish(); } else { askReject(function(motivo){ n.motivo=motivo; n.apprStatus='rejeitado'; n.decidedBy='Rodrigo Caetano'; n.decidedAt=aprDT(); PUB_HIST.unshift(n); fgToast('Publicação recusada'); finish(); }); } }
/* Seed: 40 comentários na primeira publicação */
(function seedFirstPostComments(){
  try{
    var first = NEWS.find(function(x){return x.id===1;}) || NEWS[0];
    if(!first) return;
    var people=[['Ana Souza','av-as'],['Pedro Lima','av-pl'],['Livia Fernandes','av-lf'],['Matheus Scussel','av-ms'],['Willer Matayoshi','av-wm'],['Carla Mendes','av-cm'],['João Santos','av-js'],['Beatriz Lopes','av-bo'],['Rafael Nunes','av-rc'],['Gustavo Costa','av-gc'],['Marina Dias','av-lf'],['Thiago Melo','av-pl'],['Fernanda Rocha','av-cm'],['Lucas Prado','av-ms'],['Bruna Alves','av-as']];
    var txt=['Que notícia incrível! Parabéns a todos. 👏','Fico muito feliz em fazer parte dessa rede. 💙','Boas-vindas aos novos parceiros! 🚀','Isso mostra o quanto estamos crescendo.','Sensacional, seguimos juntos!','Orgulho de trabalhar aqui.','Vamos com tudo, time! 🔥','Que marco histórico para a rede.','Parabéns pela conquista, merecido demais.','Ansioso pelos próximos capítulos.','Excelente trabalho de todos os envolvidos.','A união faz a força! 💪','Muito bom ver a rede se expandindo.','Continuem com o ótimo trabalho.','Isso sim é resultado de time. 👏','Bora crescer ainda mais em 2026!','Que orgulho dessa família SULTS.','Show de bola, parabéns!','Notícia que alegra o dia. 😀','Vamos comemorar essa vitória!','Simplesmente espetacular.','Feliz demais com essa novidade.','Rede cada vez mais forte!','Parabéns, resultado de muito esforço.','Top demais, seguimos evoluindo.','Que venham as próximas conquistas!','Muito merecido, time incrível.','Isso é só o começo! 🚀','Sensação de dever cumprido.','Que energia boa essa notícia traz.','Contem comigo para o que precisar!','Vamos manter esse ritmo.','Orgulho em cada detalhe.','Time nota 10, parabéns!','Que crescimento impressionante.','Feliz por testemunhar esse momento.','Rumo ao topo, juntos! 🏆','Parabéns pela dedicação de sempre.','Isso motiva demais a equipe.','Melhor rede para se trabalhar! 💙'];
    var roles=['Comercial','Marketing','Customer Success','Produto','Financeiro','Expansão','RH','Suporte','Operações','Design'];
    var arr=[];
    var unis=["SULTS","Shopping Plazza Rio","Bella Capri Centro","Lugano Gramado","Boatlux Marina Sul","Pit Stop Barra","FarMelhor Savassi","Mormaii Balneário","Casa do Construtor Norte"];
    for(var i=0;i<40;i++){ var p=people[i%people.length]; arr.push({author:p[0],av:p[1],role:roles[i%roles.length]+' · '+unis[i%unis.length],text:txt[i%txt.length],time:(i<8?(i+1)+' h':((i%20)+1)+' d'),likes:(i*3)%18}); }
    first.cmts = arr; first.comments = 0;
    var art = NEWS.find(function(x){return x.article && x.pinned;});
    if(art){
      var aArr=[];
      for(var k=0;k<9;k++){ var pp=people[(k+3)%people.length]; aArr.push({author:pp[0],av:pp[1],role:roles[(k+2)%roles.length]+' · '+unis[(k+1)%unis.length],text:txt[(k*4+5)%txt.length],time:(k<4?(k+2)+' h':(k)+' d'),likes:(k*5)%22}); }
      var pend={author:'Fernanda Rocha',av:'av-cm',role:'Expansão · '+unis[3],text:'Podemos usar esse case na próxima convenção de franqueados?',time:'25 min',likes:0,pend:true};
      if(typeof modAdd==='function'){ modAdd({author:pend.author, av:pend.av, role:pend.role, text:pend.text, post:art.title||'Publicação', when:'25 min'}); pend.mid=modSeq; }
      aArr.unshift(pend);
      art.cmts=aArr; art.comments=0;
    }
  }catch(e){}
})();
/* Seeds de teste: 10 comentários + 7 publicações pendentes */
(function seedApprovals(){
  const cAuthors=[['Ana Souza','av-as'],['Pedro Lima','av-pl'],['Livia Fernandes','av-lf'],['Matheus Scussel','av-ms'],['Willer Matayoshi','av-wm'],['Carla Mendes','av-cm'],['João Santos','av-js'],['Beatriz Lopes','av-bo'],['Rafael Nunes','av-rc'],['Gustavo Costa','av-gc']];
  const cPosts=['Convenção SULTS 2026','Novo cliente: Boatlux','NPS 87 no CS','SULTS Open em beta','ABF Expo 2026','História Bibi','Aniversário do Breno','Trends News','Franquias em alta','Bella Capri'];
  const cTexts=['Parabéns pelo trabalho, ficou excelente! 👏','Vamos com tudo, time! 🚀','Que orgulho fazer parte disso.','Alguém sabe se vai ter transmissão ao vivo?','Show de bola, muito bom mesmo.','Congratulações a todos os envolvidos! 💙','Isso vai ajudar demais na operação.','Top demais, ansioso pela próxima edição.','Sensacional, parabéns pela conquista!','Muito bom, vamos compartilhar com a equipe.'];
  for(let k=0;k<10;k++){ const nid=[1,2,3,6,4,1,2,3,6,4][k]; const nn=NEWS.find(x=>x.id===nid)||{}; modAdd({author:cAuthors[k][0],av:cAuthors[k][1],text:cTexts[k],post:(nn.title||cPosts[k]),newsId:nid,time:(k+1)+' h',dt:aprDT(new Date(Date.now()-(k+1)*3600000)),approve:()=>{},reject:()=>{}}); }
  const pubs=[
    {title:'Resultados do 1º semestre superam a meta em 18%',author:'Matheus Scussel',av:'av-ms',ini:'MS',date:'há 20 min',text:'Fechamos o semestre com crescimento acima do esperado em toda a rede.',sub:'Expansão'},
    {title:'Nova unidade inaugurada em Florianópolis',author:'Lucas Prado',av:'av-pl',ini:'LP',date:'há 40 min',text:'Mais uma loja da rede abre as portas no litoral catarinense.',sub:'Expansão'},
    {title:'Treinamento de atendimento 2.0 disponível',author:'Carla Mendes',av:'av-cm',ini:'CM',date:'há 1 h',text:'Nova trilha na Universidade Corporativa com certificado.',sub:'Universidade'},
    {title:'Campanha de inverno começa na próxima semana',author:'Ana Souza',av:'av-as',ini:'AS',date:'há 2 h',text:'Materiais de PDV já disponíveis no Disco Virtual.',sub:'Produto'},
    {title:'Bella Capri: a história por trás do sucesso',author:'Ellen Rocha',av:'av-gc',ini:'ER',date:'há 3 h',text:'Um mergulho na trajetória de uma das maiores redes de pizzarias.',sub:'Histórias de sucesso',article:true},
    {title:'Atualização da plataforma v10.5',author:'Willer Matayoshi',av:'av-wm',ini:'WM',date:'há 5 h',text:'Melhorias de performance e novos filtros nos relatórios.',sub:'Produto'},
    {title:'Vagas internas abertas em Produto e CS',author:'Beatriz Lopes',av:'av-bo',ini:'BL',date:'ontem',text:'Candidate-se pelo RH até sexta-feira.',sub:'Gente & Cultura'}
  ];
  pubs.forEach(p=>pubApprAdd(Object.assign({status:'draft',reactions:0,comments:0},p)));
})();
$('#pmSave') && $('#pmSave').addEventListener('click', ()=>fgToast('Parâmetros salvos'));
$('#nmtApps') && $('#nmtApps').addEventListener('click', ()=>{ closeNewsModule(); setNav($('#navHome')); });
$('#nmtInter') && $('#nmtInter').addEventListener('click', ()=>{ newsView.classList.add('open'); interFilter='reacao'; newsShow('inter'); setTimeout(function(){ INTERACTIONS.forEach(function(x){ interSeen.add(x.id); }); var tb=document.getElementById('interTabBadge'); if(tb) tb.hidden=true; var nn=document.getElementById('interNewN'); if(nn) nn.textContent='0'; },1200); });
$('#nmtCmts') && $('#nmtCmts').addEventListener('click', function(){ newsView.classList.add('open'); interFilter='comentario'; interPage=1; interReact=''; var s=$('#interFReact'); if(s) s.value=''; newsShow('inter'); });
function interSetBadge(){ if(!INTERACTIONS.length) buildInteractions(); var tb=document.getElementById('interTabBadge'); var un=INTERACTIONS.filter(function(z){return !interSeen.has(z.id);}).length; if(tb){ tb.textContent=un; tb.hidden=!un; } }
setTimeout(interSetBadge, 200);
let interFilter='reacao', INTERACTIONS=[];
function interDT(mins){ const d=new Date(Date.now()-mins*60000); const p=x=>('0'+x).slice(-2); return p(d.getDate())+'/'+p(d.getMonth()+1)+'/'+d.getFullYear()+' · '+p(d.getHours())+':'+p(d.getMinutes()); }
function interRel(mins){ if(mins<60) return 'há '+mins+' min'; if(mins<1440) return 'há '+Math.floor(mins/60)+' h'; return 'há '+Math.floor(mins/1440)+' d'; }
function buildInteractions(){
  INTERACTIONS=[];
  var reactTxt=['Curtiu','Amou','Achou incrível','Apoiou','Comemorou'];
  var reactIco=REACTIONS.map(function(r){ return [r.key, r.color, r.label]; });
  var cTexts=['Parabéns pelo trabalho! 👏','Que notícia incrível!','Muito bom, seguimos juntos! 🚀','Orgulho da rede. 💙','Sensacional, time!','Vamos com tudo!','Isso motiva demais.','Excelente novidade.','Show de bola! 🔥','Que marco histórico.'];
  var pub = NEWS.filter(function(n){return n.status==='pub';});
  var id=0;
  for(var i=0;i<48;i++){
    var p=PEOPLE[i%PEOPLE.length];
    var st=STORES[i%STORES.length];
    var n=pub[i%pub.length]||{title:'Publicação'};
    var isC=(i%3===0);
    var mins=8+i*17;
    if(isC){ INTERACTIONS.push({id:++id,tipo:'comentario',person:p.name,av:p.av,role:p.role,store:st.name,storeCo:st.company,storeIni:st.ini,storeColor:st.color,post:n.title||'Publicação',content:cTexts[i%cTexts.length],mins:mins}); }
    else { var r=i%reactIco.length; INTERACTIONS.push({id:++id,tipo:'reacao',reacao:reactIco[r],reacaoLabel:reactTxt[r%reactTxt.length],person:p.name,av:p.av,role:p.role,store:st.name,storeCo:st.company,storeIni:st.ini,storeColor:st.color,post:n.title||'Publicação',content:'',mins:mins}); }
  }
}
let interQuery='', interPerson='', interStore='', interPeriod='', interPage=1, interOnlyNewOn=false, interReact='', interPost='', interRole='';
let interSeen=new Set(), interOpen=new Set();
function interFillSelects(){
  if(!INTERACTIONS.length) buildInteractions();
  var ps=$('#interFPerson'), ss=$('#interFStore');
  if(ps && ps.children.length<=0){ var names=[...new Set(INTERACTIONS.map(x=>x.person))]; ps.innerHTML='<option value="">Todas as pessoas</option>'+names.map(n=>'<option>'+n+'</option>').join(''); }
  if(ss && ss.children.length<=0){ var st=[...new Set(INTERACTIONS.map(x=>x.store))]; ss.innerHTML='<option value="">Todas as lojas</option>'+st.map(n=>'<option>'+n+'</option>').join(''); }
  var po=$('#interFPost'); if(po && po.children.length<=0){ var ps=[...new Set(INTERACTIONS.map(x=>x.post))]; po.innerHTML='<option value="">Todas as publicações</option>'+ps.map(n=>'<option>'+n+'</option>').join(''); }
  var ro=$('#interFRole'); if(ro && ro.children.length<=0){ var rs=[...new Set(INTERACTIONS.map(x=>x.role))]; ro.innerHTML='<option value="">Todos os cargos</option>'+rs.map(n=>'<option>'+n+'</option>').join(''); }
  var nn=$('#interNewN'); if(nn) nn.textContent=INTERACTIONS.filter(function(z){return !interSeen.has(z.id);}).length;
  var ob=$('#interOnlyNew'); if(ob) ob.classList.toggle('active', interOnlyNewOn);
}
function interListFor(post){
  var q=(interQuery||'').toLowerCase();
  return INTERACTIONS.filter(function(x){
    if(post && x.post!==post) return false;
    if(interFilter && x.tipo!==interFilter) return false;
    if(interPerson && x.person!==interPerson) return false;
    if(interStore && x.store!==interStore) return false;
    if(interPeriod && x.mins>+interPeriod) return false;
    if(interOnlyNewOn && interSeen.has(x.id)) return false;
    if(interReact && (x.tipo!=='reacao' || x.reacao[2]!==interReact)) return false;
    if(interPost && x.post!==interPost) return false;
    if(interRole && x.role!==interRole) return false;
    if(q && !((x.person+' '+x.store+' '+x.storeCo+' '+x.post+' '+(x.content||'')).toLowerCase().includes(q))) return false;
    return true;
  });
}
(function(){ const s=document.getElementById('interFReact'); if(s) s.innerHTML='<option value="">Todas as reações</option>'+REACTIONS.map(r=>'<option>'+r.label+'</option>').join(''); })();
function renderInteractions(){
  if(!INTERACTIONS.length) buildInteractions();
  interFillSelects();
  var list=interListFor(null);
  var el=$('#interList'); if(!el) return;
  var rw=$('#interFReactWrap'); if(rw) rw.style.display = interFilter==='reacao' ? '' : 'none';
  var fh=$('#interFSecHd'); if(fh) fh.textContent = interFilter==='comentario' ? 'Comentário' : 'Reação';
  var ht=$('#nvInterScreen .rx-title'); if(ht) ht.innerHTML = interFilter==='comentario'
    ? '<i class="fa-solid fa-comment"></i><h2>Comentários</h2>'
    : '<i class="fa-solid fa-heart"></i><h2>Reações</h2>';
  var ta=$('#nmtInter'), tc=$('#nmtCmts');
  if(ta) ta.classList.toggle('active', interFilter==='reacao');
  if(tc) tc.classList.toggle('active', interFilter==='comentario');
  // Agrupar por publicação
  var groups=[]; var byPost={};
  list.forEach(function(x){ if(!byPost[x.post]){ byPost[x.post]={post:x.post,items:[]}; groups.push(byPost[x.post]); } byPost[x.post].items.push(x); });
  groups.sort(function(a,b){
    var na=a.items.filter(function(x){return !interSeen.has(x.id);}).length;
    var nb=b.items.filter(function(x){return !interSeen.has(x.id);}).length;
    if(nb!==na) return nb-na;
    return Math.min.apply(null,a.items.map(function(x){return x.mins;})) - Math.min.apply(null,b.items.map(function(x){return x.mins;}));
  });
  var flat=list.slice().sort(function(a,b){ var ua=!interSeen.has(a.id),ub=!interSeen.has(b.id); if(ua!==ub) return ua?-1:1; return a.mins-b.mins; });
  $('#interCount').textContent='';
  if(!flat.length){ el.innerHTML='<div class="mod-empty"><i class="fa-regular fa-face-smile"></i><b>Nenhuma interação</b><span>Ajuste os filtros.</span></div>'; return; }
  var per=15, pages=Math.max(1,Math.ceil(flat.length/per));
  if(interPage>pages) interPage=pages;
  var page=flat.slice((interPage-1)*per, interPage*per);
  var isView = true, isReact = interFilter==='reacao', isCmt = interFilter==='comentario';
  var whenLbl = isCmt ? 'Comentado em' : 'Reagiu em';
  var rows=page.map(function(x){
    var n=findNewsByTitle(x.post)||{};
    var unseen=!interSeen.has(x.id);
    var thumb = n.image? '<span class="cmappr-thumb" style="width:42px;height:34px;background-image:url('+n.image+')"></span>' : '<span class="cmappr-thumb ph" style="width:42px;height:34px"><i class="fa-solid fa-'+(n.article?'newspaper':'align-left')+'"></i></span>';
    var td = '';
    if(!isView) td += '<td>'+(unseen?'<span class="itbl-seen new"><i class="fa-solid fa-circle"></i> Não visto</span>':'<span class="itbl-seen"><i class="fa-solid fa-check"></i> Visto</span>')+'</td>';
    td += '<td class="itbl-when"><div>'+interDT(x.mins)+'</div><span>'+interRel(x.mins)+'</span></td>';
    if(isReact) td += '<td><span class="il-pill" style="background:'+x.reacao[1]+'18;color:'+x.reacao[1]+'"><i class="fa-solid '+x.reacao[0]+'"></i> '+x.reacao[2]+'</span></td>';
    td += '<td><div class="apr-person"><span class="avatar '+x.av+'"></span><div><b>'+x.person+'</b><span class="itbl-prole">'+x.role+'</span></div></div></td>';
    if(isCmt) td += '<td class="itbl-cmtcell"><div class="itbl-cmt">"'+x.content+'"</div></td>';
    td += '<td><div class="itbl-store"><span class="itbl-logo" style="background:'+x.storeColor+'">'+x.storeIni+'</span><div><b>'+x.store+'</b><span>'+x.storeCo+'</span></div></div></td>';
    td += '<td><div class="pubttl">'+thumb+'<div><b>'+x.post+'</b><span>'+(n.article?'Artigo':'Publicação')+' · '+(n.sub||'SULTS')+'</span></div></div></td>';
    return '<tr class="'+(unseen&&!isView?'is-new':'')+'" data-post="'+x.post.replace(/"/g,'&quot;')+'">'+td+'</tr>';
  }).join('');
  var pager='';
  if(flat.length>per){
    var btns='';
    for(var p=1;p<=pages;p++) btns+='<button class="itbl-pg'+(p===interPage?' on':'')+'" data-ipg="'+p+'">'+p+'</button>';
    pager='<div class="itbl-pager"><span class="itbl-pginfo">'+((interPage-1)*per+1)+'–'+Math.min(interPage*per,flat.length)+' de '+flat.length+'</span><div class="itbl-pgbtns"><button class="itbl-pg nav" data-ipg="prev"'+(interPage===1?' disabled':'')+'><i class="fa-solid fa-chevron-left"></i></button>'+btns+'<button class="itbl-pg nav" data-ipg="next"'+(interPage===pages?' disabled':'')+'><i class="fa-solid fa-chevron-right"></i></button></div></div>';
  }
  var th = '';
  if(!isView) th += '<th style="width:130px;min-width:130px;max-width:130px">Status</th>';
  th += '<th style="width:242px;min-width:242px">'+whenLbl+'</th>';
  if(isReact) th += '<th style="width:150px">Reação</th>';
  th += '<th>Colaborador</th>';
  if(isCmt) th += '<th style="width:312px;min-width:312px">Comentário</th>';
  th += '<th>Unidade</th><th>Publicação</th>';
  el.innerHTML='<div class="rlist"><table class="itbl"><thead><tr>'+th+'</tr></thead><tbody>'+rows+'</tbody></table>'+pager+'</div>';
}
function findNewsByTitle(t){ return NEWS.find(function(n){return (n.title||'')===t;}); }
/* ---- Popup de interações de uma publicação ---- */
let interModalPost=null, interModalNewOnly=false, interModalPage=1;
function openInterModal(post){
  interModalPost=post; interModalNewOnly=false; interModalPage=1;
  var n=findNewsByTitle(post)||{};
  $('#interMTitle').textContent=post;
  $('#interMSub').textContent=(n.article?'Artigo':'Publicação')+' · '+(n.sub||'SULTS');
  renderInterModal();
  $('#interModal').classList.add('open');
}
function renderInterModal(){
  var all=interListFor(interModalPost);
  var newN=all.filter(function(x){return !interSeen.has(x.id);}).length;
  var list=interModalNewOnly?all.filter(function(x){return !interSeen.has(x.id);}):all;
  list.sort(function(a,b){ var ua=!interSeen.has(a.id),ub=!interSeen.has(b.id); if(ua!==ub) return ua?-1:1; return a.mins-b.mins; });
  $$('#interMSeg button').forEach(function(b){ b.classList.toggle('on', (b.dataset.f==='novas')===interModalNewOnly); });
  var nb=$('#interMSeg button[data-f="novas"] .seg-n'); if(nb) nb.textContent=newN;
  var per=8, pages=Math.max(1,Math.ceil(list.length/per));
  if(interModalPage>pages) interModalPage=pages;
  var page=list.slice((interModalPage-1)*per, interModalPage*per);
  var rows=page.map(function(x){
    var unseen=!interSeen.has(x.id);
    var tipo = x.tipo==='comentario'
      ? '<span class="il-pill" style="background:#eef2f5;color:#5b6672"><i class="fa-solid fa-comment"></i> Comentou</span>'
      : '<span class="il-pill" style="background:'+x.reacao[1]+'18;color:'+x.reacao[1]+'"><span class="rxs-ic" data-rx="'+x.reacao[0]+'"></span> '+x.reacao[2]+'</span>';
    var cmt = x.content ? '<button class="itbl-cmtbtn" data-cmt="'+x.id+'"><i class="fa-regular fa-comment-dots"></i> Ver comentário</button>' : '';
    return '<tr class="'+(unseen?'is-new':'')+'">'+
      '<td>'+(unseen?'<span class="itbl-newtag"><span class="itbl-newpulse"></span> NOVA</span>':'')+tipo+cmt+'</td>'+
      '<td><div class="apr-person"><span class="avatar '+x.av+'"></span><div><b>'+x.person+'</b><span class="itbl-prole">'+x.role+'</span></div></div></td>'+
      '<td><div class="itbl-store"><span class="itbl-logo" style="background:'+x.storeColor+'">'+x.storeIni+'</span><div><b>'+x.store+'</b><span>'+x.storeCo+'</span></div></div></td>'+
      '<td class="itbl-when"><div>'+interDT(x.mins)+'</div><span>'+interRel(x.mins)+'</span></td>'+
    '</tr>';
  }).join('');
  var pager='';
  if(list.length>per){
    var btns='';
    for(var p=1;p<=pages;p++) btns+='<button class="itbl-pg'+(p===interModalPage?' on':'')+'" data-pg="'+p+'">'+p+'</button>';
    pager='<div class="itbl-pager"><span class="itbl-pginfo">'+((interModalPage-1)*per+1)+'–'+Math.min(interModalPage*per,list.length)+' de '+list.length+'</span><div class="itbl-pgbtns"><button class="itbl-pg nav" data-pg="prev"'+(interModalPage===1?' disabled':'')+'><i class="fa-solid fa-chevron-left"></i></button>'+btns+'<button class="itbl-pg nav" data-pg="next"'+(interModalPage===pages?' disabled':'')+'><i class="fa-solid fa-chevron-right"></i></button></div></div>';
  }
  $('#interMBody').innerHTML = list.length? '<table class="itbl"><thead><tr><th>Interação</th><th>Colaborador</th><th>Loja</th><th style="width:150px">Data e hora</th></tr></thead><tbody>'+rows+'</tbody></table>'+pager : '<div class="mod-empty"><i class="fa-regular fa-circle-check"></i><b>Nada por aqui</b><span>Nenhuma interação nova.</span></div>';
}
function closeInterModal(){
  $('#interModal').classList.remove('open');
  if(interModalPost){ interListFor(interModalPost).forEach(function(x){ interSeen.add(x.id); }); interSetBadge(); renderInteractions(); }
  interModalPost=null;
}
$('#interSeg') && $('#interSeg').addEventListener('click', function(e){ var b=e.target.closest('button'); if(!b) return; interFilter=b.dataset.f; interPage=1; if(interFilter!=='reacao'){ interReact=''; var s=$('#interFReact'); if(s) s.value=''; } renderInteractions(); });
$('#interList') && $('#interList').addEventListener('click', function(e){ var pg=e.target.closest('[data-ipg]'); if(pg && !pg.disabled){ var v=pg.dataset.ipg; if(v==='prev') interPage--; else if(v==='next') interPage++; else interPage=+v; renderInteractions(); return; } var tr=e.target.closest('tr[data-post]'); if(!tr) return; var n=(typeof findNewsByTitle==='function')?findNewsByTitle(tr.dataset.post):null; if(n){ if(typeof openArticle==='function') openArticle(n); } });
$('#interMClose') && $('#interMClose').addEventListener('click', closeInterModal);
$('#interModal') && $('#interModal').addEventListener('click', function(e){ if(e.target===this) closeInterModal(); });
$('#interMSeg') && $('#interMSeg').addEventListener('click', function(e){ var b=e.target.closest('button'); if(!b) return; interModalNewOnly=(b.dataset.f==='novas'); interModalPage=1; renderInterModal(); });
$('#interMBody') && $('#interMBody').addEventListener('click', function(e){ var pg=e.target.closest('.itbl-pg'); if(pg && !pg.disabled){ var v=pg.dataset.pg; if(v==='prev') interModalPage--; else if(v==='next') interModalPage++; else interModalPage=+v; renderInterModal(); $('#interMBody').scrollTop=0; return; } });
$('#interMBody') && $('#interMBody').addEventListener('click', function(e){ var b=e.target.closest('[data-cmt]'); if(!b) return; var x=INTERACTIONS.find(function(i){return i.id===+b.dataset.cmt;}); if(!x) return; $('#cmtPopAv').className='avatar '+x.av; $('#cmtPopName').textContent=x.person; $('#cmtPopRole').textContent=x.role+' · '+x.store; $('#cmtPopText').textContent=x.content; $('#cmtPopWhen').textContent=interDT(x.mins); $('#cmtPop').classList.add('open'); });
$('#cmtPopClose') && $('#cmtPopClose').addEventListener('click', function(){ $('#cmtPop').classList.remove('open'); });
$('#cmtPop') && $('#cmtPop').addEventListener('click', function(e){ if(e.target===this) this.classList.remove('open'); });
$('#interSearch') && $('#interSearch').addEventListener('input', function(e){ interQuery=e.target.value.trim(); renderInteractions(); });
$('#interFPerson') && $('#interFPerson').addEventListener('change', function(e){ interPerson=e.target.value; renderInteractions(); });
$('#interFStore') && $('#interFStore').addEventListener('change', function(e){ interStore=e.target.value; renderInteractions(); });
$('#interFPeriod') && $('#interFPeriod').addEventListener('change', function(e){ interPeriod=e.target.value; interPage=1; renderInteractions(); });
$('#interOnlyNew') && $('#interOnlyNew').addEventListener('click', function(){ interOnlyNewOn=!interOnlyNewOn; interPage=1; renderInteractions(); });
$('#interFReact') && $('#interFReact').addEventListener('change', function(e){ interReact=e.target.value; interPage=1; renderInteractions(); });
$('#interFPost') && $('#interFPost').addEventListener('change', function(e){ interPost=e.target.value; interPage=1; renderInteractions(); });
$('#interFRole') && $('#interFRole').addEventListener('change', function(e){ interRole=e.target.value; interPage=1; renderInteractions(); });
$('#interFApply') && $('#interFApply').addEventListener('click', function(){ interPage=1; renderInteractions(); fgToast('Filtros aplicados'); });
$('#interFClear') && $('#interFClear').addEventListener('click', function(){ interQuery=''; interPerson=''; interStore=''; interPeriod=''; interOnlyNewOn=false; interReact=''; interPost=''; interRole=''; interPage=1; ['interFReact','interFPost','interFRole'].forEach(function(id){var el=document.getElementById(id); if(el)el.value='';}); var s=$('#interSearch'); if(s)s.value=''; ['interFPerson','interFStore','interFPeriod'].forEach(function(id){ var el=document.getElementById(id); if(el)el.value=''; }); renderInteractions(); });
/* relocate appr screens */
(function(){ const nv=document.getElementById('newsView'); ['nvInterScreen','nvArticleScreen','nvCatsScreen','nvPermScreen','nvParamsScreen','nvAprHomeScreen','nvModScreen','nvPubApprScreen','nvReelApprScreen'].forEach(id=>{ const el=document.getElementById(id); if(nv&&el&&!nv.contains(el)) nv.appendChild(el); }); })();
function newsShow(screen){
  if(typeof nvArtAdvClose==='function') nvArtAdvClose();
  $$('.nv-screen').forEach(s => s.classList.remove('active'));
  newsView.classList.toggle('reelsmode', screen==='shorts');
  if (screen!=='compose' && screen!=='article') nvSetEnv((screen==='shorts'||screen==='shortsb'||screen==='feed'||!screen) ? 'social' : 'gerenciar');
  if (screen==='shorts') screen='shortsb';
  if (screen==='shortsb'){
    newsView.classList.remove('catmode','cfg','apr','aprhome','intermode');
    reelsView.classList.remove('open','in-social','in-cfg','in-module');
    nmodSetActive('nmodShortsB');
    $('#nvShortsBScreen').classList.add('active');
    renderShortsB();
    return;
  }
  if (screen==='cfgstories'){ newsView.classList.remove('catmode','cfg','apr','aprhome'); nmodSetActive('nmodMgShorts'); nvOpenCfgStories(); return; }
  reelsView.classList.remove('open','in-social','in-cfg','in-module');
  if(typeof permView!=='undefined'&&permView){ permView.classList.remove('open','in-cfg'); }
  if (screen==='compose'){ $('#nvComposeScreen').classList.add('active'); nmodSetActive('nmodNew'); }
  else if (screen==='perm'){ $('#nvPermScreen').classList.add('active'); nmodSetActive('nmodPerm'); renderNewsPerm(); }
  else if (screen==='inter'){ $('#nvInterScreen').classList.add('active'); nmodSetActive('nmodInter'); renderInteractions(); }
  else if (screen==='cats'){ $('#nvCatsScreen').classList.add('active'); nmodSetActive('nmodCats'); renderNewsCats(); }
  else if (screen==='params'){ $('#nvParamsScreen').classList.add('active'); nmodSetActive('nmodParams'); }
  else if (screen==='aprhome'){ $('#nvAprHomeScreen').classList.add('active'); nmodSetActive('nmodApr'); renderAprHome(); }
  else if (screen==='mod'){ $('#nvModScreen').classList.add('active'); nmodSetActive('nmodMod'); renderModQueue(); if(typeof aprSideSync==='function') aprSideSync('com'); }
  else if (screen==='pubappr'){ $('#nvPubApprScreen').classList.add('active'); nmodSetActive('nmodPubAppr'); renderPubAppr(); if(typeof aprSideSync==='function') aprSideSync('pub'); }
  else if (screen==='reelappr'){ $('#nvReelApprScreen').classList.add('active'); nmodSetActive('nmodPubAppr'); renderReelAppr(); if(typeof aprSideSync==='function') aprSideSync('reel'); }
  else if (screen==='article'){ $('#nvArticleScreen').classList.add('active'); nmodSetActive('nmodNew'); }
  else if (screen==='list'){ $('#nvListScreen').classList.add('active'); nmodSetActive('nmodPub'); renderNewsList(); }
  else { $('#nvFeedScreen').classList.add('active'); nmodSetActive('nmodNew'); renderNewsFeed(); }
}

function renderAprHome(){ const cP=(MOD_QUEUE||[]).length; const pP=(PUB_APPR||[]).length; const a=$('#aprCardComN'); if(a)a.textContent=cP+' pendente'+(cP===1?'':'s'); const b=$('#aprCardPubN'); if(b)b.textContent=pP+' pendente'+(pP===1?'':'s'); }
$('#aprCardCom') && $('#aprCardCom').addEventListener('click', ()=>{ modFilter='pend'; newsShow('mod'); });
$('#aprCardPub') && $('#aprCardPub').addEventListener('click', ()=>{ pubFilter='pend'; newsShow('pubappr'); });
(function(){ NEWS.filter(n=>n.status==='pub').slice(0,6).forEach(n=>newsSeen.add(n.id)); })();
let nvfAuthorPage=1, nvFeedType='todos', nvFeedCat='', nvFeedAuthor='', nvfAuthorQuery='', nvFeedPeriod='', nvFeedReach='', nvFeedSort='recentes', nvFeedMine='', nvFeedText='';
function nvFeedDaysAgo(dstr){
  if(!dstr) return 0;
  var m=String(dstr).match(/(\d{2})\/(\d{2})\/(\d{2,4})/);
  if(!m) return 0;
  var yr=m[3].length===2?('20'+m[3]):m[3];
  var d=new Date(+yr, +m[2]-1, +m[1]);
  return Math.floor((Date.now()-d.getTime())/86400000);
}
function nvfClearVis(){
  const w=document.getElementById('nvfClearWrap'); if(!w) return;
  let n=0;
  if(nvFeedType&&nvFeedType!=='todos') n++;
  if(nvFeedCat) n++;
  if(nvFeedAuthor) n++;
  if(nvfAuthorQuery) n++;
  if(nvFeedPeriod) n++;
  if(nvFeedReach) n++;
  if(nvFeedMine) n++;
  if(nvFeedSort&&nvFeedSort!=='recentes') n++;
  if(typeof nvFeedQuery!=='undefined'&&nvFeedQuery) n++;
  const lb=document.getElementById('nvfClearLbl'); if(lb) lb.textContent='Limpar filtros ('+n+')';
  w.hidden = n===0;
}
function renderNvfFilters(){
  var pub=NEWS.filter(n=>n.status==='pub');
  var mine=NEWS.filter(n=>n.status==='pub' && ((n.author||'SULTS')==='SULTS' || n.article));
  var setT=function(id,v){ var e=$('#'+id); if(e) e.textContent=v; };
  setT('nvfPostTotal', mine.length);
  setT('nvfPostRede', mine.filter(n=>!n.reach || n.reach==='rede').length);
  setT('nvfPostUni', mine.filter(n=>n.reach==='unidades').length);
  setT('nvfPostArt', mine.filter(n=>n.article).length);
  var set=function(id,v){ var e=$('#'+id); if(e) e.textContent=v; };
  set('nvfnTodos', pub.length); set('nvfnArt', pub.filter(n=>n.article).length); set('nvfnPost', pub.filter(n=>!n.article).length);
  setT('nvfnMidia', pub.filter(n=>n.image||n.video||(n.images&&n.images.length)).length);
  setT('nvfnPoll', pub.filter(n=>n.poll).length);
  $$('.nvf-fitem').forEach(b=>{ if(b.dataset.fq!==undefined && b.dataset.fq!=='') b.classList.toggle('active', b.dataset.fq===nvFeedType); });
  $$('.nvf-reach').forEach(b=>b.classList.toggle('active', (b.dataset.reach||'')===nvFeedReach));
  setT('nvfnCurti', pub.filter(n=>newsLiked.has(n.id)).length);
  setT('nvfnComentei', pub.filter(n=>(n.cmts||[]).some(c=>(c.author||'').indexOf('Rodrigo')===0)).length);
  setT('nvfnMinhas', pub.filter(n=>(n.author||'SULTS')==='SULTS').length);
  setT('nvfnMinhas2', pub.filter(n=>(n.author||'SULTS')==='SULTS').length);
  setT('nvfnCurti2', pub.filter(n=>newsLiked.has(n.id)).length);
  $$('.nvf-mine').forEach(b=>b.classList.toggle('active', (b.dataset.mine||'')===nvFeedMine));
  $$('.nvf-sort').forEach(b=>b.classList.toggle('active', b.dataset.sort===nvFeedSort));
  var catBox=$('#nvfCats');
  if(catBox){
    catBox.innerHTML='<button class="nvf-fitem nvf-cli'+(nvFeedCat===''?' active':'')+'" data-cat=""><i class="fa-solid fa-layer-group"></i> Todas <span class="nvf-fn">'+pub.length+'</span></button>'+NEWS_CATS.map(function(c){
      var n=pub.filter(function(x){return (x.sub||'')===c.name;}).length;
      return '<button class="nvf-fitem nvf-cli'+(nvFeedCat===c.name?' active':'')+'" data-cat="'+c.name+'"><span class="nvf-cico" style="background:'+c.color+'"><i class="fa-solid '+(c.icon||'fa-tag')+'"></i></span> '+c.name+' <span class="nvf-fn">'+n+'</span></button>';
    }).join('');
  }
  nvfClearVis();
  var authBox=$('#nvfAuthors');
  if(authBox){
    var authors=[...new Set(pub.map(n=>n.article?'SULTS':(n.author||'SULTS')))];
    var q=(nvfAuthorQuery||'').toLowerCase();
    authors=authors.filter(a=>a.toLowerCase().includes(q));
    var per=6, pages=Math.max(1,Math.ceil(authors.length/per));
    if(nvfAuthorPage>pages) nvfAuthorPage=pages;
    var page=authors.slice((nvfAuthorPage-1)*per, nvfAuthorPage*per);
    var html=page.map(function(a){
      var p=PEOPLE.find(x=>x.name===a); var av=p?p.av:'av-brand';
      return '<button class="nvf-pickrow nvf-aitem'+(nvFeedAuthor===a?' on':'')+'" data-author="'+a+'"><span class="avatar '+av+'"></span><span>'+a+'</span><span class="nvf-pickradio"></span></button>';
    }).join('')||'<div class="nvf-fnone">Nenhum autor</div>';
    if(authors.length>per){
      var nums=''; for(var pn=1;pn<=pages;pn++) nums+='<button class="nvf-apgn'+(pn===nvfAuthorPage?' on':'')+'" data-apgto="'+pn+'">'+pn+'</button>';
      html+='<div class="nvf-apager">'+
        '<button class="nvf-apg" data-apgto="1"'+(nvfAuthorPage===1?' disabled':'')+'><i class="fa-solid fa-angles-left"></i></button>'+
        '<button class="nvf-apg" data-apg="-1"'+(nvfAuthorPage===1?' disabled':'')+'><i class="fa-solid fa-chevron-left"></i></button>'+
        nums+
        '<button class="nvf-apg" data-apg="1"'+(nvfAuthorPage===pages?' disabled':'')+'><i class="fa-solid fa-chevron-right"></i></button>'+
        '<button class="nvf-apg" data-apgto="'+pages+'"'+(nvfAuthorPage===pages?' disabled':'')+'><i class="fa-solid fa-angles-right"></i></button></div>';
    }
    authBox.innerHTML=html;
  }
  var ab=$('#nvfAuthorBtnLbl'); if(ab) ab.textContent = nvFeedAuthor || 'Todos os autores';
}
function feedCmList(n){
  return (n.cmts||[]).map((c,ci)=>'<div class="comment'+(c.pend?' pending':'')+'" data-ci="'+ci+'">'+
      '<span class="avatar '+(c.av||'av-rc')+'">'+(c.ini||'')+'</span>'+
      '<div class="comment-main">'+
        '<div class="comment-bubble">'+
          '<div class="comment-top"><span class="comment-name">'+(c.author||c.name||'')+'</span>'+
          '<span class="comment-time">'+(c.time||'agora')+'</span>'+
          '<div class="comment-menu"><button class="comment-dots" title="Opções"><i class="fa-solid fa-ellipsis"></i></button><div class="comment-drop" hidden><button class="comment-del" data-cmdel="'+ci+'"><i class="fa-solid fa-trash-can"></i> Excluir</button></div></div></div>'+
          '<div class="comment-role">'+(c.role||'SULTS')+'</div>'+
          '<div class="comment-text">'+String(c.text||'').replace(/</g,'&lt;')+'</div>'+
          (c.pend?'<div class="comment-pend"><i class="fa-solid fa-clock"></i> Aguardando aprovação</div>':'')+
        '</div>'+
        (c.pend?'<div class="comment-mod"><button class="cmod-ok" data-cmapr="'+ci+'"><i class="fa-solid fa-check"></i> Aprovar</button><button class="cmod-no" data-cmrej="'+ci+'"><i class="fa-solid fa-xmark"></i> Recusar</button></div>':'')+
        '<div class="comment-actions"'+(c.pend?' style="display:none"':'')+'>'+
          '<button class="comment-act clike'+(c.liked?' liked':'')+'" data-cmlike="'+ci+'"><i class="fa-'+(c.liked?'solid':'regular')+' fa-thumbs-up"></i> '+(c.liked?'Curtido':'Gostei')+'</button>'+
          '<span class="comment-sep"></span>'+
          '<span class="comment-likes"'+(c.likes?'':' style="display:none"')+'><i class="fa-solid fa-thumbs-up"></i> <b>'+(c.likes||0)+'</b></span>'+
        '</div>'+
      '</div></div>').join('');
}
function renderNewsFeed(){
  const el = $('#nvFeed');
  var q=(nvfAuthorQuery||'').toLowerCase();
  const list = NEWS.filter(n => {
    if(n.status!=='pub') return false;
    if(nvSearchQuery){
      const t=rxNorm(nvSearchQuery);
      const hay=rxNorm([n.title||'',n.text||'',n.author||'',(n.article&&n.article.lead)||''].join(' '));
      if(!hay.includes(t)) return false;
    }
    if(n.removido) return false;
    if(nvFeedType==='artigo' && !n.article) return false;
    if(nvFeedType==='post' && n.article) return false;
    if(nvFeedType==='pinned' && !n.pinned) return false;
    if(nvFeedType==='midia' && !(n.image||n.video||(n.images&&n.images.length))) return false;
    if(nvFeedType==='enquete' && !n.poll) return false;
    if(nvFeedReach && (n.reach||'rede')!==nvFeedReach) return false;
    if(nvFeedMine==='curti' && !newsLiked.has(n.id)) return false;
    if(nvFeedMine==='comentei' && !((n.cmts||[]).some(c=>(c.author||'').indexOf('Rodrigo')===0))) return false;
    if(nvFeedMine==='minhas' && !((n.author||'SULTS')==='SULTS')) return false;
    if(nvFeedMine==='naovistos' && newsSeen.has(n.id)) return false;
    if(nvFeedText){ var hay=((n.title||'')+' '+(n.text||'')+' '+(n.sub||'')+' '+(n.author||'')+' '+((n.article&&n.article.lead)||'')).toLowerCase(); if(!hay.includes(nvFeedText.toLowerCase())) return false; }
    if(nvFeedCat && (n.sub||'')!==nvFeedCat) return false;
    if(nvFeedAuthor && (n.article?'SULTS':(n.author||'SULTS'))!==nvFeedAuthor) return false;
    if(q){ var au=(n.article?'SULTS':(n.author||'SULTS')).toLowerCase(); if(!au.includes(q)) return false; }
    if(nvFeedPeriod){ var days=nvFeedDaysAgo(n.date); if(days>+nvFeedPeriod) return false; }
    return true;
  }).slice().sort((a,b)=>{
    if(nvFeedSort==='curtidas') return (b.reactions||0)-(a.reactions||0);
    if(nvFeedSort==='comentadas') return ((b.comments||0)+((b.cmts&&b.cmts.length)||0))-((a.comments||0)+((a.cmts&&a.cmts.length)||0));
    if(nvFeedType==='pinned') return 0;
    return (b.pinned?1:0)-(a.pinned?1:0);
  });
  renderNvfFilters();
  if (!list.length){ el.innerHTML = '<div class="nvf-empty">Nenhuma publicação encontrada com esses filtros.</div>'; return; }
  el.innerHTML = list.map(n => {
    const liked = newsLiked.has(n.id); const rc = n.reactions + (liked?1:0);
    const cc = n.comments + ((n.cmts&&n.cmts.length)||0);
    if (n.article){
      const menuA = '<div class="nvf-menu" hidden><button data-menu="pin"><i class="fa-solid fa-thumbtack"></i> '+(n.pinned?'Desafixar':'Fixar no topo')+'</button><button data-menu="copy"><i class="fa-solid fa-link"></i> Copiar link</button></div>';
      const pinA = (n.pinned && nvFeedType!=='pinned') ? '<span class="nvf-pinchip"><i class="fa-solid fa-thumbtack"></i> Fixado</span>' : '';
      const clapA = n.reactions>=120 ? '<span class="rxs" data-rx="celebrate"></span>' : '';
      return '<article class="card post nvf-artcard" data-id="'+n.id+'">'+
        '<div class="post-head"><span class="avatar av-brand">'+BRAND_LOGO+'</span><div class="post-id"><div class="post-name">SULTS <i class="fa-solid fa-circle-check verified"></i>'+pinA+'</div><div class="post-sub">'+(n.sub||'')+'</div><div class="post-meta">'+n.date+' · <i class="fa-solid fa-earth-americas"></i></div></div><button class="post-more" data-act="more"><i class="fa-solid fa-ellipsis"></i></button>'+menuA+'</div>'+
        '<div class="nvf-arthero" data-act="read"><img src="'+n.image+'"><span class="art-badge">'+n.article.kicker+'</span></div>'+
        '<div class="nvf-artbody"><div class="nvf-artkicker">'+(n.sub||'')+'</div><div class="nvf-arttitle" data-act="read">'+n.title+'</div><div class="nvf-artlead">'+n.article.lead+'</div>'+
        '<div class="nvf-artread" data-act="read">Ler artigo completo <i class="fa-solid fa-arrow-right"></i></div></div>'+
        '<div class="post-stats"><span class="rx"><span class="rxs" data-rx="like"></span><span class="rxs" data-rx="love"></span>'+clapA+'</span><span class="rx-count">'+rc+'</span><span class="right nvf-cc">'+(cc?'Ver ':'')+cc+' comentários</span></div>'+
        '<div class="post-actions"><button class="p-act like'+(liked?' liked':'')+'" data-act="like"><i class="fa-'+(liked?'solid':'regular')+' fa-thumbs-up"></i> Gostei</button><button class="p-act" data-act="comment"><i class="fa-regular fa-comment"></i> Comentar</button></div>'+
        '<div class="nvf-cm" hidden><div class="nvf-cm-box"><span class="avatar av-rc"></span><input class="nvf-cm-in" placeholder="Adicione um comentário..."><button class="nvf-cm-send" data-act="cmsend" disabled><i class="fa-solid fa-paper-plane"></i></button></div><div class="nvf-cm-list">'+feedCmList(n)+'</div></div>'+
      '</article>';
    }
    const av = n.av ? '<span class="avatar '+n.av+'">'+(n.ini||'')+'</span>' : '<span class="avatar av-brand">'+BRAND_LOGO+'</span>';
    const nm = n.av ? n.author : 'SULTS <i class="fa-solid fa-circle-check verified"></i>';
    const pin = (n.pinned && nvFeedType!=='pinned') ? '<span class="nvf-pinchip"><i class="fa-solid fa-thumbtack"></i> Fixado</span>' : '';
    let banner = '';
    if (n.banner) banner = n.banner.variant==='bday'
      ? '<div class="post-img"><div class="banner bday"><span class="big-emoji">'+(n.banner.emoji||'🎉')+'</span><h4>'+n.banner.title+'</h4>'+(n.banner.sub?'<p>'+n.banner.sub+'</p>':'')+'</div></div>'
      : '<div class="post-img"><div class="banner">'+WHITE_LOGO+'<h4>'+n.banner.title+'</h4>'+(n.banner.sub?'<p>'+n.banner.sub+'</p>':'')+'</div></div>';
    const image = n.video ? '<div class="post-img"><video class="nvf-img" src="'+n.video+'" controls playsinline style="max-height:560px;background:#000"></video></div>' : ((n.images && n.images.length>1) ? '<div class="post-img">'+nvImgCollage(n.images,'post-imggrid')+'</div>' : (n.image ? '<div class="post-img"><img class="nvf-img" src="'+n.image+'"></div>' : ''));
    const event = n.event ? '<div class="nvf-event"><div class="ev-cal"><b>'+(n.event.day||'12')+'</b><span>'+(n.event.mon||'AGO')+'</span></div><div><h4>'+n.event.title+'</h4><p>'+(n.event.sub||'Clique para ver detalhes')+'</p></div></div>' : '';
    let poll = '';
    if (n.poll){ const tot=n.poll.options.reduce((s,o)=>s+o.v,0); const voted=n.poll.voted!=null; poll = '<div class="nvf-poll">'+n.poll.options.map((o,i)=>{ const pct=tot?Math.round(o.v/tot*100):0; return '<div class="nvf-poll-opt'+(n.poll.voted===i?' voted':'')+'" data-poll="'+i+'"><span class="nvf-poll-fill" style="width:'+(voted?pct:0)+'%"></span><span>'+o.t+'</span>'+(voted?'<span class="nvf-poll-pct">'+pct+'%</span>':'')+'</div>'; }).join('')+'</div>'; }
    const clap = n.reactions>=120 ? '<span class="rxs" data-rx="celebrate"></span>' : '';
    const txt = (n.text||'').replace(/\n/g,'<br>');
    const colored = n.colorBg ? '<div class="post-img"><div class="banner" style="background:'+n.colorBg+'">'+(n.colorEmoji?'<span class="big-emoji">'+n.colorEmoji+'</span>':'')+'<h4 style="font-size:24px">'+(n.text||'')+'</h4>'+(n.colorSub?'<p>'+n.colorSub+'</p>':'')+'</div></div>' : '';
    const bodyTxt = n.colorBg ? '' : txt;
    const cmList = feedCmList(n);
    const menu = '<div class="nvf-menu" hidden><button data-menu="edit"><i class="fa-solid fa-pen"></i> Editar publicação</button><button data-menu="pin"><i class="fa-solid fa-thumbtack"></i> '+(n.pinned?'Desafixar':'Fixar no topo')+'</button><button data-menu="copy"><i class="fa-solid fa-link"></i> Copiar link</button><button class="danger" data-menu="del"><i class="fa-solid fa-trash"></i> Excluir</button></div>';
    const pendBar = n.pendAppr ? '<div class="nvf-modbar"><span class="nvf-modtx"><i class="fa-solid fa-clock"></i> Aguardando aprovação</span><span style="flex:1"></span><div class="comment-mod" style="margin-top:0"><button class="cmod-no" data-act="pubrej"><i class="fa-solid fa-xmark"></i> Reprovar</button><button class="cmod-ok" data-act="pubapr"><i class="fa-solid fa-check"></i> Aprovar</button></div></div>' : '';
    return '<article class="card post'+(n.pendAppr?' is-pend':'')+'" data-id="'+n.id+'">'+
      pendBar + '<div class="post-head">'+av+'<div class="post-id"><div class="post-name">'+nm+pin+'</div><div class="post-sub">'+postSub(n)+'</div><div class="post-meta">'+n.date+(n.edited?' · <span class="edited-tag">editado</span>':'')+' · <i class="fa-solid fa-earth-americas"></i></div></div><button class="post-more" data-act="more"><i class="fa-solid fa-ellipsis"></i></button>'+menu+'</div>'+
      (bodyTxt?'<p class="post-text nvf-postlink" data-act="open">'+bodyTxt+'</p>':'') + colored + banner + image + event + poll +
      (n.pendAppr ? '' :
      '<div class="post-stats"><span class="rx"><span class="rxs" data-rx="like"></span><span class="rxs" data-rx="love"></span>'+clap+'</span><span class="rx-count">'+rc+'</span><span class="right nvf-cc">'+(cc?'Ver ':'')+cc+' comentários</span></div>'+
      '<div class="post-actions"><button class="p-act like'+(liked?' liked':'')+'" data-act="like"><i class="fa-'+(liked?'solid':'regular')+' fa-thumbs-up"></i> Gostei</button><button class="p-act" data-act="comment"><i class="fa-regular fa-comment"></i> Comentar</button></div>'+
      '<div class="nvf-cm" hidden><div class="nvf-cm-box"><span class="avatar av-rc"></span><input class="nvf-cm-in" placeholder="Adicione um comentário..."><button class="nvf-cm-send" data-act="cmsend" disabled><i class="fa-solid fa-paper-plane"></i></button></div><div class="nvf-cm-list">'+cmList+'</div></div>') +
    '</article>';
  }).join('');
}
[[0,2],[3,5],[6,9],[9,14]].forEach(function(x,i){ const n=NEWS.filter(y=>y.status==='pub')[i*3]; if(n){ n.agendado = Date.now() + x[1]*86400000; } });
(function seedFeedPending(){
  try{
    const pub = NEWS.filter(n=>n.status==='pub' && !n.article)[1];
    if(pub){
      pub.pendAppr=true;
      if(typeof pubApprAdd==='function' && pub.paid==null) pubApprAdd(pub);
    }
    const alvo = NEWS.filter(n=>n.status==='pub' && !n.article && !n.pendAppr)[1];
    if(alvo){
      if(!alvo.cmts) alvo.cmts=[];
      const p=(typeof PEOPLE!=='undefined')?PEOPLE[3]:null;
      const cm={author:(p&&p.name)||'Marina Alves', av:(p&&p.av)||'av-ms', role:(p&&p.role)||'Operações',
        text:'Podemos divulgar isso para as unidades ainda esta semana?', time:'12 min', likes:0, pend:true};
      if(typeof modAdd==='function'){ modAdd({author:cm.author, av:cm.av, role:cm.role, text:cm.text, post:alvo.title||'Publicação', when:'12 min'}); cm.mid=modSeq; }
      alvo.cmts.unshift(cm);
    }
  }catch(e){}
})();
(function(){ try{
  if(typeof PUB_APPR!=='undefined' && PUB_APPR.length){
    if(PUB_APPR[0]) PUB_APPR[0].proc=true;
    if(PUB_APPR[1]) PUB_APPR[1].procFail=true;
  }
  var pubs = NEWS.filter(function(n){ return n.status==='pub' && !n.article && !n.proc && !n.procFail; });
  if(pubs[2]) pubs[2].proc=true;
  if(pubs[7]) pubs[7].removido=true;
  if(pubs[9]) pubs[9].removido=true;
}catch(e){} })();
let newsListFilter = 'todas';
let nlSort = { key:null, dir:1 };
function nvFmtDateTime(n){
  if(n.datetime && /\d{2}:\d{2}/.test(n.datetime)){ return n.datetime.replace(' às ',' ').replace(/(\d{2})\/(\d{2})\/\d{2}(\d{2})/,'$1/$2/$3'); }
  const now=new Date(2026,6,23,13,40); let d=new Date(now);
  const s=String(n.date||'').trim();
  let m;
  if((m=s.match(/^(\d+)\s*h/))) d=new Date(now-(+m[1])*3600000);
  else if(/agora/i.test(s)) d=now;
  else if(/ontem/i.test(s)) d=new Date(now-86400000);
  else if((m=s.match(/^(\d+)\s*d/))) d=new Date(now-(+m[1])*86400000);
  else if((m=s.match(/(\d{2})\/(\d{2})\/(\d{4})/))) d=new Date(+m[3],+m[2]-1,+m[1],9,14);
  const p=x=>('0'+x).slice(-2);
  return p(d.getDate())+'/'+p(d.getMonth()+1)+'/'+String(d.getFullYear()).slice(-2)+' '+p(d.getHours())+':'+p(d.getMinutes());
}
function renderNewsList(){
  let list = NEWS.slice();
  const fS=$('#nvFStatus')&&$('#nvFStatus').value, fC=$('#nvFCat')&&$('#nvFCat').value, fR=$('#nvFReach')&&$('#nvFReach').value, fA=$('#nvFAutor')&&$('#nvFAutor').value;
  list = list.filter(n=>n.status!=='draft');
  if(fS==='removido') list = list.filter(n=>n.removido);
  else { list = list.filter(n=>!n.removido); if(fS) list=list.filter(n=> n.agendado ? fS==='agendado' : fS==='pub'); }
  if(fC) list=list.filter(n=>(n.sub||'')===fC);
  if(fR) list=list.filter(n=>(n.reach||'rede')===fR);
  if(fA) list=list.filter(n=>(n.autorNome||'Rodrigo Caetano')===fA);
  if (newsListFilter==='post') list = list.filter(n=>!n.article);
  else if (newsListFilter==='article') list = list.filter(n=>!!n.article);
  if (newsQuery) list = list.filter(n => rxNorm(n.title).includes(rxNorm(newsQuery)) || rxNorm(n.author).includes(rxNorm(newsQuery)));
  const T=$('#nvNTodas'), P=$('#nvNPub'), D=$('#nvNDraft');
  if(T){ T.textContent=NEWS.length; P.textContent=NEWS.filter(n=>!n.article).length; D.textContent=NEWS.filter(n=>!!n.article).length; }
  $$('#nvListSeg button').forEach(b=>b.classList.toggle('active', b.dataset.f===newsListFilter));
  const el = $('#nvList');
  if (!list.length){ el.innerHTML = '<div class="cat-empty">Nenhuma publicação encontrada.</div>'; return; }
  if(nlSort.key){ const val=n=>{ switch(nlSort.key){ case 'title':return (n.title||n.text||'').toLowerCase(); case 'id':return n.id; case 'tipo':return n.article?'1':'0'; case 'views':return (n.views!=null?n.views:((n.reactions||0)*37+(n.comments||0)*112+240+(n.id||0)*53)); case 'autor':return (n.autorNome||'Rodrigo Caetano').toLowerCase(); case 'reach':return n.reach||'rede'; case 'cat':return (n.sub||'').toLowerCase(); case 'data':return n.id; case 'rx':return n.reactions||0; case 'cm':return n.comments||0; case 'status':return n.status; default:return 0; } }; list=list.slice().sort((a,b)=>{const x=val(a),y=val(b);return x<y?-nlSort.dir:x>y?nlSort.dir:0;}); }
  const thumb = n => n.procFail
    ? '<span class="rl-procthumb rl-failthumb" style="width:60px;height:46px"><i class="fa-solid fa-triangle-exclamation"></i></span>'
    : n.proc
    ? '<span class="rl-procthumb" style="width:60px;height:46px"><span class="rl-spin"></span></span>'
    : n.image
    ? '<span class="nv-lt-thumb" style="background-image:url('+n.image+')"></span>'
    : '<span class="nv-lt-thumb ph"><i class="fa-solid fa-'+(n.article?'newspaper':'align-left')+'"></i></span>';
  const rows = list.map(n => {
    const cat = newsCatByName(n.sub);
    const catCell = cat
      ? '<span class="nv-lt-cat"><span class="nv-lt-catic" style="background:'+cat.color+'"><i class="fa-solid '+(cat.icon||'fa-tag')+'"></i></span>'+cat.name+'</span>'
      : '<span style="color:#b8c2cc">,</span>';
    const dispTitle = n.title || (n.text ? n.text.replace(/<[^>]+>/g,'').replace(/\n/g,' ').slice(0,60) : 'Publicação');
    const tipo = n.article ? '<span class="nv-tp is-art"><i class="fa-solid fa-newspaper"></i> Artigo</span>' : '<span class="nv-tp is-post"><i class="fa-solid fa-align-left"></i> Post</span>';
    const reachMap = { rede:['fa-earth-americas','Toda a rede'], unidades:['fa-store','Unidades'], matriz:['fa-building','Sua Marca (Matriz)'] };
    const rc = reachMap[n.reach||'rede'];
    const reachCell = '<span class="nv-reach"><i class="fa-solid '+rc[0]+'"></i> '+rc[1]+'</span>';
    const autorNome = n.autorNome || 'Rodrigo Caetano';
    const autorAv = n.autorAv || 'av-rc';
    const autorOrig = (n.reach==='unidades') ? 'Unidade' : 'Matriz';
    const autorCell = '<span class="nv-author-cell"><span class="avatar '+autorAv+'"></span><span class="nv-author-txt"><b>'+autorNome+'</b><span>'+autorOrig+'</span></span></span>';
    const nvAgo = s => { const m=/(\d{2})\/(\d{2})\/(\d{2})\s+(\d{2}):(\d{2})/.exec(s||''); if(!m) return ''; const d=new Date(2000+ +m[3], +m[2]-1, +m[1], +m[4], +m[5]); const mins=Math.round((Date.now()-d)/60000); if(mins<1) return 'agora'; if(mins<60) return 'há '+mins+' min'; const hrs=Math.round(mins/60); if(hrs<24) return 'há '+hrs+(hrs===1?' hora':' horas'); const days=Math.round(hrs/24); if(days<30) return 'há '+days+(days===1?' dia':' dias'); const mo=Math.round(days/30); return 'há '+mo+(mo===1?' mês':' meses'); };
    const dtRaw = nvFmtDateTime(n);
    const dt = '<div>'+dtRaw+'</div><span>'+nvAgo(dtRaw)+'</span>';
    const nvIn = d => { const days=Math.max(1,Math.round((d-Date.now())/86400000)); const dd=new Date(d); const p=x=>String(x).padStart(2,'0'); return '<div>'+p(dd.getDate())+'/'+p(dd.getMonth()+1)+'/'+dd.getFullYear()+' '+p(dd.getHours())+':'+p(dd.getMinutes())+'</div><span>Em '+days+(days===1?' dia':' dias')+'</span>'; };
    const nvViews = x => { const v = x.views != null ? x.views : ((x.reactions||0)*37 + (x.comments||0)*112 + 240 + (x.id||0)*53); return typeof v==='number' ? v.toLocaleString('pt-BR') : v; };
    const rx = n.reactions||0;
    let rxIcons='<span class="nv-rxc"><span class="rxs" data-rx="like"></span>';
    if(rx>=90) rxIcons+='<span class="rxs" data-rx="love"></span>';
    if(rx>=120) rxIcons+='<span class="rxs" data-rx="celebrate"></span>';
    rxIcons+='</span> '+rx;
    return '<tr data-id="'+n.id+'">'+
      '<td class="perm-id">#'+n.id+'</td>'+
      '<td><div class="nv-list-title">'+thumb(n)+'<div><b>'+dispTitle+'</b>'+(n.procFail?'<span class="rl-failpill">Falha no processamento</span>':(n.proc?'<span class="rl-procpill">Em processamento</span>':''))+'</div></div></td>'+
      '<td class="nv-dtcell'+(n.agendado?' agendado':'')+'">'+(n.agendado? nvIn(n.agendado) : dt)+'</td>'+
      '<td>'+tipo+'</td>'+
      '<td>'+autorCell+'</td>'+
      '<td>'+reachCell+'</td>'+
      '<td>'+catCell+'</td>'+
      '<td style="white-space:nowrap">'+nvViews(n)+'</td>'+
      '<td style="white-space:nowrap"><button class="nv-cellbtn" data-open="rx" title="Ver quem interagiu"><span class="nv-rx-cell">'+rxIcons+'</span></button></td>'+
      '<td style="white-space:nowrap"><button class="nv-cellbtn" data-open="cm" title="Ver comentários"><i class="fa-solid fa-comment" style="font-size:13px;color:#2f6fe4"></i> '+n.comments+'</button></td>'+
      '<td><span class="nv-status '+(n.agendado?'agendado':n.status)+'">'+(n.agendado?'Agendado':(n.status==='pub'?'Publicada':'Rascunho'))+'</span></td>'+
      '<td class="rl-acts nv-actcell">'+
        '<button class="nv-actbtn" data-act="edit"><i class="fa-solid fa-pen"></i> Editar</button>'+
        '<button class="nv-actbtn danger" data-act="del"><i class="fa-solid fa-trash"></i> Excluir</button>'+
      '</td></tr>';
  }).join('');
  const cols=[['id','ID'],['title','Publicação'],['data','Dt. Publicação'],['tipo','Tipo'],['autor','Autor'],['reach','Alcance'],['cat','Categoria'],['views','Vistos'],['rx','Interações'],['cm','Comentários'],['status','Situação']];
  const ths=cols.map(c=>{const a=nlSort.key===c[0];const ar=a?(nlSort.dir===1?'<i class="fa-solid fa-arrow-up-short-wide"></i>':'<i class="fa-solid fa-arrow-down-wide-short"></i>'):'<i class="fa-solid fa-sort"></i>';return '<th class="nl-sortable'+(a?' active-sort':'')+'" data-sort="'+c[0]+'">'+c[1]+' <span class="sort-ic">'+ar+'</span></th>';}).join('')+'<th>Ações</th>';
  el.innerHTML = '<table><thead><tr>'+ths+'</tr></thead><tbody>'+rows+'</tbody></table>';
  el.querySelector('thead').addEventListener('click', ev=>{ const th=ev.target.closest('th.nl-sortable'); if(!th)return; const k=th.dataset.sort; if(nlSort.key===k) nlSort.dir=-nlSort.dir; else { nlSort.key=k; nlSort.dir=(k==='rx'||k==='cm'||k==='data')?-1:1; } renderNewsList(); });
}
$('#nvListSeg') && $('#nvListSeg').addEventListener('click', e=>{ const b=e.target.closest('button'); if(!b) return; newsListFilter=b.dataset.f; renderNewsList(); });
function nvUpdatePreview(){
  if (nvType === 'article'){ nvUpdateArtPreview(); return; }
}
let artCover = null, postColor = null, postImg = null;
function nvUpdateArtPreview(){
  const t = $('#nvArtTitle').value.trim(), s = $('#nvArtSub').value.trim(), b = ($('#nvArtBodyIn')?$('#nvArtBodyIn').innerText:'').trim();
  const pv = $('#nvArtPv');
  if (!pv) return;
  const firstPar = b ? b.split(/\n{2,}/)[0] : '';
  pv.innerHTML =
    (artCover ? '<img class="pv-cover" src="'+artCover+'">' : '') +
    '<div class="nv-pv-top"><span class="nv-logo">'+SULTS_LOGO+'</span><div><b>SULTS <i class="fa-solid fa-circle-check verified"></i></b><small>Artigo · agora</small></div></div>' +
    '<h4>'+(t||'Título do artigo')+'</h4>' +
    (s ? '<div class="pv-sub">'+s+'</div>' : '') +
    '<div class="pvtext'+(b?'':' empty')+'">'+(firstPar ? firstPar.replace(/</g,'&lt;') : 'O conteúdo do artigo aparece aqui.')+'</div>' +
    '<div class="nv-pv-foot"><span><i class="fa-regular fa-thumbs-up"></i> Gostei</span><span><i class="fa-regular fa-comment"></i> Comentar</span></div>';
}
function nvResetCompose(){
  if(typeof nvArtAdvClose==='function') nvArtAdvClose(); newsEditId=null; nvBanner=false; composeImg=null; nvEvent=false; composePoll=false; postColor=null; postImg=null; nvType=null; nvDest=null; NV_EMP.clear(); NV_PEO.clear(); if($('#nvpText'))$('#nvpText').value=''; if($('#nvpSub'))$('#nvpSub').value=''; if($('#nvpImgWrap'))$('#nvpImgWrap').hidden=true; if($('#nvpImgFile'))$('#nvpImgFile').value=''; if($('#nvpColors'))$('#nvpColors').classList.add('hidden'); if($('#nvpBody')){$('#nvpBody').classList.remove('colored');$('#nvpBody').style.background='';} artCover=null; if($('#nvArtTitle')){$('#nvArtTitle').value='';$('#nvArtSub').value='';$('#nvArtBodyIn').value='';$('#nvArtCover').classList.remove('has');$('#nvArtCoverFile').value='';} $$('.nv-tool').forEach(b=>b.classList.remove('active')); $$('.nv-tipo-card').forEach(c=>c.classList.remove('sel')); $('#nvComposeTitle').textContent='Novo artigo'; if($('#nvDefStartSeg')){ $$('#nvDefStartSeg button').forEach(x=>x.classList.toggle('on',x.dataset.s==='now')); $('#nvDefStartRow').style.display='none'; $('#nvDefStart').value=''; $$('#nvDefEndSeg button').forEach(x=>x.classList.toggle('on',x.dataset.s==='never')); $('#nvDefEndRow').style.display='none'; $('#nvDefEnd').value=''; } nvGoStep('tipo'); }
function nvEdit(id){ const n = NEWS.find(x=>x.id===id); if(!n) return; if(n.article){ newsEditId=id; nvType='article'; nvFrom='list'; openNewsModule(); nvResetCompose(); newsEditId=id; nvType='article'; $('#nvArtTitle').value=n.title||''; $('#nvArtSub').value=(n.article.lead)||''; if($('#nvArtBodyIn')) $('#nvArtBodyIn').innerHTML=n.article.html||(n.article.paras?n.article.paras.map(p=>'<p>'+p+'</p>').join(''):''); artCover=n.image||null; if(artCover){$('#nvArtCoverImg').src=artCover;$('#nvArtCover').classList.add('has');} $('#nvComposeTitle').textContent='Editar artigo'; newsShow('compose'); nvGoStep('content'); nvUpdateArtPreview(); return; } qpOpenEdit(n); }
function qpOpenEdit(n){ qpOpen(); qpEditId=n.id; $('#qpText').value=(n.text||'').replace(/<br>/g,'\n'); qpImgs=(n.images?n.images.slice():(n.image&&!n.colorBg?[n.image]:[])); qpVideo=n.video||null; if(n.colorBg){ qpRenderColors(); qpSetColor(n.colorBg); $('#qpToolColor').classList.add('on'); $('#qpColors').classList.remove('hidden'); $('#qpSub').value=n.colorSub||''; qpBig=n.colorEmoji||null; if(qpBig)(document.getElementById('qpBigEmojiVal')||{}).textContent=qpBig; } qpRenderImgs(); if(n.sub) qpCatSel=n.sub, qpCatRender(); $('#qpPub').disabled=false; }
function openNewsModule(){ closeStories(); closeForum(); newsView.classList.remove('user-mode'); newsView.classList.add('open','mod-mode'); nmodSide.classList.remove('open'); document.body.style.overflow='hidden'; setNav(null); newsQuery=''; const s=$('#nvSearch'); if(s)s.value=''; newsShow('list'); }
function closeNewsModule(){ if(typeof nvArtAdvClose==='function') nvArtAdvClose(); nmodSide.classList.remove('open'); newsView.classList.remove('open','user-mode','mod-mode'); reelsView.classList.remove('in-social','in-cfg','in-module'); closeStories(); if(!reelsPlayer.classList.contains('open')) document.body.style.overflow=''; }
function openNewsUser(){ closeStories(); closeForum(); nmodSide.classList.remove('open'); newsView.classList.remove('mod-mode'); newsView.classList.add('open','user-mode'); document.body.style.overflow='hidden'; setNav($('#navNews')); newsShow('feed'); }
$('#navNews') && $('#navNews').addEventListener('click', e => { e.preventDefault(); openNewsUser(); });
$('#tileNews').addEventListener('click', e => { e.preventDefault(); openNewsModule(); newsShow('feed'); });
$('#homeSeeAllPubs') && $('#homeSeeAllPubs').addEventListener('click', e => { e.preventDefault(); if(typeof abrirModuloSocial==='function'){ abrirModuloSocial('feed'); } else { openNewsModule(); newsShow('feed'); } });
$('#nvManageBtn') && $('#nvManageBtn').addEventListener('click', openNewsModule);
$('#homePublish') && $('#homePublish').addEventListener('click', e => { e.preventDefault(); qpOpen(); });
$('#homeStart') && $('#homeStart').addEventListener('click', () => qpOpen());
$('#homeQImg') && $('#homeQImg').addEventListener('click', () => qpOpen('img'));
$('#homeQColor') && $('#homeQColor').addEventListener('click', () => qpOpen('color'));
$('#homeQAdv') && $('#homeQAdv').addEventListener('click', () => { qpOpen(); $('#qpAdv').click(); });
$('#homeQVideo') && $('#homeQVideo').addEventListener('click', () => qpOpen('video'));
$('#homeQArt') && $('#homeQArt').addEventListener('click', () => { openNewsModule(); nvFrom='feed'; nvResetCompose(); nvType='article'; $$('.nv-tipo-card[data-type]').forEach(c=>c.classList.toggle('sel',c.dataset.type==='article')); newsShow('compose'); nvGoStep('content'); });
$('#nmodApps').addEventListener('click', () => { closeNewsModule(); setNav($('#navHome')); });
$('#nmodPub').addEventListener('click', () => newsShow('list'));
$('#nmodPerm').addEventListener('click', () => newsShow('perm'));
$('#nmodCats').addEventListener('click', () => newsShow('cats'));
let NEWS_CATS = [
  { id:'oficiais', name:'Comunicados oficiais', color:'#2f6fe4', icon:'fa-bullhorn', active:true },
  { id:'eventos', name:'Eventos', color:'#a93438', icon:'fa-calendar-day', active:true },
  { id:'cultura', name:'Gente & Cultura', color:'#e08a1e', icon:'fa-hand-holding-heart', active:true },
  { id:'produto', name:'Produto', color:'#8161d8', icon:'fa-box', active:true },
  { id:'expansao', name:'Expansão', color:'#27a689', icon:'fa-arrow-trend-up', active:false },
  { id:'sucesso', name:'Histórias de sucesso', color:'#00acac', icon:'fa-trophy', active:true },
  { id:'noticias', name:'Notícias', color:'#0088FF', icon:'fa-newspaper', active:false }
];
const NEWS_CAT_ICONS = ['fa-bullhorn','fa-calendar-day','fa-hand-holding-heart','fa-box','fa-arrow-trend-up','fa-trophy','fa-newspaper','fa-star','fa-lightbulb','fa-graduation-cap','fa-users','fa-gift','fa-fire','fa-bell','fa-briefcase','fa-heart'];
let nvCatQuery='', nvCatEditId=null, nvCatColor=CAT_COLORS[0], nvCatIcon=NEWS_CAT_ICONS[0];
function newsCatByName(name){ return NEWS_CATS.find(c=>c.name===name); }
function newsCatCount(name){ return NEWS.filter(n=>(n.sub||'')===name).length; }
function renderNewsCats(){
  const q=rxNorm(nvCatQuery);
  const list=NEWS_CATS.filter(c=>(nvCatStatus==='inativos' ? c.active===false : c.active!==false) && (!q||rxNorm(c.name).includes(q)));
  const el=$('#nvCatList');
  if(!list.length){ el.innerHTML='<div class="cat-empty">Nenhuma categoria '+(nvCatStatus==='inativos'?'inativa':'ativa')+'.</div>'; return; }
  const reelCount = name => { const cat=(typeof CATEGORIES!=='undefined'?CATEGORIES.find(x=>x.name===name):null); return (cat&&typeof REELS_DATA!=='undefined') ? REELS_DATA.filter(r=>r.cat===cat.id).length : 0; };
  el.innerHTML='<table><thead><tr><th>Categoria</th><th style="width:130px">Publicações</th><th style="width:110px">Shorts</th><th style="text-align:right;width:200px">Ações</th></tr></thead><tbody>'+
    list.map(c=>'<tr data-id="'+c.id+'"><td><div class="cat-name"><span class="cat-ic" style="background:'+c.color+'"><i class="fa-solid '+(c.icon||'fa-tag')+'"></i></span>'+c.name+'</div></td>'+
      '<td style="white-space:nowrap">'+newsCatCount(c.name)+' publicações</td>'+
      '<td style="white-space:nowrap">'+reelCount(c.name)+' shorts</td>'+
      '<td class="rl-acts"><button class="cat-editbtn" data-act="edit"><i class="fa-solid fa-pen"></i> Editar</button>'+
      '<button class="cat-arch" data-act="arch"><i class="fa-solid fa-'+(c.active!==false?'ban':'rotate-left')+'"></i> '+(c.active!==false?'Inativar':'Reativar')+'</button></td></tr>').join('')+'</tbody></table>';
}
function nvCatSwatches(){ $('#nvCatSw').innerHTML=CAT_COLORS.map(c=>'<span class="cat-sw'+(c===nvCatColor?' sel':'')+'" data-col="'+c+'" style="background:'+c+'">'+(c===nvCatColor?'<i class="fa-solid fa-check"></i>':'')+'</span>').join(''); }
function nvCatIcons(){ $('#nvCatIcons').innerHTML=NEWS_CAT_ICONS.map(ic=>'<span class="cat-icpick'+(ic===nvCatIcon?' sel':'')+'" data-ic="'+ic+'"><i class="fa-solid '+ic+'"></i></span>').join(''); }
function nvCatOpenModal(id){ nvCatEditId=id||null; const c=id?NEWS_CATS.find(x=>x.id===id):null; $('#nvCatModalTitle').textContent=c?'Editar categoria':'Nova categoria'; $('#nvCatName').value=c?c.name:''; nvCatColor=c?c.color:CAT_COLORS[0]; nvCatIcon=c?(c.icon||NEWS_CAT_ICONS[0]):NEWS_CAT_ICONS[0]; nvCatSwatches(); nvCatIcons(); $('#nvCatModal').classList.add('open'); setTimeout(()=>$('#nvCatName').focus(),30); }
$('#nvCatAdd').addEventListener('click', ()=>nvCatOpenModal());
let nvCatStatus='ativos';
$('#nvCatSeg') && $('#nvCatSeg').addEventListener('change', e=>{ nvCatStatus=e.target.value; renderNewsCats(); });
$('#nvCatSearch').addEventListener('input', e=>{ nvCatQuery=e.target.value; renderNewsCats(); });
$('#nvCatList').addEventListener('click', e=>{ const _tr=e.target.closest('tr'), _a=e.target.closest('[data-act]');
  if(_tr && _a && _a.dataset.act==='arch'){ const c=NEWS_CATS.find(x=>x.id===_tr.dataset.id); if(c){ c.active = c.active===false; renderNewsCats(); syncNewsCatSelect(); fgToast(c.active===false?'Categoria inativada':'Categoria reativada'); } return; }
  const tr=e.target.closest('tr'); if(!tr) return; const act=e.target.closest('[data-act]'); if(!act) return; const id=tr.dataset.id; if(act.dataset.act==='edit') nvCatOpenModal(id); else { NEWS_CATS=NEWS_CATS.filter(c=>c.id!==id); renderNewsCats(); fgToast('Categoria excluída'); } });
$('#nvCatSw').addEventListener('click', e=>{ const s=e.target.closest('.cat-sw'); if(!s) return; nvCatColor=s.dataset.col; nvCatSwatches(); });
$('#nvCatIcons').addEventListener('click', e=>{ const s=e.target.closest('.cat-icpick'); if(!s) return; nvCatIcon=s.dataset.ic; nvCatIcons(); });
$('#nvCatModalClose').addEventListener('click', ()=>$('#nvCatModal').classList.remove('open'));
$('#nvCatCancel').addEventListener('click', ()=>$('#nvCatModal').classList.remove('open'));
$('#nvCatModal').addEventListener('click', e=>{ if(e.target===$('#nvCatModal')) $('#nvCatModal').classList.remove('open'); });
$('#nvCatSave').addEventListener('click', ()=>{ const name=$('#nvCatName').value.trim(); if(!name){ $('#nvCatName').focus(); return; } if(nvCatEditId){ const c=NEWS_CATS.find(x=>x.id===nvCatEditId); if(c){c.name=name;c.color=nvCatColor;c.icon=nvCatIcon;} fgToast('Categoria atualizada'); } else { NEWS_CATS.push({id:rxNorm(name).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||('cat-'+Date.now()),name:name,color:nvCatColor,icon:nvCatIcon}); fgToast('Categoria criada'); } $('#nvCatModal').classList.remove('open'); renderNewsCats(); syncNewsCatSelect(); });
function syncNewsCatSelect(){ if(typeof nvArtCatRender==='function') nvArtCatRender(); if(typeof crCatRender==='function') crCatRender();
  const sel=$('#nvDefCat'); if(sel){ const cur=sel.value; sel.innerHTML='<option value="">Sem categoria</option>'+NEWS_CATS.map(c=>'<option>'+c.name+'</option>').join(''); sel.value=cur; } if($('#qpCatBtn')){ if(!qpCatSel||!NEWS_CATS.find(c=>c.name===qpCatSel)) qpCatSel=NEWS_CATS[0].name; qpCatRender(); } }
let qpAud='rede';
$('#qpAudBtn') && $('#qpAudBtn').addEventListener('click', e=>{ e.stopPropagation(); const m=$('#qpAudMenu'); m.hidden=!m.hidden; });
$('#qpAudMenu') && $('#qpAudMenu').addEventListener('click', e=>{ const b=e.target.closest('button'); if(!b) return; fgToast('Nota DEV: mostra apenas para EMPRESA PRINCIPAL / MATRIZ. Unidades sempre publica para TODOS'); qpAud=b.dataset.aud; $('#qpAudLbl').textContent=b.textContent.trim(); $('#qpAudIc').className='fa-solid '+b.dataset.ic; $('#qpAudMenu').hidden=true; });
document.addEventListener('click', e=>{
  const rl=e.target.closest('.post-sub,.comment-role,.nv-author-txt>span,.sb-author b,.itbl-prole,.rl-emp,.profile-role,.nvf-prole,.pp-role');
  if(rl){ e.stopPropagation(); fgToast('Nota DEV: se mais de uma relação empresarial trazer como N unidades vinculadas, sem o cargo'); return; }
});
document.addEventListener('click', e=>{ const m=$('#qpAudMenu'); if(m && !e.target.closest('.qp-audwrap') && !e.target.closest('.nv-def-aud')) m.hidden=true; });
let nvArtAud='rede';
$('#nvArtAudBtn') && $('#nvArtAudBtn').addEventListener('click', e=>{ e.stopPropagation(); const m=$('#nvArtAudMenu'); m.hidden=!m.hidden; });
$('#nvArtAudMenu') && $('#nvArtAudMenu').addEventListener('click', e=>{ const b=e.target.closest('button'); if(!b) return; fgToast('Nota DEV: mostra apenas para EMPRESA PRINCIPAL / MATRIZ. Unidades sempre publica para TODOS'); nvArtAud=b.dataset.aud; $('#nvArtAudLbl').textContent=b.textContent.trim(); $('#nvArtAudIc').className='fa-solid '+b.dataset.ic; $('#nvArtAudMenu').hidden=true; });
document.addEventListener('click', e=>{ const m=$('#nvArtAudMenu'); if(m && !e.target.closest('.qp-audwrap') && !e.target.closest('.nv-def-aud')) m.hidden=true; });
let nvArtUnit=null;
function nvArtUnitRender(){
  const m=$('#nvArtUnitMenu'); if(!m) return;
  m.innerHTML='<button type="button" data-unit=""><i class="fa-solid fa-ban"></i>Não vincular unidade</button>'+
    STORES.map(s=>'<button type="button" data-unit="'+s.code+'"><span class="qp-unitini" style="background:'+s.color+'">'+s.ini+'</span>'+s.name+'</button>').join('');
}
$('#nvArtUnitBtn') && $('#nvArtUnitBtn').addEventListener('click', e=>{ e.stopPropagation(); const m=$('#nvArtUnitMenu'); if(!m.innerHTML) nvArtUnitRender(); m.hidden=!m.hidden; });
$('#nvArtUnitMenu') && $('#nvArtUnitMenu').addEventListener('click', e=>{
  const b=e.target.closest('button'); if(!b) return;
  fgToast('Nota DEV: apareço apenas para unidades quando elas têm mais de um vínculo empresarial');
  nvArtUnit=b.dataset.unit||null;
  const s=STORES.find(x=>x.code===nvArtUnit);
  $('#nvArtUnitLbl').textContent = s ? s.name : 'Não vincular unidade';
  $('#nvArtUnitMenu').hidden=true;
});
document.addEventListener('click', e=>{ const m=$('#nvArtUnitMenu'); if(m && !e.target.closest('.qp-unitwrap')) m.hidden=true; });
function advMoveAud(slotId, btnId, menuId){
  const s=document.getElementById(slotId), b=document.getElementById(btnId), m=document.getElementById(menuId);
  if(!s||!b||s.contains(b)) return;
  b.classList.remove('qp-audhidden');
  s.appendChild(b); if(m) s.appendChild(m);
}
let qpUnit=null;
function qpUnitRender(){
  const m=$('#qpUnitMenu'); if(!m) return;
  m.innerHTML='<button type="button" data-unit=""><i class="fa-solid fa-ban"></i>Não vincular unidade</button>'+
    STORES.map(s=>'<button type="button" data-unit="'+s.code+'"><span class="qp-unitini" style="background:'+s.color+'">'+s.ini+'</span>'+s.name+'</button>').join('');
}
$('#qpUnitBtn') && $('#qpUnitBtn').addEventListener('click', e=>{ e.stopPropagation(); const m=$('#qpUnitMenu'); if(!m.innerHTML) qpUnitRender(); m.hidden=!m.hidden; });
$('#qpUnitMenu') && $('#qpUnitMenu').addEventListener('click', e=>{
  const b=e.target.closest('button'); if(!b) return;
  fgToast('Nota DEV: apareço apenas para unidades quando elas têm mais de um vínculo empresarial');
  qpUnit=b.dataset.unit||null;
  const s=STORES.find(x=>x.code===qpUnit);
  $('#qpUnitLbl').textContent = s ? s.name : 'Não vincular unidade';
  $('#qpUnitIc').className = s ? 'fa-solid fa-store' : 'fa-solid fa-store';
  $('#qpUnitMenu').hidden=true;
});
document.addEventListener('click', e=>{ const m=$('#qpUnitMenu'); if(m && !e.target.closest('.qp-unitwrap')) m.hidden=true; });
let qpCatSel=null;
var nvArtCatSel=null;
function qpCatRender(){ const c=NEWS_CATS.find(x=>x.name===qpCatSel)||NEWS_CATS[0]; $('#qpCatLbl').textContent=c.name; $('#qpCatIc').style.background=c.color; $('#qpCatIc').innerHTML='<i class="fa-solid '+(c.icon||'fa-tag')+'"></i>'; $('#qpCatMenu').innerHTML=NEWS_CATS.map(x=>'<button data-cat="'+x.name+'"><span class="qp-cat-ic" style="background:'+x.color+'"><i class="fa-solid '+(x.icon||'fa-tag')+'"></i></span>'+x.name+'</button>').join(''); }
$('#qpCatBtn') && $('#qpCatBtn').addEventListener('click', e=>{ e.stopPropagation(); $('#qpCatMenu').hidden=!$('#qpCatMenu').hidden; });
$('#qpCatMenu') && $('#qpCatMenu').addEventListener('click', e=>{ const b=e.target.closest('button'); if(!b)return; fgToast('Nota DEV: esse botão de categoria aparece apenas para matriz / unidade principal. Unidades fazem post com categoriaId NULL'); qpCatSel=b.dataset.cat; qpCatRender(); $('#qpCatMenu').hidden=true; });
document.addEventListener('click', e=>{ if($('#qpCatMenu') && !e.target.closest('.qp-catwrap')) $('#qpCatMenu').hidden=true; });
var crAud='rede', crUnit=null;
function crUnitRender(){
  const m=$('#crUnitMenu'); if(!m) return;
  m.innerHTML='<button type="button" data-unit=""><i class="fa-solid fa-ban"></i>Não vincular unidade</button>'+
    STORES.map(s=>'<button type="button" data-unit="'+s.code+'"><span class="qp-unitini" style="background:'+s.color+'">'+s.ini+'</span>'+s.name+'</button>').join('');
}
$('#crUnitBtn') && $('#crUnitBtn').addEventListener('click', e=>{ e.stopPropagation(); const m=$('#crUnitMenu'); if(!m.innerHTML) crUnitRender(); m.hidden=!m.hidden; });
$('#crUnitMenu') && $('#crUnitMenu').addEventListener('click', e=>{
  const b=e.target.closest('button'); if(!b) return;
  fgToast('Nota DEV: apareço apenas para unidades quando elas têm mais de um vínculo empresarial');
  crUnit=b.dataset.unit||null;
  const s=STORES.find(x=>x.code===crUnit);
  $('#crUnitLbl').textContent = s ? s.name : 'Não vincular unidade';
  $('#crUnitMenu').hidden=true;
});
document.addEventListener('click', e=>{ const m=$('#crUnitMenu'); if(m && !e.target.closest('.cr-unitwrap')) m.hidden=true; });
$('#crAudBtn') && $('#crAudBtn').addEventListener('click', e=>{ e.stopPropagation(); const m=$('#crAudMenu'); m.hidden=!m.hidden; });
$('#crAudMenu') && $('#crAudMenu').addEventListener('click', e=>{ const b=e.target.closest('button'); if(!b) return; fgToast('Nota DEV: mostra apenas para EMPRESA PRINCIPAL / MATRIZ. Unidades sempre publica para TODOS'); crAud=b.dataset.aud; $('#crAudLbl').textContent=b.textContent.trim(); $('#crAudIc').className='fa-solid '+b.dataset.ic; $('#crAudSub').textContent='Publicando para '+b.dataset.sub; $('#crAudMenu').hidden=true; });
document.addEventListener('click', e=>{ if($('#crAudMenu') && !e.target.closest('.cr-audwrap')) $('#crAudMenu').hidden=true; });
var crCatSel=null;
function crCatRender(){
  const list=(typeof CATEGORIES!=='undefined')?CATEGORIES.filter(c=>c.active!==false):[];
  const c=list.find(x=>x.name===crCatSel)||list[0]; if(!c||!$('#crCatLbl')) return;
  crCatSel=c.name;
  $('#crCatLbl').textContent=c.name;
  $('#crCatIc').style.background=c.color;
  $('#crCatIc').innerHTML='<i class="fa-solid '+c.icon+'"></i>';
  $('#crCatMenu').innerHTML=list.map(x=>'<button type="button" data-cat="'+x.name+'"><span class="qp-cat-ic" style="background:'+x.color+'"><i class="fa-solid '+x.icon+'"></i></span>'+x.name+'</button>').join('');
}
$('#crCatBtn') && $('#crCatBtn').addEventListener('click', e=>{ e.stopPropagation(); const m=$('#crCatMenu'); m.hidden=!m.hidden; });
$('#crCatMenu') && $('#crCatMenu').addEventListener('click', e=>{ const b=e.target.closest('button'); if(!b) return; fgToast('Nota DEV: esse botão de categoria aparece apenas para matriz / unidade principal. Unidades fazem post com categoriaId NULL'); crCatSel=b.dataset.cat; crCatRender(); $('#crCatMenu').hidden=true; });
document.addEventListener('click', e=>{ if($('#crCatMenu') && !e.target.closest('.cr-catwrap')) $('#crCatMenu').hidden=true; });
crCatRender();
syncNewsCatSelect();
function newsViews(n){ return n.reactions*7 + (n.comments+((n.cmts&&n.cmts.length)||0))*11 + 140; }
$('#nmodNew') && $('#nmodNew').addEventListener('click', () => newsShow('feed'));
$('#nvNewBtn') && $('#nvNewBtn').addEventListener('click', () => qpOpen());
(function(){ const c=$('#nvFCat'); if(c) c.innerHTML='<option value="">Todas as categorias</option>'+NEWS_CATS.map(x=>'<option>'+x.name+'</option>').join(''); const a=$('#nvFAutor'); if(a){ const autores=[...new Set(NEWS.map(n=>n.autorNome||'Rodrigo Caetano'))]; a.innerHTML='<option value="">Todos os autores</option>'+autores.map(x=>'<option>'+x+'</option>').join(''); } ['nvFStatus','nvFCat','nvFReach','nvFAutor'].forEach(id=>{ const el=$('#'+id); if(el) el.addEventListener('change', renderNewsList); }); const cl=$('#nvFClear'); if(cl) cl.addEventListener('click', ()=>{ ['nvFStatus','nvFCat','nvFReach','nvFAutor'].forEach(id=>{const el=$('#'+id); if(el)el.value='';}); renderNewsList(); }); const ap=$('#nvFApply'); if(ap) ap.addEventListener('click', renderNewsList); })();
$('#nvfStart') && $('#nvfStart').addEventListener('click', () => qpOpen());
$('#nvfClear') && $('#nvfClear').addEventListener('click', ()=>{ nvFeedType='todos'; nvFeedCat=''; nvFeedAuthor=''; nvfAuthorQuery=''; nvFeedPeriod=''; nvFeedReach=''; nvFeedSort='recentes'; nvFeedMine=''; nvFeedText=''; var ts=$('#nvfTextSearch'); if(ts)ts.value=''; var hh=$('#nvfSearchHint'); if(hh)hh.hidden=true; var s=$('#nvfAuthorSearch'); if(s)s.value=''; var p=$('#nvfPeriod'); if(p)p.value=''; renderNewsFeed(); });
$('.nvf-layout') && $('.nvf-layout').addEventListener('click', function(e){
  var fi=e.target.closest('.nvf-fitem'); if(fi && fi.dataset.cat===undefined && fi.dataset.fq!==undefined){ nvFeedType=fi.dataset.fq; renderNewsFeed(); return; }
  var rc=e.target.closest('.nvf-reach'); if(rc){ nvFeedReach=rc.dataset.reach||''; renderNewsFeed(); return; }
  var mi=e.target.closest('.nvf-mine'); if(mi){ nvFeedMine=mi.dataset.mine||''; renderNewsFeed(); return; }
  var so=e.target.closest('.nvf-sort'); if(so){ nvFeedSort=so.dataset.sort; renderNewsFeed(); return; }
  var cc=e.target.closest('[data-cat]'); if(cc){ nvFeedCat=cc.dataset.cat; renderNewsFeed(); return; }
  var ai=e.target.closest('.nvf-aitem'); if(ai){ nvFeedAuthor = (nvFeedAuthor===ai.dataset.author?'':ai.dataset.author); renderNewsFeed(); return; }
});
$('#nvfAuthorBtn') && $('#nvfAuthorBtn').addEventListener('click', function(){ nvfAuthorQuery=''; var s=$('#nvfAuthorSearch'); if(s) s.value=''; renderNvfFilters(); $('#authorPickModal').classList.add('open'); });
$('#authorPickClose') && $('#authorPickClose').addEventListener('click', ()=>$('#authorPickModal').classList.remove('open'));
$('#authorPickModal') && $('#authorPickModal').addEventListener('click', function(e){ if(e.target===$('#authorPickModal')) $('#authorPickModal').classList.remove('open'); });
$('#nvfAuthorSearch') && $('#nvfAuthorSearch').addEventListener('input', function(e){ nvfAuthorQuery=e.target.value.trim(); nvfAuthorPage=1; renderNvfFilters(); });
$('#nvfAuthors') && $('#nvfAuthors').addEventListener('click', function(e){
  var to=e.target.closest('[data-apgto]'); if(to){ if(to.disabled) return; e.stopPropagation(); nvfAuthorPage=+to.dataset.apgto; renderNvfFilters(); return; }
  var pick=e.target.closest('[data-author]');
  if(pick){ nvFeedAuthor = (nvFeedAuthor===pick.dataset.author?'':pick.dataset.author); $('#authorPickModal').classList.remove('open'); renderNewsFeed(); return; }
  var b=e.target.closest('[data-apg]'); if(!b||b.disabled) return; e.stopPropagation(); nvfAuthorPage=Math.max(1,nvfAuthorPage+ +b.dataset.apg); renderNvfFilters();
});
$('#nvfPeriod') && $('#nvfPeriod').addEventListener('change', function(e){ nvFeedPeriod=e.target.value; renderNewsFeed(); });
$('#nvfTextSearch') && $('#nvfTextSearch').addEventListener('input', function(e){ nvFeedText=e.target.value.trim(); renderNewsFeed(); var hint=$('#nvfSearchHint'); if(hint){ if(nvFeedText){ hint.hidden=false; hint.textContent=document.querySelectorAll('#nvFeed .post').length+' resultado(s) para "'+nvFeedText+'"'; } else hint.hidden=true; } });
$('#nvfMinhas') && $('#nvfMinhas').addEventListener('click', function(){ nvFeedAuthor='SULTS'; renderNewsFeed(); });
$('#nvqImg').addEventListener('click', () => qpOpen('img'));
$('#nvqColor').addEventListener('click', () => qpOpen('color'));
$('#nvqAdv') && $('#nvqAdv').addEventListener('click', () => { qpOpen(); $('#qpAdv').click(); });
$('#nvqVideo') && $('#nvqVideo').addEventListener('click', () => qpOpen('video'));
$('#nvqArt').addEventListener('click', () => { nvFrom='feed'; nvResetCompose(); nvType='article'; $$('.nv-tipo-card[data-type]').forEach(c=>c.classList.toggle('sel',c.dataset.type==='article')); newsShow('compose'); nvGoStep('content'); });
/* Quick post modal */
const QP_COLORS=['linear-gradient(135deg,#0f5a63,#1aa0a0)','linear-gradient(135deg,#2a2578,#4b3fc7)','linear-gradient(135deg,#8e1f24,#c0392f)','linear-gradient(135deg,#0b3d2e,#1a7a54)','linear-gradient(135deg,#5e35b1,#8161d8)','linear-gradient(135deg,#e08a1e,#c25e00)','#1c2f3c'];
let qpColor=null, qpImg=null, qpImgs=[], qpVideo=null, qpBig=null, qpEmojiTarget='text';
function qpRenderColors(){ $('#qpColors').innerHTML='<span class="qp-color none'+(qpColor===null?' sel':'')+'" data-c=""><i class="fa-solid fa-ban"></i></span>'+QP_COLORS.map(c=>'<span class="qp-color'+(qpColor===c?' sel':'')+'" data-c="'+c+'" style="background:'+c+'"></span>').join('')+'<label class="qp-color custom" title="Escolher cor"><i class="fa-solid fa-eye-dropper"></i><input type="color" id="qpColorPick" value="#00acac"></label>'; }
function qpSetColor(c){ qpColor=c||null; const body=$('#qpBody'); const sub=$('#qpSub'); if(qpColor){ body.classList.add('colored'); body.style.background=qpColor; sub.hidden=false; (document.getElementById('qpBigEmoji')||{}).hidden=false; } else { body.classList.remove('colored'); body.style.background=''; sub.hidden=true; sub.value=''; (document.getElementById('qpBigEmoji')||{}).hidden=true; } qpRenderColors(); }
function qpOpen(mode){
  qpUnit=null; if($('#qpUnitLbl')) $('#qpUnitLbl').textContent='Não vincular unidade'; if($('#qpUnitMenu')) $('#qpUnitMenu').hidden=true; $('#qpText').value=''; qpSetColor(null); qpImg=null; qpImgs=[]; qpVideo=null; qpBig=null; (document.getElementById('qpBigEmojiVal')||{}).innerHTML='<i class="fa-regular fa-face-smile"></i>'; $('#qpImgWrap').hidden=true; qpRenderImgs(); $('#qpImgFile').value=''; $('#qpVideoFile')&&($('#qpVideoFile').value=''); $('#qpAdvPanel').hidden=true; $('#qpBody').style.display=''; $('#qpAdv').classList.remove('on'); { const tb=$('#qpBody').closest('.qp-modal').querySelector('.qp-tools'); if(tb) tb.style.display=''; } if($('#qpDefStart')){$('#qpDefStart').value='';$('#qpDefStartRow').style.display='none';$$('#qpDefStartSeg button').forEach(x=>x.classList.toggle('on',x.dataset.s==='now'));$('#qpDefEnd').value='';$('#qpDefEndRow').style.display='none';$$('#qpDefEndSeg button').forEach(x=>x.classList.toggle('on',x.dataset.s==='never'));$('#qpDefEmail').checked=true;$('#qpDefPush').checked=true;var _qpp=$('#qpDefPin'); if(_qpp) _qpp.checked=false;} $('#qpColors').classList.toggle('hidden', mode!=='color'); if($('#qpEmojis'))$('#qpEmojis').hidden=true; $('#qpPub').disabled=true; $('#qpBack').classList.add('open'); if(mode==='color'){ qpRenderColors(); qpSetColor(QP_COLORS[0]); $('#qpToolColor').classList.add('on'); } else { $('#qpToolColor').classList.remove('on'); } setTimeout(()=>$('#qpText').focus(),40); if(mode==='img') $('#qpImgFile').click(); if(mode==='video') $('#qpVideoFile').click(); }
function qpClose(){ $('#qpBack').classList.remove('open'); }
$('#qpX').addEventListener('click', qpClose);
$('#qpBack').addEventListener('click', e=>{ if(e.target===$('#qpBack')) qpClose(); });
$('#qpText').addEventListener('input', e=>{ $('#qpPub').disabled=!e.target.value.trim(); });
$('#qpColorExit') && $('#qpColorExit').addEventListener('click', ()=>{ qpSetColor(null); $('#qpColors').classList.add('hidden'); $('#qpColorBack').classList.add('hidden'); $('#qpToolColor').classList.remove('on'); });
$('#qpToolColor').addEventListener('click', ()=>{ const h=$('#qpColors').classList.toggle('hidden'); $('#qpColorBack').classList.toggle('hidden',h); $('#qpToolColor').classList.toggle('on',!h); if(!h){ qpRenderColors(); if(!qpColor) qpSetColor(QP_COLORS[0]); } else { qpSetColor(null); } });
$('#qpToolArt') && $('#qpToolArt').addEventListener('click', ()=>{ qpClose(); openNewsModule(); nvFrom='feed'; nvResetCompose(); nvType='article'; $$('.nv-tipo-card[data-type]').forEach(c=>c.classList.toggle('sel',c.dataset.type==='article')); newsShow('compose'); nvGoStep('content'); });
$('#qpToolImg').addEventListener('click', ()=>$('#qpImgFile').click());
$('#qpToolVideo') && $('#qpToolVideo').addEventListener('click', ()=>$('#qpVideoFile').click());
$('#qpVideoFile') && $('#qpVideoFile').addEventListener('change', e=>{ const f=e.target.files&&e.target.files[0]; if(!f) return; qpVideo=URL.createObjectURL(f); qpImgs=[]; qpImg=null; qpSetColor(null); $('#qpColors').classList.add('hidden'); qpRenderImgs(); $('#qpPub').disabled=false; });
$('#qpImgFile').addEventListener('change', e=>{ const fs=[...(e.target.files||[])]; if(!fs.length) return; const vid=fs.find(f=>f.type.startsWith('video')); if(vid){ qpVideo=URL.createObjectURL(vid); qpImgs=[]; qpImg=null; } else { fs.forEach(f=>qpImgs.push(URL.createObjectURL(f))); qpImg=qpImgs[0]; qpVideo=null; } qpRenderImgs(); qpSetColor(null); $('#qpColors').classList.add('hidden'); $('#qpPub').disabled=false; });
function qpRenderImgs(){ const g=$('#qpImgGrid'); $('#qpImgWrap').hidden=true; if(qpVideo){ g.hidden=false; g.className='qp-imggrid n1'; g.innerHTML='<div class="qp-imgcell"><video src="'+qpVideo+'" controls style="width:100%;max-height:380px;display:block;background:#000"></video><button class="qp-imgdel" data-vid="1"><i class="fa-solid fa-xmark"></i></button></div>'; return; } if(!qpImgs.length){ g.hidden=true; g.innerHTML=''; return; } g.hidden=false; g.className='qp-imggrid n'+Math.min(qpImgs.length,4); g.innerHTML=qpImgs.slice(0,4).map((src,i)=>{ const extra=(i===3&&qpImgs.length>4)?'<span class="qp-imgmore">+'+(qpImgs.length-4)+'</span>':''; return '<div class="qp-imgcell" draggable="true" data-i="'+i+'"><img src="'+src+'">'+extra+'<button class="qp-imgdel" data-i="'+i+'"><i class="fa-solid fa-xmark"></i></button></div>'; }).join(''); }
$('#qpImgGrid').addEventListener('click', e=>{ const d=e.target.closest('.qp-imgdel'); if(d){ if(d.dataset.vid){ qpVideo=null; $('#qpVideoFile')&&($('#qpVideoFile').value=''); qpRenderImgs(); $('#qpPub').disabled=!$('#qpText').value.trim(); return; } qpImgs.splice(+d.dataset.i,1); qpImg=qpImgs[0]||null; qpRenderImgs(); $('#qpPub').disabled=!$('#qpText').value.trim() && !qpImgs.length; return; } const cell=e.target.closest('.qp-imgcell'); if(cell && !qpVideo && qpImgs.length){ ieOpen(+cell.dataset.i||0); } });
/* Editor de imagens (reordenar) */
let ieSel=0;
function ieRender(){ if(ieSel>=qpImgs.length) ieSel=qpImgs.length-1; if(ieSel<0)ieSel=0; $('#ieMain').src=qpImgs[ieSel]||''; $('#ieCount').textContent=(ieSel+1)+' de '+qpImgs.length; $('#ieThumbs').innerHTML=qpImgs.map((src,i)=>'<div class="ie-thumb'+(i===ieSel?' sel':'')+'" data-i="'+i+'"><img src="'+src+'"><span class="ie-n">'+('0'+(i+1)).slice(-2)+'</span>'+(i>0?'<button class="ie-mv l" data-mv="l" data-i="'+i+'"><i class="fa-solid fa-arrow-left"></i></button>':'')+(i<qpImgs.length-1?'<button class="ie-mv r" data-mv="r" data-i="'+i+'"><i class="fa-solid fa-arrow-right"></i></button>':'')+'</div>').join(''); }
function ieOpen(i){ ieSel=i||0; $('#imgEditor').hidden=false; ieRender(); }
$('#ieClose').addEventListener('click', ()=>$('#imgEditor').hidden=true);
$('#ieDone').addEventListener('click', ()=>{ $('#imgEditor').hidden=true; qpImg=qpImgs[0]||null; qpRenderImgs(); });
$('#imgEditor').addEventListener('click', e=>{ if(e.target===$('#imgEditor')){ $('#imgEditor').hidden=true; qpRenderImgs(); } });
$('#ieThumbs').addEventListener('click', e=>{ const mv=e.target.closest('.ie-mv'); if(mv){ const i=+mv.dataset.i, to=mv.dataset.mv==='l'?i-1:i+1; if(to<0||to>=qpImgs.length)return; const m=qpImgs.splice(i,1)[0]; qpImgs.splice(to,0,m); ieSel=to; ieRender(); return; } const t=e.target.closest('.ie-thumb'); if(t){ ieSel=+t.dataset.i; ieRender(); } });
$('#ieDel').addEventListener('click', ()=>{ if(!qpImgs.length)return; qpImgs.splice(ieSel,1); if(!qpImgs.length){ $('#imgEditor').hidden=true; qpImg=null; qpRenderImgs(); return; } ieRender(); });
$('#ieDup').addEventListener('click', ()=>{ if(!qpImgs.length)return; qpImgs.splice(ieSel+1,0,qpImgs[ieSel]); ieRender(); });
$('#ieAdd').addEventListener('click', ()=>$('#ieFile').click());
$('#ieFile').addEventListener('change', e=>{ const fs=[...(e.target.files||[])]; fs.forEach(f=>qpImgs.push(URL.createObjectURL(f))); e.target.value=''; ieRender(); });
let qpDragI=null;
$('#qpImgGrid').addEventListener('dragstart', e=>{ const c=e.target.closest('.qp-imgcell'); if(!c) return; qpDragI=+c.dataset.i; c.classList.add('dragging'); });
$('#qpImgGrid').addEventListener('dragend', e=>{ const c=e.target.closest('.qp-imgcell'); if(c) c.classList.remove('dragging'); qpDragI=null; });
$('#qpImgGrid').addEventListener('dragover', e=>{ e.preventDefault(); });
$('#qpImgGrid').addEventListener('drop', e=>{ e.preventDefault(); const c=e.target.closest('.qp-imgcell'); if(c==null||qpDragI==null) return; const to=+c.dataset.i; if(to===qpDragI) return; const m=qpImgs.splice(qpDragI,1)[0]; qpImgs.splice(to,0,m); qpImg=qpImgs[0]||null; qpRenderImgs(); });
/* Lightbox de imagens */
let ilbList=[], ilbIdx=0;
function ilbShow(){ $('#ilbImg').src=ilbList[ilbIdx]; $('#ilbCount').textContent=(ilbIdx+1)+' de '+ilbList.length; $('#ilbPrev').style.display=$('#ilbNext').style.display=ilbList.length>1?'':'none'; }
function ilbOpen(list,i){ ilbList=list; ilbIdx=i||0; $('#imgLightbox').hidden=false; ilbShow(); }
$('#ilbClose').addEventListener('click', ()=>$('#imgLightbox').hidden=true);
$('#imgLightbox').addEventListener('click', e=>{ if(e.target===$('#imgLightbox')) $('#imgLightbox').hidden=true; });
$('#ilbPrev').addEventListener('click', ()=>{ ilbIdx=(ilbIdx-1+ilbList.length)%ilbList.length; ilbShow(); });
$('#ilbNext').addEventListener('click', ()=>{ ilbIdx=(ilbIdx+1)%ilbList.length; ilbShow(); });
document.addEventListener('keydown', e=>{ if($('#imgLightbox').hidden) return; if(e.key==='Escape')$('#imgLightbox').hidden=true; else if(e.key==='ArrowLeft')$('#ilbPrev').click(); else if(e.key==='ArrowRight')$('#ilbNext').click(); });
document.addEventListener('click', e=>{ const cell=e.target.closest('.post-imggrid .pig-cell'); if(!cell) return; const grid=cell.closest('.post-imggrid'); let imgs=[]; try{ imgs=JSON.parse((grid.getAttribute('data-imgs')||'[]').replace(/&#39;/g,"'")); }catch(_){} if(imgs.length) ilbOpen(imgs, +cell.dataset.i||0); });
$('#qpImgX').addEventListener('click', ()=>{ qpImgs=[]; qpImg=null; $('#qpImgFile').value=''; qpRenderImgs(); $('#qpPub').disabled=!$('#qpText').value.trim(); });
const QP_EMOJIS=['😀','😄','😁','🤣','😊','😍','😘','😉','🙌','👏','👍','🙏','💪','🔥','✨','🎉','🎊','❤️','💙','💚','🚀','⭐','✅','💡','📈','🎯','👋','🤝','🙋','😎','🥳','😂'];
$('#qpEmojis').innerHTML=QP_EMOJIS.map(e=>'<span>'+e+'</span>').join('');
$('#qpToolEmoji').addEventListener('click', e=>{ e.stopPropagation(); qpEmojiTarget='text'; $('#qpEmojis').hidden=!$('#qpEmojis').hidden; });
$('#qpEmojis').addEventListener('click', e=>{ const s=e.target.closest('span'); if(!s) return; if(qpEmojiTarget==='big'){ qpBig=s.textContent; (document.getElementById('qpBigEmojiVal')||{}).textContent=qpBig; $('#qpEmojis').hidden=true; return; } const ta=$('#qpText'); const st=ta.selectionStart||ta.value.length, en=ta.selectionEnd||ta.value.length; ta.value=ta.value.slice(0,st)+s.textContent+ta.value.slice(en); const pos=st+s.textContent.length; ta.focus(); ta.setSelectionRange(pos,pos); $('#qpPub').disabled=!ta.value.trim(); $('#qpEmojis').hidden=true; });
document.addEventListener('click', e=>{ if(!e.target.closest('#qpToolEmoji')&&!e.target.closest('#qpEmojis')){ const ep=$('#qpEmojis'); if(ep) ep.hidden=true; } });
$('#qpColors').addEventListener('click', e=>{ const s=e.target.closest('.qp-color'); if(!s||s.classList.contains('custom')) return; qpSetColor(s.dataset.c); });
$('#qpColors').addEventListener('input', e=>{ const p=e.target.closest('#qpColorPick'); if(!p) return; qpSetColor('linear-gradient(135deg,'+p.value+','+p.value+')'); });
$('#qpAdv').addEventListener('click', ()=>{ advMoveAud('qpAudSlot','qpAudBtn','qpAudMenu'); const p=$('#qpAdvPanel'); const show=p.hidden; p.hidden=!show; $('#qpBody').style.display=show?'none':''; $('#qpColors').classList.add('hidden'); $('#qpAdv').classList.toggle('on',show); const tb=$('#qpBody').closest('.qp-modal').querySelector('.qp-tools'); if(tb) tb.style.display=show?'none':''; });
$('#qpAdvBack') && $('#qpAdvBack').addEventListener('click', ()=>{ fgToast('Nota DEV: esse botão de avançado aparece apenas para Unidade principal / Matriz. Nunca aparece para unidades'); $('#qpAdv').click(); });
$('#qpDefStartSeg').addEventListener('click', e=>{ const b=e.target.closest('button'); if(!b)return; $$('#qpDefStartSeg button').forEach(x=>x.classList.toggle('on',x===b)); const s=b.dataset.s==='sched'; $('#qpDefStartRow').style.display=s?'flex':'none'; if(!s)$('#qpDefStart').value=''; });
$('#qpDefEndSeg').addEventListener('click', e=>{ const b=e.target.closest('button'); if(!b)return; $$('#qpDefEndSeg button').forEach(x=>x.classList.toggle('on',x===b)); const d=b.dataset.s==='date'; $('#qpDefEndRow').style.display=d?'flex':'none'; if(!d)$('#qpDefEnd').value=''; });
$('#qpPub').addEventListener('click', ()=>{ const v=$('#qpText').value.trim(); if(!v && !qpImgs.length && !qpVideo) return; const item={ id:Date.now(), text:v, video:qpVideo||null, image:qpImgs[0]||null, images:qpImgs.length?qpImgs.slice():null, colorBg:(qpImgs.length||qpVideo)?null:qpColor, colorSub:((!qpImgs.length&&!qpVideo&&qpColor)?$('#qpSub').value.trim():''), colorEmoji:((!qpImgs.length&&!qpVideo&&qpColor)?qpBig:null), author:'SULTS', av:null, sub:qpCatSel||'Comunicados oficiais', date:'agora', datetime:nvNowStr(), reach:'rede', reactions:0, comments:0, status:'pub', pinned:($('#qpDefPin')&&(($('#qpDefPin')||{}).checked))||false }; if(pmPostNeedsApproval()){ item.status='draft'; item.pendingApproval=true; item.author='Rodrigo Caetano'; item.av='av-rc'; item.ini='RC'; pubApprAdd(item); qpClose(); fgToast('Publicação enviada para aprovação'); }
 else { NEWS.unshift(item); addHomePost(item); renderNewsFeed(); qpClose(); fgToast('Publicação criada'); } });
function pmPostNeedsApproval(){ return false; }
$('#nvFeed').addEventListener('click', e => {
  const art = e.target.closest('.post[data-id]'); if(!art) return; const id=+art.dataset.id; const n=NEWS.find(x=>x.id===id); if(!n) return;
  const pa = e.target.closest('[data-act="pubapr"],[data-act="pubrej"]');
  if(pa){
    e.stopPropagation();
    if(pa.dataset.act==='pubapr'){
      n.pendAppr=false;
      if(typeof PUB_APPR!=='undefined'){ PUB_APPR=PUB_APPR.filter(x=>x.paid!==n.paid); }
      n.apprStatus='aprovado'; n.decidedBy='Rodrigo Caetano'; n.decidedAt=aprDT();
      if(typeof PUB_HIST!=='undefined') PUB_HIST.unshift(n);
      if(typeof aprBadges==='function') aprBadges();
      renderNewsFeed(); fgToast('Publicação aprovada');
    } else {
      askReject(function(motivo){
        n.motivo=motivo; n.pendAppr=false; n.status='draft';
        if(typeof PUB_APPR!=='undefined'){ PUB_APPR=PUB_APPR.filter(x=>x.paid!==n.paid); }
        n.apprStatus='rejeitado'; n.decidedBy='Rodrigo Caetano'; n.decidedAt=aprDT();
        if(typeof PUB_HIST!=='undefined') PUB_HIST.unshift(n);
        if(typeof aprBadges==='function') aprBadges();
        renderNewsFeed(); fgToast('Publicação recusada');
      });
    }
    return;
  }
  const cd = e.target.closest('.comment-dots');
  if(cd){ e.stopPropagation(); const d=cd.nextElementSibling; const was=d.hidden; $$('#nvFeed .comment-drop').forEach(x=>x.hidden=true); d.hidden=!was; return; }
  const cdel = e.target.closest('[data-cmdel]');
  if(cdel){
    e.stopPropagation();
    n.cmts.splice(+cdel.dataset.cmdel,1);
    const row=cdel.closest('.comment'); if(row) row.remove();
    fgToast('Comentário excluído'); return;
  }
  const cl = e.target.closest('[data-cmlike]');
  if(cl){
    e.stopPropagation();
    const c=(n.cmts||[])[+cl.dataset.cmlike]; if(!c) return;
    c.liked=!c.liked; c.likes=(c.likes||0)+(c.liked?1:-1); if(c.likes<0) c.likes=0;
    cl.classList.toggle('liked', !!c.liked);
    cl.innerHTML='<i class="fa-'+(c.liked?'solid':'regular')+' fa-thumbs-up"></i> '+(c.liked?'Curtido':'Gostei');
    const lw=cl.parentElement.querySelector('.comment-likes');
    if(lw){ lw.querySelector('b').textContent=c.likes||0; lw.style.display=c.likes?'':'none'; }
    return;
  }
  const ca = e.target.closest('[data-cmapr],[data-cmrej]');
  if(ca){
    e.stopPropagation();
    const ci=+(ca.dataset.cmapr!=null?ca.dataset.cmapr:ca.dataset.cmrej);
    const c=(n.cmts||[])[ci]; if(!c) return;
    const ok=ca.dataset.cmapr!=null;
    function done(status){
      if(c.mid!=null && typeof modRemove==='function') modRemove(c.mid, status);
      else if(typeof aprBadges==='function') aprBadges();
      renderNewsFeed();
    }
    if(ok){ c.pend=false; done('aprovado'); fgToast('Comentário aprovado'); }
    else { askReject(function(){ n.cmts=n.cmts.filter((x,k)=>k!==ci); done('rejeitado'); fgToast('Comentário recusado'); }); }
    return;
  }
  const mi = e.target.closest('[data-menu]');
  if (mi){ const a=mi.dataset.menu; art.querySelector('.nvf-menu').hidden=true; if(a==='edit') nvEdit(id); else if(a==='del'){ NEWS=NEWS.filter(x=>x.id!==id); renderNewsFeed(); fgToast('Publicação excluída'); } else if(a==='pin'){ n.pinned=!n.pinned; renderNewsFeed(); fgToast(n.pinned?'Fixada no topo':'Desafixada'); } else fgToast('Link copiado'); return; }
  const cc = e.target.closest('.post-stats .right');
  if(cc){ e.stopPropagation(); const cm=art.querySelector('.nvf-cm'); if(cm){ cm.hidden=false; const inp=cm.querySelector('.nvf-cm-in'); if(inp) inp.focus(); } return; }
  const rs = e.target.closest('.post-stats');
  if(rs && !e.target.closest('.post-stats .right')){ e.stopPropagation(); openReactions(nvRxIndex(id)); return; }
  const pollOpt = e.target.closest('[data-poll]');
  if (pollOpt && n.poll && n.poll.voted==null){ n.poll.options[+pollOpt.dataset.poll].v++; n.poll.voted=+pollOpt.dataset.poll; renderNewsFeed(); return; }
  const b = e.target.closest('[data-act]'); if(!b) return; const act=b.dataset.act;
  if (act==='read'){ openArticle(n); return; }
  if (act==='open'){ openArticle(n); return; }
  if (act==='like'){ e.stopPropagation(); nvRxPicker(b, art, n, true); }
  else if (act==='comment'){ const cm=art.querySelector('.nvf-cm'); cm.hidden=!cm.hidden; if(!cm.hidden) cm.querySelector('.nvf-cm-in').focus(); }
  else if (act==='cmsend'){ const inp=art.querySelector('.nvf-cm-in'); const v=inp.value.trim(); if(!v) return; const pend=pmNeedsApproval(); const list=art.querySelector('.nvf-cm-list'); if(pend){ const it=document.createElement('div'); it.className='nvf-cm-item pending'; it.innerHTML='<span class="avatar av-rc"></span><div><div class="nvf-cm-bub"><b>Rodrigo Caetano</b><span>'+v+'</span></div><div class="comment-pend"><i class="fa-solid fa-clock"></i> Aguardando aprovação</div><div class="comment-mod"><button class="cmod-ok"><i class="fa-solid fa-check"></i> Aprovar</button><button class="cmod-no"><i class="fa-solid fa-xmark"></i> Recusar</button></div></div>'; list.appendChild(it); it.querySelector('.cmod-ok').addEventListener('click',()=>{ it.classList.remove('pending'); it.querySelector('.comment-pend').remove(); it.querySelector('.comment-mod').remove(); (n.cmts=n.cmts||[]).push({author:'Rodrigo Caetano',av:'av-rc',text:v}); art.querySelector('.nvf-cc').textContent=(n.comments+n.cmts.length)+' comentários'; modRemove(mq.mid); fgToast('Comentário aprovado'); }); it.querySelector('.cmod-no').addEventListener('click',()=>{ it.remove(); modRemove(mq.mid); fgToast('Comentário recusado'); }); const mq={author:'Rodrigo Caetano',av:'av-rc',text:v,post:(n.title||'Publicação'),approve:()=>{ it.classList.remove('pending'); const pe=it.querySelector('.comment-pend'); if(pe)pe.remove(); const me=it.querySelector('.comment-mod'); if(me)me.remove(); (n.cmts=n.cmts||[]).push({author:'Rodrigo Caetano',av:'av-rc',text:v}); art.querySelector('.nvf-cc').textContent=(n.comments+n.cmts.length)+' comentários'; },reject:()=>it.remove()}; modAdd(mq); fgToast('Comentário enviado para aprovação'); } else { (n.cmts=n.cmts||[]).push({author:'Rodrigo Caetano',av:'av-rc',text:v}); list.insertAdjacentHTML('beforeend','<div class="nvf-cm-item"><span class="avatar av-rc"></span><div class="nvf-cm-bub"><b>Rodrigo Caetano</b><span>'+v+'</span></div></div>'); art.querySelector('.nvf-cc').textContent=(n.comments+n.cmts.length)+' comentários'; } inp.value=''; b.disabled=true; }
  else if (act==='more'){ const m=art.querySelector('.nvf-menu'); const wasHidden=m.hidden; $$('#nvFeed .nvf-menu').forEach(x=>x.hidden=true); m.hidden=!wasHidden; }
});
$('#nvFeed').addEventListener('input', e => { const inp=e.target.closest('.nvf-cm-in'); if(!inp) return; inp.parentNode.querySelector('.nvf-cm-send').disabled=!inp.value.trim(); });
$('#nvFeed').addEventListener('keydown', e => { const inp=e.target.closest('.nvf-cm-in'); if(inp && e.key==='Enter'){ e.preventDefault(); const s=inp.parentNode.querySelector('.nvf-cm-send'); if(!s.disabled) s.click(); } });
document.addEventListener('click', e => { if(!e.target.closest('.post-more') && !e.target.closest('.nvf-menu')) $$('#nvFeed .nvf-menu').forEach(m=>m.hidden=true); });
$('#nvBack').addEventListener('click', () => newsShow(nvFrom));
