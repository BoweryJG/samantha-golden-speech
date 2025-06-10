import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  IconButton,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  ChildCare,
  Psychology,
  RecordVoiceOver,
  Restaurant,
  ArrowForward,
  Star,
} from '@mui/icons-material';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
  color: string;
}

const services: Service[] = [
  {
    icon: <ChildCare sx={{ fontSize: 50 }} />,
    title: 'Pediatric Excellence',
    description: 'Comprehensive speech and language therapy for children',
    features: [
      'Early intervention (0-3 years)',
      'School-age therapy',
      'Autism spectrum support',
      'Parent coaching included',
    ],
    price: '$150/session',
    popular: true,
    color: '#EC4899',
  },
  {
    icon: <Psychology sx={{ fontSize: 50 }} />,
    title: 'Adult Rehabilitation',
    description: 'Expert care for stroke, TBI, and neurological conditions',
    features: [
      'Aphasia therapy',
      'Cognitive rehabilitation',
      'Voice restoration',
      'Telehealth available',
    ],
    price: '$175/session',
    color: '#6B46C1',
  },
  {
    icon: <Restaurant sx={{ fontSize: 50 }} />,
    title: 'Swallowing Therapy',
    description: 'Specialized dysphagia treatment and feeding therapy',
    features: [
      'VitalStim certified',
      'FEES trained',
      'Diet modification',
      'Safety strategies',
    ],
    price: '$200/session',
    color: '#9F7AEA',
  },
  {
    icon: <RecordVoiceOver sx={{ fontSize: 50 }} />,
    title: 'Voice & Fluency',
    description: 'Professional voice therapy and stuttering treatment',
    features: [
      'Professional voice',
      'Gender-affirming voice',
      'Fluency shaping',
      'Accent modification',
    ],
    price: '$160/session',
    color: '#F687B3',
  },
];

const ServicesShowcase: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box
      ref={ref}
      sx={{
        py: 10,
        background: 'linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: -200,
          left: -200,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                letterSpacing: 3,
                fontSize: '0.9rem',
                fontWeight: 600,
              }}
            >
              Comprehensive Care
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                textAlign: 'center',
                background: 'linear-gradient(45deg, #6B46C1 30%, #EC4899 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Revolutionary Therapy Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                maxWidth: { xs: '100%', md: 600 },
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                px: { xs: 2, md: 0 },
                textAlign: 'center',
              }}
            >
              Cutting-edge techniques combined with compassionate care
              to unlock your communication potential
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ px: { xs: 2, md: 0 } }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    overflow: 'visible',
                    background: hoveredIndex === index
                      ? `linear-gradient(135deg, ${service.color}15 0%, ${service.color}05 100%)`
                      : 'white',
                    boxShadow: hoveredIndex === index
                      ? `0 20px 40px ${service.color}40`
                      : '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: service.color,
                      transform: hoveredIndex === index ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease',
                    },
                  }}
                >
                  {service.popular && (
                    <Chip
                      label="Most Popular"
                      icon={<Star sx={{ fontSize: 16 }} />}
                      sx={{
                        position: 'absolute',
                        top: -10,
                        right: 20,
                        background: 'linear-gradient(45deg, #FFD700 30%, #FFA000 90%)',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                  )}

                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Box
                      sx={{
                        width: { xs: 60, md: 80 },
                        height: { xs: 60, md: 80 },
                        borderRadius: '20px',
                        background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}10 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: { xs: 2, md: 3 },
                        transform: hoveredIndex === index ? 'rotate(10deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      {React.cloneElement(service.icon as React.ReactElement, {
                        sx: { fontSize: { xs: 30, md: 40 }, color: service.color },
                      })}
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: { xs: 1.5, md: 2 },
                        color: 'text.primary',
                        fontSize: { xs: '1.3rem', md: '1.5rem' },
                        textAlign: { xs: 'center', md: 'left' },
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mb: { xs: 2, md: 3 },
                        lineHeight: 1.6,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        textAlign: { xs: 'center', md: 'left' },
                      }}
                    >
                      {service.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      {service.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 1,
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              backgroundColor: service.color,
                              mr: 1.5,
                            }}
                          />
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        pt: 2,
                        borderTop: 1,
                        borderColor: 'divider',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: service.color,
                        }}
                      >
                        {service.price}
                      </Typography>
                      <IconButton
                        sx={{
                          backgroundColor: `${service.color}10`,
                          color: service.color,
                          '&:hover': {
                            backgroundColor: service.color,
                            color: 'white',
                            transform: 'translateX(4px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <ArrowForward />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesShowcase;