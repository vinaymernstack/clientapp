import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'
import BloagPage from './pages/BlogPage';
import BlogDetails from './pages/BlogDetails/BlogDetails';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/blog-page' component={BloagPage} />
        <Route path='/blog-details' component={BlogDetails} />
      </Layout>
    );
  }
}
