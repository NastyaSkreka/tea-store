import React from 'react';
import SearchIcon from '@/public/search-icon';
import FilterICon from '@/public/filter-icon';

export default function TeaSearch() {
  return (
    <section className="mt-2">
      <div className="max-w-40 text-xl font-semibold text-teaBlue">
        Find a tea shop anywhere
      </div>
      <div className="mt-5 flex gap-2">
        <div className="relative">
          <input
            type="text"
            className="rounded-2xl bg-teaBackground p-2   pl-[50px] outline-none"
            placeholder="Search"
          />
          <div className="absolute inset-y-0  flex items-center pl-6">
            <SearchIcon />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teaBlue">
            <FilterICon />
          </div>
        </div>
      </div>
    </section>
  );
}
