import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
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
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gre.900");
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={6}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,{"\n"}
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            try changing the theme.
          </Button>
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
            <Text color={secondaryTextColor}>PNYJSNF85849</Text>
          </VStack>
          <Heading size="sm">$119.00</Heading>
        </Stack>
      </HStack>

      <VStack spacing={4} w="full" alignItems="stretch">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
        <Divider />
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Total</Text>
          <Heading size="lg">$162.79</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
