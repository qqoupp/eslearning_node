import { Request, Response } from 'express';
import { executeStreamPrompt } from '../service/LLMService';

export const generate = async (req: Request, res: Response) => {
  const prompt: string = req.body.prompt;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required.' });
  }

  try {
    const generationStream = await executeStreamPrompt(prompt);
    console.log('Generation stream:', generationStream);

    // Set the header to indicate a stream of text data
    res.setHeader('Content-Type', 'text/plain');

    for await (const part of generationStream) {
      if (part.choices && part.choices.length > 0 && part.choices[0].delta) {
        const text = part.choices[0].delta.content;

        if (text) {
          res.write(text);
        }
      }
    }
    res.end(); // End the response after the stream is fully consumed

  } catch (error) {
    console.error('Error generating text:', error);
    res.status(500).json({ error: 'Error generating text.' });
  }
};
