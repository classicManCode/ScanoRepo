import { Command } from "commander";
import { runScan } from "./scan"; // Imported directly
import { runDoc } from "./doc"; // Imported directly
import { logger } from "../utils/logger";

export const checkCommand = new Command("check")
  .description("Runs full health check (scan + doc generation)")
  .action(async () => {
    logger.info("Starting full health check...");

    logger.general("\n--- Step 1: Scanning ---");
    await runScan();

    logger.general("\n--- Step 2: Documentation ---");
    await runDoc();

    logger.success("\nFull check complete!");

    logger.footer();
  });
