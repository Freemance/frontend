import { NextSeo } from 'next-seo';
import React from 'react';
import ISEOTypes from './types';
const SEO = ({
  title,
  description,
  canonical,
  openGraph,
  twitter,
}: ISEOTypes) => {
  <NextSeo
    title={title}
    description={description}
    canonical={canonical}
    openGraph={{
      url: openGraph.url,
      title: openGraph.title,
      description: openGraph.description,
      images: [
        {
          url: openGraph.images.url,
          width: 800,
          height: 600,
          alt: openGraph.images.alt,
          type: 'image/jpeg',
        },
      ],
      site_name: openGraph.siteName,
    }}
    twitter={{
      handle: twitter.handle,
      site: twitter.site,
      cardType: twitter.cardType,
    }}
  />;
};
export default SEO;
