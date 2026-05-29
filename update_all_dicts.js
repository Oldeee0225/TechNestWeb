const fs = require('fs');
const esPath = './src/dictionaries/es.json';
const enPath = './src/dictionaries/en.json';

const es = JSON.parse(fs.readFileSync(esPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// CTA
es.cta = {
  title: "¿Listo para transformar tu idea?",
  desc: "Agenda una llamada gratuita y descubre cómo podemos ayudarte a construir tu producto digital soñado.",
  btn1: "Contáctanos",
  btn2: "Ver Servicios"
};
en.cta = {
  title: "Ready to transform your idea?",
  desc: "Schedule a free call and discover how we can help you build your dream digital product.",
  btn1: "Contact Us",
  btn2: "View Services"
};

// Footer
es.footer = {
  subtitle: "Transformamos ideas en experiencias digitales extraordinarias. Especialistas en desarrollo web, diseño UI/UX y soluciones tecnológicas innovadoras.",
  services: "Servicios",
  contact: "Contacto",
  rights: "TechNest. Todos los derechos reservados.",
  legal: "Política Legal y Privacidad",
  links: [
    { name: "Desarrollo Web Premium", url: "/servicios/desarrollo-web" },
    { name: "Inteligencia Artificial", url: "/servicios/inteligencia-artificial" },
    { name: "Automatización Empresarial", url: "/servicios/automatizacion" },
    { name: "Sistemas Empresariales", url: "/servicios/sistemas" },
    { name: "Apps Móviles", url: "/servicios/apps-moviles" },
    { name: "Cloud & Backend", url: "/servicios/cloud-backend" },
    { name: "Ciberseguridad Ligera", url: "/servicios/ciberseguridad" }
  ]
};
en.footer = {
  subtitle: "We transform ideas into extraordinary digital experiences. Specialists in web development, UI/UX design, and innovative technological solutions.",
  services: "Services",
  contact: "Contact",
  rights: "TechNest. All rights reserved.",
  legal: "Legal Policy and Privacy",
  links: [
    { name: "Premium Web Development", url: "/servicios/desarrollo-web" },
    { name: "Artificial Intelligence", url: "/servicios/inteligencia-artificial" },
    { name: "Business Automation", url: "/servicios/automatizacion" },
    { name: "Enterprise Systems", url: "/servicios/sistemas" },
    { name: "Mobile Apps", url: "/servicios/apps-moviles" },
    { name: "Cloud & Backend", url: "/servicios/cloud-backend" },
    { name: "Lightweight Cybersecurity", url: "/servicios/ciberseguridad" }
  ]
};

// Process
es.process = {
  title1: "Nuestro ",
  title2: "Proceso",
  steps: [
    {
      id: 1,
      title: "Discovery & Planificación",
      description: "Entendemos tu negocio, definimos objetivos claros y creamos un roadmap detallado para el éxito de tu proyecto."
    },
    {
      id: 2,
      title: "Diseño UI/UX",
      description: "Creamos interfaces intuitivas y hermosas que conectan con tus usuarios y elevan tu marca."
    },
    {
      id: 3,
      title: "Desarrollo Ágil",
      description: "Construimos tu producto con las mejores tecnologías, asegurando rendimiento, seguridad y escalabilidad."
    },
    {
      id: 4,
      title: "Lanzamiento y Soporte",
      description: "Desplegamos tu proyecto y te acompañamos en su crecimiento con soporte continuo y optimización."
    }
  ],
  videoText: "Te acompañamos en cada momento del desarrollo de tu proyecto."
};
en.process = {
  title1: "Our ",
  title2: "Process",
  steps: [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "We understand your business, define clear goals, and create a detailed roadmap for your project's success."
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "We create intuitive and beautiful interfaces that connect with your users and elevate your brand."
    },
    {
      id: 3,
      title: "Agile Development",
      description: "We build your product using the best technologies, ensuring performance, security, and scalability."
    },
    {
      id: 4,
      title: "Launch & Support",
      description: "We deploy your project and support its growth with continuous maintenance and optimization."
    }
  ],
  videoText: "We accompany you at every stage of your project's development."
};

fs.writeFileSync(esPath, JSON.stringify(es, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
console.log('Dictionaries updated successfully.');
