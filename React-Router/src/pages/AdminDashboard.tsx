import { useAuth } from '../hooks/useAuth';

const AdminDashboard = () => {
    const {user, logout} = useAuth();
  const stats = [
    { name: 'Total Users', value: '1,234', change: '+12%', changeType: 'increase' },
    { name: 'Total Posts', value: '567', change: '+8%', changeType: 'increase' },
    { name: 'Pending Reviews', value: '24', change: '-4%', changeType: 'decrease' },
    { name: 'Revenue', value: '$8,456', change: '+23%', changeType: 'increase' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
      <header className="bg-white shadow px-24">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-200 rounded-md text-sm font-medium" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome , {user?.username}</h1>
        <span className='px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800'>
            {user?.role}
        </span>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white shadow rounded-lg p-6">
              <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
              <p className={`mt-1 text-sm ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change} from last week
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;