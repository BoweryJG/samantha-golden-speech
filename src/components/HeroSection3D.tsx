import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Phone, CalendarMonth } from '@mui/icons-material';
import SoundWaveVisualization from './SoundWaveVisualization';

const HeroSection3D: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%)',
      }}
    >
      {/* 3D Sound Wave Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <SoundWaveVisualization />
      </Box>

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box sx={{ color: 'white', py: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: 'secondary.light',
                letterSpacing: 3,
                fontSize: '1rem',
                fontWeight: 600,
              }}
            >
              Transformative Speech & Language Specialist
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
                lineHeight: 1.1,
                mb: 3,
                background: 'linear-gradient(45deg, #ffffff 30%, #F687B3 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Samantha Golden
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                opacity: 0.9,
                maxWidth: 600,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                lineHeight: 1.6,
              }}
            >
              Transforming lives through innovative speech therapy. 
              Clinical Specialist at Kessler Institute with 13+ years 
              of excellence in pediatric and adult rehabilitation.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<CalendarMonth />}
              sx={{
                background: 'linear-gradient(45deg, #EC4899 30%, #F687B3 90%)',
                color: 'white',
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                boxShadow: '0 4px 20px rgba(236, 72, 153, 0.4)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 30px rgba(236, 72, 153, 0.6)',
                },
              }}
            >
              Book Consultation
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                borderWidth: 2,
                '&:hover': {
                  borderColor: 'secondary.light',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Watch Success Stories
            </Button>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ marginTop: '3rem' }}
          >
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              {['ASHA Certified', 'NJ Licensed', 'PROMPT Trained', 'VitalStim Certified'].map(
                (badge, index) => (
                  <motion.div
                    key={badge}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    <Box
                      sx={{
                        px: 3,
                        py: 1.5,
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 50,
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {badge}
                      </Typography>
                    </Box>
                  </motion.div>
                )
              )}
            </Box>
          </motion.div>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Typography variant="body2" sx={{ color: 'white', opacity: 0.6 }}>
            Scroll to explore
          </Typography>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default HeroSection3D;