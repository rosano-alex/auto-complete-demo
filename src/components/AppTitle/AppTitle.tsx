import title from './app-title.png';
  import Paper from '@mui/material/Paper';
  import { styled } from '@mui/material/styles';
  
  const PaperTitle = styled(Paper)(({ theme }) => ({
    width: 700,
    padding: 10,
    textAlign: 'center',
    margin: 30,
  }));
  
  export default function AppTitle() {
    return (        
        <PaperTitle variant="outlined"><img src={title} alt="App Title" /></PaperTitle>
    );
  }
