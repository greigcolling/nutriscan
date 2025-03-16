import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, Paper, Title, Text, Button, 
  Group, Chip, Box, Center, useMantineTheme 
} from '@mantine/core';
import { Camera } from 'tabler-icons-react';

function ScanScreen() {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const [filters, setFilters] = useState(['lowSugar', 'highProtein']);

  const handleFilterChange = (value) => {
    if (filters.includes(value)) {
      setFilters(filters.filter(filter => filter !== value));
    } else {
      setFilters([...filters, value]);
    }
  };

  // Mock scan function - in a real app, this would activate the camera
  const handleScan = () => {
    // Simulate scanning delay
    setTimeout(() => {
      navigate('/comparison');
    }, 1000);
  };

  return (
    <Container size="sm" px="xs">
      <Paper p="md" radius="md" shadow="sm" withBorder mb="md">
        <Title order={4} mb="md">Scan Products</Title>
        
        <Box
          sx={{
            height: 200,
            border: `2px dashed ${theme.colors.gray[4]}`,
            borderRadius: theme.radius.md,
            backgroundColor: theme.colors.gray[0],
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            marginBottom: theme.spacing.md,
          }}
          onClick={handleScan}
        >
          <Camera size={48} color={theme.colors.brand[6]} />
          <Text mt="sm">Tap to scan nutrition label</Text>
        </Box>
        
        <Group position="left" spacing="xs" mb="md">
          <Chip 
            checked={filters.includes('lowSugar')} 
            onChange={() => handleFilterChange('lowSugar')}
          >
            Low sugar
          </Chip>
          <Chip 
            checked={filters.includes('highProtein')} 
            onChange={() => handleFilterChange('highProtein')}
          >
            High protein
          </Chip>
          <Chip 
            checked={filters.includes('lowSodium')} 
            onChange={() => handleFilterChange('lowSodium')}
          >
            Low sodium
          </Chip>
          <Chip 
            checked={filters.includes('glutenFree')} 
            onChange={() => handleFilterChange('glutenFree')}
          >
            Gluten free
          </Chip>
        </Group>
        
        <Button fullWidth onClick={handleScan} color="brand">
          Start Scanning
        </Button>
      </Paper>
    </Container>
  );
}

export default ScanScreen;
