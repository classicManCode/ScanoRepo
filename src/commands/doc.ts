import { Command } from "commander";
import { summarizeProject } from "../services/summarizer";
import { generateExplanation } from "../services/ai";
import { logger } from "../utils/logger";
import ora from "ora";
import fs from "fs";
import path from "path";

export const runDoc = async () => {
  const spinner = ora("Generating documentation...").start();
  const projectPath = process.cwd();

  try {
    const structure = summarizeProject(projectPath);
    const prompt = `
        You are a technical documenter. 
        Analyze the following project structure and snippets:
        
        ${structure}
        
        Generate a "SCANNED.md" file content in Markdown format.
        Include:
        1. Project Overview (infer from filenames and snippets).
        2. Key Components (guess what the directories do).
        3. Getting Started (how to install/run based on package.json).
        
        Keep it professional and concise.
      `;

    const documentation = await generateExplanation(prompt);

    fs.writeFileSync(path.join(projectPath, "SCANNED.md"), documentation);
    spinner.succeed("SCANNED.md generated successfully!");
    logger.info("\nCheck SCANNED.md for the result.");
  } catch (error) {
    spinner.fail("Documentation generation failed.");
    logger.error((error as any).message);
  }
};

export const docCommand = new Command("doc")
  .description("Generate SCANNED.md information file using AI")
  .action(runDoc);
