/* ============================================================
   DIRECTORIO DE SOCIAS CAMEBOL SANTA CRUZ — DATOS REALES
   Fuente: "INFORMACION DE SOCIAS POR CATEGORIAS - CAMEBOL SC.docx"
   Para agregar una socia: copiá un objeto, completá sus datos y
   guardá sus fotos en assets/ (foto socia, logo y galería opcionales).
   Categorías válidas: "empresa" | "empresaria" | "emprendedora"
   Opcionales en fotos: foco ("x% y%" = qué punto de la foto centrar,
   ej. "50% 20%" si la cara queda con mucho aire arriba) y zoom
   (background-size, ej. "auto 140%" para acercar una foto muy abierta).
   ============================================================ */
const DATA = [
  {
    categoria: "empresa",
    nombre: "Ximena Valencia Arze",
    marca: "GlobalServ Bolivia",
    rubro: "Servicios de Limpieza y Mantenimiento",
    bio: "Emprendedora y estratega de negocios que transforma experiencia, resiliencia y propósito en proyectos con impacto, innovación y valor sostenible.",
    resena: "GlobalServ transforma desafíos en oportunidades mediante soluciones innovadoras, impulsando el crecimiento empresarial con propósito, estrategia e impacto.",
    wa: "59164508056",
    direccion: "Avenida Santos Dumont, 3er Anillo Interno #591",
    correo: "xvglobalserv@gmail.com",
    redes: {
      facebook: "https://www.facebook.com/GlobalServBolivia",
      instagram: "https://www.instagram.com/globalserv.bolivia/",
      tiktok: "https://www.tiktok.com/discover/globalserv-bolivia"
    },
    fotos: {
      socia: "assets/ximena-foto.jpg",
      foco: "50% 0%",
      logo: "assets/ximena-logo.jpg",
      galeria: ["assets/ximena-empresa-1.jpg", "assets/ximena-empresa-2.jpg"]
    }
  },
  {
    categoria: "empresaria",
    nombre: "Aldana Fernández de Córdova Frerking",
    marca: "Psicóloga Organizacional · MBA",
    rubro: "Talento humano y desarrollo organizacional",
    bio: "Psicóloga organizacional y MBA con especialización en Recursos Humanos y Finanzas. Impulsa el liderazgo, el talento y la transformación organizacional.",
    resena: "Con más de 24 años de experiencia, impulsa culturas organizacionales saludables, lidera procesos de cambio y fortalece equipos de alto desempeño.",
    wa: "59178522492",
    direccion: "",
    correo: "",
    redes: {
      facebook: "https://www.facebook.com/aldana.cordova",
      instagram: "https://www.instagram.com/aldanafe/",
      linkedin: "https://www.linkedin.com/in/aldana-fernandez-de-cordova/",
      tiktok: "https://www.tiktok.com/@aldanafernanfezdecordova"
    },
    fotos: {
      socia: "assets/aldana-foto.jpg",
      foco: "50% 22%",
      logo: "",
      galeria: []
    }
  },
  {
    categoria: "emprendedora",
    nombre: "Rita Mamani García",
    marca: "Arcoíris Snack Saludable",
    rubro: "Alimentos y Salud",
    bio: "Emprendedora apasionada por la salud natural. Transformó la adversidad en una oportunidad para ayudar a más personas con alimentación saludable.",
    resena: "Snack Arcoíris nació en pandemia para promover la salud natural con jugos, desayunos y masitas integrales, fomentando hábitos saludables.",
    wa: "59170393983",
    direccion: "",
    correo: "",
    redes: {
      facebook: "https://www.facebook.com/profile.php?id=100067172625074",
      instagram: "https://www.instagram.com/snack_saludable_arcoiris/",
      tiktok: "https://www.tiktok.com/@snack.saludable.a"
    },
    fotos: {
      socia: "assets/rita-foto.jpg",
      foco: "50% 0%",
      zoom: "auto 130%",
      logo: "assets/rita-logo.png",
      galeria: ["assets/rita-productos-2.jpg", "assets/rita-productos-1.jpg"]
    }
  },
  {
    categoria: "emprendedora",
    nombre: "Kenny Barrientos",
    marca: "Keto Kenny",
    rubro: "Alimentos y Salud",
    bio: "Contadora con maestría en Auditoría. Hace 3 años fundó Keto Kenny tras buscar un cambio de salud en su vida.",
    resena: "Marca de repostería saludable con harinas no refinadas. Ofrece productos sin gluten, azúcar ni conservantes, ideales para celíacos y diabéticos.",
    wa: "59172613436",
    direccion: "",
    correo: "",
    redes: {
      facebook: "https://www.facebook.com/KetoKennypanaderia",
      instagram: "https://www.instagram.com/ketokenny/",
      tiktok: "https://www.tiktok.com/@ketokenny"
    },
    fotos: {
      socia: "assets/kenny2.png",
      foco: "50% 15%",
      logo: "assets/kenny.png",
      galeria: ["assets/kenny3.png", "assets/kenny4.png", "assets/kenny5.png"]
    }
  },
  {
    categoria: "emprendedora",
    nombre: "Angela Suárez",
    marca: "Roosquirijillas",
    rubro: "Alimentos y Salud",
    bio: "Ingeniera comercial y experta en marketing. Creadora de Roosquirijillas, busca inspirar y apoyar a madres solteras y mujeres.",
    resena: "Marca dedicada a la venta de donuts y proyectos gastronómicos innovadores, enfocada en ofrecer productos creativos y de calidad.",
    wa: "59160871142",
    direccion: "",
    correo: "",
    redes: {
      facebook: "https://www.facebook.com/profile.php?id=100090503250005",
      instagram: "https://www.instagram.com/roosquirijilla/",
      tiktok: "https://www.tiktok.com/@roosquirijilla"
    },
    fotos: {
      socia: "assets/angelapersona.png",
      foco: "55% 6%",
      logo: "assets/angela2.png",
      galeria: ["assets/angela3.png", "assets/angela4.png"]
    }
  },
  {
    categoria: "emprendedora",
    nombre: "Yamile Alé Peña",
    marca: "CeliDelis",
    rubro: "Alimentos y Salud",
    bio: "Ingeniera química y emprendedora boliviana. Impulsada por el diagnóstico celíaco de su hijo, convirtió un reto familiar en misión de vida.",
    resena: "Empresa enfocada en alimentos libres de gluten de alto sabor y seguridad, pensados para celíacos, intolerantes y la salud familiar.",
    wa: "59172160115",
    direccion: "",
    correo: "",
    redes: {
      facebook: "https://www.facebook.com/CeliDelis",
      instagram: "https://www.instagram.com/celidelis.bo/",
      tiktok: "https://www.tiktok.com/@celidelis.bo"
    },
    fotos: {
      socia: "assets/yamileperson.png",
      foco: "50% 8%",
      logo: "assets/yamilelogo.png",
      galeria: ["assets/yamile2.png", "assets/yamile3.png", "assets/yamile5.png", "assets/yamile6.png"]
    }
  },
  {
    categoria: "emprendedora",
    nombre: "Melissa Guilding Balcazar Chávez",
    marca: "Alusanba",
    rubro: "Educativo",
    // ⚠️ Bio y reseña venían en blanco en el doc: redactadas desde su copia de marketing. Reemplazar con las reales.
    bio: "Creadora de Alusanba, diseña manualidades didácticas que convierten el aprendizaje de los niños en una actividad diaria y divertida.",
    resena: "Alusanba ofrece material educativo lúdico —silabarios, calendarios y más— para que los niños aprendan jugando, con manualidades hechas con dedicación.",
    wa: "59177066049",
    direccion: "",
    correo: "",
    redes: {
      facebook: "https://www.facebook.com/alusanba",
      instagram: "https://www.instagram.com/alusanba/",
      tiktok: "https://www.tiktok.com/@alusanbasantacruz"
    },
    fotos: {
      socia: "assets/meliosaperson.png",
      foco: "50% 5%",
      logo: "assets/melisalogo.png",
      galeria: ["assets/melisa2.png", "assets/melisa3.png", "assets/melisa4.png", "assets/melisa5.png"]
    }
  },
  {
    categoria: "empresa",
    nombre: "María Rosario Schamisseddine",
    marca: "Fidalga",
    rubro: "Retail de consumo masivo",
    bio: "Empresaria del retail, líder gremial y exconcejal que compitió por la alcaldía de Santa Cruz en el proceso electoral subnacional de 2026.",
    resena: "Cadena de consumo masivo con medio siglo de historia, gestionada de forma resiliente por una ejecutiva orientada a la reactivación de su región.",
    wa: "",
    direccion: "",
    correo: "",
    redes: {
      facebook: "https://www.facebook.com/profile.php?id=61590186478161",
      instagram: "https://www.instagram.com/supermercadosfidalga/",
      tiktok: "https://www.tiktok.com/@superfidalga"
    },
    fotos: {
      socia: "assets/maria.webp",
      foco: "57% 6%",
      logo: "assets/marialogo.png",
      galeria: ["assets/maria2.png"]
    }
  },
  {
    categoria: "empresa",
    nombre: "Claudia Rueda Baron",
    marca: "Pet Center",
    rubro: "Veterinaria y bienestar animal",
    bio: "Gerente general y fundadora de su empresa, cofundadora corporativa y pionera en la importación de tecnología y vacunas del sector veterinario.",
    resena: "Compañía veterinaria y de bienestar animal en Bolivia, liderada por una ejecutiva con décadas de experiencia en el desarrollo de la salud de las mascotas.",
    wa: "59175005293",
    direccion: "Av. Cuarto Anillo entre Radial 26 y Radial 27",
    correo: "",
    redes: {
      facebook: "https://www.facebook.com/PetCenter.Bo",
      instagram: "https://www.instagram.com/petcenterbol/",
      tiktok: "https://www.tiktok.com/@petcenterbol"
    },
    fotos: {
      socia: "assets/claudia.png",
      foco: "50% 30%",
      logo: "assets/claudialogo.png",
      galeria: ["assets/claudia2.png", "assets/claudia3.png"]
    }
  },
  {
    categoria: "empresa",
    nombre: "Amelia Solozarno",
    marca: "Patra",
    rubro: "Textil y ropa deportiva",
    bio: "Abogada de profesión y líder gremial textil, galardonada por su trayectoria resiliente en el desarrollo de la manufactura y el empleo local.",
    resena: "Factoría cruceña de indumentaria femenina para fitness, capitaneada por una estrategia que expandió un taller familiar en un referente industrial.",
    wa: "59164664146",
    direccion: "Avenida Santa Cruz #899 esq. Daniel Salamanca",
    correo: "",
    redes: {
      facebook: "https://www.facebook.com/PatraBolivia",
      instagram: "https://www.instagram.com/patraropadeportiva/",
      tiktok: "https://www.tiktok.com/@patraropadeportiva"
    },
    fotos: {
      socia: "assets/amelia.webp",
      foco: "48% 45%",
      logo: "assets/amelialogo.png",
      galeria: ["assets/amelia2.png", "assets/amelia3.png", "assets/amelia4.png"]
    }
  },
  {
    categoria: "empresaria",
    nombre: "Marina Suárez Arana Mercado",
    marca: "Horneados Únicos",
    rubro: "Panificación y panadería",
    // ⚠️ El doc solo traía "Gerente de Horneados Únicos" como bio: ampliada con los datos de la reseña. Reemplazar si envían la real.
    bio: "Gerente de Horneados Únicos, panadería boliviana con más de 40 años de trayectoria construida sobre sueños y recetas familiares.",
    resena: "Esta historia comenzó en la década de 1980 en la hacienda Victoria. Lo que inició como una iniciativa llena de sueños y recetas familiares hoy cuenta con más de 40 años de trayectoria ininterrumpida en el mercado boliviano.",
    wa: "59177600362",
    direccion: "",
    correo: "",
    // El doc no traía redes sociales ni logo ni fotos de productos.
    redes: {},
    fotos: {
      socia: "assets/marina.webp",
      foco: "50% 25%",
      logo: "",
      galeria: []
    }
  },
  {
    categoria: "empresaria",
    nombre: "Claudia Nelly Fernández Laura",
    marca: "Granel Biomercado",
    rubro: "Salud, bienestar y desarrollo personal",
    bio: "Cofundadora de Granel Biomercado, organizadora de seminarios con formación complementaria en nutrición y alimentos saludables.",
    resena: "Nos dedicamos a la comercialización y producción de productos naturales y saludables, ofreciendo más de 1500 productos orientados al bienestar y una alimentación consciente.",
    wa: "59174553533",
    direccion: "",
    correo: "",
    // El doc no traía redes sociales ni logo; sí una foto de productos (granel).
    redes: {},
    fotos: {
      socia: "assets/nelly.webp",
      foco: "50% 12%",
      logo: "",
      galeria: ["assets/nelly2.png"]
    }
  },
  {
    // El encabezado de categoría venía recortado en el doc; inferida "empresaria"
    // (Ingeniera Financiera, funda la consultora de CX "DIXI CX" en 2025).
    categoria: "empresaria",
    nombre: "Diana Domínguez Villarroel",
    marca: "DIXI CX",
    rubro: "Servicios y Banca",
    bio: "Ingeniera Financiera, profesional con amplia experiencia en atención al cliente, supervisión operativa y coordinación de equipos multidisciplinarios, destacándose por su enfoque estratégico en la optimización de procesos.",
    resena: "Fundada en 2025, nace de años de trabajo en atención al cliente, evaluación de servicios y mejora de procesos empresariales.",
    wa: "59179903029",
    direccion: "",
    correo: "",
    // El doc no traía redes ni logo; "Foto Productos: No corresponde".
    redes: {},
    fotos: {
      socia: "assets/diana.webp",
      foco: "50% 13%",
      logo: "",
      galeria: []
    }
  },
  {
    categoria: "empresaria",
    nombre: "Patricia La Fuente",
    // ⚠️ El doc puso "Nombre Empresa: Lic. Alejandra Gonzales" (parece nombre de persona, no marca, y difiere de la socia). Transcrito literal — CONFIRMAR.
    marca: "Lic. Alejandra Gonzales",
    rubro: "Fisioterapia dermatofuncional",
    // ⚠️ Bio venía solo como título ("Fisioterapeuta Dermatofuncional"): ampliada desde el rubro. Reemplazar con la real.
    bio: "Fisioterapeuta especializada en dermatofuncional, enfocada en la recuperación, la salud y el bienestar corporal de sus pacientes.",
    // ⚠️ Reseña venía EN BLANCO en el doc: redactada desde el rubro. Reemplazar con la real.
    resena: "Servicio de fisioterapia especializado en dermatofuncional, orientado a acompañar la recuperación y el bienestar de cada paciente.",
    wa: "59179799905",
    direccion: "",
    correo: "",
    redes: {},
    // Sin foto de socia en el doc → placeholder gris genérico (personagris.jpg).
    fotos: {
      socia: "assets/personagris.jpg",
      foco: "50% 50%",
      logo: "",
      galeria: []
    }
  }
];
