import './catalog.scss';
import { Button, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Pagination, Paper, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { IBeerItem } from '../../types/IBeerItem';
import { motion } from 'framer-motion';
import ContentLoader from '../ContentLoader/ContentLoader';
import useCatalogLogic from './useCatalogLogic';

function Catalog() {
  const { isLoading, isError, data, searchValue, setSearchValue, page, setPage, setSearchParams } = useCatalogLogic();

  if (isLoading) return <ContentLoader />;
  if (isError) return <div>An error has occurred</div>;

  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className='catalog'
    >
      <div className='catalog__search-row'>
        <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />
        <Button
          className='catalog__search-button'
          variant='contained'
          onClick={() =>
            searchValue.length > 0
              ? setSearchParams({ beer_name: `${searchValue}`, page: `${page}`, per_page: `${10}` })
              : setSearchParams({ page: `${page}`, per_page: `${10}` })
          }
        >
          Search
        </Button>
      </div>
      <Grid className='catalog__grid' container spacing={0}>
        {data.map((beerItem: IBeerItem) => (
          <Grid key={beerItem.id} item md={3} className='catalog__item'>
            <CardActionArea component={NavLink} to={`/beer/${beerItem.id}`}>
              <Paper elevation={3}>
                <CardHeader title={beerItem.name} />
                <CardMedia component='img' height='194' image={`${beerItem.image_url}`} alt={`${beerItem.name}`} />
                <CardContent>
                  <Typography variant='body2' color='text.secondary'>
                    {beerItem.description.length > 140 ? beerItem.description.slice(0, 140) + '...' : beerItem.description}
                  </Typography>
                </CardContent>
              </Paper>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
      <Pagination className='catalog__pagination' count={10} page={page} color='primary' onChange={(event, page) => setPage(page)} />
    </motion.div>
  );
}

export default Catalog;
