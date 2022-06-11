import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SEOLayout } from "../../layout/SEOLayout";
import animeServices from "../../services/animeServices";
import { Item } from "../../core/types/item";
import "./itemsPage.css";
import { FaStar } from "react-icons/fa";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ItemsPage = () => {
  let query = useQuery();
  const [searchText, setSearchText] = useState<string>("");
  const [result, setResult] = useState<Array<Item>>([]);

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
    console.log("result :>> ", result);
    setResult(result.data);
  };

  return (
    <SEOLayout
      title={`Search ${searchText}`}
      description={`Looking for ${searchText}`}
    >
      <div className="grid grid-cols-4 gap-4">
        {result.map((item: Item, index) => (
          <div
            key={index}
            className="border border-gray-400 shadow-md rounded-md max-w-md p-4 relative"
          >
            <div className="flex flex-row pb-6">
              <div className="max-w-xs">
                <p className="font-bold ">{item.title}</p>
                <p className="synopsis__truncate text-justify text-sm">
                  {item.synopsis}
                </p>
              </div>
              <picture className="pl-4">
                <img
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
      </div>
    </SEOLayout>
  );
};

export default ItemsPage;
