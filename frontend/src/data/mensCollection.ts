export interface MensProduct {
  id: string;
  title: string;
  category: 'Sherwanis' | 'Bandhgalas' | 'Kurtas' | 'Nehru Jackets' | 'Tuxedos' | 'Bottoms' | 'Accessories' | string;
  price: number; // in INR
  salePrice?: number | null;
  sku?: string;
  imageFront: string;
  imageDetail: string;
  color: string;
  colorHex?: string;
  craft: string;
  description: string;
  badge?: string;
  sizes: string[];
  inStockSizes?: string[];
  readyToShip?: boolean;
  styleNumber?: string;
  measurements?: string;
  fabricContent?: string;
  componentsCount?: number;
  setIncludes?: string;
  washCare?: string;
  countryOfOrigin?: string;
  manufacturerAddress?: string;
  returnsPolicy?: string;
  disclaimer?: string;
  editorialStory?: string;
  deliveryMethod?: 'both' | 'home' | 'pickup' | string;
  colorVariants?: any;
  gallery?: string[];
}

export interface HeroSlide {
  id: string;
  image: string;
  mobileImage: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    image: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-AD-INDIA-Library/default/dw1b3dcfd0/AD_Refresh_Aug_2026/desktop/1920X800_AD_MEN_DESK_BANNER.jpg',
    mobileImage: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-AD-INDIA-Library/default/dwe7ca4d0a/AD_Refresh_Aug_2026/mobile/800X1000_AD_MEN_MOB_BANNER.jpg',
    eyebrow: 'Autumn / Winter 2026',
    title: 'LOVE ALL | MENSWEAR',
    subtitle: 'Heirloom Sherwanis & Imperial Bandhgalas Tailored For Sovereign Lifetime Celebrations',
    primaryCtaText: 'DISCOVER COLLECTION',
    primaryCtaLink: '/shop',
    secondaryCtaText: 'BOOK ATELIER FITTING',
    secondaryCtaLink: '#bespoke-appointment',
  },
  {
    id: 'slide-2',
    image: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-AD-INDIA-Library/default/dw95655a6d/AD_Refresh_Aug_2026/desktop/1920X800_AD_MEN_SUIT_DESK_BANNER.jpg',
    mobileImage: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-AD-INDIA-Library/default/dw69a23992/AD_Refresh_Aug_2026/mobile/800X1000_AD_MEN_SUIT_MOB_BANNER.jpg',
    eyebrow: 'The Groom Edit',
    title: 'ROYAL HEIRLOOM CRAFT',
    subtitle: 'Zardozi, Pichhwai & Hand-Embroidered Velvet Masterpieces',
    primaryCtaText: 'EXPLORE SHERWANIS',
    primaryCtaLink: '/collections/sherwanis',
    secondaryCtaText: 'PRIVATE CONSULTATION',
    secondaryCtaLink: '#bespoke-appointment',
  },
];

