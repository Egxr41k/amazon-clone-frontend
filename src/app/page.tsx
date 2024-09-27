import { Metadata } from 'next';

import Home from './Home';
import { ProductService } from '@/services/product/product.service';

export const metadat: Metadata = {
  description:
    'Free shopping on milliond of items. get the best of Shopping and Entertainment with Prime',
};

export const revalidate = 60;

async function getProduts() {
  const data = await ProductService.getAll({
    page: 1,
    perPage: 4,
    raitings: '',
  });

  return data;
}

export default async function HomePage() {
  const data = await getProduts();
  console.log(data);

  return <Home products={data.products} length={data.length} />;
}
