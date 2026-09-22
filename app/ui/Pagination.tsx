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
      <div className="mt-6 flex justify-center gap-4 items-center">
          {currentPage > 1 && (
        <Link href={`/projects?page=${currentPage - 1}`}
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Previous
            </Link>
          )}
      <span>
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link href={`/projects?page=${currentPage + 1}`}
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Next
        </Link>
      )}
    </div>
  );
}