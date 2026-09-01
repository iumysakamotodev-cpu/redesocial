# Estrutura do projeto

## O index.html é saída, não fonte

**Não edite o `index.html`.** Ele é gerado. A fonte são os pedaços:

```
head.html       o <head> compartilhado (metas e libs externas)
assets/css/     as folhas, na ordem numérica
screens/        os fragmentos de markup, na ordem numérica
assets/js/      os scripts, na ordem numérica
```

Depois de mexer em qualquer um deles:

```
node build.js
```

O build regrava o `index.html` e as oito páginas. É isso que permite duas
pessoas trabalharem ao mesmo tempo sem disputar o mesmo arquivo — quem mexe
na Rede Social toca em três arquivos que ninguém mais abre:

| área | folha | script | tela |
|---|---|---|---|
| Home | `04-modulos.css`, `08-feed.css` | `01-home.js`, `06-modulos.js` | `03-home.html` |
| Rede Social | `07-rede-social.css` | `11-rede-social.js` | `05-rede-social.html` |
| Shorts | `06-shorts.css` | `03-shorts.js` | `06-shorts.html` |
| Fórum | `05-forum.css` | `10-forum.js` | `07-forum.html` |

O `index.html` vai aparecer como alterado no git a cada build, porque é saída.
Quem revisa deve olhar o diff dos pedaços, não o dele.

## As duas formas de abrir

| | tamanho | quando usar |
|---|---|---|
| `index.html` | ~950 KB | autocontido, abre direto do disco (`file://`) |
| `home.html` e as outras | ~6 KB cada | repartido por tela, precisa de servidor HTTP |

## Uma página por tela

Cada uma monta a aplicação inteira e abre direto na sua tela:

```
home.html            a home
rede-social.html     abrirModuloSocial('feed')
shorts.html          abrirModuloSocial('shorts')
publicacoes.html     abrirModuloSocial('list')
configuracoes.html   openNewsModule(); newsShow('params')
categorias.html      openNewsModule(); newsShow('cats')
permissoes.html      openNewsModule(); newsShow('perm')
forum.html           openForum()
```

São pontos de entrada — links diretos para cada tela. A navegação **dentro**
de uma página continua sendo a mesma de antes, por JS, sem recarregar.

### Por que toda página carrega todas as telas

Seria natural cada página buscar só o seu fragmento. Não dá, e o motivo é
mensurável: o JS faz **929 consultas ao DOM no carregamento**, das quais
**412 apontam para elementos de outras telas sem nenhuma proteção**. Como o
JS entra como um script só, a primeira que falha aborta todo o resto.

Testado: uma página com apenas sidebar + topbar + home quebra em
`$('#rxFilters')` — um elemento da tela de Shorts — e a partir dali nada mais
roda. A fileira de shorts da home não é montada, `applyFold` nunca dobra a
grade, `abrirModuloSocial` nem chega a existir.

O acoplamento é grosso, e não pontual:

```
 87  wizard        ->  rede-social
 61  rede-social   ->  feed-modais
 39  rede-social   ->  topbar
 23  wizard        ->  modais
 15  perfil        ->  shorts
```

Carregar todos os fragmentos mantém o comportamento intacto. Como são os
mesmos arquivos em todas as páginas, o navegador busca uma vez e reaproveita
do cache nas seguintes.

Para cada página carregar **só** o seu HTML seria preciso proteger as 412
consultas (`$('#x').on(...)` → `$('#x')?.on(...)`) ou separar o JS por
página com um grafo de dependências — refatoração, não divisão.

## Onde fica cada coisa

```
assets/css/   11 folhas, na ordem em que precisam ser aplicadas
assets/js/    13 scripts, na ordem em que precisam ser executados
screens/       8 fragmentos de markup, um por área da tela
```

### assets/css — a ordem é o próprio efeito

O CSS tem regras tardias que sobrescrevem as do começo **de propósito**
(`.tl{font-size:13px !important}` depois da declaração base, por exemplo).
Os `<link>` entram na ordem numérica e um arquivo fora de lugar desfaz isso.

