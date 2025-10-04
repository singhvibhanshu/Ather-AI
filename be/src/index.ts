import * as dotenv from "dotenv";
import Perplexity from "@perplexity-ai/perplexity_ai";

dotenv.config();

async function main() {
    
    const client = new Perplexity();

    const search = await client.search.create({
      query: "",
      max_results: 3,
      max_tokens_per_page: 50
    });
    
    for (const result of search.results) {
        console.log(`- ${result.title}: ${result.url}`);
    }
}

main();