# 🔍 ScanoRepo

> **AI-powered CLI tool for instant project scanning and documentation generation.**

ScanoRepo is a cross-platform command-line tool built with Node.js and TypeScript that scans your JavaScript/TypeScript projects for common issues and generates documentation using AI-powered insights.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)

---

## ✨ Features

- **🔎 Project Scanning** - Detects missing npm scripts, environment variables, dependencies, and TypeScript configuration issues.
- **🤖 AI-Powered Insights** - Uses Groq's ultra-fast AI inference to explain _why_ each issue matters and how to fix it.
- **📄 Auto Documentation** - Generates a `SCANNED.md` file summarizing your project structure, components, and getting started guide.
- **📦 Dependency Management** - Interactive CLI to install, update, or check outdated packages.
- **🌐 Cross-Platform** - Works on Windows, macOS, and Linux.

---

## 📦 Installation

### Global Installation (Recommended)

```bash
npm install -g scanorepo
```

### Local Development

```bash
git clone https://github.com/classicManCode/ScanoRepo.git
cd ScanoRepo
npm install
npm run build
npm link
```

---

## 🔑 Zero Configuration

ScanoRepo works **instantly**!

Unlike other CLI tools, you don't need to sign up for API keys or set up environment variables. AI-powered insights are delivered through a secure proxy server maintained by the developer.

### How it works:

1. You run a command.
2. ScanoRepo sends the project metadata to a secure backend.
3. The backend processes the request using Groq's high-performance models.
4. You receive instant insights in your terminal.

---

## 🚀 Usage

Navigate to any Node.js project and run:

```bash
cd /path/to/your/project
scanorepo <command>
```

### Available Commands

| Command               | Description                                  |
| --------------------- | -------------------------------------------- |
| `scanorepo scan`      | Scan project for issues with AI explanations |
| `scanorepo doc`       | Generate `SCANNED.md` documentation using AI |
| `scanorepo deps`      | Interactive dependency management            |
| `scanorepo check`     | Run full health check (scan + doc)           |
| `scanorepo --help`    | Display help information                     |
| `scanorepo --version` | Display version number                       |

---

## 📋 Command Details

### `scanorepo scan`

Scans your project for common issues:

- **Missing npm scripts** - Checks for `start`, `dev`, `build`, `test`
- **Environment issues** - Detects missing `.env` files
- **TypeScript errors** - Flags `.ts` files without `tsconfig.json`
- **Dependency issues** - Checks if `node_modules` exists

**Example Output:**

```
  ____                        ____
 / ___|  ___ __ _ _ __   ___ |  _ \ ___ _ __   ___
 \___ \ / __/ _` | '_ \ / _ \| |_) / _ \ '_ \ / _ \
  ___) | (_| (_| | | | | (_) |  _ <  __/ |_) | (_) |
 |____/ \___\__,_|_| |_|\___/|_| \_\___| .__/ \___/
                                       |_|
✔ Scan complete!

--- Scan Results ---

[!] Missing Scripts:
 - test

AI Insight:
**`npm test`** is essential because it automates verification,
integrates with CI/CD pipelines, and standardizes testing workflow...
```

### `scanorepo doc`

Analyzes your project structure and generates a comprehensive `SCANNED.md` file containing:

- Project overview
- Key components and their purposes
- Getting started instructions

### `scanorepo deps`

Opens an interactive menu:

```
? What would you like to do with dependencies?
❯ Install missing dependencies
  Update dependencies
  Check outdated packages
  Cancel
```

- Automatically detects npm vs yarn
- Handles all package manager commands

### `scanorepo check`

Runs both `scan` and `doc` commands in sequence for a complete project audit.

---

## 📁 Project Structure

```
scanorepo/
├── src/
│   ├── index.ts           # CLI entry point
│   ├── commands/
│   │   ├── scan.ts        # Scan command
│   │   ├── doc.ts         # Documentation command
│   │   ├── deps.ts        # Dependencies command
│   │   └── check.ts       # Full check command
│   ├── services/
│   │   ├── ai.ts          # Groq AI integration
│   │   ├── scanner.ts     # Project scanning logic
│   │   ├── summarizer.ts  # Project structure summarizer
│   │   └── updater.ts     # Version update checker
│   └── utils/
│       └── logger.ts      # Colored console output
├── dist/                   # Compiled JavaScript
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚠️ What NOT To Do

### ❌ Don't commit your API key

Never commit your `.env` file or hardcode API keys in source code.

```bash
# Add to .gitignore
.env
```

### ❌ Don't run on non-Node.js projects

ScanoRepo is designed for JavaScript/TypeScript projects with `package.json`.

### ❌ Don't expect deterministic AI outputs

AI responses may vary between runs. The insights are meant to be helpful, not definitive.

### ❌ Don't skip the build step

After making changes, always rebuild:

```bash
npm run build
```

---

## 🛠️ Development

### Build the project

```bash
npm run build
```

### Run in development mode

```bash
npm run dev
```

### Test locally without publishing

```bash
npm link
scanorepo scan
```

### Unlink when done

```bash
npm unlink -g scanorepo
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Benjamin Onyia**

- 🌐 Portfolio: [benjamin-onyia.vercel.app](https://benjamin-onyia.vercel.app/)
- 💻 GitHub: [@classicManCode](https://github.com/classicManCode)

---

## 🙏 Acknowledgments

- [Groq](https://groq.com/) for ultra-fast AI inference
- [Commander.js](https://github.com/tj/commander.js) for CLI framework
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) for interactive prompts
- [Chalk](https://github.com/chalk/chalk) & [Ora](https://github.com/sindresorhus/ora) for beautiful terminal output

---

<p align="center">
  Made with ❤️ by <a href="https://benjamin-onyia.vercel.app/">Benjamin Onyia</a>
</p>
