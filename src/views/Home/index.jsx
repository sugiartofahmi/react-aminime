import ContentLayout from "../../layouts/ContentLayout";
import { animeFetch, queryState } from "../../store";
import { useRecoilValue, useRecoilState } from "recoil";
import Card from "../../components/Card";
import { Suspense } from "react";
const Home = () => {
  const anime = useRecoilValue(animeFetch);
  const [query, setQuery] = useRecoilState(queryState);

  console.log(anime);
  return (
    <ContentLayout>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select an option
        </label>
        <select
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="top/anime">Top Anime</option>
          <option value="seasons/now">This Season</option>
        </select>
      </div>
      <Suspense fallback="Loading...">
        <div className="grid grid-cols-4 gap-5 p-10">
          {anime.data.map((x, i) => (
            <Card
              key={i}
              image={x.images.webp.image_url}
              name={x.title}
              episode={x.episodes}
              type={x.type}
              aired={x.aired.string}
              star={x.score}
            />
          ))}
        </div>
      </Suspense>
    </ContentLayout>
  );
};

export default Home;
