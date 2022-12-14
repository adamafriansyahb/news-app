export const sortNewsByImage = (news: NewsResponse) => {
  const newsWithImage = news.data.filter((item) => item.image !== null);
  const newsWithoutImage = news.data.filter((item) => item.image === null);

  const sortedNewsResponse = {
    ...news,
    data: [...newsWithImage, ...newsWithoutImage],
  };

  return sortedNewsResponse;
};
