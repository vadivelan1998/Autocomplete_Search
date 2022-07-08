import { useSelector } from "react-redux"
import { useState } from "react"
import { Box,Flex,Avatar,Text,Spacer } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { getPaginatedUser } from "../../Redux/User/action"
import { useDisclosure } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { useToast } from "@chakra-ui/react"
const Detailed = React.lazy(() => import("../Detailed_user/Detailed_user"));


export const Basic=()=>{
    const toast = useToast();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((store) => store.user.user);
  const info = useSelector((store) => store.user.info);
  const [singleData,setSingleData]=useState({})


  // Infinite Scrolling starts here
  const scrollToEnd = () => {
    dispatch(getPaginatedUser(info.next,toast));
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

  return (
    <Box fontFamily={"Arial, Helvetica, sans-serif"} w={400} m={"auto"}>
      {user.map((d) => {
        return (
          <>
            <Flex
              onClick={() => {
                setSingleData(d);
                onOpen();
              }}
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
                  bg={d.status === "Alive" ? `#00DD74` : `#9EADC3`}
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

      <Suspense fallback={<div>Loading...</div>}>
        <Detailed data={singleData} isOpen={isOpen} onClose={onClose} />
      </Suspense>
    </Box>
  );
}