import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  Text,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  HStack,
  Radio,
  RadioGroup,
  Box,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const AdvertiseModal = ({ isOpen, onOpen, onClose }: any) => {
  const [isAuction, setIsAuction] = useState(false);
  const [disabled, setDisabled] = useState(false);


  const options = ["Venda", "Leilao"];
  // const vehicle_options = ["Carro", "Moto"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    defaultValue: "venda",
    onChange: console.log,
  });

  const group = getRootProps();


  const input_list = [{ type: "text", id: 1, value: "" }];
  const [fields, setFields] = useState(input_list);

  const addField = () => {
    setFields((s: any) => {
      const lastId = s[s.length - 1].id;
      return [...s, { type: "text", value: "" }];
    });
  };

  const handleChange = (e: any) => {
    e.preventDefault();

    const index = e.target.id;
    setFields((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;
      newArr[index].id = e.target.id;
      console.log(newArr);
      return newArr;
    });
  };


  const schema = yup.object().shape({
    type: yup.string(),
    title: yup.string().required(),
    year: yup.number().required(),
    km: yup.number().required(),
    price: yup.number().required(),
    description: yup.string().required(),
    vehicle_type: yup.string(),
    cover_img: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onBlur" });

  const onSubmit = (values: any) => {
    console.log(values);
  };


  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      blockScrollOnMount={false}
      size="lg"
    >
      <ModalOverlay />
      <ModalContent color="greyScale.grey0">
        <ModalHeader>
          <Heading variant={"h7_500"}>Criar anúncio</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody color="greyScale.grey0">
          <form>
            {/* chamando radios */}
            <FormControl>
              <FormLabel>Tipo de anúncio</FormLabel>

              <HStack {...group} {...register("type")}>
                {options.map((value) => {
                  const radio = getRadioProps({ value });
                  return (
                    <RadioCard key={value} {...radio}>
                      {value}
                    </RadioCard>
                  );
                })}
              </HStack>
            </FormControl>

            <Text
              variant={"body-2-500"}
              color="greyScale.grey0"
              marginTop="1rem"
            >
              Informações do veículo
            </Text>
            <FormControl isRequired>
              <FormLabel>Título</FormLabel>
              <Input size="lg" fontSize="sm" {...register("title")} />
            </FormControl>

            <Flex columnGap={"10px"}>
              <Flex flexDirection={"column"}>
                <FormControl isRequired>
                  <FormLabel>Ano</FormLabel>
                  <Input size="lg" fontSize="sm" {...register("year")} />
                </FormControl>
              </Flex>

              <Flex flexDirection={"column"}>
                <FormControl isRequired>
                  <FormLabel>Quilometragem</FormLabel>
                  <Input size="lg" fontSize="sm" {...register("km")} />
                </FormControl>
              </Flex>

              <FormControl isRequired>
                <Flex flexDirection={"column"}>
                  {!isAuction ? (
                    <FormLabel>Preço</FormLabel>
                  ) : (
                    <FormLabel>Lance Inicial</FormLabel>
                  )}
                  <Input size="lg" fontSize="sm" {...register("price")} />
                </Flex>
              </FormControl>
            </Flex>

            <FormControl isRequired>
              <FormLabel>Descrição</FormLabel>
              <Textarea fontSize="sm" {...register("description")} />
            </FormControl>

            {/* <FormControl {...register("vehicle_type")}>
              <FormLabel>Tipo de veículo</FormLabel>

              <HStack {...group}>
                {vehicle_options.map((value) => {
                  const radio = getRadioProps({ value });
                  return (
                    <RadioCard key={value} {...radio}>
                      {value}
                    </RadioCard>
                  );
                })}
              </HStack>
            </FormControl> */}

            <FormControl isRequired>
              <FormLabel>Imagem da capa</FormLabel>
              <Input size="lg" fontSize="sm" {...register("cover_img")} />
            </FormControl>

            {/* <FormControl isRequired>
              <FormLabel>1° Imagem da galeria</FormLabel>
              <Input size="lg" fontSize="sm" {...register("gallery")} />
            </FormControl> */}

            <FormControl isRequired>
              {fields.map((item, index) => {
                return (
                  <>
                    <FormLabel>{index + 1}° imagem da galeria</FormLabel>

                    <Input
                      marginTop="rem"
                      size="lg"
                      fontSize="sm"
                      onChange={handleChange}
                      value={item.value}
                      id={index.toString()}
                      type={item.type}
                    />
                  </>
                );
              })}
            </FormControl>

            <Button
              onClick={() => addField()}
              margin="1rem 0"
              size="sm"
              bg="brand.brand4"
              color="brand.brand1"
            >
              Adicionar campo para imagem da galeria
            </Button>

            <ModalFooter columnGap="10px">
              <Button size="lg" fontSize="xs">
                Cancelar
              </Button>
              <Button
                onClick={handleSubmit(onSubmit)}
                disabled={disabled}
                size="lg"
                fontSize="xs"
                bg="brand.brand1"
                color="greyScale.whiteFixed"
                _disabled={{
                  bg: "#B0A6F0",
                }}
                _hover={{}}
              >
                Criar anúncio
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const RadioCard = (props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  // console.log(input);
  const checkbox = getCheckboxProps();
  

  return (
    <Box as="label" w="100%">
      <Input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="4px"
        border="1.5px solid #ADB5BD"
        color="#0B0D0D"
        fontWeight="600"
        _checked={{
          bg: "#4529E6",
          color: "#ffffff",
          borderColor: "#4529E6",
        }}
        py={"10px"}
        px={"28px"}
        textAlign="center"
      >
        {props.children}
      </Box>
    </Box>
  );
};
