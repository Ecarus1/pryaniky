import {useState, useCallback} from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";

interface IFormLogin {
  authSystemUser: (arg: any) => void;
}

function FormLogin({authSystemUser}: IFormLogin) {

  const [value, setValue] = useState({
    username: '',
    password: ''
  });

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    authSystemUser(value);
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={7} style={{ padding: 20, maxWidth: 400 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form>
          <Box mb={2}>
            <TextField label="Username" name="username" value={value.username} onChange={handleChange} fullWidth autoFocus required />
          </Box>
          <Box mb={2}>
            <TextField label="Password" name="password" value={value.password} onChange={handleChange} type="password" fullWidth required />
          </Box>
          <Button variant="contained" color="primary" type="submit" fullWidth onClick={handleLogin}>
            Log in
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default FormLogin;