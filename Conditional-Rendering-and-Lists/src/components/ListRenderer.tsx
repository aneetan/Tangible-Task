import React from 'react'

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

const ListRenderer = <T,>({items, renderItem}: ListProps<T>) => {
  return (
    <>
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {renderItem(item)}
                </li>
            ))}
        </ul>      
    </>
  )
}

export default ListRenderer
