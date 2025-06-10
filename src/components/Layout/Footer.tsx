import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        pt: 6,
        pb: 3,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand & Description */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Samantha Golden
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ color: 'secondary.light' }}>
              Speech-Language Pathologist, CCC-SLP
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
              Providing evidence-based speech and language therapy for children and adults. 
              Helping individuals achieve their communication goals through personalized, 
              compassionate care.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Resources', path: '/resources' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  color="inherit"
                  underline="hover"
                  sx={{ '&:hover': { color: 'secondary.light' } }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                'Pediatric Speech Therapy',
                'Adult Speech Therapy',
                'Stroke Rehabilitation',
                'Swallowing Therapy',
                'Voice Therapy',
                'Early Intervention',
              ].map((service) => (
                <Typography key={service} variant="body2" color="inherit">
                  {service}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ fontSize: '1.2rem' }} />
                <Typography variant="body2">(555) 123-4567</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ fontSize: '1.2rem' }} />
                <Typography variant="body2">hello@samanthagoldenspeech.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOn sx={{ fontSize: '1.2rem', mt: 0.25 }} />
                <Typography variant="body2">
                  West Orange, NJ Area<br />
                  Serving Greater New Jersey
                </Typography>
              </Box>
            </Box>

            <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 600 }}>
              Office Hours
            </Typography>
            <Typography variant="body2">
              Monday - Friday: 9:00 AM - 5:00 PM<br />
              Saturday: 9:00 AM - 1:00 PM<br />
              Sunday: Closed
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="inherit">
            © 2024 Samantha Golden Speech Therapy. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>
              Privacy Policy
            </Link>
            <Link color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>
              Terms of Service
            </Link>
            <Link color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>
              HIPAA Notice
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;