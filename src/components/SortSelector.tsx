import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const orders = [
    "Relevance",
    "Date Added",
    "Name",
    "Release Date",
    "Popularity",
    "Average Rating",
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : relevance
      </MenuButton>
      <MenuList>
        {orders.map((order, index) => (
          <MenuItem onClick={() => console.log(order)} key={index}>
            {order}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
