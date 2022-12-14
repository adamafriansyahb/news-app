import { categories } from '../constants';
import fetchNews from '../lib/fetchNews';

type Props = {};

const HomePage = async (props: Props) => {
  const news: NewsResponse = await fetchNews(categories.join(','));

  return <div>Home page</div>;
};

export default HomePage;