```
01-base.css          tokens, reset, tipografia e avatares
02-sidebar.css       menu lateral
03-layout.css        estrutura, header, botão +Novo, perfil e sino
04-modulos.css       grade de módulos e títulos de seção
05-forum.css         módulo Fórum
06-shorts.css        Shorts · Explorar e player
07-rede-social.css   módulo Rede Social e Shorts B
08-feed.css          feed da home, destaque e coluna direita
09-comentarios.css   comentários
10-responsivo.css    breakpoints e barra inferior do mobile
11-detalhes.css      detalhes de publicação e ajustes finais
```

Os `url()` desses arquivos apontam para `../../uploads/…` porque resolvem a
partir de `assets/css/`, e não da raiz. Ao embutir tudo no `index.html`, onde
resolvem da raiz, o build desfaz esse `../../` sozinho.

### screens — fragmentos, não páginas

Vários abrem uma tag que só fecha no seguinte: `.main` abre em
`02-topbar.html` e só fecha depois da home, em `03-home.html`. Por isso o
carregador **junta o texto antes de injetar**. Injetar um a um faria o parser
fechar as tags sozinho e a árvore sairia diferente.

```
01-sidebar.html      template do thumbnail, menu lateral e barra inferior
02-topbar.html       header, perfil de pessoa, editor de imagem
03-home.html         home: módulos, shorts, feed e comunicados
04-feed-modais.html  modais do feed, reações e editor rápido
05-rede-social.html  módulo Rede Social e telas de configuração
06-shorts.html       módulo Shorts, categorias, permissões e player
07-forum.html        módulo Fórum
08-modais.html       modais gerais
```

### assets/js — juntados em um script só

O carregador lê os treze arquivos e injeta **um** `<script>` com o texto
concatenado, em vez de treze `<script src>`. O motivo é concreto: no original
tudo era um `<script>` só, e função declarada num ponto é usada antes disso
em outro — `04-perfil.js` registra `crOpen` num clique e `crOpen` só é
declarada em `12-wizard.js`. Num script único o hoisting resolve; em arquivos
separados cada um é um script e a referência quebra com `ReferenceError`.

Pela mesma razão a ordem numérica não pode mudar: os `const`/`let` do topo de
um arquivo são enxergados pelos seguintes.

```
01-home.js           resumo do dia, destaque, fileira de shorts e player
02-nav-mobile.js     barra inferior do mobile
03-shorts.js         módulo Shorts, categorias e permissões
04-perfil.js         perfil de pessoa e visualizador de publicação
05-feed.js           reações, ver mais e comentários
06-modulos.js        grade de módulos, busca, animação e organizar
07-busca.js          busca global e tela de quem interagiu
08-novo-sino.js      botão +Novo e sino de notificações
09-demo.js           alternar preenchido / vazio
10-forum.js          módulo Fórum
11-rede-social.js    módulo Rede Social
12-wizard.js         wizard de nova publicação e modais
13-extras.js         blocos menores que ficavam soltos no fim do documento
```

## Detalhes que valem lembrar

- **Sem `<base href>`.** Ele resolveria os caminhos relativos a partir da
  raiz, mas quebraria os `href="#"` espalhados pelo projeto, que passariam a
  navegar para fora da página. Por isso as páginas, `assets/` e `screens/`
  ficam na raiz: assim `uploads/…` e `icons/…` continuam válidos sem truque.
  É também o que faz tudo funcionar no GitHub Pages, que publica em
  `/redesocial/` e não na raiz do domínio.

- **`DOMContentLoaded` é reemitido.** O script entra no documento depois do
  evento já ter disparado, então quem escuta nunca seria chamado. O
  carregador dispara o evento de novo no fim.

- **`file://` não funciona nas páginas repartidas.** O navegador bloqueia
  `fetch` de arquivo local. A página detecta a falha e aponta para o
  `index.html`.

- **O estado não atravessa páginas.** Uma publicação criada na Rede Social
  não sobrevive a ir para `home.html`, porque o estado vive em memória. Isso
  não muda dentro de uma mesma página, onde a navegação continua sendo por
  JS.
