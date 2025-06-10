import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
  Chip,
  Alert,
} from '@mui/material';
import {
  ExpandMore,
  CheckCircle,
  Phone,
  Assignment,
  LocalHospital,
  AttachMoney,
  Info,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface InsuranceInfo {
  name: string;
  coverage: string;
  requirements: string[];
  cptCodes: string[];
  outOfPocket: string;
}

const insuranceProviders: InsuranceInfo[] = [
  {
    name: 'Aetna',
    coverage: 'Covers speech therapy when medically necessary. Typically 20-60 visits per year.',
    requirements: [
      'Physician referral may be required',
      'Pre-authorization for some plans',
      'Annual evaluation documentation',
    ],
    cptCodes: ['92507', '92508', '92526', '92610'],
    outOfPocket: 'Copay: $20-50 per session after deductible',
  },
  {
    name: 'Cigna',
    coverage: 'Comprehensive coverage for speech, language, and swallowing disorders.',
    requirements: [
      'Medical necessity documentation',
      'Progress reports every 10 sessions',
      'Treatment plan required',
    ],
    cptCodes: ['92507', '92508', '92520', '92526'],
    outOfPocket: 'Copay: $25-40 per session, deductible applies',
  },
  {
    name: 'Blue Cross Blue Shield',
    coverage: 'Coverage varies by plan. Most PPO plans include 30-60 annual visits.',
    requirements: [
      'Diagnosis from physician',
      'Periodic re-evaluations',
      'Goal-oriented treatment plan',
    ],
    cptCodes: ['92507', '92508', '92521', '92522'],
    outOfPocket: 'In-network: 20% coinsurance after deductible',
  },
  {
    name: 'United Healthcare',
    coverage: 'Speech therapy covered for developmental and acquired conditions.',
    requirements: [
      'Prior authorization for extended treatment',
      'Standardized assessment results',
      'Functional goals documentation',
    ],
    cptCodes: ['92507', '92508', '92523', '92524'],
    outOfPocket: 'Copay: $30-60 per session, varies by plan',
  },
  {
    name: 'Medicare',
    coverage: 'Part B covers medically necessary speech therapy. No visit limits since 2018.',
    requirements: [
      'Physician order required',
      'Functional improvement expected',
      'KX modifier for therapy cap exceptions',
    ],
    cptCodes: ['92507', '92508', '92610', '97129'],
    outOfPocket: '20% of Medicare-approved amount after Part B deductible',
  },
];

const InsuranceGuide: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true });
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: 10,
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
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
              Insurance & Billing
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
              Making Therapy Affordable
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              We handle insurance verification and billing so you can focus on healing
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
                Accepted Insurance Providers
              </Typography>
              
              {insuranceProviders.map((provider, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  sx={{
                    mb: 2,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    '&:hover': {
                      boxShadow: '0 8px 30px rgba(107, 70, 193, 0.12)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    sx={{
                      '& .MuiAccordionSummary-content': {
                        alignItems: 'center',
                      },
                    }}
                  >
                    <LocalHospital sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {provider.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {provider.coverage}
                      </Typography>
                      
                      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                        Requirements:
                      </Typography>
                      <List dense sx={{ mb: 2 }}>
                        {provider.requirements.map((req, idx) => (
                          <ListItem key={idx}>
                            <CheckCircle sx={{ fontSize: 18, color: 'success.main', mr: 1 }} />
                            <ListItemText primary={req} />
                          </ListItem>
                        ))}
                      </List>

                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                          Common CPT Codes:
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          {provider.cptCodes.map((code, idx) => (
                            <Chip
                              key={idx}
                              label={code}
                              size="small"
                              sx={{ backgroundColor: 'primary.light', color: 'white' }}
                            />
                          ))}
                        </Box>
                      </Box>

                      <Alert severity="info" icon={<AttachMoney />}>
                        <Typography variant="body2">
                          <strong>Typical out-of-pocket:</strong> {provider.outOfPocket}
                        </Typography>
                      </Alert>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              ))}

              <Card sx={{ mt: 4, p: 3, backgroundColor: 'primary.light' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, color: 'white', fontWeight: 700 }}>
                    Understanding CPT Codes for Speech Therapy
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" sx={{ color: 'white', mb: 1 }}>
                        <strong>92507:</strong> Treatment of speech, language, voice
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white', mb: 1 }}>
                        <strong>92508:</strong> Group treatment
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white', mb: 1 }}>
                        <strong>92521:</strong> Evaluation of speech fluency
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" sx={{ color: 'white', mb: 1 }}>
                        <strong>92610:</strong> Swallowing evaluation
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white', mb: 1 }}>
                        <strong>97129:</strong> Cognitive function intervention
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white', mb: 1 }}>
                        <strong>92526:</strong> Oral function for feeding
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card
                sx={{
                  p: 3,
                  mb: 3,
                  background: 'linear-gradient(135deg, #EC4899 0%, #F687B3 100%)',
                  color: 'white',
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                    Insurance Verification Service
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    We handle all insurance verification before your first visit:
                  </Typography>
                  <List dense>
                    <ListItem>
                      <CheckCircle sx={{ fontSize: 20, mr: 1 }} />
                      <ListItemText primary="Verify your benefits" />
                    </ListItem>
                    <ListItem>
                      <CheckCircle sx={{ fontSize: 20, mr: 1 }} />
                      <ListItemText primary="Check deductible status" />
                    </ListItem>
                    <ListItem>
                      <CheckCircle sx={{ fontSize: 20, mr: 1 }} />
                      <ListItemText primary="Confirm copay amounts" />
                    </ListItem>
                    <ListItem>
                      <CheckCircle sx={{ fontSize: 20, mr: 1 }} />
                      <ListItemText primary="Get pre-authorization" />
                    </ListItem>
                  </List>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<Phone />}
                    sx={{
                      mt: 2,
                      backgroundColor: 'white',
                      color: 'secondary.main',
                      '&:hover': {
                        backgroundColor: 'grey.100',
                      },
                    }}
                  >
                    Call for Verification
                  </Button>
                </CardContent>
              </Card>

              <Card sx={{ p: 3, mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                    Self-Pay Options
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    For those without insurance or preferring self-pay:
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 800 }}>
                      $150-200
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      per 45-minute session
                    </Typography>
                  </Box>
                  <List dense>
                    <ListItem>
                      <Info sx={{ fontSize: 20, mr: 1, color: 'primary.main' }} />
                      <ListItemText 
                        primary="Package discounts available"
                        secondary="Save 10% on 10-session packages"
                      />
                    </ListItem>
                    <ListItem>
                      <Info sx={{ fontSize: 20, mr: 1, color: 'primary.main' }} />
                      <ListItemText 
                        primary="HSA/FSA accepted"
                        secondary="Use pre-tax healthcare dollars"
                      />
                    </ListItem>
                    <ListItem>
                      <Info sx={{ fontSize: 20, mr: 1, color: 'primary.main' }} />
                      <ListItemText 
                        primary="Superbills provided"
                        secondary="Submit for out-of-network reimbursement"
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>

              <Alert severity="success" icon={<Assignment />}>
                <Typography variant="body2">
                  <strong>New for 2024:</strong> Medicare now covers caregiver training sessions 
                  without the patient present (CPT 97550)
                </Typography>
              </Alert>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InsuranceGuide;