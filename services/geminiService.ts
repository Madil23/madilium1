import { GoogleGenAI } from "@google/genai";

// FIX: Use process.env.API_KEY as per the guidelines. This resolves the 'import.meta.env' TypeScript error.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBio = async (jobTitle: string, keywords: string): Promise<string> => {
  if (!process.env.API_KEY) {
    console.warn("API Key is missing. Returning mock data.");
    return `Experienced ${jobTitle} passionate about ${keywords || 'innovation'}. Let's connect and build something great together.`;
  }

  try {
    const prompt = `
      Write a short, professional, and engaging social media bio (max 180 characters) for a person with the job title: "${jobTitle}".
      Key interests/vibes: ${keywords}.
      Do not include hashtags. Keep it first-person.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text?.trim() || "Digital professional connecting the world through technology.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return `Expert ${jobTitle} focused on ${keywords}. Ready to collaborate.`;
  }
};
