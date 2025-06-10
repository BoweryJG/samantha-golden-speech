import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import Layout from './components/Layout/Layout';
import HomeIconic from './pages/HomeIconic';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Placeholder components for remaining pages
const Resources = () => <div style={{ padding: '2rem' }}>Resources Page - Coming Soon</div>;
const Appointment = () => <div style={{ padding: '2rem' }}>Appointment Page - Coming Soon</div>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeIconic />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;