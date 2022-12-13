'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {};

const SearchBox = (props: Props) => {
  const [input, setInput] = useState<string>('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    router.push(`/search?${input}`);
  };

  return (
    <form
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
      onSubmit={handleSearch}
    >
      <input
        className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-blue-700"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search keywords..."
        type="text"
        value={input}
      />
      <button
        className="text-blue-700 disabled:text-gray-400"
        disabled={!input}
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
