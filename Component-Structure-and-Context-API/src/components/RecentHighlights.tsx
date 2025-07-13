export type HighlightProps = {
    emoji: string;
    title: string;
    progress: number;
}

interface HighlightCard{
    cards: HighlightProps[];
}
const RecentHighlights: React.FC<HighlightCard> = ({cards}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        Your Highlights
      </h2>
      <div className="space-y-4">
        {cards.map((item, i) => (
          <div key={i} className="group">
            <div className="flex items-center mb-1">
              <span className="mr-3 text-lg">{item.emoji}</span>
              <span className="text-gray-700 flex-grow">{item.title}</span>
              <span className="text-sm text-gray-500">{item.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  item.progress === 100 ? 'bg-green-500' : 
                  item.progress > 50 ? 'bg-indigo-500' : 'bg-amber-400'
                }`} 
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentHighlights
