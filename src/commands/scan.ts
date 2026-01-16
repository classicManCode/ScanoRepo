import { Command } from "commander";
import { scanProject } from "../services/scanner";
import { generateExplanation } from "../services/gemini";
import { logger } from "../utils/logger";
import ora from "ora";
import path from "path";

export const runScan = async () => {
  const spinner = ora("Scanning project...").start();
  const projectPath = process.cwd();

  try {
    const issues = await scanProject(projectPath);
    spinner.succeed("Scan complete!");

    if (issues.framework === "unknown") {
      logger.warn("Could not detect a Node.js project (missing package.json).");
      return;
    }

    logger.general("\n--- Scan Results ---");

    // Helper to explain issues
    const explain = async (
      title: string,
      items: string[],
      promptContext: string
    ) => {
      if (items.length > 0) {
        logger.warn(`\n[!] ${title}:`);
        items.forEach((item) => logger.general(` - ${item}`));

        const prompt = `Explain why these ${promptContext} are important in a Node.js project: ${items.join(
          ", "
        )}. Keep it brief.`;
        const aiExplanation = await generateExplanation(prompt);
        logger.info(`\nAI Insight:\n${aiExplanation}\n`);
      }
    };

    await explain("Missing Scripts", issues.missingScripts, "npm scripts");
    await explain(
      "Environment Issues",
      issues.missingEnvVars,
      "env configurations"
    );

    if (issues.missingDeps.length > 0) {
      logger.warn(`\n[!] Dependency Issues:`);
      issues.missingDeps.forEach((d) => logger.general(` - ${d}`));
    }

    if (issues.typescriptError) {
      logger.error(
        `\n[!] TypeScript Config Missing: Found .ts files but no tsconfig.json.`
      );
      const aiExplanation = await generateExplanation(
        "Why is tsconfig.json required for TypeScript projects?"
      );
      logger.info(`\nAI Insight:\n${aiExplanation}\n`);
    }

    if (
      issues.missingScripts.length === 0 &&
      issues.missingEnvVars.length === 0 &&
      !issues.typescriptError &&
      issues.missingDeps.length === 0
    ) {
      logger.success("\n✅ No obvious issues found! Good job.");
    }
  } catch (error) {
    spinner.fail("Scan failed.");
    logger.error((error as any).message);
  }
};

export const scanCommand = new Command("scan")
  .description("Scan the current project for issues")
  .action(runScan);
