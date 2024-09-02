import React from 'react';

interface BlogProps {
  id: string;
}

const Blog: React.FC<BlogProps> = ({ id }) => {
  // Your component logic goes here

  return (
    <div>
      <p>Hello world</p>
    </div>
  );
};

export default Blog;