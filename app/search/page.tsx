import fetchNews from '../../lib/fetchNews';
import NewsList from '../NewsList';

type Props = {
  searchParams?: { term: string };
};

const SearchPage = async ({ searchParams }: Props) => {
  const news: NewsResponse = await fetchNews(
    'general',
    searchParams?.term,
    true
  );

  return (
    <div>
      <h1 className="header-title">Search result for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default SearchPage;
