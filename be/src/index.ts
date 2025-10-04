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
      const content = chunk.choices[0]?.delta?.content;

      if (typeof content === 'string') {
        process.stdout.write(content);
      }
    }
    console.log();
}

main();