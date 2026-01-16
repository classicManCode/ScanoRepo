import { Command } from "commander";
import inquirer from "inquirer";
import spawn from "cross-spawn";
import { logger } from "../utils/logger";
import fs from "fs";
import path from "path";

export const depsCommand = new Command("deps")
  .description("Manage project dependencies")
  .action(async () => {
    const projectPath = process.cwd();
    const pkgPath = path.join(projectPath, "package.json");
    if (!fs.existsSync(pkgPath)) {
      logger.error("No package.json found.");
      return;
    }

    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do with dependencies?",
        choices: [
          { name: "Install missing dependencies", value: "install" },
          { name: "Update dependencies", value: "update" },
          { name: "Check outdated packages", value: "outdated" },
          { name: "Cancel", value: "cancel" },
        ],
      },
    ]);

    if (action === "cancel") return;

    logger.info(`Running npm ${action}...`);

    // Determine package manager (simple check for yarn.lock)
    let pm = "npm";
    if (fs.existsSync(path.join(projectPath, "yarn.lock"))) {
      pm = "yarn";
    }

    const cmd = pm;
    const args = [action];

    // 'npm outdated' returns exit code 1 if there are outdated variables, which can throw error if not handled.
    // 'npm install' and 'npm update' should be fine.

    try {
      const child = spawn.sync(cmd, args, {
        stdio: "inherit",
        cwd: projectPath,
      });
      if (child.status === 0) {
        logger.success(`Successfully ran ${action}.`);
      } else {
        // npm outdated exits with 1 if outdated stuff found, which is "success" in this context
        if (action === "outdated" && child.status === 1) {
          logger.info("Outdated packages found (see above).");
        } else {
          logger.error(`Command failed with status code ${child.status}`);
        }
      }
    } catch (e) {
      logger.error(`Failed to run command: ${(e as any).message}`);
    }
  });
