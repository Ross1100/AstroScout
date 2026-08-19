# Astro Scout — Mappa completa dei copy

> File generato per revisione copy. Ogni voce include: **riga** (approssimativa, file `index.html`), **testo esatto**, **contesto**.
> Per saltare a una voce: cerca la riga nel file sorgente con `Ctrl+G` (VSCode) o `grep -n "testo" index.html`.

---

## 1. HEADER (topbar)

| Riga | Testo | Contesto |
|---|---|---|
| ~323 | `Astro Scout — aggiorna` | aria-label del logo |
| ~323 | `Aggiorna tutto` | title del logo (tooltip) |
| ~325 | `🌌` | placeholder logo (icona) |
| ~328 | `Astro Scout` | h1 principale |
| ~329 | `Compagno per astrofotografia: cielo, attrezzatura e luoghi.` | sottotitolo (lead) |
| ~330 | `—` | orologio (inizializzato poi da JS) |
| ~330 | `caricamento…` | stagione (placeholder) |
| ~333 | `📍 Posizione` | bottone header |
| ~333 | `Centra sulla mia posizione` | title (tooltip) |
| ~334 | `🌙 Stasera` | bottone header |
| ~334 | `Vai al verdict di stasera` | title (tooltip) |
| ~335 | `🔄 Aggiorna` | bottone header |
| ~335 | `Ricarica meteo e mappa` | title (tooltip) |

## 2. NIGHT-BAR (data/ora di riferimento)

| Riga | Testo | Contesto |
|---|---|---|
| ~340 | `📅 Stiamo valutando` | label |
| ~341 | `la notte tra…` | testo iniziale (placeholder JS) |
| ~342 | `Orario di riferimento: caricamento…` | testo iniziale |

## 3. TAB BAR

| Riga | Testo | Contesto |
|---|---|---|
| ~346 | `🌙 Stasera` | tab 1 |
| ~347 | `📊 Storico & probabilità` | tab 2 |

---

## 4. TAB OGGI

### 4.1 Sezione VERDICT ("Stasera è buono?")

| Riga | Testo | Contesto |
|---|---|---|
| ~356 | `Sto valutando le condizioni…` | h2 verdict |
| ~357 | `Calcolo nuvole, vento e fase lunare per la tua posizione.` | status sotto h2 |
| ~359 | `luna —` | placeholder moonInfo |
| ~360 | `tramonto —` | placeholder sunInfo |
| ~361 | `buio astronomico —` | placeholder astroInfo |
| JS | `Ottima` / `Cielo sereno, vento calmo e luna ridotta: serata perfetta per il deep sky.` | verdict "good" |
| JS | `Discreta` / `Condizioni accettabili. Pianifica soggetti luminosi o paesaggi con luna.` | verdict "ok" |
| JS | `Sconsigliata` / `Cielo coperto, vento forte o luna piena: meglio un'altra serata.` | verdict "bad" |
| JS | `Scegli la tua posizione` | verdict senza posizione |
| JS | `Clicca 📍 Posizione nell'header per consentire la geolocalizzazione, oppure sposta la mappa e tocca un punto.` | verdict senza posizione (descrizione) |
| JS | `In attesa della tua posizione…` | forecast senza posizione |
| JS | `Scegli una posizione per cercare belvederi nelle vicinanze.` | placesStatus senza posizione |

### 4.2 Section divider "Sorveglianza cielo"

| Riga | Testo |
|---|---|
| ~367 | `🛰️ Sorveglianza cielo` |
| ~367 | `stasera in un colpo d'occhio` |

### 4.3 PANEL ATTREZZATURA

