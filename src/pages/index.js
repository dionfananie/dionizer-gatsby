import React from 'react';

import Layout from '@layouts/default';
import SEO from '@components/Seo';
import Banner from '@components/Banner';
import ImageSection from '@components/Gallery';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner title="Collaborate." />
    <ImageSection />
  </Layout>
);

export default IndexPage;
