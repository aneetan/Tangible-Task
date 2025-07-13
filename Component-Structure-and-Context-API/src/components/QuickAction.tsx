export type QuickActionProps = {
    icon: string;
    label: string;
    action: () => void;
}

interface QuickActionCards {
    cards: QuickActionProps[];
}
const QuickAction: React.FC<QuickActionCards> = ({cards}) => {
  return (
   <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
        Quick Actions
      </h2>
      <div className="space-y-3">
        {cards.map((action, i) => (
          <button 
            key={i}
            onClick={action.action}
            className="w-full flex items-center p-3 rounded-lg hover:bg-indigo-50 transition text-left"
          >
            <span className="mr-3 text-lg">{action.icon}</span>
            <span className="text-gray-700">{action.label}</span>
            <span className="ml-auto text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuickAction
