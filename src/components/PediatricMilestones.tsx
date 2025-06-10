import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
  Alert,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  ChildCare,
  Warning,
  CheckCircle,
  School,
  EmojiPeople,
  Face,
  CalendarMonth,
  TipsAndUpdates,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Milestone {
  age: string;
  skills: string[];
  redFlags: string[];
  icon: React.ReactNode;
  color: string;
}

const milestones: Milestone[] = [
  {
    age: '0-6 Months',
    skills: [
      'Coos and makes pleasure sounds',
      'Cries differently for different needs',
      'Smiles when spoken to',
      'Recognizes familiar voices',
      'Quiets or smiles in response to sound',
    ],
    redFlags: [
      'No reaction to loud sounds',
      'No smiling by 3 months',
      'Limited eye contact',
      'No cooing or babbling',
    ],
    icon: <Face />,
    color: '#FF6B6B',
  },
  {
    age: '6-12 Months',
    skills: [
      'Babbles with consonants (ba-ba, da-da)',
      'Responds to name',
      'Understands "no"',
      'Waves bye-bye',
      'Says first words (10-14 months)',
    ],
    redFlags: [
      'No babbling by 9 months',
      'Doesn\'t respond to name',
      'No gestures (pointing, waving)',
      'Loss of previously acquired skills',
    ],
    icon: <ChildCare />,
    color: '#4ECDC4',
  },
  {
    age: '12-18 Months',
    skills: [
      'Says 3-20 words',
      'Points to objects',
      'Follows simple commands',
      'Uses gestures with words',
      'Identifies body parts',
    ],
    redFlags: [
      'No words by 16 months',
      'Doesn\'t point to show interest',
      'No imitation of sounds or actions',
      'Limited understanding of simple words',
    ],
    icon: <EmojiPeople />,
    color: '#45B7D1',
  },
  {
    age: '18-24 Months',
    skills: [
      'Vocabulary of 50+ words',
      'Combines 2 words ("more milk")',
      'Names familiar objects',
      'Uses pronouns (me, mine)',
      'Speech 25-50% intelligible to strangers',
    ],
    redFlags: [
      'Fewer than 20 words by 18 months',
      'No 2-word phrases by 24 months',
      'Mostly uses gestures instead of words',
      'Difficulty following simple instructions',
    ],
    icon: <School />,
    color: '#F7B731',
  },
  {
    age: '2-3 Years',
    skills: [
      'Uses 3-4 word sentences',
      'Vocabulary of 200-1000 words',
      'Asks "what" and "where" questions',
      'Speech 50-75% intelligible',
      'Uses plurals and past tense',
    ],
    redFlags: [
      'Speech less than 50% understandable',
      'No 3-word sentences',
      'Extreme frustration when communicating',
      'Limited vocabulary growth',
    ],
    icon: <School />,
    color: '#5F27CD',
  },
  {
    age: '3-4 Years',
    skills: [
      'Tells stories with 4-5 sentences',
      'Masters most speech sounds',
      'Asks "why" questions constantly',
      'Speech 75-100% intelligible',
      'Understands concepts (big/small, in/out)',
    ],
    redFlags: [
      'Strangers can\'t understand child',
      'Doesn\'t ask questions',
      'Can\'t retell simple stories',
      'Difficulty with peer interaction',
    ],
    icon: <School />,
    color: '#00D2D3',
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
};

const PediatricMilestones: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true });
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: 10,
        background: 'linear-gradient(180deg, #ffffff 0%, #FFF8DC 100%)',
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
              Early Intervention
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
              Speech & Language Milestones
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
              Track your child's development and know when to seek help
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
              <Card sx={{ p: 3, mb: 4 }}>
                <CardContent>
                  <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{ mb: 3 }}
                  >
                    {milestones.map((milestone, index) => (
                      <Tab
                        key={index}
                        label={milestone.age}
                        icon={milestone.icon}
                        iconPosition="start"
                      />
                    ))}
                  </Tabs>

                  <AnimatePresence mode="wait">
                    {milestones.map((milestone, index) => (
                      <TabPanel key={index} value={activeTab} index={index}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                              <Box
                                sx={{
                                  p: 3,
                                  borderRadius: 2,
                                  backgroundColor: `${milestone.color}15`,
                                  border: `2px solid ${milestone.color}30`,
                                }}
                              >
                                <Typography
                                  variant="h6"
                                  sx={{ mb: 2, fontWeight: 700, color: milestone.color }}
                                >
                                  Expected Skills
                                </Typography>
                                <List dense>
                                  {milestone.skills.map((skill, idx) => (
                                    <ListItem key={idx}>
                                      <ListItemIcon>
                                        <CheckCircle sx={{ color: 'success.main', fontSize: 20 }} />
                                      </ListItemIcon>
                                      <ListItemText primary={skill} />
                                    </ListItem>
                                  ))}
                                </List>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box
                                sx={{
                                  p: 3,
                                  borderRadius: 2,
                                  backgroundColor: 'error.light',
                                  border: '2px solid',
                                  borderColor: 'error.main',
                                }}
                              >
                                <Typography
                                  variant="h6"
                                  sx={{ mb: 2, fontWeight: 700, color: 'error.main' }}
                                >
                                  Red Flags
                                </Typography>
                                <List dense>
                                  {milestone.redFlags.map((flag, idx) => (
                                    <ListItem key={idx}>
                                      <ListItemIcon>
                                        <Warning sx={{ color: 'error.main', fontSize: 20 }} />
                                      </ListItemIcon>
                                      <ListItemText primary={flag} />
                                    </ListItem>
                                  ))}
                                </List>
                              </Box>
                            </Grid>
                          </Grid>
                        </motion.div>
                      </TabPanel>
                    ))}
                  </AnimatePresence>
                </CardContent>
              </Card>

              <Alert
                severity="info"
                icon={<TipsAndUpdates />}
                sx={{ mb: 4 }}
              >
                <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                  Remember: Every child develops differently!
                </Typography>
                <Typography variant="body2">
                  These milestones are guidelines. Some children may reach them earlier or later. 
                  If you have concerns, trust your instincts and seek professional evaluation. 
                  Early intervention leads to better outcomes!
                </Typography>
              </Alert>
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
                  background: 'linear-gradient(135deg, #6B46C1 0%, #9F7AEA 100%)',
                  color: 'white',
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                    When to Seek Help
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Don't wait if you notice:
                  </Typography>
                  <List dense>
                    <ListItem>
                      <Warning sx={{ fontSize: 20, mr: 1 }} />
                      <ListItemText primary="Any loss of skills at any age" />
                    </ListItem>
                    <ListItem>
                      <Warning sx={{ fontSize: 20, mr: 1 }} />
                      <ListItemText primary="No babbling by 12 months" />
                    </ListItem>
                    <ListItem>
                      <Warning sx={{ fontSize: 20, mr: 1 }} />
                      <ListItemText primary="No words by 16 months" />
                    </ListItem>
                    <ListItem>
                      <Warning sx={{ fontSize: 20, mr: 1 }} />
                      <ListItemText primary="No 2-word phrases by 24 months" />
                    </ListItem>
                    <ListItem>
                      <Warning sx={{ fontSize: 20, mr: 1 }} />
                      <ListItemText primary="Speech unclear to family at 3 years" />
                    </ListItem>
                  </List>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<CalendarMonth />}
                    sx={{
                      mt: 2,
                      backgroundColor: 'white',
                      color: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'grey.100',
                      },
                    }}
                  >
                    Schedule Evaluation
                  </Button>
                </CardContent>
              </Card>

              <Card sx={{ p: 3 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                    Early Intervention Benefits
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 800 }}>
                      5x
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      More effective than waiting
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Research shows children who receive early intervention:
                  </Typography>
                  <List dense>
                    <ListItem>
                      <CheckCircle sx={{ fontSize: 20, mr: 1, color: 'success.main' }} />
                      <ListItemText primary="Catch up to peers faster" />
                    </ListItem>
                    <ListItem>
                      <CheckCircle sx={{ fontSize: 20, mr: 1, color: 'success.main' }} />
                      <ListItemText primary="Need less therapy overall" />
                    </ListItem>
                    <ListItem>
                      <CheckCircle sx={{ fontSize: 20, mr: 1, color: 'success.main' }} />
                      <ListItemText primary="Have better academic outcomes" />
                    </ListItem>
                    <ListItem>
                      <CheckCircle sx={{ fontSize: 20, mr: 1, color: 'success.main' }} />
                      <ListItemText primary="Experience less frustration" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PediatricMilestones;