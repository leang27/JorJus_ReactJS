import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Container } from 'reactstrap';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import MainCategory from './components/MainCategory';
import Category from './components/Category';
import Product from './components/Product';
import AboutUs from './components/AboutUs';
import ComingSoon from './components/ComingSoon';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Container className="mb-5" style={{minHeight : "78vh"}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/account" component={ComingSoon} />
          <Route path="/wish-list" component={ComingSoon} />
          <Route path="/cart" component={ComingSoon} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/support" component={ComingSoon} />
          <Route path="/contact-us" component={ComingSoon} />
          <Route path="/privacy" component={ComingSoon} />
          {/* <Route path="/:mainCatID/:catID/:subCatID/pid=:pid" component={Product} /> */}
          <Route path="/product/pid=:pid" component={Product} />
          {/* <Route path="/:mainCatID/:catID/:subCatID" component={Category} /> */}
          <Route path="/:mainCatID/:catID" component={Category} />
          <Route path="/:mainCatID" component={MainCategory} />
          <Route render={() => <h3>Not found</h3>} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
