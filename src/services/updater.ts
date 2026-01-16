import axios from "axios";
import semver from "semver";
import { logger } from "../utils/logger";
// import packageJson from '../../package.json'; // Importing outside src might be tricky with generic resolve, but let's try relative

export const checkForUpdates = async (currentVersion: string) => {
  try {
    // For now, scanorepo is not published, so this will likely 404.
    // We'll mock it or handle the error gracefully.
    // Replace with actual package name if different.
    const pkgName = "scanorepo";
    const registryUrl = `https://registry.npmjs.org/${pkgName}/latest`;

    // specific timeout to avoid blocking CLI
    const response = await axios.get(registryUrl, { timeout: 1500 });
    const latestVersion = response.data.version;

    if (semver.gt(latestVersion, currentVersion)) {
      logger.warn(`
      \n*************************************************
      Update available: ${latestVersion} (current: ${currentVersion})
      Run: npm install -g ${pkgName}
      *************************************************\n`);
    }
  } catch (error) {
    // Silent fail or debug log
    // logger.error("Failed to check for updates.");
  }
};
