import Heading from '@/ui/Heading';

export default function NotFound() {
  return (
    <>
      <Heading>NotFound</Heading>
      <p>Could not find requested rsource</p>
      <p>
        View{' '}
        <link href="/explorer" className="text-primary">
          all products
        </link>
      </p>
    </>
  );
}
