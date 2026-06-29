// =====================================================================
//  Sunday Volleyball - DATA
//  The only file you edit week to week. Loaded by index.html as a
//  plain script (globals), so the app still works over file://.
// =====================================================================

const GM = {
  // Regulars
  Anita:'f', Audrey:'f', Barbara:'f', Julie:'f', Nat:'f', Sophie:'f', Trang:'f',
  'Anthony W.':'m', Daniel:'m', Emad:'m', Erik:'m', Joey:'m', John:'m', Jose:'m',
  'Karim-Etienne':'m', 'Kevin H.':'m', Khoa:'m', Mark:'m', Michel:'m', Nathan:'m',
  Norichar:'m', Patricio:'m', Rigil:'m', Siu:'m',
  // Subs
  Alain:'m', Andre:'m', Bao:'m', Billy:'m', Brendon:'m', Catherine:'f', Chy:'m', Dat:'m', David:'m',
  Domenico:'m', James:'m', 'Ke-Nam':'m', 'Kevin L.':'m', Lilian:'f', Malak:'f',
  Melanie:'f', Nadim:'m', Olivier:'m', Raks:'m', Salem:'m', Steven:'m', William:'m', Winnie:'f',
  // One-off subs
  Bernard:'m', Bernie:'m', Dom:'m', Jimmy:'m', Nicky:'m', Phillipe:'m', Sam:'m', Arron:'m',
  // Summer 2026 new regulars
  'Xuan-Mai':'f', Samuel:'m'
};

const REGULARS = [
  {n:'Jose',          g:'m'}, {n:'Kevin H.',      g:'m'},
  {n:'Julie',         g:'f'}, {n:'John',          g:'m'},
  {n:'Trang',         g:'f'}, {n:'Emad',          g:'m'},
  {n:'Michel',        g:'m'}, {n:'Daniel',        g:'m'},
  {n:'Sophie',        g:'f'}, {n:'Rigil',         g:'m'},
  {n:'Erik',          g:'m'}, {n:'Anita',         g:'f'},
  {n:'Nathan',        g:'m'}, {n:'Audrey',        g:'f'},
  {n:'Barbara',       g:'f'}, {n:'Joey',          g:'m'},
  {n:'Mark',          g:'m'}, {n:'Khoa',          g:'m'},
  {n:'Patricio',      g:'m'}, {n:'Anthony W.',    g:'m'},
  {n:'Norichar',      g:'m'}, {n:'Siu',           g:'m'},
  {n:'Nat',           g:'f'}, {n:'Karim-Etienne', g:'m'},
];

const REG_NAMES = new Set(REGULARS.map(r => r.n));

const SUMMER_REGULARS = [
  {n:'Sophie',     g:'f'}, {n:'Mark',       g:'m'}, {n:'Julie',      g:'f'},
  {n:'Jose',       g:'m'}, {n:'Rigil',      g:'m'}, {n:'Emad',       g:'m'},
  {n:'Patricio',   g:'m'}, {n:'Nat',        g:'f'}, {n:'John',       g:'m'},
  {n:'Bernie',     g:'m'}, {n:'Anita',      g:'f'}, {n:'Michel',     g:'m'},
  {n:'Kevin H.',   g:'m'}, {n:'Anthony W.', g:'m'}, {n:'Daniel',     g:'m'},
  {n:'Steven',     g:'m'}, {n:'Chy',        g:'m'}, {n:'Xuan-Mai',   g:'f'},
  {n:'James',      g:'m'}, {n:'Kevin L.',   g:'m'}, {n:'Phillipe',   g:'m'},
  {n:'Alain',      g:'m'}, {n:'Winnie',     g:'f'}, {n:'Samuel',     g:'m'},
];

const ALL_REG_NAMES = new Set([...REGULARS, ...SUMMER_REGULARS].map(r => r.n));
const ALL_REGULARS = [...REGULARS, ...SUMMER_REGULARS.filter(r => !REG_NAMES.has(r.n))];

