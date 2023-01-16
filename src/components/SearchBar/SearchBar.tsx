import './searchBar.scss';
import { useRef } from 'react';
import IconCross from '../IconCross/IconCross';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ setSearchValue, searchValue }: { setSearchValue: (value: string) => void; searchValue: string }) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className='search-bar'>
      <SearchIcon color='disabled' fontSize='large' />
      <input
        id='search-bar'
        ref={inputRef}
        value={searchValue}
        type='text'
        placeholder='Search...'
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <IconCross
        onClick={() => {
          setSearchValue('');
          (inputRef.current as HTMLInputElement).value = '';
        }}
      />
    </div>
  );
}

export default SearchBar;
