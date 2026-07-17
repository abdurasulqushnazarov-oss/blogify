import React from "react";
import HeroHome from "../../components/HeroHome";
import WhyChoose from "../../components/WhyChoose";
import LatestPost from "../../components/LatestPost";

import { useState, useEffect } from "react";

function Home() {
  const [articles, setArticles] = useState([]);

  return (
    <>
      <HeroHome />
      <WhyChoose />
      <LatestPost />
    </>
  );
}

export default Home;
