import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SEOLayout } from "../../layout/SEOLayout";
import "./SearchPage.css";

const SearchPage = () => {
  let navigate = useNavigate();
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`../items?search=${search}`, { replace: false });
  };

  return (
    <SEOLayout
      title="Ficohsa Challenge"
      description="Welcome to ficohsa challenge"
    >
      <div className="w-screen search__h flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl pb-10 max-w-xs text-center text-blue-400">Search for your favorite anime</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="search"
            autoFocus
            className="border rounded-md border-gray-400 px-4 py-2"
            placeholder="Search animes"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </SEOLayout>
  );
};

export default SearchPage;
