import { Image } from "@chakra-ui/image";
import {
  AspectRatio,
  Box,
  Divider,
  Flex,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";

const Cart = () => {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={6}
      alignItems="flex-start"
      bg="gray.50"
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,{" "}
          <Text fontWeight="bold">try changing the theme.</Text>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={1} width={32}>
          <Image
            src="https://ae01.alicdn.com/kf/H140bd1b502bc46a2834992e43c3dae30U.jpg"
            alt="Skate Board"
          />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack spacing={0}>
            <Heading size="md">Penny board</Heading>
            <Text color="gray.600">PNYJSNF85849</Text>
          </VStack>
          <Heading size="sm">$119.00</Heading>
        </Stack>
      </HStack>

      <VStack spacing={4} w="full" alignItems="stretch">
        <HStack justifyContent="space-between">
          <Text color="gray.600">Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color="gray.600">Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color="gray.600">Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
        <Divider />
        <HStack justifyContent="space-between">
          <Text color="gray.600">Total</Text>
          <Heading size="lg">$162.79</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
