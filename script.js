const creatures = [
  {
    id: '001', eraKey:'mesozoico', era:'Era Mesozoica', period:'Período Cretáceo', name:'Tiranossauro rex', scientific:'Tyrannosaurus rex', emoji:'🦖',
    description:'Um dos maiores predadores terrestres conhecidos, viveu no fim do Cretáceo, pouco antes da extinção em massa de 66 milhões de anos atrás.',
    stats:[['Alimentação','Carnívoro'],['Comprimento','Até 12–13 m'],['Massa','Cerca de 8 t'],['Época','68–66 milhões de anos']],
    facts:['Tinha uma das mordidas mais fortes entre os animais terrestres conhecidos.','Seus braços eram pequenos, mas bastante musculosos.','Viveu na América do Norte durante o final do Cretáceo.'],
    model:'https://sketchfab.com/search?features=animated&q=tyrannosaurus+rex&type=models'
  },
  {
    id: '002', eraKey:'paleozoico', era:'Era Paleozoica', period:'Período Cambriano', name:'Trilobita', scientific:'Trilobita', emoji:'🦐',
    description:'Artrópodes marinhos muito bem-sucedidos que habitaram os oceanos por centenas de milhões de anos.',
    stats:[['Ambiente','Marinho'],['Alimentação','Variada'],['Grupo','Artrópodes'],['Época','521–252 milhões de anos']],
    facts:['Possuíam exoesqueleto segmentado.','Algumas espécies conseguiam enrolar o corpo para proteção.','Seus fósseis ajudam cientistas a datar camadas de rocha.'],
    model:'https://sketchfab.com/search?q=trilobite&type=models'
  },
  {
    id: '003', eraKey:'mesozoico', era:'Era Mesozoica', period:'Período Jurássico', name:'Braquiossauro', scientific:'Brachiosaurus altithorax', emoji:'🦕',
    description:'Um enorme dinossauro herbívoro de pescoço longo, adaptado para alcançar vegetação elevada.',
    stats:[['Alimentação','Herbívoro'],['Comprimento','Cerca de 22 m'],['Postura','Quadrúpede'],['Época','154–150 milhões de anos']],
    facts:['As patas dianteiras eram mais longas que as traseiras.','O pescoço permitia alcançar folhas altas.','Era um saurópode, grupo de gigantes herbívoros.'],
    model:'https://sketchfab.com/search?features=animated&q=brachiosaurus&type=models'
  },
  {
    id: '004', eraKey:'cenozoico', era:'Era Cenozoica', period:'Quaternário • Pleistoceno', name:'Mamute-lanoso', scientific:'Mammuthus primigenius', emoji:'🦣',
    description:'Mamífero adaptado ao frio, com pelagem espessa e grandes presas curvas. Viveu durante as glaciações do Pleistoceno.',
    stats:[['Alimentação','Herbívoro'],['Altura','Até 3,4 m'],['Massa','Até 6 t'],['Época','400 mil–4 mil anos']],
    facts:['Possuía uma camada de gordura e pelagem densa contra o frio.','Conviveu com seres humanos pré-históricos.','Pequenas populações sobreviveram em ilhas por milhares de anos.'],
    model:'https://sketchfab.com/search?features=animated&q=woolly+mammoth&type=models'
  },
  {
    id: '005', eraKey:'cenozoico', era:'Era Cenozoica', period:'Quaternário • Pleistoceno', name:'Tigre-dentes-de-sabre', scientific:'Smilodon', emoji:'🐯',
    description:'Felino robusto conhecido por seus longos caninos superiores, comum nas Américas durante o Pleistoceno.',
    stats:[['Alimentação','Carnívoro'],['Grupo','Felinos'],['Destaque','Caninos alongados'],['Extinção','Cerca de 10 mil anos']],
    facts:['Não era um tigre verdadeiro.','Tinha membros dianteiros muito fortes.','Provavelmente caçava grandes herbívoros.'],
    model:'https://sketchfab.com/search?features=animated&q=smilodon&type=models'
  },
  {
    id: '006', eraKey:'cenozoico', era:'Era Cenozoica', period:'Período Paleógeno', name:'Titanoboa', scientific:'Titanoboa cerrejonensis', emoji:'🐍',
    description:'Uma serpente gigante que viveu em florestas tropicais quentes pouco depois da extinção dos dinossauros não aviários.',
    stats:[['Alimentação','Carnívoro'],['Comprimento','Até 13 m'],['Ambiente','Tropical'],['Época','Cerca de 60 milhões de anos']],
    facts:['Foi uma das maiores serpentes conhecidas.','Seu tamanho indica um clima muito quente.','Seus fósseis foram encontrados na Colômbia.'],
    model:'https://sketchfab.com/search?q=titanoboa&type=models'
  },
  {
    id: '007', eraKey:'mesozoico', era:'Era Mesozoica', period:'Período Cretáceo', name:'Pteranodonte', scientific:'Pteranodon', emoji:'🦅',
    description:'Réptil voador de grande envergadura que viveu sobre mares rasos. Não era um dinossauro, mas um pterossauro.',
    stats:[['Alimentação','Piscívoro'],['Envergadura','Até 7 m'],['Grupo','Pterossauros'],['Época','86–84 milhões de anos']],
    facts:['Não possuía dentes.','Usava correntes de ar para planar.','Sua crista provavelmente ajudava no equilíbrio e exibição.'],
    model:'https://sketchfab.com/search?features=animated&q=pteranodon&type=models'
  },
  {
    id: '008', eraKey:'paleozoico', era:'Era Paleozoica', period:'Período Devoniano', name:'Dunkleosteus', scientific:'Dunkleosteus terrelli', emoji:'🐟',
    description:'Grande peixe blindado predador, com placas ósseas formando uma estrutura cortante no lugar de dentes verdadeiros.',
    stats:[['Alimentação','Carnívoro'],['Comprimento','Até cerca de 8 m'],['Grupo','Placodermos'],['Época','382–358 milhões de anos']],
    facts:['Tinha a cabeça protegida por placas ósseas.','Seu mecanismo de mordida era rápido e poderoso.','Viveu antes do surgimento dos dinossauros.'],
    model:'https://sketchfab.com/search?q=dunkleosteus&type=models'
  }
];

