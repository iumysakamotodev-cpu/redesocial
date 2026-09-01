/* modulo Forum */
/* ===================== MÓDULO FÓRUM ===================== */
const FO_GROUPS = [
  { id:'gu',  name:'Gestores de Unidade',    desc:'Rede de gestores trocando práticas do dia a dia', color:'#34597a', icon:'fa-users',           privacy:'restrito', members:312, topics:148, unread:true  },
  { id:'mkt', name:'Marketing & Trade',       desc:'Campanhas, artes e ações locais',              color:'#f0327e', icon:'fa-palette',         privacy:'aberto',   members:96,  topics:57,  unread:false },
  { id:'nf',  name:'Novos Franqueados 2026',  desc:'Onboarding e primeiros passos na rede',        color:'#00acac', icon:'fa-rocket',          privacy:'secreto',  members:28,  topics:19,  unread:false },
  { id:'op',  name:'Operação & Checklists',   desc:'Rotinas, auditorias e checklists de loja',     color:'#27a689', icon:'fa-clipboard-check', privacy:'aberto',   members:204, topics:132, unread:true  }
];
const FO_DISCOVER = [
  { id:'cmp', name:'Compras em rede',            desc:'Negociações e fornecedores homologados', color:'#e08e00', icon:'fa-cart-shopping', privacy:'aberto',   members:141, topics:63 },
  { id:'tec', name:'Tecnologia & Integrações',  desc:'APIs, SULTS Open e automações',        color:'#2f6fe4', icon:'fa-gear',          privacy:'restrito', members:74,  topics:38 }
];
const FO_TOPICS = {
  op:[
    { id:'t0', pinned:true, title:'Regras do grupo e boas-vindas', snippet:'Leia antes de postar. Combinados de convivência do grupo.', author:'Matheus Scussel', av:'av-ms', role:'COO', unit:'Matriz', time:'há 1 mês', replies:4, views:980, resolved:false, tags:['avisos'] },
    { id:'t1', title:'Como vocês organizam o fechamento de caixa aos domingos?', snippet:'Domingo o movimento é alto e a equipe reduzida. Queria entender a rotina de vocês.', author:'Rafael Nunes', av:'av-pl', role:'Gestor de unidade', unit:'Boatlux Litoral 01', time:'há 3 h', replies:23, views:412, resolved:true, tags:['caixa','rotina'], lastAv:'av-lf', lastTime:'há 20 min' },
    { id:'t2', title:'Checklist de abertura em lojas de rua: o que não pode faltar?', snippet:'Montando um checklist de abertura e queria referências da rede.', author:'Marina Dias', av:'av-cm', role:'Gestora de unidade', unit:'Centro 02', time:'há 40 min', replies:0, views:37, resolved:false, unanswered:true, tags:['checklist','abertura'] },
    { id:'t3', title:'Rotina de auditoria mensal: frequência ideal?', snippet:'Auditoria mensal x quinzenal, o que funciona melhor na prática?', author:'Thiago Melo', av:'av-js', role:'Gestor de unidade', unit:'Shopping Sul', time:'há 5 h', replies:11, views:203, resolved:false, tags:['auditoria'], lastAv:'av-pl', lastTime:'há 2 h' },
    { id:'op4', title:'Padrão de vitrine: com que frequência trocar?', snippet:'Qual a periodicidade ideal de troca de vitrine que dá resultado sem pesar na equipe?', author:'Ana Souza', av:'av-as', role:'Gestora de unidade', unit:'Shopping Norte', time:'há 6 h', replies:7, views:158, resolved:true, tags:['vitrine','padrão'], lastAv:'av-cm', lastTime:'há 1 h' },
    { id:'op5', title:'Como reduzir quebra de estoque no fim do mês?', snippet:'Estamos com quebra acima da meta. O que tem funcionado aí?', author:'Guilherme Reis', av:'av-wm', role:'Gestor de unidade', unit:'Centro 05', time:'ontem', replies:14, views:276, resolved:false, tags:['estoque','perdas'], lastAv:'av-js', lastTime:'há 3 h' }
  ],
  gu:[
    { id:'gu0', pinned:true, title:'Boas-vindas aos gestores, comece por aqui', snippet:'Como aproveitar melhor este grupo e as trocas entre unidades.', author:'Matheus Scussel', av:'av-ms', role:'COO', unit:'Matriz', time:'há 2 meses', replies:9, views:1240, resolved:false, tags:['avisos'] },
    { id:'gu1', title:'Escala de equipe em feriados prolongados', snippet:'Como vocês montam a escala sem estourar o banco de horas?', author:'Marina Dias', av:'av-cm', role:'Gestora de unidade', unit:'Centro 02', time:'há 2 h', replies:18, views:321, resolved:true, tags:['equipe','escala'], lastAv:'av-lf', lastTime:'há 25 min' },
    { id:'gu2', title:'Meta de conversão: quanto é saudável para loja de rua?', snippet:'Buscando um benchmark de conversão entre as unidades da rede.', author:'Thiago Melo', av:'av-wm', role:'Gestor de unidade', unit:'Shopping Sul', time:'há 5 h', replies:12, views:264, resolved:false, tags:['metas','vendas'], lastAv:'av-pl', lastTime:'há 1 h' },
    { id:'gu3', title:'Turnover alto no caixa: como vocês seguram o time?', snippet:'Perdi dois operadores em um mês. Dicas de retenção?', author:'Guilherme', av:'av-pl', role:'Gestor de unidade', unit:'Praia Grande 03', time:'há 30 min', replies:0, views:41, resolved:false, unanswered:true, tags:['pessoas','retenção'] }
  ],
  mkt:[
    { id:'mkt0', title:'Kit de artes do Dia das Mães já está no ar', snippet:'Baixem os materiais e adaptem para a realidade da sua unidade.', author:'Paola Nunes', av:'av-as', role:'Marketing · Pit Stop Barra', unit:'Matriz', time:'há 1 d', replies:16, views:512, resolved:false, tags:['campanha','artes'], lastAv:'av-cm', lastTime:'há 2 h' },
    { id:'mkt1', title:'Tráfego pago local: vale a pena para a unidade?', snippet:'Alguém já rodou campanha geolocalizada? Qual retorno?', author:'Ellen Rocha', av:'av-gc', role:'Marketing · Pit Stop Barra', unit:'Regional Sul', time:'há 4 h', replies:21, views:389, resolved:true, tags:['tráfego','local'], lastAv:'av-pl', lastTime:'há 40 min' },
    { id:'mkt2', title:'Como vocês medem o ROI das ações locais?', snippet:'Buscando um modelo simples de acompanhar retorno de ações de bairro.', author:'Ana Souza', av:'av-as', role:'Marketing · Pit Stop Barra', unit:'Matriz', time:'há 6 h', replies:8, views:174, resolved:false, tags:['roi','métricas'], lastAv:'av-wm', lastTime:'há 3 h' },
    { id:'mkt3', title:'Ideia: parceria com comércio vizinho', snippet:'Testamos cupom cruzado com a cafeteria do lado e funcionou bem.', author:'Gisele Prado', av:'av-cm', role:'Gestora de unidade', unit:'Centro 02', time:'ontem', replies:5, views:132, resolved:false, tags:['parcerias'], lastAv:'av-as', lastTime:'há 5 h' }
  ],
  nf:[
    { id:'nf0', pinned:true, title:'Trilha dos primeiros 90 dias', snippet:'O passo a passo recomendado para quem está começando agora.', author:'Livia Fernandes', av:'av-lf', role:'Head de CS', unit:'Matriz', time:'há 3 semanas', replies:12, views:640, resolved:false, tags:['onboarding'] },
    { id:'nf1', title:'Dúvida na implantação: por onde começar no SULTS?', snippet:'Recebi meu acesso essa semana. Qual módulo configurar primeiro?', author:'Guilherme Reis', av:'av-wm', role:'Franqueado', unit:'Novo, Vila Nova 01', time:'há 2 h', replies:9, views:143, resolved:true, tags:['implantação'], lastAv:'av-lf', lastTime:'há 30 min' },
    { id:'nf2', title:'Quanto tempo até a loja operar 100%?', snippet:'Curioso pra saber a experiência de quem abriu recentemente.', author:'Eduardo Lima', av:'av-bo', role:'Franqueado', unit:'Novo, Centro 05', time:'há 5 h', replies:6, views:98, resolved:false, tags:['abertura'], lastAv:'av-pl', lastTime:'há 2 h' },
    { id:'nf3', title:'Apresentação: acabei de entrar na rede!', snippet:'Olá a todos, animado para aprender com vocês.', author:'Paola Nunes', av:'av-as', role:'Franqueada', unit:'Novo, Praia Grande 03', time:'há 20 min', replies:3, views:54, resolved:false, tags:['apresentação'], lastAv:'av-lf', lastTime:'há 5 min' }
  ],
  cmp:[
    { id:'cmp0', title:'Fornecedor homologado de embalagens: indicações?', snippet:'Procurando fornecedor com bom prazo e preço para a regional.', author:'Guilherme', av:'av-pl', role:'Compras', unit:'Regional Sudeste', time:'há 3 h', replies:13, views:210, resolved:true, tags:['fornecedores'], lastAv:'av-ms', lastTime:'há 1 h' },
    { id:'cmp1', title:'Compra conjunta de uniformes, quem topa?', snippet:'Juntando volume de várias unidades para negociar melhor.', author:'Gisele Prado', av:'av-cm', role:'Gestora de unidade', unit:'Centro 02', time:'há 6 h', replies:19, views:288, resolved:false, tags:['negociação'], lastAv:'av-wm', lastTime:'há 2 h' },
    { id:'cmp2', title:'Prazo de reposição está aumentando?', snippet:'Notei atraso do fornecedor central. Está acontecendo com vocês?', author:'Eduardo Lima', av:'av-bo', role:'Gestor de unidade', unit:'Centro 05', time:'ontem', replies:7, views:141, resolved:false, tags:['logística'], lastAv:'av-pl', lastTime:'há 4 h' }
  ],
  tec:[
    { id:'tec0', pinned:true, title:'SULTS Open em beta, como pedir acesso', snippet:'Passo a passo para gerar sua chave de API e testar o MCP server.', author:'Guilherme Reis', av:'av-wm', role:'CTO', unit:'Matriz', time:'há 1 semana', replies:15, views:720, resolved:false, tags:['api','open'] },
    { id:'tec1', title:'Integração com ERP: alguém já fez?', snippet:'Quero sincronizar estoque com nosso ERP. Dicas de quem já integrou?', author:'Eduardo Lima', av:'av-bo', role:'TI', unit:'Regional Sul', time:'há 4 h', replies:10, views:196, resolved:true, tags:['integração','erp'], lastAv:'av-wm', lastTime:'há 1 h' },
    { id:'tec2', title:'Automatizar relatório semanal via API', snippet:'Pensando em puxar os indicadores automaticamente toda segunda.', author:'Ellen Rocha', av:'av-gc', role:'Dados', unit:'Matriz', time:'há 7 h', replies:6, views:118, resolved:false, tags:['automação'], lastAv:'av-ms', lastTime:'há 3 h' }
  ]
};
const FO_MEMBERS = [
  { name:'Matheus Scussel', av:'av-ms', role:'COO · Matriz',                gr:'admin', grl:'Administrador' },
  { name:'Livia Fernandes', av:'av-lf', role:'Head de CS · Matriz',          gr:'mod',   grl:'Administrador' },
  { name:'Rafael Nunes',    av:'av-pl', role:'Gestor · Boatlux Litoral 01',  gr:'mem',   grl:'Membro' },
  { name:'Marina Dias',     av:'av-cm', role:'Gestora · Centro 02',          gr:'mem',   grl:'Membro' },
  { name:'Thiago Melo',     av:'av-js', role:'Gestor · Shopping Sul',        gr:'mem',   grl:'Membro' }
];
const FO_PENDING = [
  { name:'Beatriz Lopes',   av:'av-as', unit:'Praia Grande 03' },
  { name:'Lucas Prado',     av:'av-pl', unit:'Norte Shopping' },
  { name:'Fernanda Rocha',  av:'av-cm', unit:'Vila Nova 01' },
  { name:'Bruno Alves',     av:'av-js', unit:'Centro 05' }
];
const FO_REPLIES = {};
const FO_COMMENTERS = [
  {name:'Livia Fernandes',av:'av-lf',role:'Head de CS · Matriz'},
  {name:'Pedro Lima',av:'av-pl',role:'Comercial · Matriz'},
  {name:'Ana Souza',av:'av-as',role:'Marketing · Matriz'},
  {name:'João Santos',av:'av-js',role:'Suporte · Matriz'},
  {name:'Marina Dias',av:'av-cm',role:'Gestora · Centro 02'},
  {name:'Thiago Melo',av:'av-wm',role:'Gestor · Shopping Sul'},
  {name:'Matheus Scussel',av:'av-ms',role:'COO · Matriz'},
  {name:'Gisele Prado',av:'av-gc',role:'Gestora · Praia Grande 03'}
];
const FO_CTEXTS = [
  'Boa pergunta! Aqui a gente resolveu padronizando o processo e treinando bem a equipe.',
  'Passamos exatamente por isso. O que funcionou foi documentar tudo no SULTS e revisar toda semana.',
  'Complementando os colegas: vale começar pequeno e ir ajustando com o feedback da operação.',
  'Na minha unidade adotamos uma checklist específica e a diferença foi enorme.',
  'Isso variou bastante pra gente até definirmos um responsável fixo. Recomendo muito.',
  'Ótimo tema. Posso compartilhar o modelo que usamos aqui, me chamem no privado.',
  'Testamos algumas abordagens e a mais simples foi a que trouxe mais resultado.',
  'Concordo com o pessoal: o segredo foi consistência e acompanhamento perto do time.'
];
function foHash(s){ let h=0; for(let i=0;i<s.length;i++) h=(h*31+s.charCodeAt(i))>>>0; return h; }
function foTopicReplies(t){
  const n = Math.min(t.replies||0, 4);
  let out='';
  for(let i=0;i<n;i++){
    const c = FO_COMMENTERS[(foHash(t.id)+i)%FO_COMMENTERS.length];
    const txt = FO_CTEXTS[(foHash(t.id)+i*3)%FO_CTEXTS.length];
    out += foReplyHTML(c.name,c.av,c.role,txt, i===1 && n>2);
  }
  return out;
}

