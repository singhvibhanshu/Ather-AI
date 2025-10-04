import * as dotenv from "dotenv";
import Perplexity from "@perplexity-ai/perplexity_ai";

// Load environment variables from a .env file
dotenv.config();

// Main asynchronous function to run our application
async function main() {
  try {
    // Check if the API key is provided
    if (!process.env.PERPLEXITY_API_KEY) {
      throw new Error("PERPLEXITY_API_KEY is not set in the environment variables.");
    }

    const client = new Perplexity();

    console.log("Searching with Perplexity...");

    const search = await client.search.create({
      query: "latest news on artificial intelligence", // Added a sample query
      max_results: 3,
      max_tokens_per_page: 50
    });
    
    if (search.results && search.results.length > 0) {
      console.log("Search Results:");
      for (const result of search.results) {
        console.log(`- ${result.title}: ${result.url}`);
      }
    } else {
      console.log("No results found.");
    }

  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Execute the main function
main();