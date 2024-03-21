"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const LLMService_1 = require("../service/LLMService");
const generate = async (req, res) => {
    const prompt = req.body.prompt;
    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required.' });
    }
    try {
        const generationStream = await (0, LLMService_1.executeStreamPrompt)(prompt);
        console.log('Generation stream:', generationStream);
        // Set the header to indicate a stream of text data
        res.setHeader('Content-Type', 'text/plain');
        for await (const part of generationStream) {
            if (part.choices && part.choices.length > 0 && part.choices[0].delta) {
                // If the 'delta' object contains a 'text' property with the generated content
                const text = part.choices[0].delta.content;
                // Or if the 'delta' object contains a 'content' property with the generated content
                // const text = part.choices[0].delta.content;
                if (text) {
                    res.write(text);
                }
            }
        }
        res.end(); // End the response after the stream is fully consumed
    }
    catch (error) {
        console.error('Error generating text:', error);
        res.status(500).json({ error: 'Error generating text.' });
    }
};
exports.generate = generate;
//# sourceMappingURL=LLMController.js.map