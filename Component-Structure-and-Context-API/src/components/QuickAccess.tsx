export interface CardsProps{
    icon: string;
    title: string;
    desc: string;
}

interface QuickAccessProps{
    cards: CardsProps[];
}

const QuickAccess: React.FC<QuickAccessProps> = ({cards}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {cards.map((item, index) => (
        <div key={index} className="p-5 border rounded-lg hover:border-indigo-300 transition cursor-pointer group">
          <span className="text-2xl mb-3 block">{item.icon}</span>
          <h3 className="font-semibold text-gray-800 group-hover:text-indigo-600">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default QuickAccess
