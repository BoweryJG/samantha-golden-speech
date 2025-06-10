import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  IconButton,
  Fab,
  Zoom,
  Avatar,
  Chip,
  Fade,
  Button,
} from '@mui/material';
import {
  Chat,
  Send,
  Close,
  Psychology,
  QuestionAnswer,
  AttachMoney,
  CalendarMonth,
  ChildCare,
  Elderly,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  category?: string;
}

interface QuickQuestion {
  text: string;
  category: string;
  icon: React.ReactNode;
}

const quickQuestions: QuickQuestion[] = [
  { text: "Does insurance cover speech therapy?", category: "insurance", icon: <AttachMoney /> },
  { text: "What happens in the first session?", category: "evaluation", icon: <Psychology /> },
  { text: "How long does therapy take?", category: "duration", icon: <CalendarMonth /> },
  { text: "Is my child's speech delayed?", category: "pediatric", icon: <ChildCare /> },
  { text: "Help for stroke recovery?", category: "adult", icon: <Elderly /> },
];

const responses = {
  insurance: {
    default: "Most major insurance plans cover speech therapy when medically necessary. I accept Aetna, Cigna, Blue Cross Blue Shield, United Healthcare, and Medicare. I'll verify your benefits before our first session and explain any out-of-pocket costs. My self-pay rate is $150-200 per session.",
    medicare: "Yes, Medicare Part B covers speech therapy when ordered by a doctor. There's no limit on medically necessary sessions. You'll pay 20% after meeting your deductible.",
    private: "Private insurance typically covers 20-60 sessions per year. I'll handle the pre-authorization and help maximize your benefits.",
  },
  evaluation: {
    default: "Your first visit (60-90 minutes) includes: 1) Discussion of your concerns and goals, 2) Comprehensive assessment using standardized tests, 3) Informal observation during conversation or play, 4) Review of medical history, 5) Creation of a personalized treatment plan. You'll leave knowing exactly what we'll work on together.",
    child: "For children, I make the evaluation fun and play-based. Parents stay in the room. I'll assess speech sounds, language comprehension, vocabulary, and social communication through games and activities.",
    adult: "For adults, we'll assess your specific concerns - whether it's recovering speech after stroke, improving voice quality, or managing swallowing difficulties. The evaluation is conversational and comfortable.",
  },
  duration: {
    default: "Progress varies by individual, but typical timelines: Articulation (3-9 months), Language delays (6-12 months), Stuttering (3-6 months), Stroke recovery (6-24 months). We'll set realistic goals and track progress weekly.",
    factors: "Duration depends on: severity of the issue, frequency of sessions (1-2x weekly recommended), home practice, and individual factors. I provide regular progress updates.",
  },
  pediatric: {
    milestones: "Key milestones: 12 months (first words), 18 months (20+ words), 2 years (50+ words, 2-word phrases), 3 years (3-word sentences, understood by family), 4 years (complex sentences, understood by strangers). If your child is behind, early intervention makes a huge difference.",
    concerns: "Red flags: Not babbling by 9 months, no words by 16 months, not combining words by 2 years, hard to understand at 3+, frustrated when communicating, not responding to name.",
    process: "I specialize in making therapy fun! We use play, games, and your child's interests. Parent involvement is key - I'll teach you strategies to use at home.",
  },
  adult: {
    stroke: "I'm experienced in post-stroke rehabilitation including aphasia (language), dysarthria (speech clarity), and apraxia (motor planning). We'll work on functional communication for daily life.",
    conditions: "I treat: Parkinson's speech issues, voice disorders, accent modification, stuttering, cognitive-communication after brain injury, and swallowing difficulties.",
  },
  appointment: {
    default: "Scheduling is flexible! I offer morning, afternoon, and early evening slots. Sessions are typically 30-45 minutes for ongoing therapy. You can call (555) 123-4567 or use our online booking. I also offer teletherapy options.",
  },
  general: {
    credentials: "I'm Samantha Golden, CCC-SLP with 13+ years experience. I'm Clinical Specialist at Kessler Institute, ASHA certified, PROMPT trained, and VitalStim certified for swallowing therapy.",
    approach: "I believe in evidence-based, compassionate care tailored to each person's needs. We'll work as a team - you, me, and your family - to achieve your communication goals.",
  },
};

const SpeechTherapyChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm here to answer your speech therapy questions. What concerns bring you here today?",
      sender: 'bot',
      timestamp: new Date(),
      category: 'greeting',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [useAI, setUseAI] = useState(true); // Toggle between AI and local responses
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const determineResponse = (userInput: string): { response: string; category: string } => {
    const lowerInput = userInput.toLowerCase();
    
    // Insurance questions
    if (lowerInput.includes('insurance') || lowerInput.includes('cost') || lowerInput.includes('pay') || lowerInput.includes('covered')) {
      if (lowerInput.includes('medicare')) {
        return { response: responses.insurance.medicare, category: 'insurance' };
      }
      if (lowerInput.includes('private')) {
        return { response: responses.insurance.private, category: 'insurance' };
      }
      return { response: responses.insurance.default, category: 'insurance' };
    }
    
    // First session/evaluation questions
    if (lowerInput.includes('first') || lowerInput.includes('evaluation') || lowerInput.includes('assess') || lowerInput.includes('expect')) {
      if (lowerInput.includes('child') || lowerInput.includes('kid')) {
        return { response: responses.evaluation.child, category: 'evaluation' };
      }
      if (lowerInput.includes('adult') || lowerInput.includes('stroke')) {
        return { response: responses.evaluation.adult, category: 'evaluation' };
      }
      return { response: responses.evaluation.default, category: 'evaluation' };
    }
    
    // Duration questions
    if (lowerInput.includes('how long') || lowerInput.includes('duration') || lowerInput.includes('timeline')) {
      return { response: responses.duration.default, category: 'duration' };
    }
    
    // Pediatric concerns
    if (lowerInput.includes('child') || lowerInput.includes('toddler') || lowerInput.includes('delay') || lowerInput.includes('milestone')) {
      if (lowerInput.includes('milestone') || lowerInput.includes('age')) {
        return { response: responses.pediatric.milestones, category: 'pediatric' };
      }
      if (lowerInput.includes('concern') || lowerInput.includes('worry')) {
        return { response: responses.pediatric.concerns, category: 'pediatric' };
      }
      return { response: responses.pediatric.process, category: 'pediatric' };
    }
    
    // Adult/stroke questions
    if (lowerInput.includes('stroke') || lowerInput.includes('adult') || lowerInput.includes('aphasia')) {
      if (lowerInput.includes('stroke')) {
        return { response: responses.adult.stroke, category: 'adult' };
      }
      return { response: responses.adult.conditions, category: 'adult' };
    }
    
    // Appointment scheduling
    if (lowerInput.includes('appointment') || lowerInput.includes('schedule') || lowerInput.includes('book')) {
      return { response: responses.appointment.default, category: 'appointment' };
    }
    
    // Credentials
    if (lowerInput.includes('qualification') || lowerInput.includes('credential') || lowerInput.includes('experience')) {
      return { response: responses.general.credentials, category: 'general' };
    }
    
    // Default response
    return { 
      response: "I'd be happy to discuss that with you. Could you tell me more about your specific concerns? Are you asking about services for a child or adult? Feel free to ask about insurance coverage, what to expect in therapy, or any other questions!",
      category: 'general'
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    try {
      if (useAI && window.location.hostname !== 'localhost') {
        // Use AI via Netlify function
        const conversationHistory = newMessages.slice(-10).map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text,
        }));

        const response = await fetch('/.netlify/functions/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: input,
            conversationHistory,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to get AI response');
        }

        const data = await response.json();
        
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          sender: 'bot',
          timestamp: new Date(),
          category: 'ai',
        };

        setMessages(prev => [...prev, botMessage]);
      } else {
        // Fallback to local responses
        setTimeout(() => {
          const { response, category } = determineResponse(input);
          
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: response,
            sender: 'bot',
            timestamp: new Date(),
            category,
          };

          setMessages(prev => [...prev, botMessage]);
          setIsTyping(false);
        }, 1500);
      }
    } catch (error) {
      console.error('Chat error:', error);
      // Fallback to local response on error
      const { response, category } = determineResponse(input);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date(),
        category,
      };

      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickQuestion = async (question: QuickQuestion) => {
    setInput('');
    const userMessage: Message = {
      id: Date.now().toString(),
      text: question.text,
      sender: 'user',
      timestamp: new Date(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      if (useAI && window.location.hostname !== 'localhost') {
        const conversationHistory = newMessages.slice(-10).map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text,
        }));

        const response = await fetch('/.netlify/functions/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: question.text,
            conversationHistory,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to get AI response');
        }

        const data = await response.json();
        
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          sender: 'bot',
          timestamp: new Date(),
          category: question.category,
        };

        setMessages(prev => [...prev, botMessage]);
      } else {
        setTimeout(() => {
          const { response, category } = determineResponse(question.text);
          
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: response,
            sender: 'bot',
            timestamp: new Date(),
            category,
          };

          setMessages(prev => [...prev, botMessage]);
          setIsTyping(false);
        }, 1500);
      }
    } catch (error) {
      console.error('Chat error:', error);
      const { response, category } = determineResponse(question.text);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date(),
        category,
      };

      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <Zoom in={!isOpen}>
        <Fab
          variant="extended"
          color="secondary"
          aria-label="chat"
          onClick={() => setIsOpen(true)}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            background: 'linear-gradient(45deg, #EC4899 30%, #F687B3 90%)',
            boxShadow: '0 4px 20px rgba(236, 72, 153, 0.4)',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <QuestionAnswer sx={{ mr: 1 }} />
          Speech Therapy Questions?
        </Fab>
      </Zoom>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.3 }}
            transition={{ type: 'spring', duration: 0.5 }}
            style={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              zIndex: 1300,
            }}
          >
            <Paper
              elevation={10}
              sx={{
                width: { xs: '90vw', sm: 450 },
                height: { xs: '80vh', sm: 650 },
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 4,
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #6B46C1 0%, #9F7AEA 100%)',
                  color: 'white',
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    <Psychology />
                  </Avatar>
                  <Box>
                    <Typography variant="h6">Speech Therapy Assistant</Typography>
                    <Typography variant="caption" sx={{ opacity: 0.9 }}>
                      Get answers to your questions
                    </Typography>
                  </Box>
                </Box>
                <IconButton
                  onClick={() => setIsOpen(false)}
                  sx={{ color: 'white' }}
                >
                  <Close />
                </IconButton>
              </Box>

              {/* Quick Questions */}
              <Box sx={{ p: 2, backgroundColor: 'grey.50', borderBottom: 1, borderColor: 'divider' }}>
                <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block' }}>
                  Common Questions:
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {quickQuestions.map((q, index) => (
                    <Chip
                      key={index}
                      icon={q.icon}
                      label={q.text}
                      onClick={() => handleQuickQuestion(q)}
                      sx={{
                        cursor: 'pointer',
                        backgroundColor: 'white',
                        '&:hover': {
                          backgroundColor: 'primary.light',
                          color: 'white',
                        },
                      }}
                      size="small"
                    />
                  ))}
                </Box>
              </Box>

              {/* Messages */}
              <Box
                sx={{
                  flex: 1,
                  overflow: 'auto',
                  p: 2,
                  backgroundColor: 'background.default',
                }}
              >
                {messages.map((message) => (
                  <Fade in key={message.id}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          maxWidth: '80%',
                          p: 2,
                          borderRadius: 2,
                          backgroundColor:
                            message.sender === 'user'
                              ? 'primary.main'
                              : 'grey.100',
                          color:
                            message.sender === 'user'
                              ? 'white'
                              : 'text.primary',
                        }}
                      >
                        <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                          {message.text}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            display: 'block',
                            mt: 0.5,
                            opacity: 0.7,
                          }}
                        >
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </Typography>
                      </Box>
                    </Box>
                  </Fade>
                ))}
                
                {isTyping && (
                  <Box sx={{ display: 'flex', gap: 0.5, p: 2 }}>
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                        }}
                      />
                    </motion.div>
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                        }}
                      />
                    </motion.div>
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.4,
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                        }}
                      />
                    </motion.div>
                  </Box>
                )}
                <div ref={messagesEndRef} />
              </Box>

              {/* Call to Action */}
              <Box sx={{ p: 2, backgroundColor: 'primary.light', color: 'white' }}>
                <Typography variant="body2" sx={{ textAlign: 'center', mb: 1 }}>
                  Ready to schedule an evaluation?
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  startIcon={<CalendarMonth />}
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = '/appointment';
                  }}
                >
                  Book Consultation
                </Button>
              </Box>

              {/* Input */}
              <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <TextField
                    fullWidth
                    placeholder="Type your question..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    variant="outlined"
                    size="small"
                  />
                  <IconButton
                    color="primary"
                    onClick={handleSend}
                    disabled={!input.trim()}
                  >
                    <Send />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SpeechTherapyChatbot;