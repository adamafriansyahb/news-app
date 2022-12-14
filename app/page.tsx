import NewsList from './NewsList';
import { categories } from '../constants';
import fetchNews from '../lib/fetchNews';
import mockNewsResponse from '../mockNewsResponse.json';

type Props = {};

const HomePage = async (props: Props) => {
  const news: NewsResponse =
    mockNewsResponse || (await fetchNews(categories.join(',')));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
};

export default HomePage;
