import Groq from "groq-sdk";
import * as dotenv from "dotenv";
import path from "path";
import { logger } from "../utils/logger";

// Load .env from the ScanoRepo installation directory (not the target project)
dotenv.config({ path: path.join(__dirname, "../../.env") });

// API key can come from: 1) System env var, 2) ScanoRepo's .env file
const apiKey = process.env.GROQ_API_KEY;

if (!apiKey) {
  logger.warn(
    "Warning: GROQ_API_KEY is not set in environment variables. AI features will not work.",
  );
}

const groq = apiKey ? new Groq({ apiKey }) : null;

/**
 * Generate an AI explanation using Groq's fast inference.
 * Uses the openai/gpt-oss-120b model for high-quality responses.
 */
export const generateExplanation = async (prompt: string): Promise<string> => {
  if (!groq) return "AI features disabled: Missing API Key.";

  try {
    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that provides concise, developer-friendly explanations about code, dependencies, and project configurations. Keep responses brief and actionable.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 500,
    });

    return (
      completion.choices[0]?.message?.content || "No explanation generated."
    );
  } catch (error) {
    logger.error(`Groq API Error: ${(error as any).message}`);
    return "Failed to generate AI explanation.";
  }
};
