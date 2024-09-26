'use client';

import { FC } from 'react';

import CatalogPagination from '@/ui/catalog/CatalogPagination';
import Layout from '@/ui/layout/Layout';

import { TypePaginationProducts } from '@/types/product.interface';

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
  return (
    <Layout>
      <CatalogPagination title="Freshed products" data={{ products, length }} />
    </Layout>
  );
};

export default Home;
