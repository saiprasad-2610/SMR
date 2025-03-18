import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
} from '@mui/material';
import { styled, Theme } from '@mui/material/styles';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

const StyledAppBar = styled(AppBar)(({ theme }: { theme: Theme }) => ({
  background: 'linear-gradient(45deg, #FF9800 30%, #FF5722 90%)',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  color: theme.palette.text.primary,
}));

interface NavButtonProps {
  component: typeof RouterLink;
  to: string;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
}

const NavButton = styled(Button)<NavButtonProps>(({ theme }: { theme: Theme }) => ({
  margin: theme.spacing(0, 1),
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Navbar: React.FC = () => {
  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <IconButton
            component={RouterLink}
            to="/"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <DirectionsCarIcon />
          </IconButton>
          
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
            }}
          >
            SMR
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <NavButton
              component={RouterLink}
              to="/search"
              startIcon={<SearchIcon />}
            >
              Search Rides
            </NavButton>
            
            <NavButton
              component={RouterLink}
              to="/profile"
              startIcon={<PersonIcon />}
            >
              Profile
            </NavButton>

            <NavButton
              component={RouterLink}
              to="/login"
              variant="outlined"
              color="inherit"
            >
              Login
            </NavButton>

            <NavButton
              component={RouterLink}
              to="/register"
              variant="contained"
              color="secondary"
            >
              Sign Up
            </NavButton>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar; 