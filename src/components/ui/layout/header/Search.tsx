import { useRouter } from 'next/router';
import { FC, useState } from "react";
import { BsSearch } from "react-icons/bs";


const Search: FC = () => {
  const router = useRouter();

  const [term, setTerm] = useState<string>()

  return <div>
    <div className='flex'>
      <div className='bg-black rounded-l-lg py-1 px-3'>
      <input className='bg-transparent text-white outline-none w-72'
        value={term} 
        onChange={(e)=> setTerm(e.target.value)}
        placeholder='Search...'/>
      </div>
      <button className="h-10 w-10 bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors duration-200 relative rounded-r-lg"
        onClick={() => router.push(`q?term=${term}`)}>
        <BsSearch  color='white' />
      </button>
    </div>
  </div>
}

export default Search;