| Riga | Testo | Contesto |
|---|---|---|
| ~370 | `La tua attrezzatura` | h2 |
| ~372 | `Fotocamera` | label |
| ~373 | `Obiettivo` | label |
| ~377 | `🎯 Cosa vuoi fotografare?` | label soggetto |
| ~379 | `📸 Stelle e paesaggio` | option subject (stelle) |
| ~380 | `🌌 Via Lattea` | option subject (milkyway) |
| ~381 | `🔭 Deep sky (nebulose, galassie)` | option subject (deepsky) |
| ~382 | `🌙 Luna` | option subject (moon) |
| ~383 | `🪐 Pianeti` | option subject (planets) |
| ~384 | `⭐ Scie stellari (startrail)` | option subject (startrail) |
| ~388 | `Triangolo dell'esposizione` | aria-label SVG |
| ~517 | `Triangolo dell'esposizione` | tri-caption sotto SVG |
| ~520 | `Usa la mia posizione` | bottone primary |
| ~520 | `Aggiorna cielo` | bottone |
| ~521 | `📍 Posizione non ancora scelta — clicca � Posizione in alto per iniziare.` | status sotto bottoni |
| JS | `La geolocalizzazione non è supportata dal browser.` | errore geoloc non supportata |
| JS | `Richiesta posizione…` | durante richiesta posizione |
| JS | `Posizione attiva: LAT, LON` | dopo geoloc OK |
| JS | `Posizione non disponibile: mostro Roma. Tocca la mappa per scegliere un punto.` | errore geoloc negata |

### 4.4 PANEL METEO

| Riga | Testo | Contesto |
|---|---|---|
| ~524 | `�️ Condizioni meteo` | h2 |
| ~524 | `—` | placeInline (placeholder) |
| ~526 | `☁️ Nuvole` | label card |
| ~527 | `💨 Vento` | label card |
| ~527 | `—` | windDir placeholder |
| ~528 | `💧 Umidità` | label card |
| ~529 | `🌡️ Temperatura` | label card |
| ~530 | `✨ Trasparenza` | label card |
| ~531 | `🌧️ Pioggia` | label card |
| ~532 | `💦 Condensa` | label card |
| ~532 | `spread punto di rugiada` | sotto-card |
| ~534 | `Carico le condizioni previste per la prima ora notturna disponibile…` | status meteo |
| JS | `Buona` / `Discreta` / `Debole` | rating trasparenza |
| JS | `🟥 Rischio` / `🟡 Attenzione` / `🟢 OK` | rischio condensa |
| JS | `Td X°C · RISCHIO` | meta dewMeta |
| JS | `dato non disponibile` | dewMeta fallback |
| JS | `🧭 DIR (GRADI)` | direzione vento |
| JS | `Aggiornamento dal servizio meteo…` | loading |
| JS | `Riferimento: YYYY-MM-DD HH:MM · condizioni indicative, non un bollettino di sicurezza.` | meta meteo |
| JS | `🕒 Riferimento meteo: HH:MM` | footer meteo |
| JS | `Non riesco a raggiungere il servizio meteo. Riprova con connessione attiva.` | errore fetch |
| JS | `Dati meteo non disponibili` | errore |
| JS | `Verifica la connessione e riprova: non posso valutare la serata.` | errore finale |
| JS | `stasera` / `domani notte` / `la notte del` | nightDate labels |

### 4.5 MAPPA LIVE (Leaflet)

| Riga | Testo | Contesto |
|---|---|---|
| ~538 | `🗺️ Esplorazione` | section divider |
| ~538 | `dove andare stanotte` | section divider |
| ~539 | `Mappa live` | h2 |
| ~541 | `Inquinamento luminoso` | toggle label |
| ~543 | `Mappa interattiva con posizione e punti panoramici` | aria-label mappa |
| ~545 | `Scala di Bortle approssimata` | legend title |
| ~547 | `Cielo buio (B1)` / `Suburbano (B5)` / `Centro città (B9)` | legend colors |
| ~549 | `Tocca la mappa per spostare la ricerca in un altro punto.` | status sotto mappa |
| JS | `La tua posizione attuale` | popup marker utente |
| JS | `Posizione scelta: LAT, LON` | popup marker dopo click |
| JS | `Scegli prima una posizione per cercare belvederi nelle vicinanze.` | placesStatus |
| JS | `📍 Nessuna posizione. Clicca 📍 Posizione in alto o sposta la mappa.` | placesStatus fallback |
| JS | `Cerco punti panoramici entro 50 km…` | placesStatus loading |
| JS | `Belvedere` / `Punto panoramico` | nomi fallback OSM |
| JS | `Nessun belvedere o altura mappata nelle vicinanze. Prova a spostare la mappa o consulta direttamente OpenStreetMap.` | placesStatus empty |
| JS | `Nessun risultato entro 50 km dalla posizione attuale.` | placesStatus empty 2 |
| JS | `🌄 Nome` | link popup punto panoramico |
| JS | `📏 X km · 🧭 DIR (GRADI)` / `📏 X km · 🧭 DIR · �️ X m` | small lista |
| JS | `Trovati N punti panoramici entro 50 km. Marker blu aggiunti sulla mappa.` | placesStatus OK |
| JS | `⚠️ Servizio Overpass sovraccarico. Riprova ora.` | errore Overpass |
| JS | `(risultato precedente, riprova per aggiornare)` | fallback cache |
| JS | `⚠️ Servizio cartografico momentaneamente non raggiungibile (504 Gateway Timeout). Riprova tra qualche secondo.` | errore 504 |
| JS | `Overpass sovraccarico — riprova più tardi.` | errore Overpass 2 |

