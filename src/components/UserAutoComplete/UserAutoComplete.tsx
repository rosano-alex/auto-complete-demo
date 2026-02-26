import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { User } from '../../types';
import { useGetUsers } from '../../hooks/useGetUsers';
import { formatName } from '../../utils/formatName';

interface Props {
  onSelect: (user: User | null) => void;
}

export default function UserAutoComplete({ onSelect }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState<User | null>(null);
  const { data, isLoading, isError } = useGetUsers(['users']);
  
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;

  return (
    <Autocomplete
      id="dynamic-autocomplete"
      style={{ width: 365, backgroundColor: '#daedfc', borderRadius: 3 }}
      open={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      options={Array.isArray(data) ? data : []}
      value={users}
      onChange={(event, newValue) => onSelect(newValue)}
      getOptionLabel={(option) => option.formattedName || formatName(option.name)}
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

