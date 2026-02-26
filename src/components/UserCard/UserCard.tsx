// A simple card component to display user information`
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {  User } from '../../types';
import { formatName } from '../../utils';


interface UserCardProps {
  data: User | null;
}

const UserCard: React.FC<UserCardProps> = ({ data }) => {
   if (!data) return <div></div>;

  return (
    <Card sx={{ margin: 4 , backgroundColor: '#176098', color: 'white', padding: 5, borderRadius: 2, textAlign: 'left' }}>
      <CardContent>
        <Typography fontWeight="bold">
          {formatName(data.name)}
        </Typography>
        <Typography variant="body2" color="white">
          {data.address.street}
        </Typography>
          <Typography variant="body2" color="white">
            {data.address.suite != null ? data.address.suite : ''}
            </Typography>
        <Typography variant="body2" color="white">
          {data.address.zipcode}
        </Typography>
        
      </CardContent>
    </Card>
  );
};

export default UserCard;
