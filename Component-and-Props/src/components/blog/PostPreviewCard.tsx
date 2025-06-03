interface Card {
  title: string;
  articleCount: number;
  description: string;
}

const PostPreviewCard = (props: Card) => {
  return (
    <div className="group flex flex-col h-full p-6 border border-gray-200 rounded-lg 
                    hover:border-blue-300 hover:shadow-md transition-all duration-300
                    bg-white hover:bg-blue-50">
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {props.title}
        </h2>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                        bg-blue-100 text-blue-800">
          {props.articleCount} {props.articleCount === 1 ? 'article' : 'articles'}
        </span>
      </div>
      <p className="text-gray-600 mb-4 flex-grow">{props.description}</p>
      <div className="mt-auto">
        <button className="inline-flex items-center text-sm text-blue-600 font-medium 
                          group-hover:text-blue-800 hover:underline">
          Explore articles
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
               xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PostPreviewCard;