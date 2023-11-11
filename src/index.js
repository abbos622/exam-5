import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import reducer, {initilasState} from './reducer';
import { AppProvider } from './AppProvider';



import { ToastContainer } from 'react-toastify';
const App = lazy(() =>
    import ('./App'))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppProvider reducer={reducer} initalState={initilasState}>
      <Suspense fallback={<p>Loading...</p>}>
        <App/>
        <ToastContainer/>
      </Suspense>
    </AppProvider>
  </BrowserRouter>
);


