import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

export const executeStreamPrompt = async (prompt: string) => {
  const chat_gpt_temperature = 0.7;
  const chat_gpt_max_tokens = 10000;

  const stream = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-16k',
    stream: true,
    messages: [{ role: 'user', content: prompt }],
    max_tokens: chat_gpt_max_tokens,
    temperature: chat_gpt_temperature,
  });

  return stream;
};
