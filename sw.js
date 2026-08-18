// Service Worker per Astro Scout — Cache-first per offline
const CACHE='astro-scout-v16';
const ASSETS=[
  './',
  './index.html',
  './data/gear.js',
  './icon-192.svg',
  './manifest.webmanifest',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

self.addEventListener('fetch',e=>{
  // Solo GET, solo http/https
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  if(!url.protocol.startsWith('http'))return;

  // Network-first per API meteo/Overpass (dati freschi), cache-first per tile e asset
  if(url.hostname.includes('open-meteo.com')||url.hostname.includes('overpass')){
    e.respondWith(fetch(e.request).then(r=>{
      const clone=r.clone();
      caches.open(CACHE).then(c=>c.put(e.request,clone));
      return r;
    }).catch(()=>caches.match(e.request)));
  }else{
    e.respondWith(caches.match(e.request).then(cached=>{
      if(cached)return cached;
      return fetch(e.request).then(r=>{
        if(r.status===200){
          const clone=r.clone();
          caches.open(CACHE).then(c=>c.put(e.request,clone));
        }
        return r;
      }).catch(()=>cached);
    }));
  }
});
