import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Paper,
} from '@mui/material';
import { styled, Theme } from '@mui/material/styles';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SearchIcon from '@mui/icons-material/Search';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FF9800 30%, #FF5722 90%)',
  color: 'white',
  padding: theme.spacing(8, 0),
  marginBottom: theme.spacing(6),
}));

const FeaturePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  height: '100%',
  background: 'rgba(255, 152, 0, 0.05)',
  border: `1px solid ${theme.palette.primary.light}`,
  '&:hover': {
    background: 'rgba(255, 152, 0, 0.1)',
    transform: 'translateY(-4px)',
    transition: 'all 0.3s ease-in-out',
  },
}));

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Smart Ride Sharing
              </Typography>
              <Typography variant="h5" gutterBottom>
                Connect with reliable drivers and save on your travel expenses
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<SearchIcon />}
                  onClick={() => navigate('/search')}
                  sx={{ mr: 2, bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' } }}
                >
                  Find a Ride
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<DirectionsCarIcon />}
                  onClick={() => navigate('/register')}
                  sx={{ borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255, 255, 255, 0.1)' } }}
                >
                  Become a Driver
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center" color="primary">
          Why Choose SMR?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <FeaturePaper elevation={3}>
              <Typography variant="h6" gutterBottom color="primary">
                Safe & Reliable
              </Typography>
              <Typography>
                All drivers are verified and rated by our community
              </Typography>
            </FeaturePaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeaturePaper elevation={3}>
              <Typography variant="h6" gutterBottom color="primary">
                Cost-Effective
              </Typography>
              <Typography>
                Share travel costs and save money on your journey
              </Typography>
            </FeaturePaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeaturePaper elevation={3}>
              <Typography variant="h6" gutterBottom color="primary">
                Eco-Friendly
              </Typography>
              <Typography>
                Reduce your carbon footprint by sharing rides
              </Typography>
            </FeaturePaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 