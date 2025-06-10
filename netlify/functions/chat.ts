import { Handler } from '@netlify/functions';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

// Speech therapy context for the AI
const SYSTEM_PROMPT = `You are Samantha Golden's AI assistant, helping potential patients with speech therapy questions. Samantha is a Clinical Specialist SLP with 13+ years experience at Kessler Institute of Rehabilitation.

Key information to share:
- Insurance: Accepts Aetna, Cigna, BCBS, United Healthcare, Medicare. Self-pay $150-200/session
- First visit: 60-90 min evaluation including assessment, goals discussion, and treatment plan
- Specialties: Pediatric speech/language, adult stroke recovery, swallowing therapy, voice disorders
- Credentials: CCC-SLP, PROMPT trained, VitalStim certified
- Location: West Orange, NJ area
- Contact: (555) 123-4567

Be warm, professional, and helpful. Focus on addressing common patient concerns about insurance, evaluation process, treatment duration, and specific conditions. Always encourage scheduling a consultation for personalized assessment.`;

export const handler: Handler = async (event) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { message, conversationHistory = [] } = JSON.parse(event.body || '{}');

    if (!message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required' }),
      };
    }

    // Prepare messages for OpenRouter
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...conversationHistory.slice(-10), // Keep last 10 messages for context
      { role: 'user', content: message },
    ];

    // Call OpenRouter API
    const response = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://samantha-golden-speech.netlify.app',
        'X-Title': 'Samantha Golden Speech Therapy',
      },
      body: JSON.stringify({
        model: 'openai/gpt-4-turbo-preview',
        messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || 'I apologize, but I couldn\'t generate a response. Please try again.';

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        response: aiResponse,
        usage: data.usage,
      }),
    };
  } catch (error) {
    console.error('Chat function error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to process chat request',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
    };
  }
};