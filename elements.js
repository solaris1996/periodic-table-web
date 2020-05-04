var e = [
  {number:1,z_name:'H',name:'水素',name_en:'Hydrogen',group1:'1',group2:'',metal:'非金属元素',state:'常温で気体',notes:''},
  {number:2,z_name:'He',name:'ヘリウム',name_en:'Helium',group1:'18',group2:'希ガス',metal:'非金属元素',state:'常温で気体',notes:''},
  {number:3,z_name:'Li',name:'リチウム',name_en:'Lithium',group1:'1',group2:'アルカリ金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:4,z_name:'Be',name:'ベリリウム',name_en:'Beryllium',group1:'2',group2:'卑金属元素',metal:'金属元素',state:'常温で固体',notes:''},
  {number:5,z_name:'B',name:'ホウ素',name_en:'Boron',group1:'13',group2:'',metal:'半金属元素',state:'常温で固体',notes:''},
  {number:6,z_name:'C',name:'炭素',name_en:'Carbon',group1:'14',group2:'',metal:'非金属元素',state:'常温で固体',notes:''},
  {number:7,z_name:'N',name:'窒素',name_en:'Nitrogen',group1:'15',group2:'',metal:'非金属元素',state:'常温で気体',notes:''},
  {number:8,z_name:'O',name:'酸素',name_en:'Oxygen',group1:'16',group2:'',metal:'非金属元素',state:'常温で気体',notes:''},
  {number:9,z_name:'F',name:'フッ素',name_en:'Fluorine',group1:'17',group2:'ハロゲン',metal:'非金属元素',state:'常温で気体',notes:''},
  {number:10,z_name:'Ne',name:'ネオン',name_en:'Neon',group1:'18',group2:'希ガス',metal:'非金属元素',state:'常温で気体',notes:''},
  {number:11,z_name:'Na',name:'ナトリウム',name_en:'Sodium',group1:'1',group2:'アルカリ金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:12,z_name:'Mg',name:'マグネシウム',name_en:'Magnesium',group1:'2',group2:'卑金属元素',metal:'金属元素',state:'常温で固体',notes:''},
  {number:13,z_name:'Al',name:'アルミニウム',name_en:'Aluminium[注 1]',group1:'13',group2:'卑金属元素',metal:'金属元素',state:'常温で固体',notes:''},
  {number:14,z_name:'Si',name:'ケイ素',name_en:'Silicon',group1:'14',group2:'',metal:'半金属元素',state:'常温で固体',notes:''},
  {number:15,z_name:'P',name:'リン',name_en:'Phosphorus',group1:'15',group2:'',metal:'非金属元素',state:'常温で固体',notes:''},
  {number:16,z_name:'S',name:'硫黄',name_en:'Sulfur',group1:'16',group2:'',metal:'非金属元素',state:'常温で固体',notes:''},
  {number:17,z_name:'Cl',name:'塩素',name_en:'Chlorine',group1:'17',group2:'ハロゲン',metal:'非金属元素',state:'常温で気体',notes:''},
  {number:18,z_name:'Ar',name:'アルゴン',name_en:'Argon',group1:'18',group2:'希ガス',metal:'非金属元素',state:'常温で気体',notes:''},
  {number:19,z_name:'K',name:'カリウム',name_en:'Potassium',group1:'1',group2:'アルカリ金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:20,z_name:'Ca',name:'カルシウム',name_en:'Calcium',group1:'2',group2:'アルカリ土類金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:21,z_name:'Sc',name:'スカンジウム',name_en:'Scandium',group1:'3',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:22,z_name:'Ti',name:'チタン',name_en:'Titanium',group1:'4',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:23,z_name:'V',name:'バナジウム',name_en:'Vanadium',group1:'5',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:24,z_name:'Cr',name:'クロム',name_en:'Chromium',group1:'6',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:25,z_name:'Mn',name:'マンガン',name_en:'Manganese',group1:'7',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:26,z_name:'Fe',name:'鉄',name_en:'Iron',group1:'8',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:27,z_name:'Co',name:'コバルト',name_en:'Cobalt',group1:'9',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:28,z_name:'Ni',name:'ニッケル',name_en:'Nickel',group1:'10',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:29,z_name:'Cu',name:'銅',name_en:'Copper',group1:'11',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:30,z_name:'Zn',name:'亜鉛',name_en:'Zinc',group1:'12',group2:'卑金属元素',metal:'金属元素',state:'常温で固体',notes:''},
  {number:31,z_name:'Ga',name:'ガリウム',name_en:'Gallium',group1:'13',group2:'卑金属元素',metal:'金属元素',state:'室温で液体',notes:''},
  {number:32,z_name:'Ge',name:'ゲルマニウム',name_en:'Germanium',group1:'14',group2:'',metal:'半金属元素',state:'常温で固体',notes:''},
  {number:33,z_name:'As',name:'ヒ素',name_en:'Arsenic',group1:'15',group2:'',metal:'半金属元素',state:'常温で固体',notes:''},
  {number:34,z_name:'Se',name:'セレン',name_en:'Selenium',group1:'16',group2:'',metal:'非金属元素',state:'常温で固体',notes:''},
  {number:35,z_name:'Br',name:'臭素',name_en:'Bromine',group1:'17',group2:'ハロゲン',metal:'非金属元素',state:'常温で液体',notes:''},
  {number:36,z_name:'Kr',name:'クリプトン',name_en:'Krypton',group1:'18',group2:'希ガス',metal:'非金属元素',state:'常温で気体',notes:''},
  {number:37,z_name:'Rb',name:'ルビジウム',name_en:'Rubidium',group1:'1',group2:'アルカリ金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:38,z_name:'Sr',name:'ストロンチウム',name_en:'Strontium',group1:'2',group2:'アルカリ土類金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:39,z_name:'Y',name:'イットリウム',name_en:'Yttrium',group1:'3',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:40,z_name:'Zr',name:'ジルコニウム',name_en:'Zirconium',group1:'4',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:41,z_name:'Nb',name:'ニオブ',name_en:'Niobium',group1:'5',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:42,z_name:'Mo',name:'モリブデン',name_en:'Molybdenum',group1:'6',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:43,z_name:'Tc',name:'テクネチウム',name_en:'Technetium',group1:'7',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:44,z_name:'Ru',name:'ルテニウム',name_en:'Ruthenium',group1:'8',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:45,z_name:'Rh',name:'ロジウム',name_en:'Rhodium',group1:'9',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:46,z_name:'Pd',name:'パラジウム',name_en:'Palladium',group1:'10',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:47,z_name:'Ag',name:'銀',name_en:'Silver',group1:'11',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:48,z_name:'Cd',name:'カドミウム',name_en:'Cadmium',group1:'12',group2:'卑金属元素',metal:'金属元素',state:'常温で固体',notes:''},
  {number:49,z_name:'In',name:'インジウム',name_en:'Indium',group1:'13',group2:'卑金属元素',metal:'金属元素',state:'常温で固体',notes:''},
  {number:50,z_name:'Sn',name:'スズ',name_en:'Tin',group1:'14',group2:'卑金属元素',metal:'金属元素',state:'常温で固体',notes:''},
  {number:51,z_name:'Sb',name:'アンチモン',name_en:'Antimony',group1:'15',group2:'',metal:'半金属元素',state:'常温で固体',notes:''},
  {number:52,z_name:'Te',name:'テルル',name_en:'Tellurium',group1:'16',group2:'',metal:'半金属元素',state:'常温で固体',notes:''},
  {number:53,z_name:'I',name:'ヨウ素',name_en:'Iodine',group1:'17',group2:'ハロゲン',metal:'非金属元素',state:'常温で固体',notes:''},
  {number:54,z_name:'Xe',name:'キセノン',name_en:'Xenon',group1:'18',group2:'希ガス',metal:'非金属元素',state:'常温で気体',notes:''},
  {number:55,z_name:'Cs',name:'セシウム',name_en:'Caesium[注 3]',group1:'1',group2:'アルカリ金属',metal:'金属元素',state:'室温で液体',notes:''},
  {number:56,z_name:'Ba',name:'バリウム',name_en:'Barium',group1:'2',group2:'アルカリ土類金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:57,z_name:'La',name:'ランタン',name_en:'Lanthanum',group1:'3L',group2:'希土類元素 (ランタノイド)',metal:'金属元素',state:'常温で固体',notes:''},
  {number:58,z_name:'Ce',name:'セリウム',name_en:'Cerium',group1:'3L',group2:'希土類元素 (ランタノイド)',metal:'金属元素',state:'常温で固体',notes:''},
  {number:59,z_name:'Pr',name:'プラセオジム',name_en:'Praseodymium',group1:'3L',group2:'希土類元素 (ランタノイド)',metal:'金属元素',state:'常温で固体',notes:''},
  {number:60,z_name:'Nd',name:'ネオジム',name_en:'Neodymium',group1:'3L',group2:'希土類元素 (ランタノイド)',metal:'金属元素',state:'常温で固体',notes:''},
  {number:61,z_name:'Pm',name:'プロメチウム',name_en:'Promethium',group1:'3L',group2:'希土類元素 (ランタノイド)',metal:'金属元素',state:'常温で固体',notes:''},
  {number:62,z_name:'Sm',name:'サマリウム',name_en:'Samarium',group1:'3L',group2:'希土類元素 (ランタノイド)',metal:'金属元素',state:'常温で固体',notes:''},
  {number:63,z_name:'Eu',name:'ユウロピウム',name_en:'Europium',group1:'3L',group2:'希土類元素 (ランタノイド)',metal:'金属元素',state:'常温で固体',notes:''},
  {number:64,z_name:'Gd',name:'ガドリニウム',name_en:'Gadolinium',group1:'3L',group2:'希土類元素 (ランタノイド)',metal:'金属元素',state:'常温で固体',notes:''},
  {number:65,z_name:'Tb',name:'テルビウム',name_en:'Terbium',group1:'3L',group2:'希土類元素 (ランタノイド)',metal:'金属元素',state:'常温で固体',notes:''},
  {number:66,z_name:'Dy',name:'ジスプロシウム',name_en:'Dysprosium',group1:'3L',group2:'希土類元素 (ランタノイド)',metal:'金属元素',state:'常温で固体',notes:''},
  {number:67,z_name:'Ho',name:'ホルミウム',name_en:'Holmium',group1:'3L',group2:'希土類元素 (ランタノイド)',metal:'金属元素',state:'常温で固体',notes:''},
  {number:68,z_name:'Er',name:'エルビウム',name_en:'Erbium',group1:'3L',group2:'希土類元素 (ランタノイド)',metal:'金属元素',state:'常温で固体',notes:''},
  {number:69,z_name:'Tm',name:'ツリウム',name_en:'Thulium',group1:'3L',group2:'希土類元素 (ランタノイド)',metal:'金属元素',state:'常温で固体',notes:''},
  {number:70,z_name:'Yb',name:'イッテルビウム',name_en:'Ytterbium',group1:'3L',group2:'希土類元素 (ランタノイド)',metal:'金属元素',state:'常温で固体',notes:''},
  {number:71,z_name:'Lu',name:'ルテチウム',name_en:'Lutetium',group1:'3L',group2:'希土類元素 (ランタノイド)',metal:'金属元素',state:'常温で固体',notes:''},
  {number:72,z_name:'Hf',name:'ハフニウム',name_en:'Hafnium',group1:'4',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:73,z_name:'Ta',name:'タンタル',name_en:'Tantalum',group1:'5',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:74,z_name:'W',name:'タングステン',name_en:'Tungsten',group1:'6',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:75,z_name:'Re',name:'レニウム',name_en:'Rhenium',group1:'7',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:76,z_name:'Os',name:'オスミウム',name_en:'Osmium',group1:'8',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:77,z_name:'Ir',name:'イリジウム',name_en:'Iridium',group1:'9',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:78,z_name:'Pt',name:'白金',name_en:'Platinum',group1:'10',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:79,z_name:'Au',name:'金',name_en:'Gold',group1:'11',group2:'遷移金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:80,z_name:'Hg',name:'水銀',name_en:'Mercury',group1:'12',group2:'卑金属元素',metal:'金属元素',state:'常温で液体',notes:''},
  {number:81,z_name:'Tl',name:'タリウム',name_en:'Thallium',group1:'13',group2:'卑金属元素',metal:'金属元素',state:'常温で固体',notes:''},
  {number:82,z_name:'Pb',name:'鉛',name_en:'Lead',group1:'14',group2:'卑金属元素',metal:'金属元素',state:'常温で固体',notes:''},
  {number:83,z_name:'Bi',name:'ビスマス',name_en:'Bismuth',group1:'15',group2:'卑金属元素',metal:'金属元素',state:'常温で固体',notes:''},
  {number:84,z_name:'Po',name:'ポロニウム',name_en:'Polonium',group1:'16',group2:'卑金属元素',metal:'金属元素',state:'常温で固体',notes:''},
  {number:85,z_name:'At',name:'アスタチン',name_en:'Astatine',group1:'17',group2:'ハロゲン',metal:'半金属元素',state:'常温で固体',notes:''},
  {number:86,z_name:'Rn',name:'ラドン',name_en:'Radon',group1:'18',group2:'希ガス',metal:'非金属元素',state:'常温で気体',notes:''},
  {number:87,z_name:'Fr',name:'フランシウム',name_en:'Francium',group1:'1',group2:'アルカリ金属',metal:'金属元素',state:'室温で液体',notes:''},
  {number:88,z_name:'Ra',name:'ラジウム',name_en:'Radium',group1:'2',group2:'アルカリ土類金属',metal:'金属元素',state:'常温で固体',notes:''},
  {number:89,z_name:'Ac',name:'アクチニウム',name_en:'Actinium',group1:'3A',group2:'アクチノイド',metal:'金属元素',state:'常温で固体',notes:''},
  {number:90,z_name:'Th',name:'トリウム',name_en:'Thorium',group1:'3A',group2:'アクチノイド',metal:'金属元素',state:'常温で固体',notes:''},
  {number:91,z_name:'Pa',name:'プロトアクチニウム',name_en:'Protactinium',group1:'3A',group2:'アクチノイド',metal:'金属元素',state:'常温で固体',notes:''},
  {number:92,z_name:'U',name:'ウラン',name_en:'Uranium',group1:'3A',group2:'アクチノイド',metal:'金属元素',state:'常温で固体',notes:''},
  {number:93,z_name:'Np',name:'ネプツニウム',name_en:'Neptunium',group1:'3A',group2:'アクチノイド',metal:'金属元素',state:'常温で固体',notes:''},
  {number:94,z_name:'Pu',name:'プルトニウム',name_en:'Plutonium',group1:'3A',group2:'アクチノイド',metal:'金属元素',state:'常温で固体',notes:''},
  {number:95,z_name:'Am',name:'アメリシウム',name_en:'Americium',group1:'3A',group2:'アクチノイド',metal:'金属元素',state:'常温で固体',notes:'人工元素'},
  {number:96,z_name:'Cm',name:'キュリウム',name_en:'Curium',group1:'3A',group2:'アクチノイド',metal:'金属元素',state:'常温で固体',notes:'人工元素'},
  {number:97,z_name:'Bk',name:'バークリウム',name_en:'Berkelium',group1:'3A',group2:'アクチノイド',metal:'金属元素',state:'常温で固体',notes:'人工元素'},
  {number:98,z_name:'Cf',name:'カリホルニウム',name_en:'Californium',group1:'3A',group2:'アクチノイド',metal:'金属元素',state:'常温で固体',notes:'人工元素'},
  {number:99,z_name:'Es',name:'アインスタイニウム',name_en:'Einsteinium',group1:'3A',group2:'アクチノイド',metal:'金属元素',state:'常温で固体',notes:'人工元素'},
  {number:100,z_name:'Fm',name:'フェルミウム',name_en:'Fermium',group1:'3A',group2:'アクチノイド',metal:'金属元素',state:'不明',notes:'人工元素'},
  {number:101,z_name:'Md',name:'メンデレビウム',name_en:'Mendelevium',group1:'3A',group2:'アクチノイド',metal:'金属元素',state:'不明',notes:'人工元素'},
  {number:102,z_name:'No',name:'ノーベリウム',name_en:'Nobelium',group1:'3A',group2:'アクチノイド',metal:'金属元素',state:'不明',notes:'人工元素'},
  {number:103,z_name:'Lr',name:'ローレンシウム',name_en:'Lawrencium',group1:'3A',group2:'アクチノイド',metal:'金属元素',state:'不明',notes:'人工元素'},
  {number:104,z_name:'Rf',name:'ラザホージウム',name_en:'Rutherfordium',group1:'4',group2:'遷移金属',metal:'金属元素',state:'不明',notes:'人工元素'},
  {number:105,z_name:'Db',name:'ドブニウム',name_en:'Dubnium',group1:'5',group2:'遷移金属',metal:'金属元素',state:'不明',notes:'人工元素'},
  {number:106,z_name:'Sg',name:'シーボーギウム',name_en:'Seaborgium',group1:'6',group2:'遷移金属',metal:'金属元素',state:'不明',notes:'人工元素'},
  {number:107,z_name:'Bh',name:'ボーリウム',name_en:'Bohrium',group1:'7',group2:'遷移金属',metal:'金属元素',state:'不明',notes:'人工元素'},
  {number:108,z_name:'Hs',name:'ハッシウム',name_en:'Hassium',group1:'8',group2:'遷移金属',metal:'金属元素',state:'不明',notes:'人工元素'},
  {number:109,z_name:'Mt',name:'マイトネリウム',name_en:'Meitnerium',group1:'9',group2:'遷移金属',metal:'不明',state:'不明',notes:'人工元素'},
  {number:110,z_name:'Ds',name:'ダームスタチウム',name_en:'Darmstadtium',group1:'10',group2:'遷移金属',metal:'不明',state:'不明',notes:'人工元素'},
  {number:111,z_name:'Rg',name:'レントゲニウム',name_en:'Roentgenium',group1:'11',group2:'遷移金属',metal:'不明',state:'不明',notes:'人工元素'},
  {number:112,z_name:'Cn',name:'コペルニシウム',name_en:'Copernicium',group1:'12',group2:'',metal:'不明',state:'不明',notes:'人工元素'},
  {number:113,z_name:'Nh',name:'ニホニウム',name_en:'Nihonium',group1:'13',group2:'',metal:'不明',state:'不明',notes:'人工元素'},
  {number:114,z_name:'Fl',name:'フレロビウム',name_en:'Flerovium',group1:'14',group2:'',metal:'不明',state:'不明',notes:'人工元素'},
  {number:115,z_name:'Mc',name:'モスコビウム',name_en:'Moscovium',group1:'15',group2:'',metal:'不明',state:'不明',notes:'人工元素'},
  {number:116,z_name:'Lv',name:'リバモリウム',name_en:'Livermorium',group1:'16',group2:'',metal:'不明',state:'不明',notes:'人工元素'},
  {number:117,z_name:'Ts',name:'テネシン',name_en:'Tennessine',group1:'17',group2:'',metal:'不明',state:'不明',notes:'人工元素'},
  {number:118,z_name:'Og',name:'オガネソン',name_en:'Oganesson',group1:'18',group2:'',metal:'不明',state:'不明',notes:'人工元素'}
]