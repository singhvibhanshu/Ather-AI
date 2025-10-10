import * as dotenv from "dotenv";
import Perplexity from "@perplexity-ai/perplexity_ai";

dotenv.config();

async function main() {
    
    const client = new Perplexity();

    const stream = await client.chat.completions.create({
      model: "sonar",
      messages: [{ role: "user", content: "For all designs I ask you to make, have them be beautiful, not cookie cutter. Make webpages that are fully featured and worthy for production.\n\nBy default, this template supports JSX syntax with Tailwind CSS classes, React hooks, and Lucide React for icons. Do not install other packages for UI themes, icons, etc unless absolutely necessary or I request them.\n\nUse icons from lucide-react for logos.\n\n"}  ,
        { role: "user", content: ""} ,
        { role: "user", content: "Create a TODO application"
       }],
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