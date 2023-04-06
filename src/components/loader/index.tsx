import {CircularProgress, Box} from "@mui/material"

function Loader() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="300px">
      <CircularProgress size={100} sx={{mt: 8}}/>
    </Box>
  );
}

export default Loader;