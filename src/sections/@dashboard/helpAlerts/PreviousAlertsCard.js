import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent } from '@mui/material';
import { fDate } from '../../../utils/formatTime';
import { fShortenNumber } from '../../../utils/formatNumber';
import SvgColor from '../../../components/svg-color';
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const StyledTitle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

// ----------------------------------------------------------------------

export default function PreviousAlertsCard({ post, index }) {
  const { cover, title, view, comment, share, author, createdAt } = post;

  return (
    <Grid item xs={12} sm={ 12} md={3}>
      <Card sx={{ position: 'relative' }}>

        <CardContent
          sx={{
              bottom: 0,
              width: '100%',
              position: 'absolute',
          }}
        >
          <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
            {fDate(createdAt)}
          </Typography>

          <StyledTitle
            color="inherit"
            variant="subtitle2"
            underline="hover"
            sx={{
                color: 'common.white',
            }}
          >
            {title}
          </StyledTitle>
        </CardContent>
      </Card>
    </Grid>
  );
}
