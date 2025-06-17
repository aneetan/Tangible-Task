import React, { useEffect, useState } from 'react'
import { useInterval } from '../hook/useInterval';

const AutoRefreshUI = () => {
  const [data, setData] = useState([]);
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date());
  const [loading, setLoading] = useState<boolean>(false);

  //to fetch data from api
  const fetchData = async() => {
    setLoading(true);
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();

      setData(result);
      setLastRefreshed(new Date());
    } catch(error){
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  
  //fetch on mount
  useEffect(()=> {
    fetchData();
  }, [])

  //refresh every 5 sec
  useInterval(fetchData, 5000);
  
  return (
   <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-24">
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center space-x-2">
        <h2 className="text-xl font-bold text-gray-800"> Auto Refresh Data</h2>
      </div>
    </div>

  <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200 min-h-32">
    {loading ? (
      <div className="flex justify-center items-center h-24">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-200 h-8 w-8"></div>
        </div>
      </div>
    ) : (
      <div className="text-sm font-mono text-gray-700 overflow-x-auto p-2 bg-white rounded">
        {JSON.stringify(data, null, 2)}
      </div>
    )}
  </div>

  {/* Status footer */}
  <div className="flex justify-between items-center text-sm text-gray-500">
    <div className="flex items-center space-x-1">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>
        Last refreshed: {lastRefreshed ? (
          <span className="font-medium text-gray-700">
            {lastRefreshed.toLocaleTimeString()}
          </span>
        ) : (
          <span className="italic">Fetching...</span>
        )}
      </span>
    </div>
    
    {/* {autoRefreshEnabled && ( */}
      <div className="flex items-center space-x-1">
        <svg className="w-4 h-4 animate-pulse text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
        <span>Auto-refresh enabled</span>
      </div>
    {/* )} */}
  </div>
</div>
  )
}

export default AutoRefreshUI
