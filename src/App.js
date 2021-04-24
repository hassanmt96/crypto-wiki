import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import Blog from './pages/Blog/Blog';
import Crypto from './pages/Crypto/Crypto';
import SignUp from './pages/SignUp/SignUp';
import Cryptochart from './pages/Dashboard/Cryptochart';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/blog' component={Blog} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/crypto' component={Crypto} />
        <Route path='/dash' component={Cryptochart} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
