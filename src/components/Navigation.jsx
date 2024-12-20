import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

export const Navigation = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between" align="center">
        <Box>
          <Link to="/">
            <Button colorScheme="teal" variant="ghost" size="lg">
              Events
            </Button>
          </Link>
        </Box>
        <Box>
          <Link to="/event/1">
            <Button colorScheme="teal" variant="ghost" size="lg">
              Event
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
