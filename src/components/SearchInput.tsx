import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <div className="search">
      <InputGroup>
        <InputLeftElement children={<SearchIcon />} />
        <Input
          borderRadius={20}
          placeholder="Search Anime..."
          variant="filled"
        />
      </InputGroup>{" "}
    </div>
  );
};

export default SearchInput;
