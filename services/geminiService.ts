
import { GoogleGenAI, Type } from "@google/genai";
import { AIAnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getArchitectureInsights = async (prompt: string): Promise<AIAnalysisResult> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING, description: "Executive summary of the architecture insight" },
            riskScore: { type: Type.NUMBER, description: "Risk level from 1 to 100" },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Actionable recommendations for the architect"
            }
          },
          propertyOrdering: ["summary", "riskScore", "recommendations"]
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return {
      summary: result.summary || "No summary provided.",
      riskScore: result.riskScore || 0,
      recommendations: result.recommendations || []
    };
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      summary: "Error generating insights. Please check your configuration.",
      riskScore: 0,
      recommendations: []
    };
  }
};

export const generateArtifactDescription = async (artifactName: string, layer: string): Promise<string> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Write a professional enterprise architecture description for a ${layer} artifact named "${artifactName}". Focus on its strategic value and technical purpose.`
  });
  return response.text || "";
};
