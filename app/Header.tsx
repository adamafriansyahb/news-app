'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import DarkModeButton from './DarkModeButton';
import NavLinks from './NavLinks';
import SearchBox from './SearchBox';

const Header = () => {
  const [isNavOpened, setIsNavOpened] = useState<boolean>(true);

  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        {isNavOpened ? (
          <XMarkIcon
            className="h-8 w-8 cursor-pointer"
            onClick={() => setIsNavOpened(false)}
          />
        ) : (
          <Bars3Icon
            className="h-8 w-8 cursor-pointer"
            onClick={() => setIsNavOpened(true)}
          />
        )}

        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            The <span className="underline decoration-blue-600">Serigala</span>{' '}
            News
          </h1>
        </Link>

        <div className="flex items-center justify-end space-x-3">
          <DarkModeButton />

          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 rounded-full dark:bg-slate-800">
            Subscribe
          </button>
        </div>
      </div>

      {isNavOpened && (
        <>
          <NavLinks />
          <SearchBox />
        </>
      )}
    </header>
  );
};

export default Header;
