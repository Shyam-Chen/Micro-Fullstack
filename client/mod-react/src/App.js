import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));

const RouteExample = () => {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
      <nav>
        <Link to="/">Home</Link>
        {' / '}
        <Link to="/about">About</Link>
      </nav>

      <Suspense fallback={null}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default function App() {
  return (
    <div class="app-main">
      <RouteExample />
    </div>
  );
}
