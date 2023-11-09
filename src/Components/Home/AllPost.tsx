import React, { useEffect, useState } from 'react';
interface Comment {
  comment: string;
  createdAt: string;
}
interface Post {
  post: string;
  storyImg: string[];
  createdAt: string;
  likes: number;
  comments: Comment[];
  shares: number;
}
interface User {
  id: number;
  name: string;
  email: string;
  profilePic: string;
  posts: Post[];
  mobileNum: string;
}



const AllPost = () => {
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("users.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);

        if (Array.isArray(data.users)) {
          // Flatten the array of posts
          const allUserPosts = data.users.flatMap((user: User) => user.posts);

          // Sort posts by createdAt
          const sortedPosts = allUserPosts.sort((a: Post, b: Post) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          });

          setAllPosts(sortedPosts);
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("All posts:", allPosts);

  return (
    <div>
      {allPosts.map((post: Post, index: number) => (
        <div key={index}>
          <h1>User: {post.users?.name}</h1>
          <p>Post: {post.post}</p>
          <p>Created At: {post.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default AllPost;
