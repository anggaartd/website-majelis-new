
import { GoogleGenAI } from "@google/genai";

// Fix: Use process.env.API_KEY directly as required by the guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDailyReflection = async () => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Berikan satu kutipan hikmah islami singkat dalam bahasa Indonesia beserta penjelasannya untuk inspirasi harian di website majelis.",
      config: {
        temperature: 0.7,
      },
    });
    // Fix: Access .text property directly (not a method) as per SDK specifications
    return response.text;
  } catch (error) {
    console.error("Error fetching reflection:", error);
    return "Tetaplah bersyukur atas segala nikmat yang Allah berikan hari ini.";
  }
};
