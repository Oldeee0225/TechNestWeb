const fs = require('fs');
const esPath = './src/dictionaries/es.json';
const enPath = './src/dictionaries/en.json';

const es = JSON.parse(fs.readFileSync(esPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

es.services.items = [
  { title: "Desarrollo Web Premium", desc: "Sitios web y web apps escalables, rápidos y seguros usando tecnologías modernas como Next.js y React." },
  { title: "Inteligencia Artificial", desc: "Integración de IA generativa, chatbots avanzados y automatización inteligente de procesos." },
  { title: "Automatización Empresarial", desc: "Sistemas de software para digitalizar procesos y mejorar la eficiencia operativa de tu empresa." },
  { title: "Sistemas Empresariales", desc: "Sistemas CRM, ERP y plataformas de gestión personalizadas para tu negocio." },
  { title: "Apps Móviles", desc: "Desarrollo de aplicaciones nativas y multiplataforma para iOS y Android con React Native o Swift." },
  { title: "Cloud & Backend", desc: "Arquitecturas escalables, APIs robustas y gestión de bases de datos seguras." },
  { title: "Ciberseguridad Ligera", desc: "Auditorías simples, protección de APIs y sistemas robustos de autenticación." }
];

en.services.items = [
  { title: "Premium Web Development", desc: "Scalable, fast, and secure websites and web apps using modern technologies like Next.js and React." },
  { title: "Artificial Intelligence", desc: "Generative AI integration, advanced chatbots, and intelligent process automation." },
  { title: "Business Automation", desc: "Software systems to digitize processes and improve the operational efficiency of your company." },
  { title: "Enterprise Systems", desc: "Custom CRM, ERP systems, and management platforms for your business." },
  { title: "Mobile Apps", desc: "Native and cross-platform application development for iOS and Android with React Native or Swift." },
  { title: "Cloud & Backend", desc: "Scalable architectures, robust APIs, and secure database management." },
  { title: "Light Cybersecurity", desc: "Simple audits, API protection, and robust authentication systems." }
];

fs.writeFileSync(esPath, JSON.stringify(es, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
console.log('Fixed services array order and length.');
