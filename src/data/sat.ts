/** WSET Level 2 + Level 3 Systematic Approach to Tasting (SAT) — Wine
 * Educational quick-reference. L3 scales are the descriptive superset
 * (e.g. medium(−)/medium(+)); L2 uses the same terms with fewer mid-points.
 * Not an official WSET exam document.
 */

export type ScaleOption = {
  label: string;
  note?: string;
};

export type ColourOption = {
  label: string;
  swatch: string;
};

export type VocabFamily = {
  id: string;
  name: string;
  category: 'primary' | 'secondary' | 'tertiary';
  descriptors: string[];
};

export const appearance = {
  clarity: [
    { label: 'clear' },
    { label: 'hazy', note: 'faulty' },
  ] as ScaleOption[],
  intensity: [
    { label: 'pale' },
    { label: 'medium' },
    { label: 'deep' },
  ] as ScaleOption[],
  colour: {
    white: [
      { label: 'lemon-green', swatch: '#c5d86d' },
      { label: 'lemon', swatch: '#f0e68c' },
      { label: 'gold', swatch: '#d4a017' },
      { label: 'amber', swatch: '#c87a3a' },
      { label: 'brown', swatch: '#6b3a2a' },
    ] as ColourOption[],
    rose: [
      { label: 'pink', swatch: '#e8a0b0' },
      { label: 'salmon', swatch: '#e9967a' },
      { label: 'orange', swatch: '#d4784a' },
    ] as ColourOption[],
    red: [
      { label: 'purple', swatch: '#6b2d7b' },
      { label: 'ruby', swatch: '#9b1b3a' },
      { label: 'garnet', swatch: '#8b3a3a' },
      { label: 'tawny', swatch: '#a0673b' },
      { label: 'brown', swatch: '#5c3317' },
    ] as ColourOption[],
  },
  /** Sparkling / other observations (optional; keep light in UI) */
  other: {
    bubbleQuantity: [
      { label: 'none' },
      { label: 'a few' },
      { label: 'many' },
    ] as ScaleOption[],
    bubbleSize: [
      { label: 'small' },
      { label: 'medium' },
      { label: 'large' },
    ] as ScaleOption[],
  },
};

export const nose = {
  condition: [
    { label: 'clean' },
    { label: 'unclean' },
  ] as ScaleOption[],
  intensity: [
    { label: 'light' },
    { label: 'medium(−)' },
    { label: 'medium' },
    { label: 'medium(+)' },
    { label: 'pronounced' },
  ] as ScaleOption[],
  development: [
    { label: 'youthful' },
    { label: 'developing' },
    { label: 'fully developed' },
    { label: 'tired' },
  ] as ScaleOption[],
};

export const palate = {
  sweetness: [
    { label: 'dry' },
    { label: 'off-dry' },
    { label: 'medium-dry' },
    { label: 'medium-sweet' },
    { label: 'sweet' },
    { label: 'luscious' },
  ] as ScaleOption[],
  acidity: [
    { label: 'low' },
    { label: 'medium(−)' },
    { label: 'medium' },
    { label: 'medium(+)' },
    { label: 'high' },
  ] as ScaleOption[],
  tannin: [
    { label: 'low' },
    { label: 'medium(−)' },
    { label: 'medium' },
    { label: 'medium(+)' },
    { label: 'high' },
  ] as ScaleOption[],
  alcohol: [
    { label: 'low' },
    { label: 'medium(−)' },
    { label: 'medium' },
    { label: 'medium(+)' },
    { label: 'high' },
  ] as ScaleOption[],
  body: [
    { label: 'light' },
    { label: 'medium(−)' },
    { label: 'medium' },
    { label: 'medium(+)' },
    { label: 'full' },
  ] as ScaleOption[],
  flavourIntensity: [
    { label: 'light' },
    { label: 'medium(−)' },
    { label: 'medium' },
    { label: 'medium(+)' },
    { label: 'pronounced' },
  ] as ScaleOption[],
  finish: [
    { label: 'short' },
    { label: 'medium(−)' },
    { label: 'medium' },
    { label: 'medium(+)' },
    { label: 'long' },
  ] as ScaleOption[],
  /** Sparkling / other observations */
  other: {
    mousse: [
      { label: 'delicate' },
      { label: 'creamy' },
      { label: 'aggressive' },
    ] as ScaleOption[],
  },
};

