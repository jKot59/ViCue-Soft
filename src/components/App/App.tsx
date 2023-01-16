import './app.scss';
import Catalog from '../Catalog/Catalog';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <div className='app'>
        <Catalog />
      </div>
    </>
  );
}

export default App;
