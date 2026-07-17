import React from "react";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function PostsDetail() {
  let { id } = useParams();
  let [post, setPost] = useState({});
  console.log(post);

  useEffect(() => {
    async function getPost(params) {
      try {
        let res = await fetch(BASE_URL + `articles/${id}/`);
        if (!res.ok) {
          throw new Error("muammo");
        }
        let data = await res.json();
        setPost(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPost();
  }, []);

  return (
    
  );
}

export default PostsDetail;
