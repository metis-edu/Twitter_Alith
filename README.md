# Twitter Agent with Alith

A Node.js application that uses the Alith framework to create an intelligent Twitter agent capable of posting tweets, retrieving tweets, and interacting with other AI models like Grok.

## Features

- **Automatic Tweet Posting**: Post tweets programmatically using natural language prompts
- **Tweet Retrieval**: Get the latest tweets from specific Twitter accounts
- **Natural Language Interface**: Use simple prompts to control Twitter actions

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Twitter account credentials
- OpenAI API key

## Installation & Setup

### Step 1: Install Dependencies

```bash
npm install alith
```

### Step 2: Configure Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

**Note**: You'll need to obtain an OpenAI API key from [OpenAI's platform](https://platform.openai.com/api-keys).

### Step 3: Configure Twitter Credentials

The application uses Twitter credentials stored in `mcp_twitter.json`. Make sure this file contains your Twitter account information:

```json
{
  "mcpServers": {
    "agent-twitter-client-mcp": {
      "command": "npx",
      "args": ["-y", "agent-twitter-client-mcp"],
      "env": {
        "AUTH_METHOD": "credentials",
        "TWITTER_USERNAME": "your_twitter_username",
        "TWITTER_PASSWORD": "your_twitter_password",
        "TWITTER_EMAIL": "your_twitter_email"
      }
    }
  }
}
```

**Important**: Replace the placeholder values with your actual Twitter credentials.

### Step 4: Run the Agent

```bash
node index.js
```

## How It Works

The application creates an Alith agent with the following capabilities:

1. **Tweet Posting**: The agent can post tweets using natural language prompts
2. **Tweet Retrieval**: Fetch the latest tweets from specified accounts
3. **AI Integration**: Chat with Grok AI for advanced AI interactions

### Example Actions

The agent performs these actions automatically:

1. Posts a demo tweet: "Hello from Alith Twitter Agent in demo!"
2. Retrieves the latest tweets from @OpenAI
3. Initiates a conversation with Grok about quantum computing

## Project Structure

```
llp/
├── index.js              # Main application file
├── mcp_twitter.json      # Twitter MCP configuration
├── package.json          # Node.js dependencies
├── combined.log          # Combined application logs
├── error.log            # Error logs
└── llm_logs/            # LLM interaction logs
```

## Configuration Files

### mcp_twitter.json
Contains the Twitter MCP (Model Context Protocol) server configuration with authentication credentials.

### Environment Variables
- `OPENAI_API_KEY`: Required for GPT-4 model access

## Logging

The application generates several log files:
- `combined.log`: General application logs
- `error.log`: Error-specific logs
- `llm_logs/`: Detailed logs of LLM interactions

## Security Notes

⚠️ **Important Security Considerations**:

1. **Never commit credentials**: The `mcp_twitter.json` file contains sensitive Twitter credentials. Add it to `.gitignore` to prevent accidental commits.

2. **Environment Variables**: Store your OpenAI API key in environment variables, not in the code.

3. **Credential Rotation**: Regularly update your Twitter credentials for security.

## Troubleshooting

### Common Issues

1. **"Module not found" errors**: Ensure you've run `npm install alith`
2. **Authentication errors**: Verify your Twitter credentials in `mcp_twitter.json`
3. **API key errors**: Check that your `OPENAI_API_KEY` environment variable is set correctly

### Getting Help

If you encounter issues:
1. Check the log files for detailed error messages
2. Verify all environment variables are set correctly
3. Ensure your Twitter credentials are valid and up-to-date