const THEMES = [
  {n:1,  date:'Jan 11', theme:'Pokémon',        color:'#F6C443'},
  {n:2,  date:'Jan 18', theme:'Colours',         color:'#7E57C2'},
  {n:3,  date:'Feb 1',  theme:'Pizza',           color:'#EF6C4A'},
  {n:4,  date:'Feb 8',  theme:'Milk types',      color:'#90CAF9'},
  {n:5,  date:'Feb 15', theme:'Sodas',           color:'#4CAF82'},
  {n:6,  date:'Feb 22', theme:'Space',           color:'#3A3F8F'},
  {n:7,  date:'Mar 1',  theme:'Cutlery',         color:'#9E9E9E'},
  {n:8,  date:'Mar 8',  theme:'Arctic animals',  color:'#80DEEA'},
  {n:9,  date:'Mar 15', theme:'AI chatbots',     color:'#26A69A'},
  {n:10, date:'Mar 22', theme:'Flowers',         color:'#EC407A'},
  {n:11, date:'Apr 12', theme:'Quebec things',   color:'#E53935'},
  {n:12, date:'Apr 19', theme:'Condiments',      color:'#F9A825'},
  {n:13, date:'Apr 26', theme:'K-pop',           color:'#C850C0'},
  {n:14, date:'May 3',  theme:'Card Suits',      color:'#C41E3A'},
  {n:15, date:'May 10', theme:'Montreal Metro',   color:'#F4831F'},
  {n:16, date:'May 17', theme:'Ocean',             color:'#0077B6'},
  {n:17, date:'May 31', theme:'Montreal landmarks', color:'#D4500A'},
  {n:18, date:'Jun 21', theme:'Donut shops',        color:'#E84C7A'},
  {n:19, date:'Jun 28', theme:'Rotisserie & fried chicken', color:'#C0392B'},
];

// YouTube video URLs — add as:  session_number: 'https://youtube.com/watch?v=XXXXX'
// Instagram reels — add { id: 'shortcode', caption: '...', week: N }
// Shortcode is the last part of the reel URL: instagram.com/reel/SHORTCODE/
const REELS = [
  { id: 'DRLwrIwDtRd', caption: 'Sunday pickup at Supercamp Vanier' },
];

const YT = {
  3: 'https://youtu.be/V_HG8xW1Pes?si=UO_BkNyM2K3HrnOs',
  4: 'https://youtu.be/N5DObrYZ8HA?si=6i0QITGG0hRxqjWe',
  5: 'https://youtu.be/IPCLspJVvSE?si=oOfO5t90huX-O8T0',
};

