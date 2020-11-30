import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import Home from './pages/home';
import AboutUs from './pages/about-us'
import GetQuote from './pages/quote'

import Navigation from './components/navigation'

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Switch>
          <Route path="/about-us"><AboutUs /></Route>
          <Route path="/get-quote"><GetQuote /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
