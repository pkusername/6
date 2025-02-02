import { AppBar, Toolbar, Button, Avatar, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';

function Navigation() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button 
          color="inherit" 
          onClick={() => navigate('/')}
        >
          AI对话
        </Button>
        <Button 
          color="inherit" 
          onClick={() => navigate('/pdf-workspace')}
        >
          PDF工作台
        </Button>
        <div style={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
        <Avatar sx={{ ml: 1 }} />
      </Toolbar>
    </AppBar>
  );
}

export default Navigation; 