### 4.6 Section divider "Catalogo cielo"

| Riga | Testo |
|---|---|
| ~553 | `🌌 Catalogo cielo` |
| ~553 | `cosa fotografare stanotte` |

### 4.7 CIELO STELLATO

| Riga | Testo | Contesto |
|---|---|---|
| ~557 | `✨ Cielo stellato` | h2 |
| ~558 | `Sfera celeste reale. Trascina per ruotare, scrolla per zoomare. Scegli data/ora e quali layer mostrare. Sotto, gli 8 target più alti dalla tua posizione.` | status sotto h2 |
| ~561 | `📅 Quando (data e ora)` | label datetime |
| ~564 | `Ora` | preset group label |
| ~565 | `22:00` | preset |
| ~566 | `23:00` | preset |
| ~567 | `00:00` | preset |
| ~568 | `01:00` | preset |
| ~569 | `02:00` | preset |
| ~570 | `🌌 Buio astronomico` | preset |
| ~574 | `� Layer` | label |
| ~576 | `Stelle` | chip layer |
| ~577 | `Linee costellazioni` | chip layer |
| ~578 | `Nomi costellazioni` | chip layer |
| ~579 | `Oggetti deep-sky` | chip layer |
| ~580 | `Eclittica` | chip layer |
| ~581 | `Griglia equatoriale` | chip layer |
| ~582 | `Via Lattea` | chip layer |
| ~583 | `☉ Pianeti e Sole/Luna` | chip layer |
| ~588 | `🗺️ Densità stelle:` | label select |
| ~590 | `⭐ Light (mag ≤ 4.5, ~150 stelle)` | option lite |
| ~591 | `✨ Ricca (mag ≤ 6, ~500 stelle)` | option rich |
| ~592 | `🌌 Realistica (mag ≤ 7.5, ~1500 stelle)` | option real (default) |
| ~594 | `Limite magnitudine (stelle più deboli visibili)` | descrizione sotto select |
| ~596 | `Sfera celeste reale` | aria-label mappa cielo |
| ~597 | `💡 Tocca una stella, un pianeta o un DSO sulla mappa o nella lista qui sotto per vedere la scheda Wikipedia.` | status sotto mappa |
| ~598 | `Calcolo target in corso…` | placeholder lista DSO |
| ~599 | `🪐 Pianeti e Luna` | h2 pianeti |
| ~599 | `—` | solarSub (placeholder) |
| ~600 | `Posizioni reali calcolate con Astronomy Engine per la data/ora scelta. La Luna mostra anche la frazione illuminata.` | status pianeti |
| ~601 | `Calcolo corpi del Sistema Solare in corso…` | placeholder lista pianeti |

### 4.8 POSTI DA CUI SCATTARE

| Riga | Testo | Contesto |
|---|---|---|
| ~604 | `Posti da cui scattare nelle vicinanze` | h2 |
| ~605 | `Ricerca di belvederi e punti panoramici entro 50 km.` | status |
| ~606 | `Caricamento…` | placeholder lista |

### 4.9 GLOSSARIO

