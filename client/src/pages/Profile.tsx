import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Tab,
  Tabs,
  TextField,
  Switch,
  FormControlLabel,
  Rating,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Alert,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';
import LanguageIcon from '@mui/icons-material/Language';
import StarIcon from '@mui/icons-material/Star';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Profile: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editData, setEditData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: 'en',
    twoFactorAuth: false,
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleEditClick = () => {
    setEditData({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
    });
    setEditDialogOpen(true);
  };

  const handleEditClose = () => {
    setEditDialogOpen(false);
  };

  const handleEditSave = () => {
    // TODO: Implement save logic
    setEditDialogOpen(false);
  };

  const handleSettingChange = (setting: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      [setting]: event.target.checked,
    });
  };

  // Mock user data
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    rating: 4.8,
    totalRides: 25,
    memberSince: 'January 2024',
    badges: ['Verified Driver', 'Top Rated', 'Early Bird'],
  };

  // Mock ride history
  const rideHistory = [
    {
      id: 1,
      type: 'Driver',
      from: 'New York',
      to: 'Boston',
      date: '2024-03-15',
      time: '09:00',
      status: 'Completed',
      price: 25,
      rating: 5,
      passengers: 3,
    },
    {
      id: 2,
      type: 'Passenger',
      from: 'Boston',
      to: 'New York',
      date: '2024-03-10',
      time: '14:30',
      status: 'Completed',
      price: 20,
      rating: 4,
      driver: 'Jane Smith',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 6 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    margin: '0 auto',
                    bgcolor: 'primary.main',
                    border: '4px solid',
                    borderColor: 'primary.light',
                  }}
                >
                  <PersonIcon sx={{ fontSize: 60 }} />
                </Avatar>
                <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
                  {userData.name}
                </Typography>
                <Typography color="text.secondary">{userData.email}</Typography>
                <Typography color="text.secondary">{userData.phone}</Typography>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 1 }}>
                  {userData.badges.map((badge) => (
                    <Chip
                      key={badge}
                      label={badge}
                      color="primary"
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    <StarIcon sx={{ color: 'warning.main', mr: 0.5, verticalAlign: 'middle' }} />
                    Rating: {userData.rating}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <DirectionsCarIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} />
                    Total Rides: {userData.totalRides}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <CalendarTodayIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} />
                    Member since: {userData.memberSince}
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  sx={{ mt: 2 }}
                  onClick={handleEditClick}
                >
                  Edit Profile
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tabValue} onChange={handleTabChange}>
                  <Tab label="Ride History" />
                  <Tab label="Settings" />
                  <Tab label="Payment Methods" />
                </Tabs>
              </Box>

              <TabPanel value={tabValue} index={0}>
                <List>
                  {rideHistory.map((ride) => (
                    <React.Fragment key={ride.id}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: 'primary.main' }}>
                            <DirectionsCarIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                              <Typography variant="subtitle1">
                                {ride.type === 'Driver' ? 'Drove' : 'Rode'} from {ride.from} to {ride.to}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="primary"
                                sx={{ ml: 1 }}
                              >
                                ${ride.price}
                              </Typography>
                              {ride.type === 'Passenger' && (
                                <Typography variant="body2" color="text.secondary">
                                  Driver: {ride.driver}
                                </Typography>
                              )}
                            </Box>
                          }
                          secondary={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                              <Typography variant="body2" color="text.secondary">
                                <CalendarTodayIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} />
                                {ride.date}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                <AccessTimeIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} />
                                {ride.time}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {ride.type === 'Driver' ? `${ride.passengers} passengers` : ''}
                              </Typography>
                              <Rating value={ride.rating} readOnly size="small" />
                              <Typography
                                variant="body2"
                                color={ride.status === 'Completed' ? 'success.main' : 'warning.main'}
                              >
                                {ride.status}
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  ))}
                </List>
              </TabPanel>

              <TabPanel value={tabValue} index={1}>
                <Box sx={{ maxWidth: 600 }}>
                  <Typography variant="h6" gutterBottom>
                    Account Settings
                  </Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.notifications}
                        onChange={handleSettingChange('notifications')}
                        color="primary"
                      />
                    }
                    label="Enable Notifications"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.darkMode}
                        onChange={handleSettingChange('darkMode')}
                        color="primary"
                      />
                    }
                    label="Dark Mode"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.twoFactorAuth}
                        onChange={handleSettingChange('twoFactorAuth')}
                        color="primary"
                      />
                    }
                    label="Two-Factor Authentication"
                  />
                  <TextField
                    select
                    fullWidth
                    label="Language"
                    value={settings.language}
                    onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                    sx={{ mt: 2 }}
                  >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Spanish</MenuItem>
                    <MenuItem value="fr">French</MenuItem>
                    <MenuItem value="de">German</MenuItem>
                  </TextField>
                </Box>
              </TabPanel>

              <TabPanel value={tabValue} index={2}>
                <Box sx={{ maxWidth: 600 }}>
                  <Typography variant="h6" gutterBottom>
                    Payment Methods
                  </Typography>
                  <Alert severity="info" sx={{ mb: 2 }}>
                    Add your payment methods to make booking rides easier
                  </Alert>
                  <Button
                    variant="outlined"
                    startIcon={<CreditCardIcon />}
                    fullWidth
                    sx={{ mb: 2 }}
                  >
                    Add New Payment Method
                  </Button>
                  <Typography variant="body2" color="text.secondary">
                    Your payment information is encrypted and secure
                  </Typography>
                </Box>
              </TabPanel>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Dialog open={editDialogOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            value={editData.name}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            value={editData.email}
            onChange={(e) => setEditData({ ...editData, email: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Phone"
            value={editData.phone}
            onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button onClick={handleEditSave} variant="contained" color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Profile;

 