import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const ThemeToggleButton = styled('button')(({ theme }) => ({
  padding: '12px 24px',
  fontSize: '16px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  transition: 'background-color 0.3s ease',

  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      dark: '#115293',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      dark: '#5d99c6',
      contrastText: '#000000',
    },
    background: {
      default: '#121212',
    },
  },
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />

      <div style={{ padding: 32 }}>
        <Typography variant="h4" gutterBottom>
          {isDarkMode ? 'Тёмная тема ' : 'Светлая тема '}
        </Typography>

        <ThemeToggleButton onClick={toggleTheme}>
          Переключить тему
        </ThemeToggleButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
