import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default () => {
  return (
    <Layout>
      <h2>About page</h2>
      <Link to="/">&larr; Home</Link>
    </Layout>
  );
};
