import React, { useState } from 'react'

interface BookList{
    title: string,
    author: string,
    genre : string
}

const BookGenre = () => {
    const [selectedGenre, setSelectedGenre] = useState<string>("All");
    const [activeTab, setActiveTab] = useState<string>("All");

    const genre: string[] = ["All", "Romance", "Science", "Thriller"]

    const bookList : BookList[] = [
        {
        "title": "The Three-Body Problem",
        "author": "Liu Cixin",
        "genre": "Science Fiction",
        },
        {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "genre": "Science Fiction",
        },
        {
        "title": "The Love Hypothesis",
        "author": "Ali Hazelwood",
        "genre": "Romance",
        },
        {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "genre": "Romance",
        },
        {
        "title": "Gone Girl",
        "author": "Gillian Flynn",
        "genre": "Thriller",
        },
        {
        "title": "The Bourne Identity",
        "author": "Robert Ludlum",
        "genre": "Thriller",
        }
    ]

    const handleButtonClick = (genre :string) => {
        setActiveTab(genre);
        setSelectedGenre(genre);
    }

    return (
        <>
            <div className=' flex flex-row justify-start items-center mt-4'>
                {genre.map((genre) => (
                    <button
                        key={genre}
                        className={`rounded-2xl border border-gray-500 bg-blue-200 px-4 py-2 mx-2
                        ${(activeTab === genre)? "bg-blue-400" : "bg-blue-300"}`}
                        onClick={() => handleButtonClick(genre)}
                    >
                        {genre}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-4">
                {bookList
                    .filter((book) => selectedGenre === "All" || book.genre.includes(selectedGenre))
                    .map((filteredBook) => (
                    <div key={filteredBook.title}
                    className="bg-white rounded-lg shadow-md overflow-hidden w-64 mb-4">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                            {filteredBook.title}
                            </h3>
                            <p className="text-gray-600 text-sm">by {filteredBook.author}</p>
                            <span className='text-base text-gray-500'> Genre: {filteredBook.genre}</span>
                        </div>
                    </div>
                ))}
            </div>


            
             

        
        </>
    )
}

export default BookGenre
