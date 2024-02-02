import { AppBar, Box, Paper, Toolbar, Typography} from '@mui/material'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function DemoForm() {
  return (
    <div className="App">
      <AppBar position="static" >
        <Toolbar>
          <Link to={'/'}>
            <ArrowBackIcon htmlColor='white'/>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Connor's Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Box p={2} height='100%'>
        <Typography variant='h4'>
            Demo Form
        </Typography> 
      </Box>
      <Box p={2} sx={{ display: 'flex' }} flexDirection={'column'} height='100%'>
        <Box flexGrow={1}>
          <Paper style={{height: 'full', padding: 2}}>
            <Box style={{height: '100%', padding: 2}}>
              
            </Box>
          </Paper>
        </Box>
      </Box>

    </div>
  );
}

export default DemoForm;
