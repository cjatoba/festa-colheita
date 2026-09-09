import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const requiredEnv = ["PIX_KEY", "WHATSAPP_NUMBER"];
const missing = requiredEnv.filter((key) => !process.env[key]);
if (missing.length > 0) {
  console.error(
    `Variáveis de ambiente ausentes: ${missing.join(", ")}. Configure-as (localmente em .env, ou nas Environment Variables do projeto na Vercel) antes de buildar.`,
  );
  process.exit(1);
}

const template = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const output = template
  .replaceAll("__PIX_KEY__", process.env.PIX_KEY)
  .replaceAll("__WHATSAPP_NUMBER__", process.env.WHATSAPP_NUMBER);

mkdirSync(new URL("../dist/", import.meta.url), { recursive: true });
writeFileSync(new URL("../dist/index.html", import.meta.url), output);

console.log("Build gerado em dist/index.html");
