const fs = require('fs');
const esPath = './src/dictionaries/es.json';
const enPath = './src/dictionaries/en.json';

const es = JSON.parse(fs.readFileSync(esPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// AI
es.ai = {
  badge: "TechNest Generation",
  title1: "Artificial",
  title2: "Intelligence",
  subtitle: "Potenciamos tu negocio con soluciones de IA de última generación. Desde chatbots inteligentes hasta análisis predictivo avanzado.",
  stats: [
    { value: "95%", label: "Precisión" },
    { value: "50ms", label: "Latencia" },
    { value: "24/7", label: "Disponibilidad" },
    { value: "99.9%", label: "Uptime" }
  ],
  features: [
    { title: "Machine Learning", description: "Modelos predictivos personalizados para optimizar tus procesos de negocio en tiempo real." },
    { title: "Natural Language", description: "Procesamiento de lenguaje natural para chatbots y asistentes virtuales hiper-realistas." },
    { title: "Computer Vision", description: "Análisis de imágenes y video con redes neuronales de detección avanzada y baja latencia." }
  ]
};

en.ai = {
  badge: "TechNest Generation",
  title1: "Artificial",
  title2: "Intelligence",
  subtitle: "We empower your business with next-generation AI solutions. From intelligent chatbots to advanced predictive analysis.",
  stats: [
    { value: "95%", label: "Accuracy" },
    { value: "50ms", label: "Latency" },
    { value: "24/7", label: "Availability" },
    { value: "99.9%", label: "Uptime" }
  ],
  features: [
    { title: "Machine Learning", description: "Custom predictive models to optimize your business processes in real-time." },
    { title: "Natural Language", description: "Natural language processing for hyper-realistic chatbots and virtual assistants." },
    { title: "Computer Vision", description: "Image and video analysis with advanced low-latency detection neural networks." }
  ]
};

// Equipo
es.equipo = {
  badge: "Nuestro Talento",
  title1: "Conoce al ",
  title2: "Equipo",
  subtitle: "Somos un grupo de mentes creativas, ingenieros apasionados y estrategas digitales dedicados a convertir tus visiones más ambiciosas en realidades tecnológicas.",
  members: [
    { name: "Oldemar Gonzalez", role: "CEO & Lead Architect", bio: "Especialista en arquitectura cloud y estrategia tecnológica con más de 5 años de experiencia escalando negocios digitales." },
    { name: "Yarelis Yanguez", role: "Directora de UX/UI", bio: "Diseñadora obsesionada con la creación de experiencias de usuario intuitivas, accesibles y visualmente extraordinarias." },
    { name: "David Gómez", role: "Lead Full Stack Developer", bio: "Experto en ecosistemas React, Node.js y arquitecturas serverless. Apasionado por el código limpio y el rendimiento extremo." },
    { name: "Elena Rostova", role: "Especialista en IA", bio: "Ingeniera de machine learning dedicada a implementar modelos generativos y automatizaciones inteligentes para nuestros clientes." },
    { name: "Carlos Mendoza", role: "Mobile Engineering Lead", bio: "Desarrollador experto en React Native y Swift. Creador de aplicaciones móviles fluidas, nativas y de alta conversión." },
    { name: "Laura Silva", role: "Project Manager", bio: "El puente entre nuestra tecnología y los objetivos del cliente. Asegura entregas ágiles, a tiempo y con calidad insuperable." }
  ]
};

en.equipo = {
  badge: "Our Talent",
  title1: "Meet the ",
  title2: "Team",
  subtitle: "We are a group of creative minds, passionate engineers, and digital strategists dedicated to turning your most ambitious visions into technological realities.",
  members: [
    { name: "Oldemar Gonzalez", role: "CEO & Lead Architect", bio: "Specialist in cloud architecture and tech strategy with over 5 years scaling digital businesses." },
    { name: "Yarelis Yanguez", role: "UX/UI Director", bio: "Designer obsessed with creating intuitive, accessible, and visually extraordinary user experiences." },
    { name: "David Gómez", role: "Lead Full Stack Developer", bio: "Expert in React ecosystems, Node.js, and serverless architectures. Passionate about clean code and extreme performance." },
    { name: "Elena Rostova", role: "AI Specialist", bio: "Machine learning engineer dedicated to implementing generative models and smart automations for our clients." },
    { name: "Carlos Mendoza", role: "Mobile Engineering Lead", bio: "Expert React Native and Swift developer. Creator of fluid, native, and high-conversion mobile applications." },
    { name: "Laura Silva", role: "Project Manager", bio: "The bridge between our technology and client goals. Ensures agile, on-time deliveries with unbeatable quality." }
  ]
};

fs.writeFileSync(esPath, JSON.stringify(es, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
console.log('Dictionaries final updated successfully.');
