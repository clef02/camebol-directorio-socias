/* QA de navegador — Directorio de Socias CAMEBOL SC
   Arranca el server, verifica HTTP (página + imágenes) + SEO, y luego
   renderiza con Chrome headless (dump-dom = el JS corrió de verdad)
   assertando el contenido real de la grilla y de cada modal.
   Se adapta solo a las socias definidas en socias.js.
   Uso: node qa-front.js  */
const { spawn, execFileSync } = require("child_process");
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 4800;
const BASE = `http://localhost:${PORT}`;
const CHROME = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  process.env.LOCALAPPDATA + "\\Google\\Chrome\\Application\\chrome.exe",
].find(p => { try { return fs.existsSync(p); } catch { return false; } });

// Cargamos las socias reales desde socias.js → el QA se adapta solo al agregar socias
const SOCIAS = new Function(fs.readFileSync(path.join(__dirname, "socias.js"), "utf8") + "; return DATA;")();
const N = SOCIAS.length;

let pass = 0, fail = 0;
function ok(cond, name) {
  if (cond) { pass++; console.log("  ✅ " + name); }
  else { fail++; console.log("  ❌ " + name); }
}

function get(url) {
  return new Promise((res, rej) => {
    http.get(url, r => {
      let b = "";
      r.on("data", c => b += c);
      r.on("end", () => res({ status: r.statusCode, body: b }));
    }).on("error", rej);
  });
}

function domOf(url) {
  return execFileSync(CHROME, [
    "--headless=new", "--disable-gpu", "--no-sandbox",
    "--force-device-scale-factor=1", "--virtual-time-budget=4000",
    "--dump-dom", url,
  ], { maxBuffer: 32 * 1024 * 1024 }).toString("utf8");
}

(async () => {
  const server = spawn("node", [path.join(__dirname, "server.js")], { stdio: "ignore" });
  await new Promise(r => setTimeout(r, 900));
  try {
    console.log("\n— HTTP —");
    ok((await get(BASE + "/")).status === 200, "GET / responde 200");
    const sj = await get(BASE + "/socias.js");
    ok(sj.status === 200 && sj.body.includes("const DATA"), "socias.js responde 200 y define DATA");
    const imgSet = new Set(["camebol-logo.png", "camebol-mark.png", "emprender.jpg"]);
    for (const s of SOCIAS) {
      const f = s.fotos || {};
      [f.socia, f.logo, ...(f.galeria || [])].filter(Boolean)
        .forEach(u => imgSet.add(u.replace(/^assets\//, "")));
    }
    for (const i of [...imgSet]) ok((await get(`${BASE}/assets/${i}`)).status === 200, `assets/${i} responde 200`);

    console.log("\n— Sintaxis —");
    for (const f of ["socias.js"]) {
      try { execFileSync("node", ["--check", path.join(__dirname, f)]); ok(true, `node --check ${f}`); }
      catch { ok(false, `node --check ${f}`); }
    }

    console.log("\n— SEO (HTML servido) —");
    const html = (await get(BASE + "/")).body;
    ok(/<html[^>]+lang="es"/.test(html), "html lang=es");
    ok(html.includes("<title>") && html.includes("</title>"), "tiene <title>");
    ok(html.includes('name="description"'), "meta description");
    ok(html.includes('rel="canonical"'), "link canonical");
    ok(html.includes('property="og:title"') && html.includes('property="og:image"') && html.includes('property="og:url"'), "Open Graph (title/image/url)");
    ok(html.includes('name="twitter:card"'), "Twitter Card");
    ok(html.includes('name="theme-color"'), "theme-color");
    ok(html.includes('"@type": "Organization"') || html.includes('"@type":"Organization"'), "JSON-LD Organization");
    ok(html.includes('"@type": "WebSite"') || html.includes('"@type":"WebSite"'), "JSON-LD WebSite");
    ok((html.match(/<h1[\s>]/g) || []).length === 1, "exactamente un <h1>");
    ok(html.includes("<main>") && html.includes("</main>"), "landmark <main>");
    ok((await get(BASE + "/robots.txt")).status === 200, "robots.txt responde 200");
    const sm = await get(BASE + "/sitemap.xml");
    ok(sm.status === 200 && sm.body.includes("<urlset"), "sitemap.xml responde 200 y es válido");

    if (!CHROME) { console.log("\n⚠️ Chrome no encontrado — salto tests de render"); }
    else {
      console.log("\n— Render (Chrome headless) —");
      const dom = domOf(BASE + "/");
      for (const s of SOCIAS) ok(dom.includes(s.nombre), `grilla muestra a ${s.nombre}`);
      for (const s of SOCIAS) ok(dom.includes(s.marca), `marca presente: ${s.marca}`);
      // el \d excluye el template literal del <script> que dump-dom también serializa
      ok((dom.match(/<article class="card[^"]*" onclick="openModal\(\d+\)"/g) || []).length === N, `exactamente ${N} cards`);
      ok(dom.includes(N + " socia"), `contador dice ${N} socias`);
      ok([...new Set(SOCIAS.map(s => s.categoria))].every(c => dom.includes("t-" + c)), "badges de las categorías presentes");
      ok(SOCIAS.every(s => dom.includes("wa.me/" + s.wa)), "todos los links de WhatsApp reales");
      ok(dom.includes("camebol-mark.png"), "logo oficial CAMEBOL en el nav");
      ok(dom.includes('"numberOfItems":' + N), `JSON-LD ItemList de socias inyectado (${N} socias)`);
      ok(!dom.includes('"telephone"') && !dom.includes('"email"'), "datos estructurados sin teléfono/correo (privacidad)");
      // "Fidalga" salió de esta lista: era marca del demo, ahora es socia REAL (María Rosario)
      for (const fake of ["Farmacorp", "Andrea Justiniano", "Sabor Cruceño", "perfiles de ejemplo", "200+"])
        ok(!dom.includes(fake), `sin rastro fake: "${fake}"`);

      // Cada perfil: abre el modal y muestra su marca (genérico para toda socia)
      for (let i = 0; i < N; i++) {
        const d = domOf(`${BASE}/?perfil=${i}`);
        ok(d.includes('class="overlay open"') && d.includes(SOCIAS[i].marca) && d.includes("Sobre ella"),
          `?perfil=${i} abre el modal de ${SOCIAS[i].nombre}`);
      }
      // Checks detallados de las 3 socias piloto (contenido específico)
      const detalle = [
        ["?perfil=0", ["Su empresa", "xvglobalserv@gmail.com", "Avenida Santos Dumont", "Facebook", "Instagram", "TikTok", "ximena-empresa-1.jpg"]],
        ["?perfil=1", ["Su trabajo", "LinkedIn", "24 años", "aldana-foto.jpg"]],
        ["?perfil=2", ["Su emprendimiento", "pandemia", "rita-logo.png", "rita-productos-1.jpg"]],
      ];
      for (const [q, checks] of detalle) {
        const d = domOf(BASE + "/" + q);
        for (const c of checks) ok(d.includes(c), `${q} contiene "${c}"`);
      }
    }
  } finally {
    server.kill();
  }
  console.log(`\n${pass} ✅  ${fail} ❌\n`);
  process.exit(fail ? 1 : 0);
})();