| Riga | Testo | Contesto |
|---|---|---|
| ~610 | `📖 Glossario` | h2 |
| ~611 | `I termini che vedi nelle card, nei popup e nei suggerimenti. Tienilo aperto la prima volta che esci, poi tornerà utile solo nei dubbi.` | status |
| ~615 | `Focale equivalente` + descrizione | h3 glossario |
| ~619 | `Apertura (f/ )` + descrizione | h3 glossario |
| ~623 | `ISO` + descrizione | h3 glossario |
| ~627 | `Regola del 250` + descrizione + nota NPF | h3 glossario |
| ~632 | `Seeing` + descrizione | h3 glossario |
| ~636 | `Trasparenza` + descrizione | h3 glossario |
| ~640 | `Scala di Bortle` + descrizione | h3 glossario |
| ~644 | `Crepuscolo astronomico` + descrizione | h3 glossario |
| ~648 | `Crepuscolo civile e nautico` + descrizione | h3 glossario |
| ~652 | `Magnitudine` + descrizione | h3 glossario |
| ~656 | `Deep sky` + descrizione | h3 glossario |
| ~660 | `Via Lattea` + descrizione | h3 glossario |

### 4.10 FEEDBACK & SUGGERIMENTI

| Riga | Testo | Contesto |
|---|---|---|
| ~667 | `💬 Feedback & suggerimenti` | h2 |
| ~668 | `Aiutami a migliorare Astro Scout: segnala bug, proponi funzionalità o racconta la tua esperienza. Il feedback arriva direttamente via mail e viene anche salvato in locale come backup.` | status introduttivo |
| ~670 | `Tipo` | label |
| ~672 | `🐛 Bug / qualcosa non funziona` | option fbType |
| ~673 | `💡 Idea / funzionalità` | option fbType |
| ~674 | `⭐ Feedback positivo` | option fbType |
| ~675 | `Altro` | option fbType |
| ~677 | `Titolo breve` | label |
| ~678 | `Es. 'La mappa del cielo non si aggiorna dopo lo zoom'` | placeholder input |
| ~679 | `Descrizione` | label |
| ~680 | `Cosa è successo, cosa ti aspettavi, browser e dispositivo...` | placeholder textarea |
| ~682 | `📤 Invia feedback` | bottone primary |
| ~684 | `Opzioni locali` | summary details |
| ~686 | `💾 Salva bozza` | bottone secondario |
| ~687 | `🗑️ Svuota salvati` | bottone secondario |
| ~693 | `📚 Feedback salvati` | h3 |
| ~694 | `Nessun feedback salvato.` | placeholder lista |
| JS | `Nessun feedback salvato.` | (duplicato) |
| JS | `⚠️ Feedback key non configurata. Salvo solo in locale.` | errore chiave mancante |
| JS | `✅ Inviato! Grazie per il feedback — riceverò una mail e ti risponderò se serve.` | success |
| JS | `⚠️ Errore Web3Forms: …. Il feedback è comunque salvato in locale.` | errore Web3Forms |
| JS | `�️ Errore di rete: …. Feedback salvato in locale.` | errore fetch |
| JS | `⚠️ Scrivi almeno un titolo o una descrizione.` | errore validazione |
| JS | `✅ Salvato in locale.` | success bozza |
| JS | `Cancellare TUTTI i feedback salvati in locale?` | confirm dialog |
| JS | `🗑️ Feedback cancellati.` | success clear |

---

## 5. TAB STORICO & PROBABILITÀ

