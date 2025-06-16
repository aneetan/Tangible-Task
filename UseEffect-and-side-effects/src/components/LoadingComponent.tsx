import React, { useEffect, useState } from 'react'

interface Products{
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

const LoadingComponent = () => {
    const [data, setData] = useState<Products[]>([]);
    const [loading, setLoading] = useState<boolean> (false);

    const products = [
        {
            "id": 1,
            "title": "Wireless Bluetooth Earbuds",
            "price": 59.99,
            "description": "High-quality wireless earbuds with noise cancellation",
            "image": "https://static-01.daraz.com.np/p/b3b2b899419d75de119fb423296b23e3.jpg",
        },
        {
            "id": 2,
            "title": "Smart Watch Pro",
            "price": 129.99,
            "description": "Fitness tracker with heart rate monitor and GPS",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtr7ZMq_r1wL9VBFAwy9GnO0FHAoqzN9K1Zw&s",
        },
        {
            "id": 3,
            "title": "Portable Charger 10000mAh",
            "price": 29.99,
            "description": "Compact power bank with fast charging",
            "image": "https://cdn.thewirecutter.com/wp-content/media/2023/08/powerbanks-2048px-1508-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
        },
        {
            "id": 4,
            "title": "Wireless Keyboard & Mouse Combo",
            "price": 49.99,
            "description": "Ergonomic design with silent clicks",
            "image": "https://static-01.daraz.com.np/p/b3b2b899419d75de119fb423296b23e3.jpg",
        },
        {
            "id": 5,
            "title": "4K Ultra HD Camera",
            "price": 399.99,
            "description": "Professional camera with 20MP sensor",
            "image": "https://static-01.daraz.com.np/p/2c467bd964222a1334a1e950af4d8d5c.jpg",
        }
    ]

    useEffect(() => {
        setLoading(true)
        setTimeout(()=> {
            setData(products);
            setLoading(false);
        }, 2000)
    }, [])
 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

      {loading? (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            <span className="ml-4 text-xl">Loading products...</span>
        </div>
      ): (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Premium Collection
                    </h1>
                    <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                        Discover our carefully curated selection of high-quality products
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <div key={product.id} className="group relative bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                            <div className="aspect-w-3 aspect-h-2 bg-gray-200 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-64 object-cover group-hover:opacity-90 transition-opacity duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {product.title}
                                    </h3>
                                    <p className="text-lg font-bold text-blue-600">
                                        ${product.price.toFixed(2)}
                                    </p>
                                </div>
                                <p className="mt-2 text-gray-600 line-clamp-2">
                                    {product.description}
                                </p>
                                <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02]">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      )}
    </div>
  )
}

export default LoadingComponent
