import React, { useState, useContext } from 'react';
import { NetworkContext } from '../context/NetworkContext';

const UrlInput = () => {
  const { setUrl } = useContext(NetworkContext);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(inputValue);
  };

  return (
    <div className="p-4 bg-gray-800 text-white">
      <form onSubmit={handleSubmit} className="flex space-x-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter URL"
          className="flex-1 p-2 rounded bg-gray-700 text-white"
        />
        <button type="submit" className="p-2 bg-blue-600 rounded">
          Fetch
        </button>
      </form>
    </div>
  );
};

export default UrlInput;
