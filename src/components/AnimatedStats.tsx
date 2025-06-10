import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CountUp from 'react-countup';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  { value: 500, suffix: '+', label: 'Patients Helped', icon: '👥' },
  { value: 13, suffix: '+', label: 'Years Experience', icon: '⭐' },
  { value: 98, suffix: '%', label: 'Success Rate', icon: '📈' },
  { value: 5, suffix: '/5', label: 'Patient Rating', icon: '⭐' },
];

const AnimatedStats: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true });
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setStartCounting(true);
    }
  }, [isVisible]);

  return (
    <Box
      ref={ref}
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, rgba(107, 70, 193, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107, 70, 193, 0.1) 0%, transparent 70%)',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />
      
      <Grid container spacing={4} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid 
            item 
            xs={6} 
            md={3} 
            key={index}
            sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              transition: `all 0.8s ease-out ${index * 0.2}s`,
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h2" sx={{ fontSize: '3rem', mb: 1 }}>
                {stat.icon}
              </Typography>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 700, 
                  color: 'primary.main',
                  fontSize: { xs: '2rem', md: '3rem' },
                }}
              >
                {startCounting ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix || ''}
                  />
                ) : (
                  '0'
                )}
              </Typography>
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AnimatedStats;