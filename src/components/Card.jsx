import React from "react";
const Card = () => {
  const cardsData = [
    {
      title: "Card 1",
      description: " card 1.",
      imageUrl: "",
    },
    {
      title: "Card 2",
      description: "card 2.",
      imageUrl: "https://via.placeholder.com/400x200",
    },
    {
      title: "Card 3",
      description: "card 3.",
      imageUrl: "https://via.placeholder.com/400x200",
    },
  ];

  return (
    <div className="left-0 top-0 bg-blue-50  flex flex-wrap justify-center gap-4 p-4">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
        >
          <img
            className="w-full h-48 object-cover"
            src={card.imageUrl}
            alt={card.title}
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-700 text-base">{card.description}</p>
          </div>
          <div className="px-4 pb-4">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
