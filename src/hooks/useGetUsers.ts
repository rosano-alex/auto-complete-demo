// hooks/usePosts.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { User } from '../types';
import { formatName } from '../utils';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

// Define fetch API based method using the axios library
const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get<User[]>(ENDPOINT);

  const enriched = data.map((user) => ({
    ...user,
    formattedName: formatName(user.name),
  }));

  return enriched.sort((a, b) =>
    a.formattedName.localeCompare(b.formattedName)
  );
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
