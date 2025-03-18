import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  IconButton,
  InputAdornment,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

const Search: React.FC = () => {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search logic
    console.log('Search form submitted:', searchData);
  };

  // Mock data for available rides
  const availableRides = [
    {
      id: 1,
      driver: 'John Doe',
      from: 'New York',
      to: 'Boston',
      date: '2024-03-20',
      time: '09:00',
      price: 25,
      seats: 3,
    },
    {
      id: 2,
      driver: 'Jane Smith',
      from: 'New York',
      to: 'Boston',
      date: '2024-03-20',
      time: '10:30',
      price: 30,
      seats: 2,
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 6 }}>
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
            Find Your Ride
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="From"
                  name="from"
                  value={searchData.from}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="To"
                  name="to"
                  value={searchData.to}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="Date"
                  name="date"
                  type="date"
                  value={searchData.date}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarTodayIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="Time"
                  name="time"
                  type="time"
                  value={searchData.time}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccessTimeIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  startIcon={<SearchIcon />}
                >
                  Search Rides
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>

        <Typography variant="h5" gutterBottom color="primary">
          Available Rides
        </Typography>
        <Grid container spacing={3}>
          {availableRides.map((ride) => (
            <Grid item xs={12} md={6} key={ride.id}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PersonIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6">{ride.driver}</Typography>
                  </Box>
                  <Typography variant="body1" gutterBottom>
                    <LocationOnIcon color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
                    {ride.from} → {ride.to}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <CalendarTodayIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    {ride.date} at {ride.time}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Available seats: {ride.seats}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography variant="h6" color="primary" sx={{ flexGrow: 1 }}>
                    ${ride.price}
                  </Typography>
                  <Button variant="contained" color="primary">
                    Book Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Search; 