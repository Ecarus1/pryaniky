import { AppBar, Toolbar, Typography, IconButton, styled  } from "@mui/material";
import { Login, Logout } from '@mui/icons-material';
import { Link } from "react-router-dom";

const WhiteIconButton = styled(IconButton)({
  color: 'white',
});

function TopContainer() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h5" component="span" sx={{ flexGrow: 1 }}>
          Twilight
        </Typography>
        
        <Link to="/login">
          <WhiteIconButton>
            <Login color="inherit"/>
          </WhiteIconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default TopContainer;