import axios from "axios";
import * as dotenv from "dotenv";
import path from "path";
import { logger } from "../utils/logger";

// Load .env from the ScanoRepo installation directory (for developer testing)
dotenv.config({ path: path.join(__dirname, "../../.env") });

// ⚠️ YOUR PROXY SERVER URL (e.g. your Vercel deployment URL)
const PROXY_SERVER_URL = "https://scano-repo.vercel.app/api/explain";

/**
 * Generate an AI explanation by calling a secure proxy server.
 * This ensures the Groq API key is NEVER exposed to the client terminal.
 */
export const generateExplanation = async (prompt: string): Promise<string> => {
  try {
    // 1. Check if user provided their own key (local override)
    const localApiKey = process.env.GROQ_API_KEY;

    if (localApiKey) {
      // If developer has a local key, we could use Groq SDK directly,
      // but for consistency we'll use the proxy or prompt them.
      // To keep it simple and secure, we'll try the proxy first.
    }

    const response = await axios.post(PROXY_SERVER_URL, {
      prompt: prompt,
      // You could add an optional secret key here to prevent unauthorized API use
      token: "optional-cli-secret",
    });

    return response.data.explanation || "No explanation generated.";
  } catch (error: any) {
    if (error.response) {
      // Server responded with an error status
      logger.error(
        `AI Proxy Error: ${error.response.data.message || "Server error"}`,
      );
    } else {
      // Network error or timeout
      logger.error(`AI Proxy Connection failed. Ensure you are online.`);
    }
    return "Failed to generate AI explanation.";
  }
};
