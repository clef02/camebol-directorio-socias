// Servidor local cero-dependencias para el Marketplace CAMEBOL Santa Cruz
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 4800;
const ROOT = __dirname;
const MIME = { ".html":"text/html; charset=utf-8", ".css":"text/css", ".js":"text/javascript", ".png":"image/png", ".jpg":"image/jpeg", ".webp":"image/webp", ".svg":"image/svg+xml", ".ico":"image/x-icon", ".txt":"text/plain; charset=utf-8", ".xml":"application/xml; charset=utf-8", ".webmanifest":"application/manifest+json" };

http.createServer((req, res) => {
  let file = decodeURIComponent(req.url.split("?")[0]);
  if (file === "/" || file === "") file = "/index.html";
  const full = path.join(ROOT, file);
  if (!full.startsWith(ROOT)) { res.writeHead(403); return res.end("Forbidden"); }
  fs.readFile(full, (err, data) => {
    if (err) { res.writeHead(404, {"Content-Type":"text/html; charset=utf-8"}); return res.end("<h1>404</h1>"); }
    res.writeHead(200, {"Content-Type": MIME[path.extname(full)] || "application/octet-stream"});
    res.end(data);
  });
}).listen(PORT, () => {
  console.log("\n  CAMEBOL Santa Cruz · Marketplace de Socias");
  console.log("  ──────────────────────────────────────────");
  console.log("  Abrí en tu navegador:  http://localhost:" + PORT + "\n");
});
