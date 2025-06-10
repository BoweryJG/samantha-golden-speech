import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Phone,
  ChildCare,
  School,
  Psychology,
  Hearing,
  RecordVoiceOver,
  Star,
  CheckCircle,
  Groups,
  Science,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      icon: <ChildCare sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Pediatric Speech Therapy',
      description: 'Early intervention and speech development for children',
      features: ['Articulation', 'Language Development', 'Social Communication'],
    },
    {
      icon: <Psychology sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Adult Speech Therapy',
      description: 'Rehabilitation for stroke survivors and brain injury patients',
      features: ['Aphasia Recovery', 'Cognitive Communication', 'Voice Disorders'],
    },
    {
      icon: <Hearing sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Swallowing Therapy',
      description: 'Dysphagia treatment for safe eating and drinking',
      features: ['Feeding Therapy', 'Oral Motor Skills', 'Safety Strategies'],
    },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Parent',
      content: 'Samantha helped my son find his voice. Her patience and expertise made all the difference in his speech development.',
      rating: 5,
    },
    {
      name: 'Robert K.',
      role: 'Stroke Survivor',
      content: 'After my stroke, I thought I\'d never speak clearly again. Samantha\'s therapy gave me hope and results.',
      rating: 5,
    },
    {
      name: 'Maria L.',
      role: 'Parent',
      content: 'Professional, caring, and incredibly knowledgeable. Our daughter loves her sessions with Samantha.',
      rating: 5,
    },
  ];

  const qualifications = [
    'Clinical Specialist SLP - Kessler Institute of Rehabilitation',
    'ASHA Certificate of Clinical Competence (CCC-SLP)',
    'Licensed Speech-Language Pathologist in New Jersey',
    '13+ Years of Clinical Experience',
    'Expertise in Acute Care & NeuroRehabilitation',
    'Pediatric Brain Injury Specialist',
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2E7D9A 0%, #5BA4C7 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 3 }}>
                <Chip
                  label="Licensed Speech-Language Pathologist"
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    mb: 2,
                  }}
                />
              </Box>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  background: 'linear-gradient(45deg, #ffffff 30%, #e3f2fd 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Empowering Communication,
                <br />
                Transforming Lives
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, lineHeight: 1.6 }}>
                Clinical Specialist providing expert speech and language therapy 
                for complex medical cases, pediatric brain injury, and acute care rehabilitation.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'secondary.main',
                    color: 'black',
                    py: 2,
                    px: 4,
                    fontSize: '1.1rem',
                    '&:hover': {
                      backgroundColor: 'secondary.dark',
                      transform: 'translateY(-2px)',
                    },
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
                    py: 2,
                    px: 4,
                    fontSize: '1.1rem',
                    '&:hover': {
                      borderColor: 'secondary.light',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                  component={Link}
                  to="/about"
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    width: { xs: 280, md: 350 },
                    height: { xs: 280, md: 350 },
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.1) 90%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255,255,255,0.3)',
                  }}
                >
                  <Avatar
                    sx={{
                      width: { xs: 240, md: 300 },
                      height: { xs: 240, md: 300 },
                      border: '4px solid white',
                      fontSize: '4rem',
                      backgroundColor: 'secondary.light',
                      color: 'primary.dark',
                    }}
                  >
                    SG
                  </Avatar>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Trust Indicators */}
      <Box sx={{ py: 4, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            {[
              { icon: <CheckCircle />, text: 'ASHA Certified' },
              { icon: <Groups />, text: '500+ Patients Helped' },
              { icon: <Science />, text: 'Evidence-Based' },
              { icon: <Star />, text: '13+ Years Experience' },
            ].map((item, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  {React.cloneElement(item.icon, { sx: { color: 'secondary.main' } })}
                  <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.secondary' }}>
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
              Comprehensive Speech Therapy Services
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              Personalized treatment plans designed to help you or your loved one
              achieve communication goals
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, textAlign: 'center', color: 'text.secondary' }}>
                      {service.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                      {service.features.map((feature, idx) => (
                        <Chip
                          key={idx}
                          label={feature}
                          size="small"
                          sx={{ backgroundColor: 'primary.light', color: 'white' }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/services"
              sx={{ px: 4 }}
            >
              View All Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
                About Samantha Golden
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.7 }}>
                "Communication is powerful and should be accessible to everybody. 
                I believe in a collaborative partnership between provider and client 
                to achieve meaningful communication goals."
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
                With over 13 years of clinical experience spanning acute care, pediatric brain injury, 
                and complex medical rehabilitation. Currently serving as Clinical Specialist SLP 
                at Kessler Institute of Rehabilitation, I'm dedicated to helping each client 
                reach their full potential through evidence-based therapy.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 4 }}>
                {qualifications.slice(0, 3).map((qual, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircle sx={{ color: 'secondary.main', fontSize: 20 }} />
                    <Typography variant="body2">{qual}</Typography>
                  </Box>
                ))}
              </Box>
              <Button
                variant="contained"
                component={Link}
                to="/about"
                sx={{ px: 4 }}
              >
                Learn More About Samantha
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
                  borderRadius: 4,
                  p: 4,
                  textAlign: 'center',
                  minHeight: 400,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary' }}>
                  Professional Photo Coming Soon
                </Typography>
                <Avatar
                  sx={{
                    width: 150,
                    height: 150,
                    mx: 'auto',
                    fontSize: '3rem',
                    backgroundColor: 'primary.main',
                  }}
                >
                  SG
                </Avatar>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
              What Families Say
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
              Real stories from real families
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%', p: 2 }}>
                  <CardContent>
                    <Box sx={{ mb: 2 }}>
                      <Rating value={testimonial.rating} readOnly />
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic', lineHeight: 1.7 }}>
                      "{testimonial.content}"
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {testimonial.role}
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
            Ready to Start Your Communication Journey?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Schedule a consultation to discuss your specific needs and goals
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
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;