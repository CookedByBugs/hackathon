import { Input } from "antd";
import React from "react";

const SearchBar = () => {
  return (
    <div className="mx-auto !max-w-[500px]">
      <div>
        <div className="text-3xl text-center my-2">
          Search categories with ease...
        </div>
        <div className="flex">
          <Input
            size="large"
            className="!rounded-s-full !p-3"
            placeholder="Search"
          />
          <div>
            <button className="btn-primary px-3 !rounded-e-full h-full">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
