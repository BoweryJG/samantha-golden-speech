import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  AutoAwesome,
  TrendingUp,
  Groups,
  Person,
  VideoCall,
  Psychology,
} from '@mui/icons-material';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Approach {
  title: string;
  description: string;
  techniques: string[];
  benefits: string[];
  ageGroups: string[];
  icon: React.ReactNode;
}

const approaches: Approach[] = [
  {
    title: 'Evidence-Based Pediatric Interventions',
    description: 'Using the latest research-backed methods including PROMPT (Prompts for Restructuring Oral Muscular Phonetic Targets) and play-based therapy techniques proven to accelerate speech development.',
    techniques: [
      'PROMPT tactile-kinesthetic approach',
      'Hanen Program parent coaching',
      'DIR/Floortime for autism',
      'Oral motor exercises',
      'AAC (Augmentative Alternative Communication)',
    ],
    benefits: [
      '80% improvement in articulation within 6 months',
      'Enhanced parent-child communication',
      'Reduced frustration and behavioral issues',
      'Improved school readiness',
    ],
    ageGroups: ['0-3 years', '3-5 years', '5-12 years'],
    icon: <Groups />,
  },
  {
    title: 'Intensive Aphasia Rehabilitation',
    description: 'Research shows intensive therapy (3-5 hours/week) produces superior outcomes for stroke survivors. We use constraint-induced language therapy and melodic intonation therapy.',
    techniques: [
      'Constraint-Induced Language Therapy (CILT)',
      'Melodic Intonation Therapy (MIT)',
      'Semantic Feature Analysis',
      'Script Training',
      'Technology-assisted practice',
    ],
    benefits: [
      'Faster language recovery post-stroke',
      'Improved functional communication',
      'Greater independence in daily activities',
      'Enhanced quality of life',
    ],
    ageGroups: ['Adults', 'Seniors'],
    icon: <Psychology />,
  },
  {
    title: 'VitalStim Dysphagia Treatment',
    description: 'FDA-cleared neuromuscular electrical stimulation combined with traditional swallowing exercises. Proven to restore swallowing function and reduce aspiration risk.',
    techniques: [
      'Neuromuscular electrical stimulation',
      'Surface EMG biofeedback',
      'Mendelsohn maneuver',
      'Shaker exercises',
      'Diet texture modification',
    ],
    benefits: [
      'Return to normal diet in 70% of patients',
      'Reduced risk of pneumonia',
      'Improved nutrition and hydration',
      'Enhanced quality of life',
    ],
    ageGroups: ['Adults', 'Seniors', 'Pediatric (select cases)'],
    icon: <AutoAwesome />,
  },
  {
    title: 'Telepractice Innovation',
    description: 'Research demonstrates telepractice effectiveness equals in-person therapy for many conditions. Perfect for busy families and those with transportation challenges.',
    techniques: [
      'Interactive digital activities',
      'Parent coaching via video',
      'Real-time progress monitoring',
      'Home program support',
      'Recorded session review',
    ],
    benefits: [
      'Greater therapy frequency',
      'Family involvement',
      'Reduced missed sessions',
      'Cost-effective care',
    ],
    ageGroups: ['All ages'],
    icon: <VideoCall />,
  },
];

const TreatmentApproaches: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true });

  return (
    <Box
      ref={ref}
      sx={{
        py: 10,
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                letterSpacing: 3,
                fontSize: '0.9rem',
                fontWeight: 600,
              }}
            >
              Evidence-Based Care
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(45deg, #6B46C1 30%, #EC4899 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Cutting-Edge Treatment Approaches
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Combining the latest research with 13+ years of clinical expertise
              to deliver transformative results
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {approaches.map((approach, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    overflow: 'visible',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    '&:hover': {
                      boxShadow: '0 20px 40px rgba(107, 70, 193, 0.15)',
                      transform: 'translateY(-5px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: 2,
                          background: 'linear-gradient(135deg, #6B46C1 0%, #9F7AEA 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                        }}
                      >
                        {React.cloneElement(approach.icon as React.ReactElement, {
                          sx: { fontSize: 30, color: 'white' },
                        })}
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, flex: 1 }}>
                        {approach.title}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.7 }}
                    >
                      {approach.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                        Key Techniques:
                      </Typography>
                      <List dense>
                        {approach.techniques.map((technique, idx) => (
                          <ListItem key={idx} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <CheckCircle sx={{ fontSize: 18, color: 'secondary.main' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={technique}
                              primaryTypographyProps={{
                                variant: 'body2',
                                color: 'text.secondary',
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                        Proven Benefits:
                      </Typography>
                      {approach.benefits.map((benefit, idx) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                          <TrendingUp sx={{ fontSize: 18, color: 'success.main', mr: 1, mt: 0.3 }} />
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {benefit}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {approach.ageGroups.map((age, idx) => (
                        <Chip
                          key={idx}
                          label={age}
                          size="small"
                          sx={{
                            backgroundColor: 'primary.light',
                            color: 'white',
                            fontWeight: 600,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Box
            sx={{
              mt: 8,
              p: 4,
              borderRadius: 4,
              background: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)',
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
              Success Rate Statistics
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={6} md={3}>
                <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 800 }}>
                  92%
                </Typography>
                <Typography variant="body2">
                  Patient satisfaction rate
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 800 }}>
                  85%
                </Typography>
                <Typography variant="body2">
                  Achieve goals within 6 months
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 800 }}>
                  3-5x
                </Typography>
                <Typography variant="body2">
                  Faster progress with intensive therapy
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 800 }}>
                  98%
                </Typography>
                <Typography variant="body2">
                  Would recommend to others
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TreatmentApproaches;