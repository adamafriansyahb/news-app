import { gql } from 'graphql-request';
import { sortNewsByImage } from './utils';

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // Graphql query
  const query = gql`
    query NewsArticles(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      newsArticles(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        keywords: $keywords
        sort: "published_desc"
      ) {
        data {
          author
          category
          country
          image
          description
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  // Fetch function with Next 13 caching
  const res = await fetch(
    'https://dillon.stepzen.net/api/quieting-rodent/__graphql',
    {
      method: 'POST',
      cache: isDynamic ? 'no-cache' : 'default',
      next: { revalidate: isDynamic ? 0 : 20 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords,
        },
      }),
    }
  );

  const newsResponse = await res.json();

  // Sort function by images vs images present
  const sortedNewsResponse = sortNewsByImage(newsResponse.data.newsArticles);

  return sortedNewsResponse;
};

export default fetchNews;