| Riga | Testo | Contesto |
|---|---|---|
| ~701 | `� Probabilità di cielo fotogenico` | h2 |
| ~702 | `Serve la tua posizione. Premi 📍 in alto per iniziare.` | status iniziale |
| ~707 | `Probabilità cielo sereno` | hc-label (stat card 1) |
| ~709 | `Media giornaliera · ultimi 5 anni` | hc-meta stat card 1 |
| ~712 | `Miglior mese` | hc-label stat card 2 |
| ~714 | `Per cielo sereno` | hc-meta stat card 2 |
| ~717 | `Peggior mese` | hc-label stat card 3 |
| ~719 | `Più nubi` | hc-meta stat card 3 |
| ~723 | `📅 Calendario annuale` | h3 |
| ~725 | `Probabilità cielo sereno per notte (22:00-03:00) basata su media ultimi 5 anni.` | status |
| ~727 | `🎯 Indice di fattibilità DSO` | h3 |
| ~728 | `Combina altitudine notturna, fase lunare e probabilità cielo sereno. Punteggio 0-100.` | status |
| ~731 | `🌒 Astro del momento` | h3 |
| JS | `Premi 📍 Posizione per caricare i dati storici.` | loading iniziale |
| JS | `📊 Dati da DATETIME` | label dataset |
| JS | `📡 Scaricamento dati storici da Open-Meteo…` | status download |
| JS | `📊 Dati da DATETIME · N giorni analizzati` | meta finale |
| JS | `⚠️ Impossibile scaricare dati storici (offline?). Riprova con connessione attiva.` | errore |
| JS | `Miglior mese` + `X% sereno (media Y% nuvole)` | testo stat card 2 |
| JS | `Peggior mese` + `… Più nubi` | testo stat card 3 |
| JS | `Mese: X% sereno` | tooltip barre calendario |
| JS | `🌑 Nuova`, `🌒 Crescente`, `🌓 Primo quarto`, `🌔 Gibbosa`, `🌕 Piena`, `🌖 Gibbosa calante`, `🌗 Ultimo quarto`, `🌘 Calante` | nomi fasi lunari |
| JS | `Alba`, `Tramonto`, `Buio astronomico`, `Fase lunare`, `Illuminazione` | label astroNow |
| JS | `tramonto HH:MM` | sunInfo |
| JS | `buio astronomico ~2h dopo il tramonto` / `buio astronomico alle HH:MM` | astroInfo |

---

## 6. FOOTER

| Riga | Testo |
|---|---|
| ~737 | `Dati storici: Open-Meteo Historical API (media ultimi 5 anni). Calcoli astronomici: Astronomy Engine (offline). La posizione viene richiesta solo dal tuo browser.` |

---

## 7. WIKI MODAL (popup)

| Riga | Testo | Contesto |
|---|---|---|
| ~2580 | `Chiudi` | aria-label X |
| ~2581 | `� Caricamento...` | titolo iniziale (placeholder JS) |
| ~2585 | `📝 Vai al dettaglio` | bottone primary |
| ~2586 | `� Apri su Wikipedia` | bottone (dinamico) |
| ~2587 | `✈️ SIMBAD` | bottone (dinamico) |
| ~2588 | `Chiudi` | bottone |
| JS | `📖 Nome` | titolo dinamico dopo fetch |
| JS | `mag X.XX` / `RA HHh MMm` / `Dec ±DD° MM'` | chip meta |
| JS | `Carico descrizione da Wikipedia...` | loading |
| JS | `Fonte: Wikipedia (TITLE)` | footer descrizione wiki |
| JS | `Descrizione dal catalogo locale (Wikipedia non disponibile).` | fallback |
| JS | `Nessun target sopra i 15° di altitudine in questo momento. Prova un altro orario.` | lista DSO vuota |
| JS | `Astronomy Engine non caricato (offline?). Riavvia l'app con connessione per cachare la libreria.` | errore library |

---

## 8. SEZIONE WIKI DETTAGLIO

| Riga | Testo | Contesto |
|---|---|---|
| ~2595 | `📖 Dettaglio:` | h2 (nome iniettato) |
| ~2596 | `Seleziona un corpo celeste dalla mappa o dalla lista per vederne il dettaglio completo.` | status |
| ~2600 | `🌍 Risorse esterne` | h3 |
| ~2602 | `🌋 Quando osservarlo` | h3 |
| JS | `Carico descrizione completa...` | loading |
| JS | `Fonte: Wikipedia` | footer descrizione |
| JS | `Wikipedia non disponibile per questo oggetto.` | fallback |
| JS | `Descrizione locale (Wikipedia non ha un articolo dedicato).` | fallback meta |
| JS | `Tipo: Stella` / `Tipo: Pianeta/Satellite` / `Tipo: Costellazione` / `Tipo: TIPO_DSO` | chip meta |
| JS | `Magnitudine: …`, `RA: …`, `Dec: …`, `Dimensioni: …` | chip meta |
| JS | `🌐 Wikipedia (IT)` | link esterno |
| JS | `🌐 Wikipedia (EN, cerca)` | link esterno |
| JS | `✈️ SIMBAD (database astronomico)` | link esterno |
| JS | `👀 NASA Eyes (esplora il sistema solare)` | link esterno |

