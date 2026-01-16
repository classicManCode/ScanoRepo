# SCANNED.md  

## 1. Project Overview  

**scanorepo** is a cross‑platform, AI‑powered CLI tool designed to scan source code repositories, extract dependency information, generate documentation, and provide quick health checks. The tool leverages OpenAI (or similar) services to summarize code and suggest updates, making it useful for developers who need automated project insights without leaving the terminal.  

Key characteristics inferred from the repository:  

- **CLI entry point** – `bin.scanorepo` points to `dist/index.js`.  
- **Command set** – `check`, `deps`, `doc`, and `scan` sub‑commands cover health checks, dependency analysis, documentation generation, and full repository scanning.  
- **AI integration** – services in `src/services/ai.ts` and `summarizer.ts` indicate usage of a language model for summarization and recommendations.  
- **Extensible architecture** – services are separated (`scanner`, `updater`) and a logger utility centralises output formatting.  

---

## 2. Key Components  

| Path | Responsibility |
|------|-----------------|
| `src/index.ts` | CLI bootstrap; registers commands with **commander** and wires services. |
| `src/commands/` | Individual command implementations: |
| &nbsp;&nbsp;`check.ts` | Runs quick health checks (lint, test status, etc.). |
| &nbsp;&nbsp;`deps.ts` | Analyzes `package.json`/`lockfile` to list dependencies and version mismatches. |
| &nbsp;&nbsp;`doc.ts` | Generates project documentation (README, API docs) using AI summarization. |
| &nbsp;&nbsp;`scan.ts` | Orchestrates a full repository scan, invoking the scanner, AI summarizer, and updater. |
| `src/services/` | Core business logic: |
| &nbsp