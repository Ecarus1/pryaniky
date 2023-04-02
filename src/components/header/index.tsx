import { AppBar, Toolbar, Typography } from "@mui/material";


function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h5" component="span">
          Twilight
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
}

export default Header;