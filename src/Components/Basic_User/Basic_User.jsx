import { useSelector } from "react-redux"
import { useState } from "react"
import { Box,Flex,Avatar,Text,Spacer } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { getPaginatedUser } from "../../Redux/User/action"
import { useToast,Button } from "@chakra-ui/react";
import { Detailed } from "../Detailed_user/Detailed_user";
import { useDisclosure } from "@chakra-ui/react";


export const Basic=()=>{
  const toast =useToast()
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((store) => store.user.user);
  const info = useSelector((store) => store.user.info);
  const [singleData,setSingleData]=useState({})
  //console.log(singleData)

  // Infinite Scrolling starts here
  const scrollToEnd = () => {
    dispatch(getPaginatedUser(info.next));
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };
  //  Infinite Scrolling ends here
function handle(d){
  console.log(d)
 // <Detailed/>
};
  return (
    <Box fontFamily={`'Source Sans Pro',sans-seriff`} w={400} m={"auto"}>
      {user.map((d) => {
        return (
          <>
            <Flex
              onClick={()=>{
                setSingleData(d)
                onOpen()
              }
                }
              bg="#FFFFFF"
              mb={1}
              p={5}
              alignItems="center"
            >
              <Box display={"flex"} w="100%" alignItems="center">
                <Avatar name="Dan Abrahmov" src={d.image} size="xs" />
                <Text fontSize="sm" fontWeight={700} color="#333" pl={3}>
                  {d.name}
                </Text>
              </Box>
              <Spacer />

              <Box w="100%" display={"flex"} alignItems="center">
                <Box
                  bg={d.status == "Alive" ? `#00DD74` : `#9EADC3`}
                  borderRadius={5}
                  p={1}
                ></Box>
                <Text fontSize={12} fontWeight={600} pl={2}>
                  {` ${d.status} - ${d.species}`}
                </Text>
              </Box>
            </Flex>
          </>
        );
      })}

      <Detailed data={singleData} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}