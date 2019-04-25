import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './scenes/Home';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
  </Layout>
);
