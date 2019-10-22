import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default () => {
  return (
    <Layout>
      <div>Hello Frontend Masters!</div>
      <Link to="/about">&rarr; About</Link>
    </Layout>
  );
};
