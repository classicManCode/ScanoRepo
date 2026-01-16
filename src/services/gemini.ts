import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";
import { logger } from "../utils/logger";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  logger.warn(
    "Warning: GEMINI_API_KEY is not set in environment variables. AI features will not work."
  );
}

const client = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateExplanation = async (prompt: string): Promise<string> => {
  if (!client) return "AI features disabled: Missing API Key.";

  try {
    const result = await client.models.generateContent({
      model: "gemini-1.5-flash-001",
      contents: prompt,
    });
    // The new SDK exposes text as a getter property, not a method
    return result.text || "No explanation generated.";
  } catch (error) {
    logger.error(`Gemini API Error: ${(error as any).message}`);
    return "Failed to generate AI explanation.";
  }
};
