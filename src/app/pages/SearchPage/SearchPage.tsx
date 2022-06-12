import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SEOLayout } from "../../layout/SEOLayout";
import "./SearchPage.css";

const SearchPage = () => {
  let navigate = useNavigate();
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search) navigate(`../items?search=${search}`, { replace: false });
  };

  return (
    <SEOLayout
      title="Ficohsa Challenge"
      description="Welcome to ficohsa challenge"
    >
      <div className="w-screen search__h flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl pb-10 max-w-xs text-center text-blue-400">
          Search for your favorite anime
        </h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="border rounded-md border-gray-400 px-3 py-1 bg-gray-50 flex items-center">
            <input
              type="search"
              placeholder="Search animes"
              value={search}
              className="bg-gray-50 p-1 border-transparent focus:border-transparent focus:ring-0 outline outline-offset-0 outline-0"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="border-l pl-2 border-gray-400">
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    </SEOLayout>
  );
};

export default SearchPage;
