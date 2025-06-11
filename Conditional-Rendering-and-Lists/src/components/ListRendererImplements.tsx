import React from 'react';
import ListRenderer from './ListRenderer';

interface User {
  img: string;
  name: string;
  email: string;
  bio: string;
}

const ListRendererImplements = () => {
  const users: User[] = [
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      bio: "Software engineer with 5 years of experience in React and TypeScript"
    },
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Bob Smith",
      email: "bob.smith@example.com",
      bio: "UX designer passionate about creating accessible user interfaces"
    },
    {
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Carol Williams",
      email: "carol.williams@example.com",
      bio: "Product manager with background in computer science"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">User Profiles</h1>
      
      <ListRenderer 
        items={users} 
        renderItem={(user) => (
          <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden mb-6 hover:-translate-y-1 transition-transform duration-200">
            <div className="w-full sm:w-40 h-40 flex-shrink-0">
              <img 
                src={user.img} 
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 flex-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
              <p className="text-sm text-gray-500 mb-3">{user.email}</p>
              <p className="text-gray-600 leading-relaxed">{user.bio}</p>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default ListRendererImplements;