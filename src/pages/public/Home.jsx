import React from "react";
import HeroHome from "../../components/HeroHome";
import WhyChoose from "../../components/WhyChoose";
import LatestPost from "../../components/LatestPost";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        let res = await fetch(BASE_URL + "articles/");

        console.log(res);
        if (!res.ok) {
          throw new Error("Olib kelishda muammo");
        }

        let data = await res.json();
        console.log(data);
        toast.success("Success");
      } catch (error) {
        console.log(error);
        toast.error("Articles kelmadi");
      }
    }

    getPosts();
  }, []);

  return (
    <>
      <HeroHome />
      <WhyChoose />
      <LatestPost />
    </>
  );
}

export default Home;
