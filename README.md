# 🌌 Astro Scout

> Configurazione di scatto, condizioni del cielo e punti panoramici per astrofotografia.

## Cos'è

Una single-page web app che ti dice a colpo d'occhio **se stasera è una buona serata per uscire a fotografare il cielo**, dove andare e come configurare la fotocamera.

## Funzionalità

- 🟢 **Verdict serata**: semaforo 🟢/�/🔴 basato su nuvole, vento e luna
- 🌙 **Fase lunare** calcolata localmente
- 🗺️ **Mappa interattiva** (tema scuro) con layer di inquinamento luminoso
- 🏔️ **Belvederi** entro 50 km dalla tua posizione, con distanza e direzione
- � **Setup fotocamera** personalizzato per oltre 40 combinazioni camera/obiettivo
- 📖 **Glossario integrato** per i termini tecnici (tooltip al hover)
- 💾 **Salvataggio preferenze** automatico (camera, obiettivo, layer LP)

## Servizi utilizzati

| Servizio | Uso |
|---|---|
| [Open-Meteo](https://open-meteo.com/) | Meteo orario |
| [OpenStreetMap / Overpass](https://www.openstreetmap.org/) | Belvederi e punti panoramici |
| [CARTO Dark Matter](https://carto.com/basemaps) | Tile mappa (tema scuro) |
| [Lorenz et al. 2022](https://djlorenz.github.io/astronomy/lp2022/) | Overlay inquinamento luminoso |
| [Leaflet](https://leafletjs.com/) | Libreria mappa |

Nessun backend, nessun account, nessuna API key. Privacy-first: la posizione resta nel browser.

## Demo

🌐 **Live**: https://Ross1100.github.io/AstroScout/

## Sviluppo locale

```bash
# Clona il repo
git clone https://github.com/Ross1100/AstroScout.git
cd AstroScout

# Avvia un server locale (Python 3)
python3 -m http.server 8000

# Apri nel browser
open http://localhost:8000
```

> **Nota**: aprire il file con `file://` causa problemi CORS con Overpass.
> Usa sempre un server HTTP (anche locale) per il corretto funzionamento.

## Licenza

MIT
