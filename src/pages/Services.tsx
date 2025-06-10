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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Button,
  Paper,
  Avatar,
} from '@mui/material';
import {
  ExpandMore,
  ChildCare,
  Psychology,
  Hearing,
  RecordVoiceOver,
  School,
  EmojiPeople,
  CheckCircle,
  Phone,
  AccessTime,
  Groups,
  Home,
  Computer,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const pediatricServices = [
    {
      title: 'Early Intervention (0-3 years)',
      description: 'Foundational communication skills development for infants and toddlers',
      conditions: [
        'Delayed first words or sentences',
        'Limited vocabulary development',
        'Difficulty following simple directions',
        'Challenges with social communication',
        'Feeding and oral motor difficulties',
      ],
      approaches: ['Play-based therapy', 'Parent coaching', 'Natural environment teaching'],
    },
    {
      title: 'Articulation & Phonology',
      description: 'Clear speech sound production and phonological pattern correction',
      conditions: [
        'Difficulty pronouncing specific sounds',
        'Unclear speech that\'s hard to understand',
        'Sound substitutions or omissions',
        'Phonological processing disorders',
        'Apraxia of speech',
      ],
      approaches: ['Traditional articulation therapy', 'Phonological awareness', 'PROMPT therapy'],
    },
    {
      title: 'Language Development',
      description: 'Comprehensive language skills including vocabulary, grammar, and comprehension',
      conditions: [
        'Delayed language milestones',
        'Difficulty expressing thoughts and ideas',
        'Problems understanding complex instructions',
        'Limited vocabulary growth',
        'Grammar and sentence structure challenges',
      ],
      approaches: ['Naturalistic language intervention', 'Structured language therapy', 'Literacy support'],
    },
    {
      title: 'Social Communication',
      description: 'Pragmatic language skills and social interaction development',
      conditions: [
        'Autism Spectrum Disorder',
        'Difficulty with conversation skills',
        'Challenges reading social cues',
        'Problems with peer interaction',
        'Nonverbal communication difficulties',
      ],
      approaches: ['Social stories', 'Video modeling', 'Peer interaction training'],
    },
  ];

  const adultServices = [
    {
      title: 'Stroke Rehabilitation',
      description: 'Comprehensive communication recovery following cerebrovascular accidents',
      conditions: [
        'Aphasia (language difficulties)',
        'Dysarthria (speech clarity)',
        'Apraxia of speech',
        'Cognitive-communication disorders',
        'Swallowing difficulties',
      ],
      approaches: ['Constraint-induced therapy', 'Melodic intonation therapy', 'Cognitive rehabilitation'],
    },
    {
      title: 'Traumatic Brain Injury',
      description: 'Rehabilitation of communication and cognitive skills after brain injury',
      conditions: [
        'Memory and attention deficits',
        'Executive function challenges',
        'Word-finding difficulties',
        'Social communication problems',
        'Problem-solving impairments',
      ],
      approaches: ['Cognitive rehabilitation', 'Compensatory strategies', 'Environmental modifications'],
    },
    {
      title: 'Voice Disorders',
      description: 'Treatment for vocal quality, pitch, and volume concerns',
      conditions: [
        'Vocal nodules or polyps',
        'Vocal cord paralysis',
        'Chronic hoarseness',
        'Professional voice concerns',
        'Transgender voice training',
      ],
      approaches: ['Vocal hygiene education', 'Resonant voice therapy', 'Accent modification'],
    },
    {
      title: 'Swallowing Therapy (Dysphagia)',
      description: 'Safe swallowing and feeding skill development',
      conditions: [
        'Difficulty swallowing liquids or solids',
        'Frequent choking or coughing while eating',
        'Weight loss due to eating difficulties',
        'Recurrent pneumonia',
        'Oral motor weakness',
      ],
      approaches: ['Swallowing exercises', 'Diet texture modifications', 'Compensatory strategies'],
    },
  ];

  const serviceOptions = [
    {
      icon: <Home sx={{ color: 'primary.main' }} />,
      title: 'In-Home Therapy',
      description: 'Convenient therapy in the comfort of your own home',
      benefits: ['Natural environment', 'Family participation', 'Flexible scheduling'],
    },
    {
      icon: <Computer sx={{ color: 'primary.main' }} />,
      title: 'Teletherapy',
      description: 'Secure online therapy sessions via HIPAA-compliant platform',
      benefits: ['Remote access', 'Reduced travel time', 'Interactive technology'],
    },
    {
      icon: <Groups sx={{ color: 'primary.main' }} />,
      title: 'Clinic-Based',
      description: 'Comprehensive therapy in our well-equipped clinic space',
      benefits: ['Specialized equipment', 'Focused environment', 'Resource access'],
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2E7D9A 0%, #5BA4C7 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 600, mb: 3 }}>
            Comprehensive Speech Therapy Services
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, mb: 4, maxWidth: 800, mx: 'auto' }}>
            Evidence-based treatment plans tailored to your unique communication needs,
            from early childhood through adulthood
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'secondary.main',
              color: 'black',
              px: 4,
              py: 1.5,
              '&:hover': { backgroundColor: 'secondary.dark' },
            }}
            startIcon={<Phone />}
            component={Link}
            to="/appointment"
          >
            Schedule Consultation
          </Button>
        </Container>
      </Box>

      {/* Service Delivery Options */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, fontWeight: 600, color: 'primary.main' }}>
            Flexible Service Options
          </Typography>
          <Grid container spacing={4}>
            {serviceOptions.map((option, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%', textAlign: 'center' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ mb: 3 }}>
                      {React.cloneElement(option.icon, { sx: { fontSize: 50 } })}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                      {option.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                      {option.description}
                    </Typography>
                    <List dense>
                      {option.benefits.map((benefit, idx) => (
                        <ListItem key={idx} sx={{ justifyContent: 'center' }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckCircle sx={{ color: 'secondary.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText primary={benefit} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pediatric Services */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <ChildCare sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h3" sx={{ fontWeight: 600, color: 'primary.main', mb: 2 }}>
              Pediatric Speech Therapy
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              Specialized care for infants, toddlers, children, and adolescents
              with communication and feeding challenges
            </Typography>
          </Box>
          
          <Grid container spacing={3}>
            {pediatricServices.map((service, index) => (
              <Grid item xs={12} key={index}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main' }}>
                      {service.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={6}>
                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                          {service.description}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                          Conditions Treated:
                        </Typography>
                        <List dense>
                          {service.conditions.map((condition, idx) => (
                            <ListItem key={idx}>
                              <ListItemIcon>
                                <CheckCircle sx={{ color: 'secondary.main', fontSize: 20 }} />
                              </ListItemIcon>
                              <ListItemText primary={condition} />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                          Treatment Approaches:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {service.approaches.map((approach, idx) => (
                            <Chip
                              key={idx}
                              label={approach}
                              sx={{ backgroundColor: 'primary.light', color: 'white' }}
                            />
                          ))}
                        </Box>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Adult Services */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Psychology sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h3" sx={{ fontWeight: 600, color: 'primary.main', mb: 2 }}>
              Adult Speech Therapy
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              Comprehensive rehabilitation services for adults with acquired
              communication and swallowing disorders
            </Typography>
          </Box>
          
          <Grid container spacing={3}>
            {adultServices.map((service, index) => (
              <Grid item xs={12} key={index}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main' }}>
                      {service.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={6}>
                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                          {service.description}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                          Conditions Treated:
                        </Typography>
                        <List dense>
                          {service.conditions.map((condition, idx) => (
                            <ListItem key={idx}>
                              <ListItemIcon>
                                <CheckCircle sx={{ color: 'secondary.main', fontSize: 20 }} />
                              </ListItemIcon>
                              <ListItemText primary={condition} />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                          Treatment Approaches:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {service.approaches.map((approach, idx) => (
                            <Chip
                              key={idx}
                              label={approach}
                              sx={{ backgroundColor: 'primary.light', color: 'white' }}
                            />
                          ))}
                        </Box>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process & What to Expect */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, fontWeight: 600, color: 'primary.main' }}>
            What to Expect
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                step: '1',
                title: 'Initial Consultation',
                description: 'Comprehensive assessment of communication and swallowing needs',
                icon: <EmojiPeople />,
              },
              {
                step: '2',
                title: 'Personalized Plan',
                description: 'Evidence-based treatment plan tailored to your specific goals',
                icon: <School />,
              },
              {
                step: '3',
                title: 'Regular Therapy',
                description: 'Ongoing sessions with progress monitoring and plan adjustments',
                icon: <AccessTime />,
              },
              {
                step: '4',
                title: 'Family Training',
                description: 'Home practice strategies and family member education',
                icon: <Groups />,
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ textAlign: 'center', height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        mx: 'auto',
                        mb: 2,
                        backgroundColor: 'primary.main',
                        fontSize: '1.5rem',
                      }}
                    >
                      {item.step}
                    </Avatar>
                    <Box sx={{ mb: 2 }}>
                      {React.cloneElement(item.icon, { sx: { fontSize: 40, color: 'secondary.main' } })}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 8,
          backgroundColor: 'primary.main',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 600 }}>
            Ready to Begin Your Communication Journey?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Every individual's path to better communication is unique. 
            Let's work together to create a plan that's right for you.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'secondary.main',
                color: 'black',
                px: 4,
                py: 1.5,
                '&:hover': { backgroundColor: 'secondary.dark' },
              }}
              startIcon={<Phone />}
              component={Link}
              to="/appointment"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                '&:hover': {
                  borderColor: 'secondary.light',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
              component={Link}
              to="/contact"
            >
              Ask Questions
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;