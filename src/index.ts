#!/usr/bin/env node
import { Command } from "commander";
import figlet from "figlet";
import { logger } from "./utils/logger";
import { scanCommand } from "./commands/scan";
import { depsCommand } from "./commands/deps";
import { docCommand } from "./commands/doc";
import { checkCommand } from "./commands/check";
import { checkForUpdates } from "./services/updater";
import packageJson from "../package.json";

console.log(figlet.textSync("ScanoRepo"));

const program = new Command();

program
  .name("scanorepo")
  .description("AI-powered CLI tool for project scanning and documentation")
  .version(packageJson.version)
  .hook("preAction", async () => {
    // Check for updates before running any command
    await checkForUpdates(packageJson.version);
  });

program.addCommand(scanCommand);
program.addCommand(depsCommand);
program.addCommand(docCommand);
program.addCommand(checkCommand);

program.parse(process.argv);
