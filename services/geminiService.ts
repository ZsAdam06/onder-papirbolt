
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const generateMarketingSlogan = async (productName: string): Promise<string> => {
  if (!process.env.API_KEY) return "Minőségi termék az Onder Papírbolttól.";
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Írj egy rövid, maximum 10 szavas figyelemfelkeltő marketing szlogent magyarul a következő papír-írószer termékhez: ${productName}`,
      config: {
        temperature: 0.7,
        topP: 0.8,
      }
    });
    
    return response.text?.trim() || "Minőségi választék minden napra.";
  } catch (error) {
    console.error("Gemini error:", error);
    return "Megbízható minőség, kedvező áron.";
  }
};
