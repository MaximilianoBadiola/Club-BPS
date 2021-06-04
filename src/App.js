
import './App.css';
import Header from './Header'
import Home from './Home'
import Institution from './Institution'
import Navigation from './Navigation'
import Activities from './Activities'
import Contact from './Contact'
import News from './News'
import Footer from './Footer'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Router>
            <Header />
            <Navigation />

              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/institucional">
                  <Institution />
                </Route>
                <Route path="/actividades">
                  <Activities />
                </Route>
                <Route path="/noticias">
                  <News />
                </Route>
                <Route path="/contacto">
                  <Contact />
                </Route>
              </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
