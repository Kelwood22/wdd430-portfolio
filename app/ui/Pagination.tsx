'use client';

import Link from 'next/link';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  return (
      <div className="mt-4 flex gap-4 items-center">
          {currentPage > 1 && (
            <Link href={`/projects?page=${currentPage - 1}`}>
              Previous
            </Link>
          )}
      <span>
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link href={`/projects?page=${currentPage + 1}`}>
          Next
        </Link>
      )}
    </div>
  );
}