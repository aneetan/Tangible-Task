interface BookProps{
    name: string;
    author: string;
}
const BookList = () => {
    const bookList:BookProps[] = [
        {
            name : "The Power of Sub-consious Mind",
            author : "Joseph Murphy"
        },
        {
            name : "MunaMadan",
            author : "Laxmi Prasad Devkota"
        },
        {
            name : "The Alchemist",
            author : "Paulo Coelho"
        }
    ]

    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
            {bookList.map((book, index) => (
                <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-indigo-600 transition-colors">
                    {book.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">by {book.author}</p>
                    
                    {/* Additional book details */}
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>📖 320 pages</span>
                    </div>
                    
                    <button className="mt-4 w-full bg-indigo-100 text-indigo-600 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                    View Details
                    </button>
                </div>
                </div>
            ))}
            </div>

        </>
    )
}

export default BookList