const forumView = $('#forumView');
const foBody = $('#foBody');
const foScroll = $('#foScroll');
let foState = { screen:'home', group:null, topic:null, tab:'disc', filter:'todos' };

function foIni(n){ return n.split(' ').filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase(); }
function foPriv(p){ return {aberto:'Aberto',restrito:'Restrito',secreto:'Secreto'}[p] || ''; }
function foGroupById(id){ return FO_GROUPS.concat(FO_DISCOVER).find(g => g.id === id); }

function foGcardHTML(g, discover){
  const foot = discover
    ? '<button class="fo-join" data-join="'+g.id+'">'+(g.privacy==='aberto'?'Participar':'Pedir entrada')+'</button>'
    : '<span>'+g.members+' membros · '+g.topics+' tópicos</span>'+(g.unread?'<span class="fo-unread"></span>':'');
  return '<div class="fo-gcard" data-group="'+g.id+'">'+
    '<div class="fo-cover" style="background:'+g.color+'"><i class="fa-solid '+g.icon+' fo-wm"></i></div>'+
    '<div class="fo-gchip" style="background:'+g.color+'"><i class="fa-solid '+g.icon+'"></i></div>'+
    '<div class="fo-gbody">'+
      '<div class="fo-gname">'+g.name+'<span class="fo-priv">'+foPriv(g.privacy)+'</span></div>'+
      '<div class="fo-gdesc">'+g.desc+'</div>'+
      '<div class="fo-gfoot">'+foot+'</div>'+
    '</div></div>';
}

