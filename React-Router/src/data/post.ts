export interface PostProps{
    id: number;
    title: string;
    description: string;
    date: string;
}

const posts : PostProps[] = [
    {
      "id": 1,
      "title": "Getting Started with React",
      "description": "Learn the basics of React in this comprehensive tutorial...",
      "date": "March 10, 2023"
    },
    {
      "id": 2,
      "title": "Advanced Tailwind CSS Techniques",
      "description": "Discover powerful Tailwind patterns you might not know about...",
      "date": "February 28, 2023"
    },
    {
      "id": 3,
      "title": "State Management in 2023",
      "description": "Comparing different state management solutions for modern apps...",
      "date": "February 15, 2023"
    }
  ];

  export default posts;