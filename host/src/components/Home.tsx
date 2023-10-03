import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-6">Host App</h1>
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex gap-2">
        <button
          className="bg-blue-500 p-2 rounded text-white hover:bg-blue-600 text-sm"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <button
          className="bg-blue-500 p-2 rounded text-white hover:bg-blue-600 text-sm"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Home;
