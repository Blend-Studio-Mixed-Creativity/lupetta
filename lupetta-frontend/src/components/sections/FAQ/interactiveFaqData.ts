export interface QuizOption {
  label: string;
  value: string;
  scores?: Record<number, number>; // Maps Area ID (1 to 6) to score increment
}

export interface QuizStep {
  id: number;
  question: string;
  options: QuizOption[];
  microFeedback?: Record<string, string>;
}

export interface ResultProfile {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  defaultModels: string;
}

export const QUIZ_STEPS: QuizStep[] = [
  {
    id: 1,
    question: 'Qual è oggi la difficoltà più grande nella gestione dei vitelli?',
    options: [
      { label: 'Dedico troppo tempo alla somministrazione del latte', value: 'A', scores: { 1: 3 } },
      { label: 'Faccio fatica a controllare quanto beve ogni vitello', value: 'B', scores: { 2: 3 } },
      { label: 'Vorrei crescite più regolari e controllate', value: 'C', scores: { 3: 3 } },
      { label: 'Devo gestire meglio quantità, frequenze e incrementi', value: 'D', scores: { 3: 3 } },
      { label: 'Ci sono troppi passaggi manuali e rischio di errori', value: 'E', scores: { 4: 3 } },
      { label: 'Sto pensando a un’area vitelli più organizzata e completa', value: 'F', scores: { 5: 3 } },
      { label: 'Non ho un solo problema: vorrei capire da dove partire', value: 'G', scores: { 6: 3 } },
    ],
  },
  {
    id: 2,
    question: 'Come gestisci oggi l’alimentazione dei vitelli?',
    options: [
      { label: 'Manualmente, con secchi o biberon', value: 'A', scores: { 1: 1, 4: 1 } },
      { label: 'Con una gestione manuale ma abbastanza organizzata', value: 'B', scores: { 1: 1, 4: 1 } },
      { label: 'Con un sistema automatico, ma vorrei più controllo', value: 'C', scores: { 2: 2 } },
      { label: 'Sto progettando una nuova area vitelli', value: 'D', scores: { 5: 2 } },
      { label: 'Sto valutando se automatizzare per la prima volta', value: 'E', scores: { 1: 1, 6: 1 } },
    ],
    microFeedback: {
      A: 'Capito. In questo caso Lupetta può aiutarti soprattutto a ridurre i passaggi ripetitivi e rendere la somministrazione più ordinata.',
      B: 'Capito. In questo caso Lupetta può aiutarti soprattutto a ridurre i passaggi ripetitivi e rendere la somministrazione più ordinata.',
      C: 'Perfetto. Qui il tema non è solo automatizzare, ma capire se puoi ottenere più dati, più controllo e una gestione più precisa.',
      D: 'Ottimo. Se stai progettando una nuova area, ha senso ragionare sia sulla nutrizione sia sullo spazio in cui cresceranno i vitelli.',
      E: 'Va bene. Il percorso ti aiuterà a capire se l’automazione può portare un vantaggio concreto nella tua routine quotidiana.',
    },
  },
  {
    id: 3,
    question: 'Quanti vitelli gestisci mediamente nella fase di allattamento?',
    options: [
      { label: 'Fino a 10', value: 'A' },
      { label: 'Da 10 a 25', value: 'B' },
      { label: 'Da 25 a 50', value: 'C' },
      { label: 'Oltre 50', value: 'D' },
      { label: 'Il numero varia molto durante l’anno', value: 'E', scores: { 6: 1 } },
    ],
  },
  {
    id: 4,
    question: 'Quanto pesa oggi la gestione dell’allattamento sulla tua giornata?',
    options: [
      { label: 'Poco, è sotto controllo', value: 'A' },
      { label: 'Abbastanza, ma riesco a gestirla', value: 'B' },
      { label: 'Molto, richiede tempo tutti i giorni', value: 'C', scores: { 1: 2, 4: 1 } },
      { label: 'Troppo, vorrei alleggerire il lavoro mio o del personale', value: 'D', scores: { 1: 2, 4: 1 } },
    ],
  },
  {
    id: 5,
    question: 'Quanto è importante per te sapere quanto beve ogni vitello?',
    options: [
      { label: 'Poco, mi interessa soprattutto somministrare il latte', value: 'A' },
      { label: 'Abbastanza, vorrei avere un controllo generale', value: 'B' },
      { label: 'Molto, voglio individuare differenze tra i vitelli', value: 'C', scores: { 2: 2, 3: 1 } },
      { label: 'Fondamentale, voglio usare i dati per gestire meglio la crescita', value: 'D', scores: { 2: 2, 3: 1 } },
    ],
  },
  {
    id: 6,
    question: 'Oggi come gestisci quantità, frequenze e incrementi del latte?',
    options: [
      { label: 'In modo manuale, in base all’esperienza', value: 'A' },
      { label: 'Ho un programma, ma non sempre è facile seguirlo', value: 'B', scores: { 3: 2, 4: 1 } },
      { label: 'Vorrei impostare meglio gli incrementi nel tempo', value: 'C', scores: { 3: 2, 4: 1 } },
      { label: 'Vorrei una gestione più precisa per gruppi o singoli vitelli', value: 'D', scores: { 3: 2, 4: 1 } },
      { label: 'Non ho ancora un metodo definito', value: 'E', scores: { 3: 2, 4: 1 } },
    ],
  },
  {
    id: 7,
    question: 'Nella crescita dei vitelli, qual è il tuo obiettivo principale?',
    options: [
      { label: 'Avere vitelli più regolari tra loro', value: 'A', scores: { 3: 2, 2: 1 } },
      { label: 'Ridurre gli sbalzi nella fase di allattamento', value: 'B', scores: { 3: 2, 2: 1 } },
      { label: 'Accorgermi prima se un vitello beve meno', value: 'C', scores: { 3: 2, 2: 1 } },
      { label: 'Gestire meglio il passaggio tra le diverse fasi', value: 'D', scores: { 3: 2, 2: 1 } },
      { label: 'Al momento non ho un problema specifico sulla crescita', value: 'E', scores: { 1: 1, 4: 1 } },
    ],
  },
  {
    id: 8,
    question: 'Chi si occupa principalmente dei vitelli nella tua stalla?',
    options: [
      { label: 'Me ne occupo io direttamente', value: 'A', scores: { 1: 1 } },
      { label: 'Una persona dedicata', value: 'B', scores: { 4: 1 } },
      { label: 'Più persone, con turni diversi', value: 'C', scores: { 4: 2 } },
      { label: 'Dipende dai giorni e dalla disponibilità', value: 'D', scores: { 4: 2 } },
      { label: 'Vorrei ridurre la dipendenza dalla presenza costante di una persona', value: 'E', scores: { 1: 2 } },
    ],
  },
  {
    id: 9,
    question: 'Oltre alla nutrizione, stai valutando anche l’organizzazione dell’area vitelli?',
    options: [
      { label: 'No, mi interessa solo la parte alimentare', value: 'A' },
      { label: 'Sì, vorrei migliorare gli spazi esistenti', value: 'B', scores: { 5: 3 } },
      { label: 'Sì, sto pensando a una nuova area vitelli', value: 'C', scores: { 5: 3 } },
      { label: 'Sì, vorrei una soluzione più completa per crescita, comfort e gestione', value: 'D', scores: { 5: 3 } },
      { label: 'Non ora, ma potrebbe interessarmi in futuro', value: 'E' },
    ],
  },
  {
    id: 10,
    question: 'Se dovessi scegliere una sola priorità, quale sarebbe?',
    options: [
      { label: 'Risparmiare tempo', value: 'A', scores: { 1: 5 } },
      { label: 'Controllare meglio i consumi', value: 'B', scores: { 2: 5 } },
      { label: 'Migliorare la crescita dei vitelli', value: 'C', scores: { 3: 5 } },
      { label: 'Ridurre errori e passaggi manuali', value: 'D', scores: { 4: 5 } },
      { label: 'Organizzare meglio la stalla', value: 'E', scores: { 5: 5 } },
      { label: 'Costruire un sistema più completo per i vitelli', value: 'F', scores: { 5: 3, 6: 3 } },
    ],
  },
];

