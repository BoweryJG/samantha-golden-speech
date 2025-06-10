import React, { useState, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
  Avatar,
  Rating,
  Chip,
} from '@mui/material';
import {
  PlayArrow,
  Pause,
  VolumeUp,
  FormatQuote,
  NavigateBefore,
  NavigateNext,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  videoPlaceholder: string;
  tags: string[];
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Parent of 5-year-old',
    avatar: 'SM',
    rating: 5,
    text: "Samantha transformed my son's life. From barely speaking to full sentences in just 6 months. Her patience and expertise are unmatched.",
    videoPlaceholder: '🎥',
    tags: ['Pediatric', 'Language Development'],
    date: '2 weeks ago',
  },
  {
    id: '2',
    name: 'Robert Chen',
    role: 'Stroke Survivor',
    avatar: 'RC',
    rating: 5,
    text: "After my stroke, I couldn't form words. Samantha's innovative techniques and encouragement helped me regain my voice and confidence.",
    videoPlaceholder: '🎬',
    tags: ['Adult Therapy', 'Stroke Recovery'],
    date: '1 month ago',
  },
  {
    id: '3',
    name: 'Maria Rodriguez',
    role: 'Parent of twins',
    avatar: 'MR',
    rating: 5,
    text: "Both my children had different speech challenges. Samantha created personalized plans that worked perfectly for each of them.",
    videoPlaceholder: '📹',
    tags: ['Pediatric', 'Customized Care'],
    date: '3 weeks ago',
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'TBI Patient',
    avatar: 'DT',
    rating: 5,
    text: "The cognitive exercises and speech therapy combination was exactly what I needed. I'm back at work and communicating clearly.",
    videoPlaceholder: '🎞️',
    tags: ['Brain Injury', 'Cognitive Therapy'],
    date: '2 months ago',
  },
];

const TestimonialVideos: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const swiperRef = useRef<any>(null);

  return (
    <Box
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 6s ease-in-out infinite',
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: 'secondary.light',
                letterSpacing: 3,
                fontSize: '0.9rem',
                fontWeight: 600,
              }}
            >
              Success Stories
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: 'white',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              Life-Changing Results
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'grey.300',
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Real patients sharing their transformative journeys
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ position: 'relative' }}>
          <Swiper
            ref={swiperRef}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="testimonial-swiper"
            style={{ paddingBottom: '60px' }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id} style={{ width: '400px' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card
                    sx={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 4,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                    }}
                  >
                    {/* Video Placeholder */}
                    <Box
                      sx={{
                        position: 'relative',
                        height: 250,
                        background: 'linear-gradient(135deg, #6B46C1 0%, #9F7AEA 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      <Typography sx={{ fontSize: '4rem', opacity: 0.3 }}>
                        {testimonial.videoPlaceholder}
                      </Typography>
                      <IconButton
                        sx={{
                          position: 'absolute',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          '&:hover': {
                            backgroundColor: 'white',
                            transform: 'scale(1.1)',
                          },
                        }}
                      >
                        {isPlaying ? <Pause /> : <PlayArrow />}
                      </IconButton>
                      <Chip
                        icon={<VolumeUp sx={{ fontSize: 16 }} />}
                        label="With Captions"
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 10,
                          right: 10,
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          color: 'white',
                        }}
                      />
                    </Box>

                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar
                          sx={{
                            width: 50,
                            height: 50,
                            bgcolor: 'secondary.main',
                            mr: 2,
                          }}
                        >
                          {testimonial.avatar}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h6"
                            sx={{ color: 'white', fontWeight: 600 }}
                          >
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'grey.400' }}>
                            {testimonial.role}
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Rating value={testimonial.rating} readOnly size="small" />
                          <Typography variant="caption" sx={{ color: 'grey.500' }}>
                            {testimonial.date}
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ position: 'relative', mb: 2 }}>
                        <FormatQuote
                          sx={{
                            position: 'absolute',
                            top: -10,
                            left: -10,
                            fontSize: 40,
                            color: 'secondary.main',
                            opacity: 0.3,
                          }}
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'grey.200',
                            fontStyle: 'italic',
                            lineHeight: 1.8,
                            pl: 3,
                          }}
                        >
                          {testimonial.text}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {testimonial.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(236, 72, 153, 0.2)',
                              color: 'secondary.light',
                              border: '1px solid rgba(236, 72, 153, 0.3)',
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <IconButton
            className="swiper-button-prev"
            sx={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              zIndex: 10,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <NavigateBefore />
          </IconButton>
          <IconButton
            className="swiper-button-next"
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              zIndex: 10,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <NavigateNext />
          </IconButton>
        </Box>
      </Container>

      <style jsx global>{`
        .testimonial-swiper {
          padding: 40px 0;
        }
        .testimonial-swiper .swiper-slide {
          background-position: center;
          background-size: cover;
        }
        .testimonial-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #EC4899;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </Box>
  );
};

export default TestimonialVideos;