import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { User } from '../../types';
import { capitalize } from '@mui/material';
import { useGetUsers } from '../../hooks/useGetUsers';
import { QueryClientProvider } from '@tanstack/react-query';
import { formatName } from '../../utils/formatName';


export const UserAutoComplete: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState<User[] | null>(null);
  const { data, isLoading, isError } = useGetUsers(['users']);
  
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;

  return (
    <Autocomplete
      id="dynamic-autocomplete"
      style={{ width: 340 }}
      open={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      options={Array.isArray(data) ? data : []}
      value={users}
      onChange={(event, newValue) => setUsers(newValue)}
      getOptionLabel={(option) => formatName(option.name)}
      loading={isLoading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select a User"
          variant="outlined"

        />
      )}
    />
  );
};

