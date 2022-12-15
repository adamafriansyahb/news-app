import { categories } from '../../../constants';
import fetchNews from '../../../lib/fetchNews';
import NewsList from '../../NewsList';

type Props = {
  params: { category: Category };
};

const NewsCategoryPage = async ({ params: { category } }: Props) => {
  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <h1 className="header-title">{category}</h1>
      <NewsList news={news} />
    </div>
  );
};

export const generateStaticParams = async () => {
  return categories.map((category) => ({
    category,
  }));
};

export default NewsCategoryPage;
