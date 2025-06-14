import React, { useEffect, useState } from 'react';
import { Box, Container, useTheme } from '@mui/material';
import HeroSection3D from '../components/HeroSection3D';
import AnimatedStats from '../components/AnimatedStats';
import ServicesShowcase from '../components/ServicesShowcase';
import TestimonialVideos from '../components/TestimonialVideos';
import AnimatedBackground from '../components/AnimatedBackground';
import SpeechTherapyChatbot from '../components/SpeechTherapyChatbot';
import TreatmentApproaches from '../components/TreatmentApproaches';
import InsuranceGuide from '../components/InsuranceGuide';
import PediatricMilestones from '../components/PediatricMilestones';
import { motion } from 'framer-motion';

const HomeIconic: React.FC = () => {
  const theme = useTheme();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated Neural Network Background */}
      <AnimatedBackground />

      {/* 3D Hero Section */}
      <HeroSection3D />

      {/* Animated Statistics */}
      <motion.div
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <AnimatedStats />
      </motion.div>

      {/* Revolutionary Services Showcase */}
      <ServicesShowcase />

      {/* Evidence-Based Treatment Approaches */}
      <TreatmentApproaches />

      {/* Pediatric Milestones Guide */}
      <PediatricMilestones />

      {/* Video Testimonials Carousel */}
      <TestimonialVideos />

      {/* Insurance and Billing Guide */}
      <InsuranceGuide />

      {/* Interactive Features Banner */}
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #EC4899 0%, #F687B3 100%)',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                textAlign: 'center',
                color: 'white',
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Box
                  component="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                    fontWeight: 800,
                    mb: 2,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                  }}
                >
                  Experience the Future of Speech Therapy
                </Box>
              </motion.div>
              <Box
                component="p"
                sx={{
                  fontSize: '1.3rem',
                  maxWidth: 700,
                  mx: 'auto',
                  opacity: 0.95,
                }}
              >
                AI-powered assistance • Real-time progress tracking • 
                Virtual reality exercises • Personalized therapy plans
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Floating Elements */}
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          left: 20,
          transform: 'translateY(-50%)',
          zIndex: 100,
          display: { xs: 'none', md: 'block' },
        }}
      >
        {['01', '02', '03', '04', '05', '06', '07'].map((num, index) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + 1 }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '2px solid',
                borderColor: scrollY > index * 500 ? 'secondary.main' : 'grey.400',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor: scrollY > index * 500 ? 'secondary.main' : 'transparent',
                '&:hover': {
                  transform: 'scale(1.2)',
                  borderColor: 'secondary.main',
                },
              }}
              onClick={() => window.scrollTo({ top: index * 500, behavior: 'smooth' })}
            >
              <Box
                component="span"
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: scrollY > index * 500 ? 'black' : 'text.secondary',
                }}
              >
                {num}
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* Speech Therapy Chatbot */}
      <SpeechTherapyChatbot />

      {/* Parallax decoration elements */}
      <Box
        sx={{
          position: 'fixed',
          bottom: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107, 70, 193, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: `translateY(${-scrollY * 0.2}px)`,
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default HomeIconic;