const fs = require('fs');
const esPath = './src/dictionaries/es.json';
const enPath = './src/dictionaries/en.json';

const es = JSON.parse(fs.readFileSync(esPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

es.politicas = {
  title1: "Política ",
  title2: "Legal",
  subtitle: "Política de Privacidad y Términos de Uso",
  updated: "Última actualización: Mayo 2026",
  intro: "Bienvenido a TechNesst. Al acceder y utilizar nuestros servicios, sitio web o plataformas digitales, aceptas los siguientes términos y condiciones. Te recomendamos leer cuidadosamente esta Política Legal antes de utilizar nuestros servicios."
};

en.politicas = {
  title1: "Legal ",
  title2: "Policy",
  subtitle: "Privacy Policy and Terms of Use",
  updated: "Last updated: May 2026",
  intro: "Welcome to TechNesst. By accessing and using our services, website, or digital platforms, you accept the following terms and conditions. We recommend carefully reading this Legal Policy before using our services."
};

fs.writeFileSync(esPath, JSON.stringify(es, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
console.log('Politicas updated successfully.');
