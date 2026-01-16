import fs from "fs";
import path from "path";

// Ignore list for summarization
const IGNORE_DIRS = [
  "node_modules",
  ".git",
  "dist",
  "coverage",
  ".idea",
  ".vscode",
];
const IGNORE_FILES = ["package-lock.json", "yarn.lock", ".DS_Store"];

export const summarizeProject = (
  dir: string,
  depth = 0,
  maxDepth = 2
): string => {
  if (depth > maxDepth) return "";

  let summary = "";
  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (IGNORE_DIRS.includes(file) || IGNORE_FILES.includes(file)) continue;

    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      summary += `${"  ".repeat(depth)}- [DIR] ${file}\n`;
      summary += summarizeProject(fullPath, depth + 1, maxDepth);
    } else {
      summary += `${"  ".repeat(depth)}- [FILE] ${file}\n`;
      // Read critical files content for better context
      if (["package.json", "tsconfig.json", "README.md"].includes(file)) {
        try {
          const content = fs.readFileSync(fullPath, "utf-8").slice(0, 500); // Limit to 500 chars
          summary += `${"  ".repeat(
            depth + 1
          )}Content snippet: ${content.replace(/\n/g, " ")}...\n`;
        } catch (e) {}
      }
    }
  }
  return summary;
};
