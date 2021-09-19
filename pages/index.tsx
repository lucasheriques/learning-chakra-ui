import { Container, Flex } from "@chakra-ui/react";
import Cart from "sections/Cart";
import Details from "sections/Details";

const IndexPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default IndexPage;
