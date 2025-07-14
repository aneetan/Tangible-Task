import { useEffect, useState } from "react";

interface FakeQueryProps<T> {
    data: T[];
    isLoading: boolean;
    refetch: () => void;
    error?: string | null;
}

const useFakeQuery = <T = unknown>(url: string, initialData: T[] = []): FakeQueryProps<T> => {
    const [data, setData] = useState<T[]>(initialData);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] =  useState<string| null>(null);

    const fetchData = async() => {
        setIsLoading(true);
        setError(null);

        try{
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const response =  await fetch(url);

             if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data: T[] = await response.json();
            setData(data);
        } catch(err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch posts');
        } finally{
            setIsLoading(false);
        }
    }

    const refetch = () => {
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, [url]);
    
    return { data, isLoading, error, refetch };
}


export default useFakeQuery;
