const fs = require('fs');
const esPath = './src/dictionaries/es.json';
const enPath = './src/dictionaries/en.json';

const es = JSON.parse(fs.readFileSync(esPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// About section
es.about = {
  title_1: "¿Por qué ",
  title_2: "TechNest",
  title_3: "?",
  subtitle: "No somos solo desarrolladores, somos artesanos digitales comprometidos con la excelencia y resultados tangibles.",
  cards: [
    {
      title: "Enfoque Humano",
      desc: "Cada proyecto comienza entendiendo tu visión, tus desafíos y tus objetivos de negocio."
    },
    {
      title: "Calidad Premium",
      desc: "Escribimos código limpio, escalable y bien documentado que facilita el mantenimiento."
    },
    {
      title: "Comunicación Clara",
      desc: "Updates semanales, documentación detallada y respuesta rápida a tus dudas."
    }
  ],
  more_title: "TechNest es más que una agencia",
  more_p1: "Somos tu partner tecnológico. Nacimos en 2021 con una visión clara: democratizar el acceso a soluciones digitales de alta calidad para empresas y emprendedores.",
  more_p2: "Nuestro equipo combina experiencia en desarrollo frontend y backend, diseño UX/UI y estrategia digital para crear productos que no solo lucen increíbles, sino que generan resultados reales.",
  stats: [
    { val: "3+", label: "Años de experiencia" },
    { val: "100%", label: "Proyectos entregados" },
    { val: "98%", label: "Satisfacción" },
    { val: "24/7", label: "Soporte disponible" }
  ]
};

en.about = {
  title_1: "Why ",
  title_2: "TechNest",
  title_3: "?",
  subtitle: "We are not just developers, we are digital artisans committed to excellence and tangible results.",
  cards: [
    {
      title: "Human Focus",
      desc: "Every project starts by understanding your vision, your challenges, and your business goals."
    },
    {
      title: "Premium Quality",
      desc: "We write clean, scalable, and well-documented code that makes maintenance easy."
    },
    {
      title: "Clear Communication",
      desc: "Weekly updates, detailed documentation, and quick responses to your questions."
    }
  ],
  more_title: "TechNest is more than an agency",
  more_p1: "We are your technology partner. We were born in 2021 with a clear vision: to democratize access to high-quality digital solutions for businesses and entrepreneurs.",
  more_p2: "Our team combines experience in frontend and backend development, UX/UI design, and digital strategy to create products that not only look amazing but also generate real results.",
  stats: [
    { val: "3+", label: "Years of experience" },
    { val: "100%", label: "Projects delivered" },
    { val: "98%", label: "Satisfaction rate" },
    { val: "24/7", label: "Available support" }
  ]
};

fs.writeFileSync(esPath, JSON.stringify(es, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
console.log('Dictionaries updated successfully.');
