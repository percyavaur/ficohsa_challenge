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
      <div className="w-screen search__h flex justify-center items-center ">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            className="border"
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
