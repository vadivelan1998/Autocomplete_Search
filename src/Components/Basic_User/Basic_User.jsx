import { useSelector } from "react-redux"
import { Box,Flex,Avatar,Text,Spacer } from "@chakra-ui/react"
//import Popup from 'reactjs-popup';
//import 'reactjs-popup/dist/index.css';
import { useDispatch } from "react-redux"
import { getPaginatedUser } from "../../Redux/User/action"

export const Basic=()=>{
  const dispatch=useDispatch()
  const user=useSelector((store)=>store.user.user)
  const info = useSelector((store) => store.user.info);
  console.log(user,info,"store")
   const scrollToEnd = () => {
// setPage((page) => page + 1);
    console.log(info.next)
    dispatch(getPaginatedUser(info.next))
   };

   window.onscroll = function () {
     console.log(window.innerHeight + document.documentElement.scrollTop);
     console.log(document.documentElement.offsetHeight);
     if (
       window.innerHeight + document.documentElement.scrollTop ===
       document.documentElement.offsetHeight
     ) {
       scrollToEnd();
     }
   };


  console.log(user,info,"kkkk")
  return (
    <Box  fontFamily={`'Source Sans Pro',sans-seriff`}  w={400} m={"auto"}  >
      {user.map((d) => {
        return (
          <>
            <Flex bg="#FFFFFF" mb={1} p={5} alignItems="center">
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
    </Box>
  );

}