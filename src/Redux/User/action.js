
import axios from "axios"
export const ADDUSER = "ADDUSER";
export const ADDPAGINATEDUSER = "ADDPAGINATEDUSER";



export const addUser = (val) => {
  return {
    type: ADDUSER,
    payload: val,
  };
};
export const addPaginatedUser = (val) => {
  return {
    type: ADDPAGINATEDUSER,
    payload: val,
  
  };
};

export const getUser = (val,toast) => async (dispatch) => {
     try {
       const response = await axios.get(
         `https://rickandmortyapi.com/api/character/?name=${val}&page=1`
       );
       
          dispatch(addUser(response.data));
     
      
      
     } catch (error) {
       console.error(error);
       toast({
         title: "404 Not Found",
         description: "No User Found",
         status: "error",
         duration: 4000,
         isClosable: true,
       });
     }
};

export const getPaginatedUser = (url,toast) => async (dispatch) => {
  try {
    const response = await axios.get(url);
    dispatch(addPaginatedUser(response.data));
  } catch (error) {
    console.error(error);
     toast({
         title: "You Reached To The End Page",
         status: "info",
         duration: 4000,
         isClosable: true,
       });
  }
};
