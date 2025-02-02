import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Navigation from './components/Navigation';
import AIChat from './components/AIChat';
import PDFWorkspace from './components/PDFWorkspace';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#ffffff',
    },
  },
});

function App() {
  console.log('App组件渲染');

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navigation />
          <Routes>
            <Route path="/" element={<AIChat />} />
            <Route path="/pdf-workspace" element={<PDFWorkspace />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 