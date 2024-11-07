import React, { useState } from 'react';

export const Page2 = () => {
  // Array of quotes
  const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Get busy living or get busy dying. – Stephen King",
    "You only live once, but if you do it right, once is enough. – Mae West",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    "The best time to plant a tree was twenty years ago. The second best time is now. – Chinese Proverb",
  ];

  // State to hold the current quote
  const [currentQuote, setCurrentQuote] = useState('');

  // Function to generate a random quote
  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <div className='absolute top-[150px] left-[290px] h-[500px] w-[900px] border-[7px] border-yellow-200 flex flex-col items-center justify-center'>
        <div className='italic text-[50px] mb-5'>
          Quote of the day:
        </div>
        <div className='text-center text-[30px] text-yellow-600'>
          {currentQuote || "Click 'Generate' to get a quote!"}
        </div>
      </div>
      
      <button 
        onClick={generateQuote}
        className='absolute top-[590px] left-[680px] border-2 px-10 border-yellow-500 rounded-md py-2 bg-yellow-200 hover:bg-yellow-300'
      >
        Generate
      </button>
    </div>
  );
};

