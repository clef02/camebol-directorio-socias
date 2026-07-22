# Directorio de Socias CAMEBOL Santa Cruz — STATUS

**Estado: ✅ LIVE https://camebolsc.quimeracloud.com (2026-07-19)**
**Repo: https://github.com/techgroupquimera/camebol-directorio-socias (privado — trae celulares/correos de socias, no hacer público)**
Tras cambios: `git add -A && git commit && git push` además del re-deploy.

**2026-07-21 — Hero rediseñado estilo editorial** (referencia fashion-catálogo): tira de socias arriba
(nombre + categoría·rubro sobre foto grande, click → modal; 4ª card "¿Sos socia? → #unirme"),
titular gigante "EMPRESAS, EMPRESARIAS & EMPRENDEDORAS" (& en Fraunces itálica, EMPRENDEDORAS magenta)
y a la derecha CTA "Explorar el directorio →" + lead. Se fueron: float-cards, hero-stats, doble CTA.
Se agregó `prefers-reduced-motion` global. 2ª iteración: fotos cuadradas + **slider infinito**
(avanza solo cada 3s, la card que cae en el 3er slot se estira +12% y el foco pasa a la siguiente;
pausa on-hover, en móvil queda carrusel manual con snap, copia duplicada con aria-hidden).
QA 50/50 ✅. **Pendiente re-deploy al VPS.**

**2026-07-21 (2ª tanda) — Rediseño editorial completo del resto:**
- **Navbar estilo GAZU**: isotipo a la izquierda + links tracked (POR QUÉ · DIRECTORIO), wordmark CAMEBOL
  centrado en Fraunces, derecha Buscar (lupa SVG, scrollea y enfoca el buscador) + Ser socia. Alto 64px.
- **Fotos del slider**: `foco` y `zoom` opcionales por socia en socias.js (encuadre de caras); card
  "Sumar perfil" eliminada del slider (solo fotos, ciclo de 3 copias).
