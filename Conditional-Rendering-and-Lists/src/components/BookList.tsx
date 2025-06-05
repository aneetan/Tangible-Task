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
        {bookList.map((book) => (
           <div className="bg-white rounded-lg shadow-md overflow-hidden w-64 ml-12 mb-4">
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {book.name}
                    </h3>
                    <p className="text-gray-600 text-sm">by {book.author}</p>
                </div>
            </div>
        ))}

        </>
    )
}

export default BookList
