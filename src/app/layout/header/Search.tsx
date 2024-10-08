import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>();

  const router = useRouter();

  return (
    <div
      className="border border-solid border-gray/10 grid w-1/3 rounded-xl overflow-hidden"
      style={{
        gridTemplateColumns: '1fr 0.1fr',
      }}
    >
      <input
        className="bg-[#22303E] py-2 px-4 text-white outline-none w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <button
        className="bg-primary text-white flex items-center justify-center p-2.5"
        onClick={() => router.push(`/explorer?searchTerm=${searchTerm}`)}
      >
        <BsSearch />
      </button>
    </div>
  );
};

export default Search;
