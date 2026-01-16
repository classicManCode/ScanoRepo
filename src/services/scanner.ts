import fs from "fs";
import path from "path";
import { logger } from "../utils/logger";

export interface ScanResult {
  missingEnvVars: string[];
  missingDeps: string[];
  typescriptError: boolean;
  missingScripts: string[];
  portConflicts: string[];
  framework: "node" | "unknown";
}

export const scanProject = async (projectPath: string): Promise<ScanResult> => {
  const result: ScanResult = {
    missingEnvVars: [],
    missingDeps: [],
    typescriptError: false,
    missingScripts: [],
    portConflicts: [],
    framework: "unknown",
  };

  // Check package.json
  const pkgPath = path.join(projectPath, "package.json");
  if (fs.existsSync(pkgPath)) {
    result.framework = "node";
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

    // Check Scripts
    const requiredScripts = ["start", "dev", "build", "test"];
    const scripts = pkg.scripts || {};
    requiredScripts.forEach((script) => {
      if (!scripts[script]) {
        result.missingScripts.push(script);
      }
    });

    // Simple dependency check (just consistency, real check needs npm audit or similar logic if needed,
    // but here we might just check if node_modules exists or if deps are installed)
    if (!fs.existsSync(path.join(projectPath, "node_modules"))) {
      result.missingDeps.push("node_modules folder missing (run npm install)");
    }
  }

  // Check .env
  if (!fs.existsSync(path.join(projectPath, ".env"))) {
    if (fs.existsSync(path.join(projectPath, ".env.example"))) {
      result.missingEnvVars.push(".env missing (copy .env.example)");
    } else {
      result.missingEnvVars.push(".env missing");
    }
  }

  // Check TypeScript
  if (fs.existsSync(path.join(projectPath, "tsconfig.json"))) {
    // Could try to dry-run tsc or just check presence
    // For now, let's assume if tsconfig exists, it's a TS project.
  } else if (
    result.framework === "node" &&
    fs.existsSync(path.join(projectPath, "src", "index.ts"))
  ) {
    result.typescriptError = true; // TS file but no config
  }

  return result;
};