// Each session: { n, date, theme, reg, teams:[{name, p:[...]}], results?:[...] }
// results entries: { r:roundNumber, a:'TeamA', b:'TeamB', w:'winnerTeamName', s?:[scoreA, scoreB] }
//   - w must equal a or b.   - s is OPTIONAL: points for team a then team b (e.g. s:[25,21]).
//   When s is present, the app shows match scores, point differentials, and score-based superlatives.
const WEEKS = [
  {n:1, date:'Jan 11', theme:'Pokémon', reg:22, teams:[
    {name:'Squirtle',         p:[{n:'Norichar',g:'m'},{n:'Audrey',g:'f'},{n:'Alain',g:'s',sg:'m'},{n:'Sophie',g:'f'},{n:'Emad',g:'m'},{n:'Daniel',g:'m'}]},
    {name:'Charmander',       p:[{n:'Barbara',g:'f'},{n:'Erik',g:'m'},{n:'Anita',g:'f'},{n:'Michel',g:'m'},{n:'Joey',g:'m'},{n:'John',g:'m'}]},
    {name:'Bulbasaur',        p:[{n:'Mark',g:'m'},{n:'Patricio',g:'m'},{n:'Nat',g:'f'},{n:'James',g:'s',sg:'m'},{n:'Anthony W.',g:'m'},{n:'Trang',g:'f'}]},
    {name:'Pikachu',          p:[{n:'Rigil',g:'m'},{n:'Jose',g:'m'},{n:'Julie',g:'f'},{n:'Khoa',g:'m'},{n:'Kevin H.',g:'m'},{n:'Nathan',g:'m'}]}]},
  {n:2, date:'Jan 18', theme:'Colours', reg:21, teams:[
    {name:'Yellow',           p:[{n:'Trang',g:'f'},{n:'Nat',g:'f'},{n:'Patricio',g:'m'},{n:'Joey',g:'m'},{n:'William',g:'s',sg:'m'},{n:'David',g:'s',sg:'m'}]},
    {name:'Orange',           p:[{n:'Anthony W.',g:'m'},{n:'Erik',g:'m'},{n:'Daniel',g:'m'},{n:'Nathan',g:'m'},{n:'Kevin H.',g:'m'},{n:'Barbara',g:'f'}]},
    {name:'Green',            p:[{n:'John',g:'m'},{n:'Anita',g:'f'},{n:'Karim-Etienne',g:'m'},{n:'Khoa',g:'m'},{n:'Emad',g:'m'},{n:'Rigil',g:'m'}]},
    {name:'Purple',           p:[{n:'Alain',g:'s',sg:'m'},{n:'Julie',g:'f'},{n:'Jose',g:'m'},{n:'Michel',g:'m'},{n:'Sophie',g:'f'},{n:'Mark',g:'m'}]}]},
  {n:3, date:'Feb 1', theme:'Pizza', reg:20, teams:[
    {name:'Hawaiian',         p:[{n:'Norichar',g:'m'},{n:'Anthony W.',g:'m'},{n:'John',g:'m'},{n:'Khoa',g:'m'},{n:'Catherine',g:'s',sg:'f'},{n:'Rigil',g:'m'}]},
    {name:"Meat Lover's",     p:[{n:'David',g:'s',sg:'m'},{n:'Julie',g:'f'},{n:'Audrey',g:'f'},{n:'Kevin H.',g:'m'},{n:'Karim-Etienne',g:'m'},{n:'Erik',g:'m'}]},
    {name:'Quattro Formaggi', p:[{n:'Daniel',g:'m'},{n:'Dat',g:'s',sg:'m'},{n:'Joey',g:'m'},{n:'Nathan',g:'m'},{n:'Anita',g:'f'},{n:'Chy',g:'s',sg:'m'}]},
    {name:'Margherita',       p:[{n:'Michel',g:'m'},{n:'Jose',g:'m'},{n:'Patricio',g:'m'},{n:'Sophie',g:'f'},{n:'Barbara',g:'f'},{n:'Siu',g:'m'}]}]},
  {n:4, date:'Feb 8', theme:'Milk types', reg:20, teams:[
    {name:'Oat Milk',         p:[{n:'Catherine',g:'s',sg:'f'},{n:'Daniel',g:'m'},{n:'Norichar',g:'m'},{n:'Julie',g:'f'},{n:'Siu',g:'m'},{n:'David',g:'s',sg:'m'}]},
    {name:'Cow Milk',         p:[{n:'Audrey',g:'f'},{n:'Anthony W.',g:'m'},{n:'Nathan',g:'m'},{n:'Mark',g:'m'},{n:'Erik',g:'m'},{n:'Jose',g:'m'}]},
    {name:'Soy Milk',         p:[{n:'Patricio',g:'m'},{n:'Trang',g:'f'},{n:'Kevin H.',g:'m'},{n:'Barbara',g:'f'},{n:'Emad',g:'m'},{n:'John',g:'m'}]},
    {name:'Almond Milk',      p:[{n:'Andre',g:'s',sg:'m'},{n:'Karim-Etienne',g:'m'},{n:'Sophie',g:'f'},{n:'Rigil',g:'m'},{n:'Khoa',g:'m'},{n:'Nicky',g:'s',sg:'m'}]}]},
  {n:5, date:'Feb 15', theme:'Sodas', reg:22, teams:[
    {name:'Coke',             p:[{n:'David',g:'s',sg:'m'},{n:'Norichar',g:'m'},{n:'Nathan',g:'m'},{n:'Nat',g:'f'},{n:'Patricio',g:'m'},{n:'Audrey',g:'f'}]},
    {name:'Pepsi',            p:[{n:'Barbara',g:'f'},{n:'Khoa',g:'m'},{n:'Julie',g:'f'},{n:'Jose',g:'m'},{n:'Kevin H.',g:'m'},{n:'Siu',g:'m'}]},
    {name:'7Up',              p:[{n:'Mark',g:'m'},{n:'Trang',g:'f'},{n:'Michel',g:'m'},{n:'John',g:'m'},{n:'Anthony W.',g:'m'},{n:'Sophie',g:'f'}]},
    {name:'Rootbeer',         p:[{n:'Erik',g:'m'},{n:'Catherine',g:'s',sg:'f'},{n:'Daniel',g:'m'},{n:'Anita',g:'f'},{n:'Rigil',g:'m'},{n:'Emad',g:'m'}]}]},
  {n:6, date:'Feb 22', theme:'Space', reg:22, teams:[
    {name:'Supernova',        p:[{n:'Karim-Etienne',g:'m'},{n:'Patricio',g:'m'},{n:'Kevin H.',g:'m'},{n:'Rigil',g:'m'},{n:'Nat',g:'f'},{n:'Andre',g:'s',sg:'m'}]},
    {name:'Nebula',           p:[{n:'Norichar',g:'m'},{n:'Anita',g:'f'},{n:'Julie',g:'f'},{n:'Nathan',g:'m'},{n:'Siu',g:'m'},{n:'Joey',g:'m'}]},
    {name:'Eclipse',          p:[{n:'Barbara',g:'f'},{n:'Erik',g:'m'},{n:'Audrey',g:'f'},{n:'Anthony W.',g:'m'},{n:'Olivier',g:'s',sg:'m'},{n:'Khoa',g:'m'}]},
    {name:'Vortex',           p:[{n:'Emad',g:'m'},{n:'Sophie',g:'f'},{n:'Jose',g:'m'},{n:'John',g:'m'},{n:'Michel',g:'m'},{n:'Trang',g:'f'}]}]},
  {n:7, date:'Mar 1', theme:'Cutlery', reg:22, teams:[
    {name:'Knife',            p:[{n:'Emad',g:'m'},{n:'Barbara',g:'f'},{n:'Kevin H.',g:'m'},{n:'Nathan',g:'m'},{n:'Julie',g:'f'},{n:'Patricio',g:'m'}]},
    {name:'Fork',             p:[{n:'Anita',g:'f'},{n:'Andre',g:'s',sg:'m'},{n:'Daniel',g:'m'},{n:'Joey',g:'m'},{n:'John',g:'m'},{n:'David',g:'s',sg:'m'}]},
    {name:'Spoon',            p:[{n:'Erik',g:'m'},{n:'Michel',g:'m'},{n:'Trang',g:'f'},{n:'Sophie',g:'f'},{n:'Mark',g:'m'},{n:'Norichar',g:'m'}]},
    {name:'Chopsticks',       p:[{n:'Karim-Etienne',g:'m'},{n:'Siu',g:'m'},{n:'Anthony W.',g:'m'},{n:'Rigil',g:'m'},{n:'Audrey',g:'f'},{n:'Jose',g:'m'}]}]},
  {n:8, date:'Mar 8', theme:'Arctic animals', reg:20, teams:[
    {name:'Penguin',          p:[{n:'Erik',g:'m'},{n:'Jose',g:'m'},{n:'Sophie',g:'f'},{n:'Anita',g:'f'},{n:'Joey',g:'m'},{n:'Raks',g:'s',sg:'m'}]},
    {name:'Walruses',         p:[{n:'Rigil',g:'m'},{n:'Kevin H.',g:'m'},{n:'Julie',g:'f'},{n:'Mark',g:'m'},{n:'Patricio',g:'m'},{n:'Daniel',g:'m'}]},
    {name:'Moose',            p:[{n:'William',g:'s',sg:'m'},{n:'Lilian',g:'s',sg:'f'},{n:'Barbara',g:'f'},{n:'Michel',g:'m'},{n:'Steven',g:'s',sg:'m'},{n:'Siu',g:'m'}]},
    {name:'Snow Monkey',      p:[{n:'Norichar',g:'m'},{n:'John',g:'m'},{n:'Nathan',g:'m'},{n:'Audrey',g:'f'},{n:'Trang',g:'f'},{n:'Emad',g:'m'}]}]},
  {n:9, date:'Mar 15', theme:'AI chatbots', reg:18, teams:[
    {name:'ChatGPT',          p:[{n:'Emad',g:'m'},{n:'Khoa',g:'m'},{n:'Kevin H.',g:'m'},{n:'Trang',g:'f'},{n:'Mark',g:'m'},{n:'Barbara',g:'f'}]},
    {name:'Claude',           p:[{n:'Anita',g:'f'},{n:'Michel',g:'m'},{n:'Bernard',g:'s',sg:'m'},{n:'Winnie',g:'s',sg:'f'},{n:'Chy',g:'s',sg:'m'},{n:'Steven',g:'s',sg:'m'}]},
    {name:'Gemini',           p:[{n:'Julie',g:'f'},{n:'Daniel',g:'m'},{n:'Norichar',g:'m'},{n:'Malak',g:'s',sg:'f'},{n:'Nathan',g:'m'},{n:'David',g:'s',sg:'m'}]},
    {name:'Perplexity',       p:[{n:'Rigil',g:'m'},{n:'Jose',g:'m'},{n:'Sophie',g:'f'},{n:'Erik',g:'m'},{n:'Audrey',g:'f'},{n:'John',g:'m'}]}]},
  {n:10, date:'Mar 22', theme:'Flowers', reg:17, teams:[
    {name:'Iris',             p:[{n:'Mark',g:'m'},{n:'Bernie',g:'s',sg:'m'},{n:'Olivier',g:'s',sg:'m'},{n:'Khoa',g:'m'},{n:'Anita',g:'f'},{n:'Jimmy',g:'s',sg:'m'}]},
    {name:'Peony',            p:[{n:'Julie',g:'f'},{n:'Jose',g:'m'},{n:'Lilian',g:'s',sg:'f'},{n:'Rigil',g:'m'},{n:'William',g:'s',sg:'m'},{n:'Daniel',g:'m'}]},
    {name:'Edelweiss',        p:[{n:'Erik',g:'m'},{n:'Andre',g:'s',sg:'m'},{n:'Siu',g:'m'},{n:'Emad',g:'m'},{n:'Joey',g:'m'},{n:'Trang',g:'f'}]},
    {name:'Marigold',         p:[{n:'Kevin H.',g:'m'},{n:'Dom',g:'s',sg:'m'},{n:'John',g:'m'},{n:'Barbara',g:'f'},{n:'Michel',g:'m'},{n:'Audrey',g:'f'}]}]},
  {n:11, date:'Apr 12', theme:'Quebec things', reg:18, teams:[
    {name:'Nid-de-poule',     p:[{n:'Sophie',g:'f'},{n:'David',g:'s',sg:'m'},{n:'Barbara',g:'f'},{n:'Daniel',g:'m'},{n:'Patricio',g:'m'},{n:'Anthony W.',g:'m'}]},
    {name:'Construction Cone',p:[{n:'Mark',g:'m'},{n:'Siu',g:'m'},{n:'Emad',g:'m'},{n:'Khoa',g:'m'},{n:'William',g:'s',sg:'m'},{n:'Lilian',g:'s',sg:'f'}]},
    {name:'Sesame Bagel',     p:[{n:'Dat',g:'s',sg:'m'},{n:'Chy',g:'s',sg:'m'},{n:'Steven',g:'s',sg:'m'},{n:'Rigil',g:'m'},{n:'Nat',g:'f'},{n:'Erik',g:'m'}]},
    {name:'Poutine Sauce',    p:[{n:'Julie',g:'f'},{n:'Jose',g:'m'},{n:'Joey',g:'m'},{n:'Kevin H.',g:'m'},{n:'Michel',g:'m'},{n:'John',g:'m'}]}]},
  {n:12, date:'Apr 19', theme:'Condiments', reg:18, teams:[
    {name:'Spicy Sriracha',   p:[{n:'David',g:'s',sg:'m'},{n:'Julie',g:'f'},{n:'Jose',g:'m'},{n:'Raks',g:'s',sg:'m'},{n:'Daniel',g:'m'},{n:'Khoa',g:'m'}]},
    {name:'Dijon Mustard',    p:[{n:'Karim-Etienne',g:'m'},{n:'Sophie',g:'f'},{n:'Kevin H.',g:'m'},{n:'Audrey',g:'f'},{n:'Emad',g:'m'},{n:'John',g:'m'}]},
    {name:'Kewpie Mayo',      p:[{n:'Winnie',g:'s',sg:'f'},{n:'Sam',g:'s',sg:'m'},{n:'Phillipe',g:'s',sg:'m'},{n:'Chy',g:'s',sg:'m'},{n:'Anita',g:'f'},{n:'Michel',g:'m'}]},
    {name:'Classic Ketchup',  p:[{n:'Patricio',g:'m'},{n:'Nathan',g:'m'},{n:'Nat',g:'f'},{n:'Joey',g:'m'},{n:'Trang',g:'f'},{n:'Anthony W.',g:'m'}]}]},
  {n:13, date:'Apr 26', theme:'K-pop', reg:18, teams:[
    {name:'Black Pink',       p:[{n:'Joey',g:'m'},{n:'Alain',g:'s',sg:'m'},{n:'Julie',g:'f'},{n:'Nathan',g:'m'},{n:'Trang',g:'f'},{n:'Emad',g:'m'}]},
    {name:'Twice',            p:[{n:'Winnie',g:'s',sg:'f'},{n:'Erik',g:'m'},{n:'Audrey',g:'f'},{n:'Kevin L.',g:'s',sg:'m'},{n:'Michel',g:'m'},{n:'Chy',g:'s',sg:'m'}]},
    {name:'Big Bang',         p:[{n:'David',g:'s',sg:'m'},{n:'John',g:'m'},{n:'Nat',g:'f'},{n:'Karim-Etienne',g:'m'},{n:'Mark',g:'m'},{n:'Anita',g:'f'}]},
    {name:'BTS',              p:[{n:'Rigil',g:'m'},{n:'Jose',g:'m'},{n:'Daniel',g:'m'},{n:'Sophie',g:'f'},{n:'James',g:'s',sg:'m'},{n:'Kevin H.',g:'m'}]}]},
  {n:14, date:'May 3',  theme:'Card Suits', reg:20, teams:[
    {name:'♠ Spades',   p:[{n:'Jose',g:'m'},{n:'Barbara',g:'f'},{n:'Julie',g:'f'},{n:'Karim-Etienne',g:'m'},{n:'Daniel',g:'m'},{n:'Siu',g:'m'}]},
    {name:'♥ Hearts',   p:[{n:'Michel',g:'m'},{n:'Rigil',g:'m'},{n:'Khoa',g:'m'},{n:'Sophie',g:'f'},{n:'Nat',g:'f'},{n:'David',g:'s',sg:'m'}]},
    {name:'♣ Clubs',    p:[{n:'Patricio',g:'m'},{n:'Joey',g:'m'},{n:'Erik',g:'m'},{n:'Dat',g:'s',sg:'m'},{n:'Catherine',g:'s',sg:'f'},{n:'Raks',g:'s',sg:'m'}]},
    {name:'♦ Diamonds', p:[{n:'Kevin H.',g:'m'},{n:'John',g:'m'},{n:'Nathan',g:'m'},{n:'Emad',g:'m'},{n:'Audrey',g:'f'},{n:'Anita',g:'f'}]}]},
  {n:15, date:'May 10', theme:'Montreal Metro', reg:17, teams:[
    {name:'Saint-Michel',  p:[{n:'Kevin L.',g:'s',sg:'m'},{n:'Chy',g:'s',sg:'m'},{n:'Anita',g:'f'},{n:'Dat',g:'s',sg:'m'},{n:'Karim-Etienne',g:'m'},{n:'Emad',g:'m'}]},
    {name:'Guy-Concordia', p:[{n:'John',g:'m'},{n:'Patricio',g:'m'},{n:'Audrey',g:'f'},{n:'Anthony W.',g:'m'},{n:'Rigil',g:'m'},{n:'Joey',g:'m'}]},
    {name:'Snowdon',       p:[{n:'Erik',g:'m'},{n:'Kevin H.',g:'m'},{n:'Michel',g:'m'},{n:'Khoa',g:'m'},{n:'Barbara',g:'f'},{n:'Jose',g:'m'}]},
    {name:'Berri-UQAM',    p:[{n:'Ke-Nam',g:'s',sg:'m'},{n:'Catherine',g:'s',sg:'f'},{n:'Melanie',g:'s',sg:'f'},{n:'Daniel',g:'m'},{n:'Siu',g:'m'},{n:'David',g:'s',sg:'m'}]}]},
  {n:16, date:'May 17', theme:'Ocean', season:'s', reg:13, teams:[
    {name:'Hammerheads',  p:[{n:'Emad',g:'m'},{n:'Norichar',g:'s',sg:'m'},{n:'John',g:'m'},{n:'Barbara',g:'s',sg:'f'},{n:'Nathan',g:'s',sg:'m'},{n:'Brendon',g:'s',sg:'m'}]},
    {name:'Kraken Squad', p:[{n:'Lilian',g:'s',sg:'f'},{n:'William',g:'s',sg:'m'},{n:'Joey',g:'s',sg:'m'},{n:'Salem',g:'s',sg:'m'},{n:'Michel',g:'m'},{n:'Anthony W.',g:'m'}]},
    {name:'Manta Rays',   p:[{n:'Jose',g:'m'},{n:'Kevin H.',g:'m'},{n:'Julie',g:'f'},{n:'Ke-Nam',g:'s',sg:'m'},{n:'Patricio',g:'m'},{n:'James',g:'m'}]},
    {name:'Anglerfish',   p:[{n:'Bernie',g:'m'},{n:'Mark',g:'m'},{n:'Anita',g:'f'},{n:'Daniel',g:'m'},{n:'Alain',g:'m',ns:true},{n:'Erik',g:'s',sg:'m'}]}],
   results:[
    {r:1, a:'Manta Rays',  b:'Anglerfish',   w:'Anglerfish'},
    {r:1, a:'Hammerheads', b:'Kraken Squad',  w:'Hammerheads'},
    {r:2, a:'Manta Rays',  b:'Kraken Squad',  w:'Manta Rays'},
    {r:2, a:'Hammerheads', b:'Anglerfish',    w:'Anglerfish'},
    {r:3, a:'Manta Rays',  b:'Hammerheads',   w:'Hammerheads'},
    {r:3, a:'Anglerfish',  b:'Kraken Squad',  w:'Anglerfish'},
    {r:4, a:'Manta Rays',  b:'Anglerfish',    w:'Anglerfish'},
    {r:4, a:'Hammerheads', b:'Kraken Squad',  w:'Hammerheads'},
  ]},
  {n:17, date:'May 31', theme:'Montreal landmarks', season:'s', reg:20, teams:[
    {name:'Orange Julep',    p:[{n:'Winnie',g:'f'},{n:'Sophie',g:'f'},{n:'Chy',g:'m'},{n:'Rigil',g:'m'},{n:'Michel',g:'m'},{n:'Phillipe',g:'m'}]},
    {name:'Mont-Royal',      p:[{n:'Anthony W.',g:'m'},{n:'Barbara',g:'s',sg:'f'},{n:'Nat',g:'f'},{n:'Patricio',g:'m'},{n:'Mark',g:'m'},{n:'John',g:'m'}]},
    {name:'Olympic Stadium', p:[{n:'Jose',g:'m'},{n:'Julie',g:'f'},{n:'Daniel',g:'m'},{n:'David',g:'s',sg:'m'},{n:'Steven',g:'m'},{n:'Kevin H.',g:'m'}]},
    {name:'La Ronde',        p:[{n:'Anita',g:'f'},{n:'Catherine',g:'s',sg:'f'},{n:'Bernie',g:'m'},{n:'Alain',g:'m'},{n:'Salem',g:'s',sg:'m'},{n:'Emad',g:'m'}]}],
   results:[
    {r:1, a:'Olympic Stadium', b:'Orange Julep',    w:'Olympic Stadium'},
    {r:1, a:'La Ronde',        b:'Mont-Royal',      w:'Mont-Royal'},
    {r:2, a:'Mont-Royal',      b:'Olympic Stadium', w:'Olympic Stadium'},
    {r:2, a:'La Ronde',        b:'Orange Julep',    w:'Orange Julep'},
    {r:3, a:'Olympic Stadium', b:'La Ronde',        w:'Olympic Stadium'},
    {r:3, a:'Orange Julep',    b:'Mont-Royal',      w:'Mont-Royal'},
    {r:4, a:'La Ronde',        b:'Orange Julep',    w:'La Ronde'},
    {r:4, a:'Olympic Stadium', b:'Mont-Royal',      w:'Olympic Stadium'},
  ]},
  {n:18, date:'Jun 21', theme:'Donut shops', season:'s', reg:19, teams:[
    {name:"Homer's",      p:[{n:'Bernie',g:'m'},{n:'Michel',g:'m'},{n:'Julie',g:'f'},{n:'James',g:'m'},{n:'Rigil',g:'m'},{n:'Jose',g:'m'}]},
    {name:"Tim Horton's", p:[{n:'Chy',g:'m'},{n:'Steven',g:'m'},{n:'Xuan-Mai',g:'f'},{n:'Winnie',g:'f'},{n:'Kevin L.',g:'m'},{n:'Siu',g:'s',sg:'m'}]},
    {name:"Dunkin'",      p:[{n:'Anthony W.',g:'m'},{n:'Sophie',g:'f'},{n:'David',g:'s',sg:'m'},{n:'Kevin H.',g:'m'},{n:'Nathan',g:'s',sg:'m'},{n:'Alain',g:'m'}]},
    {name:'Krispy Kreme', p:[{n:'Patricio',g:'m'},{n:'Anita',g:'f'},{n:'Joey',g:'s',sg:'m'},{n:'Emad',g:'m'},{n:'Norichar',g:'s',sg:'m'},{n:'Daniel',g:'m'}]}],
   results:[
    {r:1, a:"Homer's",      b:"Dunkin'",      w:"Dunkin'"},
    {r:1, a:'Krispy Kreme', b:"Tim Horton's", w:"Tim Horton's"},
    {r:2, a:"Tim Horton's", b:"Homer's",      w:"Tim Horton's"},
    {r:2, a:'Krispy Kreme', b:"Dunkin'",      w:'Krispy Kreme'},
    {r:3, a:"Tim Horton's", b:"Dunkin'",      w:"Dunkin'"},
    {r:3, a:"Homer's",      b:'Krispy Kreme', w:'Krispy Kreme'},
    {r:4, a:'Krispy Kreme', b:"Tim Horton's", w:'Krispy Kreme'},
    {r:4, a:"Homer's",      b:"Dunkin'",      w:"Homer's"},
  ]},
  {n:19, date:'Jun 28', theme:'Rotisserie & fried chicken', season:'s', reg:20, teams:[
    {name:'KFC',          p:[{n:'Julie',g:'f'},{n:'Rigil',g:'m'},{n:'Ke-Nam',g:'s',sg:'m'},{n:'Kevin H.',g:'m'},{n:'Arron',g:'s',sg:'m'},{n:'Winnie',g:'f'}]},
    {name:'Popeyes',      p:[{n:'Steven',g:'m'},{n:'Xuan-Mai',g:'f'},{n:'Chy',g:'m'},{n:'Alain',g:'m'},{n:'Emad',g:'m'},{n:'Sophie',g:'f'}]},
    {name:'Jack-Le-Coq',  p:[{n:'Samuel',g:'m'},{n:'Bernie',g:'m'},{n:'Catherine',g:'s',sg:'f'},{n:'Nat',g:'f'},{n:'Daniel',g:'m'},{n:'Mark',g:'m'}]},
    {name:'St-Hubert',    p:[{n:'Michel',g:'m'},{n:'Patricio',g:'m'},{n:'Jose',g:'m'},{n:'Anita',g:'f'},{n:'David',g:'s',sg:'m'},{n:'Phillipe',g:'m'}]}],
   results:[
    {r:1, a:'KFC',          b:'Jack-Le-Coq',  w:'KFC'},
    {r:1, a:'Popeyes',      b:'St-Hubert',    w:'St-Hubert'},
    {r:2, a:'KFC',          b:'Popeyes',      w:'KFC'},
    {r:2, a:'St-Hubert',    b:'Jack-Le-Coq',  w:'Jack-Le-Coq'},
    {r:3, a:'KFC',          b:'St-Hubert',    w:'KFC'},
    {r:3, a:'Popeyes',      b:'Jack-Le-Coq',  w:'Jack-Le-Coq'},
    {r:4, a:'KFC',          b:'Jack-Le-Coq',  w:'Jack-Le-Coq'},
    {r:4, a:'Popeyes',      b:'St-Hubert',    w:'Popeyes'},
    {r:5, a:'KFC',          b:'St-Hubert',    w:'St-Hubert'},
    {r:5, a:'Jack-Le-Coq',  b:'Popeyes',      w:'Jack-Le-Coq'},
  ]},
];

