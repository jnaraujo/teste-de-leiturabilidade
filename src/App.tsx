import './styles/global.scss'

import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

////////////////////////////////
//////////// PAGES ////////////

const Home = lazy(() => import('./pages/Home'));
const Teste = lazy(()=> import('./pages/Teste'));

// import Home from './pages/Home';
// import Teste from './pages/Teste';

////////////////////////////////
////////////////////////////////

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={''}>
        <Switch>
          <Route path="/teste" component={Teste}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
