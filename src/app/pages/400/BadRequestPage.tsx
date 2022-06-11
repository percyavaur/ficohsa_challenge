import React from "react";
import { SEOLayout } from "../../layout/SEOLayout";

const BadRequestPage = () => {
  return (
    <SEOLayout title="400 - Not found" description={"Bad request page"}>
      <div className="search__h w-screen flex justify-center items-center">
        <span className="font-bold text-3xl">400 | </span>
        <span className="text-xl">Bad request</span>
      </div>
    </SEOLayout>
  );
};

export default BadRequestPage;
