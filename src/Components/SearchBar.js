import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const SearchBar = (props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-blue-400 outline-none focus-within:bg-blue-500 hover:bg-blue-500 rounded-md shadow-lg hover:shadow-2xl transition-all w-1/2 h-3/4 ">
        <div className="absolute p-2 flex opacity-60 items-center">
          <SearchIcon className="w-4 h-4 mr-2 text-sm" />
          Search for Custom Topic
        </div>
        <input
          className=" bg-transparent w-full h-full p-2 z-10"
          type="text"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
