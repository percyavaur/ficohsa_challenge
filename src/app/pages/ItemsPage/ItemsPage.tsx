import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SEOLayout } from "../../layout/SEOLayout";
import animeServices from "../../services/animeServices";
import { Item } from "../../core/types/item";
import "./itemsPage.css";
import { FaSadTear, FaStar } from "react-icons/fa";
import Skeleton from "./components/Skeleton";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ItemsPage = () => {
  let query = useQuery();
  const [searchText, setSearchText] = useState<string>("");
  const [result, setResult] = useState<Array<Item>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let search = query.get("search");
    if (search) {
      setSearchText(search);
      searchAnime(search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchAnime = async (search: string) => {
    const result: any = await animeServices.searchAnime(search, 4);
    setLoading(false);
    setResult(result.data);
  };

  return (
    <SEOLayout
      title={`Search ${searchText}`}
      description={`Looking for ${searchText}`}
    >
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {loading ? (
            <>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
              <Skeleton></Skeleton>
            </>
          ) : null}
          {result.map((item: Item, index) => (
            <div
              key={index}
              className="border border-gray-400 shadow-md rounded-md max-w-md p-4 relative bg-gray-50"
            >
              <div className="flex flex-row pb-6 justify-between">
                <div className="max-w-xs">
                  <p className="font-bold ">{item.title}</p>
                  <p className="synopsis__truncate text-justify text-sm">
                    {item.synopsis}
                  </p>
                </div>
                <picture className="pl-4">
                  <img
                    style={{ maxWidth: "120px" }}
                    src={item.images.jpg.image_url}
                    alt={`poster ${item.title}`}
                  />
                </picture>
              </div>
              <div className="flex flex-row items-center space-x-1 absolute left-2 bottom-2">
                <FaStar color="orange" />
                <p>{item.score}</p>
              </div>
              <Link
                className="absolute right-2 bottom-2 font-semibold text-blue-500 self-end"
                to={`/items/${item.mal_id}`}
              >
                Ver más
              </Link>
            </div>
          ))}

          {result.length === 0 && !loading ? (
            <div className="items__h w-screen flex flex-col md:flex-row items-center justify-center">
              <FaSadTear
                className="mb-8 mr-0 md:mr-2"
                color="rgb(96 165 250)"
                size={40}
              />
              <p className="font-bold text-3xl pb-10 max-w-md text-center text-blue-400">
                we did not find the anime you are looking for
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </SEOLayout>
  );
};

export default ItemsPage;
