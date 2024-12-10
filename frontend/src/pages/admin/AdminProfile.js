

import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Margin } from '@mui/icons-material';

const AdminProfile = () => {
    
        const { currentUser } = useSelector((state) => state.user);
   

    return (
        <>
          
            <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: 'white', height: '70vh',mt:'50px' ,display:'flex',flexDirection:'column',justifyContent:'speace-around'}} >
            <AccountCircleIcon color="success"  sx={{fontSize: 100,margin:'auto'}}/>
           <h1>Name: {currentUser.name}</h1>  
            <br />
            Email: {currentUser.email}
            <br />
            School: {currentUser.schoolName}

            <br />
            </Box>
      </Container>
            
        </>
    )
}

export default AdminProfile

