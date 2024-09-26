import { Metadata } from 'next';

import Heading from '@/ui/Heading';
import Layout from '@/ui/layout/Layout';

import { NO_INDEX_PAGE } from '@/constants/app.constants';

export const metadata: Metadata = {
  title: 'Thanks',
  ...NO_INDEX_PAGE,
};

export default function ThanksPage() {
  return (
    <Layout>
      <Heading>Thanks!</Heading>
    </Layout>
  );
}
