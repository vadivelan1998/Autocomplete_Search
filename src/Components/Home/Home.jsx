import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Heading } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getUser } from "../../Redux/User/action"
import { useEffect } from "react";
export const Home = () => {
    const dispatch=useDispatch()
  
 
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
         dispatch(getUser(e.target.value));
       }, 1500);
// debounce ends here

useEffect(()=>{
  dispatch(getUser(''));
},[])
  return (
    <Box>
      <Heading>Rick and Morty Search</Heading>
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
        //    onInput={
        //     handleChange
        //     //(e) => {
        //   //   debounce(main, 1000,user);
        //   //    dispatch(getUser(e.target.value));
        //   // }
        // }
          type="text"
          placeholder="Search for a contact"
        />
      </InputGroup>
    </Box>
  );
};
