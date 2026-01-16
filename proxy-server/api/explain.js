const { Groq } = require("groq-sdk");

/**
 * Vercel Serverless Function implementation for ScanoRepo Proxy
 * Deploy this to Vercel as /api/explain
 */

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

module.exports = async (req, res) => {
  // 1. Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: "Prompt is required" });
  }

  try {
    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "system",
          content: "You are ScanoRepo AI. Provide concise developer insights.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 500,
    });

    const explanation =
      completion.choices[0]?.message?.content || "No explanation.";

    res.status(200).json({ explanation });
  } catch (error) {
    console.error("Groq Error:", error);
    res
      .status(500)
      .json({ message: "AI Generation Failed", error: error.message });
  }
};
