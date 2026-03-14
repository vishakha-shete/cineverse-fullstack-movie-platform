import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GOOGLE_GENAI_API_KEY,
});

const model = "gemini-2.0-flash";

export async function getAIRecommendation(prompt) {
    try {

        const response = await ai.models.generateContent({
            model,
            contents: [
                {
                    role: "user",
                    parts: [{ text: prompt }],
                },
            ],
        });

        const text =
            response?.candidates?.[0]?.content?.parts?.[0]?.text || null;

        return text;

    } catch (error) {

        console.log("AI Error:", error);
        return null;
    }
}