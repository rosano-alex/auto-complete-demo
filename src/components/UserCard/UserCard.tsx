// MyCardComponent.tsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardData } from '../../types';
import { formatName } from '../../utils';

interface UserCardProps {
  data: CardData;
}

const UserCard: React.FC<UserCardProps> = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 445, margin: 10 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {formatName(data.name)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.street}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.suite}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.zipcode}
        </Typography>
        
      </CardContent>
    </Card>
  );
};

export default UserCard;
