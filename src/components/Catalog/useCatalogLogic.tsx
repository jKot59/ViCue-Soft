import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';

function useCatalogLogic() {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});

  const { isLoading, isError, data } = useQuery(['beerList', location.search], () =>
    fetch(`https://api.punkapi.com/v2/beers${location.search}`).then((res) => res.json())
  );

  useEffect(() => {
    if (location.search === '' || searchValue === '') {
      setSearchParams({ page: `${page}`, per_page: `${50}` });
    } else {
      setSearchParams({ beer_name: `${searchValue}`, page: `${page}`, per_page: `${50}` });
    }
  }, [page]);

  return {
    isLoading,
    isError,
    data,
    searchValue,
    setSearchValue,
    page,
    setPage,
    setSearchParams,
  };
}

export default useCatalogLogic;
