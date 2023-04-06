import { Link } from 'react-router-dom';
import { Box, Button, Paper, Typography } from '@mui/material';

function AuthBlock() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" mb={2}>
          Вы не авторизованы
        </Typography>
        <Typography variant="body1" mb={2}>
          Чтобы использовать все возможности сайта, вам необходимо авторизоваться.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/login">
            <Button variant="contained">Войти</Button>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
}

export default AuthBlock;