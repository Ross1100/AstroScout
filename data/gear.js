// Dataset fotocamere e lenti ESPANSO per Astro Scout
// Versione approfondita con modelli legacy, top-end e entry-level

window.CAMERAS = [
  // ===== MIRRORLESS - CANON =====
  {b:'Canon',t:'Mirrorless',m:'EOS R1',f:'Full frame',c:1.0},
  {b:'Canon',t:'Mirrorless',m:'EOS R5 Mark II',f:'Full frame',c:1.0},
  {b:'Canon',t:'Mirrorless',m:'EOS R5 / R5 C',f:'Full frame',c:1.0},
  {b:'Canon',t:'Mirrorless',m:'EOS R6 Mark III',f:'Full frame',c:1.0},
  {b:'Canon',t:'Mirrorless',m:'EOS R6 Mark II',f:'Full frame',c:1.0},
  {b:'Canon',t:'Mirrorless',m:'EOS R6',f:'Full frame',c:1.0},
  {b:'Canon',t:'Mirrorless',m:'EOS R8',f:'Full frame',c:1.0},
  {b:'Canon',t:'Mirrorless',m:'EOS Ra (astro dedicata)',f:'Full frame',c:1.0},
  {b:'Canon',t:'Mirrorless',m:'EOS RP',f:'Full frame',c:1.0},
  {b:'Canon',t:'Mirrorless',m:'EOS R7',f:'APS-C',c:1.6},
  {b:'Canon',t:'Mirrorless',m:'EOS R10',f:'APS-C',c:1.6},
  {b:'Canon',t:'Mirrorless',m:'EOS R50',f:'APS-C',c:1.6},
  {b:'Canon',t:'Mirrorless',m:'EOS R100',f:'APS-C',c:1.6},
  
  // ===== MIRRORLESS - NIKON =====
  {b:'Nikon',t:'Mirrorless',m:'Z9',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Mirrorless',m:'Z8',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Mirrorless',m:'Z9 II',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Mirrorless',m:'Z7 II',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Mirrorless',m:'Z7',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Mirrorless',m:'Z6 III',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Mirrorless',m:'Z6 II',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Mirrorless',m:'Z6',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Mirrorless',m:'Z5 II',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Mirrorless',m:'Z5',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Mirrorless',m:'Zf.2',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Mirrorless',m:'Zf',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Mirrorless',m:'Z30',f:'APS-C',c:1.5},
  {b:'Nikon',t:'Mirrorless',m:'Z50 II',f:'APS-C',c:1.5},
  {b:'Nikon',t:'Mirrorless',m:'Z50',f:'APS-C',c:1.5},
  {b:'Nikon',t:'Mirrorless',m:'Z fc',f:'APS-C',c:1.5},
  {b:'Nikon',t:'Mirrorless',m:'Z fc II',f:'APS-C',c:1.5},
  
  // ===== MIRRORLESS - SONY =====
  {b:'Sony',t:'Mirrorless',m:'α1 II',f:'Full frame',c:1.0},
  {b:'Sony',t:'Mirrorless',m:'α1',f:'Full frame',c:1.0},
  {b:'Sony',t:'Mirrorless',m:'α9 III',f:'Full frame',c:1.0},
  {b:'Sony',t:'Mirrorless',m:'α9 II',f:'Full frame',c:1.0},
  {b:'Sony',t:'Mirrorless',m:'α7R V',f:'Full frame',c:1.0},
  {b:'Sony',t:'Mirrorless',m:'α7R IV',f:'Full frame',c:1.0},
  {b:'Sony',t:'Mirrorless',m:'α7R III',f:'Full frame',c:1.0},
  {b:'Sony',t:'Mirrorless',m:'α7 IV',f:'Full frame',c:1.0},
  {b:'Sony',t:'Mirrorless',m:'α7 III',f:'Full frame',c:1.0},
  {b:'Sony',t:'Mirrorless',m:'α7 II',f:'Full frame',c:1.0},
  {b:'Sony',t:'Mirrorless',m:'α7C II',f:'Full frame',c:1.0},
  {b:'Sony',t:'Mirrorless',m:'α7C',f:'Full frame',c:1.0},
  {b:'Sony',t:'Mirrorless',m:'α7S III',f:'Full frame',c:1.0},
  {b:'Sony',t:'Mirrorless',m:'α7S II',f:'Full frame',c:1.0},
  {b:'Sony',t:'Mirrorless',m:'α6700',f:'APS-C',c:1.5},
  {b:'Sony',t:'Mirrorless',m:'α6600',f:'APS-C',c:1.5},
  {b:'Sony',t:'Mirrorless',m:'α6400',f:'APS-C',c:1.5},
  {b:'Sony',t:'Mirrorless',m:'α6300',f:'APS-C',c:1.5},
  {b:'Sony',t:'Mirrorless',m:'α6100',f:'APS-C',c:1.5},
  {b:'Sony',t:'Mirrorless',m:'FX30',f:'APS-C',c:1.5},
  {b:'Sony',t:'Mirrorless',m:'FX3',f:'Full frame',c:1.0},
  
  // ===== MIRRORLESS - FUJIFILM =====
  {b:'Fujifilm',t:'Mirrorless',m:'X-T5',f:'APS-C',c:1.5},
  {b:'Fujifilm',t:'Mirrorless',m:'X-T4',f:'APS-C',c:1.5},
  {b:'Fujifilm',t:'Mirrorless',m:'X-T3',f:'APS-C',c:1.5},
  {b:'Fujifilm',t:'Mirrorless',m:'X-H2S',f:'APS-C',c:1.5},
  {b:'Fujifilm',t:'Mirrorless',m:'X-H2',f:'APS-C',c:1.5},
  {b:'Fujifilm',t:'Mirrorless',m:'X-H1',f:'APS-C',c:1.5},
  {b:'Fujifilm',t:'Mirrorless',m:'X-S20',f:'APS-C',c:1.5},
  {b:'Fujifilm',t:'Mirrorless',m:'X-S10 II',f:'APS-C',c:1.5},
  {b:'Fujifilm',t:'Mirrorless',m:'X-S10',f:'APS-C',c:1.5},
  {b:'Fujifilm',t:'Mirrorless',m:'X-T30 II',f:'APS-C',c:1.5},
  {b:'Fujifilm',t:'Mirrorless',m:'X-T30',f:'APS-C',c:1.5},
  {b:'Fujifilm',t:'Mirrorless',m:'GFX 100S II',f:'Medio formato',c:0.79},
  {b:'Fujifilm',t:'Mirrorless',m:'GFX 100S',f:'Medio formato',c:0.79},
  {b:'Fujifilm',t:'Mirrorless',m:'GFX 100 II',f:'Medio formato',c:0.79},
  {b:'Fujifilm',t:'Mirrorless',m:'GFX 100',f:'Medio formato',c:0.79},
  {b:'Fujifilm',t:'Mirrorless',m:'GFX 50S II',f:'Medio formato',c:0.79},
  {b:'Fujifilm',t:'Mirrorless',m:'GFX 50S',f:'Medio formato',c:0.79},
  {b:'Fujifilm',t:'Mirrorless',m:'GFX 50R',f:'Medio formato',c:0.79},
  
  // ===== MIRRORLESS - OM SYSTEM =====
  {b:'OM System',t:'Mirrorless',m:'OM-1 Mark II',f:'Micro 4/3',c:2.0},
  {b:'OM System',t:'Mirrorless',m:'OM-1',f:'Micro 4/3',c:2.0},
  {b:'OM System',t:'Mirrorless',m:'OM-5',f:'Micro 4/3',c:2.0},
  {b:'OM System',t:'Mirrorless',m:'E-M1X',f:'Micro 4/3',c:2.0},
  {b:'OM System',t:'Mirrorless',m:'E-M1 Mark III',f:'Micro 4/3',c:2.0},
  {b:'OM System',t:'Mirrorless',m:'E-M1 Mark II',f:'Micro 4/3',c:2.0},
  {b:'OM System',t:'Mirrorless',m:'E-M5 Mark III',f:'Micro 4/3',c:2.0},
  {b:'OM System',t:'Mirrorless',m:'E-M5 Mark II',f:'Micro 4/3',c:2.0},
  {b:'OM System',t:'Mirrorless',m:'E-M10 Mark IV',f:'Micro 4/3',c:2.0},
  
  // ===== MIRRORLESS - PANASONIC =====
  {b:'Panasonic',t:'Mirrorless',m:'Lumix S5 II / S5 IIX',f:'Full frame',c:1.0},
  {b:'Panasonic',t:'Mirrorless',m:'Lumix S1R II',f:'Full frame',c:1.0},
  {b:'Panasonic',t:'Mirrorless',m:'Lumix S1R',f:'Full frame',c:1.0},
  {b:'Panasonic',t:'Mirrorless',m:'Lumix S1',f:'Full frame',c:1.0},
  {b:'Panasonic',t:'Mirrorless',m:'Lumix S5',f:'Full frame',c:1.0},
  {b:'Panasonic',t:'Mirrorless',m:'Lumix G9 II',f:'Micro 4/3',c:2.0},
  {b:'Panasonic',t:'Mirrorless',m:'Lumix GH7',f:'Micro 4/3',c:2.0},
  {b:'Panasonic',t:'Mirrorless',m:'Lumix GH6',f:'Micro 4/3',c:2.0},
  {b:'Panasonic',t:'Mirrorless',m:'Lumix GH5 II',f:'Micro 4/3',c:2.0},
  {b:'Panasonic',t:'Mirrorless',m:'Lumix GH5',f:'Micro 4/3',c:2.0},
  
  // ===== MIRRORLESS - LEICA =====
  {b:'Leica',t:'Mirrorless',m:'SL3 / SL3-S',f:'Full frame',c:1.0},
  {b:'Leica',t:'Mirrorless',m:'SL2',f:'Full frame',c:1.0},
  {b:'Leica',t:'Mirrorless',m:'M11 / M11 Monochrom',f:'Full frame',c:1.0},
  {b:'Leica',t:'Mirrorless',m:'M10-P / M10-R',f:'Full frame',c:1.0},
  {b:'Leica',t:'Mirrorless',m:'M10',f:'Full frame',c:1.0},
  {b:'Leica',t:'Mirrorless',m:'Q3',f:'Full frame',c:1.0},
  {b:'Leica',t:'Mirrorless',m:'Q2',f:'Full frame',c:1.0},
  
  // ===== MIRRORLESS - BLACKMAGIC =====
  {b:'Blackmagic',t:'Mirrorless',m:'Pocket Cinema 6K Pro',f:'APS-C',c:1.6},
  {b:'Blackmagic',t:'Mirrorless',m:'Pocket Cinema 4K',f:'APS-C',c:1.6},
  
  // ===== REFLEX (DSLR) - CANON =====
  {b:'Canon',t:'Reflex',m:'EOS 5D Mark IV',f:'Full frame',c:1.0},
  {b:'Canon',t:'Reflex',m:'EOS 5D Mark III',f:'Full frame',c:1.0},
  {b:'Canon',t:'Reflex',m:'EOS 6D Mark II',f:'Full frame',c:1.0},
  {b:'Canon',t:'Reflex',m:'EOS 6D',f:'Full frame',c:1.0},
  {b:'Canon',t:'Reflex',m:'EOS 1Dx Mark III',f:'Full frame',c:1.0},
  {b:'Canon',t:'Reflex',m:'EOS 1Dx Mark II',f:'Full frame',c:1.0},
  {b:'Canon',t:'Reflex',m:'EOS 90D',f:'APS-C',c:1.6},
  {b:'Canon',t:'Reflex',m:'EOS 80D',f:'APS-C',c:1.6},
  {b:'Canon',t:'Reflex',m:'EOS 70D',f:'APS-C',c:1.6},
  {b:'Canon',t:'Reflex',m:'EOS 77D / 800D',f:'APS-C',c:1.6},
  
  // ===== REFLEX (DSLR) - NIKON =====
  {b:'Nikon',t:'Reflex',m:'D850',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Reflex',m:'D810',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Reflex',m:'D800',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Reflex',m:'D780',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Reflex',m:'D750',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Reflex',m:'D700',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Reflex',m:'Df',f:'Full frame',c:1.0},
  {b:'Nikon',t:'Reflex',m:'D500',f:'APS-C',c:1.5},
  {b:'Nikon',t:'Reflex',m:'D7500',f:'APS-C',c:1.5},
  {b:'Nikon',t:'Reflex',m:'D7200',f:'APS-C',c:1.5},
  {b:'Nikon',t:'Reflex',m:'D7100',f:'APS-C',c:1.5},
  {b:'Nikon',t:'Reflex',m:'D5600',f:'APS-C',c:1.5},
  {b:'Nikon',t:'Reflex',m:'D5500',f:'APS-C',c:1.5},
  
  // ===== REFLEX (DSLR) - PENTAX =====
  {b:'Pentax',t:'Reflex',m:'K-1 Mark II',f:'Full frame',c:1.0},
  {b:'Pentax',t:'Reflex',m:'K-1',f:'Full frame',c:1.0},
  {b:'Pentax',t:'Reflex',m:'K-3 Mark III',f:'APS-C',c:1.5},
  {b:'Pentax',t:'Reflex',m:'K-3 II',f:'APS-C',c:1.5},
  {b:'Pentax',t:'Reflex',m:'K-5 II',f:'APS-C',c:1.5},

  // ===== SMARTPHONE =====
  {b:'Apple',t:'Smartphone',m:'iPhone 16 Pro / Pro Max',f:'1/1.28" (eq.FF)',c:3.66},
  {b:'Apple',t:'Smartphone',m:'iPhone 15 Pro / Pro Max',f:'1/1.28" (eq.FF)',c:3.66},
  {b:'Apple',t:'Smartphone',m:'iPhone 14 Pro / Pro Max',f:'1/1.28" (eq.FF)',c:3.66},
  {b:'Google',t:'Smartphone',m:'Pixel 9 Pro / 9 Pro XL',f:'1/1.31" (eq.FF)',c:3.65},
  {b:'Google',t:'Smartphone',m:'Pixel 8 Pro',f:'1/1.31" (eq.FF)',c:3.65},
  {b:'Google',t:'Smartphone',m:'Pixel 7 Pro',f:'1/1.33" (eq.FF)',c:3.65},
  {b:'Samsung',t:'Smartphone',m:'Galaxy S25 Ultra',f:'1/0.98" (eq.FF)',c:3.94},
  {b:'Samsung',t:'Smartphone',m:'Galaxy S24 Ultra',f:'1/0.98" (eq.FF)',c:3.94},
  {b:'Samsung',t:'Smartphone',m:'Galaxy S23 Ultra',f:'1/1.56" (eq.FF)',c:2.84},
  {b:'Xiaomi',t:'Smartphone',m:'14 Ultra / 13 Ultra',f:'1" (eq.FF)',c:2.7},
  {b:'Xiaomi',t:'Smartphone',m:'14 / 13',f:'1/1.56" (eq.FF)',c:2.84},
  {b:'Vivo',t:'Smartphone',m:'X100 Ultra / X100 Pro',f:'1" (eq.FF)',c:2.7},
  {b:'Vivo',t:'Smartphone',m:'X90 Pro+',f:'1" (eq.FF)',c:2.7},
  {b:'Honor',t:'Smartphone',m:'Magic 6 Pro',f:'1/1.3" (eq.FF)',c:3.66},
  {b:'OnePlus',t:'Smartphone',m:'12 / 12 Pro',f:'1/1.56" (eq.FF)',c:2.84},

  // ===== ASTRO DEDICATED (CCD/CMOS raffreddati) =====
  // ZWO - APS-C
  {b:'ZWO',t:'Astro CCD',m:'ASI2600MC Pro (colore)',f:'APS-C IMX571',c:1.6},
  {b:'ZWO',t:'Astro CCD',m:'ASI2600MM Pro (mono)',f:'APS-C IMX571',c:1.6},
  {b:'ZWO',t:'Astro CCD',m:'ASI2600MC (colore)',f:'APS-C IMX571',c:1.6},
  {b:'ZWO',t:'Astro CCD',m:'ASI2600MM (mono)',f:'APS-C IMX571',c:1.6},
  // ZWO - Full frame
  {b:'ZWO',t:'Astro CCD',m:'ASI6200MC Pro (colore)',f:'Full frame IMX455',c:1.0},
  {b:'ZWO',t:'Astro CCD',m:'ASI6200MM Pro (mono)',f:'Full frame IMX455',c:1.0},
  {b:'ZWO',t:'Astro CCD',m:'ASI6200MC (colore)',f:'Full frame IMX455',c:1.0},
  {b:'ZWO',t:'Astro CCD',m:'ASI6200MM (mono)',f:'Full frame IMX455',c:1.0},
  // ZWO - 1 pollice
  {b:'ZWO',t:'Astro CCD',m:'ASI533MC Pro (colore)',f:'1" IMX533',c:2.7},
  {b:'ZWO',t:'Astro CCD',m:'ASI533MM Pro (mono)',f:'1" IMX533',c:2.7},
  // ZWO - 4/3
  {b:'ZWO',t:'Astro CCD',m:'ASI294MC Pro (colore)',f:'4/3 IMX294',c:2.0},
  {b:'ZWO',t:'Astro CCD',m:'ASI294MM Pro (mono)',f:'4/3 IMX294',c:2.0},
  // ZWO - piccoli sensori
  {b:'ZWO',t:'Astro CCD',m:'ASI462MC (colore)',f:'1/2.3" OV4689',c:4.3},
  {b:'ZWO',t:'Astro CCD',m:'ASI462MM (mono)',f:'1/2.3" OV4689',c:4.3},
  
  // QHYCCD
  {b:'QHYCCD',t:'Astro CCD',m:'QHY268C (colore)',f:'APS-C IMX571',c:1.6},
  {b:'QHYCCD',t:'Astro CCD',m:'QHY268M (mono)',f:'APS-C IMX571',c:1.6},
  {b:'QHYCCD',t:'Astro CCD',m:'QHY600C (colore)',f:'Full frame IMX455',c:1.0},
  {b:'QHYCCD',t:'Astro CCD',m:'QHY600M (mono)',f:'Full frame IMX455',c:1.0},
  {b:'QHYCCD',t:'Astro CCD',m:'QHY183C (colore)',f:'APS-C Sony',c:1.6},
  {b:'QHYCCD',t:'Astro CCD',m:'QHY183M (mono)',f:'APS-C Sony',c:1.6},
  
  // Player One
  {b:'Player One',t:'Astro CCD',m:'Poseidon-C (colore)',f:'APS-C IMX571',c:1.6},
  {b:'Player One',t:'Astro CCD',m:'Poseidon-M (mono)',f:'APS-C IMX571',c:1.6},
  {b:'Player One',t:'Astro CCD',m:'Neptune-C (colore)',f:'Full frame IMX455',c:1.0},
  {b:'Player One',t:'Astro CCD',m:'Neptune-M (mono)',f:'Full frame IMX455',c:1.0},
  
  // Altair
  {b:'Altair',t:'Astro CCD',m:'GPCAM2 290M Mono',f:'1/1.2" Toshiba',c:4.1},
  {b:'Altair',t:'Astro CCD',m:'GPCAM2 290C Color',f:'1/1.2" Toshiba',c:4.1},
  {b:'Altair',t:'Astro CCD',m:'GPCAM2 M26S Mono',f:'1/1.2" Sony',c:4.1},
  {b:'Altair',t:'Astro CCD',m:'GPCAM2 C10200 Color',f:'APS-C IMX3',c:1.6},
  
  // Atik
  {b:'Atik',t:'Astro CCD',m:'Atik One 6.0 (colore)',f:'APS-C',c:1.6},
  {b:'Atik',t:'Astro CCD',m:'Atik One 9.0 (colore)',f:'Full frame',c:1.0},
  {b:'Atik',t:'Astro CCD',m:'Atik 460EX (mono)',f:'APS-C',c:1.6},
  {b:'Atik',t:'Astro CCD',m:'Atik 383L+ (mono)',f:'1/1.5" KAI',c:2.84},
  
  // Moravian Instruments
  {b:'Moravian',t:'Astro CCD',m:'G4 16000 Mono',f:'Full frame APS-C',c:1.6},
  {b:'Moravian',t:'Astro CCD',m:'G3 11000 Mono',f:'APS-C',c:1.6},
  
  // REFLEX (DSLR) AGGIUNTIVI - SAMSUNG (DEFUNTO)
  {b:'Samsung',t:'Reflex',m:'NX1',f:'APS-C',c:1.5},
  {b:'Samsung',t:'Reflex',m:'NX 30',f:'APS-C',c:1.5},
  
  // REFLEX LEGACY - MINOLTA/KONIKA MINOLTA
  {b:'Konika Minolta',t:'Reflex',m:'α-7 Digital',f:'APS-C',c:1.5},
  {b:'Konika Minolta',t:'Reflex',m:'α-5D',f:'Full frame',c:1.0},
  
  // COMPATTE SPECIALIZZATE
  {b:'Ricoh',t:'Compatta',m:'GR III / GR IIIx',f:'APS-C',c:1.5},
  {b:'Ricoh',t:'Compatta',m:'GR II / GR',f:'APS-C',c:1.5}
];

