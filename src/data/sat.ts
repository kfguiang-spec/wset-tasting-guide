/** WSET Level 3 Systematic Approach to Tasting (SAT) — Wine
 * Educational quick-reference of commonly published SAT descriptive terms.
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

export const vocabulary: VocabFamily[] = [
  // Primary
  {
    id: 'floral',
    name: 'Floral',
    category: 'primary',
    descriptors: ['blossom', 'rose', 'violet', 'elderflower', 'honeysuckle', 'jasmine', 'lavender'],
  },
  {
    id: 'green-fruit',
    name: 'Green fruit',
    category: 'primary',
    descriptors: ['apple', 'pear', 'gooseberry', 'grape', 'quince'],
  },
  {
    id: 'citrus',
    name: 'Citrus fruit',
    category: 'primary',
    descriptors: ['lemon', 'lime', 'grapefruit', 'orange', 'tangerine', 'lemon zest'],
  },
  {
    id: 'stone-fruit',
    name: 'Stone fruit',
    category: 'primary',
    descriptors: ['peach', 'apricot', 'nectarine', 'plum (white)'],
  },
  {
    id: 'tropical',
    name: 'Tropical fruit',
    category: 'primary',
    descriptors: ['banana', 'lychee', 'mango', 'passion fruit', 'pineapple', 'melon'],
  },
  {
    id: 'red-fruit',
    name: 'Red fruit',
    category: 'primary',
    descriptors: ['strawberry', 'raspberry', 'red cherry', 'cranberry', 'redcurrant', 'pomegranate'],
  },
  {
    id: 'black-fruit',
    name: 'Black fruit',
    category: 'primary',
    descriptors: ['blackberry', 'black cherry', 'blackcurrant', 'blueberry', 'plum (black)'],
  },
  {
    id: 'herbaceous',
    name: 'Herbaceous',
    category: 'primary',
    descriptors: ['green bell pepper', 'grass', 'asparagus', 'tomato leaf', 'cut grass'],
  },
  {
    id: 'herbal',
    name: 'Herbal',
    category: 'primary',
    descriptors: ['mint', 'eucalyptus', 'fennel', 'dill', 'bay leaf', 'thyme', 'rosemary'],
  },
  {
    id: 'spice-primary',
    name: 'Spice (primary)',
    category: 'primary',
    descriptors: ['black pepper', 'white pepper', 'liquorice', 'anise'],
  },
  {
    id: 'other-primary',
    name: 'Other primary',
    category: 'primary',
    descriptors: ['mineral', 'wet stone', 'flint', 'petrol / kerosene', 'honey (ripe)', 'wax'],
  },
  // Secondary
  {
    id: 'yeast-lees',
    name: 'Yeast / lees',
    category: 'secondary',
    descriptors: ['biscuit', 'bread', 'toast', 'pastry', 'brioche', 'yogurt', 'cheese', 'lees'],
  },
  {
    id: 'mlf',
    name: 'MLF',
    category: 'secondary',
    descriptors: ['butter', 'cream', 'cheese', 'yogurt'],
  },
  {
    id: 'oak',
    name: 'Oak / toast',
    category: 'secondary',
    descriptors: ['vanilla', 'clove', 'coconut', 'cedar', 'smoke', 'charred wood', 'toast', 'coffee', 'chocolate'],
  },
  // Tertiary
  {
    id: 'bottle-age-white',
    name: 'Bottle age (white)',
    category: 'tertiary',
    descriptors: ['dried apricot', 'marmalade', 'dried fruit', 'honey', 'hay', 'nuts', 'almond', 'hazelnut', 'caramel'],
  },
  {
    id: 'bottle-age-red',
    name: 'Bottle age (red)',
    category: 'tertiary',
    descriptors: ['dried fruit', 'fig', 'prune', 'leather', 'earth', 'mushroom', 'forest floor', 'meat', 'farmyard', 'tobacco', 'cedar'],
  },
  {
    id: 'oxidative',
    name: 'Oxidative / other tertiary',
    category: 'tertiary',
    descriptors: ['caramel', 'toffee', 'coffee', 'chocolate', 'walnut', 'dried fruit'],
  },
];

export const navSections = [
  { id: 'appearance', label: 'Appearance' },
  { id: 'nose', label: 'Nose' },
  { id: 'palate', label: 'Palate' },
  { id: 'conclusions', label: 'Conclusions' },
] as const;
