import { Header as MantineHeader, Title, Button, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'tabler-icons-react';

function Header() {
  const navigate = useNavigate();
  
  return (
    <MantineHeader height={60} p="md">
      <Group position="apart">
        <Group>
          <Button 
            variant="subtle" 
            p={0} 
            onClick={() => navigate(-1)}
            style={{ display: window.location.pathname === '/' ? 'none' : 'block' }}
          >
            <ArrowLeft size={24} />
          </Button>
          <Title order={3}>NutriScan AI</Title>
        </Group>
      </Group>
    </MantineHeader>
  );
}

export default Header;
