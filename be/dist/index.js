import * as dotenv from "dotenv";
import Perplexity from "@perplexity-ai/perplexity_ai";
dotenv.config();
async function main() {
    const client = new Perplexity();
    const stream = await client.chat.completions.create({
        model: "sonar",
        messages: [{ role: "user", content: "Create a TODO application" }],
        stream: true
    });
    for await (const chunk of stream) {
        // Get the content from the chunk
        const content = chunk.choices[0]?.delta?.content;
        // FIX: Check if the content is a string before trying to write it
        if (typeof content === 'string') {
            process.stdout.write(content);
        }
    }
    // Add a newline character at the end for clean output
    console.log();
}
main();
//# sourceMappingURL=index.js.map