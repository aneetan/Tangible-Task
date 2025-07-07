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
    "description": "React is a powerful JavaScript library for building user interfaces. In this comprehensive tutorial, we'll cover everything from JSX syntax and component architecture to state management and hooks. You'll learn how to set up your first React project, create reusable components, and understand the virtual DOM. Perfect for beginners looking to enter the world of modern frontend development.",
    "date": "March 10, 2023"
  },
  {
    "id": 2,
    "title": "Advanced Tailwind CSS Techniques",
    "description": "Tailwind CSS has revolutionized how we approach styling in web applications. This guide dives deep into advanced patterns like @apply directives, custom configurations, and theming. Discover how to create complex responsive layouts, optimize your utility classes, and extend Tailwind with plugins. We'll also explore performance optimization techniques for production builds.",
    "date": "February 28, 2023"
  },
  {
    "id": 3,
    "title": "State Management in 2023",
    "description": "The state management landscape has evolved significantly. This article compares Redux, Context API, Zustand, Jotai, and Recoil, helping you choose the right solution for your project. We'll examine performance characteristics, developer experience, and use cases for each library. Learn when to use simple React state versus global state solutions, and how to architect scalable applications.",
    "date": "February 15, 2023"
  }
]

export default posts;