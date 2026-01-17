# SCANNED.md  

---  

## 1. Project Overview  

**ScanoRepo** is a cross‑platform, AI‑powered command‑line interface (CLI) built with Node.js and TypeScript.  
Its primary purpose is to **scan JavaScript/TypeScript repositories**, detect configuration gaps (missing scripts, env vars, dependencies, TS config, etc.) and generate **comprehensive documentation** using the Groq AI SDK.  

The repository also contains:  

* **proxy‑server** – a lightweight Node service that wraps the Groq SDK (used by the AI layer).  
* **website** – a Next.js (v16) site that likely serves documentation, demos, or a UI front‑end for the tool.  

---  

## 2. Key Components  

| Path | Responsibility (inferred) |
|------|----------------------------|
| `src/` | Core TypeScript source of the CLI. |
| `src/commands/` | Individual CLI commands: <br>• `check.ts` – run quick health checks <br>• `deps.ts` – analyze dependencies <br>• `doc.ts` – generate documentation <br>• `scan.ts` – full repository scan |
| `src/services/` | Business logic: <br>• `scanner.ts` – walks the file‑system, parses package.json/tsconfig, etc. <br>• `ai.ts` – communicates with Groq SDK to produce AI‑driven insights <br>• `summarizer.ts` – condenses scan results <br>• `updater.ts` – possibly writes/updates docs or config files |
| `src/utils/logger.ts` | Simple logging utility used across commands/services. |
| `proxy-server/` | Small Express‑style (or plain Node) server exposing an API (`api/explain.js`) that forwards prompts to the Groq SDK. Useful when the CLI runs in environments without direct SDK access. |
| `website/