function foRenderHome(){
  foBody.innerHTML =
    '<div class="fo-head"><div><h1>Fórum</h1><div class="fo-sub">Troque experiências com toda a rede</div></div>'+
      '<div class="fo-head-actions">'+
        '<div class="fo-search"><i class="fa-solid fa-magnifying-glass"></i><input placeholder="Buscar no fórum"></div>'+
        '<button class="fo-btn" id="foCreate"><i class="fa-solid fa-plus"></i> Criar grupo</button>'+
      '</div></div>'+
    '<div class="fo-sectitle">Meus grupos</div>'+
    '<div class="fo-grid">'+FO_GROUPS.map(g=>foGcardHTML(g,false)).join('')+'</div>'+
    '<div class="fo-sectitle">Descobrir</div>'+
    '<div class="fo-grid">'+FO_DISCOVER.map(g=>foGcardHTML(g,true)).join('')+'</div>';
}

function foTopicRowHTML(t){
  const tags = (t.tags||[]).map(x=>'<span class="fo-ttag" style="color:var(--gc);background:var(--gc-tint)">'+x+'</span>').join('');
  const resolved = t.resolved ? '<span class="fo-resolved"><i class="fa-solid fa-check"></i> Resolvido</span>' : '';
  const pin = t.pinned ? '<span class="fo-pin"><i class="fa-solid fa-thumbtack"></i> FIXADO</span>' : '';
  const side = t.pinned ? '' :
    '<div class="fo-tside"><span>'+t.replies+' respostas · '+t.views+' visualizações</span>'+
    (t.lastAv?'<span class="fo-tlast"><span class="avatar '+t.lastAv+'"></span>'+t.lastTime+'</span>':'')+'</div>';
  return '<div class="fo-trow'+(t.pinned?' pinned':'')+'" data-topic="'+t.id+'">'+
    '<span class="avatar '+t.av+'">'+foIni(t.author)+'</span>'+
    '<div class="fo-tmain">'+
      '<div class="fo-ttitle">'+pin+t.title+resolved+'</div>'+
      '<div class="fo-tsnip">'+t.snippet+'</div>'+
      '<div class="fo-tmeta">'+t.author+' · '+t.unit+' · '+t.time+' '+tags+'</div>'+
    '</div>'+side+'</div>';
}

