import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Percorso del file index.html generato nella cartella dist
const distHtmlPath = path.resolve(__dirname, '../dist/index.html');

// Configurazione dei metadata SEO
const seoConfig = {
  title: 'Lupetta® - Allattatrice Automatica per Vitelli',
  description: 'Lupetta è l\'allattatrice automatica brevettata progettata per garantire il benessere dei vitelli e semplificare la gestione quotidiana dell\'allevamento.',
  keywords: 'allattatrice vitelli, allattatrice automatica, allattatrice automatica vitelli, allattamento vitelli, attrezzature zootecniche, benessere vitelli, gestione stalla, lupetta',
  author: 'Blend Studio',
  ogTitle: 'Lupetta® - Allattatrice Automatica per Vitelli',
  ogDescription: 'Garantisci il massimo benessere dei vitelli e semplifica la gestione quotidiana in stalla con l\'allattatrice automatica brevettata Lupetta.',
  ogImage: 'https://giustefoodtruck.com/catering/assets/images/vitello1-lupetta.jpg',
  ogUrl: 'https://giustefoodtruck.com/catering/',
  themeColor: '#006071'
};

// Generazione dei tag HTML da iniettare
const seoTags = `
    <!-- INIZIO INIEZIONE SEO -->
    <title>${seoConfig.title}</title>
    <meta name="description" content="${seoConfig.description}" />
    <meta name="keywords" content="${seoConfig.keywords}" />
    <meta name="author" content="${seoConfig.author}" />
    <meta property="og:title" content="${seoConfig.ogTitle}" />
    <meta property="og:description" content="${seoConfig.ogDescription}" />
    <meta property="og:image" content="${seoConfig.ogImage}" />
    <meta property="og:url" content="${seoConfig.ogUrl}" />
    <meta property="og:type" content="website" />
    <meta name="theme-color" content="${seoConfig.themeColor}" />
    <!-- FINE INIEZIONE SEO -->
`;

try {
  if (fs.existsSync(distHtmlPath)) {
    let html = fs.readFileSync(distHtmlPath, 'utf8');

    // Rimuove il vecchio tag title se presente
    html = html.replace(/<title>.*?<\/title>/i, '');
    
    // Inserisce i metatag prima della chiusura dell'head
    html = html.replace('</head>', `${seoTags.trim()}\n  </head>`);

    fs.writeFileSync(distHtmlPath, html);
    console.log('✅ SEO metadata iniettati con successo in dist/index.html');
  } else {
    console.warn('⚠️ File dist/index.html non trovato. Assicurati di aver fatto la build di Vite prima di eseguire questo script.');
  }
} catch (error) {
  console.error("❌ Errore durante l'iniezione dei metadata SEO:", error.message);
  process.exit(1);
}
