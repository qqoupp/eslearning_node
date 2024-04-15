"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructionStream = exports.executeStreamPrompt = void 0;
const openai_1 = require("openai");
const openai = new openai_1.OpenAI({
    apiKey: process.env["OPENAI_API_KEY"],
});
const executeStreamPrompt = async (prompt) => {
    const chat_gpt_temperature = 0.7;
    const chat_gpt_max_tokens = 4096;
    const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0125",
        response_format: { type: "json_object" },
        stream: true,
        messages: [
            {
                role: "system",
                content: `Generate a JSON with each instruction grouped by the technology used. Generate at least 7 instructions for each technology. 
        Adhere to the following format:
        {
          "technologies": [
            {
              "name": "Technology 1",
              "instructions": [
                {
                  "instruction": "Instruction 1",
                  "description": "Description 1"
                },
                {
                  "instruction": "Instruction 2",
                  "description": "Description 2"
                }
              ]
            },
            {
              "name": "Technology 2",
              "instructions": [
                {
                  "instruction": "Instruction 1",
                  "description": "Description 1"
                },
                {
                  "instruction": "Instruction 2",
                  "description": "Description 2"
                }
              ]
            }
          ]
        }
      `,
            },
            { role: "user", content: prompt },
        ],
        max_tokens: chat_gpt_max_tokens,
        temperature: chat_gpt_temperature,
    });
    return stream;
};
exports.executeStreamPrompt = executeStreamPrompt;
const InstructionStream = async (prompt) => {
    const chat_gpt_temperature = 0.7;
    const chat_gpt_max_tokens = 4000;
    const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0125",
        response_format: { type: "json_object" },
        stream: true,
        messages: [
            {
                role: "system",
                content: `explain teh task using the following json format: 
        {
          "task": [
            {
              "step": "Step 1",
              "solution": "Solution "
              ]
            },
            
            {
              "step": "Step 2",
              "solution": "Solution "
              ]
            }
          ]
        }
      `,
            },
            { role: "user", content: prompt },
        ],
        max_tokens: chat_gpt_max_tokens,
        temperature: chat_gpt_temperature,
    });
    return stream;
};
exports.InstructionStream = InstructionStream;
//# sourceMappingURL=LLMService.js.map