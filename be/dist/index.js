import * as dotenv from "dotenv";
import Perplexity from "@perplexity-ai/perplexity_ai";
dotenv.config();
async function main() {
    const client = new Perplexity();
    const completion = await client.chat.completions.create({
        messages: [
            {
                role: "user",
                content: "What is 2 + 2?",
            }
        ],
        model: "sonar",
    });
    const messageContent = completion.choices?.[0]?.message?.content;
    if (messageContent) {
        console.log(`Response: ${messageContent}`);
    }
    else {
        console.log("No response choice or content was received from the API.");
    }
}
main();
//# sourceMappingURL=index.js.map