# AI Chatbot Setup Instructions

The website includes an AI-powered chatbot that uses OpenRouter to provide intelligent responses to patient questions about speech therapy.

## Setting up the OpenRouter API Key in Netlify

1. **Log into Netlify**
   - Go to https://app.netlify.com
   - Navigate to your site: `samantha-golden-speech`

2. **Add Environment Variable**
   - Go to Site Settings → Environment Variables
   - Click "Add a variable"
   - Add the following:
     - Key: `OPENROUTER_API_KEY`
     - Value: `[Your OpenRouter API key - provided separately]`
     - Scopes: Select all deploy contexts

3. **Redeploy the Site**
   - Go to Deploys tab
   - Click "Trigger deploy" → "Deploy site"
   - The chatbot will now use GPT-4 for responses

## How the Chatbot Works

The chatbot has two modes:
1. **Local Mode** (development/fallback): Uses pre-programmed responses
2. **AI Mode** (production): Uses GPT-4 via OpenRouter for intelligent, contextual responses

The AI is specifically trained with:
- Samantha's credentials and experience
- Common patient questions about insurance, evaluations, and therapy
- Professional speech therapy knowledge
- Warm, helpful communication style

## Features

- **Smart Quick Questions**: Common patient concerns as clickable chips
- **Contextual Responses**: AI understands and responds to complex questions
- **Conversation Memory**: Maintains context throughout the chat
- **Professional Focus**: Trained specifically for speech therapy inquiries
- **Fallback System**: Uses local responses if AI is unavailable

## Cost Management

- OpenRouter charges per token (approximately $0.01-0.02 per response)
- The system limits responses to 500 tokens
- Conversation history is limited to last 10 messages
- Monitor usage in OpenRouter dashboard: https://openrouter.ai/dashboard

## Testing

Once deployed with the API key:
1. Visit the live site
2. Click "Speech Therapy Questions?" button
3. Try questions like:
   - "Does insurance cover speech therapy?"
   - "What happens in an evaluation?"
   - "My child is 3 and not speaking clearly"
   - "I had a stroke and need help"

The AI will provide personalized, professional responses while encouraging users to schedule a consultation.