import {Button, Box,Flex,Avatar,Text,Spacer, Divider } from "@chakra-ui/react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";


export const Detailed = ({data, onClose ,isOpen}) => {
  console.log(data,"kkkk")
   //const {name}=data.location?.name
   
//  console.log(data.location.name,"lo")
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={20}>
            <Flex bg="#FFFFFF" mb={1} alignItems="center">
              <Box display={"flex"} w="100%" alignItems="center">
                <Avatar name="Dan Abrahmov" src={data.image} size={"xl"} />
              </Box>
              <Spacer />

              <Box w="100%" alignItems="center">
                <Text fontSize="sm" fontWeight={1000} color="#333" pl={3}>
                  {data.name}
                </Text>
                <br />
                <Box display={"flex"}>
                  <Box
                    w={3}
                    h={3}
                    bg={data.status == "Alive" ? `#00DD74` : `#9EADC3`}
                    borderRadius={35}
                  ></Box>
                  <Box>
                    <Text fontSize={12} fontWeight={500} pl={2}>
                      {` ${data.status} - ${data.species}`}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Flex>
            <br />
            <Box border="1px" borderColor="gray.200"></Box>
            <br />
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem pl={6} w="100%" h="10">
                <Text color={"gray"} fontSize={12} fontWeight={500}>
                  Gender
                </Text>
                <Text fontSize={15} fontWeight={700}>
                  {data.gender}
                </Text>
              </GridItem>
              <GridItem pl={6} w="100%">
                <Text color={"gray"} fontSize={12} fontWeight={500}>
                  Location
                </Text>
                <Text fontSize={15} fontWeight={700}>
                  {data.location?.name}
                </Text>
              </GridItem>
              <GridItem pl={6} w="100%" h="10">
                <Text color={"gray"} fontSize={12} fontWeight={500}>
                  Species
                </Text>
                <Text fontSize={15} fontWeight={700}>
                  {data.species}
                </Text>
              </GridItem>
              <GridItem pl={6} w="100%" h="10">
                <Text color={"gray"} fontSize={12} fontWeight={500}>
                  Origin
                </Text>
                <Text fontSize={15} fontWeight={700}>
                  {data.origin?.name}
                </Text>
              </GridItem>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};