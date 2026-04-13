export interface TreeOption {
  label: string;
  next: string;
}

export interface TreeNode {
  id: string;
  question: string;
  options?: TreeOption[];
  /** Solo nei nodi foglia */
  answer?: string;
  link?: { label: string; to: string };
}

export const TREE_NODES: Record<string, TreeNode> = {
  root: {
    id: 'root',
    question: 'Da dove vuoi partire?',
    options: [
      { label: 'Voglio acquistare Lupetta', next: 'acquisto' },
      { label: 'Ho già Lupetta e ho bisogno di supporto', next: 'supporto' },
      { label: 'Voglio capire se fa al caso mio', next: 'scoperta' },
      { label: 'Ho un problema tecnico', next: 'tecnico' },
    ],
  },

  /* ─── Ramo acquisto ─── */
  acquisto: {
    id: 'acquisto',
    question: 'Che tipo di allevamento hai?',
    options: [
      { label: 'Bovino / Bufalino', next: 'acquisto_bovino' },
      { label: 'Ovino / Caprino', next: 'acquisto_piccolo' },
      { label: 'Suino', next: 'acquisto_suino' },
      { label: 'Avicolo', next: 'result_contattaci' },
    ],
  },
  acquisto_bovino: {
    id: 'acquisto_bovino',
    question: 'Quanti capi allevi?',
    options: [
      { label: 'Meno di 50 capi', next: 'result_mini' },
      { label: 'Da 50 a 200 capi', next: 'result_maxi' },
      { label: 'Più di 200 capi', next: 'result_enterprise' },
    ],
  },
  acquisto_piccolo: {
    id: 'acquisto_piccolo',
    question: 'Qual è la tua priorità principale?',
    options: [
      { label: 'Controllo dei dosaggi di colostro', next: 'result_mini' },
      { label: 'Monitoraggio di più box in contemporanea', next: 'result_maxi' },
    ],
  },
  acquisto_suino: {
    id: 'acquisto_suino',
    question: 'Ti interessa principalmente:',
    options: [
      { label: 'Alimentazione controllata dei lattonzoli', next: 'result_mini' },
      { label: 'Gestione centralizzata di più scrofe', next: 'result_maxi' },
    ],
  },

  /* ─── Ramo supporto ─── */
  supporto: {
    id: 'supporto',
    question: 'Di che tipo di supporto hai bisogno?',
    options: [
      { label: 'Setup iniziale del dispositivo', next: 'supporto_setup' },
      { label: 'Configurazione dosaggi e profili', next: 'supporto_dosaggi' },
      { label: 'Utilizzo del monitoraggio remoto', next: 'result_monitoraggio' },
      { label: 'Aggiornamento firmware o software', next: 'result_firmware' },
    ],
  },
  supporto_setup: {
    id: 'supporto_setup',
    question: 'Qual è il tuo dispositivo?',
    options: [
      { label: 'Lupetta Mini', next: 'result_setup_mini' },
      { label: 'Lupetta Maxi', next: 'result_setup_maxi' },
    ],
  },
  supporto_dosaggi: {
    id: 'supporto_dosaggi',
    question: 'Stai lavorando con:',
    options: [
      { label: 'Colostro fresco o refrigerato', next: 'result_dosaggi_colostro' },
      { label: "Latte in polvere o sostitutivo", next: 'result_dosaggi_polvere' },
      { label: 'Mix di entrambi', next: 'result_dosaggi_mix' },
    ],
  },

  /* ─── Ramo scoperta ─── */
  scoperta: {
    id: 'scoperta',
    question: 'Quale problema vuoi risolvere?',
    options: [
      { label: 'Ottimizzare quantità e frequenza di pasto', next: 'result_ottimizzazione' },
      { label: 'Monitorare i vitelli a distanza', next: 'result_monitoraggio' },
      { label: 'Ridurre il lavoro manuale in stalla', next: 'result_automazione' },
      { label: 'Abbassare la mortalità neonatale', next: 'result_mortalita' },
    ],
  },

  /* ─── Ramo tecnico ─── */
  tecnico: {
    id: 'tecnico',
    question: 'Che tipo di problema stai riscontrando?',
    options: [
      { label: 'Il dispositivo non si connette al Wi-Fi', next: 'result_tech_wifi' },
      { label: "I dati non si aggiornano nell'app", next: 'result_tech_app' },
      { label: 'Errore nella distribuzione del latte', next: 'result_tech_erogazione' },
      { label: 'Altro (contatta il supporto)', next: 'result_contattaci' },
    ],
  },

  /* ─── Foglie / Risultati ─── */
  result_mini: {
    id: 'result_mini',
    question: 'Lupetta Mini è la scelta ideale per te',
    answer:
      'Lupetta Mini è progettata per allevamenti sotto i 50 capi o con esigenze di flessibilità. Compatta, facile da installare e con gestione completa da smartphone. Include erogazione automatica di latte/colostro, profili di pasto personalizzabili e avvisi in tempo reale.',
    link: { label: 'Scopri Lupetta Mini', to: '/lupetta-mini' },
  },
  result_maxi: {
    id: 'result_maxi',
    question: 'Lupetta Maxi è la soluzione giusta per te',
    answer:
      'Lupetta Maxi è pensata per allevamenti medi e grandi. Gestisce fino a 200 capi in contemporanea, con dashboard centralizzata, integrazione multi-box, reportistica avanzata e connettività stabile anche in ambienti rurali.',
    link: { label: 'Scopri Lupetta Maxi', to: '/lupetta-maxi' },
  },
  result_enterprise: {
    id: 'result_enterprise',
    question: 'Per allevamenti sopra i 200 capi ti consigliamo una consulenza dedicata',
    answer:
      'Con oltre 200 capi ti offriamo una configurazione personalizzata: sistema multi-nodo Lupetta Maxi, integrazioni con il tuo gestionale aziendale e supporto tecnico prioritario. Contattaci per una valutazione gratuita.',
    link: { label: 'Contattaci', to: '/contatti' },
  },
  result_contattaci: {
    id: 'result_contattaci',
    question: 'Il nostro team ti può aiutare direttamente',
    answer:
      'Per questo tipo di esigenza la soluzione migliore è parlare con uno dei nostri specialisti. Puoi raggiungerci via modulo contatti o via telefono: valuteremo insieme la configurazione più adatta al tuo allevamento.',
    link: { label: 'Vai ai contatti', to: '/contatti' },
  },
  result_monitoraggio: {
    id: 'result_monitoraggio',
    question: 'Il monitoraggio remoto è il punto di forza di Lupetta',
    answer:
      "Dall'app puoi vedere in tempo reale i pasti erogati, il consumo di latte, gli allarmi e lo stato di salute di ogni vitello. Puoi impostare notifiche push, modificare i profili da remoto e accedere a tutta la storicità dei dati.",
    link: { label: 'Scopri il monitoraggio', to: '/monitoraggio' },
  },
  result_firmware: {
    id: 'result_firmware',
    question: "Gli aggiornamenti sono automatici e gratuiti",
    answer:
      "Lupetta si aggiorna automaticamente via OTA (over-the-air) ogni volta che una nuova versione è disponibile. Assicurati che il dispositivo sia connesso al Wi-Fi e all'alimentazione. Se il problema persiste, puoi forzare l'aggiornamento dalla sezione Impostazioni dell'app.",
    link: { label: "Guida all'aggiornamento", to: '/come-funziona' },
  },
  result_setup_mini: {
    id: 'result_setup_mini',
    question: 'Setup Lupetta Mini: semplice e veloce',
    answer:
      'Segui questi passaggi: (1) collega il dispositivo alla corrente tramite il cavo in dotazione, (2) scarica l\'app Lupetta, (3) scansiona il QR code sul retro del dispositivo, (4) segui il wizard di configurazione Wi-Fi e crea il tuo primo profilo di pasto. In meno di 10 minuti sei operativo.',
    link: { label: 'Guida completa', to: '/come-funziona' },
  },
  result_setup_maxi: {
    id: 'result_setup_maxi',
    question: 'Setup Lupetta Maxi: un nostro tecnico ti affianca',
    answer:
      'Lupetta Maxi prevede un\'installazione guidata da parte di un nostro tecnico specializzato. Riceverai una chiamata entro 24 ore dall\'acquisto per pianificare il sopralluogo. Nel frattempo puoi preparare la struttura seguendo il manuale allegato alla confezione.',
    link: { label: 'Richiedi supporto', to: '/contatti' },
  },
  result_dosaggi_colostro: {
    id: 'result_dosaggi_colostro',
    question: 'Gestione del colostro fresco con Lupetta',
    answer:
      "Il colostro fresco va inserito nel serbatoio refrigerato di Lupetta entro 2 ore dalla mungitura. Sull'app puoi impostare temperatura di conservazione, la quantità erogata per pasto (in ml) e l'intervallo tra i pasti. Il sistema ti avvisa quando la riserva scende sotto la soglia impostata.",
    link: { label: "Scopri l'alimentazione", to: '/come-funziona' },
  },
  result_dosaggi_polvere: {
    id: 'result_dosaggi_polvere',
    question: 'Latte in polvere: Lupetta lo gestisce in autonomia',
    answer:
      "Inserisci il latte in polvere nel vano apposito. Dall'app imposti il rapporto di diluizione con l'acqua (es. 125 g/litro), la temperatura dell'acqua di miscelazione (ideale 38–40°C) e la frequenza di pulizia del circuito. Lupetta prepara ogni razione al momento per garantire freschezza ottimale.",
    link: { label: 'Scopri i consumabili', to: '/consumabile' },
  },
  result_dosaggi_mix: {
    id: 'result_dosaggi_mix',
    question: 'Profili misti colostro + latte in polvere',
    answer:
      "Puoi creare profili personalizzati che alternano colostro e latte in polvere nei primi giorni di vita del vitello. L'app permette di programmare una transizione automatica (es. colostro nelle prime 48h, poi latte in polvere) con un click. Tutti i dati vengono registrati per ogni capo.",
    link: { label: 'Scopri i profili', to: '/monitoraggio' },
  },
  result_ottimizzazione: {
    id: 'result_ottimizzazione',
    question: 'Lupetta ottimizza ogni razione automaticamente',
    answer:
      "Il sistema applica protocolli di alimentazione basati su peso, età e razza del vitello. L'algoritmo regola le quantità in base ai consumi effettivi e ti mostra deviazioni rispetto al profilo ideale. Risparmi fino al 15% di latte rispetto all'erogazione manuale.",
    link: { label: 'Come funziona', to: '/come-funziona' },
  },
  result_automazione: {
    id: 'result_automazione',
    question: 'Lupetta riduce drasticamente il lavoro manuale',
    answer:
      "Una volta configurati i profili, Lupetta gestisce autonomamente tutte le somministrazioni: notte e giorno, anche nel fine settimana. Ricevi notifiche solo quando serve la tua attenzione (vitello che non mangia, serbatoio quasi vuoto, ecc.). Gli allevatori che usano Lupetta riportano un risparmio medio di 2–3 ore di lavoro al giorno.",
    link: { label: 'Scopri i benefici', to: '/benefici' },
  },
  result_mortalita: {
    id: 'result_mortalita',
    question: 'Lupetta aiuta a ridurre la mortalità neonatale',
    answer:
      "I primissimi giorni di vita sono critici: una corretta assunzione di colostro nelle prime 6 ore determina l'immunità passiva del vitello. Lupetta garantisce tempistiche e quantità precise, inviando un avviso immediato se il vitello non si alimenta. Le aziende agricole partner hanno registrato una riduzione della mortalità neonatale fino al 40%.",
    link: { label: 'Casi di successo', to: '/case-history' },
  },
  result_tech_wifi: {
    id: 'result_tech_wifi',
    question: 'Problemi di connessione Wi-Fi',
    answer:
      "Verifica questi punti: (1) il router è entro 15 metri dal dispositivo o è presente un ripetitore, (2) la rete usa il protocollo 2.4 GHz (Lupetta non supporta il 5 GHz), (3) la password Wi-Fi non contiene caratteri speciali non standard. Se il problema persiste, premi il tasto reset sul retro per 5 secondi e riavvia la configurazione dall'app.",
    link: { label: 'Centro assistenza', to: '/contatti' },
  },
  result_tech_app: {
    id: 'result_tech_app',
    question: "Dati non aggiornati nell'app",
    answer:
      "Controlla che il dispositivo sia online (spia verde fissa) e che l'app sia aggiornata all'ultima versione. Forza un aggiornamento manuale scorrendo verso il basso nella schermata principale. Se il problema persiste da più di 30 minuti, riavvia il dispositivo tenendo premuto il tasto laterale per 3 secondi.",
    link: { label: 'Contatta il supporto', to: '/contatti' },
  },
  result_tech_erogazione: {
    id: 'result_tech_erogazione',
    question: 'Errori nella distribuzione del latte',
    answer:
      "Gli errori di erogazione sono spesso causati da: (1) tubazione occlusa (esegui il ciclo di pulizia dall'app), (2) serbatoio vuoto o sensore di livello sporco (pulisci con panno umido), (3) temperatura troppo bassa che ispessisce il latte (verifica che il riscaldatore sia attivo). Se l'errore riporta un codice specifico, cercalo nel manuale o contattaci.",
    link: { label: 'Manuale tecnico', to: '/come-funziona' },
  },
};
