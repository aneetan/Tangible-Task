import { useState } from 'react'

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
            <div className="container mx-auto px-4 py-8">
            {/* Genre Filter Buttons */}
            <div className="flex flex-wrap gap-3 mt-4 mb-8">
                {genre.map((genre) => (
                <button
                    key={genre}
                    className={`rounded-full border-2 px-5 py-2 text-sm font-medium transition-all duration-200
                    ${activeTab === genre 
                        ? "bg-blue-600 text-white border-blue-600 shadow-md" 
                        : "bg-white text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300"}`}
                    onClick={() => handleButtonClick(genre)}
                >
                    {genre}
                </button>
                ))}
            </div>

            {/* Book List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {bookList
                .filter((book) => selectedGenre === "All" || book.genre.includes(selectedGenre))
                .map((filteredBook) => (
                    <div 
                    key={filteredBook.title}
                    className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300"
                    >
                    {/* Book Cover Placeholder - replace with actual image if available */}
                    <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                        <span className="text-4xl">📖</span>
                    </div>
                    
                    <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2 hover:text-blue-600 transition-colors">
                        {filteredBook.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">by {filteredBook.author}</p>
                        
                        <div className="flex items-center justify-between mt-4">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {filteredBook.genre}
                        </span>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                            View Details →
                        </button>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            </div>
        
        </>
    )
}

export default BookGenre
