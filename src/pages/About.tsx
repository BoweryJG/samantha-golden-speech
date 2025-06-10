import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import {
  School,
  WorkspacePremium,
  Science,
  Psychology,
  Groups,
  ChildCare,
  Favorite,
  CheckCircle,
  BookmarkBorder,
} from '@mui/icons-material';

const About: React.FC = () => {
  const education = [
    {
      degree: 'Master of Science in Speech-Language Pathology',
      institution: 'Penn State University',
      year: '2010',
      details: 'Specialized in pediatric language development and adult neurogenic disorders',
    },
    {
      degree: 'Bachelor of Science in Communication Sciences and Disorders',
      institution: 'Penn State University',
      year: '2008',
      details: 'Cum Laude, Dean\'s List',
    },
  ];

  const certifications = [
    'ASHA Certificate of Clinical Competence in Speech-Language Pathology (CCC-SLP)',
    'Licensed Speech-Language Pathologist in New Jersey',
    'PROMPT Certified Therapist (Level 1 & 2)',
    'Hanen Program Certified: "It Takes Two to Talk"',
    'PECS (Picture Exchange Communication System) Certified',
    'VitalStim Dysphagia Therapy Certified',
  ];

  const specializations = [
    {
      icon: <ChildCare sx={{ color: 'primary.main' }} />,
      title: 'Pediatric Speech & Language',
      areas: ['Early Intervention (0-3)', 'Articulation Disorders', 'Language Development', 'Social Communication'],
    },
    {
      icon: <Psychology sx={{ color: 'primary.main' }} />,
      title: 'Adult Neurological Rehabilitation',
      areas: ['Stroke Recovery', 'Traumatic Brain Injury', 'Aphasia Therapy', 'Cognitive Communication'],
    },
    {
      icon: <Favorite sx={{ color: 'primary.main' }} />,
      title: 'Swallowing & Feeding',
      areas: ['Dysphagia Treatment', 'Pediatric Feeding', 'Oral Motor Therapy', 'NMES Therapy'],
    },
  ];

  const timeline = [
    {
      year: '2017-Present',
      title: 'Clinical Specialist SLP',
      description: 'Kessler Institute of Rehabilitation, West Orange, NJ - Treating complex medical cases, Lead SLP conducting trainings and audits',
    },
    {
      year: '2017-2022',
      title: 'Coach / Intake & Clinical Coordinator',
      description: 'Beyond BookSmart - Executive functioning support for all ages, promoted through multiple roles',
    },
    {
      year: '2017-2020',
      title: 'Per Diem SLP',
      description: 'Hoboken University Medical Center - Acute care services including ER, ICU, rehab units',
    },
    {
      year: '2013-2017',
      title: 'SLP, NeuroRehabilitation',
      description: 'Children\'s Specialized Hospital, Mountainside, NJ - Served pediatric brain injury population, supervised students',
    },
    {
      year: '2012-2013',
      title: 'Senior SLP',
      description: 'NYU Langone Medical Center – Gouverneur, NYC - Led transition for short-term rehab',
    },
    {
      year: '2011-2012',
      title: 'Speech Pathologist',
      description: 'Acuity Specialty Hospital, Atlantic City - Exclusive SLP in 30-bed facility, developed full-time caseload',
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
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                    mx: 'auto',
                    mb: 2,
                    border: '4px solid white',
                    fontSize: '4rem',
                    backgroundColor: 'secondary.light',
                    color: 'primary.dark',
                  }}
                >
                  SG
                </Avatar>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                  Samantha Golden
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  Speech-Language Pathologist, CCC-SLP
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h3" sx={{ fontWeight: 600, mb: 3 }}>
                Dedicated to Empowering Communication
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, lineHeight: 1.7 }}>
                "Communication is powerful and should be accessible to everybody. 
                I believe in building on individual strengths and creating a collaborative 
                partnership between provider and client to achieve meaningful goals."
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Chip
                  label="15+ Years Experience"
                  sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
                />
                <Chip
                  label="ASHA Certified"
                  sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
                />
                <Chip
                  label="Published Researcher"
                  sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Education Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, fontWeight: 600, color: 'primary.main' }}>
            Education & Training
          </Typography>
          <Grid container spacing={4}>
            {education.map((edu, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <School sx={{ color: 'primary.main', mr: 2, fontSize: 30 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                        {edu.year}
                      </Typography>
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary', mb: 2 }}>
                      {edu.institution}
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                      {edu.details}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Specializations Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, fontWeight: 600, color: 'primary.main' }}>
            Areas of Specialization
          </Typography>
          <Grid container spacing={4}>
            {specializations.map((spec, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                  <CardContent>
                    <Box sx={{ mb: 3 }}>
                      {React.cloneElement(spec.icon, { sx: { fontSize: 50, color: 'primary.main' } })}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                      {spec.title}
                    </Typography>
                    <List dense>
                      {spec.areas.map((area, idx) => (
                        <ListItem key={idx} sx={{ justifyContent: 'center', py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckCircle sx={{ color: 'secondary.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={area} 
                            sx={{ textAlign: 'left' }}
                            primaryTypographyProps={{ variant: 'body2' }}
                          />
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

      {/* Certifications Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, fontWeight: 600, color: 'primary.main' }}>
            Professional Certifications
          </Typography>
          <Grid container spacing={3}>
            {certifications.map((cert, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3,
                    },
                  }}
                >
                  <Box>
                    <WorkspacePremium sx={{ color: 'secondary.main', fontSize: 40, mb: 2 }} />
                    <Typography variant="body1" sx={{ fontWeight: 500, lineHeight: 1.5 }}>
                      {cert}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Professional Journey Timeline */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, fontWeight: 600, color: 'primary.main' }}>
            Professional Journey
          </Typography>
          <Timeline position="alternate">
            {timeline.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: 'primary.main', color: 'white', fontSize: '1.2rem' }}>
                    {item.year}
                  </TimelineDot>
                  {index < timeline.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {item.description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </Box>

      {/* Philosophy Section */}
      <Box sx={{ py: 8, backgroundColor: 'primary.main', color: 'white' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 600, mb: 4 }}>
            My Philosophy
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, fontStyle: 'italic', opacity: 0.9, lineHeight: 1.8 }}>
            "Every individual has unique strengths and challenges. My role is to understand 
            each person's communication needs and work collaboratively to unlock their potential. 
            Whether working with a toddler taking their first steps in language development 
            or an adult rebuilding communication skills after a stroke, I believe in 
            evidence-based practice delivered with compassion and respect."
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap', mt: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Groups sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Family-Centered</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Science sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Evidence-Based</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <BookmarkBorder sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Goal-Oriented</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;