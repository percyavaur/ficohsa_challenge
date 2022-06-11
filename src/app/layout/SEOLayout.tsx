import React from "react";
import { Helmet } from "react-helmet";

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
      <section className="p-4">{props.children}</section>
    </div>
  );
};
