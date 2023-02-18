import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography, TextField } from '@mui/material';
// components
import Iconify from '../components/iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function NewPostPage() {
  return (
    <>
      <Helmet>
        <title> New Blog Post</title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h3" gutterBottom>
            Add New Post
          </Typography>
          {/* <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Post
          </Button> */}
        </Stack>

        <Stack direction="row" alignItems="center" mb={5}>
          <Typography variant="h4" gutterBottom>
            Upload Image
          </Typography>
          <Button  variant="contained" component="label" sx={{margin:1}} >
            Upload
          <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Stack>

          <Typography variant="h4" gutterBottom>
            Enter Post Title
          </Typography>
          <TextField id="outlined-basic" variant="outlined" sx={{width:'100%', marginBottom:5}} />
          
          <Typography variant="h4" gutterBottom>
            Enter Post Details
          </Typography>
          <TextField id="outlined-basic" variant="outlined" multiline rows={10} sx={{width:'100%', marginBottom:5,}} />
          
          
          <Stack direction="row" alignItems="center" justifyContent="center" mb={5}>
          <Button variant="contained" sx={{width:400, height:50}} >
            <Typography variant='h4' >
              Post
            </Typography>
          </Button>
        </Stack>



        {/* <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid> */}
      </Container>
    </>
  );
}