export const conclusions = {
  quality: [
    { label: 'faulty' },
    { label: 'poor' },
    { label: 'acceptable' },
    { label: 'good' },
    { label: 'very good' },
    { label: 'outstanding' },
  ] as ScaleOption[],
  readiness: [
    { label: 'drink now', note: 'not suitable for ageing' },
    { label: 'drink now', note: 'has ageing potential' },
    { label: 'too young / can age' },
    { label: 'past its best' },
  ] as ScaleOption[],
};

/** Comprehensive WSET-style aroma & flavour families with example descriptors */
export const vocabulary: VocabFamily[] = [
  // ——— Primary ———
  {
    id: 'floral',
    name: 'Floral',
    category: 'primary',
    descriptors: [
      'blossom',
      'elderflower',
      'honeysuckle',
      'jasmine',
      'orange blossom',
      'rose',
      'violet',
      'lavender',
      'geranium',
      'iris',
      'lily',
      'potpourri',
      'dried flowers',
      'perfume',
    ],
  },
  {
    id: 'green-fruit',
    name: 'Green fruit',
    category: 'primary',
    descriptors: [
      'apple',
      'green apple',
      'pear',
      'gooseberry',
      'grape',
      'quince',
      'crab apple',
      'pear drop',
    ],
  },
  {
    id: 'citrus',
    name: 'Citrus fruit',
    category: 'primary',
    descriptors: [
      'lemon',
      'lime',
      'grapefruit',
      'orange',
      'tangerine',
      'mandarin',
      'lemon zest',
      'orange peel',
      'citrus pith',
      'bergamot',
    ],
  },
  {
    id: 'stone-fruit',
    name: 'Stone fruit',
    category: 'primary',
    descriptors: [
      'peach',
      'white peach',
      'yellow peach',
      'apricot',
      'nectarine',
      'plum (yellow/white)',
      'greengage',
    ],
  },
  {
    id: 'tropical',
    name: 'Tropical fruit',
    category: 'primary',
    descriptors: [
      'banana',
      'lychee',
      'mango',
      'passion fruit',
      'pineapple',
      'melon',
      'guava',
      'papaya',
      'coconut (fresh)',
      'kiwi',
    ],
  },
  {
    id: 'red-fruit',
    name: 'Red fruit',
    category: 'primary',
    descriptors: [
      'strawberry',
      'raspberry',
      'red cherry',
      'cranberry',
      'redcurrant',
      'pomegranate',
      'red plum',
      'wild strawberry',
      'sour cherry',
    ],
  },
  {
    id: 'black-fruit',
    name: 'Black fruit',
    category: 'primary',
    descriptors: [
      'blackberry',
      'black cherry',
      'blackcurrant',
      'cassis',
      'blueberry',
      'black plum',
      'mulberry',
      'damson',
      'sloe',
    ],
  },
  {
    id: 'dried-fruit',
    name: 'Dried fruit',
    category: 'primary',
    descriptors: [
      'raisin',
      'sultana',
      'fig',
      'date',
      'prune',
      'dried apricot',
      'dried cranberry',
      'candied fruit',
    ],
  },
  {
    id: 'herbaceous',
    name: 'Herbaceous / green',
    category: 'primary',
    descriptors: [
      'green bell pepper',
      'grass',
      'cut grass',
      'asparagus',
      'tomato leaf',
      'nettle',
      'green bean',
      'pea shoot',
      'leafy',
      'stemmy',
    ],
  },
  {
    id: 'herbal',
    name: 'Herbal',
    category: 'primary',
    descriptors: [
      'mint',
      'eucalyptus',
      'fennel',
      'dill',
      'bay leaf',
      'thyme',
      'rosemary',
      'oregano',
      'sage',
      'basil',
      'lavender (herbal)',
      'tea leaf',
    ],
  },
  {
    id: 'spice-primary',
    name: 'Spice',
    category: 'primary',
    descriptors: [
      'black pepper',
      'white pepper',
      'liquorice',
      'anise',
      'star anise',
      'ginger (fresh)',
      'juniper',
      'mustard seed',
    ],
  },
  {
    id: 'vegetable',
    name: 'Vegetable / other green',
    category: 'primary',
    descriptors: [
      'olive (green)',
      'olive (black)',
      'artichoke',
      'cabbage',
      'cauliflower',
      'beetroot',
      'tomato',
    ],
  },
  {
    id: 'other-primary',
    name: 'Other primary',
    category: 'primary',
    descriptors: [
      'mineral',
      'wet stone',
      'flint',
      'slate',
      'chalk',
      'petrol / kerosene',
      'rubber',
      'smoke (volcanic)',
      'honey (ripe grape)',
      'beeswax',
      'wet wool',
      'sweaty',
      'stony',
      'saline',
    ],
  },
  // ——— Secondary ———
  {
    id: 'yeast-lees',
    name: 'Yeast / lees / autolysis',
    category: 'secondary',
    descriptors: [
      'biscuit',
      'bread',
      'toast',
      'pastry',
      'brioche',
      'dough',
      'croissant',
      'yogurt',
      'cheese',
      'beer',
      'lees',
      'nutty (lees)',
      'savoury yeast',
    ],
  },
  {
    id: 'mlf',
    name: 'MLF',
    category: 'secondary',
    descriptors: [
      'butter',
      'cream',
      'sour cream',
      'cheese',
      'yogurt',
      'buttermilk',
      'lactic',
    ],
  },
  {
    id: 'oak',
    name: 'Oak / toast / barrel',
    category: 'secondary',
    descriptors: [
      'vanilla',
      'clove',
      'coconut',
      'cedar',
      'smoke',
      'charred wood',
      'toast',
      'coffee',
      'chocolate',
      'cocoa',
      'nutmeg',
      'cinnamon',
      'caramel',
      'dill (American oak)',
      'pencil shavings',
      'sawdust',
      'resin',
      'sandalwood',
      'mocha',
    ],
  },
  // ——— Tertiary ———
  {
    id: 'bottle-age-white',
    name: 'Bottle age / development (white)',
    category: 'tertiary',
    descriptors: [
      'dried apricot',
      'marmalade',
      'orange peel',
      'dried fruit',
      'honey',
      'hay',
      'straw',
      'nuts',
      'almond',
      'hazelnut',
      'walnut',
      'caramel',
      'toffee',
      'ginger',
      'marzipan',
      'beeswax',
      'petrol (aged Riesling)',
    ],
  },
  {
    id: 'bottle-age-red',
    name: 'Bottle age / development (red)',
    category: 'tertiary',
    descriptors: [
      'dried fruit',
      'fig',
      'prune',
      'cooked fruit',
      'jam',
      'compote',
      'leather',
      'earth',
      'mushroom',
      'forest floor',
      'wet leaves',
      'truffle',
      'meat',
      'game',
      'farmyard',
      'tobacco',
      'cigar box',
      'cedar',
      'tea',
      'potpourri',
      'dried flowers',
      'savoury',
    ],
  },
  {
    id: 'oxidative',
    name: 'Oxidative / deliberate oxidation',
    category: 'tertiary',
    descriptors: [
      'caramel',
      'toffee',
      'coffee',
      'chocolate',
      'walnut',
      'almond',
      'dried fruit',
      'raisin',
      'bruised apple',
      'sherry-like',
      'rancio',
    ],
  },
  {
    id: 'microbial-tertiary',
    name: 'Microbial / other tertiary',
    category: 'tertiary',
    descriptors: [
      'mushroom',
      'truffle',
      'earth',
      'farmyard',
      'stable',
      'leather',
      'meat',
      'smoke (aged)',
      'tar',
      'medicinal',
    ],
  },
];

export const navSections = [
  { id: 'appearance', label: 'Appearance' },
  { id: 'nose', label: 'Nose' },
  { id: 'palate', label: 'Palate' },
  { id: 'conclusions', label: 'Conclusions' },
] as const;
