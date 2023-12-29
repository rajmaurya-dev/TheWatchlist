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
                <div key={item.id} className="bg-[#16181C]  p-4  shadow-xl backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden">
                    <h2 className="text-xl font-bold uppercase text-white mb-2">{item.title}</h2>
                    <p className="text-white font-normal mb-2">{item.genre}</p>
                    <p className="text-white font-normal mb-2">Status: {item.status}</p>
                    <p className="text-white font-normal mb-2">Rating: {item.rating || 'User has not rated this'}</p>
                    <p className="text-white font-normal mb-2">Review: {item.review || 'Review not Provided'}</p>

                </div>
            ))}
        </div>
    );
};

export default ItemCard;
