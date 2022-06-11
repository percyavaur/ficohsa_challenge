import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Item } from "../../core/types/item";
import { SEOLayout } from "../../layout/SEOLayout";
import animeServices from "../../services/animeServices";
import "./ItemDetail.css";

const ItemDetailPage = () => {
  let { id } = useParams();
  const [result, setResult] = useState<Item>();
  const [showMoreSynopsis, setShowMoreSynopsis] = useState<boolean>(false);

  useEffect(() => {
    if (id) getAnimeById(parseInt(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAnimeById = async (id: number) => {
    const result: any = await animeServices.getAnimeById(id);
    console.log("result.data :>> ", result.data);
    if (result) setResult(result.data);
  };

  return (
    <SEOLayout
      title={result?.title ?? "Loading..."}
      description={result?.background ?? "Loading synopsis..."}
      imageUrl={result?.images.jpg.large_image_url}
    >
      <div className="card__h flex justify-center items-center">
        {result ? (
          <div className="flex mx-auto max-w-2xl flex-col md:flex-row items-center space-x-10 border border-gray-400 rounded-lg px-4 py-6 shadow-xl">
            <picture>
              <img
                className="max-h-96"
                src={result.images.jpg.large_image_url}
                alt={`Poster ${result.title}`}
              />
            </picture>
            <div className="max-w-lg space-y-4">
              <div className="space-y-2">
                <h1 className="font-bold text-xl">{result.title}</h1>
                <div className="flex flex-row items-center space-x-1">
                  <FaStar color="orange" />
                  <p>{result.score}</p>
                </div>
              </div>
              <div>
                <h2 className={`${!showMoreSynopsis && "synopsis__truncate"}`}>
                  {result.synopsis}
                </h2>
                <span
                  className="cursor-pointer text-blue-500"
                  onClick={() => setShowMoreSynopsis(!showMoreSynopsis)}
                >
                  {showMoreSynopsis ? "Show less" : "Show more"}
                </span>
              </div>
              <ul className="grid grid-cols-2">
                <li>
                  <strong>Year:</strong> {result.year}
                </li>
                <li>
                  <strong>Duration:</strong> {result.duration}
                </li>
                <li>
                  <strong>Episodes:</strong>
                  {result.episodes}
                </li>
                <li>
                  <strong>Rating:</strong> {result.rating}
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </SEOLayout>
  );
};

export default ItemDetailPage;
