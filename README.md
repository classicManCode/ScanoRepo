# ScanoRepo

> **AI-powered CLI tool for project scanning and documentation generation.**

ScanoRepo is a cross-platform command-line utility built with Node.js and TypeScript. It is designed to audit JavaScript and TypeScript repositories for configuration issues and generate comprehensive project documentation using AI-driven insights.

---

## Features

- **Project Scanning** - Analyzes repositories for missing npm scripts, environment variables, dependencies, and TypeScript configuration discrepancies.
- **AI-Powered Insights** - Utilizes Groq's high-performance inference engine to provide technical explanations and recommended solutions for detected issues.
- **Automated Documentation** - Generates a structured `SCANNED.md` file summarizing project architecture, key components, and deployment procedures.
- **Dependency Management** - Provides an interactive interface to install, update, and audit project packages.
- **Cross-Platform Compatibility** - Fully supported on Windows, macOS, and Linux environments.

---

## Installation

### Global Installation

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

## Zero Configuration

ScanoRepo is designed for immediate utility. Users are not required to provide personal API keys or manage complex environment variables. AI-driven analysis is facilitated through a secure proxy service maintained by the developer.

### Operational Overview

1. An audit command is initiated by the user.
2. ScanoRepo transmits project metadata to a secure backend infrastructure.
3. The backend processes the request using high-performance large language models.
4. Actionable technical insights are returned directly to the terminal interface.

---

## Usage

Navigate to the target Node.js project directory and execute:

```bash
scanorepo <command>
```

### Available Commands

| Command               | Description                                                           |
| --------------------- | --------------------------------------------------------------------- |
| `scanorepo scan`      | Audit project for configuration issues with AI-assisted explanations. |
| `scanorepo doc`       | Generate `SCANNED.md` documentation using AI analysis.                |
| `scanorepo deps`      | Interactive dependency management and auditing.                       |
| `scanorepo check`     | Comprehensive health check (Sequential execution of scan and doc).    |
| `scanorepo --help`    | Display command reference.                                            |
| `scanorepo --version` | Display current version information.                                  |

---

## Command Details

### `scanorepo scan`

Performs a diagnostic audit of the project:

- **Script Analysis** - Verifies presence of standard scripts such as `start`, `dev`, `build`, and `test`.
- **Environment Verification** - Detects absence of `.env` files and suggests templates.
- **TypeScript Configuration** - Identifies `.ts` source files lacking an associated `tsconfig.json`.
- **Dependency Integrity** - Validates the state of the `node_modules` directory.

### `scanorepo doc`

Analyzes the repository structure to produce a professional `SCANNED.md` file, providing:

- Technical project overview.
- Functional breakdown of key directories and files.
- Standardized onboarding and installation instructions.

### `scanorepo deps`

Initiates an interactive management interface:

- Automatically detects preferred package managers (npm or yarn).
- Facilitates secure package installation, updates, and outdated package auditing.

---

## Operational Constraints

- **Node.js Environment** - ScanoRepo is optimized for projects containing a valid `package.json`.
- **Inference Variability** - AI-generated explanations are intended for assistance and may vary between executions.
- **Build Requirements** - When modifying the source, ensure a fresh build is generated via `npm run build`.

---

## Development

### Assembly

```bash
npm run build
```

### Debugging

```bash
npm run dev
```

### Local Testing

```bash
npm link
scanorepo scan
```

---

## License

This project is licensed under the MIT License. Refer to the [LICENSE](LICENSE) file for additional details.

---

## Author

**Benjamin Onyia**

- Portfolio: [benjamin-onyia.vercel.app](https://benjamin-onyia.vercel.app/)
- GitHub: [classicManCode](https://github.com/classicManCode)

---

Developed by Benjamin Onyia.
