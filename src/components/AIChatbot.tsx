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
} from '@mui/material';
import {
  Chat,
  Send,
  Close,
  SmartToy,
  Psychology,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const quickResponses = [
  "Tell me about services",
  "Schedule appointment",
  "Insurance accepted?",
  "Pediatric therapy",
];

const botResponses: { [key: string]: string } = {
  services: "Samantha offers comprehensive speech therapy services including pediatric speech development, adult rehabilitation, swallowing therapy, and voice disorders treatment. Each program is customized to individual needs.",
  appointment: "To schedule an appointment with Samantha, you can call (555) 123-4567 or use our online booking system. Initial consultations typically last 60-90 minutes.",
  insurance: "We accept most major insurance plans including Aetna, Cigna, Blue Cross Blue Shield, and Medicare. We also offer competitive self-pay rates.",
  pediatric: "Our pediatric services focus on early intervention, articulation disorders, language development, and social communication skills. We use play-based therapy techniques to keep children engaged.",
  default: "I'm here to help! You can ask me about our services, scheduling, insurance, or any other questions about speech therapy.",
};

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Samantha's AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let response = botResponses.default;

      if (lowerInput.includes('service')) {
        response = botResponses.services;
      } else if (lowerInput.includes('appointment') || lowerInput.includes('schedule')) {
        response = botResponses.appointment;
      } else if (lowerInput.includes('insurance')) {
        response = botResponses.insurance;
      } else if (lowerInput.includes('pediatric') || lowerInput.includes('child')) {
        response = botResponses.pediatric;
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickResponse = (text: string) => {
    setInput(text);
    handleSend();
  };

  return (
    <>
      {/* Floating Action Button */}
      <Zoom in={!isOpen}>
        <Fab
          color="primary"
          aria-label="chat"
          onClick={() => setIsOpen(true)}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            background: 'linear-gradient(45deg, #2E7D9A 30%, #5BA4C7 90%)',
            boxShadow: '0 4px 20px rgba(46, 125, 154, 0.4)',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <Chat />
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
                width: { xs: '90vw', sm: 400 },
                height: { xs: '70vh', sm: 600 },
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 4,
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #2E7D9A 0%, #5BA4C7 100%)',
                  color: 'white',
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    <SmartToy />
                  </Avatar>
                  <Box>
                    <Typography variant="h6">AI Assistant</Typography>
                    <Typography variant="caption" sx={{ opacity: 0.9 }}>
                      Powered by Advanced AI
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

              {/* Messages */}
              <Box
                sx={{
                  flex: 1,
                  overflow: 'auto',
                  p: 2,
                  backgroundColor: 'background.default',
                }}
              >
                {messages.map((message, index) => (
                  <Fade in key={message.id}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent:
                          message.sender === 'user' ? 'flex-end' : 'flex-start',
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          maxWidth: '70%',
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
                        <Typography variant="body2">{message.text}</Typography>
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

              {/* Quick Responses */}
              <Box sx={{ p: 1, borderTop: 1, borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto', pb: 1 }}>
                  {quickResponses.map((response) => (
                    <Chip
                      key={response}
                      label={response}
                      onClick={() => handleQuickResponse(response)}
                      sx={{
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: 'primary.light',
                          color: 'white',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Input */}
              <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <TextField
                    fullWidth
                    placeholder="Type your message..."
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

export default AIChatbot;