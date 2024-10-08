import { FC } from 'react';

import Button from '@/ui/button/Button';

interface IPagination {
  numberPages: number; // pagesCount
  changePage: (page: string) => void;
  currentPage?: number | string;
}

const Pagination: FC<IPagination> = ({
  numberPages,
  changePage,
  currentPage,
}: IPagination) => {
  return (
    <div className="text-center mt-16">
      {Array.from({ length: numberPages > 1 ? numberPages : 1 }).map(
        (_, index) => {
          const pageNumber = (index + 1).toString();
          return (
            <Button
              key={pageNumber}
              size="md"
              variant={currentPage === pageNumber ? 'orange' : 'white'}
              onClick={() => changePage(pageNumber)}
              className="mx-3"
            >
              {pageNumber}
            </Button>
          );
        },
      )}
    </div>
  );
};

export default Pagination;
