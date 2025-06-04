import React, { useState } from 'react'

const SearchBox = () => {
    const languages: string[] = [
        "Python", "Node", "Javascript", "Typescript",
        "React", "Next", "Java", "Spring", "MySQL", "MongoDB"
    ];

    const[searchTerm, setSearchTerm] = useState<string>("");
    const[filteredItems, setFilteredItems] = useState<string[]>(languages);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value:string = event.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = languages.filter((item) => item.toLowerCase().includes(value));

        setFilteredItems(filtered);
    };

  return (
    <>
        <div className='mx-12 border h-full px-6 py-4 rounded-lg'>
            <span> Search box:</span> <br/>
            <input
            type='text'
            placeholder='Search languages'
            value={searchTerm}
            onChange={handleSearchChange}
            className='p-2 w-[75%] border rounded-lg my-2'
            />

            {/* display filtered items */}
            <ul className="list-disc pl-10 space-y-2">
                {filteredItems.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>

            {filteredItems.length === 0 && (
                <p> No search items</p>
            )}
        </div>
        
      
    </>
  )
}

export default SearchBox
