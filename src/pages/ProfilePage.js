import { Helmet } from 'react-helmet-async';
import { Grid, Button, Container, Stack, Typography, TextField } from '@mui/material';
import Iconify from '../components/iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
import POSTS from '../_mock/blog';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function ProfilePage() {
  return (
    <>
      <Helmet>
        <title> User Profile</title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h3" gutterBottom>
            User Profile
          </Typography>
          <Button variant="contained" sx={{width:200}} >
            Update Profile
          </Button>
        </Stack>

        <Container sx={{width:'50%', height:200}} >
        <Stack direction="row" alignItems="center" justifyContent="space-between" mt={10} mb={0} pl={2} pr={2} >
          <Typography variant="subtitle1" gutterBottom>
            Name
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Admin
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={0} pl={2} pr={2} >
          <Typography variant="subtitle1" gutterBottom>
            Email
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            admin@hope.com
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={0} pl={2} pr={2} >
          <Typography variant="subtitle1" gutterBottom>
            Phone
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            +92 300 1234567
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={0} pl={2} pr={2} >
          <Typography variant="subtitle1" gutterBottom>
            Address
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            People's Colony # 01, D Ground, Faisalabad
          </Typography>
        </Stack>
        </Container>
         
          
      </Container>
    </>
  );
}
