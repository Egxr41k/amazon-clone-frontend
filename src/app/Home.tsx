'use client';

import { FC } from 'react';

import Heading from '@/ui/Heading';

import { TypePaginationProducts } from '@/types/product.interface';

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
  return <Heading>{products[0].name}</Heading>;

  // return (
  //   <CatalogPagination title="Freshed products" data={{ products, length }} />
  // );
};

export default Home;