const WINTER_SCHED = [
  {n:1,  date:'Sunday, January 11',  s:'done'},
  {n:2,  date:'Sunday, January 18',  s:'done'},
  {n:'', date:'Sunday, January 25',  s:'off', note:'Off week'},
  {n:3,  date:'Sunday, February 1',  s:'done'},
  {n:4,  date:'Sunday, February 8',  s:'done'},
  {n:5,  date:'Sunday, February 15', s:'done'},
  {n:6,  date:'Sunday, February 22', s:'done'},
  {n:7,  date:'Sunday, March 1',     s:'done'},
  {n:8,  date:'Sunday, March 8',     s:'done'},
  {n:9,  date:'Sunday, March 15',    s:'done'},
  {n:10, date:'Sunday, March 22',    s:'done'},
  {n:'', date:'Sunday, March 29',    s:'off', note:'Off week'},
  {n:'', date:'Sunday, April 6',     s:'off', note:'Off week'},
  {n:11, date:'Sunday, April 12',    s:'done'},
  {n:12, date:'Sunday, April 19',    s:'done'},
  {n:13, date:'Sunday, April 26',    s:'done'},
  {n:14, date:'Sunday, May 3',       s:'done'},
  {n:15, date:'Sunday, May 10',      s:'done'},
];

const VDATES = new Set([
  '2026-01-11','2026-01-18','2026-02-01','2026-02-08','2026-02-15','2026-02-22',
  '2026-03-01','2026-03-08','2026-03-15','2026-03-22','2026-04-12','2026-04-19',
  '2026-04-26','2026-05-03','2026-05-10'
]);
const SUMMER_DATES = [
  '2026-05-17','2026-05-31','2026-06-21','2026-06-28',
  '2026-07-05','2026-07-12','2026-07-19','2026-07-26',
  '2026-08-02','2026-08-09','2026-08-16'
];
const SDATES = new Set(SUMMER_DATES);
const SUMMER_SCHED = [
  {n:1,  date:'Sunday, May 17',     s:'done'},
  {n:'', date:'Sunday, May 24',     s:'off', note:'Off week'},
  {n:2,  date:'Sunday, May 31',     s:'done'},
  {n:'', date:'Sunday, June 7',     s:'off', note:'Off week'},
  {n:'', date:'Sunday, June 14',    s:'off', note:'Off week'},
  {n:3,  date:'Sunday, June 21',    s:'done'},
  {n:4,  date:'Sunday, June 28',    s:'done'},
  {n:5,  date:'Sunday, July 5',     s:'su'},
  {n:6,  date:'Sunday, July 12',    s:'su'},
  {n:7,  date:'Sunday, July 19',    s:'su'},
  {n:8,  date:'Sunday, July 26',    s:'su'},
  {n:9,  date:'Sunday, August 2',   s:'su'},
  {n:10, date:'Sunday, August 9',   s:'su'},
  {n:11, date:'Sunday, August 16',  s:'su'},
];
const S2W = {
  '2026-01-11':0,'2026-01-18':1,'2026-02-01':2,'2026-02-08':3,'2026-02-15':4,
  '2026-02-22':5,'2026-03-01':6,'2026-03-08':7,'2026-03-15':8,'2026-03-22':9,
  '2026-04-12':10,'2026-04-19':11,'2026-04-26':12,'2026-05-03':13,'2026-05-10':14,
  '2026-05-17':15, '2026-05-31':16, '2026-06-21':17, '2026-06-28':18,
};

const WINTER_WEEKS = WEEKS.filter(w => !w.season);
const SUMMER_WEEKS = WEEKS.filter(w => w.season === 's');
