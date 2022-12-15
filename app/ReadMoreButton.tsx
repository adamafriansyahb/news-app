'use client';

import { useRouter } from 'next/navigation';

type Props = {
  article: Article;
};

const ReadMoreButton = ({ article }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const url = `/article?${queryString}`;

    console.log('url:', url);

    router.push(url);
  };

  return (
    <button
      className="bg-blue-700 h-10 rounded-b-lg dark:text-gray-900 hover:bg-blue-800 text-white"
      onClick={handleClick}
    >
      Read More
    </button>
  );
};

export default ReadMoreButton;
