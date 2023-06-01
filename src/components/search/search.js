import React from "react";

const search = (onSearchChange) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for Cities"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
    />
  );
};
export default search;