export const MENS_PRODUCTS: MensProduct[] = [
  {
    id: '101',
    title: 'Daydream Embroidered Zardozi Silk Bandhgala',
    category: 'Bandhgalas',
    price: 120000,
    imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw67b07f8a/images/hires/FW26/F26MP32J_OFF%20WHITE_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    imageDetail: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw0edbbba5/images/hires/FW26/F26MP32J_OFF%20WHITE_3.jpg?sw=850&sh=1275&sm=fit&strip=false',
    color: 'Off White',
    colorHex: '#EDE7DF',
    craft: 'Zardozi Gold-Thread & French Knots',
    description: 'An expression of soft florals in a sovereign garden. Handcrafted by master artisans in precious gold-thread work and French knots on pure raw silk.',
    badge: 'FW26 RUNWAY',
    sizes: ['38', '40', '42', '44', '46', '48'],
    inStockSizes: ['38', '42', '44', '46', '48'],
    readyToShip: true,
  },
  {
    id: '102',
    title: 'Kindred Embroidered Zardozi Silk Sherwani',
    category: 'Sherwanis',
    price: 290000,
    imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dwf27d8283/images/hires/FW26/F26MP8SR_BEIGE_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    imageDetail: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw6c58fa09/images/hires/FW26/F26MP8SR_BEIGE_3.jpg?sw=850&sh=1275&sm=fit&strip=false',
    color: 'Beige',
    colorHex: '#D6C7B2',
    craft: 'Imperial Metallic Zardozi & Resham',
    description: 'A sovereign heirloom piece in raw silk adorned with dense Mughal vine embroidery, paired with a hand-spun churidar and tissue silk stole.',
    badge: 'EXCLUSIVE',
    sku: 'MM-SHR-102',
    salePrice: 275000,
    sizes: ['38', '40', '42', '44', '46', '48'],
    inStockSizes: ['38', '40', '42', '44', '46'],
    readyToShip: true,
    styleNumber: 'F26MP8',
    measurements: 'Sherwani Length - 110 cm (43.3 In)\nChuridar Fabric - 250 cm (2.5 Mtrs)\nDraped Stole - 250 cm (2.5 Mtrs)',
    fabricContent: '100% Silk + Lining : 100% Viscose',
    componentsCount: 3,
    setIncludes: 'Hand-embroidered Sherwani, Churidar Fabric & Handcrafted Silk Stole',
    washCare: 'Dry Clean / Spot Clean',
    countryOfOrigin: 'India',
    manufacturerAddress: 'House of Mangesh Mahadev Private Limited, Plot No R 847/1/1, TTC Ind. Area, MIDC, Rabale, Navi Mumbai, India - 400701.',
    returnsPolicy: 'This item is not eligible for return or exchange. Custom tailored couture fittings available.',
    disclaimer: 'The colour of the product may vary slightly from how it appears here. This may be due to different display settings on various devices and also because of any lighting filters or special effects used during the shoot.',
    editorialStory: 'Zardozi has existed in India since the time of the Rig Veda and reached its peak under Mughal patronage. A form of metal-thread embroidery whose name comes from two Urdu words — zar, meaning gold, and doz, meaning hand-work or embroidery. Once used to enrich the attire of kings, its floral motifs worked in gold and soft-coloured thread were drawn from Mughal court paintings & dressed generations of nobility.\n\nOur Kindred Sherwani from the Love All F/W 2026 collection is an expression of soft florals in a sovereign garden. Zardozi\'s gold-thread work has always had this quality of quiet indulgence, its motifs catching the light, glowing softly. Finished by master artisans in threadwork & French knots, this silk ensemble comes tailored with imperial poise.',
    deliveryMethod: 'both',
    colorVariants: [
      {
        id: 'var-beige',
        color: 'Beige',
        colorHex: '#D6C7B2',
        imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dwf27d8283/images/hires/FW26/F26MP8SR_BEIGE_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
        sizes: ['38', '40', '42', '44', '46', '48'],
        inStockSizes: ['38', '40', '42', '44', '46'],
      },
      {
        id: 'var-black',
        color: 'Black',
        colorHex: '#1C1917',
        imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dwf27d8283/images/hires/FW26/F26MP8SR_BEIGE_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
        sizes: ['40', '44'],
        inStockSizes: ['40', '44'],
      },
      {
        id: 'var-blue',
        color: 'Royal Blue',
        colorHex: '#1E3A8A',
        imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dwf27d8283/images/hires/FW26/F26MP8SR_BEIGE_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
        sizes: ['38', '40'],
        inStockSizes: ['38'],
      },
    ],
  },
  {
    id: '103',
    title: 'Fondness Embroidered Silk Nehru Jacket',
    category: 'Nehru Jackets',
    price: 75000,
    imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dwfab212d9/images/hires/FW26/F26MP2B_SAGE_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    imageDetail: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw7de6a748/images/hires/FW26/F26MP2B_SAGE_3.jpg?sw=850&sh=1275&sm=fit&strip=false',
    color: 'Sage',
    colorHex: '#9EAD9F',
    craft: 'Flora Aari & Dori Embroidery',
    description: 'Crafted in soothing sage mulberry silk, detailed with botanical floral motifs inspired by the royal gardens of Jaipur.',
    badge: 'FW26 RUNWAY',
    sizes: ['38', '40', '42', '44', '46', '48'],
    inStockSizes: ['38', '40', '42', '46', '48'],
    readyToShip: true,
  },
  {
    id: '104',
    title: 'Serenade Hand-embroidered Silk Nehru Jacket',
    category: 'Nehru Jackets',
    price: 60000,
    imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw9b989e97/images/hires/FW26/F26MP1B_OFF%20WHITE_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    imageDetail: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw117051cf/images/hires/FW26/F26MP1B_OFF%20WHITE_3.jpg?sw=850&sh=1275&sm=fit&strip=false',
    color: 'Off White',
    colorHex: '#FAF6F0',
    craft: 'Marodi & Tone-on-Tone Threadwork',
    description: 'Subtle tone-on-tone marodi embroidery on fine ivory silk. Perfect for regal summer cocktail and mehendi soirees.',
    badge: 'READY TO SHIP',
    sizes: ['38', '40', '42', '44', '46', '48'],
    inStockSizes: ['38', '40', '42', '44'],
    readyToShip: true,
  },
  {
    id: '105',
    title: 'Entwine Hand-painted Pichhwai Sherwani',
    category: 'Sherwanis',
    price: 170000,
    imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw71b10c4d/images/hires/FW26/F26MP16SR_SAGE_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    imageDetail: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw00a61808/images/hires/FW26/F26MP16SR_SAGE_3.jpg?sw=850&sh=1275&sm=fit&strip=false',
    color: 'Sage',
    colorHex: '#9EAD9F',
    craft: 'Authentic Nathdwara Pichhwai Painting',
    description: 'Hand-painted in Rajasthan by 7th-generation master Pichhwai artists with natural mineral pigments on tailored raw silk.',
    badge: 'MASTER CRAFT',
    sizes: ['38', '40', '42', '44', '46', '48'],
    inStockSizes: ['38', '40', '42', '44', '46', '48'],
    readyToShip: false,
  },
  {
    id: '106',
    title: 'Hymn Embroidered Zari Sherwani',
    category: 'Sherwanis',
    price: 165000,
    imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw1b754ca9/images/hires/FW26/F26MP6J_GOLD_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    imageDetail: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw9d6fc6f2/images/hires/FW26/F26MP6J_GOLD_3.jpg?sw=850&sh=1275&sm=fit&strip=false',
    color: 'Gold',
    colorHex: '#D4AF37',
    craft: 'Antique Gold Zari & Cordwork',
    description: 'Luminous antique gold raw silk embellished with structured geometric lattice and traditional flora motifs.',
    badge: 'FW26 RUNWAY',
    sizes: ['38', '40', '42', '44', '46', '48'],
    inStockSizes: ['38', '42', '44', '46'],
    readyToShip: true,
  },
  {
    id: '107',
    title: 'Forever Embroidered Mul Kurta Set',
    category: 'Kurtas',
    price: 45000,
    imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dwa1347020/images/hires/FW26/F26MP4K_OFF%20WHITE_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    imageDetail: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dwed6b3075/images/hires/FW26/F26MP4K_OFF%20WHITE_3.jpg?sw=850&sh=1275&sm=fit&strip=false',
    color: 'Off White',
    colorHex: '#FCFAF7',
    craft: 'Fine Chikankari & Shadow Embroidery',
    description: 'Featherlight pure mulberry cotton-silk kurta set crafted with delicate floral yoke embroidery and mother-of-pearl buttons.',
    badge: 'READY TO SHIP',
    sizes: ['38', '40', '42', '44', '46', '48'],
    inStockSizes: ['38', '40', '42', '44', '46', '48'],
    readyToShip: true,
  },
  {
    id: '108',
    title: 'Resonance Embroidered Silk Sherwani',
    category: 'Sherwanis',
    price: 250000,
    imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dwba1c1f0d/images/hires/FW26/F26MP4SR_IVORY_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    imageDetail: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw9858757b/images/hires/FW26/F26MP4SR_IVORY_3.jpg?sw=850&sh=1275&sm=fit&strip=false',
    color: 'Ivory',
    colorHex: '#F5EFEB',
    craft: 'Resham Silk & Cut-dana Embellishment',
    description: 'Regal ivory masterpiece tailored with high mandarin collar, fine resham foliage, and handcrafted jewel buttons.',
    badge: 'FW26 RUNWAY',
    sizes: ['38', '40', '42', '44', '46', '48'],
    inStockSizes: ['38', '40', '42', '44'],
    readyToShip: true,
  },
  {
    id: '109',
    title: 'Ballad Embroidered Zardozi Silk Sherwani',
    category: 'Sherwanis',
    price: 310000,
    imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dweeadaa9a/images/hires/FW26/F26M7SR_PINK_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    imageDetail: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dwbe542b4a/images/hires/FW26/F26M7SR_PINK_3.jpg?sw=850&sh=1275&sm=fit&strip=false',
    color: 'Pink',
    colorHex: '#E2B2B8',
    craft: 'Rose Gold Zardozi & Pearl Highlights',
    description: 'Blush pink raw silk sherwani designed for high-profile royal destination nuptials with shimmering rose gold threadwork.',
    badge: 'COUTURE',
    sizes: ['38', '40', '42', '44', '46', '48'],
    inStockSizes: ['38', '40', '42', '46'],
    readyToShip: false,
  },
  {
    id: '110',
    title: 'Heartfelt Embroidered Cord Silk Bandhgala',
    category: 'Bandhgalas',
    price: 160000,
    imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dwd0c77031/images/hires/FW26/F26MP5J_WINE_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    imageDetail: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw30971145/images/hires/FW26/F26MP5J_WINE_3.jpg?sw=850&sh=1275&sm=fit&strip=false',
    color: 'Wine',
    colorHex: '#4A0E17', // Imperial Oxblood / Wine
    craft: 'Signature Raised Cord & French Knot Work',
    description: 'Deep imperial wine bandhgala adorned with signature raised silk cord embroidery and velvet collar accents.',
    badge: 'BESTSELLER',
    sizes: ['38', '40', '42', '44', '46', '48'],
    inStockSizes: ['38', '40', '42', '44', '46', '48'],
    readyToShip: true,
  },
  {
    id: '111',
    title: 'Aryam Woven Benarasi Silk Kurta',
    category: 'Kurtas',
    price: 23000,
    imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw7f73fe70/images/hires/F25/Men/F25M10K_Deep%20Green_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    imageDetail: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dwb8d5f5ac/images/hires/F25/Men/F25M10K_Deep%20Green_3.jpg?sw=850&sh=1275&sm=fit&strip=false',
    color: 'Emerald Green',
    colorHex: '#1B4D3E',
    craft: 'Varanasi Handloom Kadwa Weave',
    description: 'Pure handwoven emerald green Benarasi silk featuring golden zari butas and paired with ivory silk churidar.',
    badge: 'READY TO SHIP',
    sizes: ['38', '40', '42', '44', '46', '48'],
    inStockSizes: ['38', '40', '42', '44', '46'],
    readyToShip: true,
  },
  {
    id: '112',
    title: 'Almog Pure Silk Kurta - Mist Blue',
    category: 'Kurtas',
    price: 16800,
    imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw8d1ef562/images/hires/F25/Men/S26MP51K_Mist%20Blue_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    imageDetail: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw6e9a8c0e/images/hires/F25/Men/S26MP51K_Mist%20Blue_3.jpg?sw=850&sh=1275&sm=fit&strip=false',
    color: 'Mist Blue',
    colorHex: '#8DA3B3',
    craft: 'Subtle Geometric Tone Weave',
    description: 'Airy summer silk kurta designed with contemporary minimal placket and side seam pockets for timeless comfort.',
    badge: 'READY TO SHIP',
    sizes: ['38', '40', '42', '44', '46', '48'],
    inStockSizes: ['38', '40', '42', '44', '46', '48'],
    readyToShip: true,
  },
  {
    id: '113',
    title: 'Balfour Embroidered Silk Nehru Jacket',
    category: 'Nehru Jackets',
    price: 115500,
    imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw8d1ef562/images/hires/F25/Men/S26MP51K_Mist%20Blue_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    imageDetail: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dwfab212d9/images/hires/FW26/F26MP2B_SAGE_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    color: 'Ivory',
    colorHex: '#FAF5ED',
    craft: 'Intricate Dori & Zari Tapestry',
    description: 'Ivory raw silk Nehru jacket embroidered with master artisan dori work and finished with antique brass buttons.',
    badge: 'EXCLUSIVE',
    sizes: ['38', '40', '42', '44', '46', '48'],
    inStockSizes: ['38', '40', '42', '44'],
    readyToShip: true,
  },
  {
    id: '114',
    title: 'Aziz Hand-painted Pichhwai Silk Jacket',
    category: 'Nehru Jackets',
    price: 115500,
    imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw71b10c4d/images/hires/FW26/F26MP16SR_SAGE_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    imageDetail: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw00a61808/images/hires/FW26/F26MP16SR_SAGE_3.jpg?sw=850&sh=1275&sm=fit&strip=false',
    color: 'Old Rose',
    colorHex: '#C08081',
    craft: 'Sacred Cow & Lotus Pichhwai Motif',
    description: 'A heritage masterpiece celebrating traditional Nathdwara Pichhwai painting rendered on dusty rose silk.',
    badge: 'MASTER CRAFT',
    sizes: ['38', '40', '42', '44', '46', '48'],
    inStockSizes: ['38', '40', '42', '46', '48'],
    readyToShip: false,
  },
  {
    id: '115',
    title: 'Imperial Oxblood Raw Silk Safa & Stole Set',
    category: 'Accessories',
    price: 30000,
    imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw6c58fa09/images/hires/FW26/F26MP8SR_BEIGE_3.jpg?sw=850&sh=1275&sm=fit&strip=false',
    imageDetail: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dwf27d8283/images/hires/FW26/F26MP8SR_BEIGE_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    color: 'Wine',
    colorHex: '#4A0E17',
    craft: 'Zari Borders & Marodi Tassels',
    description: 'Heritage royal safa paired with a gold-bordered draped stole in signature Mangesh Mahadev Oxblood silk.',
    badge: 'ACCESSORIES',
    sizes: ['Free Size'],
    inStockSizes: ['Free Size'],
    readyToShip: true,
  },
  {
    id: '116',
    title: 'Tailored Silk Churidar Trousers',
    category: 'Bottoms',
    price: 15500,
    imageFront: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dwba1c1f0d/images/hires/FW26/F26MP4SR_IVORY_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    imageDetail: 'https://www.anitadongre.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_AD_India/default/dw67b07f8a/images/hires/FW26/F26MP32J_OFF%20WHITE_1.jpg?sw=850&sh=1275&sm=fit&strip=false',
    color: 'Off White',
    colorHex: '#FCFAF7',
    craft: 'Precision Tailored Silk Blend',
    description: 'Classic handcrafted churidar trousers designed with tapered gathered ankles for royal sherwanis and bandhgalas.',
    badge: 'ESSENTIAL',
    sizes: ['30', '32', '34', '36', '38', '40'],
    inStockSizes: ['30', '32', '34', '36', '38', '40'],
    readyToShip: true,
  },
];
