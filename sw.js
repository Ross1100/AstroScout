// Service Worker per Astro Scout — Network-first per HTML, cache per asset statici
const CACHE='astro-scout-v131-FULLWIDTH';
const ASSETS=[
  './',
  './index.html',
  './data/gear.js',
  './astronomy.engine.js',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './logo.png',
  './logo-header.png',
  './manifest.webmanifest',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

self.addEventListener('install',e=>{
  // Cancella SOLO le cache con il prefisso astro-scout- (lascia stare cache di altre app/PWA)
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys
        .filter(k=>k.startsWith('astro-scout-')&&k!==CACHE)
        .map(k=>caches.delete(k))))
      .then(()=>caches.open(CACHE))
      // Pre-cache tollerante: logga ma non bloccare l'install se un asset fallisce
      .then(c=>Promise.all(ASSETS.map(a=>c.add(a).catch(err=>console.warn('[SW] skip',a,err.message)))))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

// Messaggi dal client (es. SKIP_WAITING)
self.addEventListener('message',e=>{
  if(e.data&&e.data.type==='SKIP_WAITING'){
    self.skipWaiting();
  }
});

self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  if(!url.protocol.startsWith('http'))return;

  // HTML e root: SEMPRE network-first (così aggiornamenti del sito arrivano subito)
  const isHtml=e.request.mode==='navigate'
              ||(e.request.destination==='document')
              ||url.pathname.endsWith('/')
              ||url.pathname.endsWith('/index.html');

  // API meteo/Overpass: network-first
  if(url.hostname.includes('open-meteo.com')||url.hostname.includes('overpass')){
    e.respondWith(fetch(e.request).then(r=>{
      const clone=r.clone();
      caches.open(CACHE).then(c=>c.put(e.request,clone));
      return r;
    }).catch(()=>caches.match(e.request)));
    return;
  }

  if(isHtml){
    e.respondWith(
      fetch(e.request).then(r=>{
        if(r.status===200){
          const clone=r.clone();
          caches.open(CACHE).then(c=>c.put(e.request,clone));
        }
        return r;
      }).catch(()=>caches.match(e.request))
    );
    return;
  }

  // Asset statici: cache-first
  e.respondWith(
    caches.match(e.request).then(cached=>{
      if(cached)return cached;
      return fetch(e.request).then(r=>{
        if(r.status===200){
          const clone=r.clone();
          caches.open(CACHE).then(c=>c.put(e.request,clone));
        }
        return r;
      }).catch(()=>cached);
    })
  );
});