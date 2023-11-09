import React, { useEffect, useState } from 'react';

// Define User interface
interface User {
  id: number;
  name: string;
  email: string;
  profilePic: string;
  posts: {
    post: string;
    storyImg: string[];
    createdAt: string;
    likes: number;
    comments: { comment: string; createdAt: string }[];
    shares: number;
  }[];
  mobileNum: string;
}

export function StorySlide() {
  const [users, setUsers] = useState<User[]>([]);
  const [stories, setStories] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("users.json")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Extract and set the storyImg data from users
    const extractedStories: string[] = users
      .flatMap((user) => user.posts.flatMap((post) => post.storyImg))
      .filter((img) => img); // Filter out undefined or empty strings

    // Initialize the visible stories with the first three
    setStories(extractedStories);
  }, [users]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    const maxIndex = stories.length - 5;
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      <div className="carousel flex">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <ul className="story-list flex gap-4">
          {stories.slice(currentIndex, currentIndex + 5).map((storyImg, index) => (
            <li key={index}>
              <img className='h-32 w-28 object-cover' src={storyImg} alt={`Story ${index}`} />
            </li>
          ))}
        </ul>
        <button onClick={handleNext} disabled={currentIndex >= stories.length - 5}>
          Next
        </button>
      </div>
    </div>
  );
}
