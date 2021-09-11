import { BrowserRouter, Route } from 'react-router-dom';

////////////////////////////////
//////////// PAGES ////////////

import {Home} from './pages/Home';

////////////////////////////////
////////////////////////////////

import './styles/global.scss'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
    </BrowserRouter>
  );
}

export default App;
