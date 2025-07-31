import readline from "readline";
import { Agent } from "alith";
 
const agent = new Agent({
  name: "A twitter agent",
  model: "gpt-4",
  preamble: "You are a automatic twitter agent.",
  mcpConfigPath: "mcp_twitter.json",
  apiKey: process.env.OPENAI_API_KEY,

});

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askTweet(){
    r1.question("enter your tweet: ", async (userInput) => {
        if (userInput.trim().toLowerCase() === "exit"){
            console.log("Exiting the tweet prompt.");
            r1.close();
            return;
        }

        try {
            const response = await agent.prompt(`Post a tweet saying "${userInput}"`);
            console.log("Tweet posted successfully:", response);
        } catch (error) {
            console.error("Error posting tweet:", error);
        }

        askTweet(); 
    });

}

console.log("Welcome to the Twitter Agent!");
askTweet();