function foRenderGroup(){
  const g = foGroupById(foState.group);
  const av = ['av-lf','av-pl','av-ms','av-cm','av-js'].map(a=>'<span class="avatar '+a+'"></span>').join('');
  const tab = (id,label)=>'<button class="fo-tab'+(foState.tab===id?' on':'')+'" data-tab="'+id+'">'+label+'</button>';
  let content = '';
  if (foState.tab === 'disc'){
    let topics = (FO_TOPICS[g.id]||[]).slice();
    const chips = [['todos','Todos'],['semresp','Sem resposta'],['resolvidos','Resolvidos'],['meus','Meus tópicos']]
      .map(c=>'<button class="fo-fchip'+(foState.filter===c[0]?' on':'')+'" data-filter="'+c[0]+'">'+c[1]+'</button>').join('');
    let list = topics.filter(t=>!t.pinned);
    if (foState.filter==='semresp') list = list.filter(t=>t.unanswered);
    else if (foState.filter==='resolvidos') list = list.filter(t=>t.resolved);
    else if (foState.filter==='meus') list = [];
    const pinned = topics.filter(t=>t.pinned).map(t=>'<div class="fo-tlist" style="margin-bottom:12px">'+foTopicRowHTML(t)+'</div>').join('');
    const listHTML = list.length
      ? '<div class="fo-tlist">'+list.map(foTopicRowHTML).join('')+'</div>'
      : '<div class="fo-empty"><i class="fa-regular fa-face-smile"></i><div class="t">'+(foState.filter==='semresp'?'Nenhum tópico sem resposta 🎉':'Nada por aqui')+'</div><div class="s">Ajuste o filtro para ver mais discussões.</div></div>';
    content =
      '<div class="fo-toolbar"><button class="fo-btn" id="foNewTopic"><i class="fa-solid fa-plus"></i> Novo tópico</button>'+
        '<div class="fo-chips">'+chips+'</div></div>'+
      (foState.filter==='todos'?pinned:'')+listHTML;
  } else if (foState.tab === 'mem'){
    const pend = '<div class="fo-pending"><h3>Pedidos de entrada ('+FO_PENDING.length+')</h3>'+
      FO_PENDING.map(p=>'<div class="fo-prow"><span class="avatar '+p.av+'">'+foIni(p.name)+'</span>'+
        '<div><div class="fo-mname">'+p.name+'</div><div class="fo-mmeta">'+p.unit+'</div></div>'+
        '<div class="fo-pbtns"><button class="fo-mini ok">Aceitar</button><button class="fo-mini no">Recusar</button></div></div>').join('')+'</div>';
    const list = '<div class="fo-mlist">'+FO_MEMBERS.map(m=>'<div class="fo-mrow"><span class="avatar '+m.av+'">'+foIni(m.name)+'</span>'+
      '<div><div class="fo-mname">'+m.name+'</div><div class="fo-mmeta">'+m.role+'</div></div>'+
      '<span class="fo-mrole '+m.gr+'">'+m.grl+'</span></div>').join('')+'</div>';
    content = pend + list;
  } else {
    content = '<div class="fo-about"><h3>Sobre</h3><p>'+g.desc+'. Espaço para a rede trocar práticas, tirar dúvidas e registrar o que dá certo em cada unidade.</p>'+
      '<h3>Regras do grupo</h3><p>Seja gentil, pesquise antes de perguntar e marque a melhor resposta quando sua dúvida for resolvida.</p>'+
      '<h3>Regra de participação</h3><p>Gestores de unidade das regionais Sul e Sudeste.</p>'+
      '<h3>Administradores</h3><p>Matheus Scussel</p></div>';
  }
  foBody.innerHTML = '<div style="--gc:'+g.color+';--gc-tint:'+g.color+'22;--gtint:'+g.color+'14">'+
    '<button class="fo-back" data-back="home"><i class="fa-solid fa-arrow-left"></i> Fórum</button>'+
    '<div class="fo-ghead">'+
      '<div class="fo-gbanner" style="background:'+g.color+'"><i class="fa-solid '+g.icon+' fo-wm"></i>'+
        '<span class="fo-gchip" style="background:rgba(0,0,0,.2)"><i class="fa-solid '+g.icon+'"></i></span>'+
        '<div class="fo-gtxt"><h2>'+g.name+'</h2><p>'+g.desc+'</p></div></div>'+
      '<div class="fo-gsub"><div class="fo-avstack">'+av+'</div>'+
        '<span class="fo-gcount">'+g.members+' membros · '+g.topics+' tópicos</span>'+
        '<div class="fo-gactions"><button class="fo-icobtn on" title="Seguir grupo"><i class="fa-solid fa-bell"></i></button></div></div>'+
      '<div class="fo-tabs">'+tab('disc','Discussões')+tab('mem','Membros')+tab('sobre','Sobre')+'</div>'+
    '</div>'+content+'</div>';
}

