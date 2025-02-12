"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleSearch}
        className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
                   focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
    </div>
  );
};

export default SearchBar;
