import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SEOLayout } from "../../layout/SEOLayout";
import animeServices from "../../services/animeServices";
import { Item } from "../../core/types/item";
import "./itemsPage.css";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ItemsPage = () => {
  let query = useQuery();
  const [searchText, setSearchText] = useState<string>("");
  const [result, setResult] = useState<Array<any>>([]);

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
            className="flex flex-row pt-10 border rounded-sm max-w-md p-4"
          >
            <div className="max-w-xs">
              <p>{item.title}</p>
              <p className="synopsis__truncate text-justify text-sm">
                {item.synopsis}
              </p>
              <p>{item.score}</p>
            </div>
            <picture className="pl-4">
              <img
                src={item.images.jpg.image_url}
                alt={`poster ${item.title}`}
              />
            </picture>
          </div>
        ))}
      </div>
    </SEOLayout>
  );
};

export default ItemsPage;
