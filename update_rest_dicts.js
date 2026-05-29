const fs = require('fs');
const esPath = './src/dictionaries/es.json';
const enPath = './src/dictionaries/en.json';

const es = JSON.parse(fs.readFileSync(esPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// Portfolio
es.portfolio = {
  title1: "Nuestros ",
  title2: "Proyectos",
  subtitle: "Cada proyecto es una historia de éxito. Descubre cómo hemos ayudado a empresas a crecer. Estos son algunos de los proyectos desarrollados en technest:",
  projects: [
    {
      title: "Electric APP",
      category: "Electronica",
      description: "Aplicacion para la administracion local de una tienda de electronica con sistema de facturacion y control de inventario."
    },
    {
      title: "Restaurant System",
      category: "SaaS",
      description: "Sistema de gestión de restaurante con sistema de pedidos, facturación y control de inventario."
    },
    {
      title: "HealthTrack",
      category: "Healthcare",
      description: "App móvil para seguimiento de salud con integración de wearables y reportes médicos."
    },
    {
      title: "CryptoWatch",
      category: "Fintech",
      description: "Dashboard de monitoreo de criptomonedas con alertas personalizadas y portafolio digital."
    },
    {
      title: "AI Support Hub",
      category: "Artificial Intelligence",
      description: "Plataforma inteligente de atención al cliente con chatbots IA, automatización de tickets y análisis conversacional en tiempo real."
    },
    {
      title: "LogiFlow",
      category: "Logistics",
      description: "Sistema de logística y rastreo en tiempo real para gestión de entregas, monitoreo GPS y optimización de rutas."
    }
  ]
};

en.portfolio = {
  title1: "Our ",
  title2: "Projects",
  subtitle: "Every project is a success story. Discover how we've helped businesses grow. Here are some of the projects developed at technest:",
  projects: [
    {
      title: "Electric APP",
      category: "Electronics",
      description: "Application for the local administration of an electronics store with billing system and inventory control."
    },
    {
      title: "Restaurant System",
      category: "SaaS",
      description: "Restaurant management system with ordering system, billing, and inventory control."
    },
    {
      title: "HealthTrack",
      category: "Healthcare",
      description: "Mobile app for health tracking with wearable integration and medical reports."
    },
    {
      title: "CryptoWatch",
      category: "Fintech",
      description: "Cryptocurrency monitoring dashboard with custom alerts and digital portfolio."
    },
    {
      title: "AI Support Hub",
      category: "Artificial Intelligence",
      description: "Intelligent customer service platform with AI chatbots, ticket automation, and real-time conversational analysis."
    },
    {
      title: "LogiFlow",
      category: "Logistics",
      description: "Real-time logistics and tracking system for delivery management, GPS monitoring, and route optimization."
    }
  ]
};

// Services
es.services = {
  title1: "Nuestros ",
  title2: "Servicios",
  subtitle: "Soluciones tecnológicas integrales para impulsar tu negocio al siguiente nivel.",
  items: [
    {
      title: "Desarrollo Web Premium",
      desc: "Sitios web y web apps escalables, rápidos y seguros usando tecnologías modernas como Next.js y React."
    },
    {
      title: "Inteligencia Artificial",
      desc: "Integración de IA generativa, chatbots avanzados y automatización inteligente de procesos."
    },
    {
      title: "Apps Móviles",
      desc: "Desarrollo de aplicaciones nativas y multiplataforma para iOS y Android con React Native o Swift."
    },
    {
      title: "Automatización",
      desc: "Sistemas de software para digitalizar procesos y mejorar la eficiencia operativa de tu empresa."
    },
    {
      title: "Cloud & Backend",
      desc: "Arquitecturas escalables, APIs robustas y gestión de bases de datos seguras."
    },
    {
      title: "Sistemas Empresariales",
      desc: "Sistemas CRM, ERP y plataformas de gestión personalizadas para tu negocio."
    }
  ]
};

en.services = {
  title1: "Our ",
  title2: "Services",
  subtitle: "Comprehensive technological solutions to push your business to the next level.",
  items: [
    {
      title: "Premium Web Development",
      desc: "Scalable, fast, and secure websites and web apps using modern technologies like Next.js and React."
    },
    {
      title: "Artificial Intelligence",
      desc: "Generative AI integration, advanced chatbots, and intelligent process automation."
    },
    {
      title: "Mobile Apps",
      desc: "Native and cross-platform application development for iOS and Android with React Native or Swift."
    },
    {
      title: "Automation",
      desc: "Software systems to digitize processes and improve the operational efficiency of your company."
    },
    {
      title: "Cloud & Backend",
      desc: "Scalable architectures, robust APIs, and secure database management."
    },
    {
      title: "Enterprise Systems",
      desc: "Custom CRM, ERP systems, and management platforms for your business."
    }
  ]
};

// Contacto
es.contacto = {
  title1: "Inicia tu ",
  title2: "Proyecto",
  subtitle: "Cuéntanos sobre tu idea. Nuestro equipo te contactará en menos de 24 horas.",
  form: {
    name: "Nombre Completo",
    email: "Correo Electrónico",
    phone: "Teléfono",
    company: "Empresa / Proyecto (Opcional)",
    message: "Cuéntanos sobre tu proyecto...",
    btn: "Enviar Mensaje",
    submitting: "Enviando..."
  },
  whatsapp: {
    title: "Chat Directo",
    desc: "¿Prefieres una respuesta inmediata? Escríbenos por WhatsApp y te atenderemos al instante.",
    btn: "Abrir WhatsApp"
  }
};

en.contacto = {
  title1: "Start your ",
  title2: "Project",
  subtitle: "Tell us about your idea. Our team will contact you in less than 24 hours.",
  form: {
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    company: "Company / Project (Optional)",
    message: "Tell us about your project...",
    btn: "Send Message",
    submitting: "Sending..."
  },
  whatsapp: {
    title: "Direct Chat",
    desc: "Prefer an immediate response? Write us on WhatsApp and we will assist you instantly.",
    btn: "Open WhatsApp"
  }
};

fs.writeFileSync(esPath, JSON.stringify(es, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
console.log('Dictionaries rest updated successfully.');
