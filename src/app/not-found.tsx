import Heading from '@/ui/Heading';
import Layout from '@/ui/layout/Layout';

export default function NotFound() {
  return (
    <Layout>
      <Heading>NotFound</Heading>
      <p>Could not find requested rsource</p>
      <p>
        View{' '}
        <link href="/explorer" className="text-primary">
          all products
        </link>
      </p>
    </Layout>
  );
}
