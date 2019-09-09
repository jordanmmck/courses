import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/portfolio/:id" component={PortfolioItem} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