window.LENSES = [
  // ===== GRANDANGOLARI ULTRA (8-14mm) =====
  {b:'Sony',k:'wide',m:'FE 8-14mm f/4 G (zoom ultra)',f:8,a:4.0},
  {b:'Sony',k:'wide',m:'FE 12-24mm f/2.8 GM',f:12,a:2.8},
  {b:'Sony',k:'wide',m:'FE 14mm f/1.8 GM',f:14,a:1.8},
  {b:'Sony',k:'wide',m:'FE 16-35mm f/2.8 GM II',f:16,a:2.8},
  {b:'Sony',k:'wide',m:'FE 20mm f/1.8 G',f:20,a:1.8},
  
  {b:'Canon RF',k:'wide',m:'RF 15-35mm f/2.8L IS USM',f:15,a:2.8},
  {b:'Canon RF',k:'wide',m:'RF 14mm f/1.8L USM',f:14,a:1.8},
  {b:'Canon RF',k:'wide',m:'RF 16mm f/2.8 STM',f:16,a:2.8},
  {b:'Canon RF',k:'wide',m:'RF 24mm f/1.8 MACRO IS',f:24,a:1.8},
  {b:'Canon EF',k:'wide',m:'EF 11-24mm f/4L USM',f:11,a:4.0},
  {b:'Canon EF',k:'wide',m:'EF 14mm f/2.8L II USM',f:14,a:2.8},
  {b:'Canon EF',k:'wide',m:'EF 16-35mm f/2.8L III USM',f:16,a:2.8},
  
  {b:'Nikon Z',k:'wide',m:'Nikkor Z 14-24mm f/2.8 S',f:14,a:2.8},
  {b:'Nikon Z',k:'wide',m:'Nikkor Z 17-28mm f/2.8 S',f:17,a:2.8},
  {b:'Nikon Z',k:'wide',m:'Nikkor Z 20mm f/1.8 S',f:20,a:1.8},
  {b:'Nikon F',k:'wide',m:'AF-S 14-24mm f/2.8G ED',f:14,a:2.8},
  {b:'Nikon F',k:'wide',m:'AF-S 16-35mm f/4G ED VR',f:16,a:4.0},
  {b:'Nikon F',k:'wide',m:'AF-S 20mm f/1.8G ED',f:20,a:1.8},
  
  {b:'Sigma',k:'wide',m:'14mm f/1.8 DG HSM Art',f:14,a:1.8},
  {b:'Sigma',k:'wide',m:'12-24mm f/4 DG HSM II Art',f:12,a:4.0},
  {b:'Sigma',k:'wide',m:'14-24mm f/2.8 DG HSM Art',f:14,a:2.8},
  {b:'Sigma',k:'wide',m:'20mm f/1.4 DG DN Art',f:20,a:1.4},
  {b:'Sigma',k:'wide',m:'16-28mm f/2.8 DG DN C',f:16,a:2.8},
  {b:'Sigma',k:'wide',m:'14-24mm f/2.8 DN Art',f:14,a:2.8},
  
  {b:'Tamron',k:'wide',m:'17-28mm f/2.8 Di III RXD',f:17,a:2.8},
  {b:'Tamron',k:'wide',m:'20-40mm f/2.8 Di III VXD',f:20,a:2.8},
  {b:'Tamron',k:'wide',m:'11-20mm f/2.8 Di III RXD',f:11,a:2.8},
  
  {b:'Fujifilm X',k:'wide',m:'XF 8mm f/3.5 R WR',f:8,a:3.5},
  {b:'Fujifilm X',k:'wide',m:'XF 10-24mm f/4 R OIS WR',f:10,a:4.0},
  {b:'Fujifilm X',k:'wide',m:'XF 16mm f/1.4 R WR',f:16,a:1.4},
  
  {b:'OM System',k:'wide',m:'M.Zuiko 7-14mm f/2.8 ED PRO',f:7,a:2.8},
  {b:'OM System',k:'wide',m:'M.Zuiko 9-18mm f/4-5.6',f:9,a:4.0},
  {b:'OM System',k:'wide',m:'M.Zuiko 12mm f/1.2 PRO',f:12,a:1.2},
  {b:'OM System',k:'wide',m:'M.Zuiko 14mm f/2.8 PRO',f:14,a:2.8},
  {b:'OM System',k:'wide',m:'M.Zuiko 17mm f/1.2 PRO',f:17,a:1.2},
  
  {b:'Panasonic',k:'wide',m:'Leica DG 12mm f/1.4 Summilux',f:12,a:1.4},
  {b:'Panasonic',k:'wide',m:'Leica DG 9mm f/1.7 Summilux',f:9,a:1.7},
  {b:'Panasonic',k:'wide',m:'Leica DG 15mm f/1.7 Summilux',f:15,a:1.7},
  {b:'Panasonic',k:'wide',m:'Leica DG 10-25mm f/1.7 Vario-Summilux',f:10,a:1.7},
  {b:'Panasonic',k:'wide',m:'Lumix S 18mm f/1.8',f:18,a:1.8},
  {b:'Panasonic',k:'wide',m:'Lumix S 20-60mm f/3.8-4.5',f:20,a:3.8},
  
  {b:'Leica',k:'wide',m:'Summilux-M 21mm f/1.4 Asph',f:21,a:1.4},
  {b:'Leica',k:'wide',m:'Summicron-M 28mm f/2 Asph',f:28,a:2.0},
  
  {b:'Samyang',k:'wide',m:'AF 12mm f/2 E',f:12,a:2.0},
  {b:'Samyang',k:'wide',m:'AF 14mm f/2.8 RF/FE',f:14,a:2.8},
  {b:'Samyang',k:'wide',m:'AF 16mm f/2.8 FE',f:16,a:2.8},
  
  {b:'Voigtlander',k:'wide',m:'Nokton 21mm f/1.4 Asph',f:21,a:1.4},
  {b:'Voigtlander',k:'wide',m:'Nokton 20mm f/1.8 Asph SE',f:20,a:1.8},
  
  {b:'Venus Optics',k:'wide',m:'Laowa 10mm f/2.8 Zero-D FF',f:10,a:2.8},
  {b:'Venus Optics',k:'wide',m:'Laowa 12mm f/2.8 Zero-D (zoom)',f:12,a:2.8},
  {b:'Venus Optics',k:'wide',m:'Laowa 14mm f/4 FF LE',f:14,a:4.0},
  {b:'Venus Optics',k:'wide',m:'Laowa 15mm f/2 Zero-D',f:15,a:2.0},
  {b:'Venus Optics',k:'wide',m:'Laowa 9mm f/2.8 Zero-D (APS-C)',f:9,a:2.8},
  
  {b:'TTArtisan',k:'wide',m:'14mm f/2.8',f:14,a:2.8},
  {b:'TTArtisan',k:'wide',m:'11mm f/2.8',f:11,a:2.8},
  {b:'TTArtisan',k:'wide',m:'21mm f/1.5',f:21,a:1.5},
  
  {b:'Viltrox',k:'wide',m:'AF 14mm f/2.8 FE',f:14,a:2.8},
  {b:'Viltrox',k:'wide',m:'AF 16mm f/1.8 FE',f:16,a:1.8},
  {b:'Viltrox',k:'wide',m:'AF 20mm f/1.8 FE',f:20,a:1.8},
  {b:'Viltrox',k:'wide',m:'AF 20mm f/2.8 1.35x Macro',f:20,a:2.8},
  
  // ===== GRANDANGOLARI STANDARD (24-28mm) =====
  {b:'Sony',k:'wide',m:'FE 24mm f/1.4 GM',f:24,a:1.4},
  {b:'Sony',k:'wide',m:'FE 24mm f/2.8 G',f:24,a:2.8},
  {b:'Sony',k:'wide',m:'FE 28mm f/2.0',f:28,a:2.0},
  
  {b:'Canon RF',k:'wide',m:'RF 24mm f/1.8 MACRO IS',f:24,a:1.8},
  {b:'Canon EF',k:'wide',m:'EF 24mm f/1.4L II USM',f:24,a:1.4},
  {b:'Canon EF',k:'wide',m:'EF 24mm f/2.8',f:24,a:2.8},
  
  {b:'Nikon Z',k:'wide',m:'Nikkor Z 24mm f/1.8 S',f:24,a:1.8},
  {b:'Nikon Z',k:'wide',m:'Nikkor Z 28mm f/2.8 Macro',f:28,a:2.8},
  {b:'Nikon F',k:'wide',m:'AF-S 24mm f/1.4G ED',f:24,a:1.4},
  {b:'Nikon F',k:'wide',m:'AF-S 28mm f/1.8G',f:28,a:1.8},
  
  {b:'Sigma',k:'wide',m:'24mm f/1.4 DG DN Art',f:24,a:1.4},
  {b:'Sigma',k:'wide',m:'28mm f/1.4 DG DN Art',f:28,a:1.4},
  
  {b:'Samyang',k:'wide',m:'24mm f/1.4 ED AS UMC',f:24,a:1.4},
  {b:'Samyang',k:'wide',m:'24mm f/2.8 AF FE',f:24,a:2.8},
  
  {b:'TTArtisan',k:'wide',m:'24mm f/1.4',f:24,a:1.4},
  {b:'TTArtisan',k:'wide',m:'28mm f/1.4',f:28,a:1.4},
  
  // ===== OBIETTIVI STANDARD (35-50mm) =====
  {b:'Sony',k:'standard',m:'FE 35mm f/1.4 GM',f:35,a:1.4},
  {b:'Sony',k:'standard',m:'FE 35mm f/1.8',f:35,a:1.8},
  {b:'Sony',k:'standard',m:'FE 35mm f/2.8 ZA Macro',f:35,a:2.8},
  {b:'Sony',k:'standard',m:'FE 50mm f/1.4 GM',f:50,a:1.4},
  {b:'Sony',k:'standard',m:'FE 50mm f/1.2 GM',f:50,a:1.2},
  {b:'Sony',k:'standard',m:'FE 50mm f/1.8',f:50,a:1.8},
  {b:'Sony',k:'standard',m:'FE 50mm f/2.8 Macro',f:50,a:2.8},
  
  {b:'Canon RF',k:'standard',m:'RF 35mm f/1.4L VCM',f:35,a:1.4},
  {b:'Canon RF',k:'standard',m:'RF 35mm f/1.8 MACRO IS',f:35,a:1.8},
  {b:'Canon RF',k:'standard',m:'RF 50mm f/1.2L USM',f:50,a:1.2},
  {b:'Canon RF',k:'standard',m:'RF 50mm f/1.8 STM',f:50,a:1.8},
  {b:'Canon EF',k:'standard',m:'EF 35mm f/1.4L II USM',f:35,a:1.4},
  {b:'Canon EF',k:'standard',m:'EF 35mm f/2.0',f:35,a:2.0},
  {b:'Canon EF',k:'standard',m:'EF 50mm f/1.2L USM',f:50,a:1.2},
  {b:'Canon EF',k:'standard',m:'EF 50mm f/1.4 USM',f:50,a:1.4},
  {b:'Canon EF',k:'standard',m:'EF 50mm f/1.8 STM',f:50,a:1.8},
  {b:'Canon EF',k:'standard',m:'EF 50mm f/2.5 Macro',f:50,a:2.5},
  
  {b:'Nikon Z',k:'standard',m:'Nikkor Z 35mm f/1.8 S',f:35,a:1.8},
  {b:'Nikon Z',k:'standard',m:'Nikkor Z 35mm f/2.8 Macro S',f:35,a:2.8},
  {b:'Nikon Z',k:'standard',m:'Nikkor Z 50mm f/1.8 S',f:50,a:1.8},
  {b:'Nikon Z',k:'standard',m:'Nikkor Z 50mm f/1.2 S',f:50,a:1.2},
  {b:'Nikon Z',k:'standard',m:'Nikkor Z 50mm f/2.8 Macro S',f:50,a:2.8},
  {b:'Nikon Z',k:'standard',m:'Nikkor Z 58mm f/0.95 S Noct',f:58,a:0.95},
  {b:'Nikon F',k:'standard',m:'AF-S 35mm f/1.4G',f:35,a:1.4},
  {b:'Nikon F',k:'standard',m:'AF-S 50mm f/1.4G',f:50,a:1.4},
  {b:'Nikon F',k:'standard',m:'AF-S 50mm f/1.8G',f:50,a:1.8},
  {b:'Nikon F',k:'standard',m:'AF-S 60mm f/2.8G Micro',f:60,a:2.8},
  
  {b:'Sigma',k:'standard',m:'35mm f/1.4 DG DN Art',f:35,a:1.4},
  {b:'Sigma',k:'standard',m:'35mm f/1.2 DG DN Art',f:35,a:1.2},
  {b:'Sigma',k:'standard',m:'50mm f/1.4 DG DN Art',f:50,a:1.4},
  {b:'Sigma',k:'standard',m:'45mm f/1.4 DG DN Art',f:45,a:1.4},
  {b:'Sigma',k:'standard',m:'56mm f/1.4 DC DN Art',f:56,a:1.4},
  {b:'Sigma',k:'standard',m:'28-45mm f/1.8 DG DN Art',f:28,a:1.8},
  
  {b:'Tamron',k:'standard',m:'SP 35mm f/1.4 Di USD',f:35,a:1.4},
  {b:'Tamron',k:'standard',m:'SP 45mm f/1.8 Di VC USD',f:45,a:1.8},
  
  {b:'Fujifilm X',k:'standard',m:'XF 35mm f/1.4 R',f:35,a:1.4},
  {b:'Fujifilm X',k:'standard',m:'XF 35mm f/1.4 R WR',f:35,a:1.4},
  {b:'Fujifilm X',k:'standard',m:'XF 35mm f/2 R WR',f:35,a:2.0},
  {b:'Fujifilm X',k:'standard',m:'XF 50mm f/1.0 R WR',f:50,a:1.0},
  {b:'Fujifilm X',k:'standard',m:'XF 56mm f/1.2 R WR',f:56,a:1.2},
  {b:'Fujifilm X',k:'standard',m:'XF 56mm f/1.2 R',f:56,a:1.2},
  
  {b:'OM System',k:'standard',m:'M.Zuiko 25mm f/1.2 PRO',f:25,a:1.2},
  {b:'OM System',k:'standard',m:'M.Zuiko 25mm f/1.8',f:25,a:1.8},
  {b:'OM System',k:'standard',m:'M.Zuiko 45mm f/1.2 PRO',f:45,a:1.2},
  {b:'OM System',k:'standard',m:'M.Zuiko 45mm f/1.8',f:45,a:1.8},
  {b:'OM System',k:'standard',m:'M.Zuiko 50mm f/2.8 Macro',f:50,a:2.8},
  
  {b:'Panasonic',k:'standard',m:'Leica DG 25mm f/1.4 II',f:25,a:1.4},
  {b:'Panasonic',k:'standard',m:'Leica DG 25mm f/1.4 I',f:25,a:1.4},
  {b:'Panasonic',k:'standard',m:'Leica DG 42.5mm f/1.2',f:42.5,a:1.2},
  {b:'Panasonic',k:'standard',m:'Lumix S 35mm f/1.8',f:35,a:1.8},
  {b:'Panasonic',k:'standard',m:'Lumix S 50mm f/1.8',f:50,a:1.8},
  
  {b:'Leica',k:'standard',m:'Summilux-M 35mm f/1.4 Asph',f:35,a:1.4},
  {b:'Leica',k:'standard',m:'Summicron-M 35mm f/2 Asph',f:35,a:2.0},
  {b:'Leica',k:'standard',m:'Noctilux-M 50mm f/0.95 Asph',f:50,a:0.95},
  {b:'Leica',k:'standard',m:'Summilux-M 50mm f/1.4 Asph',f:50,a:1.4},
  
  {b:'Samyang',k:'standard',m:'35mm f/1.4 AS UMC',f:35,a:1.4},
  {b:'Samyang',k:'standard',m:'35mm f/1.2 ED AS UMC',f:35,a:1.2},
  {b:'Samyang',k:'standard',m:'AF 50mm f/1.4 FE',f:50,a:1.4},
  {b:'Samyang',k:'standard',m:'AF 50mm f/1.2 FE',f:50,a:1.2},
  
  {b:'Voigtlander',k:'standard',m:'Nokton 35mm f/1.2 Asph',f:35,a:1.2},
  {b:'Voigtlander',k:'standard',m:'Nokton 35mm f/1.5 MC II',f:35,a:1.5},
  {b:'Voigtlander',k:'standard',m:'Nokton 50mm f/1.2 Asph',f:50,a:1.2},
  {b:'Voigtlander',k:'standard',m:'Nokton 50mm f/1.5 MC II',f:50,a:1.5},
  
  {b:'Mitakon',k:'standard',m:'Speedmaster 50mm f/0.95',f:50,a:0.95},
  {b:'Mitakon',k:'standard',m:'Speedmaster 35mm f/0.95 Mk II',f:35,a:0.95},
  
  {b:'TTArtisan',k:'standard',m:'35mm f/1.4',f:35,a:1.4},
  {b:'TTArtisan',k:'standard',m:'50mm f/1.4',f:50,a:1.4},
  {b:'TTArtisan',k:'standard',m:'50mm f/1.2',f:50,a:1.2},
  
  {b:'Viltrox',k:'standard',m:'AF 35mm f/1.8 FE',f:35,a:1.8},
  {b:'Viltrox',k:'standard',m:'AF 35mm f/2.8 1.35x Macro FE',f:35,a:2.8},
  {b:'Viltrox',k:'standard',m:'AF 50mm f/1.8 FE',f:50,a:1.8},
  {b:'Viltrox',k:'standard',m:'AF 50mm f/1.8 STM',f:50,a:1.8},

  // ===== TELEOBIETTIVI (85-135mm, stelle + luna) =====
  {b:'Sony',k:'tele',m:'FE 85mm f/1.4 GM II',f:85,a:1.4},
  {b:'Sony',k:'tele',m:'FE 85mm f/1.4 GM',f:85,a:1.4},
  {b:'Sony',k:'tele',m:'FE 85mm f/1.8',f:85,a:1.8},
  {b:'Sony',k:'tele',m:'FE 85mm f/2.8 Macro',f:85,a:2.8},
  {b:'Sony',k:'tele',m:'FE 100mm f/2.8 STF GM OSS',f:100,a:2.8},
  {b:'Sony',k:'tele',m:'FE 135mm f/1.8 GM',f:135,a:1.8},
  {b:'Sony',k:'tele',m:'FE 135mm f/2.8 STF G Master OSS',f:135,a:2.8},
  
  {b:'Canon RF',k:'tele',m:'RF 85mm f/1.2L USM',f:85,a:1.2},
  {b:'Canon RF',k:'tele',m:'RF 85mm f/1.8 Macro IS',f:85,a:1.8},
  {b:'Canon RF',k:'tele',m:'RF 100mm f/2.8L Macro IS USM',f:100,a:2.8},
  {b:'Canon RF',k:'tele',m:'RF 135mm f/1.8L IS USM',f:135,a:1.8},
  {b:'Canon EF',k:'tele',m:'EF 85mm f/1.4L IS USM',f:85,a:1.4},
  {b:'Canon EF',k:'tele',m:'EF 85mm f/1.2L II USM',f:85,a:1.2},
  {b:'Canon EF',k:'tele',m:'EF 85mm f/1.8 USM',f:85,a:1.8},
  {b:'Canon EF',k:'tele',m:'EF 135mm f/2L USM',f:135,a:2.0},
  {b:'Canon EF',k:'tele',m:'EF 200mm f/2.8L II USM',f:200,a:2.8},
  
  {b:'Nikon Z',k:'tele',m:'Nikkor Z 85mm f/1.2 S',f:85,a:1.2},
  {b:'Nikon Z',k:'tele',m:'Nikkor Z 85mm f/1.8 S',f:85,a:1.8},
  {b:'Nikon Z',k:'tele',m:'Nikkor Z 105mm f/1.4 S',f:105,a:1.4},
  {b:'Nikon Z',k:'tele',m:'Nikkor Z 105mm f/2.8 Macro S',f:105,a:2.8},
  {b:'Nikon Z',k:'tele',m:'Nikkor Z 135mm f/1.8 S Plena',f:135,a:1.8},
  {b:'Nikon Z',k:'tele',m:'Nikkor Z 135mm f/2.8 Macro S',f:135,a:2.8},
  {b:'Nikon F',k:'tele',m:'AF-S 85mm f/1.4G',f:85,a:1.4},
  {b:'Nikon F',k:'tele',m:'AF-S 85mm f/1.8G',f:85,a:1.8},
  {b:'Nikon F',k:'tele',m:'AF-S 105mm f/1.4E ED',f:105,a:1.4},
  {b:'Nikon F',k:'tele',m:'AF-S 105mm f/2.8G VR Macro',f:105,a:2.8},
  {b:'Nikon F',k:'tele',m:'AF-S 135mm f/2.0 DC HSM Art',f:135,a:2.0},
  
  {b:'Sigma',k:'tele',m:'85mm f/1.4 DG DN Art',f:85,a:1.4},
  {b:'Sigma',k:'tele',m:'85mm f/1.4 DC HSM Art',f:85,a:1.4},
  {b:'Sigma',k:'tele',m:'100mm f/1.4 DC HSM Art',f:100,a:1.4},
  {b:'Sigma',k:'tele',m:'105mm f/1.4 DG HSM Art',f:105,a:1.4},
  {b:'Sigma',k:'tele',m:'135mm f/1.8 DG HSM Art',f:135,a:1.8},
  {b:'Sigma',k:'tele',m:'200mm f/2 DG DN OS Sports',f:200,a:2.0},
  
  {b:'Tamron',k:'tele',m:'70-180mm f/2.8 Di III G2',f:70,a:2.8},
  {b:'Tamron',k:'tele',m:'85mm f/1.8 Di VC USD',f:85,a:1.8},
  
  {b:'Fujifilm X',k:'tele',m:'XF 80mm f/1.7 R LM WR',f:80,a:1.7},
  {b:'Fujifilm X',k:'tele',m:'XF 90mm f/2 R LM WR',f:90,a:2.0},
  {b:'Fujifilm X',k:'tele',m:'XF 90mm f/2.8 R LM OIS WR',f:90,a:2.8},
  
  {b:'OM System',k:'tele',m:'M.Zuiko 75mm f/1.8 ED',f:75,a:1.8},
  {b:'OM System',k:'tele',m:'M.Zuiko 90mm f/3.5 Macro IS PRO',f:90,a:3.5},
  
  {b:'Panasonic',k:'tele',m:'Lumix S 85mm f/1.8',f:85,a:1.8},
  {b:'Panasonic',k:'tele',m:'Lumix S 100mm f/2.8 Macro',f:100,a:2.8},
  
  {b:'Leica',k:'tele',m:'Summilux-M 75mm f/1.4',f:75,a:1.4},
  {b:'Leica',k:'tele',m:'Summicron-M 90mm f/2',f:90,a:2.0},
  {b:'Leica',k:'tele',m:'Tele-Elmarit-M 90mm f/2.8',f:90,a:2.8},
  
  {b:'Samyang',k:'tele',m:'AF 85mm f/1.4 RF/FE',f:85,a:1.4},
  {b:'Samyang',k:'tele',m:'AF 135mm f/2.0 FE',f:135,a:2.0},
  
  {b:'Voigtlander',k:'tele',m:'APO-Skopar 65mm f/2 Asph',f:65,a:2.0},
  {b:'Voigtlander',k:'tele',m:'Nokton 100mm f/2.8 Macro',f:100,a:2.8},
  {b:'Voigtlander',k:'tele',m:'APO-Lanthar 110mm f/2.5 Macro',f:110,a:2.5},
  
  {b:'Mitakon',k:'tele',m:'Speedmaster 85mm f/1.2',f:85,a:1.2},
  
  {b:'TTArtisan',k:'tele',m:'75mm f/1.5',f:75,a:1.5},
  {b:'TTArtisan',k:'tele',m:'90mm f/1.2',f:90,a:1.2},
  
  {b:'Viltrox',k:'tele',m:'AF 85mm f/1.8 FE',f:85,a:1.8},
  {b:'Viltrox',k:'tele',m:'AF 135mm f/1.8 FE',f:135,a:1.8},

  // ===== ZOOM VERSATILI (24-70mm, 24-105mm) =====
  {b:'Sony',k:'zoom',m:'FE 24-70mm f/2.8 GM II',f:24,a:2.8},
  {b:'Sony',k:'zoom',m:'FE 24-70mm f/2.8 GM',f:24,a:2.8},
  {b:'Sony',k:'zoom',m:'FE 24-105mm f/4 G OSS',f:24,a:4.0},
  {b:'Sony',k:'zoom',m:'FE 28-60mm f/4-5.6',f:28,a:4.0},
  
  {b:'Canon RF',k:'zoom',m:'RF 24-70mm f/2.8L IS',f:24,a:2.8},
  {b:'Canon RF',k:'zoom',m:'RF 28-70mm f/2L USM',f:28,a:2.0},
  {b:'Canon RF',k:'zoom',m:'RF 24-105mm f/4-7.1 IS STM',f:24,a:4.0},
  {b:'Canon EF',k:'zoom',m:'EF 24-70mm f/2.8L II USM',f:24,a:2.8},
  {b:'Canon EF',k:'zoom',m:'EF 24-70mm f/4L IS USM',f:24,a:4.0},
  {b:'Canon EF',k:'zoom',m:'EF 24-105mm f/3.5-5.6 IS STM',f:24,a:3.5},
  
  {b:'Nikon Z',k:'zoom',m:'Nikkor Z 24-70mm f/2.8 S II',f:24,a:2.8},
  {b:'Nikon Z',k:'zoom',m:'Nikkor Z 24-70mm f/2.8 S',f:24,a:2.8},
  {b:'Nikon Z',k:'zoom',m:'Nikkor Z 24-120mm f/4 S',f:24,a:4.0},
  {b:'Nikon Z',k:'zoom',m:'Nikkor Z 28-75mm f/2.8',f:28,a:2.8},
  {b:'Nikon F',k:'zoom',m:'AF-S 24-70mm f/2.8G ED',f:24,a:2.8},
  {b:'Nikon F',k:'zoom',m:'AF-S 24-70mm f/3.5-4.5G',f:24,a:3.5},
  {b:'Nikon F',k:'zoom',m:'AF-S 24-85mm f/3.5-4.5G VR',f:24,a:3.5},
  
  {b:'Sigma',k:'zoom',m:'24-70mm f/2.8 DG DN II Art',f:24,a:2.8},
  {b:'Sigma',k:'zoom',m:'24-70mm f/2.8 DG DN Art',f:24,a:2.8},
  {b:'Sigma',k:'zoom',m:'28-70mm f/2.8 DG DN Contemporary',f:28,a:2.8},
  
  {b:'Tamron',k:'zoom',m:'28-75mm f/2.8 Di III VXD G2',f:28,a:2.8},
  {b:'Tamron',k:'zoom',m:'24-70mm f/2.8 Di III VXD',f:24,a:2.8},
  
  // ===== ZOOM TELEOBIETTIVI (70-200mm, 150-600mm) =====
  {b:'Sony',k:'zoom',m:'FE 70-200mm f/2.8 GM OSS II',f:70,a:2.8},
  {b:'Sony',k:'zoom',m:'FE 70-200mm f/2.8 GM OSS',f:70,a:2.8},
  {b:'Sony',k:'zoom',m:'FE 70-300mm f/4.5-5.6 G OSS',f:70,a:4.5},
  {b:'Sony',k:'zoom',m:'FE 100-400mm f/4.5-5.6 GM OSS',f:100,a:4.5},
  {b:'Sony',k:'zoom',m:'FE 200-600mm f/5.6-6.3 G',f:200,a:5.6},
  
  {b:'Canon RF',k:'zoom',m:'RF 70-200mm f/2.8L IS',f:70,a:2.8},
  {b:'Canon RF',k:'zoom',m:'RF 100-500mm f/4.5-7.1L IS',f:100,a:4.5},
  {b:'Canon RF',k:'zoom',m:'RF 70-700mm f/3.5-5.7L USM',f:70,a:3.5},
  {b:'Canon EF',k:'zoom',m:'EF 70-200mm f/2.8L IS III USM',f:70,a:2.8},
  {b:'Canon EF',k:'zoom',m:'EF 70-200mm f/2.8L IS II USM',f:70,a:2.8},
  {b:'Canon EF',k:'zoom',m:'EF 70-300mm f/4-5.6L IS USM',f:70,a:4.0},
  {b:'Canon EF',k:'zoom',m:'EF 100-400mm f/4.5-5.6L IS II USM',f:100,a:4.5},
  
  {b:'Nikon Z',k:'zoom',m:'Nikkor Z 70-200mm f/2.8 VR S',f:70,a:2.8},
  {b:'Nikon Z',k:'zoom',m:'Nikkor Z 100-400mm f/4.5-5.6 VR S',f:100,a:4.5},
  {b:'Nikon Z',k:'zoom',m:'Nikkor Z 180-600mm f/5.6-6.3 VR',f:180,a:5.6},
  {b:'Nikon F',k:'zoom',m:'AF-S 70-200mm f/2.8G ED VR II',f:70,a:2.8},
  {b:'Nikon F',k:'zoom',m:'AF-S 80-400mm f/4.5-5.6G ED VR',f:80,a:4.5},
  
  {b:'Sigma',k:'zoom',m:'70-200mm f/2.8 DG DN OS Sports',f:70,a:2.8},
  {b:'Sigma',k:'zoom',m:'100-400mm f/5-6.3 DG DN OS Sports',f:100,a:5.0},
  {b:'Sigma',k:'zoom',m:'150-600mm f/5-6.3 DG DN OS Sports',f:150,a:5.0},
  {b:'Sigma',k:'zoom',m:'150-600mm f/5-6.3 DG OS HSM Contem',f:150,a:5.0},
  
  {b:'Tamron',k:'zoom',m:'50-400mm f/4.5-6.3 Di III VC',f:50,a:4.5},
  {b:'Tamron',k:'zoom',m:'150-500mm f/5-6.7 Di III VC',f:150,a:5.0},
  {b:'Tamron',k:'zoom',m:'70-180mm f/2.8 Di III G2',f:70,a:2.8},
  
  {b:'Fujifilm X',k:'zoom',m:'XF 50-140mm f/2.8 R LM OIS',f:50,a:2.8},
  {b:'Fujifilm X',k:'zoom',m:'XF 70-300mm f/4-5.6 R LM OIS',f:70,a:4.0},
  {b:'Fujifilm X',k:'zoom',m:'XF 100-400mm f/4.5-5.6 R LM OIS',f:100,a:4.5},
  
  {b:'OM System',k:'zoom',m:'M.Zuiko 12-40mm f/2.8 PRO',f:12,a:2.8},
  {b:'OM System',k:'zoom',m:'M.Zuiko 12-40mm f/2.8 PRO II',f:12,a:2.8},
  {b:'OM System',k:'zoom',m:'M.Zuiko 40-150mm f/2.8 PRO',f:40,a:2.8},
  {b:'OM System',k:'zoom',m:'M.Zuiko 150-400mm f/4.5 PRO',f:150,a:4.5},
  {b:'OM System',k:'zoom',m:'M.Zuiko 40-150mm f/4-5.6 ED',f:40,a:4.0},
  
  {b:'Panasonic',k:'zoom',m:'Lumix S 24-70mm f/2.8',f:24,a:2.8},
  {b:'Panasonic',k:'zoom',m:'Lumix S 70-200mm f/4 O.I.S.',f:70,a:4.0},
  {b:'Panasonic',k:'zoom',m:'Lumix S 24-105mm f/4 Macro O.I.S.',f:24,a:4.0},

  // ===== ZOOM ULTRA-WIDE (8-16mm per ultra grand'angolo) =====
  {b:'Nikon F',k:'zoom',m:'AF-S 8-16mm f/4.5-5.6G DX',f:8,a:4.5},
  {b:'Canon EF',k:'zoom',m:'EF-S 10-22mm f/3.5-4.5 USM',f:10,a:3.5},
  {b:'Fujifilm X',k:'zoom',m:'XF 8-16mm f/2.8 R LM WR',f:8,a:2.8},
  {b:'Sony',k:'zoom',m:'E 10-18mm f/4 OSS',f:10,a:4.0},

  // ===== MACRO e SPECIALIZZATI =====
  {b:'Sony',k:'macro',m:'FE 90mm f/2.8 Macro G OSS',f:90,a:2.8},
  {b:'Sony',k:'macro',m:'FE 50mm f/2.8 Macro',f:50,a:2.8},
  {b:'Canon RF',k:'macro',m:'RF 35mm f/1.4L VCM',f:35,a:1.4},
  {b:'Canon EF',k:'macro',m:'EF 100mm f/2.8L Macro IS USM',f:100,a:2.8},
  {b:'Nikon Z',k:'macro',m:'Nikkor Z 50mm f/2.8 Macro S',f:50,a:2.8},
  {b:'Nikon F',k:'macro',m:'AF-S 105mm f/2.8G VR Macro',f:105,a:2.8},
  {b:'Nikon F',k:'macro',m:'AF-S 60mm f/2.8G Micro',f:60,a:2.8},
  {b:'Sigma',k:'macro',m:'105mm f/2.8 DG DN Macro Art',f:105,a:2.8},
  {b:'Tamron',k:'macro',m:'90mm f/2.8 SP Macro VC',f:90,a:2.8},
  {b:'Fujifilm X',k:'macro',m:'XF 60mm f/2.4 R Macro',f:60,a:2.4},
  {b:'Laowa',k:'macro',m:'100mm f/2.8 2x Ultra Macro',f:100,a:2.8},
  {b:'Mitakon',k:'macro',m:'Macro 20mm f/2 4-4x',f:20,a:2.0},

  // ===== OBIETTIVI LEGACY / VINTAGE (pre-AF) =====
  {b:'Zeiss',k:'standard',m:'Planar T* 50mm f/1.4',f:50,a:1.4},
  {b:'Zeiss',k:'standard',m:'Planar T* 85mm f/1.4',f:85,a:1.4},
  {b:'Zeiss',k:'wide',m:'Distagon T* 21mm f/2.8',f:21,a:2.8},
  {b:'Zeiss',k:'wide',m:'Milvus 15mm f/2.8',f:15,a:2.8},
  {b:'Carl Zeiss',k:'standard',m:'Milvus 1.4/50',f:50,a:1.4},
  {b:'Carl Zeiss',k:'tele',m:'Milvus 1.4/85',f:85,a:1.4},
  {b:'Contax',k:'standard',m:'Planar 50mm f/1.4',f:50,a:1.4},
  {b:'Contax',k:'wide',m:'Distagon 35mm f/1.4',f:35,a:1.4},
  {b:'Pentax',k:'wide',m:'FA 35mm f/2',f:35,a:2.0},
  {b:'Pentax',k:'standard',m:'FA 50mm f/1.4',f:50,a:1.4},
  {b:'Pentax',k:'tele',m:'FA 85mm f/1.4',f:85,a:1.4},
  {b:'Minolta',k:'standard',m:'MD 50mm f/1.4',f:50,a:1.4},
  {b:'Canon FD',k:'wide',m:'FD 24mm f/2.8 S.S.C.',f:24,a:2.8},
  {b:'Canon FD',k:'standard',m:'FD 50mm f/1.2 S.S.C.',f:50,a:1.2},
  {b:'Canon FD',k:'tele',m:'FD 85mm f/1.2 L',f:85,a:1.2},
  {b:'Nikon F',k:'wide',m:'Nikkor 20mm f/2.8 Ai-S',f:20,a:2.8},
  {b:'Nikon F',k:'standard',m:'Nikkor 50mm f/1.2 Ai',f:50,a:1.2},
  {b:'Nikon F',k:'tele',m:'Nikkor 85mm f/1.4 Ai-S',f:85,a:1.4},

  // ===== SUPER TELE E SPECIALIZED (135mm+) =====
  {b:'Sony',k:'tele',m:'FE 200-600mm f/5.6-6.3 G',f:200,a:5.6},
  {b:'Sony',k:'tele',m:'FE 300mm f/2.8 GM OSS',f:300,a:2.8},
  {b:'Canon RF',k:'tele',m:'RF 600mm f/4L IS USM',f:600,a:4.0},
  {b:'Canon RF',k:'tele',m:'RF 800mm f/5.6L IS USM',f:800,a:5.6},
  {b:'Canon EF',k:'tele',m:'EF 300mm f/2.8L IS II USM',f:300,a:2.8},
  {b:'Canon EF',k:'tele',m:'EF 400mm f/2.8L IS II USM',f:400,a:2.8},
  {b:'Canon EF',k:'tele',m:'EF 500mm f/4L IS II USM',f:500,a:4.0},
  {b:'Canon EF',k:'tele',m:'EF 600mm f/4L IS II USM',f:600,a:4.0},
  {b:'Nikon Z',k:'tele',m:'Nikkor Z 400mm f/2.8 TC VR S',f:400,a:2.8},
  {b:'Nikon Z',k:'tele',m:'Nikkor Z 600mm f/4 TC VR S',f:600,a:4.0},
  {b:'Nikon F',k:'tele',m:'AF-S 300mm f/2.8G ED VR II',f:300,a:2.8},
  {b:'Nikon F',k:'tele',m:'AF-S 400mm f/2.8G ED VR',f:400,a:2.8},
  {b:'Nikon F',k:'tele',m:'AF-S 500mm f/4G ED VR',f:500,a:4.0},
  {b:'Nikon F',k:'tele',m:'AF-S 600mm f/4G ED VR',f:600,a:4.0},
  {b:'Sigma',k:'tele',m:'200-500mm f/2.8 DG DN',f:200,a:2.8},
  {b:'Sigma',k:'tele',m:'300mm f/2.8 DG DN OS Sports',f:300,a:2.8},
  {b:'Sigma',k:'tele',m:'500mm f/4 DG OS HSM Sports',f:500,a:4.0},

  // ===== OBIETTIVI ASTROFOTOGRAFIA DEDICATI =====
  {b:'Samyang',k:'astro',m:'AF 14mm f/2.4 RF/FE',f:14,a:2.4},
  {b:'Samyang',k:'astro',m:'16mm f/2.0 ED AS UMC CF (APS-C)',f:16,a:2.0},
  {b:'Samyang',k:'astro',m:'AF 14mm f/2.8 RF/E-mount',f:14,a:2.8},
  {b:'Rokinon',k:'astro',m:'14mm f/2.4 (Samyang rebranded)',f:14,a:2.4},
  {b:'Tokina',k:'astro',m:'11-16mm f/2.8 (AT-X)',f:11,a:2.8},
  {b:'Tokina',k:'astro',m:'11-20mm f/2.8',f:11,a:2.8},
  {b:'Tokina',k:'astro',m:'16-28mm f/2.8 (AT-X)',f:16,a:2.8},
  {b:'Irix',k:'astro',m:'11mm f/4 Firefly',f:11,a:4.0},
  {b:'Irix',k:'astro',m:'15mm f/2.4 Firefly',f:15,a:2.4},

  // ===== FISH-EYE (astrofotografia wide) =====
  {b:'Sony',k:'fisheye',m:'FE 16mm f/2.8 Fisheye',f:16,a:2.8},
  {b:'Canon EF',k:'fisheye',m:'EF 15mm f/2.8 Fisheye',f:15,a:2.8},
  {b:'Canon EF',k:'fisheye',m:'EF 8-15mm f/4L Fisheye',f:8,a:4.0},
  {b:'Nikon F',k:'fisheye',m:'AF-S 16mm f/2.8D Fisheye',f:16,a:2.8},
  {b:'Nikon F',k:'fisheye',m:'AF-S 8-15mm f/3.5-4.5E ED Fisheye',f:8,a:3.5},
  {b:'Tokina',k:'fisheye',m:'10-17mm f/3.5-4.5 Fisheye (AT-X)',f:10,a:3.5},
  {b:'Tokina',k:'fisheye',m:'17mm f/3.5 Fisheye',f:17,a:3.5},
  {b:'Samyang',k:'fisheye',m:'12mm f/2.8 Fisheye',f:12,a:2.8},
  {b:'Samyang',k:'fisheye',m:'8mm f/3.5 Fisheye',f:8,a:3.5},
  {b:'Laowa',k:'fisheye',m:'9mm f/5.6 FF LE Fisheye',f:9,a:5.6},

  // ===== ADATTATORI e RIDUTTORI (per astrofotografia) =====
  {b:'Meike',k:'adapter',m:'EF-FX Adapter (Canon→Fuji)',f:0,a:0},
  {b:'Metabones',k:'adapter',m:'Canon EF to Sony E Speedbooster',f:0,a:0},
  {b:'Viltrox',k:'adapter',m:'Canon EF to Sony E with AF',f:0,a:0},
  {b:'Adapters',k:'reducer',m:'Focal Reducer 0.72x (varie monture)',f:0,a:0},
  {b:'Adapters',k:'teleconverter',m:'2x Teleconverter (varie)',f:0,a:0},
  {b:'Adapters',k:'teleconverter',m:'1.4x Teleconverter (varie)',f:0,a:0},

  // ===== FOCUS STELLARE / ASTRO ACCESSORI =====
  {b:'Baader',k:'astro_acc',m:'Hyperion 68° Eyepiece Set (per focuser)',f:0,a:0},
  {b:'ZWO',k:'astro_acc',m:'EAF (Electronic Auto-Focuser)',f:0,a:0},
  {b:'Pegasus',k:'astro_acc',m:'FocusCube Motor + Focuser',f:0,a:0},
  {b:'Robofocus',k:'astro_acc',m:'Robofocus Focuser Motor',f:0,a:0},

  // ===== FILTRI ASTROFOTOGRAFIA =====
  {b:'Baader',k:'filter',m:'Neodymium Moon & Skyglow Filter',f:0,a:0},
  {b:'Optolong',k:'filter',m:'L-Pro Light Pollution Filter',f:0,a:0},
  {b:'Optolong',k:'filter',m:'UV/IR Cut Filter',f:0,a:0},
  {b:'Astronomik',k:'filter',m:'UV/IR Pass Filter',f:0,a:0},
  {b:'Celestron',k:'filter',m:'Light Pollution Imaging Filter',f:0,a:0},
  {b:'Hutech',k:'filter',m:'IDAS LPS-P7 Filter',f:0,a:0},
  {b:'SkyWatcher',k:'filter',m:'Moon Filter 13% Transmission',f:0,a:0},

  // ===== OBIETTIVI SLOT (per CCD astro) =====
  {b:'Celestron',k:'astro_lens',m:'0.63x Reducer (per scope)',f:0,a:0},
  {b:'Baader',k:'astro_lens',m:'2x Barlow Lens (per scope)',f:0,a:0},
  {b:'Orion',k:'astro_lens',m:'Field Flattener (per scope)',f:0,a:0},
  {b:'SkyWatcher',k:'astro_lens',m:'0.85x Focal Reducer',f:0,a:0}
];

// Esposizione a console
console.log(`📷 CAMERAS: ${CAMERAS.length}, 🔭 LENSES: ${LENSES.length}`);
