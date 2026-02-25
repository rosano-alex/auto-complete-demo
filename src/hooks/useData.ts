import { USER_DATA_URL } from "../constants";
import { User } from "../types";
import { useFetch } from "./useFetch";


export async function useData() {
  // Fetch users from the data url
  const userResponse = await useFetch<User[]>(
    USER_DATA_URL,
    {
      params: { limit: 30 },
    }
  );

  if (userResponse.result) {
    console.log('Users:', userResponse.result);
    return userResponse.result;
  } else if (userResponse.error){
    console.error('User fetch error:', userResponse.error);
    return userResponse.error;
  } else {
    return null;
  }

}
