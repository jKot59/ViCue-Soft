import './contentLoader.scss';
import { CircularProgress } from '@mui/material';

function ContentLoader() {
  return (
    <div className='content-loader'>
      <CircularProgress />
      Loading...
    </div>
  );
}

export default ContentLoader;
