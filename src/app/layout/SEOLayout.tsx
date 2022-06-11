import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  imageUrl?: string;
  children: React.ReactNode;
}

export const SEOLayout = (props: Props) => {
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="og:description" content={props.description} />
        <meta name="og:image" content={props.imageUrl} />
      </Helmet>
      <nav className="w-screen h-14 border shadow-sm flex items-center bg-gray-50">
        <Link to="/" className="text-blue-400 text-2xl font-bold px-4">Anime</Link>
      </nav>
      <section className="p-4">{props.children}</section>
    </div>
  );
};
