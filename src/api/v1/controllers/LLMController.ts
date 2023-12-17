import { Request, Response } from "express";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});
require("dotenv").config();

export const generate = async (req: Request, res: Response): Promise<void> => {
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Format output using HTML",
        },
        {
          role: "user",
          content: "Explain what are the best steps to learn react",
        },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 1500,
    });

    const message = chatCompletion.choices[0].message.content;

    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error });
  }
};
