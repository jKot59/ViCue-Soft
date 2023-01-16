import './beerItemPage.scss';
import { Card, CardContent, CardHeader, CardMedia, Paper, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import ContentLoader from '../../components/ContentLoader/ContentLoader';

function BeerItemPage() {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery('beerList', () => fetch(`https://api.punkapi.com/v2/beers/${id}`).then((res) => res.json()));

  if (isLoading) return <ContentLoader />;
  if (isError) return <div>An error has occurred</div>;

  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className='beer-item-page'
    >
      <Card className='beer-item-page__card'>
        <Paper className='beer-item-page__paper' elevation={3}>
          <CardHeader title={data[0].name} subheader={data[0].tagline} />
          <CardMedia component='img' height='194' image={`${data[0].image_url}`} alt={`${data[0].name}`} />
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              <b>Description:</b> {data[0].description}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <b>Abv:</b> {data[0].abv}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <b>Food pairing:</b> {data[0].food_pairing}
            </Typography>
          </CardContent>
        </Paper>
      </Card>
    </motion.div>
  );
}

export default BeerItemPage;
