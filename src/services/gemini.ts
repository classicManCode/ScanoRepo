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
    const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    logger.error(`Gemini API Error: ${(error as any).message}`);
    return "Failed to generate AI explanation.";
  }
};
