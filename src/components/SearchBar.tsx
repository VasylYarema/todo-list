import React from "react";
import CustomTextField from "./UI/CustomTextField";

type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <CustomTextField
      label="🔍 Task search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
