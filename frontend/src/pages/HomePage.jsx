import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product.js";
import ProductCard from "../components/ProductCard.jsx";
const HomePage = () => {

  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);
  return (
    <Container maxW="container.lx" py={12}>
      <VStack spacing={8}>
        <Text
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          fontSize={30}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Current Products 📦
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w={"full"}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text
            fontSize="xl"
            textAlign={"centte"}
            fontWeight="bold"
            color="gray.500"
          >
            No proucts found ⚠️{" "}
            <Text color="blue.500" _hover={{ textDecoration: "underline" }}>
              <Link to={"/create"}>Create product</Link>
            </Text>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;