export const FAQ_DATA = [
  {
    category: 'Acquisto e Setup',
    questions: [
      {
        q: 'Come viene installata la allattatrice Lupetta in stalla?',
        a: 'La Lupetta (sia in versione Mini che Maxi) viene consegnata pronta all\'uso con una preimpostazione di fabbrica. L\'installazione richiede solo un collegamento elettrico standard e il posizionamento all\'interno dell\'area di alloggio dei vitelli. Non sono necessari impianti idraulici dedicati o modifiche strutturali.'
      },
      {
        q: 'Lupetta necessita di una connessione Wi-Fi sempre attiva?',
        a: 'Lupetta funziona localmente in piena autonomia. Tuttavia, per abilitare il controllo remoto avanzato, ricevere notifiche push su smartphone e consultare lo storico dei pasti sull\'app, è caldamente consigliato disporre di una connessione Wi-Fi stabile in allevamento.'
      }
    ]
  },
  {
    category: 'Alimentazione e Latte',
    questions: [
      {
        q: 'Che tipo di latte può essere erogato con Lupetta?',
        a: 'La macchina supporta la distribuzione sia di latte fresco/materno sia di latte in polvere ricostituito, a seconda delle preferenze e della configurazione scelta. Il sistema termostatico integrato mantiene costantemente la temperatura ottimale (37°C - 39°C) per prevenire problemi digestivi.'
      },
      {
        q: 'Come viene controllato lo spreco di latte?',
        a: 'Il sistema eroga esclusivamente la quantità programmata per ciascun vitello, identificato in tempo reale tramite tag RFID. Se il vitello ha già consumato la sua razione giornaliera, la poppata viene bloccata, azzerando gli sprechi e la sovralimentazione.'
      }
    ]
  },
  {
    category: 'Compatibilità e Spazi',
    questions: [
      {
        q: 'Lupetta è compatibile con gabbie singole o recinti di gruppo?',
        a: 'Lupetta Mini Wi-Fi è concepita specificamente per gabbie singole e vitelli da 1 a 90 giorni di vita. La versione Lupetta Maxi Tech è invece ideale per piccoli gruppi da 4 a 8 vitelli e si integra ottimamente con recinti comuni o con il sistema brevettato Lupetta Smart Home.'
      },
      {
        q: 'Come funziona il riconoscimento degli animali?',
        a: 'Ogni animale viene dotato di uno Smart-Tag (RFID adesivo usa e getta) applicato sul collare o sul tag auricolare. Quando il vitello si avvicina alla tettarella, l\'antenna RFID rileva l\'ID e la centralina eroga la dose esatta prevista dal suo piano di svezzamento.'
      }
    ]
  },
  {
    category: 'Gestione e Anomalie',
    questions: [
      {
        q: 'Cosa succede in caso di anomalie o ritardi nell\'alimentazione?',
        a: 'Se un vitello non si allatta entro la finestra temporale impostata o se si verificano anomalie operative, Lupetta invia immediatamente una notifica push sull\'app mobile dell\'allevatore e attiva un allarme sul display, consentendo un intervento tempestivo.'
      }
    ]
  },
  {
    category: 'Requisiti Tecnici',
    questions: [
      {
        q: 'Qual è l\'assorbimento energetico di Lupetta?',
        a: 'La macchina opera in bassa tensione (24 Volt) per la massima sicurezza di animali e operatori, con un assorbimento massimo di corrente pari a 400 Watt (nella versione Maxi Tech), minimizzando i consumi energetici.'
      }
    ]
  },
  {
    category: 'Igiene e Assistenza',
    questions: [
      {
        q: 'Come avviene la pulizia delle linee del latte?',
        a: 'La macchina dispone di cicli di lavaggio automatici integrati e guarnizioni di tenuta anti-insetto progettate per garantire l\'igiene totale. La pulizia quotidiana richiede pochissimi minuti e previene la proliferazione batterica, riducendo gli episodi diarroici.'
      },
      {
        q: 'Come funziona il servizio di assistenza tecnica?',
        a: 'Tredì Italia fornisce assistenza tecnica da remoto e sul campo. Grazie alla scheda Wi-Fi, il supporto tecnico può collegarsi online per effettuare diagnosi, regolare parametri operativi e aggiornare il software in tempo reale.'
      }
    ]
  }
];
