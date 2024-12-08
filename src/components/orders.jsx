import React from 'react';
import { useNavigate } from 'react-router-dom';

function Orders({ count, setCount, secondcount, setsecondCount, thirdcount, setthirdCount }) {
  const navigate = useNavigate();

  const chickenPrice = 80;
  const beefPrice = 100;
  const veggiePrice = 70;

  const totalCost = (count * chickenPrice) + (secondcount * beefPrice) + (thirdcount * veggiePrice);

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-red-600 text-white p-4 fixed top-0 w-full z-10 shadow-md text-center">
        <div className="container mx-auto">
          <a onClick={() => navigate('/')} className="text-4xl font-bold hover:text-5xl duration-500 cursor-pointer">
            Shawarmania
          </a>
        </div>
      </header>

      <div className="container mx-auto pt-28 pb-10">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Your Order:</h2>

          
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <p className="text-2xl">Chicken Shawarma: (Rs.{chickenPrice} each)</p>
            <div className="flex items-center space-x-2">
              <button onClick={() => setCount(Math.max(count - 1, 0))} className="bg-gray-300 py-2 px-4 rounded-l-md">-</button>
              <span className="px-8 py-2 bg-red-600 text-white rounded-md">{count}</span>
              <button onClick={() => setCount(count + 1)} className="bg-gray-300 py-2 px-4 rounded-r-md">+</button>
            </div>
          </div>

          
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <p className="text-2xl">Beef Shawarma: (Rs.{beefPrice} each)</p>
            <div className="flex items-center space-x-2">
              <button onClick={() => setsecondCount(Math.max(secondcount - 1, 0))} className="bg-gray-300 py-2 px-4 rounded-l-md">-</button>
              <span className="px-8 py-2 bg-red-600 text-white rounded-md">{secondcount}</span>
              <button onClick={() => setsecondCount(secondcount + 1)} className="bg-gray-300 py-2 px-4 rounded-r-md">+</button>
            </div>
          </div>

          
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <p className="text-2xl">Veggie Shawarma: (Rs.{veggiePrice} each)</p>
            <div className="flex items-center space-x-2">
              <button onClick={() => setthirdCount(Math.max(thirdcount - 1, 0))} className="bg-gray-300 py-2 px-4 rounded-l-md">-</button>
              <span className="px-8 py-2 bg-red-600 text-white rounded-md">{thirdcount}</span>
              <button onClick={() => setthirdCount(thirdcount + 1)} className="bg-gray-300 py-2 px-4 rounded-r-md">+</button>
            </div>
          </div>

          
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => navigate('/')}
              className="bg-red-600 text-white text-2xl px-6 py-3 rounded-md font-semibold hover:bg-red-700 hover:text-sm ease-in-out duration-500 "
            >
              Back
            </button>
            <div className="text-2xl font-bold">Total Cost: Rs {totalCost.toFixed(2)}</div>
          </div>

          <button
            onClick={() => navigate('/payment')}
            className="mt-6 w-full bg-red-600 text-xl text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 hover:text-3xl ease-in-out duration-500 "
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Orders;