const eras = [
  {key:'paleozoico', name:'Paleozoico', range:'541–252 milhões de anos', description:'Explosão da vida marinha, surgimento dos peixes, plantas terrestres, anfíbios e primeiros répteis.', image:"url('https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1000&q=80')"},
  {key:'mesozoico', name:'Mesozoico', range:'252–66 milhões de anos', description:'A chamada Era dos Répteis, marcada por dinossauros, pterossauros e grandes répteis marinhos.', image:"url('https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1000&q=80')"},
  {key:'cenozoico', name:'Cenozoico', range:'66 milhões de anos–presente', description:'Expansão dos mamíferos e das aves, glaciações, megafauna e surgimento dos seres humanos.', image:"url('https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1000&q=80')"}
];

const eraGrid = document.getElementById('eraGrid');
const periodGrid = document.getElementById('periodGrid');
let current = creatures[0];

function renderEras(){
  eraGrid.innerHTML = eras.map(era => `
    <article class="era-card" data-era="${era.key}" style="--image:${era.image}">
      <span class="range">${era.range}</span>
      <h3>${era.name}</h3>
      <p>${era.description}</p>
    </article>`).join('');
  document.querySelectorAll('.era-card').forEach(card => card.addEventListener('click', () => {
    const first = creatures.find(c => c.eraKey === card.dataset.era);
    showCreature(first);
    document.getElementById('dossie').scrollIntoView({behavior:'smooth'});
  }));
}

function renderPeriods(){
  periodGrid.innerHTML = creatures.map(c => `
    <article class="period-card" data-id="${c.id}">
      <div class="icon">${c.emoji}</div>
      <p class="eyebrow">${c.period}</p>
      <h3>${c.name}</h3>
      <p>${c.description.slice(0,95)}...</p>
    </article>`).join('');
  document.querySelectorAll('.period-card').forEach(card => card.addEventListener('click', () => {
    showCreature(creatures.find(c => c.id === card.dataset.id));
    document.getElementById('dossie').scrollIntoView({behavior:'smooth'});
  }));
}

function showCreature(c){
  current = c;
  document.getElementById('featuredNumber').textContent = c.id;
  document.getElementById('featuredEra').textContent = c.era.toUpperCase();
  document.getElementById('featuredPeriod').textContent = c.period.toUpperCase();
  document.getElementById('featuredName').textContent = c.name;
  document.getElementById('featuredScientific').innerHTML = `<em>${c.scientific}</em>`;
  document.getElementById('featuredDescription').textContent = c.description;
  document.getElementById('creatureEmoji').textContent = c.emoji;
  document.getElementById('modelButton').href = c.model;
  document.getElementById('statGrid').innerHTML = c.stats.map(([label,value]) => `<div class="stat"><small>${label}</small><strong>${value}</strong></div>`).join('');
}

const dialog = document.getElementById('factsDialog');
document.getElementById('factsButton').addEventListener('click', () => {
  document.getElementById('dialogTitle').textContent = current.name;
  document.getElementById('dialogFacts').innerHTML = current.facts.map(f => `<li>${f}</li>`).join('');
  dialog.showModal();
});
document.getElementById('closeDialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if(e.target === dialog) dialog.close(); });

document.getElementById('randomButton').addEventListener('click', () => {
  const next = creatures[Math.floor(Math.random()*creatures.length)];
  showCreature(next);
  document.getElementById('dossie').scrollIntoView({behavior:'smooth'});
});

const audio = document.getElementById('forestAudio');
const soundButton = document.getElementById('soundButton');
soundButton.addEventListener('click', async () => {
  try {
    if(audio.paused){ await audio.play(); soundButton.textContent='🔊 Ambiente'; soundButton.setAttribute('aria-pressed','true'); }
    else { audio.pause(); soundButton.textContent='🔈 Ambiente'; soundButton.setAttribute('aria-pressed','false'); }
  } catch { soundButton.textContent='Som indisponível'; }
});

function loadingSequence(){
  const loading = document.getElementById('loading');
  const bar = document.getElementById('progressBar');
  const value = document.getElementById('progressValue');
  const text = document.getElementById('loadingText');
  let progress = 0;
  const timer = setInterval(() => {
    progress += Math.floor(Math.random()*8)+3;
    if(progress > 100) progress = 100;
    bar.style.width = `${progress}%`;
    value.textContent = `${progress}%`;
    if(progress > 35) text.textContent='Identificando eras geológicas...';
    if(progress > 70) text.textContent='Restaurando formas de vida...';
    if(progress === 100){ clearInterval(timer); setTimeout(() => loading.classList.add('hidden'), 500); }
  }, 90);
}

renderEras();
renderPeriods();
showCreature(current);
loadingSequence();

const params = new URLSearchParams(location.search);
const requested = params.get('animal') || params.get('era');
if(requested){
  const found = creatures.find(c => c.id === requested || c.eraKey === requested.toLowerCase());
  if(found) showCreature(found);
}
