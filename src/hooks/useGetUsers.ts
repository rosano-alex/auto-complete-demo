// hooks/usePosts.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { User } from '../types';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

// Define fetch API based method using the axios library
const fetchUsers = async () => {
  const { data } = await axios.get<User>(ENDPOINT);
  return data;
};

// react hook for getting user data
export function useGetUsers(keys:string[]) {
  // use transtack's react query library
  const users = useQuery({
    queryKey: keys,
    queryFn: fetchUsers,
  })
  return users;
};