- **Sección "Por qué"** (#problema): ahora es declaración tipográfica centrada en dos tonos con el
  isotipo inline (se fueron el fondo ciruela y las cards con emojis).
- **Directorio marketplace**: tabs tipográficos sin emojis + buscador compacto en una fila, chips
  livianos, cards nuevas (avatar redondo + categoría en color, tag rubro, marca en serif, bio 2 líneas,
  redes como mini-links, CTA único "Contactar por WhatsApp" en ciruela). El detalle vive en el modal.
- QA sigue 50/50 ✅ (las cards del grid conservan `class="card"`, `t-<categoria>` va en `.mk-cat`).
- **3ª tanda (mismo día):** statement con reveal palabra-por-palabra al scroll (blur+fade, respeta
  reduced-motion) · sección nueva **"Cómo funciona"** (01/02/03 editorial, #como) · cards del grid
  ahora estilo producto (foto grande + ♥ favorita con localStorage `camebol-favs` + WhatsApp overlay
  on-hover; detalle en el modal) · chips de rubro junto al título · **Join** rediseñado (card ciruela +
  squiggle + foto, botón pastilla ↗) · **Footer** tipo Shinta: fondo rosa #F7D2E6, statement, pills de
  navegación/categorías, card "¿Sos socia?" y wordmark CAMEBOL gigante. Tipografía unificada:
  titulares en Plus Jakarta 800 uppercase (nav, hero, secciones), Fraunces solo de acento.
- ⚠️ El placeholder `59171000000` ahora aparece en JOIN y en el FOOTER (contacto + card) — al
  confirmar el número real, reemplazar en los 3 lugares de index.html.
- **4ª tanda:** modal con íconos SVG reales (set `ICONS`/`ico()`, marcas rellenas) — se fueron TODOS
  los emojis de la landing; tipografía del modal alineada al hero (nombre Plus Jakarta 800 uppercase,
  secciones como labels tracked). Imagen del bloque Join = `assets/emprender.jpg` (alto 560px).
  **Intro de carga**: cortina crema con wordmark en cascada que se levanta y revela el hero escalonado
  (~1.7s, se autodestruye, respeta reduced-motion). **Reveal por scroll** genérico (IntersectionObserver,
  clase `.rv`/`.vis`, rootMargin bottom 0 para que el footer no quede atascado) en how/mk-head/toolbar/
  count/grid/join/footer. ⚠️ El reveal agrega `rv` a `.card`, así que el test de qa-front usa ahora
  `class="card[^"]*"`. QA 50/50 ✅.
- **5ª tanda — responsive (≤700px):** `body{overflow-x:hidden}` de seguridad; nav compacto (wordmark
  16px, "Buscar" colapsa a solo lupa vía `.ut-label`, gaps chicos); títulos de sección escalados
  (statement/mk-head) con `max-width:100%` para que no desborden; toolbar en columna con tabs y chips
  en **scroll horizontal** (nowrap); modal casi a pantalla completa con galería/botones ajustados;
  footer con wordmark reducido. Verificado SIN overflow horizontal por medición del DOM (`scrollWidth`
  ≤ `innerWidth` en modo móvil). ⚠️ NOTA tooling: el headless en esta PC (Windows 125%) tiene innerWidth
  mínimo ≈482 e infla el layout, por eso capturas con window<482 recortan ~19% a la derecha (artefacto,
  no bug); usar window≥486 para screenshots móviles fieles.
- **6ª tanda — zona de filtros del directorio:** los chips de rubro se movieron de `.mk-head` a dentro
  de `.toolbar` (debajo de la fila tabs+buscador) → en desktop quedan agrupados en la barra de filtros.
  En móvil el orden ahora es **buscador (protagonista, con sombra) → categorías → rubros**; la toolbar
  deja de ser sticky en móvil, y las filas de scroll (tabs/chips) llevan fundido a la derecha para
  señalar el scroll. QA 50/50 ✅.
- **7ª tanda — pulido responsive hero:** la tira de fotos del hero ya no sangra al borde en móvil;
  ahora `padding-inline:3vw` la alinea con el margen del resto del contenido (nav, título, texto) y
  la card `sc-head` reduce su padding para que el nombre alinee con la foto. `white-space:nowrap` en
  `.nav-util` evita que "SER SOCIA" se parta. **Diagnóstico clave:** NO hay overflow horizontal real
  en dispositivos (verificado por CDP con `screenWidth` fijado → `scrollWidth == innerWidth`); el
  "overflow de 414px" que aparecía en emulación era artefacto de `vw` resolviendo al ICB y no al
  device-width (no ocurre en teléfonos reales, que tienen `<meta viewport width=device-width>`).
  Herramienta nueva: `scratchpad/cdp-shot.js` captura viewports móviles fieles vía DevTools Protocol
  (el headless CLI en esta PC clampa innerWidth a ~482 por el escalado 125%). QA 50/50 ✅.
- **8ª tanda — SEO:** en `<head>` se agregaron canonical, `robots`, `theme-color`, `keywords`,
  `author`, **Open Graph** (og:title/description/image/url/type/site_name/locale — clave para previews
  en WhatsApp) y **Twitter Card**; **JSON-LD** Organization + WebSite estáticos y un **ItemList**
  dinámico de las socias inyectado desde el script (nombre, marca, rubro, redes, deep-link `?perfil=N`
  — SIN teléfono/correo por privacidad). Se envolvió el contenido en `<main>`, se corrigió la jerarquía
  de headings (`Cómo funciona` ahora es `<h2>`; `<h2 class="sr-only">` en la declaración) y se sumó
  `apple-touch-icon`. Nuevos archivos raíz: **`robots.txt`** y **`sitemap.xml`** (server.js ahora sirve
  .txt/.xml). qa-front.js incluye bloque "— SEO —": **65/65 ✅**.
  - ⚠️ **og:image** apunta a `assets/camebol-logo.png` (logo transparente); lo ideal es una imagen
    dedicada 1200×630 para que el preview se vea lleno. Pendiente si CAMEBOL la provee.
  - ⚠️ **Re-deploy**: ahora hay que copiar también `robots.txt` y `sitemap.xml` a la raíz del sitio.
  - Nota: las fotos de socias son `background-image` (CSS), no se indexan en Google Imágenes; pasarlas
    a `<img>` con alt sería una mejora futura mayor.

De demo con datos inventados → web real con las **3 primeras socias oficiales** del doc
`Downloads\INFORMACION DE SOCIAS POR CATEGORIAS - CAMEBOL SC.docx`.
Las categorías oficiales que mandan: **Empresa · Empresaria · Emprendedora**.

## Cómo correrla
Doble clic a `ABRIR-CAMEBOL.bat` → http://localhost:4800 (server Node cero dependencias).

## Socias reales (4)
| # | Categoría | Socia | Negocio |
|---|---|---|---|
| 0 | Empresa | Ximena Valencia Arze | GlobalServ Bolivia (limpieza y mantenimiento) |
| 1 | Empresaria | Aldana Fernández de Córdova Frerking | Psicóloga organizacional · MBA (RRHH) |
| 2 | Emprendedora | Rita Mamani García | Arcoíris Snack Saludable |
| 3 | Emprendedora | Kenny Barrientos | Keto Kenny (repostería saludable, sin gluten/azúcar) — wa 59172613436, fotos `kenny*.png` |
| 4 | Emprendedora | Angela Suárez | Roosquirijillas (donuts / gastronomía) — wa 59160871142, fotos `angela*` / `angelapersona.png` (logo sobre fondo negro) |
| 5 | Emprendedora | Yamile Alé Peña | CeliDelis (alimentos sin gluten) — wa 59172160115 (⚠️ del packaging; el doc traía "7743799" de 7 díg., inválido), fotos `yamile*` |
| 6 | Emprendedora | Melissa Guilding Balcazar Chávez | Alusanba (manualidades didácticas, rubro **Educativo** nuevo) — wa 59177066049, fotos `melisa*` / `meliosaperson.png`. ⚠️ Bio y reseña venían EN BLANCO en el doc → redactadas desde su copia de marketing; reemplazar con las reales. |
| 7 | **Empresa** | María Rosario Schamisseddine | Fidalga (retail de consumo masivo) — fotos `maria.webp`/`marialogo.png`/`maria2.png`. ⚠️ **SIN número de contacto** en el doc → `wa:""`, muestra botón "Contactar por redes" (fallback). Confirmar si tiene WhatsApp. |
| 8 | **Empresa** | Claudia Rueda Baron | Pet Center (rubro **Veterinaria y bienestar animal** nuevo) — wa 59175005293 (contacto 75005293 del doc), dirección Av. Cuarto Anillo entre Radial 26 y 27, fotos `claudia.png`/`claudialogo.png`/`claudia2.png`/`claudia3.png`. Bio y reseña reales del doc. |
| 9 | **Empresa** | Amelia Solozarno | Patra (rubro **Textil y ropa deportiva** nuevo; factoría textil, 32 años) — wa 59164664146 (contacto 64664146 del doc), dirección Avenida Santa Cruz #899 esq. Daniel Salamanca, fotos `amelia.webp`/`amelialogo.png`/`amelia2.png`/`amelia3.png`/`amelia4.png`. Bio y reseña reales del doc. |
| 10 | **Empresaria** | Marina Suárez Arana Mercado | Horneados Únicos (rubro **Panificación y panadería** nuevo; panadería con +40 años) — wa 59177600362 (contacto 77600362 del doc). ⚠️ El doc SOLO trajo foto socia (`marina.webp`): **sin logo, sin fotos de productos, sin redes**; bio venía en 1 línea → ampliada desde la reseña. Modal se ve limpio (omite esas secciones). Confirmar redes/logo/fotos y bio real. |
| 11 | **Empresaria** | Claudia Nelly Fernández Laura | Granel Biomercado (rubro **Salud, bienestar y desarrollo personal** nuevo; +1500 productos naturales) — wa 59174553533 (contacto 74553533 del doc), fotos `nelly.webp` (socia) + `nelly2.png` (productos granel). ⚠️ **Sin logo y sin redes** en el doc. Bio y reseña reales. Nombre con acento "Fernández" (el doc lo subrayaba sin tilde). |
| 12 | **Empresaria** | Diana Domínguez Villarroel | DIXI CX (rubro **Servicios y Banca** nuevo; consultora de CX fundada en 2025) — wa 59179903029 (contacto 79903029 del doc), foto `diana.webp`. ⚠️ Encabezado de categoría venía RECORTADO en el doc → inferida "empresaria" (Ing. Financiera + funda su consultora). **Sin logo, sin redes**; "Foto Productos: No corresponde". Bio y reseña reales. |
| 13 | **Empresaria** | Patricia La Fuente | Fisioterapia dermatofuncional — wa 59179799905 (contacto 79799905 del doc). ⚠️ **SIN foto** en el doc → placeholder gris `personagris.jpg`. ⚠️ "Nombre Empresa" del doc = "Lic. Alejandra Gonzales" (parece nombre de persona, difiere de la socia) → puesto como marca, CONFIRMAR. ⚠️ Bio venía solo como título y reseña EN BLANCO → ambas redactadas desde el rubro; reemplazar con las reales. Sin logo, sin redes, sin productos. |

Cada perfil: foto real, logo, galería, bio ("Sobre ella"), reseña ("Su empresa/trabajo/emprendimiento"),
redes sociales con link, dirección/correo si existen, WhatsApp y llamar.
Link directo a un perfil: `?perfil=0..13` (0=Ximena, 1=Aldana, 2=Rita, 3=Kenny, 4=Angela, 5=Yamile, 6=Melissa, 7=María/Fidalga, 8=Claudia/Pet Center, 9=Amelia/Patra, 10=Marina/Horneados Únicos, 11=Claudia Nelly/Granel Biomercado, 12=Diana/DIXI CX, 13=Patricia/Fisioterapia).

**✅ 14 socias cargadas** (4 Empresa: Ximena, María, Claudia, Amelia · 5 Empresaria: Aldana, Marina, Claudia Nelly, Diana, Patricia · 5 Emprendedoras). Rubros nuevos
generados solos: "Educativo", "Retail de consumo masivo", "Veterinaria y bienestar animal", "Textil y ropa deportiva", "Panificación y panadería", "Salud, bienestar y desarrollo personal", "Servicios y Banca", "Fisioterapia dermatofuncional". QA adaptativo: **135/135 ✅**.
Placeholder `personagris.jpg` disponible para socias sin foto.

**⏳ Pendiente de cargar (falta info + imágenes):**
- **Betty Stolze** — empresa "Stolze". El doc solo trae el nombre y el nombre de la empresa; bio, contacto,
  dirección, reseña, rubro, redes y TODAS las imágenes (logo, foto socia, fotos empresa) están en blanco.
  No cargada aún: esperar datos completos + imágenes en `assets/`.

**Cambios de plataforma en esta tanda:**
- `socias.js` ahora soporta socias **sin WhatsApp** (`wa:""`): la card oculta el overlay de WhatsApp y el
  modal muestra un botón **"Contactar por redes"** (linkea a la 1ª red social). Fallback en index.html.
- server.js sirve **`.webp`** (foto de María). `Fidalga` se quitó de la lista de "marcas fake" del QA
  (era del demo, ahora es socia real).

## Cómo agregar la próxima socia (3 pasos)
1. Guardar sus fotos en `assets\` (ej. `maria-foto.jpg`, `maria-logo.png`, `maria-galeria-1.jpg`).
2. Abrir `socias.js` y copiar/pegar un objeto del array `DATA`, completando sus datos
   (categoría: `"empresa"`, `"empresaria"` o `"emprendedora"`; wa: `591` + celular).
3. Guardar. Listo — la web se arma sola (cards, filtros, rubros, modal).

## Archivos
- `index.html` — toda la web (estética CAMEBOL mujeres: ciruela/magenta/dorado, Fraunces + Plus Jakarta).
- `socias.js` — LOS DATOS. Único archivo a tocar para agregar/editar socias.
- `assets\` — las 9 imágenes reales extraídas del Word de CAMEBOL.
- `qa-front.js` — tester de navegador (`node qa-front.js`): HTTP + 9 imágenes + render Chrome headless
  + los 3 modales. Última corrida: **47/47 ✅**. Screenshots de referencia: `_qa-home.png`, `_qa-modal.png`.
- `server.js` / `ABRIR-CAMEBOL.bat` — sin cambios (uso local).
- `assets\camebol-logo.png` + `camebol-mark.png` — logo OFICIAL extraído de la plantilla pptx de CAMEBOL
  (`Downloads\PLANTILLA DIAPOSITIVAS CAMEBOL SANTA CRUZ (1).pptx`, image1 500px transparente); mark = isotipo
  magenta recortado, va en nav + favicon; logo completo en el footer.
- `deploy\` — Dockerfile (nginx:alpine) + docker-compose.yml con labels Traefik.

## Deploy (LIVE 2026-07-19)
- **URL**: https://camebolsc.quimeracloud.com (DNS A creado vía `v-add-dns-record maidenquimera quimeracloud.com camebolsc`)
- **VPS**: `/opt/camebol-directorio` — container `camebol-directorio` (nginx:alpine, red `traefik_proxy`, resolver `myresolver`).
- **Re-deploy tras cambios**: copiar `index.html`, `socias.js` y `assets\` a `/tmp/camebol-deploy/site/` + Dockerfile/compose,
  tar+scp al VPS, y en `/opt/camebol-directorio`: `docker compose up -d --build`. (Mismo flujo que quimera-mundial.)
- Verificación hecha: HTTPS 200 con cert Let's Encrypt, socias.js y assets 200, screenshot prod OK desde la PC de Johnny.

## Pendientes
- ⚠️ **Número WhatsApp del CTA "Sumar mi perfil"**: sigue el placeholder `59171000000` en `index.html`
  (sección join). Johnny debe confirmar el número real de CAMEBOL SC y reemplazarlo (+ re-deploy).
- **Dominio propio**: cuando CAMEBOL compre camebolsc.com (o similar), agregar el Host() al label de Traefik
  en `deploy\docker-compose.yml` y apuntar el DNS del dominio nuevo al VPS. El contenido ya está servido.
- El doc de CAMEBOL trae solo estas 3 socias piloto; cuando manden más, seguir los 3 pasos de arriba + re-deploy.
