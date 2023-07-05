import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <div className="search">
      <InputGroup>
        <InputLeftElement children={<SearchIcon />} />
        <Input
          borderRadius={20}
          variant="filled"
          placeholder="Search Anime..."
        />
      </InputGroup>{" "}
    </div>
  );
};

export default SearchInput;
