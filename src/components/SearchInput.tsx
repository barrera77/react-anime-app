import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

const SearchInput = () => {
  return (
    <div>
      <InputGroup>
        <InputLeftElement children={<SearchIcon />} />
        <Input
          borderRadius={20}
          placeholder="search Anime..."
          variant="filled"
        />
      </InputGroup>{" "}
    </div>
  );
};

export default SearchInput;