### Stringhe bestObservationWindow (visibili nella sezione wiki)

| Riga | Testo | Contesto |
|---|---|---|
| JS | `Osservabile durante la stagione astronomica appropriata per la tua latitudine.` | dec null |
| JS | `Visibile tutto l'anno dall'emisfero nord (declinazione molto alta).` | dec > 60 |
| JS | `Ottimo in primavera/estate boreale, culminazione a sud.` | dec 20..60 |
| JS | `Ottimo in inverno boreale, passa alta nel cielo.` | dec -20..20 |
| JS | `Ottimo in estate/autunno australe dall'emisfero sud, bassa al nord.` | dec -60..-20 |
| JS | `Visibile principalmente dall'emisfero australe (declinazione molto negativa).` | dec < -60 |

---

## 9. MAPPA STELLATA (SVG inline copy)

| Riga | Testo | Contesto |
|---|---|---|
| ~2014 | `Posizione non ancora acquisita` | placeholder se no posizione |
| ~2015 | `Premi 📍 Posizione in alto per centrare il cielo sopra la tua testa.` | placeholder |
| ~2050 | `N`, `E`, `S`, `O` | etichette rosa dei venti |
| ~2117 | `Nome (mag X.X) — clicca per dettagli` | tooltip stella |
| ~2152 | `Nome · alt X° az X° · mag X.X · clicca per dettagli` | tooltip pianeta |
| ~2175 | `SEI QUI` | marker zenit |
| ~2183 | `PNA` / `PSA` | etichetta polo (nord/sud) |
| ~2185 | `Polo Nord dell'Asse — altitudine X.X° (= |latitudine|)` / `Polo Sud dell'Asse — …` | tooltip polo |
| ~2190 | `— ORIZZONTE —` | label orizzonte |
| ~2193 | `ZENIT` | label zenit |
| ~2201 | `📍 LATSTR LONSTR` / `🕐 datestr · LST X.Xh` | info box osservatore |
| ~2222 | `Nessun target sopra i 15° di altitudine in questo momento. Prova un altro orario.` | lista DSO vuota |
| ~2231 | `tipo · mag X · size · alt X° DIR` + descrizione DSO | lista DSO |
| ~2261 | `N sopra l'orizzonte · Luna X% illuminata` | solarSub |
| ~2264 | `Nessun corpo del Sistema Solare sopra l'orizzonte in questo momento.` | lista pianeti vuota |
| ~2275 | `🕒 · sorge HH:MM · tramonta HH:MM` / `� · sempre sopra/sotto l'orizzonte` | riga pianeti |

---

## 10. STORAGE / PREFERENZE

| Riga | Testo | Contesto |
|---|---|---|
| ~1384 | `⚠️ Modalità privata rilevata: le preferenze non verranno salvate tra le sessioni.` | notifica privata |
| ~1403 | `⚠️ localStorage non disponibile: i feedback non verranno salvati.` | errore storage |

---

## Note finali

- I `<title>` dentro SVG (tooltip stelle/DSO/pianeti) sono dinamici e cambiano in base al contenuto del catalogo.
- L'attribution Leaflet in mappa (riga ~1293) è visibile nel controllo standard Leaflet: `© OpenStreetMap · © CARTO`.
- Alcune stringhe dinamiche nelle definizioni `PRESETS` (~righe 930–967) appaiono nell'attrezzatura solo dopo aver scelto un soggetto dalla select.
- Molte stringhe italiane contengono emoji: ⚠️ ✅ 📤 🗑️ 💾 🌐 📖 � ✈️ 📅 🎯 🔭 🪐 🌙 ⭐ ecc. Per i testi lunghi controllare che UTF-8 sia preservato.
