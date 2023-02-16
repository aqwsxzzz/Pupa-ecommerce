import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { ProductsProps } from "Utils/Interfaces";

interface card {
  prod: ProductsProps;
}

export const DescriptionPopover: React.FC<card> = ({ prod }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Box>
          <AiOutlineInfoCircle color={"#B83280"} />
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody mr={4}>
          <Text>{prod.description}</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
