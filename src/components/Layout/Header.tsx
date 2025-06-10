import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon, Phone, Email } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Resources', path: '/resources' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'primary.main' }}>
        Samantha Golden, CCC-SLP
      </Typography>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.path} component={Link} to={item.path}>
            <ListItemText 
              primary={item.label}
              sx={{
                color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                fontWeight: location.pathname === item.path ? 600 : 400,
              }}
            />
          </ListItem>
        ))}
        <ListItem>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            component={Link}
            to="/appointment"
            sx={{ mt: 2 }}
          >
            Schedule Appointment
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={0} sx={{ backgroundColor: 'background.paper' }}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo/Brand */}
          <Box component={Link} to="/" sx={{ textDecoration: 'none' }}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                cursor: 'pointer',
              }}
            >
              Samantha Golden
              <Typography component="span" variant="body2" sx={{ display: 'block', color: 'text.secondary' }}>
                Speech-Language Pathologist, CCC-SLP
              </Typography>
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                    fontWeight: location.pathname === item.path ? 600 : 400,
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/appointment"
                startIcon={<Phone />}
              >
                Schedule Appointment
              </Button>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>

        {/* Contact Info Bar */}
        <Box
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            py: 0.5,
            px: 2,
            display: 'flex',
            justifyContent: 'center',
            gap: 4,
            fontSize: '0.875rem',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Phone sx={{ fontSize: '1rem' }} />
            <Typography variant="body2">(555) 123-4567</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Email sx={{ fontSize: '1rem' }} />
            <Typography variant="body2">hello@samanthagoldenspeech.com</Typography>
          </Box>
        </Box>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;