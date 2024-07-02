import React, { useContext } from 'react';
import { NetworkContext } from '../context/NetworkContext';

const FilterBar = () => {
  const { filters, setFilters } = useContext(NetworkContext);

  const toggleFilter = (type) => {
    setFilters((prev) =>
      prev.includes(type) ? prev.filter((f) => f !== type) : [...prev, type]
    );
  };

  return (
    <div className="p-4 bg-gray-800 text-white flex space-x-4">
      {['fetch', 'xhr'].map((type) => (
        <label key={type} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={filters.includes(type)}
            onChange={() => toggleFilter(type)}
          />
          <span>{type.toUpperCase()}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterBar;
