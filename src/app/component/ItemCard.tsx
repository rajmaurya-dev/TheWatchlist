// ItemCard.js

import React from 'react';

interface Item {
    id: number;
    title: string;
    genre: string;
    status: string;
    rating: number | null; // Allow for a nullable number
    review: string | null;
    watchlsitId: number;
}

interface ItemCardProps {
    items?: Item[];
}
const ItemCard: React.FC<ItemCardProps> = ({ items }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items!.map((item) => (
                <div key={item.id} className="bg-blue-500 bg-opacity-30 p-4 rounded-md shadow-md">
                    <h2 className="text-xl font-bold uppercase text-black mb-2">{item.title}</h2>
                    <p className="text-gray-600 font-medium mb-2">{item.genre}</p>
                    <p className="text-gray-600 font-medium mb-2">Status: {item.status}</p>
                    <p className="text-gray-600 font-medium mb-2">Rating: {item.rating}</p>
                    <p className="text-gray-600 font-medium mb-2">Review: {item.review}</p>
                    <p className="text-gray-600 font-medium">Watchlist ID: {item.watchlsitId}</p>
                </div>
            ))}
        </div>
    );
};

export default ItemCard;