export const RESULT_PROFILES: Record<number, ResultProfile> = {
  1: {
    id: 1,
    subtitle: 'Voglio ridurre il lavoro manuale',
    title: 'Lupetta può aiutarti a semplificare la gestione quotidiana dell’allattamento',
    text: 'Dalle tue risposte emerge che il tema principale è il tempo dedicato ogni giorno alla somministrazione del latte. In una stalla, anche pochi passaggi ripetuti più volte al giorno possono diventare un carico importante, soprattutto quando la gestione dipende da una sola persona o da turni diversi.\n\nLupetta può aiutarti ad automatizzare la nutrizione quotidiana, rendendo la somministrazione più ordinata e alleggerendo il lavoro manuale. Il vantaggio non è solo “fare prima”, ma avere una routine più stabile, meno variabile e più facile da gestire.',
    defaultModels: 'Lupetta Mini Wifi, se gestisci un numero contenuto di vitelli e cerchi una soluzione semplice e funzionale. Lupetta Maxi Tech, se hai una gestione più strutturata o numeri più alti.',
  },
  2: {
    id: 2,
    subtitle: 'Voglio più controllo sui consumi',
    title: 'Lupetta può aiutarti a capire meglio come si alimentano i tuoi vitelli',
    text: 'Dalle tue risposte emerge che per te il controllo dei consumi è un punto importante. Sapere quanto beve ogni vitello permette di avere una visione più chiara della gestione quotidiana e di individuare più facilmente eventuali differenze nei comportamenti alimentari.\n\nLupetta può supportarti nel monitoraggio dell’alimentazione, aiutandoti a leggere meglio ciò che succede durante la fase di allattamento. In questo modo non lavori solo “a occhio”, ma puoi basarti su informazioni più ordinate e utili per la gestione.',
    defaultModels: 'Lupetta Maxi Tech, se vuoi una gestione più evoluta e orientata al controllo. Lupetta Mini Wifi, se hai una realtà più contenuta ma vuoi iniziare a organizzare meglio la nutrizione.',
  },
  3: {
    id: 3,
    subtitle: 'Voglio crescite più regolari',
    title: 'Lupetta può aiutarti a gestire la nutrizione in modo più programmato',
    text: 'Dalle tue risposte emerge che il tuo obiettivo è rendere la crescita dei vitelli più regolare e controllata. In questa fase, la gestione di quantità, frequenze e incrementi può fare la differenza, soprattutto quando si lavora con più animali e con esigenze diverse.\n\nLupetta può aiutarti a impostare una somministrazione più precisa e progressiva, riducendo la variabilità legata alla gestione manuale. Il risultato è una nutrizione più ordinata, pensata per accompagnare meglio il vitello durante la fase di allattamento.',
    defaultModels: 'Lupetta Maxi Tech, se hai bisogno di una gestione più strutturata e programmabile. Lupetta Mini Wifi, se cerchi una soluzione più compatta ma comunque utile per organizzare meglio la somministrazione.',
  },
  4: {
    id: 4,
    subtitle: 'Voglio ridurre errori e passaggi manuali',
    title: 'Lupetta può aiutarti a rendere la gestione più ordinata e ripetibile',
    text: 'Dalle tue risposte emerge che oggi la gestione dell’allattamento richiede diversi passaggi manuali. Quando più persone intervengono nella routine, oppure quando le giornate sono piene di attività, il rischio è avere procedure meno costanti e più difficili da controllare.\n\nLupetta può aiutarti a rendere la somministrazione più standardizzata, riducendo la dipendenza dalle abitudini del singolo operatore. Questo significa lavorare con un metodo più chiaro, più ripetibile e più facile da gestire nel tempo.',
    defaultModels: 'Lupetta Mini Wifi, se vuoi rendere più semplice una gestione contenuta. Lupetta Maxi Tech, se vuoi strutturare il lavoro su numeri più importanti o con più persone coinvolte.',
  },
  5: {
    id: 5,
    subtitle: 'Sto progettando o migliorando l’area vitelli',
    title: 'Lupetta può essere parte di una gestione più completa dell’area vitelli',
    text: 'Dalle tue risposte emerge che non stai valutando solo la somministrazione del latte, ma anche l’organizzazione complessiva dell’area in cui crescono i vitelli. In questo caso è utile ragionare insieme su nutrizione, spazi, comfort e praticità di gestione.\n\nLupetta può essere integrata in un progetto più ampio, dove l’alimentazione quotidiana lavora insieme a un ambiente pensato per rendere la crescita più ordinata e la gestione più semplice. In questo scenario, Lupetta Smart Home può essere valutata come soluzione Tredì Italia per creare un’area vitelli più completa e funzionale.',
    defaultModels: 'Lupetta Mini Wifi o Lupetta Maxi Tech, in base al numero di vitelli e al livello di gestione richiesto. Lupetta Smart Home, come ambiente complementare per la crescita dei vitelli.',
  },
  6: {
    id: 6,
    subtitle: 'Ho più esigenze e voglio capire da dove partire',
    title: 'Il tuo caso merita una valutazione personalizzata',
    text: 'Dalle tue risposte emerge che nella tua stalla ci sono più aspetti da considerare: tempo, organizzazione, controllo dei consumi, gestione delle quantità e possibile miglioramento degli spazi.\n\nIn questo caso, più che indicare subito una sola soluzione, è utile partire da una lettura complessiva della tua gestione. Lupetta può aiutarti in modi diversi, dalla semplice automazione della nutrizione fino a una configurazione più completa e strutturata.',
    defaultModels: 'Configurazione da valutare con un operatore Lupetta, in base al numero di vitelli, al metodo di lavoro attuale e agli obiettivi della tua azienda.',
  },
};
