import { Metadata } from 'next';

import ProductExplorer from './ProductExplorer';
import { NO_INDEX_PAGE } from '@/constants/app.constants';
import { ProductService } from '@/services/product/product.service';
import {
  TypeParamsFilters,
  TypeProductDataFilters,
} from '@/services/product/product.types';

export const metadata: Metadata = {
  title: 'Explorer',
  ...NO_INDEX_PAGE,
};

export const revalidate = 60;

async function getProduts(serchParams: TypeProductDataFilters) {
  const data = await ProductService.getAll(serchParams);
  console.log(data, serchParams);
  return data;
}

export default async function ExplorerPage({
  searchParams,
}: TypeParamsFilters) {
  const data = await getProduts(searchParams);
  return <ProductExplorer initialProducts={data} />;
}
