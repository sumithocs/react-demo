import { useState, useEffect } from "react";

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // [] above is to determine when to rerun the effect (fetch data in this case). so simply, when the posts data is empty it will actvate the useEffect hook

  return (
    <div>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

// jsonplaceholder.typicode.com
