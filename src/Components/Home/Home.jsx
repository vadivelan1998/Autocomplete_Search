import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Heading } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getUser } from "../../Redux/User/action"
import { useEffect } from "react";
import {useToast} from "@chakra-ui/react";
export const Home = () => {
    const dispatch=useDispatch()
    const toast = useToast();
 
// debounce starts here
   const debounce = (func, delay) => {
      let timerId;
      return function (...args) {
        if (timerId) {
          clearTimeout(timerId);
        }
        timerId = setTimeout(function () {
          func(...args);
        }, delay);
      };
    };
       
    const handleChange = debounce((e) => {
         dispatch(getUser(e.target.value,toast));
       }, 1000);
// debounce ends here

useEffect(()=>{
  dispatch(getUser(''));
},[dispatch])
  return (
    <Box>
      <Heading fontFamily={"Arial, Helvetica, sans-serif"}
>Rick and Morty Search</Heading>
      <br />
      <InputGroup bg={"white"} mt={200} w={400} m={"auto"} mb={4}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          onChange={handleChange}
          border={"none"}
          borderRadius={0}
          type="text"
          placeholder="Search for a contact"
        />
      </InputGroup>
    </Box>
  );
};
