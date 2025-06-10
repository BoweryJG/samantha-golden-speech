import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
  Select,
  MenuItem,
  InputLabel,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Alert,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  AccessTime,
  Send,
  ChildCare,
  Psychology,
  Hearing,
  Schedule,
  Info,
} from '@mui/icons-material';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    ageGroup: '',
    preferredContact: 'email',
    urgency: 'routine',
    concerns: [] as string[],
    message: '',
    insuranceProvider: '',
    preferredDays: [] as string[],
    preferredTimes: [] as string[],
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field: string) => (event: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleCheckboxChange = (field: string, value: string) => (event: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.checked 
        ? [...prev[field as keyof typeof prev] as string[], value]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real application, this would send data to a server
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const serviceTypes = [
    'Pediatric Speech Therapy',
    'Adult Speech Therapy',
    'Stroke Rehabilitation',
    'Voice Therapy',
    'Swallowing Therapy',
    'Early Intervention',
    'Not Sure - Need Consultation',
  ];

  const concerns = [
    'Speech clarity/articulation',
    'Language development',
    'Social communication',
    'Swallowing difficulties',
    'Voice concerns',
    'Reading/literacy support',
    'Memory/cognitive issues',
    'Stroke recovery',
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const times = ['Morning (9-12)', 'Afternoon (12-4)', 'Evening (4-6)'];

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
            Get in Touch
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
            Ready to start your communication journey? We're here to help.
            Reach out for a consultation or to learn more about our services.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: 'fit-content', mb: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                  Contact Information
                </Typography>
                <List>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <Phone sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Phone"
                      secondary="(555) 123-4567"
                      secondaryTypographyProps={{ sx: { fontSize: '1.1rem', fontWeight: 500 } }}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <Email sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Email"
                      secondary="hello@samanthagoldenspeech.com"
                      secondaryTypographyProps={{ sx: { fontSize: '1.1rem', fontWeight: 500 } }}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <LocationOn sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Address"
                      secondary="West Orange, NJ Area - Serving Greater New Jersey"
                      secondaryTypographyProps={{ sx: { fontSize: '1.1rem', fontWeight: 500 } }}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>

            <Card sx={{ height: 'fit-content' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                  Office Hours
                </Typography>
                <List dense>
                  <ListItem sx={{ px: 0, py: 1 }}>
                    <ListItemIcon>
                      <AccessTime sx={{ color: 'secondary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Monday - Friday"
                      secondary="9:00 AM - 5:00 PM"
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0, py: 1 }}>
                    <ListItemIcon>
                      <AccessTime sx={{ color: 'secondary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Saturday"
                      secondary="9:00 AM - 1:00 PM"
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0, py: 1 }}>
                    <ListItemIcon>
                      <AccessTime sx={{ color: 'secondary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Sunday"
                      secondary="Closed"
                    />
                  </ListItem>
                </List>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  For urgent concerns outside of office hours, please call and leave a detailed message.
                  We will return your call within 24 hours.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ p: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: 'primary.main' }}>
                Schedule a Consultation
              </Typography>
              
              {showSuccess && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you for your message! We'll get back to you within 24 hours.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  {/* Personal Information */}
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                      Personal Information
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange('firstName')}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange('lastName')}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange('phone')}
                      required
                    />
                  </Grid>

                  {/* Service Information */}
                  <Grid item xs={12}>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                      Service Information
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Service Type</InputLabel>
                      <Select
                        value={formData.serviceType}
                        onChange={handleInputChange('serviceType')}
                        label="Service Type"
                      >
                        {serviceTypes.map((service) => (
                          <MenuItem key={service} value={service}>
                            {service}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Age Group</InputLabel>
                      <Select
                        value={formData.ageGroup}
                        onChange={handleInputChange('ageGroup')}
                        label="Age Group"
                      >
                        <MenuItem value="0-3">Early Intervention (0-3 years)</MenuItem>
                        <MenuItem value="3-5">Preschool (3-5 years)</MenuItem>
                        <MenuItem value="6-12">School Age (6-12 years)</MenuItem>
                        <MenuItem value="13-18">Adolescent (13-18 years)</MenuItem>
                        <MenuItem value="18+">Adult (18+ years)</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  {/* Areas of Concern */}
                  <Grid item xs={12}>
                    <Typography variant="body1" sx={{ fontWeight: 600, mb: 2 }}>
                      Areas of Concern (select all that apply):
                    </Typography>
                    <FormGroup>
                      <Grid container>
                        {concerns.map((concern) => (
                          <Grid item xs={12} sm={6} key={concern}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={formData.concerns.includes(concern)}
                                  onChange={handleCheckboxChange('concerns', concern)}
                                />
                              }
                              label={concern}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </FormGroup>
                  </Grid>

                  {/* Scheduling Preferences */}
                  <Grid item xs={12}>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                      Scheduling Preferences
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                      Preferred Days:
                    </Typography>
                    <FormGroup>
                      <Grid container>
                        {days.map((day) => (
                          <Grid item xs={6} sm={4} key={day}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={formData.preferredDays.includes(day)}
                                  onChange={handleCheckboxChange('preferredDays', day)}
                                />
                              }
                              label={day}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </FormGroup>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                      Preferred Times:
                    </Typography>
                    <FormGroup>
                      <Grid container>
                        {times.map((time) => (
                          <Grid item xs={12} sm={4} key={time}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={formData.preferredTimes.includes(time)}
                                  onChange={handleCheckboxChange('preferredTimes', time)}
                                />
                              }
                              label={time}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </FormGroup>
                  </Grid>

                  {/* Additional Information */}
                  <Grid item xs={12}>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                      Additional Information
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Insurance Provider (if applicable)"
                      value={formData.insuranceProvider}
                      onChange={handleInputChange('insuranceProvider')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <FormLabel component="legend">Preferred Contact Method</FormLabel>
                      <RadioGroup
                        value={formData.preferredContact}
                        onChange={handleInputChange('preferredContact')}
                        row
                      >
                        <FormControlLabel value="email" control={<Radio />} label="Email" />
                        <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Tell us more about your concerns or goals"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange('message')}
                      placeholder="Please describe any specific concerns, previous therapy experience, or goals you'd like to work on..."
                    />
                  </Grid>

                  {/* Submit */}
                  <Grid item xs={12}>
                    <Box sx={{ textAlign: 'center', mt: 3 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<Send />}
                        sx={{
                          px: 6,
                          py: 1.5,
                          fontSize: '1.1rem',
                        }}
                      >
                        Send Message
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Emergency Information */}
        <Paper 
          elevation={1} 
          sx={{ 
            mt: 6, 
            p: 3, 
            backgroundColor: 'warning.light',
            borderLeft: '4px solid',
            borderColor: 'warning.main',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Info sx={{ color: 'warning.main', mt: 0.5 }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Important Note
              </Typography>
              <Typography variant="body1">
                If you or your loved one is experiencing a medical emergency related to swallowing 
                (choking, inability to swallow, severe difficulty breathing), please call 911 
                immediately. This form is for scheduling appointments and general inquiries only.
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;