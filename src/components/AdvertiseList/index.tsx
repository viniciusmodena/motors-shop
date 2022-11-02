import { Box, Flex, Heading } from "@chakra-ui/react";
import { ProductAuctionCard, ProductCard } from "../Card";

export const AdvertiseList = ({ products, type }: any) => {
  return type === "auction" ? (
    <Box
      id="auction"
      margin={["1rem 0.75rem 1rem", "2rem 2rem 2rem", "5rem 3rem 8rem"]}
    >
      <Heading variant="h5" margin={["2rem 0", "2rem 0", "3rem 0"]}>
        Leilão
      </Heading>
      <Flex
        gridGap={["0.75rem", "0.75rem", "1.5rem"]}
        overflow="auto"
        paddingBottom="1rem"
      >
        {products &&
          products?.map((product: any) => {
            return <ProductAuctionCard key={product.id} product={product} />;
          })}
      </Flex>
    </Box>
  ) : (
    <Box
      id={type}
      margin={["1rem 0.75rem 1rem", "2rem 2rem 2rem", "5rem 3rem 8rem"]}
    >
      <Heading variant="h5" margin={["2rem 0", "2rem 0", "3rem 0"]}>
        {type === "bikes" ? "Motos" : "Carros"}
      </Heading>
      <Flex
        gridGap={["0.75rem", "0.75rem", "2rem"]}
        overflow="auto"
        paddingBottom="1rem"
      >
        {products &&
          products?.map((product: any) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </Flex>
    </Box>
  );
};