function foReplyHTML(name, av, role, text, nested){
  return '<div class="fo-reply'+(nested?' nested':'')+'"><span class="avatar '+av+'">'+foIni(name)+'</span>'+
    '<div class="fo-rbubble"><div class="fo-rname">'+name+' <span class="fo-rrole">'+role+'</span></div>'+
    '<div class="fo-rtext">'+text+'</div>'+
    '<div class="fo-ractions"><span class="fo-rlike"><i class="fa-regular fa-thumbs-up"></i> Curtir</span><span data-reply-focus>Responder</span></div></div></div>';
}

function foRenderTopic(){
  const g = foGroupById(foState.group);
  const t = (FO_TOPICS[g.id]||[]).find(x=>x.id===foState.topic) || {title:'Tópico',author:'Membro',av:'av-ms',role:'',unit:'',time:'',views:0,resolved:false,tags:[]};
  const tags = (t.tags||[]).map(x=>'<span class="fo-ttag" style="color:var(--gc);background:var(--gc-tint)">'+x+'</span>').join('');
  const resolved = t.resolved ? '<span class="fo-resolved"><i class="fa-solid fa-check"></i> Resolvido</span>' : '';
  const best = t.resolved ?
    '<div class="fo-best"><div class="fo-bestbar"><i class="fa-solid fa-check"></i> Melhor resposta · marcada por Livia Fernandes</div>'+
      '<div style="padding:16px 18px">'+foReplyHTML('Livia Fernandes','av-lf','Head de CS · Matriz','Compartilho como resolvemos aqui: padronizamos o processo, definimos um responsável fixo e passamos a acompanhar tudo pelo SULTS. Desde então o problema praticamente sumiu, vale demais estruturar antes de escalar.',false)+'</div></div>' : '';
  const generated = foTopicReplies(t);
  const stored = (FO_REPLIES[t.id]||[]).map(r=>foReplyHTML(r.name,r.av,r.role,r.text,false)).join('');
  const hasReplies = generated || stored;
  const replies = '<div class="fo-repliestitle">'+(t.replies||0)+(t.replies===1?' resposta':' respostas')+'</div>'+
    generated + stored +
    (hasReplies ? '' : '<div class="fo-empty" style="padding:28px"><div class="s">Seja o primeiro a responder este tópico.</div></div>');
  const bodyHTML = t.body ? t.body.split(/\n+/).map(p=>'<p>'+p+'</p>').join('') : '<p>'+(t.snippet||'')+'</p><p>Queria trocar experiências com quem já passou por isso. Como vocês lidam com isso na prática do dia a dia?</p>';
  foBody.innerHTML = '<div style="--gc:'+g.color+';--gc-tint:'+g.color+'22">'+
    '<div class="fo-bread"><a data-back="home">Fórum</a> / <a data-back="group">'+g.name+'</a></div>'+
    '<div class="fo-topictitle">'+t.title+tags+resolved+'</div>'+
    '<div class="fo-post"><div class="fo-posthead"><span class="avatar '+t.av+'">'+foIni(t.author)+'</span>'+
      '<div><div class="fo-pname">'+t.author+'</div><div class="fo-pmeta">'+t.role+' · '+t.unit+' · '+t.time+'</div></div></div>'+
      '<div class="fo-ptext">'+bodyHTML+'</div>'+
      '<div class="fo-pfoot"><span class="fo-pact fo-plike"><i class="fa-regular fa-thumbs-up"></i> Curtir</span><span class="fo-pact" data-reply-focus><i class="fa-regular fa-comment"></i> Responder</span><span class="fo-pact"><i class="fa-regular fa-bell"></i> Seguir</span><span style="margin-left:auto">'+t.views+' visualizações</span></div></div>'+
    best + replies +
    '<div class="fo-composer"><div class="fo-composer-inner"><span class="avatar av-rc">RC</span><input id="foReplyInput" placeholder="Escreva sua resposta"><button class="fo-btn" id="foReplyBtn">Publicar</button></div></div>'+
    '</div>';
}

function renderForum(){
  if (foState.screen === 'home') foRenderHome();
  else if (foState.screen === 'group') foRenderGroup();
  else foRenderTopic();
  foScroll.scrollTop = 0;
}
function openForum(){ closeStories(); forumView.classList.add('open'); document.body.style.overflow='hidden'; foState={screen:'home',group:null,topic:null,tab:'disc',filter:'todos'}; renderForum(); }
function closeForum(){ forumView.classList.remove('open'); if(!reelsPlayer.classList.contains('open')) document.body.style.overflow=''; }

$('#navForum') && $('#navForum').addEventListener('click', e => { e.preventDefault(); setNav($('#navForum')); closeNewsModule(); openForum(); });

