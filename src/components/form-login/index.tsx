import {useState, useCallback} from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";

interface IFormLogin {
  authSystemUser: (arg: any) => void;
  errorMsg: string;
}

function FormLogin({authSystemUser, errorMsg}: IFormLogin) {

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

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authSystemUser(value);
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={7} style={{ padding: 20, maxWidth: 400, width: "100%"}}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <Box mb={2}>
            <TextField label="Username" name="username" value={value.username} onChange={handleChange} fullWidth autoFocus required />
          </Box>
          <Box mb={2}>
            <TextField label="Password" name="password" value={value.password} onChange={handleChange} type="password" fullWidth required />
          </Box>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Log in
          </Button>
          {errorMsg && <Typography mt={2} align="center" color="error">{errorMsg}</Typography>}
        </form>
      </Paper>
    </Box>
  );
}

export default FormLogin;